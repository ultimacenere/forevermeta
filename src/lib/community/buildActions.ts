"use server";

import { revalidatePath } from "next/cache";
import { locales, type Locale } from "@/lib/i18n";
import { currentUser } from "@/lib/supabase/server";
import type { BuildRow } from "@/lib/supabase/database";
import { codeFromInput, decodeBuild, encodeBuild } from "@/lib/builder/code";
import { totalPoints } from "@/lib/builder/engine";
import { isClassId } from "@/lib/data/classes";
import { racesOfClass } from "@/lib/data/races";
import { talentsOf } from "@/lib/data/talents";
import { BUILDS_PER_USER, BUILD_SLUG_RE, buildPath, checkFields, newSlug, tableMissing, type BuildFields } from "./builds";

/**
 * Server Action delle build pubblicate (23/10/2026): pubblicazione, modifica, stato, eliminazione e voto. Le regole dei
 * campi stanno in builds.ts (uguali ai vincoli dello schema); il codice della build si rilegge con il motore e si
 * salva nella forma canonica, con classe, razza, livello e punti già estratti. Chi può scrivere lo decide RLS.
 */
export type BuildActionState = { ok?: boolean; href?: string; error?: string; field?: string };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function localeOf(formData: FormData): Locale {
  const l = String(formData.get("locale") ?? "en");
  return (locales as readonly string[]).includes(l) ? (l as Locale) : "en";
}

function revalidateBuildPaths(slug?: string) {
  for (const l of locales) {
    revalidatePath(`/${l}/builds`);
    revalidatePath(`/${l}/account`);
    revalidatePath(`/${l}/sitemap-builds.xml`);
    if (slug) revalidatePath(`/${l}${buildPath(slug)}`);
  }
}

/** Legge e controlla il codice: classe dal modulo, build dal motore (pulita), punti e razza. */
function readCode(formData: FormData): { error: string; field?: string } | { classId: string; code: string; raceId: string | null; level: number; points: number; gameVersion: string } {
  const cls = String(formData.get("class") ?? "");
  if (!isClassId(cls)) return { error: "invalidCode", field: "code" };
  const found = codeFromInput(String(formData.get("code") ?? ""));
  const data = talentsOf(cls);
  if (!found || !data) return { error: "invalidCode", field: "code" };
  const build = decodeBuild(data, found, racesOfClass(cls).map((r) => r.id));
  if (!build) return { error: "invalidCode", field: "code" };
  const points = totalPoints(data, build.ranks);
  if (points === 0) return { error: "noPoints", field: "code" };
  return { classId: cls, code: encodeBuild(data, build), raceId: build.raceId, level: build.level, points, gameVersion: data.gameVersion };
}

function fieldsOf(formData: FormData) {
  const keys: (keyof BuildFields)[] = ["name", "purpose", "guideLang", "summary", "plan", "strengths", "weaknesses", "notes"];
  const input: Record<string, unknown> = {};
  for (const k of keys) input[k] = formData.get(k) ?? "";
  return checkFields(input, locales);
}

function writeError(error: { code?: string; message: string } | null): BuildActionState {
  if (tableMissing(error)) return { error: "unavailable" };
  if (error?.message?.includes("build limit")) return { error: "limit" };
  if (error?.code === "23514") return { error: "invalid" };
  if (error?.code === "42501") return { error: "forbidden" };
  return { error: "db" };
}

export async function publishBuild(_prev: BuildActionState, formData: FormData): Promise<BuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const parsed = fieldsOf(formData);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  const code = readCode(formData);
  if ("error" in code) return code;
  const { count, error: countError } = await supabase.from("community_builds").select("id", { count: "exact", head: true }).eq("owner", user.id).eq("status", "published");
  if (countError) return writeError(countError);
  if ((count ?? 0) >= BUILDS_PER_USER) return { error: "limit" };
  const f = parsed.fields;
  const row = {
    owner: user.id,
    name: f.name,
    class_id: code.classId,
    race_id: code.raceId,
    level: code.level,
    code: code.code,
    points: code.points,
    purpose: f.purpose,
    guide_lang: f.guideLang,
    summary: f.summary,
    plan: f.plan,
    strengths: f.strengths,
    weaknesses: f.weaknesses,
    notes: f.notes,
    game_version: code.gameVersion,
    status: "published",
  };
  for (let attempt = 0; attempt < 6; attempt++) {
    const slug = newSlug(f.name);
    const { data, error } = await supabase
      .from("community_builds")
      .insert({ ...row, slug })
      .select("slug")
      .single();
    if (!error && data) {
      revalidateBuildPaths(slug);
      return { ok: true, href: `/${locale}${buildPath(slug)}?new=1` };
    }
    if (error?.code !== "23505") return writeError(error);
  }
  return { error: "db" };
}

export async function updateBuild(_prev: BuildActionState, formData: FormData): Promise<BuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const id = String(formData.get("id") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const parsed = fieldsOf(formData);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  const f = parsed.fields;
  const patch: Partial<BuildRow> = { name: f.name, purpose: f.purpose, guide_lang: f.guideLang, summary: f.summary, plan: f.plan, strengths: f.strengths, weaknesses: f.weaknesses, notes: f.notes };
  // il codice si cambia solo se ne arriva uno nuovo (il modulo lo manda sempre: quello della build o uno incollato)
  if (String(formData.get("code") ?? "").trim()) {
    const code = readCode(formData);
    if ("error" in code) return code;
    Object.assign(patch, { class_id: code.classId, race_id: code.raceId, level: code.level, code: code.code, points: code.points, game_version: code.gameVersion });
  }
  const { data, error } = await supabase.from("community_builds").update(patch).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  const slug = (data as { slug: string }).slug;
  revalidateBuildPaths(slug);
  return { ok: true, href: `/${locale}${buildPath(slug)}` };
}

/** Nasconde o rimette online una build propria. */
export async function setBuildStatus(formData: FormData): Promise<BuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!UUID_RE.test(id) || (status !== "published" && status !== "hidden")) return { error: "invalid" };
  const { data, error } = await supabase.from("community_builds").update({ status }).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  revalidateBuildPaths((data as { slug: string }).slug);
  return { ok: true };
}

/** Elimina una build propria (i voti cadono con lei). */
export async function deleteBuild(formData: FormData): Promise<BuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const slug = String(formData.get("slug") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const { error } = await supabase.from("community_builds").delete().eq("id", id).eq("owner", user.id);
  if (error) return writeError(error);
  revalidateBuildPaths(BUILD_SLUG_RE.test(slug) ? slug : undefined);
  return { ok: true, href: `/${localeOf(formData)}/account#builds` };
}

/** Voto 1–5 a una build (upsert: un voto per iscritto, mai sulla propria: lo dice la policy). */
export async function voteBuild(buildId: string, stars: number, path: string): Promise<{ error?: string; avg?: number; votes?: number }> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const n = Math.round(Number(stars));
  if (!UUID_RE.test(buildId) || n < 1 || n > 5) return { error: "invalid" };
  const { error } = await supabase.from("build_votes").upsert({ build_id: buildId, user_id: user.id, stars: n }, { onConflict: "build_id,user_id" });
  if (error) return { error: error.code === "42501" ? "ownBuild" : tableMissing(error) ? "unavailable" : "db" };
  const { data } = await supabase.from("build_ratings").select("avg_stars, votes").eq("build_id", buildId).maybeSingle();
  if (typeof path === "string" && path.startsWith("/")) revalidatePath(path);
  const r = data as { avg_stars: number | string; votes: number | string } | null;
  return { avg: r ? Number(r.avg_stars) : n, votes: r ? Number(r.votes) : 1 };
}

"use server";

import { revalidatePath } from "next/cache";
import { locales, type Locale } from "@/lib/i18n";
import { currentUser } from "@/lib/supabase/server";
import type { InterfaceRow } from "@/lib/supabase/database";
import { allTalents } from "@/lib/data/talents";
import { INTERFACES_PER_USER, INTERFACE_SHOTS_BUCKET, INTERFACE_SLUG_RE, checkInterfaceFields, cleanText, interfacePath, interfaceTableMissing, newInterfaceSlug, type InterfaceFields } from "./interfaces";
import { announceInterface } from "./interfaceDiscord";

/**
 * Server Action delle interfacce condivise (24/10/2026): pubblicazione, modifica, stato, eliminazione, voto, segnalazione.
 * Le regole dei campi stanno in interfaces.ts (uguali ai vincoli dello schema); gli screenshot li carica il browser nello
 * Storage prima di mandare il modulo, qui si controlla solo che stiano nella cartella dell'autore. Chi scrive lo decide RLS.
 */
export type InterfaceActionState = { ok?: boolean; href?: string; error?: string; field?: string };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
/** La build del gioco dei dati del sito (la stessa dei talenti), salvata con l'interfaccia. */
const GAME_VERSION = allTalents[0]?.gameVersion ?? "";

function localeOf(formData: FormData): Locale {
  const l = String(formData.get("locale") ?? "en");
  return (locales as readonly string[]).includes(l) ? (l as Locale) : "en";
}

function revalidateInterfacePaths(slug?: string) {
  for (const l of locales) {
    revalidatePath(`/${l}/interfaces`);
    revalidatePath(`/${l}/account`);
    revalidatePath(`/${l}/sitemap-interfaces.xml`);
    if (slug) revalidatePath(`/${l}${interfacePath(slug)}`);
  }
}

function fieldsOf(formData: FormData, userId: string) {
  const one = (k: string) => formData.get(k) ?? "";
  const many = (k: string) => formData.getAll(k).map(String);
  return checkInterfaceFields(
    {
      name: one("name"),
      layout: one("layout"),
      cooldowns: one("cooldowns"),
      shots: many("shots"),
      classes: many("classes"),
      roles: many("roles"),
      input: one("input"),
      preset: one("preset"),
      resolution: one("resolution"),
      uiScale: one("uiScale"),
      addons: one("addons"),
      descriptionLang: one("descriptionLang"),
      description: one("description"),
    },
    userId,
    locales,
  );
}

function rowOf(f: InterfaceFields): Omit<InterfaceRow, "id" | "slug" | "owner" | "status" | "created_at" | "updated_at"> {
  return {
    name: f.name,
    layout: f.layout,
    cooldowns: f.cooldowns,
    shots: f.shots,
    classes: f.classes,
    roles: f.roles,
    input: f.input,
    preset: f.preset,
    resolution: f.resolution,
    ui_scale: f.uiScale,
    addons: f.addons,
    description_lang: f.descriptionLang,
    description: f.description,
    game_version: GAME_VERSION,
  };
}

function writeError(error: { code?: string; message: string } | null): InterfaceActionState {
  if (interfaceTableMissing(error)) return { error: "unavailable" };
  if (error?.message?.includes("interface limit")) return { error: "limit" };
  if (error?.message?.includes("outside owner folder")) return { error: "invalidShot", field: "shots" };
  if (error?.code === "23514") return { error: "invalid" };
  if (error?.code === "42501") return { error: "forbidden" };
  return { error: "db" };
}

export async function publishInterface(_prev: InterfaceActionState, formData: FormData): Promise<InterfaceActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const parsed = fieldsOf(formData, user.id);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  const { count, error: countError } = await supabase.from("community_interfaces").select("id", { count: "exact", head: true }).eq("owner", user.id).eq("status", "published");
  if (countError) return writeError(countError);
  if ((count ?? 0) >= INTERFACES_PER_USER) return { error: "limit" };
  const row = { ...rowOf(parsed.fields), owner: user.id, status: "published" };
  for (let attempt = 0; attempt < 6; attempt++) {
    const slug = newInterfaceSlug(parsed.fields.name);
    const { data, error } = await supabase
      .from("community_interfaces")
      .insert({ ...row, slug })
      .select("slug")
      .single();
    if (!error && data) {
      revalidateInterfacePaths(slug);
      announceInterface(slug);
      return { ok: true, href: `/${locale}${interfacePath(slug)}?new=1` };
    }
    if (error?.code !== "23505") return writeError(error);
  }
  return { error: "db" };
}

export async function updateInterface(_prev: InterfaceActionState, formData: FormData): Promise<InterfaceActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const id = String(formData.get("id") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const parsed = fieldsOf(formData, user.id);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  const { data: before } = await supabase.from("community_interfaces").select("shots").eq("id", id).eq("owner", user.id).maybeSingle();
  const { data, error } = await supabase.from("community_interfaces").update(rowOf(parsed.fields)).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  // gli screenshot tolti dalla modifica non servono più: si cancellano (la policy vieta di cancellare quelli in uso)
  const gone = ((before as { shots: string[] } | null)?.shots ?? []).filter((p) => !parsed.fields.shots.includes(p));
  if (gone.length) await supabase.storage.from(INTERFACE_SHOTS_BUCKET).remove(gone);
  const slug = (data as { slug: string }).slug;
  revalidateInterfacePaths(slug);
  return { ok: true, href: `/${locale}${interfacePath(slug)}` };
}

/** Nasconde o rimette online un'interfaccia propria. */
export async function setInterfaceStatus(formData: FormData): Promise<InterfaceActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!UUID_RE.test(id) || (status !== "published" && status !== "hidden")) return { error: "invalid" };
  const { data, error } = await supabase.from("community_interfaces").update({ status }).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  revalidateInterfacePaths((data as { slug: string }).slug);
  return { ok: true };
}

/** Elimina un'interfaccia propria, poi i suoi screenshot (voti e segnalazioni cadono con lei). */
export async function deleteInterface(formData: FormData): Promise<InterfaceActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const slug = String(formData.get("slug") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const { data: before } = await supabase.from("community_interfaces").select("shots").eq("id", id).eq("owner", user.id).maybeSingle();
  const { error } = await supabase.from("community_interfaces").delete().eq("id", id).eq("owner", user.id);
  if (error) return writeError(error);
  const shots = (before as { shots: string[] } | null)?.shots ?? [];
  if (shots.length) await supabase.storage.from(INTERFACE_SHOTS_BUCKET).remove(shots);
  revalidateInterfacePaths(INTERFACE_SLUG_RE.test(slug) ? slug : undefined);
  return { ok: true, href: `/${localeOf(formData)}/account#interfaces` };
}

/** Voto 1–5 a un'interfaccia (upsert: un voto per iscritto, mai sulla propria: lo dice la policy). */
export async function voteInterface(interfaceId: string, stars: number, path: string): Promise<{ error?: string; avg?: number; votes?: number }> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const n = Math.round(Number(stars));
  if (!UUID_RE.test(interfaceId) || n < 1 || n > 5) return { error: "invalid" };
  const { error } = await supabase.from("interface_votes").upsert({ interface_id: interfaceId, user_id: user.id, stars: n }, { onConflict: "interface_id,user_id" });
  if (error) return { error: error.code === "42501" ? "ownInterface" : interfaceTableMissing(error) ? "unavailable" : "db" };
  const { data } = await supabase.from("interface_ratings").select("avg_stars, votes").eq("interface_id", interfaceId).maybeSingle();
  if (typeof path === "string" && path.startsWith("/")) revalidatePath(path);
  const r = data as { avg_stars: number | string; votes: number | string } | null;
  return { avg: r ? Number(r.avg_stars) : n, votes: r ? Number(r.votes) : 1 };
}

/** Segnala un'interfaccia (serve l'accesso: la policy vuole user_id = auth.uid()). Gli admin leggono le segnalazioni. */
export async function reportInterface(formData: FormData): Promise<InterfaceActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const reason = cleanText(formData.get("reason"), 500);
  if (!UUID_RE.test(id) || reason.length < 3) return { error: "invalid", field: "reason" };
  const { error } = await supabase.from("interface_reports").insert({ interface_id: id, user_id: user.id, reason });
  if (error) return writeError(error);
  return { ok: true };
}

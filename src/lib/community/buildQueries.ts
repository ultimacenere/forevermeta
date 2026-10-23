import { supabasePublic, type Db } from "@/lib/supabase/public";
import { BUILD_SELECT, tableMissing, type CommunityBuild } from "./builds";

/**
 * Letture delle build pubblicate (23/10/2026). Le pagine pubbliche (/builds, /builds/<slug>, sitemap) usano il client
 * anonimo con la cache di 60 s; `listUserBuilds` legge con la sessione del proprietario in /account. Finché la
 * migrazione non è applicata la tabella non c'è: le letture restituiscono `unavailable` e le pagine dicono "non
 * ancora attive". Ogni altro errore si lancia, così una pagina ISR tiene la versione precedente invece di
 * svuotarsi (regola dei mazzi di OriginsMeta).
 */
export class BuildReadError extends Error {
  constructor(what: string, message: string) {
    super(`[builds] ${what}: ${message}`);
    this.name = "BuildReadError";
  }
}

export type Rating = { avg: number; votes: number };
export type BuildsRead = { builds: CommunityBuild[]; ratings: Map<string, Rating>; unavailable: boolean };

type Err = { code?: string; message: string } | null;

function rows(what: string, data: unknown, error: Err): { list: CommunityBuild[]; unavailable: boolean } {
  if (error) {
    if (tableMissing(error)) return { list: [], unavailable: true };
    throw new BuildReadError(what, error.message);
  }
  return { list: Array.isArray(data) ? (data as CommunityBuild[]) : [], unavailable: false };
}

/** Medie e numero dei voti delle build chieste (vuoto se la vista non c'è). */
export async function ratingsFor(db: Db, ids: string[]): Promise<Map<string, Rating>> {
  const map = new Map<string, Rating>();
  if (!ids.length) return map;
  const { data, error } = await db.from("build_ratings").select("build_id, avg_stars, votes").in("build_id", ids);
  if (error) {
    if (tableMissing(error)) return map;
    throw new BuildReadError("ratings", error.message);
  }
  for (const r of (data ?? []) as { build_id: string; avg_stars: number | string; votes: number }[]) map.set(r.build_id, { avg: Number(r.avg_stars), votes: Number(r.votes) });
  return map;
}

/** Le build pubblicate, dalla più recente; `classId` le filtra. */
export async function listPublishedBuilds(opts: { classId?: string; limit?: number } = {}): Promise<BuildsRead> {
  const db = supabasePublic();
  if (!db) return { builds: [], ratings: new Map(), unavailable: false };
  let q = db.from("community_builds").select(BUILD_SELECT).eq("status", "published").order("created_at", { ascending: false }).limit(opts.limit ?? 200);
  if (opts.classId) q = q.eq("class_id", opts.classId);
  const { data, error } = await q;
  const r = rows("list", data, error);
  const ratings = r.unavailable ? new Map<string, Rating>() : await ratingsFor(db, r.list.map((b) => b.id));
  return { builds: r.list, ratings, unavailable: r.unavailable };
}

/** Una build pubblicata dal suo slug (null se non c'è o non è pubblicata). */
export async function getPublishedBuild(slug: string): Promise<{ build: CommunityBuild | null; rating: Rating | null; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { build: null, rating: null, unavailable: false };
  const { data, error } = await db.from("community_builds").select(BUILD_SELECT).eq("slug", slug).eq("status", "published").maybeSingle();
  if (error) {
    if (tableMissing(error)) return { build: null, rating: null, unavailable: true };
    throw new BuildReadError("get", error.message);
  }
  const build = (data as CommunityBuild | null) ?? null;
  if (!build) return { build: null, rating: null, unavailable: false };
  const ratings = await ratingsFor(db, [build.id]);
  return { build, rating: ratings.get(build.id) ?? null, unavailable: false };
}

/** Le build di un iscritto, in tutti gli stati, con la sua sessione (solo /account e la pagina di modifica). */
export async function listUserBuilds(db: Db, userId: string): Promise<{ builds: CommunityBuild[]; unavailable: boolean }> {
  const { data, error } = await db.from("community_builds").select(BUILD_SELECT).eq("owner", userId).order("created_at", { ascending: false });
  const r = rows("mine", data, error);
  return { builds: r.list, unavailable: r.unavailable };
}

/** Una build dell'iscritto, anche nascosta, per la pagina di modifica. */
export async function getUserBuild(db: Db, userId: string, slug: string): Promise<CommunityBuild | null> {
  const { data, error } = await db.from("community_builds").select(BUILD_SELECT).eq("slug", slug).eq("owner", userId).maybeSingle();
  if (error) {
    if (tableMissing(error)) return null;
    throw new BuildReadError("edit", error.message);
  }
  return (data as CommunityBuild | null) ?? null;
}

/** Le build pubblicate per la sitemap: slug, lingua della guida e ultimo aggiornamento. */
export async function sitemapBuilds(): Promise<{ slug: string; lang: string; updated: string; words: number }[]> {
  const db = supabasePublic();
  if (!db) return [];
  const { data, error } = await db.from("community_builds").select("slug, guide_lang, updated_at, summary, plan, strengths, weaknesses, notes").eq("status", "published").order("created_at", { ascending: false }).limit(2000);
  if (error) {
    if (tableMissing(error)) return [];
    throw new BuildReadError("sitemap", error.message);
  }
  return ((data ?? []) as { slug: string; guide_lang: string; updated_at: string; summary: string; plan: string; strengths: string; weaknesses: string; notes: string }[]).map((r) => ({
    slug: r.slug,
    lang: r.guide_lang,
    updated: r.updated_at,
    words: [r.summary, r.plan, r.strengths, r.weaknesses, r.notes]
      .join(" ")
      .split(/\s+/)
      .filter((w) => /[\p{L}\p{N}]/u.test(w)).length,
  }));
}

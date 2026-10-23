import { supabasePublic, type Db } from "@/lib/supabase/public";
import { BUILD_DETAIL_SELECT, BUILD_LIST_SELECT, BUILD_SELECT, BUILD_TRANSLATION_SITEMAP_SELECT, tableMissing, type BuildListTranslationFields, type CommunityBuild } from "./builds";
import { translationDatesFromListRow } from "./buildTranslation";
import { locales, type Locale } from "@/lib/i18n";

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
/** Una build negli elenchi pubblici: la riga più le colonne leggere delle traduzioni. */
export type ListedBuild = CommunityBuild & BuildListTranslationFields;
export type BuildsRead = { builds: ListedBuild[]; ratings: Map<string, Rating>; unavailable: boolean };

type Err = { code?: string; message: string } | null;

/**
 * L'errore di PostgREST quando la colonna `translations` non c'è ancora (migrazione "BUILD TRADOTTE" non applicata):
 * le letture pubbliche riprovano senza le traduzioni, così il sito regge anche fra il deploy e la migrazione.
 */
export function columnMissing(error: Err): boolean {
  return Boolean(error && (error.code === "42703" || /column .*translations.* does not exist/i.test(error.message ?? "")));
}

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
  const query = (select: string) => {
    let q = db.from("community_builds").select(select).eq("status", "published").order("created_at", { ascending: false }).limit(opts.limit ?? 200);
    if (opts.classId) q = q.eq("class_id", opts.classId);
    return q;
  };
  let { data, error } = await query(BUILD_LIST_SELECT);
  if (columnMissing(error)) ({ data, error } = await query(BUILD_SELECT));
  const r = rows("list", data, error);
  const ratings = r.unavailable ? new Map<string, Rating>() : await ratingsFor(db, r.list.map((b) => b.id));
  return { builds: r.list as ListedBuild[], ratings, unavailable: r.unavailable };
}

/** Una build pubblicata dal suo slug (null se non c'è o non è pubblicata). */
export async function getPublishedBuild(slug: string): Promise<{ build: CommunityBuild | null; rating: Rating | null; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { build: null, rating: null, unavailable: false };
  const query = (select: string) => db.from("community_builds").select(select).eq("slug", slug).eq("status", "published").maybeSingle();
  let { data, error } = await query(BUILD_DETAIL_SELECT);
  if (columnMissing(error)) ({ data, error } = await query(BUILD_SELECT));
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

export type SitemapBuild = {
  slug: string;
  /** lingua in cui l'autore ha scritto la guida */
  lang: Locale;
  /** ultimo aggiornamento dell'autore (le traduzioni non lo spostano) */
  updated: string;
  /** parole della guida originale (soglia di indicizzazione) */
  words: number;
  /** data di ogni traduzione aggiornata, per lingua: la scheda esiste anche lì */
  translated: Partial<Record<Locale, string>>;
};

type SitemapRow = { slug: string; guide_lang: Locale; updated_at: string; name: string; summary: string; plan: string; strengths: string; weaknesses: string; notes: string } & BuildListTranslationFields;

/** Le build pubblicate per la sitemap: slug, lingua della guida, ultimo aggiornamento e le lingue con una traduzione aggiornata. */
export async function sitemapBuilds(): Promise<SitemapBuild[]> {
  const db = supabasePublic();
  if (!db) return [];
  const base = "slug, guide_lang, updated_at, name, summary, plan, strengths, weaknesses, notes";
  const query = (select: string) => db.from("community_builds").select(select).eq("status", "published").order("created_at", { ascending: false }).limit(2000);
  let { data, error } = await query(`${base}, ${BUILD_TRANSLATION_SITEMAP_SELECT}`);
  if (columnMissing(error)) ({ data, error } = await query(base));
  if (error) {
    if (tableMissing(error)) return [];
    throw new BuildReadError("sitemap", error.message);
  }
  return ((data ?? []) as unknown as SitemapRow[]).map((r) => ({
    slug: r.slug,
    lang: r.guide_lang,
    updated: r.updated_at,
    words: [r.summary, r.plan, r.strengths, r.weaknesses, r.notes]
      .join(" ")
      .split(/\s+/)
      .filter((w) => /[\p{L}\p{N}]/u.test(w)).length,
    translated: translationDatesFromListRow(r, locales),
  }));
}

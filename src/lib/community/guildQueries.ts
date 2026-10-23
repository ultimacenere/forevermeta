import { supabasePublic, type Db } from "@/lib/supabase/public";
import { GUILD_SELECT, guildTableMissing, staleCutoff, type CommunityGuild } from "./guilds";

/**
 * Letture della bacheca delle gilde (23/10/2026). Le pagine pubbliche (/guilds, /guilds/<slug>, sitemap) usano il client
 * anonimo con la cache di 60 s; `listUserGuilds` legge con la sessione del proprietario in /account. L'elenco pubblico
 * lascia fuori gli annunci non rinnovati da più di 45 giorni (`staleCutoff`, un giorno intero così la lettura si cacha);
 * la scheda si apre lo stesso dal link, con l'avviso. Finché la migrazione non è applicata la tabella non c'è: le
 * letture restituiscono `unavailable` e le pagine dicono "non ancora attiva". Ogni altro errore si lancia, così una
 * pagina ISR tiene la versione precedente invece di svuotarsi (regola dei mazzi di OriginsMeta).
 */
export class GuildReadError extends Error {
  constructor(what: string, message: string) {
    super(`[guilds] ${what}: ${message}`);
    this.name = "GuildReadError";
  }
}

type Err = { code?: string; message: string } | null;

function rows(what: string, data: unknown, error: Err): { list: CommunityGuild[]; unavailable: boolean } {
  if (error) {
    if (guildTableMissing(error)) return { list: [], unavailable: true };
    throw new GuildReadError(what, error.message);
  }
  return { list: Array.isArray(data) ? (data as CommunityGuild[]) : [], unavailable: false };
}

/** Gli annunci pubblicati e non scaduti, dal rinnovo più recente. */
export async function listPublishedGuilds(opts: { limit?: number } = {}): Promise<{ guilds: CommunityGuild[]; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { guilds: [], unavailable: false };
  const { data, error } = await db
    .from("community_guilds")
    .select(GUILD_SELECT)
    .eq("status", "published")
    .gte("refreshed_at", staleCutoff())
    .order("refreshed_at", { ascending: false })
    .limit(opts.limit ?? 500);
  const r = rows("list", data, error);
  return { guilds: r.list, unavailable: r.unavailable };
}

/** Un annuncio pubblicato dal suo slug (null se non c'è o non è pubblicato); anche se scaduto. */
export async function getPublishedGuild(slug: string): Promise<{ guild: CommunityGuild | null; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { guild: null, unavailable: false };
  const { data, error } = await db.from("community_guilds").select(GUILD_SELECT).eq("slug", slug).eq("status", "published").maybeSingle();
  if (error) {
    if (guildTableMissing(error)) return { guild: null, unavailable: true };
    throw new GuildReadError("get", error.message);
  }
  return { guild: (data as CommunityGuild | null) ?? null, unavailable: false };
}

/** Gli annunci di un iscritto, in tutti gli stati, con la sua sessione (solo /account e la pagina di modifica). */
export async function listUserGuilds(db: Db, userId: string): Promise<{ guilds: CommunityGuild[]; unavailable: boolean }> {
  const { data, error } = await db.from("community_guilds").select(GUILD_SELECT).eq("owner", userId).order("created_at", { ascending: false });
  const r = rows("mine", data, error);
  return { guilds: r.list, unavailable: r.unavailable };
}

/** Un annuncio dell'iscritto, anche nascosto, per la pagina di modifica. */
export async function getUserGuild(db: Db, userId: string, slug: string): Promise<CommunityGuild | null> {
  const { data, error } = await db.from("community_guilds").select(GUILD_SELECT).eq("slug", slug).eq("owner", userId).maybeSingle();
  if (error) {
    if (guildTableMissing(error)) return null;
    throw new GuildReadError("edit", error.message);
  }
  return (data as CommunityGuild | null) ?? null;
}

/** Gli annunci pubblicati per la sitemap: slug, lingua, ultimo aggiornamento, rinnovo e parole. */
export async function sitemapGuilds(): Promise<{ slug: string; lang: string; updated: string; refreshed: string; description: string }[]> {
  const db = supabasePublic();
  if (!db) return [];
  const { data, error } = await db.from("community_guilds").select("slug, description_lang, updated_at, refreshed_at, description").eq("status", "published").gte("refreshed_at", staleCutoff()).order("refreshed_at", { ascending: false }).limit(2000);
  if (error) {
    if (guildTableMissing(error)) return [];
    throw new GuildReadError("sitemap", error.message);
  }
  return ((data ?? []) as { slug: string; description_lang: string; updated_at: string; refreshed_at: string; description: string }[]).map((r) => ({
    slug: r.slug,
    lang: r.description_lang,
    updated: r.updated_at,
    refreshed: r.refreshed_at,
    description: r.description,
  }));
}

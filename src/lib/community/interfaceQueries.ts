import { supabasePublic, type Db } from "@/lib/supabase/public";
import { INTERFACE_SELECT, interfaceTableMissing, type CommunityInterface } from "./interfaces";

/**
 * Letture delle interfacce condivise (24/10/2026). Le pagine pubbliche (/interfaces, /interfaces/<slug>, sitemap) usano
 * il client anonimo con la cache di 60 s; `listUserInterfaces` legge con la sessione del proprietario in /account.
 * Finché la migrazione non è applicata la tabella non c'è: le letture restituiscono `unavailable` e le pagine dicono
 * "non ancora attiva". Ogni altro errore si lancia, così una pagina ISR tiene la versione precedente.
 */
export class InterfaceReadError extends Error {
  constructor(what: string, message: string) {
    super(`[interfaces] ${what}: ${message}`);
    this.name = "InterfaceReadError";
  }
}

export type Rating = { avg: number; votes: number };
type Err = { code?: string; message: string } | null;

function rows(what: string, data: unknown, error: Err): { list: CommunityInterface[]; unavailable: boolean } {
  if (error) {
    if (interfaceTableMissing(error)) return { list: [], unavailable: true };
    throw new InterfaceReadError(what, error.message);
  }
  return { list: Array.isArray(data) ? (data as CommunityInterface[]) : [], unavailable: false };
}

/** Medie e numero dei voti delle interfacce chieste (vuoto se la vista non c'è). */
export async function interfaceRatingsFor(db: Db, ids: string[]): Promise<Map<string, Rating>> {
  const map = new Map<string, Rating>();
  if (!ids.length) return map;
  const { data, error } = await db.from("interface_ratings").select("interface_id, avg_stars, votes").in("interface_id", ids);
  if (error) {
    if (interfaceTableMissing(error)) return map;
    throw new InterfaceReadError("ratings", error.message);
  }
  for (const r of (data ?? []) as { interface_id: string; avg_stars: number | string; votes: number }[]) map.set(r.interface_id, { avg: Number(r.avg_stars), votes: Number(r.votes) });
  return map;
}

/** Le interfacce pubblicate, dalla più recente. */
export async function listPublishedInterfaces(opts: { limit?: number } = {}): Promise<{ interfaces: CommunityInterface[]; ratings: Map<string, Rating>; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { interfaces: [], ratings: new Map(), unavailable: false };
  const { data, error } = await db.from("community_interfaces").select(INTERFACE_SELECT).eq("status", "published").order("created_at", { ascending: false }).limit(opts.limit ?? 300);
  const r = rows("list", data, error);
  const ratings = r.unavailable ? new Map<string, Rating>() : await interfaceRatingsFor(db, r.list.map((x) => x.id));
  return { interfaces: r.list, ratings, unavailable: r.unavailable };
}

/** Un'interfaccia pubblicata dal suo slug (null se non c'è o non è pubblicata). */
export async function getPublishedInterface(slug: string): Promise<{ item: CommunityInterface | null; rating: Rating | null; unavailable: boolean }> {
  const db = supabasePublic();
  if (!db) return { item: null, rating: null, unavailable: false };
  const { data, error } = await db.from("community_interfaces").select(INTERFACE_SELECT).eq("slug", slug).eq("status", "published").maybeSingle();
  if (error) {
    if (interfaceTableMissing(error)) return { item: null, rating: null, unavailable: true };
    throw new InterfaceReadError("get", error.message);
  }
  const item = (data as CommunityInterface | null) ?? null;
  if (!item) return { item: null, rating: null, unavailable: false };
  const ratings = await interfaceRatingsFor(db, [item.id]);
  return { item, rating: ratings.get(item.id) ?? null, unavailable: false };
}

/** Le interfacce di un iscritto, in tutti gli stati, con la sua sessione (solo /account e la pagina di modifica). */
export async function listUserInterfaces(db: Db, userId: string): Promise<{ interfaces: CommunityInterface[]; unavailable: boolean }> {
  const { data, error } = await db.from("community_interfaces").select(INTERFACE_SELECT).eq("owner", userId).order("created_at", { ascending: false });
  const r = rows("mine", data, error);
  return { interfaces: r.list, unavailable: r.unavailable };
}

/** Un'interfaccia dell'iscritto, anche nascosta, per la pagina di modifica. */
export async function getUserInterface(db: Db, userId: string, slug: string): Promise<CommunityInterface | null> {
  const { data, error } = await db.from("community_interfaces").select(INTERFACE_SELECT).eq("slug", slug).eq("owner", userId).maybeSingle();
  if (error) {
    if (interfaceTableMissing(error)) return null;
    throw new InterfaceReadError("edit", error.message);
  }
  return (data as CommunityInterface | null) ?? null;
}

/** Le interfacce pubblicate per la sitemap: slug, lingua, ultimo aggiornamento e testo (per la soglia delle parole). */
export async function sitemapInterfaces(): Promise<{ slug: string; lang: string; updated: string; description: string }[]> {
  const db = supabasePublic();
  if (!db) return [];
  const { data, error } = await db.from("community_interfaces").select("slug, description_lang, updated_at, description").eq("status", "published").order("created_at", { ascending: false }).limit(2000);
  if (error) {
    if (interfaceTableMissing(error)) return [];
    throw new InterfaceReadError("sitemap", error.message);
  }
  return ((data ?? []) as { slug: string; description_lang: string; updated_at: string; description: string }[]).map((r) => ({ slug: r.slug, lang: r.description_lang, updated: r.updated_at, description: r.description }));
}

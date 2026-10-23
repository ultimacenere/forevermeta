import type { Locale } from "../i18n";

/**
 * Regole della bacheca delle gilde (23/10/2026), funzioni pure: valori ammessi e limiti dei campi uguali ai vincoli del
 * blocco "BACHECA GILDE" di supabase/schema.sql, pulizia dei testi, inviti Discord normalizzati, slug, soglia di
 * indicizzazione, scadenza degli annunci. Nessun import di React né di Supabase: le prova guilds.test.ts.
 *
 * Perché una bacheca (rapporto "Funzioni e fonti" del 27/09/2026): "trovare gilda e gruppo" era la seconda richiesta
 * dei giocatori sul forum ufficiale, le 5-7 bacheche inglesi non mostrano numeri e nessuna è in italiano o spagnolo.
 * La prenotazione dei nomi parte il 27/10/2026 e il gioco esce il 04/11/2026: le gilde si formano adesso.
 */
export const GUILD_REGIONS = ["eu", "us", "kr", "tw", "other"] as const;
export type GuildRegion = (typeof GUILD_REGIONS)[number];

/** Tipo di reame: i reami Hardcore sono reami a parte (ruleset annunciato dopo il lancio, senza data). */
export const REALM_TYPES = ["normal", "pvp", "rp", "hardcore"] as const;
export type RealmType = (typeof REALM_TYPES)[number];

export const FACTIONS = ["alliance", "horde"] as const;
export type Faction = (typeof FACTIONS)[number];

/** Lingue della gilda (quella in cui si parla in chat vocale e di gilda), non le lingue del sito. */
export const GUILD_LANGUAGES = ["en", "it", "es", "de", "fr", "pt", "ru", "pl", "other"] as const;
export type GuildLanguage = (typeof GUILD_LANGUAGES)[number];

export const GUILD_FOCUS = ["leveling", "dungeons", "raids", "pvp", "social", "rp"] as const;
export type GuildFocus = (typeof GUILD_FOCUS)[number];

export const GUILD_ROLES = ["tank", "healer", "dps"] as const;
export type GuildRole = (typeof GUILD_ROLES)[number];

/** Le nove classi di Forever, gli stessi id di src/lib/data/classes.ts (qui ripetuti per restare senza import). */
export const GUILD_CLASSES = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"] as const;
export type GuildClass = (typeof GUILD_CLASSES)[number];

export const RAID_DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"] as const;
export type RaidDay = (typeof RAID_DAYS)[number];

/** Dimensione dichiarata dall'autore: "in formazione" è il caso normale prima del lancio. */
export const GUILD_SIZES = ["forming", "small", "medium", "large"] as const;
export type GuildSize = (typeof GUILD_SIZES)[number];

export const GUILD_LIMITS = {
  /** il gioco accetta nomi di gilda fino a 24 caratteri */
  name: { min: 2, max: 24 },
  realm: { min: 2, max: 40 },
  languages: { min: 1, max: 3 },
  focus: { min: 1, max: 4 },
  schedule: { max: 120 },
  contact: { max: 80 },
  website: { max: 200 },
  description: { min: 80, max: 4000 },
} as const;

/** Parole della descrizione sotto cui la scheda resta noindex (le build chiedono 75: una gilda si racconta in meno). */
export const GUILD_MIN_WORDS = 60;
/** Annunci pubblicati per iscritto (uguale al trigger `enforce_guild_limit`). */
export const GUILDS_PER_USER = 3;
/** Giorni senza rinnovo dopo i quali un annuncio esce dall'elenco pubblico (resta aperto dal link, con l'avviso). */
export const GUILD_STALE_DAYS = 45;

export type GuildStatus = "published" | "hidden";

export type GuildFields = {
  name: string;
  region: GuildRegion;
  realm: string;
  realmType: RealmType;
  faction: Faction;
  languages: GuildLanguage[];
  focus: GuildFocus[];
  roles: GuildRole[];
  classes: GuildClass[];
  raidDays: RaidDay[];
  schedule: string;
  size: GuildSize;
  descriptionLang: Locale;
  description: string;
  discordUrl: string;
  websiteUrl: string;
  contact: string;
};

export type GuildFieldError =
  | "invalidName"
  | "invalidRegion"
  | "invalidRealm"
  | "invalidRealmType"
  | "invalidFaction"
  | "noLanguage"
  | "tooManyLanguages"
  | "noFocus"
  | "tooManyFocus"
  | "invalidSize"
  | "invalidLang"
  | "descriptionShort"
  | "descriptionLong"
  | "scheduleLong"
  | "contactLong"
  | "invalidDiscord"
  | "invalidWebsite"
  | "noContact";

/** Un annuncio come lo leggono le pagine: la riga più il profilo di chi l'ha pubblicato. */
export type CommunityGuild = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  region: GuildRegion;
  realm: string;
  realm_type: RealmType;
  faction: Faction;
  languages: GuildLanguage[];
  focus: GuildFocus[];
  roles: GuildRole[];
  classes: GuildClass[];
  raid_days: RaidDay[];
  schedule: string;
  size: GuildSize;
  description_lang: Locale;
  description: string;
  discord_url: string;
  website_url: string;
  contact: string;
  status: GuildStatus;
  refreshed_at: string;
  created_at: string;
  updated_at: string;
  profile?: { username: string | null; display_name: string | null; avatar_url: string | null; badge: string | null } | null;
};

export const GUILD_SELECT =
  "id, slug, owner, name, region, realm, realm_type, faction, languages, focus, roles, classes, raid_days, schedule, size, description_lang, description, discord_url, website_url, contact, status, refreshed_at, created_at, updated_at, profile:profiles!community_guilds_owner_fkey(username, display_name, avatar_url, badge)";

/** Testo di una riga: niente caratteri di controllo, spazi compattati, tagliato a `max`. */
export function cleanLine(raw: unknown, max: number): string {
  return String(raw ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/** Testo a più righe: a capo normalizzati, al massimo due righe vuote di fila, tagliato a `max`. */
export function cleanText(raw: unknown, max: number): string {
  const s = String(raw ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return s.length > max ? s.slice(0, max) : s;
}

function oneOf<T extends string>(value: unknown, allowed: readonly T[]): value is T {
  return typeof value === "string" && (allowed as readonly string[]).includes(value);
}

/** Valori scelti fra quelli ammessi, senza doppioni e nell'ordine di `allowed` (un modulo manda un array o una stringa). */
export function pickMany<T extends string>(value: unknown, allowed: readonly T[]): T[] {
  const raw = Array.isArray(value) ? value : value == null || value === "" ? [] : [value];
  const chosen = new Set(raw.map(String));
  return allowed.filter((a) => chosen.has(a));
}

const DISCORD_INVITE_RE = /^(?:https?:\/\/)?(?:www\.)?(?:discord\.gg|discord\.com\/invite|discordapp\.com\/invite)\/([A-Za-z0-9-]{2,64})\/?(?:[?#].*)?$/i;

/** Invito Discord nella forma canonica `https://discord.gg/<codice>`; null se non è un invito. Vuoto resta vuoto. */
export function normalizeDiscordInvite(raw: unknown): string | null {
  const s = cleanLine(raw, 200);
  if (!s) return "";
  const m = DISCORD_INVITE_RE.exec(s);
  return m ? `https://discord.gg/${m[1]}` : null;
}

/** Sito della gilda: un indirizzo http(s) con un dominio vero, senza spazi, fino a 200 caratteri. Vuoto resta vuoto. */
export function normalizeWebsite(raw: unknown): string | null {
  const s = cleanLine(raw, GUILD_LIMITS.website.max + 1);
  if (!s) return "";
  if (s.length > GUILD_LIMITS.website.max || /\s/.test(s)) return null;
  try {
    const u = new URL(s);
    if (u.protocol !== "https:" && u.protocol !== "http:") return null;
    if (!/^[a-z0-9-]+(\.[a-z0-9-]+)+$/i.test(u.hostname)) return null;
    return s;
  } catch {
    return null;
  }
}

/** Controlla i campi del modulo; restituisce i valori puliti o il primo errore con il campo da evidenziare. */
export function checkGuildFields(input: Record<string, unknown>, locales: readonly string[]): { ok: true; fields: GuildFields } | { ok: false; error: GuildFieldError; field: keyof GuildFields } {
  const name = cleanLine(input.name, GUILD_LIMITS.name.max);
  if (name.length < GUILD_LIMITS.name.min) return { ok: false, error: "invalidName", field: "name" };
  if (!oneOf(input.region, GUILD_REGIONS)) return { ok: false, error: "invalidRegion", field: "region" };
  const realm = cleanLine(input.realm, GUILD_LIMITS.realm.max);
  if (realm.length < GUILD_LIMITS.realm.min) return { ok: false, error: "invalidRealm", field: "realm" };
  if (!oneOf(input.realmType, REALM_TYPES)) return { ok: false, error: "invalidRealmType", field: "realmType" };
  if (!oneOf(input.faction, FACTIONS)) return { ok: false, error: "invalidFaction", field: "faction" };
  const languages = pickMany(input.languages, GUILD_LANGUAGES);
  if (languages.length < GUILD_LIMITS.languages.min) return { ok: false, error: "noLanguage", field: "languages" };
  if (languages.length > GUILD_LIMITS.languages.max) return { ok: false, error: "tooManyLanguages", field: "languages" };
  const focus = pickMany(input.focus, GUILD_FOCUS);
  if (focus.length < GUILD_LIMITS.focus.min) return { ok: false, error: "noFocus", field: "focus" };
  if (focus.length > GUILD_LIMITS.focus.max) return { ok: false, error: "tooManyFocus", field: "focus" };
  const roles = pickMany(input.roles, GUILD_ROLES);
  const classes = pickMany(input.classes, GUILD_CLASSES);
  const raidDays = pickMany(input.raidDays, RAID_DAYS);
  const schedule = cleanLine(input.schedule, GUILD_LIMITS.schedule.max + 1);
  if (schedule.length > GUILD_LIMITS.schedule.max) return { ok: false, error: "scheduleLong", field: "schedule" };
  if (!oneOf(input.size, GUILD_SIZES)) return { ok: false, error: "invalidSize", field: "size" };
  const lang = String(input.descriptionLang ?? "");
  if (!locales.includes(lang)) return { ok: false, error: "invalidLang", field: "descriptionLang" };
  const description = cleanText(input.description, GUILD_LIMITS.description.max + 1);
  if (description.length < GUILD_LIMITS.description.min) return { ok: false, error: "descriptionShort", field: "description" };
  if (description.length > GUILD_LIMITS.description.max) return { ok: false, error: "descriptionLong", field: "description" };
  const discordUrl = normalizeDiscordInvite(input.discordUrl);
  if (discordUrl === null) return { ok: false, error: "invalidDiscord", field: "discordUrl" };
  const websiteUrl = normalizeWebsite(input.websiteUrl);
  if (websiteUrl === null) return { ok: false, error: "invalidWebsite", field: "websiteUrl" };
  const contact = cleanLine(input.contact, GUILD_LIMITS.contact.max + 1);
  if (contact.length > GUILD_LIMITS.contact.max) return { ok: false, error: "contactLong", field: "contact" };
  if (!discordUrl && !websiteUrl && !contact) return { ok: false, error: "noContact", field: "discordUrl" };
  return {
    ok: true,
    fields: { name, region: input.region, realm, realmType: input.realmType, faction: input.faction, languages, focus, roles, classes, raidDays, schedule, size: input.size, descriptionLang: lang as Locale, description, discordUrl, websiteUrl, contact },
  };
}

/** Parole della descrizione (una parola ha almeno una lettera o una cifra). */
export function guildWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** Scadenza: un annuncio non rinnovato da più di GUILD_STALE_DAYS giorni. */
export function isStale(refreshedAt: string, now: number = Date.now()): boolean {
  const t = Date.parse(refreshedAt);
  if (!Number.isFinite(t)) return true;
  return now - t > GUILD_STALE_DAYS * 86_400_000;
}

/** Il giorno (UTC, mezzanotte) prima del quale gli annunci sono scaduti: stabile per un giorno, così le letture si cachano. */
export function staleCutoff(now: number = Date.now()): string {
  const d = new Date(now - GUILD_STALE_DAYS * 86_400_000);
  return `${d.toISOString().slice(0, 10)}T00:00:00.000Z`;
}

/** La scheda si indicizza solo nella lingua della descrizione, con abbastanza parole e se l'annuncio non è scaduto. */
export function guildIndexable(g: Pick<CommunityGuild, "status" | "description" | "refreshed_at">, now: number = Date.now()): boolean {
  return g.status === "published" && guildWords(g.description) >= GUILD_MIN_WORDS && !isStale(g.refreshed_at, now);
}

export function slugBase(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/** Slug unico: nome e reame più quattro caratteri casuali (`random` sostituibile nei test). */
export function newGuildSlug(name: string, realm: string, random: () => number = Math.random): string {
  const tail = Array.from({ length: 4 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(random() * 36)]).join("");
  const base = [slugBase(name), slugBase(realm)].filter(Boolean).join("-").slice(0, 60).replace(/-+$/, "");
  return `${base.length >= 3 ? base : `guild-${base}`.replace(/-$/, "")}-${tail}`;
}

export const GUILD_SLUG_RE = /^[a-z0-9-]{3,80}$/;

export function guildPath(slug: string): string {
  return `/guilds/${slug}`;
}

/** L'errore di PostgREST quando la tabella non esiste ancora (migrazione non applicata): il sito dice "non attivo". */
export function guildTableMissing(error: { code?: string; message?: string } | null | undefined): boolean {
  if (!error) return false;
  if (error.code === "42P01" || error.code === "PGRST205" || error.code === "PGRST204") return true;
  const m = (error.message ?? "").toLowerCase();
  return /community_guilds|guild_reports/.test(m) && /does not exist|could not find|not found/.test(m);
}

import type { Locale } from "../i18n";
import type { ClassId, RaceId } from "../builder/types";
import type { BuildTranslations } from "./buildTranslation";

/**
 * Regole delle build pubblicate (23/10/2026), funzioni pure: limiti dei campi uguali ai vincoli del blocco "BUILD
 * PUBBLICATE" di supabase/schema.sql, pulizia dei testi, slug, soglia di indicizzazione. Nessun import di React né di
 * Supabase: le prova builds.test.ts.
 */
export const BUILD_PURPOSES = ["general", "leveling", "dungeon", "raid", "pvp"] as const;
export type BuildPurpose = (typeof BUILD_PURPOSES)[number];

export const BUILD_LIMITS = {
  name: { min: 3, max: 60 },
  summary: { min: 40, max: 600 },
  plan: { min: 100, max: 6000 },
  strengths: { max: 2000 },
  weaknesses: { max: 2000 },
  notes: { max: 3000 },
} as const;

/** Parole di guida originale (riassunto + sezioni) sotto cui la scheda resta noindex, come per i mazzi di OriginsMeta. */
export const BUILD_MIN_WORDS = 75;
/** Build pubblicate per iscritto (uguale al trigger `enforce_build_limit`). */
export const BUILDS_PER_USER = 20;

export type BuildStatus = "published" | "hidden";

export type BuildFields = {
  name: string;
  purpose: BuildPurpose;
  guideLang: Locale;
  summary: string;
  plan: string;
  strengths: string;
  weaknesses: string;
  notes: string;
};

export type BuildFieldError = "invalidName" | "invalidPurpose" | "invalidLang" | "summaryShort" | "summaryLong" | "planShort" | "planLong" | "strengthsLong" | "weaknessesLong" | "notesLong";

/** Una build come la leggono le pagine: la riga più il profilo di chi l'ha pubblicata. */
export type CommunityBuild = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  class_id: ClassId;
  race_id: RaceId | null;
  level: number;
  code: string;
  points: number;
  purpose: BuildPurpose;
  guide_lang: Locale;
  summary: string;
  plan: string;
  strengths: string;
  weaknesses: string;
  notes: string;
  game_version: string;
  status: BuildStatus;
  created_at: string;
  updated_at: string;
  profile?: { username: string | null; display_name: string | null; avatar_url: string | null; badge: string | null } | null;
  /** traduzioni automatiche di nome e guida (buildTranslation.ts): solo nella lettura della scheda (`BUILD_DETAIL_SELECT`) */
  translations?: BuildTranslations | null;
};

export const BUILD_SELECT =
  "id, slug, owner, name, class_id, race_id, level, code, points, purpose, guide_lang, summary, plan, strengths, weaknesses, notes, game_version, status, created_at, updated_at, profile:profiles!community_builds_owner_fkey(username, display_name, avatar_url, badge)";

/**
 * Le lingue delle colonne leggere delle traduzioni: scritte qui perché questo modulo (usato anche dai componenti
 * client) non importa i dizionari; se una lingua del sito mancasse la riga di controllo sotto non compilerebbe, e il
 * test di buildTranslation.test.ts le confronta con `locales` di i18n.ts.
 */
export const TR_LOCALES = ["en", "it", "es"] as const satisfies readonly Locale[];
export type TrLocale = (typeof TR_LOCALES)[number];
const allLocalesListed: Locale extends TrLocale ? true : never = true;
void allLocalesListed;

/** Colonne leggere con cui gli elenchi leggono le traduzioni senza scaricare tutta la colonna `translations`. */
export type BuildListTranslationFields = Partial<Record<`tr_${TrLocale}_hash` | `tr_${TrLocale}_at` | `tr_${TrLocale}_name` | `tr_${TrLocale}_summary`, string | null>>;

/** Select delle colonne leggere (PostgREST: `alias:colonna->chiave->>chiave`): impronta, data, nome e riassunto tradotti per lingua. */
export const BUILD_TRANSLATION_LIST_SELECT = TR_LOCALES.flatMap((l) => [
  `tr_${l}_hash:translations->${l}->>hash`,
  `tr_${l}_at:translations->${l}->>at`,
  `tr_${l}_name:translations->${l}->guide->>name`,
  `tr_${l}_summary:translations->${l}->guide->>summary`,
]).join(", ");

/** Le sole colonne leggere di impronta e data, per la sitemap. */
export const BUILD_TRANSLATION_SITEMAP_SELECT = TR_LOCALES.flatMap((l) => [`tr_${l}_hash:translations->${l}->>hash`, `tr_${l}_at:translations->${l}->>at`]).join(", ");

/** Elenchi pubblici: la riga più le colonne leggere delle traduzioni (nome e riassunto nella lingua della pagina). */
export const BUILD_LIST_SELECT = `${BUILD_SELECT}, ${BUILD_TRANSLATION_LIST_SELECT}`;

/** La scheda di una build: la riga più tutte le traduzioni. */
export const BUILD_DETAIL_SELECT = `${BUILD_SELECT}, translations`;

/** Testo semplice: niente caratteri di controllo, a capo normalizzati, al massimo due righe vuote di fila, tagliato a `max`. */
export function cleanText(raw: unknown, max: number): string {
  const s = String(raw ?? "")
    .replace(/\r\n?/g, "\n")
    .replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  return s.length > max ? s.slice(0, max) : s;
}

export function cleanName(raw: unknown): string {
  return String(raw ?? "")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, BUILD_LIMITS.name.max);
}

export function isPurpose(value: unknown): value is BuildPurpose {
  return typeof value === "string" && (BUILD_PURPOSES as readonly string[]).includes(value);
}

/** Controlla i campi del modulo; restituisce i testi puliti o il primo errore con il campo da evidenziare. */
export function checkFields(input: Record<string, unknown>, locales: readonly string[]): { ok: true; fields: BuildFields } | { ok: false; error: BuildFieldError; field: keyof BuildFields } {
  const name = cleanName(input.name);
  if (name.length < BUILD_LIMITS.name.min) return { ok: false, error: "invalidName", field: "name" };
  if (!isPurpose(input.purpose)) return { ok: false, error: "invalidPurpose", field: "purpose" };
  const lang = String(input.guideLang ?? "");
  if (!locales.includes(lang)) return { ok: false, error: "invalidLang", field: "guideLang" };
  const summary = cleanText(input.summary, BUILD_LIMITS.summary.max + 1);
  if (summary.length < BUILD_LIMITS.summary.min) return { ok: false, error: "summaryShort", field: "summary" };
  if (summary.length > BUILD_LIMITS.summary.max) return { ok: false, error: "summaryLong", field: "summary" };
  const plan = cleanText(input.plan, BUILD_LIMITS.plan.max + 1);
  if (plan.length < BUILD_LIMITS.plan.min) return { ok: false, error: "planShort", field: "plan" };
  if (plan.length > BUILD_LIMITS.plan.max) return { ok: false, error: "planLong", field: "plan" };
  const strengths = cleanText(input.strengths, BUILD_LIMITS.strengths.max + 1);
  if (strengths.length > BUILD_LIMITS.strengths.max) return { ok: false, error: "strengthsLong", field: "strengths" };
  const weaknesses = cleanText(input.weaknesses, BUILD_LIMITS.weaknesses.max + 1);
  if (weaknesses.length > BUILD_LIMITS.weaknesses.max) return { ok: false, error: "weaknessesLong", field: "weaknesses" };
  const notes = cleanText(input.notes, BUILD_LIMITS.notes.max + 1);
  if (notes.length > BUILD_LIMITS.notes.max) return { ok: false, error: "notesLong", field: "notes" };
  return { ok: true, fields: { name, purpose: input.purpose, guideLang: lang as Locale, summary, plan, strengths, weaknesses, notes } };
}

/** Parole della guida originale: riassunto e sezioni. */
export function guideWords(b: Pick<BuildFields, "summary" | "plan" | "strengths" | "weaknesses" | "notes">): number {
  return [b.summary, b.plan, b.strengths, b.weaknesses, b.notes]
    .join(" ")
    .split(/\s+/)
    .filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** La scheda si indicizza solo nella lingua della guida e solo con abbastanza parole originali. */
export function buildIndexable(b: Pick<CommunityBuild, "status" | "summary" | "plan" | "strengths" | "weaknesses" | "notes">): boolean {
  return b.status === "published" && guideWords(b) >= BUILD_MIN_WORDS;
}

export function slugBase(name: string): string {
  const s = name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/, "");
  return s.length >= 3 ? s : `build-${s}`.replace(/-$/, "");
}

/** Slug unico: base dal nome più quattro caratteri casuali (`random` sostituibile nei test). */
export function newSlug(name: string, random: () => number = Math.random): string {
  const tail = Array.from({ length: 4 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(random() * 36)]).join("");
  return `${slugBase(name)}-${tail}`;
}

export const BUILD_SLUG_RE = /^[a-z0-9-]{3,80}$/;

export function buildPath(slug: string): string {
  return `/builds/${slug}`;
}

/** L'errore di PostgREST quando la tabella non esiste ancora (migrazione non applicata): il sito dice "non attivo". */
export function tableMissing(error: { code?: string; message?: string } | null | undefined): boolean {
  if (!error) return false;
  if (error.code === "42P01" || error.code === "PGRST205" || error.code === "PGRST204") return true;
  const m = (error.message ?? "").toLowerCase();
  return /community_builds|build_votes|build_ratings/.test(m) && /does not exist|could not find|not found/.test(m);
}

/** Etichetta del riassunto dei punti "31/20/0" dal codice, senza i dati dei talenti: somma delle cifre per albero. */
export function pointsFromCode(code: string): number[] {
  const parts = code.split(".");
  return [4, 5, 6].map((i) => (parts[i] ?? "").split("").reduce((a, d) => a + (Number(d) || 0), 0));
}

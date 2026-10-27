import type { Locale } from "../i18n";

/**
 * Regole delle interfacce condivise (24/10/2026), funzioni pure: valori ammessi e limiti dei campi uguali ai vincoli del
 * blocco "INTERFACCE" di supabase/schema.sql, controllo delle stringhe del gioco, percorsi degli screenshot, slug, soglia
 * di indicizzazione. Nessun import di React né di Supabase: le prova interfaces.test.ts.
 *
 * Perché (ricerca `_interfacce_condivisione_2026-10-23.md` nella KB): WoW Forever ha l'Edit Mode di Blizzard con
 * Condividi e Importa, e il layout esce come stringa di testo in chiaro (1-4 KB, nessun codice eseguibile). Al lancio si
 * pubblicano solo layout Edit Mode, con screenshot obbligatorio dell'autore (nessuno disegna l'interfaccia dalla
 * stringa: non contiene né dimensioni né scala) e, facoltativa, la stringa del Cooldown Manager nativo. I profili degli
 * addon (WeakAuras e fork, ElvUI, Plater, Details) arrivano dopo, con l'avviso "contiene codice".
 */
export const INTERFACE_ROLES = ["tank", "healer", "dps"] as const;
export type InterfaceRole = (typeof INTERFACE_ROLES)[number];

/** Le nove classi di Forever, gli stessi id di src/lib/data/classes.ts (qui ripetuti per restare senza import). */
export const INTERFACE_CLASSES = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"] as const;
export type InterfaceClass = (typeof INTERFACE_CLASSES)[number];

/** Layout per mouse e tastiera o per gamepad: dall'8/10/2026 l'Edit Mode li salva separati. */
export const INTERFACE_INPUTS = ["mouse", "gamepad"] as const;
export type InterfaceInput = (typeof INTERFACE_INPUTS)[number];

/** Preset dell'Edit Mode da cui parte il layout (Modern o Classic), oppure uno fatto da zero. */
export const INTERFACE_PRESETS = ["modern", "classic", "custom"] as const;
export type InterfacePreset = (typeof INTERFACE_PRESETS)[number];

export const INTERFACE_LIMITS = {
  name: { min: 3, max: 60 },
  /** stringa Edit Mode: i campioni misurati vanno da 1.300 a 3.300 caratteri; margine largo */
  layout: { min: 40, max: 16000 },
  /** stringa del Cooldown Manager (versione|Base64), facoltativa */
  cooldowns: { max: 32000 },
  shots: { min: 1, max: 4 },
  classes: { max: 9 },
  addons: { max: 400 },
  description: { min: 80, max: 4000 },
  uiScale: { min: 0.4, max: 1.2 },
} as const;

/** Parole della descrizione sotto cui la scheda resta noindex (come le gilde). */
export const INTERFACE_MIN_WORDS = 60;
/** Interfacce pubblicate per iscritto (uguale al trigger `enforce_interface_limit`). */
export const INTERFACES_PER_USER = 10;
/** Bucket pubblico dello Storage con gli screenshot, una cartella per iscritto: `<id>/<uuid>.webp`. */
export const INTERFACE_SHOTS_BUCKET = "interface-shots";
/** Peso massimo di uno screenshot caricato (il limite del bucket). Il browser lo riduce e lo converte in WebP prima. */
export const INTERFACE_SHOT_MAX_BYTES = 3 * 1024 * 1024;
/** Lato lungo massimo dello screenshot dopo la riduzione nel browser. */
export const INTERFACE_SHOT_MAX_SIDE = 1920;
/** Tipi di file ammessi per gli screenshot (uguali a `allowed_mime_types` del bucket). */
export const INTERFACE_SHOT_TYPES = ["image/webp", "image/png", "image/jpeg"] as const;

export type InterfaceStatus = "published" | "hidden";

export type InterfaceFields = {
  name: string;
  layout: string;
  cooldowns: string;
  shots: string[];
  classes: InterfaceClass[];
  roles: InterfaceRole[];
  input: InterfaceInput;
  preset: InterfacePreset;
  resolution: string;
  uiScale: number | null;
  addons: string;
  descriptionLang: Locale;
  description: string;
};

export type InterfaceFieldError =
  | "invalidName"
  | "layoutShort"
  | "layoutLong"
  | "invalidLayout"
  | "cooldownsLong"
  | "invalidCooldowns"
  | "noShots"
  | "tooManyShots"
  | "invalidShot"
  | "invalidInput"
  | "invalidPreset"
  | "invalidResolution"
  | "invalidScale"
  | "addonsLong"
  | "invalidLang"
  | "descriptionShort"
  | "descriptionLong";

/** Un'interfaccia come la leggono le pagine: la riga più il profilo di chi l'ha pubblicata. */
export type CommunityInterface = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  layout: string;
  cooldowns: string;
  shots: string[];
  classes: InterfaceClass[];
  roles: InterfaceRole[];
  input: InterfaceInput;
  preset: InterfacePreset;
  resolution: string;
  ui_scale: number | null;
  addons: string;
  description_lang: Locale;
  description: string;
  game_version: string;
  status: InterfaceStatus;
  created_at: string;
  updated_at: string;
  profile?: { username: string | null; display_name: string | null; avatar_url: string | null; badge: string | null } | null;
};

export const INTERFACE_SELECT =
  "id, slug, owner, name, layout, cooldowns, shots, classes, roles, input, preset, resolution, ui_scale, addons, description_lang, description, game_version, status, created_at, updated_at, profile:profiles!community_interfaces_owner_fkey(username, display_name, avatar_url, badge)";

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

/**
 * Stringa di un layout Edit Mode, come esce da Condividi: testo in chiaro che comincia con due numeri (versione del
 * formato e numero degli elementi) separati da uno spazio, poi i record degli elementi. Lo stesso controllo di wago.io
 * (`^\d+ \d+`), più: solo caratteri ASCII stampabili, nessun `<` (non è mai HTML). Gli a capo incollati per sbaglio
 * diventano spazi; gli spazi interni restano com'erano (sono i separatori dei campi).
 */
export const LAYOUT_HEAD_RE = /^(\d{1,3}) (\d{1,3})(?: |$)/;

export function cleanLayout(raw: unknown): string {
  return String(raw ?? "")
    .replace(/\r\n?|\n/g, " ")
    .trim();
}

export function checkLayout(raw: unknown): { ok: true; layout: string; formatVersion: number; elements: number } | { ok: false; error: "layoutShort" | "layoutLong" | "invalidLayout" } {
  const layout = cleanLayout(raw);
  if (layout.length < INTERFACE_LIMITS.layout.min) return { ok: false, error: "layoutShort" };
  if (layout.length > INTERFACE_LIMITS.layout.max) return { ok: false, error: "layoutLong" };
  if (!/^[\x20-\x7e]+$/.test(layout) || layout.includes("<")) return { ok: false, error: "invalidLayout" };
  const m = LAYOUT_HEAD_RE.exec(layout);
  if (!m) return { ok: false, error: "invalidLayout" };
  const elements = Number(m[2]);
  if (elements < 1) return { ok: false, error: "invalidLayout" };
  return { ok: true, layout, formatVersion: Number(m[1]), elements };
}

/** Stringa del Cooldown Manager: `versione|Base64` (codice dell'interfaccia di Forever, CooldownViewerSettings). Vuota resta vuota. */
export const COOLDOWNS_RE = /^\d{1,3}\|[A-Za-z0-9+/]+={0,2}$/;

export function checkCooldowns(raw: unknown): { ok: true; cooldowns: string } | { ok: false; error: "cooldownsLong" | "invalidCooldowns" } {
  const s = String(raw ?? "").replace(/\s+/g, "");
  if (!s) return { ok: true, cooldowns: "" };
  if (s.length > INTERFACE_LIMITS.cooldowns.max) return { ok: false, error: "cooldownsLong" };
  if (!COOLDOWNS_RE.test(s) || s.length < 16) return { ok: false, error: "invalidCooldowns" };
  return { ok: true, cooldowns: s };
}

/** Il nome che il sito dà a uno screenshot caricato: un uuid minuscolo con l'estensione del tipo. Uguale alla policy del bucket. */
export const SHOT_NAME_RE = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}\\.(webp|png|jpg)";
const UUID = "[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}";

/** Lo screenshot sta nella cartella di QUESTO utente? (`<id>/<uuid>.webp`) */
export function shotPathOk(userId: string, path: unknown): path is string {
  if (typeof path !== "string" || !new RegExp(`^${UUID}$`).test(userId)) return false;
  return new RegExp(`^${userId}/${SHOT_NAME_RE}$`).test(path);
}

/** Stesso controllo senza conoscere l'utente (pagine pubbliche): una cartella con un id valido. */
export function anyShotPathOk(path: unknown): path is string {
  return typeof path === "string" && new RegExp(`^${UUID}/${SHOT_NAME_RE}$`).test(path);
}

/** Indirizzo pubblico di uno screenshot nel bucket. */
export function shotUrl(supabaseUrl: string, path: string): string {
  return `${supabaseUrl}/storage/v1/object/public/${INTERFACE_SHOTS_BUCKET}/${path}`;
}

/** Risoluzione scritta dall'autore: "1920x1080", "2560 × 1440" o "3440X1440" diventano "1920x1080". Vuota resta vuota. */
export function normalizeResolution(raw: unknown): string | null {
  const s = cleanLine(raw, 20);
  if (!s) return "";
  const m = /^(\d{3,5})\s*[x×X*]\s*(\d{3,5})$/.exec(s);
  if (!m) return null;
  const [w, h] = [Number(m[1]), Number(m[2])];
  if (w < 640 || h < 480 || w > 15360 || h > 8640) return null;
  return `${w}x${h}`;
}

/** Scala dell'interfaccia (l'opzione "UI Scale" del gioco): numero con la virgola o il punto, due decimali. Vuota = null. */
export function normalizeScale(raw: unknown): number | null | false {
  const s = String(raw ?? "").trim().replace(",", ".");
  if (!s) return null;
  if (!/^\d(\.\d{1,3})?$/.test(s)) return false;
  const n = Math.round(Number(s) * 100) / 100;
  if (n < INTERFACE_LIMITS.uiScale.min || n > INTERFACE_LIMITS.uiScale.max) return false;
  return n;
}

/** Controlla i campi del modulo; restituisce i valori puliti o il primo errore con il campo da evidenziare. */
export function checkInterfaceFields(
  input: Record<string, unknown>,
  userId: string,
  locales: readonly string[],
): { ok: true; fields: InterfaceFields; formatVersion: number; elements: number } | { ok: false; error: InterfaceFieldError; field: keyof InterfaceFields } {
  const name = cleanLine(input.name, INTERFACE_LIMITS.name.max);
  if (name.length < INTERFACE_LIMITS.name.min) return { ok: false, error: "invalidName", field: "name" };
  const layout = checkLayout(input.layout);
  if (!layout.ok) return { ok: false, error: layout.error, field: "layout" };
  const cooldowns = checkCooldowns(input.cooldowns);
  if (!cooldowns.ok) return { ok: false, error: cooldowns.error, field: "cooldowns" };
  const rawShots = (Array.isArray(input.shots) ? input.shots : input.shots ? [input.shots] : []).map(String).filter(Boolean);
  const shots = [...new Set(rawShots)];
  if (shots.length < INTERFACE_LIMITS.shots.min) return { ok: false, error: "noShots", field: "shots" };
  if (shots.length > INTERFACE_LIMITS.shots.max) return { ok: false, error: "tooManyShots", field: "shots" };
  if (!shots.every((p) => shotPathOk(userId, p))) return { ok: false, error: "invalidShot", field: "shots" };
  const classes = pickMany(input.classes, INTERFACE_CLASSES);
  const roles = pickMany(input.roles, INTERFACE_ROLES);
  if (!oneOf(input.input, INTERFACE_INPUTS)) return { ok: false, error: "invalidInput", field: "input" };
  if (!oneOf(input.preset, INTERFACE_PRESETS)) return { ok: false, error: "invalidPreset", field: "preset" };
  const resolution = normalizeResolution(input.resolution);
  if (resolution === null) return { ok: false, error: "invalidResolution", field: "resolution" };
  const uiScale = normalizeScale(input.uiScale);
  if (uiScale === false) return { ok: false, error: "invalidScale", field: "uiScale" };
  const addons = cleanText(input.addons, INTERFACE_LIMITS.addons.max + 1);
  if (addons.length > INTERFACE_LIMITS.addons.max) return { ok: false, error: "addonsLong", field: "addons" };
  const lang = String(input.descriptionLang ?? "");
  if (!locales.includes(lang)) return { ok: false, error: "invalidLang", field: "descriptionLang" };
  const description = cleanText(input.description, INTERFACE_LIMITS.description.max + 1);
  if (description.length < INTERFACE_LIMITS.description.min) return { ok: false, error: "descriptionShort", field: "description" };
  if (description.length > INTERFACE_LIMITS.description.max) return { ok: false, error: "descriptionLong", field: "description" };
  return {
    ok: true,
    formatVersion: layout.formatVersion,
    elements: layout.elements,
    fields: { name, layout: layout.layout, cooldowns: cooldowns.cooldowns, shots, classes, roles, input: input.input, preset: input.preset, resolution, uiScale, addons, descriptionLang: lang as Locale, description },
  };
}

/** Parole della descrizione (una parola ha almeno una lettera o una cifra). */
export function interfaceWords(text: string): number {
  return text.split(/\s+/).filter((w) => /[\p{L}\p{N}]/u.test(w)).length;
}

/** La scheda si indicizza solo nella lingua della descrizione e con abbastanza parole. */
export function interfaceIndexable(i: Pick<CommunityInterface, "status" | "description">): boolean {
  return i.status === "published" && interfaceWords(i.description) >= INTERFACE_MIN_WORDS;
}

/** Il layout funziona senza addon? (l'autore non ne ha elencato nessuno) */
export function addonFree(i: Pick<CommunityInterface, "addons">): boolean {
  return !i.addons.trim();
}

/** Elementi dell'interfaccia dichiarati nella stringa (il secondo numero in testa), per la scheda. */
export function layoutElements(layout: string): number | null {
  const m = LAYOUT_HEAD_RE.exec(layout);
  return m ? Number(m[2]) : null;
}

export function slugBase(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60)
    .replace(/-+$/, "");
}

/** Slug unico: base dal nome più quattro caratteri casuali (`random` sostituibile nei test). */
export function newInterfaceSlug(name: string, random: () => number = Math.random): string {
  const tail = Array.from({ length: 4 }, () => "abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(random() * 36)]).join("");
  const base = slugBase(name);
  return `${base.length >= 3 ? base : `ui-${base}`.replace(/-$/, "")}-${tail}`;
}

export const INTERFACE_SLUG_RE = /^[a-z0-9-]{3,80}$/;

export function interfacePath(slug: string): string {
  return `/interfaces/${slug}`;
}

/** L'errore di PostgREST quando la tabella non esiste ancora (migrazione non applicata): il sito dice "non attivo". */
export function interfaceTableMissing(error: { code?: string; message?: string } | null | undefined): boolean {
  if (!error) return false;
  if (error.code === "42P01" || error.code === "PGRST205" || error.code === "PGRST204") return true;
  const m = (error.message ?? "").toLowerCase();
  return /community_interfaces|interface_votes|interface_ratings|interface_reports/.test(m) && /does not exist|could not find|not found/.test(m);
}

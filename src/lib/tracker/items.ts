/**
 * Oggetti, provenienze e prezzi dall'app ForeverMeta Companion al sito (11/11/2026, fase 1 del tracker degli oggetti;
 * contratto in forevermeta-addons/tracker/docs/formato.md, guida in docs/tracker.md). La rotta /api/tracker/items
 * controlla qui la busta e le righe prima di chiamare `tracker_items_submit` (blocco "11/11/2026: OGGETTI" di
 * supabase/schema.sql), che rifà gli stessi controlli: `isItemRow` e `tracker_item_row_ok` devono restare uguali (il
 * test li confronta sui limiti, la prova su PGlite riga per riga).
 *
 * Regole: chiavi ammesse per tipo e niente di più (una chiave in più scarta la riga, così nessun campo nuovo, magari
 * con un nome di giocatore, passa senza che il sito lo sappia); ore Unix in secondi dal 2026 a domani; prezzi in rame.
 * Funzioni pure, senza import del sito.
 */

export const ITEM_LIMITS = {
  /** righe per chiamata */
  batch: 200,
  /** voci di prezzo (somma di `e` delle righe ah) per chiamata */
  pricesPerCall: 5000,
  /** voci di una riga ah */
  ahEntries: 500,
  /** righe per utente al giorno (UTC), contate anche quelle scartate */
  perDay: 20000,
  /** righe ah per utente al giorno */
  ahPerDay: 300,
  /** corpo della richiesta */
  bodyBytes: 512 * 1024,
  name: 200,
  tooltipLines: 40,
  tooltipLine: 300,
  stats: 40,
  realm: 60,
  /** quanti utenti diversi servono per "verificato" (tracker_items_verify_min) */
  verifyMin: 3,
} as const;

/** La prima ora accettata: 1/1/2026 00:00 UTC, in secondi. */
export const EARLIEST_T = 1767225600;
const DAY_S = 86_400;
const MAX_PRICE = 10_000_000_000_000;

export const ITEM_KEY_RE = /^[0-9]{1,7}(:-?[0-9]{1,6}(:[0-9]{1,6}([.][0-9]{1,6}){0,15})?)?$/;
export const LOOT_SOURCE_RE = /^(npc|obj|item):[0-9]{1,9}$/;
export const VENDOR_SOURCE_RE = /^npc:[0-9]{1,9}$/;
export const QUEST_SOURCE_RE = /^quest:[0-9]{1,9}$/;
export const GUID_HASH_RE = /^[0-9a-f]{8}$/;
export const LOCALE_RE = /^[a-z]{2}[A-Z]{2}$/;
export const EQUIP_RE = /^(INVTYPE_[A-Z0-9_]{1,30})?$/;
export const STAT_RE = /^[A-Z0-9_]{1,60}$/;
const hasControl = (s: string) => Array.from(s).some((c) => c.charCodeAt(0) < 32 || c.charCodeAt(0) === 127);

export const ROW_KINDS = ["open", "loot", "vendor", "quest", "inspect", "chat", "item", "ah"] as const;
export type RowKind = (typeof ROW_KINDS)[number];
export const AH_SOURCES = ["replicate", "browse", "commodity", "item"] as const;
export const REGIONS = ["US", "EU", "KR", "TW", "CN"] as const;
export const FACTIONS = ["Alliance", "Horde", "Neutral"] as const;

/** Le chiavi ammesse per ogni tipo di riga (contratto §1 e §2). */
export const ROW_KEYS: Record<RowKind, readonly string[]> = {
  open: ["k", "t", "s", "z", "l", "g"],
  loot: ["k", "t", "i", "n", "s", "z", "l", "g"],
  vendor: ["k", "t", "i", "s", "z", "p", "n", "a", "x"],
  quest: ["k", "t", "i", "s", "n", "ch"],
  inspect: ["k", "t", "i"],
  chat: ["k", "t", "i"],
  item: ["k", "t", "i", "name", "loc", "q", "il", "rl", "c", "sc", "eq", "b", "st", "tt"],
  ah: ["k", "t", "src", "r", "rm", "f", "e"],
};

export type ItemRow = { k: RowKind; t: number } & Record<string, unknown>;

const isObj = (x: unknown): x is Record<string, unknown> => typeof x === "object" && x !== null && !Array.isArray(x);
const absent = (r: Record<string, unknown>, k: string) => r[k] === undefined || r[k] === null;
const num = (v: unknown, lo: number, hi: number, int: boolean) => typeof v === "number" && Number.isFinite(v) && v >= lo && v <= hi && (!int || Number.isInteger(v));
/** Lunghezza in caratteri Unicode, come char_length di Postgres. */
const chars = (s: string) => Array.from(s).length;
const text = (v: unknown, max: number) => typeof v === "string" && chars(v) >= 1 && chars(v) <= max;

/** Chiave di un oggetto come nel contratto (id 1..9.999.999, suffisso casuale, bonus). */
export function isItemKey(v: unknown): v is string {
  return typeof v === "string" && ITEM_KEY_RE.test(v) && Number(v.split(":")[0]) >= 1;
}

/** Una voce di prezzo: [chiave, minimo, mediana, quantità, aste]. */
function isPriceEntry(x: unknown): boolean {
  return Array.isArray(x) && x.length === 5 && isItemKey(x[0]) && num(x[1], 0, MAX_PRICE, false) && num(x[2], 0, MAX_PRICE, false) && num(x[3], 1, 10_000_000, true) && num(x[4], 1, 1_000_000, true);
}

/**
 * Una riga di /api/tracker/items ha la forma del contratto? Stessi controlli di `tracker_item_row_ok`. `nowMs` per i
 * test; l'ora della riga può arrivare fino a un giorno dopo (orologi dei PC sbagliati).
 */
export function isItemRow(x: unknown, nowMs = Date.now()): x is ItemRow {
  if (!isObj(x) || typeof x.k !== "string" || !(ROW_KINDS as readonly string[]).includes(x.k)) return false;
  const k = x.k as RowKind;
  const allowed = ROW_KEYS[k];
  if (Object.keys(x).some((key) => !allowed.includes(key))) return false;
  if (!num(x.t, EARLIEST_T, nowMs / 1000 + DAY_S, true)) return false;
  if (k !== "open" && k !== "ah" && !isItemKey(x.i)) return false;
  if (k === "open" || k === "loot" || k === "vendor" || k === "quest") {
    if (typeof x.s !== "string") return false;
    const re = k === "vendor" ? VENDOR_SOURCE_RE : k === "quest" ? QUEST_SOURCE_RE : LOOT_SOURCE_RE;
    if (!re.test(x.s)) return false;
  }
  if (!absent(x, "z") && !num(x.z, 0, 1_000_000, true)) return false;
  if (!absent(x, "l") && !num(x.l, 1, 100, true)) return false;
  if (!absent(x, "g") && !(typeof x.g === "string" && GUID_HASH_RE.test(x.g))) return false;
  if (!absent(x, "n") && !num(x.n, 1, 10_000, true)) return false;
  if (k === "vendor") {
    if (!num(x.p, 0, MAX_PRICE, true)) return false;
    if (!absent(x, "a") && !num(x.a, -1, 1_000_000, true)) return false;
    if (!absent(x, "x") && typeof x.x !== "boolean") return false;
  }
  if (k === "quest" && !absent(x, "ch") && typeof x.ch !== "boolean") return false;
  if (k === "item") {
    if (!absent(x, "name") && !text(x.name, ITEM_LIMITS.name)) return false;
    if (!absent(x, "loc") && !(typeof x.loc === "string" && LOCALE_RE.test(x.loc))) return false;
    if (absent(x, "loc") && !(absent(x, "name") && absent(x, "tt"))) return false;
    if (!absent(x, "q") && !num(x.q, 0, 8, true)) return false;
    if (!absent(x, "il") && !num(x.il, 0, 1000, true)) return false;
    if (!absent(x, "rl") && !num(x.rl, 0, 100, true)) return false;
    if (!absent(x, "c") && !num(x.c, 0, 30, true)) return false;
    if (!absent(x, "sc") && !num(x.sc, 0, 100, true)) return false;
    if (!absent(x, "eq") && !(typeof x.eq === "string" && EQUIP_RE.test(x.eq))) return false;
    if (!absent(x, "b") && !num(x.b, 0, 9, true)) return false;
    if (!absent(x, "st")) {
      if (!isObj(x.st)) return false;
      const entries = Object.entries(x.st);
      if (entries.length > ITEM_LIMITS.stats || entries.some(([key, v]) => !STAT_RE.test(key) || !num(v, -1_000_000, 1_000_000, false))) return false;
    }
    if (!absent(x, "tt")) {
      if (!Array.isArray(x.tt) || x.tt.length > ITEM_LIMITS.tooltipLines) return false;
      if (x.tt.some((line) => typeof line !== "string" || chars(line) > ITEM_LIMITS.tooltipLine)) return false;
    }
  }
  if (k === "ah") {
    if (typeof x.src !== "string" || !(AH_SOURCES as readonly string[]).includes(x.src)) return false;
    if (typeof x.r !== "string" || !(REGIONS as readonly string[]).includes(x.r)) return false;
    if (!text(x.rm, ITEM_LIMITS.realm) || hasControl(x.rm as string)) return false;
    if (typeof x.f !== "string" || !(FACTIONS as readonly string[]).includes(x.f)) return false;
    if (!Array.isArray(x.e) || x.e.length < 1 || x.e.length > ITEM_LIMITS.ahEntries || !x.e.every(isPriceEntry)) return false;
  }
  return true;
}

export type ItemPayload = { v: 1; addon?: string; client?: { version?: string; build?: string; locale?: string }; batch: unknown[] };

export type PayloadCheck = { ok: true; payload: ItemPayload; rows: ItemRow[]; invalid: number } | { ok: false };

const ADDON_RE = /^[0-9A-Za-z.+-]{1,20}$/;
const BUILD_RE = /^[0-9]{1,7}$/;
const VERSION_RE = /^[0-9.]{1,20}$/;

/**
 * La busta della richiesta: `v` = 1, `batch` array di al massimo 200 righe con al massimo 5.000 voci di prezzo in tutto.
 * Una busta sbagliata è un 400; le righe che non hanno la forma prevista si contano in `invalid` e non partono.
 * Della busta passano al database solo `v`, `addon` e `client` puliti (la build del client finisce nei dettagli degli
 * oggetti).
 */
export function checkItemPayload(body: unknown, nowMs = Date.now()): PayloadCheck {
  if (!isObj(body) || body.v !== 1 || !Array.isArray(body.batch) || body.batch.length > ITEM_LIMITS.batch) return { ok: false };
  let prices = 0;
  for (const r of body.batch) if (isObj(r) && r.k === "ah" && Array.isArray(r.e)) prices += r.e.length;
  if (prices > ITEM_LIMITS.pricesPerCall) return { ok: false };
  const rows = body.batch.filter((r): r is ItemRow => isItemRow(r, nowMs));
  const client = isObj(body.client) ? body.client : {};
  const payload: ItemPayload = {
    v: 1,
    ...(typeof body.addon === "string" && ADDON_RE.test(body.addon) ? { addon: body.addon } : {}),
    client: {
      ...(typeof client.version === "string" && VERSION_RE.test(client.version) ? { version: client.version } : {}),
      ...(typeof client.build === "string" && BUILD_RE.test(client.build) ? { build: client.build } : {}),
      ...(typeof client.locale === "string" && LOCALE_RE.test(client.locale) ? { locale: client.locale } : {}),
    },
    batch: rows,
  };
  return { ok: true, payload, rows, invalid: body.batch.length - rows.length };
}

/** Righe del tooltip che il sito non tiene: fra "<" e ">" ("<Made by …>", "<Gift from …>", in ogni lingua). */
export const isNameLine = (line: string) => /^<.*>$/.test(line.trim());

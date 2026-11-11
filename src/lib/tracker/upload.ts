/**
 * Collegamento di ForeverMeta Companion all'account (11/11/2026, docs/tracker.md): codice monouso, token del PC, codici
 * d'errore delle rotte /api/tracker/*. Portato dal tracker di OriginsMeta (src/lib/tracker/upload.ts di upstream) senza
 * la parte delle partite di Origins. Funzioni pure, senza import del sito: le usano le rotte, le azioni e i test.
 */

/** Collegamento dell'app all'account (tracker_link_code, tracker_link_claim del blocco TRACKER di schema.sql). */
export const LINK = {
  /** caratteri del codice: niente 0/O e 1/I, che si confondono */
  alphabet: "ABCDEFGHJKLMNPQRSTUVWXYZ23456789",
  length: 8,
  minutes: 10,
  perHour: 5,
  maxDevices: 10,
} as const;

/** Il token che il database dà all'app una volta sola ("omt_" + 64 caratteri esadecimali). */
export const TOKEN_RE = /^omt_[0-9a-f]{64}$/;

/**
 * Codice di collegamento scritto dal giocatore → "ABCD-EFGH", o null se non ha 8 caratteri. Come `tracker_link_claim`:
 * i primi 40 caratteri, solo lettere e cifre, in maiuscolo (va bene anche "abcd efgh").
 */
export function normalizeLinkCode(input: unknown): string | null {
  const raw = String(input ?? "")
    .slice(0, 40)
    .replace(/[^A-Za-z0-9]/g, "")
    .toUpperCase();
  return raw.length === LINK.length ? `${raw.slice(0, 4)}-${raw.slice(4)}` : null;
}

export const isTrackerToken = (v: unknown): v is string => typeof v === "string" && TOKEN_RE.test(v);

/**
 * I codici con cui le funzioni del database si rifiutano (`raise exception '<codice>'`). L'ordine conta: "too_many" sta
 * per ultimo perché è contenuto in "too_many_codes" e "too_many_devices".
 */
export const TRACKER_ERRORS = ["not_authenticated", "too_many_codes", "invalid_code", "too_many_devices", "invalid_token", "bad_request", "too_many"] as const;
export type TrackerError = (typeof TRACKER_ERRORS)[number] | "unavailable" | "error";

/** Il codice di un errore del database (messaggio di Postgres o di PostgREST), "error" se non è uno dei nostri. */
export function trackerErrorCode(message: string | null | undefined): TrackerError {
  const text = message ?? "";
  return TRACKER_ERRORS.find((c) => text.includes(c)) ?? "error";
}

/** Lo stato HTTP delle rotte /api/tracker/* per ogni errore (contratto, §2). */
export function trackerErrorStatus(code: TrackerError): number {
  switch (code) {
    case "invalid_code":
    case "bad_request":
      return 400;
    case "invalid_token":
    case "not_authenticated":
      return 401;
    case "too_many_devices":
      return 409;
    case "too_many_codes":
    case "too_many":
      return 429;
    case "unavailable":
      return 503;
    default:
      return 500;
  }
}

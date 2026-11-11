import type { Db } from "@/lib/supabase/public";
import type { ContributionRow, TrackerDeviceRow } from "@/lib/supabase/database";

/**
 * Letture di /account/tracker (ForeverMeta Companion, 11/11/2026), con la sessione dell'utente: le policy dei blocchi
 * TRACKER e "11/11/2026: OGGETTI" di supabase/schema.sql gli lasciano leggere solo i suoi PC (senza l'impronta del
 * token) e i suoi contributi. Prima della migrazione (tabelle o colonne che mancano) `missing`: la pagina dice "non
 * ancora attiva" invece di rompersi.
 */

export type TrackerRead<T> = { status: "ok"; data: T } | { status: "missing" } | { status: "error" };

const MISSING = ["42P01", "42703", "PGRST204", "PGRST205"];
const isMissing = (error: { code?: string | null }) => MISSING.includes(error.code ?? "");

export type TrackerDevice = Pick<TrackerDeviceRow, "id" | "name" | "created_at" | "last_seen_at">;

/**
 * I PC collegati e non scollegati. Niente filtro su `owner`: authenticated legge solo alcune colonne dei PC (grant per
 * colonna, `owner` escluso) e un filtro su quella colonna darebbe "permission denied"; le righe sono già solo le sue
 * (policy "tracker devices: owner reads").
 */
export async function readTrackerDevices(supabase: Db): Promise<TrackerRead<TrackerDevice[]>> {
  const res = await supabase.from("tracker_devices").select("id, name, created_at, last_seen_at").is("revoked_at", null).order("created_at", { ascending: false });
  if (res.error) {
    if (isMissing(res.error)) return { status: "missing" };
    console.error("[tracker] PC collegati:", res.error.message);
    return { status: "error" };
  }
  return { status: "ok", data: (res.data ?? []) as TrackerDevice[] };
}

export type ContributionTotals = Omit<ContributionRow, "owner" | "day" | "updated_at" | "received" | "ah_received" | "ah">;
export type Contributions = { today: ContributionTotals | null; total: ContributionTotals; days: number };

const ZERO: ContributionTotals = { added: 0, items: 0, opens: 0, loot: 0, vendor: 0, quest: 0, inspect: 0, chat: 0, prices: 0 };
const KEYS = Object.keys(ZERO) as (keyof ContributionTotals)[];

/** Somma dei contributi per giorno: oggi (UTC) e il totale. Funzione pura (test). */
export function sumContributions(rows: Pick<ContributionRow, "day" | keyof ContributionTotals>[], todayIso: string): Contributions {
  const total = { ...ZERO };
  let today: ContributionTotals | null = null;
  for (const r of rows) {
    for (const k of KEYS) total[k] += Number(r[k]) || 0;
    if (r.day === todayIso) today = Object.fromEntries(KEYS.map((k) => [k, Number(r[k]) || 0])) as ContributionTotals;
  }
  return { today, total, days: rows.length };
}

/** I propri contributi (la policy dà solo le proprie righe; il filtro su `owner` rende la query esplicita). */
export async function readContributions(supabase: Db, userId: string, todayIso: string): Promise<TrackerRead<Contributions>> {
  const res = await supabase.from("contributions").select(`day, ${KEYS.join(", ")}`).eq("owner", userId).order("day", { ascending: false }).limit(3660);
  if (res.error) {
    if (isMissing(res.error)) return { status: "missing" };
    console.error("[tracker] contributi:", res.error.message);
    return { status: "error" };
  }
  return { status: "ok", data: sumContributions((res.data ?? []) as unknown as Pick<ContributionRow, "day" | keyof ContributionTotals>[], todayIso) };
}

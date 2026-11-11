import { NextResponse } from "next/server";
import { supabaseAnon } from "@/lib/supabase/public";
import { ITEM_LIMITS, checkItemPayload } from "@/lib/tracker/items";
import { TRACKER_HEADERS, bearerToken, dbErrorCode, readJsonBody, trackerFail } from "@/lib/tracker/http";

/**
 * Oggetti, provenienze e prezzi dall'app ForeverMeta Companion (11/11/2026, fase 1 del tracker degli oggetti; contratto
 * in forevermeta-addons/tracker/docs/formato.md, guida in docs/tracker.md).
 *
 * POST con "Authorization: Bearer omt_…" e {v: 1, addon, client, batch: [...]} (al massimo 512 KB, 200 righe, 5.000 voci
 * di prezzo) → {added, skipped}. La busta sbagliata è un 400 `bad_request`; le righe che non hanno la forma del
 * contratto non partono e contano in `skipped`, insieme a quelle che il database salta (stesso cadavere già contato).
 * Il database (tracker_items_submit) rifà tutti i controlli, verifica il token e i limiti del giorno (429 `too_many`).
 * Token sconosciuto o scollegato: 401 `invalid_token` (l'app si scollega). Migrazione non fatta: 503 `unavailable`.
 */
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const token = bearerToken(request);
  if (!token) return trackerFail("invalid_token");
  const db = supabaseAnon();
  if (!db) return trackerFail("unavailable");
  const body = await readJsonBody(request, ITEM_LIMITS.bodyBytes);
  if (!body.ok) return trackerFail("bad_request");
  const check = checkItemPayload(body.value);
  if (!check.ok) return trackerFail("bad_request");
  const { data, error } = await db.rpc("tracker_items_submit", { p_token: token, p_payload: check.payload });
  if (error) {
    const reason = dbErrorCode(error);
    if (reason === "error") console.error("[tracker] items:", error.message);
    return trackerFail(reason);
  }
  const added = typeof data?.added === "number" ? data.added : 0;
  const skipped = (typeof data?.skipped === "number" ? data.skipped : 0) + check.invalid;
  return NextResponse.json({ added, skipped }, { headers: TRACKER_HEADERS });
}

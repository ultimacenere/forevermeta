/**
 * Test del tracker degli oggetti (ForeverMeta Companion, 11/11/2026): `node --test src/lib/tracker/items.test.ts`.
 * - items.ts: righe e busta di /api/tracker/items (contratto in forevermeta-addons/tracker/docs/formato.md), e il
 *   confronto con il blocco "11/11/2026: OGGETTI" di supabase/schema.sql (stessi limiti, stesse espressioni regolari,
 *   stesse chiavi ammesse). Il confronto riga per riga con `tracker_item_row_ok` si fa su PGlite (docs/tracker.md).
 * - upload.ts: codice di collegamento, token, codici d'errore e stati HTTP.
 * - trackerQueries.ts (somma dei contributi) e trackerLabels.ts (tre lingue con le stesse chiavi).
 */
import { readFileSync } from "node:fs";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const I: typeof import("./items") = await import("./items.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const U: typeof import("./upload") = await import("./upload.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const Q: typeof import("../community/trackerQueries") = await import("../community/trackerQueries.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const L: typeof import("../trackerLabels") = await import("../trackerLabels.ts");

const NOW = Date.UTC(2026, 10, 11, 12, 0, 0);
const T = NOW / 1000 - 3600;
const schema = readFileSync(new URL("../../../supabase/schema.sql", import.meta.url), "utf8");
const block = schema.slice(schema.indexOf("-- ===== 11/11/2026: OGGETTI ====="));

const valid = {
  open: { k: "open", t: T, s: "npc:1234", z: 1429, l: 12, g: "a1b2c3d4" },
  loot: { k: "loot", t: T, i: "2589", n: 2, s: "npc:1234", z: 1429, l: 12, g: "a1b2c3d4" },
  vendor: { k: "vendor", t: T, i: "159", s: "npc:5611", z: 1453, p: 25, n: 1, a: -1, x: false },
  quest: { k: "quest", t: T, i: "6070", s: "quest:123", n: 1, ch: true },
  inspect: { k: "inspect", t: T, i: "16922" },
  chat: { k: "chat", t: T, i: "12784:-12:6654.1712" },
  item: { k: "item", t: T, i: "19019", name: "Thunderfury", loc: "enUS", q: 5, il: 80, rl: 60, c: 2, sc: 7, eq: "INVTYPE_WEAPON", b: 1, st: { ITEM_MOD_AGILITY_SHORT: 5, ITEM_MOD_DAMAGE_PER_SECOND_SHORT: 53.9 }, tt: ["Thunderfury", "Binds when picked up"] },
  ah: { k: "ah", t: T, src: "replicate", r: "EU", rm: "PvE", f: "Horde", e: [["2589", 12, 15.5, 340, 9]] },
};

describe("righe di /api/tracker/items", () => {
  test("una riga giusta per ogni tipo passa", () => {
    for (const [kind, row] of Object.entries(valid)) assert.equal(I.isItemRow(row, NOW), true, kind);
  });

  test("una chiave in più scarta la riga (niente campi nuovi con nomi di giocatori)", () => {
    for (const [kind, row] of Object.entries(valid)) assert.equal(I.isItemRow({ ...row, player: "Qualcuno" }, NOW), false, kind);
    assert.equal(I.isItemRow({ ...valid.chat, id: 4 }, NOW), false, "l'id dei SavedVariables non parte");
  });

  test("ora fra il 2026 e domani, in secondi interi", () => {
    assert.equal(I.isItemRow({ ...valid.inspect, t: I.EARLIEST_T - 1 }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.inspect, t: NOW / 1000 + 2 * 86400 }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.inspect, t: T + 0.5 }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.inspect, t: String(T) }, NOW), false);
  });

  test("chiavi degli oggetti come nel contratto", () => {
    for (const k of ["1", "9999999", "2589:0", "2589:-12", "2589:0:6654", "2589:0:1.2.3"]) assert.equal(I.isItemKey(k), true, k);
    for (const k of ["0", "10000000", "2589:", "2589::1", "a", "2589:0:1:2", 2589]) assert.equal(I.isItemKey(k), false, String(k));
  });

  test("fonti giuste per tipo", () => {
    assert.equal(I.isItemRow({ ...valid.loot, s: "obj:1731" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.loot, s: "item:0" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.loot, s: "de:14145" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.open, s: "de:14145" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.vendor, s: "de:14145" }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.loot, s: "quest:1" }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.vendor, s: "obj:1" }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.quest, s: "npc:1" }, NOW), false);
    const noSource: Record<string, unknown> = { ...valid.open };
    delete noSource.s;
    assert.equal(I.isItemRow(noSource, NOW), false);
  });

  test("campi facoltativi assenti o null, obbligatori presenti", () => {
    assert.equal(I.isItemRow({ k: "loot", t: T, i: "1", s: "npc:1" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.loot, z: null, l: null, g: null }, NOW), true);
    assert.equal(I.isItemRow({ k: "item", t: T, i: "1" }, NOW), true, "solo la chiave");
    assert.equal(I.isItemRow({ k: "item", t: T, i: "1", name: "X" }, NOW), false, "nome senza lingua");
    assert.equal(I.isItemRow({ k: "vendor", t: T, i: "1", s: "npc:1" }, NOW), false, "mercante senza prezzo");
    assert.equal(I.isItemRow({ ...valid.loot, g: "A1B2C3D4" }, NOW), false, "impronta in maiuscolo");
  });

  test("dettagli dell'oggetto: limiti", () => {
    assert.equal(I.isItemRow({ ...valid.item, tt: Array.from({ length: 41 }, () => "a") }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.item, tt: ["a".repeat(301)] }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.item, st: { lower: 1 } }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.item, eq: "" }, NOW), true);
    assert.equal(I.isItemRow({ ...valid.item, q: 9 }, NOW), false);
  });

  test("asta: voci [chiave, minimo, mediana, quantità, aste], al massimo 500", () => {
    assert.equal(I.isItemRow({ ...valid.ah, e: [] }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.ah, e: Array.from({ length: 501 }, () => ["1", 1, 1, 1, 1]) }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.ah, e: [["1", 1, 1, 0, 1]] }, NOW), false, "quantità 0");
    assert.equal(I.isItemRow({ ...valid.ah, e: [["1", 1, 1, 1]] }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.ah, f: "horde" }, NOW), false);
    assert.equal(I.isItemRow({ ...valid.ah, rm: "PvE\n" }, NOW), false);
  });
});

describe("busta della richiesta", () => {
  test("v = 1, al massimo 200 righe e 5.000 prezzi; le righe sbagliate non partono", () => {
    assert.equal(I.checkItemPayload({ v: 2, batch: [] }, NOW).ok, false);
    assert.equal(I.checkItemPayload({ v: 1 }, NOW).ok, false);
    assert.equal(I.checkItemPayload({ v: 1, batch: Array.from({ length: 201 }, () => valid.inspect) }, NOW).ok, false);
    const ah = { ...valid.ah, e: Array.from({ length: 500 }, () => ["1", 1, 1, 1, 1]) };
    assert.equal(I.checkItemPayload({ v: 1, batch: Array.from({ length: 10 }, () => ah) }, NOW).ok, true);
    assert.equal(I.checkItemPayload({ v: 1, batch: Array.from({ length: 11 }, () => ah) }, NOW).ok, false);
    const r = I.checkItemPayload({ v: 1, addon: "0.1.0", client: { version: "1.60.1", build: "70888", locale: "enUS", account: "segreto" }, batch: [valid.loot, { ...valid.chat, id: 1 }, "x"] }, NOW);
    assert.ok(r.ok);
    assert.equal(r.rows.length, 1);
    assert.equal(r.invalid, 2);
    assert.deepEqual(r.payload.client, { version: "1.60.1", build: "70888", locale: "enUS" }, "della busta passano solo i campi noti");
    assert.deepEqual(r.payload.batch, [valid.loot]);
  });
});

describe("stessi limiti del blocco OGGETTI di schema.sql", () => {
  test("numeri e regex", () => {
    assert.ok(block.includes("if n > 200 then raise exception 'bad_request'"), "200 righe");
    assert.ok(block.includes("if n_prices > 5000 then raise exception 'bad_request'"), "5.000 prezzi");
    assert.ok(block.includes("coalesce(c_received, 0) + n > 20000 or coalesce(c_ah, 0) + n_ah > 300"), "limiti del giorno");
    assert.ok(block.includes("jsonb_array_length(e) not between 1 and 500"), "500 voci");
    assert.ok(block.includes("select 3;"), "verificato da 3");
    assert.equal(I.ITEM_LIMITS.batch, 200);
    assert.equal(I.ITEM_LIMITS.pricesPerCall, 5000);
    assert.equal(I.ITEM_LIMITS.perDay, 20000);
    assert.equal(I.ITEM_LIMITS.ahPerDay, 300);
    assert.equal(I.ITEM_LIMITS.verifyMin, 3);
    assert.ok(block.includes(`'${I.ITEM_KEY_RE.source}'`), "regex della chiave");
    assert.ok(block.includes("'^(npc|obj|item|de):[0-9]{1,9}$'") && I.LOOT_SOURCE_RE.source === "^(npc|obj|item|de):[0-9]{1,9}$");
    assert.ok(block.includes("'^(npc|obj|item|de|quest):[0-9]{1,9}$'"), "fonti di item_sources");
    assert.ok(!block.includes("(npc|obj|item):") && !block.includes("(npc|obj|item|quest):"), "nessuna regex vecchia");
    assert.ok(block.includes(`tracker_num_ok(r -> 't', ${I.EARLIEST_T},`), "prima ora");
    assert.ok(block.includes("tracker_text_ok(r -> 'name', 200)") && block.includes("char_length(x #>> '{}') > 300") && block.includes("tracker_text_ok(r -> 'rm', 60)"));
  });

  test("chiavi ammesse per tipo", () => {
    for (const [kind, keys] of Object.entries(I.ROW_KEYS)) {
      const sql = `when '${kind}' then array[${keys.map((k) => `'${k}'`).join(", ")}]`;
      assert.ok(block.includes(sql), `${kind}: ${sql}`);
    }
  });
});

describe("collegamento ed errori", () => {
  test("codice e token", () => {
    assert.equal(U.normalizeLinkCode("abcd efgh"), "ABCD-EFGH");
    assert.equal(U.normalizeLinkCode("ABC"), null);
    assert.equal(U.isTrackerToken("omt_" + "a".repeat(64)), true);
    assert.equal(U.isTrackerToken("omt_" + "A".repeat(64)), false);
  });

  test("codici del database e stati HTTP del contratto", () => {
    assert.equal(U.trackerErrorCode("too_many_devices"), "too_many_devices");
    assert.equal(U.trackerErrorCode("too_many_codes"), "too_many_codes");
    assert.equal(U.trackerErrorCode("too_many"), "too_many");
    assert.equal(U.trackerErrorCode("bad_request"), "bad_request");
    assert.equal(U.trackerErrorCode("boh"), "error");
    const status = { bad_request: 400, invalid_code: 400, invalid_token: 401, too_many_devices: 409, too_many: 429, unavailable: 503, error: 500 } as const;
    for (const [code, s] of Object.entries(status)) assert.equal(U.trackerErrorStatus(code as keyof typeof status), s, code);
  });
});

describe("contributi e testi", () => {
  test("somma dei contributi: oggi e totale", () => {
    const row = (day: string, n: number) => ({ day, added: n, items: n, opens: n, loot: n, vendor: n, quest: n, inspect: n, chat: n, prices: n * 10 });
    const r = Q.sumContributions([row("2026-11-11", 2), row("2026-11-10", 3)], "2026-11-11");
    assert.equal(r.days, 2);
    assert.equal(r.today?.loot, 2);
    assert.equal(r.total.prices, 50);
    assert.equal(Q.sumContributions([row("2026-11-10", 3)], "2026-11-11").today, null);
  });

  test("tre lingue con le stesse chiavi", () => {
    const shape = (o: unknown): unknown => (typeof o === "object" && o !== null ? (Array.isArray(o) ? o.length : Object.fromEntries(Object.entries(o).map(([k, v]) => [k, shape(v)]))) : typeof o);
    assert.deepEqual(shape(L.trackerLabels.it), shape(L.trackerLabels.en));
    assert.deepEqual(shape(L.trackerLabels.es), shape(L.trackerLabels.en));
    for (const l of ["en", "it", "es"] as const) assert.ok(L.trackerLabels[l].link.expires.includes("{time}"));
    assert.equal(L.fillTracker("fino alle {time}", { time: "12:00" }), "fino alle 12:00");
  });
});

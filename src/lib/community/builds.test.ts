// Regole delle build pubblicate (23/10/2026): `npm test`.
import * as nodeModule from "node:module";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

type Resolved = { url: string; format?: string | null; shortCircuit?: boolean };
type ResolveHook = (specifier: string, context: object, next: (specifier: string, context?: object) => Resolved) => Resolved;
const { registerHooks } = nodeModule as unknown as { registerHooks: (hooks: { resolve: ResolveHook }) => void };
registerHooks({
  resolve(specifier, context, next) {
    if (/^\.\.?\//.test(specifier) && !/\.(?:[cm]?[jt]sx?|json)$/.test(specifier)) {
      try {
        return next(`${specifier}.ts`, context);
      } catch {
        // non è un modulo .ts
      }
    }
    return next(specifier, context);
  },
});

// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const b: typeof import("./builds") = await import("./builds.ts");
const { BUILD_LIMITS, BUILD_SLUG_RE, checkFields, cleanText, guideWords, buildIndexable, newSlug, pointsFromCode, tableMissing } = b;

const locales = ["en", "it", "es"];
const good = {
  name: "  Arms   PvE  ",
  purpose: "raid",
  guideLang: "it",
  summary: "Una build da raid per il Guerriero Arms con Mortal Strike e Sweeping Strikes.",
  plan: "Si parte da Improved Heroic Strike e Deflection per aprire la seconda fila, poi Tactical Mastery e Anger Management. A 30 punti si prende Mortal Strike e il resto va in Fury per Cruelty.",
  strengths: "",
  weaknesses: "",
  notes: "",
};

describe("campi del modulo", () => {
  test("testi puliti e nome normalizzato", () => {
    const r = checkFields(good, locales);
    assert.ok(r.ok);
    if (r.ok) {
      assert.equal(r.fields.name, "Arms PvE");
      assert.equal(r.fields.purpose, "raid");
      assert.equal(r.fields.guideLang, "it");
    }
  });
  test("errori nell'ordine dei campi", () => {
    assert.deepEqual(checkFields({ ...good, name: "ab" }, locales), { ok: false, error: "invalidName", field: "name" });
    assert.deepEqual(checkFields({ ...good, purpose: "fun" }, locales), { ok: false, error: "invalidPurpose", field: "purpose" });
    assert.deepEqual(checkFields({ ...good, guideLang: "fr" }, locales), { ok: false, error: "invalidLang", field: "guideLang" });
    assert.deepEqual(checkFields({ ...good, summary: "corto" }, locales), { ok: false, error: "summaryShort", field: "summary" });
    assert.deepEqual(checkFields({ ...good, summary: "x".repeat(BUILD_LIMITS.summary.max + 1) }, locales), { ok: false, error: "summaryLong", field: "summary" });
    assert.deepEqual(checkFields({ ...good, plan: "troppo corto" }, locales), { ok: false, error: "planShort", field: "plan" });
    assert.deepEqual(checkFields({ ...good, notes: "x".repeat(BUILD_LIMITS.notes.max + 1) }, locales), { ok: false, error: "notesLong", field: "notes" });
  });
  test("cleanText toglie i caratteri di controllo e le righe vuote di troppo", () => {
    assert.equal(cleanText("a\u0007b\r\n\r\n\r\n\r\nc  \n", 100), "ab\n\nc");
    assert.equal(cleanText("x".repeat(10), 4), "xxxx");
  });
});

describe("indicizzazione e slug", () => {
  test("le parole contano lettere e numeri, non i segni", () => {
    assert.equal(guideWords({ summary: "uno due tre", plan: "- - quattro 5", strengths: "", weaknesses: "", notes: "" }), 5);
    assert.equal(buildIndexable({ status: "published", summary: "parola ".repeat(80), plan: "", strengths: "", weaknesses: "", notes: "" }), true);
    assert.equal(buildIndexable({ status: "hidden", summary: "parola ".repeat(80), plan: "", strengths: "", weaknesses: "", notes: "" }), false);
    assert.equal(buildIndexable({ status: "published", summary: "poche parole", plan: "", strengths: "", weaknesses: "", notes: "" }), false);
  });
  test("slug dal nome con la coda casuale", () => {
    const s = newSlug("Arms PvE: Mortal Strike!", () => 0);
    assert.equal(s, "arms-pve-mortal-strike-aaaa");
    assert.match(s, BUILD_SLUG_RE);
    assert.match(newSlug("Ñandú élite", () => 0.5), /^nandu-elite-[a-z0-9]{4}$/);
    assert.match(newSlug("!!", () => 0), /^build-[a-z0-9]{4}$/);
  });
});

describe("varie", () => {
  test("somma dei punti dal codice", () => {
    assert.deepEqual(pointsFromCode("FW1.wa.hm.60.503.25.0"), [8, 7, 0]);
    assert.deepEqual(pointsFromCode("FW1.wa.xx.60"), [0, 0, 0]);
  });
  test("tabella mancante", () => {
    assert.equal(tableMissing({ code: "42P01", message: "relation does not exist" }), true);
    assert.equal(tableMissing({ code: "PGRST205", message: "Could not find the table 'public.community_builds'" }), true);
    assert.equal(tableMissing({ code: "23505", message: "duplicate key" }), false);
    assert.equal(tableMissing(null), false);
  });
});

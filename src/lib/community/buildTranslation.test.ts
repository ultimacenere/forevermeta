/**
 * Test della traduzione automatica delle build (`buildTranslation.ts`) con il runner integrato di Node:
 * `node --test src/lib/community/buildTranslation.test.ts` (in `npm test`). Nessuna chiamata all'API: si provano le parti
 * pure (impronta, scelta della versione, colonne leggere, indicizzazione, richiesta, controlli della risposta) e la
 * coerenza con lo schema SQL e con le lingue del sito.
 */
import * as nodeModule from "node:module";
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

type Resolved = { url: string; format?: string | null; shortCircuit?: boolean };
type ResolveHook = (specifier: string, context: object, next: (specifier: string, context?: object) => Resolved) => Resolved;
// I tipi di @types/node del progetto (20.x) non conoscono ancora `registerHooks`: la funzione c'è in Node 24.
const { registerHooks } = nodeModule as unknown as { registerHooks: (hooks: { resolve: ResolveHook }) => void };
// import senza estensione nei moduli del sito: Node vuole il .ts
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
const T: typeof import("./buildTranslation") = await import("./buildTranslation.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const B: typeof import("./builds") = await import("./builds.ts");

type Lang = "en" | "it" | "es";
const all: Lang[] = ["en", "it", "es"];
const here = new URL(".", import.meta.url);
const read = (rel: string) => readFileSync(new URL(rel, here), "utf8");

const base = {
  guide_lang: "it" as Lang,
  name: "Enha per livellare",
  summary: "Build Enhancement per salire di livello in fretta con Stormstrike e Flurry.",
  plan: "Prendi Ancestral Knowledge e Shield Specialization nelle prime file, poi Flurry e Stormstrike. In combattimento apri con Earth Shock.",
  strengths: "Danni alti a bersaglio singolo.",
  weaknesses: "",
  notes: "",
};

describe("testo e impronta", () => {
  test("il testo tiene nome, riassunto e piano, poi solo le sezioni piene, nell'ordine fisso", () => {
    assert.deepEqual(Object.keys(T.buildGuideText(base)), ["name", "summary", "plan", "strengths"]);
    assert.deepEqual(Object.keys(T.buildGuideText({ ...base, strengths: "  ", notes: "Nota" })), ["name", "summary", "plan", "notes"]);
  });

  test("stessa build, stessa impronta; cambia se cambiano nome, testo o lingua", () => {
    const a = T.buildGuideHash(base);
    assert.equal(a, T.buildGuideHash({ ...base }));
    assert.notEqual(a, T.buildGuideHash({ ...base, name: "Enha per livellare!" }));
    assert.notEqual(a, T.buildGuideHash({ ...base, plan: `${base.plan} ` }));
    assert.notEqual(a, T.buildGuideHash({ ...base, guide_lang: "es" }));
    assert.notEqual(a, T.buildGuideHash({ ...base, notes: "x" }));
  });
});

describe("scelta della versione da mostrare", () => {
  const hash = T.buildGuideHash(base);
  const translations = {
    en: { hash, at: "2026-10-23T20:00:00Z", guide: { name: "Enhancement for leveling", summary: "Leveling build.", plan: "Take Ancestral Knowledge first." } },
    es: { hash: "vecchia", at: "2026-10-23T19:00:00Z", guide: { name: "Vieja", summary: "Vieja", plan: "Vieja" } },
  };
  const b = { ...base, translations } as never;

  test("traduzione aggiornata: si mostra nella sua lingua", () => {
    const v = T.localizedBuild(b, "en" as never);
    assert.equal(v.translated, true);
    assert.equal(v.lang, "en");
    assert.equal(v.text.name, "Enhancement for leveling");
  });

  test("traduzione rimasta indietro: si mostra l'originale con la sua lingua", () => {
    const v = T.localizedBuild(b, "es" as never);
    assert.equal(v.translated, false);
    assert.equal(v.lang, "it");
    assert.equal(v.text.name, "Enha per livellare");
    assert.equal(T.freshBuildTranslation(b, "es" as never), null);
  });

  test("nella lingua dell'autore si mostra sempre l'originale", () => {
    const v = T.localizedBuild({ ...base, translations: { it: { hash, at: "", guide: { name: "Altro", summary: "x", plan: "y" } } } } as never, "it" as never);
    assert.equal(v.translated, false);
    assert.equal(v.text.name, "Enha per livellare");
  });

  test("una traduzione senza i campi obbligatori non vale", () => {
    const broken = { ...base, translations: { en: { hash, at: "", guide: { name: "Solo nome" } } } } as never;
    assert.equal(T.freshBuildTranslation(broken, "en" as never), null);
  });

  test("lingue disponibili e lingue da tradurre", () => {
    assert.deepEqual(T.buildLocales(b, all as never), ["en", "it"]);
    assert.deepEqual(T.missingBuildLocales(b, all as never), ["es"]);
    assert.deepEqual(T.buildLocales({ ...base, translations: null }, all as never), ["it"]);
    assert.deepEqual(T.missingBuildLocales(base, all as never), ["en", "es"]);
  });
});

describe("indicizzazione", () => {
  const long = { ...base, plan: "parola ".repeat(80), status: "published" as const };
  const hash = T.buildGuideHash(long);
  const withEnRow = { ...long, translations: { en: { hash, at: "", guide: { name: "N", summary: "S", plan: "P" } } } };
  const withEn = withEnRow as never;

  test("la scheda si indicizza nella lingua dell'autore e in quelle tradotte, da 75 parole", () => {
    assert.deepEqual(T.buildIndexableLocales(withEn, all as never), ["en", "it"]);
    assert.deepEqual(T.buildIndexing(withEn, all as never, "es" as never), { languages: ["en", "it"], noindex: true, hreflang: true });
    assert.deepEqual(T.buildIndexing(withEn, all as never, "en" as never), { languages: ["en", "it"], noindex: false, hreflang: true });
  });

  test("sotto soglia o nascosta: nessuna lingua, niente hreflang", () => {
    assert.deepEqual(T.buildIndexing({ ...base, status: "published" } as never, all as never, "it" as never), { languages: [], noindex: true, hreflang: false });
    assert.deepEqual(T.buildIndexableLocales({ ...withEnRow, status: "hidden" } as never, all as never), []);
  });

  test("dropHreflang lascia la sola canonical", () => {
    const meta = { title: "x", alternates: { canonical: "https://forevermeta.me/it/builds/a", languages: { en: "…" } }, robots: { index: false } };
    assert.deepEqual(T.dropHreflang(meta), { title: "x", alternates: { canonical: "https://forevermeta.me/it/builds/a" }, robots: { index: false } });
  });
});

describe("colonne leggere degli elenchi", () => {
  const hash = T.buildGuideHash(base);
  const row = { ...base, tr_en_hash: hash, tr_en_at: "2026-10-23T20:00:00Z", tr_en_name: "Enhancement for leveling", tr_en_summary: "Leveling build.", tr_es_hash: "vecchia", tr_es_name: "Vieja", tr_es_summary: "Vieja" } as never;

  test("la select ha impronta, data, nome e riassunto per ogni lingua del sito", () => {
    for (const l of all) {
      assert.ok(B.BUILD_TRANSLATION_LIST_SELECT.includes(`tr_${l}_hash:translations->${l}->>hash`));
      assert.ok(B.BUILD_TRANSLATION_LIST_SELECT.includes(`tr_${l}_name:translations->${l}->guide->>name`));
      assert.ok(B.BUILD_TRANSLATION_SITEMAP_SELECT.includes(`tr_${l}_at:translations->${l}->>at`));
    }
    assert.ok(B.BUILD_LIST_SELECT.startsWith(B.BUILD_SELECT));
    assert.ok(B.BUILD_DETAIL_SELECT.endsWith(", translations"));
  });

  test("la scheda prende nome e riassunto tradotti solo con l'impronta aggiornata", () => {
    assert.deepEqual(T.localizedBuildCard(row, "en" as never), { name: "Enhancement for leveling", summary: "Leveling build.", translated: true });
    assert.deepEqual(T.localizedBuildCard(row, "es" as never), { name: base.name, summary: base.summary, translated: false });
    assert.deepEqual(T.localizedBuildCard(row, "it" as never), { name: base.name, summary: base.summary, translated: false });
  });

  test("le date delle traduzioni aggiornate, per la sitemap", () => {
    assert.deepEqual(T.translationDatesFromListRow(row, all as never), { en: "2026-10-23T20:00:00Z" });
  });

  test("le lingue delle colonne leggere sono quelle del sito", () => {
    const i18n = read("../i18n.ts");
    const siteLocales = JSON.parse(`[${/export const locales = \[([^\]]+)\]/.exec(i18n)![1]}]`);
    assert.deepEqual([...B.TR_LOCALES], siteLocales);
  });
});

describe("namesIn", () => {
  const names = ["Stormstrike", "Flurry", "Ancestral Knowledge", "Shield Specialization", "Enhancement", "Earthquake"];

  test("trova i nomi a parola intera, senza badare alle maiuscole", () => {
    assert.deepEqual(T.namesIn(T.buildGuideText(base), names), ["Ancestral Knowledge", "Enhancement", "Flurry", "Shield Specialization", "Stormstrike"]);
  });

  test("non trova un nome dentro un'altra parola", () => {
    assert.deepEqual(T.namesIn({ summary: "Stormstrikes everywhere" }, ["Stormstrike"]), []);
  });
});

describe("richiesta al modello", () => {
  test("stesso modello e stessa forma delle guide di OriginsMeta, schema con i soli campi del testo", () => {
    const text = T.buildGuideText(base);
    const r = T.translationRequestFor(text, "it", "en", ["Flurry"]);
    assert.equal(r.model, T.TRANSLATION_MODEL);
    assert.equal(r.model, "claude-opus-5-5");
    assert.deepEqual(r.betas, ["server-side-fallback-2026-07-01"]);
    assert.equal(r.fallbacks, "default");
    assert.equal(r.output_config.effort, "low");
    assert.deepEqual(r.output_config.format.schema.required, ["name", "summary", "plan", "strengths"]);
    assert.equal(r.output_config.format.schema.additionalProperties, false);
    assert.equal(r.system[0].cache_control.type, "ephemeral");
    assert.match(r.messages[0].content, /SOURCE LANGUAGE: Italian/);
    assert.match(r.messages[0].content, /TARGET LANGUAGE: English/);
    assert.match(r.messages[0].content, /NAMES: Flurry/);
    assert.ok(r.max_tokens >= 2000 && r.max_tokens <= 32000);
  });

  test("il glossario porta classi, razze, fazioni e termini del sito nelle tre lingue", () => {
    const s = T.BUILD_TRANSLATION_SYSTEM;
    assert.ok(s.includes("Warrior = Guerriero = guerrero"));
    assert.ok(s.includes("Night Elf = Elfo della Notte = elfo de la noche"));
    assert.ok(s.includes("Horde = Orda = Horda"));
    assert.ok(s.includes("dungeon = spedizione = mazmorra"));
    assert.ok(s.includes("Rage = Ira = Ira"));
    // ogni riga del glossario ha tre parti
    const lines = T.glossaryLines();
    assert.ok(lines.length >= 50);
    for (const l of lines) assert.equal(l.split(" = ").length, 3, l);
  });
});

describe("parseTranslation", () => {
  const source = { name: "Enha", summary: "Riassunto del mazzo", plan: "Piano" };

  test("accetta gli stessi campi e ripulisce spazi e a capo", () => {
    assert.deepEqual(T.parseTranslation(source, '{"name":" Enha ","summary":"  Summary \\r\\n ok ","plan":"Plan"}'), { name: "Enha", summary: "Summary \n ok", plan: "Plan" });
  });

  test("rifiuta JSON rotto, campi mancanti o in più, valori non testuali o vuoti", () => {
    assert.equal(T.parseTranslation(source, "not json"), null);
    assert.equal(T.parseTranslation(source, '{"name":"x","summary":"y"}'), null);
    assert.equal(T.parseTranslation(source, '{"name":"x","summary":"y","plan":"z","extra":"w"}'), null);
    assert.equal(T.parseTranslation(source, '{"name":"x","summary":"y","plan":3}'), null);
    assert.equal(T.parseTranslation(source, '{"name":"   ","summary":"y","plan":"z"}'), null);
    assert.equal(T.parseTranslation(source, '["x"]'), null);
  });

  test("rifiuta una traduzione molto più lunga dell'originale", () => {
    assert.equal(T.parseTranslation(source, JSON.stringify({ name: "x".repeat(300), summary: "y", plan: "z" })), null);
  });
});

describe("coerenza con supabase/schema.sql", () => {
  const schema = read("../../../supabase/schema.sql").replace(/\r\n/g, "\n");
  const block = schema.slice(schema.indexOf("BUILD TRADOTTE"));

  test("il blocco c'è e la funzione di controllo usa gli stessi massimi del codice", () => {
    assert.ok(block.length > 0, "manca il blocco BUILD TRADOTTE");
    for (const [field, max] of Object.entries(T.BUILD_TRANSLATION_LIMITS)) {
      assert.ok(new RegExp(`'${field}'[^\\n]*\\b${max}\\b`).test(block), `${field}: massimo ${max} non trovato nella funzione SQL`);
    }
  });

  test("le lingue ammesse nelle traduzioni sono quelle del sito e mai quella dell'autore", () => {
    assert.ok(block.includes(`k not in (${B.TR_LOCALES.map((l) => `'${l}'`).join(",")})`));
    assert.ok(block.includes("k = new.guide_lang"));
  });
});

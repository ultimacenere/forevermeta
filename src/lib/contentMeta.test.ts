// Controlli SEO dei contenuti di ForeverMeta (10/10/2026): lunghezze di titoli e descrizioni, link interni con la lingua
// verso pagine che esistono, ancore degli "In breve". Si lancia con `npm test`.
import * as nodeModule from "node:module";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

type Resolved = { url: string; format?: string | null; shortCircuit?: boolean };
type ResolveHook = (specifier: string, context: object, next: (specifier: string, context?: object) => Resolved) => Resolved;
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
const { pageTitle }: typeof import("./pageTitle") = await import("./pageTitle.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const { newsItems }: typeof import("./data/newsItems") = await import("./data/newsItems.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const { guideEntries }: typeof import("./content/guideEntries") = await import("./content/guideEntries.ts");

const locales = ["en", "it", "es"] as const;
const pages = ["", "/news", "/guides", "/glossary", "/calendar", "/changes", "/faq", "/about", "/authors", "/privacy"];
const guideSlugs = new Set(guideEntries.map((g) => g.slug));
const newsSlugs = new Set(newsItems.map((n) => n.slug));

/** I link interni di un testo Markdown: devono avere la lingua del testo e portare a una pagina vera. */
function checkLinks(md: string, locale: string, where: string) {
  for (const m of md.matchAll(/\]\((\/[^)\s#]*)(#[^)\s]*)?\)/g)) {
    const path = m[1];
    assert.ok(path.startsWith(`/${locale}`), `${where}: link senza la lingua ${locale}: ${path}`);
    const rest = path.slice(locale.length + 1);
    const ok = pages.includes(rest) || (rest.startsWith("/guides/") && guideSlugs.has(rest.slice(8))) || (rest.startsWith("/news/") && newsSlugs.has(rest.slice(6)));
    assert.ok(ok, `${where}: link a una pagina che non esiste: ${path}`);
  }
}

function anchors(md: string): Set<string> {
  return new Set([...md.matchAll(/\{#([a-z0-9-]+)\}/g)].map((m) => m[1]));
}

describe("news", () => {
  for (const n of newsItems) {
    for (const l of locales) {
      test(`${n.slug} (${l})`, () => {
        assert.ok(n.title[l].length <= 110, "titolo oltre 110 caratteri");
        assert.ok(pageTitle(n.metaTitle[l]).length <= 60, `metaTitle troppo lungo: ${pageTitle(n.metaTitle[l])}`);
        const d = n.description[l].length;
        assert.ok(d >= 120 && d <= 158, `description di ${d} caratteri`);
        if (n.body) checkLinks(n.body[l], l, n.slug);
        const a = anchors(n.body?.[l] ?? "");
        for (const h of n.highlights?.[l] ?? []) assert.ok(a.has(h.anchor), `ancora mancante: ${h.anchor}`);
      });
    }
  }
});

describe("guide", () => {
  for (const g of guideEntries) {
    for (const l of locales) {
      test(`${g.slug} (${l})`, () => {
        const t = g.text[l];
        assert.ok(t.title.length <= 110, "titolo oltre 110 caratteri");
        assert.ok(pageTitle(t.metaTitle).length <= 60, `metaTitle troppo lungo: ${pageTitle(t.metaTitle)}`);
        const e = t.excerpt.length;
        assert.ok(e >= 120 && e <= 158, `excerpt di ${e} caratteri`);
        checkLinks(t.body, l, g.slug);
        assert.ok(g.sources.length > 0, "senza fonti");
      });
    }
  }
});

import type { Metadata } from "next";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { glossary, glossaryCategories, glossarySources, type GlossaryCategory } from "@/lib/data/glossary";
import { GlossaryTable } from "@/components/GlossaryTable";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";
import { JsonLd, breadcrumbs, organizationId, videoGameId, websiteId } from "@/components/JsonLd";
import { siteUrl } from "@/lib/i18n";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/glossary", dict.glossary.metaTitle, dict.glossary.description);
}

/**
 * Glossario dei nomi ufficiali di Forever in inglese, italiano e spagnolo (Spagna e America Latina): il valore del sito
 * per chi gioca in inglese senza il client nella sua lingua. Dati in src/lib/data/glossary.ts, con la fonte di ognuno.
 */
export default async function GlossaryPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const g = d.glossary;
  const order = Object.keys(glossaryCategories) as GlossaryCategory[];
  const groups = order
    .map((cat) => ({
      title: glossaryCategories[cat][locale],
      rows: glossary
        .filter((t) => t.category === cat)
        .map((t) => ({ id: t.id, category: t.category, en: t.en, it: t.it, es: t.es, mx: t.mx, note: t.note?.[locale] })),
    }))
    .filter((grp) => grp.rows.length);
  const path = href(locale, "/glossary");
  const termSet = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "@id": `${siteUrl}${path}#terms`,
    name: g.title,
    description: g.description,
    url: `${siteUrl}${path}`,
    inLanguage: locale,
    isPartOf: { "@id": websiteId(locale) },
    publisher: { "@id": organizationId },
    about: { "@id": videoGameId },
    hasDefinedTerm: glossary.map((t) => ({
      "@type": "DefinedTerm",
      "@id": `${siteUrl}${path}#${t.id}`,
      name: t.en,
      alternateName: [t.it.term, t.es.term, t.mx.term].filter((v, i, a) => v !== t.en && a.indexOf(v) === i),
      ...(t.note ? { description: t.note[locale] } : {}),
    })),
  };
  const sources = [...new Set(glossary.map((t) => t.source))].map((k) => glossarySources[k]);
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          termSet,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: g.title, path },
          ]),
        ]}
      />
      <p className="kicker text-mint">{d.nav.glossary}</p>
      <h1 className="t-page mt-2">{g.title}</h1>
      <p className="mt-4 max-w-3xl text-chalk-muted">{g.intro}</p>
      <div className="mt-8">
        <GlossaryTable
          groups={groups}
          labels={{ search: g.search, colEn: g.colEn, colIt: g.colIt, colEs: g.colEs, colMx: g.colMx, oursHint: g.oursHint, count: g.count, none: g.none }}
        />
      </div>
      <section className="mt-12 border-t border-felt-line pt-6 text-sm text-pale-muted">
        <p>{g.sourcesNote}</p>
        <ul className="mt-2 space-y-1">
          {sources.map((s) => (
            <li key={s.url}>
              <a href={s.url} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-mint underline">
                {s.label[locale]}
                <NewTabIcon />
                <span className="sr-only"> {d.common.newTab}</span>
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs">{d.common.notAffiliated}</p>
      </section>
    </div>
  );
}

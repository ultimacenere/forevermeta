import type { Metadata } from "next";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";
import { ClassGrid } from "@/components/builder/ClassStrip";
import { BUILDER_PATH, builderSources } from "@/lib/builder/page";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, BUILDER_PATH, dict.builder.metaTitle, dict.builder.description);
}

/**
 * Ingresso del builder: le nove classi, ognuna verso la sua pagina con i tre alberi (statiche, una per classe, così
 * ogni classe ha un indirizzo suo da cercare e condividere). Sotto, come funziona e le regole dei talenti.
 */
export default async function BuilderPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const b = d.builder;
  const path = href(locale, BUILDER_PATH);
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: b.title, path },
        ])}
      />
      <p className="kicker text-mint">{d.nav.builder}</p>
      <h1 className="t-page mt-2">{b.title}</h1>
      <p className="mt-4 max-w-3xl text-chalk-muted">{b.intro}</p>
      <section className="mt-8" aria-labelledby="builder-classes">
        <h2 id="builder-classes" className="t-section mb-4">
          {b.allClasses}
        </h2>
        <ClassGrid locale={locale} />
      </section>
      <BuilderNotes locale={locale} dict={d} />
    </div>
  );
}

/** I testi in fondo (come funziona, regole, fonti): uguali nella pagina d'ingresso e nelle pagine delle classi. */
export function BuilderNotes({ dict, extraSources = [] }: { locale: string; dict: Awaited<ReturnType<typeof resolveLocale>>["dict"]; extraSources?: { label: string; url?: string }[] }) {
  const b = dict.builder;
  return (
    <div className="mt-14 grid gap-8 border-t border-felt-line pt-8 md:grid-cols-2">
      <section aria-labelledby="builder-how">
        <h2 id="builder-how" className="t-section">
          {b.howTitle}
        </h2>
        <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-pale">
          {b.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
      </section>
      <section aria-labelledby="builder-rules">
        <h2 id="builder-rules" className="t-section">
          {b.rulesTitle}
        </h2>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-pale">
          {b.rules.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </section>
      <section aria-labelledby="builder-sources" className="md:col-span-2 text-sm text-pale-muted">
        <h2 id="builder-sources" className="t-section">
          {b.sourcesTitle}
        </h2>
        <ul className="mt-2 space-y-1">
          {[...extraSources, ...builderSources].map((s) => (
            <li key={s.label}>
              {s.url ? (
                <a href={s.url} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-mint underline">
                  {s.label}
                  <NewTabIcon />
                  <span className="sr-only"> {dict.common.newTab}</span>
                </a>
              ) : (
                s.label
              )}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs">{dict.common.notAffiliated}</p>
      </section>
    </div>
  );
}

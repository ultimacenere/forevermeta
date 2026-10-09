import type { Metadata } from "next";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { changeAreas, sortedChanges } from "@/lib/data/changes";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/changes", dict.changes.metaTitle, dict.changes.description);
}

/**
 * Storico delle modifiche della beta (il MetaShifting di Forever): un blocco per aggiornamento ufficiale, dal più
 * recente, con le modifiche raggruppate per classe o sistema e il link al post ufficiale. Dati in src/lib/data/changes.ts.
 */
export default async function ChangesPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const c = d.changes;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: c.title, path: href(locale, "/changes") },
        ])}
      />
      <p className="kicker text-mint">{d.nav.changes}</p>
      <h1 className="t-page mt-2">{c.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{c.intro}</p>
      {sortedChanges.length ? (
        <ol className="mt-10 space-y-6">
          {sortedChanges.map((u) => {
            const areas = [...new Set(u.items.map((i) => i.area))];
            return (
              <li key={u.id} id={u.id} className="card-night scroll-mt-24 p-6">
                <p className="font-mono text-sm text-mint">
                  <time dateTime={u.date}>{formatDate(locale, u.date)}</time>
                  {u.build ? ` · ${c.build} ${u.build}` : null}
                </p>
                <h2 className="t-item mt-1">{u.title[locale]}</h2>
                {areas.map((area) => (
                  <section key={area} className="mt-4">
                    <h3 className="kicker text-sky">{changeAreas[area]?.[locale] ?? area}</h3>
                    <ul className="mt-2 list-disc space-y-1 pl-5 text-pale marker:text-mint">
                      {u.items
                        .filter((i) => i.area === area)
                        .map((i, k) => (
                          <li key={k}>{i.text[locale]}</li>
                        ))}
                    </ul>
                  </section>
                ))}
                <p className="mt-4 text-sm">
                  <a href={u.url} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-mint underline">
                    {c.sourceLink}
                    <NewTabIcon />
                    <span className="sr-only"> {d.common.newTab}</span>
                  </a>
                </p>
              </li>
            );
          })}
        </ol>
      ) : (
        <p className="mt-10 text-pale-muted">{c.empty}</p>
      )}
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

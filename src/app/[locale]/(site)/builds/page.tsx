import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";
import { BuildList, type BuildListItem } from "@/components/builds/BuildList";
import { listPublishedBuilds } from "@/lib/community/buildQueries";
import { buildPath } from "@/lib/community/builds";
import { authorOf, classMetas, raceNameMap } from "@/lib/community/buildView";
import { localizedBuildCard } from "@/lib/community/buildTranslation";
import { buildLabels } from "@/lib/buildLabels";
import { TALENT_ICON_BASE } from "@/lib/data/talents";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/builds", dict.builds.metaTitle, dict.builds.description);
}

/** Le build pubblicate dagli iscritti (ISR): elenco con i filtri nel browser, poi come funziona. */
export default async function BuildsPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const b = d.builds;
  const L = buildLabels[locale];
  const { builds, ratings, unavailable } = await listPublishedBuilds();
  const items: BuildListItem[] = builds.map((x) => {
    // nome e riassunto nella lingua della pagina, se la traduzione è aggiornata; altrimenti quelli dell'autore
    const card = localizedBuildCard(x, locale);
    return {
      id: x.id,
      slug: x.slug,
      name: card.name,
      class_id: x.class_id,
      race_id: x.race_id,
      level: x.level,
      code: x.code,
      points: x.points,
      purpose: x.purpose,
      summary: card.summary,
      created_at: x.created_at,
      guide_lang: card.translated ? locale : x.guide_lang,
      author: authorOf(x, d.nav.playerFallback),
      avg: ratings.get(x.id)?.avg ?? 0,
      votes: ratings.get(x.id)?.votes ?? 0,
      // indirizzo e data pronti qui: al client component non si passano funzioni
      href: href(locale, buildPath(x.slug)),
      dateLabel: formatDate(locale, x.created_at.slice(0, 10)),
    };
  });
  const path = href(locale, "/builds");
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: b.title, path },
        ])}
      />
      <p className="kicker text-mint">{d.nav.builds}</p>
      <h1 className="t-page mt-2">{b.title}</h1>
      <p className="mt-4 max-w-3xl text-chalk-muted">{b.intro}</p>
      <div className="mt-5">
        <Link href={href(locale, "/builder")} className="btn btn-primary" prefetch={false}>
          {L.list.publish}
        </Link>
      </div>
      <div className="mt-8">
        {unavailable ? (
          <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p>
        ) : (
          <BuildList items={items} classes={classMetas(locale)} raceNames={raceNameMap(locale)} labels={L} iconBase={TALENT_ICON_BASE} />
        )}
      </div>
      <section className="mt-14 border-t border-felt-line pt-8" aria-labelledby="builds-how">
        <h2 id="builds-how" className="t-section">
          {b.howTitle}
        </h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-pale">
          {b.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-pale-muted">{d.common.notAffiliated}</p>
      </section>
    </div>
  );
}

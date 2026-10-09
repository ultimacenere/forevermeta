import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { newsPath, sortedNews } from "@/lib/data/news";
import { NewsCover } from "@/components/NewsCover";
import { JsonLd, breadcrumbs, collectionPage, videoGameId } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/news", dict.news.metaTitle, dict.news.description);
}

/** Elenco delle news, dalla più recente: ogni scheda porta alla pagina dell'articolo. */
export default async function NewsPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.news.title, path: href(locale, "/news") },
          ]),
          collectionPage({
            locale,
            path: href(locale, "/news"),
            name: d.news.title,
            description: d.news.description,
            items: sortedNews.map((n) => ({ name: n.title[locale], path: href(locale, newsPath(n)) })),
            about: videoGameId,
          }),
        ]}
      />
      <p className="kicker text-mint">{d.nav.news}</p>
      <h1 className="t-page mt-2">{d.news.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{d.news.intro}</p>
      {sortedNews.length ? (
        <ol className="mt-10 space-y-4">
          {sortedNews.map((n) => (
            <li key={n.slug} id={n.slug} className="card-night scroll-mt-24 p-6">
              <NewsCover src={n.image} className="mb-4" />
              <p className="flex flex-wrap items-center gap-3 font-mono text-sm text-pale-muted">
                <time dateTime={n.date} className="tabular">
                  {formatDate(locale, n.date)}
                </time>
                <span className="pill">{n.source === "blizzard" ? d.news.blizzardBadge : d.news.siteBadge}</span>
              </p>
              <h2 className="t-item mt-2 leading-tight">
                <Link href={href(locale, newsPath(n))} className="hover:underline">
                  {n.title[locale]}
                </Link>
              </h2>
              <p className="mt-3 text-pale">{n.summary[locale]}</p>
              <p className="mt-3">
                <Link href={href(locale, newsPath(n))} className="text-sm font-bold text-mint hover:underline">
                  {d.common.readMore} →
                </Link>
              </p>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-10 text-pale-muted">{d.news.empty}</p>
      )}
    </div>
  );
}

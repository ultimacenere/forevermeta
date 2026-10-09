import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { getGuides } from "@/lib/content/guides";
import { NewsCover } from "@/components/NewsCover";
import { JsonLd, breadcrumbs, collectionPage, videoGameId } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/guides", dict.guides.metaTitle, dict.guides.description);
}

/** Elenco delle guide, dalla più recente: scheda con copertina, categoria, titolo, riassunto e data dell'ultimo controllo. */
export default async function GuidesPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const guides = getGuides(locale);
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.guides.title, path: href(locale, "/guides") },
          ]),
          collectionPage({
            locale,
            path: href(locale, "/guides"),
            name: d.guides.title,
            description: d.guides.description,
            items: guides.map((g) => ({ name: g.title, path: href(locale, `/guides/${g.slug}`) })),
            about: videoGameId,
          }),
        ]}
      />
      <p className="kicker text-mint">{d.nav.guides}</p>
      <h1 className="t-page mt-2">{d.guides.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{d.guides.intro}</p>
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {guides.map((g) => (
          <li key={g.slug}>
            <Link href={href(locale, `/guides/${g.slug}`)} className="card-night card-night-hover flex h-full flex-col p-5">
              <NewsCover src={g.image} className="mb-4" />
              <p className="kicker text-mint">{d.guides.categories[g.category]}</p>
              <h2 className="t-item mt-2 leading-snug">{g.title}</h2>
              <p className="mt-2 flex-1 text-sm text-pale">{g.excerpt}</p>
              <p className="mt-4 font-mono text-xs text-pale-muted">
                {d.common.updated} <time dateTime={g.updated}>{formatDate(locale, g.updated)}</time> · {g.readTime} {d.common.readTime}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

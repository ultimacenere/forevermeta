import type { Metadata } from "next";
import Link from "next/link";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { newsPath, sortedNews } from "@/lib/data/news";
import { getGuides } from "@/lib/content/guides";
import { glossary } from "@/lib/data/glossary";
import { sortedChanges } from "@/lib/data/changes";
import { upcomingEvents } from "@/lib/data/events";
import { NewsCover } from "@/components/NewsCover";
import { CalendarStrip } from "@/components/CalendarStrip";

/** Si rigenera una volta al giorno: le prossime date del calendario cambiano da sole. */
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "", dict.meta.homeTitle, dict.meta.description);
}

/** Termini del glossario mostrati in anteprima nella home: i nomi che cambiano di più fra le lingue. */
const GLOSSARY_PREVIEW = ["skyborne", "legacy-system", "campfire", "dungeon"];

/**
 * Home di ForeverMeta: testata con le due date chiave (fine beta, lancio), poi ultime news, guide per cominciare,
 * glossario in anteprima, modifiche della beta e prossime date. Un solo H1.
 */
export default async function HomePage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const h = d.home;
  const latestNews = sortedNews.slice(0, 3);
  const guides = getGuides(locale).slice(0, 3);
  const terms = GLOSSARY_PREVIEW.map((id) => glossary.find((t) => t.id === id)).filter((t) => t !== undefined);
  const lastChange = sortedChanges[0];
  const next = upcomingEvents().slice(0, 3);

  return (
    <main id="main" className="flex-1">
      <CalendarStrip locale={locale} dict={d} />
      <section className="hero-forever border-b border-felt-line/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-20">
          <div>
            <p className="kicker text-mint">{h.kicker}</p>
            <h1 className="t-hero mt-3">{h.title}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pale">{h.text}</p>
            <p className="mt-8 flex flex-wrap gap-3">
              <Link href={href(locale, "/guides")} className="btn btn-primary">
                {h.ctaGuides}
              </Link>
              <Link href={href(locale, "/glossary")} className="btn btn-ghost">
                {h.ctaGlossary}
              </Link>
            </p>
          </div>
          <dl className="card-night grid content-start gap-5 p-6 sm:p-8">
            <div>
              <dt className="kicker text-pale-muted">{h.launchLabel}</dt>
              <dd className="mt-1 font-display text-2xl font-bold text-sky">{h.launchWhen}</dd>
              <dd className="mt-1 text-sm text-pale">{h.launchLocal}</dd>
            </div>
            <div className="border-t border-felt-line pt-5">
              <dt className="kicker text-pale-muted">{h.betaLabel}</dt>
              <dd className="mt-1 font-display text-xl font-bold text-chalk">{h.betaWhen}</dd>
            </div>
            <div className="border-t border-felt-line pt-5">
              <Link href={href(locale, "/calendar")} className="link-mint text-sm font-bold">
                {d.calendar.title} →
              </Link>
            </div>
          </dl>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-14 sm:px-6">
        {latestNews.length ? (
          <section aria-labelledby="home-news">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="home-news" className="t-section">
                {h.newsTitle}
              </h2>
              <Link href={href(locale, "/news")} className="text-sm text-mint hover:underline">
                {d.common.viewAll} →
              </Link>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {latestNews.map((n) => (
                <li key={n.slug}>
                  <Link href={href(locale, newsPath(n))} className="card-night card-night-hover flex h-full flex-col p-5">
                    <NewsCover src={n.image} className="mb-4" />
                    <p className="font-mono text-xs text-pale-muted">
                      <time dateTime={n.date}>{formatDate(locale, n.date)}</time>
                    </p>
                    <h3 className="t-item mt-1 leading-snug">{n.title[locale]}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-pale">{n.summary[locale]}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {guides.length ? (
          <section aria-labelledby="home-guides">
            <div className="flex flex-wrap items-baseline justify-between gap-3">
              <h2 id="home-guides" className="t-section">
                {h.guidesTitle}
              </h2>
              <Link href={href(locale, "/guides")} className="text-sm text-mint hover:underline">
                {d.common.viewAll} →
              </Link>
            </div>
            <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={href(locale, `/guides/${g.slug}`)} className="card-night card-night-hover flex h-full flex-col p-5">
                    <NewsCover src={g.image} className="mb-4" />
                    <p className="kicker text-mint">{d.guides.categories[g.category]}</p>
                    <h3 className="t-item mt-1 leading-snug">{g.title}</h3>
                    <p className="mt-2 line-clamp-3 text-sm text-pale">{g.excerpt}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <section aria-labelledby="home-glossary" className="card-night p-6 sm:p-8">
            <h2 id="home-glossary" className="t-section">
              {h.glossaryTitle}
            </h2>
            <p className="mt-2 text-sm text-pale">{h.glossaryText}</p>
            <div className="table-scroll mt-4">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="text-pale-muted">
                    <th scope="col" className="py-1 pr-3">EN</th>
                    <th scope="col" className="py-1 pr-3">IT</th>
                    <th scope="col" className="py-1 pr-3">ES</th>
                    <th scope="col" className="py-1">MX</th>
                  </tr>
                </thead>
                <tbody>
                  {terms.map((t) => (
                    <tr key={t.id} className="border-t border-felt-line">
                      <th scope="row" className="py-1.5 pr-3 font-bold text-sky">
                        {t.en}
                      </th>
                      <td className="py-1.5 pr-3 text-chalk">{t.it.term}</td>
                      <td className="py-1.5 pr-3 text-chalk">{t.es.term}</td>
                      <td className="py-1.5 text-chalk">{t.mx.term}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">
              <Link href={href(locale, "/glossary")} className="link-mint text-sm font-bold">
                {h.ctaGlossary} →
              </Link>
            </p>
          </section>

          <section aria-labelledby="home-changes" className="card-night p-6 sm:p-8">
            <h2 id="home-changes" className="t-section">
              {h.changesTitle}
            </h2>
            <p className="mt-2 text-sm text-pale">{h.changesText}</p>
            {lastChange ? (
              <p className="mt-4 text-sm text-chalk">
                <span className="font-mono text-mint">{formatDate(locale, lastChange.date)}</span> · {lastChange.title[locale]}
              </p>
            ) : null}
            {next.length ? (
              <>
                <h3 className="kicker mt-6 text-pale-muted">{h.calendarTitle}</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {next.map((e) => (
                    <li key={e.slug}>
                      <span className="font-mono text-mint">{formatDate(locale, e.start)}</span> · {e.title[locale]}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}
            <p className="mt-4 flex flex-wrap gap-x-5 gap-y-1">
              <Link href={href(locale, "/changes")} className="link-mint text-sm font-bold">
                {d.changes.title} →
              </Link>
              <Link href={href(locale, "/calendar")} className="link-mint text-sm font-bold">
                {d.calendar.title} →
              </Link>
            </p>
          </section>
        </div>

        <p className="text-xs text-pale-muted">{d.common.notAffiliated}</p>
      </div>
    </main>
  );
}

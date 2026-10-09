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
import { media } from "@/lib/media";
import { Postit } from "@/components/Postit";

/** Si rigenera una volta al giorno: le prossime date del calendario cambiano da sole. */
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "", dict.meta.homeTitle, dict.meta.description);
}

/**
 * Post-it grandi delle tre news in cima (come su OriginsMeta): rotazioni diverse e non allineate, ognuno appoggiato in
 * un punto un po' diverso dell'angolo della copertina (uno a destra), con fase e durate sue, così non si muovono
 * all'unisono. Le classi sono utility Tailwind scritte per intero, perché Tailwind le trovi nel sorgente.
 */
const FEATURED_POSTITS = [
  { tilt: -6, place: "postit-corner -top-1 left-3 [--delay:-0.4s] [--flap-dur:2.6s] [--sway-dur:7.5s]" },
  { tilt: 4, place: "postit-corner top-0 left-auto right-4 [--delay:-1.3s] [--flap-dur:2.9s] [--sway-dur:8.8s]" },
  { tilt: -3, place: "postit-corner -top-1.5 left-7 [--delay:-2.1s] [--flap-dur:2.3s] [--sway-dur:6.4s]" },
] as const;

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
  // tre luoghi del gioco con il loro nome ufficiale nella lingua della pagina (dal glossario)
  const nameOf = (id: string) => {
    const t = glossary.find((x) => x.id === id);
    return t ? (locale === "en" ? t.en : t[locale].term) : id;
  };
  const world = [
    { id: "zephras-isle", media: media.zephras, name: nameOf("zephras-isle") },
    { id: "hyjal-summit", media: media.hyjal, name: nameOf("hyjal-summit") },
    { id: "darkspear-islands", media: media.darkspear, name: nameOf("darkspear-islands") },
  ];

  return (
    <main id="main" className="flex-1">
      <CalendarStrip locale={locale} dict={d} />
      <section className="hero-forever">
        {/* Testata con il fotogramma del cinematic ufficiale (pacco del Press Center): contenuto, non identità del sito */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={media.hero.src} alt={media.hero.alt[locale]} width={media.hero.width} height={media.hero.height} className="hero-forever-img" fetchPriority="high" />
        <div className="hero-forever-veil" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:py-24">
          <div>
            <p className="kicker">{h.kicker}</p>
            <h1 className="t-hero mt-3">{h.title}</h1>
            <p className="hero-text mt-5 max-w-2xl text-lg leading-relaxed">{h.text}</p>
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
        <p className="absolute bottom-2 right-3 text-[10px] text-[#e9e2d2]/80">© Blizzard Entertainment, Inc.</p>
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
            {/* gap-y-10: i post-it grandi sporgono sopra la scheda e non devono toccare quella di sopra sul telefono */}
            <ul className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 md:grid-cols-3">
              {latestNews.map((n, i) => {
                const note = FEATURED_POSTITS[i % FEATURED_POSTITS.length];
                return (
                  <li key={n.slug} className="card-night card-night-hover relative flex flex-col p-6">
                    {/* figlio diretto della scheda (contratto di .postit), a cavallo del bordo e sopra l'angolo della copertina */}
                    <Postit kind={n.topic} label={h.postit[n.topic]} date={n.date} size="lg" tilt={note.tilt} className={note.place} />
                    <NewsCover src={n.image} className="mb-4" />
                    <p className="kicker text-mint">
                      {i === 0 ? `${h.latestNews} · ` : null}<time dateTime={n.date}>{formatDate(locale, n.date)}</time>
                    </p>
                    <h3 className="t-item mt-2 leading-snug">
                      <Link href={href(locale, newsPath(n))} className="after:absolute after:inset-0 hover:underline">
                        {n.title[locale]}
                      </Link>
                    </h3>
                    <p className="mt-3 line-clamp-3 text-sm text-pale">{n.summary[locale]}</p>
                  </li>
                );
              })}
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

        <section aria-labelledby="home-world">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="home-world" className="t-section">
              {h.worldTitle}
            </h2>
            <Link href={href(locale, "/guides/wow-forever-zones-dungeons-raids")} className="text-sm text-mint hover:underline">
              {h.worldCta} →
            </Link>
          </div>
          <ul className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {world.map((w) => (
              <li key={w.id}>
                <Link href={href(locale, "/guides/wow-forever-zones-dungeons-raids")} className="card-night card-night-hover block overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={w.media.src} alt={w.media.alt[locale]} width={w.media.width} height={w.media.height} loading="lazy" className="aspect-[16/9] w-full object-cover" />
                  <p className="px-4 py-3 font-display text-base font-bold text-sky">{w.name}</p>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-2 text-xs text-pale-muted">{d.common.imageCredit}</p>
        </section>

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

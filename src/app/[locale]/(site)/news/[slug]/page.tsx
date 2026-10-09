import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, href, locales, siteUrl } from "@/lib/i18n";
import { pageMeta, pageTitleWith, resolveLocale } from "@/lib/page";
import { getNews, news, newsDates, newsPath, newsReadTime, sortedNews } from "@/lib/data/news";
import { authorOfNews } from "@/lib/data/authors";
import { getGuide } from "@/lib/content/guides";
import { Markdown } from "@/components/Markdown";
import { NewsCover } from "@/components/NewsCover";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";
import { JsonLd, breadcrumbs, organizationId, personRef, videoGameId } from "@/components/JsonLd";

type Params = Promise<{ locale: string; slug: string }>;

/** Oltre i 110 caratteri Google ignora `headline`: se il titolo è più lungo, nei dati strutturati va il titolo per la SERP. */
const HEADLINE_MAX = 110;

export function generateStaticParams() {
  return locales.flatMap((locale) => news.map((item) => ({ locale, slug: item.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  const item = getNews(slug);
  if (!item) return {};
  const dates = newsDates(item);
  const title = item.metaTitle[locale] ?? pageTitleWith(item.title[locale], d.nav.news);
  return pageMeta(locale, newsPath(item), title, item.description[locale], item.image, {
    type: "article",
    published: dates.published,
    modified: dates.modified,
    imageAlt: item.imageAlt[locale],
  });
}

/**
 * Pagina di un articolo: titolo, riassunto d'attacco, firma con le date, "In breve", copertina, testo a sezioni,
 * fonte ufficiale, guide collegate, domande frequenti, altre news.
 */
export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  const item = getNews(slug);
  if (!item) notFound();

  const title = item.title[locale];
  const path = href(locale, newsPath(item));
  const dates = newsDates(item);
  const body = item.body?.[locale];
  const faq = item.faq?.[locale] ?? [];
  const highlights = item.highlights?.[locale] ?? [];
  const author = authorOfNews(item);
  const authorPath = href(locale, `/authors/${author.slug}`);
  const source = item.source === "blizzard" ? item.url : undefined;
  const guides = (item.guides ?? []).map((s) => getGuide(locale, s)).filter((g) => g !== undefined);
  const more = sortedNews.filter((n) => n.slug !== item.slug).slice(0, 3);

  const article = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title.length <= HEADLINE_MAX ? title : item.metaTitle[locale],
    description: item.description[locale],
    inLanguage: locale,
    datePublished: dates.published,
    dateModified: dates.modified,
    image: item.image.startsWith("http") ? item.image : `${siteUrl}${item.image}`,
    author: personRef(author, authorPath),
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${siteUrl}${path}`,
    about: { "@id": videoGameId },
    articleSection: d.nav.news,
    ...(source ? { isBasedOn: source } : {}),
  };
  const faqLd = faq.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <JsonLd
        data={[
          article,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.nav.news, path: href(locale, "/news") },
            { name: title, path },
          ]),
        ]}
      />
      <p className="text-sm">
        <Link href={href(locale, "/news")} className="text-chalk-muted hover:text-chalk">
          ← {d.common.backTo} {d.nav.news}
        </Link>
      </p>

      <header className="mt-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="kicker text-mint">{d.nav.news}</span>
          <span className="pill">{item.source === "blizzard" ? d.news.blizzardBadge : d.news.siteBadge}</span>
          <span className="font-mono text-xs text-pale-muted">
            {newsReadTime(item, locale)} {d.common.readTime}
          </span>
        </p>
        <h1 className="t-page mt-3 leading-tight">{title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-chalk">{item.summary[locale]}</p>
        <p className="mt-5 text-sm text-pale-muted">
          {d.authors.writtenBy}{" "}
          <Link href={authorPath} rel="author" className="font-bold text-mint hover:underline">
            {author.name}
          </Link>
          {" · "}
          {d.common.published} <time dateTime={dates.published}>{formatDate(locale, dates.published)}</time>
          {dates.modified !== dates.published ? (
            <>
              {" · "}
              {d.common.updated} <time dateTime={dates.modified}>{formatDate(locale, dates.modified)}</time>
            </>
          ) : null}
        </p>
      </header>

      {highlights.length ? (
        <nav className="card-night mt-8 p-6 sm:p-8" aria-labelledby="news-highlights">
          <h2 id="news-highlights" className="kicker text-mint">
            {d.common.inBrief}
          </h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-pale marker:text-mint">
            {highlights.map((h) => (
              <li key={h.anchor}>
                <a href={`#${h.anchor}`} className="font-bold text-sky underline-offset-2 hover:underline">
                  {h.label}
                </a>
                {h.text ? `: ${h.text}` : null}
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <figure className="mt-8">
        <NewsCover src={item.image} alt={item.imageAlt[locale]} priority />
        <figcaption className="mt-2 text-xs text-pale-muted">{d.common.imageCredit}</figcaption>
      </figure>

      <article className="card-night mt-8 p-6 sm:p-10">
        {body ? <Markdown source={body} /> : <p className="text-pale">{item.summary[locale]}</p>}

        {source ? (
          <section className="mt-8 border-t border-sky pt-6" aria-labelledby="news-source">
            <h2 id="news-source" className="kicker text-pale-muted">
              {d.news.sourceTitle}
            </h2>
            <p className="mt-3">
              <a href={source} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-sm font-bold text-mint underline">
                {d.common.officialSource}
                <NewTabIcon />
                <span className="sr-only"> {d.common.newTab}</span>
              </a>
            </p>
          </section>
        ) : null}

        {guides.length ? (
          <section className="mt-8 border-t border-sky pt-6" aria-labelledby="news-guides">
            <h2 id="news-guides" className="kicker text-pale-muted">
              {d.guides.related}
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {guides.map((g) => (
                <li key={g.slug}>
                  <Link href={href(locale, `/guides/${g.slug}`)} className="text-mint hover:underline">
                    {g.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {faq.length ? (
          <section className="mt-8 border-t border-sky pt-6" aria-labelledby="news-faq">
            <h2 id="news-faq" className="t-section">
              {d.common.faqTitle}
            </h2>
            <dl className="mt-4 space-y-4">
              {faq.map((f) => (
                <div key={f.q}>
                  <dt className="t-item text-base">{f.q}</dt>
                  <dd className="mt-1 text-pale-muted">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ) : null}

        <p className="mt-8 border-t border-sky pt-4 text-sm text-pale-muted">
          {d.authors.writtenBy}{" "}
          <Link href={authorPath} rel="author" className="font-bold text-mint hover:underline">
            {author.name}
          </Link>
          {" · "}
          <Link href={href(locale, "/authors")} className="hover:text-chalk hover:underline">
            {d.authors.allAuthors}
          </Link>
        </p>
        <p className="mt-2 text-xs text-pale-muted">{d.common.notAffiliated}</p>
      </article>

      {more.length ? (
        <section className="mt-12" aria-labelledby="more-news">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h2 id="more-news" className="t-section">
              {d.news.related}
            </h2>
            <Link href={href(locale, "/news")} className="text-sm text-mint hover:underline">
              {d.common.viewAll} →
            </Link>
          </div>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {more.map((other) => (
              <li key={other.slug}>
                <Link href={href(locale, newsPath(other))} className="card-night card-night-hover block h-full p-4">
                  <NewsCover src={other.image} className="mb-3" />
                  <p className="font-mono text-xs text-pale-muted">
                    <time dateTime={other.date}>{formatDate(locale, other.date)}</time>
                  </p>
                  <h3 className="t-item mt-1 text-base leading-snug">{other.title[locale]}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

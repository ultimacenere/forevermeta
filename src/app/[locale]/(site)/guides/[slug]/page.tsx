import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, href, locales, siteUrl } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { getGuide, getGuides, guideSlugs } from "@/lib/content/guides";
import { authorOfGuide } from "@/lib/data/authors";
import { Markdown } from "@/components/Markdown";
import { NewsCover } from "@/components/NewsCover";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";
import { JsonLd, breadcrumbs, organizationId, personRef, videoGameId } from "@/components/JsonLd";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => guideSlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await resolveLocale(params);
  const g = getGuide(locale, slug);
  if (!g) return {};
  return pageMeta(locale, `/guides/${g.slug}`, g.metaTitle, g.excerpt, g.image, {
    type: "article",
    published: g.published,
    modified: g.updated,
    imageAlt: g.imageAlt,
  });
}

/** Pagina di una guida: titolo, riassunto, firma con le date, copertina, testo, fonti ufficiali, FAQ, altre guide. */
export default async function GuidePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  const g = getGuide(locale, slug);
  if (!g) notFound();

  const path = href(locale, `/guides/${g.slug}`);
  const author = authorOfGuide(g);
  const authorPath = href(locale, `/authors/${author.slug}`);
  const others = getGuides(locale)
    .filter((o) => o.slug !== g.slug)
    .sort((a, b) => Number(b.category === g.category) - Number(a.category === g.category))
    .slice(0, 3);

  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: g.title.length <= 110 ? g.title : g.metaTitle,
    description: g.excerpt,
    inLanguage: locale,
    datePublished: g.published,
    dateModified: g.updated,
    image: `${siteUrl}${g.image}`,
    author: personRef(author, authorPath),
    publisher: { "@id": organizationId },
    mainEntityOfPage: `${siteUrl}${path}`,
    about: { "@id": videoGameId },
    citation: g.sources.map((s) => s.url),
  };
  const faqLd = g.faq?.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: g.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {faqLd ? <JsonLd data={faqLd} /> : null}
      <JsonLd
        data={[
          article,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.nav.guides, path: href(locale, "/guides") },
            { name: g.title, path },
          ]),
        ]}
      />
      <p className="text-sm">
        <Link href={href(locale, "/guides")} className="text-chalk-muted hover:text-chalk">
          ← {d.common.backTo} {d.nav.guides}
        </Link>
      </p>
      <header className="mt-6">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <span className="kicker text-mint">{d.guides.categories[g.category]}</span>
          <span className="font-mono text-xs text-pale-muted">
            {g.readTime} {d.common.readTime}
          </span>
        </p>
        <h1 className="t-page mt-3 leading-tight">{g.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-chalk">{g.excerpt}</p>
        <p className="mt-5 text-sm text-pale-muted">
          {d.authors.writtenBy}{" "}
          <Link href={authorPath} rel="author" className="font-bold text-mint hover:underline">
            {author.name}
          </Link>
          {" · "}
          {d.common.published} <time dateTime={g.published}>{formatDate(locale, g.published)}</time>
          {g.updated !== g.published ? (
            <>
              {" · "}
              {d.common.updated} <time dateTime={g.updated}>{formatDate(locale, g.updated)}</time>
            </>
          ) : null}
        </p>
      </header>

      <figure className="mt-8">
        <NewsCover src={g.image} alt={g.imageAlt} priority />
        {g.image.startsWith("/covers/") ? null : <figcaption className="mt-2 text-xs text-pale-muted">{d.common.imageCredit}</figcaption>}
      </figure>

      <article className="card-night mt-8 p-6 sm:p-10">
        <Markdown source={g.body} />

        {g.sources.length ? (
          <section className="mt-8 border-t border-sky pt-6" aria-labelledby="guide-sources">
            <h2 id="guide-sources" className="kicker text-pale-muted">
              {d.common.sources}
            </h2>
            <ul className="mt-3 space-y-1 text-sm">
              {g.sources.map((s) => (
                <li key={s.url}>
                  <a href={s.url} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-mint underline">
                    {s.label}
                    <NewTabIcon />
                    <span className="sr-only"> {d.common.newTab}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {g.faq?.length ? (
          <section className="mt-8 border-t border-sky pt-6" aria-labelledby="guide-faq">
            <h2 id="guide-faq" className="t-section">
              {d.common.faqTitle}
            </h2>
            <dl className="mt-4 space-y-4">
              {g.faq.map((f) => (
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

      {others.length ? (
        <section className="mt-12" aria-labelledby="more-guides">
          <h2 id="more-guides" className="t-section">
            {d.guides.related}
          </h2>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={href(locale, `/guides/${o.slug}`)} className="card-night card-night-hover block h-full p-4">
                  <NewsCover src={o.image} className="mb-3" />
                  <p className="kicker text-mint">{d.guides.categories[o.category]}</p>
                  <h3 className="t-item mt-1 text-base leading-snug">{o.title}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

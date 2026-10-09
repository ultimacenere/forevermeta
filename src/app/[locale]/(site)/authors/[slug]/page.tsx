import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, href, locales } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { authors, getAuthor, guidesByAuthor, newsByAuthor, nicknameOf } from "@/lib/data/authors";
import { newsPath } from "@/lib/data/news";
import { NEW_TAB_REL } from "@/components/NewTab";
import { JsonLd, authorProfilePage, breadcrumbs, person } from "@/components/JsonLd";

type Params = Promise<{ locale: string; slug: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => authors.map((a) => ({ locale, slug: a.slug })));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale } = await resolveLocale(params);
  const a = getAuthor(slug);
  if (!a) return {};
  return pageMeta(locale, `/authors/${a.slug}`, a.metaTitle[locale], a.tagline[locale]);
}

/** Pagina di un autore: ruolo, biografia, profili collegati, news e guide firmate. */
export default async function AuthorPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  const a = getAuthor(slug);
  if (!a) notFound();
  const guides = guidesByAuthor(locale, a.slug);
  const signedNews = newsByAuthor(a.slug);
  const path = href(locale, `/authors/${a.slug}`);
  const sameAs = a.links.filter((l) => /^https?:/.test(l.url)).map((l) => l.url);
  const personLd = person({
    slug: a.slug,
    name: a.name,
    alternateName: nicknameOf(a) ?? a.displayName,
    role: a.role[locale],
    url: path,
    description: a.tagline[locale],
    knowsAbout: a.knowsAbout,
    sameAs,
  });
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          authorProfilePage({ locale, path, name: a.name, slug: a.slug }),
          personLd,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.authors.title, path: href(locale, "/authors") },
            { name: a.name, path },
          ]),
        ]}
      />
      <p className="text-sm">
        <Link href={href(locale, "/authors")} className="text-chalk-muted hover:text-chalk">
          ← {d.authors.allAuthors}
        </Link>
      </p>
      <p className="kicker mt-6 text-mint">{a.role[locale]}</p>
      <h1 className="t-page mt-2">{a.name}</h1>
      <article className="card-night mt-8 p-6 leading-relaxed text-pale sm:p-10">
        <p>{a.bio[locale]}</p>
        {a.links.length ? (
          <ul className="mt-6 flex flex-wrap gap-3 text-sm">
            {a.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} className="link-mint" {...(/^https?:/.test(l.url) ? { target: "_blank", rel: `${NEW_TAB_REL} me` } : {})}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}
      </article>
      {signedNews.length ? (
        <section className="mt-10" aria-labelledby="author-news">
          <h2 id="author-news" className="t-section">
            {d.authors.articles}
          </h2>
          <ul className="mt-4 space-y-2">
            {signedNews.map((n) => (
              <li key={n.slug}>
                <Link href={href(locale, newsPath(n))} className="text-mint hover:underline">
                  {n.title[locale]}
                </Link>{" "}
                <span className="font-mono text-xs text-pale-muted">{formatDate(locale, n.date)}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {guides.length ? (
        <section className="mt-10" aria-labelledby="author-guides">
          <h2 id="author-guides" className="t-section">
            {d.authors.guides}
          </h2>
          <ul className="mt-4 space-y-2">
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
    </div>
  );
}

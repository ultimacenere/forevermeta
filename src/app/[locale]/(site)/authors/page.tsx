import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { authors } from "@/lib/data/authors";
import { JsonLd, breadcrumbs, collectionPage, organizationId, personId } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/authors", dict.authors.metaTitle, dict.authors.description);
}

/** Indice degli autori: ruolo e nome, ognuno con la sua pagina. */
export default async function AuthorsPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const collection = collectionPage({
    locale,
    path: href(locale, "/authors"),
    name: d.authors.title,
    description: d.authors.description,
    items: authors.map((a) => ({ name: a.name, path: href(locale, `/authors/${a.slug}`), id: personId(a.slug) })),
    about: organizationId,
  });
  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          collection,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.authors.title, path: href(locale, "/authors") },
          ]),
        ]}
      />
      <p className="kicker text-mint">ForeverMeta</p>
      <h1 className="t-page mt-2">{d.authors.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{d.authors.description}</p>
      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {authors.map((a) => (
          <li key={a.slug}>
            <Link href={href(locale, `/authors/${a.slug}`)} className="card-night card-night-hover flex h-full flex-col p-6">
              <p className="kicker text-pale-muted">{a.role[locale]}</p>
              <h2 className="t-item mt-1 flex-1 leading-tight">{a.name}</h2>
              <p className="mt-3 text-sm text-pale">{a.tagline[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-8 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

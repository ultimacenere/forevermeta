import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { authors } from "@/lib/data/authors";
import { JsonLd, aboutPage, breadcrumbs } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/about", dict.about.metaTitle, dict.about.description);
}

/** Chi siamo: chi scrive, come lavoriamo (l'ancora #how-we-work è `publishingPrinciples` dell'organizzazione), cosa non siamo. */
export default async function AboutPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const a = d.about;
  const path = href(locale, "/about");
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          aboutPage({ locale, path, name: a.title, description: a.description }),
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: a.title, path },
          ]),
        ]}
      />
      <p className="kicker text-mint">ForeverMeta</p>
      <h1 className="t-page mt-2">{a.title}</h1>
      <article className="card-night mt-8 space-y-8 p-6 leading-relaxed text-pale sm:p-10">
        <section id="who-we-are" className="scroll-mt-24">
          <h2 className="t-section">{a.whoTitle}</h2>
          <p className="mt-3">{a.whoText}</p>
          <ul className="mt-4 space-y-1">
            {authors.map((au) => (
              <li key={au.slug}>
                <Link href={href(locale, `/authors/${au.slug}`)} className="link-mint font-bold">
                  {au.name}
                </Link>{" "}
                · {au.role[locale]}
              </li>
            ))}
          </ul>
        </section>
        <section id="how-we-work" className="scroll-mt-24">
          <h2 className="t-section">{a.howTitle}</h2>
          <p className="mt-3">{a.howText}</p>
        </section>
        <section id="what-we-are-not" className="scroll-mt-24">
          <h2 className="t-section">{a.notTitle}</h2>
          <p className="mt-3">{a.notText}</p>
        </section>
      </article>
    </div>
  );
}

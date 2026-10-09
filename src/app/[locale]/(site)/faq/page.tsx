import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { getFaqs } from "@/lib/content/faq";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/faq", dict.faq.metaTitle, dict.faq.description);
}

/** Domande frequenti: risposte brevi con il link alla pagina che spiega di più, anche come FAQPage. */
export default async function FaqPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const faqs = getFaqs(locale);
  const faqLd = faqs.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }
    : null;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          ...(faqLd ? [faqLd] : []),
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.faq.title, path: href(locale, "/faq") },
          ]),
        ]}
      />
      <p className="kicker text-mint">{d.nav.faq}</p>
      <h1 className="t-page mt-2">{d.faq.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{d.faq.intro}</p>
      <dl className="mt-10 space-y-4">
        {faqs.map((f) => (
          <div key={f.id} id={f.id} className="card-night scroll-mt-24 p-6">
            <dt className="t-item">{f.q}</dt>
            <dd className="mt-2 text-pale">
              {f.a}
              {f.links?.length ? (
                <span className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                  {f.links.map((l) => (
                    <Link key={l.path} href={href(locale, l.path)} className="link-mint font-bold">
                      {l.label} →
                    </Link>
                  ))}
                </span>
              ) : null}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

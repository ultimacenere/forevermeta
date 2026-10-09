import type { Metadata } from "next";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { privacyText } from "@/lib/privacyText";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/privacy", dict.privacy.metaTitle, dict.privacy.description, undefined, { noindex: true });
}

/** Informativa sulla privacy: testi in src/lib/privacyText.ts, un paragrafo per trattamento con la sua ancora. */
export default async function PrivacyPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const t = privacyText[locale];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">ForeverMeta</p>
      <h1 className="t-page mt-2">{d.privacy.title}</h1>
      <article className="card-night mt-8 space-y-6 p-6 leading-relaxed text-pale sm:p-10">
        {t.map((p) => (
          <section key={p.id} id={p.id} className="scroll-mt-24">
            <h2 className="t-item">{p.title}</h2>
            <p className="mt-2">{p.text}</p>
          </section>
        ))}
      </article>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";
import { InterfaceList, type InterfaceListItem } from "@/components/interfaces/InterfaceList";
import { listPublishedInterfaces } from "@/lib/community/interfaceQueries";
import { addonFree, anyShotPathOk, shotUrl } from "@/lib/community/interfaces";
import { supabaseUrl } from "@/lib/supabase/env";
import { interfaceLabels } from "@/lib/interfaceLabels";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/interfaces", dict.interfaces.metaTitle, dict.interfaces.description);
}

/** Le interfacce condivise (ISR): elenco con i filtri nel browser, come copiare e importare un layout, come funziona. */
export default async function InterfacesPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const t = d.interfaces;
  const L = interfaceLabels[locale];
  const { interfaces, ratings, unavailable } = await listPublishedInterfaces();
  const items: InterfaceListItem[] = interfaces.map((x) => {
    const first = x.shots.find(anyShotPathOk);
    return {
      id: x.id,
      slug: x.slug,
      name: x.name,
      classes: x.classes,
      roles: x.roles,
      input: x.input,
      resolution: x.resolution,
      description: x.description,
      created_at: x.created_at,
      author: x.profile?.display_name || x.profile?.username || d.nav.playerFallback,
      cover: first ? shotUrl(supabaseUrl, first) : null,
      noAddons: addonFree(x),
      avg: ratings.get(x.id)?.avg ?? 0,
      votes: ratings.get(x.id)?.votes ?? 0,
    };
  });
  const path = href(locale, "/interfaces");
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: t.title, path },
        ])}
      />
      <p className="kicker text-mint">{d.nav.interfaces}</p>
      <h1 className="t-page mt-2">{t.title}</h1>
      <p className="mt-4 max-w-3xl text-chalk-muted">{t.intro}</p>
      <div className="mt-5">
        <Link href={href(locale, "/interfaces/publish")} className="btn btn-primary" prefetch={false}>
          {L.list.publish}
        </Link>
      </div>
      <div className="mt-8">{unavailable ? <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p> : <InterfaceList items={items} labels={L} locale={locale} />}</div>
      <section className="mt-14 grid gap-6 border-t border-felt-line pt-8 md:grid-cols-2" aria-label={L.howTo.exportTitle}>
        <div>
          <h2 className="t-section">{L.howTo.importTitle}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-pale">
            {L.howTo.import.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2 className="t-section">{L.howTo.exportTitle}</h2>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-pale">
            {L.howTo.export.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
        <p className="text-xs text-pale-muted md:col-span-2">{L.howTo.note}</p>
      </section>
      <section className="mt-10 border-t border-felt-line pt-8" aria-labelledby="interfaces-how">
        <h2 id="interfaces-how" className="t-section">
          {t.howTitle}
        </h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-pale">
          {t.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-pale-muted">{d.common.notAffiliated}</p>
      </section>
    </div>
  );
}

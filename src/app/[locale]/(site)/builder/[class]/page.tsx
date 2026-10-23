import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { href, locales } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";
import { ClassStrip } from "@/components/builder/ClassStrip";
import { TalentBuilder } from "@/components/builder/TalentBuilder";
import { BuilderNotes } from "../page";
import { BUILDER_PATH, classHrefs, classPageUrl, classPath, raceOptions, treeList } from "@/lib/builder/page";
import { classIds, className, getClass, isClassId } from "@/lib/data/classes";
import { racesOfClass, raceName, racialsSources } from "@/lib/data/races";
import { TALENT_ICON_BASE, talentsOf } from "@/lib/data/talents";
import { builderLabels, fill } from "@/lib/builderLabels";

type Params = Promise<{ locale: string; class: string }>;

export function generateStaticParams() {
  return locales.flatMap((locale) => classIds.map((c) => ({ locale, class: c })));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { class: cls } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!isClassId(cls)) notFound();
  const c = getClass(cls);
  const name = className(c, locale);
  return pageMeta(locale, classPath(cls), fill(dict.builder.classMetaTitle, { class: name }), fill(dict.builder.classDescription, { class: name, trees: treeList(c, dict.builder.and) }));
}

/**
 * Il builder di una classe: la striscia delle classi, lo strumento (razza, livello, i tre alberi, condividi) e i
 * testi in fondo. Pagina statica: i dati dei talenti sono nel codice, la build vive nell'hash del link e nel browser.
 */
export default async function ClassBuilderPage({ params }: { params: Params }) {
  const { class: cls } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!isClassId(cls)) notFound();
  const c = getClass(cls);
  const name = className(c, locale);
  const data = talentsOf(cls);
  const labels = builderLabels[locale];
  const b = d.builder;
  const path = href(locale, classPath(cls));
  const allowed = racesOfClass(cls);
  const extraSources = [
    ...(data
      ? [
          {
            label: `${data.source.verifiedInGame ? fill(labels.dataVerified, { version: data.gameVersion }) : fill(labels.dataNotVerified, { source: data.source.label })} ${fill(labels.gameVersion, { version: data.gameVersion })}${data.source.license ? ` ${fill(labels.dataLicense, { license: data.source.license })}` : ""}${data.source.attribution ? ` ${data.source.attribution}.` : ""}`,
            url: data.source.url,
          },
        ]
      : []),
    ...racialsSources,
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: b.title, path: href(locale, BUILDER_PATH) },
          { name: fill(b.classTitle, { class: name }), path },
        ])}
      />
      <p className="kicker text-mint">{d.nav.builder}</p>
      <h1 className="t-page mt-2">{fill(b.classTitle, { class: name })}</h1>
      <div className="mt-5">
        <ClassStrip locale={locale} current={cls} label={labels.pickClass} />
      </div>
      <div className="mt-6">
        <TalentBuilder classId={cls} className={name} color={c.color} ink={c.ink} data={data} races={raceOptions(locale, cls)} labels={labels} pageUrl={classPageUrl(locale, cls)} classHrefs={classHrefs(locale)} iconBase={TALENT_ICON_BASE} />
      </div>
      <section className="mt-10 text-sm text-pale" aria-labelledby="builder-races">
        <h2 id="builder-races" className="t-section">
          {fill(b.racesOf, { class: name })}
        </h2>
        <p className="mt-2">{allowed.map((r) => raceName(r, locale)).join(" · ")}</p>
      </section>
      <BuilderNotes locale={locale} dict={d} extraSources={extraSources} />
    </div>
  );
}

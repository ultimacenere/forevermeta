import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { formatDate, href, locales, siteUrl } from "@/lib/i18n";
import { pageMeta, pageTitleWith, resolveLocale } from "@/lib/page";
import { JsonLd, breadcrumbs, organizationId, websiteId } from "@/components/JsonLd";
import { Avatar } from "@/components/AccountMenu";
import { BuildTrees, TakenTalents } from "@/components/builds/BuildTrees";
import { BuildStars } from "@/components/builds/BuildStars";
import { BuildOwnerActions } from "@/components/builds/BuildOwnerActions";
import { CopyCode, NewBanner } from "@/components/builds/BuildExtras";
import { getPublishedBuild } from "@/lib/community/buildQueries";
import { BUILD_SLUG_RE, buildPath } from "@/lib/community/builds";
import { buildIndexing, dropHreflang, localizedBuild } from "@/lib/community/buildTranslation";
import { authorOf, builderHref, paragraphsOf } from "@/lib/community/buildView";
import { buildLabels, languageNames } from "@/lib/buildLabels";
import { fill } from "@/lib/builderLabels";
import { decodeBuild } from "@/lib/builder/code";
import { className, getClass } from "@/lib/data/classes";
import { raceName, races } from "@/lib/data/races";
import { TALENT_ICON_BASE, localizeTalents, talentsOf } from "@/lib/data/talents";

type Params = Promise<{ locale: string; slug: string }>;

export const revalidate = 60;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!BUILD_SLUG_RE.test(slug)) return {};
  const { build } = await getPublishedBuild(slug);
  if (!build) return {};
  const cls = className(getClass(build.class_id), locale);
  // la pagina si indicizza nelle lingue in cui la guida si legge davvero (originale e traduzioni aggiornate), da 75
  // parole; una build sotto soglia tiene la sola canonical, senza presentare tre pagine noindex come alternative
  const idx = buildIndexing(build, locales, locale);
  const view = localizedBuild(build, locale);
  const meta = pageMeta(locale, buildPath(build.slug), pageTitleWith(view.text.name, cls), view.text.summary, undefined, {
    type: "article",
    published: build.created_at,
    modified: build.updated_at,
    languages: idx.hreflang ? idx.languages : [locale],
    noindex: idx.noindex,
    imageAlt: dict.builds.title,
  });
  return idx.hreflang ? meta : dropHreflang(meta);
}

/**
 * La scheda di una build pubblicata (ISR 60). Ordine deciso da Pierluigi il 23/10/2026: testata con classe, razza,
 * livello e punti, voti e tasti verso il builder; poi la guida (riassunto e sezioni) nella lingua della pagina: la
 * traduzione automatica con il rimando all'originale quando c'è ed è aggiornata, altrimenti il testo dell'autore con la
 * nota sulla lingua (e la pagina noindex in quella lingua); poi i tre alberi in sola lettura e i tratti razziali; in
 * fondo l'elenco dei talenti presi e i tasti del proprietario.
 */
export default async function BuildPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!BUILD_SLUG_RE.test(slug)) notFound();
  const { build, rating, unavailable } = await getPublishedBuild(slug);
  const L = buildLabels[locale];
  if (unavailable) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p>
      </div>
    );
  }
  if (!build) notFound();
  const c = getClass(build.class_id);
  const cls = className(c, locale);
  const data = localizeTalents(talentsOf(build.class_id), locale);
  const decoded = data ? decodeBuild(data, build.code, races.filter((r) => r.classes.includes(build.class_id)).map((r) => r.id)) : null;
  const race = build.race_id ? races.find((r) => r.id === build.race_id) : undefined;
  const path = href(locale, buildPath(build.slug));
  const author = authorOf(build, d.nav.playerFallback);
  const view = localizedBuild(build, locale);
  const g = view.text;
  const originalLang = languageNames[locale][build.guide_lang];
  const sections: { key: string; title: string; text: string }[] = [
    { key: "plan", title: L.page.plan, text: g.plan },
    { key: "strengths", title: L.page.strengths, text: g.strengths ?? "" },
    { key: "weaknesses", title: L.page.weaknesses, text: g.weaknesses ?? "" },
    { key: "notes", title: L.page.notes, text: g.notes ?? "" },
  ].filter((s) => s.text.trim());
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    headline: g.name,
    description: g.summary,
    inLanguage: view.lang,
    datePublished: build.created_at,
    dateModified: build.updated_at,
    author: { "@type": "Person", name: author },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId(locale) },
    mainEntityOfPage: `${siteUrl}${path}`,
  };
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          article,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.builds.title, path: href(locale, "/builds") },
            { name: g.name, path },
          ]),
        ]}
      />
      <NewBanner text={L.page.newBanner} />
      <p className="kicker text-mint">{d.nav.builds}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- icona piccola già nel sito */}
        <img src={`${TALENT_ICON_BASE}${c.icon}.jpg`} alt="" width={44} height={44} className="tb-class-icon-lg" style={{ "--tb-ink": c.ink } as CSSProperties} />
        <h1 className="t-page">{g.name}</h1>
      </div>
      <p className="mt-3 text-sm text-pale">
        <span className="font-semibold text-chalk">{cls}</span>
        {race ? ` · ${raceName(race, locale)}` : ""} · {fill(L.page.level, { n: build.level })} · {fill(L.page.points, { n: build.points })}
        {decoded && data ? ` · ${data.trees.map((t) => t.talents.reduce((a, x) => a + (decoded.ranks[x.id] ?? 0), 0)).join(" / ")}` : ""} · <span className="pill-purpose">{L.purposes[build.purpose]}</span>
        {build.game_version ? ` · ${fill(L.page.gameVersion, { v: build.game_version })}` : ""}
      </p>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-sm text-pale">
          <Avatar profile={build.profile ?? null} name={author} size={32} />
          <span>
            {L.page.by} <span className="font-semibold text-chalk">{author}</span> · {L.page.published} {formatDate(locale, build.created_at.slice(0, 10))}
            {build.updated_at.slice(0, 10) !== build.created_at.slice(0, 10) ? `, ${L.page.updated} ${formatDate(locale, build.updated_at.slice(0, 10))}` : ""}
          </span>
        </div>
        <BuildStars buildId={build.id} ownerId={build.owner} avg={rating?.avg ?? 0} votes={rating?.votes ?? 0} path={path} loginHref={`${href(locale, "/login")}?next=${encodeURIComponent(path)}`} labels={L.rating} />
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href={builderHref(locale, build)} className="btn btn-gold" prefetch={false}>
          {L.page.openInBuilder}
        </Link>
        <CopyCode code={build.code} label={L.page.copyCode} copied={L.page.copied} />
      </div>

      <article className="mt-8 max-w-3xl" lang={view.lang}>
        {/* Traduzione automatica con il rimando all'originale, oppure la nota sulla lingua dell'autore. L'originale non si
            incorpora qui: una sola lingua per pagina (Search Central, "Managing multi-regional and multilingual sites"). */}
        {view.translated ? (
          <p className="alert-good mb-4 text-sm">
            {fill(L.page.translatedNote, { from: L.page.langFrom[build.guide_lang] })}{" "}
            <Link href={href(build.guide_lang, buildPath(build.slug))} hrefLang={build.guide_lang} className="font-semibold underline underline-offset-2" prefetch={false}>
              {fill(L.page.originalText, { lang: originalLang })} →
            </Link>
          </p>
        ) : build.guide_lang !== locale ? (
          <p className="alert-good mb-4 text-sm">{fill(L.page.guideLang, { lang: originalLang })}</p>
        ) : null}
        <p className="text-lg text-chalk">{g.summary}</p>
        {sections.map((s) => (
          <section key={s.key} className="mt-6" aria-labelledby={`build-${s.key}`}>
            <h2 id={`build-${s.key}`} className="t-section">
              {s.title}
            </h2>
            {paragraphsOf(s.text).map((lines, i) => (
              <p key={i} className="mt-3 text-pale">
                {lines.map((l, j) => (
                  <span key={j}>
                    {l}
                    {j < lines.length - 1 ? <br /> : null}
                  </span>
                ))}
              </p>
            ))}
          </section>
        ))}
      </article>

      <section className="mt-10" aria-label={L.page.talents}>
        {decoded && data ? <BuildTrees data={data} build={decoded} color={c.color} ink={c.ink} /> : <p className="card-night p-4 text-sm text-pale-muted">{build.code}</p>}
      </section>
      {race ? (
        <section className="mt-8" aria-labelledby="build-racials">
          <h2 id="build-racials" className="t-section">
            {L.page.racials} · {raceName(race, locale)}
          </h2>
          <ul className="mt-3 grid gap-2 text-sm text-pale sm:grid-cols-2">
            {race.racials.map((x) => (
              <li key={x.name} className="card-inset px-3 py-2">
                <span className="font-semibold text-chalk">{x.name}</span> <span className="text-pale-muted">— {x.text[locale]}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {decoded && data ? <TakenTalents data={data} build={decoded} label={L.page.talents} /> : null}
      <BuildOwnerActions buildId={build.id} slug={build.slug} ownerId={build.owner} status={build.status} locale={locale} editHref={href(locale, `${buildPath(build.slug)}/edit`)} labels={L.owner} />
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

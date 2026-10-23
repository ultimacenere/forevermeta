import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { formatDate, href, siteUrl } from "@/lib/i18n";
import { pageMeta, pageTitleWith, resolveLocale } from "@/lib/page";
import { JsonLd, breadcrumbs, organizationId, websiteId } from "@/components/JsonLd";
import { Avatar } from "@/components/AccountMenu";
import { BuildTrees } from "@/components/builds/BuildTrees";
import { BuildStars } from "@/components/builds/BuildStars";
import { BuildOwnerActions } from "@/components/builds/BuildOwnerActions";
import { CopyCode, NewBanner } from "@/components/builds/BuildExtras";
import { getPublishedBuild } from "@/lib/community/buildQueries";
import { BUILD_SLUG_RE, buildIndexable, buildPath } from "@/lib/community/builds";
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
  const indexable = buildIndexable(build) && build.guide_lang === locale;
  return pageMeta(locale, buildPath(build.slug), pageTitleWith(build.name, cls), build.summary, undefined, {
    type: "article",
    published: build.created_at,
    modified: build.updated_at,
    languages: [build.guide_lang],
    noindex: !indexable,
    imageAlt: dict.builds.title,
  });
}

/**
 * La scheda di una build pubblicata (ISR 60): testata con classe, razza, livello e punti, voti, tasti verso il builder,
 * i tre alberi in sola lettura, i tratti razziali, la guida com'è scritta dall'autore (una sola lingua per pagina:
 * nelle altre lingue la pagina è noindex e dice in che lingua è la guida), i tasti del proprietario.
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
  const sections: { key: string; title: string; text: string }[] = [
    { key: "plan", title: L.page.plan, text: build.plan },
    { key: "strengths", title: L.page.strengths, text: build.strengths },
    { key: "weaknesses", title: L.page.weaknesses, text: build.weaknesses },
    { key: "notes", title: L.page.notes, text: build.notes },
  ].filter((s) => s.text.trim());
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    headline: build.name,
    description: build.summary,
    inLanguage: build.guide_lang,
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
            { name: build.name, path },
          ]),
        ]}
      />
      <NewBanner text={L.page.newBanner} />
      <p className="kicker text-mint">{d.nav.builds}</p>
      <div className="mt-2 flex flex-wrap items-center gap-3">
        {/* eslint-disable-next-line @next/next/no-img-element -- icona piccola già nel sito */}
        <img src={`${TALENT_ICON_BASE}${c.icon}.jpg`} alt="" width={44} height={44} className="tb-class-icon-lg" style={{ "--tb-ink": c.ink } as CSSProperties} />
        <h1 className="t-page">{build.name}</h1>
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
      <section className="mt-8" aria-label={L.page.talents}>
        {decoded && data ? <BuildTrees data={data} build={decoded} color={c.color} ink={c.ink} talentsLabel={L.page.talents} /> : <p className="card-night p-4 text-sm text-pale-muted">{build.code}</p>}
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
      <article className="mt-10 max-w-3xl">
        {build.guide_lang !== locale ? <p className="alert-good mb-4 text-sm">{fill(L.page.guideLang, { lang: languageNames[locale][build.guide_lang] })}</p> : null}
        <p className="text-lg text-chalk">{build.summary}</p>
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
      <BuildOwnerActions buildId={build.id} slug={build.slug} ownerId={build.owner} status={build.status} locale={locale} editHref={href(locale, `${buildPath(build.slug)}/edit`)} labels={L.owner} />
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

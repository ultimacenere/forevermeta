import Link from "next/link";
import { formatDate, href, siteUrl, type Dictionary, type Locale } from "@/lib/i18n";
import { JsonLd, breadcrumbs, organizationId, websiteId } from "@/components/JsonLd";
import { Avatar } from "@/components/AccountMenu";
import { NewBanner } from "@/components/builds/BuildExtras";
import { CopyString, InterfaceOwnerActions, InterfaceReport, InterfaceStars } from "@/components/interfaces/InterfaceExtras";
import { addonFree, interfacePath, layoutElements, type CommunityInterface } from "@/lib/community/interfaces";
import type { Rating } from "@/lib/community/interfaceQueries";
import { paragraphsOf } from "@/lib/community/buildView";
import { interfaceLabels } from "@/lib/interfaceLabels";
import { languageNames } from "@/lib/buildLabels";
import { fill } from "@/lib/builderLabels";

/**
 * Il corpo della scheda di un'interfaccia condivisa (24/10/2026): nome, autore, voti; gli screenshot (il primo grande);
 * la stringa dell'Edit Mode con "Copia il layout" e, se c'è, quella del Cooldown Manager; i dettagli; la descrizione
 * com'è scritta dall'autore; come importarla; i tasti del proprietario e la segnalazione. I dati li legge la pagina
 * (`/interfaces/<slug>`); `shots` sono gli indirizzi pubblici degli screenshot, già pronti.
 */
export function InterfaceView({ item, rating, shots, locale, dict: d }: { item: CommunityInterface; rating: Rating | null; shots: string[]; locale: Locale; dict: Dictionary }) {
  const L = interfaceLabels[locale];
  const P = L.page;
  const path = href(locale, interfacePath(item.slug));
  const author = item.profile?.display_name || item.profile?.username || d.nav.playerFallback;
  const elements = layoutElements(item.layout);
  const details: { key: string; title: string; value: string }[] = [
    { key: "classes", title: P.classes, value: item.classes.length ? item.classes.map((c) => L.classes[c]).join(", ") : P.anyClass },
    { key: "roles", title: P.roles, value: item.roles.length ? item.roles.map((r) => L.roles[r]).join(", ") : P.anyRole },
    { key: "input", title: P.input, value: L.inputs[item.input] },
    { key: "preset", title: P.preset, value: L.presets[item.preset] },
    { key: "resolution", title: P.resolution, value: item.resolution || P.notStated },
    { key: "scale", title: P.uiScale, value: item.ui_scale != null ? String(item.ui_scale) : P.notStated },
  ];
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    headline: item.name,
    description: item.description.slice(0, 300),
    inLanguage: item.description_lang,
    datePublished: item.created_at,
    dateModified: item.updated_at,
    author: { "@type": "Person", name: author },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId(locale) },
    mainEntityOfPage: `${siteUrl}${path}`,
    ...(shots[0] ? { image: shots[0] } : {}),
  };
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          article,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.interfaces.title, path: href(locale, "/interfaces") },
            { name: item.name, path },
          ]),
        ]}
      />
      <NewBanner text={P.newBanner} />
      <p className="kicker text-mint">
        <Link href={href(locale, "/interfaces")} className="hover:underline">
          {d.nav.interfaces}
        </Link>
      </p>
      <h1 className="t-page mt-2">{item.name}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
        <div className="flex items-center gap-2 text-sm text-pale">
          <Avatar profile={item.profile ?? null} name={author} size={32} />
          <span>
            {P.by} <span className="font-semibold text-chalk">{author}</span> · {P.published} {formatDate(locale, item.created_at.slice(0, 10))}
            {item.updated_at.slice(0, 10) !== item.created_at.slice(0, 10) ? `, ${P.updated} ${formatDate(locale, item.updated_at.slice(0, 10))}` : ""}
          </span>
        </div>
        <InterfaceStars interfaceId={item.id} ownerId={item.owner} avg={rating?.avg ?? 0} votes={rating?.votes ?? 0} path={path} loginHref={`${href(locale, "/login")}?next=${encodeURIComponent(path)}`} labels={L.rating} />
      </div>

      {shots.length ? (
        <section className="if-gallery mt-8" aria-label={L.form.shotsSection}>
          {shots.map((src, i) => (
            <a key={src} href={src} target="_blank" rel="noopener" className={i === 0 ? "if-gallery-main" : "if-gallery-thumb"}>
              {/* eslint-disable-next-line @next/next/no-img-element -- screenshot dell'utente dallo Storage */}
              <img src={src} alt={fill(P.screenshot, { n: i + 1, total: shots.length })} loading={i === 0 ? "eager" : "lazy"} />
            </a>
          ))}
        </section>
      ) : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-8">
          <section className="card-night p-5" aria-labelledby="if-layout-title">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="if-layout-title" className="t-panel">
                {P.layoutTitle}
              </h2>
              <span className="font-mono text-xs text-pale-muted">
                {elements ? `${fill(P.elements, { n: elements })} · ` : ""}
                {fill(P.chars, { n: item.layout.length })}
              </span>
            </div>
            <pre className="if-code mt-3">{item.layout}</pre>
            <div className="mt-4 flex flex-wrap gap-2">
              <CopyString text={item.layout} label={P.copyLayout} copied={P.copied} kind="layout" />
              {item.cooldowns ? <CopyString text={item.cooldowns} label={P.copyCooldowns} copied={P.copied} kind="cooldowns" className="btn btn-ghost" /> : null}
            </div>
          </section>
          <section aria-labelledby="if-about">
            <h2 id="if-about" className="t-section">
              {P.about}
            </h2>
            {item.description_lang !== locale ? <p className="mt-2 text-xs text-pale-muted">{fill(P.textLang, { lang: languageNames[locale][item.description_lang] })}</p> : null}
            <div className="mt-3 space-y-3 text-pale" lang={item.description_lang}>
              {paragraphsOf(item.description).map((lines, i) => (
                <p key={i}>
                  {lines.map((l, j) => (
                    <span key={j}>
                      {j > 0 ? <br /> : null}
                      {l}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </section>
          <section aria-labelledby="if-import">
            <h2 id="if-import" className="t-section">
              {L.howTo.importTitle}
            </h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-pale">
              {L.howTo.import.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <p className="mt-3 text-xs text-pale-muted">{L.howTo.note}</p>
          </section>
        </div>
        <aside className="space-y-4">
          <dl className="card-night divide-y divide-felt-line/60 p-4 text-sm">
            <p className="kicker pb-2 text-pale-muted">{P.details}</p>
            {details.map((x) => (
              <div key={x.key} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-2 last:pb-0">
                <dt className="kicker text-pale-muted">{x.title}</dt>
                <dd className="text-right text-chalk">{x.value}</dd>
              </div>
            ))}
          </dl>
          <div className="card-night p-4 text-sm">
            <p className="kicker text-pale-muted">{P.addons}</p>
            {addonFree(item) ? <p className="mt-2 text-chalk">{P.noAddons}</p> : <p className="mt-2 whitespace-pre-line text-pale">{item.addons}</p>}
            {item.game_version ? <p className="mt-3 font-mono text-xs text-pale-muted">{fill(P.gameVersion, { v: item.game_version })}</p> : null}
          </div>
        </aside>
      </div>

      <InterfaceOwnerActions interfaceId={item.id} slug={item.slug} ownerId={item.owner} status={item.status} locale={locale} editHref={href(locale, `${interfacePath(item.slug)}/edit`)} labels={L.owner} />
      <InterfaceReport interfaceId={item.id} ownerId={item.owner} loginHref={`${href(locale, "/login")}?next=${encodeURIComponent(path)}`} labels={L.report} />
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { formatDate, href, siteUrl } from "@/lib/i18n";
import { pageMeta, pageTitleWith, resolveLocale } from "@/lib/page";
import { JsonLd, breadcrumbs, organizationId, websiteId } from "@/components/JsonLd";
import { Avatar } from "@/components/AccountMenu";
import { NewBanner } from "@/components/builds/BuildExtras";
import { GuildOwnerActions } from "@/components/guilds/GuildOwnerActions";
import { GuildReport } from "@/components/guilds/GuildReport";
import { getPublishedGuild } from "@/lib/community/guildQueries";
import { GUILD_SLUG_RE, guildIndexable, guildPath, isStale } from "@/lib/community/guilds";
import { paragraphsOf } from "@/lib/community/buildView";
import { guildLabels } from "@/lib/guildLabels";
import { languageNames } from "@/lib/buildLabels";
import { fill } from "@/lib/builderLabels";

type Params = Promise<{ locale: string; slug: string }>;

export const revalidate = 60;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!GUILD_SLUG_RE.test(slug)) return {};
  const { guild } = await getPublishedGuild(slug);
  if (!guild) return {};
  const L = guildLabels[locale];
  const indexable = guildIndexable(guild) && guild.description_lang === locale;
  return pageMeta(locale, guildPath(guild.slug), pageTitleWith(guild.name, `${L.factions[guild.faction]} · ${guild.realm}`), guild.description, undefined, {
    type: "article",
    published: guild.created_at,
    modified: guild.updated_at,
    languages: [guild.description_lang],
    noindex: !indexable,
    imageAlt: dict.guilds.title,
  });
}

/**
 * La scheda di un annuncio di gilda (ISR 60): testata con fazione, reame e regione, chi l'ha pubblicato e quando, i
 * dati in due colonne (lingue, obiettivi, ruoli e classi cercati, giorni e orari, dimensione), il testo com'è scritto
 * dall'autore (una sola lingua per pagina: nelle altre lingue la pagina è noindex e dice in che lingua è), i contatti,
 * i tasti del proprietario, la segnalazione. Un annuncio non rinnovato da 45 giorni si apre con l'avviso.
 */
export default async function GuildPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!GUILD_SLUG_RE.test(slug)) notFound();
  const { guild, unavailable } = await getPublishedGuild(slug);
  const L = guildLabels[locale];
  if (unavailable) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p>
      </div>
    );
  }
  if (!guild) notFound();
  const path = href(locale, guildPath(guild.slug));
  const author = guild.profile?.display_name || guild.profile?.username || d.nav.playerFallback;
  const stale = isStale(guild.refreshed_at);
  const details: { key: string; title: string; value: string }[] = [
    { key: "realm", title: L.page.realm, value: `${guild.realm} · ${L.regions[guild.region]}${guild.realm_type !== "normal" ? ` · ${L.realmTypes[guild.realm_type]}` : ""}` },
    { key: "faction", title: L.page.faction, value: L.factions[guild.faction] },
    { key: "languages", title: L.page.languages, value: guild.languages.map((l) => L.languages[l]).join(", ") },
    { key: "focus", title: L.page.focus, value: guild.focus.map((x) => L.focus[x]).join(", ") },
    { key: "roles", title: L.page.roles, value: guild.roles.length ? guild.roles.map((r) => L.roles[r]).join(", ") : L.page.anyRole },
    { key: "classes", title: L.page.classes, value: guild.classes.length ? guild.classes.map((c) => L.classes[c]).join(", ") : L.page.anyClass },
    { key: "size", title: L.page.size, value: L.sizes[guild.size] },
  ];
  if (guild.raid_days.length) details.push({ key: "days", title: L.page.raidDays, value: guild.raid_days.map((x) => L.days[x]).join(" · ") });
  if (guild.schedule) details.push({ key: "schedule", title: L.page.schedule, value: guild.schedule });
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteUrl}${path}#article`,
    headline: guild.name,
    description: guild.description.slice(0, 300),
    inLanguage: guild.description_lang,
    datePublished: guild.created_at,
    dateModified: guild.updated_at,
    author: { "@type": "Person", name: author },
    publisher: { "@id": organizationId },
    isPartOf: { "@id": websiteId(locale) },
    mainEntityOfPage: `${siteUrl}${path}`,
    about: { "@type": "Organization", name: guild.name, ...(guild.website_url ? { url: guild.website_url } : {}) },
  };
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <JsonLd
        data={[
          article,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.guilds.title, path: href(locale, "/guilds") },
            { name: guild.name, path },
          ]),
        ]}
      />
      <NewBanner text={L.page.newBanner} />
      <p className="kicker text-mint">
        <Link href={href(locale, "/guilds")} className="hover:underline">
          {d.nav.guilds}
        </Link>
      </p>
      <div className={`mt-2 flex flex-wrap items-center gap-3 gl-${guild.faction}`}>
        <span className="gl-crest gl-crest-lg" aria-hidden="true">
          {guild.name.slice(0, 1).toUpperCase()}
        </span>
        <h1 className="t-page">{guild.name}</h1>
      </div>
      <p className="mt-3 text-sm text-pale">
        <span className={`gl-pill gl-pill-${guild.faction}`}>{L.factions[guild.faction]}</span> <span className="font-semibold text-chalk">{guild.realm}</span> · {L.regions[guild.region]}
        {guild.realm_type !== "normal" ? ` · ${L.realmTypes[guild.realm_type]}` : ""} · {L.sizes[guild.size]}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm text-pale">
        <Avatar profile={guild.profile ?? null} name={author} size={32} />
        <span>
          {L.page.by} <span className="font-semibold text-chalk">{author}</span> · {L.page.published} {formatDate(locale, guild.created_at.slice(0, 10))}
          {guild.refreshed_at.slice(0, 10) !== guild.created_at.slice(0, 10) ? `, ${L.page.refreshed} ${formatDate(locale, guild.refreshed_at.slice(0, 10))}` : ""}
        </span>
      </div>
      {stale ? <p className="alert-bad mt-5">{L.page.stale}</p> : null}

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <section aria-labelledby="guild-about">
          <h2 id="guild-about" className="t-section">
            {L.page.about}
          </h2>
          {guild.description_lang !== locale ? <p className="mt-2 text-xs text-pale-muted">{fill(L.page.textLang, { lang: languageNames[locale][guild.description_lang] })}</p> : null}
          <div className="prose-night mt-3 space-y-3 text-pale" lang={guild.description_lang}>
            {paragraphsOf(guild.description).map((lines, i) => (
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
        <aside className="space-y-4">
          <dl className="card-night divide-y divide-felt-line/60 p-4 text-sm">
            {details.map((x) => (
              <div key={x.key} className="flex flex-wrap justify-between gap-x-4 gap-y-1 py-2 first:pt-0 last:pb-0">
                <dt className="kicker text-pale-muted">{x.title}</dt>
                <dd className="text-right text-chalk">{x.value}</dd>
              </div>
            ))}
          </dl>
          <div className="card-night p-4">
            <p className="kicker text-pale-muted">{L.page.contacts}</p>
            <div className="mt-3 flex flex-col gap-2">
              {guild.discord_url ? (
                <a href={guild.discord_url} className="btn btn-discord justify-center" target="_blank" rel="nofollow noopener noreferrer">
                  {L.page.joinDiscord}
                </a>
              ) : null}
              {guild.website_url ? (
                <a href={guild.website_url} className="btn btn-choice justify-center" target="_blank" rel="nofollow noopener noreferrer ugc">
                  {L.page.website}
                </a>
              ) : null}
              {guild.contact ? (
                <p className="text-sm text-pale">
                  <span className="kicker text-pale-muted">{L.page.inGame}: </span>
                  <span className="text-chalk">{guild.contact}</span>
                </p>
              ) : null}
            </div>
          </div>
        </aside>
      </div>

      <GuildOwnerActions guildId={guild.id} slug={guild.slug} ownerId={guild.owner} status={guild.status} locale={locale} editHref={href(locale, `${guildPath(guild.slug)}/edit`)} labels={L.owner} />
      <GuildReport guildId={guild.id} ownerId={guild.owner} loginHref={`${href(locale, "/login")}?next=${encodeURIComponent(path)}`} labels={L.report} />
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

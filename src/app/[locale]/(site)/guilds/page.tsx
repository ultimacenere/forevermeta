import type { Metadata } from "next";
import Link from "next/link";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { JsonLd, breadcrumbs } from "@/components/JsonLd";
import { GuildList, type GuildListItem } from "@/components/guilds/GuildList";
import { listPublishedGuilds } from "@/lib/community/guildQueries";
import { guildLabels } from "@/lib/guildLabels";

export const revalidate = 300;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/guilds", dict.guilds.metaTitle, dict.guilds.description);
}

/** La bacheca delle gilde (ISR): elenco con i filtri nel browser, poi come funziona. */
export default async function GuildsPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const g = d.guilds;
  const L = guildLabels[locale];
  const { guilds, unavailable } = await listPublishedGuilds();
  const items: GuildListItem[] = guilds.map((x) => ({
    id: x.id,
    slug: x.slug,
    name: x.name,
    region: x.region,
    realm: x.realm,
    realm_type: x.realm_type,
    faction: x.faction,
    languages: x.languages,
    focus: x.focus,
    roles: x.roles,
    size: x.size,
    description: x.description,
    refreshed_at: x.refreshed_at,
    created_at: x.created_at,
    author: x.profile?.display_name || x.profile?.username || d.nav.playerFallback,
  }));
  // la lingua della pagina parte selezionata se almeno una gilda la parla: chi legge in italiano cerca gilde italiane
  const initialLanguage = items.some((x) => x.languages.includes(locale)) ? locale : "";
  const path = href(locale, "/guilds");
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <JsonLd
        data={breadcrumbs([
          { name: "ForeverMeta", path: href(locale) },
          { name: g.title, path },
        ])}
      />
      <p className="kicker text-mint">{d.nav.guilds}</p>
      <h1 className="t-page mt-2">{g.title}</h1>
      <p className="mt-4 max-w-3xl text-chalk-muted">{g.intro}</p>
      <div className="mt-5">
        <Link href={href(locale, "/guilds/publish")} className="btn btn-primary" prefetch={false}>
          {L.list.publish}
        </Link>
      </div>
      <div className="mt-8">
        {unavailable ? <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p> : <GuildList items={items} labels={L} locale={locale} initialLanguage={initialLanguage} />}
      </div>
      <section className="mt-14 border-t border-felt-line pt-8" aria-labelledby="guilds-how">
        <h2 id="guilds-how" className="t-section">
          {g.howTitle}
        </h2>
        <ul className="mt-3 max-w-3xl list-disc space-y-2 pl-5 text-sm text-pale">
          {g.how.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <p className="mt-6 text-xs text-pale-muted">{d.common.notAffiliated}</p>
      </section>
    </div>
  );
}

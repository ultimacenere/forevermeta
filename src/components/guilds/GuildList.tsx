"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatDate, href, type Locale } from "@/lib/i18n";
import { FACTIONS, GUILD_FOCUS, GUILD_LANGUAGES, GUILD_REGIONS, GUILD_ROLES, REALM_TYPES, guildPath, type CommunityGuild, type Faction, type GuildFocus, type GuildLanguage, type GuildRegion, type GuildRole, type RealmType } from "@/lib/community/guilds";
import { fill } from "@/lib/builderLabels";
import type { GuildLabels } from "@/lib/guildLabels";

export type GuildListItem = Pick<CommunityGuild, "id" | "slug" | "name" | "region" | "realm" | "realm_type" | "faction" | "languages" | "focus" | "roles" | "size" | "description" | "refreshed_at" | "created_at"> & { author: string };

export type GuildListProps = {
  items: GuildListItem[];
  labels: GuildLabels;
  /** lingua della pagina: link e date si costruiscono qui (a un componente client non si passano funzioni) */
  locale: Locale;
  /** lingua preselezionata (la lingua della pagina, se c'è almeno una gilda che la parla) */
  initialLanguage?: GuildLanguage | "";
};

const SELECT = "mt-1 rounded-lg border border-felt-line bg-night px-3 py-1.5 text-chalk";

/**
 * Elenco delle gilde con i filtri (lingua, regione, fazione, tipo di reame, obiettivo, ruolo, reame) e l'ordine: tutte
 * le schede stanno nell'HTML, i filtri le nascondono soltanto, come per le build. I conteggi per lingua stanno accanto
 * alle opzioni, così si vede subito quante gilde parlano italiano o spagnolo (nessuna bacheca li mostra).
 */
export function GuildList({ items, labels, locale, initialLanguage = "" }: GuildListProps) {
  const [lang, setLang] = useState<GuildLanguage | "">(initialLanguage);
  const [region, setRegion] = useState<GuildRegion | "">("");
  const [faction, setFaction] = useState<Faction | "">("");
  const [realmType, setRealmType] = useState<RealmType | "">("");
  const [focus, setFocus] = useState<GuildFocus | "">("");
  const [role, setRole] = useState<GuildRole | "">("");
  const [realm, setRealm] = useState("");
  const [sort, setSort] = useState<"renewed" | "newest">("renewed");
  const L = labels.list;

  const perLanguage = useMemo(() => {
    const m = new Map<string, number>();
    for (const g of items) for (const l of g.languages) m.set(l, (m.get(l) ?? 0) + 1);
    return m;
  }, [items]);

  const visible = useMemo(() => {
    const q = realm.trim().toLowerCase();
    const list = items.filter(
      (g) =>
        (!lang || g.languages.includes(lang)) &&
        (!region || g.region === region) &&
        (!faction || g.faction === faction) &&
        (!realmType || g.realm_type === realmType) &&
        (!focus || g.focus.includes(focus)) &&
        (!role || g.roles.length === 0 || g.roles.includes(role)) &&
        (!q || g.realm.toLowerCase().includes(q)),
    );
    list.sort((a, b) => (sort === "newest" ? b.created_at.localeCompare(a.created_at) : b.refreshed_at.localeCompare(a.refreshed_at)));
    return list;
  }, [items, lang, region, faction, realmType, focus, role, realm, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterLanguage}</span>
          <select value={lang} onChange={(e) => setLang(e.target.value as GuildLanguage | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {GUILD_LANGUAGES.map((l) => (
              <option key={l} value={l}>
                {labels.languages[l]}
                {perLanguage.get(l) ? ` (${perLanguage.get(l)})` : ""}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterRegion}</span>
          <select value={region} onChange={(e) => setRegion(e.target.value as GuildRegion | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {GUILD_REGIONS.map((r) => (
              <option key={r} value={r}>
                {labels.regions[r]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterFaction}</span>
          <select value={faction} onChange={(e) => setFaction(e.target.value as Faction | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {FACTIONS.map((x) => (
              <option key={x} value={x}>
                {labels.factions[x]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterRealmType}</span>
          <select value={realmType} onChange={(e) => setRealmType(e.target.value as RealmType | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {REALM_TYPES.map((t) => (
              <option key={t} value={t}>
                {labels.realmTypes[t]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterFocus}</span>
          <select value={focus} onChange={(e) => setFocus(e.target.value as GuildFocus | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {GUILD_FOCUS.map((x) => (
              <option key={x} value={x}>
                {labels.focus[x]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterRole}</span>
          <select value={role} onChange={(e) => setRole(e.target.value as GuildRole | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {GUILD_ROLES.map((x) => (
              <option key={x} value={x}>
                {labels.roles[x]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.searchRealm}</span>
          <input type="search" value={realm} onChange={(e) => setRealm(e.target.value)} placeholder={L.searchPlaceholder} className={`${SELECT} w-40`} />
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.sort}</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as "renewed" | "newest")} className={SELECT}>
            <option value="renewed">{L.renewed}</option>
            <option value="newest">{L.newest}</option>
          </select>
        </label>
        <p className="ml-auto text-sm text-pale-muted" aria-live="polite">
          {visible.length === 1 ? L.countOne : fill(L.count, { n: visible.length })}
        </p>
      </div>
      {visible.length === 0 ? (
        <p className="mt-6 text-pale-muted">{items.length ? L.emptyFiltered : L.empty}</p>
      ) : (
        <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {visible.map((g) => (
            <li key={g.id} className="min-w-0">
              <Link href={href(locale, guildPath(g.slug))} className={`guild-card gl-${g.faction}`} prefetch={false}>
                <span className="guild-card-head">
                  <span className="gl-crest" aria-hidden="true">
                    {g.name.slice(0, 1).toUpperCase()}
                  </span>
                  <span className="min-w-0">
                    <span className="guild-card-name">{g.name}</span>
                    <span className="guild-card-sub">
                      {labels.factions[g.faction]} · {g.realm} · {labels.regions[g.region]}
                      {g.realm_type !== "normal" ? ` · ${labels.realmTypes[g.realm_type]}` : ""}
                    </span>
                  </span>
                </span>
                <span className="guild-card-tags">
                  {g.languages.map((l) => (
                    <span key={l} className="gl-pill gl-pill-lang">
                      {labels.languages[l]}
                    </span>
                  ))}
                  {g.focus.map((x) => (
                    <span key={x} className="gl-pill">
                      {labels.focus[x]}
                    </span>
                  ))}
                </span>
                <span className="guild-card-summary">{g.description}</span>
                <span className="guild-card-foot">
                  <span className="guild-card-roles">
                    {L.recruiting}: {g.roles.length ? g.roles.map((r) => labels.roles[r]).join(", ") : labels.page.anyRole}
                  </span>
                  <span className="guild-card-author">
                    {g.author} · {formatDate(locale, g.refreshed_at.slice(0, 10))}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

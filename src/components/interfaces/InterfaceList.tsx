"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { formatDate, href, type Locale } from "@/lib/i18n";
import { INTERFACE_CLASSES, INTERFACE_INPUTS, INTERFACE_ROLES, interfacePath, type CommunityInterface, type InterfaceClass, type InterfaceInput, type InterfaceRole } from "@/lib/community/interfaces";
import { fill } from "@/lib/builderLabels";
import type { InterfaceLabels } from "@/lib/interfaceLabels";

export type InterfaceListItem = Pick<CommunityInterface, "id" | "slug" | "name" | "classes" | "roles" | "input" | "resolution" | "description" | "created_at"> & {
  author: string;
  /** indirizzo del primo screenshot, già pronto (a un componente client non si passano funzioni) */
  cover: string | null;
  noAddons: boolean;
  avg: number;
  votes: number;
};

export type InterfaceListProps = { items: InterfaceListItem[]; labels: InterfaceLabels; locale: Locale };

const SELECT = "mt-1 rounded-lg border border-felt-line bg-night px-3 py-1.5 text-chalk";

/** Voto pesato sul numero di voti (media bayesiana verso 3 con 3 voti virtuali), come le build. */
function score(i: InterfaceListItem): number {
  return (i.avg * i.votes + 3 * 3) / (i.votes + 3);
}

/**
 * Elenco delle interfacce con i filtri (classe, ruolo, comandi, senza addon) e l'ordine: tutte le schede stanno nell'HTML,
 * i filtri le nascondono soltanto. Un'interfaccia senza classi o senza ruoli vale per tutti e passa ogni filtro.
 */
export function InterfaceList({ items, labels, locale }: InterfaceListProps) {
  const [cls, setCls] = useState<InterfaceClass | "">("");
  const [role, setRole] = useState<InterfaceRole | "">("");
  const [input, setInput] = useState<InterfaceInput | "">("");
  const [addons, setAddons] = useState<"" | "none">("");
  const [sort, setSort] = useState<"newest" | "top">("newest");
  const L = labels.list;
  const visible = useMemo(() => {
    const list = items.filter(
      (i) =>
        (!cls || i.classes.length === 0 || i.classes.includes(cls)) &&
        (!role || i.roles.length === 0 || i.roles.includes(role)) &&
        (!input || i.input === input) &&
        (!addons || i.noAddons),
    );
    list.sort((a, b) => (sort === "top" ? score(b) - score(a) || b.created_at.localeCompare(a.created_at) : b.created_at.localeCompare(a.created_at)));
    return list;
  }, [items, cls, role, input, addons, sort]);

  return (
    <div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterClass}</span>
          <select value={cls} onChange={(e) => setCls(e.target.value as InterfaceClass | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {INTERFACE_CLASSES.map((c) => (
              <option key={c} value={c}>
                {labels.classes[c]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterRole}</span>
          <select value={role} onChange={(e) => setRole(e.target.value as InterfaceRole | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {INTERFACE_ROLES.map((r) => (
              <option key={r} value={r}>
                {labels.roles[r]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterInput}</span>
          <select value={input} onChange={(e) => setInput(e.target.value as InterfaceInput | "")} className={SELECT}>
            <option value="">{L.all}</option>
            {INTERFACE_INPUTS.map((x) => (
              <option key={x} value={x}>
                {labels.inputs[x]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterAddons}</span>
          <select value={addons} onChange={(e) => setAddons(e.target.value as "" | "none")} className={SELECT}>
            <option value="">{L.addonsAny}</option>
            <option value="none">{L.addonsNone}</option>
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.sort}</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as "newest" | "top")} className={SELECT}>
            <option value="newest">{L.newest}</option>
            <option value="top">{L.topRated}</option>
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
          {visible.map((i) => (
            <li key={i.id} className="min-w-0">
              <Link href={href(locale, interfacePath(i.slug))} className="if-card" prefetch={false}>
                <span className="if-card-shot">
                  {i.cover ? (
                    // eslint-disable-next-line @next/next/no-img-element -- screenshot dell'utente dallo Storage
                    <img src={i.cover} alt="" loading="lazy" />
                  ) : null}
                </span>
                <span className="if-card-body">
                  <span className="if-card-name">{i.name}</span>
                  <span className="if-card-sub">
                    {labels.inputs[i.input]}
                    {i.roles.length ? ` · ${i.roles.map((r) => labels.roles[r]).join(", ")}` : ""}
                    {i.resolution ? ` · ${i.resolution}` : ""}
                  </span>
                  <span className="if-card-summary">{i.description}</span>
                  <span className="if-card-foot">
                    <span className="gl-pill">{i.noAddons ? labels.page.noAddons : labels.page.withAddons}</span>
                    <span className="build-card-rating">{i.votes ? `★ ${i.avg.toFixed(1)} · ${i.votes}` : labels.rating.noVotes}</span>
                    <span className="if-card-author">
                      {i.author} · {formatDate(locale, i.created_at.slice(0, 10))}
                    </span>
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

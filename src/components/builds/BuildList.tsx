"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ClassId, RaceId } from "@/lib/builder/types";
import { BUILD_PURPOSES, pointsFromCode, type BuildPurpose, type CommunityBuild } from "@/lib/community/builds";
import { fill } from "@/lib/builderLabels";
import type { BuildLabels } from "@/lib/buildLabels";

export type BuildListItem = Pick<CommunityBuild, "id" | "slug" | "name" | "class_id" | "race_id" | "level" | "code" | "points" | "purpose" | "summary" | "created_at" | "guide_lang"> & {
  author: string;
  avg: number;
  votes: number;
  /** data di pubblicazione già formattata nella lingua (le funzioni non passano a un componente client) */
  date: string;
};

export type ClassMeta = { id: ClassId; name: string; color: string; ink: string; icon: string };

export type BuildListProps = {
  items: BuildListItem[];
  classes: ClassMeta[];
  raceNames: Record<RaceId, string>;
  labels: BuildLabels;
  /** base degli indirizzi delle schede (`/<lingua>/builds`) */
  hrefBase: string;
  iconBase: string;
  /** classe preselezionata (pagina del builder di una classe) */
  initialClass?: ClassId | "";
};

/**
 * Elenco delle build pubblicate con i filtri (classe, scopo, ordine): tutte le schede stanno nell'HTML, i filtri le
 * nascondono soltanto, come la tabella del glossario. L'ordine "più votate" usa un voto pesato sul numero di voti.
 */
export function BuildList({ items, classes, raceNames, labels, hrefBase, iconBase, initialClass = "" }: BuildListProps) {
  const [cls, setCls] = useState<ClassId | "">(initialClass);
  const [purpose, setPurpose] = useState<BuildPurpose | "">("");
  const [sort, setSort] = useState<"newest" | "top">("newest");
  const byClass = useMemo(() => new Map(classes.map((c) => [c.id, c])), [classes]);
  const visible = useMemo(() => {
    const list = items.filter((b) => (!cls || b.class_id === cls) && (!purpose || b.purpose === purpose));
    if (sort === "top") list.sort((a, b) => score(b) - score(a) || b.created_at.localeCompare(a.created_at));
    return list;
  }, [items, cls, purpose, sort]);
  const L = labels.list;
  return (
    <div>
      <div className="flex flex-wrap items-end gap-3">
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterClass}</span>
          <select value={cls} onChange={(e) => setCls(e.target.value as ClassId | "")} className="mt-1 rounded-lg border border-felt-line bg-night px-3 py-1.5 text-chalk">
            <option value="">{L.all}</option>
            {classes.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.filterPurpose}</span>
          <select value={purpose} onChange={(e) => setPurpose(e.target.value as BuildPurpose | "")} className="mt-1 rounded-lg border border-felt-line bg-night px-3 py-1.5 text-chalk">
            <option value="">{L.allPurposes}</option>
            {BUILD_PURPOSES.map((p) => (
              <option key={p} value={p}>
                {labels.purposes[p]}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm">
          <span className="kicker block text-pale-muted">{L.sort}</span>
          <select value={sort} onChange={(e) => setSort(e.target.value as "newest" | "top")} className="mt-1 rounded-lg border border-felt-line bg-night px-3 py-1.5 text-chalk">
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
          {visible.map((b) => {
            const c = byClass.get(b.class_id);
            const summary = pointsFromCode(b.code).join(" / ");
            return (
              <li key={b.id} className="min-w-0">
                <Link href={`${hrefBase}/${b.slug}`} className="build-card" style={c ? ({ "--tb-class": c.color, "--tb-ink": c.ink } as React.CSSProperties) : undefined} prefetch={false}>
                  <span className="build-card-head">
                    {c ? (
                      // eslint-disable-next-line @next/next/no-img-element -- icona piccola già nel sito
                      <img src={`${iconBase}${c.icon}.jpg`} alt="" width={40} height={40} className="build-card-icon" loading="lazy" />
                    ) : null}
                    <span className="min-w-0">
                      <span className="build-card-name">{b.name}</span>
                      <span className="build-card-sub">
                        {c?.name}
                        {b.race_id ? ` · ${raceNames[b.race_id]}` : ""} · {fill(labels.page.level, { n: b.level })} · {summary}
                      </span>
                    </span>
                  </span>
                  <span className="build-card-summary">{b.summary}</span>
                  <span className="build-card-foot">
                    <span className="pill-purpose">{labels.purposes[b.purpose]}</span>
                    <span className="build-card-rating">{b.votes ? `★ ${b.avg.toFixed(1)} · ${b.votes}` : labels.rating.noVotes}</span>
                    <span className="build-card-author">
                      {b.author} · {b.date}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

/** Voto pesato sul numero di voti (media bayesiana verso 3 con 3 voti virtuali), così una build con un solo 5 non è prima. */
function score(b: BuildListItem): number {
  const prior = 3;
  const weight = 3;
  return (b.avg * b.votes + prior * weight) / (b.votes + weight);
}

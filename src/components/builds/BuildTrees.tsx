import type { CSSProperties } from "react";
import { orderedTalents, prerequisiteMet, rankOf, treePoints } from "@/lib/builder/engine";
import { GRID_H, GRID_W, arrowPath, cellState, initialsOf } from "@/lib/builder/grid";
import type { Build, ClassTalents } from "@/lib/builder/types";
import { TALENT_ICON_BASE } from "@/lib/data/talents";

/**
 * I tre alberi di una build pubblicata, in sola lettura (server component, nessun JavaScript): le stesse classi di
 * stile del builder (`.tb-tree`, `.tb-grid`, `.tb-cell`), celle come `div` con il testo del rango preso nel `title`,
 * e sotto l'elenco dei talenti presi in testo, per i motori di ricerca e i lettori di schermo.
 */
export function BuildTrees({ data, build, color, ink, talentsLabel }: { data: ClassTalents; build: Build; color: string; ink: string; talentsLabel: string }) {
  const style = { "--tb-class": color, "--tb-ink": ink } as CSSProperties;
  return (
    <div className="tb tb-readonly" style={style}>
      <div className="tb-trees">
        {data.trees.map((tree) => {
          const talents = orderedTalents(tree);
          const byId = new Map(talents.map((t) => [t.id, t]));
          const points = treePoints(tree, build.ranks);
          return (
            <section key={tree.id} className="tb-tree-slot">
              <div className="tb-tree">
                <header className="tb-tree-head">
                  <h3 className="tb-tree-name">
                    {tree.name}
                    <span className="tb-tree-points stat-pill">{points}</span>
                  </h3>
                </header>
                <div className="tb-grid-wrap">
                  <div className="tb-grid" role="img" aria-label={`${tree.name}: ${points}`}>
                    <svg className="tb-arrows" viewBox={`0 0 ${GRID_W} ${GRID_H}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
                      <defs>
                        <marker id={`bt-head-${tree.id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" className="tb-arrow-head" />
                        </marker>
                        <marker id={`bt-head-met-${tree.id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                          <path d="M 0 0 L 10 5 L 0 10 z" className="tb-arrow-head is-met" />
                        </marker>
                      </defs>
                      {talents.map((t) => {
                        const req = t.requires ? byId.get(t.requires.id) : undefined;
                        if (!req) return null;
                        const met = prerequisiteMet(data, build.ranks, t);
                        return <path key={t.id} d={arrowPath(req, t)} className={met ? "tb-arrow is-met" : "tb-arrow"} markerEnd={met ? `url(#bt-head-met-${tree.id})` : `url(#bt-head-${tree.id})`} />;
                      })}
                    </svg>
                    {talents.map((t) => {
                      const r = rankOf(build, t.id);
                      const state = cellState(data, build, t);
                      return (
                        <div key={t.id} className={`tb-cell is-${state}`} style={{ gridRow: t.row + 1, gridColumn: t.col + 1 }} title={`${t.name} ${r}/${t.maxRank}${r > 0 ? `: ${t.ranks[r - 1]}` : ""}`}>
                          {t.icon ? (
                            // eslint-disable-next-line @next/next/no-img-element -- icone piccole già nel sito
                            <img src={`${TALENT_ICON_BASE}${t.icon}.jpg`} alt="" className="tb-cell-icon" loading="lazy" decoding="async" width={44} height={44} />
                          ) : (
                            <span className="tb-cell-glyph" aria-hidden="true">
                              {initialsOf(t.name)}
                            </span>
                          )}
                          <span className="tb-cell-rank" aria-hidden="true">
                            {r}/{t.maxRank}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
      <section className="mt-6" aria-labelledby="build-talents">
        <h2 id="build-talents" className="t-section">
          {talentsLabel}
        </h2>
        <div className="mt-3 grid gap-4 sm:grid-cols-3">
          {data.trees.map((tree) => {
            const taken = orderedTalents(tree).filter((t) => rankOf(build, t.id) > 0);
            if (!taken.length) return null;
            return (
              <div key={tree.id} className="text-sm">
                <p className="font-semibold text-chalk">
                  {tree.name} · {treePoints(tree, build.ranks)}
                </p>
                <ul className="mt-1 space-y-0.5 text-pale">
                  {taken.map((t) => (
                    <li key={t.id}>
                      <span className="font-mono text-xs text-pale-muted">
                        {rankOf(build, t.id)}/{t.maxRank}
                      </span>{" "}
                      {t.name}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

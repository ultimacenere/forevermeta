"use client";

import { useCallback, useMemo, useRef, type KeyboardEvent, type MouseEvent, type PointerEvent } from "react";
import { COLS, ROWS, addBlocker, canRemove, orderedTalents, pointsToUnlockRow, prerequisiteMet, rankOf, rowUnlocked, treePoints } from "@/lib/builder/engine";
import type { Build, ClassTalents, Talent, TalentTree as TalentTreeData } from "@/lib/builder/types";
import { fill, type BuilderLabels } from "@/lib/builderLabels";

/** Misure della griglia in unità del viewBox: la cella è 52 e lo spazio fra le celle un quarto della cella. Il CSS
 *  (`.tb-grid`) scala tutto insieme con `--tb-cell`, quindi le frecce restano al loro posto a ogni misura. */
export const CELL = 52;
export const GAP = 13;
export const GRID_W = COLS * CELL + (COLS - 1) * GAP;
export const GRID_H = ROWS * CELL + (ROWS - 1) * GAP;

/** Pressione lunga sul touch che apre il dettaglio (ms). */
export const LONG_PRESS_MS = 400;

export type CellState = "locked" | "available" | "partial" | "maxed";

export function cellState(data: ClassTalents, build: Build, talent: Talent): CellState {
  const r = rankOf(build, talent.id);
  if (r >= talent.maxRank) return "maxed";
  if (r > 0) return "partial";
  const blocker = addBlocker(data, build, talent.id);
  return blocker === "rowLocked" || blocker === "prerequisiteMissing" ? "locked" : "available";
}

/** Iniziali di un talento per la cella senza icona: "Improved Heroic Strike" → "IH". */
export function initialsOf(name: string): string {
  const words = name.replace(/[^A-Za-z0-9' ]/g, " ").split(/\s+/).filter((w) => w && !/^(of|the|and|a|an|in|to|on)$/i.test(w));
  const letters = words.slice(0, 2).map((w) => w[0]?.toUpperCase() ?? "");
  return letters.join("") || name.slice(0, 2).toUpperCase();
}

/** Una freccia di prerequisito: scende dal talento richiesto e entra in quello che lo richiede. */
function Arrow({ from, to, met }: { from: Talent; to: Talent; met: boolean }) {
  const cx = (t: Talent) => t.col * (CELL + GAP) + CELL / 2;
  const cy = (t: Talent) => t.row * (CELL + GAP) + CELL / 2;
  let d: string;
  if (from.col === to.col) {
    d = `M ${cx(from)} ${cy(from) + CELL / 2} V ${cy(to) - CELL / 2}`;
  } else if (from.row === to.row) {
    const dir = to.col > from.col ? 1 : -1;
    d = `M ${cx(from) + (dir * CELL) / 2} ${cy(from)} H ${cx(to) - (dir * CELL) / 2}`;
  } else {
    const dir = to.col > from.col ? 1 : -1;
    d = `M ${cx(from)} ${cy(from) + CELL / 2} V ${cy(to)} H ${cx(to) - (dir * CELL) / 2}`;
  }
  return <path d={d} className={met ? "tb-arrow is-met" : "tb-arrow"} markerEnd={met ? "url(#tb-head-met)" : "url(#tb-head)"} />;
}

export type TreeProps = {
  data: ClassTalents;
  tree: TalentTreeData;
  build: Build;
  labels: BuilderLabels;
  /** talento evidenziato (passaggio, fuoco o tocco) */
  activeId: string | null;
  onAdd: (talentId: string, method: "click" | "key" | "touch") => void;
  onRemove: (talentId: string, method: "click" | "key" | "touch") => void;
  onMax: (talentId: string) => void;
  onRemoveAll: (talentId: string) => void;
  onSetRank: (talentId: string, rank: number) => void;
  onActivate: (talentId: string | null, el: HTMLElement | null, how: "hover" | "focus" | "tap") => void;
  /** apre il foglio dei dettagli (touch: pressione lunga o tasto "i") */
  onDetails: (talentId: string, el: HTMLElement) => void;
  onReset: () => void;
  /** modo touch: il tocco aggiunge e seleziona, il "−" sulla cella toglie, la pressione lunga apre i dettagli */
  touch: boolean;
  iconUrl?: (icon: string) => string;
};

/**
 * Un albero dei talenti: intestazione con i punti e il tasto di azzeramento, griglia 4 × 7 di celle con le frecce
 * dei prerequisiti sopra (SVG), l'elenco dei talenti di Classic che non ci sono più. Le celle sono bottoni: clic
 * sinistro aggiunge, clic destro toglie, Maiusc + clic riempie, Maiusc + clic destro svuota; da tastiera le frecce
 * spostano il fuoco (tabindex itinerante: un solo tab stop per albero), Invio aggiunge, Backspace toglie, 0–5
 * impostano il rango. Sul touch il tocco aggiunge e seleziona la cella, che mostra "−" e "i". Le file chiuse dicono
 * quanti punti servono. I talenti bloccati restano cliccabili: il rifiuto viene spiegato nell'area aria-live.
 */
export function TalentTree({ data, tree, build, labels, activeId, onAdd, onRemove, onMax, onRemoveAll, onSetRank, onActivate, onDetails, onReset, touch, iconUrl }: TreeProps) {
  const talents = useMemo(() => orderedTalents(tree), [tree]);
  const byId = useMemo(() => new Map(talents.map((t) => [t.id, t])), [talents]);
  const points = treePoints(tree, build.ranks);
  const cells = useRef(new Map<string, HTMLButtonElement>());
  const press = useRef<{ id: string; timer: number; fired: boolean } | null>(null);
  const firstWithPoints = talents.find((t) => rankOf(build, t.id) > 0) ?? talents[0];
  const tabStop = activeId && byId.has(activeId) ? activeId : firstWithPoints?.id;

  const move = useCallback(
    (from: Talent, dRow: number, dCol: number) => {
      let best: Talent | null = null;
      let bestScore = Infinity;
      for (const t of talents) {
        if (t.id === from.id) continue;
        const dr = t.row - from.row;
        const dc = t.col - from.col;
        let score: number;
        if (dRow) {
          // su/giù: la fila più vicina in quella direzione, poi la colonna più vicina
          if (Math.sign(dr) !== dRow) continue;
          score = Math.abs(dr) * 10 + Math.abs(dc);
        } else {
          // destra/sinistra: solo sulla stessa fila
          if (dr !== 0 || Math.sign(dc) !== dCol) continue;
          score = Math.abs(dc);
        }
        if (score < bestScore) {
          best = t;
          bestScore = score;
        }
      }
      if (best) {
        cells.current.get(best.id)?.focus();
        onActivate(best.id, cells.current.get(best.id) ?? null, "focus");
      }
    },
    [talents, onActivate],
  );

  const onKey = (e: KeyboardEvent<HTMLButtonElement>, t: Talent) => {
    if (e.ctrlKey || e.metaKey) return; // Ctrl+Z e simili li gestisce il builder
    switch (e.key) {
      case "ArrowUp":
        e.preventDefault();
        move(t, -1, 0);
        break;
      case "ArrowDown":
        e.preventDefault();
        move(t, 1, 0);
        break;
      case "ArrowLeft":
        e.preventDefault();
        move(t, 0, -1);
        break;
      case "ArrowRight":
        e.preventDefault();
        move(t, 0, 1);
        break;
      case "Enter":
      case " ":
      case "+":
      case "=":
        e.preventDefault();
        if (e.shiftKey) onMax(t.id);
        else onAdd(t.id, "key");
        break;
      case "Backspace":
      case "Delete":
      case "-":
        e.preventDefault();
        if (e.shiftKey) onRemoveAll(t.id);
        else onRemove(t.id, "key");
        break;
      case "Escape":
        onActivate(null, null, "focus");
        break;
      default:
        if (/^[0-5]$/.test(e.key)) {
          e.preventDefault();
          onSetRank(t.id, Number(e.key));
        }
    }
  };

  const onClick = (e: MouseEvent<HTMLButtonElement>, t: Talent) => {
    if (touch) {
      // il tocco è arrivato come click: se la pressione lunga ha già aperto i dettagli non si aggiunge nulla
      if (press.current?.id === t.id && press.current.fired) {
        press.current = null;
        return;
      }
      onActivate(t.id, e.currentTarget, "tap");
      onAdd(t.id, "touch");
      return;
    }
    if (e.shiftKey) onMax(t.id);
    else onAdd(t.id, "click");
  };

  const onContext = (e: MouseEvent<HTMLButtonElement>, t: Talent) => {
    e.preventDefault();
    if (touch) return;
    if (e.shiftKey) onRemoveAll(t.id);
    else onRemove(t.id, "click");
  };

  const onPointerDown = (e: PointerEvent<HTMLButtonElement>, t: Talent) => {
    if (!touch || e.pointerType === "mouse") return;
    const el = e.currentTarget;
    const timer = window.setTimeout(() => {
      if (press.current && press.current.id === t.id) {
        press.current.fired = true;
        onDetails(t.id, el);
      }
    }, LONG_PRESS_MS);
    press.current = { id: t.id, timer, fired: false };
  };
  const onPointerEnd = () => {
    if (press.current && !press.current.fired) {
      window.clearTimeout(press.current.timer);
      press.current = null;
    } else if (press.current) {
      window.clearTimeout(press.current.timer);
    }
  };

  const removed = tree.removed ?? [];
  return (
    <section className="tb-tree" aria-labelledby={`tb-tree-${tree.id}`}>
      <header className="tb-tree-head">
        <h3 id={`tb-tree-${tree.id}`} className="tb-tree-name">
          {tree.name}
          <span className="tb-tree-points stat-pill" aria-label={fill(labels.treePoints, { n: points })}>
            {points}
          </span>
        </h3>
        <button type="button" className="tb-tree-reset" onClick={onReset} disabled={points === 0} aria-label={fill(labels.resetTreeAria, { tree: tree.name })} title={fill(labels.resetTree, { tree: tree.name })}>
          ↺
        </button>
      </header>
      <div className="tb-grid-wrap">
        <div className="tb-grid" role="group" aria-label={tree.name}>
          <svg className="tb-arrows" viewBox={`0 0 ${GRID_W} ${GRID_H}`} preserveAspectRatio="none" aria-hidden="true" focusable="false">
            <defs>
              <marker id="tb-head" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" className="tb-arrow-head" />
              </marker>
              <marker id="tb-head-met" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" className="tb-arrow-head is-met" />
              </marker>
            </defs>
            {talents.map((t) => {
              const req = t.requires ? byId.get(t.requires.id) : undefined;
              return req ? <Arrow key={`${req.id}-${t.id}`} from={req} to={t} met={prerequisiteMet(data, build.ranks, t)} /> : null;
            })}
          </svg>
          {(() => {
            // solo la prima fila chiusa dice quanti punti servono: le altre si capiscono da sole
            const row = Array.from({ length: ROWS }, (_, r) => r).find((r) => !rowUnlocked(tree, build.ranks, r) && talents.some((t) => t.row === r));
            return row === undefined ? null : (
              <div className="tb-row-lock" style={{ gridRow: row + 1 }} aria-hidden="true">
                <span>{fill(labels.requiresPoints, { n: pointsToUnlockRow(row), tree: tree.name })}</span>
              </div>
            );
          })()}
          {talents.map((t) => {
            const r = rankOf(build, t.id);
            const state = cellState(data, build, t);
            const removable = canRemove(data, build, t.id);
            const selected = activeId === t.id;
            const aria = `${fill(labels.cellAria, { talent: t.name, tree: tree.name, row: t.row + 1, r, max: t.maxRank })}${state === "locked" ? `, ${labels.cellLocked}` : ""}`;
            return (
              <div key={t.id} className={`tb-slot${selected ? " is-selected" : ""}`} style={{ gridRow: t.row + 1, gridColumn: t.col + 1 }}>
                <button
                  ref={(el) => {
                    if (el) cells.current.set(t.id, el);
                    else cells.current.delete(t.id);
                  }}
                  type="button"
                  className={`tb-cell is-${state}${selected ? " is-active" : ""}${removable ? " can-remove" : ""}`}
                  tabIndex={t.id === tabStop ? 0 : -1}
                  aria-label={aria}
                  aria-pressed={r > 0}
                  aria-disabled={state === "locked" ? true : undefined}
                  data-talent={t.id}
                  onClick={(e) => onClick(e, t)}
                  onContextMenu={(e) => onContext(e, t)}
                  onKeyDown={(e) => onKey(e, t)}
                  onPointerDown={(e) => onPointerDown(e, t)}
                  onPointerUp={onPointerEnd}
                  onPointerCancel={onPointerEnd}
                  onPointerLeave={onPointerEnd}
                  onMouseEnter={(e) => {
                    if (!touch) onActivate(t.id, e.currentTarget, "hover");
                  }}
                  onMouseLeave={() => {
                    if (!touch) onActivate(null, null, "hover");
                  }}
                  onFocus={(e) => {
                    if (!touch) onActivate(t.id, e.currentTarget, "focus");
                  }}
                  onBlur={() => {
                    if (!touch) onActivate(null, null, "focus");
                  }}
                >
                  {t.icon && iconUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element -- icone piccole già nel sito, senza ottimizzazione
                    <img src={iconUrl(t.icon)} alt="" className="tb-cell-icon" loading="lazy" decoding="async" width={44} height={44} />
                  ) : (
                    <span className="tb-cell-glyph" aria-hidden="true">
                      {initialsOf(t.name)}
                    </span>
                  )}
                  <span className="tb-cell-rank" aria-hidden="true">
                    {r}/{t.maxRank}
                  </span>
                </button>
                {touch && selected ? (
                  <>
                    <button type="button" className="tb-cell-minus" onClick={() => onRemove(t.id, "touch")} disabled={r === 0} aria-label={labels.removePoint}>
                      −
                    </button>
                    <button type="button" className="tb-cell-info" onClick={(e) => onDetails(t.id, e.currentTarget)} aria-label={labels.details}>
                      i
                    </button>
                  </>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
      {removed.length ? (
        <details className="tb-removed">
          <summary>{fill(labels.removedTitle, { n: removed.length })}</summary>
          <p className="tb-removed-hint">{labels.removedHint}</p>
          <ul>
            {removed.map((x) => (
              <li key={x.name}>
                <span className="tb-removed-name">{x.name}</span>
                {x.text ? <span className="tb-removed-text"> — {x.text}</span> : null}
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}

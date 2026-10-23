/**
 * Misure e stati della griglia di un albero, senza React: li usano il builder (TalentTree, client) e la griglia in
 * sola lettura delle build pubblicate (BuildTrees, server). La cella è 52 unità e lo spazio fra le celle un quarto
 * della cella; il CSS (`.tb-grid`) scala tutto insieme con `--tb-cell`, e l'SVG delle frecce (viewBox in queste
 * unità, `preserveAspectRatio="none"`) scala con la stessa proporzione.
 */
import { COLS, ROWS, addBlocker, rankOf } from "./engine";
import type { Build, ClassTalents, Talent } from "./types";

export const CELL = 52;
export const GAP = 13;
export const GRID_W = COLS * CELL + (COLS - 1) * GAP;
export const GRID_H = ROWS * CELL + (ROWS - 1) * GAP;

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

/** Il tracciato SVG di una freccia di prerequisito: scende dal talento richiesto e entra in quello che lo richiede. */
export function arrowPath(from: Talent, to: Talent): string {
  const cx = (t: Talent) => t.col * (CELL + GAP) + CELL / 2;
  const cy = (t: Talent) => t.row * (CELL + GAP) + CELL / 2;
  if (from.col === to.col) return `M ${cx(from)} ${cy(from) + CELL / 2} V ${cy(to) - CELL / 2}`;
  const dir = to.col > from.col ? 1 : -1;
  if (from.row === to.row) return `M ${cx(from) + (dir * CELL) / 2} ${cy(from)} H ${cx(to) - (dir * CELL) / 2}`;
  return `M ${cx(from)} ${cy(from) + CELL / 2} V ${cy(to)} H ${cx(to) - (dir * CELL) / 2}`;
}

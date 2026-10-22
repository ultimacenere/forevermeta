"use client";

import type { CSSProperties } from "react";
import { addBlocker, canRemove, indexOf, pointsToUnlockRow, rankOf } from "@/lib/builder/engine";
import type { Build, ClassTalents } from "@/lib/builder/types";
import { fill, type BuilderLabels } from "@/lib/builderLabels";

export type DetailProps = {
  data: ClassTalents;
  build: Build;
  talentId: string;
  labels: BuilderLabels;
  /** foglio in basso (touch) con i tasti, oppure fumetto accanto alla cella */
  sheet: boolean;
  style?: CSSProperties;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
  onMax: (id: string) => void;
  onRemoveAll: (id: string) => void;
  onClose: () => void;
};

/**
 * Il dettaglio di un talento: nome, rango, che cosa serve per prenderlo, testo del rango attuale e del successivo,
 * confronto con Classic quando la fonte lo dà. Sul mouse è un fumetto accanto alla cella (`role="tooltip"`, uno
 * alla volta); sul touch è un foglio in basso con i tasti + / − / massimo / svuota.
 */
export function TalentDetail({ data, build, talentId, labels, sheet, style, onAdd, onRemove, onMax, onRemoveAll, onClose }: DetailProps) {
  const entry = indexOf(data).byId.get(talentId);
  if (!entry) return null;
  const { talent, tree } = entry;
  const r = rankOf(build, talentId);
  const blocker = addBlocker(data, build, talentId);
  const req = talent.requires ? indexOf(data).byId.get(talent.requires.id)?.talent : undefined;
  const needs: string[] = [];
  if (blocker === "rowLocked") needs.push(fill(labels.requiresPoints, { n: pointsToUnlockRow(talent.row), tree: tree.name }));
  if (req && blocker === "prerequisiteMissing") needs.push(fill(labels.requiresTalent, { talent: req.name, r: rankOf(build, req.id), max: talent.requires?.rank ?? req.maxRank }));
  else if (req && r === 0) needs.push(fill(labels.requiresTalentShort, { talent: req.name }));
  const current = r > 0 ? talent.ranks[r - 1] : null;
  const next = r < talent.maxRank ? talent.ranks[r] : null;
  const removable = canRemove(data, build, talentId);
  const classic = talent.classic;
  return (
    <div className={sheet ? "tb-detail tb-detail-sheet" : "tb-detail tb-detail-tip"} role={sheet ? "dialog" : "tooltip"} id={`tb-detail-${talentId}`} style={style} aria-label={talent.name}>
      <div className="tb-detail-head">
        <p className="tb-detail-name">{talent.name}</p>
        <p className="tb-detail-rank">{fill(labels.rank, { r, max: talent.maxRank })}</p>
        {sheet ? (
          <button type="button" className="tb-detail-close" onClick={onClose} aria-label={labels.closeDetail}>
            ×
          </button>
        ) : null}
      </div>
      {needs.length ? (
        <ul className="tb-detail-needs">
          {needs.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      ) : null}
      {current ? (
        <p className="tb-detail-text">
          {talent.maxRank > 1 ? <span className="tb-detail-label">{labels.currentRank}</span> : null}
          {current}
        </p>
      ) : null}
      {next ? (
        <p className={current ? "tb-detail-text is-next" : "tb-detail-text"}>
          {talent.maxRank > 1 && current ? <span className="tb-detail-label">{labels.nextRank}</span> : null}
          {next}
        </p>
      ) : (
        <p className="tb-detail-text is-max">{labels.maxed}</p>
      )}
      {classic ? (
        <p className={`tb-detail-classic is-${classic.status}`}>
          <span className="tb-classic-pill">{labels.classic[classic.status]}</span>
          {classic.text ? (
            <span className="tb-detail-classic-text">
              <span className="tb-detail-label">{labels.classic.textLabel}</span>
              {classic.text}
            </span>
          ) : null}
        </p>
      ) : null}
      {blocker === "noPointsLeft" ? <p className="tb-detail-warn">{fill(labels.noPointsLeft, { level: build.level })}</p> : null}
      {sheet ? (
        <div className="tb-detail-actions">
          <button type="button" className="btn btn-gold" onClick={() => onAdd(talentId)} disabled={blocker !== null}>
            + {labels.addPoint}
          </button>
          <button type="button" className="btn btn-choice" onClick={() => onRemove(talentId)} disabled={!removable}>
            − {labels.removePoint}
          </button>
          {talent.maxRank > 1 && r < talent.maxRank && blocker === null ? (
            <button type="button" className="btn btn-ghost" onClick={() => onMax(talentId)}>
              {labels.maxOut}
            </button>
          ) : null}
          {r > 1 && removable ? (
            <button type="button" className="btn btn-ghost" onClick={() => onRemoveAll(talentId)}>
              {labels.removeAllRanks}
            </button>
          ) : null}
          {r > 0 && !removable ? <p className="tb-detail-warn">{labels.cannotRemove}</p> : null}
        </div>
      ) : null}
    </div>
  );
}

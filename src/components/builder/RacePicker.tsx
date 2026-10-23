"use client";

import { useState } from "react";
import type { Faction, RaceId } from "@/lib/builder/types";
import { fill, type BuilderLabels } from "@/lib/builderLabels";

export type RacialView = { name: string; kind: "active" | "passive"; text: string };

export type RaceOption = {
  id: RaceId;
  name: string;
  faction: Faction;
  /** la classe del builder può essere di questa razza */
  allowed: boolean;
  /** combinazione nuova di Forever */
  isNew: boolean;
  /** razza riservata a chi compra un pacchetto (gli Skyborne) */
  paid: boolean;
  racials: RacialView[];
};

export type RacePickerProps = {
  races: RaceOption[];
  value: RaceId | null;
  className: string;
  labels: BuilderLabels;
  onChange: (race: RaceId | null) => void;
};

/**
 * Scelta della razza: due schede (Alleanza, Orda) e le razze di quella fazione. Le razze che la classe non può avere
 * restano visibili ma spente, con la spiegazione nel title: così si vede anche che cosa NON si può fare. Sotto, i
 * tratti razziali della razza scelta.
 */
export function RacePicker({ races, value, className, labels, onChange }: RacePickerProps) {
  const chosen = races.find((r) => r.id === value) ?? null;
  const [faction, setFaction] = useState<Faction>(chosen?.faction ?? "alliance");
  const list = races.filter((r) => r.faction === faction);
  return (
    <div className="tb-race">
      <div className="tb-race-factions" role="tablist" aria-label={labels.pickRace}>
        {(["alliance", "horde"] as const).map((f) => (
          <button key={f} type="button" role="tab" aria-selected={faction === f} className={`tb-faction is-${f}${faction === f ? " is-on" : ""}`} onClick={() => setFaction(f)}>
            {labels.faction[f]}
          </button>
        ))}
      </div>
      <div className="tb-race-list" role="radiogroup" aria-label={labels.pickRace}>
        {list.map((r) => (
          <button
            key={r.id}
            type="button"
            role="radio"
            aria-checked={value === r.id}
            aria-disabled={!r.allowed}
            className={`tb-race-chip${value === r.id ? " is-on" : ""}${r.allowed ? "" : " is-off"}`}
            title={r.allowed ? undefined : fill(labels.raceUnavailable, { race: r.name, class: className })}
            onClick={() => {
              if (!r.allowed) return;
              onChange(value === r.id ? null : r.id);
            }}
          >
            <span className="tb-race-name">{r.name}</span>
            {r.isNew && r.allowed ? <span className="tb-race-tag">{labels.newCombo}</span> : null}
          </button>
        ))}
      </div>
      {chosen ? (
        <div className="tb-racials">
          <p className="tb-racials-title">
            {labels.racials} · {chosen.name}
            {chosen.paid ? <span className="tb-race-paid"> · {labels.paidRace}</span> : null}
          </p>
          <ul className="tb-racials-list">
            {chosen.racials.map((x) => (
              <li key={x.name}>
                <span className={`tb-racial-kind is-${x.kind}`}>{x.kind === "active" ? labels.racialActive : labels.racialPassive}</span>
                <span className="tb-racial-name">{x.name}</span>
                {x.text ? <span className="tb-racial-text"> — {x.text}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="tb-racials-empty">{labels.noRace}</p>
      )}
    </div>
  );
}

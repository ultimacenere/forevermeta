"use client";

import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState, useSyncExternalStore, type CSSProperties, type KeyboardEvent } from "react";
import {
  FIRST_TALENT_LEVEL,
  MAX_LEVEL,
  addBlocker,
  addPoint,
  buildAsText,
  canRemove,
  emptyBuild,
  indexOf,
  maxOut,
  pointsAtLevel,
  pointsToUnlockRow,
  pointsAboveRow,
  rankOf,
  removeAllRanks,
  removePoint,
  removeWithDependents,
  requiredLevel,
  resetAll,
  resetTree,
  totalPoints,
  treePoints,
  treeSummary,
  trimPoints,
  withLevel,
} from "@/lib/builder/engine";
import { codeFromInput, decodeBuild, encodeBuild, peekCode } from "@/lib/builder/code";
import { readStored, writeStored } from "@/lib/builder/storage";
import type { Build, ClassId, ClassTalents, RaceId } from "@/lib/builder/types";
import { fill, type BuilderLabels } from "@/lib/builderLabels";
import { trackEvent } from "@/lib/analytics";
import { RacePicker, type RaceOption } from "./RacePicker";
import { SharePanel } from "./SharePanel";
import { TalentDetail } from "./TalentDetail";
import { TalentTree } from "./TalentTree";

export type TalentBuilderProps = {
  classId: ClassId;
  /** nome della classe nella lingua della pagina */
  className: string;
  /** colore della classe e sua versione scura per i testi */
  color: string;
  ink: string;
  data: ClassTalents | null;
  races: RaceOption[];
  labels: BuilderLabels;
  /** indirizzo assoluto della pagina, senza hash: la base del link condivisibile */
  pageUrl: string;
  /** indirizzi (con la lingua) delle pagine delle altre classi: un codice di un'altra classe ci porta lì */
  classHrefs: Record<ClassId, string>;
  /** cartella delle icone dei talenti (`/talents/icons/`): da qui `<icona>.jpg`; senza, le iniziali */
  iconBase?: string;
  /** pagina di pubblicazione (`/<lingua>/builds/publish`): il tasto Pubblica ci porta con il codice nell'hash */
  publishHref: string;
};

type Active = { id: string; how: "hover" | "focus" | "tap"; left: number; top: number };
type Message = { text: string; action?: { label: string; run: () => void }; assertive?: boolean };

const DETAIL_W = 272;
const HISTORY_MAX = 100;

const noop = () => () => {};

/** Il codice iniziale (link, poi browser) letto una volta sola: la stessa stringa a ogni chiamata, "" sul server. */
function initialSnapshot(classId: ClassId): string {
  const fromHash = codeFromInput(window.location.hash);
  if (fromHash) return `hash:${fromHash}`;
  const stored = readStored(classId);
  return stored ? `stored:${stored}` : "";
}

/** `(pointer: coarse)` letto come store esterno, senza setState in un effect. */
function subscribeCoarse(cb: () => void) {
  try {
    const mq = window.matchMedia("(pointer: coarse)");
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  } catch {
    return () => {};
  }
}
function coarseSnapshot(): boolean {
  try {
    return window.matchMedia("(pointer: coarse)").matches;
  } catch {
    return false;
  }
}

/**
 * Il builder: razza, livello, i tre alberi e le azioni (condividi, apri da codice, azzera, pubblica). Lo stato è una
 * `Build` del motore (`src/lib/builder/engine.ts`); ogni cambiamento finisce nel codice condivisibile, cioè nell'hash
 * del link (replaceState, mai pushState: Indietro esce dal builder) e nel localStorage (una build per classe).
 * All'apertura vince il link, poi il browser, poi una build vuota. Ogni azione o rifiuto viene detto nell'area
 * aria-live; Annulla/Ripeti coprono punti, cascate, azzeramenti, livello e importazioni. La pagina è statica.
 */
export function TalentBuilder({ classId, className, color, ink, data, races, labels, pageUrl, classHrefs, iconBase, publishHref }: TalentBuilderProps) {
  const router = useRouter();
  const iconUrl = useMemo(() => (iconBase ? (icon: string) => `${iconBase}${icon}.jpg` : undefined), [iconBase]);
  const allowedRaces = useMemo(() => races.filter((r) => r.allowed).map((r) => r.id), [races]);
  const snapshot = useSyncExternalStore(noop, () => initialSnapshot(classId), () => "");
  const touch = useSyncExternalStore(subscribeCoarse, coarseSnapshot, () => false);
  const mounted = useSyncExternalStore(
    noop,
    () => true,
    () => false,
  );

  // la build iniziale deriva dallo snapshot; un codice di un'altra classe manda alla sua pagina
  const initial = useMemo(() => {
    const empty = emptyBuild(classId);
    if (!data || !snapshot) return { build: empty, restored: false, redirect: null as string | null };
    const code = snapshot.slice(snapshot.indexOf(":") + 1);
    const head = peekCode(code);
    if (snapshot.startsWith("hash:") && head && head.classId !== classId) return { build: empty, restored: false, redirect: `${classHrefs[head.classId]}#${code}` };
    const b = decodeBuild(data, code, allowedRaces);
    return { build: b ?? empty, restored: Boolean(b) && snapshot.startsWith("stored:"), redirect: null };
  }, [data, snapshot, classId, allowedRaces, classHrefs]);

  useEffect(() => {
    if (initial.redirect) router.replace(initial.redirect);
  }, [initial.redirect, router]);

  const [edits, setEdits] = useState<Build | null>(null);
  const [history, setHistory] = useState<Build[]>([]);
  const [future, setFuture] = useState<Build[]>([]);
  const [message, setMessage] = useState<Message | null>(null);
  const [tab, setTab] = useState(0);
  const [active, setActive] = useState<Active | null>(null);
  const [sheet, setSheet] = useState<string | null>(null);
  const [shareOpen, setShareOpen] = useState(false);
  const [importValue, setImportValue] = useState("");
  const [importError, setImportError] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const treesRef = useRef<HTMLDivElement>(null);
  const completeSent = useRef(false);

  const build = edits ?? initial.build;

  // un link incollato nella barra degli indirizzi a pagina aperta (cambia solo l'hash): si carica quella build
  useEffect(() => {
    if (!data) return;
    const onHash = () => {
      const found = codeFromInput(window.location.hash);
      if (!found) return;
      const head = peekCode(found);
      if (head && head.classId !== classId) {
        router.replace(`${classHrefs[head.classId]}#${found}`);
        return;
      }
      const b = decodeBuild(data, found, allowedRaces);
      if (b && encodeBuild(data, b) !== encodeBuild(data, edits ?? initial.build)) setEdits(b);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [data, classId, classHrefs, allowedRaces, edits, initial.build, router]);

  const restored = edits === null && initial.restored;
  const code = useMemo(() => (data ? encodeBuild(data, build) : ""), [data, build]);
  const isDefault = !build.raceId && build.level === MAX_LEVEL && Object.keys(build.ranks).length === 0;

  // ogni cambiamento va nel link e nel browser (solo dopo una modifica: il primo render non tocca nulla)
  useEffect(() => {
    if (!mounted || !data || edits === null) return;
    try {
      const url = `${window.location.pathname}${window.location.search}${isDefault ? "" : `#${code}`}`;
      window.history.replaceState(window.history.state, "", url);
    } catch {
      // niente history
    }
    writeStored(classId, isDefault ? null : code);
  }, [mounted, data, edits, code, isDefault, classId]);

  const total = data ? totalPoints(data, build.ranks) : 0;
  const available = pointsAtLevel(build.level);
  const left = Math.max(0, available - total);
  const over = Math.max(0, total - available);
  const summary = data ? treeSummary(data, build.ranks) : [0, 0, 0];
  const needed = data ? requiredLevel(data, build) : 1;
  const maxPoints = pointsAtLevel(MAX_LEVEL);

  useEffect(() => {
    if (!mounted || total < maxPoints || completeSent.current) return;
    completeSent.current = true;
    trackEvent("build_complete", { class: classId });
  }, [mounted, total, maxPoints, classId]);

  /** Applica una build nuova e la mette nella cronologia. */
  const commit = useCallback(
    (next: Build, msg?: Message | null) => {
      setHistory((h) => [...h.slice(-(HISTORY_MAX - 1)), build]);
      setFuture([]);
      setEdits(next);
      if (msg !== undefined) setMessage(msg);
    },
    [build],
  );

  const undo = useCallback(() => {
    if (!history.length) return;
    const prev = history[history.length - 1];
    setHistory(history.slice(0, -1));
    setFuture([...future, build]);
    setEdits(prev);
    setMessage({ text: labels.msgUndone });
  }, [history, future, build, labels]);

  const redo = useCallback(() => {
    if (!future.length) return;
    const next = future[future.length - 1];
    setFuture(future.slice(0, -1));
    setHistory([...history, build]);
    setEdits(next);
    setMessage({ text: labels.msgRedone });
  }, [history, future, build, labels]);

  const say = useCallback(
    (talentId: string, next: Build) => {
      if (!data) return null;
      const t = indexOf(data).byId.get(talentId)?.talent;
      if (!t) return null;
      return { text: fill(labels.msgRank, { talent: t.name, r: rankOf(next, talentId), max: t.maxRank, left: Math.max(0, pointsAtLevel(next.level) - totalPoints(data, next.ranks)) }) };
    },
    [data, labels],
  );

  const onAdd = useCallback(
    (id: string) => {
      if (!data) return;
      const blocker = addBlocker(data, build, id);
      const entry = indexOf(data).byId.get(id);
      if (!entry) return;
      if (blocker === null) {
        const next = addPoint(data, build, id);
        commit(next, say(id, next));
        return;
      }
      const t = entry.talent;
      if (blocker === "rowLocked") setMessage({ text: fill(labels.msgRowLocked, { n: pointsToUnlockRow(t.row), tree: entry.tree.name, have: pointsAboveRow(entry.tree, build.ranks, t.row) }), assertive: true });
      else if (blocker === "prerequisiteMissing") {
        const req = t.requires ? indexOf(data).byId.get(t.requires.id)?.talent : undefined;
        setMessage({ text: fill(labels.msgPrereq, { talent: req?.name ?? "", max: t.requires?.rank ?? req?.maxRank ?? 0 }), assertive: true });
      } else if (blocker === "maxRank") setMessage({ text: fill(labels.msgMaxed, { talent: t.name }) });
      else if (blocker === "noPointsLeft") setMessage({ text: fill(labels.msgNoPoints, { level: build.level }), assertive: true });
    },
    [data, build, commit, say, labels],
  );

  const onRemove = useCallback(
    (id: string) => {
      if (!data || rankOf(build, id) === 0) return;
      if (canRemove(data, build, id)) {
        const next = removePoint(data, build, id);
        commit(next, say(id, next));
        return;
      }
      const cascade = removeWithDependents(data, build, id);
      setMessage({
        text: fill(labels.msgCannotRemove, { n: cascade.removed - 1 }),
        assertive: true,
        action: { label: fill(labels.removeAlso, { n: cascade.removed }), run: () => commit(cascade.build, { text: fill(labels.msgTrimmed, { n: cascade.removed }), action: { label: labels.undo, run: undo } }) },
      });
    },
    [data, build, commit, say, labels, undo],
  );

  const onMax = useCallback(
    (id: string) => {
      if (!data) return;
      const next = maxOut(data, build, id);
      if (next === build) onAdd(id);
      else commit(next, say(id, next));
    },
    [data, build, commit, say, onAdd],
  );

  const onRemoveAll = useCallback(
    (id: string) => {
      if (!data) return;
      const next = removeAllRanks(data, build, id);
      if (next === build) onRemove(id);
      else commit(next, say(id, next));
    },
    [data, build, commit, say, onRemove],
  );

  const onSetRank = useCallback(
    (id: string, rank: number) => {
      if (!data) return;
      let next = build;
      const current = rankOf(build, id);
      if (rank > current) for (let i = current; i < rank; i++) next = addPoint(data, next, id);
      else for (let i = current; i > rank; i--) next = removePoint(data, next, id);
      if (next === build) {
        if (rank > current) onAdd(id);
        else if (rank < current) onRemove(id);
        return;
      }
      commit(next, say(id, next));
    },
    [data, build, commit, say, onAdd, onRemove],
  );

  const onLevel = useCallback(
    (level: number) => {
      if (!data) return;
      const next = withLevel(build, level);
      const extra = totalPoints(data, next.ranks) - pointsAtLevel(next.level);
      if (extra > 0) {
        commit(next, {
          text: fill(labels.msgOverLevel, { level: next.level, available: pointsAtLevel(next.level), total: totalPoints(data, next.ranks) }),
          action: {
            label: fill(labels.trimPoints, { n: extra }),
            run: () => {
              const trimmed = trimPoints(data, next, extra);
              commit(trimmed.build, { text: fill(labels.msgTrimmed, { n: trimmed.removed }), action: { label: labels.undo, run: undo } });
            },
          },
        });
      } else commit(next, null);
    },
    [data, build, commit, labels, undo],
  );

  const onActivate = useCallback((id: string | null, el: HTMLElement | null, how: "hover" | "focus" | "tap") => {
    if (!id || !el) {
      // il fumetto del mouse sparisce quando il mouse esce; la selezione del tocco resta finché non si tocca altro
      setActive((a) => (a && a.how === "tap" && how !== "tap" ? a : null));
      return;
    }
    const host = treesRef.current;
    if (!host) return setActive({ id, how, left: 0, top: 0 });
    const c = el.getBoundingClientRect();
    const h = host.getBoundingClientRect();
    const roomRight = h.right - c.right;
    const leftPos = roomRight >= DETAIL_W + 12 ? c.right - h.left + 8 : Math.max(0, c.left - h.left - DETAIL_W - 8);
    setActive({ id, how, left: leftPos, top: c.top - h.top });
  }, []);

  const onImport = () => {
    const found = codeFromInput(importValue);
    const head = found ? peekCode(found) : null;
    if (!found || !head) {
      setImportError(labels.importError);
      trackEvent("build_import", { ok: "no" });
      return;
    }
    trackEvent("build_import", { ok: "yes" });
    if (head.classId !== classId) {
      setImportError(null);
      router.push(`${classHrefs[head.classId]}#${found}`);
      return;
    }
    const b = data ? decodeBuild(data, found, allowedRaces) : null;
    if (!b) {
      setImportError(labels.importError);
      return;
    }
    setImportError(null);
    setImportValue("");
    commit(b, null);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!(e.ctrlKey || e.metaKey) || e.key.toLowerCase() !== "z") return;
    const target = e.target as HTMLElement;
    if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") return;
    e.preventDefault();
    if (e.shiftKey) redo();
    else undo();
  };

  const link = `${pageUrl}#${code}`;
  const text = data ? `${className} · ${build.level}\n${buildAsText(data, build)}\n${link}` : "";
  const style = { "--tb-class": color, "--tb-ink": ink } as CSSProperties;

  if (!data) {
    return (
      <div className="tb" style={style}>
        <p className="alert-bad">{labels.dataMissing}</p>
      </div>
    );
  }

  const detail = (id: string, asSheet: boolean) => (
    <TalentDetail
      data={data}
      build={build}
      talentId={id}
      labels={labels}
      sheet={asSheet}
      style={asSheet || !active ? undefined : { left: active.left, top: active.top, width: DETAIL_W }}
      onAdd={onAdd}
      onRemove={onRemove}
      onMax={onMax}
      onRemoveAll={onRemoveAll}
      onClose={() => setSheet(null)}
    />
  );

  return (
    <div className="tb" style={style} onKeyDown={onKeyDown}>
      <div className="tb-top">
        <section className="tb-panel" aria-label={labels.pickRace}>
          <p className="tb-panel-title">{labels.pickRace}</p>
          <RacePicker races={races} iconBase={iconBase} value={build.raceId} className={className} labels={labels} onChange={(r: RaceId | null) => commit({ ...build, raceId: r }, null)} />
        </section>
        <section className="tb-panel tb-level" aria-label={labels.level}>
          <label className="tb-level-label" htmlFor="tb-level">
            <span className="tb-panel-title">{labels.level}</span>
            <output className="tb-level-value" htmlFor="tb-level">
              {build.level}
            </output>
          </label>
          <input id="tb-level" type="range" min={FIRST_TALENT_LEVEL} max={MAX_LEVEL} value={build.level} onChange={(e) => onLevel(Number(e.target.value))} />
          <p className="tb-level-hint">{labels.levelHint}</p>
          <dl className="tb-stats">
            <div>
              <dt className="sr-only">{labels.summaryBar}</dt>
              <dd className="tb-stat-main">{fill(labels.pointsSpent, { n: total, total: available })}</dd>
            </div>
            <div>
              <dd className={over ? "tb-stat is-over" : "tb-stat"}>{over ? fill(labels.pointsOver, { n: over, level: build.level }) : fill(labels.pointsLeft, { n: left })}</dd>
            </div>
            <div>
              <dd className="tb-stat">{fill(labels.requiredLevel, { n: needed })}</dd>
            </div>
            <div>
              <dd className="tb-stat tb-stat-summary" aria-label={data.trees.map((t, i) => `${t.name} ${summary[i]}`).join(", ")}>
                {summary.join(" / ")}
              </dd>
            </div>
          </dl>
          {total >= maxPoints ? <p className="tb-complete">{fill(labels.complete, { total: maxPoints })}</p> : null}
          <div className="tb-history">
            <button type="button" className="btn btn-ghost px-3 py-1 text-xs" onClick={undo} disabled={!history.length}>
              ↶ {labels.undo}
            </button>
            <button type="button" className="btn btn-ghost px-3 py-1 text-xs" onClick={redo} disabled={!future.length}>
              ↷ {labels.redo}
            </button>
          </div>
        </section>
      </div>

      <div className="tb-live-wrap">
        <p className="tb-live" aria-live={message?.assertive ? "assertive" : "polite"} aria-atomic="true">
          {message ? (
            <>
              {message.text}
              {message.action ? (
                <button type="button" className="tb-live-action" onClick={message.action.run}>
                  {message.action.label}
                </button>
              ) : null}
            </>
          ) : restored ? (
            labels.restored
          ) : null}
        </p>
      </div>

      <div className="tb-tabs" role="tablist" aria-label={labels.treeTabs}>
        {data.trees.map((t, i) => (
          <button key={t.id} type="button" role="tab" aria-selected={tab === i} className={`tb-tab${tab === i ? " is-on" : ""}`} onClick={() => setTab(i)}>
            {t.name} <span className="stat-pill">{summary[i]}</span>
          </button>
        ))}
      </div>

      <div className="tb-trees" ref={treesRef}>
        {data.trees.map((t, i) => (
          <div key={t.id} className={`tb-tree-slot${tab === i ? "" : " is-hidden-sm"}`}>
            <TalentTree
              data={data}
              tree={t}
              build={build}
              labels={labels}
              activeId={active?.id ?? null}
              onAdd={onAdd}
              onRemove={onRemove}
              onMax={onMax}
              onRemoveAll={onRemoveAll}
              onSetRank={onSetRank}
              onActivate={onActivate}
              onDetails={(id) => setSheet(id)}
              onReset={() => commit(resetTree(data, build, t.id), { text: fill(labels.msgTreeCleared, { tree: t.name, n: treePoints(t, build.ranks) }), action: { label: labels.undo, run: undo } })}
              touch={touch}
              iconUrl={iconUrl}
            />
          </div>
        ))}
        {active && !touch ? detail(active.id, false) : null}
      </div>
      {sheet ? detail(sheet, true) : null}

      <p className="tb-help">{touch ? labels.touchHelp : `${labels.help} ${labels.keyboardHelp}`}</p>

      <div className="tb-bar" aria-hidden="true">
        <span className="tb-bar-summary">{summary.join(" / ")}</span>
        <span className="tb-bar-left">{fill(labels.barLeft, { n: left, level: build.level })}</span>
        <button type="button" className="btn btn-gold px-3 py-1 text-xs" onClick={() => setShareOpen(true)}>
          {labels.share}
        </button>
      </div>

      <div className="tb-actions">
        <div className="tb-actions-row">
          <button type="button" className="btn btn-gold" onClick={() => setShareOpen((v) => !v)} aria-expanded={shareOpen}>
            {labels.share}
          </button>
          {confirmReset ? (
            <span className="tb-confirm">
              <span>{fill(labels.resetConfirm, { n: total })}</span>
              <button
                type="button"
                className="btn btn-danger-solid px-3 py-1.5 text-xs"
                onClick={() => {
                  commit(resetAll(build), { text: fill(labels.msgCleared, { n: total }), action: { label: labels.undo, run: undo } });
                  setConfirmReset(false);
                }}
              >
                {labels.resetYes}
              </button>
              <button type="button" className="btn btn-ghost px-3 py-1.5 text-xs" onClick={() => setConfirmReset(false)}>
                {labels.cancel}
              </button>
            </span>
          ) : (
            <button type="button" className="btn btn-danger" onClick={() => setConfirmReset(true)} disabled={total === 0}>
              {labels.resetAll}
            </button>
          )}
          <a href={`${publishHref}#${code}`} className={total > 0 ? "btn btn-primary" : "btn btn-primary"} aria-disabled={total === 0} onClick={(e) => {
            if (total === 0) e.preventDefault();
          }}>
            {labels.publish}
          </a>
        </div>
        <p className="tb-actions-hint">{labels.publishHint}</p>
        {shareOpen ? (
          <SharePanel
            link={link}
            code={code}
            text={text}
            labels={labels}
            onCopied={(method) => {
              trackEvent("build_share", { method, class: classId });
              setMessage({ text: fill(labels.msgCopied, { what: method === "link" ? labels.shareLink : method === "code" ? labels.shareCode : labels.shareText }) });
            }}
            onClose={() => setShareOpen(false)}
          />
        ) : null}
        <form
          className="tb-import"
          onSubmit={(e) => {
            e.preventDefault();
            onImport();
          }}
        >
          <label htmlFor="tb-import" className="tb-panel-title">
            {labels.importTitle}
          </label>
          <div className="tb-import-row">
            <input id="tb-import" value={importValue} onChange={(e) => setImportValue(e.target.value)} placeholder={labels.importPlaceholder} spellCheck={false} autoComplete="off" />
            <button type="submit" className="btn btn-choice" disabled={!importValue.trim()}>
              {labels.importButton}
            </button>
          </div>
          {importError ? <p className="text-error text-sm">{importError}</p> : null}
        </form>
        <p className="tb-autosave">{labels.autosaved}</p>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { codeFromInput, peekCode } from "@/lib/builder/code";
import type { ClassId, RaceId } from "@/lib/builder/types";
import { BUILD_LIMITS, BUILD_MIN_WORDS, BUILD_PURPOSES, guideWords, pointsFromCode, type CommunityBuild } from "@/lib/community/builds";
import { publishBuild, updateBuild, type BuildActionState } from "@/lib/community/buildActions";
import { fill } from "@/lib/builderLabels";
import type { BuildLabels } from "@/lib/buildLabels";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

export type BuildFormProps = {
  locale: Locale;
  labels: BuildLabels;
  /** nomi delle classi e delle razze nella lingua, per il riassunto del codice */
  classNames: Record<ClassId, string>;
  raceNames: Record<RaceId, string>;
  languageNames: Record<Locale, string>;
  /** build da modificare (modo "edit"); senza, si pubblica una build nuova dal codice nell'hash */
  initial?: CommunityBuild;
};

const EMPTY: BuildActionState = {};
const noop = () => () => {};
/** Il codice nell'hash del link, letto una volta (vuoto sul server). */
const hashCode = () => codeFromInput(window.location.hash) ?? "";

/**
 * Modulo di pubblicazione e di modifica di una build. Il codice arriva dall'hash del link (`/builds/publish#FW1…`,
 * messo dal tasto Pubblica del builder) o incollato; il riassunto (classe, razza, livello, punti) si legge dal codice
 * senza i dati dei talenti (`peekCode`, `pointsFromCode`); la Server Action lo rilegge con il motore. I contatori
 * mostrano i limiti e le parole di guida: da `BUILD_MIN_WORDS` la scheda è indicizzata.
 */
export function BuildForm({ locale, labels, classNames, raceNames, languageNames, initial }: BuildFormProps) {
  const router = useRouter();
  const f = labels.form;
  const [state, action, pending] = useActionState(initial ? updateBuild : publishBuild, EMPTY);
  const fromHash = useSyncExternalStore(noop, hashCode, () => "");
  const [codeEdit, setCode] = useState<string | null>(null);
  const code = codeEdit ?? initial?.code ?? fromHash;
  const [fields, setFields] = useState({
    name: initial?.name ?? "",
    purpose: initial?.purpose ?? "general",
    guideLang: initial?.guide_lang ?? locale,
    summary: initial?.summary ?? "",
    plan: initial?.plan ?? "",
    strengths: initial?.strengths ?? "",
    weaknesses: initial?.weaknesses ?? "",
    notes: initial?.notes ?? "",
  });

  useEffect(() => {
    if (state.ok && state.href) {
      if (!initial) trackEvent("build_published", { class: peekCode(code)?.classId ?? "", purpose: fields.purpose });
      router.push(state.href);
    }
  }, [state, router, initial, code, fields.purpose]);

  const head = useMemo(() => {
    const found = codeFromInput(code);
    return found ? peekCode(found) : null;
  }, [code]);
  const points = useMemo(() => (code ? pointsFromCode(codeFromInput(code) ?? "") : [0, 0, 0]), [code]);
  const words = guideWords(fields);
  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFields((x) => ({ ...x, [k]: e.target.value }));
  const err = (field: string) => (state.error && state.field === field ? f.errors[state.error as keyof typeof f.errors] ?? f.errors.invalid : null);
  const generalError = state.error && !state.field ? f.errors[state.error as keyof typeof f.errors] ?? f.errors.db : null;
  const counter = (value: string, max: number) => <span className="float-right font-mono text-xs text-pale-muted">{fill(f.chars, { n: value.length, max })}</span>;

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="locale" value={locale} />
      {initial ? <input type="hidden" name="id" value={initial.id} /> : null}
      <input type="hidden" name="class" value={head?.classId ?? initial?.class_id ?? ""} />

      <section className="card-night p-5">
        <label htmlFor="bf-code" className="kicker text-pale-muted">
          {f.code}
        </label>
        <input id="bf-code" name="code" value={code} onChange={(e) => setCode(e.target.value)} placeholder={f.codePlaceholder} spellCheck={false} autoComplete="off" className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 font-mono text-sm text-chalk" />
        {head ? (
          <p className="mt-2 text-sm text-chalk">
            {fill(f.codeSummary, { class: classNames[head.classId], race: head.raceId ? raceNames[head.raceId] : f.noRace, level: head.level, points: points.reduce((a, b) => a + b, 0), summary: points.join(" / ") })}
          </p>
        ) : (
          <p className="mt-2 text-sm text-pale-muted">{f.codeHint}</p>
        )}
        {err("code") ? <p className="text-error mt-2 text-sm">{err("code")}</p> : null}
      </section>

      <section className="card-night space-y-4 p-5">
        <div>
          <label htmlFor="bf-name" className="kicker text-pale-muted">
            {f.name} {counter(fields.name, BUILD_LIMITS.name.max)}
          </label>
          <input id="bf-name" name="name" value={fields.name} onChange={set("name")} maxLength={BUILD_LIMITS.name.max} placeholder={f.namePlaceholder} required className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
          {err("name") ? <p className="text-error mt-1 text-sm">{err("name")}</p> : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bf-purpose" className="kicker text-pale-muted">
              {labels.purpose}
            </label>
            <select id="bf-purpose" name="purpose" value={fields.purpose} onChange={set("purpose")} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk">
              {BUILD_PURPOSES.map((p) => (
                <option key={p} value={p}>
                  {labels.purposes[p]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bf-lang" className="kicker text-pale-muted">
              {f.guideLang}
            </label>
            <select id="bf-lang" name="guideLang" value={fields.guideLang} onChange={set("guideLang")} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk">
              {(Object.keys(languageNames) as Locale[]).map((l) => (
                <option key={l} value={l}>
                  {languageNames[l]}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      <section className="card-night space-y-4 p-5">
        <div>
          <label htmlFor="bf-summary" className="kicker text-pale-muted">
            {f.summary} {counter(fields.summary, BUILD_LIMITS.summary.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.summaryHint}</p>
          <textarea id="bf-summary" name="summary" value={fields.summary} onChange={set("summary")} rows={3} maxLength={BUILD_LIMITS.summary.max} required className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
          {err("summary") ? <p className="text-error mt-1 text-sm">{err("summary")}</p> : null}
        </div>
        <div>
          <label htmlFor="bf-plan" className="kicker text-pale-muted">
            {f.plan} {counter(fields.plan, BUILD_LIMITS.plan.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.planHint}</p>
          <textarea id="bf-plan" name="plan" value={fields.plan} onChange={set("plan")} rows={8} maxLength={BUILD_LIMITS.plan.max} required className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
          {err("plan") ? <p className="text-error mt-1 text-sm">{err("plan")}</p> : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="bf-strengths" className="kicker text-pale-muted">
              {f.strengths} <span className="normal-case tracking-normal">({f.optional})</span> {counter(fields.strengths, BUILD_LIMITS.strengths.max)}
            </label>
            <textarea id="bf-strengths" name="strengths" value={fields.strengths} onChange={set("strengths")} rows={4} maxLength={BUILD_LIMITS.strengths.max} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
          </div>
          <div>
            <label htmlFor="bf-weaknesses" className="kicker text-pale-muted">
              {f.weaknesses} <span className="normal-case tracking-normal">({f.optional})</span> {counter(fields.weaknesses, BUILD_LIMITS.weaknesses.max)}
            </label>
            <textarea id="bf-weaknesses" name="weaknesses" value={fields.weaknesses} onChange={set("weaknesses")} rows={4} maxLength={BUILD_LIMITS.weaknesses.max} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
          </div>
        </div>
        <div>
          <label htmlFor="bf-notes" className="kicker text-pale-muted">
            {f.notes} <span className="normal-case tracking-normal">({f.optional})</span> {counter(fields.notes, BUILD_LIMITS.notes.max)}
          </label>
          <textarea id="bf-notes" name="notes" value={fields.notes} onChange={set("notes")} rows={3} maxLength={BUILD_LIMITS.notes.max} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk" />
        </div>
        <p className="text-xs text-pale-muted">
          {f.markdownHint} <strong className="text-chalk">{fill(f.words, { n: words })}</strong> · {fill(f.wordsHint, { min: BUILD_MIN_WORDS })}
        </p>
      </section>

      {generalError ? <p className="alert-bad">{generalError}</p> : null}
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={pending || !head}>
          {pending ? f.submitting : initial ? f.save : f.submit}
        </button>
      </div>
    </form>
  );
}

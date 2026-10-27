"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { supabaseUrl } from "@/lib/supabase/env";
import {
  INTERFACE_CLASSES,
  INTERFACE_INPUTS,
  INTERFACE_LIMITS,
  INTERFACE_MIN_WORDS,
  INTERFACE_PRESETS,
  INTERFACE_ROLES,
  INTERFACE_SHOTS_BUCKET,
  INTERFACE_SHOT_MAX_SIDE,
  checkLayout,
  interfaceWords,
  shotUrl,
  type CommunityInterface,
} from "@/lib/community/interfaces";
import { publishInterface, updateInterface, type InterfaceActionState } from "@/lib/community/interfaceActions";
import { fill } from "@/lib/builderLabels";
import type { InterfaceLabels } from "@/lib/interfaceLabels";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

export type InterfaceFormProps = {
  locale: Locale;
  labels: InterfaceLabels;
  languageNames: Record<Locale, string>;
  /** id dell'iscritto: la cartella degli screenshot nel bucket */
  userId: string;
  /** interfaccia da modificare (modo "edit"); senza, se ne pubblica una nuova */
  initial?: CommunityInterface;
};

const EMPTY: InterfaceActionState = {};
const INPUT = "mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk";
/** Peso massimo di un file scelto (prima della riduzione): oltre, nemmeno si prova. */
const PICK_MAX_BYTES = 20 * 1024 * 1024;

/** Riduce l'immagine a 1920 px di lato lungo e la converte in WebP (JPEG se il browser non scrive WebP, come Safari). */
async function shrink(file: File): Promise<{ blob: Blob; ext: "webp" | "jpg" }> {
  const bmp = await createImageBitmap(file);
  const scale = Math.min(1, INTERFACE_SHOT_MAX_SIDE / Math.max(bmp.width, bmp.height));
  const w = Math.max(1, Math.round(bmp.width * scale));
  const h = Math.max(1, Math.round(bmp.height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("canvas");
  ctx.drawImage(bmp, 0, 0, w, h);
  bmp.close();
  const encode = (type: string, quality: number) => new Promise<Blob | null>((res) => canvas.toBlob(res, type, quality));
  const webp = await encode("image/webp", 0.86);
  if (webp && webp.type === "image/webp") return { blob: webp, ext: "webp" };
  const jpg = await encode("image/jpeg", 0.88);
  if (!jpg) throw new Error("encode");
  return { blob: jpg, ext: "jpg" };
}

function Checks<T extends string>({ name, options, labels, value, onChange }: { name: string; options: readonly T[]; labels: Record<T, string>; value: T[]; onChange: (next: T[]) => void }) {
  return (
    <div className="gl-checks" role="group">
      {options.map((o) => {
        const checked = value.includes(o);
        return (
          <label key={o} className={`gl-check${checked ? " is-on" : ""}`}>
            <input type="checkbox" name={name} value={o} checked={checked} onChange={(e) => onChange(e.target.checked ? [...value, o] : value.filter((x) => x !== o))} />
            <span>{labels[o]}</span>
          </label>
        );
      })}
    </div>
  );
}

/**
 * Modulo di pubblicazione e di modifica di un'interfaccia: nome, stringa dell'Edit Mode (riconosciuta mentre la si
 * incolla) e, facoltativa, quella del Cooldown Manager; da 1 a 4 screenshot caricati subito nello Storage (ridotti e
 * convertiti nel browser, nella cartella dell'iscritto); classi, ruoli, comandi, preset, risoluzione, scala, addon;
 * descrizione. Le regole sono quelle di interfaces.ts; la Server Action le ricontrolla.
 */
export function InterfaceForm({ locale, labels, languageNames, userId, initial }: InterfaceFormProps) {
  const router = useRouter();
  const f = labels.form;
  const [state, action, pending] = useActionState(initial ? updateInterface : publishInterface, EMPTY);
  const [fields, setFields] = useState({
    name: initial?.name ?? "",
    layout: initial?.layout ?? "",
    cooldowns: initial?.cooldowns ?? "",
    input: initial?.input ?? "mouse",
    preset: initial?.preset ?? "modern",
    resolution: initial?.resolution ?? "",
    uiScale: initial?.ui_scale != null ? String(initial.ui_scale) : "",
    addons: initial?.addons ?? "",
    descriptionLang: initial?.description_lang ?? locale,
    description: initial?.description ?? "",
  });
  const [classes, setClasses] = useState(initial?.classes ?? []);
  const [roles, setRoles] = useState(initial?.roles ?? []);
  const [shots, setShots] = useState<string[]>(initial?.shots ?? []);
  const [uploading, setUploading] = useState(0);
  const [shotError, setShotError] = useState(false);
  const fresh = useRef(new Set<string>());
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (state.ok && state.href) {
      fresh.current.clear();
      if (!initial) trackEvent("interface_published", { input: fields.input, addons: fields.addons.trim() ? "yes" : "no" });
      router.push(state.href);
    }
  }, [state, router, initial, fields.input, fields.addons]);

  const layoutCheck = useMemo(() => (fields.layout.trim() ? checkLayout(fields.layout) : null), [fields.layout]);
  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFields((x) => ({ ...x, [k]: e.target.value }));
  const err = (field: string) => (state.error && state.field === field ? (f.errors[state.error as keyof typeof f.errors] ?? f.errors.invalid) : null);
  const generalError = state.error && !state.field ? (f.errors[state.error as keyof typeof f.errors] ?? f.errors.db) : null;
  const counter = (value: string, max: number) => <span className="float-right font-mono text-xs text-pale-muted">{fill(f.chars, { n: value.length, max })}</span>;
  const optional = <span className="normal-case tracking-normal">({f.optional})</span>;
  const room = INTERFACE_LIMITS.shots.max - shots.length - uploading;

  async function addFiles(list: FileList | null) {
    const sb = supabaseBrowser();
    if (!list || !sb) return;
    setShotError(false);
    const files = Array.from(list).slice(0, Math.max(0, room));
    setUploading((n) => n + files.length);
    for (const file of files) {
      try {
        if (!/^image\/(png|jpeg|webp)$/.test(file.type) || file.size > PICK_MAX_BYTES) throw new Error("type");
        const { blob, ext } = await shrink(file);
        const path = `${userId}/${crypto.randomUUID()}.${ext}`;
        const { error } = await sb.storage.from(INTERFACE_SHOTS_BUCKET).upload(path, blob, { contentType: blob.type, upsert: false, cacheControl: "31536000" });
        if (error) throw error;
        fresh.current.add(path);
        setShots((s) => [...s, path]);
      } catch {
        setShotError(true);
      } finally {
        setUploading((n) => n - 1);
      }
    }
    if (fileInput.current) fileInput.current.value = "";
  }

  function removeShot(path: string) {
    setShots((s) => s.filter((p) => p !== path));
    // uno screenshot appena caricato e non ancora salvato si toglie subito dal bucket; quelli già salvati li toglie il salvataggio
    if (fresh.current.has(path)) {
      fresh.current.delete(path);
      void supabaseBrowser()?.storage.from(INTERFACE_SHOTS_BUCKET).remove([path]);
    }
  }

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="locale" value={locale} />
      {initial ? <input type="hidden" name="id" value={initial.id} /> : null}
      {shots.map((p) => (
        <input key={p} type="hidden" name="shots" value={p} />
      ))}

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.layoutSection}</h2>
        <div>
          <label htmlFor="if-name" className="kicker text-pale-muted">
            {f.name} {counter(fields.name, INTERFACE_LIMITS.name.max)}
          </label>
          <input id="if-name" name="name" value={fields.name} onChange={set("name")} maxLength={INTERFACE_LIMITS.name.max} placeholder={f.namePlaceholder} required className={INPUT} />
          {err("name") ? <p className="text-error mt-1 text-sm">{err("name")}</p> : null}
        </div>
        <div>
          <label htmlFor="if-layout" className="kicker text-pale-muted">
            {f.layout} {counter(fields.layout, INTERFACE_LIMITS.layout.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.layoutHint}</p>
          <textarea id="if-layout" name="layout" value={fields.layout} onChange={set("layout")} rows={4} maxLength={INTERFACE_LIMITS.layout.max + 200} spellCheck={false} autoComplete="off" required className={`${INPUT} font-mono text-xs`} />
          {err("layout") ? (
            <p className="text-error mt-1 text-sm">{err("layout")}</p>
          ) : layoutCheck ? (
            layoutCheck.ok ? (
              <p className="mt-1 text-sm text-good">{fill(f.layoutOk, { n: layoutCheck.elements })}</p>
            ) : (
              <p className="text-error mt-1 text-sm">{f.errors[layoutCheck.error]}</p>
            )
          ) : null}
        </div>
        <div>
          <label htmlFor="if-cooldowns" className="kicker text-pale-muted">
            {f.cooldowns} {optional}
          </label>
          <p className="text-xs text-pale-muted">{f.cooldownsHint}</p>
          <textarea id="if-cooldowns" name="cooldowns" value={fields.cooldowns} onChange={set("cooldowns")} rows={2} spellCheck={false} autoComplete="off" className={`${INPUT} font-mono text-xs`} />
          {err("cooldowns") ? <p className="text-error mt-1 text-sm">{err("cooldowns")}</p> : null}
        </div>
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.shotsSection}</h2>
        <p className="text-xs text-pale-muted">{f.shotsHint}</p>
        {shots.length ? (
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {shots.map((p, i) => (
              <li key={p} className="if-thumb">
                {/* eslint-disable-next-line @next/next/no-img-element -- screenshot dell'utente dallo Storage */}
                <img src={shotUrl(supabaseUrl, p)} alt={fill(labels.page.screenshot, { n: i + 1, total: shots.length })} loading="lazy" />
                <button type="button" className="btn btn-ghost if-thumb-remove px-2 py-0.5 text-xs" onClick={() => removeShot(p)}>
                  {f.removeShot}
                </button>
              </li>
            ))}
          </ul>
        ) : null}
        <div className="flex flex-wrap items-center gap-3">
          <input ref={fileInput} id="if-shots" type="file" accept="image/png,image/jpeg,image/webp" multiple className="sr-only" onChange={(e) => void addFiles(e.target.files)} disabled={room <= 0} />
          <label htmlFor="if-shots" className={`btn btn-choice px-3 py-1.5 text-xs ${room <= 0 ? "pointer-events-none opacity-50" : "cursor-pointer"}`}>
            {f.addShot}
          </label>
          <span className="font-mono text-xs text-pale-muted">
            {shots.length}/{INTERFACE_LIMITS.shots.max}
          </span>
          {uploading ? <span className="text-sm text-pale-muted" aria-live="polite">{f.uploading}</span> : null}
        </div>
        {shotError ? <p className="text-error text-sm">{f.shotError}</p> : null}
        {err("shots") ? <p className="text-error text-sm">{err("shots")}</p> : null}
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.detailsSection}</h2>
        <div>
          <p className="kicker text-pale-muted">
            {f.classes} {optional} <span className="normal-case tracking-normal">· {f.classesHint}</span>
          </p>
          <Checks name="classes" options={INTERFACE_CLASSES} labels={labels.classes} value={classes} onChange={setClasses} />
        </div>
        <div>
          <p className="kicker text-pale-muted">
            {f.roles} {optional} <span className="normal-case tracking-normal">· {f.rolesHint}</span>
          </p>
          <Checks name="roles" options={INTERFACE_ROLES} labels={labels.roles} value={roles} onChange={setRoles} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="if-input" className="kicker text-pale-muted">
              {f.input}
            </label>
            <select id="if-input" name="input" value={fields.input} onChange={set("input")} className={INPUT}>
              {INTERFACE_INPUTS.map((x) => (
                <option key={x} value={x}>
                  {labels.inputs[x]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="if-preset" className="kicker text-pale-muted">
              {f.preset}
            </label>
            <select id="if-preset" name="preset" value={fields.preset} onChange={set("preset")} className={INPUT}>
              {INTERFACE_PRESETS.map((x) => (
                <option key={x} value={x}>
                  {labels.presets[x]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="if-resolution" className="kicker text-pale-muted">
              {f.resolution} {optional}
            </label>
            <input id="if-resolution" name="resolution" value={fields.resolution} onChange={set("resolution")} placeholder={f.resolutionPlaceholder} inputMode="numeric" autoComplete="off" className={`${INPUT} font-mono text-sm`} />
            {err("resolution") ? <p className="text-error mt-1 text-sm">{err("resolution")}</p> : null}
          </div>
          <div>
            <label htmlFor="if-scale" className="kicker text-pale-muted">
              {f.uiScale} {optional}
            </label>
            <input id="if-scale" name="uiScale" value={fields.uiScale} onChange={set("uiScale")} placeholder="0.71" inputMode="decimal" autoComplete="off" className={`${INPUT} font-mono text-sm`} />
            {err("uiScale") ? <p className="text-error mt-1 text-sm">{err("uiScale")}</p> : null}
          </div>
        </div>
        <p className="text-xs text-pale-muted">{f.uiScaleHint}</p>
        <div>
          <label htmlFor="if-addons" className="kicker text-pale-muted">
            {f.addons} {optional} {counter(fields.addons, INTERFACE_LIMITS.addons.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.addonsHint}</p>
          <textarea id="if-addons" name="addons" value={fields.addons} onChange={set("addons")} rows={3} maxLength={INTERFACE_LIMITS.addons.max} className={INPUT} />
          {err("addons") ? <p className="text-error mt-1 text-sm">{err("addons")}</p> : null}
        </div>
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.aboutSection}</h2>
        <div className="sm:max-w-xs">
          <label htmlFor="if-lang" className="kicker text-pale-muted">
            {f.descriptionLang}
          </label>
          <select id="if-lang" name="descriptionLang" value={fields.descriptionLang} onChange={set("descriptionLang")} className={INPUT}>
            {(Object.keys(languageNames) as Locale[]).map((l) => (
              <option key={l} value={l}>
                {languageNames[l]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="if-description" className="kicker text-pale-muted">
            {f.description} {counter(fields.description, INTERFACE_LIMITS.description.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.descriptionHint}</p>
          <textarea id="if-description" name="description" value={fields.description} onChange={set("description")} rows={7} maxLength={INTERFACE_LIMITS.description.max} required className={INPUT} />
          {err("description") ? <p className="text-error mt-1 text-sm">{err("description")}</p> : null}
          <p className="mt-1 text-xs text-pale-muted">
            <strong className="text-chalk">{fill(f.words, { n: interfaceWords(fields.description) })}</strong>
            {interfaceWords(fields.description) < INTERFACE_MIN_WORDS ? ` · ${INTERFACE_MIN_WORDS}+` : ""}
          </p>
        </div>
      </section>

      {generalError ? <p className="alert-bad">{generalError}</p> : null}
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={pending || uploading > 0}>
          {pending ? f.submitting : initial ? f.save : f.submit}
        </button>
      </div>
    </form>
  );
}

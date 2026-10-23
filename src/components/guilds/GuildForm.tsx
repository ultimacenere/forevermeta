"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { FACTIONS, GUILD_CLASSES, GUILD_FOCUS, GUILD_LANGUAGES, GUILD_LIMITS, GUILD_MIN_WORDS, GUILD_REGIONS, GUILD_ROLES, GUILD_SIZES, RAID_DAYS, RULESETS, guildWords, type CommunityGuild } from "@/lib/community/guilds";
import { publishGuild, updateGuild, type GuildActionState } from "@/lib/community/guildActions";
import { fill } from "@/lib/builderLabels";
import type { GuildLabels } from "@/lib/guildLabels";
import { trackEvent } from "@/lib/analytics";
import type { Locale } from "@/lib/i18n";

export type GuildFormProps = {
  locale: Locale;
  labels: GuildLabels;
  languageNames: Record<Locale, string>;
  /** annuncio da modificare (modo "edit"); senza, se ne pubblica uno nuovo */
  initial?: CommunityGuild;
};

const EMPTY: GuildActionState = {};
const INPUT = "mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-chalk";

/** Gruppo di caselle con lo stesso `name` (la Server Action le legge con getAll); con `max` le altre si spengono al tetto. */
function Checks<T extends string>({ name, options, labels, value, onChange, max }: { name: string; options: readonly T[]; labels: Record<T, string>; value: T[]; onChange: (next: T[]) => void; max?: number }) {
  const full = max !== undefined && value.length >= max;
  return (
    <div className="gl-checks" role="group">
      {options.map((o) => {
        const checked = value.includes(o);
        return (
          <label key={o} className={`gl-check${checked ? " is-on" : ""}${full && !checked ? " is-off" : ""}`}>
            <input type="checkbox" name={name} value={o} checked={checked} disabled={full && !checked} onChange={(e) => onChange(e.target.checked ? [...value, o] : value.filter((x) => x !== o))} />
            <span>{labels[o]}</span>
          </label>
        );
      })}
    </div>
  );
}

/**
 * Modulo di pubblicazione e di modifica di un annuncio di gilda: i dati della gilda (nome, regione, ruleset, fazione,
 * dimensione: Forever non ha reami), chi cercate (lingue, obiettivi, ruoli, classi, giorni e orari), il testo nella
 * lingua dell'autore e i contatti (almeno uno). I limiti sono quelli di guilds.ts; la Server Action li ricontrolla.
 */
export function GuildForm({ locale, labels, languageNames, initial }: GuildFormProps) {
  const router = useRouter();
  const f = labels.form;
  const [state, action, pending] = useActionState(initial ? updateGuild : publishGuild, EMPTY);
  const [fields, setFields] = useState({
    name: initial?.name ?? "",
    region: initial?.region ?? (locale === "en" ? "" : "eu"),
    ruleset: initial?.ruleset ?? "normal",
    faction: initial?.faction ?? "",
    size: initial?.size ?? "forming",
    schedule: initial?.schedule ?? "",
    descriptionLang: initial?.description_lang ?? locale,
    description: initial?.description ?? "",
    discordUrl: initial?.discord_url ?? "",
    websiteUrl: initial?.website_url ?? "",
    contact: initial?.contact ?? "",
  });
  const [languages, setLanguages] = useState(initial?.languages ?? (locale === "en" ? [] : [locale]));
  const [focus, setFocus] = useState(initial?.focus ?? []);
  const [roles, setRoles] = useState(initial?.roles ?? []);
  const [classes, setClasses] = useState(initial?.classes ?? []);
  const [raidDays, setRaidDays] = useState(initial?.raid_days ?? []);

  useEffect(() => {
    if (state.ok && state.href) {
      if (!initial) trackEvent("guild_published", { region: fields.region, faction: fields.faction, lang: languages[0] ?? "" });
      router.push(state.href);
    }
  }, [state, router, initial, fields.region, fields.faction, languages]);

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setFields((x) => ({ ...x, [k]: e.target.value }));
  const err = (field: string) => (state.error && state.field === field ? (f.errors[state.error as keyof typeof f.errors] ?? f.errors.invalid) : null);
  const generalError = state.error && !state.field ? (f.errors[state.error as keyof typeof f.errors] ?? f.errors.db) : null;
  const counter = (value: string, max: number) => <span className="float-right font-mono text-xs text-pale-muted">{fill(f.chars, { n: value.length, max })}</span>;
  const words = guildWords(fields.description);
  const optional = <span className="normal-case tracking-normal">({f.optional})</span>;

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="locale" value={locale} />
      {initial ? <input type="hidden" name="id" value={initial.id} /> : null}

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.guild}</h2>
        <div>
          <label htmlFor="gf-name" className="kicker text-pale-muted">
            {f.name} {counter(fields.name, GUILD_LIMITS.name.max)}
          </label>
          <input id="gf-name" name="name" value={fields.name} onChange={set("name")} maxLength={GUILD_LIMITS.name.max} placeholder={f.namePlaceholder} required className={INPUT} />
          {err("name") ? <p className="text-error mt-1 text-sm">{err("name")}</p> : null}
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="gf-region" className="kicker text-pale-muted">
              {f.region}
            </label>
            <select id="gf-region" name="region" value={fields.region} onChange={set("region")} required className={INPUT}>
              <option value="">—</option>
              {GUILD_REGIONS.map((r) => (
                <option key={r} value={r}>
                  {labels.regions[r]}
                </option>
              ))}
            </select>
            {err("region") ? <p className="text-error mt-1 text-sm">{err("region")}</p> : null}
          </div>
          <div>
            <label htmlFor="gf-ruleset" className="kicker text-pale-muted">
              {f.ruleset}
            </label>
            <select id="gf-ruleset" name="ruleset" value={fields.ruleset} onChange={set("ruleset")} className={INPUT}>
              {RULESETS.map((t) => (
                <option key={t} value={t}>
                  {labels.rulesets[t]}
                </option>
              ))}
            </select>
            {err("ruleset") ? <p className="text-error mt-1 text-sm">{err("ruleset")}</p> : null}
          </div>
          <div>
            <label htmlFor="gf-faction" className="kicker text-pale-muted">
              {f.faction}
            </label>
            <select id="gf-faction" name="faction" value={fields.faction} onChange={set("faction")} required className={INPUT}>
              <option value="">—</option>
              {FACTIONS.map((x) => (
                <option key={x} value={x}>
                  {labels.factions[x]}
                </option>
              ))}
            </select>
            {err("faction") ? <p className="text-error mt-1 text-sm">{err("faction")}</p> : null}
          </div>
          <div>
            <label htmlFor="gf-size" className="kicker text-pale-muted">
              {f.size}
            </label>
            <select id="gf-size" name="size" value={fields.size} onChange={set("size")} className={INPUT}>
              {GUILD_SIZES.map((s) => (
                <option key={s} value={s}>
                  {labels.sizes[s]}
                </option>
              ))}
            </select>
          </div>
        </div>
        <p className="text-xs text-pale-muted">{f.rulesetHint}</p>
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.who}</h2>
        <div>
          <p className="kicker text-pale-muted">
            {f.languages} <span className="normal-case tracking-normal">· {f.languagesHint}</span>
          </p>
          <Checks name="languages" options={GUILD_LANGUAGES} labels={labels.languages} value={languages} onChange={setLanguages} max={GUILD_LIMITS.languages.max} />
          {err("languages") ? <p className="text-error mt-1 text-sm">{err("languages")}</p> : null}
        </div>
        <div>
          <p className="kicker text-pale-muted">
            {f.focus} <span className="normal-case tracking-normal">· {f.focusHint}</span>
          </p>
          <Checks name="focus" options={GUILD_FOCUS} labels={labels.focus} value={focus} onChange={setFocus} max={GUILD_LIMITS.focus.max} />
          {err("focus") ? <p className="text-error mt-1 text-sm">{err("focus")}</p> : null}
        </div>
        <div>
          <p className="kicker text-pale-muted">
            {f.roles} {optional} <span className="normal-case tracking-normal">· {f.rolesHint}</span>
          </p>
          <Checks name="roles" options={GUILD_ROLES} labels={labels.roles} value={roles} onChange={setRoles} />
        </div>
        <div>
          <p className="kicker text-pale-muted">
            {f.classes} {optional} <span className="normal-case tracking-normal">· {f.classesHint}</span>
          </p>
          <Checks name="classes" options={GUILD_CLASSES} labels={labels.classes} value={classes} onChange={setClasses} />
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="kicker text-pale-muted">
              {f.raidDays} {optional}
            </p>
            <Checks name="raidDays" options={RAID_DAYS} labels={labels.days} value={raidDays} onChange={setRaidDays} />
          </div>
          <div>
            <label htmlFor="gf-schedule" className="kicker text-pale-muted">
              {f.schedule} {optional} {counter(fields.schedule, GUILD_LIMITS.schedule.max)}
            </label>
            <input id="gf-schedule" name="schedule" value={fields.schedule} onChange={set("schedule")} maxLength={GUILD_LIMITS.schedule.max} placeholder={f.schedulePlaceholder} className={INPUT} />
            {err("schedule") ? <p className="text-error mt-1 text-sm">{err("schedule")}</p> : null}
          </div>
        </div>
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.about}</h2>
        <div className="sm:max-w-xs">
          <label htmlFor="gf-lang" className="kicker text-pale-muted">
            {f.descriptionLang}
          </label>
          <select id="gf-lang" name="descriptionLang" value={fields.descriptionLang} onChange={set("descriptionLang")} className={INPUT}>
            {(Object.keys(languageNames) as Locale[]).map((l) => (
              <option key={l} value={l}>
                {languageNames[l]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="gf-description" className="kicker text-pale-muted">
            {f.description} {counter(fields.description, GUILD_LIMITS.description.max)}
          </label>
          <p className="text-xs text-pale-muted">{f.descriptionHint}</p>
          <textarea id="gf-description" name="description" value={fields.description} onChange={set("description")} rows={8} maxLength={GUILD_LIMITS.description.max} required className={INPUT} />
          {err("description") ? <p className="text-error mt-1 text-sm">{err("description")}</p> : null}
          <p className="mt-1 text-xs text-pale-muted">
            <strong className="text-chalk">{fill(f.words, { n: words })}</strong>
            {words < GUILD_MIN_WORDS ? ` · ${GUILD_MIN_WORDS}+` : ""}
          </p>
        </div>
      </section>

      <section className="card-night space-y-4 p-5">
        <h2 className="t-panel">{f.contacts}</h2>
        <p className="text-xs text-pale-muted">{f.contactsHint}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="gf-discord" className="kicker text-pale-muted">
              {f.discordUrl}
            </label>
            <input id="gf-discord" name="discordUrl" value={fields.discordUrl} onChange={set("discordUrl")} placeholder={f.discordPlaceholder} inputMode="url" spellCheck={false} autoComplete="off" className={`${INPUT} font-mono text-sm`} />
            {err("discordUrl") ? <p className="text-error mt-1 text-sm">{err("discordUrl")}</p> : null}
          </div>
          <div>
            <label htmlFor="gf-website" className="kicker text-pale-muted">
              {f.websiteUrl} {optional}
            </label>
            <input id="gf-website" name="websiteUrl" value={fields.websiteUrl} onChange={set("websiteUrl")} placeholder={f.websitePlaceholder} inputMode="url" spellCheck={false} autoComplete="off" maxLength={GUILD_LIMITS.website.max} className={`${INPUT} font-mono text-sm`} />
            {err("websiteUrl") ? <p className="text-error mt-1 text-sm">{err("websiteUrl")}</p> : null}
          </div>
        </div>
        <div>
          <label htmlFor="gf-contact" className="kicker text-pale-muted">
            {f.contact} {optional} {counter(fields.contact, GUILD_LIMITS.contact.max)}
          </label>
          <input id="gf-contact" name="contact" value={fields.contact} onChange={set("contact")} maxLength={GUILD_LIMITS.contact.max} placeholder={f.contactPlaceholder} className={INPUT} />
          {err("contact") ? <p className="text-error mt-1 text-sm">{err("contact")}</p> : null}
        </div>
      </section>

      {generalError ? <p className="alert-bad">{generalError}</p> : null}
      <div className="flex flex-wrap items-center gap-3">
        <button type="submit" className="btn btn-primary" disabled={pending}>
          {pending ? f.submitting : initial ? f.save : f.submit}
        </button>
      </div>
    </form>
  );
}

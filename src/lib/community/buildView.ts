import { href, type Locale } from "../i18n";
import { classes, className } from "../data/classes";
import { raceName, races } from "../data/races";
import type { ClassId, RaceId } from "../builder/types";
import type { CommunityBuild } from "./builds";
import type { ClassMeta } from "@/components/builds/BuildList";

/** Dati delle classi e delle razze nella lingua della pagina, per le pagine delle build (server). */
export function classMetas(locale: Locale): ClassMeta[] {
  return classes.map((c) => ({ id: c.id, name: className(c, locale), color: c.color, ink: c.ink, icon: c.icon }));
}

export function classNameMap(locale: Locale): Record<ClassId, string> {
  return Object.fromEntries(classes.map((c) => [c.id, className(c, locale)])) as Record<ClassId, string>;
}

export function raceNameMap(locale: Locale): Record<RaceId, string> {
  return Object.fromEntries(races.map((r) => [r.id, raceName(r, locale)])) as Record<RaceId, string>;
}

/** Nome di chi ha pubblicato, per le schede e la firma. */
export function authorOf(b: Pick<CommunityBuild, "profile">, fallback: string): string {
  return b.profile?.display_name || b.profile?.username || fallback;
}

/** Link al builder con la build dentro (`/builder/<classe>#<codice>`). */
export function builderHref(locale: Locale, b: Pick<CommunityBuild, "class_id" | "code">): string {
  return `${href(locale, `/builder/${b.class_id}`)}#${b.code}`;
}

/** Paragrafi da un testo semplice: righe vuote separano i paragrafi, gli a capo singoli restano. */
export function paragraphsOf(text: string): string[][] {
  return text
    .split(/\n{2,}/)
    .map((p) => p.split("\n").map((l) => l.trim()).filter(Boolean))
    .filter((p) => p.length);
}

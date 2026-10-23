import { href, siteUrl, type Locale } from "../i18n";
import { classes, className, getClass, type ClassInfo } from "../data/classes";
import { raceName, races } from "../data/races";
import type { ClassId } from "./types";
import type { RaceOption } from "@/components/builder/RacePicker";

/**
 * Quello che le pagine del builder calcolano sul server e passano al componente client: le razze come opzioni (con i
 * nomi nella lingua e le razziali), gli indirizzi delle classi, le fonti. Funzioni pure, senza React.
 */

export const BUILDER_PATH = "/builder";

export function classPath(classId: ClassId): string {
  return `${BUILDER_PATH}/${classId}`;
}

export function classHrefs(locale: Locale): Record<ClassId, string> {
  return Object.fromEntries(classes.map((c) => [c.id, href(locale, classPath(c.id))])) as Record<ClassId, string>;
}

export function classPageUrl(locale: Locale, classId: ClassId): string {
  return `${siteUrl}${href(locale, classPath(classId))}`;
}

/** Le dieci razze come le vede il builder di una classe: nome nella lingua, se la classe la può fare, razziali. */
export function raceOptions(locale: Locale, classId: ClassId): RaceOption[] {
  return races.map((r) => ({
    id: r.id,
    name: raceName(r, locale),
    faction: r.faction,
    allowed: r.classes.includes(classId),
    isNew: r.newClasses?.includes(classId) ?? false,
    paid: r.paid ?? false,
    icon: r.icon,
    racials: r.racials.map((x) => ({ name: x.name, kind: x.kind, text: x.text[locale] })),
  }));
}

/** "Arms, Fury and Protection" nella lingua della pagina, per description e testi. */
export function treeList(c: ClassInfo, and: string): string {
  const names = c.trees.map((t) => t.name);
  return `${names.slice(0, -1).join(", ")} ${and} ${names[names.length - 1]}`;
}

export function classLabel(classId: ClassId, locale: Locale): string {
  return className(getClass(classId), locale);
}

/** Le fonti ufficiali comuni a tutte le pagine del builder (razze, combinazioni, struttura dei talenti). */
export const builderSources = [
  { label: "Create the Hero You Want to Be (Blizzard News, 22/09/2026)", url: "https://news.blizzard.com/en-us/article/24304075" },
  { label: "WoW: Forever Meet the New Skyborne (Blizzard News, 22/09/2026)", url: "https://news.blizzard.com/en-us/article/24302071" },
  { label: "Class Deep Dives: Hunter and Druid (Blizzard News, 30/09/2026)", url: "https://news.blizzard.com/en-us/article/24301515" },
  { label: "Class Deep Dives: Priest and Warrior (Blizzard News, 30/09/2026)", url: "https://news.blizzard.com/en-us/article/24301514" },
  { label: "Class Deep Dives: Mage and Shaman (Blizzard News, 07/10/2026)", url: "https://news.blizzard.com/en-us/article/24302097" },
  { label: "Class Deep Dives: Rogue and Warlock (Blizzard News, 07/10/2026)", url: "https://news.blizzard.com/en-us/article/24310968" },
] as const;

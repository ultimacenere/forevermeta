import type { Locale } from "../i18n";

type L10n = Record<Locale, string>;

/**
 * Una data ufficiale di Forever per /calendar e la striscia in cima alle pagine. Solo date con una fonte ufficiale
 * Blizzard (`source`). `start` è il giorno ISO; `startAt` l'istante esatto con il fuso, quando la fonte dà l'ora (la
 * pagina lo mostra anche nel fuso di chi guarda).
 */
export type CalendarEvent = {
  slug: string;
  start: string;
  end?: string;
  startAt?: string;
  title: L10n;
  text: L10n;
  source: { label: string; url: string };
};

export const events: CalendarEvent[] = [];

/** Le date da oggi in poi (un evento in corso conta fino al suo ultimo giorno), dalla più vicina. */
export function upcomingEvents(today: string = new Date().toISOString().slice(0, 10)): CalendarEvent[] {
  return events.filter((e) => (e.end ?? e.start) >= today).sort((a, b) => a.start.localeCompare(b.start));
}

/** Le date già passate, dalla più recente. */
export function pastEvents(today: string = new Date().toISOString().slice(0, 10)): CalendarEvent[] {
  return events.filter((e) => (e.end ?? e.start) < today).sort((a, b) => b.start.localeCompare(a.start));
}

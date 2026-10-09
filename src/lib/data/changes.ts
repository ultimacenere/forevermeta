import type { Locale } from "../i18n";

type L10n = Record<Locale, string>;

/** Area toccata da una modifica: una classe di Forever o un sistema. */
export type ChangeArea = string;

/**
 * Un aggiornamento ufficiale della beta (note di sviluppo, hotfix): data, build se dichiarata, link al post
 * ufficiale e le modifiche, ognuna con l'area (classe o sistema). I nomi di incantesimi e talenti restano in inglese.
 */
export type ChangeUpdate = {
  id: string;
  date: string;
  build?: string;
  title: L10n;
  url: string;
  items: { area: ChangeArea; text: L10n }[];
};

export const changeUpdates: ChangeUpdate[] = [];

/** Etichette delle aree, nelle tre lingue. */
export const changeAreas: Record<ChangeArea, L10n> = {};

/** Gli aggiornamenti dal più recente. */
export const sortedChanges = [...changeUpdates].sort((a, b) => b.date.localeCompare(a.date));

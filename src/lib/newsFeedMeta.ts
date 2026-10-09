import type { Locale } from "./i18n";

/** Percorso ed etichette dei feed RSS delle news, senza i dati (li legge anche il layout di ogni pagina). */

/** Percorso del feed di una lingua: /en/news/feed.xml. */
export function newsFeedPath(locale: Locale): string {
  return `/${locale}/news/feed.xml`;
}

/** Titolo e descrizione del canale: dicono sempre che il sito non è affiliato a Blizzard Entertainment. */
export const newsFeedLabels: Record<Locale, { title: string; description: string }> = {
  en: {
    title: "WoW Forever news · ForeverMeta",
    description: "World of Warcraft: Forever news from ForeverMeta, from official Blizzard sources. Unofficial fan site, not affiliated with Blizzard Entertainment.",
  },
  it: {
    title: "News di WoW Forever · ForeverMeta",
    description: "Le news di ForeverMeta su World of Warcraft: Forever, dalle fonti ufficiali di Blizzard. Sito fan non ufficiale, non affiliato a Blizzard Entertainment.",
  },
  es: {
    title: "Noticias de WoW Forever · ForeverMeta",
    description: "Las noticias de ForeverMeta sobre World of Warcraft: Forever, de fuentes oficiales de Blizzard. Sitio fan no oficial, no afiliado a Blizzard Entertainment.",
  },
};

import type { Locale } from "../i18n";
import type { GuideSlug } from "../content/guides";
import { newsItems } from "./newsItems";

type L10n = Record<Locale, string>;
type Highlight = { label: string; text?: string; anchor: string };
type Qa = { q: string; a: string };

/**
 * Una news è un articolo con una pagina propria, `/news/<slug>`, firmata (regola ereditata da OriginsMeta): titolo,
 * titolo per la SERP, descrizione, riassunto, testo a sezioni, "In breve" ancorato, FAQ facoltative. Le news si
 * scrivono nelle tre lingue del sito (en, it, es) in newsItems.ts.
 */
export type NewsItem = {
  slug: string;
  /** data di pubblicazione (ISO): la data dei fatti raccontati */
  date: string;
  /** data dell'ultima revisione (ISO), con un paragrafo "Aggiornamento del …" nel testo; se manca vale `date` */
  updated?: string;
  /** titolo dell'articolo (H1 e scheda): entro 110 caratteri */
  title: L10n;
  /** titolo per la SERP: con "WoW Forever" dentro entro 60 caratteri, senza entro 46 (`pageTitle` aggiunge il resto) */
  metaTitle: L10n;
  /** riassunto di 2-3 frasi: scheda in /news e in home, attacco della pagina */
  summary: L10n;
  /** meta description: 120-158 caratteri */
  description: L10n;
  /** testo completo in Markdown a sezioni `##`; link interni sempre con il prefisso della lingua */
  body?: L10n;
  /** "In breve": ogni punto porta a un'ancora del `body` (`## Titolo {#ancora}`) */
  highlights?: Record<Locale, Highlight[]>;
  /** domande e risposte in fondo, anche come FAQPage */
  faq?: Record<Locale, Qa[]>;
  /** slug dell'autore (authorsCore.ts); se manca firma Pierluigi Cella */
  author?: string;
  /**
   * `blizzard`: news da una fonte ufficiale Blizzard (`url` = il post ufficiale, mostrato come "Fonte");
   * `site`: novità di ForeverMeta raccontate da noi (`url` facoltativo = la pagina del sito di cui parla).
   */
  source: "blizzard" | "site";
  url?: string;
  /** copertina (sempre presente, diversa per ogni news): un file in /public/media oppure /covers/<slug>.png con `cover` */
  image: string;
  /** copertina tipografica generata dal sito (src/app/covers), quando non c'è un'immagine */
  cover?: { word: string; tone: "gold" | "sky" };
  /** testo alternativo della copertina, nelle tre lingue */
  imageAlt: L10n;
  /** guide del sito collegate */
  guides?: GuideSlug[];
};

export const news: NewsItem[] = newsItems;

export const sortedNews = [...news].sort((a, b) => b.date.localeCompare(a.date));

export function getNews(slug: string): NewsItem | undefined {
  return news.find((item) => item.slug === slug);
}

/** Percorso della pagina dell'articolo, senza prefisso lingua (lo aggiunge `href`). */
export function newsPath(item: NewsItem): string {
  return `/news/${item.slug}`;
}

/** Minuti di lettura (riassunto + testo), a 200 parole al minuto, mai meno di uno. */
export function newsReadTime(item: NewsItem, locale: Locale): number {
  const words = `${item.summary[locale]} ${item.body?.[locale] ?? ""}`.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

/** Date di una news: su ForeverMeta le tre lingue nascono insieme, quindi pubblicazione e modifica valgono per tutte. */
export function newsDates(item: NewsItem): { published: string; modified: string } {
  return { published: item.date, modified: item.updated ?? item.date };
}

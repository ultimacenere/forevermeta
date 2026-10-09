import type { Locale } from "../i18n";
import { getGuides, type Guide } from "../content/guides";
import { sortedNews, type NewsItem } from "./news";
import { authors, getAuthor, type Author } from "./authorsCore";

export { authors, founders, getAuthor, nicknameOf, type Author } from "./authorsCore";

/** Chi firma una guida: unico punto di verità per firma, dati strutturati e pagina autore. */
export function authorOfGuide(guide?: Guide): Author {
  return getAuthor(guide?.author ?? "pierluigi-cella") ?? authors[0];
}

/** Chi firma una news: come per le guide. */
export function authorOfNews(item: NewsItem): Author {
  return getAuthor(item.author ?? "pierluigi-cella") ?? authors[0];
}

/** Le news firmate da un autore, dalla più recente. */
export function newsByAuthor(slug: string): NewsItem[] {
  return sortedNews.filter((item) => authorOfNews(item).slug === slug);
}

/** Le guide firmate da un autore, nell'ordine dell'elenco delle guide. */
export function guidesByAuthor(locale: Locale, slug: string): Guide[] {
  return getGuides(locale).filter((g) => authorOfGuide(g).slug === slug);
}

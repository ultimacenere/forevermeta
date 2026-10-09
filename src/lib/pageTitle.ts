/** Titoli delle pagine: funzioni pure (senza import di Next), usate da page.ts e dai test. */

/** Oltre i ~60 caratteri Google taglia il titolo in SERP: è il limite entro cui deve stare il titolo finale. */
export const TITLE_MAX = 60;

const SEP = " · ";

/**
 * Titolo finale della pagina, unico punto di verità (stessa regola del motore di OriginsMeta):
 *  1. se il titolo contiene già "WoW Forever" o "ForeverMeta", resta com'è;
 *  2. altrimenti riceve " · WoW Forever", la parola chiave con cui il sito vuole essere trovato;
 *  3. poi, se ancora non contiene "ForeverMeta" e il risultato sta entro TITLE_MAX caratteri, riceve anche
 *     " · ForeverMeta"; se non ci sta, il marchio si sacrifica prima della parola chiave.
 * Quindi un titolo con "WoW Forever" dentro deve stare entro 60 caratteri, uno senza entro 46.
 */
export function pageTitle(title: string): string {
  const trimmed = title.trim();
  const withKeyword = /wow forever|forevermeta/i.test(trimmed) ? trimmed : `${trimmed}${SEP}WoW Forever`;
  if (/forevermeta/i.test(withKeyword)) return withKeyword;
  const withBrand = `${withKeyword}${SEP}ForeverMeta`;
  return withBrand.length <= TITLE_MAX ? withBrand : withKeyword;
}

/**
 * Titolo con una coda sacrificabile ("Titolo · News"): la coda sparisce prima del titolo, e se non basta il titolo si
 * accorcia all'ultima parola intera con l'ellissi.
 */
export function pageTitleWith(name: string, suffix: string): string {
  const full = `${name.trim()}${SEP}${suffix}`;
  if (pageTitle(full).length <= TITLE_MAX) return full;
  if (pageTitle(name.trim()).length <= TITLE_MAX) return name.trim();
  const room = TITLE_MAX - `${SEP}WoW Forever`.length - 1;
  const cut = name.trim().slice(0, room);
  return `${cut.slice(0, cut.lastIndexOf(" ") > 0 ? cut.lastIndexOf(" ") : cut.length).trim()}…`;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { alternatesFor, getDictionary, isLocale, ogLocale, siteUrl, type Dictionary, type Locale } from "./i18n";

export type LocaleParams = Promise<{ locale: string }>;

/**
 * Immagine social di riserva quando la pagina non ne ha una propria: 1200×630, generata dal sito con il logo testuale
 * (rotta src/app/og.png/route.tsx), quindi nessuna grafica Blizzard.
 */
export const defaultOgImage = "/og.png";

const defaultOgSize = { width: 1200, height: 630 };

/** Testo alternativo di `defaultOgImage` (descrive l'immagine, non la pagina). */
export const defaultOgAlt: Record<Locale, string> = {
  en: "ForeverMeta logo with the infinity symbol in gold on a night blue background, with the words “World of Warcraft: Forever fan site”.",
  it: "Logo di ForeverMeta con il simbolo dell'infinito in oro su fondo blu notte, con la scritta “sito fan di World of Warcraft: Forever”.",
  es: "Logo de ForeverMeta con el símbolo del infinito en dorado sobre fondo azul noche, con el texto «sitio fan de World of Warcraft: Forever».",
};

/** Oltre i ~160 caratteri Google taglia lo snippet: teniamo un margine. */
export const DESCRIPTION_MAX = 158;

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

/**
 * Ripulisce un testo perché possa fare da meta description: collassa spazi e a capo, toglie il marcatore di elenco
 * iniziale e, se resta più lungo di `max`, taglia all'ultimo confine di parola con l'ellissi.
 */
export function cleanDescription(text: string, max: number = DESCRIPTION_MAX): string {
  const flat = text
    .replace(/\s+/g, " ")
    .replace(/^ ?(?:[-*•‣–—]|\d+[.)])\s+/, "")
    .trim();
  if (flat.length <= max) return flat;
  const cut = flat.slice(0, max - 1);
  const space = cut.lastIndexOf(" ");
  const head = space > (max - 1) * 0.6 ? cut.slice(0, space) : cut;
  return `${head.replace(/[\s,;:.!?…–—-]+$/, "")}…`;
}

export async function resolveLocale(params: LocaleParams): Promise<{ locale: Locale; dict: Dictionary }> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, dict: getDictionary(locale) };
}

export type PageMetaOptions = {
  type?: "website" | "article";
  published?: string;
  modified?: string;
  /** dimensioni reali dell'immagine social quando non è 1200×630 */
  imageSize?: { width: number; height: number };
  /** testo alternativo dell'immagine social: descrive l'immagine, non la pagina */
  imageAlt?: string;
  /** lingue in cui la pagina esiste davvero, quando non sono tutte */
  languages?: readonly Locale[];
  /** pagina da non indicizzare (resta navigabile e i link si seguono) */
  noindex?: boolean;
};

/**
 * Metadati di pagina: titolo finale da `pageTitle` come `title: { absolute }` (il template del layout non lo tocca),
 * descrizione normalizzata, canonical + hreflang, Open Graph e Twitter con immagine.
 */
export function pageMeta(locale: Locale, path: string, title: string, description: string, image?: string, opts: PageMetaOptions = {}): Metadata {
  const url = `${siteUrl}/${locale}${path}`;
  const fullTitle = pageTitle(title);
  const desc = cleanDescription(description);
  const img = image ?? defaultOgImage;
  const size = opts.imageSize ?? (img === defaultOgImage ? defaultOgSize : undefined);
  const alt = opts.imageAlt ?? (image ? title : defaultOgAlt[locale]);
  const ogImage = { url: img, alt, ...size };
  const base = { title: fullTitle, description: desc, url, locale: ogLocale[locale], siteName: "ForeverMeta", images: [ogImage] };
  return {
    title: { absolute: fullTitle },
    description: desc,
    alternates: { canonical: url, ...alternatesFor(path, opts.languages) },
    ...(opts.noindex ? { robots: { index: false, follow: true } } : {}),
    openGraph: opts.type === "article" ? { ...base, type: "article", publishedTime: opts.published, modifiedTime: opts.modified } : { ...base, type: "website" },
    twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [ogImage] },
  };
}

/** Il dizionario di una lingua senza passare dal layout (per le rotte fuori da [locale]). */
export function dictionaryOf(locale: string): Dictionary | undefined {
  return isLocale(locale) ? getDictionary(locale) : undefined;
}

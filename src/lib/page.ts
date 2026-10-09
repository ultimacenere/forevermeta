import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { media } from "./media";
import { alternatesFor, getDictionary, isLocale, ogLocale, siteUrl, type Dictionary, type Locale } from "./i18n";

export type LocaleParams = Promise<{ locale: string }>;

/**
 * Immagine social di riserva quando la pagina non ne ha una propria: l'illustrazione dell'Alleanza dal pacco ufficiale
 * Blizzard (src/lib/media.ts), 1200×630.
 */
export const defaultOgImage = media.og.src;

const defaultOgSize = { width: media.og.width, height: media.og.height };

/** Testo alternativo di `defaultOgImage` (descrive l'immagine, non la pagina). */
export const defaultOgAlt: Record<Locale, string> = media.og.alt;

/** Oltre i ~160 caratteri Google taglia lo snippet: teniamo un margine. */
export const DESCRIPTION_MAX = 158;

export { TITLE_MAX, pageTitle, pageTitleWith } from "./pageTitle";
import { pageTitle } from "./pageTitle";

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

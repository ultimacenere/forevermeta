import type { Locale } from "../i18n";
import { guideEntries } from "./guideEntries";
import { media, type MediaKey } from "../media";

export type GuideCategory = "start" | "systems" | "world" | "dates";

/** Testi di una guida in una lingua. */
export type GuideCopy = {
  title: string;
  /** titolo per la SERP: con "WoW Forever" dentro entro 60 caratteri, senza entro 46 */
  metaTitle: string;
  /** riassunto: scheda nell'elenco e meta description (120-158 caratteri) */
  excerpt: string;
  /** testo in Markdown a sezioni `##`; link interni sempre con il prefisso della lingua */
  body: string;
  faq?: { q: string; a: string }[];
  imageAlt: string;
};

/** Una guida come è scritta in guideEntries.ts: i dati comuni e i testi delle tre lingue. */
export type GuideEntry = {
  slug: string;
  category: GuideCategory;
  /** prima pubblicazione (ISO), uguale in tutte le lingue */
  published: string;
  /** ultimo controllo sulle fonti (ISO) */
  updated: string;
  /** copertina tipografica (src/app/covers): un nome proprio del gioco, uguale in tutte le lingue, e il colore */
  cover: { word: string; tone: "gold" | "sky" };
  /** immagine del pacco ufficiale Blizzard (src/lib/media.ts): se c'è, prende il posto della copertina tipografica */
  media?: MediaKey;
  /** slug dell'autore (authorsCore.ts); se manca firma Pierluigi Cella */
  author?: string;
  /** fonti ufficiali usate dalla guida, mostrate in fondo */
  sources: { label: string; url: string }[];
  text: Record<Locale, GuideCopy>;
};

/** Una guida pronta per la pagina, in una lingua. */
export type Guide = Omit<GuideEntry, "text"> & GuideCopy & { readTime: number; image: string };

export const guideSlugs = guideEntries.map((g) => g.slug);
export type GuideSlug = string;

function inLocale(entry: GuideEntry, locale: Locale): Guide {
  const { text, ...rest } = entry;
  const copy = text[locale];
  const words = `${copy.excerpt} ${copy.body}`.split(/\s+/).filter(Boolean).length;
  const m = entry.media ? media[entry.media] : undefined;
  return {
    ...rest,
    ...copy,
    readTime: Math.max(1, Math.round(words / 200)),
    image: m ? m.src : `/covers/${entry.slug}.png`,
    imageAlt: m ? m.alt[locale] : copy.imageAlt,
  };
}

/** Tutte le guide in una lingua, dalla più recente per prima pubblicazione. */
export function getGuides(locale: Locale): Guide[] {
  return [...guideEntries].sort((a, b) => b.published.localeCompare(a.published)).map((g) => inLocale(g, locale));
}

export function getGuide(locale: Locale, slug: string): Guide | undefined {
  const entry = guideEntries.find((g) => g.slug === slug);
  return entry ? inLocale(entry, locale) : undefined;
}

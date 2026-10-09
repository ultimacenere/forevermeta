import { alternatesFor, href, locales, siteUrl, type Locale } from "./i18n";
import { sitemapIndexXml, urlsetXml, type IndexEntry, type UrlEntry } from "./seoXml";
import { sortedNews, newsPath } from "./data/news";
import { guideEntries } from "./content/guideEntries";

/**
 * Sitemap di ForeverMeta (stesso schema di OriginsMeta, ridotto): /sitemap.xml è l'indice di /sitemap-home.xml (le
 * home delle tre lingue) e di /<lingua>/sitemap-<sezione>.xml, ognuna dentro la cartella delle pagine che elenca.
 * `lastmod` è solo il giorno: la data dei contenuti (news, guide) o, per le pagine fisse, `PAGE_UPDATED`. Mai prima
 * della nascita del sito e mai nel futuro.
 */

/** Giorno in cui il sito è nato: nessuna pagina può dichiararsi cambiata prima. */
export const SITE_BORN = "2026-10-10";

/** Ultimo cambio del modello delle pagine fisse: da aggiornare nello stesso commit che cambia la pagina. */
export const PAGE_UPDATED: Record<string, string> = {
  "": "2026-10-10",
  "/news": "2026-10-10",
  "/guides": "2026-10-10",
  "/glossary": "2026-10-10",
  "/calendar": "2026-10-10",
  "/changes": "2026-10-10",
  "/faq": "2026-10-10",
  "/about": "2026-10-10",
  "/authors": "2026-10-10",
  "/authors/pierluigi-cella": "2026-10-10",
};

export const SITEMAP_SECTIONS = ["pages", "news", "guides"] as const;
export type SitemapSection = (typeof SITEMAP_SECTIONS)[number];

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

/** Il giorno più recente fra `days`, non prima della nascita del sito e non dopo oggi. */
function clampDay(days: Array<string | undefined>): string {
  const best = days.filter((d): d is string => Boolean(d)).map((d) => d.slice(0, 10)).sort().pop() ?? SITE_BORN;
  const t = today();
  if (best < SITE_BORN) return SITE_BORN;
  return best > t ? t : best;
}

type Page = { path: string; days: Array<string | undefined> };

function pagesOf(section: SitemapSection): Page[] {
  if (section === "news") return sortedNews.map((n) => ({ path: newsPath(n), days: [n.updated ?? n.date, PAGE_UPDATED["/news"]] }));
  if (section === "guides") return guideEntries.map((g) => ({ path: `/guides/${g.slug}`, days: [g.updated, PAGE_UPDATED["/guides"]] }));
  return Object.keys(PAGE_UPDATED)
    .filter((p) => p !== "")
    .map((p) => ({ path: p, days: [PAGE_UPDATED[p], ...(p === "/news" ? sortedNews.map((n) => n.updated ?? n.date) : []), ...(p === "/guides" ? guideEntries.map((g) => g.updated) : [])] }));
}

function entry(page: Page, locale: Locale): UrlEntry {
  return { url: `${siteUrl}${href(locale, page.path)}`, lastmod: clampDay(page.days), alternates: alternatesFor(page.path).languages };
}

/** Indirizzo della sitemap di una sezione in una lingua. */
export function sectionSitemapPath(section: SitemapSection, locale: Locale): string {
  return `/${locale}/sitemap-${section}.xml`;
}

const XML_HEADERS = { "content-type": "application/xml; charset=utf-8" };

export function sectionSitemapResponse(section: SitemapSection, locale: Locale): Response {
  return new Response(urlsetXml(pagesOf(section).map((p) => entry(p, locale))), { headers: XML_HEADERS });
}

export function homeSitemapResponse(): Response {
  const home: Page = { path: "", days: [PAGE_UPDATED[""], ...sortedNews.map((n) => n.updated ?? n.date), ...guideEntries.map((g) => g.updated)] };
  return new Response(urlsetXml(locales.map((l) => entry(home, l))), { headers: XML_HEADERS });
}

export function sitemapIndexResponse(): Response {
  const items: IndexEntry[] = [{ url: `${siteUrl}/sitemap-home.xml`, lastmod: clampDay([PAGE_UPDATED[""], ...sortedNews.map((n) => n.updated ?? n.date)]) }];
  for (const l of locales) {
    for (const s of SITEMAP_SECTIONS) {
      const pages = pagesOf(s);
      if (!pages.length) continue;
      items.push({ url: `${siteUrl}${sectionSitemapPath(s, l)}`, lastmod: clampDay(pages.flatMap((p) => p.days)) });
    }
  }
  return new Response(sitemapIndexXml(items), { headers: XML_HEADERS });
}

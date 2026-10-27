import { alternatesFor, href, locales, siteUrl, type Locale } from "./i18n";
import { sitemapIndexXml, urlsetXml, type IndexEntry, type UrlEntry } from "./seoXml";
import { sortedNews, newsPath } from "./data/news";
import { guideEntries } from "./content/guideEntries";
import { classIds } from "./data/classes";

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
  // il builder (22/10/2026): la pagina delle classi e una pagina per classe, con i suoi tre alberi
  "/builder": "2026-10-22",
  ...Object.fromEntries(classIds.map((id) => [`/builder/${id}`, "2026-10-22"])),
  // le build pubblicate (23/10/2026): l'elenco qui, le schede in /<lingua>/sitemap-builds.xml
  "/builds": "2026-10-23",
  // la bacheca delle gilde (23/10/2026): l'elenco qui, gli annunci in /<lingua>/sitemap-guilds.xml
  "/guilds": "2026-10-23",
  // le interfacce condivise (24/10/2026): l'elenco qui, le schede in /<lingua>/sitemap-interfaces.xml
  "/interfaces": "2026-10-24",
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
  // le build pubblicate: una sitemap per lingua, rigenerata dalle Server Action (vuota finché non ce ne sono)
  for (const l of locales) items.push({ url: `${siteUrl}${buildsSitemapPath(l)}`, lastmod: clampDay([PAGE_UPDATED["/builds"]]) });
  // gli annunci di gilda (23/10/2026): stessa cosa
  for (const l of locales) items.push({ url: `${siteUrl}${guildsSitemapPath(l)}`, lastmod: clampDay([PAGE_UPDATED["/guilds"]]) });
  // le interfacce condivise (24/10/2026): stessa cosa
  for (const l of locales) items.push({ url: `${siteUrl}${interfacesSitemapPath(l)}`, lastmod: clampDay([PAGE_UPDATED["/interfaces"]]) });
  return new Response(sitemapIndexXml(items), { headers: XML_HEADERS });
}

/**
 * Sitemap della bacheca delle gilde (23/10/2026), una per lingua: ogni annuncio compare solo nella sitemap della lingua
 * della sua descrizione, da `GUILD_MIN_WORDS` parole e se non è scaduto (le letture lasciano già fuori gli scaduti).
 * `lastmod` dal giorno dell'ultimo aggiornamento o rinnovo.
 */
export async function guildsSitemapResponse(locale: Locale): Promise<Response> {
  const { sitemapGuilds } = await import("./community/guildQueries");
  const { GUILD_MIN_WORDS, guildWords } = await import("./community/guilds");
  const all = await sitemapGuilds();
  const entries: UrlEntry[] = all
    .filter((g) => g.lang === locale && guildWords(g.description) >= GUILD_MIN_WORDS)
    .map((g) => ({ url: `${siteUrl}${href(locale, `/guilds/${g.slug}`)}`, lastmod: clampDay([g.updated, g.refreshed, PAGE_UPDATED["/guilds"]]), alternates: alternatesFor(`/guilds/${g.slug}`, [locale]).languages }));
  return new Response(urlsetXml(entries), { headers: XML_HEADERS });
}

/** Indirizzo della sitemap delle gilde di una lingua, per l'indice. */
export function guildsSitemapPath(locale: Locale): string {
  return `/${locale}/sitemap-guilds.xml`;
}

/**
 * Sitemap delle interfacce condivise (24/10/2026), una per lingua: ogni scheda compare solo nella sitemap della lingua
 * della sua descrizione e da `INTERFACE_MIN_WORDS` parole. `lastmod` dal giorno dell'ultimo aggiornamento.
 */
export async function interfacesSitemapResponse(locale: Locale): Promise<Response> {
  const { sitemapInterfaces } = await import("./community/interfaceQueries");
  const { INTERFACE_MIN_WORDS, interfaceWords } = await import("./community/interfaces");
  const all = await sitemapInterfaces();
  const entries: UrlEntry[] = all
    .filter((i) => i.lang === locale && interfaceWords(i.description) >= INTERFACE_MIN_WORDS)
    .map((i) => ({ url: `${siteUrl}${href(locale, `/interfaces/${i.slug}`)}`, lastmod: clampDay([i.updated, PAGE_UPDATED["/interfaces"]]), alternates: alternatesFor(`/interfaces/${i.slug}`, [locale]).languages }));
  return new Response(urlsetXml(entries), { headers: XML_HEADERS });
}

/** Indirizzo della sitemap delle interfacce di una lingua, per l'indice. */
export function interfacesSitemapPath(locale: Locale): string {
  return `/${locale}/sitemap-interfaces.xml`;
}

/**
 * Sitemap delle build pubblicate (23/10/2026), una per lingua: ogni scheda compare nella sitemap della lingua della
 * sua guida e, dal 23/10/2026 sera, delle lingue in cui ha una traduzione aggiornata (le stesse di hreflang e robots:
 * `buildIndexing`), solo da `BUILD_MIN_WORDS` parole dell'originale. Letta dal database con il client anonimo; se la
 * tabella non c'è ancora, la sitemap è vuota. `lastmod` dal giorno dell'ultimo aggiornamento dell'autore o, per una
 * versione tradotta, dall'arrivo della traduzione se è più recente.
 */
export async function buildsSitemapResponse(locale: Locale): Promise<Response> {
  const { sitemapBuilds } = await import("./community/buildQueries");
  const { BUILD_MIN_WORDS } = await import("./community/builds");
  const all = await sitemapBuilds();
  const entries: UrlEntry[] = all
    .filter((b) => b.words >= BUILD_MIN_WORDS && (b.lang === locale || b.translated[locale]))
    .map((b) => {
      const languages = locales.filter((l) => l === b.lang || b.translated[l]);
      return {
        url: `${siteUrl}${href(locale, `/builds/${b.slug}`)}`,
        lastmod: clampDay([b.updated, b.translated[locale], PAGE_UPDATED["/builds"]]),
        alternates: alternatesFor(`/builds/${b.slug}`, languages).languages,
      };
    });
  return new Response(urlsetXml(entries), { headers: XML_HEADERS });
}

/** Indirizzo della sitemap delle build di una lingua, per l'indice. */
export function buildsSitemapPath(locale: Locale): string {
  return `/${locale}/sitemap-builds.xml`;
}

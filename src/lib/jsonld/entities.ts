import { siteUrl, type Locale } from "../i18n";
import { founders } from "../data/authorsCore";

/*
  Dati strutturati del sito (schema.org, JSON-LD): le entità uniche e i costruttori dei nodi di pagina, collegati per
  `@id` e mai copiati (stessa regola del motore di OriginsMeta). ForeverMeta (chi scrive), World of Warcraft: Forever
  (il gioco), Blizzard Entertainment (chi lo fa e lo pubblica) e una Person per autore, uguale in tutte le lingue.
  Niente logo né icone di Blizzard: il materiale ufficiale non entra nell'identità del sito.
*/

/** Oggetto JSON-LD generico. */
export type Json = Record<string, unknown>;

export const organizationId = `${siteUrl}/#organization`;
export const videoGameId = `${siteUrl}/#wow-forever`;
export const blizzardId = `${siteUrl}/#blizzard`;

/** Una persona è una sola in tutte le lingue. */
export const personId = (slug: string): string => `${siteUrl}/#person-${slug}`;

/** Il sito in una lingua (nodo WebSite del layout): lo usano `isPartOf` delle pagine. */
export const websiteId = (locale: Locale | string): string => `${siteUrl}/${locale}#website`;

const absolute = (pathOrUrl: string): string => (pathOrUrl.startsWith("http") ? pathOrUrl : `${siteUrl}${pathOrUrl}`);

export function breadcrumbs(items: { name: string; path: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({ "@type": "ListItem", position: i + 1, name: it.name, item: `${siteUrl}${it.path}` })),
  };
}

/** Blizzard Entertainment come entità del grafo, con un `@id` nostro e nessun logo. */
export const blizzard: Json = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": blizzardId,
  name: "Blizzard Entertainment",
  url: "https://www.blizzard.com",
  sameAs: ["https://www.blizzard.com"],
};

/**
 * ForeverMeta. È un progetto della squadra di OriginsMeta (`parentOrganization`, il collegamento fra i due siti voluto
 * da Pierluigi l'08/10/2026). La non affiliazione a Blizzard sta anche nella descrizione.
 */
export const organization: Json = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": organizationId,
  name: "ForeverMeta",
  alternateName: "Forever Meta",
  url: siteUrl,
  description:
    "Unofficial, independent fan site about World of Warcraft: Forever: signed news, beginner guides, an official-terms glossary, the launch calendar and beta changes, in English, Italian and Spanish. Not affiliated with Blizzard Entertainment.",
  foundingDate: "2026-10",
  founder: founders.map((a) => ({ "@type": "Person", "@id": personId(a.slug), name: a.name })),
  knowsAbout: ["World of Warcraft: Forever", "World of Warcraft", "MMORPG"],
  parentOrganization: { "@type": "Organization", name: "OriginsMeta", url: "https://originsmeta.com" },
  publishingPrinciples: `${siteUrl}/en/about#how-we-work`,
};

/** Gli indirizzi ufficiali del gioco. */
export const gameLinks = {
  site: "https://worldofwarcraft.blizzard.com/en-us/forever",
} as const;

/**
 * Il gioco di cui parla il sito, come entità unica riusata da tutte le pagine con `about`. Solo fatti delle fonti
 * ufficiali (schede per la stampa di Blizzard): MMORPG per PC e Mac, uscita il 4 novembre 2026.
 */
export const videoGame: Json = {
  "@context": "https://schema.org",
  "@type": ["VideoGame", "Game"],
  "@id": videoGameId,
  name: "World of Warcraft: Forever",
  alternateName: "WoW Forever",
  description:
    "A new World of Warcraft game from the team behind WoW Classic, set in a reimagined Azeroth with revamped gameplay, rooted in the original WoW experience; level cap 60.",
  url: gameLinks.site,
  gamePlatform: ["PC", "Mac"],
  genre: ["MMORPG", "Massively multiplayer online role-playing game"],
  datePublished: "2026-11-04",
  developer: { "@id": blizzardId },
  publisher: { "@id": blizzardId },
  sameAs: [gameLinks.site],
};

/** Nodo Person per chi firma i contenuti; `@id` unico della persona, campi facoltativi solo se valorizzati. */
export function person(author: {
  slug: string;
  name: string;
  alternateName?: string;
  role?: string;
  url?: string;
  description?: string;
  knowsAbout?: string[];
  sameAs?: string[];
}): Json {
  const url = author.url ? absolute(author.url) : undefined;
  const node: Json = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId(author.slug),
    name: author.name,
    worksFor: { "@id": organizationId },
  };
  if (author.alternateName && author.alternateName !== author.name) node.alternateName = author.alternateName;
  if (url) {
    node.url = url;
    node.mainEntityOfPage = url;
  }
  if (author.description) node.description = author.description;
  if (author.role) node.jobTitle = author.role;
  if (author.knowsAbout?.length) node.knowsAbout = author.knowsAbout;
  if (author.sameAs?.length) node.sameAs = author.sameAs;
  return node;
}

/** Rimando a un autore dentro un altro nodo (`author` di NewsArticle e Article). */
export function personRef(author: { slug: string; name: string }, url: string): Json {
  return { "@type": "Person", "@id": personId(author.slug), name: author.name, url: absolute(url) };
}

/** Pagina lista: CollectionPage con dentro l'ItemList delle voci (percorsi già localizzati). */
export function collectionPage({
  locale,
  path,
  name,
  description,
  items,
  about,
}: {
  locale: string;
  path: string;
  name: string;
  description: string;
  items: { name: string; path: string; id?: string; description?: string }[];
  about?: string;
}): Json {
  const url = `${siteUrl}${path}`;
  const node: Json = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#collection`,
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId(locale) },
    publisher: { "@id": organizationId },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((it, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: it.name,
        url: `${siteUrl}${it.path}`,
        ...(it.description ? { description: it.description } : {}),
        ...(it.id ? { item: { "@id": it.id } } : {}),
      })),
    },
  };
  if (about) node.about = { "@id": about };
  return node;
}

/** Il sito in una lingua. */
export function website(locale: string, description: string): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": websiteId(locale),
    name: "ForeverMeta",
    alternateName: "Forever Meta",
    url: `${siteUrl}/${locale}`,
    inLanguage: locale,
    description,
    publisher: { "@id": organizationId },
    about: { "@id": videoGameId },
  };
}

/** La pagina /about: parla di ForeverMeta e nomina il gioco e lo studio per `@id`. */
export function aboutPage({ locale, path, name, description }: { locale: string; path: string; name: string; description: string }): Json {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#page`,
    name,
    description,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId(locale) },
    publisher: { "@id": organizationId },
    about: { "@id": organizationId },
    mainEntity: { "@id": organizationId },
    mentions: [{ "@id": videoGameId }, { "@id": blizzardId }],
  };
}

/** La pagina di un autore (/authors/<slug>): ProfilePage il cui soggetto è la Person unica. */
export function authorProfilePage({ locale, path, name, slug }: { locale: string; path: string; name: string; slug: string }): Json {
  const url = `${siteUrl}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${url}#page`,
    name,
    url,
    inLanguage: locale,
    isPartOf: { "@id": websiteId(locale) },
    mainEntity: { "@type": "Person", "@id": personId(slug), name, url },
  };
}

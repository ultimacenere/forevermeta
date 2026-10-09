import type { Locale } from "../i18n";

/*
  Gli autori del sito, senza nient'altro: questo modulo importa solo i tipi di i18n, così lo può leggere anche il layout
  radice (i fondatori nel nodo Organization dei dati strutturati). Le funzioni che leggono news e guide stanno in
  authors.ts, che riesporta tutto quello che c'è qui.
*/

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

export type Author = {
  slug: string;
  /** nome completo con il nickname fra virgolette: H1, firme, dati strutturati */
  name: string;
  /** nome breve: titoli delle sezioni */
  displayName: string;
  /** ruolo sul sito, una riga */
  role: L10n;
  /** meta description del profilo (120-158 caratteri) */
  tagline: L10n;
  /** titolo per la SERP (entro 60 caratteri con il marchio) */
  metaTitle: L10n;
  /** biografia: spiega la competenza, solo fatti verificabili */
  bio: L10n;
  /** mese di ingresso nel progetto (YYYY-MM): serve solo a ordinare */
  joined: string;
  /** argomenti di competenza, in inglese: `knowsAbout` del nodo Person */
  knowsAbout: string[];
  /** contatti e profili pubblici verificati: i link http(s) diventano `sameAs` */
  links: { label: string; url: string }[];
};

/**
 * Chi firma i contenuti di ForeverMeta (decisione di Pierluigi del 10/10/2026: firma lui, come su OriginsMeta). Solo
 * fatti verificabili: il profilo di OriginsMeta è la stessa persona (`sameAs`).
 */
export const authors: Author[] = [
  {
    slug: "pierluigi-cella",
    name: "Pierluigi “Aldry” Cella",
    displayName: "Pierluigi",
    role: n("Founder", "Fondatore", "Fundador"),
    tagline: n(
      "Founder of ForeverMeta and OriginsMeta: he signs the news and guides about World of Warcraft: Forever, written only from official Blizzard sources.",
      "Fondatore di ForeverMeta e di OriginsMeta: firma le news e le guide su World of Warcraft: Forever, scritte solo dalle fonti ufficiali di Blizzard.",
      "Fundador de ForeverMeta y de OriginsMeta: firma las noticias y las guías sobre World of Warcraft: Forever, escritas solo con fuentes oficiales de Blizzard.",
    ),
    metaTitle: n("Pierluigi “Aldry” Cella, WoW Forever guides", "Pierluigi “Aldry” Cella, guide di WoW Forever", "Pierluigi “Aldry” Cella, guías de WoW Forever"),
    bio: n(
      "Pierluigi “Aldry” Cella founded ForeverMeta in October 2026, after opening OriginsMeta, the fan site about Origins TCG, in September 2026. ForeverMeta follows the same rule: every date, every name and every change comes from an official Blizzard source — Blizzard News, the official World of Warcraft: Forever page, the press fact sheets, the developer posts on the forums — and every page carries the date it was last checked. He signs the news and the guides, and he decides the editorial line: nothing invented, the source next to every fact, and a clear statement on every page that ForeverMeta is not affiliated with Blizzard Entertainment.",
      "Pierluigi “Aldry” Cella ha fondato ForeverMeta a ottobre 2026, dopo aver aperto a settembre OriginsMeta, il sito fan su Origins TCG. ForeverMeta segue la stessa regola: ogni data, ogni nome e ogni modifica arrivano da una fonte ufficiale di Blizzard — Blizzard News, la pagina ufficiale di World of Warcraft: Forever, le schede per la stampa, i post degli sviluppatori sui forum — e ogni pagina porta la data dell'ultimo controllo. Firma le news e le guide e decide la linea editoriale: niente di inventato, la fonte accanto a ogni fatto e, su ogni pagina, la precisazione che ForeverMeta non è affiliato a Blizzard Entertainment.",
      "Pierluigi “Aldry” Cella fundó ForeverMeta en octubre de 2026, después de abrir en septiembre OriginsMeta, el sitio fan sobre Origins TCG. ForeverMeta sigue la misma regla: cada fecha, cada nombre y cada cambio proceden de una fuente oficial de Blizzard —Blizzard News, la página oficial de World of Warcraft: Forever, las fichas de prensa, las publicaciones de los desarrolladores en los foros— y cada página indica la fecha de su última revisión. Firma las noticias y las guías y decide la línea editorial: nada inventado, la fuente junto a cada dato y, en cada página, el aviso de que ForeverMeta no está afiliado a Blizzard Entertainment.",
    ),
    joined: "2026-10",
    knowsAbout: ["World of Warcraft: Forever", "World of Warcraft", "MMORPG", "Blizzard Entertainment"],
    links: [{ label: "OriginsMeta", url: "https://originsmeta.com/en/authors/pierluigi-cella" }],
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

/** Il nickname fra le virgolette del nome completo ("Aldry"): `alternateName` della Person nei dati strutturati. */
export function nicknameOf(a: Author): string | undefined {
  return a.name.match(/“([^”]+)”/)?.[1];
}

/** I fondatori del sito: `founder` nel nodo Organization di ForeverMeta. */
export const founders: Author[] = authors.filter((a) => a.role.en === "Founder");

import type { Locale } from "../i18n";

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/** Un nome in una lingua: `official` quando lo scrive Blizzard in quella lingua, altrimenti è una spiegazione nostra. */
export type GlossaryName = { term: string; official: boolean };

export type GlossaryCategory = "race" | "class" | "faction" | "place" | "system" | "content" | "edition";

export type GlossaryTerm = {
  id: string;
  category: GlossaryCategory;
  en: string;
  it: GlossaryName;
  /** spagnolo di Spagna (es-ES) */
  es: GlossaryName;
  /** spagnolo dell'America Latina (es-MX) */
  mx: GlossaryName;
  /** nota per chi legge, nelle tre lingue del sito */
  note?: L10n;
  /** fonte dei nomi: chiave di `glossarySources` */
  source: keyof typeof glossarySources;
};

/**
 * Fonti dei nomi. Le schede ufficiali (fact sheet) del pacco "World of Warcraft Forever Reveal" del Blizzard Press
 * Center, scaricato da Pierluigi il 10/10/2026, una per lingua (enUS, itIT, esES, esMX): è lì che Blizzard scrive i
 * nomi di Forever in ogni lingua.
 */
export const glossarySources = {
  factSheet: {
    label: n("Official World of Warcraft: Forever fact sheets (Blizzard Press Center)", "Schede ufficiali di World of Warcraft: Forever (Blizzard Press Center)", "Fichas oficiales de World of Warcraft: Forever (Blizzard Press Center)"),
    url: "https://blizzard.gamespress.com/wowforeverreveal",
  },
} as const;

const o = (term: string): GlossaryName => ({ term, official: true });

/** I termini, raggruppati per categoria nell'ordine della pagina. */
export const glossary: GlossaryTerm[] = [
  // Razze e classi
  {
    id: "skyborne",
    category: "race",
    en: "Skyborne",
    it: o("Skyborne (Elfi Skyborne)"),
    es: o("elfos célicos"),
    mx: o("cielonato"),
    note: n(
      "The new playable race of Forever: High Elf exiles who fled their ancient kingdom and can join either the Horde or the Alliance.",
      "La nuova razza giocabile di Forever: Alti Elfi esiliati, fuggiti dal loro antico regno, che possono unirsi sia all'Orda sia all'Alleanza.",
      "La nueva raza jugable de Forever: elfos nobles exiliados que huyeron de su antiguo reino y pueden unirse tanto a la Horda como a la Alianza.",
    ),
    source: "factSheet",
  },
  {
    id: "high-elves",
    category: "race",
    en: "High Elf exiles",
    it: o("Alti Elfi esiliati"),
    es: o("elfos nobles exiliados"),
    mx: o("elfos nobles exiliados"),
    source: "factSheet",
  },
  {
    id: "forsaken-paladins",
    category: "class",
    en: "Forsaken Paladins",
    it: o("Paladini Reietti"),
    es: o("paladines renegados"),
    mx: o("paladines Renegados"),
    note: n("One of the new race and class combinations of Forever.", "Una delle nuove combinazioni di razza e classe di Forever.", "Una de las nuevas combinaciones de raza y clase de Forever."),
    source: "factSheet",
  },
  {
    id: "dwarf-shamans",
    category: "class",
    en: "Dwarf Shamans",
    it: o("Sciamani Nani"),
    es: o("chamanes enanos"),
    mx: o("chamanes enanos"),
    note: n("One of the new race and class combinations of Forever.", "Una delle nuove combinazioni di razza e classe di Forever.", "Una de las nuevas combinaciones de raza y clase de Forever."),
    source: "factSheet",
  },
  // Fazioni
  { id: "alliance", category: "faction", en: "Alliance", it: o("Alleanza"), es: o("Alianza"), mx: o("Alianza"), source: "factSheet" },
  { id: "horde", category: "faction", en: "Horde", it: o("Orda"), es: o("Horda"), mx: o("Horda"), source: "factSheet" },
  // Luoghi
  {
    id: "riverlands",
    category: "place",
    en: "Riverlands",
    it: o("Riverlands"),
    es: o("riberas"),
    mx: o("Tierras de los Ríos"),
    note: n(
      "New zone. The press fact sheet calls it Riverlands; other Blizzard materials say Riverglades. We will update the name once it is confirmed in game. The Spain fact sheet only says “las exuberantes riberas”.",
      "Zona nuova. La scheda per la stampa la chiama Riverlands; altri materiali di Blizzard dicono Riverglades. Aggiorneremo il nome quando sarà confermato nel gioco. La scheda spagnola scrive solo “las exuberantes riberas”.",
      "Zona nueva. La ficha de prensa la llama Riverlands; otros materiales de Blizzard dicen Riverglades. Actualizaremos el nombre cuando se confirme en el juego. La ficha de España solo dice «las exuberantes riberas».",
    ),
    source: "factSheet",
  },
  {
    id: "mount-hyjal",
    category: "place",
    en: "Mount Hyjal",
    it: o("Mount Hyjal"),
    es: o("Monte Hyjal"),
    mx: o("Monte Hyjal"),
    note: n(
      "New zone, still bearing the remnants of the recent battle against Archimonde.",
      "Zona nuova, dove restano i segni della recente battaglia contro Archimonde.",
      "Zona nueva, donde aún quedan restos de la reciente batalla contra Archimonde.",
    ),
    source: "factSheet",
  },
  { id: "southshore", category: "place", en: "Southshore", it: o("Southshore"), es: o("Costasur"), mx: o("Costasur"), source: "factSheet" },
  { id: "blackrock-mountain", category: "place", en: "Blackrock Mountain", it: o("Blackrock Mountain"), es: o("Montaña Roca Negra"), mx: o("Montaña Roca Negra"), source: "factSheet" },
  { id: "azeroth", category: "place", en: "Azeroth", it: o("Azeroth"), es: o("Azeroth"), mx: o("Azeroth"), source: "factSheet" },
  // Sistemi
  {
    id: "legacy-system",
    category: "system",
    en: "Legacy System",
    it: o("Legacy System"),
    es: o("sistema de legado"),
    mx: o("sistema de legado"),
    note: n(
      "Account-wide rewards for the progress you make with all your characters.",
      "Ricompense a livello di account per i progressi fatti con tutti i tuoi personaggi.",
      "Recompensas para toda la cuenta por el progreso que haces con todos tus personajes.",
    ),
    source: "factSheet",
  },
  {
    id: "campfire",
    category: "system",
    en: "Campfire",
    it: o("Campfire"),
    es: o("hoguera de acampada"),
    mx: o("hoguera"),
    note: n(
      "The feature that makes it easier to meet other players along the way.",
      "La funzione che rende più facile incontrare altri giocatori lungo la strada.",
      "La función que facilita conocer a otros jugadores por el camino.",
    ),
    source: "factSheet",
  },
  { id: "talent-trees", category: "system", en: "talent trees", it: o("alberi dei talenti"), es: o("árboles de talentos"), mx: o("árboles de talentos"), source: "factSheet" },
  { id: "level-cap", category: "system", en: "level cap", it: o("livello massimo"), es: o("nivel máximo"), mx: o("nivel máximo"), note: n("60 in Forever.", "60 in Forever.", "60 en Forever."), source: "factSheet" },
  { id: "game-time", category: "system", en: "game time", it: o("tempo di gioco"), es: o("tiempo de juego"), mx: o("tiempo de juego"), source: "factSheet" },
  // Contenuti
  { id: "dungeon", category: "content", en: "dungeon", it: o("spedizione"), es: o("mazmorra"), mx: o("calabozo"), note: n("Forever has 9 new ones.", "Forever ne ha 9 nuove.", "Forever tiene 9 nuevas."), source: "factSheet" },
  { id: "raid", category: "content", en: "raid", it: o("incursione"), es: o("banda"), mx: o("banda"), note: n("Two new max-level raids at launch of the end game.", "Due nuove incursioni di livello massimo con cui parte il gioco di livello massimo.", "Dos nuevas bandas de nivel máximo con las que empieza el juego en nivel máximo."), source: "factSheet" },
  { id: "end-game", category: "content", en: "end game", it: o("gioco di livello massimo"), es: o("sistema poscampaña"), mx: o("fase final del juego"), source: "factSheet" },
  { id: "quests", category: "content", en: "quests", it: o("missioni"), es: o("misiones"), mx: o("misiones"), note: n("Over 1,000 new ones across Azeroth.", "Oltre 1.000 nuove in tutta Azeroth.", "Más de 1000 nuevas por toda Azeroth."), source: "factSheet" },
  // Edizioni
  { id: "skyborne-edition", category: "edition", en: "Skyborne Edition", it: o("Skyborne Edition"), es: o("Skyborne Edition"), mx: o("Edición Cielonato"), source: "factSheet" },
  { id: "warcraft-forever-collection", category: "edition", en: "Warcraft Forever Collection", it: o("Warcraft Forever Collection"), es: o("Warcraft Forever Collection"), mx: o("Colección de Warcraft Forever"), source: "factSheet" },
];

export const glossaryCategories: Record<GlossaryCategory, L10n> = {
  race: n("Races", "Razze", "Razas"),
  class: n("Race and class combinations", "Combinazioni di razza e classe", "Combinaciones de raza y clase"),
  faction: n("Factions", "Fazioni", "Facciones"),
  place: n("Places", "Luoghi", "Lugares"),
  system: n("Systems", "Sistemi", "Sistemas"),
  content: n("Content", "Contenuti", "Contenidos"),
  edition: n("Editions", "Edizioni", "Ediciones"),
};

import type { Locale } from "../i18n";

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/** Un nome in una lingua: `official` quando lo scrive Blizzard in quella lingua, altrimenti è la forma che usiamo noi. */
export type GlossaryName = { term: string; official: boolean };

export type GlossaryCategory = "race" | "class" | "faction" | "place" | "dungeon" | "raid" | "system" | "content" | "edition";

export type GlossaryTerm = {
  id: string;
  category: GlossaryCategory;
  en: string;
  it: GlossaryName;
  /** spagnolo di Spagna (es-ES) */
  es: GlossaryName;
  /** spagnolo dell'America Latina (es-MX) */
  mx: GlossaryName;
  note?: L10n;
  /** fonte dei nomi: chiave di `glossarySources` */
  source: keyof typeof glossarySources;
};

/**
 * Fonti dei nomi (raccolta del 10/10/2026). Le pagine ufficiali di Blizzard nelle quattro lingue (Blizzard News, pagina
 * di Forever, negozio) e le schede ufficiali per la stampa. Dove le due fonti non coincidono vincono le pagine pubbliche
 * (Riverglades, Camping) e la nota lo dice.
 */
export const glossarySources = {
  factSheet: {
    label: n("Official World of Warcraft: Forever fact sheets (Blizzard Press Center)", "Schede ufficiali di World of Warcraft: Forever (Blizzard Press Center)", "Fichas oficiales de World of Warcraft: Forever (Blizzard Press Center)"),
    url: "https://blizzard.gamespress.com/wowforeverreveal",
  },
  whatsNext: {
    label: n("World of Warcraft: Forever What's Next Panel Recap (Blizzard News, 12/09/2026)", "World of Warcraft: Forever What's Next Panel Recap (Blizzard News, 12/09/2026)", "Resumen del panel What's Next de World of Warcraft: Forever (Blizzard News, 12/09/2026)"),
    url: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap",
  },
  foreverPage: {
    label: n("Official World of Warcraft: Forever page", "Pagina ufficiale di World of Warcraft: Forever", "Página oficial de World of Warcraft: Forever"),
    url: "https://worldofwarcraft.blizzard.com/en-us/forever",
  },
  rulesets: {
    label: n("Choose Your Ruleset in World of Warcraft: Forever (Blizzard News, 21/09/2026)", "Scegli il tuo set di regole in World of Warcraft: Forever (Blizzard News, 21/09/2026)", "Elige un conjunto de reglas para World of Warcraft: Forever (Blizzard News, 21/09/2026)"),
    url: "https://news.blizzard.com/en-us/article/24302070/choose-your-ruleset-in-world-of-warcraft-forever",
  },
  skyborne: {
    label: n("WoW: Forever Meet the New Skyborne (Blizzard News, 22/09/2026)", "WoW: Forever - Ti presentiamo i nuovi Skyborne (Blizzard News, 22/09/2026)", "Conoce a los nuevos célicos de WoW: Forever (Blizzard News, 22/09/2026)"),
    url: "https://news.blizzard.com/en-us/article/24302071/wow-forever-meet-the-new-skyborne",
  },
  legacy: {
    label: n("Get to Know the World of Warcraft: Forever Legacy System (Blizzard News, 23/09/2026)", "Scopri il Legacy System di World of Warcraft: Forever (Blizzard News, 23/09/2026)", "Familiarízate con el sistema de legado de World of Warcraft: Forever (Blizzard News, 23/09/2026)"),
    url: "https://news.blizzard.com/en-us/article/24307383/get-to-know-the-world-of-warcraft-forever-legacy-system",
  },
  darkspear: {
    label: n("Battle for the Darkspear Islands in World of Warcraft: Forever (Blizzard News, 07/10/2026)", "Combatti per le Darkspear Islands in World of Warcraft: Forever (Blizzard News, 07/10/2026)", "Lucha por las Islas Lanza Negra en World of Warcraft: Forever (Blizzard News, 07/10/2026)"),
    url: "https://news.blizzard.com/en-us/article/24307308/battle-for-the-darkspear-islands-in-world-of-warcraft-forever",
  },
  shop: {
    label: n("World of Warcraft: Forever on the Battle.net Shop", "World of Warcraft: Forever nel negozio Battle.net", "World of Warcraft: Forever en la tienda de Battle.net"),
    url: "https://eu.shop.battle.net/en-gb/product/world-of-warcraft-forever",
  },
} as const;

const o = (term: string): GlossaryName => ({ term, official: true });
/** Nome che Blizzard non ha ancora scritto in quella lingua: nelle pagine italiane i nomi del gioco restano in inglese. */
const en = (term: string): GlossaryName => ({ term, official: false });

const noItalian = n(
  "Blizzard has not published this name in Italian: the Italian pages keep the game's names in English.",
  "Blizzard non ha pubblicato questo nome in italiano: nelle pagine italiane i nomi del gioco restano in inglese.",
  "Blizzard no ha publicado este nombre en italiano: las páginas en italiano dejan los nombres del juego en inglés.",
);

/** I termini, raggruppati per categoria nell'ordine della pagina. */
export const glossary: GlossaryTerm[] = [
  // Razze
  {
    id: "skyborne",
    category: "race",
    en: "Skyborne",
    it: o("Skyborne"),
    es: o("célicos"),
    mx: o("cielonato"),
    note: n(
      "The new playable race: High Elf exiles who can join either faction. They start on Zephras Isle (levels 1–12).",
      "La nuova razza giocabile: Alti Elfi esiliati che possono unirsi a tutte e due le fazioni. Partono da Zephras Isle (livelli 1–12).",
      "La nueva raza jugable: elfos nobles exiliados que pueden unirse a cualquiera de las dos facciones. Empiezan en la Isla de Zephras (niveles 1–12).",
    ),
    source: "skyborne",
  },
  {
    id: "windshaper",
    category: "race",
    en: "Windshaper Skyborne (Horde)",
    it: o("Skyborne Windshaper"),
    es: o("célico Formaviento"),
    mx: o("cielonato de los Formavientos"),
    note: n("The Horde Skyborne; they can be Shamans.", "Gli Skyborne dell'Orda; possono essere Sciamani.", "Los célicos de la Horda; pueden ser chamanes."),
    source: "skyborne",
  },
  {
    id: "high-order",
    category: "race",
    en: "High Order Skyborne (Alliance)",
    it: o("Skyborne High Order"),
    es: o("célico de la Orden Eminente"),
    mx: o("cielonato de la Suma Orden"),
    note: n("The Alliance Skyborne; they can be Mages.", "Gli Skyborne dell'Alleanza; possono essere Maghi.", "Los célicos de la Alianza; pueden ser magos."),
    source: "skyborne",
  },
  // Combinazioni nuove
  {
    id: "forsaken-paladin",
    category: "class",
    en: "Forsaken Paladin",
    it: o("Paladino Reietto"),
    es: o("paladín renegado"),
    mx: o("paladín renegado"),
    note: n("One of the six new race and class combinations.", "Una delle sei nuove combinazioni di razza e classe.", "Una de las seis nuevas combinaciones de raza y clase."),
    source: "factSheet",
  },
  {
    id: "dwarf-shaman",
    category: "class",
    en: "Dwarf Shaman",
    it: o("Sciamano Nano"),
    es: o("chamán enano"),
    mx: o("chamán enano"),
    note: n("One of the six new race and class combinations.", "Una delle sei nuove combinazioni di razza e classe.", "Una de las seis nuevas combinaciones de raza y clase."),
    source: "factSheet",
  },
  // Fazioni
  { id: "alliance", category: "faction", en: "Alliance", it: o("Alleanza"), es: o("Alianza"), mx: o("Alianza"), source: "factSheet" },
  { id: "horde", category: "faction", en: "Horde", it: o("Orda"), es: o("Horda"), mx: o("Horda"), source: "factSheet" },
  // Luoghi
  {
    id: "zephras-isle",
    category: "place",
    en: "Zephras Isle",
    it: o("Zephras Isle"),
    es: o("Isla de Zephras"),
    mx: o("Isla Zephras"),
    note: n("Starting zone of the Skyborne, levels 1–12.", "Zona di partenza degli Skyborne, livelli 1–12.", "Zona inicial de los célicos, niveles 1–12."),
    source: "foreverPage",
  },
  {
    id: "riverglades",
    category: "place",
    en: "Riverglades",
    it: o("Riverglades"),
    es: o("Clarofluvial"),
    mx: o("Claros del Río"),
    note: n(
      "New zone in the Eastern Kingdoms for the mid-30s to mid-40s. The press fact sheet calls it Riverlands; every public Blizzard page says Riverglades.",
      "Zona nuova degli Eastern Kingdoms, più o meno dal livello 35 al 45. La scheda per la stampa la chiama Riverlands; tutte le pagine pubbliche di Blizzard dicono Riverglades.",
      "Zona nueva de los Reinos del Este, más o menos del nivel 35 al 45. La ficha de prensa la llama Riverlands; todas las páginas públicas de Blizzard dicen Clarofluvial (Riverglades en inglés).",
    ),
    source: "whatsNext",
  },
  {
    id: "mount-hyjal",
    category: "place",
    en: "Mount Hyjal",
    it: o("Mount Hyjal"),
    es: o("Monte Hyjal"),
    mx: o("Monte Hyjal"),
    note: n("New zone set in the aftermath of Archimonde's defeat.", "Zona nuova, dopo la sconfitta di Archimonde.", "Zona nueva, tras la derrota de Archimonde."),
    source: "whatsNext",
  },
  {
    id: "shendralas",
    category: "place",
    en: "Shen'dralas",
    it: o("Shen'dralas"),
    es: o("Shen'dralas"),
    mx: o("Shen'dralas"),
    note: n("New area between Mulgore and Desolace.", "Area nuova fra Mulgore e Desolace.", "Zona nueva entre Mulgore y Desolace."),
    source: "whatsNext",
  },
  { id: "darkwhisper-gorge", category: "place", en: "Darkwhisper Gorge", it: en("Darkwhisper Gorge"), es: o("Garganta Negro Rumor"), mx: o("Garganta Negro Rumor"), note: noItalian, source: "whatsNext" },
  { id: "southshore", category: "place", en: "Southshore", it: o("Southshore"), es: o("Costasur"), mx: o("Costasur"), source: "factSheet" },
  { id: "blackrock-mountain", category: "place", en: "Blackrock Mountain", it: o("Blackrock Mountain"), es: o("Montaña Roca Negra"), mx: o("Montaña Roca Negra"), source: "factSheet" },
  // Dungeon (spedizioni)
  { id: "hall-of-thanes", category: "dungeon", en: "Hall of Thanes", it: o("Hall of Thanes"), es: o("Salón de los Feudales"), mx: o("Salón de Señores Feudales"), note: n("Levels 13–18, beneath Ironforge.", "Livelli 13–18, sotto Ironforge.", "Niveles 13–18, bajo Forjaz."), source: "whatsNext" },
  { id: "ruins-of-lordaeron", category: "dungeon", en: "Ruins of Lordaeron", it: o("Ruins of Lordaeron"), es: o("Ruinas de Lordaeron"), mx: o("Ruinas de Lordaeron"), note: n("Levels 15–20.", "Livelli 15–20.", "Niveles 15–20."), source: "whatsNext" },
  {
    id: "excavation-site",
    category: "dungeon",
    en: "Excavation Site: Wetlands",
    it: en("Excavation Site: Wetlands"),
    es: o("Excavación de Whelgar"),
    mx: o("sitio sobre la Excavación de Whelgar"),
    note: n("Levels 26–31, above Whelgar's Excavation.", "Livelli 26–31, sopra Whelgar's Excavation.", "Niveles 26–31, sobre la Excavación de Whelgar."),
    source: "whatsNext",
  },
  { id: "city-of-dalaran", category: "dungeon", en: "City of Dalaran", it: en("City of Dalaran"), es: o("Ciudad de Dalaran"), mx: o("Ciudad de Dalaran"), note: noItalian, source: "whatsNext" },
  { id: "blackmaw-hold", category: "dungeon", en: "Blackmaw Hold", it: en("Blackmaw Hold"), es: o("Bastión Faucenegra"), mx: o("Bastión Faucenegra"), note: noItalian, source: "whatsNext" },
  { id: "drowned-city", category: "dungeon", en: "Drowned City", it: en("Drowned City"), es: o("Ciudad Sumergida"), mx: o("Ciudad Anegada"), note: noItalian, source: "whatsNext" },
  { id: "kroldok-stronghold", category: "dungeon", en: "Krol'dok Stronghold", it: en("Krol'dok Stronghold"), es: o("Bastión Krol'dok"), mx: o("Bastión de Krol'dok"), note: noItalian, source: "whatsNext" },
  { id: "alcaz-prison", category: "dungeon", en: "Alcaz Prison", it: en("Alcaz Prison"), es: o("Prisión de Alcaz"), mx: o("Prisión de Alcaz"), note: noItalian, source: "whatsNext" },
  { id: "shapers-terrace", category: "dungeon", en: "Shaper's Terrace", it: en("Shaper's Terrace"), es: o("Bancal del Creador"), mx: o("Bancal del Creador"), note: noItalian, source: "whatsNext" },
  // Incursioni e campi di battaglia
  { id: "barrow-deeps", category: "raid", en: "The Barrow Deeps", it: o("Barrow Deeps"), es: o("las Cavernas del Túmulo"), mx: o("las Cavernas del Túmulo"), note: n("10-player raid, 8 bosses.", "Incursione da 10 giocatori, 8 boss.", "Banda de 10 jugadores, 8 jefes."), source: "legacy" },
  { id: "hyjal-summit", category: "raid", en: "Hyjal Summit", it: o("Hyjal Summit"), es: o("la Cima Hyjal"), mx: o("La Cima Hyjal"), note: n("20-player raid, 13 bosses.", "Incursione da 20 giocatori, 13 boss.", "Banda de 20 jugadores, 13 jefes."), source: "legacy" },
  {
    id: "darkspear-islands",
    category: "raid",
    en: "Darkspear Islands",
    it: o("Darkspear Islands"),
    es: o("Islas Lanza Negra"),
    mx: o("Islas Lanza Negra"),
    note: n("15v15 battleground, levels 30–60.", "Campo di battaglia 15 contro 15, livelli 30–60.", "Campo de batalla 15 contra 15, niveles 30–60."),
    source: "darkspear",
  },
  // Sistemi
  {
    id: "legacy-system",
    category: "system",
    en: "Legacy System",
    it: o("Legacy System"),
    es: o("sistema de legado"),
    mx: o("sistema de legado"),
    note: n(
      "Account-wide progression: Legacy Challenges, Perks and Rewards (ES-ES: desafíos, ventajas y recompensas de legado).",
      "Progressione a livello di account: Legacy Challenges, Perks e Rewards.",
      "Progresión para toda la cuenta: desafíos, ventajas y recompensas de legado (beneficios en Latinoamérica).",
    ),
    source: "legacy",
  },
  {
    id: "camping",
    category: "system",
    en: "Camping",
    it: o("Camping"),
    es: o("acampada"),
    mx: o("campamento"),
    note: n(
      "Craft campfires in the open world for shared buffs; the press fact sheet calls the feature Campfire.",
      "Fuochi da campo nel mondo aperto con bonus condivisi; la scheda per la stampa chiama la funzione Campfire.",
      "Hogueras en el mundo abierto con bonificaciones compartidas; la ficha de prensa llama a la función Campfire.",
    ),
    source: "foreverPage",
  },
  { id: "basic-campfire", category: "system", en: "Basic Campfire", it: en("Basic Campfire"), es: o("hoguera básica"), mx: o("hoguera básica"), note: noItalian, source: "whatsNext" },
  { id: "ruleset", category: "system", en: "ruleset", it: o("set di regole"), es: o("conjunto de reglas"), mx: o("reglas"), source: "rulesets" },
  { id: "ruleset-pvp", category: "system", en: "PvP (ruleset)", it: o("PvP"), es: o("JcJ"), mx: o("JcJ"), source: "rulesets" },
  { id: "ruleset-rp", category: "system", en: "Roleplaying (ruleset)", it: o("Roleplaying"), es: o("Rol"), mx: o("Juego de rol"), source: "rulesets" },
  {
    id: "ruleset-hardcore",
    category: "system",
    en: "Hardcore (ruleset)",
    it: o("Hardcore"),
    es: o("Hardcore"),
    mx: o("Extremo"),
    note: n("Available after launch, no date yet.", "Arriva dopo il lancio, ancora senza data.", "Llegará después del lanzamiento, aún sin fecha."),
    source: "rulesets",
  },
  { id: "talent-trees", category: "system", en: "talent trees", it: o("alberi dei talenti"), es: o("árboles de talentos"), mx: o("árboles de talentos"), source: "factSheet" },
  { id: "level-cap", category: "system", en: "level cap", it: o("livello massimo"), es: o("nivel máximo"), mx: o("nivel máximo"), note: n("60 in Forever.", "60 in Forever.", "60 en Forever."), source: "factSheet" },
  { id: "game-time", category: "system", en: "Game Time", it: o("tempo di gioco"), es: o("tiempo de juego"), mx: o("tiempo de juego"), source: "factSheet" },
  // Contenuti
  { id: "dungeon", category: "content", en: "dungeon", it: o("spedizione"), es: o("mazmorra"), mx: o("calabozo"), note: n("Forever has 9 new ones.", "Forever ne ha 9 nuove.", "Forever tiene 9 nuevas."), source: "factSheet" },
  { id: "raid", category: "content", en: "raid", it: o("incursione"), es: o("banda"), mx: o("banda"), note: n("New raids unlock on 9 December.", "Le nuove incursioni si sbloccano il 9 dicembre.", "Las nuevas bandas se desbloquean el 9 de diciembre."), source: "factSheet" },
  { id: "end-game", category: "content", en: "end game", it: o("gioco di livello massimo"), es: o("sistema poscampaña"), mx: o("fase final del juego"), source: "factSheet" },
  { id: "quests", category: "content", en: "quests", it: o("missioni"), es: o("misiones"), mx: o("misiones"), note: n("Over 1,000 new ones.", "Oltre 1.000 nuove.", "Más de 1000 nuevas."), source: "factSheet" },
  { id: "early-name-reservation", category: "content", en: "Early Name Reservation", it: o("prenotazione anticipata dei nomi"), es: o("reserva de nombres anticipada"), mx: o("reserva anticipada de nombres"), note: n("27 October – 3 November 2026 (PST), with any upgrade.", "Dal 27 ottobre al 3 novembre 2026 (PST), con un'edizione a pagamento.", "Del 27 de octubre al 3 de noviembre de 2026 (PST), con cualquier edición de pago."), source: "shop" },
  { id: "invite-a-friend", category: "content", en: "Invite-A-Friend", it: o("Invita un amico"), es: o("código de invitación de lanzamiento"), mx: o("código de invitación para el lanzamiento"), note: n("Launch codes emailed from 20 October, valid 4–11 November.", "Codici inviati via email dal 20 ottobre, validi dal 4 all'11 novembre.", "Códigos enviados por correo desde el 20 de octubre, válidos del 4 al 11 de noviembre."), source: "shop" },
  // Edizioni
  { id: "skyborne-heroic-pack", category: "edition", en: "Skyborne Heroic Pack", it: o("Pacchetto Heroic Skyborne"), es: o("Pack Heroic de los célicos"), mx: o("Paquete heroico de los cielonato"), source: "shop" },
  { id: "skyborne-epic-pack", category: "edition", en: "Skyborne Epic Pack", it: o("Pacchetto Epic Skyborne"), es: o("Pack Epic de los célicos"), mx: o("Paquete épico de los cielonato"), source: "shop" },
  { id: "warcraft-forever-collection", category: "edition", en: "Warcraft Forever Collection", it: o("Warcraft Forever Collection"), es: o("Warcraft Forever Collection"), mx: o("Colección de Warcraft Forever"), note: n("On sale until 11 January 2027.", "In vendita fino all'11 gennaio 2027.", "A la venta hasta el 11 de enero de 2027."), source: "shop" },
];

export const glossaryCategories: Record<GlossaryCategory, L10n> = {
  race: n("Races", "Razze", "Razas"),
  class: n("New race and class combinations", "Nuove combinazioni di razza e classe", "Nuevas combinaciones de raza y clase"),
  faction: n("Factions", "Fazioni", "Facciones"),
  place: n("Places", "Luoghi", "Lugares"),
  dungeon: n("Dungeons", "Dungeon (spedizioni)", "Mazmorras"),
  raid: n("Raids and battlegrounds", "Incursioni e campi di battaglia", "Bandas y campos de batalla"),
  system: n("Systems and rulesets", "Sistemi e set di regole", "Sistemas y conjuntos de reglas"),
  content: n("Content and dates", "Contenuti e date", "Contenidos y fechas"),
  edition: n("Editions", "Edizioni", "Ediciones"),
};

import type { Locale } from "./i18n";

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/**
 * Immagini del sito, ricavate dal pacco ufficiale "World of Warcraft Forever Reveal" del Blizzard Press Center con
 * scripts/media-from-press-kit.mjs (decisione di Pierluigi del 10/10/2026). Usate come contenuto (testata, copertine),
 * sempre con il credito "© Blizzard Entertainment, Inc."; mai i loghi, mai nell'identità del sito. Il testo alternativo
 * descrive l'immagine, non la pagina.
 */
export type Media = { src: string; width: number; height: number; alt: L10n };

const cover = (src: string, alt: L10n): Media => ({ src, width: 1600, height: 900, alt });

export const media = {
  hero: {
    src: "/media/hero-sky-isles.webp",
    width: 2400,
    height: 1000,
    alt: n(
      "World of Warcraft: Forever cinematic still: islands floating among the clouds, with white towers above a green valley",
      "Fotogramma del cinematic di World of Warcraft: Forever: isole sospese fra le nuvole, con torri bianche sopra una valle verde",
      "Fotograma de la cinemática de World of Warcraft: Forever: islas flotando entre las nubes, con torres blancas sobre un valle verde",
    ),
  },
  og: {
    src: "/media/og-forever.jpg",
    width: 1200,
    height: 630,
    alt: n(
      "World of Warcraft: Forever Alliance key art: a group of heroes on a cliff looking at a land with a giant tree",
      "Illustrazione dell'Alleanza di World of Warcraft: Forever: un gruppo di eroi su una rupe guarda una terra con un albero gigantesco",
      "Ilustración de la Alianza de World of Warcraft: Forever: un grupo de héroes en un acantilado mira una tierra con un árbol gigantesco",
    ),
  },
  whatIs: cover(
    "/media/cover-what-is.webp",
    n(
      "World of Warcraft: Forever Alliance key art: heroes on a cliff above a land with a giant tree",
      "Illustrazione dell'Alleanza di World of Warcraft: Forever: eroi su una rupe sopra una terra con un albero gigantesco",
      "Ilustración de la Alianza de World of Warcraft: Forever: héroes en un acantilado sobre una tierra con un árbol gigantesco",
    ),
  ),
  releaseDate: cover(
    "/media/cover-release-date.webp",
    n(
      "World of Warcraft: Forever cinematic still: a green valley with grazing animals and mountains in the distance",
      "Fotogramma del cinematic di World of Warcraft: Forever: una valle verde con animali al pascolo e montagne all'orizzonte",
      "Fotograma de la cinemática de World of Warcraft: Forever: un valle verde con animales pastando y montañas al fondo",
    ),
  ),
  rulesets: cover(
    "/media/cover-rulesets.webp",
    n(
      "World of Warcraft: Forever Horde key art: a group of Horde heroes in front of a city",
      "Illustrazione dell'Orda di World of Warcraft: Forever: un gruppo di eroi dell'Orda davanti a una città",
      "Ilustración de la Horda de World of Warcraft: Forever: un grupo de héroes de la Horda frente a una ciudad",
    ),
  ),
  racesClasses: cover(
    "/media/cover-races-classes.webp",
    n(
      "World of Warcraft: Forever screenshot: three characters of the new race and class combinations, including a gnome and a dwarf",
      "Screenshot di World of Warcraft: Forever: tre personaggi delle nuove combinazioni di razza e classe, fra cui uno gnomo e un nano",
      "Captura de World of Warcraft: Forever: tres personajes de las nuevas combinaciones de raza y clase, entre ellos un gnomo y un enano",
    ),
  ),
  legacy: cover(
    "/media/cover-legacy.webp",
    n(
      "World of Warcraft: Forever cinematic still: a tower with chains among the clouds and a city in the sky",
      "Fotogramma del cinematic di World of Warcraft: Forever: una torre con catene fra le nuvole e una città nel cielo",
      "Fotograma de la cinemática de World of Warcraft: Forever: una torre con cadenas entre las nubes y una ciudad en el cielo",
    ),
  ),
  camping: cover(
    "/media/cover-camping.webp",
    n(
      "World of Warcraft: Forever screenshot: players around a campfire in front of a tent",
      "Screenshot di World of Warcraft: Forever: giocatori attorno a un fuoco da campo davanti a una tenda",
      "Captura de World of Warcraft: Forever: jugadores alrededor de una hoguera delante de una tienda",
    ),
  ),
  editions: cover(
    "/media/cover-editions.webp",
    n(
      "World of Warcraft: Forever screenshot: three blue-skinned Skyborne characters in a village",
      "Screenshot di World of Warcraft: Forever: tre personaggi Skyborne dalla pelle azzurra in un villaggio",
      "Captura de World of Warcraft: Forever: tres personajes célicos de piel azul en una aldea",
    ),
  ),
  zones: cover(
    "/media/cover-zones.webp",
    n(
      "World of Warcraft: Forever screenshot: sunset over a river with a shipwreck, in the Riverglades",
      "Screenshot di World of Warcraft: Forever: tramonto su un fiume con un relitto di nave, a Riverglades",
      "Captura de World of Warcraft: Forever: atardecer sobre un río con un barco naufragado, en Clarofluvial",
    ),
  ),
  dalaran: cover(
    "/media/news-dalaran.webp",
    n(
      "World of Warcraft: Forever screenshot: the entrance of the City of Dalaran dungeon, with a staircase and purple banners",
      "Screenshot di World of Warcraft: Forever: l'ingresso del dungeon City of Dalaran, con una scalinata e stendardi viola",
      "Captura de World of Warcraft: Forever: la entrada de la mazmorra City of Dalaran, con una escalinata y estandartes morados",
    ),
  ),
  darkspearPvp: cover(
    "/media/news-darkspear-pvp.webp",
    n(
      "World of Warcraft: Forever screenshot: a goblin airship over the Darkspear Islands, with a wooden pier and palm trees",
      "Screenshot di World of Warcraft: Forever: un dirigibile goblin sopra le Darkspear Islands, con un pontile di legno e palme",
      "Captura de World of Warcraft: Forever: un zepelín goblin sobre las Islas Lanza Negra, con un muelle de madera y palmeras",
    ),
  ),
  skyborne: cover(
    "/media/news-skyborne.webp",
    n(
      "World of Warcraft: Forever screenshot: a blue-skinned Skyborne character in golden armour, in front of a stone tower",
      "Screenshot di World of Warcraft: Forever: un personaggio Skyborne dalla pelle azzurra in armatura dorata, davanti a una torre di pietra",
      "Captura de World of Warcraft: Forever: un personaje célico de piel azul con armadura dorada, delante de una torre de piedra",
    ),
  ),
  zephras: cover(
    "/media/zephras.webp",
    n("World of Warcraft: Forever screenshot: green hills on Zephras Isle", "Screenshot di World of Warcraft: Forever: colline verdi a Zephras Isle", "Captura de World of Warcraft: Forever: colinas verdes en la Isla de Zephras"),
  ),
  hyjal: cover(
    "/media/hyjal.webp",
    n("World of Warcraft: Forever screenshot: ruins at sunset in the Hyjal Summit raid", "Screenshot di World of Warcraft: Forever: rovine al tramonto nell'incursione Hyjal Summit", "Captura de World of Warcraft: Forever: ruinas al atardecer en la banda Cima Hyjal"),
  ),
  darkspear: cover(
    "/media/darkspear.webp",
    n("World of Warcraft: Forever screenshot: a ship at sunset off the Darkspear Islands", "Screenshot di World of Warcraft: Forever: una nave al tramonto davanti alle Darkspear Islands", "Captura de World of Warcraft: Forever: un barco al atardecer frente a las Islas Lanza Negra"),
  ),
} satisfies Record<string, Media>;

export type MediaKey = keyof typeof media;

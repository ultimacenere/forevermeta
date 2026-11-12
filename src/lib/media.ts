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
  dungeonLeveling: cover(
    "/media/news-dungeon-leveling.webp",
    n(
      "World of Warcraft: Forever screenshot: two green-skinned creatures in a dark corridor of the Alcaz Prison dungeon",
      "Screenshot di World of Warcraft: Forever: due creature dalla pelle verde in un corridoio buio del dungeon Alcaz Prison",
      "Captura de World of Warcraft: Forever: dos criaturas de piel verde en un pasillo oscuro de la mazmorra Prisión de Alcaz",
    ),
  ),
  classDeepDives: cover(
    "/media/news-class-deep-dives.webp",
    n(
      "World of Warcraft: Forever screenshot: three characters in purple and gold armour, including an orc, in a forest clearing",
      "Screenshot di World of Warcraft: Forever: tre personaggi in armatura viola e oro, fra cui un orco, in una radura nel bosco",
      "Captura de World of Warcraft: Forever: tres personajes con armadura morada y dorada, entre ellos un orco, en un claro del bosque",
    ),
  ),
  racialsMulgore: cover(
    "/media/news-racials-mulgore.webp",
    n(
      "World of Warcraft: Forever screenshot: an airship flying past the mesas of Thunder Bluff, in Mulgore, at sunset",
      "Screenshot di World of Warcraft: Forever: un'aeronave vola accanto agli altipiani di Thunder Bluff, a Mulgore, al tramonto",
      "Captura de World of Warcraft: Forever: una aeronave pasa junto a las mesetas de Cima del Trueno, en Mulgore, al atardecer",
    ),
  ),
  // copertine della guida addon e delle news del 22-27/10, al posto di quelle tipografiche (28/10/2026)
  addons: cover(
    "/media/cover-addons.webp",
    n(
      "World of Warcraft: Forever screenshot: a blue-skinned Skyborne character in light clothes on a stone path, with large trees in the background",
      "Screenshot di World of Warcraft: Forever: un personaggio Skyborne dalla pelle azzurra in abiti chiari su un sentiero di pietra, con grandi alberi sullo sfondo",
      "Captura de World of Warcraft: Forever: un personaje célico de piel azul con ropa clara en un camino de piedra, con grandes árboles al fondo",
    ),
  ),
  nameReservation: cover(
    "/media/news-name-reservation.webp",
    n(
      "World of Warcraft: Forever cinematic still: a blue-skinned woman with white hair and glowing eyes, arms open among clouds and mountains",
      "Fotogramma del cinematic di World of Warcraft: Forever: una donna dalla pelle azzurra, capelli bianchi e occhi luminosi, a braccia aperte fra nuvole e montagne",
      "Fotograma de la cinemática de World of Warcraft: Forever: una mujer de piel azul, pelo blanco y ojos brillantes, con los brazos abiertos entre nubes y montañas",
    ),
  ),
  nameReservationTimes: cover(
    "/media/news-name-reservation-times.webp",
    n(
      "World of Warcraft: Forever screenshot: a blue-skinned Skyborne character in leather armour on a cobbled path, in front of houses with blue roofs",
      "Screenshot di World of Warcraft: Forever: un personaggio Skyborne dalla pelle azzurra in armatura di cuoio su un sentiero lastricato, davanti a case dai tetti azzurri",
      "Captura de World of Warcraft: Forever: un personaje célico de piel azul con armadura de cuero en un camino empedrado, delante de casas de tejados azules",
    ),
  ),
  nineDungeons: cover(
    "/media/news-nine-dungeons.webp",
    n(
      "World of Warcraft: Forever screenshot: ogres in front of the stone arch of the Krol'dok Stronghold dungeon, with spiked towers",
      "Screenshot di World of Warcraft: Forever: ogre davanti all'arco di pietra del dungeon Krol'dok Stronghold, con torri a punta",
      "Captura de World of Warcraft: Forever: ogros delante del arco de piedra de la mazmorra Krol'dok Stronghold, con torres puntiagudas",
    ),
  ),
  layering: cover(
    "/media/news-layering-orgrimmar.webp",
    n(
      "World of Warcraft: Forever screenshot: Orgrimmar at sunset, with the Horde's buildings and an airship in the sky",
      "Screenshot di World of Warcraft: Forever: Orgrimmar al tramonto, con gli edifici dell'Orda e un dirigibile nel cielo",
      "Captura de World of Warcraft: Forever: Orgrimmar al atardecer, con los edificios de la Horda y un zepelín en el cielo",
    ),
  ),
  racialsDwarf: cover(
    "/media/news-racials-dwarf.webp",
    n(
      "World of Warcraft: Forever cinematic still: a red-bearded dwarf with an axe, in the falling snow",
      "Fotogramma del cinematic di World of Warcraft: Forever: un nano dalla barba rossa con un'ascia, sotto la neve",
      "Fotograma de la cinemática de World of Warcraft: Forever: un enano de barba pelirroja con un hacha, bajo la nieve",
    ),
  ),
  roleplayPvp: cover(
    "/media/news-roleplay-pvp.webp",
    n(
      "World of Warcraft: Forever cinematic still: a hooded undead warrior with the Horde emblem on the chest, shouting",
      "Fotogramma del cinematic di World of Warcraft: Forever: un guerriero non morto incappucciato con il simbolo dell'Orda sul petto, che urla",
      "Fotograma de la cinemática de World of Warcraft: Forever: un guerrero no muerto encapuchado con el emblema de la Horda en el pecho, gritando",
    ),
  ),
  // copertine delle news del 28/10-2/11 (2/11/2026)
  launchTimes: cover(
    "/media/news-launch-times.webp",
    n(
      "World of Warcraft: Forever cinematic still: a city of slender towers and domes behind a glowing violet magic barrier, at sunset",
      "Fotogramma del cinematic di World of Warcraft: Forever: una città di torri sottili e cupole dietro una barriera magica viola e luminosa, al tramonto",
      "Fotograma de la cinemática de World of Warcraft: Forever: una ciudad de torres finas y cúpulas tras una barrera mágica violeta y luminosa, al atardecer",
    ),
  ),
  podcastTech: cover(
    "/media/news-podcast-tech.webp",
    n(
      "World of Warcraft: Forever screenshot of the new water: a calm sea at sunset, with rocks and a small island on the horizon",
      "Screenshot di World of Warcraft: Forever con l'acqua nuova: un mare calmo al tramonto, con scogli e un isolotto all'orizzonte",
      "Captura de World of Warcraft: Forever con el agua nueva: un mar en calma al atardecer, con rocas y un islote en el horizonte",
    ),
  ),
  factionLocks: cover(
    "/media/news-faction-locks.webp",
    n(
      "World of Warcraft: Forever screenshot of the Darkspear Islands battleground: wooden huts on a hill of red sand by a turquoise sea",
      "Screenshot di World of Warcraft: Forever del campo di battaglia Darkspear Islands: capanne di legno su una collina di sabbia rossa sul mare turchese",
      "Captura de World of Warcraft: Forever del campo de batalla Darkspear Islands: chozas de madera en una colina de arena roja junto a un mar turquesa",
    ),
  ),
  classHotfixes: cover(
    "/media/news-class-hotfixes.webp",
    n(
      "World of Warcraft: Forever cinematic still: a hooded warrior in plate armour raises a glowing golden hammer",
      "Fotogramma del cinematic di World of Warcraft: Forever: un guerriero incappucciato in armatura di piastre solleva un martello dorato e luminoso",
      "Fotograma de la cinemática de World of Warcraft: Forever: un guerrero encapuchado con armadura de placas alza un martillo dorado y luminoso",
    ),
  ),
  // copertine delle news del 2-5/11 (5/11/2026)
  newsDevNotesNov2: cover(
    "/media/news-dev-notes-nov-2.webp",
    n(
      "World of Warcraft: Forever cinematic still: a bearded dwarf in furs stands beside a bear at night, as a glowing blue hammer flies overhead",
      "Fotogramma del cinematic di World of Warcraft: Forever: un nano barbuto con le pellicce accanto a un orso di notte, mentre un martello blu e luminoso vola sopra di loro",
      "Fotograma de la cinemática de World of Warcraft: Forever: un enano barbudo con pieles junto a un oso de noche, mientras un martillo azul y luminoso vuela sobre ellos",
    ),
  ),
  newsLaunchDay: cover(
    "/media/news-launch-day.webp",
    n(
      "World of Warcraft: Forever screenshot: three Horde players around a campfire beside a tent on red earth at sunset, with an orc tower behind them",
      "Screenshot di World of Warcraft: Forever: tre giocatori dell'Orda intorno a un fuoco da campo accanto a una tenda, sulla terra rossa al tramonto, con una torre orchesca dietro",
      "Captura de World of Warcraft: Forever: tres jugadores de la Horda alrededor de una hoguera junto a una tienda, sobre tierra roja al atardecer, con una torre orca detrás",
    ),
  ),
  newsTaldramir: cover(
    "/media/news-taldramir.webp",
    n(
      "World of Warcraft: Forever screenshot of Ashenvale with the new lighting: a forest path under tall trees, crossed by shafts of light",
      "Screenshot di World of Warcraft: Forever di Ashenvale con la nuova illuminazione: un sentiero nel bosco sotto alberi altissimi, attraversato da fasci di luce",
      "Captura de World of Warcraft: Forever de Ashenvale con la nueva iluminación: un sendero en el bosque bajo árboles altísimos, atravesado por haces de luz",
    ),
  ),
  newsEveGuides: cover(
    "/media/news-eve-guides.webp",
    n(
      "World of Warcraft: Forever cinematic still: a gigantic tree rises above misty mountains at night, crossed by glowing blue streams",
      "Fotogramma del cinematic di World of Warcraft: Forever: un albero gigantesco si alza sopra montagne nella nebbia, di notte, attraversato da correnti blu luminose",
      "Fotograma de la cinemática de World of Warcraft: Forever: un árbol gigantesco se alza sobre montañas entre la niebla, de noche, atravesado por corrientes azules luminosas",
    ),
  ),
  newsKnownIssues: cover(
    "/media/news-known-issues.webp",
    n(
      "World of Warcraft: Forever screenshot of Dalaran at sunset: a stone road leads to white towers with pointed spires, among pines and red-leaved trees",
      "Screenshot di World of Warcraft: Forever di Dalaran al tramonto: una strada di pietra porta a torri bianche dalle guglie appuntite, fra pini e alberi rossi",
      "Captura de World of Warcraft: Forever de Dalaran al atardecer: un camino de piedra lleva a torres blancas de agujas afiladas, entre pinos y árboles rojos",
    ),
  ),
  newsDayTwo: cover(
    "/media/news-day-two.webp",
    n(
      "World of Warcraft: Forever screenshot of the new water: ships moored at wooden piers in front of a white city, with waves in the foreground",
      "Screenshot di World of Warcraft: Forever della nuova acqua: navi ormeggiate ai pontili di legno davanti a una città bianca, con le onde in primo piano",
      "Captura de World of Warcraft: Forever del agua nueva: barcos amarrados a muelles de madera ante una ciudad blanca, con olas en primer plano",
    ),
  ),
  newsLordaeronQuests: cover(
    "/media/news-lordaeron-quests.webp",
    n(
      "World of Warcraft: Forever screenshot of the Ruins of Lordaeron dungeon: an abomination among ruined stone walls and pines under a green sky",
      "Screenshot di World of Warcraft: Forever del dungeon Ruins of Lordaeron: un abominio fra mura di pietra in rovina e pini sotto un cielo verde",
      "Captura de World of Warcraft: Forever de la mazmorra Ruins of Lordaeron: una abominación entre muros de piedra en ruinas y pinos bajo un cielo verde",
    ),
  ),
  newsRulesetsVideo: cover(
    "/media/news-rulesets-video.webp",
    n(
      "World of Warcraft: Forever screenshot of Darnassus with the new lighting: a character sits on a stone terrace before a pool, domed pavilions and violet trees",
      "Screenshot di World of Warcraft: Forever di Darnassus con la nuova illuminazione: un personaggio seduto su una terrazza di pietra davanti a una vasca, padiglioni a cupola e alberi viola",
      "Captura de World of Warcraft: Forever de Darnassus con la nueva iluminación: un personaje sentado en una terraza de piedra ante un estanque, pabellones con cúpula y árboles violetas",
    ),
  ),
  /** fotogramma 3 del filmato di lancio: news sui ritocchi alle classi del 10/11 */
  newsClassTuning: cover(
    "/media/news-class-tuning.webp",
    n(
      "Still from the World of Warcraft: Forever launch cinematic: two travellers, one of them a bear, climb a snowy mountain slope in a blizzard",
      "Fotogramma del filmato di lancio di World of Warcraft: Forever: due viaggiatori, uno dei quali è un orso, risalgono un pendio innevato nella tormenta",
      "Fotograma de la cinemática de lanzamiento de World of Warcraft: Forever: dos viajeros, uno de ellos un oso, suben una ladera nevada en plena ventisca",
    ),
  ),
  /** Drowned City 062: news su XP dei dungeon e oro delle missioni */
  newsDungeonXpGold: cover(
    "/media/news-dungeon-xp-gold.webp",
    n(
      "World of Warcraft: Forever screenshot of the Drowned City dungeon: a dead tree and wrecked wooden huts on a sunny shore",
      "Screenshot di World of Warcraft: Forever del dungeon Drowned City: un albero secco e capanne di legno in rovina su una riva assolata",
      "Captura de World of Warcraft: Forever de la mazmorra Drowned City: un árbol seco y chozas de madera en ruinas en una orilla soleada",
    ),
  ),
  /** Riverglades 035: news sul bilanciamento delle fazioni sul PvP */
  newsFactionBalance: cover(
    "/media/news-faction-balance.webp",
    n(
      "World of Warcraft: Forever screenshot of the Riverglades: a stone watchtower on a rocky bluff above a river, among wooded hills",
      "Screenshot di World of Warcraft: Forever delle Riverglades: una torre di guardia di pietra su uno sperone di roccia sopra un fiume, fra colline boscose",
      "Captura de World of Warcraft: Forever de los Riverglades: una atalaya de piedra sobre un peñasco junto a un río, entre colinas boscosas",
    ),
  ),
  /** Barrow Deeps 077: news sulle interviste agli sviluppatori sulle incursioni */
  newsRaidsInterviews: cover(
    "/media/news-raids-interviews.webp",
    n(
      "World of Warcraft: Forever screenshot of the Barrow Deeps raid: an icy blue cavern with hanging stalactites and a frozen pool",
      "Screenshot di World of Warcraft: Forever dell'incursione Barrow Deeps: una caverna di ghiaccio azzurro con stalattiti e uno specchio d'acqua gelato",
      "Captura de World of Warcraft: Forever de la banda Cavernas del Túmulo: una caverna de hielo azul con estalactitas y un estanque helado",
    ),
  ),
  /** fotogramma 2 del filmato di lancio: news sulla prima settimana */
  newsFirstWeek: cover(
    "/media/news-first-week.webp",
    n(
      "Still from the World of Warcraft: Forever launch cinematic: a huge shadowy figure looms over dark mountains crossed by glowing blue streams",
      "Fotogramma del filmato di lancio di World of Warcraft: Forever: un'enorme figura d'ombra incombe su montagne scure attraversate da scie azzurre luminose",
      "Fotograma de la cinemática de lanzamiento de World of Warcraft: Forever: una enorme figura en sombra se alza sobre montañas oscuras surcadas por ríos de luz azul",
    ),
  ),
  /** miniatura ufficiale del video "Your Leveling Journey Past 30" (canale YouTube World of Warcraft, 19/10/2026), scelta da Pierluigi */
  levelingPast30: {
    src: "/media/news-leveling-past-30.webp",
    width: 1280,
    height: 720,
    alt: n(
      "Thumbnail of the official World of Warcraft: Forever video: two players on a stone path next to a giant skeleton, beside the words Continuing your Forever journey",
      "Miniatura del video ufficiale di World of Warcraft: Forever: due giocatori su un sentiero di pietra accanto a uno scheletro gigante, con la scritta Continuing your Forever journey",
      "Miniatura del vídeo oficial de World of Warcraft: Forever: dos jugadores en un camino de piedra junto a un esqueleto gigante, con el texto Continuing your Forever journey",
    ),
  },
} satisfies Record<string, Media>;

export type MediaKey = keyof typeof media;

import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Due articoli ufficiali del 20 ottobre 2026: "Explore the New Dungeons of World of Warcraft: Forever" (livelli e luoghi
 * dei nove dungeon) e "World of Warcraft: Forever Raid Overview—Locations, Raid Sizes, and Attunement" (le tre incursioni
 * del 9 dicembre, Onyxia's Lair compresa, e la catena per il Drakefire Amulet). In italiano: "Esplora le nuove
 * Spedizioni" e "Panoramica sulle incursioni".
 */
const DUNGEONS = "https://news.blizzard.com/en-us/article/24301455/explore-the-new-dungeons-of-world-of-warcraft-forever";
const RAIDS = "https://news.blizzard.com/en-us/article/24303009/world-of-warcraft-forever-raid-overviewlocations-raid-sizes-and-attunement";

const item: NewsItem = {
  slug: "nine-dungeons-levels-and-raids-december-9",
  date: "2026-10-20",
  source: "blizzard",
  topic: "news",
  url: DUNGEONS,
  image: media.nineDungeons.src,
  imageAlt: media.nineDungeons.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-legacy-system"],
  title: n(
    "WoW Forever: the levels of the nine new dungeons and the three raids of 9 December, Onyxia's Lair included",
    "WoW Forever: i livelli dei nove dungeon nuovi e le tre incursioni del 9 dicembre, Onyxia's Lair compresa",
    "WoW Forever: niveles de las nueve mazmorras nuevas y las tres bandas del 9 de diciembre, con Onyxia",
  ),
  metaTitle: n("WoW Forever dungeons by level and the 9 December raids", "WoW Forever: dungeon per livello e raid del 9 dicembre", "WoW Forever: mazmorras por nivel y bandas del 9/12"),
  summary: n(
    "On 20 October 2026 Blizzard published two articles that fill the gaps in the map of WoW Forever: the level range and location of each of the nine new dungeons, from the Hall of Thanes (13–18) to Shaper's Terrace (58–60), and the three raids that open on 9 December: the Barrow Deeps for 10 players, Hyjal Summit for 20 and Onyxia's Lair for 40, with the Drakefire Amulet attunement.",
    "Il 20 ottobre 2026 Blizzard ha pubblicato due articoli che riempiono i vuoti nella mappa di WoW Forever: livelli e luogo di ognuno dei nove dungeon nuovi, da Hall of Thanes (13–18) a Shaper's Terrace (58–60), e le tre incursioni che aprono il 9 dicembre: Barrow Deeps per 10 giocatori, Hyjal Summit per 20 e Onyxia's Lair per 40, con la catena del Drakefire Amulet.",
    "El 20 de octubre de 2026 Blizzard publicó dos artículos que llenan los huecos del mapa de WoW Forever: el rango de nivel y el lugar de cada una de las nueve mazmorras nuevas, del Salón de los Feudales (13–18) al Bancal del Creador (58–60), y las tres bandas que abren el 9 de diciembre: Cavernas del Túmulo para 10 jugadores, Cima Hyjal para 20 y Guarida de Onyxia para 40, con la cadena del Drakefire Amulet.",
  ),
  description: n(
    "Blizzard's articles of 20 October 2026: levels and locations of WoW Forever's nine new dungeons, and the three raids of 9 December, Onyxia's Lair included.",
    "Gli articoli Blizzard del 20 ottobre 2026: livelli e luoghi dei nove dungeon nuovi di WoW Forever e le tre incursioni del 9 dicembre, Onyxia's Lair compresa.",
    "Artículos de Blizzard del 20 de octubre: niveles y lugares de las nueve mazmorras nuevas de WoW Forever y las tres bandas del 9 de diciembre, con Onyxia.",
  ),
  highlights: {
    en: [
      { label: "Nine dungeons, 13 to 60", text: "every level range and location is now official", anchor: "dungeons" },
      { label: "What each one is about", text: "from the dwarven crypts to a titan terrace", anchor: "stories" },
      { label: "Three raids on 9 December", text: "Barrow Deeps (10), Hyjal Summit (20), Onyxia's Lair (40)", anchor: "raids" },
      { label: "Onyxia attunement", text: "the Drakefire Amulet questline, step by step", anchor: "attunement" },
      { label: "Excavation Site", text: "24–29 in the article, 26–31 in the beta notes", anchor: "excavation" },
    ],
    it: [
      { label: "Nove dungeon, dal 13 al 60", text: "ogni intervallo di livello e ogni luogo ora è ufficiale", anchor: "dungeon" },
      { label: "Di cosa parla ognuno", text: "dalle cripte dei nani a una terrazza dei titani", anchor: "storie" },
      { label: "Tre incursioni il 9 dicembre", text: "Barrow Deeps (10), Hyjal Summit (20), Onyxia's Lair (40)", anchor: "incursioni" },
      { label: "Attunement di Onyxia", text: "la catena del Drakefire Amulet, passo per passo", anchor: "attunement" },
      { label: "Excavation Site", text: "24–29 nell'articolo, 26–31 nelle note della beta", anchor: "scavo" },
    ],
    es: [
      { label: "Nueve mazmorras, del 13 al 60", text: "cada rango de nivel y cada lugar ya es oficial", anchor: "mazmorras" },
      { label: "De qué va cada una", text: "de las criptas enanas a una terraza de los titanes", anchor: "historias" },
      { label: "Tres bandas el 9 de diciembre", text: "Cavernas del Túmulo (10), Cima Hyjal (20), Guarida de Onyxia (40)", anchor: "bandas" },
      { label: "Sintonización de Onyxia", text: "la cadena del Drakefire Amulet, paso a paso", anchor: "sintonizacion" },
      { label: "Excavation Site", text: "24–29 en el artículo, 26–31 en las notas de la beta", anchor: "excavacion" },
    ],
  },
  body: n(
    `On 20 October 2026 Blizzard published [Explore the New Dungeons of World of Warcraft: Forever](${DUNGEONS}) and [World of Warcraft: Forever Raid Overview](${RAIDS}). Together they answer two of the questions our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids) had listed as unknown: the levels of six of the nine dungeons, and which raids open on 9 December.

## The nine dungeons and their levels {#dungeons}

All nine are five-player dungeons, from level 13 to 60.

| Dungeon | Levels | Where |
|---|---|---|
| Hall of Thanes | 13–18 | Beneath Ironforge, Dun Morogh |
| Ruins of Lordaeron | 15–20 | The ruins above the Undercity, Tirisfal Glades |
| Excavation Site | 24–29 | Above Whelgar's Excavation, Wetlands |
| City of Dalaran | 28–33 | Alterac Mountains |
| The Drowned City | 35–40 | Off the coast of Stranglethorn Vale, west of Grom'gol |
| Krol'dok Stronghold | 40–45 | Riverglades |
| Alcaz Prison | 48–53 | Alcaz Island, Dustwallow Marsh |
| Blackmaw Hold | 55–60 | Azshara |
| Shaper's Terrace | 58–60 | The northern hills of Un'Goro Crater |

Two access notes: Hall of Thanes is easy to reach for the Alliance and deep in enemy territory for the Horde, Ruins of Lordaeron the other way round. **City of Dalaran requires an attunement questline**: for the Alliance it starts with "An Alarming Request" from Emissary Jacques in Southshore, for the Horde with "Key to the City" and "Prison Break-In" from Magus Wordeen Voidglare in Tarren Mill.

## What each dungeon is about {#stories}

- **Hall of Thanes**: the resting place of the dwarven kings, broken into by intruders suspected to be Dark Iron dwarves.
- **Ruins of Lordaeron**: the Forsaken reclaim the ruined city while a necromancer gathers power.
- **Excavation Site**: beyond the dig site, a place frozen in time with titan constructs and dangerous wildlife.
- **City of Dalaran**: the barrier has fallen and the city is full of arcane chaos; you enter through the sewers and choose among multiple paths and encounters.
- **The Drowned City**: troll ruins risen from the sea, with trolls and naga; you dive to find the entrance, and the open-air dungeon turns from mist to storm before the final fight.
- **Krol'dok Stronghold**: an ogre fortress in the Riverglades, with strange chanting after nightfall.
- **Alcaz Prison**: the island prison of the rumours about King Varian Wrynn finally opens, with the Defias Brotherhood and naga at war inside.
- **Blackmaw Hold**: a furbolg city beyond a sealed gate in Azshara, a "substantial max-level adventure with multiple routes and bosses", and possibly a path even farther below Azeroth.
- **Shaper's Terrace**: a titan facility above Un'Goro; you bring power crystals from the crater and use them at consoles inside.

## The three raids of 9 December {#raids}

| Raid | Size | Level | Where |
|---|---|---|---|
| The Barrow Deeps | 10 players | 60 | Within Mount Hyjal, with entrances from Mount Hyjal, Winterspring and Blackmaw Hold |
| Hyjal Summit | 20 players | 60 | The summit of Mount Hyjal, near Nordrassil |
| Onyxia's Lair | 40 players | 60 | Dustwallow Marsh |

The **Barrow Deeps** is the prison that held Illidan Stormrage for 10,000 years, with eight bosses. **Hyjal Summit** has 13 bosses, opens with an ancient guardian and then lets the raid choose among multiple paths, above and below ground. **Onyxia's Lair** returns as a 40-player raid: a three-phase fight with heavy fire damage, so Blizzard advises building fire resistance, and every raider needs the Drakefire Amulet in their bags (it does not need to be equipped). All raids are "currently planned" to reset weekly.

## The Onyxia attunement {#attunement}

The amulet comes from a faction-specific questline. For the Alliance, as Blizzard lists it: "Dragonkin Menace" from Helendis Riverhorn in the Burning Steppes, the six quests named "The True Masters", "Marshal Windsor" in Blackrock Depths, "Abandoned Hope", "A Crumpled Up Note" (an item dropped in Blackrock Depths), "A Shred of Hope" (Golem Lord Argelmach and General Angerforge), "Jail Break!", "Stormwind Rendezvous", "The Great Masquerade" in Stormwind, "The Dragon's Eye" from Highlord Bolvar Fordragon, and finally "Drakefire Amulet" in Upper Blackrock Spire, where General Drakkisath drops the Blood of the Black Dragon Champion. The article has a Horde tab with the Horde version of the chain.

## A difference on Excavation Site {#excavation}

The beta development notes of 1 October gave the Excavation Site a level range of 26–31; the article says 24–29. We report the article as the latest official figure and keep the note in the guide.

## What we don't know yet {#unknown}

- The number of bosses in each dungeon.
- Whether Molten Core, which the podcast of 22 October describes as "reimagined", will be available at launch or later.
- The Italian names: Blizzard's Italian articles keep the English ones, and so do we.`,
    `Il 20 ottobre 2026 Blizzard ha pubblicato [Explore the New Dungeons of World of Warcraft: Forever](${DUNGEONS}) (in italiano "Esplora le nuove Spedizioni") e [World of Warcraft: Forever Raid Overview](${RAIDS}) ("Panoramica sulle incursioni"). Insieme rispondono a due delle domande che la nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids) dava per aperte: i livelli di sei dei nove dungeon e quali incursioni si aprono il 9 dicembre. I nomi restano in inglese, come nelle pagine italiane di Blizzard.

## I nove dungeon e i loro livelli {#dungeon}

Sono tutti dungeon (spedizioni) per cinque giocatori, dal livello 13 al 60.

| Dungeon | Livelli | Dove |
|---|---|---|
| Hall of Thanes | 13–18 | Sotto Ironforge, Dun Morogh |
| Ruins of Lordaeron | 15–20 | Le rovine sopra Undercity, Tirisfal Glades |
| Excavation Site | 24–29 | Sopra Whelgar's Excavation, Wetlands |
| City of Dalaran | 28–33 | Alterac Mountains |
| The Drowned City | 35–40 | Al largo di Stranglethorn Vale, a ovest di Grom'gol |
| Krol'dok Stronghold | 40–45 | Riverglades |
| Alcaz Prison | 48–53 | Alcaz Island, Dustwallow Marsh |
| Blackmaw Hold | 55–60 | Azshara |
| Shaper's Terrace | 58–60 | Le colline a nord di Un'Goro Crater |

Due note sull'accesso: Hall of Thanes è comodo per l'Alleanza e in pieno territorio nemico per l'Orda, Ruins of Lordaeron il contrario. **City of Dalaran richiede una catena di attunement**: per l'Alleanza parte con "An Alarming Request" da Emissary Jacques a Southshore, per l'Orda con "Key to the City" e "Prison Break-In" da Magus Wordeen Voidglare a Tarren Mill.

## Di cosa parla ogni dungeon {#storie}

- **Hall of Thanes**: la cripta dei re nani, violata da intrusi che si sospetta siano nani Dark Iron.
- **Ruins of Lordaeron**: i Forsaken riconquistano la città in rovina mentre un negromante accumula potere.
- **Excavation Site**: oltre lo scavo, un luogo fermo nel tempo con costrutti dei titani e fauna pericolosa.
- **City of Dalaran**: la barriera è caduta e la città è piena di caos arcano; si entra dalle fogne e si sceglie fra più percorsi e scontri.
- **The Drowned City**: rovine troll riemerse dal mare, con troll e naga; ci si immerge per trovare l'ingresso, e il dungeon a cielo aperto passa dalla nebbia alla tempesta prima dello scontro finale.
- **Krol'dok Stronghold**: una fortezza degli ogre nelle Riverglades, con strani canti dopo il tramonto.
- **Alcaz Prison**: la prigione sull'isola delle voci su re Varian Wrynn apre finalmente, con Defias Brotherhood e naga in guerra dentro.
- **Blackmaw Hold**: una città dei furbolg oltre un cancello sigillato ad Azshara, "un'avventura corposa al livello massimo con più percorsi e boss", e forse una via ancora più in profondità sotto Azeroth.
- **Shaper's Terrace**: una struttura dei titani sopra Un'Goro; porti i cristalli di potere raccolti nel cratere e li usi alle console all'interno.

## Le tre incursioni del 9 dicembre {#incursioni}

| Incursione | Giocatori | Livello | Dove |
|---|---|---|---|
| The Barrow Deeps | 10 | 60 | Dentro Mount Hyjal, con ingressi da Mount Hyjal, Winterspring e Blackmaw Hold |
| Hyjal Summit | 20 | 60 | La cima di Mount Hyjal, vicino a Nordrassil |
| Onyxia's Lair | 40 | 60 | Dustwallow Marsh |

**Barrow Deeps** è la prigione che ha tenuto Illidan Stormrage per 10.000 anni, con otto boss. **Hyjal Summit** ha 13 boss, si apre con un guardiano antico e poi lascia scegliere all'incursione fra più percorsi, sopra e sotto terra. **Onyxia's Lair** torna come incursione da 40: uno scontro in tre fasi con molto danno da fuoco, per cui Blizzard consiglia di farsi la resistenza al fuoco, e ogni membro deve avere il Drakefire Amulet nelle borse (non serve equipaggiarlo). Tutte le incursioni, "secondo i piani attuali", si azzerano ogni settimana.

## L'attunement di Onyxia {#attunement}

L'amuleto arriva da una catena di missioni diversa per fazione. Per l'Alleanza, come la elenca Blizzard: "Dragonkin Menace" da Helendis Riverhorn nelle Burning Steppes, le sei missioni chiamate "The True Masters", "Marshal Windsor" in Blackrock Depths, "Abandoned Hope", "A Crumpled Up Note" (un oggetto che droppa in Blackrock Depths), "A Shred of Hope" (Golem Lord Argelmach e General Angerforge), "Jail Break!", "Stormwind Rendezvous", "The Great Masquerade" a Stormwind, "The Dragon's Eye" da Highlord Bolvar Fordragon, e infine "Drakefire Amulet" in Upper Blackrock Spire, dove General Drakkisath lascia il Blood of the Black Dragon Champion. L'articolo ha una scheda Horde con la versione della catena per l'Orda.

## Una differenza su Excavation Site {#scavo}

Le note di sviluppo della beta del 1° ottobre davano a Excavation Site i livelli 26–31; l'articolo dice 24–29. Riportiamo l'articolo come dato ufficiale più recente e teniamo la nota nella guida.

## Cosa non sappiamo ancora {#non-sappiamo}

- Il numero di boss di ogni dungeon.
- Se Molten Core, che il podcast del 22 ottobre descrive come "reimagined", sarà disponibile al lancio o dopo.
- I nomi italiani: gli articoli italiani di Blizzard tengono quelli inglesi, e così facciamo noi.`,
    `El 20 de octubre de 2026 Blizzard publicó [Explore the New Dungeons of World of Warcraft: Forever](${DUNGEONS}) y [World of Warcraft: Forever Raid Overview](${RAIDS}). Juntos responden a dos de las preguntas que nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids) daba por abiertas: los niveles de seis de las nueve mazmorras y qué bandas abren el 9 de diciembre. Los nombres en español son los de las páginas de Blizzard de España; los nuevos sin versión oficial se quedan en inglés.

## Las nueve mazmorras y sus niveles {#mazmorras}

Todas son mazmorras para cinco jugadores, del nivel 13 al 60.

| Mazmorra | Niveles | Dónde |
|---|---|---|
| Salón de los Feudales (Hall of Thanes) | 13–18 | Bajo Forjaz, Dun Morogh |
| Ruinas de Lordaeron | 15–20 | Las ruinas sobre Entrañas, Claros de Tirisfal |
| Excavation Site | 24–29 | Sobre la Excavación de Whelgar, Los Humedales |
| Ciudad de Dalaran | 28–33 | Montañas de Alterac |
| Ciudad Sumergida (The Drowned City) | 35–40 | Frente a la costa de la Vega de Tuercespina, al oeste de Grom'gol |
| Bastión Krol'dok | 40–45 | Clarofluvial |
| Prisión de Alcaz | 48–53 | Isla de Alcaz, Marjal Revolcafango |
| Bastión Faucenegra (Blackmaw Hold) | 55–60 | Azshara |
| Bancal del Creador (Shaper's Terrace) | 58–60 | Las colinas del norte del Cráter de Un'Goro |

Dos notas de acceso: el Salón de los Feudales es cómodo para la Alianza y está en pleno territorio enemigo para la Horda; las Ruinas de Lordaeron, al revés. **La Ciudad de Dalaran exige una cadena de sintonización**: para la Alianza empieza con "An Alarming Request" del emisario Jacques en Costasur; para la Horda, con "Key to the City" y "Prison Break-In" del magus Wordeen Voidglare en el Molino Tarren.

## De qué va cada mazmorra {#historias}

- **Salón de los Feudales**: la cripta de los reyes enanos, asaltada por intrusos que se sospecha que son enanos Hierro Negro.
- **Ruinas de Lordaeron**: los Renegados recuperan la ciudad en ruinas mientras un nigromante acumula poder.
- **Excavation Site**: más allá de la excavación, un lugar detenido en el tiempo con constructos de los titanes y fauna peligrosa.
- **Ciudad de Dalaran**: la barrera ha caído y la ciudad está llena de caos arcano; se entra por las alcantarillas y se elige entre varios caminos y encuentros.
- **Ciudad Sumergida**: ruinas trol surgidas del mar, con troles y nagas; hay que bucear para encontrar la entrada, y la mazmorra a cielo abierto pasa de la niebla a la tormenta antes del combate final.
- **Bastión Krol'dok**: una fortaleza de ogros en Clarofluvial, con cánticos extraños al caer la noche.
- **Prisión de Alcaz**: la prisión de la isla de los rumores sobre el rey Varian Wrynn por fin abre, con la Hermandad Defias y los nagas en guerra dentro.
- **Bastión Faucenegra**: una ciudad fúrbolg tras una puerta sellada en Azshara, "una aventura amplia de nivel máximo con varias rutas y jefes", y quizá un camino aún más abajo bajo Azeroth.
- **Bancal del Creador**: una instalación de los titanes sobre Un'Goro; llevas cristales de poder recogidos en el cráter y los usas en consolas del interior.

## Las tres bandas del 9 de diciembre {#bandas}

| Banda | Jugadores | Nivel | Dónde |
|---|---|---|---|
| Cavernas del Túmulo (The Barrow Deeps) | 10 | 60 | Dentro del Monte Hyjal, con entradas desde el Monte Hyjal, Cuna del Invierno y Bastión Faucenegra |
| Cima Hyjal | 20 | 60 | La cima del Monte Hyjal, junto a Nordrassil |
| Guarida de Onyxia | 40 | 60 | Marjal Revolcafango |

Las **Cavernas del Túmulo** son la prisión que retuvo a Illidan Tempestira durante 10 000 años, con ocho jefes. La **Cima Hyjal** tiene 13 jefes, empieza con un guardián ancestral y luego deja a la banda elegir entre varios caminos, sobre y bajo tierra. La **Guarida de Onyxia** vuelve como banda de 40: un combate en tres fases con mucho daño de fuego, por lo que Blizzard aconseja conseguir resistencia al fuego, y cada miembro necesita el Drakefire Amulet en las bolsas (no hace falta equiparlo). Todas las bandas, "según los planes actuales", se reinician cada semana.

## La sintonización de Onyxia {#sintonizacion}

El amuleto sale de una cadena de misiones distinta por facción. Para la Alianza, tal como la enumera Blizzard: "Dragonkin Menace" de Helendis Riverhorn en Las Estepas Ardientes, las seis misiones llamadas "The True Masters", "Marshal Windsor" en Profundidades de Roca Negra, "Abandoned Hope", "A Crumpled Up Note" (un objeto que cae en Profundidades de Roca Negra), "A Shred of Hope" (Golem Lord Argelmach y General Angerforge), "Jail Break!", "Stormwind Rendezvous", "The Great Masquerade" en Ventormenta, "The Dragon's Eye" del alto señor Bolvar Fordragon, y por último "Drakefire Amulet" en Cumbre de Roca Negra Superior, donde el general Drakkisath suelta la Blood of the Black Dragon Champion. El artículo tiene una pestaña Horde con la versión de la cadena para la Horda.

## Una diferencia en Excavation Site {#excavacion}

Las notas de desarrollo de la beta del 1 de octubre daban a Excavation Site los niveles 26–31; el artículo dice 24–29. Tomamos el artículo como dato oficial más reciente y dejamos la nota en la guía.

## Lo que aún no sabemos {#no-sabemos}

- El número de jefes de cada mazmorra.
- Si el Núcleo de Magma (Molten Core), que el pódcast del 22 de octubre describe como "reimagined", estará disponible en el lanzamiento o después.
- Los nombres oficiales en español de las mazmorras nuevas que todavía no tienen uno.`,
  ),
  faq: {
    en: [
      {
        q: "What level are the new dungeons in WoW Forever?",
        a: "From 13 to 60: Hall of Thanes 13–18, Ruins of Lordaeron 15–20, Excavation Site 24–29, City of Dalaran 28–33, The Drowned City 35–40, Krol'dok Stronghold 40–45, Alcaz Prison 48–53, Blackmaw Hold 55–60 and Shaper's Terrace 58–60, according to Blizzard's article of 20 October 2026.",
      },
      {
        q: "Which raids open on 9 December in WoW Forever?",
        a: "Three level 60 raids: the Barrow Deeps (10 players), Hyjal Summit (20 players) and Onyxia's Lair (40 players, Drakefire Amulet required).",
      },
    ],
    it: [
      {
        q: "Di che livello sono i dungeon nuovi di WoW Forever?",
        a: "Dal 13 al 60: Hall of Thanes 13–18, Ruins of Lordaeron 15–20, Excavation Site 24–29, City of Dalaran 28–33, The Drowned City 35–40, Krol'dok Stronghold 40–45, Alcaz Prison 48–53, Blackmaw Hold 55–60 e Shaper's Terrace 58–60, secondo l'articolo di Blizzard del 20 ottobre 2026.",
      },
      {
        q: "Quali incursioni aprono il 9 dicembre in WoW Forever?",
        a: "Tre incursioni di livello 60: Barrow Deeps (10 giocatori), Hyjal Summit (20 giocatori) e Onyxia's Lair (40 giocatori, serve il Drakefire Amulet).",
      },
    ],
    es: [
      {
        q: "¿De qué nivel son las mazmorras nuevas de WoW Forever?",
        a: "Del 13 al 60: Salón de los Feudales 13–18, Ruinas de Lordaeron 15–20, Excavation Site 24–29, Ciudad de Dalaran 28–33, Ciudad Sumergida 35–40, Bastión Krol'dok 40–45, Prisión de Alcaz 48–53, Bastión Faucenegra 55–60 y Bancal del Creador 58–60, según el artículo de Blizzard del 20 de octubre de 2026.",
      },
      {
        q: "¿Qué bandas abren el 9 de diciembre en WoW Forever?",
        a: "Tres bandas de nivel 60: Cavernas del Túmulo (10 jugadores), Cima Hyjal (20 jugadores) y Guarida de Onyxia (40 jugadores, hace falta el Drakefire Amulet).",
      },
    ],
  },
};

export default item;

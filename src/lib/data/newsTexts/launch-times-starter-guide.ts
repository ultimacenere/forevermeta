import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Lancio di WoW Forever: quattro articoli ufficiali di Blizzard News letti il 2/11/2026 nelle tre lingue.
 * - "World of Warcraft: Forever Goes Live Globally November 4!" (29/10, 21:00 UTC): tabella degli orari per regione.
 *   La pagina it-it non ha la tabella e nel sommario scrive "00:01 CET"; la es-es ha la tabella senza Brasile e Regno Unito.
 * - "New Player's Starter Guide" (28/10, 17:00 UTC): Experience Preset, controller "in a beta state", gruppi solo con
 *   stesso set di regole e stessa fazione, nomi, professioni.
 * - "Return to Azeroth" (29/10, 19:00 UTC): "Year 1", nove dungeon, combinazioni, classi Skyborne.
 * - WoW Weekly del 30/10 (17:01 UTC): "Beta by the numbers", un'immagine presente solo nella versione en-us.
 * Gli orari fuori tabella (EST, NZDT, Canarie, Città del Messico, Bogotá, Buenos Aires) sono conversioni nostre da 23:00 UTC.
 */
const LAUNCH = "https://news.blizzard.com/en-us/article/24315820/world-of-warcraft-forever-goes-live-globally-november-4";
const LAUNCH_IT = "https://news.blizzard.com/it-it/article/24315820/world-of-warcraft-forever-disponibile-a-livello-globale-dal-5-novembre";
const LAUNCH_ES = "https://news.blizzard.com/es-es/article/24315820/world-of-warcraft-forever-saldra-en-todo-el-mundo-el-5-de-noviembre";
const STARTER = "https://news.blizzard.com/en-us/article/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever";
const STARTER_IT = "https://news.blizzard.com/it-it/article/24315280/guida-rapida-per-principianti-ti-diamo-il-benvenuto-su-world-of-warcraft-forever";
const STARTER_ES = "https://news.blizzard.com/es-es/article/24315280/guia-de-iniciacion-para-nuevos-jugadores-te-damos-la-bienvenida-a-world-of-warcraft-forever";
const RETURN = "https://news.blizzard.com/en-us/article/24315643/return-to-azeroth-in-world-of-warcraft-forever";
const RETURN_IT = "https://news.blizzard.com/it-it/article/24315643/torna-su-azeroth-con-world-of-warcraft-forever";
const RETURN_ES = "https://news.blizzard.com/es-es/article/24315643/vuelve-a-azeroth-con-world-of-warcraft-forever";
const WEEKLY = "https://news.blizzard.com/en-us/article/24316094/prepare-for-forever-try-midnights-talebound-and-discover-sweet-treats-in-wow-weekly";

const item: NewsItem = {
  slug: "wow-forever-launch-times-starter-guide",
  date: "2026-10-29",
  source: "blizzard",
  topic: "event",
  url: LAUNCH,
  image: media.launchTimes.src,
  imageAlt: media.launchTimes.alt,
  guides: ["wow-forever-release-date", "wow-forever-rulesets", "wow-forever-camping-professions"],
  title: n(
    "WoW Forever goes live on 4 November: launch times by region and what to choose at your first login",
    "WoW Forever esce alla mezzanotte del 5 novembre: gli orari per regione e cosa scegliere al primo accesso",
    "WoW Forever sale el 4 de noviembre: horarios por región y qué elegir al entrar por primera vez",
  ),
  metaTitle: n(
    "WoW Forever launch times by region and starter guide",
    "WoW Forever: orari del lancio e guida per cominciare",
    "WoW Forever: horarios del lanzamiento y guía de inicio",
  ),
  summary: n(
    "Blizzard has published the official launch times of WoW Forever: 3:00 p.m. PST on 4 November, which is 23:00 UTC and midnight in Central Europe. Two guides, for new and returning players, explain what you choose at your first login, from the Classic or Enhanced Experience Preset to the ruleset. Groups, guilds, dungeons and raids only work within the same ruleset and faction.",
    "Blizzard ha pubblicato gli orari ufficiali del lancio di WoW Forever: le 15:00 PST del 4 novembre, cioè le 23:00 UTC, la mezzanotte fra il 4 e il 5 novembre in Italia. Due guide, per chi comincia e per chi torna, spiegano cosa si sceglie al primo accesso, dall'Experience Preset Classic o Enhanced al set di regole. Gruppi, gilde, dungeon e incursioni funzionano solo con lo stesso set di regole e la stessa fazione.",
    "Blizzard ha publicado los horarios oficiales del lanzamiento de WoW Forever: las 15:00 PST del 4 de noviembre, es decir, las 23:00 UTC, la medianoche del 4 al 5 de noviembre en la España peninsular. Dos guías, para quien empieza y para quien vuelve, explican qué se elige al entrar por primera vez, de la configuración Clásica o Mejorada al conjunto de reglas. Grupos, hermandades, mazmorras y bandas solo funcionan con el mismo conjunto de reglas y la misma facción.",
  ),
  description: n(
    "WoW Forever launch times by region (3:00 p.m. PST, midnight CET), the Classic or Enhanced Experience Preset, rulesets, names and the official beta numbers.",
    "Orari del lancio di WoW Forever per regione (in Italia mezzanotte del 5/11), Experience Preset Classic o Enhanced, set di regole, nomi e numeri della beta.",
    "Horarios del lanzamiento de WoW Forever por región (medianoche CET del 5/11), configuración Clásica o Mejorada, conjuntos de reglas, nombres y la beta.",
  ),
  highlights: {
    en: [
      { label: "Launch times", text: "3:00 p.m. PST on 4 November, midnight CET in Europe", anchor: "times" },
      { label: "Experience Preset", text: "Classic or Enhanced at your first login, and you can change it later", anchor: "preset" },
      { label: "Same ruleset, same faction", text: "the only way to group, join a guild or raid together", anchor: "rulesets" },
      { label: "Names and professions", text: "one full name per region, two primary professions plus three secondary", anchor: "names" },
      { label: "Return to Azeroth", text: "Year 1, nine dungeons and the Skyborne classes", anchor: "return" },
      { label: "The beta in numbers", text: "8,862,354 characters created and almost 10 million PvP kills", anchor: "numbers" },
      { label: "Translations", text: "which articles exist in Italian and Spanish", anchor: "translations" },
    ],
    it: [
      { label: "Gli orari", text: "le 15:00 PST del 4 novembre, in Italia la mezzanotte", anchor: "orari" },
      { label: "Experience Preset", text: "Classic o Enhanced al primo accesso, e si può cambiare", anchor: "preset" },
      { label: "Stesso set, stessa fazione", text: "l'unico modo per fare gruppo, gilda o incursioni insieme", anchor: "set-di-regole" },
      { label: "Nomi e professioni", text: "un nome completo per regione, due professioni primarie più tre secondarie", anchor: "nomi" },
      { label: "Return to Azeroth", text: "l'Anno 1, nove dungeon e le classi degli Skyborne", anchor: "ritorno" },
      { label: "La beta in numeri", text: "8.862.354 personaggi creati e quasi 10 milioni di uccisioni PvP", anchor: "numeri" },
      { label: "Le traduzioni", text: "quali articoli ci sono in italiano e in spagnolo", anchor: "traduzioni" },
    ],
    es: [
      { label: "Los horarios", text: "las 15:00 PST del 4 de noviembre, medianoche CET en la España peninsular", anchor: "horarios" },
      { label: "Configuración de la experiencia", text: "Clásica o Mejorada al entrar por primera vez, y se puede cambiar", anchor: "configuracion" },
      { label: "Mismo conjunto, misma facción", text: "la única forma de agruparse, entrar en una hermandad o hacer bandas", anchor: "conjuntos" },
      { label: "Nombres y profesiones", text: "un nombre completo por región, dos profesiones principales y tres secundarias", anchor: "nombres" },
      { label: "Vuelve a Azeroth", text: "el año 1, nueve mazmorras y las clases de los célicos", anchor: "regreso" },
      { label: "La beta en cifras", text: "8.862.354 personajes creados y casi 10 millones de muertes JcJ", anchor: "cifras" },
      { label: "Traducciones", text: "qué artículos existen en italiano y en español", anchor: "traducciones" },
    ],
  },
  body: n(
    `Between 28 and 30 October 2026 Blizzard published four articles for the launch of WoW Forever: the official launch times by region in [World of Warcraft: Forever Goes Live Globally November 4!](${LAUNCH}) (29 October), a [New Player's Starter Guide](${STARTER}) (28 October), a guide for returning players, [Return to Azeroth](${RETURN}) (29 October), and a [WoW Weekly](${WEEKLY}) with the numbers of the beta (30 October). Here is what you need before logging in. Everything below comes from those articles; where we add a conversion of our own, we say so.

## Launch times by region {#times}

WoW Forever goes live on **Wednesday 4 November 2026 at 3:00 p.m. PST**, which is **23:00 UTC**. This is Blizzard's table:

| Region | Time | Day |
|---|---|---|
| Americas (PST) | 3:00 p.m. | 4 November |
| Brazil (BRT) | 8:00 p.m. | 4 November |
| UK (GMT) | 11:00 p.m. | 4 November |
| Europe (CET) | 12:00 a.m. (midnight) | 5 November |
| Taiwan (CST) | 7:00 a.m. | 5 November |
| Korea (KST) | 8:00 a.m. | 5 November |
| Australia and New Zealand (AEDT) | 10:00 a.m. | 5 November |
| UTC | 23:00 | 4 November |

Our conversion from 23:00 UTC, outside the table: 6:00 p.m. EST on the US East Coast, and noon on 5 November in New Zealand (NZDT), which Blizzard groups with Australia under AEDT, the time of Sydney and Melbourne. US daylight saving time ended on 1 November, so the Pacific time is PST, not PDT.

## Before your first login {#setup}

You can play on Windows or Mac with keyboard and mouse. Controller support exists, but Blizzard describes it as "in a beta state". WoW Forever is included with an active World of Warcraft subscription or Game Time, and you install it from the Battle.net app by choosing WoW: Forever in the game version menu.

## Experience Preset: Classic or Enhanced {#preset}

The first time you log in, **before you choose a ruleset**, the game asks you to choose an **Experience Preset**. It sets a group of options at once:

| Setting | Classic | Enhanced |
|---|---|---|
| Character models | Standard Definition (SD) | High Definition (HD) |
| Quest points of interest and objective areas | off | on |
| One-bag | off | on |
| Transmog | off | on |
| Default keyboard binds | turn the camera | strafe |
| Screen layout of the interface | classic | centralized |

Blizzard's advice is to start with Enhanced if you are unsure. The preset is a starting point, not a lock: you only see this screen at your first login, and afterwards you can change the preset or single settings from the Options (Game Menu > Options in the Starter Guide, System > Preset in Return to Azeroth).

Separately, **each time you create a character** you choose HD or SD models and animations. It only changes the look, not abilities or progression, and you can switch later in the Options or at a Barbershop in game.

## Rulesets and factions: decide with your friends {#rulesets}

At launch there are four rulesets: Normal, PvP, Roleplay and Roleplay-PvP. Hardcore will come "sometime after launch", with no date. The Starter Guide is clear: characters can **group, join guilds, run dungeons and raid only with players on the same ruleset and the same faction**. If you want to play with friends, agree on both before you create your characters. For anyone unsure, Blizzard suggests Normal.

The differences between rulesets are in our [rulesets guide](/en/guides/wow-forever-rulesets). The limits on the PvP ruleset seen during name reservation are in [our article of 1 November](/en/news/name-filter-fix-faction-locks).

## Names and professions {#names}

- **Names**: each character has a main name and a secondary name, and the complete combination must be unique **within your region**, not within a ruleset. You can hide the secondary name above your character under Options > Nameplates > My Secondary Name, but it still appears in chat.
- **Professions**: two primary professions plus all three secondary ones, Cooking, Fishing and First Aid. More in our [camping and professions guide](/en/guides/wow-forever-camping-professions).

## Return to Azeroth, for those coming back {#return}

The article for returning players adds the background:

- the setting is the early "Year 1" of the original game, before Kazzak reopened the Dark Portal;
- nine new five-player dungeons, levels 13–60: six in the Eastern Kingdoms (Hall of Thanes, Ruins of Lordaeron, Excavation Site, City of Dalaran, The Drowned City, Krol'dok Stronghold) and three in Kalimdor (Alcaz Prison, Blackmaw Hold, Shaper's Terrace);
- new race and class combinations: Human Hunter, Dwarf Shaman and Gnome Priest for the Alliance, Orc Mage, Troll Warlock and Undead Paladin for the Horde;
- the Skyborne can be Druids, Hunters, Rogues and Warriors, plus Mages on the Alliance side and Shamans on the Horde side; playing them requires the Skyborne Heroic Pack or higher;
- PvP with Honor and Rank, and the Darkspear Islands battleground: 15 against 15, levels 30–60, four capture points and a central flag, first team to 2,000 points wins;
- Hardcore "coming later".

## What is in the game at launch {#launch-content}

From the launch article: more than **1,000 new quests** from level 1 to 60, and the Riverglades alone have more than 150, across much of the mid-30s to mid-40s. On **9 December** the first three raids open to level 60 characters: Barrow Deeps, Hyjal Summit and Onyxia's Lair. The dungeons and raids are in our [zones, dungeons and raids guide](/en/guides/wow-forever-zones-dungeons-raids), all the dates in our [calendar](/en/calendar).

## The beta in numbers {#numbers}

On 30 October the WoW Weekly published "Beta by the numbers", an image with the official statistics of the beta that ended on 23 October:

- **8,862,354** characters created, of which **1,889,084** Skyborne and **612,096** Forsaken Paladins;
- **9,959,014** PvP kills and **1,248,125** duels; the zone with the most PvP was Hillsbrad Foothills;
- **1,157,204** deaths from falling;
- the deadliest dungeon was Hall of Thanes, the deadliest creature a Kobold Miner.

## In Italian and Spanish {#translations}

The Starter Guide and Return to Azeroth have complete Italian and Spanish versions. The launch article exists in both languages too, but the Italian page has no times table and its summary says "00:01 CET", while the Spanish page has the table without the Brazil and UK rows. The beta numbers are only in the English WoW Weekly. The official time is the one in the table: midnight CET.`,
    `Fra il 28 e il 30 ottobre 2026 Blizzard ha pubblicato quattro articoli per il lancio di WoW Forever: gli orari ufficiali per regione in [World of Warcraft: Forever Goes Live Globally November 4!](${LAUNCH}) (29 ottobre), una [guida per chi comincia](${STARTER_IT}) (New Player's Starter Guide, 28 ottobre), una per chi torna, [Return to Azeroth](${RETURN_IT}) (29 ottobre), e un [WoW Weekly](${WEEKLY}) con i numeri della beta (30 ottobre). Ecco cosa serve sapere prima di entrare. Tutto viene da quegli articoli; dove aggiungiamo un nostro calcolo, lo diciamo.

## Gli orari per regione {#orari}

WoW Forever esce **mercoledì 4 novembre 2026 alle 15:00 PST**, cioè alle **23:00 UTC**: in Italia è la **mezzanotte fra mercoledì 4 e giovedì 5 novembre**. Questa è la tabella di Blizzard:

| Regione | Ora | Giorno |
|---|---|---|
| Americhe (PST) | 15:00 | 4 novembre |
| Brasile (BRT) | 20:00 | 4 novembre |
| Regno Unito (GMT) | 23:00 | 4 novembre |
| Europa (CET) | 00:00 | 5 novembre |
| Taiwan (CST) | 07:00 | 5 novembre |
| Corea (KST) | 08:00 | 5 novembre |
| Australia e Nuova Zelanda (AEDT) | 10:00 | 5 novembre |
| UTC | 23:00 | 4 novembre |

La [pagina italiana dell'articolo](${LAUNCH_IT}) non ha la tabella e nel sommario scrive "00:01 CET". Anche il WoW Weekly italiano del 30 ottobre dà le 00:01 per il lancio, e le 00:00 nel paragrafo sul podcast. Vale l'orario della tabella originale: le 00:00. Negli Stati Uniti l'ora legale è finita il 1° novembre, quindi l'ora del Pacifico è PST (UTC−8), non PDT.

## Prima di entrare {#prima}

Si gioca su Windows o Mac con mouse e tastiera. Il supporto ai controller c'è, ma Blizzard lo descrive "in a beta state", cioè ancora in fase beta. WoW Forever è compreso nell'abbonamento a World of Warcraft o nel Game Time, e si installa dall'app Battle.net scegliendo WoW: Forever nel menu della versione del gioco.

## Experience Preset: Classic o Enhanced {#preset}

Al primo accesso, **prima di scegliere il set di regole**, il gioco chiede di scegliere un **Experience Preset** (nella traduzione ufficiale "configurazione dell'esperienza"). Imposta un gruppo di opzioni in una volta:

| Impostazione | Classic | Enhanced |
|---|---|---|
| Modelli dei personaggi | Standard Definition (SD) | High Definition (HD) |
| Punti d'interesse e aree degli obiettivi delle missioni | spenti | accesi |
| Borsa unica (One-bag) | spenta | accesa |
| Transmog | spento | acceso |
| Tasti predefiniti | ruotano la visuale | spostamento laterale |
| Disposizione dell'interfaccia | classica | centrata |

Il consiglio di Blizzard è partire da Enhanced se non si sa cosa scegliere. Il preset è un punto di partenza, non un vincolo: la schermata si vede solo al primo accesso, e dopo si possono cambiare il preset o le singole impostazioni dalle opzioni (Game Menu > Options nella Starter Guide, System > Preset in Return to Azeroth).

A parte, **ogni volta che crei un personaggio** scegli modelli e animazioni HD o SD. La scelta cambia solo l'aspetto, non abilità o progressione, e si può modificare dopo nelle opzioni o dal Barbiere (Barbershop) in gioco.

## Set di regole e fazioni: decidete prima {#set-di-regole}

Al lancio i set di regole sono quattro: Normal, PvP, Roleplay e Roleplay-PvP. Hardcore arriverà "sometime after launch", senza una data. La Starter Guide è chiara: i personaggi possono **fare gruppo, entrare in una gilda, fare dungeon (spedizioni) e incursioni solo con giocatori dello stesso set di regole e della stessa fazione**. Se volete giocare con gli amici, mettetevi d'accordo su tutte e due le scelte prima di creare i personaggi. A chi non sa da dove cominciare, Blizzard consiglia Normal.

Le differenze fra i set sono nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets). I limiti sul set PvP visti durante la prenotazione dei nomi sono nel [nostro articolo del 1° novembre](/it/news/name-filter-fix-faction-locks).

## Nomi e professioni {#nomi}

- **Nomi**: ogni personaggio ha un nome principale e un nome secondario, e la combinazione completa deve essere unica **nella tua regione**, non nel set di regole. Il nome secondario si può nascondere sopra il personaggio da Options > Nameplates > My Secondary Name, ma in chat resta visibile.
- **Professioni**: due professioni primarie più tutte e tre le secondarie, Cooking, Fishing e First Aid (Cucina, Pesca e Primo Soccorso). Di più nella nostra [guida a camping e professioni](/it/guides/wow-forever-camping-professions).

## Return to Azeroth, per chi torna {#ritorno}

L'articolo per chi torna aggiunge il quadro:

- l'ambientazione è l'"Anno 1" (Year 1) del gioco originale, prima che Kazzak riaprisse il Dark Portal;
- nove dungeon nuovi da cinque giocatori, livelli 13–60: sei nei Regni Orientali (Hall of Thanes, Ruins of Lordaeron, Excavation Site, City of Dalaran, The Drowned City, Krol'dok Stronghold) e tre a Kalimdor (Alcaz Prison, Blackmaw Hold, Shaper's Terrace);
- combinazioni nuove di razza e classe: Cacciatore Umano, Sciamano Nano e Sacerdote Gnomo per l'Alleanza, Mago Orco, Stregone Troll e Paladino Non Morto per l'Orda;
- gli Skyborne possono essere Druidi, Cacciatori, Ladri e Guerrieri, più Maghi dalla parte dell'Alleanza e Sciamani da quella dell'Orda; per giocarli serve lo Skyborne Heroic Pack o un'edizione superiore;
- PvP con Honor e Rank, e il campo di battaglia Darkspear Islands: 15 contro 15, livelli 30–60, quattro punti da conquistare e una bandiera centrale, vince la prima squadra che arriva a 2.000 punti;
- Hardcore "coming later", più avanti.

## Cosa c'è nel gioco al lancio {#contenuti}

Dall'articolo del lancio: più di **1.000 missioni nuove** dal livello 1 al 60, e le sole Riverglades ne hanno più di 150, in gran parte fra la metà dei livelli 30 e la metà dei 40. Il **9 dicembre** aprono ai personaggi di livello 60 le prime tre incursioni: Barrow Deeps, Hyjal Summit e Onyxia's Lair. Dungeon e incursioni sono nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids), tutte le date nel [calendario](/it/calendar).

## La beta in numeri {#numeri}

Il 30 ottobre il WoW Weekly ha pubblicato "Beta by the numbers", un'immagine con le statistiche ufficiali della beta finita il 23 ottobre:

- **8.862.354** personaggi creati, di cui **1.889.084** Skyborne e **612.096** Paladini Non Morti ("Forsaken Paladins");
- **9.959.014** uccisioni PvP e **1.248.125** duelli; la zona con più PvP è stata Hillsbrad Foothills;
- **1.157.204** morti per caduta;
- il dungeon più letale è stato Hall of Thanes, la creatura più letale un Kobold Miner.

## Le traduzioni {#traduzioni}

La Starter Guide e Return to Azeroth hanno la versione italiana completa, e anche quella spagnola. L'articolo del lancio c'è in italiano ma, come detto, senza la tabella e con le "00:01 CET" nel sommario; quello spagnolo ha la tabella, senza le righe di Brasile e Regno Unito. I numeri della beta ci sono solo nel WoW Weekly inglese: le versioni italiana e spagnola non hanno quella sezione.`,
    `Entre el 28 y el 30 de octubre de 2026 Blizzard publicó cuatro artículos para el lanzamiento de WoW Forever: los horarios oficiales por región en [¡World of Warcraft: Forever saldrá en todo el mundo el 5 de noviembre!](${LAUNCH_ES}) (29 de octubre), una [guía de iniciación para nuevos jugadores](${STARTER_ES}) (New Player's Starter Guide, 28 de octubre), una guía para quien vuelve, [Vuelve a Azeroth](${RETURN_ES}) (Return to Azeroth, 29 de octubre), y un [WoW Weekly](${WEEKLY}) con las cifras de la beta (30 de octubre). Esto es lo que conviene saber antes de entrar. Todo sale de esos artículos; cuando añadimos un cálculo nuestro, lo decimos.

## Los horarios por región {#horarios}

WoW Forever sale el **miércoles 4 de noviembre de 2026 a las 15:00 PST**, es decir, a las **23:00 UTC**: en la España peninsular es la **medianoche del miércoles 4 al jueves 5 de noviembre**. Esta es la tabla de Blizzard (en la versión inglesa del artículo):

| Región | Hora | Día |
|---|---|---|
| América (PST) | 15:00 | 4 de noviembre |
| Brasil (BRT) | 20:00 | 4 de noviembre |
| Reino Unido (GMT) | 23:00 | 4 de noviembre |
| Europa (CET) | 00:00 | 5 de noviembre |
| Taiwán (CST) | 07:00 | 5 de noviembre |
| Corea (KST) | 08:00 | 5 de noviembre |
| Australia y Nueva Zelanda (AEDT) | 10:00 | 5 de noviembre |
| UTC | 23:00 | 4 de noviembre |

Cálculo nuestro a partir de las 23:00 UTC, fuera de la tabla: en Canarias las 23:00 del 4 de noviembre; en Ciudad de México las 17:00 del 4; en Bogotá y Lima las 18:00 del 4; en Buenos Aires las 20:00 del 4. En Estados Unidos el horario de verano terminó el 1 de noviembre, así que la hora del Pacífico es PST (UTC−8), no PDT.

## Antes de entrar {#antes}

Se juega en Windows o Mac con teclado y ratón. La compatibilidad con mandos existe, pero Blizzard la describe "in a beta state", en fase beta. WoW Forever está incluido en la suscripción a World of Warcraft o en el tiempo de juego, y se instala desde la aplicación de Battle.net eligiendo WoW: Forever en el menú de versión del juego.

## Configuración de la experiencia: Clásica o Mejorada {#configuracion}

La primera vez que inicias sesión, **antes de elegir el conjunto de reglas**, el juego te pide que elijas una **configuración predeterminada de la experiencia** (Experience Preset). Ajusta varias opciones de una vez:

| Ajuste | Clásica (Classic) | Mejorada (Enhanced) |
|---|---|---|
| Modelos de personaje | definición estándar (SD) | alta definición (HD) |
| Puntos de interés y zonas de objetivos de las misiones | no | sí |
| Una bolsa (One-bag) | no | sí |
| Transfiguración | no | sí |
| Atajos de teclado por defecto | girar la cámara | movimiento lateral |
| Diseño de la interfaz | clásico | centralizado |

Blizzard aconseja empezar por Mejorada si no sabes cuál elegir. La configuración es un punto de partida, no un bloqueo: la pantalla solo aparece la primera vez, y después puedes cambiar la configuración o cada ajuste desde las opciones (Menú del juego > Opciones en la guía de iniciación; Sistema > Configuración predeterminada, System > Preset, en Vuelve a Azeroth).

Aparte, **cada vez que creas un personaje** eliges modelos y animaciones HD o SD. Solo cambia el aspecto, no las habilidades ni la progresión, y se puede cambiar después en las opciones o en la peluquería del juego.

## Conjuntos de reglas y facciones: decididlo antes {#conjuntos}

En el lanzamiento hay cuatro conjuntos de reglas: Normal, JcJ, Rol y Rol-JcJ. Hardcore llegará "sometime after launch", sin fecha. La guía de iniciación es clara: los personajes solo pueden **agruparse, unirse a hermandades, hacer mazmorras y bandas con jugadores del mismo conjunto de reglas y de la misma facción**. Si quieres jugar con amigos, poneos de acuerdo en las dos cosas antes de crear los personajes. A quien no sepa por dónde empezar, Blizzard le recomienda Normal.

Las diferencias entre conjuntos están en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets). Los límites del conjunto JcJ durante la reserva de nombres están en [nuestro artículo del 1 de noviembre](/es/news/name-filter-fix-faction-locks).

## Nombres y profesiones {#nombres}

- **Nombres**: cada personaje tiene un nombre principal y un nombre secundario, y la combinación completa debe ser única **en tu región**, no en el conjunto de reglas. El nombre secundario se puede ocultar sobre el personaje en Opciones > Placas de nombre > Mi nombre secundario, pero sigue apareciendo en el chat.
- **Profesiones**: dos profesiones principales y las tres secundarias, cocina, pesca y primeros auxilios. Más en nuestra [guía de campamentos y profesiones](/es/guides/wow-forever-camping-professions).

## Vuelve a Azeroth, para quien regresa {#regreso}

El artículo para quien vuelve añade el contexto:

- la ambientación es el «año 1» del juego original, antes de que Kazzak volviera a abrir el Portal Oscuro;
- nueve mazmorras nuevas para cinco jugadores, niveles 13–60: seis en los Reinos del Este (Salón de los Feudales, Ruinas de Lordaeron, Excavation Site, Ciudad de Dalaran, Ciudad Sumergida, Bastión Krol'dok) y tres en Kalimdor (Prisión de Alcaz, Bastión Faucenegra, Bancal del Creador);
- combinaciones nuevas de raza y clase: cazador humano, chamán enano y sacerdote gnomo en la Alianza; mago orco, brujo trol y paladín no-muerto en la Horda;
- los célicos pueden ser druidas, cazadores, pícaros y guerreros, además de magos en la Alianza y chamanes en la Horda; para jugarlos hace falta el Pack Heroic de los célicos (Skyborne Heroic Pack) o una edición superior;
- JcJ con honor y puntos de rango, y el campo de batalla Islas Lanza Negra (Darkspear Islands): 15 contra 15, niveles 30–60, cuatro puntos de captura y una bandera central; gana el primer equipo que llega a 2.000 puntos;
- Hardcore "coming later", más adelante.

## Qué trae el juego en el lanzamiento {#contenido}

Del artículo del lanzamiento: más de **1000 misiones nuevas** del nivel 1 al 60, y solo Clarofluvial (Riverglades) tiene más de 150, en buena parte entre los niveles 35 y 45. El **9 de diciembre** abren a los personajes de nivel 60 las tres primeras bandas: Cavernas del Túmulo (Barrow Deeps), Cima Hyjal y Guarida de Onyxia. Las mazmorras y bandas están en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids), y todas las fechas en el [calendario](/es/calendar).

## La beta en cifras {#cifras}

El 30 de octubre el WoW Weekly publicó "Beta by the numbers", una imagen con las estadísticas oficiales de la beta que terminó el 23 de octubre:

- **8.862.354** personajes creados, de los cuales **1.889.084** célicos y **612.096** paladines no-muertos ("Forsaken Paladins");
- **9.959.014** muertes JcJ y **1.248.125** duelos; la zona con más JcJ fue Laderas de Trabalomas (Hillsbrad Foothills);
- **1.157.204** muertes por caída;
- la mazmorra más letal fue el Salón de los Feudales (Hall of Thanes), y la criatura más letal, un minero kóbold (Kobold Miner).

## Las traducciones {#traducciones}

La guía de iniciación y Vuelve a Azeroth tienen versión completa en español y en italiano. El artículo del lanzamiento en español tiene la tabla, aunque sin las filas de Brasil y Reino Unido, y su resumen dice 00:00 CET; el WoW Weekly en español del 30 de octubre, en cambio, habla de las 00:01 CET. Vale la hora de la tabla: las 00:00. La página italiana del lanzamiento no tiene la tabla. Las cifras de la beta solo están en el WoW Weekly en inglés: las versiones en español e italiano no tienen esa sección.`,
  ),
  faq: {
    en: [
      {
        q: "What time does WoW Forever launch in Europe?",
        a: "At midnight CET between 4 and 5 November 2026, which is 23:00 UTC on 4 November and 11:00 p.m. GMT in the UK. In the Americas it is 3:00 p.m. PST on 4 November.",
      },
      {
        q: "What is the Experience Preset in WoW Forever?",
        a: "A choice you make at your first login, before the ruleset: Classic (SD models, no quest markers, one-bag and transmog off, classic interface layout) or Enhanced (HD models and those features on). It is only a starting point and can be changed later in the Options.",
      },
      {
        q: "Can I play with friends on another ruleset or faction?",
        a: "No. According to Blizzard's Starter Guide, groups, guilds, dungeons and raids only work between characters on the same ruleset and the same faction, so agree on both before creating your characters.",
      },
    ],
    it: [
      {
        q: "A che ora esce WoW Forever in Italia?",
        a: "Alla mezzanotte fra mercoledì 4 e giovedì 5 novembre 2026, cioè alle 23:00 UTC del 4 novembre e alle 15:00 PST. La pagina italiana di Blizzard scrive 00:01 CET, ma la tabella ufficiale dice 00:00.",
      },
      {
        q: "Cos'è l'Experience Preset di WoW Forever?",
        a: "Una scelta che si fa al primo accesso, prima del set di regole: Classic (modelli SD, niente segnalazioni delle missioni, borsa unica e transmog spenti, interfaccia classica) o Enhanced (modelli HD e quelle funzioni accese). È solo un punto di partenza e si cambia poi dalle opzioni.",
      },
      {
        q: "Posso giocare con amici su un altro set di regole o di un'altra fazione?",
        a: "No. Secondo la Starter Guide di Blizzard, gruppi, gilde, dungeon e incursioni funzionano solo fra personaggi dello stesso set di regole e della stessa fazione: conviene accordarsi su tutte e due prima di creare i personaggi.",
      },
    ],
    es: [
      {
        q: "¿A qué hora sale WoW Forever en España?",
        a: "A la medianoche del 4 al 5 de noviembre de 2026 en la España peninsular (00:00 CET), es decir, a las 23:00 UTC del 4 de noviembre, que son también las 23:00 en Canarias. En América son las 15:00 PST del 4 de noviembre.",
      },
      {
        q: "¿Qué es la configuración de la experiencia de WoW Forever?",
        a: "Una elección que se hace al entrar por primera vez, antes del conjunto de reglas: Clásica (modelos SD, sin marcas de misiones, una bolsa y transfiguración desactivadas, interfaz clásica) o Mejorada (modelos HD y esas funciones activadas). Es solo un punto de partida y se cambia después en las opciones.",
      },
      {
        q: "¿Puedo jugar con amigos de otro conjunto de reglas o de otra facción?",
        a: "No. Según la guía de iniciación de Blizzard, los grupos, las hermandades, las mazmorras y las bandas solo funcionan entre personajes del mismo conjunto de reglas y de la misma facción: conviene ponerse de acuerdo en las dos cosas antes de crear los personajes.",
      },
    ],
  },
};

export default item;

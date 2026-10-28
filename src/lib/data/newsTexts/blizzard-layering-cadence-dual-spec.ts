import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Dichiarazioni degli sviluppatori arrivate tramite la stampa nell'ultima settimana prima del lancio, quindi `source:
 * "site"` (non è un articolo Blizzard): Clay Stone a GameSpot sul layering (23/10/2026, 9:29 PDT) e Kris Zierhut con
 * Tim Jones nell'intervista di IGN (27/10/2026, 18:00 CET), lette per intero il 28/10. In coda i media ufficiali del
 * 26–27/10 (Blizzard News e YouTube).
 */
const GAMESPOT = "https://www.gamespot.com/articles/wow-forevers-divisive-layering-will-see-major-improvements-for-launch-blizzard-says/";
const IGN = "https://www.ign.com/articles/world-of-warcraft-forever-launch-interview-blizzard-azeroth";
const PORTAL_ROOM = "https://news.blizzard.com/en-us/article/24315203/your-next-adventure-in-wow-forever-starts-in-the-wow-portal-room";
const PORTAL_ROOM_IT = "https://news.blizzard.com/it-it/article/24315203/la-tua-prossima-avventura-in-wow-forever-inizia-nella-portal-room-di-wow";
const UNBOWED = "https://news.blizzard.com/en-us/article/24313105/watch-the-wow-forever-short-story-unbowed";
const UNBOWED_ES = "https://news.blizzard.com/es-es/article/24313105/no-te-pierdas-el-relato-corto-inquebrantable-de-wow-forever";
const WARPATH = "https://www.youtube.com/watch?v=NPbTAXZL_2A";

const item: NewsItem = {
  slug: "blizzard-layering-cadence-dual-spec",
  date: "2026-10-27",
  source: "site",
  topic: "news",
  image: media.layering.src,
  imageAlt: media.layering.alt,
  guides: ["wow-forever-rulesets", "wow-forever-zones-dungeons-raids"],
  title: n(
    "Blizzard before WoW Forever's launch: fewer layer swaps, new content every four months, dual spec at launch",
    "Blizzard prima del lancio di WoW Forever: meno cambi di layer, contenuti ogni quattro mesi e dual spec",
    "Blizzard antes de WoW Forever: menos cambios de capa, contenido cada cuatro meses y doble especialización",
  ),
  metaTitle: n("WoW Forever: layering, 4-month cadence, dual spec", "WoW Forever: layering, contenuti e dual spec", "WoW Forever: capas, contenido y doble especialización"),
  summary: n(
    "In the week before launch two Blizzard developers answered the press. Clay Stone told GameSpot that layering will stop splitting players on boats, zeppelins and at capital gates. Kris Zierhut told IGN that new raids and PvP seasons will come about every four months, that dual spec is there at launch and that player housing is not planned.",
    "Nell'ultima settimana prima del lancio due sviluppatori di Blizzard hanno risposto alla stampa. Clay Stone ha detto a GameSpot che il layering smetterà di separare i giocatori su navi, zeppelin e alle porte delle capitali. Kris Zierhut ha detto a IGN che incursioni e stagioni PvP nuove arriveranno ogni quattro mesi circa, che il dual spec c'è al lancio e che l'housing non è in programma.",
    "En la última semana antes del lanzamiento dos desarrolladores de Blizzard respondieron a la prensa. Clay Stone dijo a GameSpot que las capas dejarán de separar a los jugadores en barcos, zepelines y a las puertas de las capitales. Kris Zierhut dijo a IGN que las bandas y temporadas JcJ nuevas llegarán cada cuatro meses más o menos, que la doble especialización está desde el lanzamiento y que no hay viviendas previstas.",
  ),
  description: n(
    "Blizzard on WoW Forever before launch: layering fixes for boats and capitals, raids and PvP seasons every four months, dual spec at launch, no housing.",
    "Blizzard su WoW Forever prima del lancio: layering corretto su navi e capitali, raid e stagioni PvP ogni quattro mesi, dual spec al lancio, niente housing.",
    "Blizzard sobre WoW Forever: capas corregidas en barcos y capitales, bandas y temporadas JcJ cada cuatro meses, doble especialización y sin viviendas.",
  ),
  highlights: {
    en: [
      { label: "Layering", text: "no more splits on transports and at capital gates", anchor: "layering" },
      { label: "Every four months", text: "raid tiers and PvP seasons, with unlocks in between", anchor: "cadence" },
      { label: "What comes next", text: "Molten Core later, Northrend and Pandaria only as brief trips", anchor: "roadmap" },
      { label: "Dual spec", text: "two specializations from launch day", anchor: "dual-spec" },
      { label: "Housing", text: "no plans for now", anchor: "other" },
      { label: "From Blizzard", text: "Unbowed, WARPATH and the WoW Portal Room", anchor: "media" },
    ],
    it: [
      { label: "Layering", text: "niente più separazioni sui trasporti e alle porte delle capitali", anchor: "layering" },
      { label: "Ogni quattro mesi", text: "incursioni e stagioni PvP, con sblocchi nel mezzo", anchor: "cadenza" },
      { label: "Cosa arriverà", text: "Molten Core più avanti, Northrend e Pandaria solo per brevi puntate", anchor: "futuro" },
      { label: "Dual spec", text: "due specializzazioni dal giorno del lancio", anchor: "dual-spec" },
      { label: "Housing", text: "per ora non è in programma", anchor: "altro" },
      { label: "Da Blizzard", text: "Unbowed, WARPATH e la WoW Portal Room", anchor: "media" },
    ],
    es: [
      { label: "Capas", text: "se acabaron las separaciones en transportes y a las puertas de las capitales", anchor: "capas" },
      { label: "Cada cuatro meses", text: "bandas y temporadas JcJ, con desbloqueos entre medias", anchor: "ritmo" },
      { label: "Lo que vendrá", text: "Molten Core más adelante, Rasganorte y Pandaria solo en breves visitas", anchor: "futuro" },
      { label: "Doble especialización", text: "dos especializaciones desde el día del lanzamiento", anchor: "doble-especializacion" },
      { label: "Viviendas", text: "de momento no están previstas", anchor: "otros" },
      { label: "De Blizzard", text: "Unbowed, WARPATH y la WoW Portal Room", anchor: "medios" },
    ],
  },
  body: n(
    `With the beta over and the launch on 4 November close, two Blizzard developers answered questions from the press: Clay Stone, associate production director of WoW Forever, in a statement sent to [GameSpot](${GAMESPOT}) on 23 October, and Kris Zierhut, principal game designer, with Tim Jones, lead Classic designer, in a long [interview with IGN](${IGN}) published on 27 October. These are not official Blizzard articles but developers' words reported by the press: here is what they say.

## Layering: what changes at launch {#layering}

Layering runs several copies of the world at the same time to spread out players. During the beta it was one of the most criticised systems: players switched layer when leaving a group, crossing into another zone or travelling by boat or zeppelin. According to Stone, players are assigned a layer based on familiar players and friends, language and PvP balance, and grouping with someone moves you to their layer.

Blizzard admits that players were separated too often and in unexpected places, and promises two improvements **for launch**: players will no longer be split from the people they saw on a **transport** (boats and zeppelins) after the loading screen, and **large groups** will no longer change layer when entering or leaving a **capital city**. Stone adds that some layering will always remain, with more improvements during and after launch. GameSpot notes that the statement does not mention layer changes at **zone borders**, the case most criticised by world PvP players.

## New content every four months {#cadence}

Zierhut explains that going six or eight months without new content "always feels bad", while Season of Discovery, at eight to ten weeks, was too fast. Forever's target is "closer to once every four months or 17 weeks", three times a year: about four months between **raid tiers**, and the same between **PvP seasons**, which Forever will have. Between one major patch and the next some content will unlock gradually through a timed event calendar.

## What comes next {#roadmap}

- **Molten Core, Blackwing Lair and Ahn'Qiraj** will come, but more slowly: "We're not starting with Molten Core". At launch the first raids, on 9 December, are Barrow Deeps, Hyjal Summit and Onyxia's Lair (details in our [zones, dungeons and raids guide](/en/guides/wow-forever-zones-dungeons-raids)).
- New places that feel like they belong, such as the Riverglades and its ogre dungeon, and entirely new ones such as the Skyborne's Zephras.
- **Northrend and Pandaria**: possible "minor forays", a dungeon or a quest, but "not doing soon". The Eastern Kingdoms and Kalimdor remain home, with no new capital cities.

## Dual spec at launch {#dual-spec}

"We have dual spec in the game at launch", says Zierhut: each character can keep two talent builds. A third is not ruled out for the future. Talents remain a commitment, with no changing them freely before every fight, but Blizzard has ideas to make respeccing easier. You can plan both builds in our [talent builder](/en/builder).

## Housing and the other answers {#other}

- **Housing**: "we don't have any plans to add player housing to Forever right now".
- **Raids**: there will be 10-, 20- and 40-player raids plus 5-player dungeons. Blizzard knows that sooner or later there will be "too many raids" and has ideas it is not sharing yet.
- **Items**: many trinkets change strength depending on the creature or the place, and Blizzard is watching bag and bank space, already larger than in Classic.

## Meanwhile, from Blizzard {#media}

- 26 October: the short story [Unbowed](${UNBOWED}), about a former Scarlet Crusader who became one of the Forsaken.
- 27 October: the animated trailer [WARPATH](${WARPATH}), Horde against Alliance.
- 27 October: an article on the [WoW Portal Room](${PORTAL_ROOM}), the official World of Warcraft Discord server, which opens its doors to Forever players.

All the dates before and after launch are in our [calendar](/en/calendar).`,
    `Con la beta finita e il lancio del 4 novembre vicino, due sviluppatori di Blizzard hanno risposto alle domande della stampa: Clay Stone, associate production director di WoW Forever, in una dichiarazione mandata a [GameSpot](${GAMESPOT}) il 23 ottobre, e Kris Zierhut, principal game designer, con Tim Jones, lead Classic designer, in una lunga [intervista a IGN](${IGN}) uscita il 27 ottobre. Non sono articoli ufficiali di Blizzard ma parole degli sviluppatori riportate dalla stampa: ecco cosa dicono.

## Layering: cosa cambia al lancio {#layering}

Il layering fa girare più copie del mondo nello stesso momento per distribuire i giocatori. Nella beta è stato uno dei sistemi più criticati: si cambiava layer uscendo da un gruppo, passando in un'altra zona o viaggiando in nave o in zeppelin. Secondo Stone, il layer si assegna in base a giocatori conosciuti e amici, lingua ed equilibrio del PvP, e chi entra in gruppo con qualcuno passa nel suo layer.

Blizzard ammette che i giocatori venivano separati troppo spesso e in punti imprevisti, e promette due miglioramenti **per il lancio**: dopo la schermata di caricamento non si verrà più separati dalle persone viste su un **trasporto** (navi e zeppelin), e i **grandi gruppi** non cambieranno più layer entrando o uscendo da una **capitale**. Stone aggiunge che un po' di layering resterà sempre, con altri miglioramenti durante e dopo il lancio. GameSpot nota che la dichiarazione non parla dei cambi di layer ai **confini di zona**, il caso più criticato da chi fa PvP nel mondo aperto.

## Contenuti nuovi ogni quattro mesi {#cadenza}

Zierhut spiega che restare sei o otto mesi senza contenuti nuovi "si sente male", mentre Season of Discovery, con otto-dieci settimane, andava troppo veloce. L'obiettivo di Forever è "più vicino a una volta ogni quattro mesi, o 17 settimane", tre volte l'anno: circa quattro mesi fra un **tier di incursioni** e l'altro, e altrettanti fra una **stagione PvP** e l'altra, che su Forever ci saranno. Fra una patch grande e la successiva alcuni contenuti si sbloccheranno a poco a poco con un calendario di eventi a tempo.

## Cosa arriverà {#futuro}

- **Molten Core, Blackwing Lair e Ahn'Qiraj** arriveranno, ma più lentamente: "non cominciamo da Molten Core". Al lancio le prime incursioni, dal 9 dicembre, sono Barrow Deeps, Hyjal Summit e Onyxia's Lair (i dettagli nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids)).
- Luoghi nuovi che sembrano appartenere al mondo, come le Riverglades con il loro dungeon (spedizione) degli ogre, e luoghi del tutto nuovi come Zephras degli Skyborne.
- **Northrend e Pandaria**: possibili "brevi puntate", un dungeon o una missione, ma non a breve. I Regni Orientali (Eastern Kingdoms) e Kalimdor restano la casa, senza capitali nuove.

## Dual spec al lancio {#dual-spec}

"Al lancio il gioco ha il dual spec", dice Zierhut: ogni personaggio può tenere due configurazioni di talenti. Una terza non è esclusa per il futuro. I talenti restano un impegno, niente cambi liberi prima di ogni combattimento, ma Blizzard ha idee per rendere più comodo il cambio. Le due configurazioni si possono preparare nel nostro [builder dei talenti](/it/builder).

## L'housing e le altre risposte {#altro}

- **Housing**: "al momento non abbiamo in programma di aggiungere l'housing a Forever".
- **Incursioni**: ci saranno incursioni da 10, 20 e 40 giocatori più dungeon da 5. Blizzard sa che prima o poi ci saranno "troppe incursioni" e ha idee che non racconta ancora.
- **Oggetti**: molti monili (trinket) cambiano forza in base alla creatura o al luogo, e Blizzard tiene d'occhio lo spazio di borse e banca, già più grande che in Classic.

## Intanto, da Blizzard {#media}

- 26 ottobre: il racconto [Unbowed](${UNBOWED}), su un ex Crociato Scarlatto diventato un Reietto (solo in inglese: l'edizione italiana non c'è).
- 27 ottobre: il trailer animato [WARPATH](${WARPATH}), Orda contro Alleanza.
- 27 ottobre: un articolo, anche [in italiano](${PORTAL_ROOM_IT}), sulla WoW Portal Room, il server Discord ufficiale di World of Warcraft, che apre le porte ai giocatori di Forever.

Tutte le date prima e dopo il lancio sono nel nostro [calendario](/it/calendar).`,
    `Con la beta terminada y el lanzamiento del 4 de noviembre cerca, dos desarrolladores de Blizzard respondieron a las preguntas de la prensa: Clay Stone, director asociado de producción de WoW Forever, en una declaración enviada a [GameSpot](${GAMESPOT}) el 23 de octubre, y Kris Zierhut, diseñador de juego principal, con Tim Jones, diseñador jefe de Classic, en una larga [entrevista con IGN](${IGN}) publicada el 27 de octubre. No son artículos oficiales de Blizzard, sino palabras de los desarrolladores recogidas por la prensa: esto es lo que dicen.

## Capas: qué cambia en el lanzamiento {#capas}

El sistema de capas (layering) mantiene varias copias del mundo a la vez para repartir a los jugadores. En la beta fue uno de los sistemas más criticados: se cambiaba de capa al salir de un grupo, al pasar a otra zona o al viajar en barco o zepelín. Según Stone, la capa se asigna según jugadores conocidos y amigos, idioma y equilibrio del JcJ, y quien se agrupa con alguien pasa a su capa.

Blizzard admite que los jugadores se separaban demasiado a menudo y en sitios inesperados, y promete dos mejoras **para el lanzamiento**: tras la pantalla de carga ya no te separarán de las personas que viste en un **transporte** (barcos y zepelines), y los **grupos grandes** ya no cambiarán de capa al entrar o salir de una **capital**. Stone añade que siempre habrá algo de capas, con más mejoras durante y después del lanzamiento. GameSpot señala que la declaración no habla de los cambios de capa en los **límites de zona**, el caso más criticado por quienes hacen JcJ en el mundo abierto.

## Contenido nuevo cada cuatro meses {#ritmo}

Zierhut explica que pasar seis u ocho meses sin contenido nuevo "siempre sienta mal", mientras que Season of Discovery, con ocho a diez semanas, iba demasiado rápido. El objetivo de Forever está "más cerca de una vez cada cuatro meses, o 17 semanas", tres veces al año: unos cuatro meses entre **tiers de bandas**, y lo mismo entre **temporadas JcJ**, que Forever tendrá. Entre un parche grande y el siguiente algunos contenidos se desbloquearán poco a poco con un calendario de eventos.

## Lo que vendrá {#futuro}

- **Molten Core, Blackwing Lair y Ahn'Qiraj** llegarán, pero más despacio: "no empezamos por Molten Core". En el lanzamiento las primeras bandas, desde el 9 de diciembre, son Barrow Deeps, Hyjal Summit y Onyxia's Lair (detalles en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids)).
- Lugares nuevos que parecen de siempre, como las Riverglades y su mazmorra de ogros, y lugares del todo nuevos como la Zephras de los célicos.
- **Rasganorte (Northrend) y Pandaria**: posibles "breves incursiones", una mazmorra o una misión, pero no pronto. Los Reinos del Este y Kalimdor siguen siendo el hogar, sin capitales nuevas.

## Doble especialización desde el lanzamiento {#doble-especializacion}

"Tenemos doble especialización en el juego desde el lanzamiento", dice Zierhut: cada personaje puede guardar dos configuraciones de talentos. Una tercera no se descarta para el futuro. Los talentos siguen siendo un compromiso, sin cambiarlos libremente antes de cada combate, pero Blizzard tiene ideas para que cambiar de configuración sea más cómodo. Puedes preparar las dos en nuestro [calculador de talentos](/es/builder).

## Viviendas y otras respuestas {#otros}

- **Viviendas**: "por ahora no tenemos planes de añadir viviendas de jugadores a Forever".
- **Bandas**: habrá bandas de 10, 20 y 40 jugadores, más mazmorras de 5. Blizzard sabe que tarde o temprano habrá "demasiadas bandas" y tiene ideas que aún no cuenta.
- **Objetos**: muchos abalorios cambian de fuerza según la criatura o el lugar, y Blizzard vigila el espacio de bolsas y banco, ya mayor que en Classic.

## Mientras tanto, de Blizzard {#medios}

- 26 de octubre: el relato [Unbowed (Inquebrantable)](${UNBOWED_ES}), sobre un antiguo cruzado escarlata convertido en Renegado.
- 27 de octubre: el tráiler animado [WARPATH](${WARPATH}), Horda contra Alianza.
- 27 de octubre: un artículo sobre la [WoW Portal Room](${PORTAL_ROOM}), el servidor oficial de Discord de World of Warcraft, que abre sus puertas a los jugadores de Forever.

Todas las fechas antes y después del lanzamiento están en nuestro [calendario](/es/calendar).`,
  ),
  faq: {
    en: [
      {
        q: "Does WoW Forever have dual spec?",
        a: "Yes. Kris Zierhut, principal game designer, told IGN on 27 October 2026 that dual spec is in the game at launch, so each character can keep two talent builds.",
      },
      {
        q: "How often will WoW Forever get new content?",
        a: "About every four months (17 weeks), according to Kris Zierhut: that is the planned gap between raid tiers and between PvP seasons, with some content unlocking in between.",
      },
    ],
    it: [
      {
        q: "WoW Forever ha il dual spec?",
        a: "Sì. Kris Zierhut, principal game designer, ha detto a IGN il 27 ottobre 2026 che il dual spec c'è al lancio: ogni personaggio può tenere due configurazioni di talenti.",
      },
      {
        q: "Ogni quanto arriveranno contenuti nuovi su WoW Forever?",
        a: "Ogni quattro mesi circa (17 settimane), secondo Kris Zierhut: è lo stacco previsto fra un tier di incursioni e l'altro e fra una stagione PvP e l'altra, con alcuni contenuti che si sbloccano nel mezzo.",
      },
    ],
    es: [
      {
        q: "¿WoW Forever tiene doble especialización?",
        a: "Sí. Kris Zierhut, diseñador de juego principal, dijo a IGN el 27 de octubre de 2026 que la doble especialización está en el juego desde el lanzamiento: cada personaje puede guardar dos configuraciones de talentos.",
      },
      {
        q: "¿Cada cuánto tendrá WoW Forever contenido nuevo?",
        a: "Cada cuatro meses más o menos (17 semanas), según Kris Zierhut: es la distancia prevista entre tiers de bandas y entre temporadas JcJ, con algunos contenidos que se desbloquean entre medias.",
      },
    ],
  },
};

export default item;

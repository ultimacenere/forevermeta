import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Episodio 6 del WoW: Forever Podcast, "All About Tech ft. Shobek", pubblicato da Blizzard il 29 ottobre 2026 alle
 * 16:15 UTC (articolo 24315819 in en-us, it-it ed es-es; video sul canale YouTube World of Warcraft, ID BVyhnixdPQg,
 * 68 minuti). L'articolo presenta solo gli ospiti e le didascalie del video non erano scaricabili: il contenuto viene
 * dai capitoli ufficiali del video e dai resoconti di Wowhead (383649, 383650, 383652), Icy Veins (tre articoli),
 * PCGamesN (1/11) e GameSpot (29/10), letti il 2/11. Dove le testate non concordano su chi ha detto una frase, il testo
 * scrive "gli sviluppatori". Da riascoltare sul video prima di dare le citazioni per verificate.
 */
const ARTICLE = "https://news.blizzard.com/en-us/article/24315819/watch-the-wow-forever-podcast-all-about-tech";
const ARTICLE_IT = "https://news.blizzard.com/it-it/article/24315819/guarda-il-wow-forever-podcast-tutto-sulla-tecnologia";
const ARTICLE_ES = "https://news.blizzard.com/es-es/article/24315819/no-te-pierdas-el-podcast-de-wow-forever-sobre-tecnologia";
const VIDEO = "https://www.youtube.com/watch?v=BVyhnixdPQg";
const GOLIVE = "https://news.blizzard.com/en-us/article/24315820/world-of-warcraft-forever-goes-live-globally-november-4";
const GOLIVE_IT = "https://news.blizzard.com/it-it/article/24315820/world-of-warcraft-forever-disponibile-a-livello-globale-dal-5-novembre";
const GOLIVE_ES = "https://news.blizzard.com/es-es/article/24315820/world-of-warcraft-forever-saldra-en-todo-el-mundo-el-5-de-noviembre";
const WH_REFRESH = "https://www.wowhead.com/news=383649/forced-world-refreshes-will-be-significantly-reduced-for-wow-forever";
const WH_ZONES = "https://www.wowhead.com/news=383650/blizzard-working-on-top-layering-issues-in-wow-forever";
const WH_OCE = "https://www.wowhead.com/news=383652/blizzard-addresses-day-and-night-cycle-issues-for-oceanic-players-in-wow-forever";
const ICY_VEINS = "https://www.icy-veins.com/wow-forever/news/proximity-chat-day-night-cycles-the-wow-forever-podcast-ep-6/";
const ICY_VEINS_HOLIDAYS = "https://www.icy-veins.com/wow-forever/news/blizzard-rebuilt-layering-so-wow-forever-holiday-events-run-smoothly/";
const PCGAMESN = "https://www.pcgamesn.com/world-of-warcraft/forever-rule-sets-layering-world";
const GAMESPOT = "https://www.gamespot.com/articles/wow-forever-wont-have-dead-servers/";
const OCE_TOPIC = "https://us.forums.blizzard.com/en/wow/t/oce-vs-na-daynight-cycle-%E2%80%93-devs-want-your-feedback/2395850";

const item: NewsItem = {
  slug: "podcast-episode-6-tech-layering",
  date: "2026-10-29",
  source: "blizzard",
  topic: "news",
  url: ARTICLE,
  image: media.podcastTech.src,
  imageAlt: media.podcastTech.alt,
  guides: ["wow-forever-rulesets"],
  title: n(
    "WoW Forever podcast, episode 6: layering warns before moving you, rulesets stay apart, with an emergency lever",
    "Podcast di WoW Forever, episodio 6: il layering avvisa prima di spostarti e i set di regole restano separati",
    "Pódcast de WoW Forever, episodio 6: las capas avisan antes de moverte y los conjuntos de reglas siguen aparte",
  ),
  metaTitle: n("WoW Forever podcast 6: layering and rulesets", "WoW Forever, podcast 6: layering e set di regole", "WoW Forever, pódcast 6: capas y conjuntos de reglas"),
  summary: n(
    "On 29 October 2026 Blizzard published the sixth episode of the WoW Forever Podcast, about the game's technology, with Aggrend, Ana Resendez, Frank Williams and the streamer Shobek. According to the press: at launch joining a group shows a warning with a time window instead of moving you at once, layer changes at zone borders remain, and the rulesets stay separate, with an emergency lever if their populations ever shrink.",
    "Il 29 ottobre 2026 Blizzard ha pubblicato il sesto episodio del podcast di WoW Forever, dedicato alla tecnologia del gioco, con Aggrend, Ana Resendez, Frank Williams e lo streamer Shobek. Secondo la stampa: al lancio entrare in un gruppo mostra un avviso con una finestra di tempo invece di spostarti subito, i cambi di layer ai confini di zona restano, e i set di regole restano separati, con una leva d'emergenza se un giorno le popolazioni calassero.",
    "El 29 de octubre de 2026 Blizzard publicó el sexto episodio del pódcast de WoW Forever, dedicado a la tecnología del juego, con Aggrend, Ana Resendez, Frank Williams y el streamer Shobek. Según la prensa: en el lanzamiento, unirse a un grupo muestra un aviso con un margen de tiempo en lugar de moverte al instante, los cambios de capa en los límites de zona se quedan, y los conjuntos de reglas siguen separados, con una palanca de emergencia si algún día sus poblaciones bajaran.",
  ),
  description: n(
    "WoW Forever Podcast episode 6 (29 October 2026): layering warns before moving you, zone borders stay, rulesets stay separate with an emergency lever.",
    "Episodio 6 del podcast di WoW Forever (29 ottobre 2026): il layering avvisa prima di spostarti, i confini di zona restano, set di regole sempre separati.",
    "Episodio 6 del pódcast de WoW Forever (29 de octubre de 2026): las capas avisan antes de moverte, los límites de zona siguen y las reglas, separadas.",
  ),
  highlights: {
    en: [
      { label: "Four guests", text: "Aggrend, Ana Resendez, Frank Williams and Shobek", anchor: "guests" },
      { label: "Layering at launch", text: "a warning with a time window instead of an instant move", anchor: "layering" },
      { label: "Zone borders", text: "they stay, but Blizzard can tune which zones are linked", anchor: "zones" },
      { label: "Ideas, not promises", text: "80–120-player groups, a \"megaraid\" whiteboard, proximity chat", anchor: "ideas" },
      { label: "Rulesets", text: "separate, with an emergency lever for RP and RP-PvP", anchor: "rulesets" },
      { label: "Oceania", text: "Blizzard asks Australian players about day and night", anchor: "oceania" },
      { label: "Hardcore and episode 7", text: "\"shortly\" is not a date; the podcast is back in two weeks", anchor: "next" },
    ],
    it: [
      { label: "Quattro ospiti", text: "Aggrend, Ana Resendez, Frank Williams e Shobek", anchor: "ospiti" },
      { label: "Layering al lancio", text: "un avviso con una finestra di tempo invece dello spostamento immediato", anchor: "layering" },
      { label: "Confini di zona", text: "restano, ma Blizzard può regolare quali zone sono collegate", anchor: "zone" },
      { label: "Idee, non promesse", text: "gruppi da 80–120, una lavagna con \"megaraid\", chat di prossimità", anchor: "idee" },
      { label: "Set di regole", text: "separati, con una leva d'emergenza per RP e RP-PvP", anchor: "set-di-regole" },
      { label: "Oceania", text: "Blizzard chiede agli australiani del giorno e della notte", anchor: "oceania" },
      { label: "Hardcore e episodio 7", text: "\"shortly\" non è una data; il podcast torna fra due settimane", anchor: "prossimo" },
    ],
    es: [
      { label: "Cuatro invitados", text: "Aggrend, Ana Resendez, Frank Williams y Shobek", anchor: "invitados" },
      { label: "Capas en el lanzamiento", text: "un aviso con margen de tiempo en lugar de un cambio inmediato", anchor: "capas" },
      { label: "Límites de zona", text: "se quedan, pero Blizzard puede ajustar qué zonas están unidas", anchor: "zonas" },
      { label: "Ideas, no promesas", text: "grupos de 80 a 120, una pizarra con \"megaraid\", chat de proximidad", anchor: "ideas" },
      { label: "Conjuntos de reglas", text: "separados, con una palanca de emergencia para RP y RP-PvP", anchor: "reglas" },
      { label: "Oceanía", text: "Blizzard pregunta a los australianos por el día y la noche", anchor: "oceania" },
      { label: "Hardcore y episodio 7", text: "\"shortly\" no es una fecha; el pódcast vuelve en dos semanas", anchor: "siguiente" },
    ],
  },
  body: n(
    `On 29 October 2026 at 16:15 UTC Blizzard published [Watch the WoW: Forever Podcast: All About Tech](${ARTICLE}), the sixth episode of the official podcast, a 68-minute [video on the World of Warcraft YouTube channel](${VIDEO}). Blizzard's article only introduces the guests, and the video's captions could not be downloaded: what follows is reconstructed from the official chapters of the video and from the reports of Wowhead ([1](${WH_REFRESH}), [2](${WH_ZONES}), [3](${WH_OCE})), [Icy Veins](${ICY_VEINS}), [PCGamesN](${PCGAMESN}) and [GameSpot](${GAMESPOT}). Where the outlets do not agree on who said a sentence, we write "the developers".

## Who is on the episode {#guests}

The host is Countdown To Classic, and the special guest is the streamer **Shobek**, who helped organise some of the large player events of the beta. From Blizzard: **Josh "Aggrend" Greenfield**, Senior Game Designer; **Ana Resendez**, Lead Software Engineer; **Frank Williams**, Principal Software Engineer. The chapters cover name reservations, the tech side of Forever, larger parties, layering, rulesets, realm communities, day-to-night shifts, faction locks and community building.

On the tech side, Williams explained, as PCGamesN reports, that Forever was built to last, and thanked the team behind housing in the modern game for improvements under the hood that Forever also uses. Greenfield made it clear that this does not mean housing is coming to Forever.

## Layering at launch: a warning instead of a move {#layering}

Layering runs several copies of the world to spread players out. According to Williams, as reported by Wowhead, the system tries to place you where it thinks your community is: players you have met, allied or rival guilds. In the beta the algorithm was "overaggressive" and moved players too often; a chart shown in the episode has the forced "world refreshes" falling over the weeks of the beta.

The change you will notice at launch: **joining a group no longer moves you at once**. A warning appears with a **time window**, and you move when you are ready; forced moves should be **much less frequent** in general. Williams's example: you don't want to be moved while you are in a cave and find an elite standing right next to you. Resendez added that the technology keeps improving, and the developers said the last 24 hours of the beta gave them a lot of data (Icy Veins).

Holidays stay as players remember them at launch. According to [Icy Veins](${ICY_VEINS_HOLIDAYS}), Williams said that the layering and world-state systems were rebuilt so that events run smoothly, and that bigger changes to the holidays may come later.

## Zone borders stay, but the links can be tuned {#zones}

Layering is organised by zone, or by small groups of zones: when you cross into another zone you can still change layer and see the players around you disappear. The developers said this will keep happening. What Blizzard can tune is **which zones are linked**: Aggrend's example is Durotar, crowded at launch while few players idle in Orgrimmar, a balance that will flip later. So the way zones are grouped at launch may be very different a month later.

Resendez mentioned reports of players disappearing while looking from Orgrimmar towards the Barrens, and Williams said the worst cases had already been fixed in the last days of the beta and in the stress test. For launch, he said, expect "the state at the end of the beta". In our [article of 27 October](/en/news/blizzard-layering-cadence-dual-spec), GameSpot had noted that Clay Stone's statement did not mention zone borders: the podcast answers that they remain.

## Ideas, not promises: mass PvP and bigger groups {#ideas}

Shobek asked about groups of 80 to 120 players. Greenfield answered (PCGamesN) that the team has been thinking about letting players form an army of that size, or an alliance of several groups; Icy Veins sums up the tone as "never say never". Williams joked about a whiteboard on campus with "megaraid" written on it, and said Blizzard has considered detecting PvP battles automatically and expanding the servers a little to keep them in one piece.

Proximity chat, which players used at their own community events, is another idea with nothing to announce. On a way to make an unwanted player vanish from your world, Williams said he does not know whether it will ever come; the ignore list stays, Greenfield added, but it does not remove anyone from your world. None of this is announced for launch.

## Rulesets stay separate, with an emergency lever {#rulesets}

The developers said the team discussed at length how far to separate the rulesets. For a while they considered letting PvE and PvP players group for instances, but, Greenfield explains (GameSpot, PCGamesN), farming is easier on PvE, the economies have to stay apart and trading would need restrictions: so the rulesets stay fully separate, as in the original game.

There is, however, a lever for emergencies. Greenfield cited RP and RP-PvP: if one day one or both of those populations could not sustain themselves, Blizzard could **link their auction houses** or **let them group for instanced content**. He calls it a last resort, "a lever that we can pull", not a plan. The rulesets are explained in our [rulesets guide](/en/guides/wow-forever-rulesets).

## Day and night in Oceania {#oceania}

Oceanic players share the world with North America, and in-game day and night follow North American time, so many Australians play almost always at night. The developers explained that Blizzard has servers in Australia and could give them their own clock, but when an Australian player joins a group in a North American world, day could turn into night in a few seconds. Aggrend asked Australian players whether they would accept it or find it "too jarring". The feedback goes to the video's comments and to Reddit; a [topic opened by players](${OCE_TOPIC}) on the official forum has hundreds of replies but, as of 2 November, no answer from Blizzard.

## Hardcore and the next episode {#next}

- **Hardcore**: talking about the warning before a layer change, Williams said it will matter "when Hardcore comes out shortly". It is not a date: Blizzard's [launch article](${GOLIVE}) of 29 October still says the ruleset arrives "sometime after launch".
- **Next episode**: the last chapter of the video is "Podcast Back in 2 Weeks", and there is no episode in launch week. Icy Veins gives 12 November, on lore, but Blizzard has not announced a date.

The previous episode, the end-of-beta special, is in our [article on episode 5](/en/news/podcast-episode-5-end-of-beta-special).

## What we don't know yet {#unknown}

- **The exact words**: the quotes are those reported by the outlets, which do not always agree on who said what; we will check them against the video.
- **The other chapters**: name reservations, realm communities and faction locks were discussed, but the reports we read say little or nothing about them.
- **How long the time window lasts** before a layer change, and which zones will be linked at launch.
- **Day and night in Oceania** and the **emergency lever**: no decision, only questions and options.`,
    `Il 29 ottobre 2026 alle 16:15 UTC (le 17:15 in Italia) Blizzard ha pubblicato [Guarda il WoW: Forever Podcast: tutto sulla tecnologia](${ARTICLE_IT}), il sesto episodio del podcast ufficiale, un [video di 68 minuti sul canale YouTube di World of Warcraft](${VIDEO}). L'articolo di Blizzard presenta solo gli ospiti e le didascalie del video non si potevano scaricare: quello che segue è ricostruito dai capitoli ufficiali del video e dai resoconti di Wowhead ([1](${WH_REFRESH}), [2](${WH_ZONES}), [3](${WH_OCE})), [Icy Veins](${ICY_VEINS}), [PCGamesN](${PCGAMESN}) e [GameSpot](${GAMESPOT}), tutti in inglese. Dove le testate non concordano su chi ha detto una frase, scriviamo "gli sviluppatori".

## Chi c'è nella puntata {#ospiti}

Conduce Countdown To Classic, e l'ospite speciale è lo streamer **Shobek**, che ha aiutato a organizzare alcuni dei grandi eventi dei giocatori in beta. Per Blizzard: **Josh "Aggrend" Greenfield**, Senior Game Designer; **Ana Resendez**, Lead Software Engineer; **Frank Williams**, Principal Software Engineer. I capitoli parlano di prenotazione dei nomi, tecnologia di Forever, gruppi più grandi, layering, set di regole, comunità dei reami, ciclo giorno/notte, blocchi di fazione e costruzione delle comunità.

Sulla tecnologia, Williams ha spiegato, come riporta PCGamesN, che Forever è stato costruito per durare, e ha ringraziato il team dell'housing del gioco moderno per miglioramenti dietro le quinte che usa anche Forever. Greenfield ha chiarito che questo non vuol dire che l'housing arrivi su Forever.

## Layering al lancio: un avviso invece di uno spostamento {#layering}

Il layering fa girare più copie del mondo per distribuire i giocatori. Secondo Williams, come riporta Wowhead, il sistema cerca di metterti dove pensa che sia la tua comunità: giocatori che hai incontrato, gilde alleate o rivali. In beta l'algoritmo era "overaggressive", troppo zelante, e spostava i giocatori troppo spesso; un grafico mostrato nella puntata fa vedere i "world refresh" forzati che calano settimana dopo settimana.

Il cambio che si noterà al lancio: **entrare in un gruppo non ti sposta più subito**. Compare un avviso con una **finestra di tempo**, e ti sposti quando sei pronto; in generale i cambi forzati saranno **molto meno frequenti**. L'esempio di Williams: non vuoi essere spostato mentre sei in una grotta e ritrovarti un élite accanto. Resendez ha aggiunto che la tecnologia continua a migliorare, e gli sviluppatori hanno detto che le ultime 24 ore di beta hanno dato loro moltissimi dati (Icy Veins).

Le feste restano come le ricordano i giocatori. Secondo [Icy Veins](${ICY_VEINS_HOLIDAYS}), Williams ha detto che i sistemi di layering e dello stato del mondo sono stati rifatti perché gli eventi girino senza intoppi, e che cambi più grandi alle feste potranno arrivare più avanti.

## I confini di zona restano, ma i collegamenti si regolano {#zone}

Il layering è organizzato per zona, o per piccoli gruppi di zone: passando in un'altra zona si può ancora cambiare layer e veder sparire i giocatori intorno. Gli sviluppatori hanno detto che continuerà a succedere. Quello che Blizzard può regolare è **quali zone sono collegate**: l'esempio di Aggrend è Durotar, affollata al lancio mentre a Orgrimmar ci sarà poca gente ferma, un equilibrio che più avanti si rovescerà. Quindi il modo in cui le zone sono raggruppate al lancio potrà essere molto diverso un mese dopo.

Resendez ha citato le segnalazioni di giocatori che sparivano guardando da Orgrimmar verso i Barrens, e Williams ha detto che i casi peggiori erano già stati corretti negli ultimi giorni della beta e nello stress test. Per il lancio, ha detto, bisogna aspettarsi "lo stato di fine beta". Nel nostro [articolo del 27 ottobre](/it/news/blizzard-layering-cadence-dual-spec) GameSpot notava che la dichiarazione di Clay Stone non parlava dei confini di zona: il podcast risponde che restano.

## Idee, non promesse: PvP di massa e gruppi più grandi {#idee}

Shobek ha chiesto di gruppi da 80 a 120 giocatori. Greenfield ha risposto (PCGamesN) che il team ci sta pensando, come un esercito di quella misura o un'alleanza fra più gruppi; Icy Veins riassume il tono con "mai dire mai". Williams ha scherzato su una lavagna nella sede di Blizzard con scritto "megaraid", e ha detto che si è pensato di riconoscere in automatico le battaglie PvP e di allargare un po' i server per tenerle tutte insieme.

La chat di prossimità, che i giocatori usavano nei loro eventi, è un'altra idea senza niente da annunciare. Su un modo per far sparire dal proprio mondo un giocatore sgradito, Williams ha detto di non sapere se arriverà mai; la lista degli ignorati resta, ha aggiunto Greenfield, ma non toglie nessuno dal tuo mondo. Niente di tutto questo è annunciato per il lancio.

## I set di regole restano separati, con una leva d'emergenza {#set-di-regole}

Gli sviluppatori hanno raccontato che il team ha discusso a lungo su quanto separare i set di regole. Per un po' si è pensato di far giocare insieme nelle istanze chi sta su PvE e chi sta su PvP, ma, spiega Greenfield (GameSpot, PCGamesN), su PvE è più facile accumulare oro e oggetti, le economie devono restare distinte e gli scambi avrebbero bisogno di limiti: per questo i set di regole restano del tutto separati, come nel gioco originale.

C'è però una leva per le emergenze. Greenfield ha fatto l'esempio di RP e RP-PvP: se un giorno una delle due popolazioni, o tutte e due, non reggessero più, Blizzard potrebbe **unire le case d'asta** o **permettere i gruppi nei contenuti istanziati**. La chiama un'ultima risorsa, "una leva che possiamo tirare", non un piano. I set di regole sono spiegati nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets).

## Giorno e notte in Oceania {#oceania}

I giocatori dell'Oceania condividono il mondo con il Nord America, e il giorno e la notte del gioco seguono l'ora nordamericana: molti australiani giocano quasi sempre di notte. Gli sviluppatori hanno spiegato che Blizzard ha server in Australia e potrebbe dar loro un orologio proprio, ma quando un australiano entra in un gruppo in un mondo nordamericano il giorno potrebbe diventare notte in pochi secondi. Aggrend ha chiesto agli australiani se lo accetterebbero o se lo troverebbero "too jarring", troppo brusco. I pareri vanno nei commenti del video e su Reddit; un [topic aperto dai giocatori](${OCE_TOPIC}) sul forum ufficiale ha centinaia di risposte ma, al 2 novembre, nessuna di Blizzard.

## Hardcore e la prossima puntata {#prossimo}

- **Hardcore**: parlando dell'avviso prima di un cambio di layer, Williams ha detto che conterà "quando Hardcore uscirà a breve" ("shortly"). Non è una data: l'[articolo del lancio](${GOLIVE_IT}) del 29 ottobre dice ancora che il set di regole arriverà "in un secondo momento dopo il lancio".
- **Prossima puntata**: l'ultimo capitolo del video è "Podcast Back in 2 Weeks", e nella settimana del lancio non c'è un episodio. Icy Veins dà il 12 novembre, sul lore, ma Blizzard non ha annunciato una data.

La puntata precedente, lo speciale di fine beta, è nel nostro [articolo sull'episodio 5](/it/news/podcast-episode-5-end-of-beta-special).

## Cosa non sappiamo ancora {#non-sappiamo}

- **Le parole esatte**: le citazioni sono quelle riportate dalle testate, che non sempre concordano su chi ha detto cosa; le confronteremo con il video.
- **Gli altri capitoli**: prenotazione dei nomi, comunità dei reami e blocchi di fazione sono stati discussi, ma i resoconti che abbiamo letto ne dicono poco o niente.
- **Quanto dura la finestra di tempo** prima di un cambio di layer, e quali zone saranno collegate al lancio.
- **Giorno e notte in Oceania** e **leva d'emergenza**: nessuna decisione, solo domande e possibilità.`,
    `El 29 de octubre de 2026 a las 16:15 UTC (las 17:15 en España peninsular) Blizzard publicó [No te pierdas el pódcast de WoW: Forever sobre tecnología](${ARTICLE_ES}), el sexto episodio del pódcast oficial, un [vídeo de 68 minutos en el canal de YouTube de World of Warcraft](${VIDEO}). El artículo de Blizzard solo presenta a los invitados y los subtítulos del vídeo no se podían descargar: lo que sigue está reconstruido a partir de los capítulos oficiales del vídeo y de los resúmenes de Wowhead ([1](${WH_REFRESH}), [2](${WH_ZONES}), [3](${WH_OCE})), [Icy Veins](${ICY_VEINS}), [PCGamesN](${PCGAMESN}) y [GameSpot](${GAMESPOT}), todos en inglés. Cuando las webs no coinciden en quién dijo una frase, escribimos "los desarrolladores".

## Quién está en el episodio {#invitados}

Presenta Countdown To Classic, y el invitado especial es el streamer **Shobek**, que ayudó a organizar algunos de los grandes eventos de jugadores de la beta. Por Blizzard: **Josh "Aggrend" Greenfield**, diseñador sénior del juego; **Ana Resendez**, ingeniera jefa de software; **Frank Williams**, ingeniero principal de software. Los capítulos hablan de la reserva de nombres, la tecnología de Forever, los grupos más grandes, las capas, los conjuntos de reglas, las comunidades de los reinos, el ciclo de día y noche, los bloqueos de facción y la creación de comunidad.

Sobre la tecnología, Williams explicó, según PCGamesN, que Forever se construyó para durar, y dio las gracias al equipo de las viviendas del juego actual por mejoras internas que también aprovecha Forever. Greenfield dejó claro que eso no significa que las viviendas lleguen a Forever.

## Capas en el lanzamiento: un aviso en lugar de un cambio {#capas}

El sistema de capas (layering) mantiene varias copias del mundo para repartir a los jugadores. Según Williams, tal como lo recoge Wowhead, el sistema intenta ponerte donde cree que está tu comunidad: jugadores que ya conoces y hermandades aliadas o rivales. En la beta el algoritmo era "overaggressive", demasiado agresivo, y movía a los jugadores con demasiada frecuencia; un gráfico del episodio muestra cómo bajan los "world refresh" forzados semana tras semana.

El cambio que se notará en el lanzamiento: **unirse a un grupo ya no te cambia de capa al instante**. Aparece un aviso con un **margen de tiempo**, y te mueves cuando estés listo; en general, los cambios forzados serán **mucho menos frecuentes**. El ejemplo de Williams: no quieres que te muevan mientras estás en una cueva y encontrarte un élite justo al lado. Resendez añadió que la tecnología sigue mejorando, y los desarrolladores dijeron que las últimas 24 horas de beta les dieron muchísimos datos (Icy Veins).

Las festividades siguen como las recuerdan los jugadores. Según [Icy Veins](${ICY_VEINS_HOLIDAYS}), Williams dijo que los sistemas de capas y de estado del mundo se rehicieron para que los eventos funcionen sin problemas, y que más adelante podrían llegar cambios mayores a las festividades.

## Los límites de zona se quedan, pero las uniones se ajustan {#zonas}

Las capas se organizan por zona, o por pequeños grupos de zonas: al pasar a otra zona todavía puedes cambiar de capa y ver desaparecer a los jugadores de alrededor. Los desarrolladores dijeron que seguirá pasando. Lo que Blizzard puede ajustar es **qué zonas están unidas**: el ejemplo de Aggrend es Durotar, llena de gente en el lanzamiento mientras en Orgrimmar habrá poca gente parada, un equilibrio que más adelante se invertirá. Así que la forma de agrupar las zonas en el lanzamiento puede ser muy distinta un mes después.

Resendez citó los avisos de jugadores que desaparecían al mirar desde Orgrimmar hacia los Baldíos, y Williams dijo que los peores casos ya se habían corregido en los últimos días de la beta y en la prueba de estrés. Para el lanzamiento, dijo, hay que esperar "el estado del final de la beta". En nuestro [artículo del 27 de octubre](/es/news/blizzard-layering-cadence-dual-spec) GameSpot señalaba que la declaración de Clay Stone no hablaba de los límites de zona: el pódcast responde que se quedan.

## Ideas, no promesas: JcJ masivo y grupos más grandes {#ideas}

Shobek preguntó por grupos de 80 a 120 jugadores. Greenfield respondió (PCGamesN) que el equipo lo está pensando, como un ejército de ese tamaño o una alianza de varios grupos; Icy Veins resume el tono con un "nunca digas nunca". Williams bromeó con una pizarra en la sede de Blizzard con "megaraid" escrito, y dijo que se ha pensado en detectar automáticamente las batallas JcJ y ampliar un poco los servidores para mantenerlas unidas.

El chat de proximidad, que los jugadores usaban en sus eventos, es otra idea sin nada que anunciar. Sobre una forma de hacer desaparecer de tu mundo a un jugador molesto, Williams dijo que no sabe si llegará nunca; la lista de ignorados sigue, añadió Greenfield, pero no quita a nadie de tu mundo. Nada de esto está anunciado para el lanzamiento.

## Los conjuntos de reglas siguen separados, con una palanca de emergencia {#reglas}

Los desarrolladores contaron que el equipo discutió mucho cuánto separar los conjuntos de reglas. Durante un tiempo se pensó en dejar que los jugadores de JcE y de JcJ se agruparan en las instancias, pero, explica Greenfield (GameSpot, PCGamesN), en JcE es más fácil conseguir oro y objetos, las economías tienen que estar separadas y el comercio necesitaría límites: por eso los conjuntos de reglas quedan del todo separados, como en el juego original.

Eso sí, hay una palanca para emergencias. Greenfield puso el ejemplo de RP y RP-PvP: si algún día una de las dos poblaciones, o ambas, no se sostuvieran, Blizzard podría **unir sus casas de subastas** o **dejar que se agrupen en el contenido instanciado**. Lo llama un último recurso, "una palanca que podemos accionar", no un plan. Los conjuntos de reglas están explicados en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets).

## Día y noche en Oceanía {#oceania}

Los jugadores de Oceanía comparten el mundo con Norteamérica, y el día y la noche del juego siguen la hora norteamericana: muchos australianos juegan casi siempre de noche. Los desarrolladores explicaron que Blizzard tiene servidores en Australia y podría darles su propio reloj, pero cuando un australiano se une a un grupo en un mundo norteamericano, el día podría hacerse noche en pocos segundos. Aggrend preguntó a los australianos si lo aceptarían o si les parecería "too jarring", demasiado brusco. Las opiniones van a los comentarios del vídeo y a Reddit; un [tema abierto por los jugadores](${OCE_TOPIC}) en el foro oficial tiene cientos de respuestas pero, a 2 de noviembre, ninguna de Blizzard.

## Hardcore y el próximo episodio {#siguiente}

- **Hardcore**: hablando del aviso antes de un cambio de capa, Williams dijo que será importante "cuando salga Hardcore, en breve" ("shortly"). No es una fecha: el [artículo del lanzamiento](${GOLIVE_ES}) del 29 de octubre sigue diciendo que ese conjunto de reglas llegará "en algún momento tras el lanzamiento".
- **Próximo episodio**: el último capítulo del vídeo es "Podcast Back in 2 Weeks", y en la semana del lanzamiento no hay episodio. Icy Veins da el 12 de noviembre, sobre el lore, pero Blizzard no ha anunciado fecha.

El episodio anterior, el especial de fin de beta, está en nuestro [artículo sobre el episodio 5](/es/news/podcast-episode-5-end-of-beta-special).

## Lo que aún no sabemos {#no-sabemos}

- **Las palabras exactas**: las citas son las que recogen las webs, que no siempre coinciden en quién dijo qué; las compararemos con el vídeo.
- **Los demás capítulos**: se habló de la reserva de nombres, de las comunidades de los reinos y de los bloqueos de facción, pero los resúmenes que hemos leído dicen poco o nada de ellos.
- **Cuánto dura el margen de tiempo** antes de un cambio de capa, y qué zonas estarán unidas en el lanzamiento.
- **El día y la noche en Oceanía** y la **palanca de emergencia**: ninguna decisión, solo preguntas y opciones.`,
  ),
  faq: {
    en: [
      {
        q: "Will layering still move me when I join a group in WoW Forever?",
        a: "Not immediately. According to Frank Williams in episode 6 of the WoW Forever Podcast, as reported by Wowhead and PCGamesN, at launch joining a group shows a warning with a time window, so you move when you are ready, and forced moves will be much rarer. Layer changes at zone borders remain.",
      },
      {
        q: "Will WoW Forever merge the RP and RP-PvP rulesets?",
        a: "No, the rulesets stay separate. Josh Greenfield said that only if their populations could not sustain themselves could Blizzard link their auction houses or let them group for instanced content, as a last resort.",
      },
    ],
    it: [
      {
        q: "In WoW Forever il layering mi sposta ancora quando entro in un gruppo?",
        a: "Non subito. Secondo Frank Williams nell'episodio 6 del podcast di WoW Forever, come riportano Wowhead e PCGamesN, al lancio entrare in un gruppo mostra un avviso con una finestra di tempo, così ti sposti quando sei pronto, e i cambi forzati saranno molto più rari. I cambi di layer ai confini di zona restano.",
      },
      {
        q: "WoW Forever unirà i set di regole RP e RP-PvP?",
        a: "No, i set di regole restano separati. Josh Greenfield ha detto che solo se le loro popolazioni non reggessero più Blizzard potrebbe unire le case d'asta o permettere i gruppi nei contenuti istanziati, come ultima risorsa.",
      },
    ],
    es: [
      {
        q: "¿En WoW Forever las capas me siguen cambiando al unirme a un grupo?",
        a: "No al instante. Según Frank Williams en el episodio 6 del pódcast de WoW Forever, tal como lo recogen Wowhead y PCGamesN, en el lanzamiento unirse a un grupo muestra un aviso con un margen de tiempo, así que te mueves cuando estés listo, y los cambios forzados serán mucho más raros. Los cambios de capa en los límites de zona se quedan.",
      },
      {
        q: "¿WoW Forever unirá los conjuntos de reglas RP y RP-PvP?",
        a: "No, los conjuntos de reglas siguen separados. Josh Greenfield dijo que solo si sus poblaciones no se sostuvieran podría Blizzard unir sus casas de subastas o dejar que se agrupen en el contenido instanciado, como último recurso.",
      },
    ],
  },
};

export default item;

import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Post di Kaivax (Community Manager) "PvP Faction Balance Updates - November 10" sul forum US, 10/11/2026 alle 02:05 UTC
 * (la sera del 9/11 in America), con le sue risposte #158 (03:04 UTC: personaggi di prova, come si misura il 55/45) e
 * #174 (03:11 UTC: popolazione ridotta nelle zone congestionate, di più sul PvP), lette sui JSON del forum.
 * La riduzione della popolazione è nel thread degli hotfix sotto "November 9, 2026".
 * Stampa: intervista di Crix a Kris Zierhut e Tim Jones, riassunta da Wowhead il 6/11 (news=383787); il riassunto non
 * dice chi dei due parla nella parte sul PvP, quindi la attribuiamo agli sviluppatori intervistati.
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/pvp-faction-balance-updates-november-10/2408781";
const HOTFIXES = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/2403040";
const WOWHEAD = "https://www.wowhead.com/news=383787/raid-rewards-and-pvp-balance-crix-interview-on-wow-forever";
const CRIX = "https://www.youtube.com/watch?v=QtGf1aJUowU";

const item: NewsItem = {
  slug: "pvp-faction-balance-november-10",
  date: "2026-11-10",
  source: "blizzard",
  topic: "pvp",
  url: POST,
  image: media.newsFactionBalance.src,
  imageAlt: media.newsFactionBalance.alt,
  guides: ["wow-forever-rulesets"],
  title: n(
    "WoW Forever PvP faction balance: Blizzard aims for 50/50 and makes the larger faction harder to create",
    "Fazioni sul PvP di WoW Forever: Blizzard punta al 50/50 e rende più difficile creare la fazione più numerosa",
    "Facciones en JcJ de WoW Forever: Blizzard busca el 50/50 y pone más difícil crear la facción más poblada",
  ),
  metaTitle: n(
    "WoW Forever PvP faction balance: the 50/50 goal",
    "WoW Forever, fazioni sul PvP: obiettivo 50/50",
    "WoW Forever, facciones en JcJ: objetivo 50/50",
  ),
  summary: n(
    "On 10 November 2026 Blizzard said the most unbalanced PvP case in a region is about 55/45 and changed character creation in WoW Forever to aim for 50/50. For now it is getting harder to create Horde characters on the North American PvP rulesets and Alliance characters on European Roleplay-PvP. Zones are also less crowded, especially on PvP.",
    "Il 10 novembre 2026 Blizzard ha detto che il caso più squilibrato sul PvP in una regione è circa 55/45 e ha cambiato la creazione dei personaggi di WoW Forever per arrivare al 50/50. Per ora diventa più difficile creare personaggi dell'Orda sui set PvP del Nord America e dell'Alleanza sul Roleplay-PvP europeo. Le zone sono anche meno affollate, soprattutto sul PvP.",
    "El 10 de noviembre de 2026 Blizzard dijo que el caso más desequilibrado en JcJ en una región ronda el 55/45 y cambió la creación de personajes de WoW Forever para acercarse al 50/50. Por ahora cuesta más crear personajes de la Horda en los conjuntos JcJ de Norteamérica y de la Alianza en Rol-JcJ de Europa. Las zonas también están menos llenas, sobre todo en JcJ.",
  ),
  description: n(
    "Blizzard changed WoW Forever's character creation to aim for 50/50 on PvP: Horde in North America and Alliance on EU Roleplay-PvP get harder to create.",
    "WoW Forever, fazioni sul PvP: Blizzard punta al 50/50 e rende più difficile creare l'Orda in Nord America e l'Alleanza sul Roleplay-PvP europeo.",
    "Blizzard cambia la creación de personajes en JcJ de WoW Forever para llegar al 50/50: cuesta más crear Horda en Norteamérica y Alianza en Rol-JcJ europeo.",
  ),
  highlights: {
    en: [
      { label: "55/45 at worst", text: "the goal is as close to 50/50 as possible", anchor: "numbers" },
      { label: "Harder to create", text: "Horde on North American PvP, Alliance on EU Roleplay-PvP", anchor: "creation" },
      { label: "Roleplay-PvP too", text: "the one-faction rule there is still unconfirmed", anchor: "roleplay-pvp" },
      { label: "Less crowded zones", text: "lower population per zone, more so on PvP", anchor: "zones" },
      { label: "In practice", text: "agree on ruleset and faction before you create", anchor: "in-practice" },
      { label: "The Crix interview", text: "battlegrounds first, Honor gear easy to get", anchor: "interview" },
    ],
    it: [
      { label: "Al massimo 55/45", text: "l'obiettivo è avvicinarsi il più possibile al 50/50", anchor: "numeri" },
      { label: "Creazione più difficile", text: "Orda sul PvP nordamericano, Alleanza sul Roleplay-PvP europeo", anchor: "creazione" },
      { label: "Anche il Roleplay-PvP", text: "lì la regola di una sola fazione resta non confermata", anchor: "roleplay-pvp" },
      { label: "Zone meno affollate", text: "meno giocatori per zona, ancora meno sul PvP", anchor: "zone" },
      { label: "In pratica", text: "accordatevi su set di regole e fazione prima di creare", anchor: "in-pratica" },
      { label: "L'intervista con Crix", text: "prima i campi di battaglia, equipaggiamento Honor facile", anchor: "intervista" },
    ],
    es: [
      { label: "Como mucho 55/45", text: "el objetivo es acercarse todo lo posible al 50/50", anchor: "cifras" },
      { label: "Crear cuesta más", text: "Horda en el JcJ de Norteamérica, Alianza en Rol-JcJ de Europa", anchor: "creacion" },
      { label: "Rol-JcJ también", text: "ahí la regla de una sola facción sigue sin confirmarse", anchor: "rol-jcj" },
      { label: "Zonas menos llenas", text: "menos jugadores por zona, aún menos en JcJ", anchor: "zonas" },
      { label: "En la práctica", text: "acuerda conjunto de reglas y facción antes de crear", anchor: "en-la-practica" },
      { label: "La entrevista con Crix", text: "primero los campos de batalla, equipo de honor fácil", anchor: "entrevista" },
    ],
  },
  body: n(
    `On Tuesday 10 November 2026 at 02:05 UTC (03:05 CET), which was still the evening of Monday 9 November in the Americas, Kaivax, Community Manager, posted [PvP Faction Balance Updates](${POST}) on the official forum. Blizzard has changed the way character creation weighs faction balance on the PvP rulesets, and this time it gives a figure and names the factions affected.

The post follows two things we have already covered: the [Horde locks on PvP](/en/news/name-filter-fix-faction-locks) that players have reported since the end of October, and the [rulesets video of 5 November](/en/news/rulesets-video-faction-limits), which confirmed temporary limits on character creation without giving any numbers.

## 55/45 at worst, 50/50 as the goal {#numbers}

Blizzard says the PvP rulesets need two factions of similar size. Today the most unbalanced case in a region is about 55/45: not a huge gap, but not as close as the team wants. The goal is to get as close to 50/50 as possible.

In [a reply an hour later](${POST}/158) (03:04 UTC, 04:04 CET), Kaivax explained how the figure is measured: active, logged-in players of all levels over a given period of time. A player had argued that the split would be much more lopsided towards the Horde once trial accounts were counted. Kaivax answered that Blizzard looked into this in depth and found no evidence that trial characters had any effect.

## How character creation changes {#creation}

The creation system now looks at the overall state of faction balance on each region's PvP rulesets, instead of reacting to what the post calls "snapshots of points in time". In the short term, creating characters of the more populous faction will get **increasingly difficult**:

- in **North America**, the Horde on the PvP rulesets;
- in **Europe**, the Alliance on Roleplay-PvP.

Blizzard adds that this may flip as players settle and move around. It acknowledges that not being able to start a faction at a given moment is frustrating, but calls it a necessary trade-off for the health of the ruleset, especially now that guilds are forming and rivalries are taking shape. The post gives no thresholds, no durations and no figures for the other combinations of region and ruleset.

## Roleplay-PvP is included {#roleplay-pvp}

The European example is on Roleplay-PvP, so the limits on character creation apply to that ruleset as well, not only to PvP. What the post does not say is whether Roleplay-PvP also has the PvP rule of **one faction per account**: Blizzard has stated that rule only for the PvP ruleset, and on Roleplay-PvP it remains unconfirmed, as we explain in [our guide to the rulesets](/en/guides/wow-forever-rulesets#pvp-factions).

## Fewer players per zone, more so on PvP {#zones}

In [a second reply](${POST}/174) (03:11 UTC, 04:11 CET), Kaivax pointed to a change made earlier that day, which is in the [hotfix list](${HOTFIXES}) under 9 November: the player population has been lowered in several zones with heavy congestion. The change is even bigger on the PvP ruleset, after players reported feeling overcrowded in several places. Blizzard will keep an eye on how crowded zones feel and adjust further if needed.

## What it means if you are creating a character {#in-practice}

None of what follows is a Blizzard rule: it is common sense based on the post.

- **If your faction is open and you have made up your mind, create the character.** The limits follow the population, so a faction that is available today may not be tomorrow. On PvP, though, your first character fixes your faction across the whole regional ruleset, so be sure first.
- **If the game turns your faction down**, the post sets no timing. Trying again later is reasonable, since Blizzard itself says the situation can flip.
- **If you are joining friends or a guild**, agree on ruleset and faction before anyone creates a character: groups, guilds, dungeons and raids need both to match. If some of you cannot create on the busier side, the less populated faction is the one these limits are not aimed at.
- **Normal and Roleplaying** are not part of this post, which only covers the rulesets with open-world PvP.

## PvP in the interview with Crix {#interview}

This part comes from the press, not from Blizzard. In an interview by content creator Crix with Kris Zierhut, Principal Designer, and Tim Jones, [summarized by Wowhead](${WOWHEAD}) on 6 November, the developers also talked about PvP. According to the summary:

- PvP balance became very tight once rated arenas arrived; before that it was looser and centered on what you bring to a battleground team, not on one-versus-one fights. As long as battlegrounds stay at the centre of PvP, classes do not have to be made all alike.
- The Frost Mage's 31-point talent increases frost damage, but the effect can be dispelled, so PvP has a counter to it.
- Honor gear is fairly easy to get; the advantage comes from the higher-rank gear of the seasonal grind, and to get it you trade in your Honor gear. How Honor and ranks work is in [our article on the Darkspear Islands](/en/news/darkspear-islands-battleground-pvp-progression).

The full interview is [on YouTube](${CRIX}).

## What the post does not say {#unknown}

Which region and ruleset has the 55/45 split, at what point the limits kick in or are lifted, and how long they last. It also says nothing about characters that already exist: it only talks about creating new ones.`,
    `Martedì 10 novembre 2026 alle 02:05 UTC (03:05 CET), quando in America era ancora la sera di lunedì 9, Kaivax, Community Manager, ha pubblicato sul forum ufficiale [PvP Faction Balance Updates](${POST}). Blizzard ha cambiato il modo in cui la creazione dei personaggi tiene conto dell'equilibrio fra le fazioni sui set di regole PvP, e questa volta dà una cifra e dice quali fazioni sono toccate.

Il post segue due cose di cui abbiamo già parlato: i [blocchi dell'Orda sul PvP](/it/news/name-filter-fix-faction-locks) segnalati dai giocatori dalla fine di ottobre e il [video sui set di regole del 5 novembre](/it/news/rulesets-video-faction-limits), che confermava limiti temporanei alla creazione senza dare numeri.

## Al massimo 55/45, l'obiettivo è 50/50 {#numeri}

Per Blizzard i set di regole PvP hanno bisogno di due fazioni di dimensioni simili. Oggi il caso più squilibrato in una regione è circa 55/45: non è un divario enorme, ma non è vicino quanto il team vorrebbe. L'obiettivo è avvicinarsi il più possibile al 50/50.

In [una risposta di un'ora dopo](${POST}/158) (03:04 UTC, 04:04 CET) Kaivax ha spiegato come si misura la cifra: i giocatori attivi e collegati, di tutti i livelli, in un certo periodo di tempo. Un giocatore sosteneva che, contando gli account di prova (trial), lo squilibrio a favore dell'Orda sarebbe molto più forte. Kaivax ha risposto che Blizzard ha indagato a fondo e non ha trovato prove che i personaggi di prova abbiano avuto alcun effetto.

## Come cambia la creazione dei personaggi {#creazione}

Il sistema di creazione ora guarda lo stato complessivo dell'equilibrio fra le fazioni nei set PvP di ogni regione, invece di reagire a quelle che il post chiama "snapshots of points in time" (istantanee di singoli momenti). Nel breve periodo creare personaggi della fazione più popolosa sarà **sempre più difficile**:

- in **Nord America**, l'Orda sui set PvP;
- in **Europa**, l'Alleanza sul Roleplay-PvP.

Blizzard aggiunge che, man mano che i giocatori si assestano e si spostano, la situazione potrebbe invertirsi. Riconosce che non poter iniziare con una certa fazione in quel momento è frustrante, ma lo considera un compromesso necessario per la salute del set di regole, soprattutto ora che si formano le gilde e nascono le rivalità. Il post non dà soglie, durate né cifre per le altre combinazioni di regione e set.

## Anche il Roleplay-PvP {#roleplay-pvp}

L'esempio europeo riguarda il Roleplay-PvP, quindi i limiti alla creazione valgono anche per quel set, non solo per il PvP. Il post però non dice se sul Roleplay-PvP valga anche la regola del PvP di **una sola fazione per account**: Blizzard l'ha dichiarata solo per il set PvP, e sul Roleplay-PvP resta non confermata, come spieghiamo nella [nostra guida ai set di regole](/it/guides/wow-forever-rulesets#fazioni-pvp).

## Meno giocatori per zona, soprattutto sul PvP {#zone}

In [una seconda risposta](${POST}/174) (03:11 UTC, 04:11 CET) Kaivax ha ricordato un cambio fatto lo stesso giorno, che si trova nella [lista degli hotfix](${HOTFIXES}) sotto il 9 novembre: è stata ridotta la popolazione di giocatori in diverse zone molto congestionate. Sul set PvP il cambio è ancora più grande, dopo che i giocatori avevano segnalato sovraffollamento in vari punti. Blizzard continuerà a controllare l'affollamento delle zone e farà altri ritocchi se serviranno.

## Cosa vuol dire se state creando un personaggio {#in-pratica}

Quello che segue non è una regola di Blizzard: è buon senso, a partire dal post.

- **Se la vostra fazione è aperta e avete deciso, create il personaggio.** I limiti seguono la popolazione, quindi una fazione disponibile oggi potrebbe non esserlo domani. Sul PvP però il primo personaggio fissa la fazione per tutto il set della regione: siatene sicuri prima.
- **Se il gioco vi rifiuta la fazione**, il post non indica tempi. Riprovare più tardi è ragionevole, visto che Blizzard stessa dice che la situazione può invertirsi.
- **Se dovete raggiungere amici o una gilda**, mettetevi d'accordo su set di regole e fazione prima che qualcuno crei il personaggio: gruppi, gilde, dungeon e incursioni richiedono che coincidano tutti e due. Se qualcuno di voi non riesce a creare sulla fazione più affollata, quella meno popolosa è la fazione a cui questi limiti non sono rivolti.
- **Normal e Roleplaying** non sono nel post, che riguarda solo i set con il PvP nel mondo aperto.

## Il PvP nell'intervista con Crix {#intervista}

Questa parte viene dalla stampa, non da Blizzard. In un'intervista del creatore di contenuti Crix a Kris Zierhut, Principal Designer, e Tim Jones, [riassunta da Wowhead](${WOWHEAD}) il 6 novembre, gli sviluppatori hanno parlato anche di PvP. Secondo il riassunto:

- l'equilibrio del PvP è diventato molto stretto con l'arrivo delle arene classificate; prima era più largo e contava quello che si porta alla squadra in un campo di battaglia, non lo scontro uno contro uno. Finché i campi di battaglia restano il centro del PvP, le classi non vanno rese tutte uguali;
- il talento da 31 punti del Mago Frost aumenta i danni da gelo, ma l'effetto si può dissolvere, quindi nel PvP c'è un modo per contrastarlo;
- l'equipaggiamento Honor è abbastanza facile da ottenere; il vantaggio viene da quello dei ranghi più alti della stagione, e per averlo si cede in cambio quello Honor. Come funzionano Honor e ranghi è spiegato nel [nostro articolo sulle Darkspear Islands](/it/news/darkspear-islands-battleground-pvp-progression).

L'intervista completa è [su YouTube](${CRIX}).

## Cosa il post non dice {#non-detto}

In quale regione e su quale set c'è il 55/45, a che punto i limiti scattano o vengono tolti e quanto durano. Non parla nemmeno dei personaggi che esistono già: riguarda solo la creazione di quelli nuovi.`,
    `El martes 10 de noviembre de 2026 a las 02:05 UTC (03:05 CET), cuando en América aún era la noche del lunes 9, Kaivax, Community Manager, publicó en el foro oficial [PvP Faction Balance Updates](${POST}). Blizzard ha cambiado la forma en que la creación de personajes tiene en cuenta el equilibrio entre facciones en los conjuntos de reglas JcJ, y esta vez da una cifra y dice qué facciones se ven afectadas.

El mensaje llega después de dos cosas que ya contamos: los [bloqueos de la Horda en JcJ](/es/news/name-filter-fix-faction-locks) que los jugadores señalan desde finales de octubre y el [vídeo sobre los conjuntos de reglas del 5 de noviembre](/es/news/rulesets-video-faction-limits), que confirmaba límites temporales en la creación sin dar números.

## Como mucho 55/45, el objetivo es 50/50 {#cifras}

Según Blizzard, los conjuntos JcJ necesitan dos facciones de tamaño parecido. Hoy el caso más desequilibrado en una región ronda el 55/45: no es una diferencia enorme, pero no está tan cerca como quiere el equipo. El objetivo es acercarse todo lo posible al 50/50.

En [una respuesta una hora después](${POST}/158) (03:04 UTC, 04:04 CET), Kaivax explicó cómo se mide la cifra: jugadores activos y conectados, de todos los niveles, durante un periodo determinado. Un jugador sostenía que, contando las cuentas de prueba, el desequilibrio a favor de la Horda sería mucho mayor. Kaivax respondió que Blizzard lo investigó a fondo y no encontró pruebas de que los personajes de prueba hayan tenido ningún efecto.

## Cómo cambia la creación de personajes {#creacion}

El sistema de creación ahora tiene en cuenta el estado general del equilibrio entre facciones en los conjuntos JcJ de cada región, en lugar de reaccionar a lo que el mensaje llama "snapshots of points in time" (instantáneas de momentos concretos). A corto plazo, crear personajes de la facción más poblada será **cada vez más difícil**:

- en **Norteamérica**, la Horda en los conjuntos JcJ;
- en **Europa**, la Alianza en Rol-JcJ.

Blizzard añade que, a medida que los jugadores se asienten y se muevan, la situación podría invertirse. Reconoce que no poder empezar con una facción en ese momento es frustrante, pero lo considera un compromiso necesario para la salud del conjunto, sobre todo ahora que se forman las hermandades y nacen las rivalidades. El mensaje no da umbrales, duraciones ni cifras para las demás combinaciones de región y conjunto.

## Rol-JcJ también {#rol-jcj}

El ejemplo europeo es de Rol-JcJ, así que los límites de creación también valen en ese conjunto, no solo en JcJ. Lo que el mensaje no dice es si en Rol-JcJ rige también la regla de JcJ de **una sola facción por cuenta**: Blizzard solo la ha afirmado para el conjunto JcJ, y en Rol-JcJ sigue sin confirmarse, como explicamos en [nuestra guía de los conjuntos de reglas](/es/guides/wow-forever-rulesets#facciones-jcj).

## Menos jugadores por zona, sobre todo en JcJ {#zonas}

En [una segunda respuesta](${POST}/174) (03:11 UTC, 04:11 CET), Kaivax recordó un cambio hecho ese mismo día, que aparece en la [lista de hotfixes](${HOTFIXES}) del 9 de noviembre: se ha reducido la población de jugadores en varias zonas muy congestionadas. En el conjunto JcJ el cambio es aún mayor, después de que los jugadores dijeran que se sentían amontonados en varios lugares. Blizzard seguirá vigilando lo llenas que están las zonas y hará más ajustes si hace falta.

## Qué significa si vas a crear un personaje {#en-la-practica}

Lo que sigue no es una regla de Blizzard: es sentido común a partir del mensaje.

- **Si tu facción está abierta y ya lo tienes decidido, crea el personaje.** Los límites siguen a la población, así que una facción disponible hoy puede no estarlo mañana. Eso sí, en JcJ tu primer personaje fija la facción en todo el conjunto de tu región: asegúrate antes.
- **Si el juego te rechaza la facción**, el mensaje no da plazos. Volver a intentarlo más tarde es razonable, porque la propia Blizzard dice que la situación puede invertirse.
- **Si vas a reunirte con amigos o con una hermandad**, acuerda con ellos conjunto de reglas y facción antes de que nadie cree su personaje: grupos, hermandades, mazmorras y bandas exigen que coincidan las dos cosas. Si alguno no puede crear en la facción más llena, la menos poblada es la que estos límites no buscan frenar.
- **Normal y Rol** no aparecen en el mensaje, que solo trata de los conjuntos con JcJ en el mundo abierto.

## El JcJ en la entrevista con Crix {#entrevista}

Esta parte viene de la prensa, no de Blizzard. En una entrevista del creador de contenido Crix a Kris Zierhut, Principal Designer, y Tim Jones, [resumida por Wowhead](${WOWHEAD}) el 6 de noviembre, los desarrolladores también hablaron de JcJ. Según el resumen:

- el equilibrio del JcJ se volvió muy ajustado con la llegada de las arenas puntuadas; antes era más flexible y contaba lo que aportas al equipo en un campo de batalla, no el uno contra uno. Mientras los campos de batalla sigan siendo el centro del JcJ, las clases no tienen por qué ser todas iguales;
- el talento de 31 puntos del Mago de Escarcha aumenta el daño de escarcha, pero el efecto se puede disipar, así que en JcJ hay forma de contrarrestarlo;
- el equipo de honor es bastante fácil de conseguir; la ventaja está en el de los rangos más altos de la temporada, y para obtenerlo hay que entregar a cambio el de honor. Cómo funcionan el honor y los rangos está en [nuestro artículo sobre las Islas Lanza Negra](/es/news/darkspear-islands-battleground-pvp-progression).

La entrevista completa está [en YouTube](${CRIX}).

## Lo que el mensaje no dice {#sin-respuesta}

En qué región y en qué conjunto está el 55/45, en qué punto se activan o se levantan los límites y cuánto duran. Tampoco habla de los personajes que ya existen: solo trata de la creación de personajes nuevos.`,
  ),
  faq: {
    en: [
      {
        q: "Why can't I create a Horde character on PvP in North America?",
        a: "Since 10 November 2026, WoW Forever's character creation looks at the overall faction balance of each region's PvP rulesets. The Horde is currently the larger faction on the North American PvP rulesets, so creating Horde characters there gets increasingly difficult. Blizzard says this can flip.",
      },
      {
        q: "Do the faction limits apply to Roleplay-PvP in WoW Forever?",
        a: "The limits on character creation do: Blizzard's own example is the Alliance on European Roleplay-PvP. Whether Roleplay-PvP also has the PvP rule of one faction per account has not been confirmed.",
      },
      {
        q: "How does Blizzard measure the 55/45 faction split?",
        a: "According to Kaivax, it counts the active logged-in population at all levels over a specific period of time. Blizzard found no evidence that trial characters had any effect on it.",
      },
    ],
    it: [
      {
        q: "Perché non riesco a creare un personaggio dell'Orda sul PvP in Nord America?",
        a: "Dal 10 novembre 2026 la creazione dei personaggi di WoW Forever guarda l'equilibrio complessivo delle fazioni nei set PvP di ogni regione. Oggi l'Orda è la fazione più numerosa sui set PvP nordamericani, quindi lì creare personaggi dell'Orda diventa sempre più difficile. Blizzard dice che la situazione può invertirsi.",
      },
      {
        q: "I limiti di fazione valgono anche sul Roleplay-PvP di WoW Forever?",
        a: "I limiti alla creazione dei personaggi sì: l'esempio di Blizzard è proprio l'Alleanza sul Roleplay-PvP europeo. Se sul Roleplay-PvP valga anche la regola del PvP di una sola fazione per account non è stato confermato.",
      },
      {
        q: "Come misura Blizzard il 55/45 fra le fazioni?",
        a: "Secondo Kaivax conta la popolazione attiva e collegata, di tutti i livelli, in un certo periodo di tempo. Blizzard non ha trovato prove che i personaggi degli account di prova abbiano avuto un effetto.",
      },
    ],
    es: [
      {
        q: "¿Por qué no puedo crear un personaje de la Horda en JcJ en Norteamérica?",
        a: "Desde el 10 de noviembre de 2026 la creación de personajes de WoW Forever tiene en cuenta el equilibrio general de facciones en los conjuntos JcJ de cada región. Ahora la Horda es la facción más numerosa en los conjuntos JcJ de Norteamérica, así que crear personajes de la Horda ahí cuesta cada vez más. Blizzard dice que puede invertirse.",
      },
      {
        q: "¿Los límites de facción valen también en Rol-JcJ de WoW Forever?",
        a: "Los límites en la creación de personajes sí: el ejemplo de Blizzard es justo la Alianza en Rol-JcJ de Europa. Si en Rol-JcJ rige también la regla de JcJ de una sola facción por cuenta no está confirmado.",
      },
      {
        q: "¿Cómo mide Blizzard el 55/45 entre facciones?",
        a: "Según Kaivax, cuenta la población activa y conectada, de todos los niveles, durante un periodo determinado. Blizzard no encontró pruebas de que los personajes de cuentas de prueba influyeran en ella.",
      },
    ],
  },
};

export default item;

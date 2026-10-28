import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Apertura della prenotazione anticipata dei nomi, 27/10/2026. Fonti ufficiali: il post di Kaivax sul bug dei giocatori
 * oceanici (forum US, 20:02 UTC) e il banner del launcher di Battle.net sul ritardo (testo riportato da IGN). Orari
 * dell'apertura reale dal live blog di Wowhead (aggiornamenti delle 12:40, 13:05 e 14:30 PDT) e da IGN (16:00–17:29 ET).
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/name-reservation-issue-for-oceanic-players/2393431";
const ARTICLE = "https://news.blizzard.com/en-us/article/24303866/claim-your-world-of-warcraft-forever-character-names";
const WOWHEAD = "https://www.wowhead.com/news=383608/name-reservations-for-wow-forever-delayed";
const IGN = "https://www.ign.com/articles/world-of-warcraft-forever-name-reservation-is-broken-ahead-of-launch";

const item: NewsItem = {
  slug: "name-reservation-opening-october-27",
  date: "2026-10-27",
  source: "blizzard",
  topic: "event",
  url: POST,
  image: media.nameReservation.src,
  imageAlt: media.nameReservation.alt,
  guides: ["wow-forever-release-date", "wow-forever-rulesets"],
  title: n(
    "WoW Forever name reservation is open: a late start in Europe, queues in America, Roleplay-PvP available",
    "La prenotazione dei nomi di WoW Forever è aperta: in Europa con oltre due ore di ritardo, Roleplay-PvP c'è",
    "Ya se pueden reservar nombres en WoW Forever: en Europa con más de dos horas de retraso, Rol-JcJ incluido",
  ),
  metaTitle: n("WoW Forever name reservation: how the opening went", "WoW Forever: com'è andata la prenotazione dei nomi", "WoW Forever: así fue la apertura de nombres"),
  summary: n(
    "Early Name Reservation for WoW Forever opened on 27 October 2026, but not on time in Europe: a delay announced in the Battle.net launcher pushed it from 18:00 to about 20:40 CET. In North America it opened on schedule with queues and disconnections. The Roleplay-PvP ruleset is there, with a bug for Oceanic players. Reservations stay open until 3 November.",
    "La prenotazione anticipata dei nomi di WoW Forever è partita il 27 ottobre 2026, ma in Europa non in orario: un ritardo annunciato nel launcher di Battle.net l'ha spostata dalle 18:00 alle 20:40 circa. In Nord America è partita puntuale, con code e disconnessioni. Il set di regole Roleplay-PvP c'è, con un bug per i giocatori oceanici. Si prenota fino al 3 novembre.",
    "La reserva de nombres anticipada de WoW Forever empezó el 27 de octubre de 2026, pero en Europa no a su hora: un retraso anunciado en el launcher de Battle.net la llevó de las 18:00 a las 20:40 CET aproximadamente. En Norteamérica abrió puntual, con colas y desconexiones. El conjunto Rol-JcJ está disponible, con un error para los jugadores de Oceanía. Se reserva hasta el 3 de noviembre.",
  ),
  description: n(
    "WoW Forever name reservation opened on 27 October 2026 about 2h40 late in Europe, with queues in America and Roleplay-PvP available. Open until 3 November.",
    "Prenotazione dei nomi di WoW Forever aperta il 27 ottobre 2026 con circa 2 ore e 40 di ritardo in Europa, code in America, Roleplay-PvP. Fino al 3 novembre.",
    "La reserva de nombres de WoW Forever abrió el 27 de octubre de 2026 con unas 2 h 40 de retraso en Europa y colas en América. Hay Rol-JcJ. Hasta el 3/11.",
  ),
  highlights: {
    en: [
      { label: "Europe", text: "a delay in the launcher, then open from about 20:40 CET", anchor: "europe" },
      { label: "North America", text: "on time, with queues and disconnections", anchor: "america" },
      { label: "Roleplay-PvP", text: "available, with a bug for Oceanic players", anchor: "rp-pvp" },
      { label: "The rules", text: "three names across all rulesets, until 3 November", anchor: "rules" },
      { label: "Player reports", text: "errors and name filters not confirmed by Blizzard", anchor: "reports" },
    ],
    it: [
      { label: "Europa", text: "un ritardo nel launcher, poi aperta dalle 20:40 circa", anchor: "europa" },
      { label: "Nord America", text: "in orario, con code e disconnessioni", anchor: "america" },
      { label: "Roleplay-PvP", text: "disponibile, con un bug per i giocatori oceanici", anchor: "rp-pvp" },
      { label: "Le regole", text: "tre nomi su tutti i set di regole, fino al 3 novembre", anchor: "regole" },
      { label: "Segnalazioni", text: "errori e filtri dei nomi non confermati da Blizzard", anchor: "segnalazioni" },
    ],
    es: [
      { label: "Europa", text: "un retraso en el launcher y apertura hacia las 20:40 CET", anchor: "europa" },
      { label: "Norteamérica", text: "a su hora, con colas y desconexiones", anchor: "america" },
      { label: "Rol-JcJ", text: "disponible, con un error para los jugadores de Oceanía", anchor: "rol-jcj" },
      { label: "Las reglas", text: "tres nombres entre todos los conjuntos, hasta el 3 de noviembre", anchor: "reglas" },
      { label: "Avisos de jugadores", text: "errores y filtros de nombres no confirmados por Blizzard", anchor: "avisos" },
    ],
  },
  body: n(
    `Early Name Reservation for WoW Forever, announced by Blizzard on 20 October with [the opening times by region](/en/news/early-name-reservation-october-27-times), began on Tuesday 27 October 2026. It did not go smoothly. Here is what happened, hour by hour, and what we know about the Roleplay-PvP ruleset.

## Europe: two hours and forty minutes late {#europe}

Reservations were due to open in Europe at 18:00 CET. Instead, many players found the Play button greyed out in the Battle.net launcher (some solved it by switching the launcher region from Americas back to Europe), and those who got into the game found every ruleset greyed out. The launcher then showed a message from Blizzard, quoted by [IGN](${IGN}): "World of Warcraft: Forever Name Reservations are delayed while we resolve some final technical issues".

According to [Wowhead's live blog](${WOWHEAD}), reservations started working in Europe at 12:40 PDT, which is **about 20:40 CET**. Blizzard did not give a new time in advance and, as of the evening of 27 October, we found no post on the official forums explaining the delay.

## North America: on time, with queues {#america}

In North America reservations opened as planned at 1:00 p.m. PDT (21:00 CET). Many players reached the login queue and were disconnected when their turn came; IGN also reported a "Character creation timed out" error when confirming a character, which Blizzard was aware of. By 2:30 p.m. PDT (22:30 CET) Wowhead wrote that most disconnections had been solved, while some players still did not see every ruleset.

## Roleplay-PvP is there {#rp-pvp}

On 22 October Blizzard had said it was working to make the [Roleplay-PvP ruleset](/en/news/roleplay-pvp-ruleset-at-launch) selectable from the first day of reservations, and it is. The only official word on it during the evening is a [post by Kaivax](${POST}) at 20:02 UTC for **Oceanic players** connecting to Australian servers: because of a bug, they must create their Roleplay or Roleplay-PvP characters **first**. If they start with Normal or PvP, the two roleplaying rulesets are no longer available for the next characters. Blizzard says the issue only affects that region and that it is working on a fix.

## The rules, unchanged {#rules}

Nothing changes in the rules of the [official article](${ARTICLE}): reservations are open until **3 November** to owners of the Skyborne Heroic Pack, the Skyborne Epic Pack or the Warcraft Forever Collection, with **up to three characters in total across all rulesets**, first come, first served. The rulesets and their differences are in our [rulesets guide](/en/guides/wow-forever-rulesets); the launch is on 4 November at 3:00 p.m. PST, midnight in Central Europe (all dates on the [calendar](/en/calendar)).

## What players are reporting {#reports}

These reports come from the official forums and have **not been confirmed** by Blizzard:

- errors when creating characters ("Character of this type is Throttled", or "Error creating Character" for the Horde on Roleplay-PvP), which some read as an early faction balance limit;
- a very strict name filter, which rejects names containing short letter sequences;
- a name reserved on one ruleset showing as taken on the others.

We will update this article if Blizzard explains any of them.`,
    `La prenotazione anticipata dei nomi di WoW Forever, annunciata da Blizzard il 20 ottobre con [gli orari di apertura per regione](/it/news/early-name-reservation-october-27-times), è partita martedì 27 ottobre 2026. Non è andata liscia. Ecco cosa è successo, ora per ora, e cosa sappiamo del set di regole Roleplay-PvP.

## Europa: due ore e quaranta di ritardo {#europa}

In Europa la prenotazione doveva aprire alle 18:00. Molti giocatori hanno trovato invece il tasto Gioca grigio nel launcher di Battle.net (qualcuno l'ha sbloccato riportando la regione del launcher da Americhe a Europa), e chi entrava nel gioco trovava tutti i set di regole grigi. Poi il launcher ha mostrato un messaggio di Blizzard, riportato da [IGN](${IGN}): la prenotazione dei nomi era "in ritardo" per risolvere "gli ultimi problemi tecnici".

Secondo il [live blog di Wowhead](${WOWHEAD}), in Europa la prenotazione ha cominciato a funzionare alle 12:40 PDT, cioè **verso le 20:40 in Italia**. Blizzard non ha dato prima un orario nuovo e, fino alla sera del 27 ottobre, sul forum ufficiale non abbiamo trovato un post che spiegasse il ritardo.

## Nord America: in orario, con le code {#america}

In Nord America la prenotazione è partita come previsto alle 13:00 PDT (le 21:00 in Italia). Molti giocatori sono arrivati in coda e sono stati disconnessi quando toccava a loro; IGN ha segnalato anche l'errore "Character creation timed out" alla conferma del personaggio, di cui Blizzard era al corrente. Alle 14:30 PDT (le 22:30 in Italia) Wowhead scriveva che quasi tutte le disconnessioni erano risolte, mentre alcuni giocatori non vedevano ancora tutti i set di regole.

## Il Roleplay-PvP c'è {#rp-pvp}

Il 22 ottobre Blizzard aveva detto di lavorare perché il [set di regole Roleplay-PvP](/it/news/roleplay-pvp-ruleset-at-launch) fosse selezionabile dal primo giorno della prenotazione, e così è stato. L'unica parola ufficiale in serata è un [post di Kaivax](${POST}) delle 20:02 UTC per i **giocatori dell'Oceania** che si collegano ai server australiani: per un bug devono creare **per primi** i personaggi Roleplay o Roleplay-PvP. Se cominciano da Normal o PvP, i due set del gioco di ruolo non sono più disponibili per i personaggi successivi. Blizzard dice che il problema riguarda solo quella regione e che sta preparando una correzione.

## Le regole, invariate {#regole}

Le regole dell'[articolo ufficiale](${ARTICLE}) non cambiano: si prenota fino al **3 novembre** con lo Skyborne Heroic Pack, lo Skyborne Epic Pack o la Warcraft Forever Collection, fino a **tre personaggi in tutto su tutti i set di regole**, a chi arriva prima. I set di regole e le loro differenze sono nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets); il lancio è il 4 novembre alle 15:00 PST, la mezzanotte in Italia (tutte le date nel [calendario](/it/calendar)).

## Cosa segnalano i giocatori {#segnalazioni}

Queste segnalazioni vengono dal forum ufficiale e **non sono confermate** da Blizzard:

- errori nella creazione dei personaggi ("Character of this type is Throttled", oppure "Error creating Character" per l'Orda su Roleplay-PvP), che alcuni leggono come un primo limite per l'equilibrio delle fazioni;
- un filtro dei nomi molto severo, che rifiuta nomi con dentro brevi sequenze di lettere;
- un nome prenotato su un set di regole che risulta già preso sugli altri.

Aggiorneremo l'articolo se Blizzard spiega uno di questi punti.`,
    `La reserva de nombres anticipada de WoW Forever, que Blizzard anunció el 20 de octubre con [los horarios de apertura por región](/es/news/early-name-reservation-october-27-times), empezó el martes 27 de octubre de 2026. No fue bien. Esto es lo que pasó, hora a hora, y lo que sabemos del conjunto de reglas Rol-JcJ.

## Europa: dos horas y cuarenta de retraso {#europa}

En Europa la reserva tenía que abrir a las 18:00 CET. En cambio, muchos jugadores encontraron el botón Jugar en gris en el launcher de Battle.net (algunos lo resolvieron cambiando la región del launcher de América a Europa), y quien entraba en el juego veía todos los conjuntos de reglas en gris. Después el launcher mostró un mensaje de Blizzard, citado por [IGN](${IGN}): la reserva de nombres se "retrasaba" para resolver "los últimos problemas técnicos".

Según el [blog en directo de Wowhead](${WOWHEAD}), en Europa la reserva empezó a funcionar a las 12:40 PDT, es decir, **hacia las 20:40 CET**. Blizzard no dio antes una hora nueva y, hasta la noche del 27 de octubre, no encontramos en el foro oficial ningún mensaje que explicara el retraso.

## Norteamérica: a su hora, con colas {#america}

En Norteamérica la reserva abrió como estaba previsto a las 13:00 PDT (las 21:00 CET). Muchos jugadores llegaron a la cola y fueron desconectados cuando les tocaba; IGN informó también del error "Character creation timed out" al confirmar el personaje, que Blizzard conocía. A las 14:30 PDT (las 22:30 CET) Wowhead escribía que casi todas las desconexiones estaban resueltas, aunque algunos jugadores aún no veían todos los conjuntos de reglas.

## Rol-JcJ está disponible {#rol-jcj}

El 22 de octubre Blizzard había dicho que trabajaba para que el [conjunto Rol-JcJ](/es/news/roleplay-pvp-ruleset-at-launch) se pudiera elegir desde el primer día de la reserva, y así ha sido. La única palabra oficial esa noche es un [mensaje de Kaivax](${POST}) de las 20:02 UTC para los **jugadores de Oceanía** que se conectan a los servidores australianos: por un error, deben crear **primero** sus personajes de Rol o Rol-JcJ. Si empiezan por Normal o JcJ, los dos conjuntos de rol dejan de estar disponibles para los personajes siguientes. Blizzard dice que el problema solo afecta a esa región y que prepara una corrección.

## Las reglas no cambian {#reglas}

Las reglas del [artículo oficial](${ARTICLE}) siguen igual: se reserva hasta el **3 de noviembre** con el Skyborne Heroic Pack, el Skyborne Epic Pack o la Warcraft Forever Collection, hasta **tres personajes en total entre todos los conjuntos de reglas**; el primero que llega se lo queda. Los conjuntos y sus diferencias están en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets); el lanzamiento es el 4 de noviembre a las 15:00 PST, la medianoche en España peninsular (todas las fechas en el [calendario](/es/calendar)).

## Lo que cuentan los jugadores {#avisos}

Estos avisos vienen del foro oficial y **no están confirmados** por Blizzard:

- errores al crear personajes ("Character of this type is Throttled", o "Error creating Character" para la Horda en Rol-JcJ), que algunos interpretan como un primer límite de equilibrio entre facciones;
- un filtro de nombres muy estricto, que rechaza nombres con secuencias cortas de letras;
- un nombre reservado en un conjunto que aparece como ocupado en los demás.

Actualizaremos el artículo si Blizzard explica alguno de estos puntos.`,
  ),
  faq: {
    en: [
      {
        q: "When did WoW Forever name reservation open in Europe?",
        a: "It was scheduled for 27 October 2026 at 18:00 CET, but after a delay announced in the Battle.net launcher it started working at about 20:40 CET. It stays open until 3 November.",
      },
      {
        q: "Can I reserve a name on the Roleplay-PvP ruleset?",
        a: "Yes, Roleplay-PvP is one of the rulesets available during Early Name Reservation. Oceanic players must create their Roleplay or Roleplay-PvP characters first because of a bug.",
      },
    ],
    it: [
      {
        q: "Quando è partita in Europa la prenotazione dei nomi di WoW Forever?",
        a: "Era prevista il 27 ottobre 2026 alle 18:00, ma dopo un ritardo annunciato nel launcher di Battle.net ha cominciato a funzionare verso le 20:40. Resta aperta fino al 3 novembre.",
      },
      {
        q: "Si può prenotare un nome sul set di regole Roleplay-PvP?",
        a: "Sì, Roleplay-PvP è fra i set di regole disponibili nella prenotazione anticipata. I giocatori dell'Oceania devono creare per primi i personaggi Roleplay o Roleplay-PvP a causa di un bug.",
      },
    ],
    es: [
      {
        q: "¿Cuándo abrió en Europa la reserva de nombres de WoW Forever?",
        a: "Estaba prevista el 27 de octubre de 2026 a las 18:00 CET, pero tras un retraso anunciado en el launcher de Battle.net empezó a funcionar hacia las 20:40 CET. Sigue abierta hasta el 3 de noviembre.",
      },
      {
        q: "¿Se puede reservar un nombre en el conjunto Rol-JcJ?",
        a: "Sí, Rol-JcJ es uno de los conjuntos disponibles en la reserva anticipada. Los jugadores de Oceanía deben crear primero sus personajes de Rol o Rol-JcJ por un error.",
      },
    ],
  },
};

export default item;

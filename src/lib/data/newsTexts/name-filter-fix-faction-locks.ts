import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Ultimi giorni della prenotazione dei nomi (28/10–1/11/2026), letti il 2/11 sui JSON dei forum US ed EU.
 * - Ufficiale: post di Kaivax del 28/10 01:28 UTC (US 2394467, EU 638147), unico blu del topic (666 post letti tutti);
 *   articolo sui set di regole del 22/10 (24302070); nome unico per regione (24304161 del 21/09 e Starter Guide del 28/10);
 *   chiusura "through November 3" senza orario (24303866).
 * - Customer Support (Vrakthris, blu del forum di assistenza, non sviluppatore né community manager): 29–31/10, topic
 *   2396074, 2396786, 2396149, 2395161. Il fix oceanico "addressed... hopefully resolved", il bilanciamento "recalculated
 *   throughout the day", "no involvement in population balance".
 * - Giocatori (non confermato): topic US 2393431, 2394467, 2398295, 2397919, 2396657, 2398391; EU 638757; primi
 *   blocchi dell'Orda il 27/10 alle 20:13 UTC (US 2393482) e 20:49 UTC (EU 638082). IGN del 29/10.
 * - Stampa: intervista Mein-MMO a Zierhut e Moon (registrata a fine beta, pubblicata il 28/10 in tedesco), pagina 3.
 * Nessun community manager o sviluppatore ha scritto sui blocchi di fazione fino al 1/11 alle 23:50 UTC.
 */
const KAIVAX = "https://us.forums.blizzard.com/en/wow/t/overly-restrictive-name-check-and-fix-incoming-october-27/2394467";
const KAIVAX_EU = "https://eu.forums.blizzard.com/en/wow/t/overly-restrictive-name-check-and-fix-incoming-28-october/638147";
const IGN = "https://www.ign.com/articles/some-people-who-paid-for-wow-forever-name-reservation-couldnt-reserve-their-name-due-to-a-weird-bug";
const OCEANIC = "https://us.forums.blizzard.com/en/wow/t/name-reservation-issue-for-oceanic-players/2393431";
const CS_TOPIC = "https://us.forums.blizzard.com/en/wow/t/name-reservations-not-working-3-days-in/2396149";
const CS_FACTION = "https://us.forums.blizzard.com/en/wow/t/cannot-create-horde-characters/2396786";
const IMBALANCE = "https://us.forums.blizzard.com/en/wow/t/this-faction-is-currently-unavailable-on-this-ruleset-due-to-population-imbalance/2398295";
const EU_LOCK = "https://eu.forums.blizzard.com/en/wow/t/faction-unavalaible-on-eu-pvp-ruleset-for-the-4th-day-in-a-row/638757";
const RP_BUG = "https://us.forums.blizzard.com/en/wow/t/rp-server-bug/2396657";
const RULESETS = "https://news.blizzard.com/en-us/article/24302070/choose-your-ruleset-in-world-of-warcraft-forever";
const RULESETS_IT = "https://news.blizzard.com/it-it/article/24302070/scegli-il-tuo-set-di-regole-in-world-of-warcraft-forever";
const RULESETS_ES = "https://news.blizzard.com/es-es/article/24302070/elige-un-conjunto-de-reglas-para-world-of-warcraft-forever";
const MEINMMO = "https://mein-mmo.de/wow-forever-interview-aidan-moon-kris-zierhut/3/";
const NAMES = "https://news.blizzard.com/en-us/article/24304161/create-a-name-of-your-own-in-wow-forever";
const STARTER = "https://news.blizzard.com/en-us/article/24315280/new-players-starter-guide-welcome-to-world-of-warcraft-forever";
const CLAIM = "https://news.blizzard.com/en-us/article/24303866/claim-your-world-of-warcraft-forever-character-names";
const PODCAST = "https://www.youtube.com/watch?v=BVyhnixdPQg&t=3239s";

const item: NewsItem = {
  slug: "name-filter-fix-faction-locks",
  date: "2026-11-01",
  source: "blizzard",
  topic: "event",
  url: KAIVAX,
  image: media.factionLocks.src,
  imageAlt: media.factionLocks.alt,
  guides: ["wow-forever-rulesets", "wow-forever-release-date"],
  title: n(
    "WoW Forever names and factions: the name filter fix, Horde locks on PvP and the end of name reservation",
    "Nomi e fazioni in WoW Forever: il fix del filtro, l'Orda bloccata sul PvP e la prenotazione che si chiude",
    "Nombres y facciones en WoW Forever: el arreglo del filtro, la Horda bloqueada en JcJ y el fin de la reserva",
  ),
  metaTitle: n(
    "WoW Forever: name filter fix and faction locks",
    "WoW Forever: filtro dei nomi e blocchi di fazione",
    "WoW Forever: filtro de nombres y bloqueos de facción",
  ),
  summary: n(
    "On 28 October Blizzard admitted a bug in WoW Forever's restricted name list and fixed it with the realm restarts, but according to players the fix arrived unevenly. Since the first evening of reservations many players report that the Horde cannot be created on the PvP ruleset because of \"population imbalance\": Blizzard had announced temporary faction limits and Kris Zierhut confirmed the strict rule to Mein-MMO. Reservations end on 3 November, with no closing time.",
    "Il 28 ottobre Blizzard ha ammesso un bug nella lista dei nomi riservati di WoW Forever e l'ha corretto con i riavvii dei server, ma secondo i giocatori il fix è arrivato a macchia di leopardo. Dalla prima sera della prenotazione molti giocatori segnalano che sul set PvP l'Orda non si può creare per \"population imbalance\": Blizzard aveva annunciato limiti temporanei alle fazioni e Kris Zierhut ha confermato a Mein-MMO la regola rigida. La prenotazione finisce il 3 novembre, senza un orario.",
    "El 28 de octubre Blizzard admitió un error en la lista de nombres restringidos de WoW Forever y lo corrigió con los reinicios de los servidores, pero según los jugadores el arreglo llegó de forma desigual. Desde la primera noche de la reserva muchos jugadores cuentan que en el conjunto JcJ no se puede crear la Horda por \"population imbalance\": Blizzard había anunciado límites temporales por facción y Kris Zierhut confirmó a Mein-MMO la regla estricta. La reserva termina el 3 de noviembre, sin hora.",
  ),
  description: n(
    "WoW Forever: Blizzard's name filter fix, the Horde locks on the PvP ruleset reported by players, why names are unique per region, and reservations ending.",
    "WoW Forever: il fix del filtro dei nomi, l'Orda bloccata sul set PvP secondo i giocatori, il nome unico per regione e la prenotazione che chiude il 3/11.",
    "WoW Forever: el arreglo del filtro de nombres, la Horda bloqueada en JcJ según los jugadores, el nombre único por región y el fin de la reserva el 3/11.",
  ),
  highlights: {
    en: [
      { label: "Name filter", text: "a bug in the restricted name list, fixed with the realm restarts", anchor: "name-filter" },
      { label: "How the fix went", text: "unevenly, according to players and IGN", anchor: "reports" },
      { label: "Oceanic Roleplay", text: "working again for players; only Customer Support has commented", anchor: "oceania" },
      { label: "Faction locks", text: "Horde unavailable on PvP: reported by players, not explained by Blizzard", anchor: "factions" },
      { label: "One name per region", text: "why a name is taken on every ruleset", anchor: "names" },
      { label: "3 November", text: "the last day to reserve, with no closing time", anchor: "deadline" },
    ],
    it: [
      { label: "Filtro dei nomi", text: "un bug nella lista dei nomi riservati, corretto con i riavvii", anchor: "filtro" },
      { label: "Com'è andato il fix", text: "a macchia di leopardo, secondo i giocatori e IGN", anchor: "segnalazioni" },
      { label: "Roleplay in Oceania", text: "di nuovo funzionante per i giocatori; ne ha parlato solo l'assistenza", anchor: "oceania" },
      { label: "Blocchi di fazione", text: "Orda non disponibile sul PvP: lo segnalano i giocatori, Blizzard non lo spiega", anchor: "fazioni" },
      { label: "Un nome per regione", text: "perché un nome risulta preso su tutti i set di regole", anchor: "nomi" },
      { label: "3 novembre", text: "l'ultimo giorno per prenotare, senza un orario", anchor: "scadenza" },
    ],
    es: [
      { label: "Filtro de nombres", text: "un error en la lista de nombres restringidos, corregido con los reinicios", anchor: "filtro" },
      { label: "Cómo fue el arreglo", text: "desigual, según los jugadores e IGN", anchor: "avisos" },
      { label: "Rol en Oceanía", text: "vuelve a funcionar según los jugadores; solo ha hablado el servicio de atención al cliente", anchor: "oceania" },
      { label: "Bloqueos de facción", text: "Horda no disponible en JcJ: lo cuentan los jugadores, Blizzard no lo explica", anchor: "facciones" },
      { label: "Un nombre por región", text: "por qué un nombre aparece ocupado en todos los conjuntos", anchor: "nombres" },
      { label: "3 de noviembre", text: "el último día para reservar, sin hora de cierre", anchor: "plazo" },
    ],
  },
  body: n(
    `In the last days of name reservation for WoW Forever, between 28 October and 1 November 2026, Blizzard's community team wrote one post about names and none about factions; a few answers came from Customer Support on the forum. Here is what is official, what comes from players and the press, and what is still unclear, as of the evening of 1 November.

## The name filter fix {#name-filter}

On 28 October at 01:28 UTC (02:28 CET), Kaivax, Community Manager, posted [Overly Restrictive Name Check and Fix Incoming](${KAIVAX}) on the US forum, with the same text on the [EU forum](${KAIVAX_EU}). The game checks every name against a **restricted name list**: names that are not profane but that Blizzard wants to block, such as major Warcraft lore characters or names blocked for technical reasons. A bug in that process made the check "overly restrictive": for example, it refused every name containing "c-o-n".

Blizzard said the fix would come "with the next realm restarts in each region", without a time, and that anyone who had received "That name is restricted" could try again afterwards. It is the only blue post in the topic, which has reached 666 messages.

## How the fix went, according to players {#reports}

These reports come from the official forum and from IGN, and are **not confirmed** by Blizzard:

- from the afternoon of 28 October several players found a workaround: go back, switch to another ruleset, return to the original one and try the name again. It worked for some, not for all;
- on 29 October [IGN](${IGN}) wrote that the fix should have gone live with the restart, but that some players were still reporting problems. IGN managed to reserve "Concon Concon", so the "c-o-n" case looks solved, and it quoted a player who listed 23 refused names containing "nurse";
- on 1 November some players still see names refused as "restricted" or as "Mature Language".

Blizzard has not said whether the fix reached everyone.

## Oceanic players and Roleplay {#oceania}

On 27 October Kaivax had [warned Oceanic players](${OCEANIC}) on Australian servers: because of a bug, they had to create their Roleplay or Roleplay-PvP characters first, otherwise the two roleplaying rulesets were no longer available. His post has not been updated. According to players in the same topic, Roleplay-PvP has worked since the night between 29 and 30 October (UTC) and Roleplay since the following night. The only word from Blizzard comes from Customer Support: on 31 October Vrakthris wrote in [a support topic](${CS_TOPIC}) that the team had "addressed" the Oceanic issue the day before, and that "hopefully" it is resolved.

In the same topic he confirmed another problem in North America, still open on 31 October: some characters created on Roleplay end up on Roleplay-PvP, or on Normal, and the team is looking into it.

## Faction locks on the PvP ruleset {#factions}

**What players report** (not confirmed by Blizzard). Since the first evening of reservations, 27 October, in North America and in Europe, many players cannot create Horde characters on the PvP ruleset: the game answers "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})". The lock comes and goes. On 31 October a topic on the [European forum](${EU_LOCK}) spoke of the fourth day in a row, while other players got through by trying every hour or so. A few players also report the message on Normal or Roleplay, which the official rules do not mention.

**What Blizzard says.** No community manager or developer has commented on these locks. Customer Support on the forum has only said that it has no role in population balance and, in the words of one agent, that the balance "is recalculated throughout the day", so [it is worth trying again later](${CS_FACTION}). The official basis is the [rulesets article](${RULESETS}), in its version of 22 October: on the PvP rulesets Forever uses systems to keep the Horde and the Alliance closer, "similar to the approach introduced in Season of Discovery", where creating characters of one faction could be temporarily limited. The same article says that on the PvP ruleset each account can only create characters of one faction. Blizzard has not given a threshold or a duration for the locks.

**What Kris Zierhut said to the press.** In the interview with [Mein-MMO](${MEINMMO}), recorded at the end of the beta and published in German on 28 October, the principal designer says that on PvP realms faction balance is enforced strictly: once you create a Horde character there, you cannot create an Alliance one. In the beta the ratio was about **51.7% Horde and 48.3% Alliance**. It is a statement reported by the press, in German, not a Blizzard article, and it does not mention the temporary locks.

**Roleplay-PvP.** The rulesets article lists Normal, Roleplay and Hardcore as the rulesets where you can have both factions, and says nothing either way about Roleplay-PvP. The only clue that the one-faction rule applies there too comes from players: on 30 October [one of them](${RP_BUG}) reported that the game refused an Alliance character on Roleplay because the account had Horde characters on Roleplay-PvP. It is not confirmed.

The podcast of 29 October has a two-minute chapter called "Faction Locks" ([from 53:59](${PODCAST})); we have not transcribed it yet.

## One name per region {#names}

This part is official and explains a common complaint: the full name, main name plus secondary name, must be unique **within the region**, not within the ruleset ([Create a Name of Your Own](${NAMES}), 21 September, repeated in the [Starter Guide](${STARTER}) of 28 October). A name taken by anyone on Normal is therefore taken on PvP and Roleplay too, and the other way round. Customer Support says the same: creating a name on one ruleset prevents its use anywhere in that region. Two characters can share a main name if the secondary name is different.

This also explains one of the reports we listed as unconfirmed on [27 October](/en/news/name-reservation-opening-october-27): a name reserved on one ruleset that shows as taken on the others. More on rulesets in our [rulesets guide](/en/guides/wow-forever-rulesets).

## Reservations close on 3 November {#deadline}

Early Name Reservation is open "through November 3", in Blizzard's words, with **no closing time**. The rules are those of the [official article](${CLAIM}): up to **three characters in total across all rulesets**, first come, first served, for owners of the Skyborne Heroic Pack, the Skyborne Epic Pack or the Warcraft Forever Collection. With no time given, it is safer not to leave it to the evening of 3 November.

Then comes the launch, on 4 November at 3:00 p.m. PST, midnight CET: all the times by region are in [our launch article](/en/news/wow-forever-launch-times-starter-guide).

## What we don't know yet {#unknown}

- Whether the name fix has reached everyone.
- Threshold, duration and rules of the faction locks, and how they will work at launch.
- Whether Roleplay-PvP also has the one-faction-per-account rule.
- The exact closing time of reservations on 3 November.
- When the North American bug that moves characters to another ruleset will be fixed.`,
    `Negli ultimi giorni della prenotazione dei nomi di WoW Forever, fra il 28 ottobre e il 1° novembre 2026, il team community di Blizzard ha scritto un post sui nomi e nessuno sulle fazioni; qualche risposta è arrivata dall'assistenza clienti (Customer Support) sul forum. Ecco cosa è ufficiale, cosa viene da giocatori e stampa e cosa resta da chiarire, alla sera del 1° novembre.

## Il fix del filtro dei nomi {#filtro}

Il 28 ottobre alle 01:28 UTC (le 02:28 in Italia) Kaivax, Community Manager, ha pubblicato [Overly Restrictive Name Check and Fix Incoming](${KAIVAX}) sul forum US, con lo stesso testo sul [forum EU](${KAIVAX_EU}). Il gioco confronta ogni nome con una **lista dei nomi riservati**: nomi che non sono volgari ma che Blizzard vuole bloccare, come i grandi personaggi del lore di Warcraft o nomi bloccati per motivi tecnici. Un bug in quel controllo lo rendeva "troppo restrittivo": per esempio rifiutava ogni nome che conteneva "c-o-n".

Blizzard ha detto che la correzione sarebbe arrivata "con i prossimi riavvii dei server in ogni regione", senza un orario, e che chi aveva ricevuto "That name is restricted" poteva riprovare dopo. È l'unico post blu del topic, arrivato a 666 messaggi.

## Com'è andato il fix, secondo i giocatori {#segnalazioni}

Queste segnalazioni vengono dal forum ufficiale e da IGN, e **non sono confermate** da Blizzard:

- dal pomeriggio del 28 ottobre diversi giocatori hanno trovato un rimedio: tornare indietro, passare a un altro set di regole, rientrare in quello di partenza e riprovare il nome. Per alcuni ha funzionato, non per tutti;
- il 29 ottobre [IGN](${IGN}) ha scritto che il fix doveva essere arrivato con il riavvio, ma che alcuni giocatori segnalavano ancora problemi. IGN è riuscita a prenotare "Concon Concon", quindi il caso "c-o-n" sembra risolto, e ha citato un giocatore che elencava 23 nomi rifiutati con dentro "nurse";
- il 1° novembre qualcuno vede ancora nomi rifiutati come "restricted" o come "Mature Language".

Blizzard non ha detto se il fix sia arrivato a tutti.

## I giocatori dell'Oceania e il Roleplay {#oceania}

Il 27 ottobre Kaivax aveva [avvisato i giocatori dell'Oceania](${OCEANIC}) sui server australiani: per un bug dovevano creare per primi i personaggi Roleplay o Roleplay-PvP, altrimenti i due set del gioco di ruolo non erano più disponibili. Il suo post non è stato aggiornato. Secondo i giocatori dello stesso topic, il Roleplay-PvP funziona dalla notte fra il 29 e il 30 ottobre (UTC) e il Roleplay dalla notte successiva. L'unica parola di Blizzard viene dall'assistenza clienti: il 31 ottobre Vrakthris ha scritto in [un topic di assistenza](${CS_TOPIC}) che il giorno prima il team aveva "affrontato" il problema oceanico e che "si spera" sia risolto.

Nello stesso topic ha confermato un altro problema in Nord America, ancora aperto il 31 ottobre: alcuni personaggi creati sul Roleplay finiscono sul Roleplay-PvP, o sul Normal, e il team ci sta lavorando.

## I blocchi di fazione sul set PvP {#fazioni}

**Cosa segnalano i giocatori** (non confermato da Blizzard). Dalla prima sera della prenotazione, il 27 ottobre, in Nord America e in Europa, molti giocatori non riescono a creare personaggi dell'Orda sul set PvP: il gioco risponde "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})", cioè fazione non disponibile per squilibrio di popolazione. Il blocco va e viene. Il 31 ottobre un topic del [forum europeo](${EU_LOCK}) parlava del quarto giorno di fila, mentre altri giocatori ci sono riusciti riprovando più o meno ogni ora. Qualcuno segnala il messaggio anche su Normal o Roleplay, cosa che le regole ufficiali non prevedono.

**Cosa dice Blizzard.** Nessun community manager e nessuno sviluppatore ha commentato questi blocchi. L'assistenza clienti sul forum ha detto solo che non si occupa dell'equilibrio delle popolazioni e, con le parole di un addetto, che l'equilibrio "viene ricalcolato nel corso della giornata", quindi [conviene riprovare più tardi](${CS_FACTION}). La base ufficiale è l'[articolo sui set di regole](${RULESETS_IT}), nella versione del 22 ottobre: sui set PvP Forever usa sistemi per tenere più vicine Orda e Alleanza, sulla scia di Season of Discovery, dove la creazione di personaggi di una fazione poteva essere limitata per un periodo. Lo stesso articolo dice che sul set PvP ogni account può creare personaggi di una sola fazione. Blizzard non ha dato una soglia né una durata dei blocchi.

**Cosa ha detto Kris Zierhut alla stampa.** Nell'intervista a [Mein-MMO](${MEINMMO}), registrata alla fine della beta e pubblicata in tedesco il 28 ottobre, il principal designer dice che sui set PvP l'equilibrio delle fazioni è imposto in modo rigido: se crei lì un personaggio dell'Orda, non puoi crearne uno dell'Alleanza. In beta il rapporto era di circa **51,7% Orda e 48,3% Alleanza**. È una dichiarazione riportata dalla stampa, in tedesco, non un articolo di Blizzard, e non parla dei blocchi temporanei.

**Roleplay-PvP.** L'articolo sui set di regole elenca Normal, Roleplay e Hardcore come i set dove si possono avere tutte e due le fazioni, e sul Roleplay-PvP non dice niente, né in un senso né nell'altro. L'unico indizio che la regola di una sola fazione valga anche lì viene dai giocatori: il 30 ottobre [uno di loro](${RP_BUG}) ha raccontato che il gioco gli rifiutava un personaggio dell'Alleanza sul Roleplay perché l'account aveva personaggi dell'Orda sul Roleplay-PvP. Non è confermato.

Il podcast del 29 ottobre ha un capitolo di due minuti intitolato "Faction Locks" ([da 53:59](${PODCAST})); non l'abbiamo ancora trascritto.

## Un nome per regione {#nomi}

Questa parte è ufficiale e spiega una lamentela frequente: il nome completo, nome principale più nome secondario, deve essere unico **nella regione**, non nel set di regole ([Create a Name of Your Own](${NAMES}), 21 settembre, ripreso nella [Starter Guide](${STARTER}) del 28 ottobre). Un nome preso da chiunque sul Normal è quindi preso anche sul PvP e sul Roleplay, e viceversa. L'assistenza clienti dice lo stesso: creare un nome su un set di regole ne impedisce l'uso in tutta la regione. Due personaggi possono avere lo stesso nome principale se il secondario è diverso.

Questo spiega anche una delle segnalazioni che il [27 ottobre](/it/news/name-reservation-opening-october-27) avevamo messo fra quelle non confermate: un nome prenotato su un set di regole che risulta già preso sugli altri. Di più nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets).

## La prenotazione chiude il 3 novembre {#scadenza}

La prenotazione anticipata dei nomi resta aperta "through November 3", fino al 3 novembre, con le parole di Blizzard, **senza un orario di chiusura**. Le regole sono quelle dell'[articolo ufficiale](${CLAIM}): fino a **tre personaggi in tutto su tutti i set di regole**, a chi arriva prima, per chi ha lo Skyborne Heroic Pack, lo Skyborne Epic Pack o la Warcraft Forever Collection. Senza un orario, è più prudente non aspettare la sera del 3 novembre.

Poi c'è il lancio, il 4 novembre alle 15:00 PST, in Italia la mezzanotte fra il 4 e il 5: tutti gli orari per regione sono nel [nostro articolo sul lancio](/it/news/wow-forever-launch-times-starter-guide).

## Cosa non sappiamo ancora {#non-sappiamo}

- Se il fix dei nomi sia arrivato a tutti.
- Soglia, durata e regole dei blocchi di fazione, e come funzioneranno al lancio.
- Se anche il Roleplay-PvP abbia la regola di una sola fazione per account.
- L'ora esatta in cui chiude la prenotazione il 3 novembre.
- Quando sarà corretto il bug nordamericano che sposta i personaggi su un altro set di regole.`,
    `En los últimos días de la reserva de nombres de WoW Forever, entre el 28 de octubre y el 1 de noviembre de 2026, el equipo de comunidad de Blizzard escribió un mensaje sobre los nombres y ninguno sobre las facciones; algunas respuestas llegaron del servicio de atención al cliente (Customer Support) en el foro. Esto es lo oficial, lo que viene de jugadores y prensa y lo que sigue sin aclarar, a la noche del 1 de noviembre.

## El arreglo del filtro de nombres {#filtro}

El 28 de octubre a las 01:28 UTC (las 02:28 CET), Kaivax, Community Manager, publicó [Overly Restrictive Name Check and Fix Incoming](${KAIVAX}) en el foro de EE. UU., con el mismo texto en el [foro europeo](${KAIVAX_EU}). El juego compara cada nombre con una **lista de nombres restringidos**: nombres que no son malsonantes pero que Blizzard quiere bloquear, como grandes personajes del trasfondo de Warcraft o nombres bloqueados por motivos técnicos. Un error en esa comprobación la volvía "demasiado restrictiva": por ejemplo, rechazaba cualquier nombre que contuviera "c-o-n".

Blizzard dijo que la corrección llegaría "con los próximos reinicios de los servidores en cada región", sin hora, y que quien hubiera recibido "That name is restricted" podía volver a intentarlo después. Es el único mensaje azul del tema, que ha llegado a 666 mensajes.

## Cómo fue el arreglo, según los jugadores {#avisos}

Estos avisos vienen del foro oficial y de IGN, y **no están confirmados** por Blizzard:

- desde la tarde del 28 de octubre varios jugadores encontraron un remedio: volver atrás, pasar a otro conjunto de reglas, regresar al de partida y probar otra vez el nombre. A algunos les funcionó, no a todos;
- el 29 de octubre [IGN](${IGN}) escribió que el arreglo debía haber llegado con el reinicio, pero que algunos jugadores seguían teniendo problemas. IGN consiguió reservar "Concon Concon", así que el caso "c-o-n" parece resuelto, y citó a un jugador que enumeraba 23 nombres rechazados con "nurse" dentro;
- el 1 de noviembre algunos jugadores siguen viendo nombres rechazados como "restricted" o como "Mature Language".

Blizzard no ha dicho si el arreglo ha llegado a todos.

## Los jugadores de Oceanía y el Rol {#oceania}

El 27 de octubre Kaivax había [avisado a los jugadores de Oceanía](${OCEANIC}) de los servidores australianos: por un error, tenían que crear primero sus personajes de Rol o Rol-JcJ; si no, los dos conjuntos de rol dejaban de estar disponibles. Su mensaje no se ha actualizado. Según los jugadores del mismo tema, Rol-JcJ funciona desde la noche del 29 al 30 de octubre (UTC) y Rol desde la noche siguiente. La única palabra de Blizzard viene del servicio de atención al cliente: el 31 de octubre Vrakthris escribió en [un tema de soporte](${CS_TOPIC}) que el día anterior el equipo había "abordado" el problema de Oceanía y que "con suerte" está resuelto.

En el mismo tema confirmó otro problema en Norteamérica, aún abierto el 31 de octubre: algunos personajes creados en Rol acaban en Rol-JcJ, o en Normal, y el equipo lo está investigando.

## Los bloqueos de facción en el conjunto JcJ {#facciones}

**Lo que cuentan los jugadores** (no confirmado por Blizzard). Desde la primera noche de la reserva, el 27 de octubre, en Norteamérica y en Europa, muchos jugadores no pueden crear personajes de la Horda en el conjunto JcJ: el juego responde "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})", es decir, facción no disponible por desequilibrio de población. El bloqueo va y viene. El 31 de octubre un tema del [foro europeo](${EU_LOCK}) hablaba del cuarto día seguido, mientras otros jugadores lo lograron probando más o menos cada hora. Algunos cuentan el mensaje también en Normal o en Rol, algo que las reglas oficiales no prevén.

**Lo que dice Blizzard.** Ningún community manager ni desarrollador ha comentado estos bloqueos. El servicio de atención al cliente en el foro solo ha dicho que no se ocupa del equilibrio de población y, en palabras de un agente, que el equilibrio "se recalcula a lo largo del día", así que [conviene volver a probar más tarde](${CS_FACTION}). La base oficial es el [artículo sobre los conjuntos de reglas](${RULESETS_ES}), en su versión del 22 de octubre: en los conjuntos JcJ Forever usa sistemas para mantener más igualadas a la Horda y la Alianza, como en Season of Discovery (Temporada del Descubrimiento), donde la creación de personajes de una facción podía limitarse temporalmente. El mismo artículo dice que en el conjunto JcJ cada cuenta solo puede crear personajes de una facción. Blizzard no ha dado un umbral ni una duración de los bloqueos.

**Lo que dijo Kris Zierhut a la prensa.** En la entrevista con [Mein-MMO](${MEINMMO}), grabada al final de la beta y publicada en alemán el 28 de octubre, el diseñador principal dice que en los conjuntos JcJ el equilibrio de facciones se impone de forma estricta: si creas allí un personaje de la Horda, no puedes crear uno de la Alianza. En la beta la proporción fue de un **51,7% de Horda y un 48,3% de Alianza**. Es una declaración recogida por la prensa, en alemán, no un artículo de Blizzard, y no habla de los bloqueos temporales.

**Rol-JcJ.** El artículo sobre los conjuntos de reglas cita Normal, Rol y Hardcore como los conjuntos donde se pueden tener las dos facciones, y no dice nada, ni a favor ni en contra, sobre Rol-JcJ. El único indicio de que la regla de una sola facción también vale allí viene de los jugadores: el 30 de octubre [uno de ellos](${RP_BUG}) contó que el juego le rechazaba un personaje de la Alianza en Rol porque la cuenta tenía personajes de la Horda en Rol-JcJ. No está confirmado.

El pódcast del 29 de octubre tiene un capítulo de dos minutos titulado "Faction Locks" ([desde el 53:59](${PODCAST})); todavía no lo hemos transcrito.

## Un nombre por región {#nombres}

Esta parte es oficial y explica una queja frecuente: el nombre completo, nombre principal más nombre secundario, debe ser único **en la región**, no en el conjunto de reglas ([Create a Name of Your Own](${NAMES}), 21 de septiembre, repetido en la [guía de iniciación](${STARTER}) del 28 de octubre). Un nombre que alguien haya cogido en Normal está, por tanto, ocupado también en JcJ y en Rol, y al revés. El servicio de atención al cliente dice lo mismo: crear un nombre en un conjunto impide usarlo en toda la región. Dos personajes pueden compartir el nombre principal si el secundario es distinto.

Esto explica también uno de los avisos que el [27 de octubre](/es/news/name-reservation-opening-october-27) dejamos como no confirmados: un nombre reservado en un conjunto que aparece como ocupado en los demás. Más en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets).

## La reserva cierra el 3 de noviembre {#plazo}

La reserva anticipada de nombres sigue abierta "through November 3", hasta el 3 de noviembre, en palabras de Blizzard, **sin hora de cierre**. Las reglas son las del [artículo oficial](${CLAIM}): hasta **tres personajes en total entre todos los conjuntos de reglas**, para el primero que llega, si tienes el Pack Heroic de los célicos, el Pack Epic de los célicos o la Warcraft Forever Collection. Sin una hora, es más prudente no esperar a la noche del 3 de noviembre.

Después llega el lanzamiento, el 4 de noviembre a las 15:00 PST, la medianoche CET en la España peninsular: todos los horarios por región están en [nuestro artículo del lanzamiento](/es/news/wow-forever-launch-times-starter-guide).

## Lo que aún no sabemos {#no-sabemos}

- Si el arreglo de los nombres ha llegado a todos.
- Umbral, duración y reglas de los bloqueos de facción, y cómo funcionarán en el lanzamiento.
- Si Rol-JcJ también tiene la regla de una sola facción por cuenta.
- La hora exacta de cierre de la reserva el 3 de noviembre.
- Cuándo se corregirá el error norteamericano que mueve personajes a otro conjunto de reglas.`,
  ),
  faq: {
    en: [
      {
        q: "Why can't I create a Horde character on the WoW Forever PvP ruleset?",
        a: "Because of faction balancing: the game shows \"This faction is currently unavailable on this ruleset due to population imbalance\". Blizzard announced temporary limits like those of Season of Discovery but has not explained these locks; according to players and Customer Support they come and go during the day.",
      },
      {
        q: "Why is my WoW Forever name taken on every ruleset?",
        a: "Because the full name, main name plus secondary name, must be unique within the whole region, not within a ruleset. A name reserved by anyone on one ruleset cannot be used on the others.",
      },
    ],
    it: [
      {
        q: "Perché non posso creare un personaggio dell'Orda sul set PvP di WoW Forever?",
        a: "Per il bilanciamento delle fazioni: il gioco mostra \"This faction is currently unavailable on this ruleset due to population imbalance\". Blizzard aveva annunciato limiti temporanei come in Season of Discovery ma non ha spiegato questi blocchi; secondo i giocatori e l'assistenza clienti vanno e vengono nel corso della giornata.",
      },
      {
        q: "Perché il mio nome in WoW Forever risulta preso su tutti i set di regole?",
        a: "Perché il nome completo, nome principale più nome secondario, deve essere unico in tutta la regione, non nel singolo set di regole. Un nome prenotato da chiunque su un set non si può usare sugli altri.",
      },
    ],
    es: [
      {
        q: "¿Por qué no puedo crear un personaje de la Horda en el conjunto JcJ de WoW Forever?",
        a: "Por el equilibrio de facciones: el juego muestra \"This faction is currently unavailable on this ruleset due to population imbalance\". Blizzard anunció límites temporales como los de Season of Discovery, pero no ha explicado estos bloqueos; según los jugadores y el servicio de atención al cliente, van y vienen a lo largo del día.",
      },
      {
        q: "¿Por qué mi nombre de WoW Forever aparece ocupado en todos los conjuntos de reglas?",
        a: "Porque el nombre completo, nombre principal más nombre secundario, debe ser único en toda la región, no en cada conjunto de reglas. Un nombre que alguien haya reservado en un conjunto no se puede usar en los demás.",
      },
    ],
  },
};

export default item;

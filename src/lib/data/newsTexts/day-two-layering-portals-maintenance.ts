import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Secondo giorno di WoW Forever (5/11/2026), fonti rilette il 5/11 alle 23:15 UTC. `source: "site"` perché mescola post
 * ufficiali e segnalazioni dei giocatori.
 * - Ufficiale: Aggrend su layering (US 2401806/27, 06:35 UTC) e su navi e zeppelin (US 2401777/15, 06:39 UTC); Kaivax
 *   sugli invitati (US 2401646 ed EU 639604, 02:43 UTC); @Warcraft sull'infrastruttura (02:38 UTC).
 * - Giocatori (non confermato, nessuna risposta blu alle 23:15 UTC): manutenzione US 2402244 e 2402255 (partono alle
 *   15:00 UTC; US 2402365 parla di server tornati alle 15:44 UTC: durata dedotta); set di regole US 2402365, 2402394,
 *   2402692, 2402757; rollback US 2402764, 2402425; phasing US 2402714; Stregone US 2401780, 2401991; mondo vuoto US
 *   2401834, EU 639735, in senso opposto EU 639662; fazioni US 2402359, 2402179.
 * - Stampa: MassivelyOP (84 istanze di Stormwind: conteggio dell'autore; "goodish" di Holly Longdale; frase di Josh
 *   Greenfield), Mein-MMO (ticker, 07:50 MEZ), PC Gamer (solo titolo e occhiello), PCGamesN (sommario del feed).
 * Il picco di 1,2 milioni di spettatori su Twitch viene solo dal titolo di un topic Reddit: non va scritto.
 */
const LAYERING = "https://us.forums.blizzard.com/en/wow/t/why-do-i-see-maybe-8-people-inside-the-main-city/2401806/27";
const SHIPS = "https://us.forums.blizzard.com/en/wow/t/zeppelins-broken/2401777/15";
const INVITE = "https://us.forums.blizzard.com/en/wow/t/issues-resolved-for-invite-a-friend-players/2401646";
const INFRA_X = "https://x.com/Warcraft/status/2118171078912618887";
const MAINTENANCE = "https://us.forums.blizzard.com/en/wow/t/maintenance-on-day-2/2402244";
const RULESET_RP = "https://us.forums.blizzard.com/en/wow/t/characters-created-on-rp-shard-have-been-moved-to-rp-pvp-after-maintenance/2402365";
const RULESET_NORMAL = "https://us.forums.blizzard.com/en/wow/t/characters-on-wrong-ruleset/2402692";
const ROLLBACK = "https://us.forums.blizzard.com/en/wow/t/partial-destructive-character-rollback-when-dced-for-morning-maintenance/2402764";
const PHASING = "https://us.forums.blizzard.com/en/wow/t/phasing-is-now-broken/2402714";
const WARLOCK = "https://us.forums.blizzard.com/en/wow/t/voidwalker-has-half-the-health-of-classic-wow/2401780";
const GHOST_EU = "https://eu.forums.blizzard.com/en/wow/t/639735";
const CROWDED_EU = "https://eu.forums.blizzard.com/en/wow/t/639662";
const HORDE_FULL = "https://us.forums.blizzard.com/en/wow/t/horde-pvp-is-full/2402359";
const MASSIVELY = "https://massivelyop.com/2026/11/05/world-of-warcraft-forevers-launch-was-incredibly-smooth-but-not-without-a-couple-hiccups/";
const MEINMMO = "https://mein-mmo.de/wow-forever-launch-live-ticker/";
const PCGAMER = "https://www.pcgamer.com/games/world-of-warcraft/after-all-the-queuing-drama-in-beta-wow-forevers-launch-was-buttery-smooth/";
const PCGAMESN = "https://www.pcgamesn.com/world-of-warcraft/smooth-launch";

const item: NewsItem = {
  slug: "day-two-layering-portals-maintenance",
  date: "2026-11-05",
  source: "site",
  topic: "event",
  image: media.newsDayTwo.src,
  imageAlt: media.newsDayTwo.alt,
  guides: ["wow-forever-rulesets", "wow-forever-release-date"],
  title: n(
    "WoW Forever's second day: empty cities, portals for ships and characters reported on the wrong ruleset",
    "WoW Forever, secondo giorno: città vuote, portali per le navi e personaggi segnalati sul set sbagliato",
    "Segundo día de WoW Forever: ciudades vacías, portales para barcos y avisos de personajes en otro conjunto",
  ),
  metaTitle: n(
    "WoW Forever day two: layering, portals and maintenance",
    "WoW Forever, giorno 2: layering, portali e manutenzione",
    "WoW Forever, día 2: capas, portales y mantenimiento",
  ),
  summary: n(
    "The press called the launch smooth, but on 5 November the main complaint was a world that felt empty, and Blizzard promised to adjust the layering. Lost ships and zeppelins got temporary portals. After a short maintenance, some players report characters moved to another ruleset, with no answer from Blizzard so far.",
    "La stampa ha promosso il lancio, ma il 5 novembre la lamentela principale è stata un mondo troppo vuoto, e Blizzard ha promesso di ritoccare il layering. Per navi e zeppelin persi sono arrivati portali temporanei. Dopo una breve manutenzione alcuni giocatori segnalano personaggi finiti su un altro set di regole, per ora senza risposta da Blizzard.",
    "La prensa aprobó el lanzamiento, pero el 5 de noviembre la queja principal fue un mundo demasiado vacío, y Blizzard prometió retocar las capas. Para los barcos y zepelines perdidos llegaron portales temporales. Tras un mantenimiento breve, algunos jugadores cuentan que sus personajes están en otro conjunto de reglas, por ahora sin respuesta de Blizzard.",
  ),
  description: n(
    "WoW Forever on 5 November: Blizzard on empty layers, portals for lost ships, a short maintenance and characters reported on the wrong ruleset.",
    "WoW Forever il 5 novembre: Blizzard sui layer vuoti, portali per navi perse, una breve manutenzione e personaggi segnalati sul set sbagliato.",
    "WoW Forever el 5 de noviembre: Blizzard sobre las capas vacías, portales para los barcos, un mantenimiento y personajes en otro conjunto.",
  ),
  highlights: {
    en: [
      { label: "A world too empty", text: "Blizzard promises to adjust the layering", anchor: "layering" },
      { label: "Ships and zeppelins", text: "temporary portals near docks and towers", anchor: "portals" },
      { label: "Short maintenance", text: "about 16:00 CET, no official post", anchor: "maintenance" },
      { label: "Wrong ruleset", text: "players' reports after the maintenance, unconfirmed", anchor: "ruleset" },
      { label: "Invite-a-Friend", text: "the level 10 block is fixed", anchor: "invite" },
      { label: "Other complaints", text: "Warlock pets and the Horde on PvP", anchor: "complaints" },
      { label: "The numbers", text: "Blizzard's servers, no player count", anchor: "numbers" },
    ],
    it: [
      { label: "Un mondo troppo vuoto", text: "Blizzard promette di ritoccare il layering", anchor: "layering" },
      { label: "Navi e zeppelin", text: "portali temporanei vicino a moli e torri", anchor: "portali" },
      { label: "Breve manutenzione", text: "verso le 16:00 CET, senza post ufficiali", anchor: "manutenzione" },
      { label: "Set sbagliato", text: "segnalazioni dei giocatori dopo la manutenzione, non confermate", anchor: "set-di-regole" },
      { label: "Invite-a-Friend", text: "corretto il blocco al livello 10", anchor: "inviti" },
      { label: "Altre proteste", text: "famigli dello Stregone e Orda sul PvP", anchor: "proteste" },
      { label: "I numeri", text: "i server di Blizzard, nessun dato sui giocatori", anchor: "numeri" },
    ],
    es: [
      { label: "Un mundo demasiado vacío", text: "Blizzard promete retocar las capas", anchor: "capas" },
      { label: "Barcos y zepelines", text: "portales temporales junto a muelles y torres", anchor: "portales" },
      { label: "Mantenimiento breve", text: "hacia las 16:00 CET, sin mensaje oficial", anchor: "mantenimiento" },
      { label: "Conjunto equivocado", text: "avisos de jugadores tras el mantenimiento, sin confirmar", anchor: "conjunto" },
      { label: "Invite-a-Friend", text: "corregido el bloqueo en el nivel 10", anchor: "invitados" },
      { label: "Otras quejas", text: "esbirros del brujo y la Horda en JcJ", anchor: "quejas" },
      { label: "Las cifras", text: "los servidores de Blizzard, ningún dato de jugadores", anchor: "cifras" },
    ],
  },
  body: n(
    `After a [launch night](/en/news/launch-day-november-4) that held up better than many expected, Thursday 5 November 2026 brought the first real adjustments to WoW Forever. Blizzard answered on layering and on lost transports, and fixed a problem for invited players. Other problems are only reported by players: we mark them as such. The bugs Blizzard has listed are in [our article on the Known Issues](/en/news/known-issues-november-5). This article reflects what was public at 23:15 UTC on 5 November.

## A world that feels too empty {#layering}

The most common complaint of the day was not about queues, but about seeing too few people. Thread after thread on the forums described near-empty capitals, on both the [US](${LAYERING}) and [EU](${GHOST_EU}) sides. [MassivelyOP](${MASSIVELY}) called the aggressive layering the biggest issue of the night, and its writer counted 84 copies of Stormwind: that is one writer's observation, not an official figure. [Mein-MMO](${MEINMMO}) also noted that some players miss the crowds of past Classic launches. Not everyone agrees: [one EU thread](${CROWDED_EU}) asks for fewer people per layer.

At 06:35 UTC (07:35 CET) [Aggrend answered on the forum](${LAYERING}): Blizzard knows some areas do not feel as populated as they should and planned to tweak some numbers the next day to make them livelier. No post confirms that the change is live yet. After the maintenance [one thread](${PHASING}) claims phasing got worse, with players attacking enemies you cannot see, but it is a small thread and nothing confirms it.

## Portals instead of ships and zeppelins {#portals}

At 06:39 UTC (07:39 CET) [Aggrend also confirmed](${SHIPS}) that boats and zeppelins can get lost in the Maelstrom for long stretches. As a temporary fix, Blizzard placed portals near most docks and inside the zeppelin towers to move between continents. A proper fix was due in the morning, and the portals will go once it has been verified. No post has confirmed that step yet, so if a transport does not arrive, look for the portal.

## A short maintenance {#maintenance}

According to players the servers [went down at about 15:00 UTC (16:00 CET)](${MAINTENANCE}) and were back within about 45 minutes. Blizzard wrote nothing on the forums about it: players say the notice was only in the Battle.net app. No patch notes followed, and it is reasonable to think this was when the layering and transport changes went in, but that is our guess.

## Characters on another ruleset {#ruleset}

This is the point to watch. After the maintenance, some players report that characters created during name reservation are now [on Roleplay-PvP instead of Roleplaying](${RULESET_RP}), or [on PvP instead of Normal](${RULESET_NORMAL}). The threads are few but tell the same story. **Blizzard has not replied**, so we do not know how many players are affected or whether the characters will be moved back. If it happens to you, check the other rulesets and open a ticket with Blizzard support. Others report [losing a few minutes of progress](${ROLLBACK}) because they were disconnected by the maintenance.

## Invite-a-Friend fixed {#invite}

At 02:43 UTC (03:43 CET) [Kaivax announced a hotfix](${INVITE}) for players who joined with an Invite-a-Friend code: they were wrongly restricted in some chat channels and could not level past 10, join guilds, form parties or trade. If you were affected, log out and back in.

## Other complaints {#complaints}

Warlocks are [asking for a hotfix](${WARLOCK}): pets now get 2 health per point of Stamina, a change from the [notes of 2 November](/en/news/development-notes-november-2), and many say they die too easily. On PvP [the Horde is still reported as full](${HORDE_FULL}). Blizzard has not answered either complaint on the forum.

## The numbers {#numbers}

The only official figures are about the hardware: [@Warcraft says](${INFRA_X}) the game runs on 3,924 virtual machines, with 251,136 GB of memory and 70,480 CPU cores. Blizzard has not published a player count, and we have not found a reliable peak for Twitch viewers. The press agrees on the launch: "buttery smooth" for [PC Gamer](${PCGAMER}), fine for [PCGamesN](${PCGAMESN}), and Holly Longdale, the game's executive producer, called it "goodish" according to MassivelyOP.`,
    `Dopo una [notte del lancio](/it/news/launch-day-november-4) che ha retto meglio di quanto molti si aspettassero, giovedì 5 novembre 2026 ha portato i primi veri ritocchi a WoW Forever. Blizzard ha risposto su layering e trasporti persi, e ha corretto un problema degli invitati. Altri problemi sono solo segnalati dai giocatori, e li indichiamo come tali. I bug elencati da Blizzard sono nel [nostro articolo sui problemi noti](/it/news/known-issues-november-5). L'articolo racconta ciò che era pubblico alle 23:15 UTC del 5 novembre.

## Un mondo troppo vuoto {#layering}

La lamentela più diffusa del giorno non ha riguardato le code, ma il vedere troppa poca gente. Sul forum si sono moltiplicati i topic su capitali quasi deserte, sia [negli USA](${LAYERING}) sia [in Europa](${GHOST_EU}). [MassivelyOP](${MASSIVELY}) ha indicato nel layering aggressivo il problema più grande della notte, e il suo autore ha contato 84 copie di Stormwind: è l'osservazione di una persona, non un dato ufficiale. Anche [Mein-MMO](${MEINMMO}) ha notato che alcuni giocatori rimpiangono la folla dei vecchi lanci di Classic. Non tutti sono d'accordo: [un topic europeo](${CROWDED_EU}) chiede meno gente per layer.

Alle 06:35 UTC (07:35 CET) [Aggrend ha risposto sul forum](${LAYERING}): Blizzard sa che alcune aree non sembrano popolate come dovrebbero e aveva in programma di ritoccare alcuni numeri il giorno dopo per renderle più vive. Nessun post conferma che la modifica sia già attiva. Dopo la manutenzione [un topic](${PHASING}) sostiene che il phasing sia peggiorato, con giocatori che attaccano nemici invisibili, ma è un topic piccolo e nulla lo conferma.

## Portali al posto di navi e zeppelin {#portali}

Alle 06:39 UTC (07:39 CET) [Aggrend ha confermato anche](${SHIPS}) che navi e zeppelin possono perdersi nel Maelstrom a lungo. Come soluzione temporanea, Blizzard ha messo dei portali vicino a quasi tutti i moli e dentro le torri degli zeppelin per passare da un continente all'altro. La correzione vera era prevista in mattinata, e i portali verranno tolti dopo averla verificata. Nessun post ha ancora confermato questo passaggio: se un trasporto non arriva, cercate il portale.

## Una breve manutenzione {#manutenzione}

Secondo i giocatori i server [sono andati giù verso le 15:00 UTC (16:00 CET)](${MAINTENANCE}) e sono tornati entro circa 45 minuti. Blizzard non ne ha scritto sul forum: i giocatori dicono che l'avviso era solo nell'app Battle.net. Non ci sono note di aggiornamento, ed è ragionevole pensare che sia stato il momento delle modifiche a layering e trasporti, ma è una nostra ipotesi.

## Personaggi su un altro set di regole {#set-di-regole}

È il punto da seguire. Dopo la manutenzione alcuni giocatori segnalano che i personaggi creati durante la prenotazione dei nomi sono ora [su Roleplay-PvP invece che su Roleplaying](${RULESET_RP}), oppure [su PvP invece che su Normal](${RULESET_NORMAL}). I topic sono pochi ma raccontano la stessa storia. **Blizzard non ha risposto**, quindi non sappiamo quanti giocatori siano coinvolti né se i personaggi verranno riportati indietro. Se capita anche a voi, controllate gli altri set di regole e aprite un ticket all'assistenza Blizzard. Altri segnalano di [aver perso qualche minuto di progressi](${ROLLBACK}) per la disconnessione dovuta alla manutenzione.

## Invite-a-Friend corretto {#inviti}

Alle 02:43 UTC (03:43 CET) [Kaivax ha annunciato un hotfix](${INVITE}) per chi è entrato con un codice Invite-a-Friend: per errore aveva limiti su alcuni canali della chat e non poteva superare il livello 10, entrare in gilda, formare gruppi o scambiare oggetti. Se eravate tra questi, uscite e rientrate nel gioco.

## Altre proteste {#proteste}

Gli Stregoni [chiedono un hotfix](${WARLOCK}): i famigli hanno ora 2 punti vita per punto di Stamina, una modifica delle [note del 2 novembre](/it/news/development-notes-november-2), e in molti dicono che muoiono troppo in fretta. Sul PvP [l'Orda risulta ancora piena](${HORDE_FULL}). Blizzard non ha risposto sul forum a nessuna delle due proteste.

## I numeri {#numeri}

Gli unici dati ufficiali riguardano l'hardware: [@Warcraft dice](${INFRA_X}) che il gioco gira su 3.924 macchine virtuali, con 251.136 GB di memoria e 70.480 core. Blizzard non ha pubblicato il numero dei giocatori, e non abbiamo trovato un picco affidabile degli spettatori su Twitch. La stampa è concorde sul lancio: "buttery smooth", cioè liscio come il burro, per [PC Gamer](${PCGAMER}), bene anche per [PCGamesN](${PCGAMESN}), e secondo MassivelyOP la produttrice esecutiva Holly Longdale ha parlato di un lancio "goodish", cioè abbastanza buono.`,
    `Tras una [noche de lanzamiento](/es/news/launch-day-november-4) que aguantó mejor de lo que muchos esperaban, el jueves 5 de noviembre de 2026 trajo los primeros ajustes reales a WoW Forever. Blizzard respondió sobre las capas y los transportes perdidos, y corrigió un problema de los invitados. Otros problemas solo los cuentan los jugadores, y así lo indicamos. Los errores que Blizzard ha listado están en [nuestro artículo sobre los problemas conocidos](/es/news/known-issues-november-5). Este artículo recoge lo que era público a las 23:15 UTC del 5 de noviembre.

## Un mundo demasiado vacío {#capas}

La queja más repetida del día no fue por las colas, sino por ver muy poca gente. En los foros se multiplicaron los temas sobre capitales casi desiertas, tanto [en EE. UU.](${LAYERING}) como [en Europa](${GHOST_EU}). [MassivelyOP](${MASSIVELY}) señaló las capas agresivas (layering) como el mayor problema de la noche, y su autor contó 84 copias de Ventormenta: es la observación de una persona, no una cifra oficial. [Mein-MMO](${MEINMMO}) también notó que algunos jugadores echan de menos el gentío de los antiguos lanzamientos de Classic. No todos están de acuerdo: [un tema europeo](${CROWDED_EU}) pide menos gente por capa.

A las 06:35 UTC (07:35 CET) [Aggrend respondió en el foro](${LAYERING}): Blizzard sabe que algunas zonas no parecen tan pobladas como deberían y pensaba retocar algunos números al día siguiente para darles más vida. Ningún mensaje confirma que el cambio ya esté activo. Tras el mantenimiento [un tema](${PHASING}) afirma que la fase ha empeorado, con jugadores que atacan enemigos invisibles, pero es un tema pequeño y nada lo confirma.

## Portales en lugar de barcos y zepelines {#portales}

A las 06:39 UTC (07:39 CET) [Aggrend también confirmó](${SHIPS}) que los barcos y zepelines pueden perderse en la Vorágine durante mucho tiempo. Como solución temporal, Blizzard colocó portales cerca de casi todos los muelles y dentro de las torres de zepelines para pasar de un continente a otro. La corrección real estaba prevista para la mañana, y los portales se quitarán cuando se haya comprobado. Ningún mensaje ha confirmado aún ese paso: si un transporte no llega, busca el portal.

## Un mantenimiento breve {#mantenimiento}

Según los jugadores, los servidores [cayeron hacia las 15:00 UTC (16:00 CET)](${MAINTENANCE}) y volvieron en unos 45 minutos. Blizzard no escribió nada en los foros: los jugadores dicen que el aviso solo estaba en la aplicación de Battle.net. No hay notas de actualización, y es razonable pensar que fue el momento de los cambios en capas y transportes, pero es una suposición nuestra.

## Personajes en otro conjunto de reglas {#conjunto}

Este es el punto que hay que seguir. Tras el mantenimiento, algunos jugadores cuentan que los personajes creados durante la reserva de nombres están ahora [en Rol-JcJ en lugar de Rol](${RULESET_RP}), o [en JcJ en lugar de Normal](${RULESET_NORMAL}). Los temas son pocos, pero cuentan la misma historia. **Blizzard no ha respondido**, así que no sabemos a cuántos jugadores afecta ni si los personajes volverán a su sitio. Si te ocurre, revisa los otros conjuntos de reglas y abre un ticket en el soporte de Blizzard. Otros cuentan que [perdieron unos minutos de progreso](${ROLLBACK}) por la desconexión del mantenimiento.

## Invite-a-Friend, corregido {#invitados}

A las 02:43 UTC (03:43 CET) [Kaivax anunció una corrección](${INVITE}) para quienes entraron con un código Invite-a-Friend: por error tenían limitados algunos canales de chat y no podían pasar del nivel 10, entrar en hermandades, formar grupos ni comerciar. Si te afectó, cierra sesión y vuelve a entrar.

## Otras quejas {#quejas}

Los brujos [piden una corrección](${WARLOCK}): los esbirros tienen ahora 2 puntos de salud por punto de Aguante, un cambio de las [notas del 2 de noviembre](/es/news/development-notes-november-2), y muchos dicen que mueren demasiado rápido. En JcJ [la Horda sigue apareciendo llena](${HORDE_FULL}). Blizzard no ha respondido en el foro a ninguna de las dos quejas.

## Las cifras {#cifras}

Las únicas cifras oficiales son del hardware: [@Warcraft dice](${INFRA_X}) que el juego funciona con 3.924 máquinas virtuales, 251.136 GB de memoria y 70.480 núcleos. Blizzard no ha publicado el número de jugadores, y no hemos encontrado un pico fiable de espectadores en Twitch. La prensa coincide sobre el lanzamiento: "buttery smooth", muy fluido, para [PC Gamer](${PCGAMER}), bien también para [PCGamesN](${PCGAMESN}), y según MassivelyOP la productora ejecutiva Holly Longdale habló de un lanzamiento "goodish", bastante bueno.`,
  ),
  faq: {
    en: [
      {
        q: "Why does WoW Forever feel so empty?",
        a: "Players and the press point to layering, which splits zones into many copies. On 5 November Blizzard acknowledged that some areas do not feel as populated as they should and said it would adjust some numbers. No post has confirmed the change yet.",
      },
      {
        q: "What do I do if my ship or zeppelin does not arrive in WoW Forever?",
        a: "Look for the temporary portals Blizzard placed near most docks and inside the zeppelin towers. They move you between continents and will be removed once the proper fix has been verified.",
      },
      {
        q: "My WoW Forever character is on another ruleset: what can I do?",
        a: "Check the other rulesets and open a ticket with Blizzard support. Players have reported this since the maintenance of 5 November, but Blizzard has not commented, so we do not know whether characters will be moved back.",
      },
    ],
    it: [
      {
        q: "Perché WoW Forever sembra così vuoto?",
        a: "Giocatori e stampa indicano il layering, che divide le zone in molte copie. Il 5 novembre Blizzard ha riconosciuto che alcune aree non sembrano popolate come dovrebbero e ha detto che avrebbe ritoccato alcuni numeri. Nessun post ha ancora confermato la modifica.",
      },
      {
        q: "Cosa faccio se la nave o lo zeppelin non arriva in WoW Forever?",
        a: "Cercate i portali temporanei che Blizzard ha messo vicino a quasi tutti i moli e dentro le torri degli zeppelin. Portano da un continente all'altro e verranno tolti quando la correzione vera sarà verificata.",
      },
      {
        q: "Il mio personaggio di WoW Forever è su un altro set di regole: cosa posso fare?",
        a: "Controllate gli altri set di regole e aprite un ticket all'assistenza Blizzard. I giocatori lo segnalano dalla manutenzione del 5 novembre, ma Blizzard non ha commentato, quindi non sappiamo se i personaggi verranno riportati indietro.",
      },
    ],
    es: [
      {
        q: "¿Por qué WoW Forever parece tan vacío?",
        a: "Los jugadores y la prensa señalan las capas (layering), que dividen las zonas en muchas copias. El 5 de noviembre Blizzard reconoció que algunas zonas no parecen tan pobladas como deberían y dijo que retocaría algunos números. Ningún mensaje ha confirmado aún el cambio.",
      },
      {
        q: "¿Qué hago si mi barco o zepelín no llega en WoW Forever?",
        a: "Busca los portales temporales que Blizzard colocó cerca de casi todos los muelles y dentro de las torres de zepelines. Llevan de un continente a otro y se quitarán cuando se compruebe la corrección real.",
      },
      {
        q: "Mi personaje de WoW Forever está en otro conjunto de reglas: ¿qué puedo hacer?",
        a: "Revisa los otros conjuntos de reglas y abre un ticket en el soporte de Blizzard. Los jugadores lo cuentan desde el mantenimiento del 5 de noviembre, pero Blizzard no ha comentado nada, así que no sabemos si los personajes volverán a su sitio.",
      },
    ],
  },
};

export default item;

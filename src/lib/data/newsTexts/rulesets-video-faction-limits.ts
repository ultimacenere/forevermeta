import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Video ufficiale "Rulesets | World of Warcraft: Forever" (YouTube 7ZmA4Jy6ixU, 5/11/2026 18:00 UTC, 366 secondi),
 * letto dai sottotitoli inglesi caricati da Blizzard (non quelli automatici), via API player col client ANDROID.
 * Descrizione del video: il RP-PvP non è nel video ma è confermato. @Warcraft lo rilancia alle 18:56 UTC.
 * Altra fonte ufficiale: articolo "WoW: Forever– Watch Forging Forever" (24317865, 22:00 UTC), che rimanda alla replica già
 * nota. Il video dice "PvE" dove il sito e l'articolo sui set di regole dicono Normal.
 */
const VIDEO = "https://www.youtube.com/watch?v=7ZmA4Jy6ixU";
const FORGING = "https://news.blizzard.com/en-us/article/24317865/wow-forever-watch-forging-forever";

const item: NewsItem = {
  slug: "rulesets-video-faction-limits",
  date: "2026-11-05",
  source: "blizzard",
  topic: "pvp",
  url: VIDEO,
  image: media.newsRulesetsVideo.src,
  imageAlt: media.newsRulesetsVideo.alt,
  guides: ["wow-forever-rulesets"],
  title: n(
    "Blizzard's Rulesets video: why PvP locks your faction and where fallen Hardcore characters can go",
    "Il video di Blizzard sui set di regole: perché il PvP blocca la fazione e dove vanno gli eroi Hardcore caduti",
    "El vídeo de Blizzard sobre los conjuntos de reglas: por qué JcJ fija la facción y qué pasa con Hardcore",
  ),
  metaTitle: n(
    "WoW Forever rulesets video: factions and Hardcore",
    "WoW Forever, video sui set: fazioni e Hardcore",
    "WoW Forever, vídeo de conjuntos: facciones y Hardcore",
  ),
  summary: n(
    "In a six-minute video published on 5 November Blizzard explains why WoW Forever replaced realms with rulesets. The video confirms that faction choice on PvP covers your whole region, that character creation can be limited for a while to protect balance, and that fallen Hardcore characters will be able to move to any other ruleset.",
    "In un video di sei minuti pubblicato il 5 novembre Blizzard spiega perché WoW Forever ha sostituito i reami con i set di regole. Il video conferma che la scelta della fazione sul PvP vale per tutta la regione, che la creazione dei personaggi può essere limitata per un po' per proteggere l'equilibrio e che gli eroi Hardcore caduti potranno passare a qualsiasi altro set.",
    "En un vídeo de seis minutos publicado el 5 de noviembre Blizzard explica por qué WoW Forever cambió los reinos por conjuntos de reglas. El vídeo confirma que la facción elegida en JcJ vale para toda la región, que la creación de personajes puede limitarse un tiempo para proteger el equilibrio y que los personajes caídos de Hardcore podrán pasar a cualquier otro conjunto.",
  ),
  description: n(
    "Blizzard's WoW Forever rulesets video: why realms are gone, the PvP faction rule, temporary limits on creation and fallen Hardcore characters.",
    "Il video di Blizzard sui set di regole di WoW Forever: addio ai reami, regola della fazione sul PvP, limiti alla creazione e Hardcore.",
    "El vídeo de Blizzard sobre los conjuntos de WoW Forever: adiós a los reinos, la regla de facción en JcJ, límites de creación y Hardcore.",
  ),
  highlights: {
    en: [
      { label: "Why no realms", text: "you choose how you play, not where", anchor: "why" },
      { label: "Separate economies", text: "auction houses and guilds stay inside a ruleset", anchor: "economy" },
      { label: "One faction on PvP", text: "for your whole region, with temporary limits on creation", anchor: "pvp" },
      { label: "Hardcore", text: "fallen characters can go to any other ruleset", anchor: "hardcore" },
      { label: "Roleplaying", text: "its own outdoor world, PvP by choice", anchor: "roleplaying" },
      { label: "Still unanswered", text: "Roleplay-PvP is not in the video", anchor: "unanswered" },
    ],
    it: [
      { label: "Perché niente reami", text: "si sceglie come giocare, non dove", anchor: "perche" },
      { label: "Economie separate", text: "aste e gilde restano dentro un set", anchor: "economia" },
      { label: "Una fazione sul PvP", text: "per tutta la regione, con limiti temporanei alla creazione", anchor: "pvp" },
      { label: "Hardcore", text: "gli eroi caduti possono andare su qualsiasi altro set", anchor: "hardcore" },
      { label: "Roleplaying", text: "un mondo esterno proprio, PvP per scelta", anchor: "roleplaying" },
      { label: "Ancora senza risposta", text: "il Roleplay-PvP non è nel video", anchor: "senza-risposta" },
    ],
    es: [
      { label: "Por qué no hay reinos", text: "eliges cómo jugar, no dónde", anchor: "por-que" },
      { label: "Economías separadas", text: "subastas y hermandades no salen de un conjunto", anchor: "economia" },
      { label: "Una facción en JcJ", text: "para toda la región, con límites temporales de creación", anchor: "jcj" },
      { label: "Hardcore", text: "los personajes caídos pueden ir a cualquier otro conjunto", anchor: "hardcore" },
      { label: "Rol", text: "un mundo exterior propio, JcJ a elección", anchor: "rol" },
      { label: "Aún sin respuesta", text: "Rol-JcJ no sale en el vídeo", anchor: "sin-respuesta" },
    ],
  },
  body: n(
    `On Thursday 5 November 2026 at 18:00 UTC (19:00 CET), the day after launch, Blizzard published [a six-minute video on rulesets](${VIDEO}). Much of it matches [our guide to the rulesets](/en/guides/wow-forever-rulesets), but it goes through the reasons behind the rules and adds a few details on factions and Hardcore. The video says PvE where the game's list says Normal.

## Why there are no realms {#why}

The team started from one question: how to let as many people as possible play together. Blizzard says realms built strong communities, but players tended to crowd onto the most populated ones, even when another realm suited their style better. In Forever you no longer choose where to play but how. Blizzard adds that the goal is not one giant server, but to make it easier for people who play by the same rules to meet.

## A choice that does not change {#permanent}

On PvE the outdoor world always follows PvE rules, on PvP it always follows PvP rules, and you cannot switch between them as you like. Blizzard says this is deliberate: outdoor PvP only works if everyone in that world has accepted the same risk. The factions also stay apart: no parties, raids, guilds or battleground teams across Alliance and Horde.

## Separate economies {#economy}

The auction house, trade and guilds stay inside a ruleset. Any PvE player can trade with any other PvE player in the region, and the same goes for PvP, but the two economies never mix. The reason given is that gathering ore under the threat of an ambush is a different experience, and the economy should reflect that.

## One faction on PvP, with temporary limits {#pvp}

Blizzard expects opinions on this rule. On PvP your faction choice applies across your **entire regional PvP ruleset**: if you create an orc there, every PvP character you create afterwards will be Horde. There is no second PvP space for the other side.

The video also confirms **temporary restrictions on character creation** when an imbalance starts to affect the experience, with adjustments that aim to affect individual players as little as possible. It gives no thresholds or durations, and it does not mention the messages players have been seeing since launch, but it is the clearest official explanation so far of [the Horde locks on PvP](/en/news/name-filter-fix-faction-locks).

## Hardcore, when it arrives {#hardcore}

Hardcore is not available at launch and will live in its own isolated environment. The news is what happens after death: in the past fallen Hardcore characters could only return to PvE, while in Forever **they can be sent to any of the three other rulesets**. The faction rule still applies: you cannot move a dead Horde character to PvP if you already have Alliance characters there.

## Roleplaying {#roleplaying}

Roleplayers get their own outdoor world and do not share zone copies with PvE or PvP players. Anyone who wants combat in their story can still flag for PvP.

## What the video does not answer {#unanswered}

Roleplay-PvP is not in the video: the description says so and confirms it is on the list. So the video does not answer whether the one-faction rule applies there too, or whether players will be able to move characters between rulesets. It also says nothing about the [characters reported on the wrong ruleset](/en/news/day-two-layering-portals-maintenance) after the maintenance of 5 November.

That evening Blizzard also posted [Forging Forever](${FORGING}), an article that links to the replay of the Taldramir stream. There is nothing new about the staff itself: what we know is in [our article on Taldramir](/en/news/taldramir-violet-dust-twitch).`,
    `Giovedì 5 novembre 2026 alle 18:00 UTC (19:00 CET), il giorno dopo il lancio, Blizzard ha pubblicato [un video di sei minuti sui set di regole](${VIDEO}). Gran parte coincide con la [nostra guida ai set di regole](/it/guides/wow-forever-rulesets), ma ripercorre i motivi delle regole e aggiunge qualche dettaglio su fazioni e Hardcore. Il video dice PvE dove l'elenco del gioco dice Normal.

## Perché non ci sono reami {#perche}

Il team è partito da una domanda: come far giocare insieme più persone possibile. Blizzard dice che i reami hanno creato community forti, ma che i giocatori tendevano ad ammassarsi su quelli più popolati, anche quando un altro reame era più adatto al loro stile. In Forever non si sceglie più dove giocare ma come. Blizzard aggiunge che l'obiettivo non è un unico server gigante, ma rendere più facile incontrarsi per chi gioca con le stesse regole.

## Una scelta che non cambia {#scelta}

Su PvE il mondo esterno segue sempre le regole PvE, su PvP sempre quelle PvP, e non si può passare dall'una all'altra a piacere. Blizzard dice che è voluto: il PvP all'aperto funziona solo se tutti in quel mondo hanno accettato lo stesso rischio. Anche le fazioni restano separate: niente gruppi, incursioni, gilde o squadre da campo di battaglia fra Alleanza e Orda.

## Economie separate {#economia}

Casa d'aste, scambi e gilde restano dentro un set di regole. Ogni giocatore PvE può commerciare con ogni altro giocatore PvE della regione, e lo stesso vale per il PvP, ma le due economie non si mescolano mai. Il motivo indicato è che raccogliere minerali col rischio di un'imboscata è un'esperienza diversa, e l'economia deve rifletterlo.

## Una fazione sul PvP, con limiti temporanei {#pvp}

Blizzard si aspetta discussioni su questa regola. Sul PvP la scelta della fazione vale per **tutto il set PvP della vostra regione**: se create lì un orco, ogni personaggio PvP successivo sarà dell'Orda. Non esiste un secondo spazio PvP per l'altra parte.

Il video conferma anche **restrizioni temporanee alla creazione dei personaggi** quando uno squilibrio comincia a pesare sull'esperienza, con interventi che puntano a toccare il meno possibile i singoli giocatori. Non dà soglie né durate e non cita i messaggi che i giocatori vedono dal lancio, ma è la spiegazione ufficiale più chiara finora dei [blocchi dell'Orda sul PvP](/it/news/name-filter-fix-faction-locks).

## Hardcore, quando arriverà {#hardcore}

Hardcore non è disponibile al lancio e vivrà in un ambiente isolato. La novità è cosa succede dopo la morte: in passato gli eroi Hardcore caduti potevano tornare solo su PvE, mentre in Forever **potranno passare a uno qualsiasi degli altri tre set**. La regola della fazione resta: non si può spostare un personaggio morto dell'Orda sul PvP se lì si hanno già personaggi dell'Alleanza.

## Roleplaying {#roleplaying}

Chi fa gioco di ruolo ha un mondo esterno proprio e non condivide le copie delle zone con i giocatori PvE o PvP. Chi vuole il combattimento nella propria storia può comunque attivare il PvP.

## Cosa il video non dice {#senza-risposta}

Il Roleplay-PvP non è nel video: lo dice la descrizione, che conferma però la sua presenza fra i set. Quindi il video non chiarisce se la regola di una sola fazione valga anche lì, né se si potranno spostare i personaggi fra un set e l'altro. Non parla nemmeno dei [personaggi segnalati sul set sbagliato](/it/news/day-two-layering-portals-maintenance) dopo la manutenzione del 5 novembre.

La stessa sera Blizzard ha pubblicato anche [Forging Forever](${FORGING}), un articolo che rimanda alla replica della diretta su Taldramir. Sul bastone non c'è niente di nuovo: quello che si sa è nel [nostro articolo su Taldramir](/it/news/taldramir-violet-dust-twitch).`,
    `El jueves 5 de noviembre de 2026 a las 18:00 UTC (19:00 CET), el día después del lanzamiento, Blizzard publicó [un vídeo de seis minutos sobre los conjuntos de reglas](${VIDEO}). Gran parte coincide con [nuestra guía de los conjuntos de reglas](/es/guides/wow-forever-rulesets), pero repasa los motivos de las reglas y añade algunos detalles sobre facciones y Hardcore. El vídeo dice JcE donde la lista del juego dice Normal.

## Por qué no hay reinos {#por-que}

El equipo partió de una pregunta: cómo hacer que juegue junta la mayor cantidad de gente posible. Blizzard dice que los reinos crearon comunidades fuertes, pero que los jugadores tendían a amontonarse en los más poblados, aunque otro reino encajara mejor con su estilo. En Forever ya no eliges dónde jugar, sino cómo. Blizzard añade que el objetivo no es un único servidor gigante, sino facilitar que se encuentre quien juega con las mismas reglas.

## Una elección que no cambia {#eleccion}

En JcE el mundo exterior siempre sigue las reglas JcE, en JcJ siempre las de JcJ, y no se puede pasar de una a otra a voluntad. Blizzard dice que es a propósito: el JcJ en exteriores solo funciona si todos en ese mundo han aceptado el mismo riesgo. Las facciones también siguen separadas: no hay grupos, bandas, hermandades ni equipos de campo de batalla entre Alianza y Horda.

## Economías separadas {#economia}

La casa de subastas, el comercio y las hermandades no salen de un conjunto de reglas. Cualquier jugador JcE puede comerciar con cualquier otro jugador JcE de la región, y lo mismo vale para JcJ, pero las dos economías nunca se mezclan. El motivo es que recoger mineral con riesgo de emboscada es una experiencia distinta, y la economía debe reflejarlo.

## Una facción en JcJ, con límites temporales {#jcj}

Blizzard espera opiniones sobre esta regla. En JcJ la facción que eliges vale para **todo el conjunto JcJ de tu región**: si creas ahí un orco, todos tus personajes JcJ siguientes serán de la Horda. No existe un segundo espacio JcJ para el otro bando.

El vídeo también confirma **restricciones temporales en la creación de personajes** cuando un desequilibrio empieza a afectar a la experiencia, con ajustes que intentan afectar lo menos posible a cada jugador. No da umbrales ni duraciones y no menciona los mensajes que los jugadores ven desde el lanzamiento, pero es la explicación oficial más clara hasta ahora de [los bloqueos de la Horda en JcJ](/es/news/name-filter-fix-faction-locks).

## Hardcore, cuando llegue {#hardcore}

Hardcore no está disponible en el lanzamiento y tendrá un entorno aislado. La novedad es lo que pasa tras la muerte: antes los personajes caídos de Hardcore solo podían volver a JcE, mientras que en Forever **podrán pasar a cualquiera de los otros tres conjuntos**. La regla de facción sigue vigente: no puedes llevar un personaje muerto de la Horda a JcJ si ya tienes ahí personajes de la Alianza.

## Rol {#rol}

Quienes juegan a rol tienen su propio mundo exterior y no comparten las copias de las zonas con jugadores JcE o JcJ. Quien quiera combate en su historia puede activar el JcJ igualmente.

## Lo que el vídeo no responde {#sin-respuesta}

Rol-JcJ no sale en el vídeo: lo dice la descripción, que aun así confirma que está entre los conjuntos. Por eso el vídeo no aclara si la regla de una sola facción vale también ahí, ni si se podrán mover personajes entre conjuntos. Tampoco habla de los [personajes que aparecen en otro conjunto](/es/news/day-two-layering-portals-maintenance) tras el mantenimiento del 5 de noviembre.

Esa misma noche Blizzard publicó también [Forging Forever](${FORGING}), un artículo que enlaza a la repetición de la emisión sobre Taldramir. Sobre el bastón no hay nada nuevo: lo que se sabe está en [nuestro artículo sobre Taldramir](/es/news/taldramir-violet-dust-twitch).`,
  ),
  faq: {
    en: [
      {
        q: "Can I play both factions on the PvP ruleset in WoW Forever?",
        a: "No. According to Blizzard's video, your faction choice applies across your whole regional PvP ruleset: after your first Horde character, every PvP character you create will be Horde.",
      },
      {
        q: "Why can't I create a character of my faction on PvP?",
        a: "Blizzard's video confirms temporary restrictions on character creation when a faction imbalance starts to affect the experience. It gives no thresholds or durations.",
      },
      {
        q: "What happens to a Hardcore character that dies in WoW Forever?",
        a: "When Hardcore arrives, a fallen character can be sent to any of the three other rulesets, not only PvE. The faction rule still applies on PvP. Hardcore is not available at launch.",
      },
    ],
    it: [
      {
        q: "Si possono giocare entrambe le fazioni sul set PvP di WoW Forever?",
        a: "No. Secondo il video di Blizzard la scelta della fazione vale per tutto il set PvP della regione: dopo il primo personaggio dell'Orda, ogni personaggio PvP successivo sarà dell'Orda.",
      },
      {
        q: "Perché non riesco a creare un personaggio della mia fazione sul PvP?",
        a: "Il video di Blizzard conferma restrizioni temporanee alla creazione dei personaggi quando uno squilibrio fra le fazioni comincia a pesare sull'esperienza. Non dà soglie né durate.",
      },
      {
        q: "Cosa succede a un personaggio Hardcore che muore in WoW Forever?",
        a: "Quando Hardcore arriverà, un personaggio caduto potrà passare a uno qualsiasi degli altri tre set, non solo a PvE. Sul PvP resta la regola della fazione. Hardcore non è disponibile al lancio.",
      },
    ],
    es: [
      {
        q: "¿Se pueden jugar las dos facciones en el conjunto JcJ de WoW Forever?",
        a: "No. Según el vídeo de Blizzard, la facción que eliges vale para todo el conjunto JcJ de tu región: tras tu primer personaje de la Horda, todos tus personajes JcJ siguientes serán de la Horda.",
      },
      {
        q: "¿Por qué no puedo crear un personaje de mi facción en JcJ?",
        a: "El vídeo de Blizzard confirma restricciones temporales en la creación de personajes cuando un desequilibrio entre facciones empieza a afectar a la experiencia. No da umbrales ni duraciones.",
      },
      {
        q: "¿Qué le pasa a un personaje Hardcore que muere en WoW Forever?",
        a: "Cuando llegue Hardcore, un personaje caído podrá pasar a cualquiera de los otros tres conjuntos, no solo a JcE. En JcJ sigue vigente la regla de facción. Hardcore no está disponible en el lanzamiento.",
      },
    ],
  },
};

export default item;

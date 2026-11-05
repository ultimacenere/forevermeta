import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Consigli pratici della prima settimana di WoW Forever (5/11/2026). `source: "site"`: sono rimedi raccolti da fonti
 * diverse, nessuno provato da noi in gioco.
 * - Ufficiale: domande di Kaivax sul messaggio blu e su "Refresh Now" (US 2402367/2, 15:51 UTC: è una richiesta di
 *   informazioni, non una spiegazione); commenti di BlizzardCS sulle pagine delle missioni, riportati da Wowhead 383771.
 * - Stampa: Wowhead 383761 (freccia in alto a sinistra della chat) e i suoi commenti (`/invite`, cambio di personaggio),
 *   383771 (scorte, Rediscovering the Light), 383769 (prerequisiti, letto dal browser con le schede) e 383753 (/sit).
 * Wowhead e Kaivax descrivono il comando del gruppo in due punti diversi dello schermo: nel testo restano entrambi.
 */
const PHASING_BLUE = "https://us.forums.blizzard.com/en/wow/t/phasing-issues-with-group-still-persist-from-beta/2402367/2";
const WH_PHASE = "https://www.wowhead.com/news=383761/how-to-phase-to-see-group-members-after-joining-new-group";
const WH_ESCORTS = "https://www.wowhead.com/news=383771/blizzard-investigating-issues-with-certain-escort-quests-in-wow-forever";
const WH_LORDAERON = "https://www.wowhead.com/news=383769/new-prerequisites-required-for-ruins-of-lordaeron-dungeon-quests-in-wow-forever";
const WH_OUTDOORS = "https://www.wowhead.com/news=383753/the-great-outdoors-quest-bugged-and-how-to-complete";

const item: NewsItem = {
  slug: "first-week-tips-groups-escorts-lordaeron",
  date: "2026-11-05",
  source: "site",
  topic: "news",
  image: media.newsLordaeronQuests.src,
  imageAlt: media.newsLordaeronQuests.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-camping-professions"],
  title: n(
    "WoW Forever first-week fixes: seeing your group, escort quests that fail and Ruins of Lordaeron",
    "WoW Forever, i rimedi della prima settimana: vedere il gruppo, scorte che falliscono e Ruins of Lordaeron",
    "WoW Forever, soluciones de la primera semana: ver al grupo, escoltas que fallan y Ruins of Lordaeron",
  ),
  metaTitle: n(
    "WoW Forever tips: groups, escorts, Ruins of Lordaeron",
    "WoW Forever: gruppi, scorte e Ruins of Lordaeron",
    "WoW Forever: grupos, escoltas y Ruins of Lordaeron",
  ),
  summary: n(
    "Four small problems of WoW Forever's first days, with what is known so far: friends you cannot see after joining a group, escort quests that fail at zone borders, the new requirements for two Horde quests in Ruins of Lordaeron and the campfire step of The Great Outdoors.",
    "Quattro piccoli problemi dei primi giorni di WoW Forever, con quello che si sa finora: amici invisibili dopo essere entrati in gruppo, missioni di scorta che falliscono ai confini di zona, i nuovi requisiti di due missioni dell'Orda a Ruins of Lordaeron e il falò di The Great Outdoors.",
    "Cuatro problemas pequeños de los primeros días de WoW Forever, con lo que se sabe hasta ahora: amigos invisibles al entrar en un grupo, misiones de escolta que fallan en los límites de zona, los nuevos requisitos de dos misiones de la Horda en Ruins of Lordaeron y la hoguera de The Great Outdoors.",
  ),
  description: n(
    "WoW Forever tips: how to see your group after joining, escort quests that fail, new Horde prerequisites in Ruins of Lordaeron and The Great Outdoors.",
    "Consigli per WoW Forever: vedere il gruppo dopo un invito, scorte che falliscono, nuovi prerequisiti di Ruins of Lordaeron e The Great Outdoors.",
    "Consejos de WoW Forever: ver al grupo tras una invitación, escoltas que fallan, nuevos requisitos en Ruins of Lordaeron y The Great Outdoors.",
  ),
  highlights: {
    en: [
      { label: "Seeing your group", text: "you may have to trigger the change yourself", anchor: "group" },
      { label: "Escort quests", text: "NPCs can vanish at zone borders", anchor: "escorts" },
      { label: "Undead Paladins", text: "healing may not count in one early quest", anchor: "paladin" },
      { label: "Ruins of Lordaeron", text: "two Horde quests now need a chain first", anchor: "lordaeron" },
      { label: "The Great Outdoors", text: "the /sit trick for the campfire", anchor: "outdoors" },
    ],
    it: [
      { label: "Vedere il gruppo", text: "il cambio di layer può dover partire da voi", anchor: "gruppo" },
      { label: "Missioni di scorta", text: "i PNG possono sparire ai confini di zona", anchor: "scorte" },
      { label: "Paladini Non Morti", text: "in una delle prime missioni le cure possono non contare", anchor: "paladino" },
      { label: "Ruins of Lordaeron", text: "due missioni dell'Orda ora richiedono una catena", anchor: "lordaeron" },
      { label: "The Great Outdoors", text: "il trucco di /sit per il falò", anchor: "falo" },
    ],
    es: [
      { label: "Ver al grupo", text: "quizá tengas que activar tú el cambio de capa", anchor: "grupo" },
      { label: "Misiones de escolta", text: "los PNJ pueden desaparecer en los límites de zona", anchor: "escoltas" },
      { label: "Paladines no-muertos", text: "en una misión inicial la sanación puede no contar", anchor: "paladin" },
      { label: "Ruins of Lordaeron", text: "dos misiones de la Horda piden ahora una cadena", anchor: "lordaeron" },
      { label: "The Great Outdoors", text: "el truco de /sit para la hoguera", anchor: "hoguera" },
    ],
  },
  body: n(
    `WoW Forever's first days have left a handful of small problems that cost players time. Here is what is known at 23:15 UTC on 5 November 2026. We have not tried these fixes in the game ourselves: they come from Blizzard, from Wowhead and from players, and each one says which. For the bugs Blizzard has officially listed, see [our article on the Known Issues](/en/news/known-issues-november-5).

## Your group is there but you cannot see it {#group}

Joining a group does not move you to the other players' layer automatically. It is the change Blizzard described in [podcast 6](/en/news/podcast-episode-6-tech-layering): you get a warning instead of being moved without notice. The details are not yet clear:

- [Wowhead](${WH_PHASE}) says you have to click an arrow at the top left of the chat window.
- [Kaivax asked players on the forum](${PHASING_BLUE}) whether they see a blue message at the lower right, and whether it opens a pop-up with a "Refresh Now" button that brings the party together. That was a question, not an instruction, so Blizzard may still be looking into it.
- In the comments on Wowhead some players never see the arrow, especially after inviting by name with \`/invite\`, and one suggests it only appears for the person invited.
- If nothing appears, some players say that logging into another character for a minute or two and coming back puts them in the same layer.

## Escort quests that fail {#escorts}

According to comments by BlizzardCS [reported by Wowhead](${WH_ESCORTS}), Ruul, Gilthares Firebough and the Defias Traitor may disappear when moving near or across zone and area borders, which fails the quest. The quests are *Freedom to Ruul*, *Free From the Hold* and *The Defias Brotherhood*. Blizzard is investigating and has offered no workaround.

## Undead Paladins: Rediscovering the Light {#paladin}

In the same comments, Blizzard says that healing the Injured Deathguards in *Rediscovering the Light* may not grant progress, and that it is looking into it.

## New requirements in Ruins of Lordaeron {#lordaeron}

[Wowhead noticed](${WH_LORDAERON}) that on the live servers two Horde quests for Ruins of Lordaeron are no longer available straight away, as they were in the beta. Alliance quests have no such requirements.

- ***The Wrath of Rath'mael***: first complete the level 13 chain *Rear Guard Patrol*, from Deathguard Linnea in Tirisfal Glades. You kill 8 Bleeding Horrors and Wandering Spirits, then the level 13 elite Riptear.
- ***The New Plague***: first complete the three parts of *A Recipe For Death*, from Apothecary Renferrel in Silverpine Forest: low-drop items from bears and spiders, a book in an elite area of southern Silverpine, then more low-drop items from level 18 creatures near the lake.

Wowhead notes that dungeon quests are a very good source of experience in Forever, because experience from dungeon mobs was cut and experience from the quests was raised.

## The Great Outdoors {#outdoors}

The "Sit near the campfire" step of this camping tutorial may not trigger with a normal \`/sit\`. According to [Wowhead](${WH_OUTDOORS}), it completes if you type \`/sit\` again while already sitting; then wait the full minute for the rest buff. We mentioned it on launch night, and it is still not on Blizzard's list.`,
    `I primi giorni di WoW Forever hanno lasciato qualche piccolo problema che fa perdere tempo. Ecco quello che si sa alle 23:15 UTC del 5 novembre 2026. Non abbiamo provato noi questi rimedi in gioco: vengono da Blizzard, da Wowhead e dai giocatori, e per ognuno lo diciamo. Per i bug che Blizzard ha elencato ufficialmente c'è il [nostro articolo sui problemi noti](/it/news/known-issues-november-5).

## Il gruppo c'è ma non lo vedete {#gruppo}

Entrare in gruppo non vi sposta da soli nel layer degli altri. È la modifica raccontata da Blizzard nel [podcast 6](/it/news/podcast-episode-6-tech-layering): ricevete un avviso invece di essere spostati senza preavviso. I dettagli però non sono ancora chiari:

- [Wowhead](${WH_PHASE}) dice che bisogna premere una freccia in alto a sinistra della finestra della chat.
- [Kaivax ha chiesto ai giocatori sul forum](${PHASING_BLUE}) se vedono un messaggio blu in basso a destra, e se apre una finestra con il tasto "Refresh Now" che riunisce il gruppo. Era una domanda, non un'istruzione: Blizzard potrebbe stare ancora indagando.
- Nei commenti su Wowhead alcuni giocatori non vedono mai la freccia, soprattutto dopo aver invitato per nome con \`/invite\`, e uno ipotizza che compaia solo a chi viene invitato.
- Se non compare nulla, alcuni giocatori dicono che entrare con un altro personaggio per un paio di minuti e poi tornare li rimette nello stesso layer.

## Missioni di scorta che falliscono {#scorte}

Secondo i commenti di BlizzardCS [riportati da Wowhead](${WH_ESCORTS}), Ruul, Gilthares Firebough e il Defias Traitor possono sparire avvicinandosi o attraversando i confini di zona e di area, e la missione fallisce. Le missioni sono *Freedom to Ruul*, *Free From the Hold* e *The Defias Brotherhood*. Blizzard sta indagando e non ha indicato rimedi.

## Paladini Non Morti: Rediscovering the Light {#paladino}

Negli stessi commenti Blizzard dice che curare gli Injured Deathguards in *Rediscovering the Light* può non dare progressi, e che sta controllando.

## Nuovi requisiti a Ruins of Lordaeron {#lordaeron}

[Wowhead ha notato](${WH_LORDAERON}) che sui server live due missioni dell'Orda per Ruins of Lordaeron non sono più disponibili subito, come nella beta. Le missioni dell'Alleanza non hanno questi requisiti.

- ***The Wrath of Rath'mael***: prima va completata la catena di livello 13 *Rear Guard Patrol*, da Deathguard Linnea a Tirisfal Glades. Si uccidono 8 Bleeding Horror e Wandering Spirit, poi l'élite di livello 13 Riptear.
- ***The New Plague***: prima vanno completate le tre parti di *A Recipe For Death*, da Apothecary Renferrel a Silverpine Forest: oggetti a bassa probabilità da orsi e ragni, un libro in un'area di élite nel sud di Silverpine, poi altri oggetti a bassa probabilità da creature di livello 18 vicino al lago.

Wowhead ricorda che in Forever le missioni dei dungeon sono un'ottima fonte di esperienza, perché è stata ridotta quella dei mostri dei dungeon ed è stata alzata quella delle missioni.

## The Great Outdoors {#falo}

Il passaggio "Sit near the campfire" di questa missione introduttiva del Camping può non attivarsi con un normale \`/sit\`. Secondo [Wowhead](${WH_OUTDOORS}), si completa scrivendo di nuovo \`/sit\` quando siete già seduti; poi aspettate il minuto intero per il bonus di riposo. Ne avevamo parlato nella notte del lancio, e non è ancora nell'elenco di Blizzard.`,
    `Los primeros días de WoW Forever han dejado algunos problemas pequeños que hacen perder tiempo. Esto es lo que se sabe a las 23:15 UTC del 5 de noviembre de 2026. No hemos probado estas soluciones en el juego: vienen de Blizzard, de Wowhead y de los jugadores, y en cada caso lo decimos. Para los errores que Blizzard ha listado de forma oficial está [nuestro artículo sobre los problemas conocidos](/es/news/known-issues-november-5).

## Tu grupo está ahí, pero no lo ves {#grupo}

Entrar en un grupo no te mueve solo a la capa de los demás. Es el cambio que Blizzard contó en el [pódcast 6](/es/news/podcast-episode-6-tech-layering): recibes un aviso en lugar de moverte sin avisar. Los detalles aún no están claros:

- [Wowhead](${WH_PHASE}) dice que hay que pulsar una flecha en la parte superior izquierda de la ventana de chat.
- [Kaivax preguntó a los jugadores en el foro](${PHASING_BLUE}) si ven un mensaje azul abajo a la derecha, y si abre una ventana con un botón "Refresh Now" que reúne al grupo. Era una pregunta, no una instrucción, así que Blizzard quizá siga investigándolo.
- En los comentarios de Wowhead algunos jugadores nunca ven la flecha, sobre todo tras invitar por nombre con \`/invite\`, y uno cree que solo le aparece a quien recibe la invitación.
- Si no aparece nada, algunos jugadores dicen que entrar con otro personaje un par de minutos y volver los pone en la misma capa.

## Misiones de escolta que fallan {#escoltas}

Según los comentarios de BlizzardCS [que recoge Wowhead](${WH_ESCORTS}), Ruul, Gilthares Firebough y el Defias Traitor pueden desaparecer al acercarse o cruzar los límites de zona y de área, y la misión falla. Las misiones son *Freedom to Ruul*, *Free From the Hold* y *The Defias Brotherhood*. Blizzard lo está investigando y no ha dado ninguna solución.

## Paladines no-muertos: Rediscovering the Light {#paladin}

En los mismos comentarios Blizzard dice que sanar a los Injured Deathguards en *Rediscovering the Light* puede no dar progreso, y que lo está revisando.

## Nuevos requisitos en Ruins of Lordaeron {#lordaeron}

[Wowhead ha visto](${WH_LORDAERON}) que en los servidores reales dos misiones de la Horda para Ruins of Lordaeron ya no están disponibles desde el principio, como en la beta. Las misiones de la Alianza no tienen estos requisitos.

- ***The Wrath of Rath'mael***: antes hay que completar la cadena de nivel 13 *Rear Guard Patrol*, de Deathguard Linnea en los Claros de Tirisfal. Hay que matar a 8 Bleeding Horror y Wandering Spirit, y después a la élite de nivel 13 Riptear.
- ***The New Plague***: antes hay que completar las tres partes de *A Recipe For Death*, de Apothecary Renferrel en el Bosque de Argénteos (Silverpine Forest): objetos poco frecuentes de osos y arañas, un libro en una zona de élite del sur del bosque y más objetos poco frecuentes de criaturas de nivel 18 junto al lago.

Wowhead recuerda que en Forever las misiones de mazmorra son una muy buena fuente de experiencia, porque se redujo la de los enemigos de mazmorra y se aumentó la de las misiones.

## The Great Outdoors {#hoguera}

El paso "Sit near the campfire" de esta misión de introducción al Camping puede no activarse con un \`/sit\` normal. Según [Wowhead](${WH_OUTDOORS}), se completa escribiendo otra vez \`/sit\` cuando ya estás sentado; después espera el minuto entero para el beneficio de descanso. Ya lo contamos en la noche del lanzamiento, y sigue sin estar en la lista de Blizzard.`,
  ),
  faq: {
    en: [
      {
        q: "Why can't I see my group in WoW Forever?",
        a: "Joining a group does not move you to the others' layer automatically. Wowhead points to an arrow at the top left of the chat window, and Blizzard asked players about a blue message with a Refresh Now button. If neither appears, some players log into another character for a minute or two and come back.",
      },
      {
        q: "Why can't I pick up The New Plague in Ruins of Lordaeron?",
        a: "On the live servers this Horde quest needs the three-part chain A Recipe For Death first, from Apothecary Renferrel in Silverpine Forest. The Wrath of Rath'mael also needs a chain first, Rear Guard Patrol in Tirisfal Glades.",
      },
    ],
    it: [
      {
        q: "Perché non vedo il mio gruppo in WoW Forever?",
        a: "Entrare in gruppo non vi sposta da soli nel layer degli altri. Wowhead indica una freccia in alto a sinistra della chat, e Blizzard ha chiesto ai giocatori di un messaggio blu con il tasto Refresh Now. Se non compare nulla, alcuni giocatori entrano con un altro personaggio per un paio di minuti e poi tornano.",
      },
      {
        q: "Perché non trovo The New Plague per Ruins of Lordaeron?",
        a: "Sui server live questa missione dell'Orda richiede prima le tre parti di A Recipe For Death, da Apothecary Renferrel a Silverpine Forest. Anche The Wrath of Rath'mael richiede prima una catena, Rear Guard Patrol a Tirisfal Glades.",
      },
    ],
    es: [
      {
        q: "¿Por qué no veo a mi grupo en WoW Forever?",
        a: "Entrar en un grupo no te mueve solo a la capa de los demás. Wowhead señala una flecha arriba a la izquierda del chat, y Blizzard preguntó a los jugadores por un mensaje azul con un botón Refresh Now. Si no aparece nada, algunos jugadores entran con otro personaje un par de minutos y vuelven.",
      },
      {
        q: "¿Por qué no encuentro The New Plague para Ruins of Lordaeron?",
        a: "En los servidores reales esta misión de la Horda pide antes las tres partes de A Recipe For Death, de Apothecary Renferrel en el Bosque de Argénteos. The Wrath of Rath'mael también pide antes una cadena, Rear Guard Patrol en los Claros de Tirisfal.",
      },
    ],
  },
};

export default item;

import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Tre interviste video del 6-8/11/2026 sulle incursioni del 9 dicembre: MrGM con Kris Zierhut e Josh Greenfield, Crix
 * con Kris Zierhut e Tim Jones, Joardee con Josh Greenfield e Tim Jones. I punti vengono dai riassunti di Wowhead
 * (Crix 6/11, MrGM 7/11, Joardee 8/11), non dai video: niente articolo di Blizzard, e la news lo dice. Due punti incerti
 * nei riassunti, detti come tali: a quale incursione si riferiscano i tre percorsi dopo il primo boss, e se il bastone
 * leggendario sia per i guaritori. Il quadro già noto (date, nomi, dimensioni) è quello delle guide
 * wow-forever-release-date e wow-forever-zones-dungeons-raids.
 */
const MRGM = "https://www.youtube.com/watch?v=eeAb7GeOePY";
const CRIX = "https://www.youtube.com/watch?v=QtGf1aJUowU";
const JOARDEE = "https://www.youtube.com/watch?v=f6h43p0BMv8";
const WH_MRGM = "https://www.wowhead.com/news=383781/black-market-auction-house-global-raid-launch-quest-helpers-mrgm-interview-on";
const WH_CRIX = "https://www.wowhead.com/news=383787/raid-rewards-and-pvp-balance-crix-interview-on-wow-forever";
const WH_JOARDEE = "https://www.wowhead.com/news=383792/everything-about-wow-forever-raids-joardee-interview-on-wow-forever";

const item: NewsItem = {
  slug: "raids-december-9-developer-interviews",
  date: "2026-11-08",
  source: "site",
  topic: "news",
  url: MRGM,
  image: media.newsRaidsInterviews.src,
  imageAlt: media.newsRaidsInterviews.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-release-date"],
  title: n(
    "WoW Forever raids on 9 December: what the developers said about difficulty, loot and the next tiers",
    "Le incursioni di WoW Forever del 9 dicembre: cosa hanno detto gli sviluppatori su difficoltà e bottino",
    "Las bandas de WoW Forever del 9 de diciembre: lo que dijeron los desarrolladores sobre dificultad y botín",
  ),
  metaTitle: n(
    "WoW Forever raids on 9 December: developer interviews",
    "WoW Forever, incursioni del 9 dicembre: le interviste",
    "WoW Forever, bandas del 9 de diciembre: las entrevistas",
  ),
  summary: n(
    "In three interviews published between 6 and 8 November and summarised by Wowhead, Kris Zierhut, Josh Greenfield and Tim Jones talked about the raids that open with a global launch on Wednesday 9 December. The main points: one difficulty pitched at a typical Naxxramas fight, Tier 1 split across the three raids, two more raid updates about four months apart and a Black Market Auction House. Blizzard has not confirmed them in an article.",
    "In tre interviste uscite fra il 6 e l'8 novembre e riassunte da Wowhead, Kris Zierhut, Josh Greenfield e Tim Jones hanno parlato delle incursioni che aprono con un lancio globale mercoledì 9 dicembre. I punti principali: una sola difficoltà, tarata su un incontro tipico di Naxxramas, il Tier 1 diviso fra le tre incursioni, altri due aggiornamenti a circa quattro mesi l'uno dall'altro e una Black Market Auction House. Blizzard non li ha confermati in un articolo.",
    "En tres entrevistas publicadas entre el 6 y el 8 de noviembre y resumidas por Wowhead, Kris Zierhut, Josh Greenfield y Tim Jones hablaron de las bandas que abren con un lanzamiento global el miércoles 9 de diciembre. Los puntos principales: una sola dificultad, calibrada sobre un encuentro típico de Naxxramas, el tier 1 repartido entre las tres bandas, dos actualizaciones más separadas por unos cuatro meses y una casa de subastas del mercado negro. Blizzard no los ha confirmado en un artículo.",
  ),
  description: n(
    "What WoW Forever developers told MrGM, Crix and Joardee about the raids of 9 December: one difficulty, Tier 1 loot, raid layouts and what comes next.",
    "Cosa hanno detto gli sviluppatori di WoW Forever a MrGM, Crix e Joardee sulle incursioni del 9 dicembre: difficoltà, Tier 1, struttura e futuro.",
    "Lo que contaron los desarrolladores de WoW Forever a MrGM, Crix y Joardee sobre las bandas del 9 de diciembre: dificultad, tier 1 y lo que viene.",
  ),
  highlights: {
    en: [
      { label: "Wednesday 9 December", text: "a global launch for the three raids", anchor: "date" },
      { label: "One difficulty", text: "a typical Naxxramas fight as the yardstick, no addons needed", anchor: "difficulty" },
      { label: "Tier 1 in three parts", text: "split across the three raids, same item level at 10 and 20", anchor: "loot" },
      { label: "After 9 December", text: "two updates about four months apart, each with a 10 and a 20", anchor: "future" },
      { label: "Economy", text: "a Black Market Auction House, and no flying mounts ever", anchor: "economy" },
      { label: "Still to be confirmed", text: "interviews summarised by Wowhead, not Blizzard notes", anchor: "unconfirmed" },
    ],
    it: [
      { label: "Mercoledì 9 dicembre", text: "un lancio globale per le tre incursioni", anchor: "data" },
      { label: "Una sola difficoltà", text: "un incontro tipico di Naxxramas come metro, niente addon necessari", anchor: "difficolta" },
      { label: "Il Tier 1 in tre parti", text: "diviso fra le tre incursioni, stesso livello oggetto a 10 e a 20", anchor: "bottino" },
      { label: "Dopo il 9 dicembre", text: "due aggiornamenti a circa quattro mesi l'uno dall'altro, con una 10 e una 20", anchor: "dopo" },
      { label: "Economia", text: "una Black Market Auction House, e mai cavalcature volanti", anchor: "economia" },
      { label: "Da confermare", text: "interviste riassunte da Wowhead, non note di Blizzard", anchor: "da-confermare" },
    ],
    es: [
      { label: "Miércoles 9 de diciembre", text: "un lanzamiento global para las tres bandas", anchor: "fecha" },
      { label: "Una sola dificultad", text: "un encuentro típico de Naxxramas como referencia, sin addons", anchor: "dificultad" },
      { label: "El tier 1 en tres partes", text: "repartido entre las tres bandas, mismo nivel de objeto con 10 y con 20", anchor: "botin" },
      { label: "Después del 9 de diciembre", text: "dos actualizaciones separadas por unos cuatro meses, con una de 10 y una de 20", anchor: "despues" },
      { label: "Economía", text: "una casa de subastas del mercado negro, y nunca monturas voladoras", anchor: "economia" },
      { label: "Por confirmar", text: "entrevistas resumidas por Wowhead, no notas de Blizzard", anchor: "por-confirmar" },
    ],
  },
  body: n(
    `Between 6 and 8 November 2026 three WoW Forever developers gave long interviews to three content creators: [MrGM](${MRGM}) spoke with Kris Zierhut and Josh Greenfield, [Crix](${CRIX}) with Kris Zierhut and Tim Jones, and [Joardee](${JOARDEE}) with Josh Greenfield and Tim Jones. Much of the talk was about the raids that open in December. Wowhead published a summary of each interview ([MrGM](${WH_MRGM}), [Crix](${WH_CRIX}), [Joardee](${WH_JOARDEE})), and this article is based on those summaries. Blizzard has not published an article on these topics: what follows are statements made in interviews, not official notes, and details can still change.

## A global launch on Wednesday 9 December {#date}

In the MrGM interview the developers confirmed that the raids open with a global launch on Wednesday 9 December. They are the three Blizzard announced on 20 October: the Barrow Deeps for 10 players, Hyjal Summit for 20 and Onyxia's Lair for 40. The details are in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids) and in our [news on Blizzard's article](/en/news/nine-dungeons-levels-and-raids-december-9), the dates in the [release date guide](/en/guides/wow-forever-release-date). The summaries give no unlock time.

## One difficulty, with Naxxramas as the yardstick {#difficulty}

All three interviews came back to difficulty. Each raid has a single difficulty: the developers see Ulduar-style hard modes as the point where raids began to split into Normal and Heroic.

The reference is a typical Naxxramas encounter: not the Four Horsemen, but harder than Molten Core, with the complexity of Naxxramas as it is in Classic Era or Season of Mastery. In their view Season of Discovery, with the Scarlet Enclave, went too far. In October Zierhut had told Mein-MMO that the new raids sit a little above Molten Core, closer to Blackwing Lair (see the [guide](/en/guides/wow-forever-zones-dungeons-raids)).

A few more points:

- Fights will be longer than Classic players are used to, long enough to use a long cooldown more than once, but nowhere near retail Mythic.
- The encounters are new, so there is something to learn, and the challenge also comes from other levers, such as threat.
- No large visual outlines on mechanics, and you should not need addons (see our [guide to addons and the interface](/en/guides/wow-forever-addons-interface)).

The stated goal: an organised group with pre-raid best-in-slot gear (pre-BiS) and some idea of the bosses should have moderate success without too much stress. On top of that there are secrets: aspirational encounters, hidden bosses, secret phases and legendaries. For an average guild, progression should take two to three weeks.

## Loot: Tier 1 split across three raids {#loot}

In the Crix interview the developers explained how rewards are spread:

- **Tier 1** is split across the three raids, so completing the set takes all three. A player who only runs the 10-player raid gets a good part of it, but not all of it.
- **Same item level** at 10 and 20 players. In their view, raid size changes how much work it takes to organise the group more than how hard the fights are.
- **Against class stacking** in 10-player groups: Shaman totem buffs reach the whole raid, every raid buff lasts one hour, and fewer Blessings are needed.
- **"Chase" items**: every boss has rarer drops, as many as about ten in a single raid, some with a higher item level.
- **A new legendary staff** has been announced. In the Joardee interview it is said to come from Hyjal; Wowhead's summary describes it as a staff for healers, a point we have not been able to confirm.

Loot also stays hidden: a flag keeps item data out of the client until someone finds the item, and the team will do the same for every new dungeon and raid, as Zierhut had already told Mein-MMO. There will be no PTR for the raids, at most one for general stability (MrGM).

## How the raids are laid out {#structure}

The interviews add a few details on how the raids are built:

- The Barrow Deeps has three entrances (Blizzard's October article places them in Mount Hyjal, Winterspring and Blackmaw Hold), and each leads to a different section.
- Wowhead's summary of the Crix interview also says that after the first boss three paths open, and that all three wings are needed to reach the final part. It refers to "the upcoming raids" in general, though, so it is not clear which raid this describes.
- Hyjal Summit has several wings, and later on it should be possible to go straight for a specific boss, possibly with shortcuts like the translocation orb in Naxxramas.
- In the MrGM interview the Barrow Deeps is compared to Karazhan rather than Upper Blackrock Spire: after a few weeks or months it should be doable with a pickup group.
- Progression is not entirely flat: each tier is designed to require the one before. And Onyxia will drop a lot of loot (Joardee).

## After 9 December {#future}

In the Crix interview the developers outlined what comes next:

- **Two major content updates**, about four months apart, each with a 10-player raid, a 20-player raid and new quests. This matches the cadence of about four months between raid tiers that Zierhut described to IGN in October ([our article](/en/news/blizzard-layering-cadence-dual-spec)).
- **Attunements in moderation**: Onyxia and Karazhan are the upper limit, not the Tempest Keep or Mount Hyjal attunements of The Burning Crusade.
- **Legacy raids** such as Molten Core will be integrated in a new way, further down the road. This fits the "reimagined" Molten Core Blizzard mentioned in October, which still has no date.
- In the Joardee interview: the Scarlet Enclave from Season of Discovery could come back in Forever "later".

## Economy, and the lines they won't cross {#economy}

From the MrGM interview:

- A **Black Market Auction House** will take gold out of the economy. At first it will offer few items: some mounts and pets, and pieces of the dungeon sets that are useful for the Lord Valthalak quest. Rivendare's Deathcharger has been taken off the list.
- **Another vendor**, selling rare resources such as Black Lotus, will act as a ceiling on their prices.
- **No flying mounts**, ever. No rated arenas, and no shared tagging of enemies.

## What is still to be confirmed {#unconfirmed}

- Everything here comes from interviews summarised by Wowhead: Blizzard has not yet put it in an article or in patch notes.
- The time of the global launch on 9 December.
- Which raid has three paths after the first boss.
- The legendary staff: who it is for and how you get it.
- Whether Ulduar-style hard modes are still planned: in October Zierhut told Mein-MMO they could come later.
- The dates of the next raids, of Molten Core and of the Scarlet Enclave, and whether there will be a general PTR.

Confirmed dates are on the [calendar](/en/calendar).`,
    `Fra il 6 e l'8 novembre 2026 tre sviluppatori di WoW Forever hanno rilasciato lunghe interviste a tre creatori di contenuti: [MrGM](${MRGM}) ha parlato con Kris Zierhut e Josh Greenfield, [Crix](${CRIX}) con Kris Zierhut e Tim Jones, [Joardee](${JOARDEE}) con Josh Greenfield e Tim Jones. Gran parte delle domande riguardava le incursioni (raid) che aprono a dicembre. Wowhead ha pubblicato un riassunto di ciascuna ([MrGM](${WH_MRGM}), [Crix](${WH_CRIX}), [Joardee](${WH_JOARDEE})), e questo articolo si basa su quei riassunti. Blizzard non ha pubblicato un articolo su questi temi: quelle che seguono sono dichiarazioni fatte in interviste, non note ufficiali, e i dettagli possono ancora cambiare.

## Un lancio globale mercoledì 9 dicembre {#data}

Nell'intervista con MrGM gli sviluppatori hanno confermato che le incursioni aprono con un lancio globale mercoledì 9 dicembre. Sono le tre annunciate da Blizzard il 20 ottobre: Barrow Deeps per 10 giocatori, Hyjal Summit per 20 e Onyxia's Lair per 40. I dettagli sono nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids) e nella [news sull'articolo di Blizzard](/it/news/nine-dungeons-levels-and-raids-december-9), le date nella [guida all'uscita](/it/guides/wow-forever-release-date). I riassunti non indicano un orario di apertura.

## Una sola difficoltà, con Naxxramas come metro {#difficolta}

Tutte e tre le interviste sono tornate sulla difficoltà. Ogni incursione ha una sola difficoltà: per gli sviluppatori le hard mode alla Ulduar sono state l'inizio della divisione fra Normal e Heroic.

Il riferimento è un incontro tipico di Naxxramas: non i Four Horsemen, ma più duro di Molten Core, con la complessità di Naxxramas com'è in Classic Era o in Season of Mastery. Secondo loro Season of Discovery, con lo Scarlet Enclave, è andata troppo oltre. A ottobre Zierhut aveva detto a Mein-MMO che le incursioni nuove stanno un po' sopra Molten Core, vicine a Blackwing Lair (vedi la [guida](/it/guides/wow-forever-zones-dungeons-raids)).

Altri punti:

- Gli scontri saranno più lunghi di quelli a cui sono abituati i giocatori di Classic, abbastanza da usare più di una volta un'abilità con un lungo tempo di recupero, ma lontani dalle Mythic di retail.
- Gli incontri sono nuovi, quindi c'è da imparare, e la sfida passa anche da altre leve, come la minaccia (threat).
- Niente grandi contorni visivi sulle meccaniche, e non dovrebbero servirvi addon (vedi la nostra [guida ad addon e interfaccia](/it/guides/wow-forever-addons-interface)).

L'obiettivo dichiarato: un gruppo organizzato, con l'equipaggiamento pre-BiS (il migliore prima delle incursioni) e un'idea dei boss, dovrebbe avere un successo moderato senza troppo stress. In più ci sono i segreti: incontri aspirazionali, boss nascosti, fasi segrete e leggendari. Per una gilda media la progressione dovrebbe durare due o tre settimane.

## Bottino: il Tier 1 diviso fra tre incursioni {#bottino}

Nell'intervista con Crix gli sviluppatori hanno spiegato come è distribuito il bottino:

- **Il Tier 1** è diviso fra le tre incursioni, quindi per completare il set servono tutte e tre. Chi fa solo quella da 10 ne prende buona parte, ma non tutto.
- **Stesso livello oggetto** a 10 e a 20 giocatori. Secondo loro la dimensione cambia la fatica di chi organizza il gruppo più che la difficoltà degli scontri.
- **Contro l'accumulo di classi** nei gruppi da 10: i totem dello Sciamano danno il loro buff a tutta l'incursione, tutti i buff di incursione durano un'ora e servono meno Blessing.
- **Oggetti "chase"**: ogni boss ha drop più rari, fino a una decina in una sola incursione, alcuni con un livello oggetto più alto.
- **Un nuovo bastone leggendario** è stato annunciato. Nell'intervista con Joardee si dice che viene da Hyjal; il riassunto di Wowhead lo descrive come un bastone per i guaritori, ma su questo punto non abbiamo conferme.

Il bottino, poi, resta nascosto: un flag tiene i dati degli oggetti fuori dal client finché qualcuno non li trova, e il team farà lo stesso per ogni nuovo dungeon e incursione, come Zierhut aveva già detto a Mein-MMO. Non ci sarà un PTR per le incursioni, al massimo uno per la stabilità generale (MrGM).

## Come sono fatte le incursioni {#struttura}

Le interviste aggiungono qualche dettaglio su come sono costruite:

- Barrow Deeps ha tre ingressi (l'articolo di Blizzard di ottobre li colloca a Mount Hyjal, Winterspring e Blackmaw Hold), e ognuno porta a una sezione diversa.
- Il riassunto di Wowhead dell'intervista con Crix aggiunge che dopo il primo boss si aprono tre percorsi e che servono tutte e tre le ali per arrivare all'ultima parte. Lo riferisce però alle "prossime incursioni" in generale, quindi non è chiaro di quale si parli.
- Hyjal Summit ha più ali, e più avanti si potrà puntare direttamente a un boss specifico, magari con scorciatoie come l'orbo di traslocazione di Naxxramas.
- Nell'intervista con MrGM Barrow Deeps è paragonata a Karazhan più che a Upper Blackrock Spire: dopo qualche settimana o mese si dovrebbe poter fare con un gruppo casuale.
- La progressione non è del tutto piatta: ogni tier è pensato per richiedere quello precedente. E Onyxia lascerà molto bottino (Joardee).

## Dopo il 9 dicembre {#dopo}

Nell'intervista con Crix gli sviluppatori hanno descritto i passi successivi:

- **Due grandi aggiornamenti di contenuto**, a circa quattro mesi l'uno dall'altro, ognuno con un'incursione da 10, una da 20 e missioni nuove. È il ritmo di circa quattro mesi fra un tier e l'altro che Zierhut aveva descritto a IGN a ottobre ([il nostro articolo](/it/news/blizzard-layering-cadence-dual-spec)).
- **Attunement con moderazione**: Onyxia e Karazhan sono il limite, non gli attunement di Tempest Keep o Mount Hyjal in The Burning Crusade.
- **Le incursioni "legacy"** come Molten Core verranno integrate in un modo nuovo, più avanti nei piani. È coerente con il Molten Core «reimagined» di cui Blizzard ha parlato a ottobre, ancora senza data.
- Nell'intervista con Joardee: lo Scarlet Enclave di Season of Discovery potrebbe tornare in Forever "più avanti".

## Economia, e le linee che non verranno superate {#economia}

Dall'intervista con MrGM:

- Una **Black Market Auction House** servirà a togliere oro dall'economia. All'inizio avrà pochi oggetti: alcune cavalcature e mascotte, e pezzi dei set dei dungeon utili per la missione di Lord Valthalak. Rivendare's Deathcharger è stato tolto dalla lista.
- **Un altro venditore**, di risorse rare come il Black Lotus, farà da tetto ai loro prezzi.
- **Niente cavalcature volanti**, mai. Niente arene classificate e niente tag condiviso dei mostri.

## Cosa resta da confermare {#da-confermare}

- Tutto quello che avete letto viene da interviste riassunte da Wowhead: Blizzard non l'ha ancora messo per iscritto in un articolo o nelle note di una patch.
- L'orario del lancio globale del 9 dicembre.
- Quale incursione ha tre percorsi dopo il primo boss.
- Il bastone leggendario: per chi è e come si ottiene.
- Se le hard mode alla Ulduar sono ancora in programma: a ottobre Zierhut aveva detto a Mein-MMO che potevano arrivare più avanti.
- Le date delle prossime incursioni, di Molten Core e dello Scarlet Enclave, e se ci sarà un PTR generale.

Le date confermate sono nel [calendario](/it/calendar).`,
    `Entre el 6 y el 8 de noviembre de 2026 tres desarrolladores de WoW Forever concedieron largas entrevistas a tres creadores de contenido: [MrGM](${MRGM}) habló con Kris Zierhut y Josh Greenfield, [Crix](${CRIX}) con Kris Zierhut y Tim Jones, y [Joardee](${JOARDEE}) con Josh Greenfield y Tim Jones. Buena parte de la conversación giró en torno a las bandas que abren en diciembre. Wowhead publicó un resumen de cada una ([MrGM](${WH_MRGM}), [Crix](${WH_CRIX}), [Joardee](${WH_JOARDEE})), y este artículo se basa en esos resúmenes. Blizzard no ha publicado ningún artículo sobre estos temas: lo que sigue son declaraciones en entrevistas, no notas oficiales, y los detalles todavía pueden cambiar.

## Un lanzamiento global el miércoles 9 de diciembre {#fecha}

En la entrevista con MrGM los desarrolladores confirmaron que las bandas abren con un lanzamiento global el miércoles 9 de diciembre. Son las tres que Blizzard anunció el 20 de octubre: las Cavernas del Túmulo para 10 jugadores, la Cima Hyjal para 20 y la Guarida de Onyxia para 40. Los detalles están en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids) y en la [noticia sobre el artículo de Blizzard](/es/news/nine-dungeons-levels-and-raids-december-9); las fechas, en la [guía del lanzamiento](/es/guides/wow-forever-release-date). Los resúmenes no indican una hora de apertura.

## Una sola dificultad, con Naxxramas como referencia {#dificultad}

Las tres entrevistas volvieron sobre la dificultad. Cada banda tiene una sola dificultad: para los desarrolladores, los modos difíciles al estilo de Ulduar fueron el comienzo de la división entre Normal y Heroico.

La referencia es un encuentro típico de Naxxramas: no los Cuatro Jinetes, pero más duro que el Núcleo de Magma, con la complejidad de Naxxramas tal como está en Classic Era o en Season of Mastery. Según ellos, Season of Discovery, con la banda Scarlet Enclave, fue demasiado lejos. En octubre Zierhut había dicho a Mein-MMO que las bandas nuevas están algo por encima del Núcleo de Magma, cerca de la Guarida Alanegra (lo tienes en la [guía](/es/guides/wow-forever-zones-dungeons-raids)).

Otros puntos:

- Los combates serán más largos de lo que acostumbran los jugadores de Classic, lo bastante como para usar más de una vez una habilidad con un tiempo de reutilización largo, pero lejos de las míticas de retail.
- Los encuentros son nuevos, así que hay que aprenderlos, y el reto también llega por otras vías, como la amenaza.
- Nada de grandes contornos visuales en las mecánicas, y no deberías necesitar addons (consulta nuestra [guía de addons e interfaz](/es/guides/wow-forever-addons-interface)).

El objetivo declarado: un grupo organizado, con el equipo pre-BiS (el mejor antes de las bandas) y una idea de los jefes, debería tener un éxito moderado sin demasiado estrés. Además quedan los secretos: encuentros aspiracionales, jefes ocultos, fases secretas y legendarios. Para una hermandad media, la progresión debería durar entre dos y tres semanas.

## Botín: el tier 1 repartido entre tres bandas {#botin}

En la entrevista con Crix los desarrolladores explicaron cómo se reparte el botín:

- **El conjunto de tier 1** se reparte entre las tres bandas, así que para completarlo hacen falta las tres. Quien solo haga la de 10 consigue buena parte, pero no todo.
- **El mismo nivel de objeto** con 10 y con 20 jugadores. Según ellos, el tamaño cambia el esfuerzo de quien organiza el grupo más que la dificultad de los combates.
- **Contra la acumulación de clases** en los grupos de 10: los tótems del chamán dan su beneficio a toda la banda, todos los beneficios de banda duran una hora y hacen falta menos bendiciones.
- **Objetos "chase"**: cada jefe tiene botín más raro, hasta una decena en una sola banda, algunos con un nivel de objeto más alto.
- **Un nuevo bastón legendario** ya está anunciado. En la entrevista con Joardee se dice que viene de Hyjal; el resumen de Wowhead lo describe como un bastón para sanadores, pero no lo hemos podido confirmar.

Además, el botín sigue oculto: una marca mantiene los datos de los objetos fuera del cliente hasta que alguien los encuentra, y el equipo hará lo mismo con cada mazmorra y banda nueva, como Zierhut ya había dicho a Mein-MMO. No habrá PTR para las bandas; como mucho, uno para la estabilidad general (MrGM).

## Cómo están hechas las bandas {#estructura}

Las entrevistas añaden algunos detalles sobre cómo están construidas:

- Las Cavernas del Túmulo tienen tres entradas (el artículo de Blizzard de octubre las sitúa en el Monte Hyjal, Cuna del Invierno y Bastión Faucenegra), y cada una lleva a una sección distinta.
- El resumen de Wowhead de la entrevista con Crix añade que tras el primer jefe se abren tres caminos y que hacen falta las tres alas para llegar a la parte final. Pero lo atribuye a "las próximas bandas" en general, así que no está claro de cuál habla.
- La Cima Hyjal tiene varias alas, y más adelante se podrá ir directo a un jefe concreto, quizá con atajos como el orbe de translocación de Naxxramas.
- En la entrevista con MrGM, las Cavernas del Túmulo se comparan con Karazhan más que con Cumbre de Roca Negra Superior: tras unas semanas o meses deberían poder hacerse con un grupo improvisado.
- La progresión no es del todo plana: cada tier está pensado para exigir el anterior. Y Onyxia soltará mucho botín (Joardee).

## Después del 9 de diciembre {#despues}

En la entrevista con Crix los desarrolladores adelantaron los pasos siguientes:

- **Dos grandes actualizaciones de contenido**, separadas por unos cuatro meses, cada una con una banda de 10, una de 20 y misiones nuevas. Coincide con el ritmo de unos cuatro meses entre tiers de bandas que Zierhut describió a IGN en octubre ([nuestro artículo](/es/news/blizzard-layering-cadence-dual-spec)).
- **Sintonizaciones con moderación**: Onyxia y Karazhan son el límite, no las sintonizaciones del Castillo de la Tempestad o del Monte Hyjal en The Burning Crusade.
- **Las bandas "legacy"**, como el Núcleo de Magma, se integrarán de una forma nueva, más adelante en sus planes. Encaja con el Núcleo de Magma «reimagined» que Blizzard mencionó en octubre, todavía sin fecha.
- En la entrevista con Joardee: la banda Scarlet Enclave de Season of Discovery podría volver en Forever "más adelante".

## Economía, y las líneas que no se cruzarán {#economia}

De la entrevista con MrGM:

- Una **casa de subastas del mercado negro** (Black Market Auction House) servirá para retirar oro de la economía. Al principio tendrá pocos objetos: algunas monturas y mascotas, y piezas de los conjuntos de mazmorra útiles para la misión de Lord Valthalak. Rivendare's Deathcharger se ha quitado de la lista.
- **Otro vendedor**, de recursos raros como el Black Lotus, hará de techo para sus precios.
- **Nada de monturas voladoras**, nunca. Tampoco arenas puntuadas ni etiquetado compartido de enemigos.

## Lo que queda por confirmar {#por-confirmar}

- Todo esto sale de entrevistas resumidas por Wowhead: Blizzard aún no lo ha puesto por escrito en un artículo ni en las notas de un parche.
- La hora del lanzamiento global del 9 de diciembre.
- Qué banda tiene tres caminos tras el primer jefe.
- El bastón legendario: para quién es y cómo se consigue.
- Si los modos difíciles al estilo de Ulduar siguen en los planes: en octubre Zierhut dijo a Mein-MMO que podían llegar más adelante.
- Las fechas de las próximas bandas, del Núcleo de Magma y de Scarlet Enclave, y si habrá un PTR general.

Las fechas confirmadas están en el [calendario](/es/calendar).`,
  ),
  faq: {
    en: [
      {
        q: "When do the WoW Forever raids open?",
        a: "On Wednesday 9 December 2026, with a global launch, according to the developers interviewed by MrGM. The Barrow Deeps (10 players), Hyjal Summit (20) and Onyxia's Lair (40) open that day. The interview summaries give no unlock time.",
      },
      {
        q: "How hard are the WoW Forever raids?",
        a: "In interviews summarised by Wowhead the developers described one difficulty per raid, pitched at a typical Naxxramas encounter: harder than Molten Core, not as hard as the Four Horsemen. They expect an average guild to need two to three weeks, and say addons should not be needed.",
      },
      {
        q: "Do you need all three raids to complete Tier 1 in WoW Forever?",
        a: "Yes, according to the Crix interview: Tier 1 is split across the three raids, and a player who only runs the 10-player one gets a good part of the set but not all of it. Item level is the same at 10 and 20 players.",
      },
    ],
    it: [
      {
        q: "Quando aprono le incursioni di WoW Forever?",
        a: "Mercoledì 9 dicembre 2026, con un lancio globale, secondo gli sviluppatori intervistati da MrGM. Quel giorno aprono Barrow Deeps (10 giocatori), Hyjal Summit (20) e Onyxia's Lair (40). I riassunti delle interviste non indicano un orario.",
      },
      {
        q: "Quanto sono difficili le incursioni di WoW Forever?",
        a: "Nelle interviste riassunte da Wowhead gli sviluppatori hanno descritto una sola difficoltà per incursione, tarata su un incontro tipico di Naxxramas: più dura di Molten Core, meno dei Four Horsemen. Per una gilda media prevedono due o tre settimane di progressione e dicono che non dovrebbero servire addon.",
      },
      {
        q: "Servono tutte e tre le incursioni per completare il Tier 1 in WoW Forever?",
        a: "Sì, secondo l'intervista con Crix: il Tier 1 è diviso fra le tre incursioni, e chi fa solo quella da 10 ne prende buona parte, ma non tutto. Il livello oggetto è lo stesso a 10 e a 20 giocatori.",
      },
    ],
    es: [
      {
        q: "¿Cuándo abren las bandas de WoW Forever?",
        a: "El miércoles 9 de diciembre de 2026, con un lanzamiento global, según los desarrolladores entrevistados por MrGM. Ese día abren las Cavernas del Túmulo (10 jugadores), la Cima Hyjal (20) y la Guarida de Onyxia (40). Los resúmenes de las entrevistas no indican una hora.",
      },
      {
        q: "¿Qué dificultad tienen las bandas de WoW Forever?",
        a: "En las entrevistas resumidas por Wowhead los desarrolladores describieron una sola dificultad por banda, calibrada sobre un encuentro típico de Naxxramas: más dura que el Núcleo de Magma, menos que los Cuatro Jinetes. Para una hermandad media prevén entre dos y tres semanas de progresión y dicen que no deberían hacer falta addons.",
      },
      {
        q: "¿Hacen falta las tres bandas para completar el tier 1 en WoW Forever?",
        a: "Sí, según la entrevista con Crix: el tier 1 se reparte entre las tres bandas, y quien solo haga la de 10 consigue buena parte del conjunto, pero no todo. El nivel de objeto es el mismo con 10 y con 20 jugadores.",
      },
    ],
  },
};

export default item;

import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Due risposte di Kaivax sul forum US del 10/11/2026: XP delle uccisioni nei dungeon (21:35 UTC) e oro delle missioni
 * (21:56 UTC, la fonte della news). Annuncio dell'aumento dell'8/11 (19:47 UTC, "about 11:05 PST", in EU 20:05 CET),
 * rilanciato su X da Clayton Stone. Thread degli hotfix: voce "November 10" (oro, venditori, munizioni) e "November 11"
 * (borse di Tailoring, Item Restoration); l'aumento dell'XP vi compare sotto il 9/11. Casa d'aste: post #7 del thread US
 * (12/11 00:48 UTC, "November 17") e #6 di quello EU ("18 November"). Il contenuto della sezione tolta è solo nella copia
 * di Wowhead dell'elenco del 10/11 (deposito minimo a 1 rame): stampa, va detto come non confermato.
 */
const GOLD = "https://us.forums.blizzard.com/en/wow/t/gold-at-60-for-quests/2405161/165";
const DXP = "https://us.forums.blizzard.com/en/wow/t/dungeon-enemy-xp-increased-november-8/2406595";
const DXP2 = "https://us.forums.blizzard.com/en/wow/t/the-majority-wants-increased-dungeon-xp/2406555/254";
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/2403040";
const AH_US = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/2403040/7";
const AH_EU = "https://eu.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/639885/6";
const STONE = "https://x.com/ClaytonStone/status/2119520030245458281";
const WH_VENDOR = "https://www.wowhead.com/news=383828/vendor-price-changes-on-wow-forever-iron-grenade-shuffle-nerfed";
const WH_HOTFIX_10 = "https://www.wowhead.com/news=383837/hunter-pet-nerf-and-enhancement-shaman-changes-wow-forever-hotfixes-for-november";
const WH_DEPOSIT = "https://www.wowhead.com/news=383786/minimum-deposit-on-ah-being-reduced-to-1-copper-soon-in-wow-forever";

const item: NewsItem = {
  slug: "dungeon-xp-quest-gold-november-10",
  date: "2026-11-10",
  source: "blizzard",
  topic: "news",
  url: GOLD,
  image: media.newsDungeonXpGold.src,
  imageAlt: media.newsDungeonXpGold.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-camping-professions"],
  title: n(
    "Dungeon XP up to 60% of Classic Era and gold added to quests from level 48: Blizzard explains both",
    "XP dei dungeon al 60% di Classic Era e oro nelle missioni dal livello 48: Blizzard spiega le due scelte",
    "La XP de mazmorras sube al 60% de Classic Era y las misiones desde el nivel 48 dan oro: Blizzard lo explica",
  ),
  metaTitle: n(
    "WoW Forever: dungeon XP up, gold added to quests",
    "WoW Forever: più XP nei dungeon, oro nelle missioni",
    "WoW Forever: más XP en mazmorras y oro en misiones",
  ),
  summary: n(
    "On 10 November Blizzard explained two of the most discussed numbers of the first week: since the hotfix of 8 November dungeon kills give 60% of Classic Era XP instead of 40%, and quests at level 60 give no gold because Forever dropped the old XP-to-gold conversion on purpose. To make up for it, most quests of level 48 and higher now also reward gold.",
    "Il 10 novembre Blizzard ha spiegato due dei numeri più discussi della prima settimana: dall'hotfix dell'8 novembre le uccisioni nei dungeon danno il 60% dell'esperienza di Classic Era invece del 40%, e le missioni al livello 60 non danno oro perché Forever ha tolto di proposito la vecchia conversione dell'esperienza in oro. Per compensare, la maggior parte delle missioni di livello 48 o superiore ora dà anche oro.",
    "El 10 de noviembre Blizzard explicó dos de las cifras más comentadas de la primera semana: desde el hotfix del 8 de noviembre las muertes en mazmorras dan el 60% de la experiencia de Classic Era en lugar del 40%, y las misiones a nivel 60 no dan oro porque Forever quitó a propósito la antigua conversión de experiencia en oro. Para compensarlo, la mayoría de las misiones de nivel 48 o superior ahora también dan oro.",
  ),
  description: n(
    "WoW Forever: dungeon kills now give 60% of Classic Era XP, quests from level 48 reward gold, vendor and bag changes, Auction House moved to 17-18 November.",
    "WoW Forever: nei dungeon il 60% dell'XP di Classic Era, oro nelle missioni dal livello 48, venditori e borse, casa d'aste rimandata al 17-18 novembre.",
    "WoW Forever: en mazmorras el 60% de la XP de Classic Era, oro en misiones desde el nivel 48, vendedores y bolsas, casa de subastas al 17-18 de noviembre.",
  ),
  highlights: {
    en: [
      { label: "Dungeon XP", text: "kills give 60% of Classic Era values, up from 40%", anchor: "dungeon-xp" },
      { label: "No gold at 60", text: "the XP-to-gold conversion was removed on purpose", anchor: "xp-to-gold" },
      { label: "Gold from level 48", text: "most high-level quests now reward gold, with exceptions", anchor: "quest-gold" },
      { label: "Vendors and mounts", text: "lower sell prices, Bind-on-Pickup racial mounts, Engineering ammo no longer bound", anchor: "economy" },
      { label: "Tailoring bags", text: "more slots, one more bolt", anchor: "bags" },
      { label: "Auction House", text: "changes moved to the maintenance of 17 and 18 November", anchor: "auction-house" },
    ],
    it: [
      { label: "XP nei dungeon", text: "le uccisioni danno il 60% dei valori di Classic Era, prima il 40%", anchor: "xp-dungeon" },
      { label: "Niente oro al 60", text: "la conversione dell'esperienza in oro è stata tolta di proposito", anchor: "niente-oro-a-60" },
      { label: "Oro dal livello 48", text: "la maggior parte delle missioni alte ora dà oro, con eccezioni", anchor: "oro-missioni" },
      { label: "Venditori e cavalcature", text: "prezzi di vendita più bassi, cavalcature razziali Bind-on-Pickup, munizioni di Engineering libere", anchor: "economia" },
      { label: "Borse di Tailoring", text: "più posti, un bolt in più", anchor: "borse" },
      { label: "Casa d'aste", text: "cambi spostati alla manutenzione del 17 e 18 novembre", anchor: "casa-aste" },
    ],
    es: [
      { label: "XP en mazmorras", text: "las muertes dan el 60% de los valores de Classic Era, antes el 40%", anchor: "xp-mazmorras" },
      { label: "Sin oro a nivel 60", text: "la conversión de experiencia en oro se quitó a propósito", anchor: "sin-oro-a-60" },
      { label: "Oro desde el nivel 48", text: "la mayoría de las misiones altas ya dan oro, con excepciones", anchor: "oro-misiones" },
      { label: "Vendedores y monturas", text: "precios de venta más bajos, monturas raciales Bind-on-Pickup, munición de Engineering sin vincular", anchor: "economia" },
      { label: "Bolsas de Tailoring", text: "más casillas, un bolt más", anchor: "bolsas" },
      { label: "Casa de subastas", text: "los cambios pasan al mantenimiento del 17 y 18 de noviembre", anchor: "casa-de-subastas" },
    ],
  },
  body: n(
    `On Tuesday 10 November, about twenty minutes apart, two replies from community manager Kaivax on the official forum explained two of the most discussed numbers of the first week: how much experience dungeon kills give, and why quests at level 60 give no gold. The [hotfixes](${HOTFIX}) of the same day added gold to most high-level quests and changed several vendor prices; the next day brought bigger Tailoring bags, while the Auction House changes were pulled and moved to the weekly maintenance.

## Dungeon kills: from 40% to 60% of Classic Era {#dungeon-xp}

On Sunday 8 November at about 11:05 PST (19:05 UTC, 20:05 CET) Blizzard deployed a hotfix that raised the experience from every enemy kill in dungeons by 50%. [Kaivax's post](${DXP}) gives the reason in one line: going back in for more runs should feel better. Clayton Stone of Blizzard [shared it on X](${STONE}) the same day. In the official hotfix list the change appears under 9 November.

According to Wowhead, after the beta changes most of the experience in a dungeon came from its quests, so many players ran each dungeon once and moved on.

On 10 November, [replying to a player](${DXP2}) who put the figure at 36% of the original game, Kaivax gave the exact numbers: the hotfix took dungeon kill XP **from 40% to 60% of the Classic Era values**. Blizzard says it tracked this carefully and that the new value gives dungeon levelling speeds that fit the rest of Forever. No further increase was announced.

That matches what Aggrend explained in October: dungeons should level you about as fast as the best questing, not faster ([our article](/en/news/aggrend-dungeon-leveling-xp)). The dungeons and their level ranges are in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).

## Why quests at level 60 give no gold {#xp-to-gold}

In original WoW from 2006 on, and in Classic Era today, a quest completed at maximum level turns the experience it would have given into gold. In his [second post](${GOLD}) Kaivax explains that Forever turned this off on purpose, after the team evaluated the economy before launch.

The rule was not there from the start: it arrived in 2006, in the weeks before the original launch of The Burning Crusade, to give more gold to players finishing the content before the first expansion. Classic Era kept it in 2019. Blizzard removed it from Forever because of the incentive it created: keeping a full quest log of completed quests and turning them in only after reaching 60, for the most gold. Under those rules the best way to reach 60 was to kill creatures for experience without turning in quests at all, a design Blizzard does not want in Forever.

The side effect: only about a quarter of the quests in the original game give gold directly, so gold income in the last levels before 60 dropped more than intended.

## Gold added to quests from level 48 {#quest-gold}

The fix is in the hotfixes of 10 November: **most quests of level 48 or higher now also reward gold**, including some that never gave any. The level is the quest's, not your character's. In the hotfix notes Blizzard repeats that players should not feel they have to save up quests near 60 and turn them in later for a profit; the goal is a good reason to complete them while levelling and after reaching 60. The XP-to-gold conversion itself stays out.

Three kinds of quests are left out:

- quests that already reward valuable items;
- repeatable quests;
- quests that are quick, easy or trivial to complete.

Blizzard has not said how much gold each quest now gives.

## Vendors, mounts and ammunition {#economy}

The same list of 10 November changes several items that matter for the economy:

- all racial vendor mounts are now **Bind-on-Pickup**;
- vendors pay less for some crafted armour from Leatherworking, Tailoring and Blacksmithing: all Bind-on-Pickup pieces meant to be crafted once, for yourself;
- Iron Grenades are now worth 1 silver 25 copper at vendors (was 5 silver);
- Minor Arcane Elixir sells for 5 copper (was 25 copper);
- the Engineering ammunition **Swiftstrike Shot** and **Swiftfeather Arrow** is no longer Bind-on-Pickup. It only becomes available when raids unlock, but Blizzard mentions it now because it may affect which profession you choose.

[Wowhead](${WH_VENDOR}) reads the price cuts as a blow to "vendor shuffles": turning cheap materials into items that vendors buy for more than they cost, which adds gold to the economy. Professions and their camp features are in our [Camping and professions guide](/en/guides/wow-forever-camping-professions#professions).

## Bigger Tailoring bags, 11 November {#bags}

On Wednesday 11 November Blizzard fixed several Tailoring bags that were smaller than intended. They now hold more but cost one more bolt of cloth:

| Bag | Slots | Cost |
| --- | --- | --- |
| Red Mageweave Bag | 14 | 5 Bolt of Mageweave (was 4) |
| Green Silk Pack | 12 | 5 Bolt of Silk Cloth (was 4) |
| Black Silk Pack | 12 | 6 Bolt of Silk Cloth (was 5) |
| Green Woolen Bag | 10 | 5 Bolt of Woolen Cloth (was 4) |
| Red Woolen Bag | 10 | 5 Bolt of Woolen Cloth (was 4) |

Blizzard does not give the old number of slots.

## Auction House changes moved to 17 and 18 November {#auction-house}

The list of 10 November also had an Auction House section. On the evening of 11 November in the Americas (00:48 UTC on 12 November) Kaivax [took it out](${AH_US}): those changes will go live with the **weekly maintenance of Tuesday 17 November** in the Americas and, as the [European version of the post](${AH_EU}) says, **Wednesday 18 November** in Europe, and will then return to the hotfix list.

Blizzard's list no longer says what they are. In [Wowhead's copy of the 10 November hotfixes](${WH_HOTFIX_10}), made before the removal, the section lowered the minimum Auction House deposit to 1 copper (was 1 silver), with realm restarts; on 6 November Kris Zierhut had said, [again according to Wowhead](${WH_DEPOSIT}), that the deposit would go back to 1 copper. Until Blizzard puts the section back, treat this as unconfirmed.

## Item Restoration switched off {#item-restoration}

Also on 11 November, Blizzard disabled the Item Restoration service of customer support while it investigates and fixes a critical bug. No date has been given for its return.

## What we don't know yet {#unknown}

- How much gold the quests from level 48 give, and exactly which ones are excluded.
- Which changes the Auction House section contains, until it is back in the list.
- When Item Restoration will return.
- Whether Blizzard will touch dungeon XP again: for now it considers 60% right.`,
    `Martedì 10 novembre, a una ventina di minuti l'una dall'altra, due risposte del community manager Kaivax sul forum ufficiale hanno spiegato due dei numeri più discussi della prima settimana: quanta esperienza danno le uccisioni nei dungeon e perché le missioni al livello 60 non danno oro. Gli [hotfix](${HOTFIX}) dello stesso giorno hanno aggiunto oro alla maggior parte delle missioni di alto livello e cambiato diversi prezzi dei venditori; il giorno dopo sono arrivate borse di Tailoring più grandi, mentre i cambi alla casa d'aste sono stati tolti e spostati alla manutenzione settimanale.

## Uccisioni nei dungeon: dal 40% al 60% di Classic Era {#xp-dungeon}

Domenica 8 novembre verso le 11:05 PST (19:05 UTC, 20:05 CET) Blizzard ha distribuito un hotfix che alza del 50% l'esperienza di ogni nemico ucciso nei dungeon. Il [post di Kaivax](${DXP}) dà il motivo in una riga: rientrare per altri giri deve valere di più. Lo stesso giorno Clayton Stone di Blizzard l'ha [rilanciato su X](${STONE}). Nell'elenco ufficiale degli hotfix la modifica compare sotto il 9 novembre.

Secondo Wowhead, dopo i cambi della beta gran parte dell'esperienza di un dungeon veniva dalle sue missioni, e molti giocatori facevano ogni dungeon una volta sola.

Il 10 novembre, [rispondendo a un giocatore](${DXP2}) che parlava del 36% del gioco originale, Kaivax ha dato i numeri esatti: l'hotfix ha portato l'esperienza delle uccisioni nei dungeon **dal 40% al 60% dei valori di Classic Era**. Blizzard dice di averlo seguito con attenzione e che con il nuovo valore la velocità di livellamento nei dungeon è in linea con il resto di Forever. Altri aumenti non sono stati annunciati.

È coerente con quello che Aggrend aveva spiegato a ottobre: nei dungeon si deve livellare più o meno quanto con le missioni fatte al meglio, non più in fretta ([il nostro articolo](/it/news/aggrend-dungeon-leveling-xp)). I dungeon e i loro livelli sono nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).

## Perché le missioni al livello 60 non danno oro {#niente-oro-a-60}

Nel WoW originale dal 2006 in poi, e oggi in Classic Era, una missione completata al livello massimo trasforma in oro l'esperienza che avrebbe dato. Nel [secondo post](${GOLD}) Kaivax spiega che in Forever questa conversione è stata tolta di proposito, dopo che il team aveva valutato l'economia prima del lancio.

La regola non c'era dall'inizio: è arrivata nel 2006, nelle settimane prima dell'uscita originale di The Burning Crusade, per dare più oro a chi finiva i contenuti prima della prima espansione. Classic Era l'ha tenuta nel 2019. In Forever Blizzard l'ha tolta per l'incentivo che creava: tenere il diario pieno di missioni completate e consegnarle solo dopo il 60, per avere il massimo dell'oro. Con queste regole il modo migliore di arrivare a 60 era uccidere mostri per l'esperienza senza consegnare missioni, un'impostazione che Blizzard non vuole in Forever.

L'effetto collaterale: solo un quarto circa delle missioni del gioco originale dà oro direttamente, quindi negli ultimi livelli prima del 60 le entrate in oro sono calate più del previsto.

## Oro nelle missioni dal livello 48 {#oro-missioni}

Il rimedio è negli hotfix del 10 novembre: **la maggior parte delle missioni di livello 48 o superiore ora dà anche oro**, comprese alcune che prima non ne davano. Il livello è quello della missione, non del vostro personaggio. Nelle note Blizzard ripete che i giocatori non devono sentirsi costretti ad accumulare missioni vicino al 60 per consegnarle dopo con un guadagno; l'obiettivo è dare un buon motivo per completarle mentre si livella e anche dopo il 60. La conversione dell'esperienza in oro resta fuori.

Restano escluse tre categorie:

- le missioni che danno già oggetti di valore;
- le missioni ripetibili;
- le missioni rapide, facili o banali da completare.

Blizzard non ha detto quanto oro dia ora ogni missione.

## Venditori, cavalcature e munizioni {#economia}

Lo stesso elenco del 10 novembre cambia diversi oggetti che pesano sull'economia:

- tutte le cavalcature dei venditori razziali ora sono **Bind-on-Pickup**;
- i venditori pagano meno alcune armature create con Leatherworking, Tailoring e Blacksmithing: tutti pezzi Bind-on-Pickup pensati per essere creati una volta sola, per sé;
- le Iron Grenade ora valgono 1 argento e 25 rame dai venditori (era 5 argento);
- la Minor Arcane Elixir si vende a 5 rame (era 25 rame);
- le munizioni di Engineering **Swiftstrike Shot** e **Swiftfeather Arrow** non sono più Bind-on-Pickup. Diventano disponibili solo con l'apertura delle incursioni, ma Blizzard lo dice ora perché può pesare sulla scelta della professione.

[Wowhead](${WH_VENDOR}) legge i tagli ai prezzi come un colpo ai "vendor shuffle": trasformare materiali economici in oggetti che i venditori comprano a più di quanto costano, cosa che immette oro nell'economia. Le professioni e le loro camp feature sono nella nostra [guida a Camping e professioni](/it/guides/wow-forever-camping-professions#professioni).

## Borse di Tailoring più grandi, 11 novembre {#borse}

Mercoledì 11 novembre Blizzard ha corretto diverse borse di Tailoring che erano più piccole del previsto. Ora contengono di più ma costano un bolt di stoffa in più:

| Borsa | Posti | Costo |
| --- | --- | --- |
| Red Mageweave Bag | 14 | 5 Bolt of Mageweave (erano 4) |
| Green Silk Pack | 12 | 5 Bolt of Silk Cloth (erano 4) |
| Black Silk Pack | 12 | 6 Bolt of Silk Cloth (erano 5) |
| Green Woolen Bag | 10 | 5 Bolt of Woolen Cloth (erano 4) |
| Red Woolen Bag | 10 | 5 Bolt of Woolen Cloth (erano 4) |

Blizzard non dice quanti posti avevano prima.

## Cambi alla casa d'aste spostati al 17 e 18 novembre {#casa-aste}

L'elenco del 10 novembre aveva anche una sezione sulla casa d'aste. La sera dell'11 novembre nelle Americhe (00:48 UTC del 12 novembre) Kaivax [l'ha tolta](${AH_US}): quei cambi arriveranno con la **manutenzione settimanale di martedì 17 novembre** nelle Americhe e, come dice la [versione europea del post](${AH_EU}), di **mercoledì 18 novembre** in Europa, e poi torneranno nell'elenco degli hotfix.

L'elenco di Blizzard non dice più quali siano. Nella [copia degli hotfix del 10 novembre fatta da Wowhead](${WH_HOTFIX_10}) prima della rimozione, la sezione abbassava il deposito minimo della casa d'aste a 1 rame (era 1 argento), con il riavvio dei reami; il 6 novembre Kris Zierhut aveva detto, [sempre secondo Wowhead](${WH_DEPOSIT}), che il deposito sarebbe tornato a 1 rame. Finché Blizzard non rimette la sezione, consideratelo non confermato.

## Item Restoration disattivato {#item-restoration}

Sempre l'11 novembre Blizzard ha disattivato il servizio Item Restoration dell'assistenza clienti mentre indaga su un bug critico e lo corregge. Non c'è una data per il ritorno.

## Cosa non sappiamo ancora {#non-sappiamo}

- Quanto oro diano le missioni dal livello 48 e quali, di preciso, siano escluse.
- Quali cambi contenga la sezione sulla casa d'aste, finché non torna nell'elenco.
- Quando tornerà Item Restoration.
- Se Blizzard toccherà ancora l'esperienza nei dungeon: per ora considera giusto il 60%.`,
    `El martes 10 de noviembre, con unos veinte minutos de diferencia, dos respuestas del community manager Kaivax en el foro oficial explicaron dos de las cifras más comentadas de la primera semana: cuánta experiencia dan las muertes en mazmorras y por qué las misiones a nivel 60 no dan oro. Los [hotfixes](${HOTFIX}) de ese mismo día añadieron oro a la mayoría de las misiones de nivel alto y cambiaron varios precios de los vendedores; al día siguiente llegaron bolsas de Tailoring más grandes, mientras que los cambios de la casa de subastas se retiraron y pasaron al mantenimiento semanal.

## Muertes en mazmorras: del 40% al 60% de Classic Era {#xp-mazmorras}

El domingo 8 de noviembre hacia las 11:05 PST (19:05 UTC, 20:05 CET) Blizzard aplicó un hotfix que sube un 50% la experiencia de cada enemigo muerto en mazmorras. El [mensaje de Kaivax](${DXP}) da el motivo en una línea: volver a entrar para más partidas tiene que merecer más la pena. Ese mismo día Clayton Stone, de Blizzard, lo [compartió en X](${STONE}). En la lista oficial de hotfixes el cambio aparece en el 9 de noviembre.

Según Wowhead, tras los cambios de la beta la mayor parte de la experiencia de una mazmorra venía de sus misiones, y muchos jugadores hacían cada mazmorra una sola vez.

El 10 de noviembre, [respondiendo a un jugador](${DXP2}) que hablaba de un 36% del juego original, Kaivax dio las cifras exactas: el hotfix llevó la experiencia por muertes en mazmorras **del 40% al 60% de los valores de Classic Era**. Blizzard dice que lo ha seguido con atención y que con el nuevo valor la velocidad de subida de nivel en mazmorras encaja con el resto de Forever. No se han anunciado más aumentos.

Coincide con lo que Aggrend explicó en octubre: en mazmorras se debe subir de nivel más o menos como con las misiones bien hechas, no más rápido ([nuestro artículo](/es/news/aggrend-dungeon-leveling-xp)). Las mazmorras y sus niveles están en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).

## Por qué las misiones a nivel 60 no dan oro {#sin-oro-a-60}

En el WoW original desde 2006, y hoy en Classic Era, una misión completada al nivel máximo convierte en oro la experiencia que habría dado. En su [segundo mensaje](${GOLD}) Kaivax explica que en Forever esta conversión se quitó a propósito, después de que el equipo evaluara la economía antes del lanzamiento.

La regla no estaba desde el principio: llegó en 2006, en las semanas previas al lanzamiento original de The Burning Crusade, para dar más oro a quien terminaba el contenido antes de la primera expansión. Classic Era la mantuvo en 2019. Blizzard la quitó de Forever por el incentivo que creaba: llevar el registro de misiones lleno de misiones completadas y entregarlas solo después de llegar a 60, para sacar el máximo de oro. Con esas reglas, la mejor forma de llegar a 60 era matar criaturas por experiencia sin entregar misiones, un diseño que Blizzard no quiere en Forever.

El efecto secundario: solo una cuarta parte, más o menos, de las misiones del juego original da oro directamente, así que en los últimos niveles antes del 60 los ingresos de oro bajaron más de lo previsto.

## Oro en las misiones desde el nivel 48 {#oro-misiones}

La solución está en los hotfixes del 10 de noviembre: **la mayoría de las misiones de nivel 48 o superior ahora también dan oro**, incluidas algunas que antes no daban nada. El nivel es el de la misión, no el de tu personaje. En las notas Blizzard repite que los jugadores no deberían sentirse obligados a guardar misiones cerca del 60 para entregarlas después con beneficio; el objetivo es dar un buen motivo para completarlas mientras subes de nivel y también después del 60. La conversión de experiencia en oro sigue fuera.

Quedan excluidas tres categorías:

- las misiones que ya dan objetos valiosos;
- las misiones repetibles;
- las misiones rápidas, fáciles o triviales de completar.

Blizzard no ha dicho cuánto oro da ahora cada misión.

## Vendedores, monturas y munición {#economia}

La misma lista del 10 de noviembre cambia varios objetos que pesan en la economía:

- todas las monturas de los vendedores raciales ahora son **Bind-on-Pickup**;
- los vendedores pagan menos por algunas armaduras creadas con Leatherworking, Tailoring y Blacksmithing: todas piezas Bind-on-Pickup pensadas para crearlas una sola vez, para uno mismo;
- las Iron Grenade ahora valen 1 plata y 25 cobres en los vendedores (antes, 5 platas);
- el Minor Arcane Elixir se vende por 5 cobres (antes, 25);
- la munición de Engineering **Swiftstrike Shot** y **Swiftfeather Arrow** ya no es Bind-on-Pickup. Solo estará disponible cuando se abran las bandas, pero Blizzard lo avisa ahora porque puede influir en la profesión que elijas.

[Wowhead](${WH_VENDOR}) lee los recortes de precio como un golpe a los "vendor shuffles": convertir materiales baratos en objetos que los vendedores compran por más de lo que cuestan, algo que mete oro en la economía. Las profesiones y sus objetos de campamento están en nuestra [guía de acampada y profesiones](/es/guides/wow-forever-camping-professions#profesiones).

## Bolsas de Tailoring más grandes, 11 de noviembre {#bolsas}

El miércoles 11 de noviembre Blizzard corrigió varias bolsas de Tailoring que eran más pequeñas de lo previsto. Ahora tienen más casillas pero cuestan un bolt de tela más:

| Bolsa | Casillas | Coste |
| --- | --- | --- |
| Red Mageweave Bag | 14 | 5 Bolt of Mageweave (antes, 4) |
| Green Silk Pack | 12 | 5 Bolt of Silk Cloth (antes, 4) |
| Black Silk Pack | 12 | 6 Bolt of Silk Cloth (antes, 5) |
| Green Woolen Bag | 10 | 5 Bolt of Woolen Cloth (antes, 4) |
| Red Woolen Bag | 10 | 5 Bolt of Woolen Cloth (antes, 4) |

Blizzard no dice cuántas casillas tenían antes.

## Los cambios de la casa de subastas pasan al 17 y 18 de noviembre {#casa-de-subastas}

La lista del 10 de noviembre tenía también una sección sobre la casa de subastas. La noche del 11 de noviembre en América (00:48 UTC del 12 de noviembre) Kaivax [la retiró](${AH_US}): esos cambios llegarán con el **mantenimiento semanal del martes 17 de noviembre** en América y, como dice la [versión europea del mensaje](${AH_EU}), del **miércoles 18 de noviembre** en Europa, y después volverán a la lista de hotfixes.

La lista de Blizzard ya no dice cuáles son. En la [copia de los hotfixes del 10 de noviembre que hizo Wowhead](${WH_HOTFIX_10}) antes de la retirada, la sección bajaba el depósito mínimo de la casa de subastas a 1 cobre (antes, 1 plata), con el reinicio de los reinos; el 6 de noviembre Kris Zierhut había dicho, [también según Wowhead](${WH_DEPOSIT}), que el depósito volvería a 1 cobre. Hasta que Blizzard vuelva a publicar la sección, tómalo como no confirmado.

## Item Restoration, desactivado {#item-restoration}

También el 11 de noviembre Blizzard desactivó el servicio Item Restoration de atención al cliente mientras investiga y corrige un error crítico. No hay fecha para su vuelta.

## Lo que aún no sabemos {#no-sabemos}

- Cuánto oro dan las misiones desde el nivel 48 y cuáles, exactamente, quedan excluidas.
- Qué cambios contiene la sección de la casa de subastas, hasta que vuelva a la lista.
- Cuándo volverá Item Restoration.
- Si Blizzard volverá a tocar la experiencia en mazmorras: por ahora considera correcto el 60%.`,
  ),
  faq: {
    en: [
      {
        q: "How much XP do dungeon kills give in WoW Forever?",
        a: "Since the hotfix of Sunday 8 November, 60% of the Classic Era values (it was 40%). On 10 November Blizzard said this gives dungeon levelling speeds that fit the rest of Forever, and announced no further increase.",
      },
      {
        q: "Why don't quests give gold at level 60 in WoW Forever?",
        a: "Blizzard removed on purpose the XP-to-gold conversion added to original WoW in 2006, because it pushed players to save completed quests until 60. Since 10 November most quests of level 48 and higher reward gold instead, with some exceptions.",
      },
      {
        q: "When do the Auction House changes arrive in WoW Forever?",
        a: "With the weekly maintenance of 17 November in the Americas and 18 November in Europe. Blizzard pulled them from the 10 November hotfix list without saying what they are; Wowhead's copy of that list shows a minimum deposit of 1 copper.",
      },
    ],
    it: [
      {
        q: "Quanta esperienza danno le uccisioni nei dungeon di WoW Forever?",
        a: "Dall'hotfix di domenica 8 novembre, il 60% dei valori di Classic Era (prima era il 40%). Il 10 novembre Blizzard ha detto che così la velocità di livellamento nei dungeon è in linea con il resto di Forever, e non ha annunciato altri aumenti.",
      },
      {
        q: "Perché le missioni non danno oro al livello 60 in WoW Forever?",
        a: "Blizzard ha tolto di proposito la conversione dell'esperienza in oro arrivata nel WoW originale nel 2006, perché spingeva a tenere da parte le missioni completate fino al 60. Dal 10 novembre la maggior parte delle missioni di livello 48 o superiore dà invece oro, con alcune eccezioni.",
      },
      {
        q: "Quando arrivano i cambi alla casa d'aste in WoW Forever?",
        a: "Con la manutenzione settimanale del 17 novembre nelle Americhe e del 18 novembre in Europa. Blizzard li ha tolti dall'elenco degli hotfix del 10 novembre senza dire quali siano; la copia di quell'elenco fatta da Wowhead riporta un deposito minimo di 1 rame.",
      },
    ],
    es: [
      {
        q: "¿Cuánta experiencia dan las muertes en mazmorras en WoW Forever?",
        a: "Desde el hotfix del domingo 8 de noviembre, el 60% de los valores de Classic Era (antes, el 40%). El 10 de noviembre Blizzard dijo que así la velocidad de subida de nivel en mazmorras encaja con el resto de Forever, y no anunció más aumentos.",
      },
      {
        q: "¿Por qué las misiones no dan oro a nivel 60 en WoW Forever?",
        a: "Blizzard quitó a propósito la conversión de experiencia en oro que llegó al WoW original en 2006, porque llevaba a guardar misiones completadas hasta el 60. Desde el 10 de noviembre la mayoría de las misiones de nivel 48 o superior dan oro, con algunas excepciones.",
      },
      {
        q: "¿Cuándo llegan los cambios de la casa de subastas a WoW Forever?",
        a: "Con el mantenimiento semanal del 17 de noviembre en América y del 18 de noviembre en Europa. Blizzard los retiró de la lista de hotfixes del 10 de noviembre sin decir cuáles son; la copia de esa lista que hizo Wowhead muestra un depósito mínimo de 1 cobre.",
      },
    ],
  },
};

export default item;

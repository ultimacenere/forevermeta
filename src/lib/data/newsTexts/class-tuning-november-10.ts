import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Ritocchi alle classi del 10/11/2026. Annuncio: "Class Tuning Incoming - November 10" (Kaivax, forum US, 6/11 21:11 UTC,
 * topic 2404092, unico post blu). Cosa è uscito: voce "November 10, 2026" del thread degli hotfix (topic 2403040, post 6
 * del 11/11 03:27 UTC, copiata nel post 1), più le voci del 6, 9 e 11 novembre per la sezione sugli altri giorni.
 * Orario del primo cambio (Rage of the Storm, 19:04 UTC) dai dati di hotfix letti da Wowhead (news 383824), che dà il
 * vecchio valore come +12 Intelletto mentre Blizzard scrive 16: nel testo solo "Forza al posto dell'Intelletto".
 * Talenti di Sciamano e Druido "early next year" e Lava Burst: intervista di Crix con Kris Zierhut (6/11), letta solo dal
 * riassunto di Wowhead (news 383785), quindi attribuita. Stormstrike 150%/6 s veniva dalle note del 2/11 (news del sito).
 * Il builder ha ancora i talenti del 4/11: i valori cambiati il 10/11 non ci sono.
 */
const TUNING = "https://us.forums.blizzard.com/en/wow/t/class-tuning-incoming-november-10/2404092";
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/2403040";
const WOWHEAD_WEAPON = "https://www.wowhead.com/news=383824/enhancement-shaman-class-weapon-hotfixed-on-wow-forever";
const WOWHEAD_SHAMAN = "https://www.wowhead.com/news=383785/shaman-talents-revisited-early-next-year-blizzard-addresses-shaman-classic";
const CRIX = "https://www.youtube.com/watch?v=QtGf1aJUowU";

const item: NewsItem = {
  slug: "class-tuning-november-10",
  date: "2026-11-10",
  source: "blizzard",
  topic: "news",
  url: HOTFIX,
  image: media.newsClassTuning.src,
  imageAlt: media.newsClassTuning.alt,
  guides: ["wow-forever-races-classes"],
  title: n(
    "WoW Forever class tuning of 10 November: Hunter pet bug, Wrack rebuilt, Enhancement Shaman back to Strength",
    "Ritocchi di classe di WoW Forever del 10 novembre: famigli del Cacciatore, Wrack rifatto, Enhancement e Forza",
    "Ajustes de clase de WoW Forever del 10 de noviembre: mascotas del cazador, nuevo Wrack, Enhancement con Fuerza",
  ),
  metaTitle: n(
    "WoW Forever class tuning of 10 November",
    "WoW Forever: ritocchi alle classi del 10 novembre",
    "WoW Forever: ajustes de clase del 10 de noviembre",
  ),
  summary: n(
    "On 6 November Blizzard announced class fixes for Tuesday 10 November: tougher pets, a Wrack that no longer makes Affliction's DoTs pointless, and Strength as the Enhancement Shaman's best stat. What arrived lowers Hunter pets' health from a bugged 150% to 115%, gives Warlock demons about 15% more health, rebuilds Wrack around faster DoT ticks and undoes several beta changes to Enhancement.",
    "Il 6 novembre Blizzard ha annunciato correzioni alle classi per martedì 10 novembre: famigli più resistenti, un Wrack che non renda inutili i DoT dell'Affliction e la Forza come statistica migliore dello Sciamano Enhancement. Quello che è arrivato porta la vita dei famigli del Cacciatore dal 150% di un bug al 115%, dà ai demoni dello Stregone circa il 15% di vita in più, rifà Wrack attorno a DoT più rapidi e annulla diversi cambi della beta all'Enhancement.",
    "El 6 de noviembre Blizzard anunció correcciones de clase para el martes 10 de noviembre: mascotas más resistentes, un Wrack que no deje inútiles los DoT de Affliction y la Fuerza como mejor atributo del chamán Enhancement. Lo que llegó baja la salud de las mascotas del cazador del 150% de un error al 115%, da a los esbirros del brujo alrededor de un 15% más de salud, rehace Wrack en torno a DoT más rápidos y deshace varios cambios de la beta a Enhancement.",
  ),
  description: n(
    "WoW Forever class tuning of 10 November: the Hunter pet health bug, Warlock demons and Wrack, Enhancement Shaman back to Strength, and the other fixes.",
    "Ritocchi alle classi di WoW Forever del 10 novembre: bug della vita dei famigli del Cacciatore, demoni e Wrack dello Stregone, Enhancement verso la Forza.",
    "Ajustes de clase de WoW Forever del 10 de noviembre: error de salud de las mascotas del cazador, esbirros y Wrack del brujo, y Enhancement con Fuerza.",
  ),
  highlights: {
    en: [
      { label: "The announcement", text: "three class problems, fixes on Tuesdays", anchor: "announcement" },
      { label: "Hunter", text: "pets had 150% health because of a bug, now 115%", anchor: "hunter" },
      { label: "Affliction Warlock", text: "Wrack makes Corruption, Siphon Life and Bane of Agony tick twice as fast", anchor: "wrack" },
      { label: "Enhancement Shaman", text: "Stormstrike, Mental Dexterity and Maelstrom Weapon reworked around Windfury", anchor: "enhancement" },
      { label: "Levelling an Enhancement", text: "Strength and Attack Power gear from now on", anchor: "levelling" },
      { label: "Still open", text: "Shaman and Druid talents early next year, according to an interview", anchor: "open" },
    ],
    it: [
      { label: "L'annuncio", text: "tre problemi di classe, correzioni di martedì", anchor: "annuncio" },
      { label: "Cacciatore", text: "i famigli avevano il 150% della vita per un bug, ora il 115%", anchor: "cacciatore" },
      { label: "Stregone Affliction", text: "Wrack fa colpire Corruption, Siphon Life e Bane of Agony il doppio delle volte", anchor: "wrack" },
      { label: "Sciamano Enhancement", text: "Stormstrike, Mental Dexterity e Maelstrom Weapon rifatti attorno a Windfury", anchor: "enhancement" },
      { label: "Livellare un Enhancement", text: "da adesso oggetti con Forza e potere d'attacco", anchor: "livellare" },
      { label: "Ancora aperto", text: "talenti di Sciamano e Druido all'inizio dell'anno prossimo, secondo un'intervista", anchor: "aperto" },
    ],
    es: [
      { label: "El anuncio", text: "tres problemas de clase, correcciones los martes", anchor: "anuncio" },
      { label: "Cazador", text: "las mascotas tenían el 150% de salud por un error, ahora el 115%", anchor: "cazador" },
      { label: "Brujo Affliction", text: "Wrack hace que Corruption, Siphon Life y Bane of Agony dañen el doble de veces", anchor: "wrack" },
      { label: "Chamán Enhancement", text: "Stormstrike, Mental Dexterity y Maelstrom Weapon rehechos en torno a Windfury", anchor: "enhancement" },
      { label: "Subir un Enhancement", text: "a partir de ahora, equipo con Fuerza y poder de ataque", anchor: "subir-nivel" },
      { label: "Sigue abierto", text: "talentos de chamán y druida a principios del año que viene, según una entrevista", anchor: "abierto" },
    ],
  },
  body: n(
    `On Friday 6 November 2026 at 21:11 UTC (22:11 CET), Kaivax, Community Manager at Blizzard, announced [class tuning for Tuesday 10 November](${TUNING}). Now that players around the world are levelling, he wrote, a few class problems needed immediate changes. The changes went live on Tuesday: according to Wowhead, which reads the game's hotfix data, [the first one](${WOWHEAD_WEAPON}), to the Shaman's quest weapon, arrived at 19:04 UTC (20:04 CET), and Blizzard added the full list for the day to its [hotfix thread](${HOTFIX}) at 03:27 UTC on Wednesday 11 November (04:27 CET). Below is what was announced, what actually changed and the class fixes of the other days of the week. Talent, spell and item names stay in English, as in the game.

## What Blizzard announced on 6 November {#announcement}

The post named three problems:

- **Hunter pets and Warlock Voidwalkers** were not as durable as tanks as Blizzard wanted. The goal is roughly the same effectiveness as in Classic Era.
- **Affliction Warlocks** did better by always channelling Wrack than by also casting Siphon Life, Corruption and Bane of Agony. Blizzard wanted those damage-over-time spells to be always worth casting alongside Wrack, without changing the spec's total damage.
- **Enhancement Shamans** found Intellect and Spell Power better than Strength and Attack Power. Blizzard wants Strength to be their best stat, and does not want them to prefer gear made for Mages and Warlocks.

The post also had a note for anyone levelling an Enhancement Shaman: start collecting Strength and Attack Power gear now. Blizzard's plan is to make class balance changes on Tuesdays, this one first and later ones only if needed. The [development notes of 2 November](/en/news/development-notes-november-2) had ruled out big tuning before the raids open on 9 December, apart from bugs and serious outliers; this round is presented as a set of fixes that could not wait.

## Hunter: the pets had a bug {#hunter}

The announcement suggested tougher pets, but the change Blizzard listed goes the other way. Hunter pets had **150% of their normal health because of a bug**; the hotfix brings them down to **115%**. Compared with the bugged value your pet loses about 23% of its health, but it keeps 15% more than the base value. The list says nothing else about pets' durability as tanks.

Also on 10 November:

- **Arcane Shot** costs 11% of base mana at every rank. Blizzard says the cost at levels 6 and 60 is almost unchanged, and slightly lower in between.
- **Beast Mastery**: **Summon Hawk** also costs 11% of base mana, and the hawk's melee damage goes up by about 80%.

## Warlock: sturdier demons {#warlock}

For Warlocks the change is the one the announcement promised. The **Imp** deals more damage with the first four ranks of Firebolt and has about 15% more base health; the **Voidwalker**, **Incubus** and **Succubus** also get about 15% more base health. On 6 November the Voidwalker had already gained about 40 health at every level. A smaller fix: the Succubus whip sound no longer plays much too often.

## Affliction: Wrack now speeds up your DoTs {#wrack}

This is the biggest rework of the day.

- **Soul Siphon** increases Drain Life, Drain Soul and Wrack by 4/8/12% for each of your **Corruption, Siphon Life and Bane of Agony** on the target, up to 36%. Before, any Affliction spell counted.
- **Wrack** deals 30% less damage and no longer increases the damage of your DoTs. Instead, while you channel it (6 seconds, Shadow damage every second), Siphon Life, Corruption and Bane of Agony on that target **deal their periodic damage 100% faster**.

Blizzard explains that Wrack changes how often your DoTs deal damage, not how long they last: Bane of Agony still lasts 24 seconds, but it ticks twice as often while Wrack is channelled. With the old version, stopping the channel just before a tick meant that tick gained nothing from Wrack. Now the time Wrack skips is kept even if the channel ends or is interrupted. Blizzard's example: one second of Wrack during a 3-second Corruption tick moves Corruption forward by two seconds instead of one, so the next tick comes one second later instead of two.

In practice, Corruption, Siphon Life and Bane of Agony are now what makes Wrack worth channelling: Soul Siphon counts only those three, and Wrack speeds up only those three. Put them on the target first.

**Destruction**: Bane of Havoc now triggers the global cooldown, as it was meant to.

## Enhancement Shaman: back to Windfury and Strength {#enhancement}

For every Shaman, **weapon imbues and weapon totems now work together**: Blizzard's example is Windfury Weapon with Windfury Totem, and your attacks can trigger both. Maelstrom Weapon can also be tracked in the Cooldown Manager. For Enhancement:

- **Stormstrike** deals 100% weapon damage (was 150%) on an 8-second cooldown (was 6). These are the values it had before the development notes of 2 November.
- **Mental Dexterity** converts 33/66/100% of your Intellect into Attack Power (was 50/100/150%): a third less at every rank.
- **Maelstrom Weapon** reduces cast time and mana cost by 20% per application at every rank (was 4/8/12/16/20%), but triggers 6/7/8/9/10 times a minute depending on rank (was always 20). The tooltip now shows your chance per swing based on your main-hand speed: with 5 points it shows 60% with a 3.6-speed weapon and 33% with a 2.0 one.
- **Rage of the Storm**, the two-handed mace Shamans get as a quest reward, now has 16 Strength instead of Intellect and a speed of 3.6 (was 3.2).

Blizzard's notes, in short: the beta changes to Enhancement, together with the Shock and Lightning Bolt changes aimed at Elemental, had pushed the spec towards Spell Power and Intellect gear and away from Windfury, which Blizzard wants at the heart of the spec. Doing it now matters because of the first raid: Blizzard does not want players to compete for and win contested items that would lose value after a later change. Many of these changes undo beta adjustments made specifically for Enhancement.

## If you are levelling an Enhancement Shaman {#levelling}

- From now on, pick up gear with **Strength and Attack Power**, as Blizzard advised on 6 November. Its ideal for the spec is Strength or Attack Power with some Intellect or Spell Power on top, not caster gear: Mental Dexterity now turns a third less Intellect into Attack Power.
- If you have or are about to get **Rage of the Storm**, it is now a slow Strength weapon.
- **Maelstrom Weapon** gives 20% per application from the first rank, but how often it triggers depends on your points: 6 times a minute with one, 10 with five. A slower main hand gives a higher chance per swing; the tooltip shows yours.
- You no longer have to choose between your weapon imbue and a weapon totem: Windfury Weapon and Windfury Totem now work together.

## Smaller changes on 10 November {#minor}

- **Druid**: Omen of Clarity can trigger again after a specialization swap; **Restoration**: Nature's Swiftness now also makes Wild Growth instant.
- **Paladin**: Redoubt can be tracked in the Cooldown Manager.
- **Priest**: the Revelation enchant no longer triggers from Vampiric Embrace healing; **Holy**: Holy Nova is now unlearned correctly when you remove the talent.
- **Arms Warrior**: Sweeping Strikes no longer loses charges when it does not hit a second target.

## Class fixes on the other days {#other-days}

The same hotfix thread is updated every day. For classes:

- **6 November**: Bloom heals its target (Druid); Arcane Blast really lasts 18 seconds (Mage); the Voidwalker gets about 40 more health and Soul Siphon no longer makes Wrack increase its own damage (Warlock).
- **9 November**: Flamestrike's ground ticks no longer use up Clearcasting, and Arcane Concentration's chance is now split across the cast and every bolt instead of 10% on each (Mage); Shadowform no longer breaks when you cast Fear Ward and Power Infusion now stays on allies (Priest); Lightning Overload deals the right damage with Lightning Bolt (Shaman).
- **11 November**: Judgement counts as a ranged attack, uses your ranged hit chance and no longer triggers item and effect procs meant for melee attacks (Paladin); Unsealed Fury no longer echoes Windfury Totem attacks, a change Blizzard links to a fix to Windfury Totem and Holy Strike (Retribution); Rend and Tear works with Pounce's bleed (Feral Druid); Volley no longer triggers procs and stops when you move (Hunter); Confounding Flash (Gnome) and Twilight Focus work in Shadowform (Priest); Flametongue Totem Rank 2 works (Shaman).

## What is still open {#open}

- **More Tuesdays**: Blizzard plans further class balance changes on Tuesdays, only if needed.
- **Shaman and Druid talents**: in an interview with Crix published on 6 November, [according to Wowhead's summary](${WOWHEAD_SHAMAN}), Kris Zierhut said he would not be surprised if Shaman talents were revisited "early next year", in a patch and not sooner, with some tuning before that once raid data comes in. According to the same summary, Druid talents are also on the list for early next year, and Zierhut admits that removing Lava Burst from Elemental was a last-minute call that needed more work. [The interview is on YouTube](${CRIX}).
- **Our builder**: the values of the talents changed on 10 November are not in our [talent builder](/en/builder) yet. For an overview of the classes there is our [races and classes guide](/en/guides/wow-forever-races-classes), and the earlier class changes are in our article on the [hotfixes of 28 and 30 October](/en/news/class-hotfixes-october-28-30).`,
    `Venerdì 6 novembre 2026 alle 21:11 UTC (22:11 CET) Kaivax, Community Manager di Blizzard, ha annunciato [ritocchi alle classi per martedì 10 novembre](${TUNING}). Ora che i giocatori di tutto il mondo stanno livellando, ha scritto, alcuni problemi delle classi richiedevano interventi immediati. I cambi sono arrivati martedì: secondo Wowhead, che legge i dati di hotfix del gioco, [il primo](${WOWHEAD_WEAPON}), sull'arma della missione dello Sciamano, è entrato alle 19:04 UTC (20:04 CET), e Blizzard ha aggiunto l'elenco completo della giornata al suo [thread degli hotfix](${HOTFIX}) alle 03:27 UTC di mercoledì 11 novembre (04:27 CET). Qui sotto trovate cosa era stato annunciato, cosa è cambiato davvero e i ritocchi di classe degli altri giorni della settimana. I nomi di talenti, incantesimi e oggetti restano in inglese, come nel gioco.

## Cosa ha annunciato Blizzard il 6 novembre {#annuncio}

Il post indicava tre problemi:

- i **famigli del Cacciatore e il Voidwalker dello Stregone** non erano resistenti come tank quanto Blizzard voleva. L'obiettivo è un'efficacia simile a quella di Classic Era;
- per lo **Stregone Affliction** conveniva canalizzare sempre Wrack invece di lanciare anche Siphon Life, Corruption e Bane of Agony. Blizzard voleva che questi incantesimi a danno periodico valessero sempre la pena insieme a Wrack, senza cambiare il danno totale della specializzazione;
- lo **Sciamano Enhancement** trovava Intelletto e potere magico migliori di Forza e potere d'attacco. Blizzard vuole che la Forza sia la sua statistica migliore e che non preferisca gli oggetti pensati per Maghi e Stregoni.

Il post aveva anche una nota per chi livella uno Sciamano Enhancement: cominciare da subito a raccogliere oggetti con Forza e potere d'attacco. Il piano di Blizzard è fare i cambi di bilanciamento delle classi di martedì: questo per primo, i successivi solo se servono. Le [note di sviluppo del 2 novembre](/it/news/development-notes-november-2) avevano escluso grandi ritocchi prima dell'apertura delle incursioni, il 9 dicembre, salvo bug e casi estremi; questa tornata è presentata come una serie di correzioni che non potevano aspettare.

## Cacciatore: i famigli avevano un bug {#cacciatore}

L'annuncio faceva pensare a famigli più resistenti, ma il cambio scritto da Blizzard va nella direzione opposta. I famigli del Cacciatore avevano **il 150% della vita normale per un bug**; l'hotfix li porta al **115%**. Rispetto al valore sbagliato il vostro famiglio perde circa il 23% della vita, ma resta il 15% sopra il valore base. L'elenco non dice altro sulla resistenza dei famigli come tank.

Sempre il 10 novembre:

- **Arcane Shot** costa l'11% del mana base a tutti i ranghi. Secondo Blizzard il costo ai livelli 6 e 60 è quasi uguale a prima, e un po' più basso nei livelli in mezzo;
- **Beast Mastery**: anche **Summon Hawk** costa l'11% del mana base, e il danno in mischia del falco sale di circa l'80%.

## Stregone: demoni più resistenti {#stregone}

Per lo Stregone il cambio è quello promesso dall'annuncio. L'**Imp** fa più danno con i primi quattro ranghi di Firebolt e ha circa il 15% di vita base in più; anche **Voidwalker**, **Incubus** e **Succubus** guadagnano circa il 15% di vita base. Il 6 novembre il Voidwalker aveva già ricevuto circa 40 punti vita in più a tutti i livelli. Una correzione minore: il suono della frusta della Succubus non si sente più così spesso.

## Affliction: Wrack accelera i vostri DoT {#wrack}

È la modifica più grossa della giornata.

- **Soul Siphon** aumenta Drain Life, Drain Soul e Wrack del 4/8/12% per ogni vostro **Corruption, Siphon Life e Bane of Agony** sul bersaglio, fino al 36%. Prima contava qualsiasi incantesimo dell'albero Affliction.
- **Wrack** fa il 30% di danno in meno e non aumenta più il danno dei vostri DoT. In cambio, mentre lo canalizzate (6 secondi, danno d'Ombra ogni secondo), Siphon Life, Corruption e Bane of Agony su quel bersaglio **infliggono il loro danno periodico il 100% più in fretta**.

Blizzard spiega che Wrack cambia ogni quanto i DoT fanno danno, non quanto durano: Bane of Agony dura sempre 24 secondi, ma mentre canalizzate Wrack colpisce il doppio delle volte. Con la versione vecchia, se interrompevate il canale poco prima di un tick, quel tick non riceveva niente da Wrack. Ora il tempo che Wrack fa "saltare" resta anche se il canale finisce o viene interrotto. L'esempio di Blizzard: un secondo di Wrack durante un tick di Corruption da 3 secondi fa avanzare Corruption di due secondi invece di uno, quindi il tick successivo arriva dopo un secondo invece che dopo due.

In pratica sono Corruption, Siphon Life e Bane of Agony a rendere utile Wrack: Soul Siphon conta solo questi tre e Wrack accelera solo questi tre. Metteteli sul bersaglio prima di canalizzare.

**Destruction**: Bane of Havoc ora fa scattare il tempo di recupero globale, come avrebbe dovuto.

## Sciamano Enhancement: di nuovo Windfury e Forza {#enhancement}

Per tutti gli Sciamani **i potenziamenti dell'arma e i totem delle armi ora si possono usare insieme**: l'esempio di Blizzard è Windfury Weapon con Windfury Totem, e i vostri attacchi possono attivarli entrambi. Maelstrom Weapon si può anche seguire nel Cooldown Manager. Per l'Enhancement:

- **Stormstrike** fa il 100% del danno dell'arma (era 150%) con un tempo di recupero di 8 secondi (erano 6): sono i valori che aveva prima delle note di sviluppo del 2 novembre;
- **Mental Dexterity** converte in potere d'attacco il 33/66/100% del vostro Intelletto (era 50/100/150%): un terzo in meno a ogni rango;
- **Maelstrom Weapon** riduce tempo di lancio e costo in mana del 20% per carica a ogni rango (era 4/8/12/16/20%), ma si attiva 6/7/8/9/10 volte al minuto secondo il rango (prima sempre 20). Il tooltip ora mostra la probabilità per colpo in base alla velocità dell'arma nella mano principale: con 5 punti indica il 60% con un'arma da 3.6 e il 33% con una da 2.0;
- **Rage of the Storm**, la mazza a due mani che lo Sciamano riceve da una missione, ora ha 16 di Forza al posto dell'Intelletto e velocità 3.6 (era 3.2).

Le note di Blizzard, in sintesi: i cambi della beta all'Enhancement, insieme a quelli su Shock e Lightning Bolt pensati per l'Elemental, avevano spinto la specializzazione verso oggetti con potere magico e Intelletto e lontano da Windfury, che per Blizzard deve restare il cuore della specializzazione. Farlo adesso conta per la prima incursione: Blizzard non vuole che i giocatori si contendano e vincano oggetti che perderebbero valore dopo un cambio successivo. Molti di questi cambi annullano ritocchi della beta pensati proprio per l'Enhancement.

## Se state livellando uno Sciamano Enhancement {#livellare}

- Da adesso prendete oggetti con **Forza e potere d'attacco**, come consigliato da Blizzard il 6 novembre. L'ideale indicato per la specializzazione è Forza o potere d'attacco con un po' di Intelletto o potere magico, non gli oggetti da incantatore: Mental Dexterity ora trasforma in potere d'attacco un terzo di Intelletto in meno.
- Se avete o state per prendere **Rage of the Storm**, ora è un'arma lenta con Forza.
- **Maelstrom Weapon** dà il 20% per carica già dal primo rango, ma quante volte si attiva dipende dai punti spesi: 6 volte al minuto con un punto, 10 con cinque. Con un'arma più lenta in mano principale cresce la probabilità per colpo; il tooltip vi mostra la vostra.
- Non dovete più scegliere fra il potenziamento dell'arma e un totem delle armi: Windfury Weapon e Windfury Totem ora funzionano insieme.

## Ritocchi minori del 10 novembre {#minori}

- **Druido**: Omen of Clarity torna ad attivarsi dopo un cambio di specializzazione; **Restoration**: Nature's Swiftness rende istantaneo anche Wild Growth.
- **Paladino**: Redoubt si può seguire nel Cooldown Manager.
- **Sacerdote**: l'incantamento Revelation non si attiva più con le cure di Vampiric Embrace; **Holy**: Holy Nova si disimpara correttamente quando togliete il talento.
- **Guerriero Arms**: Sweeping Strikes non perde più cariche se non colpisce un secondo bersaglio.

## I ritocchi di classe degli altri giorni {#altri-giorni}

Lo stesso thread degli hotfix viene aggiornato ogni giorno. Per le classi:

- **6 novembre**: Bloom cura il bersaglio (Druido); Arcane Blast dura davvero 18 secondi (Mago); il Voidwalker riceve circa 40 punti vita in più e Soul Siphon non fa più aumentare a Wrack il proprio danno (Stregone).
- **9 novembre**: i tick a terra di Flamestrike non consumano più Clearcasting e la probabilità di Arcane Concentration ora si divide fra il lancio e ogni dardo, invece del 10% su ciascuno (Mago); Shadowform non si rompe più lanciando Fear Ward e Power Infusion ora resta sugli alleati (Sacerdote); Lightning Overload fa il danno giusto con Lightning Bolt (Sciamano).
- **11 novembre**: Judgement conta come attacco a distanza, usa la vostra probabilità di colpire a distanza e non attiva più gli effetti di oggetti e abilità legati agli attacchi in mischia (Paladino); Unsealed Fury non genera più echi dagli attacchi di Windfury Totem, un cambio che Blizzard collega a una correzione di Windfury Totem con Holy Strike (Retribution); Rend and Tear funziona col sanguinamento di Pounce (Druido Feral); Volley non attiva più effetti e si interrompe se vi muovete (Cacciatore); Confounding Flash (Gnomo) e Twilight Focus funzionano in Shadowform (Sacerdote); Flametongue Totem Rank 2 funziona (Sciamano).

## Cosa resta aperto {#aperto}

- **Altri martedì**: Blizzard prevede altri cambi di bilanciamento delle classi di martedì, solo se servono.
- **Talenti di Sciamano e Druido**: in un'intervista con Crix uscita il 6 novembre, [secondo il riassunto di Wowhead](${WOWHEAD_SHAMAN}), Kris Zierhut ha detto che non si stupirebbe se i talenti dello Sciamano venissero rivisti "early next year", con una patch e non prima, con qualche ritocco già prima, quando arriveranno i dati delle incursioni. Secondo lo stesso riassunto anche i talenti del Druido sono fra quelli da rivedere all'inizio dell'anno prossimo, e Zierhut ammette che togliere Lava Burst all'Elemental è stata una decisione dell'ultimo minuto che andava rifinita. [L'intervista è su YouTube](${CRIX}).
- **Il nostro builder**: i valori dei talenti cambiati il 10 novembre non sono ancora nel nostro [builder dei talenti](/it/builder). Per un quadro delle classi c'è la nostra [guida a razze e classi](/it/guides/wow-forever-races-classes), e i cambi di classe precedenti sono nell'articolo sugli [hotfix del 28 e 30 ottobre](/it/news/class-hotfixes-october-28-30).`,
    `El viernes 6 de noviembre de 2026 a las 21:11 UTC (22:11 CET), Kaivax, Community Manager de Blizzard, anunció [ajustes de clase para el martes 10 de noviembre](${TUNING}). Ahora que jugadores de todo el mundo están subiendo de nivel, escribió, algunos problemas de las clases necesitaban cambios inmediatos. Los cambios llegaron el martes: según Wowhead, que lee los datos de hotfix del juego, [el primero](${WOWHEAD_WEAPON}), al arma de misión del chamán, entró a las 19:04 UTC (20:04 CET), y Blizzard añadió la lista completa del día a su [hilo de hotfixes](${HOTFIX}) a las 03:27 UTC del miércoles 11 de noviembre (04:27 CET). Aquí tienes lo que se anunció, lo que cambió de verdad y los ajustes de clase de los demás días de la semana. Los nombres de talentos, hechizos y objetos siguen en inglés, como en el juego.

## Lo que anunció Blizzard el 6 de noviembre {#anuncio}

La publicación señalaba tres problemas:

- las **mascotas del cazador y el Voidwalker del brujo** no aguantaban como tanques tanto como Blizzard quería. El objetivo es una eficacia parecida a la de Classic Era;
- al **brujo Affliction** le convenía canalizar siempre Wrack en lugar de lanzar también Siphon Life, Corruption y Bane of Agony. Blizzard quería que esos hechizos de daño periódico valieran siempre la pena junto a Wrack, sin cambiar el daño total de la especialización;
- el **chamán Enhancement** veía el Intelecto y el poder con hechizos mejores que la Fuerza y el poder de ataque. Blizzard quiere que la Fuerza sea su mejor atributo y que no prefiera el equipo pensado para magos y brujos.

La publicación incluía también un aviso para quien sube un chamán Enhancement: empezar ya a reunir equipo con Fuerza y poder de ataque. El plan de Blizzard es hacer los cambios de equilibrio de clases los martes: este primero y los siguientes solo si hacen falta. Las [notas de desarrollo del 2 de noviembre](/es/news/development-notes-november-2) habían descartado grandes ajustes antes de que abran las bandas, el 9 de diciembre, salvo errores y casos extremos; esta ronda se presenta como una serie de correcciones que no podían esperar.

## Cazador: las mascotas tenían un error {#cazador}

El anuncio hacía pensar en mascotas más resistentes, pero el cambio que publicó Blizzard va en sentido contrario. Las mascotas del cazador tenían **el 150% de su salud normal por un error**; el hotfix las deja en el **115%**. Respecto al valor erróneo, tu mascota pierde alrededor del 23% de su salud, pero sigue un 15% por encima del valor base. La lista no dice nada más sobre su aguante como tanques.

También el 10 de noviembre:

- **Arcane Shot** cuesta el 11% del maná base en todos los rangos. Según Blizzard, el coste en los niveles 6 y 60 es casi igual que antes, y algo menor en los niveles intermedios;
- **Beast Mastery**: **Summon Hawk** también cuesta el 11% del maná base, y el daño cuerpo a cuerpo del halcón sube alrededor de un 80%.

## Brujo: esbirros más resistentes {#brujo}

Para el brujo el cambio es el que prometía el anuncio. El **Imp** hace más daño con los cuatro primeros rangos de Firebolt y tiene alrededor de un 15% más de salud base; el **Voidwalker**, el **Incubus** y la **Succubus** también ganan alrededor de un 15% de salud base. El 6 de noviembre el Voidwalker ya había recibido unos 40 puntos de salud más en todos los niveles. Una corrección menor: el sonido del látigo de la Succubus ya no suena tan a menudo.

## Affliction: Wrack acelera tus DoT {#wrack}

Es el cambio más grande del día.

- **Soul Siphon** aumenta Drain Life, Drain Soul y Wrack un 4/8/12% por cada uno de tus **Corruption, Siphon Life y Bane of Agony** en el objetivo, hasta un 36%. Antes contaba cualquier hechizo del árbol Affliction.
- **Wrack** hace un 30% menos de daño y ya no aumenta el daño de tus DoT. A cambio, mientras lo canalizas (6 segundos, daño de Sombras cada segundo), Siphon Life, Corruption y Bane of Agony en ese objetivo **infligen su daño periódico un 100% más rápido**.

Blizzard explica que Wrack cambia cada cuánto hacen daño tus DoT, no cuánto duran: Bane of Agony sigue durando 24 segundos, pero mientras canalizas Wrack hace daño el doble de veces. Con la versión anterior, si cortabas el canal justo antes de un tick, ese tick no ganaba nada de Wrack. Ahora el tiempo que Wrack "salta" se conserva aunque el canal termine o se interrumpa. El ejemplo de Blizzard: un segundo de Wrack durante un tick de Corruption de 3 segundos hace avanzar Corruption dos segundos en lugar de uno, así que el siguiente tick llega un segundo después en lugar de dos.

En la práctica, Corruption, Siphon Life y Bane of Agony son lo que hace que Wrack valga la pena: Soul Siphon solo cuenta esos tres y Wrack solo acelera esos tres. Ponlos en el objetivo antes de canalizar.

**Destruction**: Bane of Havoc ahora activa el tiempo de reutilización global, como debía.

## Chamán Enhancement: vuelta a Windfury y a la Fuerza {#enhancement}

Para todos los chamanes, **las mejoras de arma y los tótems de arma ahora se pueden usar a la vez**: el ejemplo de Blizzard es Windfury Weapon con Windfury Totem, y tus ataques pueden activar los dos. Maelstrom Weapon también se puede seguir en el Cooldown Manager. Para Enhancement:

- **Stormstrike** hace el 100% del daño del arma (antes 150%) con 8 segundos de reutilización (antes 6): son los valores que tenía antes de las notas de desarrollo del 2 de noviembre;
- **Mental Dexterity** convierte en poder de ataque el 33/66/100% de tu Intelecto (antes 50/100/150%): un tercio menos en cada rango;
- **Maelstrom Weapon** reduce el tiempo de lanzamiento y el coste de maná un 20% por acumulación en todos los rangos (antes 4/8/12/16/20%), pero se activa 6/7/8/9/10 veces por minuto según el rango (antes siempre 20). La descripción ahora muestra tu probabilidad por golpe según la velocidad del arma de la mano principal: con 5 puntos indica un 60% con un arma de 3.6 y un 33% con una de 2.0;
- **Rage of the Storm**, la maza a dos manos que el chamán recibe en una misión, ahora tiene 16 de Fuerza en lugar de Intelecto y velocidad 3.6 (antes 3.2).

Las notas de Blizzard, en resumen: los cambios de la beta a Enhancement, junto con los de Shock y Lightning Bolt pensados para el chamán Elemental, habían empujado a la especialización hacia el equipo con poder con hechizos e Intelecto y la habían alejado de Windfury, que para Blizzard debe seguir siendo el centro de la especialización. Hacerlo ahora importa por la primera banda: Blizzard no quiere que los jugadores se disputen y ganen objetos que perderían valor tras un cambio posterior. Muchos de estos cambios deshacen ajustes de la beta pensados precisamente para Enhancement.

## Si estás subiendo un chamán Enhancement {#subir-nivel}

- A partir de ahora busca equipo con **Fuerza y poder de ataque**, como aconsejó Blizzard el 6 de noviembre. Lo ideal para la especialización, según Blizzard, es Fuerza o poder de ataque con algo de Intelecto o poder con hechizos, no el equipo de lanzador: Mental Dexterity ahora convierte en poder de ataque un tercio menos de Intelecto.
- Si tienes o vas a conseguir **Rage of the Storm**, ahora es un arma lenta con Fuerza.
- **Maelstrom Weapon** da el 20% por acumulación ya desde el primer rango, pero cuántas veces se activa depende de los puntos: 6 veces por minuto con uno, 10 con cinco. Con un arma más lenta en la mano principal sube la probabilidad por golpe; la descripción te muestra la tuya.
- Ya no tienes que elegir entre la mejora de arma y un tótem de arma: Windfury Weapon y Windfury Totem ahora funcionan juntos.

## Ajustes menores del 10 de noviembre {#menores}

- **Druida**: Omen of Clarity vuelve a activarse después de cambiar de especialización; **Restoration**: Nature's Swiftness también hace instantáneo Wild Growth.
- **Paladín**: Redoubt se puede seguir en el Cooldown Manager.
- **Sacerdote**: el encantamiento Revelation ya no se activa con las sanaciones de Vampiric Embrace; **Holy**: Holy Nova se desaprende bien cuando quitas el talento.
- **Guerrero Arms**: Sweeping Strikes ya no pierde cargas si no golpea a un segundo objetivo.

## Los ajustes de clase de los demás días {#otros-dias}

El mismo hilo de hotfixes se actualiza cada día. Para las clases:

- **6 de noviembre**: Bloom cura al objetivo (druida); Arcane Blast dura de verdad 18 segundos (mago); el Voidwalker gana unos 40 puntos de salud y Soul Siphon ya no hace que Wrack aumente su propio daño (brujo).
- **9 de noviembre**: los ticks en el suelo de Flamestrike ya no consumen Clearcasting y la probabilidad de Arcane Concentration ahora se reparte entre el lanzamiento y cada proyectil, en lugar de un 10% en cada uno (mago); Shadowform ya no se rompe al lanzar Fear Ward y Power Infusion ahora se mantiene en los aliados (sacerdote); Lightning Overload hace el daño correcto con Lightning Bolt (chamán).
- **11 de noviembre**: Judgement cuenta como ataque a distancia, usa tu probabilidad de golpe a distancia y ya no activa los efectos de objetos y habilidades ligados a los ataques cuerpo a cuerpo (paladín); Unsealed Fury ya no genera ecos de los ataques de Windfury Totem, un cambio que Blizzard vincula a una corrección de Windfury Totem con Holy Strike (Retribution); Rend and Tear funciona con el sangrado de Pounce (druida Feral); Volley ya no activa efectos y se interrumpe si te mueves (cazador); Confounding Flash (gnomo) y Twilight Focus funcionan en Shadowform (sacerdote); Flametongue Totem Rank 2 funciona (chamán).

## Lo que sigue abierto {#abierto}

- **Más martes**: Blizzard prevé más cambios de equilibrio de clases los martes, solo si hacen falta.
- **Talentos de chamán y druida**: en una entrevista con Crix publicada el 6 de noviembre, [según el resumen de Wowhead](${WOWHEAD_SHAMAN}), Kris Zierhut dijo que no le sorprendería que los talentos del chamán se revisaran "early next year", con un parche y no antes, con algunos ajustes antes, cuando tengan datos de las bandas. Según el mismo resumen, los talentos del druida también están entre los que se revisarán a principios del año que viene, y Zierhut admite que quitar Lava Burst al chamán Elemental fue una decisión de última hora que necesitaba más trabajo. [La entrevista está en YouTube](${CRIX}).
- **Nuestro calculador**: los valores de los talentos cambiados el 10 de noviembre aún no están en nuestro [calculador de talentos](/es/builder). Para un panorama de las clases tienes nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes), y los cambios de clase anteriores están en el artículo sobre los [hotfixes del 28 y 30 de octubre](/es/news/class-hotfixes-october-28-30).`,
  ),
  faq: {
    en: [
      {
        q: "Were Hunter pets buffed or nerfed in WoW Forever on 10 November?",
        a: "Their health went down. A bug gave pets 150% of their normal health; the hotfix of 10 November sets it to 115%. On the same day Arcane Shot and Summon Hawk moved to 11% of base mana, and the hawk's melee damage rose by about 80%.",
      },
      {
        q: "What stats should an Enhancement Shaman use in WoW Forever?",
        a: "Strength and Attack Power. After the hotfix of 10 November, Mental Dexterity turns a third less Intellect into Attack Power, and Blizzard says the spec's best items should have Strength or Attack Power with some Intellect or Spell Power.",
      },
      {
        q: "How does Wrack work after the 10 November hotfix?",
        a: "It deals 30% less damage and no longer increases your DoT damage. While you channel it, Corruption, Siphon Life and Bane of Agony on the target deal damage twice as often for the same duration, and the time skipped is kept if the channel stops.",
      },
    ],
    it: [
      {
        q: "I famigli del Cacciatore sono stati potenziati o indeboliti in WoW Forever il 10 novembre?",
        a: "Hanno meno vita. Un bug dava ai famigli il 150% della vita normale; l'hotfix del 10 novembre la porta al 115%. Lo stesso giorno Arcane Shot e Summon Hawk sono passati all'11% del mana base, e il danno in mischia del falco è salito di circa l'80%.",
      },
      {
        q: "Quali statistiche deve usare uno Sciamano Enhancement in WoW Forever?",
        a: "Forza e potere d'attacco. Dopo l'hotfix del 10 novembre Mental Dexterity trasforma in potere d'attacco un terzo di Intelletto in meno, e secondo Blizzard gli oggetti migliori per la specializzazione hanno Forza o potere d'attacco con un po' di Intelletto o potere magico.",
      },
      {
        q: "Come funziona Wrack dopo l'hotfix del 10 novembre?",
        a: "Fa il 30% di danno in meno e non aumenta più il danno dei DoT. Mentre lo canalizzate, Corruption, Siphon Life e Bane of Agony sul bersaglio fanno danno il doppio delle volte con la stessa durata, e il tempo saltato resta anche se il canale si interrompe.",
      },
    ],
    es: [
      {
        q: "¿Las mascotas del cazador mejoraron o empeoraron en WoW Forever el 10 de noviembre?",
        a: "Tienen menos salud. Un error les daba el 150% de su salud normal; el hotfix del 10 de noviembre la deja en el 115%. Ese mismo día Arcane Shot y Summon Hawk pasaron a costar el 11% del maná base, y el daño cuerpo a cuerpo del halcón subió alrededor de un 80%.",
      },
      {
        q: "¿Qué atributos debe usar un chamán Enhancement en WoW Forever?",
        a: "Fuerza y poder de ataque. Tras el hotfix del 10 de noviembre, Mental Dexterity convierte en poder de ataque un tercio menos de Intelecto, y según Blizzard los mejores objetos de la especialización tienen Fuerza o poder de ataque con algo de Intelecto o poder con hechizos.",
      },
      {
        q: "¿Cómo funciona Wrack tras el hotfix del 10 de noviembre?",
        a: "Hace un 30% menos de daño y ya no aumenta el daño de tus DoT. Mientras lo canalizas, Corruption, Siphon Life y Bane of Agony en el objetivo hacen daño el doble de veces con la misma duración, y el tiempo saltado se conserva aunque el canal se corte.",
      },
    ],
  },
};

export default item;

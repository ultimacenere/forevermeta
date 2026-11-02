import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Hotfix di classe del 28 e del 30 ottobre 2026 sui server del lancio, senza note ufficiali: `source: "site"`, perché
 * li raccontiamo noi dai dati di hotfix letti da Wowhead (383641 e 383670), wowsims (PR 744) e foreverchanges.pro, e
 * dal file di talentsforever.com del 30/10 (build 1.60.1.70630 più hotfix) importato nel builder il 2/11. Le differenze
 * per classe vengono dal confronto fra i nostri JSON alla 70425 e quelli nuovi (scratchpad del 2/11, script n2-diff);
 * gli effetti sulle build vengono da `code.ts` (`codeSlots`) e da `sanitize` in `engine.ts`, provati su codici vecchi.
 * Niente è verificato in gioco: la beta è chiusa e il gioco esce il 4/11. Il Fuoco "a zero" è il risultato di un
 * codice di prova con 5 punti in Improved Fireball e 37 nel Fuoco.
 */
const DEV_NOTES = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696";
const BLIZZARD_HOTFIXES = "https://news.blizzard.com/en-us/article/24307310/hotfixes-october-30-2026";
const WOWHEAD_28 = "https://www.wowhead.com/news=383641/new-class-and-item-tuning-on-wow-forever-hunter-changes";
const WOWHEAD_30 = "https://www.wowhead.com/news=383670/massive-talent-tree-changes-to-druids-and-paladins-class-tuning-for-wow-forever";
const WOWSIMS = "https://github.com/wowsims/forever/pull/744";
const FOREVERCHANGES = "https://foreverchanges.pro/patch-notes";
const TALENTSFOREVER = "https://talentsforever.com/";

const item: NewsItem = {
  slug: "class-hotfixes-october-28-30",
  date: "2026-10-30",
  source: "site",
  topic: "beta",
  url: "/builder",
  image: media.classHotfixes.src,
  imageAlt: media.classHotfixes.alt,
  guides: ["wow-forever-races-classes"],
  title: n(
    "WoW Forever class hotfixes of 28 and 30 October: Paladin trees rebuilt, Berserk gone, builder updated",
    "Hotfix di classe di WoW Forever del 28 e 30 ottobre: Paladino rifatto, via Berserk, builder aggiornato",
    "Hotfixes de clase de WoW Forever del 28 y 30 de octubre: paladín rehecho, adiós a Berserk y builder al día",
  ),
  metaTitle: n("WoW Forever class hotfixes, 28 and 30 October", "WoW Forever: hotfix di classe del 28 e 30 ottobre", "WoW Forever: hotfixes de clase del 28 y 30 de octubre"),
  summary: n(
    "On 28 and 30 October 2026 Blizzard changed several classes directly on the launch realms, without patch notes: the Paladin's three talent trees were rebuilt, Druids lost Berserk and gained Bloom, and Mages lost Arcane Focus. Wowhead, wowsims and foreverchanges read the changes from the game's hotfix data, and our talent builder has had them since 2 November. Nothing has been checked in game yet.",
    "Il 28 e il 30 ottobre 2026 Blizzard ha cambiato diverse classi direttamente sui server del lancio, senza note di patch: i tre alberi dei talenti del Paladino sono stati rifatti, il Druido ha perso Berserk e ha ricevuto Bloom, il Mago ha perso Arcane Focus. Wowhead, wowsims e foreverchanges hanno letto i cambi dai dati di hotfix del gioco, e il nostro builder dei talenti li ha dal 2 novembre. Niente è ancora verificato in gioco.",
    "El 28 y el 30 de octubre de 2026 Blizzard cambió varias clases directamente en los servidores del lanzamiento, sin notas del parche: los tres árboles de talentos del paladín se rehicieron, el druida perdió Berserk y ganó Bloom, y el mago perdió Arcane Focus. Wowhead, wowsims y foreverchanges leyeron los cambios en los datos de hotfix del juego, y nuestro calculador de talentos los tiene desde el 2 de noviembre. Nada está comprobado todavía en el juego.",
  ),
  description: n(
    "WoW Forever class hotfixes of 28 and 30 October 2026, with no patch notes: Paladin trees rebuilt, Druid and Mage talents gone, and what it means for builds.",
    "Hotfix di classe di WoW Forever del 28 e 30 ottobre 2026, senza note: alberi del Paladino rifatti, talenti tolti a Druido e Mago, e cosa cambia per le build.",
    "Hotfixes de clase de WoW Forever del 28 y 30 de octubre de 2026, sin notas: paladín rehecho, talentos fuera para druida y mago, y qué pasa con las builds.",
  ),
  highlights: {
    en: [
      { label: "No patch notes", text: "read from the hotfix data, not verified in game", anchor: "how" },
      { label: "Paladin", text: "three trees rebuilt, six new talents, five removed", anchor: "paladin" },
      { label: "Druid", text: "Berserk gone, Bloom and Predatory Discipline arrive", anchor: "druid" },
      { label: "Mage", text: "Arcane Focus gone, Improved Fireball becomes Accelerant", anchor: "mage" },
      { label: "Other classes", text: "Holy Binding for Priests, Trueshot Aura halved, Warriors and Rogues untouched", anchor: "others" },
      { label: "Your builds", text: "points on removed talents are lost and come back to spend", anchor: "builds" },
    ],
    it: [
      { label: "Senza note di patch", text: "letti dai dati di hotfix, non verificati in gioco", anchor: "come" },
      { label: "Paladino", text: "tre alberi rifatti, sei talenti nuovi e cinque tolti", anchor: "paladino" },
      { label: "Druido", text: "via Berserk, arrivano Bloom e Predatory Discipline", anchor: "druido" },
      { label: "Mago", text: "via Arcane Focus, Improved Fireball diventa Accelerant", anchor: "mago" },
      { label: "Le altre classi", text: "Holy Binding per il Sacerdote, Trueshot Aura dimezzata, Guerriero e Ladro invariati", anchor: "altre-classi" },
      { label: "Le vostre build", text: "i punti sui talenti tolti si perdono e tornano da spendere", anchor: "build" },
    ],
    es: [
      { label: "Sin notas del parche", text: "leídos en los datos de hotfix, sin comprobar en el juego", anchor: "como" },
      { label: "Paladín", text: "tres árboles rehechos, seis talentos nuevos y cinco fuera", anchor: "paladin" },
      { label: "Druida", text: "adiós a Berserk, llegan Bloom y Predatory Discipline", anchor: "druida" },
      { label: "Mago", text: "adiós a Arcane Focus, Improved Fireball pasa a ser Accelerant", anchor: "mago" },
      { label: "Las demás clases", text: "Holy Binding para el sacerdote, Trueshot Aura a la mitad, guerrero y pícaro sin cambios", anchor: "otras-clases" },
      { label: "Tus builds", text: "los puntos en talentos eliminados se pierden y vuelven para gastarlos", anchor: "builds" },
    ],
  },
  body: n(
    `On 28 and 30 October 2026, with the beta closed and the launch on 4 November days away, Blizzard changed several classes directly on the launch realms, the ones already open for name reservations. There are no official patch notes: the [development notes topic](${DEV_NOTES}) is closed and does not mention them, and Blizzard's ["Hotfixes: October 30"](${BLIZZARD_HOTFIXES}) article has no entry for Forever. What we know comes from the game's hotfix data, read by Wowhead ([28 October](${WOWHEAD_28}), [30 October](${WOWHEAD_30})), [wowsims](${WOWSIMS}) and [foreverchanges](${FOREVERCHANGES}). [talentsforever.com](${TALENTSFOREVER}), the CC BY 4.0 source of our builder, regenerated its data on 30 October from build 1.60.1.70630 plus the hotfixes, and **our [talent builder](/en/builder) has used it since 2 November**. None of this has been checked in game: the beta is over and the game launches on 4 November.

## Where these changes come from {#how}

A hotfix is a change the servers send without a new game client, so the only official way to know about it is Blizzard's notes, and this time there are none. Wowhead, wowsims and foreverchanges read the hotfix data the realms send; talentsforever checked its trees talent by talent against Wowhead's calculator. The Mage changes appeared on 28 October, the Paladin, Druid and Priest ones on 30 October. The list below is what changes between the data our builder used until 1 November (build 1.60.1.70425, 20 October) and the new data. Talent names stay in English, as in the game; the effects are described in our own words. The same hotfix data also carries the racial pass announced on 26 and 27 October, which is in our [article on the racials](/en/news/racials-final-pass-october-26).

## Paladin: three trees rebuilt {#paladin}

The biggest change, on 30 October: six talents are new, five leave the trees, three change tree and most of the others change place.

- **Holy**: **Oath of Light** (row 4) is an oath on one ally at a time, for 5 minutes, that makes your Holy Light, Flash of Light and Holy Shock heal them more; **Boundless Light** (row 5, 2 ranks, after Holy Shock) raises Holy Shock's critical chance by up to 30% on allies without your Oath. **Holy Power** now raises the critical healing bonus of Holy spells, up to 50%, instead of critical chance. **Divine Precision** drops to 2 ranks and no longer needs Holy Shock: 8% hit with Holy spells instead of 18%, plus shorter Silences. **Light's Vigil** now works on allies only. **Voice of Truth** leaves the tree: according to foreverchanges, trainers teach it at level 20.
- **Protection**: **Stoicism** (row 5, 2 ranks) makes stuns and charms on you up to 20% shorter; **Shieldsworn** (row 7, after Holy Shield) takes 4 seconds off Holy Strike's cooldown and makes it strike with your shield, triggering Holy Shield and Shield Specialization without spending their charges, and lets you block spells for 6 seconds. **Holy Shield** moves up from row 7 to row 5 and no longer needs Templar's Bulwark. **Swift Judgement** is reworked (it releases a Seal's Judgement without consuming the Seal) and **Sacred Duty** no longer gives Stamina. **Improved Seal of Fury** and **One-Handed Weapon Specialization** are gone.
- **Retribution**: **Turn Evil** (row 5, 2 ranks) makes Turn Undead 1 second faster, takes 10 seconds off its cooldown and lets it work on Demons; **Unsealed Wrath** (row 7, after Repentance), which foreverchanges reads as Twist of Light renamed and reworked, stores your active Seal on your attacks up to 3 times and releases the stacks when you strike with another Seal. **Conviction** goes from 5 ranks to 3 but now covers spells as well (6%); **Two-Handed Weapon Specialization** raises all physical damage and lowers threat; **Champion of the Light** goes to 5 ranks and also shortens the cast of Hammer of Wrath. **Instrument of Law** and **Twist of Light** are gone.
- **Changing tree**: Holy Conduit moves from Retribution to Holy, Divine Intellect from Holy to Protection, Unyielding Faith from Holy to Retribution.
- **Ranks**: Spiritual Focus (2 → 5) and Improved Seals (3 → 5) get more ranks for the same maximum; Reverence (3 → 2), Shield Specialization (3 → 2), Iron Creed (5 → 3) and Conviction (5 → 3) get fewer.

## Druid: Berserk gone, Bloom arrives {#druid}

- **Feral Combat**: **Berserk** and **Improved Shifting Power** leave the tree. **Primal Bite** moves from row 4 to row 7, under Leader of the Pack, and hits harder. **Shifting Power** also moves to row 7 and now needs the new **Predatory Discipline** (row 4), which stops Ferocious Bite from spending your extra Energy while keeping its bonus damage; according to foreverchanges, Shifting Power's cooldown halves, from 16 to 8 seconds. **Lacerate** becomes a talent in row 4, after Savage Fury. **Furor** arrives from Restoration, and **Leader of the Pack** now raises every kind of critical strike chance, spells included.
- **Restoration**: **Gift of the Earthmother** is gone, and in its place comes **Bloom**: when your Rejuvenation or Regrowth runs out, the target is healed for 100% of your Spirit (50% if it was dispelled). **Heart of the Wild** moves here from Feral. **Naturalist** doubles its damage bonus (up to 10%) and also shortens Wild Growth, which according to Wowhead and foreverchanges now has a 3-second cast instead of being instant.
- **Balance**: **Genesis** doubles (up to 10% periodic damage and healing), and **Moonkin Form**'s aura now covers every kind of critical strike.

## Mage: Arcane Focus gone {#mage}

The Mage tree changed shape on 28 October (build 1.60.1.70685, according to foreverchanges and wowsims), and more numbers moved on the 30th.

- **Arcane Focus** leaves the tree. **Improved Fireball** becomes **Accelerant**, which also speeds up Arcane Wrath, and **Elemental Precision** becomes **Precision**: up to 6% hit chance with all spells, not just Frost and Fire.
- **Arcane Resilience** goes to 3 ranks (armor up to 75% of your Intellect, was 50%) and moves to row 1; **Missile Barrage** moves to row 2; **Improved Fire Blast** goes from row 1 to row 3.
- **Incineration** grows from 3 to 5 ranks (up to 10% critical chance, was 6%), and **Critical Mass** shrinks from 5 to 3 (up to 6%, was 10%).
- **Frost**: Ice Lance deals 300% more damage to frozen targets (was 200%), Winter's Chill adds 20% per stack (was 5%), Ice Barrier raises Frost damage by 15% (was 3%) and Arctic Reach now covers Ice Lance too. **Arcane Blast** gives less spell damage per stack (12% of your Intellect, was 15%), but its cost grows more slowly and it lasts 18 seconds instead of 15.

## The other classes {#others}

- **Priest**: **Binding Heal** leaves the Holy tree (according to foreverchanges, trainers teach it at level 25), and in its place comes **Holy Binding**: when your Flash Heal heals someone else, you are healed for half as much.
- **Hunter**: **Trueshot Aura** gives 15 ranged attack power instead of 30, and **Pathfinding** moves from row 2 to row 3 in Beast Mastery.
- **Warlock**: **Improved Drains** now covers Drain Mana instead of Wrack, and in the new data **Amplify Curse** boosts Curse of Exhaustion by 20% (the old data said 50%).
- **Shaman**: only reworded texts, with the same numbers.
- **Warrior** and **Rogue**: no talent changes.
- **Outside the talents** (not in our builder and not verified): Wowhead and foreverchanges report that on 28 October **Aspect of the Hawk** started giving about half its ranged attack power, and that the alchemy **Elixir of Wisdom** gives 3 Intellect for 30 minutes, where it gave 6 for an hour.

## What happens to your builds {#builds}

Every build code, the part after \`#FW1\` in a builder link, is read with the new data, and so are the codes of the builds published on our [build pages](/en/builds). This is what the builder does:

1. **Each digit of the code belongs to one talent.** A talent that left the tree, or moved to another tree, keeps an empty place in the code: its points are lost, but the other digits do not slide onto the wrong talent.
2. **A renamed talent counts as a new one.** Accelerant, Precision, Holy Binding and Unsealed Wrath start at zero, so the points in Improved Fireball, Elemental Precision, Binding Heal and Twist of Light are lost.
3. **The builder then rebuilds the build row by row**, following the rules: a point that no longer fits (a row that no longer opens, a missing prerequisite, as for Shifting Power, which now needs Predatory Discipline) is dropped, together with the points that depended on it. Ranks above the new maximum are cut: 5 points in Conviction become 3.
4. **The lost points become free points** to spend again. The builder does not say which ones it removed: if you copied your old build as text, compare it with the new one.

The worst case is the Fire Mage: if a build had 5 points in Improved Fireball, in the first row, they vanish, and without them the following rows no longer open. In our test, a code with 37 points in Fire came back with none. Druids lose Furor if they had it in Restoration and Heart of the Wild if they had it in Feral, Paladins lose the points in the talents that changed tree, and Hunter builds stay as they were unless they had Pathfinding with fewer than 10 points in Beast Mastery.

The builds published on our build pages keep the code and the game build they were published with, which their page shows; the trees and talents on the page are drawn with the new data, with the losses described above. The author can open the build in the builder, spend the points again and update it.

## What we don't know yet {#unknown}

- **Whether these are the launch values**: none of this is in official notes and nothing has been checked in game. Blizzard can still change things before 4 November or publish notes at launch; from 4 November we will check every tree in game.
- **Some amounts live on the servers**: according to foreverchanges, the healing bonus of Oath of Light is not in the data.
- **The names**: the new talents are not translated in the game yet; in our builder they keep their English name.`,
    `Il 28 e il 30 ottobre 2026, con la beta chiusa e il lancio del 4 novembre a pochi giorni, Blizzard ha cambiato diverse classi direttamente sui server del lancio, quelli già aperti per la prenotazione dei nomi. Non ci sono note di patch ufficiali: il [topic delle note di sviluppo](${DEV_NOTES}) è chiuso e non ne parla, e l'articolo di Blizzard ["Hotfixes: October 30"](${BLIZZARD_HOTFIXES}) non ha voci per Forever. Quello che sappiamo viene dai dati di hotfix del gioco, letti da Wowhead ([28 ottobre](${WOWHEAD_28}), [30 ottobre](${WOWHEAD_30})), [wowsims](${WOWSIMS}) e [foreverchanges](${FOREVERCHANGES}). [talentsforever.com](${TALENTSFOREVER}), la fonte con licenza CC BY 4.0 del nostro builder, ha rigenerato i suoi dati il 30 ottobre dalla build 1.60.1.70630 più gli hotfix, e **il nostro [builder dei talenti](/it/builder) li usa dal 2 novembre**. Niente di tutto questo è verificato in gioco: la beta è finita e il gioco esce il 4 novembre.

## Da dove vengono questi cambi {#come}

Un hotfix è una modifica che i server mandano senza un client nuovo, quindi l'unico modo ufficiale per saperlo sono le note di Blizzard, e stavolta non ci sono. Wowhead, wowsims e foreverchanges hanno letto i dati di hotfix che mandano i reami; talentsforever ha controllato i suoi alberi talento per talento sul calcolatore di Wowhead. I cambi del Mago sono comparsi il 28 ottobre, quelli di Paladino, Druido e Sacerdote il 30. Qui sotto c'è quello che cambia fra i dati che il nostro builder usava fino al 1° novembre (build 1.60.1.70425 del 20 ottobre) e i dati nuovi. I nomi dei talenti restano in inglese, come nel gioco; gli effetti li raccontiamo con parole nostre. Gli stessi dati di hotfix contengono anche la revisione delle razziali annunciata il 26 e il 27 ottobre, che è nel nostro [articolo sulle razziali](/it/news/racials-final-pass-october-26).

## Paladino: tre alberi rifatti {#paladino}

Il cambio più grande, del 30 ottobre: sei talenti nuovi, cinque che escono dagli alberi, tre che cambiano albero e la maggior parte degli altri che cambia posto.

- **Holy**: **Oath of Light** (fila 4) è un giuramento su un alleato alla volta, per 5 minuti, che fa curare di più su di lui Holy Light, Flash of Light e Holy Shock; **Boundless Light** (fila 5, 2 ranghi, dopo Holy Shock) alza fino al 30% la probabilità di critico di Holy Shock sugli alleati senza il tuo Oath. **Holy Power** ora alza il bonus delle cure critiche degli incantesimi Holy, fino al 50%, invece della probabilità di critico. **Divine Precision** scende a 2 ranghi e non chiede più Holy Shock: 8% di probabilità di colpire con gli incantesimi Holy invece del 18%, più Silence più brevi. **Light's Vigil** ora funziona solo sugli alleati. **Voice of Truth** esce dall'albero: secondo foreverchanges la insegnano gli allenatori al livello 20.
- **Protection**: **Stoicism** (fila 5, 2 ranghi) accorcia fino al 20% stordimenti e ammaliamenti subiti; **Shieldsworn** (fila 7, dopo Holy Shield) toglie 4 secondi alla ricarica di Holy Strike e la fa colpire con lo scudo, attivando Holy Shield e Shield Specialization senza consumarne le cariche, e permette di bloccare gli incantesimi per 6 secondi. **Holy Shield** sale dalla fila 7 alla 5 e non chiede più Templar's Bulwark. **Swift Judgement** è rifatto (scatena il Judgement di un Seal senza consumarlo) e **Sacred Duty** non dà più Tempra. Spariscono **Improved Seal of Fury** e **One-Handed Weapon Specialization**.
- **Retribution**: **Turn Evil** (fila 5, 2 ranghi) rende Turn Undead più rapido di 1 secondo, ne toglie 10 alla ricarica e lo fa funzionare sui Demoni; **Unsealed Wrath** (fila 7, dopo Repentance), che per foreverchanges è Twist of Light rinominato e rifatto, conserva sui tuoi attacchi il Seal attivo fino a 3 volte e libera gli accumuli quando colpisci con un altro Seal. **Conviction** passa da 5 ranghi a 3 ma ora vale anche per gli incantesimi (6%); **Two-Handed Weapon Specialization** alza tutti i danni fisici e abbassa la minaccia; **Champion of the Light** sale a 5 ranghi e accorcia anche il lancio di Hammer of Wrath. Spariscono **Instrument of Law** e **Twist of Light**.
- **Cambiano albero**: Holy Conduit passa da Retribution a Holy, Divine Intellect da Holy a Protection, Unyielding Faith da Holy a Retribution.
- **Ranghi**: Spiritual Focus (2 → 5) e Improved Seals (3 → 5) hanno più ranghi per lo stesso massimo; Reverence (3 → 2), Shield Specialization (3 → 2), Iron Creed (5 → 3) e Conviction (5 → 3) ne hanno meno.

## Druido: via Berserk, arriva Bloom {#druido}

- **Feral Combat**: escono dall'albero **Berserk** e **Improved Shifting Power**. **Primal Bite** scende dalla fila 4 alla 7, sotto Leader of the Pack, e colpisce più forte. Anche **Shifting Power** va in fila 7 e ora chiede il nuovo **Predatory Discipline** (fila 4), che impedisce a Ferocious Bite di spendere l'Energia in più ma gli lascia il danno extra; secondo foreverchanges la ricarica di Shifting Power si dimezza, da 16 a 8 secondi. **Lacerate** diventa un talento in fila 4, dopo Savage Fury. **Furor** arriva da Restoration, e **Leader of the Pack** ora alza ogni tipo di probabilità di critico, incantesimi compresi.
- **Restoration**: sparisce **Gift of the Earthmother** e al suo posto arriva **Bloom**: quando il tuo Rejuvenation o Regrowth finisce, il bersaglio viene curato per il 100% del tuo Spirito (il 50% se è stato dissolto). **Heart of the Wild** arriva qui dal Feral. **Naturalist** raddoppia il bonus ai danni (fino al 10%) e accorcia anche Wild Growth, che secondo Wowhead e foreverchanges ora ha 3 secondi di lancio invece di essere istantaneo.
- **Balance**: **Genesis** raddoppia (fino al 10% di danni e cure periodici), e l'aura di **Moonkin Form** ora vale per ogni tipo di critico.

## Mago: via Arcane Focus {#mago}

L'albero del Mago ha cambiato forma il 28 ottobre (build 1.60.1.70685, secondo foreverchanges e wowsims), e altri numeri si sono mossi il 30.

- Esce dall'albero **Arcane Focus**. **Improved Fireball** diventa **Accelerant**, che accelera anche Arcane Wrath, ed **Elemental Precision** diventa **Precision**: fino al 6% di probabilità di colpire con tutti gli incantesimi, non solo Frost e Fire.
- **Arcane Resilience** passa a 3 ranghi (armatura fino al 75% dell'Intelletto, era il 50%) e va in fila 1; **Missile Barrage** va in fila 2; **Improved Fire Blast** passa dalla fila 1 alla 3.
- **Incineration** cresce da 3 a 5 ranghi (fino al 10% di critico, era il 6%), e **Critical Mass** scende da 5 a 3 (fino al 6%, era il 10%).
- **Frost**: Ice Lance fa il 300% di danni in più ai bersagli congelati (era il 200%), Winter's Chill aggiunge il 20% per accumulo (era il 5%), Ice Barrier alza i danni Frost del 15% (era il 3%) e Arctic Reach ora vale anche per Ice Lance. **Arcane Blast** dà meno danni magici per accumulo (il 12% dell'Intelletto, era il 15%), ma il suo costo cresce più piano e dura 18 secondi invece di 15.

## Le altre classi {#altre-classi}

- **Sacerdote**: **Binding Heal** esce dall'albero Holy (secondo foreverchanges la insegnano gli allenatori al livello 25), e al suo posto arriva **Holy Binding**: quando il tuo Flash Heal cura qualcun altro, tu ricevi metà di quella cura.
- **Cacciatore**: **Trueshot Aura** dà 15 di potere d'attacco a distanza invece di 30, e **Pathfinding** passa dalla fila 2 alla 3 in Beast Mastery.
- **Stregone**: **Improved Drains** ora vale per Drain Mana invece che per Wrack, e nei dati nuovi **Amplify Curse** potenzia Curse of Exhaustion del 20% (i dati vecchi dicevano 50%).
- **Sciamano**: solo testi riscritti, con gli stessi numeri.
- **Guerriero** e **Ladro**: nessun cambio di talenti.
- **Fuori dai talenti** (non sono nel nostro builder e non sono verificati): Wowhead e foreverchanges riportano che dal 28 ottobre **Aspect of the Hawk** dà circa metà del suo potere d'attacco a distanza, e che l'**Elixir of Wisdom** di alchimia dà 3 di Intelletto per 30 minuti, dove ne dava 6 per un'ora.

## Cosa succede alle vostre build {#build}

Ogni codice di build, la parte dopo \`#FW1\` in un link del builder, si legge con i dati nuovi, e così i codici delle build pubblicate nelle nostre [pagine delle build](/it/builds). Ecco che cosa fa il builder:

1. **Ogni cifra del codice appartiene a un talento.** Un talento uscito dall'albero, o passato a un altro albero, tiene un posto vuoto nel codice: i suoi punti si perdono, ma le altre cifre non scivolano sul talento sbagliato.
2. **Un talento rinominato conta come nuovo.** Accelerant, Precision, Holy Binding e Unsealed Wrath partono da zero, quindi i punti in Improved Fireball, Elemental Precision, Binding Heal e Twist of Light si perdono.
3. **Poi il builder ricostruisce la build fila per fila**, secondo le regole: un punto che non ci sta più (una fila che non si apre più, un prerequisito che manca, come per Shifting Power, che ora chiede Predatory Discipline) viene tolto, insieme ai punti che dipendevano da lui. I ranghi oltre il nuovo massimo vengono tagliati: 5 punti in Conviction diventano 3.
4. **I punti persi tornano liberi** da spendere di nuovo. Il builder non dice quali ha tolto: se avevate copiato la vecchia build come testo, confrontatela con quella nuova.

Il caso peggiore è il Mago Fire: se una build aveva 5 punti in Improved Fireball, nella prima fila, spariscono, e senza di loro le file successive non si aprono più. Nella nostra prova un codice con 37 punti nel Fire è tornato con zero. Il Druido perde Furor se l'aveva in Restoration e Heart of the Wild se l'aveva nel Feral, il Paladino perde i punti nei talenti che hanno cambiato albero, e le build del Cacciatore restano come erano, a meno di avere Pathfinding con meno di 10 punti in Beast Mastery.

Le build pubblicate nelle nostre pagine delle build tengono il codice e la build del gioco con cui sono state pubblicate, che la loro pagina mostra; alberi e talenti della pagina si disegnano con i dati nuovi, con le perdite descritte sopra. L'autore può aprire la build nel builder, rispendere i punti e aggiornarla.

## Cosa non sappiamo ancora {#non-sappiamo}

- **Se questi sono i valori del lancio**: niente è nelle note ufficiali e niente è verificato in gioco. Blizzard può ancora cambiare qualcosa prima del 4 novembre o pubblicare le note al lancio; dal 4 novembre controlliamo ogni albero nel gioco.
- **Alcuni valori stanno sui server**: secondo foreverchanges, il bonus alle cure di Oath of Light non è nei dati.
- **I nomi**: il client non ha l'italiano, quindi i talenti nuovi restano in inglese anche nel gioco; nel nostro builder hanno la descrizione in italiano.`,
    `El 28 y el 30 de octubre de 2026, con la beta cerrada y el lanzamiento del 4 de noviembre a pocos días, Blizzard cambió varias clases directamente en los servidores del lanzamiento, los que ya están abiertos para la reserva de nombres. No hay notas del parche oficiales: el [tema de las notas de desarrollo](${DEV_NOTES}) está cerrado y no los menciona, y el artículo de Blizzard ["Hotfixes: October 30"](${BLIZZARD_HOTFIXES}) no tiene entradas para Forever. Lo que sabemos viene de los datos de hotfix del juego, leídos por Wowhead ([28 de octubre](${WOWHEAD_28}), [30 de octubre](${WOWHEAD_30})), [wowsims](${WOWSIMS}) y [foreverchanges](${FOREVERCHANGES}). [talentsforever.com](${TALENTSFOREVER}), la fuente con licencia CC BY 4.0 de nuestro calculador, regeneró sus datos el 30 de octubre a partir de la build 1.60.1.70630 más los hotfixes, y **nuestro [calculador de talentos](/es/builder) los usa desde el 2 de noviembre**. Nada de esto está comprobado en el juego: la beta ha terminado y el juego sale el 4 de noviembre.

## De dónde vienen estos cambios {#como}

Un hotfix es un cambio que mandan los servidores sin un cliente nuevo, así que la única forma oficial de conocerlo son las notas de Blizzard, y esta vez no hay. Wowhead, wowsims y foreverchanges leyeron los datos de hotfix que mandan los reinos; talentsforever comprobó sus árboles talento por talento con el calculador de Wowhead. Los cambios del mago aparecieron el 28 de octubre, y los del paladín, el druida y el sacerdote, el 30. Abajo está lo que cambia entre los datos que nuestro calculador usaba hasta el 1 de noviembre (build 1.60.1.70425, del 20 de octubre) y los datos nuevos. Los nombres de los talentos se quedan en inglés, como en nuestro calculador; los efectos los contamos con nuestras palabras. Los mismos datos de hotfix traen también la revisión de las raciales anunciada el 26 y el 27 de octubre, que está en nuestro [artículo sobre las raciales](/es/news/racials-final-pass-october-26).

## Paladín: tres árboles rehechos {#paladin}

El cambio más grande, del 30 de octubre: seis talentos nuevos, cinco que salen de los árboles, tres que cambian de árbol y la mayoría de los demás que cambian de sitio.

- **Holy**: **Oath of Light** (fila 4) es un juramento sobre un aliado cada vez, durante 5 minutos, que hace que tus Holy Light, Flash of Light y Holy Shock lo curen más; **Boundless Light** (fila 5, 2 rangos, después de Holy Shock) sube hasta un 30 % la probabilidad de crítico de Holy Shock en aliados sin tu Oath. **Holy Power** ahora sube la bonificación de las sanaciones críticas de los hechizos Holy, hasta un 50 %, en lugar de la probabilidad de crítico. **Divine Precision** baja a 2 rangos y ya no pide Holy Shock: un 8 % de probabilidad de golpe con hechizos Holy en lugar de un 18 %, y silencios más cortos. **Light's Vigil** ahora solo funciona en aliados. **Voice of Truth** sale del árbol: según foreverchanges, la enseñan los instructores a nivel 20.
- **Protection**: **Stoicism** (fila 5, 2 rangos) acorta hasta un 20 % los aturdimientos y los efectos de encanto que recibes; **Shieldsworn** (fila 7, después de Holy Shield) quita 4 segundos al tiempo de reutilización de Holy Strike y hace que golpee con el escudo, activando Holy Shield y Shield Specialization sin gastar sus cargas, y te deja bloquear hechizos durante 6 segundos. **Holy Shield** sube de la fila 7 a la 5 y ya no pide Templar's Bulwark. **Swift Judgement** se rehace (desata el Judgement de un Seal sin consumirlo) y **Sacred Duty** ya no da aguante. Desaparecen **Improved Seal of Fury** y **One-Handed Weapon Specialization**.
- **Retribution**: **Turn Evil** (fila 5, 2 rangos) hace Turn Undead 1 segundo más rápido, le quita 10 segundos de reutilización y lo hace funcionar con demonios; **Unsealed Wrath** (fila 7, después de Repentance), que según foreverchanges es Twist of Light con otro nombre y rehecho, guarda en tus ataques el Seal activo hasta 3 veces y suelta las acumulaciones cuando golpeas con otro Seal. **Conviction** pasa de 5 rangos a 3, pero ahora vale también para los hechizos (6 %); **Two-Handed Weapon Specialization** sube todo el daño físico y baja la amenaza; **Champion of the Light** sube a 5 rangos y además acorta el lanzamiento de Hammer of Wrath. Desaparecen **Instrument of Law** y **Twist of Light**.
- **Cambian de árbol**: Holy Conduit pasa de Retribution a Holy, Divine Intellect de Holy a Protection, Unyielding Faith de Holy a Retribution.
- **Rangos**: Spiritual Focus (2 → 5) e Improved Seals (3 → 5) tienen más rangos para el mismo máximo; Reverence (3 → 2), Shield Specialization (3 → 2), Iron Creed (5 → 3) y Conviction (5 → 3) tienen menos.

## Druida: adiós a Berserk, llega Bloom {#druida}

- **Feral Combat**: salen del árbol **Berserk** e **Improved Shifting Power**. **Primal Bite** baja de la fila 4 a la 7, debajo de Leader of the Pack, y pega más fuerte. **Shifting Power** también va a la fila 7 y ahora pide el nuevo **Predatory Discipline** (fila 4), que impide a Ferocious Bite gastar la Energía sobrante pero le deja el daño extra; según foreverchanges, el tiempo de reutilización de Shifting Power baja a la mitad, de 16 a 8 segundos. **Lacerate** pasa a ser un talento en la fila 4, después de Savage Fury. **Furor** llega desde Restoration, y **Leader of the Pack** ahora sube todo tipo de probabilidad de crítico, también la de los hechizos.
- **Restoration**: desaparece **Gift of the Earthmother** y en su lugar llega **Bloom**: cuando tu Rejuvenation o Regrowth termina, el objetivo se cura por el 100 % de tu Espíritu (el 50 % si se disipó). **Heart of the Wild** llega aquí desde Feral. **Naturalist** dobla su bonificación al daño (hasta un 10 %) y además acorta Wild Growth, que según Wowhead y foreverchanges ahora tiene 3 segundos de lanzamiento en lugar de ser instantáneo.
- **Balance**: **Genesis** se dobla (hasta un 10 % de daño y sanación periódicos), y el aura de **Moonkin Form** ahora vale para todo tipo de crítico.

## Mago: adiós a Arcane Focus {#mago}

El árbol del mago cambió de forma el 28 de octubre (build 1.60.1.70685, según foreverchanges y wowsims), y otros números se movieron el 30.

- Sale del árbol **Arcane Focus**. **Improved Fireball** pasa a ser **Accelerant**, que también acelera Arcane Wrath, y **Elemental Precision** pasa a ser **Precision**: hasta un 6 % de probabilidad de golpe con todos los hechizos, no solo los de Frost y Fire.
- **Arcane Resilience** pasa a 3 rangos (armadura de hasta el 75 % de tu Intelecto, era el 50 %) y va a la fila 1; **Missile Barrage** va a la fila 2; **Improved Fire Blast** pasa de la fila 1 a la 3.
- **Incineration** crece de 3 a 5 rangos (hasta un 10 % de crítico, era un 6 %), y **Critical Mass** baja de 5 a 3 (hasta un 6 %, era un 10 %).
- **Frost**: Ice Lance hace un 300 % más de daño a objetivos congelados (era un 200 %), Winter's Chill añade un 20 % por acumulación (era un 5 %), Ice Barrier sube el daño de Frost un 15 % (era un 3 %) y Arctic Reach ahora vale también para Ice Lance. **Arcane Blast** da menos daño de hechizos por acumulación (el 12 % de tu Intelecto, era el 15 %), pero su coste sube más despacio y dura 18 segundos en lugar de 15.

## Las demás clases {#otras-clases}

- **Sacerdote**: **Binding Heal** sale del árbol Holy (según foreverchanges, la enseñan los instructores a nivel 25), y en su lugar llega **Holy Binding**: cuando tu Flash Heal cura a otro, tú te curas la mitad.
- **Cazador**: **Trueshot Aura** da 15 de poder de ataque a distancia en lugar de 30, y **Pathfinding** pasa de la fila 2 a la 3 en Beast Mastery.
- **Brujo**: **Improved Drains** ahora vale para Drain Mana en lugar de Wrack, y en los datos nuevos **Amplify Curse** refuerza Curse of Exhaustion un 20 % (los datos antiguos decían un 50 %).
- **Chamán**: solo textos reescritos, con los mismos números.
- **Guerrero** y **pícaro**: sin cambios de talentos.
- **Fuera de los talentos** (no están en nuestro calculador y no están comprobados): Wowhead y foreverchanges cuentan que desde el 28 de octubre **Aspect of the Hawk** da más o menos la mitad de su poder de ataque a distancia, y que el **Elixir of Wisdom** de alquimia da 3 de Intelecto durante 30 minutos, cuando daba 6 durante una hora.

## Qué pasa con tus builds {#builds}

Cada código de build, la parte que va después de \`#FW1\` en un enlace del calculador, se lee con los datos nuevos, y lo mismo los códigos de las builds publicadas en nuestras [páginas de builds](/es/builds). Esto es lo que hace el calculador:

1. **Cada cifra del código pertenece a un talento.** Un talento que sale del árbol, o que pasa a otro árbol, deja un hueco vacío en el código: sus puntos se pierden, pero las demás cifras no se desplazan al talento equivocado.
2. **Un talento con otro nombre cuenta como nuevo.** Accelerant, Precision, Holy Binding y Unsealed Wrath empiezan en cero, así que los puntos en Improved Fireball, Elemental Precision, Binding Heal y Twist of Light se pierden.
3. **Después el calculador reconstruye la build fila por fila**, según las reglas: un punto que ya no cabe (una fila que ya no se abre, un requisito previo que falta, como en Shifting Power, que ahora pide Predatory Discipline) se quita, junto con los puntos que dependían de él. Los rangos por encima del nuevo máximo se recortan: 5 puntos en Conviction se quedan en 3.
4. **Los puntos perdidos vuelven a estar libres** para gastarlos otra vez. El calculador no dice cuáles ha quitado: si copiaste tu build antigua como texto, compárala con la nueva.

El peor caso es el mago de Fire: si una build tenía 5 puntos en Improved Fireball, en la primera fila, desaparecen, y sin ellos las filas siguientes ya no se abren. En nuestra prueba, un código con 37 puntos en Fire volvió con ninguno. El druida pierde Furor si lo tenía en Restoration y Heart of the Wild si lo tenía en Feral, el paladín pierde los puntos de los talentos que cambiaron de árbol, y las builds del cazador se quedan como estaban, salvo que tuvieran Pathfinding con menos de 10 puntos en Beast Mastery.

Las builds publicadas en nuestras páginas de builds mantienen el código y la build del juego con la que se publicaron, que su página muestra; los árboles y talentos de la página se dibujan con los datos nuevos, con las pérdidas que hemos descrito. Su autor puede abrirla en el calculador, volver a gastar los puntos y actualizarla.

## Lo que aún no sabemos {#no-sabemos}

- **Si estos son los valores del lanzamiento**: nada de esto está en notas oficiales y nada está comprobado en el juego. Blizzard todavía puede cambiar cosas antes del 4 de noviembre o publicar notas en el lanzamiento; desde el 4 de noviembre comprobaremos cada árbol en el juego.
- **Algunos valores están en los servidores**: según foreverchanges, la bonificación a la sanación de Oath of Light no está en los datos.
- **Los nombres**: los talentos nuevos todavía no tienen traducción en el juego, tampoco en español; en nuestro calculador conservan su nombre en inglés.`,
  ),
  faq: {
    en: [
      {
        q: "Why did my WoW Forever build lose points in the ForeverMeta builder?",
        a: "Because the hotfixes of 28 and 30 October 2026 removed, renamed or moved several talents. The builder reads old codes with the new data: points in talents that no longer exist or changed tree, and points that no longer fit the rules, are dropped and become free points to spend again.",
      },
      {
        q: "Did Blizzard publish patch notes for the WoW Forever class changes of 28 and 30 October?",
        a: "No. The changes were read from the game's hotfix data by Wowhead, wowsims and foreverchanges; Blizzard's notes do not mention them, and they have not been checked in game yet.",
      },
    ],
    it: [
      {
        q: "Perché la mia build di WoW Forever ha perso punti nel builder di ForeverMeta?",
        a: "Perché gli hotfix del 28 e del 30 ottobre 2026 hanno tolto, rinominato o spostato diversi talenti. Il builder legge i codici vecchi con i dati nuovi: i punti nei talenti che non esistono più o hanno cambiato albero, e quelli che non rispettano più le regole, vengono tolti e tornano liberi da spendere.",
      },
      {
        q: "Blizzard ha pubblicato note di patch per i cambi di classe di WoW Forever del 28 e 30 ottobre?",
        a: "No. I cambi sono stati letti dai dati di hotfix del gioco da Wowhead, wowsims e foreverchanges; le note di Blizzard non li citano e non sono ancora stati verificati in gioco.",
      },
    ],
    es: [
      {
        q: "¿Por qué mi build de WoW Forever ha perdido puntos en el calculador de ForeverMeta?",
        a: "Porque los hotfixes del 28 y el 30 de octubre de 2026 quitaron, renombraron o movieron varios talentos. El calculador lee los códigos antiguos con los datos nuevos: los puntos en talentos que ya no existen o que cambiaron de árbol, y los que ya no cumplen las reglas, se quitan y vuelven a estar libres para gastarlos.",
      },
      {
        q: "¿Publicó Blizzard notas del parche para los cambios de clase de WoW Forever del 28 y el 30 de octubre?",
        a: "No. Los cambios los leyeron en los datos de hotfix del juego Wowhead, wowsims y foreverchanges; las notas de Blizzard no los mencionan y todavía no se han comprobado en el juego.",
      },
    ],
  },
};

export default item;

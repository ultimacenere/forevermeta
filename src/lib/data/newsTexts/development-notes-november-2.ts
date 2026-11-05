import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Note di sviluppo "Updated November 2": post 9 di Kaivax (forum ufficiale US, 3/11/2026 03:20 UTC, cioè 2/11 19:20
 * PST), con la sezione User Interface and Accessibility aggiunta il 4/11 alle 19:35 UTC (post 10, che la annuncia; il
 * post 9 risulta modificato alle 19:35:27). Letti dal JSON Discourse del topic 2360696, chiuso. Gli effetti sulle build
 * vengono dal confronto fra i JSON dei talenti alla 70630 (import del 2/11) e alla 70755 (import del 5/11, commit
 * 7a6a856) e da prove di codici FW1 vecchi letti con `decodeBuild` sui dati nuovi. Raging Blows manca nei dati nuovi ma
 * le note non lo citano. Niente è verificato in gioco.
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-november-2/2360696/9";
const POST_10 = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-november-2/2360696/10";
const TALENTSFOREVER = "https://talentsforever.com/";

const item: NewsItem = {
  slug: "development-notes-november-2",
  date: "2026-11-03",
  updated: "2026-11-04",
  source: "blizzard",
  topic: "beta",
  url: "/builder",
  image: media.newsDevNotesNov2.src,
  imageAlt: media.newsDevNotesNov2.alt,
  guides: ["wow-forever-races-classes"],
  title: n(
    "WoW Forever development notes of 2 November: more damage for every class, Rogue rebuilt, Lava Burst gone",
    "Note di sviluppo di WoW Forever del 2 novembre: più danni per tutti, Ladro rifatto, via Lava Burst",
    "Notas de desarrollo de WoW Forever del 2 de noviembre: más daño para todos, pícaro rehecho, adiós a Lava Burst",
  ),
  metaTitle: n("WoW Forever development notes, 2 November", "WoW Forever: note di sviluppo del 2 novembre", "WoW Forever: notas de desarrollo del 2 de noviembre"),
  summary: n(
    "Blizzard's development notes of 2 November 2026, published just before WoW Forever's launch, raise damage for every class, give higher-level creatures more health and rule out big tuning changes before the raids open in December. The Rogue's three talent trees are rebuilt around the new Shank ability, Lava Burst leaves the Shaman and Paladins lose Salvation and Blessing of Light. Our talent builder has used the new trees since 5 November.",
    "Le note di sviluppo di Blizzard del 2 novembre 2026, uscite poco prima del lancio di WoW Forever, alzano i danni di tutte le classi, danno più vita alle creature di livello alto ed escludono grandi ritocchi prima dell'apertura delle incursioni a dicembre. I tre alberi del Ladro sono rifatti attorno alla nuova abilità Shank, lo Sciamano perde Lava Burst e il Paladino Salvation e Blessing of Light. Il nostro builder dei talenti usa gli alberi nuovi dal 5 novembre.",
    "Las notas de desarrollo de Blizzard del 2 de noviembre de 2026, publicadas poco antes del lanzamiento de WoW Forever, suben el daño de todas las clases, dan más salud a las criaturas de nivel alto y descartan grandes ajustes antes de que abran las bandas en diciembre. Los tres árboles del pícaro se rehacen en torno a la nueva habilidad Shank, el chamán pierde Lava Burst y el paladín, Salvation y Blessing of Light. Nuestro calculador de talentos usa los árboles nuevos desde el 5 de noviembre.",
  ),
  description: n(
    "WoW Forever development notes of 2 November 2026: more damage for every class, Rogue trees rebuilt, Lava Burst removed, and what changes for your builds.",
    "Note di sviluppo di WoW Forever del 2 novembre 2026: più danni per tutte le classi, Ladro rifatto, via Lava Burst, e cosa cambia per le vostre build.",
    "Notas de desarrollo de WoW Forever del 2 de noviembre de 2026: más daño para todas las clases, pícaro rehecho, adiós a Lava Burst y qué pasa con tus builds.",
  ),
  highlights: {
    en: [
      { label: "Every class", text: "more damage, more health for higher-level creatures, no big tuning before the raids", anchor: "general" },
      { label: "Rogue", text: "three trees rebuilt around Shank, Poised and Death Mark", anchor: "rogue" },
      { label: "Warrior", text: "Reckless Swings and Improved Whirlwind, 80% threat in Defensive Stance", anchor: "warrior" },
      { label: "Shaman", text: "Lava Burst out, Call of Thunder and Lightning Mastery in", anchor: "shaman" },
      { label: "The other classes", text: "Salvation and Blessing of Light removed, the late-October hotfixes made official", anchor: "others" },
      { label: "World", text: "faster respawns in low-level zones, bags no longer equip themselves", anchor: "world" },
      { label: "4 November", text: "nine interface and accessibility changes added to the post", anchor: "update" },
      { label: "Your builds", text: "codes still work, points on removed talents come back to spend", anchor: "builds" },
    ],
    it: [
      { label: "Tutte le classi", text: "più danni, più vita alle creature di livello alto, niente grandi ritocchi prima delle incursioni", anchor: "tutte-le-classi" },
      { label: "Ladro", text: "tre alberi rifatti attorno a Shank, Poised e Death Mark", anchor: "ladro" },
      { label: "Guerriero", text: "Reckless Swings e Improved Whirlwind, minaccia all'80% in Defensive Stance", anchor: "guerriero" },
      { label: "Sciamano", text: "via Lava Burst, arrivano Call of Thunder e Lightning Mastery", anchor: "sciamano" },
      { label: "Le altre classi", text: "via Salvation e Blessing of Light, ufficiali gli hotfix di fine ottobre", anchor: "altre-classi" },
      { label: "Mondo", text: "respawn più rapidi nelle zone basse, borse da equipaggiare a mano", anchor: "mondo" },
      { label: "4 novembre", text: "nove modifiche a interfaccia e accessibilità aggiunte al post", anchor: "aggiornamento" },
      { label: "Le vostre build", text: "i codici funzionano ancora, i punti dei talenti tolti tornano da spendere", anchor: "build" },
    ],
    es: [
      { label: "Todas las clases", text: "más daño, más salud para las criaturas de nivel alto, sin grandes ajustes antes de las bandas", anchor: "todas-las-clases" },
      { label: "Pícaro", text: "tres árboles rehechos en torno a Shank, Poised y Death Mark", anchor: "picaro" },
      { label: "Guerrero", text: "Reckless Swings e Improved Whirlwind, amenaza al 80 % en Defensive Stance", anchor: "guerrero" },
      { label: "Chamán", text: "adiós a Lava Burst, llegan Call of Thunder y Lightning Mastery", anchor: "chaman" },
      { label: "Las demás clases", text: "fuera Salvation y Blessing of Light, oficiales los hotfixes de finales de octubre", anchor: "otras-clases" },
      { label: "Mundo", text: "reapariciones más rápidas en las zonas bajas, bolsas que se equipan a mano", anchor: "mundo" },
      { label: "4 de noviembre", text: "nueve cambios de interfaz y accesibilidad añadidos al mensaje", anchor: "actualizacion" },
      { label: "Tus builds", text: "los códigos siguen funcionando, los puntos de talentos eliminados vuelven para gastarlos", anchor: "builds" },
    ],
  },
  body: n(
    `On 3 November 2026 at 03:20 UTC (still 2 November on the US west coast, hence the title "Updated November 2"), Kaivax, Community Manager at Blizzard, published the longest round so far of the official [WoW Forever development notes](${POST}). It gathers what changed in the two and a half weeks after the last full beta update, on 15 October, the racial pass of 26 and 27 October included, and it sets the class tuning Blizzard launched the game with on 4 November. On 4 November a [short follow-up](${POST_10}) added a section on the interface. **Our [talent builder](/en/builder) has used the new trees since 5 November**: the data comes from [talentsforever.com](${TALENTSFOREVER}), which generated it on 4 November from build 1.60.1.70755 of the game client. Talent and ability names stay in English, as in the game.

## Every class: more damage, then a pause {#general}

The first developer note explains the change of course. During the beta Blizzard tried to keep each class roughly within its Classic power budget, so every new element had to come at the expense of something else, and some iconic abilities ended up feeling weak. Over the last two weeks it has therefore **raised damage for classes across the game and given higher-level creatures more health** to compensate. The goal, Blizzard writes, is not perfect numerical equality but every class feeling valuable to the group it joins.

The second note matters to anyone planning a build: apart from bugs and serious outliers, **Blizzard does not plan big tuning changes before the raids open**, on 9 December. A large tuning pass based on the data will follow once enough players have levelled past 30.

For everyone, too:

- talents no longer have a lower chance to trigger from low-rank spells, except Blizzard cast at a rank learned more than 12 levels below yours;
- new spells are no longer placed on your action bars automatically;
- **training every class ability from 1 to 60 costs between 206 and 207 gold for every class**; for Warlocks, the expected cost of their pets' Grimoires is subtracted.

## Rogue: three trees rebuilt {#rogue}

The Rogue changes the most in this round, and none of it was in the late-October hotfixes.

- New ability **Shank** at level 24: 5 Energy, 10-second cooldown, an off-hand strike for 50% weapon damage that cannot miss and generates 15 Energy (25 with rank 2, at level 44).
- New passive **Poised** at level 18 (Druids get it at 32): out of combat and at full Energy, your next Energy ability costs 10 less. Deadly Poison and Instant Poison have their attack power coefficient doubled.
- **Assassination**: Murder is gone and **Blood Splatter** arrives (longer Rupture and Garrote). Relentless Strikes moves down to row 5 with 5 ranks, Lethality drops to 2 ranks and Seal Fate to 3. **Venom** moves up to row 5 and becomes a passive that boosts your poisons after a Shank, and **Mutilate** moves down to row 7, at 90% weapon damage.
- **Combat**: Improved Eviscerate becomes **Coup de Grace**, which also boosts Death Mark, and Improved Sinister Strike becomes **Efficient Strikes**. New **Composure** (Poised saves more Energy) and **Flash of Steel** (more Energy and a shorter cooldown for Shank). Dual Wield Specialization drops to 2 ranks (25/50% off-hand damage).
- **Subtlety**: Improved Distract, Quietus, Cutthroat and Thousand Cuts are gone. New **Quick Getaway** (one more Sap target, and speed after a Sap), **Boot Knife** (up to a 100% chance for Shank to add 2 combo points) and **Death Mark**, the new 31-point talent: a 25-Energy finishing move that stores part of your attacks' damage per combo point, twice as fast for Garrote and Rupture, and releases it after 6 seconds. Opportunity grows to 5 ranks, Camouflage drops to 3.

## Warrior {#warrior}

- Defensive Stance's threat bonus goes from 30% to **80%**; Slam's cooldown drops to 15 seconds (was 18).
- **Arms**: Improved Tactical Mastery drops to 3 ranks (up to 15 Rage kept when you change stance) and Bloodthrill to 2; Two-Handed Weapon Specialization doubles (up to 6%).
- **Fury**: new **Reckless Swings** (row 4: for 25% of your base health, your next 4 melee attacks generate 5 more Rage) and **Improved Whirlwind** (row 6: a shorter cooldown and up to 30% more damage to the closest enemy). Flurry drops to 3 ranks (10/20/30% attack speed) and no longer needs Death Wish, which Bloodthirst now requires.
- **Protection**: Defiance rises to 7/13/20% threat.
- In our builder's new data **Raging Blows** also leaves the Fury tree, from row 4, where Reckless Swings arrives. The notes do not mention it.

## Shaman: Lava Burst out {#shaman}

- **Lightning Bolt** hits harder at every rank, up to 80% more at the top rank; **Chain Lightning** now has a 2.5-second cast, with more damage and a higher mana cost. The Shocks go back to their Classic Era damage, and Totemic Projection becomes **Totemic Call**, which brings your totems to you.
- **Elemental**: **Lava Burst is removed** and replaced by **Call of Thunder** (5% critical chance for Lightning Bolt and Chain Lightning); **Elemental Mastery** is renamed **Lightning Mastery**. Lightning Overload rises to 10/20/30% (was 3/7/10%).
- **Enhancement**: Stormstrike deals 150% normalized weapon damage on a 6-second cooldown (was 100% and 8 seconds), and Maelstrom Weapon triggers twice as often.
- **Restoration**: Riptide no longer heals up front, only over time; it costs about 40% less mana and its cooldown goes from 6 to 12 seconds.

## Paladin, Druid, Mage and Priest {#others}

Many of these classes' talent changes are the ones we described from the hotfix data in our [article of 30 October](/en/news/class-hotfixes-october-28-30): the rebuilt Paladin trees with Oath of Light, Shieldsworn and Unsealed Wrath, Bloom and Predatory Discipline for Druids, Accelerant and Precision for Mages, Holy Binding for Priests. The notes now make them official, and add the following.

- **Paladin**: **Salvation, Mass Salvation, Revoke and Blessing of Light are removed**. Righteous Fury is learned at level 10 (was 16), like the other tanks' stances, and gives 33% more threat, plus 90% more from Holy damage. Templar's Bulwark becomes a magic effect that can be dispelled.
- **Druid**: bear threat goes from 50% to **115%**, to make up for the loss of Salvation; Poised arrives at level 32 and Lacerate becomes a Feral talent. Shred, Claw and Ravage deal more weapon damage (200%, 140% and 435%), Rip, Rake, Ferocious Bite and Pounce about 25% more, Starfire about 40% more.
- **Mage**: the **Frost Blast** spell is removed, and so is the Piercing Ice talent, which was already missing from the trees our builder used. **Ice Barrier** gives 15% more Frost damage for a minute when you cast it, plus 5% while it holds; Ice Lance has an 8-second cooldown shared with Fire Blast.
- **Priest**: Shadow Word: Death deals **30% of your maximum health** to you when it fails to kill (was 10%), but no longer hurts you when it misses.

## Hunter and Warlock {#hunter-warlock}

- **Hunter**: all traps share one 30-second cooldown. Aimed Shot gains about 110% bonus damage, Arcane Shot about 30%, Serpent Sting about 20%, and **Aspect of the Hawk** and **Trueshot Aura** give more ranged attack power again (up to 110 and 100), after the cuts read in the hotfix data at the end of October.
- **Warlock**: pets get **2 health per point of your Stamina** (was 7.5). Wrack's coefficient doubles (86 base damage per second at level 60, was 36), Shadow and Flame doubles (up to 20%), and Drain Soul grants Soul Shards much less often when it does not kill.

## Races, fixes and PvP {#fixes}

- The racial changes of 26 and 27 October are repeated in the post, unchanged: they are in our [article on the racials](/en/news/racials-final-pass-october-26). The Undead also get fixes to Cannibalize and Touch of the Grave.
- **Base stats**: every race now starts with the correct ones. Blizzard's example is the Tauren Warrior, with 5 more Strength than a Human Warrior instead of 2; the fix covers both Skyborne too.
- Roots from procs, such as Frostbite, Entrapment and Improved Hamstring, now have diminishing returns, and Throw uses a fixed 0.5-second windup.
- The Legacy reward Replica Ironforge Air Rifle has a shorter quitter debuff (40 seconds, was 5 minutes) and stun (2.5 seconds, was 3).
- **Bags** no longer equip themselves into free bag slots: you have to equip them by hand.
- **PvP**: in the [Darkspear Islands](/en/news/darkspear-islands-battleground-pvp-progression) battleground, dropping the flag no longer gives you the "Recently Dropped Flag" debuff.

## Gamepad {#gamepad}

Gamepad support is now a "functional Beta": all major gameplay and the core interface can be played with a controller, with settings in Edit Mode and in the Options. The fixes cover bags and inventory, ground-targeted items from the gamepad bar, ruleset selection and cinematics, the focus target (LB + RB + the bottom face button), friendly corpses and critters as targets, leaving a flight path early and the Pet Move command.

## Quests and world {#world}

- **Respawn rates** change in many areas: faster in low-level zones, fastest in the starting zones, then slower as you level up and players spread out. Blizzard will bring the low-level zones back to more typical rates once the launch surge has settled.
- Experience changes on various quests ("Holy Diver" in Darkshore now gives some, Gloomrise Hatchlings in Mulgore give less), and all Ruins of Lordaeron dungeon quests start at level 15.
- Fixes in Alterac Mountains, the Barrens, Orgrimmar, Teldrassil and the Wetlands; some satyrs that counted as humanoids are demons again.

## Interface and accessibility, added on 4 November {#update}

On 4 November at 19:35 UTC Blizzard added nine interface changes to the post. The swing timer no longer fades with distance; with the combined bag on, each slot shows which bag it belongs to; nameplates show Elite enemies again, and their debuff icons can be clicked through. The Spellbook and Talents frame opens at the same height as the other panels, with a smaller combat mode; the PvP scoreboard is updated; kills at the Honor cap no longer show honor gained; and in the keybinds menu, hovering a keybind highlights its button on the action bar.

## What it means for your builds {#builds}

Our builder reads every build code, the part after \`#FW1\` in a builder link, with the new trees, and so do our [build pages](/en/builds). For Druids, Hunters, Mages, Paladins, Priests and Warlocks the trees have the same shape as on 2 November, when we imported the October hotfixes: only numbers and texts change, so their builds stay as they were. Rogue, Warrior and Shaman builds can lose points:

1. **Codes keep working.** Each digit belongs to one talent, and a removed talent leaves an empty slot, so the other digits do not slide onto the wrong talent.
2. **Points on removed talents come back as free points**: Murder, Improved Distract, Quietus, Cutthroat and Thousand Cuts for Rogues, Raging Blows for Warriors, Lava Burst for Shamans. A renamed talent counts as new, so the points in Improved Eviscerate, Improved Sinister Strike and Elemental Mastery are freed as well, and Coup de Grace, Efficient Strikes and Lightning Mastery start at zero.
3. **Ranks above the new maximum are cut**: for Rogues Lethality and Dual Wield Specialization (from 5 to 2), Seal Fate and Camouflage (from 5 to 3); for Warriors Bloodthrill (from 5 to 2), Improved Tactical Mastery and Flurry (from 5 to 3).
4. **The builder then checks the build row by row**: a talent that moved to a row you no longer reach, or lost its prerequisite, is dropped together with whatever depended on it.

In our tests, a Combat build with its 5 first-row points in Improved Eviscerate and Improved Sinister Strike lost almost the whole Combat tree, because without them the second row no longer opens. A Mutilate build without Venom lost Mutilate, which moves from row 5 to row 7 and now needs Venom, and a point in Relentless Strikes taken with fewer than 20 points in Assassination is dropped too. An Elemental Shaman with Lava Burst and Elemental Mastery loses those 2 points, a Fury Warrior with Raging Blows and 5 ranks of Flurry loses 3. Builds published on our build pages keep the code and the game build they were published with; their author can open them in the builder, spend the freed points and update them.

## What we don't know yet {#unknown}

- **Whether the numbers match the game**: the notes came out the day before launch and we have not checked these trees in game yet. For every class except the Priest, talentsforever.com writes that some numbers follow Blizzard's notes ahead of the game data, and that the trees include server hotfixes of 3 November read from the game's hotfix cache.
- **Raging Blows**: it is missing from the new data, but the notes never mention it; we will check in game whether it is really gone.
- **Shank and Poised in the builder**: they are class abilities, not talents, so the builder only shows them through the talents that improve them, such as Flash of Steel, Boot Knife and Composure.
- **How long the faster respawns last**: Blizzard gives no date for going back to normal rates.`,
    `Il 3 novembre 2026 alle 03:20 UTC (le 04:20 in Italia; sulla costa ovest degli Stati Uniti era ancora il 2 novembre, da cui il titolo "Updated November 2"), Kaivax, Community Manager di Blizzard, ha pubblicato la tornata più lunga finora delle [note di sviluppo ufficiali di WoW Forever](${POST}). Raccoglie quello che è cambiato nelle due settimane e mezza dopo l'ultimo aggiornamento completo della beta, quello del 15 ottobre, comprese le razziali del 26 e 27 ottobre, e fissa la messa a punto delle classi con cui Blizzard ha lanciato il gioco il 4 novembre. Il 4 novembre una [breve aggiunta](${POST_10}) ha completato il post con una sezione sull'interfaccia. **Il nostro [builder dei talenti](/it/builder) usa gli alberi nuovi dal 5 novembre**: i dati vengono da [talentsforever.com](${TALENTSFOREVER}), che li ha generati il 4 novembre dalla build 1.60.1.70755 del client. I nomi di talenti e abilità restano in inglese, come nel gioco.

## Tutte le classi: più danni, poi una pausa {#tutte-le-classi}

La prima nota degli sviluppatori spiega il cambio di rotta. Durante la beta Blizzard ha cercato di tenere ogni classe più o meno dentro il suo budget di potenza di Classic, quindi ogni elemento nuovo doveva costare qualcos'altro, e alcune abilità simbolo sono finite per sembrare deboli. Nelle ultime due settimane ha quindi **alzato i danni delle classi in tutto il gioco e dato più vita alle creature di livello alto** per compensare. L'obiettivo, scrive Blizzard, non è la parità perfetta dei numeri, ma che ogni classe sia preziosa per il gruppo in cui entra.

La seconda nota conta per chi pianifica una build: bug e casi estremi a parte, **Blizzard non prevede grandi ritocchi prima dell'apertura delle incursioni**, il 9 dicembre. Quando abbastanza giocatori avranno superato il livello 30, farà una grande revisione dei numeri basata sui dati.

Per tutti, inoltre:

- i talenti non hanno più una probabilità ridotta di attivarsi con gli incantesimi di rango basso, tranne Blizzard lanciata a un rango imparato più di 12 livelli sotto il tuo;
- gli incantesimi nuovi non finiscono più da soli sulle barre delle azioni;
- **imparare tutte le abilità di classe dall'1 al 60 costa fra 206 e 207 oro per ogni classe**; allo Stregone si toglie quanto ci si aspetta che spenda per i Grimoire dei suoi pet.

## Ladro: tre alberi rifatti {#ladro}

Il Ladro è la classe che cambia di più in questa tornata, e negli hotfix di fine ottobre non c'era niente di tutto questo.

- Nuova abilità **Shank** al livello 24: 5 di Energia, 10 secondi di ricarica, un colpo con la mano secondaria per il 50% dei danni dell'arma che non può mancare e genera 15 di Energia (25 con il rango 2, al livello 44).
- Nuova passiva **Poised** al livello 18 (il Druido la riceve al 32): fuori dal combattimento e con l'Energia piena, la prossima abilità a Energia costa 10 in meno. Deadly Poison e Instant Poison raddoppiano il coefficiente della potenza d'attacco.
- **Assassination**: sparisce Murder e arriva **Blood Splatter** (Rupture e Garrote durano di più). Relentless Strikes scende in fila 5 con 5 ranghi, Lethality scende a 2 ranghi e Seal Fate a 3. **Venom** sale in fila 5 e diventa una passiva che potenzia i veleni dopo uno Shank, e **Mutilate** scende in fila 7, al 90% dei danni dell'arma.
- **Combat**: Improved Eviscerate diventa **Coup de Grace**, che potenzia anche Death Mark, e Improved Sinister Strike diventa **Efficient Strikes**. Arrivano **Composure** (Poised fa risparmiare più Energia) e **Flash of Steel** (più Energia e meno ricarica per Shank). Dual Wield Specialization scende a 2 ranghi (25/50% ai danni della mano secondaria).
- **Subtlety**: spariscono Improved Distract, Quietus, Cutthroat e Thousand Cuts. Arrivano **Quick Getaway** (un bersaglio in più sotto Sap, e velocità dopo un Sap), **Boot Knife** (fino al 100% di probabilità che Shank aggiunga 2 punti combo) e **Death Mark**, il nuovo talento da 31 punti: una mossa finale da 25 di Energia che accumula per punto combo una parte dei danni dei tuoi attacchi, al doppio della velocità con Garrote e Rupture, e la scarica dopo 6 secondi. Opportunity sale a 5 ranghi, Camouflage scende a 3.

## Guerriero {#guerriero}

- Il bonus di minaccia di Defensive Stance passa dal 30% all'**80%**; la ricarica di Slam scende a 15 secondi (erano 18).
- **Arms**: Improved Tactical Mastery scende a 3 ranghi (fino a 15 di Ira conservata cambiando postura) e Bloodthrill a 2; Two-Handed Weapon Specialization raddoppia (fino al 6%).
- **Fury**: arrivano **Reckless Swings** (fila 4: al prezzo del 25% della salute base, i prossimi 4 attacchi in mischia generano 5 di Ira in più) e **Improved Whirlwind** (fila 6: meno ricarica e fino al 30% di danni in più al nemico più vicino). Flurry scende a 3 ranghi (10/20/30% di velocità d'attacco) e non chiede più Death Wish, che ora serve a Bloodthirst.
- **Protection**: Defiance sale a 7/13/20% di minaccia.
- Nei dati nuovi del nostro builder dall'albero Fury esce anche **Raging Blows**, dalla fila 4 dove arriva Reckless Swings. Le note non ne parlano.

## Sciamano: via Lava Burst {#sciamano}

- **Lightning Bolt** colpisce più forte a ogni rango, fino all'80% in più al rango massimo; **Chain Lightning** ora ha 2,5 secondi di lancio, con più danni e un costo in mana più alto. Gli Shock tornano ai danni di Classic Era, e Totemic Projection diventa **Totemic Call**, che riporta i totem da te.
- **Elemental**: **Lava Burst sparisce** e al suo posto arriva **Call of Thunder** (+5% di probabilità di critico per Lightning Bolt e Chain Lightning); **Elemental Mastery** si chiama ora **Lightning Mastery**. Lightning Overload sale al 10/20/30% (era 3/7/10%).
- **Enhancement**: Stormstrike fa il 150% dei danni normalizzati dell'arma con 6 secondi di ricarica (erano il 100% e 8 secondi), e Maelstrom Weapon si attiva il doppio delle volte.
- **Restoration**: Riptide non cura più subito, solo nel tempo; costa circa il 40% di mana in meno e la ricarica passa da 6 a 12 secondi.

## Paladino, Druido, Mago e Sacerdote {#altre-classi}

Molti cambi ai talenti di queste classi sono quelli che avevamo raccontato dai dati di hotfix nel nostro [articolo del 30 ottobre](/it/news/class-hotfixes-october-28-30): gli alberi rifatti del Paladino con Oath of Light, Shieldsworn e Unsealed Wrath, Bloom e Predatory Discipline per il Druido, Accelerant e Precision per il Mago, Holy Binding per il Sacerdote. Le note ora li rendono ufficiali, e aggiungono questo.

- **Paladino**: **spariscono Salvation, Mass Salvation, Revoke e Blessing of Light**. Righteous Fury si impara al livello 10 (era il 16), come le posture degli altri tank, e dà il 33% di minaccia in più, più un altro 90% dai danni Sacri. Templar's Bulwark diventa un effetto magico dissolvibile.
- **Druido**: la minaccia in forma d'orso passa dal 50% al **115%**, per compensare la perdita di Salvation; Poised arriva al livello 32 e Lacerate diventa un talento Feral. Shred, Claw e Ravage fanno più danni con l'arma (200%, 140% e 435%), Rip, Rake, Ferocious Bite e Pounce circa il 25% in più, Starfire circa il 40% in più.
- **Mago**: sparisce l'incantesimo **Frost Blast**, e con lui il talento Piercing Ice, che già mancava negli alberi usati dal nostro builder. **Ice Barrier** dà il 15% di danni Frost in più per un minuto quando la lanci, più un 5% finché regge; Ice Lance ha 8 secondi di ricarica condivisi con Fire Blast.
- **Sacerdote**: Shadow Word: Death ti infligge il **30% della salute massima** quando non uccide (era il 10%), ma non ti fa più male quando manca il bersaglio.

## Cacciatore e Stregone {#cacciatore-stregone}

- **Cacciatore**: tutte le trappole condividono una sola ricarica da 30 secondi. I danni bonus di Aimed Shot salgono di circa il 110%, Arcane Shot di circa il 30%, Serpent Sting di circa il 20%, e **Aspect of the Hawk** e **Trueshot Aura** tornano a dare più potenza d'attacco a distanza (fino a 110 e 100), dopo i tagli letti nei dati di hotfix di fine ottobre.
- **Stregone**: i pet ricevono **2 di salute per ogni punto della tua Tempra** (erano 7,5). Il coefficiente di Wrack raddoppia (86 danni base al secondo al livello 60, erano 36), Shadow and Flame raddoppia (fino al 20%) e Drain Soul dà molto più di rado Soul Shard quando non uccide.

## Razze, correzioni e PvP {#correzioni}

- Le modifiche alle razziali del 26 e 27 ottobre sono ripetute nel post, invariate: sono nel nostro [articolo sulle razziali](/it/news/racials-final-pass-october-26). Il Non Morto riceve anche correzioni a Cannibalize e Touch of the Grave.
- **Statistiche base**: ogni razza parte ora con quelle giuste. L'esempio di Blizzard è il Guerriero Tauren, con 5 di Forza in più del Guerriero Umano invece di 2; la correzione vale anche per i due Skyborne.
- Le radici che arrivano da un'attivazione, come Frostbite, Entrapment e Improved Hamstring, hanno ora i rendimenti decrescenti, e Throw usa un caricamento fisso di 0,5 secondi.
- La ricompensa Legacy Replica Ironforge Air Rifle ha un debuff "quitter" più breve (40 secondi, erano 5 minuti) e uno stordimento più corto (2,5 secondi, erano 3).
- Le **borse** non si equipaggiano più da sole negli spazi liberi: vanno messe a mano.
- **PvP**: nel campo di battaglia [Darkspear Islands](/it/news/darkspear-islands-battleground-pvp-progression) chi lascia cadere la bandiera non riceve più il debuff "Recently Dropped Flag".

## Gamepad {#gamepad}

Il supporto al gamepad passa a una "functional Beta": il gioco principale e l'interfaccia di base si giocano tutti con il controller, con le impostazioni nell'Edit Mode e nelle Opzioni. Le correzioni toccano borse e inventario, gli oggetti ad area da piazzare dalla barra del gamepad, la scelta del set di regole e i filmati, il bersaglio focus (LB + RB + il tasto frontale in basso), cadaveri amici e animaletti come bersagli, l'uscita anticipata da un volo e il comando Pet Move.

## Missioni e mondo {#mondo}

- La **ricomparsa dei mostri** cambia in molte aree: più rapida nelle zone di livello basso, rapidissima in quelle iniziali, poi più lenta man mano che si sale e i giocatori si sparpagliano. Blizzard riporterà le zone basse a tempi più normali quando l'ondata del lancio si sarà calmata.
- L'esperienza cambia su varie missioni ("Holy Diver" a Darkshore ora ne dà, i Gloomrise Hatchlings a Mulgore ne danno meno), e tutte le missioni del dungeon Ruins of Lordaeron partono dal livello 15.
- Correzioni ad Alterac Mountains, nei Barrens, a Orgrimmar, a Teldrassil e nelle Wetlands; alcuni satiri che risultavano umanoidi tornano demoni.

## Interfaccia e accessibilità, aggiunte il 4 novembre {#aggiornamento}

Il 4 novembre alle 19:35 UTC (le 20:35 in Italia) Blizzard ha aggiunto al post nove modifiche all'interfaccia. Lo swing timer non sbiadisce più con la distanza; con la borsa unica attiva, ogni spazio mostra da quale borsa viene; le nameplate mostrano di nuovo i nemici Elite, e le icone dei loro debuff si attraversano con il clic. Il pannello di incantesimi e talenti si apre alla stessa altezza degli altri, con una modalità di combattimento più piccola; il tabellone del PvP è aggiornato; le uccisioni al tetto dell'onore non mostrano più l'onore guadagnato; e nel menu dei tasti, passare sopra un tasto evidenzia il suo pulsante sulla barra delle azioni.

## Cosa cambia per le vostre build {#build}

Il nostro builder legge ogni codice di build, la parte dopo \`#FW1\` in un link del builder, con gli alberi nuovi, e così le nostre [pagine delle build](/it/builds). Per Druido, Cacciatore, Mago, Paladino, Sacerdote e Stregone gli alberi hanno la stessa forma del 2 novembre, quando avevamo importato gli hotfix di ottobre: cambiano solo numeri e testi, quindi le loro build restano come erano. Le build di Ladro, Guerriero e Sciamano possono perdere punti:

1. **I codici funzionano ancora.** Ogni cifra appartiene a un talento, e un talento tolto lascia un posto vuoto: le altre cifre non scivolano sul talento sbagliato.
2. **I punti dei talenti tolti tornano liberi**: Murder, Improved Distract, Quietus, Cutthroat e Thousand Cuts per il Ladro, Raging Blows per il Guerriero, Lava Burst per lo Sciamano. Un talento rinominato conta come nuovo, quindi si liberano anche i punti in Improved Eviscerate, Improved Sinister Strike ed Elemental Mastery, mentre Coup de Grace, Efficient Strikes e Lightning Mastery partono da zero.
3. **I ranghi oltre il nuovo massimo vengono tagliati**: per il Ladro Lethality e Dual Wield Specialization (da 5 a 2), Seal Fate e Camouflage (da 5 a 3); per il Guerriero Bloodthrill (da 5 a 2), Improved Tactical Mastery e Flurry (da 5 a 3).
4. **Poi il builder ricontrolla la build fila per fila**: un talento finito in una fila che non si raggiunge più, o rimasto senza prerequisito, viene tolto insieme a quello che ne dipendeva.

Nelle nostre prove, una build Combat con i 5 punti della prima fila in Improved Eviscerate e Improved Sinister Strike ha perso quasi tutto l'albero Combat, perché senza di loro la seconda fila non si apre più. Una build Mutilate senza Venom ha perso Mutilate, che scende dalla fila 5 alla 7 e ora chiede Venom, e un punto in Relentless Strikes preso con meno di 20 punti in Assassination viene tolto anche lui. Uno Sciamano Elemental con Lava Burst ed Elemental Mastery perde quei 2 punti, un Guerriero Fury con Raging Blows e 5 ranghi di Flurry ne perde 3. Le build pubblicate nelle nostre pagine delle build tengono il codice e la build del gioco con cui sono uscite; l'autore può aprirle nel builder, rispendere i punti liberati e aggiornarle.

## Cosa non sappiamo ancora {#non-sappiamo}

- **Se i numeri corrispondono al gioco**: le note sono uscite il giorno prima del lancio e questi alberi non li abbiamo ancora controllati nel gioco. Per tutte le classi tranne il Sacerdote, talentsforever.com scrive che alcuni numeri seguono le note di Blizzard prima dei dati del gioco, e che gli alberi contengono hotfix dei server del 3 novembre letti dalla cache degli hotfix.
- **Raging Blows**: manca nei dati nuovi, ma le note non lo citano mai; controlleremo nel gioco se è davvero sparito.
- **Shank e Poised nel builder**: sono abilità di classe, non talenti, quindi il builder le mostra solo attraverso i talenti che le potenziano, come Flash of Steel, Boot Knife e Composure.
- **Quanto durano i respawn rapidi**: Blizzard non dà una data per il ritorno ai tempi normali.
- **I nomi**: il client non ha l'italiano, quindi i talenti nuovi restano in inglese anche nel gioco; nel nostro builder hanno già la descrizione in italiano.`,
    `El 3 de noviembre de 2026 a las 03:20 UTC (las 04:20 en España peninsular; en la costa oeste de Estados Unidos aún era 2 de noviembre, de ahí el título "Updated November 2"), Kaivax, community manager de Blizzard, publicó la tanda más larga hasta ahora de las [notas de desarrollo oficiales de WoW Forever](${POST}). Reúne lo que ha cambiado en las dos semanas y media posteriores a la última actualización completa de la beta, la del 15 de octubre, con las raciales del 26 y el 27 de octubre incluidas, y fija el ajuste de las clases con el que Blizzard lanzó el juego el 4 de noviembre. El 4 de noviembre un [breve añadido](${POST_10}) completó el mensaje con un apartado sobre la interfaz. **Nuestro [calculador de talentos](/es/builder) usa los árboles nuevos desde el 5 de noviembre**: los datos vienen de [talentsforever.com](${TALENTSFOREVER}), que los generó el 4 de noviembre a partir de la build 1.60.1.70755 del cliente. Los nombres de talentos y habilidades se quedan en inglés, como en nuestro calculador.

## Todas las clases: más daño y luego una pausa {#todas-las-clases}

La primera nota de los desarrolladores explica el cambio de rumbo. Durante la beta Blizzard intentó mantener cada clase más o menos dentro de su presupuesto de poder de Classic, así que cada elemento nuevo tenía que salir de otra parte, y algunas habilidades emblemáticas acabaron pareciendo flojas. Por eso, en las dos últimas semanas, ha **subido el daño de las clases en todo el juego y ha dado más salud a las criaturas de nivel alto** para compensarlo. El objetivo, escribe Blizzard, no es la igualdad perfecta de números, sino que cada clase resulte valiosa para el grupo al que se une.

La segunda nota importa a quien planifica una build: salvo errores y casos extremos, **Blizzard no prevé grandes ajustes antes de que abran las bandas**, el 9 de diciembre. Cuando haya suficientes jugadores por encima del nivel 30, hará una gran revisión de los números basada en los datos.

Además, para todos:

- los talentos ya no tienen menos probabilidad de activarse con hechizos de rango bajo, salvo Blizzard lanzada con un rango aprendido más de 12 niveles por debajo del tuyo;
- los hechizos nuevos ya no se colocan solos en las barras de acción;
- **entrenar todas las habilidades de clase del 1 al 60 cuesta entre 206 y 207 de oro para cualquier clase**; al brujo se le descuenta lo que se espera que gaste en los grimorios de sus mascotas.

## Pícaro: tres árboles rehechos {#picaro}

El pícaro es la clase que más cambia en esta tanda, y nada de esto estaba en los hotfixes de finales de octubre.

- Nueva habilidad **Shank** a nivel 24: 5 de Energía, 10 segundos de reutilización, un golpe con la mano izquierda por el 50 % del daño del arma que no puede fallar y genera 15 de Energía (25 con el rango 2, a nivel 44).
- Nueva pasiva **Poised** a nivel 18 (el druida la recibe a nivel 32): fuera de combate y con la Energía al máximo, tu siguiente habilidad de Energía cuesta 10 menos. Deadly Poison e Instant Poison doblan su coeficiente de poder de ataque.
- **Assassination**: desaparece Murder y llega **Blood Splatter** (Rupture y Garrote duran más). Relentless Strikes baja a la fila 5 con 5 rangos, Lethality baja a 2 rangos y Seal Fate a 3. **Venom** sube a la fila 5 y se convierte en una pasiva que refuerza tus venenos tras un Shank, y **Mutilate** baja a la fila 7, con el 90 % del daño del arma.
- **Combat**: Improved Eviscerate pasa a ser **Coup de Grace**, que también refuerza Death Mark, e Improved Sinister Strike pasa a ser **Efficient Strikes**. Llegan **Composure** (Poised ahorra más Energía) y **Flash of Steel** (más Energía y menos reutilización para Shank). Dual Wield Specialization baja a 2 rangos (25/50 % de daño con la mano izquierda).
- **Subtlety**: desaparecen Improved Distract, Quietus, Cutthroat y Thousand Cuts. Llegan **Quick Getaway** (un objetivo más bajo Sap, y velocidad tras un Sap), **Boot Knife** (hasta un 100 % de probabilidad de que Shank añada 2 puntos de combo) y **Death Mark**, el nuevo talento de 31 puntos: un remate de 25 de Energía que acumula por cada punto de combo una parte del daño de tus ataques, al doble de ritmo con Garrote y Rupture, y lo descarga al cabo de 6 segundos. Opportunity sube a 5 rangos y Camouflage baja a 3.

## Guerrero {#guerrero}

- La bonificación de amenaza de Defensive Stance pasa del 30 % al **80 %**; la reutilización de Slam baja a 15 segundos (eran 18).
- **Arms**: Improved Tactical Mastery baja a 3 rangos (hasta 15 de Ira que conservas al cambiar de actitud) y Bloodthrill a 2; Two-Handed Weapon Specialization se dobla (hasta un 6 %).
- **Fury**: llegan **Reckless Swings** (fila 4: a cambio del 25 % de tu salud base, tus 4 siguientes ataques cuerpo a cuerpo generan 5 de Ira más) e **Improved Whirlwind** (fila 6: menos reutilización y hasta un 30 % más de daño al enemigo más cercano). Flurry baja a 3 rangos (10/20/30 % de velocidad de ataque) y ya no pide Death Wish, que ahora es requisito de Bloodthirst.
- **Protection**: Defiance sube a 7/13/20 % de amenaza.
- En los datos nuevos de nuestro calculador, **Raging Blows** también sale del árbol Fury, de la fila 4, donde llega Reckless Swings. Las notas no lo mencionan.

## Chamán: adiós a Lava Burst {#chaman}

- **Lightning Bolt** pega más en todos los rangos, hasta un 80 % más en el rango máximo; **Chain Lightning** pasa a 2,5 segundos de lanzamiento, con más daño y más coste de maná. Los Shocks vuelven al daño de Classic Era, y Totemic Projection pasa a ser **Totemic Call**, que lleva tus tótems hasta ti.
- **Elemental**: **Lava Burst desaparece** y en su lugar llega **Call of Thunder** (+5 % de probabilidad de crítico para Lightning Bolt y Chain Lightning); **Elemental Mastery** pasa a llamarse **Lightning Mastery**. Lightning Overload sube al 10/20/30 % (era 3/7/10 %).
- **Enhancement**: Stormstrike hace el 150 % del daño normalizado del arma con 6 segundos de reutilización (eran el 100 % y 8 segundos), y Maelstrom Weapon se activa el doble de veces.
- **Restoration**: Riptide ya no cura al instante, solo con el tiempo; cuesta alrededor de un 40 % menos de maná y su reutilización pasa de 6 a 12 segundos.

## Paladín, druida, mago y sacerdote {#otras-clases}

Muchos cambios de talentos de estas clases son los que contamos a partir de los datos de hotfix en nuestro [artículo del 30 de octubre](/es/news/class-hotfixes-october-28-30): los árboles rehechos del paladín con Oath of Light, Shieldsworn y Unsealed Wrath, Bloom y Predatory Discipline para el druida, Accelerant y Precision para el mago, Holy Binding para el sacerdote. Las notas ahora los hacen oficiales y añaden lo siguiente.

- **Paladín**: **desaparecen Salvation, Mass Salvation, Revoke y Blessing of Light**. Righteous Fury se aprende a nivel 10 (era el 16), igual que las actitudes de los demás tanques, y da un 33 % más de amenaza, más otro 90 % con el daño Sagrado. Templar's Bulwark pasa a ser un efecto mágico que se puede disipar.
- **Druida**: la amenaza en forma de oso pasa del 50 % al **115 %**, para compensar que ya no hay Salvation; Poised llega a nivel 32 y Lacerate pasa a ser un talento Feral. Shred, Claw y Ravage hacen más daño con el arma (200 %, 140 % y 435 %), Rip, Rake, Ferocious Bite y Pounce alrededor de un 25 % más, y Starfire alrededor de un 40 % más.
- **Mago**: desaparece el hechizo **Frost Blast**, y con él el talento Piercing Ice, que ya no estaba en los árboles que usaba nuestro calculador. **Ice Barrier** da un 15 % más de daño de Frost durante un minuto al lanzarla, y otro 5 % mientras aguanta; Ice Lance tiene 8 segundos de reutilización compartidos con Fire Blast.
- **Sacerdote**: Shadow Word: Death te hace un daño igual al **30 % de tu salud máxima** si no mata al objetivo (era el 10 %), pero ya no te daña cuando falla.

## Cazador y brujo {#cazador-brujo}

- **Cazador**: todas las trampas comparten una sola reutilización de 30 segundos. El daño adicional de Aimed Shot sube alrededor de un 110 %, Arcane Shot alrededor de un 30 % y Serpent Sting alrededor de un 20 %, y **Aspect of the Hawk** y **Trueshot Aura** vuelven a dar más poder de ataque a distancia (hasta 110 y 100), tras los recortes que se leyeron en los datos de hotfix de finales de octubre.
- **Brujo**: las mascotas reciben **2 de salud por cada punto de tu aguante** (eran 7,5). El coeficiente de Wrack se dobla (86 de daño base por segundo a nivel 60, eran 36), Shadow and Flame se dobla (hasta un 20 %) y Drain Soul da fragmentos de alma muchas menos veces cuando no mata.

## Razas, correcciones y JcJ {#correcciones}

- Los cambios de las raciales del 26 y el 27 de octubre se repiten en el mensaje, sin cambios: están en nuestro [artículo sobre las raciales](/es/news/racials-final-pass-october-26). El no-muerto recibe además correcciones en Cannibalize y Touch of the Grave.
- **Estadísticas base**: cada raza empieza ahora con las correctas. El ejemplo de Blizzard es el guerrero tauren, con 5 de fuerza más que el guerrero humano en lugar de 2; la corrección vale también para los dos tipos de célicos.
- Los enraizamientos que salen de una activación, como Frostbite, Entrapment o Improved Hamstring, tienen ahora rendimientos decrecientes, y Throw usa una carga fija de 0,5 segundos.
- La recompensa de legado Replica Ironforge Air Rifle tiene una penalización por abandono más corta (40 segundos, eran 5 minutos) y un aturdimiento más breve (2,5 segundos, eran 3).
- Las **bolsas** ya no se equipan solas en los huecos libres: hay que ponerlas a mano.
- **JcJ**: en el campo de batalla [Darkspear Islands](/es/news/darkspear-islands-battleground-pvp-progression), quien suelta la bandera ya no recibe el perjuicio "Recently Dropped Flag".

## Mando {#mando}

El soporte para mando pasa a ser una "functional Beta": el juego principal y la interfaz básica se pueden jugar enteros con mando, con los ajustes en el modo de edición y en las opciones. Las correcciones tocan las bolsas y el inventario, los objetos de área que se colocan desde la barra del mando, la elección del conjunto de reglas y las cinemáticas, el objetivo de foco (LB + RB + el botón frontal inferior), los cadáveres aliados y las alimañas como objetivos, la salida anticipada de un vuelo y la orden Pet Move.

## Misiones y mundo {#mundo}

- La **reaparición de los monstruos** cambia en muchas zonas: más rápida en las zonas de nivel bajo, rapidísima en las iniciales, y más lenta a medida que subes y los jugadores se reparten. Blizzard devolverá las zonas bajas a ritmos más normales cuando haya pasado la avalancha del lanzamiento.
- La experiencia cambia en varias misiones ("Holy Diver", en Darkshore, ahora da experiencia, y las Gloomrise Hatchlings de Mulgore dan menos), y todas las misiones de la mazmorra Ruins of Lordaeron empiezan a nivel 15.
- Correcciones en Alterac Mountains, los Barrens, Orgrimmar, Teldrassil y los Wetlands; algunos sátiros que contaban como humanoides vuelven a ser demonios.

## Interfaz y accesibilidad, añadidas el 4 de noviembre {#actualizacion}

El 4 de noviembre a las 19:35 UTC (las 20:35 en España peninsular) Blizzard añadió al mensaje nueve cambios de interfaz. El temporizador del ataque ya no se desvanece con la distancia; con la bolsa combinada activada, cada hueco muestra de qué bolsa es; las placas de nombre vuelven a mostrar a los enemigos de élite, y los iconos de sus perjuicios dejan pasar los clics. El panel de hechizos y talentos se abre a la misma altura que los demás, con un modo de combate más pequeño; el marcador del JcJ se ha actualizado; las muertes con el honor al máximo ya no muestran el honor ganado; y en el menú de atajos, pasar el cursor por un atajo resalta su botón en la barra de acción.

## Qué pasa con tus builds {#builds}

Nuestro calculador lee cada código de build, la parte que va después de \`#FW1\` en un enlace del calculador, con los árboles nuevos, y lo mismo hacen nuestras [páginas de builds](/es/builds). Para druida, cazador, mago, paladín, sacerdote y brujo los árboles tienen la misma forma que el 2 de noviembre, cuando importamos los hotfixes de octubre: solo cambian números y textos, así que sus builds se quedan como estaban. Las builds de pícaro, guerrero y chamán pueden perder puntos:

1. **Los códigos siguen funcionando.** Cada cifra pertenece a un talento, y un talento eliminado deja un hueco vacío: las demás cifras no se desplazan al talento equivocado.
2. **Los puntos de los talentos eliminados vuelven a estar libres**: Murder, Improved Distract, Quietus, Cutthroat y Thousand Cuts para el pícaro, Raging Blows para el guerrero, Lava Burst para el chamán. Un talento con otro nombre cuenta como nuevo, así que también se liberan los puntos de Improved Eviscerate, Improved Sinister Strike y Elemental Mastery, y Coup de Grace, Efficient Strikes y Lightning Mastery empiezan en cero.
3. **Los rangos por encima del nuevo máximo se recortan**: para el pícaro, Lethality y Dual Wield Specialization (de 5 a 2), Seal Fate y Camouflage (de 5 a 3); para el guerrero, Bloodthrill (de 5 a 2), Improved Tactical Mastery y Flurry (de 5 a 3).
4. **Después el calculador revisa la build fila por fila**: un talento que ha pasado a una fila a la que ya no llegas, o que se ha quedado sin requisito previo, se quita junto con lo que dependía de él.

En nuestras pruebas, una build de Combat con los 5 puntos de la primera fila en Improved Eviscerate e Improved Sinister Strike perdió casi todo el árbol Combat, porque sin ellos la segunda fila ya no se abre. Una build de Mutilate sin Venom perdió Mutilate, que baja de la fila 5 a la 7 y ahora pide Venom, y un punto en Relentless Strikes con menos de 20 puntos en Assassination también se quita. Un chamán Elemental con Lava Burst y Elemental Mastery pierde esos 2 puntos, y un guerrero Fury con Raging Blows y 5 rangos de Flurry pierde 3. Las builds publicadas en nuestras páginas de builds mantienen el código y la build del juego con la que se publicaron; su autor puede abrirlas en el calculador, gastar los puntos liberados y actualizarlas.

## Lo que aún no sabemos {#no-sabemos}

- **Si los números coinciden con el juego**: las notas salieron la víspera del lanzamiento y todavía no hemos comprobado estos árboles en el juego. Para todas las clases salvo el sacerdote, talentsforever.com indica que algunos números siguen las notas de Blizzard antes que los datos del juego, y que los árboles incluyen hotfixes de los servidores del 3 de noviembre leídos en la caché de hotfixes.
- **Raging Blows**: falta en los datos nuevos, pero las notas no lo mencionan en ningún momento; comprobaremos en el juego si de verdad ha desaparecido.
- **Shank y Poised en el calculador**: son habilidades de clase, no talentos, así que el calculador solo las muestra a través de los talentos que las mejoran, como Flash of Steel, Boot Knife y Composure.
- **Cuánto duran las reapariciones rápidas**: Blizzard no da fecha para volver a los ritmos normales.
- **Los nombres**: los talentos nuevos no tienen nombre oficial en español; en nuestro calculador conservan el nombre en inglés y ya tienen la descripción en español.`,
  ),
  faq: {
    en: [
      {
        q: "Why did my WoW Forever Rogue, Warrior or Shaman build lose points in the ForeverMeta builder?",
        a: "Because the development notes of 2 November 2026 removed or renamed several talents (seven for the Rogue, Lava Burst and Elemental Mastery for the Shaman) and cut the ranks of others. The builder reads old codes with the new trees: points that no longer fit are dropped and become free points to spend again.",
      },
      {
        q: "Will Blizzard change WoW Forever's class balance before the raids?",
        a: "Not much, according to the notes of 2 November 2026: apart from bugs and serious outliers, Blizzard does not plan big tuning changes before the raids open on 9 December. A large tuning pass based on the data will come once players have levelled past 30.",
      },
    ],
    it: [
      {
        q: "Perché la mia build di Ladro, Guerriero o Sciamano di WoW Forever ha perso punti nel builder di ForeverMeta?",
        a: "Perché le note di sviluppo del 2 novembre 2026 hanno tolto o rinominato diversi talenti (sette per il Ladro, Lava Burst ed Elemental Mastery per lo Sciamano) e tagliato i ranghi di altri. Il builder legge i codici vecchi con gli alberi nuovi: i punti che non ci stanno più vengono tolti e tornano liberi da spendere.",
      },
      {
        q: "Blizzard cambierà il bilanciamento delle classi di WoW Forever prima delle incursioni?",
        a: "Non di molto, secondo le note del 2 novembre 2026: bug e casi estremi a parte, Blizzard non prevede grandi ritocchi prima dell'apertura delle incursioni il 9 dicembre. Una grande revisione dei numeri arriverà quando i giocatori avranno superato il livello 30.",
      },
    ],
    es: [
      {
        q: "¿Por qué mi build de pícaro, guerrero o chamán de WoW Forever ha perdido puntos en el calculador de ForeverMeta?",
        a: "Porque las notas de desarrollo del 2 de noviembre de 2026 eliminaron o cambiaron de nombre varios talentos (siete del pícaro, Lava Burst y Elemental Mastery del chamán) y recortaron los rangos de otros. El calculador lee los códigos antiguos con los árboles nuevos: los puntos que ya no caben se quitan y vuelven a estar libres para gastarlos.",
      },
      {
        q: "¿Cambiará Blizzard el equilibrio de las clases de WoW Forever antes de las bandas?",
        a: "No mucho, según las notas del 2 de noviembre de 2026: salvo errores y casos extremos, Blizzard no prevé grandes ajustes antes de que abran las bandas el 9 de diciembre. Cuando los jugadores hayan pasado del nivel 30 llegará una gran revisión de los números basada en los datos.",
      },
    ],
  },
};

export default item;

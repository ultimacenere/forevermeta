import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * I quattro "World of Warcraft: Forever Class Deep Dives" (Blizzard News), letti in inglese, italiano e spagnolo:
 * Cacciatore e Druido il 30 settembre 2026 alle 19:00 UTC, Sacerdote e Guerriero il 30 settembre alle 21:00 UTC,
 * Mago e Sciamano e Ladro e Stregone il 7 ottobre alle 22:00 UTC. Il Paladino non ha ancora il suo (11 ottobre 2026).
 * I fatti vengono dalla versione inglese; italiano e spagnolo servono per i nomi delle classi e dei concetti generali.
 */
const HUNTER_DRUID = {
  en: "https://news.blizzard.com/en-us/article/24301515/world-of-warcraft-forever-class-deep-dives-hunter-and-druid",
  it: "https://news.blizzard.com/it-it/article/24301515/world-of-warcraft-forever-approfondimento-sulle-classi-cacciatore-e-druido",
  es: "https://news.blizzard.com/es-es/article/24301515/world-of-warcraft-forever-repaso-a-fondo-de-las-clases-cazador-y-druida",
};
const PRIEST_WARRIOR = {
  en: "https://news.blizzard.com/en-us/article/24301514/world-of-warcraft-forever-class-deep-dives-priest-and-warrior",
  it: "https://news.blizzard.com/it-it/article/24301514/world-of-warcraft-forever-approfondimento-sulle-classi-sacerdote-e-guerriero",
  es: "https://news.blizzard.com/es-es/article/24301514/repaso-a-fondo-de-las-clases-sacerdote-y-guerrero-en-world-of-warcraft-forever",
};
const MAGE_SHAMAN = {
  en: "https://news.blizzard.com/en-us/article/24302097/world-of-warcraft-forever-class-deep-dives-mage-and-shaman",
  it: "https://news.blizzard.com/it-it/article/24302097/world-of-warcraft-forever-approfondimento-sulle-classi-mago-e-sciamano",
  es: "https://news.blizzard.com/es-es/article/24302097/world-of-warcraft-forever-repaso-a-fondo-de-las-clases-mago-y-chaman",
};
const ROGUE_WARLOCK = {
  en: "https://news.blizzard.com/en-us/article/24310968/world-of-warcraft-forever-class-deep-dives-rogue-and-warlock",
  it: "https://news.blizzard.com/it-it/article/24310968/world-of-warcraft-forever-approfondimento-sulle-classi-ladro-e-stregone",
  es: "https://news.blizzard.com/es-es/article/24310968/world-of-warcraft-forever-repaso-a-fondo-de-las-clases-picaro-y-brujo",
};

const item: NewsItem = {
  slug: "class-deep-dives-eight-classes",
  date: "2026-10-07",
  source: "blizzard",
  topic: "news",
  url: MAGE_SHAMAN.en,
  image: media.classDeepDives.src,
  imageAlt: media.classDeepDives.alt,
  guides: ["wow-forever-races-classes", "wow-forever-legacy-system"],
  title: n(
    "WoW Forever class deep dives: what changes for eight of the nine classes, while the Paladin is still waiting",
    "WoW Forever, gli approfondimenti sulle classi: cosa cambia per otto classi su nove, manca ancora il Paladino",
    "WoW Forever, repaso a fondo de las clases: qué cambia en ocho de las nueve clases, el paladín sigue esperando",
  ),
  metaTitle: n(
    "WoW Forever class deep dives: eight classes",
    "WoW Forever: approfondimenti su otto classi",
    "WoW Forever: repaso a fondo de ocho clases",
  ),
  summary: n(
    "Between 30 September and 7 October 2026 Blizzard published four class deep dives for WoW Forever, covering Hunter, Druid, Priest, Warrior, Mage, Shaman, Rogue and Warlock. Talents start at level 10 with a new 16-point milestone, and every class gets new baseline abilities and reworked talent trees. The Paladin has no deep dive yet.",
    "Fra il 30 settembre e il 7 ottobre 2026 Blizzard ha pubblicato quattro approfondimenti sulle classi di WoW Forever: Cacciatore, Druido, Sacerdote, Guerriero, Mago, Sciamano, Ladro e Stregone. I talenti partono dal livello 10 con un nuovo traguardo a 16 punti, e ogni classe riceve abilità di base nuove e alberi dei talenti rivisti. Il Paladino non ha ancora il suo.",
    "Entre el 30 de septiembre y el 7 de octubre de 2026 Blizzard publicó cuatro repasos a fondo de las clases de WoW Forever: cazador, druida, sacerdote, guerrero, mago, chamán, pícaro y brujo. Los talentos empiezan en el nivel 10 con un nuevo hito a los 16 puntos, y cada clase recibe facultades básicas nuevas y árboles de talentos revisados. El paladín aún no tiene el suyo.",
  ),
  description: n(
    "WoW Forever class deep dives in short: new baseline abilities and talents for eight classes, from Hunter to Warlock. The Paladin has no deep dive yet.",
    "Gli approfondimenti sulle classi di WoW Forever in breve: abilità di base e talenti nuovi per otto classi, dal Cacciatore allo Stregone. Manca il Paladino.",
    "Los repasos a fondo de las clases de WoW Forever, en breve: facultades básicas y talentos nuevos para ocho clases, del cazador al brujo. Falta el paladín.",
  ),
  highlights: {
    en: [
      { label: "Every class", text: "talents from level 10, milestones at 11, 16, 21 and 31 points, Dual Specialization at 40", anchor: "common" },
      { label: "Hunter", text: "Aimed Shot baseline, traps in combat, a unique ability for every pet family", anchor: "hunter" },
      { label: "Druid", text: "potions, enchantments and racials in any form, Shifting Power and Primal Bite", anchor: "druid" },
      { label: "Priest", text: "Fear Ward and Devouring Plague for every race, Shadow Word: Death baseline", anchor: "priest" },
      { label: "Warrior", text: "Rage that ignores Armor, Victory Rush, Weaponmaster", anchor: "warrior" },
      { label: "Mage", text: "Frostfire Bolt at level 40, a new Arcane Blast, one Ignite per Mage", anchor: "mage" },
      { label: "Shaman", text: "a totem bar with Call spells, 60-minute weapon imbues, Lava Burst", anchor: "shaman" },
      { label: "Rogue", text: "Sap keeps Stealth, one-handed axes, Mutilate and Venom", anchor: "rogue" },
      { label: "Warlock", text: "Banes, pets that scale with the Warlock, Demonic Pact", anchor: "warlock" },
      { label: "Still unknown", text: "when the Paladin deep dive arrives, and the final numbers", anchor: "unknown" },
    ],
    it: [
      { label: "Tutte le classi", text: "talenti dal livello 10, traguardi a 11, 16, 21 e 31 punti, doppia specializzazione al 40", anchor: "comune" },
      { label: "Cacciatore", text: "Aimed Shot di base, trappole in combattimento, un'abilità unica per ogni famiglia di famigli", anchor: "cacciatore" },
      { label: "Druido", text: "pozioni, incantamenti e razziali in ogni forma, Shifting Power e Primal Bite", anchor: "druido" },
      { label: "Sacerdote", text: "Fear Ward e Devouring Plague per tutte le razze, Shadow Word: Death di base", anchor: "sacerdote" },
      { label: "Guerriero", text: "Ira che ignora l'armatura, Victory Rush, Weaponmaster", anchor: "guerriero" },
      { label: "Mago", text: "Frostfire Bolt al livello 40, un Arcane Blast nuovo, un Ignite per ogni Mago", anchor: "mago" },
      { label: "Sciamano", text: "barra dei totem con gli incantesimi Call, infusioni delle armi da 60 minuti, Lava Burst", anchor: "sciamano" },
      { label: "Ladro", text: "Sap non toglie lo Stealth, asce a una mano, Mutilate e Venom", anchor: "ladro" },
      { label: "Stregone", text: "le Bane, famigli che crescono con lo Stregone, Demonic Pact", anchor: "stregone" },
      { label: "Ancora da sapere", text: "quando arriva l'approfondimento sul Paladino e i numeri definitivi", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Todas las clases", text: "talentos desde el nivel 10, hitos a los 11, 16, 21 y 31 puntos, doble especialización al 40", anchor: "comun" },
      { label: "Cazador", text: "Aimed Shot básico, trampas en combate, una facultad única para cada familia de mascotas", anchor: "cazador" },
      { label: "Druida", text: "pociones, encantamientos y raciales en cualquier forma, Shifting Power y Primal Bite", anchor: "druida" },
      { label: "Sacerdote", text: "Fear Ward y Devouring Plague para todas las razas, Shadow Word: Death básico", anchor: "sacerdote" },
      { label: "Guerrero", text: "Ira que ignora la armadura, Victory Rush, Weaponmaster", anchor: "guerrero" },
      { label: "Mago", text: "Frostfire Bolt al nivel 40, un Arcane Blast nuevo, un Ignite por mago", anchor: "mago" },
      { label: "Chamán", text: "barra de tótems con los hechizos Call, imbuiciones de arma de 60 minutos, Lava Burst", anchor: "chaman" },
      { label: "Pícaro", text: "Sap ya no rompe el Stealth, hachas de una mano, Mutilate y Venom", anchor: "picaro" },
      { label: "Brujo", text: "los Banes, mascotas que escalan con el brujo, Demonic Pact", anchor: "brujo" },
      { label: "Aún por saber", text: "cuándo llega el repaso del paladín y los números definitivos", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `Between 30 September and 7 October 2026 Blizzard published four "World of Warcraft: Forever Class Deep Dives", articles in which the development team explains how eight of the nine classes change in Forever:

- [Hunter and Druid](${HUNTER_DRUID.en}), 30 September;
- [Priest and Warrior](${PRIEST_WARRIOR.en}), 30 September;
- [Mage and Shaman](${MAGE_SHAMAN.en}), 7 October;
- [Rogue and Warlock](${ROGUE_WARLOCK.en}), 7 October.

The Paladin is the only class without a deep dive so far. Each article lists new baseline abilities, talent changes tree by tree, and the strengths and weaknesses the team wants each class to keep. Below are the changes that most affect how each class plays, not the full lists. Spell, talent and ability names stay in English, as in the game. For the nine classes and every race/class combination, see our [guide to races and classes](/en/guides/wow-forever-races-classes).

## What applies to every class {#common}

- Talents unlock at **level 10** and keep the familiar structure: the same number of rows and one-point milestone talents at **11, 21 and 31 points**, now joined by a new milestone at **16 points**. Below, "the 16-point talent" is the one at that milestone.
- Some talents are exactly as they were in patch 1.12 of the original game; others are adjusted, and some class buffs that came from talents are now baseline, such as Blessing of Kings and Improved Mark of the Wild.
- To change talents, Legacy talents included, you visit a **class trainer in one of the major cities**. More in our [Legacy System guide](/en/guides/wow-forever-legacy-system).
- **Dual Specialization** is available from level 40.
- Talents that grant a free effect now trigger less often when you cast spells of a much lower rank. The Mage article explains why: gold farmers used cheap low-rank spells to "fish" for procs. The same penalty applies to similar talents of many classes.
- All four articles say that abilities and talents may keep changing during the beta.

## Hunter {#hunter}

- **Aimed Shot** is baseline for every Hunter at level 20. Multi-Shot now shares its cooldown; Arcane Shot no longer does.
- **Traps** can be used in combat, with a 30-second cooldown, and Frost and Fire traps have separate cooldowns. Hunters can still place traps only at their own location.
- **Pets** get stats from the Hunter's gear and can no longer receive player buffs that raise their stats. Every family can learn Bite or Claw and Dive or Dash, and has one ability of its own (for example Sonic Blast for Bats, Dismember for Crocolisks, Furious Howl for Wolves). **Foxes** are a new family, with Trickster's Dance.
- **Beast Mastery**: Summon Hawk, the 16-point talent, deals instant damage and summons a Hawk for 18 seconds, up to two at once. Focused Fire increases your damage and your pet's while the pet is active.
- **Marksmanship**: Lone Wolf (11 points) gives 20% more damage when you have no active pet. Trueshot Aura becomes the 21-point talent, and Sniper Shot (31 points) is a new shot with a 4-second cast and a 45-yard base range that hits harder than Aimed Shot.
- **Survival** leans toward melee: Savage Strikes increases all melee damage, Counterattack becomes the 16-point talent, Strider Kick (21 points) and Lacerating Strikes (31 points, a Bleed on Mongoose Bite) are new.
- What does not change: one role (damage), the longest range of any class, the dead zone within 8 yards, and no Stun or Interrupt.

## Druid {#druid}

- **In every form** the Druid can use almost all potions and similar consumables (Rage potions and Thistletea included), keeps weapon enchantments and procs such as Crusader and Windfury Totem, opens most doors and objects, and can use racial abilities such as Shadowmeld, War Stomp and Walk on Air. Most Engineering bombs are still off limits, except some new recipes.
- In Bear, Cat and Dire Bear Form, melee auto-attack DPS equals the DPS of the equipped weapon, with an attack speed of 1.0 or 2.5 seconds depending on the form.
- **New baseline abilities**: Nature's Grasp at level 10, Revive (an out-of-combat resurrection) at 12, Omen of Clarity at 20 and Lacerate, a stacking Bleed, at 42. Tiger's Fury is removed.
- **Balance**: Insect Swarm becomes the 16-point talent; Eclipse lets Wrath shorten your next Starfire casts. In Moonkin Form you can cast all non-healing spells, and its critical strike bonus now applies to attacks too (it does not stack with Leader of the Pack).
- **Feral** has two 16-point talents on the same row: Shifting Power for Cat Form (40 Energy instantly, at a significant Mana cost) and Primal Bite for Bear Form, chosen instead of Mangle. Berserk is the 31-point talent. Thick Hide now lets Druid tanks benefit from Defense skill items. On 30 September, Shifting Power and Improved Shifting Power were not yet in the beta and were planned for the following week's build.
- **Furor** no longer allows "bear-weaving": Energy kept outside Cat Form is lost when you enter Bear Form. Blizzard says Shifting Power brings back "power shifting" in a more approachable way.
- **Restoration**: Swiftmend becomes the 16-point talent and no longer consumes Rejuvenation or Regrowth. Wild Growth, the 31-point talent, places a heal over time on the whole party of the target, pets included.

## Priest {#priest}

- **Fear Ward and Devouring Plague** are available to all Priests at level 20, whatever their race. Divine Spirit is baseline at 30.
- **Shadow Word: Death** is baseline at level 32: instant Shadow damage, but if the target survives the Priest takes 10% of their maximum health. 15-second cooldown.
- **Racial Priest spells** (two per race) have been re-evaluated. Gnome Priests get new ones: Confounding Flash and Contingency Plan.
- Prayer of Healing heals the party of the target and their pets, not the Priest's own party. Renew from several Priests can be active on the same target.
- **Discipline**: Soul Warding (16 points) shortens the cooldown of Power Word: Shield, Penance (21 points) is a 2-second channel that damages enemies or heals allies, and Divine Aegis turns critical heals into an absorb shield. Penance was changed again in the [beta notes of 8 October](/en/news/beta-development-notes-october-8).
- **Holy**: Binding Heal (16 points) heals the Priest and the target at once; Prayer of Mending (31 points) jumps between party or raid members, up to 5 heals. Lightwell is removed.
- **Shadow**: Vampiric Embrace becomes the 16-point talent (30 seconds, 1-minute cooldown). Shadow Weaving only helps the Priest who casts it. Shadowform allows all non-healing spells and halves the Mana cost of Shadow spells.

## Warrior {#warrior}

- **Rage**: Rage from damage taken ignores Armor and absorbs, so Power Word: Shield no longer reduces it. Rage from dealing damage depends on weapon speed, and critical strikes give 75% more Rage. In the same article Blizzard acknowledged Rage bugs in the beta; on 8 October it fixed three and rebalanced the formula (see the [beta notes of 8 October](/en/news/beta-development-notes-october-8)).
- **Tactical Mastery** is baseline at level 14 (you keep 10 Rage when changing stance); the Arms talent Improved Tactical Mastery raises it up to 25.
- **Victory Rush** at level 20: after you kill a non-trivial enemy, an attack that heals 10% of your maximum health is available for 20 seconds.
- Recklessness, Retaliation and Shield Wall no longer share a cooldown, and Retaliation and Shield Wall drop to 15 minutes. Thunder Clap can be used in Defensive Stance.
- Battle Shout gives less Attack Power, because both factions now have Shaman and Paladin buffs, but includes the old Improved Battle Shout.
- **Arms**: Weaponmaster replaces the four weapon specialization talents; Spearing Strike (16 points) dismounts the target and deals double damage to mounted targets, Dragons and Giants. **Fury**: Raging Blows (16 points) makes Whirlwind hit with both weapons; Bloodthirst no longer heals but gives 10% movement speed for 10 seconds.
- **Protection**: Vanguard (16 points) makes Charge usable in Defensive Stance; Bastion and Focused Rage are new.

## Mage {#mage}

- **Comprehension** is a new Mage-only minor tradeskill: with Comprehend Scroll you decipher scrolls dropped by creatures, with benefits to discover while playing.
- **Frostfire Bolt** (level 40) is both a Fire and a Frost spell: 3-second cast, upfront damage plus damage over time and a slow, with the better of your two spell damage bonuses against the lower of the target's two resistances. It is meant for builds that mix Fire and Frost talents.
- Cone of Cold lasts less and Improved Blizzard slows by at most 40% (was 65%). Blizzard explains both with gold farmers and boosters who kited or farmed large groups of creatures.
- **Arcane**: Arcane Blast (11 points) is a new version: it increases the damage of your other Mage spells and its own Mana cost, up to 4 times, for 8 seconds or until you cast another spell. Missile Barrage (16 points) speeds up your next Arcane Missiles.
- **Fire**: Ignite is now a separate debuff for each Mage. Heating Up, Forever's version of Hot Streak, can bring Pyroblast down to a 1.5-second cast. Improved Scorch only helps the Mage who casts it.
- **Frost**: Ice Lance (11 points) deals 300% more damage to Frozen targets, and Fingers of Frost lets you treat targets as Frozen. Ice Block becomes the 16-point talent; Cold Snap becomes the 21-point talent, with a 10-minute cooldown (was 5).

## Shaman {#shaman}

- **Totems**: 1.0-second global cooldown (was 1.5); totems with persistent buffs last 5 minutes (was 2); a tracking interface shows active totems and their remaining time, and a right-click dismisses them. Resistance totems cover the whole raid group.
- **Call of the Elements** (level 20) unlocks the totem bar: you set four totems, one per element, and summon them with a single 3-second cast. Call of the Spirits (30) and Call of the Ancestors (40) add a second and a third set. Totemic Recall (20) destroys all your totems and refunds 25% of their Mana; Totemic Projection (22) moves them up to 30 yards.
- **Weapon imbues** last 60 minutes (was 5) and work together with temporary enchantments such as Sharpening Stones and Wizard Oil. Windfury Totem and Flametongue Totem are now party-wide buffs. Fire Nova Totem is replaced by a Fire Nova spell that erupts at your current Fire Totem; Tranquil Air Totem is removed.
- Lightning Bolt (rank 4 and up) has a 2.5-second cast and Chain Lightning a 2-second cast, with lower coefficients.
- **Elemental Combat**: Elemental Mastery is removed. Blizzard says it was holding the class back and would have made Elemental too strong in PvP. In its place come Lightning Overload, Earthbound (21 points) and Lava Burst (31 points).
- **Enhancement**: Stormstrike becomes the 16-point talent with an 8-second cooldown; Maelstrom Weapon can make Lightning Bolt instant; Rage of the Farseer (31 points) gives 30% attack speed for 25 seconds, a personal cooldown inspired by Heroism and Bloodlust.
- **Restoration**: Water Shield (11 points) is a new shield that restores Mana; Mana Tide Totem moves to 16 points; Riptide (31 points) is a new instant heal with a heal over time.

## Rogue {#rogue}

- **Poisons** have more charges and can sit on the weapon together with temporary enchantments such as Weightstones and Sharpening Stones.
- **Sap** no longer breaks Stealth. **Distract** also lowers the Stealth detection of the enemies it affects for 10 seconds, but tells enemy players that a Rogue is nearby.
- **Expose Armor** now matches five applications of Sunder Armor and no longer stops Warriors from using Sunder Armor on the same target.
- Rogues can equip **one-handed axes**.
- **Assassination**: Mutilate (21 points) strikes with two daggers for 2 Combo Points; Venom (31 points) is a finisher that increases Poison damage by 30%. Cold Blood moves to 16 points, and Improved Poisons often keeps charges from being consumed.
- **Combat**: Hack and Slash replaces the weapon specialization talents and adds a bonus for axes; Flawless Execution (16 points) lowers the Energy cost of Eviscerate. Several talents now also support Backstab builds.
- **Subtlety**: Premeditation becomes the 16-point talent and lasts 20 seconds; Cutthroat can let Ambush be used without Stealth after a Backstab; Thousand Cuts (31 points) makes Rupture lower the cost of Hemorrhage and Backstab.

## Warlock {#warlock}

- **Banes**: Curse of Agony and Curse of Doom become Bane of Agony and Bane of Doom. Each Warlock can have one Bane per target, separate from utility Curses. Curse of the Elements now covers all magic damage, and Curse of Shadows is removed.
- **Firestone and Spellstone** become weapon imbues that stack with temporary enchantments such as Wizard Oil: Fire damage and critical strike chance with Firestone, Shadow damage and spell haste with Spellstone.
- **Pets scale with the Warlock's stats**. Life Tap scales with Spirit, and Drain Soul's chance to give a Soul Shard grows with each tick until it is guaranteed.
- **Affliction**: Curse of Exhaustion becomes the 16-point talent with a 30% slow; Wrack (31 points) is a new drain-style spell for Shadow damage over time.
- **Demonology**: Demonic Sacrifice becomes the 11-point talent and its effects last 2 hours. Fel Domination moves to 16 points and Soul Link to 21. Demonic Pact (31 points) keeps the Sacrifice effect when you summon a different pet, so for the first time it works together with Master Demonologist.
- **Destruction**: Destructive Reach moves to the first row and helps every specialization; Conflagrate becomes the 16-point talent; Bane of Havoc (21 points) copies 15% of your damage on other targets to the cursed one; Incinerate is the 31-point talent.

## What we don't know yet {#unknown}

- **When the Paladin deep dive arrives.** As of 11 October Blizzard has not published one. The first article only says that more deep dives will follow during the beta. For now we know that Blessing of Kings becomes baseline, and that the 8 October notes changed Retribution Aura and Reckoning.
- **The final numbers.** Many changes are described only as "increased", "reduced" or "significantly", without values.
- **Whether everything is in the beta.** Some Feral talents were not in the beta on 30 September, and the Shaman article reports a bug: Totemic Recall does not refund Mana yet.
- **How much will change before launch.** All four articles say that abilities and talents may change during the beta. Changes after the articles are on our [beta changes page](/en/changes); game terms are in the [glossary](/en/glossary).`,
    `Fra il 30 settembre e il 7 ottobre 2026 Blizzard ha pubblicato quattro "Approfondimenti sulle classi" di World of Warcraft: Forever, articoli in cui il team di sviluppo spiega come cambiano otto delle nove classi:

- [Cacciatore e Druido](${HUNTER_DRUID.it}), 30 settembre;
- [Sacerdote e Guerriero](${PRIEST_WARRIOR.it}), 30 settembre;
- [Mago e Sciamano](${MAGE_SHAMAN.it}), 7 ottobre;
- [Ladro e Stregone](${ROGUE_WARLOCK.it}), 7 ottobre.

Il Paladino è l'unica classe ancora senza approfondimento. Ogni articolo elenca le abilità di base nuove, le modifiche ai talenti albero per albero e i punti di forza e le debolezze che il team vuole conservare. Qui sotto ci sono le modifiche che cambiano di più il modo di giocare ogni classe, non gli elenchi completi. I nomi di incantesimi, talenti e abilità restano in inglese, come nel gioco. Le nove classi e tutte le combinazioni di razza e classe sono nella nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).

## Cosa vale per tutte le classi {#comune}

- I talenti si sbloccano al **livello 10** e mantengono la struttura di sempre: lo stesso numero di file e i talenti traguardo da un punto a **11, 21 e 31 punti**, ora affiancati da un nuovo traguardo a **16 punti**. Qui sotto, "talento da 16 punti" è quello di quel traguardo.
- Alcuni talenti sono identici alla patch 1.12 del gioco originale, altri sono stati modificati, e alcuni benefici di classe che arrivavano dai talenti ora sono di base, come Blessing of Kings e Improved Mark of the Wild.
- Per cambiare i talenti, compresi i talenti Legacy, si va da un **istruttore della propria classe in una delle città principali**. Di più nella nostra [guida al Legacy System](/it/guides/wow-forever-legacy-system).
- La **doppia specializzazione** è disponibile dal livello 40.
- I talenti che danno un effetto gratuito ora si attivano meno spesso con incantesimi di rango molto più basso. L'articolo sul Mago spiega il motivo: i gold farmer usavano incantesimi di rango basso ed economici per "pescare" gli effetti. La stessa penalità vale per talenti simili di molte classi.
- Tutti e quattro gli articoli dicono che abilità e talenti possono cambiare ancora durante la beta.

## Cacciatore {#cacciatore}

- **Aimed Shot** è un'abilità di base per tutti i Cacciatori al livello 20. Multi-Shot ora condivide il suo tempo di recupero, Arcane Shot non più.
- Le **trappole** si possono usare in combattimento, con 30 secondi di tempo di recupero, e quelle di gelo e di fuoco hanno tempi di recupero separati. Il Cacciatore può ancora piazzarle solo dove si trova.
- I **famigli** ricevono statistiche dall'equipaggiamento del Cacciatore e non possono più ricevere i potenziamenti dei giocatori che ne alzano le statistiche. Ogni famiglia può imparare Bite o Claw e Dive o Dash, e ha un'abilità solo sua (per esempio Sonic Blast per i pipistrelli, Dismember per i coccodrilli, Furious Howl per i lupi). Le **volpi** sono una famiglia nuova, con Trickster's Dance.
- **Beast Mastery**: Summon Hawk, il talento da 16 punti, infligge danni istantanei ed evoca un falco per 18 secondi, fino a due insieme. Focused Fire aumenta i danni tuoi e del famiglio finché il famiglio è attivo.
- **Marksmanship**: Lone Wolf (11 punti) dà il 20% di danni in più quando non hai un famiglio attivo. Trueshot Aura diventa il talento da 21 punti, e Sniper Shot (31 punti) è un tiro nuovo con 4 secondi di lancio e 45 metri di gittata base, che fa più danni di Aimed Shot.
- **Survival** si sposta verso il corpo a corpo: Savage Strikes aumenta tutti i danni in mischia, Counterattack diventa il talento da 16 punti, e sono nuovi Strider Kick (21 punti) e Lacerating Strikes (31 punti, un sanguinamento su Mongoose Bite).
- Cosa non cambia: un solo ruolo (danni), la gittata più lunga di tutte le classi, la zona morta entro 8 metri, niente stordimenti né interruzioni.

## Druido {#druido}

- **In ogni forma** il Druido può usare quasi tutte le pozioni e i consumabili simili (anche le pozioni d'Ira e il Thistletea), mantiene incantamenti ed effetti delle armi come Crusader e Windfury Totem, apre quasi tutte le porte e gli oggetti e può usare le abilità razziali come Shadowmeld, War Stomp e Walk on Air. Quasi tutte le bombe di Engineering restano vietate, tranne alcune ricette nuove.
- In Bear, Cat e Dire Bear Form i DPS dell'attacco automatico in mischia sono quelli dell'arma equipaggiata, con una velocità d'attacco di 1,0 o 2,5 secondi secondo la forma.
- **Abilità di base nuove**: Nature's Grasp al livello 10, Revive (una resurrezione fuori combattimento) al 12, Omen of Clarity al 20 e Lacerate, un sanguinamento che si accumula, al 42. Tiger's Fury viene tolto.
- **Balance**: Insect Swarm diventa il talento da 16 punti; Eclipse fa sì che Wrath accorci i lanci successivi di Starfire. In Moonkin Form si possono lanciare tutti gli incantesimi che non curano, e il suo bonus ai critici vale anche per gli attacchi (non si somma a Leader of the Pack).
- **Feral** ha due talenti da 16 punti sulla stessa fila: Shifting Power per la Cat Form (40 di Energia subito, a un costo di mana alto) e Primal Bite per la Bear Form, scelto al posto di Mangle. Berserk è il talento da 31 punti. Thick Hide ora fa guadagnare ai Druidi tank dagli oggetti con abilità in Difesa. Il 30 settembre Shifting Power e Improved Shifting Power non erano ancora nella beta ed erano previsti nella build della settimana dopo.
- **Furor** non permette più il "bear-weaving": l'Energia accumulata fuori dalla Cat Form si perde entrando in Bear Form. Secondo Blizzard Shifting Power riporta il "power shifting" in un modo più accessibile.
- **Restoration**: Swiftmend diventa il talento da 16 punti e non consuma più Rejuvenation né Regrowth. Wild Growth, il talento da 31 punti, mette una cura nel tempo su tutto il gruppo del bersaglio, famigli compresi.

## Sacerdote {#sacerdote}

- **Fear Ward e Devouring Plague** sono disponibili per tutti i Sacerdoti al livello 20, di qualsiasi razza. Divine Spirit è di base al 30.
- **Shadow Word: Death** è di base al livello 32: danni d'ombra istantanei, ma se il bersaglio sopravvive il Sacerdote perde il 10% della sua vita massima. Tempo di recupero di 15 secondi.
- Gli **incantesimi razziali** del Sacerdote (due per razza) sono stati rivisti. Gli Gnomi Sacerdoti ne ricevono di nuovi: Confounding Flash e Contingency Plan.
- Prayer of Healing cura il gruppo del bersaglio e i suoi famigli, non quello del Sacerdote. Renew di più Sacerdoti può essere attivo sullo stesso bersaglio.
- **Discipline**: Soul Warding (16 punti) accorcia il tempo di recupero di Power Word: Shield, Penance (21 punti) è un incanalamento di 2 secondi che danneggia i nemici o cura gli alleati, e Divine Aegis trasforma le cure critiche in uno scudo che assorbe danni. Penance è cambiato ancora nelle [note della beta dell'8 ottobre](/it/news/beta-development-notes-october-8).
- **Holy**: Binding Heal (16 punti) cura insieme il Sacerdote e il bersaglio; Prayer of Mending (31 punti) salta fra i membri del gruppo o dell'incursione, fino a 5 cure. Lightwell viene tolto.
- **Shadow**: Vampiric Embrace diventa il talento da 16 punti (30 secondi, 1 minuto di tempo di recupero). Shadow Weaving aiuta solo il Sacerdote che lo lancia. Shadowform permette tutti gli incantesimi che non curano e dimezza il costo in mana degli incantesimi d'ombra.

## Guerriero {#guerriero}

- **Ira**: l'Ira dai danni subiti ignora l'armatura e gli assorbimenti, quindi Power Word: Shield non la riduce più. L'Ira dai danni inflitti dipende dalla velocità dell'arma, e i colpi critici danno il 75% di Ira in più. Nello stesso articolo Blizzard ha ammesso dei bug dell'Ira nella beta; l'8 ottobre ne ha corretti tre e ha ribilanciato la formula (vedi le [note della beta dell'8 ottobre](/it/news/beta-development-notes-october-8)).
- **Tactical Mastery** è di base al livello 14 (tieni 10 di Ira quando cambi postura); il talento Arms Improved Tactical Mastery la porta fino a 25.
- **Victory Rush** al livello 20: dopo aver ucciso un nemico non banale, per 20 secondi hai un attacco che ti cura del 10% della vita massima.
- Recklessness, Retaliation e Shield Wall non condividono più il tempo di recupero, e quello di Retaliation e Shield Wall scende a 15 minuti. Thunder Clap si può usare in Defensive Stance.
- Battle Shout dà meno potenza d'attacco, perché ora entrambe le fazioni hanno i potenziamenti di Sciamano e Paladino, ma comprende il vecchio Improved Battle Shout.
- **Arms**: Weaponmaster sostituisce i quattro talenti di specializzazione nelle armi; Spearing Strike (16 punti) disarciona il bersaglio e fa il doppio dei danni a chi è in sella, ai draghi e ai giganti. **Fury**: Raging Blows (16 punti) fa colpire Whirlwind con tutte e due le armi; Bloodthirst non cura più ma dà il 10% di velocità di movimento per 10 secondi.
- **Protection**: Vanguard (16 punti) rende Charge usabile in Defensive Stance; Bastion e Focused Rage sono nuovi.

## Mago {#mago}

- **Comprehension** è una nuova professione secondaria solo per i Maghi: con Comprehend Scroll si decifrano le pergamene lasciate dalle creature, con benefici da scoprire giocando.
- **Frostfire Bolt** (livello 40) è sia un incantesimo di fuoco sia di gelo: 3 secondi di lancio, danni immediati più danni nel tempo e un rallentamento, con il migliore dei tuoi due bonus ai danni contro la più bassa delle due resistenze del bersaglio. Serve alle configurazioni che mescolano talenti di fuoco e di gelo.
- Cone of Cold dura meno e Improved Blizzard rallenta al massimo del 40% (era il 65%). Blizzard spiega tutte e due le modifiche con i gold farmer e i booster che trascinavano o falciavano grandi gruppi di creature.
- **Arcane**: Arcane Blast (11 punti) è una versione nuova: aumenta i danni degli altri incantesimi del Mago e il proprio costo in mana, fino a 4 volte, per 8 secondi o finché non lanci un altro incantesimo. Missile Barrage (16 punti) velocizza il successivo Arcane Missiles.
- **Fire**: Ignite ora è un effetto separato per ogni Mago. Heating Up, la versione di Forever di Hot Streak, può portare Pyroblast a 1,5 secondi di lancio. Improved Scorch aiuta solo il Mago che lo lancia.
- **Frost**: Ice Lance (11 punti) fa il 300% di danni in più ai bersagli congelati, e Fingers of Frost fa trattare i bersagli come congelati. Ice Block diventa il talento da 16 punti; Cold Snap diventa quello da 21 punti, con 10 minuti di tempo di recupero (erano 5).

## Sciamano {#sciamano}

- **Totem**: tempo di recupero globale di 1,0 secondi (era 1,5); i totem con potenziamenti persistenti durano 5 minuti (erano 2); un'interfaccia mostra i totem attivi e il tempo che resta, e con il tasto destro si congedano. I totem delle resistenze valgono per tutto il gruppo d'incursione.
- **Call of the Elements** (livello 20) sblocca la barra dei totem: imposti quattro totem, uno per elemento, e li evochi con un solo lancio di 3 secondi. Call of the Spirits (30) e Call of the Ancestors (40) aggiungono un secondo e un terzo gruppo. Totemic Recall (20) distrugge tutti i tuoi totem e restituisce il 25% del loro mana; Totemic Projection (22) li sposta fino a 30 metri.
- Le **infusioni delle armi** durano 60 minuti (erano 5) e convivono con gli incantamenti temporanei come le Sharpening Stone e il Wizard Oil. Windfury Totem e Flametongue Totem ora sono potenziamenti per tutto il gruppo. Fire Nova Totem viene sostituito da un incantesimo Fire Nova che esplode dove si trova il tuo totem del fuoco; Tranquil Air Totem viene tolto.
- Lightning Bolt (dal rango 4) ha 2,5 secondi di lancio e Chain Lightning 2 secondi, con coefficienti più bassi.
- **Elemental Combat**: Elemental Mastery viene tolto. Secondo Blizzard frenava la classe e avrebbe reso l'Elemental troppo forte nel PvP. Al suo posto arrivano Lightning Overload, Earthbound (21 punti) e Lava Burst (31 punti).
- **Enhancement**: Stormstrike diventa il talento da 16 punti con 8 secondi di tempo di recupero; Maelstrom Weapon può rendere istantaneo Lightning Bolt; Rage of the Farseer (31 punti) dà il 30% di velocità d'attacco per 25 secondi, un potenziamento personale ispirato a Heroism e Bloodlust.
- **Restoration**: Water Shield (11 punti) è un nuovo scudo che restituisce mana; Mana Tide Totem passa a 16 punti; Riptide (31 punti) è una nuova cura istantanea con una cura nel tempo.

## Ladro {#ladro}

- I **veleni** hanno più cariche e possono stare sull'arma insieme agli incantamenti temporanei come le Weightstone e le Sharpening Stone.
- **Sap** non toglie più lo Stealth. **Distract** abbassa anche per 10 secondi la capacità dei nemici colpiti di vedere chi è in Stealth, ma fa capire ai giocatori nemici che c'è un Ladro nei paraggi.
- **Expose Armor** ora vale quanto cinque applicazioni di Sunder Armor e non impedisce più ai Guerrieri di usare Sunder Armor sullo stesso bersaglio.
- I Ladri possono equipaggiare le **asce a una mano**.
- **Assassination**: Mutilate (21 punti) colpisce con due pugnali per 2 punti combo; Venom (31 punti) è una mossa risolutiva che aumenta del 30% i danni dei veleni. Cold Blood passa a 16 punti, e Improved Poisons spesso evita di consumare le cariche.
- **Combat**: Hack and Slash sostituisce i talenti di specializzazione nelle armi e aggiunge un bonus per le asce; Flawless Execution (16 punti) abbassa il costo in Energia di Eviscerate. Diversi talenti ora sostengono anche le configurazioni con Backstab.
- **Subtlety**: Premeditation diventa il talento da 16 punti e dura 20 secondi; Cutthroat può permettere Ambush senza Stealth dopo un Backstab; Thousand Cuts (31 punti) fa abbassare a Rupture il costo di Hemorrhage e Backstab.

## Stregone {#stregone}

- **Bane**: Curse of Agony e Curse of Doom diventano Bane of Agony e Bane of Doom. Ogni Stregone può avere una sola Bane per bersaglio, separata dalle Curse di utilità. Curse of the Elements ora vale per tutti i danni magici, e Curse of Shadows viene tolta.
- **Firestone e Spellstone** diventano infusioni delle armi che si sommano agli incantamenti temporanei come il Wizard Oil: danni da fuoco e probabilità di critico con la Firestone, danni d'ombra e velocità di lancio con la Spellstone.
- **I famigli crescono con le statistiche dello Stregone**. Life Tap cresce con lo Spirito, e la probabilità di Drain Soul di dare una Soul Shard aumenta a ogni tick finché non è sicura.
- **Affliction**: Curse of Exhaustion diventa il talento da 16 punti con un rallentamento del 30%; Wrack (31 punti) è un nuovo incantesimo di prosciugamento per i danni d'ombra nel tempo.
- **Demonology**: Demonic Sacrifice diventa il talento da 11 punti e i suoi effetti durano 2 ore. Fel Domination passa a 16 punti e Soul Link a 21. Demonic Pact (31 punti) mantiene l'effetto del sacrificio quando evochi un altro famiglio, così per la prima volta funziona insieme a Master Demonologist.
- **Destruction**: Destructive Reach passa alla prima fila e aiuta tutte le specializzazioni; Conflagrate diventa il talento da 16 punti; Bane of Havoc (21 punti) copia sul bersaglio maledetto il 15% dei danni che fai agli altri; Incinerate è il talento da 31 punti.

## Cosa non sappiamo ancora {#non-sappiamo}

- **Quando arriva l'approfondimento sul Paladino.** All'11 ottobre Blizzard non l'ha pubblicato. Il primo articolo dice solo che altri approfondimenti arriveranno durante la beta. Per ora sappiamo che Blessing of Kings diventa di base e che le note dell'8 ottobre hanno cambiato Retribution Aura e Reckoning.
- **I numeri definitivi.** Molte modifiche sono descritte solo come "aumentato", "ridotto" o "di molto", senza valori.
- **Se tutto è già nella beta.** Alcuni talenti Feral non c'erano il 30 settembre, e l'articolo sullo Sciamano segnala un bug: Totemic Recall per ora non restituisce il mana.
- **Quanto cambierà prima dell'uscita.** Tutti e quattro gli articoli dicono che abilità e talenti possono cambiare durante la beta. Le modifiche arrivate dopo gli articoli sono nella nostra [pagina delle modifiche della beta](/it/changes); i termini del gioco sono nel [glossario](/it/glossary).`,
    `Entre el 30 de septiembre y el 7 de octubre de 2026 Blizzard publicó cuatro "Repasos a fondo de las clases" de World of Warcraft: Forever, artículos en los que el equipo de desarrollo explica cómo cambian ocho de las nueve clases:

- [Cazador y druida](${HUNTER_DRUID.es}), 30 de septiembre;
- [Sacerdote y guerrero](${PRIEST_WARRIOR.es}), 30 de septiembre;
- [Mago y chamán](${MAGE_SHAMAN.es}), 7 de octubre;
- [Pícaro y brujo](${ROGUE_WARLOCK.es}), 7 de octubre.

El paladín es la única clase que todavía no tiene su repaso. Cada artículo enumera las facultades básicas nuevas, los cambios de talentos árbol por árbol y los puntos fuertes y débiles que el equipo quiere conservar. Aquí tienes los cambios que más afectan a la forma de jugar cada clase, no las listas completas. Los nombres de hechizos, talentos, facultades y especializaciones se quedan en inglés, como en las notas de la beta. Las nueve clases y todas las combinaciones de raza y clase están en nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).

## Lo que vale para todas las clases {#comun}

- Los talentos se desbloquean en el **nivel 10** y mantienen la estructura de siempre: el mismo número de filas y talentos clave de un punto a los **11, 21 y 31 puntos**, a los que se suma un nuevo hito a los **16 puntos**. Más abajo, "talento de 16 puntos" es el de ese hito.
- Algunos talentos son idénticos a los del parche 1.12 del juego original, otros se han ajustado, y algunos beneficios de clase que venían de talentos ahora son básicos, como Blessing of Kings e Improved Mark of the Wild.
- Para cambiar los talentos, incluidos los talentos de legado, hay que visitar a un **instructor de clase en una de las ciudades principales**. Más en nuestra [guía del sistema de legado](/es/guides/wow-forever-legacy-system).
- La **doble especialización** está disponible a partir del nivel 40.
- Los talentos que dan un efecto gratuito ahora se activan menos con hechizos de un rango mucho más bajo. El artículo del mago explica el motivo: los gold farmers usaban hechizos baratos de rango bajo para "pescar" esos efectos. La misma penalización se aplica a talentos parecidos de muchas clases.
- Los cuatro artículos dicen que las facultades y los talentos pueden seguir cambiando durante la beta.

## Cazador {#cazador}

- **Aimed Shot** es una facultad básica para todos los cazadores a nivel 20. Multi-Shot ahora comparte su tiempo de reutilización; Arcane Shot ya no.
- Las **trampas** se pueden usar en combate, con 30 segundos de reutilización, y las de escarcha y de fuego tienen reutilizaciones separadas. El cazador sigue pudiendo colocarlas solo donde está.
- Las **mascotas** reciben estadísticas del equipo del cazador y ya no pueden recibir beneficios de jugadores que suban sus estadísticas. Cada familia puede aprender Bite o Claw y Dive o Dash, y tiene una facultad propia (por ejemplo Sonic Blast para los murciélagos, Dismember para los crocoliscos, Furious Howl para los lobos). Los **zorros** son una familia nueva, con Trickster's Dance.
- **Beast Mastery**: Summon Hawk, el talento de 16 puntos, inflige daño instantáneo e invoca un halcón durante 18 segundos, hasta dos a la vez. Focused Fire aumenta tu daño y el de tu mascota mientras la mascota está activa.
- **Marksmanship**: Lone Wolf (11 puntos) da un 20% más de daño cuando no tienes mascota activa. Trueshot Aura pasa a ser el talento de 21 puntos, y Sniper Shot (31 puntos) es un disparo nuevo con 4 segundos de lanzamiento y 45 metros de alcance base que hace más daño que Aimed Shot.
- **Survival** se orienta al cuerpo a cuerpo: Savage Strikes aumenta todo el daño cuerpo a cuerpo, Counterattack pasa a ser el talento de 16 puntos, y son nuevos Strider Kick (21 puntos) y Lacerating Strikes (31 puntos, un sangrado en Mongoose Bite).
- Lo que no cambia: un solo rol (daño), el mayor alcance de todas las clases, la zona muerta a menos de 8 metros, y nada de aturdimientos ni interrupciones.

## Druida {#druida}

- **En cualquier forma** el druida puede usar casi todas las pociones y consumibles parecidos (también las pociones de Ira y el Thistletea), conserva los encantamientos y efectos de arma como Crusader y Windfury Totem, abre casi todas las puertas y objetos y puede usar las facultades raciales como Shadowmeld, War Stomp y Walk on Air. Casi todas las bombas de Engineering siguen sin poder usarse, salvo algunas recetas nuevas.
- En Bear, Cat y Dire Bear Form, el DPS del ataque automático cuerpo a cuerpo es el del arma equipada, con una velocidad de ataque de 1,0 o 2,5 segundos según la forma.
- **Facultades básicas nuevas**: Nature's Grasp a nivel 10, Revive (una resurrección fuera de combate) a nivel 12, Omen of Clarity a nivel 20 y Lacerate, un sangrado acumulable, a nivel 42. Tiger's Fury desaparece.
- **Balance**: Insect Swarm pasa a ser el talento de 16 puntos; Eclipse hace que Wrath acorte los siguientes lanzamientos de Starfire. En Moonkin Form se pueden lanzar todos los hechizos que no sanan, y su bonificación de golpe crítico ahora también vale para los ataques (no se acumula con Leader of the Pack).
- **Feral** tiene dos talentos de 16 puntos en la misma fila: Shifting Power para la Cat Form (40 de Energía al instante, a un coste de maná alto) y Primal Bite para la Bear Form, elegido en lugar de Mangle. Berserk es el talento de 31 puntos. Thick Hide ahora permite a los druidas tanque beneficiarse de los objetos con habilidad de defensa. El 30 de septiembre, Shifting Power e Improved Shifting Power aún no estaban en la beta y llegaban en la build de la semana siguiente.
- **Furor** ya no permite el "bear-weaving": la Energía acumulada fuera de la Cat Form se pierde al entrar en Bear Form. Según Blizzard, Shifting Power recupera el "power shifting" de una forma más accesible.
- **Restoration**: Swiftmend pasa a ser el talento de 16 puntos y ya no consume Rejuvenation ni Regrowth. Wild Growth, el talento de 31 puntos, aplica una sanación en el tiempo a todo el grupo del objetivo, mascotas incluidas.

## Sacerdote {#sacerdote}

- **Fear Ward y Devouring Plague** están disponibles para todos los sacerdotes a nivel 20, sea cual sea su raza. Divine Spirit es básico a nivel 30.
- **Shadow Word: Death** es básico a nivel 32: daño de Sombras instantáneo, pero si el objetivo sobrevive el sacerdote pierde el 10% de su salud máxima. Reutilización de 15 segundos.
- Los **hechizos raciales** del sacerdote (dos por raza) se han revisado. Los sacerdotes gnomos reciben hechizos nuevos: Confounding Flash y Contingency Plan.
- Prayer of Healing sana al grupo del objetivo y a sus mascotas, no al grupo del sacerdote. Renew de varios sacerdotes puede estar activo en el mismo objetivo.
- **Discipline**: Soul Warding (16 puntos) acorta la reutilización de Power Word: Shield, Penance (21 puntos) es una canalización de 2 segundos que daña a los enemigos o sana a los aliados, y Divine Aegis convierte las sanaciones críticas en un escudo que absorbe daño. Penance volvió a cambiar en las [notas de la beta del 8 de octubre](/es/news/beta-development-notes-october-8).
- **Holy**: Binding Heal (16 puntos) sana a la vez al sacerdote y al objetivo; Prayer of Mending (31 puntos) salta entre los miembros del grupo o la banda, hasta 5 sanaciones. Lightwell desaparece.
- **Shadow**: Vampiric Embrace pasa a ser el talento de 16 puntos (30 segundos, 1 minuto de reutilización). Shadow Weaving solo beneficia al sacerdote que lo lanza. Shadowform permite todos los hechizos que no sanan y reduce a la mitad el coste de maná de los hechizos de Sombras.

## Guerrero {#guerrero}

- **Ira**: la Ira por daño recibido ignora la armadura y las absorciones, así que Power Word: Shield ya no la reduce. La Ira por daño infligido depende de la velocidad del arma, y los golpes críticos dan un 75% más de Ira. En el mismo artículo Blizzard reconoció errores con la Ira en la beta; el 8 de octubre corrigió tres y reequilibró la fórmula (consulta las [notas de la beta del 8 de octubre](/es/news/beta-development-notes-october-8)).
- **Tactical Mastery** es básica a nivel 14 (conservas 10 de Ira al cambiar de actitud); el talento de Arms Improved Tactical Mastery la sube hasta 25.
- **Victory Rush** a nivel 20: después de matar a un enemigo no trivial, durante 20 segundos tienes un ataque que te sana el 10% de tu salud máxima.
- Recklessness, Retaliation y Shield Wall ya no comparten reutilización, y la de Retaliation y Shield Wall baja a 15 minutos. Thunder Clap se puede usar en Defensive Stance.
- Battle Shout da menos poder de ataque, porque ahora ambas facciones tienen los beneficios del chamán y del paladín, pero incluye el antiguo Improved Battle Shout.
- **Arms**: Weaponmaster sustituye a los cuatro talentos de especialización en armas; Spearing Strike (16 puntos) desmonta al objetivo y hace el doble de daño a objetivos montados, dragones y gigantes. **Fury**: Raging Blows (16 puntos) hace que Whirlwind golpee con las dos armas; Bloodthirst ya no sana, pero da un 10% de velocidad de movimiento durante 10 segundos.
- **Protection**: Vanguard (16 puntos) permite usar Charge en Defensive Stance; Bastion y Focused Rage son nuevos.

## Mago {#mago}

- **Comprehension** es una nueva profesión secundaria exclusiva de los magos: con Comprehend Scroll se descifran pergaminos que sueltan las criaturas, con beneficios que se descubren jugando.
- **Frostfire Bolt** (nivel 40) es a la vez un hechizo de fuego y de escarcha: 3 segundos de lanzamiento, daño inmediato más daño en el tiempo y una ralentización, con la mejor de tus dos bonificaciones de daño contra la más baja de las dos resistencias del objetivo. Está pensado para configuraciones que mezclan talentos de fuego y de escarcha.
- Cone of Cold dura menos e Improved Blizzard ralentiza como mucho un 40% (antes, un 65%). Blizzard explica los dos cambios por los gold farmers y los boosters que arrastraban o arrasaban grandes grupos de criaturas.
- **Arcane**: Arcane Blast (11 puntos) es una versión nueva: aumenta el daño de los demás hechizos del mago y su propio coste de maná, hasta 4 veces, durante 8 segundos o hasta que lances otro hechizo. Missile Barrage (16 puntos) acelera tu siguiente Arcane Missiles.
- **Fire**: Ignite ahora es un efecto aparte para cada mago. Heating Up, la versión de Forever de Hot Streak, puede dejar Pyroblast en 1,5 segundos de lanzamiento. Improved Scorch solo beneficia al mago que lo lanza.
- **Frost**: Ice Lance (11 puntos) hace un 300% más de daño a objetivos congelados, y Fingers of Frost hace que los objetivos cuenten como congelados. Ice Block pasa a ser el talento de 16 puntos; Cold Snap pasa a ser el de 21 puntos, con 10 minutos de reutilización (antes, 5).

## Chamán {#chaman}

- **Tótems**: tiempo de reutilización global de 1,0 segundos (antes, 1,5); los tótems con beneficios persistentes duran 5 minutos (antes, 2); una interfaz muestra los tótems activos y el tiempo que les queda, y con el botón derecho se retiran. Los tótems de resistencia valen para todo el grupo de banda.
- **Call of the Elements** (nivel 20) desbloquea la barra de tótems: configuras cuatro tótems, uno por elemento, y los invocas con un solo lanzamiento de 3 segundos. Call of the Spirits (30) y Call of the Ancestors (40) añaden un segundo y un tercer conjunto. Totemic Recall (20) destruye todos tus tótems y devuelve el 25% de su maná; Totemic Projection (22) los traslada hasta 30 metros.
- Las **imbuiciones de arma** duran 60 minutos (antes, 5) y conviven con los encantamientos temporales como las Sharpening Stones y el Wizard Oil. Windfury Totem y Flametongue Totem ahora son beneficios para todo el grupo. Fire Nova Totem se sustituye por un hechizo Fire Nova que estalla donde está tu tótem de fuego; Tranquil Air Totem desaparece.
- Lightning Bolt (desde el rango 4) tiene 2,5 segundos de lanzamiento y Chain Lightning 2 segundos, con coeficientes más bajos.
- **Elemental Combat**: Elemental Mastery desaparece. Según Blizzard, frenaba a la clase y habría hecho al chamán elemental demasiado fuerte en JcJ. En su lugar llegan Lightning Overload, Earthbound (21 puntos) y Lava Burst (31 puntos).
- **Enhancement**: Stormstrike pasa a ser el talento de 16 puntos con 8 segundos de reutilización; Maelstrom Weapon puede hacer instantáneo Lightning Bolt; Rage of the Farseer (31 puntos) da un 30% de velocidad de ataque durante 25 segundos, un beneficio personal inspirado en Heroism y Bloodlust.
- **Restoration**: Water Shield (11 puntos) es un escudo nuevo que devuelve maná; Mana Tide Totem pasa a 16 puntos; Riptide (31 puntos) es una sanación instantánea nueva con sanación en el tiempo.

## Pícaro {#picaro}

- Los **venenos** tienen más cargas y pueden estar en el arma junto con encantamientos temporales como las Weightstones y las Sharpening Stones.
- **Sap** ya no rompe el Stealth. **Distract** también reduce durante 10 segundos la detección de Stealth de los enemigos afectados, pero avisa a los jugadores enemigos de que hay un pícaro cerca.
- **Expose Armor** ahora equivale a cinco aplicaciones de Sunder Armor y ya no impide a los guerreros usar Sunder Armor en el mismo objetivo.
- Los pícaros pueden equiparse **hachas de una mano**.
- **Assassination**: Mutilate (21 puntos) golpea con dos dagas por 2 puntos de combo; Venom (31 puntos) es un remate que aumenta un 30% el daño de los venenos. Cold Blood pasa a 16 puntos, e Improved Poisons evita a menudo que se gasten las cargas.
- **Combat**: Hack and Slash sustituye a los talentos de especialización en armas y añade una bonificación para las hachas; Flawless Execution (16 puntos) reduce el coste de Energía de Eviscerate. Varios talentos ahora también apoyan las configuraciones con Backstab.
- **Subtlety**: Premeditation pasa a ser el talento de 16 puntos y dura 20 segundos; Cutthroat puede permitir Ambush sin Stealth después de un Backstab; Thousand Cuts (31 puntos) hace que Rupture rebaje el coste de Hemorrhage y Backstab.

## Brujo {#brujo}

- **Banes**: Curse of Agony y Curse of Doom pasan a ser Bane of Agony y Bane of Doom. Cada brujo puede tener un solo Bane por objetivo, aparte de las Curses de utilidad. Curse of the Elements ahora afecta a todo el daño mágico, y Curse of Shadows desaparece.
- **Firestone y Spellstone** pasan a ser imbuiciones de arma que se acumulan con encantamientos temporales como el Wizard Oil: daño de fuego y probabilidad de golpe crítico con Firestone, daño de Sombras y celeridad de hechizos con Spellstone.
- **Las mascotas escalan con las estadísticas del brujo**. Life Tap escala con el Espíritu, y la probabilidad de Drain Soul de dar una Soul Shard sube en cada tick hasta que es segura.
- **Affliction**: Curse of Exhaustion pasa a ser el talento de 16 puntos con una ralentización del 30%; Wrack (31 puntos) es un hechizo nuevo de drenaje para el daño de Sombras en el tiempo.
- **Demonology**: Demonic Sacrifice pasa a ser el talento de 11 puntos y sus efectos duran 2 horas. Fel Domination pasa a 16 puntos y Soul Link a 21. Demonic Pact (31 puntos) mantiene el efecto del sacrificio cuando invocas otra mascota, así que por primera vez funciona junto con Master Demonologist.
- **Destruction**: Destructive Reach pasa a la primera fila y beneficia a todas las especializaciones; Conflagrate pasa a ser el talento de 16 puntos; Bane of Havoc (21 puntos) copia en el objetivo maldito el 15% del daño que haces a otros; Incinerate es el talento de 31 puntos.

## Lo que aún no sabemos {#no-sabemos}

- **Cuándo llega el repaso del paladín.** A 11 de octubre Blizzard no lo ha publicado. El primer artículo solo dice que llegarán más repasos durante la beta. De momento sabemos que Blessing of Kings pasa a ser básica y que las notas del 8 de octubre cambiaron Retribution Aura y Reckoning.
- **Los números definitivos.** Muchos cambios se describen solo como "aumentado", "reducido" o "de forma significativa", sin valores.
- **Si todo está ya en la beta.** Algunos talentos de Feral no estaban el 30 de septiembre, y el artículo del chamán señala un error: de momento Totemic Recall no devuelve el maná.
- **Cuánto cambiará antes del lanzamiento.** Los cuatro artículos dicen que las facultades y los talentos pueden cambiar durante la beta. Los cambios posteriores a los artículos están en nuestra [página de cambios de la beta](/es/changes); los términos del juego, en el [glosario](/es/glossary).`,
  ),
  faq: {
    en: [
      {
        q: "Which classes have a deep dive for WoW Forever?",
        a: "Eight of the nine: Hunter and Druid, Priest and Warrior (30 September 2026), Mage and Shaman, Rogue and Warlock (7 October 2026). As of 11 October the Paladin has none.",
      },
      {
        q: "When do talents unlock in WoW Forever and how do you change them?",
        a: "At level 10, with one-point milestone talents at 11, 16, 21 and 31 points. You change them, Legacy talents included, at a class trainer in one of the major cities. Dual Specialization is available from level 40.",
      },
      {
        q: "Are the changes in the class deep dives final?",
        a: "No. All four articles say that abilities and talents may keep changing during the beta, and some, such as Penance and Warrior Rage, changed again with the beta notes of 8 October.",
      },
    ],
    it: [
      {
        q: "Quali classi hanno un approfondimento per WoW Forever?",
        a: "Otto su nove: Cacciatore e Druido, Sacerdote e Guerriero (30 settembre 2026), Mago e Sciamano, Ladro e Stregone (7 ottobre 2026). All'11 ottobre il Paladino non ne ha ancora uno.",
      },
      {
        q: "Quando si sbloccano i talenti in WoW Forever e come si cambiano?",
        a: "Al livello 10, con i talenti traguardo da un punto a 11, 16, 21 e 31 punti. Si cambiano, compresi i talenti Legacy, da un istruttore della propria classe in una delle città principali. La doppia specializzazione è disponibile dal livello 40.",
      },
      {
        q: "Le modifiche degli approfondimenti sulle classi sono definitive?",
        a: "No. Tutti e quattro gli articoli dicono che abilità e talenti possono cambiare ancora durante la beta, e alcune, come Penance e l'Ira del Guerriero, sono cambiate di nuovo con le note della beta dell'8 ottobre.",
      },
    ],
    es: [
      {
        q: "¿Qué clases tienen un repaso a fondo en WoW Forever?",
        a: "Ocho de las nueve: cazador y druida, sacerdote y guerrero (30 de septiembre de 2026), mago y chamán, pícaro y brujo (7 de octubre de 2026). A 11 de octubre el paladín todavía no tiene el suyo.",
      },
      {
        q: "¿Cuándo se desbloquean los talentos en WoW Forever y cómo se cambian?",
        a: "En el nivel 10, con talentos clave de un punto a los 11, 16, 21 y 31 puntos. Se cambian, incluidos los talentos de legado, con un instructor de clase en una de las ciudades principales. La doble especialización está disponible a partir del nivel 40.",
      },
      {
        q: "¿Son definitivos los cambios de los repasos a fondo de las clases?",
        a: "No. Los cuatro artículos dicen que las facultades y los talentos pueden seguir cambiando durante la beta, y algunos, como Penance y la Ira del guerrero, volvieron a cambiar con las notas de la beta del 8 de octubre.",
      },
    ],
  },
};

export default item;

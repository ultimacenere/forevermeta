import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/** Note di sviluppo della beta del 15 ottobre 2026 (Kaivax, Community Manager, forum ufficiale US, 16/10 00:15 UTC). */
const DEV_NOTES_OCT_15 = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-15/2360696/6";

const item: NewsItem = {
  slug: "beta-development-notes-october-15",
  date: "2026-10-15",
  source: "blizzard",
  topic: "beta",
  url: DEV_NOTES_OCT_15,
  image: media.racialsMulgore.src,
  imageAlt: media.racialsMulgore.alt,
  guides: ["wow-forever-races-classes", "wow-forever-legacy-system"],
  title: n(
    "WoW Forever beta, 15 October notes: racials reworked, new tutorial, Mage and Shaman talents redesigned",
    "Beta di WoW Forever, note del 15 ottobre: razziali riviste, nuovo tutorial, talenti di Mago e Sciamano rifatti",
    "Beta de WoW Forever, notas del 15 de octubre: raciales revisadas, nuevo tutorial y talentos de mago y chamán",
  ),
  metaTitle: n("WoW Forever beta notes, 15 October: racials reworked", "WoW Forever: note della beta del 15 ottobre", "WoW Forever: notas de la beta del 15 de octubre"),
  summary: n(
    "Blizzard's fourth weekly update to the WoW Forever beta reworks the racial abilities of all nine races, removing the weapon specializations of Humans, Orcs and Dwarves. It also adds a tutorial for new players, the new Mage spell Frost Blast and a reshaped Elemental Shaman tree, and makes many buffs and auras raid-wide.",
    "Il quarto aggiornamento settimanale della beta di WoW Forever rivede le abilità razziali di tutte e nove le razze e toglie le specializzazioni d'arma di Umani, Orchi e Nani. Arrivano anche un tutorial per i nuovi giocatori, il nuovo incantesimo del Mago Frost Blast e un albero dello Sciamano Elementale ridisegnato, e molti potenziamenti e aure valgono ora per tutta l'incursione.",
    "La cuarta actualización semanal de la beta de WoW Forever revisa las habilidades raciales de las nueve razas y elimina las especializaciones de arma de humanos, orcos y enanos. Además llegan un tutorial para jugadores nuevos, el nuevo hechizo de mago Frost Blast y un árbol de chamán elemental rediseñado, y muchas mejoras y auras pasan a afectar a toda la banda.",
  ),
  description: n(
    "WoW Forever beta notes of 15 October 2026: racials of all nine races reworked, new tutorial, Frost Blast for Mages, new Elemental tree and raid-wide auras.",
    "Note della beta di WoW Forever del 15 ottobre 2026: razziali riviste per nove razze, nuovo tutorial, Frost Blast per il Mago e aure per tutta l'incursione.",
    "Notas de la beta de WoW Forever del 15 de octubre: raciales revisadas en las nueve razas, nuevo tutorial, Frost Blast para el mago y auras para toda la banda.",
  ),
  highlights: {
    en: [
      { label: "Racials", text: "all nine races change; weapon specializations become critical strike bonuses", anchor: "racials" },
      { label: "For everyone", text: "a new tutorial, an Auto Attack/Auto Shot setting and raid-wide auras", anchor: "everyone" },
      { label: "Mage", text: "new spell Frost Blast, Arcane Blast redesigned, new Arcane Wrath talent", anchor: "mage" },
      { label: "Shaman", text: "Elemental tree reshaped, Chain Lightning and Fire Nova retuned", anchor: "shaman" },
      { label: "Other classes", text: "changes for all nine classes, with Priest talents and Paladin Salvation reworked", anchor: "classes" },
      { label: "Dalaran", text: "the Horde is now attacked on sight in the open-world city", anchor: "other" },
    ],
    it: [
      { label: "Razziali", text: "cambiano tutte e nove le razze; le specializzazioni d'arma diventano bonus ai critici", anchor: "razziali" },
      { label: "Per tutti", text: "un nuovo tutorial, l'opzione Auto Attack/Auto Shot e aure per tutta l'incursione", anchor: "per-tutti" },
      { label: "Mago", text: "nuovo incantesimo Frost Blast, Arcane Blast rifatto, nuovo talento Arcane Wrath", anchor: "mago" },
      { label: "Sciamano", text: "albero Elementale ridisegnato, ritoccati Chain Lightning e Fire Nova", anchor: "sciamano" },
      { label: "Le altre classi", text: "modifiche per tutte e nove le classi, con talenti del Sacerdote e Salvation del Paladino rivisti", anchor: "classi" },
      { label: "Dalaran", text: "l'Orda viene attaccata a vista nella città del mondo aperto", anchor: "altro" },
    ],
    es: [
      { label: "Raciales", text: "cambian las nueve razas; las especializaciones de arma pasan a ser bonificaciones de crítico", anchor: "raciales" },
      { label: "Para todos", text: "un tutorial nuevo, la opción Auto Attack/Auto Shot y auras para toda la banda", anchor: "para-todos" },
      { label: "Mago", text: "nuevo hechizo Frost Blast, Arcane Blast rediseñado y nuevo talento Arcane Wrath", anchor: "mago" },
      { label: "Chamán", text: "árbol elemental rediseñado, retoques a Chain Lightning y Fire Nova", anchor: "chaman" },
      { label: "Las demás clases", text: "cambios para las nueve clases, con talentos de sacerdote y Salvation de paladín revisados", anchor: "clases" },
      { label: "Dalaran", text: "la Horda es atacada nada más verla en la ciudad del mundo abierto", anchor: "otros" },
    ],
  },
  body: n(
    `On 15 October 2026 (in Europe it was already the night of the 16th) Kaivax, Community Manager at Blizzard, updated the official WoW Forever beta development notes for the fourth Thursday in a row. It is the longest update so far, with less than a week to go before the beta ends on 21 October. Here is what changes for players. Spell, talent and quest names stay in English, as in the notes; the previous update is in our article on the [8 October notes](/en/news/beta-development-notes-october-8).

## Racials: all nine races change {#racials}

The biggest news is a rework of the racial abilities. Human, Orc and Dwarf lose their weapon specializations, replaced by critical strike bonuses that work with any weapon.

- **Human**: Sword Specialization is replaced by **Ruthless**, 2% critical strike chance.
- **Orc**: Axe Specialization is replaced by **Savage**, 1% critical strike chance. Blood Fury now has a 3-minute cooldown (was 2). Shatter Curse now dispels Curses and Banes (it used to grant immunity) and reduces magic damage taken by 5% (was 15%).
- **Dwarf**: Mace Specialization is replaced by **Earth Fury**, 2% increased critical damage and healing. Find Treasure also gives a chance to find extra items in most chests.
- **Tauren**: Endurance now gives 2% increased critical damage and healing (was 1% hit chance). Plainsrunning also gives 3% mounted speed, but you have to keep moving a minimum distance per second (stutter-stepping no longer keeps it active). Cultivation has a 15-minute cooldown (was 60), War Stomp 90 seconds (was 2 minutes).
- **Skyborne**: Wind Blessed gives 3% haste (was 1%); Skysight and Read Leyline can be cast while moving, and Read Leyline lasts at least 30 seconds (was 20); Walk on Air has a 90-second cooldown (was 2 minutes). Elemental Convergences and Leylines appear in more places in most zones of the Eastern Kingdoms and Kalimdor.
- **Undead**: Touch of the Dead activates 30% of the time for casters and 20% for Paladins, Rogues and Warriors, with a 25-second internal cooldown, and no longer scales with Shadow damage bonuses. Will of the Forsaken is no longer available under Scatter Shot.
- **Gnome**: Eureka! becomes an 8-second buff with no charges, with the same effect, and now also works with Power Word: Shield. The notes add, without further detail, that Eureka “cannot correctly be used” while stealthed or invisible.
- **Night Elf**: the speed of Quickness now stacks with other movement speed increases.
- **Troll**: Regeneration bonuses go up to 20% (was 10%).

The races and their classes are in our [guide to races and classes](/en/guides/wow-forever-races-classes).

## For everyone {#everyone}

- A **new tutorial** for players who are new to the game.
- A new **Auto Attack/Auto Shot** setting: Hunters switch automatically between melee and ranged attacks, gamepad included.
- **Wands and Auto Shot** now require you to stand still for 0.5 seconds before shooting, as in early versions of World of Warcraft.
- Several buffs and auras now affect the **whole raid**: Moonkin Aura, Leader of the Pack, Trueshot Aura, Battle Shout and the Shaman totems Grace of Air, Strength of Earth, Windfury and Flametongue.
- Creatures regenerate health again out of combat, and the Bloom intensity is now a slider in the advanced graphics options.

## Mage {#mage}

- **Frost Blast**, a new spell learned at level 24: damage and a 40% slow, 1.5-second cast, affected by every talent that affects Frostbolt. It replaces the old trick of casting Rank 1 Frostbolt just for the slow, which is now penalized; it costs more Mana and deals a little more damage.
- **Arcane Blast** is redesigned: 1.5-second cast, each cast gives 15% of your Intellect as extra Spell Damage for 15 seconds, stacking up to 4 times (the cost still goes up with each stack); damage and coefficients are 40% lower.
- **Arcane Wrath**, a new 16-point gold medal talent: base damage similar to Fireball, 3.5-second cast, plus damage as if you had extra Spell Power equal to 5% of your maximum Mana; 6-second cooldown. Missile Barrage moves to the first row.
- Fire: Fire Power is redesigned (up to 12% more Fire damage depending on your Fire effects on the target), Critical Mass goes up to 5 points, Wake of Fire goes back to Improved Fire Blast.
- Frost: Ice Lance against frozen targets deals 200% more damage (was 300%); Cone of Cold slows the first four targets hit more and for longer. Winter's Chill is redesigned around Cone of Cold, but the notes give two different descriptions of it.

## Shaman {#shaman}

- The **Elemental** tree is reshaped: **Elemental Mastery** returns as the 31-point gold medal talent (Lightning Bolt and Lava Burst 0.5 seconds faster, no cooldown on Chain Lightning for 15 seconds, 3-minute cooldown); **Lava Burst** moves to the fifth row as the 21-point gold medal talent, with a new rank; Earthbound becomes the 16-point talent; Call of Thunder is removed.
- **Chain Lightning** costs about 35% less Mana at every rank. **Fire Nova** has much lower base damage and Mana cost, and a 0.143 spell power coefficient (was 0.214).
- Grace of Air Totem no longer excludes Windfury and Flametongue Totem; Stormstrike costs 8% of base Mana (it was a flat 125); Mana Tide Totem gets a new rank at level 38; Water Shield triggers from any critical spell, not just heals.

## The other classes {#classes}

- **Priest**: Devouring Plague cooldown 24 seconds (was 1 minute), Shadow Word: Death 18 seconds (was 12). Shadow: Vampiric Embrace has a 30-second cooldown (was 1 minute) and can no longer be resisted, Improved Fade and Shadow Infinity are removed, new talent Dark Inspiration (party Spirit), Devouring Contagion spreads to 2 targets. Discipline: Mental Strength increases Intellect and moves to the second row.
- **Paladin**: Blessing of Salvation and Greater Blessing of Salvation become **Salvation** and **Mass Salvation**, which can be active together with the other blessings, with the new **Revoke** to remove them. Consecration coefficient 0.042 per tick (was 0.095), Righteous Fury threat from Holy damage 90% (was 60%), Seal of Righteousness fixed (it got almost twice the intended benefit from Spell Damage). Reckoning stores up to 4 charges again, as in Classic Era.
- **Hunter**: one Fire Trap and one Ice Trap can be active at the same time; Fire Traps scale with Attack Power; pet abilities Dismember, Sonic Blast and Mine! have smaller effects or shorter durations and longer cooldowns; Strider Kick works while disarmed.
- **Druid**: Moonkin Aura and Leader of the Pack are raid-wide; Faerie Fire generates threat in bear forms; Shred is learned at level 20 (was 22); with Furor you keep your Energy when you shift to bear and back.
- **Warlock**: Malediction is replaced by Grim Reach (Affliction spell range +10/20%); Shadow Mastery gives 2–10% Shadow damage (was 1–5%).
- **Warrior**: Battle Shout is raid-wide and Slam is no longer pushed back; fixes to Overpower, Lingering Rage and Improved Berserker Rage.
- **Rogue**: poisons no longer trigger against targets that are attacking you, Sap no longer triggers weapon effects, and a bug that kept Energy full by swapping specializations is fixed.

Every change, line by line, is on our [beta changes page](/en/changes).

## Dalaran, Legacy and the rest {#other}

- **Dalaran**: the Horde is now attacked on sight in the open-world city of Dalaran. Access to the City of Dalaran dungeon does not change, but the Horde quest for the Dalaran Sewer Key no longer opens up the city.
- **Legacy System**: the Bartering perk no longer discounts training and repairs; The Quick and the Dead affects more Priest spells. More in our [Legacy System guide](/en/guides/wow-forever-legacy-system).
- **PvP**: Battleground Marks of Honor stack up to 30 (was 20).
- **Items**: scrolls trigger the global cooldown; Draught of Predatory Senses becomes a potion on the combat potion cooldown; many crafted items sell for less to vendors.
- **Interface and gamepad**: an equippable level column in the Auction House, level-up messages with stats and talent points are back, /who also searches subzones, a swing timer on the gamepad reticle, and Trade, Guild and Transmog windows usable with a gamepad. Plus many quest fixes, from Ashenvale to Zephras Isle.

## What we don't know yet {#unknown}

- The notes do not give the build number.
- Winter's Chill has two different descriptions in the notes (one with 40% more Cone of Cold damage per stack, one with 5% per stack up to 5 times): we will check which one is in the game.
- Whether another update will come before the beta closes on 21 October.`,
    `Il 15 ottobre 2026 (in Italia era già la notte del 16) Kaivax, Community Manager di Blizzard, ha aggiornato per il quarto giovedì di fila le note di sviluppo ufficiali della beta di WoW Forever. È l'aggiornamento più lungo finora, a meno di una settimana dalla fine della beta, il 21 ottobre. Ecco cosa cambia per chi gioca. I nomi di incantesimi, talenti e missioni restano in inglese, come nelle note e nel gioco; l'aggiornamento precedente è nel nostro articolo sulle [note dell'8 ottobre](/it/news/beta-development-notes-october-8).

## Razziali: cambiano tutte e nove le razze {#razziali}

La novità più grande è la revisione delle abilità razziali. Umani, Orchi e Nani perdono le specializzazioni d'arma, sostituite da bonus ai colpi critici che valgono con qualunque arma.

- **Umani**: Sword Specialization diventa **Ruthless**, 2% di probabilità di critico.
- **Orchi**: Axe Specialization diventa **Savage**, 1% di probabilità di critico. Blood Fury ha un tempo di recupero di 3 minuti (erano 2). Shatter Curse ora dissolve Maledizioni e Banes (prima dava l'immunità) e riduce i danni magici subiti del 5% (era 15%).
- **Nani**: Mace Specialization diventa **Earth Fury**, +2% ai danni e alle cure critiche. Find Treasure dà anche la possibilità di trovare oggetti in più nella maggior parte dei forzieri.
- **Tauren**: Endurance dà +2% ai danni e alle cure critiche (prima 1% di probabilità di colpire). Plainsrunning dà anche il 3% di velocità in sella, ma bisogna percorrere una distanza minima al secondo (i passettini non bastano più a tenerlo attivo). Cultivation ha un tempo di recupero di 15 minuti (erano 60), War Stomp di 90 secondi (erano 2 minuti).
- **Skyborne**: Wind Blessed dà il 3% di celerità (era 1%); Skysight e Read Leyline si lanciano anche in movimento e Read Leyline dura almeno 30 secondi (erano 20); Walk on Air ha un tempo di recupero di 90 secondi (erano 2 minuti). Elemental Convergences e Leylines compaiono in più punti nella maggior parte delle zone dei Regni Orientali e di Kalimdor.
- **Non Morti**: Touch of the Dead si attiva nel 30% dei casi per gli incantatori e nel 20% per Paladini, Ladri e Guerrieri, con un tempo di recupero interno di 25 secondi, e non cresce più con i bonus ai danni d'Ombra. Will of the Forsaken non si può più usare sotto Scatter Shot.
- **Gnomi**: Eureka! diventa un potenziamento di 8 secondi senza cariche, con lo stesso effetto, e ora vale anche per Power Word: Shield. Le note aggiungono, senza altri dettagli, che Eureka “non si può usare correttamente” in furtività o invisibilità.
- **Elfi della Notte**: la velocità di Quickness ora si somma agli altri aumenti di velocità di movimento.
- **Troll**: i bonus di Regeneration salgono al 20% (era 10%).

Le razze e le loro classi sono nella nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).

## Per tutti {#per-tutti}

- Un **nuovo tutorial** per chi gioca per la prima volta.
- Una nuova opzione **Auto Attack/Auto Shot**: il Cacciatore passa da solo dall'attacco in mischia a quello a distanza, anche con il gamepad.
- **Bacchette e Auto Shot** ora chiedono di stare fermi 0,5 secondi prima di sparare, come nelle prime versioni di World of Warcraft.
- Diversi potenziamenti e aure valgono ora per **tutta l'incursione**: Moonkin Aura, Leader of the Pack, Trueshot Aura, Battle Shout e i totem dello Sciamano Grace of Air, Strength of Earth, Windfury e Flametongue.
- Le creature tornano a rigenerare la vita fuori dal combattimento, e l'intensità del Bloom diventa un cursore nelle opzioni grafiche avanzate.

## Mago {#mago}

- **Frost Blast**, nuovo incantesimo che si impara al livello 24: danno e rallentamento del 40%, 1,5 secondi di lancio, potenziato da tutti i talenti che potenziano Frostbolt. Prende il posto del vecchio trucco di lanciare Frostbolt di rango 1 solo per il rallentamento, che ora è penalizzato; costa più Mana e fa un po' più di danno.
- **Arcane Blast** è rifatto: 1,5 secondi di lancio, ogni lancio dà il 15% dell'Intelletto come Spell Damage in più per 15 secondi, fino a 4 volte (il costo sale ancora a ogni carica); danno e coefficienti più bassi del 40%.
- **Arcane Wrath**, nuovo talento medaglia d'oro da 16 punti: danno base simile a Fireball, 3,5 secondi di lancio, più danno come se avessi Spell Power in più pari al 5% del tuo Mana massimo; tempo di recupero di 6 secondi. Missile Barrage passa alla prima fila.
- Fuoco: Fire Power è rifatto (fino al 12% di danni da Fuoco in più a seconda dei tuoi effetti di Fuoco sul bersaglio), Critical Mass arriva a 5 punti, Wake of Fire torna Improved Fire Blast.
- Gelo: Ice Lance sui bersagli congelati fa il 200% di danni in più (era 300%); Cone of Cold rallenta di più e più a lungo i primi quattro bersagli colpiti. Winter's Chill è rifatto attorno a Cone of Cold, ma le note ne danno due descrizioni diverse.

## Sciamano {#sciamano}

- L'albero **Elementale** cambia forma: **Elemental Mastery** torna come talento medaglia d'oro da 31 punti (Lightning Bolt e Lava Burst più veloci di 0,5 secondi, nessun tempo di recupero su Chain Lightning per 15 secondi, tempo di recupero di 3 minuti); **Lava Burst** passa alla quinta fila come talento medaglia d'oro da 21 punti, con un rango nuovo; Earthbound diventa il talento da 16 punti; Call of Thunder viene tolto.
- **Chain Lightning** costa circa il 35% di Mana in meno a ogni rango. **Fire Nova** ha danno base e costo in Mana molto più bassi e un coefficiente di spell power di 0,143 (era 0,214).
- Grace of Air Totem non esclude più Windfury e Flametongue Totem; Stormstrike costa l'8% del Mana base (prima 125 fissi); Mana Tide Totem ha un rango nuovo al livello 38; Water Shield si attiva con qualunque incantesimo critico, non solo con le cure.

## Le altre classi {#classi}

- **Sacerdote**: tempo di recupero di Devouring Plague a 24 secondi (era 1 minuto), di Shadow Word: Death a 18 secondi (erano 12). Ombra: Vampiric Embrace ha un tempo di recupero di 30 secondi (era 1 minuto) e non si può più resistere, Improved Fade e Shadow Infinity spariscono, nuovo talento Dark Inspiration (Spirito al gruppo), Devouring Contagion si propaga a 2 bersagli. Disciplina: Mental Strength aumenta l'Intelletto e passa alla seconda fila.
- **Paladino**: Blessing of Salvation e Greater Blessing of Salvation diventano **Salvation** e **Mass Salvation**, che ora convivono con le altre benedizioni, con il nuovo **Revoke** per toglierle. Coefficiente di Consecration a 0,042 per impulso (era 0,095), minaccia di Righteous Fury dai danni Sacri al 90% (era 60%), corretto Seal of Righteousness (prendeva dallo Spell Damage quasi il doppio del previsto). Reckoning torna ad accumulare fino a 4 cariche, come in Classic Era.
- **Cacciatore**: si possono avere attive insieme una trappola di Fuoco e una di Ghiaccio; le trappole di Fuoco crescono con il potere d'attacco; le abilità dei famigli Dismember, Sonic Blast e Mine! hanno effetti più piccoli o durate più brevi e tempi di recupero più lunghi; Strider Kick si usa anche disarmati.
- **Druido**: Moonkin Aura e Leader of the Pack valgono per tutta l'incursione; Faerie Fire genera minaccia nelle forme d'orso; Shred si impara al livello 20 (era 22); con Furor l'Energia resta quando passi all'orso e torni gatto.
- **Stregone**: Malediction diventa Grim Reach (portata degli incantesimi di Afflizione +10/20%); Shadow Mastery dà il 2–10% di danni d'Ombra (era 1–5%).
- **Guerriero**: Battle Shout vale per tutta l'incursione e Slam non viene più rallentato dai colpi subiti; correzioni a Overpower, Lingering Rage e Improved Berserker Rage.
- **Ladro**: i veleni non si attivano più contro chi ti sta attaccando, Sap non attiva più gli effetti delle armi, ed è corretto un bug che teneva l'Energia piena cambiando specializzazione.

Tutte le modifiche, riga per riga, sono nella nostra [pagina delle modifiche della beta](/it/changes).

## Dalaran, Legacy e il resto {#altro}

- **Dalaran**: l'Orda viene attaccata a vista nella città di Dalaran del mondo aperto. L'accesso al dungeon City of Dalaran non cambia, ma la missione dell'Orda per la Dalaran Sewer Key non apre più la città.
- **Legacy System**: il vantaggio Bartering non fa più lo sconto su addestramento e riparazioni; The Quick and the Dead vale per più incantesimi del Sacerdote. Di più nella nostra [guida al Legacy System](/it/guides/wow-forever-legacy-system).
- **PvP**: i Marks of Honor dei campi di battaglia si accumulano fino a 30 (erano 20).
- **Oggetti**: le pergamene attivano il tempo di recupero globale; Draught of Predatory Senses diventa una pozione con il tempo di recupero delle pozioni da combattimento; molti oggetti delle professioni si vendono per meno ai mercanti.
- **Interfaccia e gamepad**: una colonna con il livello per indossare l'oggetto nella casa d'aste, tornano i messaggi di salita di livello con le statistiche e i punti talento, /who cerca anche nelle sottozone, un timer degli attacchi sul mirino del gamepad e le finestre di scambio, gilda e trasmogrificazione usabili con il gamepad. In più molte correzioni alle missioni, da Ashenvale a Zephras Isle.

## Cosa non sappiamo ancora {#non-sappiamo}

- Le note non danno il numero della build.
- Winter's Chill ha due descrizioni diverse nelle note (una con il 40% di danni in più a Cone of Cold per carica, una con il 5% per carica fino a 5 volte): verificheremo quale è nel gioco.
- Se arriverà un altro aggiornamento prima della chiusura della beta, il 21 ottobre.`,
    `El 15 de octubre de 2026 (en España ya era la madrugada del 16) Kaivax, Community Manager de Blizzard, actualizó por cuarto jueves seguido las notas de desarrollo oficiales de la beta de WoW Forever. Es la actualización más larga hasta ahora, a menos de una semana del final de la beta, el 21 de octubre. Esto es lo que cambia para quien juega. Los nombres de hechizos, talentos y misiones se quedan en inglés, como en las notas; la actualización anterior está en nuestro artículo sobre las [notas del 8 de octubre](/es/news/beta-development-notes-october-8).

## Raciales: cambian las nueve razas {#raciales}

La gran novedad es la revisión de las habilidades raciales. Humanos, orcos y enanos pierden sus especializaciones de arma, que se sustituyen por bonificaciones de golpe crítico que funcionan con cualquier arma.

- **Humanos**: Sword Specialization pasa a ser **Ruthless**, un 2% de probabilidad de crítico.
- **Orcos**: Axe Specialization pasa a ser **Savage**, un 1% de probabilidad de crítico. Blood Fury tiene un tiempo de reutilización de 3 minutos (antes 2). Shatter Curse ahora disipa maldiciones y Banes (antes daba inmunidad) y reduce el daño mágico recibido un 5% (antes 15%).
- **Enanos**: Mace Specialization pasa a ser **Earth Fury**, un 2% más de daño y sanación críticos. Find Treasure además da la posibilidad de encontrar objetos extra en la mayoría de los cofres.
- **Tauren**: Endurance da un 2% más de daño y sanación críticos (antes un 1% de probabilidad de golpe). Plainsrunning da también un 3% de velocidad montado, pero tienes que recorrer una distancia mínima por segundo (moverte a pasitos ya no basta para mantenerlo). Cultivation tiene un tiempo de reutilización de 15 minutos (antes 60) y War Stomp de 90 segundos (antes 2 minutos).
- **Célicos (Skyborne)**: Wind Blessed da un 3% de celeridad (antes 1%); Skysight y Read Leyline se pueden lanzar en movimiento, y Read Leyline dura al menos 30 segundos (antes 20); Walk on Air tiene un tiempo de reutilización de 90 segundos (antes 2 minutos). Las Elemental Convergences y las Leylines aparecen en más lugares en la mayoría de las zonas de los Reinos del Este y Kalimdor.
- **No-muertos**: Touch of the Dead se activa un 30% de las veces para los lanzadores de hechizos y un 20% para paladines, pícaros y guerreros, con un tiempo de reutilización interno de 25 segundos, y ya no aumenta con las bonificaciones de daño de las Sombras. Will of the Forsaken ya no se puede usar bajo Scatter Shot.
- **Gnomos**: Eureka! pasa a ser una mejora de 8 segundos sin cargas, con el mismo efecto, y ahora también funciona con Power Word: Shield. Las notas añaden, sin más detalles, que Eureka “no se puede usar correctamente” en sigilo o invisibilidad.
- **Elfos de la noche**: la velocidad de Quickness ahora se acumula con otros aumentos de velocidad de movimiento.
- **Trols**: las bonificaciones de Regeneration suben al 20% (antes 10%).

Las razas y sus clases están en nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).

## Para todos {#para-todos}

- Un **tutorial nuevo** para quien juega por primera vez.
- Una nueva opción **Auto Attack/Auto Shot**: los cazadores cambian solos entre el ataque cuerpo a cuerpo y a distancia, también con mando.
- **Las varitas y Auto Shot** ahora exigen quedarte quieto 0,5 segundos antes de disparar, como en las primeras versiones de World of Warcraft.
- Varias mejoras y auras afectan ahora a **toda la banda**: Moonkin Aura, Leader of the Pack, Trueshot Aura, Battle Shout y los tótems de chamán Grace of Air, Strength of Earth, Windfury y Flametongue.
- Las criaturas vuelven a regenerar salud fuera de combate, y la intensidad del Bloom pasa a ser un control deslizante en las opciones gráficas avanzadas.

## Mago {#mago}

- **Frost Blast**, un hechizo nuevo que se aprende a nivel 24: daño y una ralentización del 40%, 1,5 segundos de lanzamiento, mejorado por todos los talentos que mejoran Frostbolt. Sustituye al viejo truco de lanzar Frostbolt de rango 1 solo por la ralentización, que ahora está penalizado; cuesta más maná y hace algo más de daño.
- **Arcane Blast** se rediseña: 1,5 segundos de lanzamiento, cada lanzamiento da un 15% de tu intelecto como daño con hechizos extra durante 15 segundos, hasta 4 veces (el coste sigue subiendo con cada acumulación); daño y coeficientes un 40% más bajos.
- **Arcane Wrath**, nuevo talento de medalla de oro de 16 puntos: daño base parecido a Fireball, 3,5 segundos de lanzamiento, y daño como si tuvieras un poder con hechizos extra igual al 5% de tu maná máximo; 6 segundos de reutilización. Missile Barrage pasa a la primera fila.
- Fuego: Fire Power se rediseña (hasta un 12% más de daño de Fuego según tus efectos de Fuego en el objetivo), Critical Mass llega a 5 puntos y Wake of Fire vuelve a ser Improved Fire Blast.
- Escarcha: Ice Lance contra objetivos congelados hace un 200% más de daño (antes 300%); Cone of Cold ralentiza más y durante más tiempo a los cuatro primeros objetivos alcanzados. Winter's Chill se rediseña en torno a Cone of Cold, pero las notas dan dos descripciones distintas.

## Chamán {#chaman}

- El árbol **elemental** cambia de forma: **Elemental Mastery** vuelve como talento de medalla de oro de 31 puntos (Lightning Bolt y Lava Burst 0,5 segundos más rápidos, sin tiempo de reutilización en Chain Lightning durante 15 segundos, 3 minutos de reutilización); **Lava Burst** pasa a la quinta fila como talento de medalla de oro de 21 puntos, con un rango nuevo; Earthbound pasa a ser el talento de 16 puntos; Call of Thunder desaparece.
- **Chain Lightning** cuesta alrededor de un 35% menos de maná en todos los rangos. **Fire Nova** tiene un daño base y un coste de maná mucho más bajos y un coeficiente de poder con hechizos de 0,143 (antes 0,214).
- Grace of Air Totem ya no excluye a Windfury ni a Flametongue Totem; Stormstrike cuesta un 8% del maná base (antes 125 fijos); Mana Tide Totem tiene un rango nuevo a nivel 38; Water Shield se activa con cualquier hechizo crítico, no solo con las sanaciones.

## Las demás clases {#clases}

- **Sacerdote**: tiempo de reutilización de Devouring Plague a 24 segundos (antes 1 minuto) y de Shadow Word: Death a 18 segundos (antes 12). Sombra: Vampiric Embrace tiene 30 segundos de reutilización (antes 1 minuto) y ya no se puede resistir, desaparecen Improved Fade y Shadow Infinity, nuevo talento Dark Inspiration (espíritu para el grupo) y Devouring Contagion se propaga a 2 objetivos. Disciplina: Mental Strength aumenta el intelecto y pasa a la segunda fila.
- **Paladín**: Blessing of Salvation y Greater Blessing of Salvation pasan a ser **Salvation** y **Mass Salvation**, que ahora pueden estar activas junto con las demás bendiciones, con el nuevo **Revoke** para quitarlas. Coeficiente de Consecration a 0,042 por pulso (antes 0,095), amenaza de Righteous Fury por daño Sagrado al 90% (antes 60%) y corregido Seal of Righteousness (recibía del daño con hechizos casi el doble de lo previsto). Reckoning vuelve a acumular hasta 4 cargas, como en Classic Era.
- **Cazador**: puedes tener activas a la vez una trampa de Fuego y una de Hielo; las trampas de Fuego aumentan con el poder de ataque; las habilidades de mascota Dismember, Sonic Blast y Mine! tienen efectos menores o duraciones más cortas y tardan más en reutilizarse; Strider Kick se puede usar desarmado.
- **Druida**: Moonkin Aura y Leader of the Pack afectan a toda la banda; Faerie Fire genera amenaza en las formas de oso; Shred se aprende a nivel 20 (antes 22); con Furor conservas la energía al pasar a oso y volver a felino.
- **Brujo**: Malediction pasa a ser Grim Reach (alcance de los hechizos de Aflicción +10/20%); Shadow Mastery da un 2–10% de daño de las Sombras (antes 1–5%).
- **Guerrero**: Battle Shout afecta a toda la banda y Slam ya no se retrasa al recibir golpes; correcciones en Overpower, Lingering Rage e Improved Berserker Rage.
- **Pícaro**: los venenos ya no se activan contra quien te está atacando, Sap ya no activa efectos de arma y se corrige un error que mantenía la energía llena al cambiar de especialización.

Todos los cambios, línea por línea, están en nuestra [página de cambios de la beta](/es/changes).

## Dalaran, legado y el resto {#otros}

- **Dalaran**: la Horda es atacada nada más verla en la ciudad de Dalaran del mundo abierto. El acceso a la mazmorra City of Dalaran no cambia, pero la misión de la Horda para la Dalaran Sewer Key ya no abre la ciudad.
- **Sistema de legado**: la ventaja Bartering ya no rebaja el entrenamiento ni las reparaciones; The Quick and the Dead afecta a más hechizos de sacerdote. Más en nuestra [guía del sistema de legado](/es/guides/wow-forever-legacy-system).
- **JcJ**: las Marks of Honor de los campos de batalla se acumulan hasta 30 (antes 20).
- **Objetos**: los pergaminos activan el tiempo de reutilización global; Draught of Predatory Senses pasa a ser una poción con el tiempo de reutilización de las pociones de combate; muchos objetos de profesión se venden por menos a los vendedores.
- **Interfaz y mando**: una columna con el nivel para equipar en la casa de subastas, vuelven los mensajes de subida de nivel con las estadísticas y los puntos de talento, /who también busca en subzonas, un temporizador de golpes en la retícula del mando y las ventanas de comercio, hermandad y transfiguración utilizables con mando. Además, muchas correcciones de misiones, de Ashenvale a Zephras Isle.

## Lo que aún no sabemos {#no-sabemos}

- Las notas no dan el número de la build.
- Winter's Chill tiene dos descripciones distintas en las notas (una con un 40% más de daño de Cone of Cold por acumulación y otra con un 5% por acumulación hasta 5 veces): comprobaremos cuál está en el juego.
- Si habrá otra actualización antes de que cierre la beta, el 21 de octubre.`,
  ),
  faq: {
    en: [
      {
        q: "Which racials changed in the 15 October WoW Forever beta update?",
        a: "All nine races got changes. Humans, Orcs and Dwarves lose their weapon specializations, replaced by Ruthless, Savage and Earth Fury (critical strike bonuses); Tauren, Skyborne, Undead, Gnomes, Night Elves and Trolls have their racials retuned.",
      },
      {
        q: "What is Frost Blast in WoW Forever?",
        a: "A new Mage spell added to the beta on 15 October 2026, learned at level 24: it deals damage and slows the target by 40%, with a 1.5-second cast, and benefits from Frostbolt talents. It replaces using Rank 1 Frostbolt just for the slow.",
      },
    ],
    it: [
      {
        q: "Quali razziali cambiano con l'aggiornamento della beta di WoW Forever del 15 ottobre?",
        a: "Cambiano tutte e nove le razze. Umani, Orchi e Nani perdono le specializzazioni d'arma, sostituite da Ruthless, Savage ed Earth Fury (bonus ai critici); Tauren, Skyborne, Non Morti, Gnomi, Elfi della Notte e Troll hanno razziali ritoccate.",
      },
      {
        q: "Che cos'è Frost Blast in WoW Forever?",
        a: "Un nuovo incantesimo del Mago arrivato nella beta il 15 ottobre 2026, che si impara al livello 24: fa danno e rallenta il bersaglio del 40%, con 1,5 secondi di lancio, e sfrutta i talenti di Frostbolt. Prende il posto di Frostbolt di rango 1 usato solo per rallentare.",
      },
    ],
    es: [
      {
        q: "¿Qué raciales cambian con la actualización de la beta de WoW Forever del 15 de octubre?",
        a: "Cambian las nueve razas. Humanos, orcos y enanos pierden sus especializaciones de arma, sustituidas por Ruthless, Savage y Earth Fury (bonificaciones de crítico); tauren, célicos, no-muertos, gnomos, elfos de la noche y trols tienen sus raciales retocadas.",
      },
      {
        q: "¿Qué es Frost Blast en WoW Forever?",
        a: "Un hechizo nuevo de mago que llegó a la beta el 15 de octubre de 2026 y se aprende a nivel 24: hace daño y ralentiza al objetivo un 40%, con 1,5 segundos de lanzamiento, y aprovecha los talentos de Frostbolt. Sustituye al uso de Frostbolt de rango 1 solo para ralentizar.",
      },
    ],
  },
};

export default item;

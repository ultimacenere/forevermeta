import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Video ufficiale "Class Utility For Groups | World of Warcraft: Forever" (canale YouTube World of Warcraft),
 * pubblicato il 23/11/2026 alle 10:01 PST (18:01 UTC, 19:01 CET), durata 9:06. Fonte riletta il 25/11/2026 dai
 * sottotitoli inglesi caricati da Blizzard (traccia manuale) e dalla descrizione del video (capitoli per classe).
 * Le scansioni del 24 e del 25/11 mattina non l'avevano visto: i forum non lo annunciano, l'abbiamo trovato da
 * MassivelyOP (24/11) e dalla pagina Facebook di Warcraft.
 * Refusi dei sottotitoli corretti nel testo: "Innovate" = Innervate, "Sunder Srmor" = Sunder Armor, "region" =
 * regen. La frase sul Revive del Druido nei sottotitoli è spezzata ("Revive handles it after"): la leggiamo come
 * resurrezione fuori combattimento.
 * Detto esplicitamente come novità di Forever: Scroll Comprehension del Mago, Bane in una categoria separata dalle
 * Curse, Battle Shout esteso a tutta l'incursione. Il confronto con il gioco del 2004 per le altre abilità è nostro
 * ed è scritto come tale.
 */
const VIDEO = "https://www.youtube.com/watch?v=0vd0E01nCFE";

const item: NewsItem = {
  slug: "class-utility-groups-video-battle-shout-banes",
  date: "2026-11-23",
  source: "blizzard",
  topic: "news",
  url: VIDEO,
  image: media.newsClassUtilityVideo.src,
  imageAlt: media.newsClassUtilityVideo.alt,
  guides: ["wow-forever-races-classes", "wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever class utility video: what each of the 9 classes brings to a group, from Battle Shout to Banes",
    "WoW Forever, l'utilità delle 9 classi nel gruppo: il video di Blizzard, da Battle Shout alle Bane",
    "WoW Forever, la utilidad de las 9 clases en grupo: el vídeo de Blizzard, de Battle Shout a los Banes",
  ),
  metaTitle: n(
    "WoW Forever class utility for groups: Blizzard video",
    "Utilità delle classi in WoW Forever: il video",
    "Utilidad de las clases en WoW Forever: el vídeo",
  ),
  summary: n(
    "On 23 November 2026 Blizzard published a 9-minute video on what each of the nine WoW Forever classes brings to a dungeon or raid group: buffs, crowd control, resurrections, mana and threat tools. Three changes are presented as new in Forever: Mages can read scroll drops with Scroll Comprehension, Warlock Banes are separate from Curses, and Battle Shout now reaches the whole raid.",
    "Il 23 novembre 2026 Blizzard ha pubblicato un video di 9 minuti su cosa porta a un gruppo di dungeon o di incursione ognuna delle nove classi di WoW Forever: buff, controllo dei nemici, resurrezioni, mana e strumenti per la minaccia. Tre cose sono presentate come novità di Forever: il Mago legge le pergamene trovate con Scroll Comprehension, le Bane dello Stregone sono separate dalle Curse e Battle Shout ora arriva a tutta l'incursione.",
    "El 23 de noviembre de 2026 Blizzard publicó un vídeo de 9 minutos sobre lo que aporta a un grupo de mazmorra o de banda cada una de las nueve clases de WoW Forever: mejoras, control de masas, resurrecciones, maná y herramientas de amenaza. Tres cosas se presentan como novedades de Forever: el Mago lee los pergaminos que encuentra con Scroll Comprehension, los Banes del Brujo van aparte de las Curses y Battle Shout ahora llega a toda la banda.",
  ),
  description: n(
    "Blizzard's 23 November video on WoW Forever class utility: buffs, crowd control and resurrections per class, plus raid-wide Battle Shout and Banes.",
    "Il video Blizzard del 23 novembre sull'utilità delle classi di WoW Forever: buff, controllo e resurrezioni per classe, Battle Shout per l'incursione e Bane.",
    "El vídeo de Blizzard del 23 de noviembre sobre la utilidad de las clases de WoW Forever: mejoras, control y resurrecciones, Battle Shout de banda y Banes.",
  ),
  highlights: {
    en: [
      { label: "New in Forever", text: "Scroll Comprehension, Banes apart from Curses, raid-wide Battle Shout", anchor: "new-in-forever" },
      { label: "The basics", text: "tank, healer, DPS and the three kinds of spells", anchor: "basics" },
      { label: "Class by class", text: "what each of the nine classes brings to the group", anchor: "classes" },
      { label: "Tools the 2004 game did not have", text: "our comparison, not Blizzard's", anchor: "compared" },
      { label: "What the video leaves out", text: "numbers, levels, how scrolls work", anchor: "unknowns" },
    ],
    it: [
      { label: "Novità di Forever", text: "Scroll Comprehension, Bane separate dalle Curse, Battle Shout per l'incursione", anchor: "novita-forever" },
      { label: "Le basi", text: "tank, healer, DPS e i tre tipi di incantesimi", anchor: "basi" },
      { label: "Classe per classe", text: "cosa porta al gruppo ognuna delle nove classi", anchor: "classi" },
      { label: "Strumenti che il gioco del 2004 non aveva", text: "confronto nostro, non di Blizzard", anchor: "confronto" },
      { label: "Cosa il video non dice", text: "numeri, livelli, come funzionano le pergamene", anchor: "cosa-non-dice" },
    ],
    es: [
      { label: "Novedades de Forever", text: "Scroll Comprehension, Banes aparte de las Curses, Battle Shout de banda", anchor: "novedades-forever" },
      { label: "Lo básico", text: "tanque, sanador, DPS y los tres tipos de hechizos", anchor: "basico" },
      { label: "Clase por clase", text: "lo que aporta al grupo cada una de las nueve clases", anchor: "clases" },
      { label: "Herramientas que el juego de 2004 no tenía", text: "comparación nuestra, no de Blizzard", anchor: "comparacion" },
      { label: "Lo que el vídeo no dice", text: "cifras, niveles, cómo funcionan los pergaminos", anchor: "lo-que-no-dice" },
    ],
  },
  body: n(
    `On Monday 23 November 2026 at 10:01 PST (18:01 UTC, 19:01 CET) Blizzard published [Class Utility For Groups](${VIDEO}) on the World of Warcraft YouTube channel: a 9-minute video on what each WoW Forever class brings to a party or raid beyond its damage or healing. It is a group-play primer, not patch notes: no numbers change. What follows comes from the English captions Blizzard uploaded with the video, which we read on 25 November. The video opens with the line that sums it up: in Forever, parties and groups "matter more than ever".

## Three things presented as new in Forever {#new-in-forever}

- **Mage, Scroll Comprehension**: Mages can read scrolls that drop and unlock new imbues and buffs for the party. The video does not say which scrolls or which buffs.
- **Warlock, Banes**: Banes have their own category, so a Warlock can keep a Bane and a Curse on the same enemy. We covered the split between Banes and utility Curses in our [class deep dives of October](/en/news/class-deep-dives-eight-classes).
- **Warrior, Battle Shout**: it now reaches your **entire raid**, not just your party.

## The basics: three roles, three kinds of spells {#basics}

Every group needs a **tank** who holds the enemies' attention (aggro), a **healer** who keeps everyone alive and **damage dealers** (DPS) who end the fight. The talent tree you invest in most decides which roles your character can fill; some classes can cover more than one.

Casters use three kinds of spells: **instant** ones that fire at once and let you move (Fire Blast), **cast** ones that need you to stand still and usually hit or heal the hardest (Chain Lightning), and **channeled** ones that work while you hold still (Drain Life). Damage over time (DoT) and healing over time (HoT) keep ticking after they land. Physical damage comes from auto attacks, based on weapon type and speed, and from abilities that spend Rage or Energy; Hunters bring the ranged option.

## Class by class {#classes}

- **Mage**: Conjure Food and Conjure Water for free health and mana between pulls, portals to a capital city for the whole group from level 40, Arcane Brilliance (intellect for the party), Polymorph to take an enemy out of the fight for up to 30 seconds, Frost slows and freezes, Blizzard against large pulls.
- **Rogue**: Stealth to scout ahead and Distract a patrol, Sap to remove a target before the pull, Kick, Gouge and Kidney Shot against casters, Expose Armor so every physical attacker hits harder, and Lockpicking to open strongboxes for the party.
- **Warlock**: Ritual of Summoning brings a late player to the dungeon entrance with the help of two other party members, a Soulstone on the healer before a boss, Healthstones for emergency heals, Curse of the Elements so every caster hits harder, Fear and Banish for crowd control, Seduce and Spell Lock from demons, Eye of Kilrogg to scout and Unending Breath for underwater breathing.
- **Druid**: Gift of the Wild (stats, armor and resistances for the party), Rebirth to resurrect in combat and Revive out of combat, Entangling Roots, Hibernate on beasts and dragonkin, Nature's Grasp. As a bear tank: Growl, Swipe and Demoralizing Roar. As a healer: Rejuvenation, Regrowth, **Wild Growth** across several allies and Innervate to refill a caster's mana. Prowl, Travel Form and Aquatic Form get you around.
- **Paladin**: Blessing of Kings (all stats), Might (attack power) and Wisdom (mana regen), auras for armor, resistances, cast pushback or damage back to melee attackers. As a tank: **Righteous Fury pulls onto you the enemies that are hitting an ally**, Judgement of Seal of Fury to pull one enemy, Consecration on packs and **Holy Strike** to build threat on a boss. Cleanse removes poison, disease and magic, Redemption resurrects out of combat, and the heals are Holy Light, Flash of Light and Lay on Hands.
- **Warrior**: Taunt, threat that makes holding a pack the norm, Demoralizing Shout (lower enemy attack power), Thunder Clap (slower enemy swings), Sunder Armor stacking five times so every physical attacker hits harder, and Battle Shout for the whole raid.
- **Shaman**: totems for every need: Strength of Earth, Windfury (extra auto attacks), Grace of Air (agility), Mana Spring, Mana Tide for Restoration, Tremor Totem against fear, Grounding Totem to absorb the next spell aimed at an ally, and **Totemic Call** to bring every totem to you so the buffs move with the party. Then Earth Shock to interrupt, Purge, Ghost Wolf, Reincarnation and Chain Heal.
- **Priest**: Power Word: Fortitude (stamina), Divine Spirit (spirit), Fear Ward on the tank, Dispel Magic and Cure Disease. Heals: Power Word: Shield, Prayer of Healing, Holy Nova. Shadow Priests heal the party with Vampiric Embrace: since the hotfix of 13 November the party gets 10% of the Shadow damage dealt, see our [hotfix article](/en/news/hotfixes-november-13-19-classes-items).
- **Hunter**: the pet as a second party member, traps (Freezing, Frost, Immolation, Explosive), pulling from range, Eyes of the Beast to scout through the pet and Aspect of the Pack for party speed from level 40. Pets have their own tools: spiders web, crabs pinch, tallstriders shred armor, crocolisks reduce healing. Blizzard's advice: tame widely and try every family.

## Tools the 2004 game did not have {#compared}

This is our comparison, not something the video says. Besides the three changes Blizzard calls new, the video shows abilities that the original World of Warcraft did not give these classes: **Revive** and **Wild Growth** for Druids, **Holy Strike**, Seal of Fury and the version of Righteous Fury that pulls enemies off an ally for Paladins, **Totemic Call** for Shamans. They are among the class reworks of Forever: to see each talent with its current text, open the [talent builder](/en/builder).

## What the video leaves out {#unknowns}

- Numbers: durations, cooldowns and values are not given, except Polymorph's 30 seconds and the level 40 for Mage portals and Aspect of the Pack.
- How Scroll Comprehension works: which scrolls, where they drop, which imbues and buffs they unlock.
- How far Battle Shout reaches in a 40-player raid and whether it stacks with other shouts.
- Which specializations get which tools: the video describes the classes, not the talent trees.

Raids open on 9 December: what the developers have said about them is in our [article on the raid interviews](/en/news/raids-december-9-developer-interviews). For choosing a class, see our [races and classes guide](/en/guides/wow-forever-races-classes).`,
    `Lunedì 23 novembre 2026 alle 10:01 PST (18:01 UTC, 19:01 CET) Blizzard ha pubblicato sul canale YouTube di World of Warcraft [Class Utility For Groups](${VIDEO}): un video di 9 minuti su cosa porta ogni classe di WoW Forever a un gruppo o a un'incursione, oltre ai danni o alle cure. È una guida al gioco di gruppo, non note di patch: nessun numero cambia. Quello che segue viene dai sottotitoli inglesi caricati da Blizzard insieme al video, letti il 25 novembre. Il video si apre con la frase che lo riassume: in Forever gruppi e incursioni "contano più che mai".

## Tre cose presentate come novità di Forever {#novita-forever}

- **Mago, Scroll Comprehension**: il Mago può leggere le pergamene che trova e sbloccare nuovi potenziamenti delle armi (imbue) e buff per il gruppo. Il video non dice quali pergamene né quali buff.
- **Stregone, Bane**: le Bane hanno una categoria tutta loro, quindi lo Stregone può tenere una Bane e una Curse sullo stesso nemico. La divisione fra Bane e Curse di utilità l'avevamo raccontata negli [approfondimenti sulle classi di ottobre](/it/news/class-deep-dives-eight-classes).
- **Guerriero, Battle Shout**: ora arriva a **tutta l'incursione**, non solo al gruppo.

## Le basi: tre ruoli, tre tipi di incantesimi {#basi}

Ogni gruppo ha bisogno di un **tank** che tiene su di sé l'attenzione dei nemici (aggro), di un **healer** che tiene tutti in vita e di chi fa **danni** (DPS) e chiude lo scontro. L'albero di talenti in cui investite di più decide quali ruoli può coprire il personaggio; alcune classi ne coprono più di uno.

Chi lancia incantesimi ne usa tre tipi: quelli **istantanei**, che partono subito e lasciano muovere (Fire Blast), quelli **con tempo di lancio**, che chiedono di stare fermi e di solito colpiscono o curano di più (Chain Lightning), e quelli **canalizzati**, che agiscono finché si resta fermi (Drain Life). Danni nel tempo (DoT) e cure nel tempo (HoT) continuano a fare effetto dopo il lancio. I danni fisici vengono dagli attacchi automatici, legati a tipo e velocità dell'arma, e dalle abilità che consumano Ira o Energia; il Cacciatore porta l'opzione a distanza.

## Classe per classe {#classi}

- **Mago**: Conjure Food e Conjure Water per vita e mana gratis fra uno scontro e l'altro, portali verso una capitale per tutto il gruppo dal livello 40, Arcane Brilliance (intelletto al gruppo), Polymorph per togliere un nemico dallo scontro fino a 30 secondi, rallentamenti e congelamenti del Gelo, Blizzard contro i gruppi numerosi.
- **Ladro**: Stealth per esplorare avanti e distrarre una pattuglia, Sap per togliere un bersaglio prima dello scontro, Kick, Gouge e Kidney Shot contro chi lancia incantesimi, Expose Armor perché ogni attaccante fisico colpisca più forte, e Lockpicking per aprire i forzieri al gruppo.
- **Stregone**: Ritual of Summoning porta all'ingresso del dungeon chi è rimasto indietro con l'aiuto di altri due membri del gruppo, Soulstone sull'healer prima di un boss, Healthstone per le cure d'emergenza, Curse of the Elements perché ogni incantatore colpisca più forte, Fear e Banish per il controllo, Seduce e Spell Lock dai demoni, Eye of Kilrogg per esplorare e Unending Breath per respirare sott'acqua.
- **Druido**: Gift of the Wild (statistiche, armatura e resistenze al gruppo), Rebirth per resuscitare in combattimento e Revive fuori combattimento, Entangling Roots, Hibernate su bestie e draghi, Nature's Grasp. Da orso tank: Growl, Swipe e Demoralizing Roar. Da healer: Rejuvenation, Regrowth, **Wild Growth** su più alleati e Innervate per ricaricare il mana di un incantatore. Prowl, Travel Form e Aquatic Form per spostarsi.
- **Paladino**: Blessing of Kings (tutte le statistiche), Might (potere d'attacco) e Wisdom (rigenerazione del mana), aure per armatura, resistenze, interruzione dei lanci o danni restituiti a chi colpisce in mischia. Da tank: **Righteous Fury attira su di sé i nemici che stanno colpendo un alleato**, il giudizio di Seal of Fury per prendere un nemico solo, Consecration sui gruppi e **Holy Strike** per accumulare minaccia su un boss. Cleanse toglie veleni, malattie e magie, Redemption resuscita fuori combattimento, e le cure sono Holy Light, Flash of Light e Lay on Hands.
- **Guerriero**: Taunt, una minaccia che rende normale tenere un intero gruppo di nemici, Demoralizing Shout (meno potere d'attacco ai nemici), Thunder Clap (colpi nemici più lenti), Sunder Armor che si accumula cinque volte perché ogni attaccante fisico colpisca più forte, e Battle Shout per tutta l'incursione.
- **Sciamano**: un totem per ogni bisogno: Strength of Earth, Windfury (attacchi automatici in più), Grace of Air (agilità), Mana Spring, Mana Tide per il Restoration, Tremor Totem contro la paura, Grounding Totem che assorbe il prossimo incantesimo diretto a un alleato, e **Totemic Call** che riporta tutti i totem allo Sciamano, così i buff si spostano con il gruppo. Poi Earth Shock per interrompere, Purge, Ghost Wolf, Reincarnation e Chain Heal.
- **Sacerdote**: Power Word: Fortitude (tempra), Divine Spirit (spirito), Fear Ward sul tank, Dispel Magic e Cure Disease. Cure: Power Word: Shield, Prayer of Healing, Holy Nova. Lo Shadow cura il gruppo con Vampiric Embrace: dall'hotfix del 13 novembre il gruppo riceve il 10% dei danni d'Ombra inflitti, come trovate nel nostro [articolo sugli hotfix](/it/news/hotfixes-november-13-19-classes-items).
- **Cacciatore**: il famiglio come secondo membro del gruppo, le trappole (Freezing, Frost, Immolation, Explosive), l'ingaggio a distanza, Eyes of the Beast per esplorare con il famiglio e Aspect of the Pack per la velocità del gruppo dal livello 40. I famigli hanno i loro strumenti: i ragni immobilizzano con la ragnatela, i granchi pizzicano, i tallstrider riducono l'armatura, i crocolisk riducono le cure. Il consiglio di Blizzard: addomesticare tante famiglie e provarle tutte.

## Strumenti che il gioco del 2004 non aveva {#confronto}

Questo è un confronto nostro, il video non lo dice. Oltre alle tre novità indicate da Blizzard, il video mostra abilità che il World of Warcraft originale non dava a queste classi: **Revive** e **Wild Growth** al Druido, **Holy Strike**, Seal of Fury e la Righteous Fury che toglie i nemici da un alleato al Paladino, **Totemic Call** allo Sciamano. Fanno parte delle classi rifatte di Forever: per vedere ogni talento con il testo attuale c'è il nostro [builder dei talenti](/it/builder).

## Cosa il video non dice {#cosa-non-dice}

- I numeri: durate, tempi di ricarica e valori non ci sono, a parte i 30 secondi di Polymorph e il livello 40 per i portali del Mago e per Aspect of the Pack.
- Come funziona Scroll Comprehension: quali pergamene, dove si trovano, quali potenziamenti e buff sbloccano.
- Fin dove arriva Battle Shout in un'incursione da 40 e se si somma ad altri urli.
- Quali specializzazioni hanno quali strumenti: il video descrive le classi, non gli alberi di talenti.

Le incursioni aprono il 9 dicembre: quello che ne hanno detto gli sviluppatori è nel nostro [articolo sulle interviste](/it/news/raids-december-9-developer-interviews). Per scegliere la classe c'è la nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).`,
    `El lunes 23 de noviembre de 2026 a las 10:01 PST (18:01 UTC, 19:01 CET) Blizzard publicó en el canal de YouTube de World of Warcraft [Class Utility For Groups](${VIDEO}): un vídeo de 9 minutos sobre lo que aporta cada clase de WoW Forever a un grupo o a una banda, además del daño o la sanación. Es una guía de juego en grupo, no unas notas de parche: no cambia ninguna cifra. Lo que sigue sale de los subtítulos en inglés que Blizzard subió con el vídeo, leídos el 25 de noviembre. El vídeo arranca con la frase que lo resume: en Forever los grupos "importan más que nunca".

## Tres cosas presentadas como novedades de Forever {#novedades-forever}

- **Mago, Scroll Comprehension**: el Mago puede leer los pergaminos que encuentra y desbloquear nuevos imbuidos y mejoras para el grupo. El vídeo no dice qué pergaminos ni qué mejoras.
- **Brujo, Banes**: los Banes tienen su propia categoría, así que el Brujo puede mantener un Bane y una Curse sobre el mismo enemigo. La separación entre Banes y Curses de utilidad la contamos en nuestros [análisis de las clases de octubre](/es/news/class-deep-dives-eight-classes).
- **Guerrero, Battle Shout**: ahora llega a **toda la banda**, no solo al grupo.

## Lo básico: tres roles, tres tipos de hechizos {#basico}

Todo grupo necesita un **tanque** que atraiga la atención de los enemigos (aggro), un **sanador** que mantenga a todos con vida y quien haga **daño** (DPS) para acabar el combate. El árbol de talentos en el que más inviertes decide qué roles puede cubrir tu personaje; algunas clases cubren más de uno.

Los lanzadores usan tres tipos de hechizos: los **instantáneos**, que salen al momento y te dejan moverte (Fire Blast), los **de lanzamiento**, que te obligan a estar quieto y suelen golpear o curar más (Chain Lightning), y los **canalizados**, que actúan mientras no te mueves (Drain Life). El daño en el tiempo (DoT) y la sanación en el tiempo (HoT) siguen haciendo efecto tras aplicarse. El daño físico sale de los ataques automáticos, según el tipo y la velocidad del arma, y de habilidades que gastan Ira o Energía; el Cazador aporta la opción a distancia.

## Clase por clase {#clases}

- **Mago**: Conjure Food y Conjure Water para vida y maná gratis entre combates, portales a una capital para todo el grupo desde el nivel 40, Arcane Brilliance (intelecto para el grupo), Polymorph para sacar a un enemigo del combate hasta 30 segundos, ralentizaciones y congelaciones de Escarcha, Blizzard contra grupos grandes.
- **Pícaro**: Stealth para explorar por delante y distraer a una patrulla, Sap para quitar un objetivo antes del combate, Kick, Gouge y Kidney Shot contra lanzadores, Expose Armor para que todo atacante físico pegue más fuerte, y Lockpicking para abrir cofres al grupo.
- **Brujo**: Ritual of Summoning trae a la entrada de la mazmorra a quien se ha quedado atrás con la ayuda de otros dos miembros del grupo, Soulstone en el sanador antes de un jefe, Healthstones para curas de emergencia, Curse of the Elements para que todo lanzador pegue más fuerte, Fear y Banish para el control, Seduce y Spell Lock de los demonios, Eye of Kilrogg para explorar y Unending Breath para respirar bajo el agua.
- **Druida**: Gift of the Wild (estadísticas, armadura y resistencias para el grupo), Rebirth para resucitar en combate y Revive fuera de combate, Entangling Roots, Hibernate sobre bestias y dragonantes, Nature's Grasp. Como oso tanque: Growl, Swipe y Demoralizing Roar. Como sanador: Rejuvenation, Regrowth, **Wild Growth** sobre varios aliados e Innervate para recargar el maná de un lanzador. Prowl, Travel Form y Aquatic Form para moverse.
- **Paladín**: Blessing of Kings (todas las estadísticas), Might (poder de ataque) y Wisdom (regeneración de maná), auras de armadura, resistencias, interrupción de lanzamientos o daño a quien golpea cuerpo a cuerpo. Como tanque: **Righteous Fury atrae a los enemigos que están golpeando a un aliado**, el juicio de Seal of Fury para atraer a un solo enemigo, Consecration sobre grupos y **Holy Strike** para acumular amenaza sobre un jefe. Cleanse quita venenos, enfermedades y magia, Redemption resucita fuera de combate, y las curas son Holy Light, Flash of Light y Lay on Hands.
- **Guerrero**: Taunt, una amenaza que hace normal mantener a un grupo entero de enemigos, Demoralizing Shout (menos poder de ataque enemigo), Thunder Clap (golpes enemigos más lentos), Sunder Armor que se acumula cinco veces para que todo atacante físico pegue más fuerte, y Battle Shout para toda la banda.
- **Chamán**: un tótem para cada necesidad: Strength of Earth, Windfury (ataques automáticos extra), Grace of Air (agilidad), Mana Spring, Mana Tide para Restauración, Tremor Totem contra el miedo, Grounding Totem que absorbe el siguiente hechizo dirigido a un aliado, y **Totemic Call**, que lleva todos los tótems hasta el Chamán para que las mejoras se muevan con el grupo. Además, Earth Shock para interrumpir, Purge, Ghost Wolf, Reincarnation y Chain Heal.
- **Sacerdote**: Power Word: Fortitude (aguante), Divine Spirit (espíritu), Fear Ward en el tanque, Dispel Magic y Cure Disease. Curas: Power Word: Shield, Prayer of Healing, Holy Nova. El Sombra cura al grupo con Vampiric Embrace: desde el hotfix del 13 de noviembre el grupo recibe el 10% del daño de Sombra infligido, como explicamos en nuestro [artículo de hotfixes](/es/news/hotfixes-november-13-19-classes-items).
- **Cazador**: la mascota como segundo miembro del grupo, las trampas (Freezing, Frost, Immolation, Explosive), atraer desde lejos, Eyes of the Beast para explorar con la mascota y Aspect of the Pack para la velocidad del grupo desde el nivel 40. Las mascotas tienen sus propias herramientas: las arañas inmovilizan con telaraña, los cangrejos pellizcan, los zancudos reducen la armadura, los crocoliscos reducen la sanación. El consejo de Blizzard: domesticar muchas familias y probarlas todas.

## Herramientas que el juego de 2004 no tenía {#comparacion}

Esta comparación es nuestra, el vídeo no la hace. Además de las tres novedades que señala Blizzard, el vídeo muestra habilidades que el World of Warcraft original no daba a estas clases: **Revive** y **Wild Growth** para el Druida, **Holy Strike**, Seal of Fury y la Righteous Fury que quita enemigos a un aliado para el Paladín, **Totemic Call** para el Chamán. Forman parte de las clases rehechas de Forever: para ver cada talento con su texto actual tienes nuestro [constructor de talentos](/es/builder).

## Lo que el vídeo no dice {#lo-que-no-dice}

- Las cifras: duraciones, tiempos de reutilización y valores no aparecen, salvo los 30 segundos de Polymorph y el nivel 40 de los portales del Mago y de Aspect of the Pack.
- Cómo funciona Scroll Comprehension: qué pergaminos, dónde caen, qué imbuidos y mejoras desbloquean.
- Hasta dónde llega Battle Shout en una banda de 40 y si se acumula con otros gritos.
- Qué especializaciones tienen qué herramientas: el vídeo describe las clases, no los árboles de talentos.

Las bandas abren el 9 de diciembre: lo que han contado los desarrolladores está en nuestro [artículo sobre las entrevistas](/es/news/raids-december-9-developer-interviews). Para elegir clase tienes nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).`,
  ),
  faq: {
    en: [
      {
        q: "What does each class bring to a group in WoW Forever?",
        a: "According to Blizzard's video of 23 November 2026: Mages bring food, water, portals and Polymorph; Rogues scouting, Sap and interrupts; Warlocks summons, Soulstones and Curses; Druids Gift of the Wild and combat resurrection; Paladins Blessings and auras; Warriors threat, Sunder Armor and Battle Shout; Shamans totems; Priests Fortitude and strong heals; Hunters traps and pets.",
      },
      {
        q: "Does Battle Shout affect the whole raid in WoW Forever?",
        a: "Yes. In its class utility video of 23 November 2026 Blizzard says Battle Shout now reaches the warrior's entire raid, not only the party.",
      },
      {
        q: "What is Scroll Comprehension in WoW Forever?",
        a: "A Mage ability that lets Mages read scrolls that drop and unlock new imbues and buffs for the party. Blizzard has not yet said which scrolls exist or what they give.",
      },
      {
        q: "Can a Warlock use a Bane and a Curse on the same target in WoW Forever?",
        a: "Yes. Banes are a separate category from Curses in Forever, so a Warlock can keep one of each on the same enemy.",
      },
      {
        q: "Which classes can resurrect in combat in WoW Forever?",
        a: "In the video, Druids resurrect an ally in combat with Rebirth, Warlocks place a Soulstone so a player can come back, and Shamans can resurrect themselves with Reincarnation.",
      },
    ],
    it: [
      {
        q: "Cosa porta ogni classe al gruppo in WoW Forever?",
        a: "Secondo il video di Blizzard del 23 novembre 2026: il Mago cibo, acqua, portali e Polymorph; il Ladro esplorazione, Sap e interruzioni; lo Stregone evocazioni, Soulstone e Curse; il Druido Gift of the Wild e resurrezione in combattimento; il Paladino benedizioni e aure; il Guerriero minaccia, Sunder Armor e Battle Shout; lo Sciamano i totem; il Sacerdote Fortitude e cure forti; il Cacciatore trappole e famigli.",
      },
      {
        q: "Battle Shout vale per tutta l'incursione in WoW Forever?",
        a: "Sì. Nel video sull'utilità delle classi del 23 novembre 2026 Blizzard dice che Battle Shout ora arriva a tutta l'incursione del Guerriero, non solo al gruppo.",
      },
      {
        q: "Che cos'è Scroll Comprehension in WoW Forever?",
        a: "Un'abilità del Mago che gli permette di leggere le pergamene trovate e sbloccare nuovi potenziamenti e buff per il gruppo. Blizzard non ha ancora detto quali pergamene esistono né cosa danno.",
      },
      {
        q: "Lo Stregone può usare una Bane e una Curse sullo stesso bersaglio in WoW Forever?",
        a: "Sì. In Forever le Bane sono una categoria separata dalle Curse, quindi lo Stregone può tenerne una per tipo sullo stesso nemico.",
      },
      {
        q: "Quali classi possono resuscitare in combattimento in WoW Forever?",
        a: "Nel video il Druido resuscita un alleato in combattimento con Rebirth, lo Stregone mette una Soulstone perché un giocatore possa tornare in piedi e lo Sciamano può resuscitare sé stesso con Reincarnation.",
      },
    ],
    es: [
      {
        q: "¿Qué aporta cada clase al grupo en WoW Forever?",
        a: "Según el vídeo de Blizzard del 23 de noviembre de 2026: el Mago comida, agua, portales y Polymorph; el Pícaro exploración, Sap e interrupciones; el Brujo invocaciones, Soulstones y Curses; el Druida Gift of the Wild y resurrección en combate; el Paladín bendiciones y auras; el Guerrero amenaza, Sunder Armor y Battle Shout; el Chamán los tótems; el Sacerdote Fortitude y curas fuertes; el Cazador trampas y mascotas.",
      },
      {
        q: "¿Battle Shout afecta a toda la banda en WoW Forever?",
        a: "Sí. En su vídeo sobre la utilidad de las clases del 23 de noviembre de 2026 Blizzard dice que Battle Shout ahora llega a toda la banda del Guerrero, no solo al grupo.",
      },
      {
        q: "¿Qué es Scroll Comprehension en WoW Forever?",
        a: "Una habilidad del Mago que le permite leer los pergaminos que encuentra y desbloquear nuevos imbuidos y mejoras para el grupo. Blizzard aún no ha dicho qué pergaminos hay ni qué dan.",
      },
      {
        q: "¿Puede un Brujo usar un Bane y una Curse sobre el mismo objetivo en WoW Forever?",
        a: "Sí. En Forever los Banes son una categoría aparte de las Curses, así que el Brujo puede mantener uno de cada sobre el mismo enemigo.",
      },
      {
        q: "¿Qué clases pueden resucitar en combate en WoW Forever?",
        a: "En el vídeo el Druida resucita a un aliado en combate con Rebirth, el Brujo coloca una Soulstone para que un jugador pueda volver y el Chamán puede resucitarse a sí mismo con Reincarnation.",
      },
    ],
  },
};

export default item;

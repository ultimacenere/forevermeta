import type { Locale } from "../i18n";
import type { ClassId, Faction, RaceId } from "../builder/types";

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/**
 * Le dieci razze giocabili di World of Warcraft: Forever, le classi che ognuna può fare e i tratti razziali.
 *
 * Fonti: Blizzard News "Create the Hero You Want to Be" (22/09/2026, https://news.blizzard.com/en-us/article/24304075:
 * la tabella delle combinazioni per fazione, le «six new class-and-race combinations» Gnome Priest, Human Hunter,
 * Dwarf Shaman, Orc Mage, Troll Warlock, Undead Paladin, e per ogni razza «two active abilities and two passive
 * abilities»), "Meet the New Skyborne" (22/09/2026, https://news.blizzard.com/en-us/article/24302071: Windshaper per
 * l'Orda con lo Sciamano, High Order per l'Alleanza con il Mago, tutti e due Warrior, Hunter, Rogue e Druid) e le
 * Development Notes della beta sul forum ufficiale: post del 16/10/2026 (https://us.forums.blizzard.com/en/wow/t/2360696/6:
 * Sword, Mace e Axe Specialization tolte; Shatter Curse che dissolve; Regeneration al 20%) e l'ultima revisione prima
 * del lancio, post 7 del 26/10/2026 (https://us.forums.blizzard.com/en/wow/t/2360696/7) completato dal post 8 del
 * 27/10/2026 con Orco, Troll e Non Morto: Ruthless all'1%, Human Spirit al 10%, Artisan's Precision al posto di Earth
 * Fury, Command al posto di Savage, Endurance solo salute, Plainsrunning fino al 60% e non più a cavallo, Blood Fury di
 * nuovo a 2 minuti, Berserking 15 secondi, Touch of the Grave con 15 secondi di ricarica interna, Wind Blessed al 2%,
 * Read Ley Line e Skysight con i buff di un'ora Attuned e Charged. I nomi italiani e spagnoli delle razze sono quelli
 * delle tabelle di Blizzard nelle due lingue (per gli Skyborne il glossario: "Skyborne", "célicos" es-ES, "cielonato"
 * es-MX). I nomi delle razziali restano in inglese (Blizzard in italiano li lascia così), con la grafia dell'articolo
 * del 22/09 (il post del 26/10 scrive "Wind-Blessed" e "Read Leyline"); le descrizioni brevi sono nostre, riassunte
 * dalle fonti. La beta è chiusa dal 23/10: le note del 26/10 non sono provate in nessuna build, si ricontrollano nel
 * gioco al lancio.
 */
export type Racial = { name: string; kind: "active" | "passive"; text: L10n };

export type RaceInfo = {
  id: RaceId;
  faction: Faction;
  name: L10n;
  /** nome spagnolo dell'America Latina (es-MX) quando differisce da es-ES */
  nameMx?: string;
  /** classi che questa razza può fare */
  classes: ClassId[];
  /** combinazioni nuove di Forever (non esistevano in Classic) */
  newClasses?: ClassId[];
  /** razza riservata a chi compra lo Skyborne Heroic Pack o superiore */
  paid?: boolean;
  /** icona della razza del gioco (`achievement_character_*_male`), in public/talents/icons; gli Skyborne non ne hanno una sul CDN */
  icon?: string;
  racials: Racial[];
};

const active = (name: string, en: string, it: string, es: string): Racial => ({ name, kind: "active", text: n(en, it, es) });
const passive = (name: string, en: string, it: string, es: string): Racial => ({ name, kind: "passive", text: n(en, it, es) });

const skyborneRacials = (second: Racial): Racial[] => [
  active("Walk on Air", "Glide downward through the air for 10 seconds; 90-second cooldown.", "Plana verso il basso per 10 secondi; 90 secondi di ricarica.", "Planea hacia abajo durante 10 segundos; 90 segundos de reutilización."),
  second,
  passive("Wind Blessed", "Melee, ranged and spell haste increased by 2%.", "Celerità in mischia, a distanza e con gli incantesimi aumentata del 2%.", "Celeridad cuerpo a cuerpo, a distancia y de hechizos aumentada un 2 %."),
  passive("Elemental Insight", "Damage to Elementals increased by 5%.", "Danni agli Elementali aumentati del 5%.", "Daño a los elementales aumentado un 5 %."),
];

export const races: RaceInfo[] = [
  // Alleanza
  {
    id: "human",
    faction: "alliance",
    icon: "achievement_character_human_male",
    name: n("Human", "Umano", "humano"),
    classes: ["hunter", "mage", "paladin", "priest", "rogue", "warlock", "warrior"],
    newClasses: ["hunter"],
    racials: [
      active("Will to Survive", "Removes stuns.", "Rimuove gli stordimenti.", "Elimina los aturdimientos."),
      active("Perception", "Detects stealthed enemies for 20 seconds.", "Rivela i nemici in furtività per 20 secondi.", "Detecta a los enemigos sigilosos durante 20 segundos."),
      passive("Ruthless", "Critical strike chance increased by 1% (replaces Sword Specialization).", "Probabilità di colpo critico aumentata dell'1% (sostituisce Sword Specialization).", "Probabilidad de golpe crítico aumentada un 1 % (sustituye a Sword Specialization)."),
      passive("The Human Spirit", "Spirit increased by 10%.", "Spirito aumentato del 10%.", "Espíritu aumentado un 10 %."),
    ],
  },
  {
    id: "dwarf",
    faction: "alliance",
    icon: "achievement_character_dwarf_male",
    name: n("Dwarf", "Nano", "enano"),
    classes: ["hunter", "paladin", "priest", "rogue", "shaman", "warrior"],
    newClasses: ["shaman"],
    racials: [
      active("Stoneform", "Immunity to Bleeds, Poisons and Diseases and reduced physical damage taken for 8 seconds.", "Immunità a sanguinamenti, veleni e malattie e danni fisici subiti ridotti per 8 secondi.", "Inmunidad a sangrados, venenos y enfermedades y daño físico recibido reducido durante 8 segundos."),
      active("Find Treasure", "Tracks nearby treasure chests and gives a chance to find extra items in most chests.", "Localizza i forzieri vicini e dà una probabilità di trovare oggetti in più in quasi tutti i forzieri.", "Rastrea los cofres cercanos y da una probabilidad de encontrar objetos extra en casi todos los cofres."),
      passive("Artisan's Precision", "Hit chance with spells and attacks increased by 1% (replaces Earth Fury, which had replaced Mace Specialization).", "Probabilità di colpire con incantesimi e attacchi aumentata dell'1% (sostituisce Earth Fury, che aveva preso il posto di Mace Specialization).", "Probabilidad de golpe con hechizos y ataques aumentada un 1 % (sustituye a Earth Fury, que había reemplazado a Mace Specialization)."),
      passive("Big Game Hunter", "Damage to Beasts increased by 5%.", "Danni alle Bestie aumentati del 5%.", "Daño a las bestias aumentado un 5 %."),
    ],
  },
  {
    id: "night-elf",
    faction: "alliance",
    icon: "achievement_character_nightelf_male",
    name: n("Night Elf", "Elfo della Notte", "elfo de la noche"),
    classes: ["druid", "hunter", "priest", "rogue", "warrior"],
    racials: [
      active("Elune's Light", "Critical chance increased by 10% for 15 seconds.", "Probabilità di critico aumentata del 10% per 15 secondi.", "Probabilidad de crítico aumentada un 10 % durante 15 segundos."),
      active("Shadowmeld", "Stealth while standing still.", "Furtività finché si resta fermi.", "Sigilo mientras se está quieto."),
      passive("Quickness", "Dodge chance increased by 1% and run speed by 2% (stacks with other speed bonuses).", "Probabilità di schivata aumentata dell'1% e velocità di corsa del 2% (si somma agli altri bonus di velocità).", "Probabilidad de esquivar aumentada un 1 % y velocidad de carrera un 2 % (se acumula con otras bonificaciones de velocidad)."),
      passive("Wisp Spirit", "Run speed increased by 75% while dead.", "Velocità di corsa aumentata del 75% da morti.", "Velocidad de carrera aumentada un 75 % al estar muerto."),
    ],
  },
  {
    id: "gnome",
    faction: "alliance",
    icon: "achievement_character_gnome_male",
    name: n("Gnome", "Gnomo", "gnomo"),
    classes: ["mage", "priest", "rogue", "warlock", "warrior"],
    newClasses: ["priest"],
    racials: [
      active("Escape Artist", "Brief immunity to Roots and Snares.", "Breve immunità a radicamenti e rallentamenti.", "Breve inmunidad a enraizamientos y ralentizaciones."),
      active("Eureka!", "For 8 seconds, abilities cost 10% less Mana, Rage or Energy and deal 10% more damage or healing.", "Per 8 secondi le abilità costano il 10% in meno di Mana, Ira o Energia e fanno il 10% in più di danni o cure.", "Durante 8 segundos las habilidades cuestan un 10 % menos de maná, ira o energía y hacen un 10 % más de daño o sanación."),
      passive("Expansive Mind", "Maximum Mana, Rage or Energy increased by 5%.", "Mana, Ira o Energia massimi aumentati del 5%.", "Maná, ira o energía máximos aumentados un 5 %."),
      passive("Engineering Specialization", "More reliable engineering devices.", "Dispositivi d'ingegneria più affidabili.", "Dispositivos de ingeniería más fiables."),
    ],
  },
  {
    id: "skyborne-high-order",
    faction: "alliance",
    name: n("Skyborne (High Order)", "Skyborne (High Order)", "célico de la Orden Eminente"),
    nameMx: "cielonato de la Suma Orden",
    classes: ["druid", "hunter", "mage", "rogue", "warrior"],
    paid: true,
    racials: skyborneRacials(active("Read Ley Line", "Health and mana regeneration increased by 50% for 15 seconds, 100% while Attuned (1 hour, gained by using it at a ley line); not usable while Innervate is active.", "Rigenerazione di salute e mana aumentata del 50% per 15 secondi, del 100% con Attuned (1 ora, si ottiene usandola su una linea di ley); non si usa con Innervate attivo.", "Regeneración de salud y maná aumentada un 50 % durante 15 segundos, un 100 % con Attuned (1 hora, se obtiene usándola en una línea ley); no se usa con Innervate activo.")),
  },
  // Orda
  {
    id: "orc",
    faction: "horde",
    icon: "achievement_character_orc_male",
    name: n("Orc", "Orco", "orco"),
    classes: ["hunter", "mage", "rogue", "shaman", "warlock", "warrior"],
    newClasses: ["mage"],
    racials: [
      active("Blood Fury", "Attack power and spell power increased by 10% for 15 seconds; 2-minute cooldown.", "Potenza d'attacco e potenza degli incantesimi aumentate del 10% per 15 secondi; 2 minuti di ricarica.", "Poder de ataque y poder de hechizos aumentados un 10 % durante 15 segundos; 2 minutos de reutilización."),
      active("Shatter Curse", "Removes all Curses and Banes and reduces magic damage taken by 5% for 8 seconds.", "Rimuove tutte le maledizioni e i flagelli e riduce del 5% i danni magici subiti per 8 secondi.", "Elimina todas las maldiciones y perdiciones y reduce un 5 % el daño mágico recibido durante 8 segundos."),
      passive("Hardiness", "Stun durations reduced by 20%.", "Durata degli stordimenti ridotta del 20%.", "Duración de los aturdimientos reducida un 20 %."),
      passive("Command", "Hunter and Warlock pet damage increased by 5% (replaces Savage, which had replaced Axe Specialization).", "Danni dei pet del Cacciatore e dello Stregone aumentati del 5% (sostituisce Savage, che aveva preso il posto di Axe Specialization).", "Daño de las mascotas del cazador y del brujo aumentado un 5 % (sustituye a Savage, que había reemplazado a Axe Specialization)."),
    ],
  },
  {
    id: "undead",
    faction: "horde",
    icon: "achievement_character_undead_male",
    name: n("Undead", "Non Morto", "no-muerto"),
    classes: ["mage", "paladin", "priest", "rogue", "warlock", "warrior"],
    newClasses: ["paladin"],
    racials: [
      active("Will of the Forsaken", "Removes Charm, Fear and Sleep effects.", "Rimuove gli effetti di ammaliamento, paura e sonno.", "Elimina los efectos de encantamiento, miedo y sueño."),
      active("Cannibalize", "Consumes a corpse to regenerate 35% of health and mana over time.", "Consuma un cadavere per rigenerare il 35% di salute e mana nel tempo.", "Consume un cadáver para regenerar el 35 % de salud y maná con el tiempo."),
      passive("Underwater Breathing", "Breathe 300% longer underwater.", "Respiri sott'acqua il 300% più a lungo.", "Respiras bajo el agua un 300 % más de tiempo."),
      passive("Touch of the Grave", "Attacks sometimes drain health from the target; 15-second internal cooldown.", "Gli attacchi a volte risucchiano salute dal bersaglio; 15 secondi di ricarica interna.", "Los ataques a veces drenan salud del objetivo; 15 segundos de reutilización interna."),
    ],
  },
  {
    id: "tauren",
    faction: "horde",
    icon: "achievement_character_tauren_male",
    name: n("Tauren", "Tauren", "tauren"),
    classes: ["druid", "hunter", "shaman", "warrior"],
    racials: [
      active("War Stomp", "Stuns nearby enemies for 2 seconds; 90-second cooldown.", "Stordisce i nemici vicini per 2 secondi; 90 secondi di ricarica.", "Aturde a los enemigos cercanos durante 2 segundos; 90 segundos de reutilización."),
      active("Cultivation", "Grows bonus herbs that need no Herbalism to gather; 15-minute cooldown.", "Fa crescere erbe extra che si raccolgono senza Erboristeria; 15 minuti di ricarica.", "Hace crecer hierbas extra que se recogen sin Herboristería; 15 minutos de reutilización."),
      passive("Plainsrunning", "Movement speed grows by 2% per stack the longer you keep moving, up to 60%; no longer works while mounted.", "La velocità di movimento cresce del 2% per accumulo più a lungo si continua a muoversi, fino al 60%; non vale più a cavallo.", "La velocidad de movimiento crece un 2 % por acumulación cuanto más tiempo sigues moviéndote, hasta un 60 %; ya no funciona montado."),
      passive("Endurance", "Total health increased by 5%.", "Salute totale aumentata del 5%.", "Salud total aumentada un 5 %."),
    ],
  },
  {
    id: "troll",
    faction: "horde",
    icon: "achievement_character_troll_male",
    name: n("Troll", "Troll", "trol"),
    classes: ["hunter", "mage", "priest", "rogue", "shaman", "warlock", "warrior"],
    newClasses: ["warlock"],
    racials: [
      active("Berserking", "Casting and attack speed increased by 10% for 15 seconds.", "Velocità di lancio e di attacco aumentate del 10% per 15 secondi.", "Velocidad de lanzamiento y de ataque aumentadas un 10 % durante 15 segundos."),
      active("Rapid Regeneration", "Regenerates 50% of maximum health over time.", "Rigenera il 50% della salute massima nel tempo.", "Regenera el 50 % de la salud máxima con el tiempo."),
      passive("Beast Slaying", "Damage to Beasts increased by 5%.", "Danni alle Bestie aumentati del 5%.", "Daño a las bestias aumentado un 5 %."),
      passive("Regeneration", "Health regeneration bonuses increased and 20% of health regeneration continues in combat.", "Bonus alla rigenerazione di salute aumentati e il 20% della rigenerazione continua in combattimento.", "Bonificaciones a la regeneración de salud aumentadas y el 20 % de la regeneración continúa en combate."),
    ],
  },
  {
    id: "skyborne-windshaper",
    faction: "horde",
    name: n("Skyborne (Windshaper)", "Skyborne (Windshaper)", "célico Formaviento"),
    nameMx: "cielonato de los Formavientos",
    classes: ["druid", "hunter", "rogue", "shaman", "warrior"],
    paid: true,
    racials: skyborneRacials(active("Skysight", "Elemental Blessing: run speed increased by 15% for 15 seconds, 30% while Charged (1 hour, gained by using it at an elemental convergence); castable while moving.", "Benedizione Elementale: velocità di corsa aumentata del 15% per 15 secondi, del 30% con Charged (1 ora, si ottiene usandola su una convergenza elementale); si lancia anche in movimento.", "Bendición elemental: velocidad de carrera aumentada un 15 % durante 15 segundos, un 30 % con Charged (1 hora, se obtiene usándola en una convergencia elemental); se lanza también en movimiento.")),
  },
];

export const raceIds = races.map((r) => r.id) as RaceId[];

export function isRaceId(value: string): value is RaceId {
  return (raceIds as string[]).includes(value);
}

/** Le razze che possono fare una classe, nell'ordine dell'elenco (Alleanza, poi Orda). */
export function racesOfClass(classId: ClassId): RaceInfo[] {
  return races.filter((r) => r.classes.includes(classId));
}

/** Nome della razza nella lingua della pagina, con l'iniziale maiuscola (in spagnolo Blizzard scrive "enano"). */
export function raceName(r: RaceInfo, locale: Locale): string {
  const s = r.name[locale];
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/** Le fonti dei tratti razziali, mostrate in fondo al builder. */
export const racialsSources = [
  { label: "Create the Hero You Want to Be (Blizzard News, 22/09/2026): races, class combinations and racial traits", url: "https://news.blizzard.com/en-us/article/24304075" },
  { label: "WoW Forever Beta Development Notes, 15 October 2026 build (official forum): racial changes", url: "https://us.forums.blizzard.com/en/wow/t/2360696/6" },
  { label: "WoW Forever Development Notes, 26 and 27 October 2026 (official forum): final racial changes before launch", url: "https://us.forums.blizzard.com/en/wow/t/2360696/7" },
] as const;

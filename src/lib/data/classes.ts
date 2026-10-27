import type { Locale } from "../i18n";
import type { ClassId, Role } from "../builder/types";

type L10n = Record<Locale, string>;
const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/**
 * Le nove classi di World of Warcraft: Forever, con i nomi ufficiali nelle lingue del sito.
 *
 * Fonti: Blizzard News "Create the Hero You Want to Be" (22/09/2026, https://news.blizzard.com/en-us/article/24304075:
 * «nine classes: Druid, Hunter, Mage, Paladin, Priest, Rogue, Shaman, Warlock, and Warrior»); i nomi italiani e
 * spagnoli sono quelli dei titoli degli approfondimenti di classe in it-it ed es-es (30/09 e 07/10/2026) e, per il
 * Paladino, della voce "Paladino Reietto" / "paladín renegado" delle schede ufficiali. I nomi dei tre alberi sono
 * quelli del gioco (in inglese, come restano nel client): la struttura a tre alberi con le stesse file di Classic è
 * confermata dall'articolo del 22/09/2026. Il colore è quello con cui il gioco scrive il nome della classe.
 */
export type ClassInfo = {
  id: ClassId;
  name: L10n;
  /** nome spagnolo dell'America Latina (es-MX) quando differisce da es-ES */
  nameMx?: string;
  /** colore della classe nel gioco (nomi nei gruppi, chat): accento del builder */
  color: string;
  /** colore per testi e cornici sul fondo scuro (contrasto ≥ 4,5:1 su #05263a e #031a2b, tema "abisso e bronzo" del 24/10/2026): il colore del gioco, solo lo sciamano schiarito del 20% */
  ink: string;
  /** icona della classe del gioco (`classicon_*`), in public/talents/icons (scaricata da import-talents.mjs --icons) */
  icon: string;
  /** risorsa principale, nome del gioco */
  resource: "Mana" | "Rage" | "Energy";
  roles: Role[];
  trees: [TreeInfo, TreeInfo, TreeInfo];
};

export type TreeInfo = { id: string; name: string; role: Role };

const tree = (id: string, name: string, role: Role): TreeInfo => ({ id, name, role });

export const classes: ClassInfo[] = [
  {
    id: "druid",
    icon: "classicon_druid",
    name: n("Druid", "Druido", "druida"),
    color: "#ff7c0a",
    ink: "#ff7c0a",
    resource: "Mana",
    roles: ["caster", "melee", "tank", "healer"],
    trees: [tree("balance", "Balance", "caster"), tree("feral-combat", "Feral Combat", "melee"), tree("restoration", "Restoration", "healer")],
  },
  {
    id: "hunter",
    icon: "classicon_hunter",
    name: n("Hunter", "Cacciatore", "cazador"),
    color: "#aad372",
    ink: "#aad372",
    resource: "Mana",
    roles: ["ranged"],
    trees: [tree("beast-mastery", "Beast Mastery", "ranged"), tree("marksmanship", "Marksmanship", "ranged"), tree("survival", "Survival", "ranged")],
  },
  {
    id: "mage",
    icon: "classicon_mage",
    name: n("Mage", "Mago", "mago"),
    color: "#3fc7eb",
    ink: "#3fc7eb",
    resource: "Mana",
    roles: ["caster"],
    trees: [tree("arcane", "Arcane", "caster"), tree("fire", "Fire", "caster"), tree("frost", "Frost", "caster")],
  },
  {
    id: "paladin",
    icon: "classicon_paladin",
    name: n("Paladin", "Paladino", "paladín"),
    color: "#f48cba",
    ink: "#f48cba",
    resource: "Mana",
    roles: ["healer", "tank", "melee"],
    trees: [tree("holy", "Holy", "healer"), tree("protection", "Protection", "tank"), tree("retribution", "Retribution", "melee")],
  },
  {
    id: "priest",
    icon: "classicon_priest",
    name: n("Priest", "Sacerdote", "sacerdote"),
    color: "#ffffff",
    ink: "#ffffff",
    resource: "Mana",
    roles: ["healer", "caster"],
    trees: [tree("discipline", "Discipline", "healer"), tree("holy", "Holy", "healer"), tree("shadow", "Shadow", "caster")],
  },
  {
    id: "rogue",
    icon: "classicon_rogue",
    name: n("Rogue", "Ladro", "pícaro"),
    color: "#fff468",
    ink: "#fff468",
    resource: "Energy",
    roles: ["melee"],
    trees: [tree("assassination", "Assassination", "melee"), tree("combat", "Combat", "melee"), tree("subtlety", "Subtlety", "melee")],
  },
  {
    id: "shaman",
    icon: "classicon_shaman",
    name: n("Shaman", "Sciamano", "chamán"),
    color: "#0070dd",
    ink: "#338de4",
    resource: "Mana",
    roles: ["caster", "melee", "healer"],
    trees: [tree("elemental", "Elemental", "caster"), tree("enhancement", "Enhancement", "melee"), tree("restoration", "Restoration", "healer")],
  },
  {
    id: "warlock",
    icon: "classicon_warlock",
    name: n("Warlock", "Stregone", "brujo"),
    color: "#8788ee",
    ink: "#8788ee",
    resource: "Mana",
    roles: ["caster"],
    trees: [tree("affliction", "Affliction", "caster"), tree("demonology", "Demonology", "caster"), tree("destruction", "Destruction", "caster")],
  },
  {
    id: "warrior",
    icon: "classicon_warrior",
    name: n("Warrior", "Guerriero", "guerrero"),
    color: "#c69b6d",
    ink: "#c69b6d",
    resource: "Rage",
    roles: ["melee", "tank"],
    trees: [tree("arms", "Arms", "melee"), tree("fury", "Fury", "melee"), tree("protection", "Protection", "tank")],
  },
];

export const classIds = classes.map((c) => c.id) as ClassId[];

export function isClassId(value: string): value is ClassId {
  return (classIds as string[]).includes(value);
}

export function getClass(id: ClassId): ClassInfo {
  const c = classes.find((x) => x.id === id);
  if (!c) throw new Error(`classe sconosciuta: ${id}`);
  return c;
}

/** Nome della classe nella lingua della pagina, con l'iniziale maiuscola (in spagnolo Blizzard scrive "cazador"). */
export function className(c: ClassInfo, locale: Locale): string {
  const s = c.name[locale];
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export const roleNames: Record<Role, L10n> = {
  tank: n("Tank", "Tank", "tanque"),
  healer: n("Healer", "Curatore", "sanador"),
  melee: n("Melee", "Mischia", "cuerpo a cuerpo"),
  ranged: n("Ranged", "A distanza", "a distancia"),
  caster: n("Caster", "Incantatore", "lanzador de hechizos"),
};

/**
 * Codice condivisibile di una build: sta nell'hash del link del builder (`/it/builder/warrior#FW1.wa.hm.60.0532…`),
 * si legge a voce e si incolla. Formato, versione 1:
 *
 *   FW1 . <classe> . <razza|xx> . <livello> . <albero 1> . <albero 2> . <albero 3>
 *
 * dove ogni albero è una cifra per talento (il rango, 0–5) nell'ordine del file dei dati (stabile fra una patch e
 * l'altra: un talento nuovo si accoda, uno spostato di casella tiene il posto), con gli zeri finali tolti ("0" per un
 * albero vuoto). Esempio: `FW1.wa.hm.60.0532001.0.0`. Le sigle di classi e razze sono fisse (`CLASS_CODES`,
 * `RACE_CODES`); un codice con una sigla sconosciuta o una versione diversa non si legge. Se in futuro la grammatica
 * cambia, la versione sale e la vecchia resta leggibile.
 */
import { MAX_LEVEL, sanitize } from "./engine";
import type { Build, ClassId, ClassTalents, RaceId } from "./types";

export const CODE_VERSION = "FW1";
export const NO_RACE = "xx";

export const CLASS_CODES: Record<ClassId, string> = {
  druid: "dr",
  hunter: "hu",
  mage: "ma",
  paladin: "pa",
  priest: "pr",
  rogue: "ro",
  shaman: "sh",
  warlock: "wl",
  warrior: "wa",
};

export const RACE_CODES: Record<RaceId, string> = {
  human: "hm",
  dwarf: "dw",
  "night-elf": "ne",
  gnome: "gn",
  "skyborne-high-order": "so",
  orc: "or",
  undead: "ud",
  tauren: "ta",
  troll: "tr",
  "skyborne-windshaper": "sw",
};

const classByCode = new Map(Object.entries(CLASS_CODES).map(([id, code]) => [code, id as ClassId]));
const raceByCode = new Map(Object.entries(RACE_CODES).map(([id, code]) => [code, id as RaceId]));

export function classFromCode(code: string): ClassId | null {
  return classByCode.get(code.toLowerCase()) ?? null;
}

export function raceFromCode(code: string): RaceId | null {
  return raceByCode.get(code.toLowerCase()) ?? null;
}

function treeDigits(data: ClassTalents, build: Build, treeIndex: number): string {
  // l'ordine delle cifre è quello del file dei dati, non della griglia (vedi `TalentTree.talents` in types.ts)
  const digits = data.trees[treeIndex].talents.map((t) => String(Math.min(9, Math.max(0, build.ranks[t.id] ?? 0))));
  const s = digits.join("").replace(/0+$/, "");
  return s || "0";
}

export function encodeBuild(data: ClassTalents, build: Build): string {
  const race = build.raceId ? RACE_CODES[build.raceId] : NO_RACE;
  return [CODE_VERSION, CLASS_CODES[build.classId], race, String(build.level), treeDigits(data, build, 0), treeDigits(data, build, 1), treeDigits(data, build, 2)].join(".");
}

/** Solo la testa del codice: classe, razza e livello, senza bisogno dei dati dei talenti (per scegliere la classe). */
export function peekCode(code: string): { classId: ClassId; raceId: RaceId | null; level: number } | null {
  const parts = code.trim().replace(/^#/, "").split(".");
  if (parts.length < 4 || parts[0].toUpperCase() !== CODE_VERSION) return null;
  const classId = classFromCode(parts[1]);
  if (!classId) return null;
  const raceId = parts[2].toLowerCase() === NO_RACE ? null : raceFromCode(parts[2]);
  if (parts[2].toLowerCase() !== NO_RACE && !raceId) return null;
  const level = Number.parseInt(parts[3], 10);
  if (!Number.isInteger(level) || level < 1 || level > MAX_LEVEL) return null;
  return { classId, raceId, level };
}

/**
 * Legge un codice con i dati della classe che nomina: restituisce una build già passata da `sanitize` (un codice a mano
 * con punti impossibili perde quei punti, non rompe nulla), o null se il codice non è di questo formato o di questa
 * classe. `allowedRaces` toglie una razza che la classe non ha.
 */
export function decodeBuild(data: ClassTalents, code: string, allowedRaces?: readonly RaceId[]): Build | null {
  const head = peekCode(code);
  if (!head || head.classId !== data.classId) return null;
  const parts = code.trim().replace(/^#/, "").split(".");
  const ranks: Record<string, number> = {};
  for (let i = 0; i < 3; i++) {
    const digits = parts[4 + i] ?? "";
    if (!/^\d*$/.test(digits)) return null;
    const talents = data.trees[i].talents;
    for (let j = 0; j < digits.length && j < talents.length; j++) {
      const r = Number(digits[j]);
      if (r > 0) ranks[talents[j].id] = r;
    }
  }
  return sanitize(data, { classId: data.classId, raceId: head.raceId, level: head.level, ranks }, allowedRaces);
}

/** Il codice dentro un link del builder (`…#FW1.…`) o incollato da solo, già senza il cancelletto. */
export function codeFromInput(input: string): string | null {
  const s = input.trim();
  const hash = s.includes("#") ? s.slice(s.lastIndexOf("#") + 1) : s;
  const m = /fw1\.[a-z]{2}\.[a-z]{2}\.\d{1,2}(?:\.\d*){0,3}/i.exec(hash);
  return m ? m[0] : null;
}

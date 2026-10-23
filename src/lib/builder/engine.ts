/**
 * Regole dei talenti di World of Warcraft: Forever, funzioni pure (niente React, niente dati): il builder, i test e
 * le pagine delle build le usano tutte da qui, così "si può mettere un punto qui?" ha una sola risposta.
 *
 * Fonti delle regole: Blizzard News "Create the Hero You Want to Be" (22/09/2026): «stessa struttura e stesso numero
 * di file» di Classic, talenti di soglia a 11, 21 e 31 punti più uno nuovo a 16; la struttura di Classic (un punto per
 * livello dal 10, 51 punti al 60, 5 punti per sbloccare ogni fila, prerequisiti al rango massimo) è quella del gioco
 * del 2004-2006 su cui Forever è costruito. Ogni costante sta qui, non nei componenti.
 */
import type { Build, BuildIssue, ClassTalents, RaceId, Talent, TalentTree } from "./types";

/** Livello massimo del gioco al lancio. */
export const MAX_LEVEL = 60;
/** Primo livello che dà un punto talento. */
export const FIRST_TALENT_LEVEL = 10;
/** Punti totali al livello massimo: 60 − 9. */
export const MAX_POINTS = MAX_LEVEL - FIRST_TALENT_LEVEL + 1;
/** Punti nell'albero che sbloccano ogni fila successiva. */
export const ROW_STEP = 5;
/** File e colonne della griglia di un albero. */
export const ROWS = 7;
export const COLS = 4;

/** Punti talento disponibili a un livello: uno per livello dal 10. */
export function pointsAtLevel(level: number): number {
  if (!Number.isFinite(level) || level < FIRST_TALENT_LEVEL) return 0;
  return Math.min(MAX_POINTS, Math.floor(level) - FIRST_TALENT_LEVEL + 1);
}

/** Livello necessario per spendere `points` punti (1 con nessun punto). */
export function levelForPoints(points: number): number {
  if (points <= 0) return 1;
  return Math.min(MAX_LEVEL, FIRST_TALENT_LEVEL + points - 1);
}

/** Punti necessari nell'albero per aprire una fila. */
export function pointsToUnlockRow(row: number): number {
  return row * ROW_STEP;
}

export function emptyBuild(classId: Build["classId"], level = MAX_LEVEL): Build {
  return { classId, raceId: null, level, ranks: {} };
}

/** I talenti di un albero in ordine di griglia (fila, poi colonna): è l'ordine del codice condivisibile. */
export function orderedTalents(tree: TalentTree): Talent[] {
  return [...tree.talents].sort((a, b) => a.row - b.row || a.col - b.col);
}

type Index = { byId: Map<string, { talent: Talent; tree: TalentTree }> };

const indexCache = new WeakMap<ClassTalents, Index>();

/** Indice talento → albero di una classe, calcolato una volta per oggetto dati. */
export function indexOf(data: ClassTalents): Index {
  let idx = indexCache.get(data);
  if (!idx) {
    const byId = new Map<string, { talent: Talent; tree: TalentTree }>();
    for (const tree of data.trees) for (const talent of tree.talents) byId.set(talent.id, { talent, tree });
    idx = { byId };
    indexCache.set(data, idx);
  }
  return idx;
}

export function rankOf(build: Build, talentId: string): number {
  return build.ranks[talentId] ?? 0;
}

/** Punti spesi in un albero. */
export function treePoints(tree: TalentTree, ranks: Build["ranks"]): number {
  let n = 0;
  for (const t of tree.talents) n += ranks[t.id] ?? 0;
  return n;
}

/** Punti spesi nelle file sopra `row` di un albero: sono quelli che contano per aprirla. */
export function pointsAboveRow(tree: TalentTree, ranks: Build["ranks"], row: number): number {
  let n = 0;
  for (const t of tree.talents) if (t.row < row) n += ranks[t.id] ?? 0;
  return n;
}

export function totalPoints(data: ClassTalents, ranks: Build["ranks"]): number {
  return data.trees.reduce((n, tree) => n + treePoints(tree, ranks), 0);
}

/** Punti per albero, nell'ordine degli alberi: il riassunto "31/20/0". */
export function treeSummary(data: ClassTalents, ranks: Build["ranks"]): number[] {
  return data.trees.map((tree) => treePoints(tree, ranks));
}

/** Una fila è aperta quando le file sopra hanno abbastanza punti. */
export function rowUnlocked(tree: TalentTree, ranks: Build["ranks"], row: number): boolean {
  return pointsAboveRow(tree, ranks, row) >= pointsToUnlockRow(row);
}

/** Il prerequisito di un talento è soddisfatto (nessun prerequisito, o talento richiesto al rango dovuto). */
export function prerequisiteMet(data: ClassTalents, ranks: Build["ranks"], talent: Talent): boolean {
  if (!talent.requires) return true;
  const req = indexOf(data).byId.get(talent.requires.id);
  if (!req) return false;
  const needed = talent.requires.rank ?? req.talent.maxRank;
  return (ranks[req.talent.id] ?? 0) >= needed;
}

/** I talenti che dipendono da `talentId` (le frecce che partono da lui). */
export function dependentsOf(data: ClassTalents, talentId: string): Talent[] {
  const entry = indexOf(data).byId.get(talentId);
  if (!entry) return [];
  return entry.tree.talents.filter((t) => t.requires?.id === talentId);
}

/**
 * Un insieme di ranghi è coerente con le regole dell'albero: ogni talento con punti sta in una fila aperta, entro il
 * rango massimo e con il prerequisito soddisfatto. Non guarda il livello né il totale: quelli in `validateBuild`.
 */
export function treeConsistent(data: ClassTalents, tree: TalentTree, ranks: Build["ranks"]): boolean {
  for (const t of tree.talents) {
    const r = ranks[t.id] ?? 0;
    if (r === 0) continue;
    if (r > t.maxRank) return false;
    if (!rowUnlocked(tree, ranks, t.row)) return false;
    if (!prerequisiteMet(data, ranks, t)) return false;
  }
  return true;
}

/** Perché non si può aggiungere un punto, o null se si può. */
export function addBlocker(data: ClassTalents, build: Build, talentId: string): "unknownTalent" | "maxRank" | "rowLocked" | "prerequisiteMissing" | "noPointsLeft" | null {
  const entry = indexOf(data).byId.get(talentId);
  if (!entry) return "unknownTalent";
  const { talent, tree } = entry;
  if (rankOf(build, talentId) >= talent.maxRank) return "maxRank";
  if (!rowUnlocked(tree, build.ranks, talent.row)) return "rowLocked";
  if (!prerequisiteMet(data, build.ranks, talent)) return "prerequisiteMissing";
  if (totalPoints(data, build.ranks) >= pointsAtLevel(build.level)) return "noPointsLeft";
  return null;
}

export function canAdd(data: ClassTalents, build: Build, talentId: string): boolean {
  return addBlocker(data, build, talentId) === null;
}

/**
 * Si può togliere un punto solo se l'albero resta coerente: nessun talento più in basso perde la sua fila, nessun
 * dipendente resta senza prerequisito.
 */
export function canRemove(data: ClassTalents, build: Build, talentId: string): boolean {
  const entry = indexOf(data).byId.get(talentId);
  if (!entry) return false;
  const r = rankOf(build, talentId);
  if (r <= 0) return false;
  const next = { ...build.ranks, [talentId]: r - 1 };
  return treeConsistent(data, entry.tree, next);
}

function withRank(build: Build, talentId: string, rank: number): Build {
  const ranks = { ...build.ranks };
  if (rank > 0) ranks[talentId] = rank;
  else delete ranks[talentId];
  return { ...build, ranks };
}

/** La build con un punto in più sul talento, o la stessa build se non si può. */
export function addPoint(data: ClassTalents, build: Build, talentId: string): Build {
  if (!canAdd(data, build, talentId)) return build;
  return withRank(build, talentId, rankOf(build, talentId) + 1);
}

/** La build con un punto in meno sul talento, o la stessa build se non si può. */
export function removePoint(data: ClassTalents, build: Build, talentId: string): Build {
  if (!canRemove(data, build, talentId)) return build;
  return withRank(build, talentId, rankOf(build, talentId) - 1);
}

/** Porta un talento al rango massimo, un punto alla volta (si ferma dove le regole lo fermano). */
export function maxOut(data: ClassTalents, build: Build, talentId: string): Build {
  let b = build;
  for (let guard = 0; guard < 5; guard++) {
    const next = addPoint(data, b, talentId);
    if (next === b) break;
    b = next;
  }
  return b;
}

/** Toglie tutti i ranghi di un talento, un punto alla volta, finché le regole lo permettono. */
export function removeAllRanks(data: ClassTalents, build: Build, talentId: string): Build {
  let b = build;
  for (let guard = 0; guard < 5; guard++) {
    const next = removePoint(data, b, talentId);
    if (next === b) break;
    b = next;
  }
  return b;
}

/**
 * La "cascata": toglie un punto anche quando altri talenti ci si appoggiano, e poi toglie tutti i punti dei talenti
 * rimasti senza fila o senza prerequisito, dal più in basso in su, finché l'albero è di nuovo coerente. Restituisce
 * quanti punti sono caduti in tutto (compreso il primo), così l'interfaccia lo dice prima di farlo.
 */
export function removeWithDependents(data: ClassTalents, build: Build, talentId: string): { build: Build; removed: number } {
  const entry = indexOf(data).byId.get(talentId);
  const r = rankOf(build, talentId);
  if (!entry || r <= 0) return { build, removed: 0 };
  const ranks = { ...build.ranks };
  let removed = 1;
  if (r - 1 > 0) ranks[talentId] = r - 1;
  else delete ranks[talentId];
  for (let guard = 0; guard < 200; guard++) {
    const broken = entry.tree.talents
      .filter((t) => (ranks[t.id] ?? 0) > 0 && (!rowUnlocked(entry.tree, ranks, t.row) || !prerequisiteMet(data, ranks, t)))
      .sort((a, b) => b.row - a.row || b.col - a.col);
    if (!broken.length) break;
    const t = broken[0];
    removed += ranks[t.id] ?? 0;
    delete ranks[t.id];
  }
  return { build: { ...build, ranks }, removed };
}

/**
 * Toglie gli ultimi `count` punti (dal talento più in basso in su, in ogni albero a turno dal più carico), per
 * rientrare nei punti del livello scelto. Restituisce la build e quanti punti sono caduti davvero.
 */
export function trimPoints(data: ClassTalents, build: Build, count: number): { build: Build; removed: number } {
  let b = build;
  let removed = 0;
  for (let guard = 0; guard < 60 && removed < count; guard++) {
    // il talento più in basso fra quelli che si possono togliere, nell'albero con più punti
    let pick: { id: string; row: number; col: number; points: number } | null = null;
    for (const tree of data.trees) {
      const points = treePoints(tree, b.ranks);
      for (const t of tree.talents) {
        if ((b.ranks[t.id] ?? 0) === 0 || !canRemove(data, b, t.id)) continue;
        if (!pick || t.row > pick.row || (t.row === pick.row && points > pick.points) || (t.row === pick.row && points === pick.points && t.col > pick.col)) pick = { id: t.id, row: t.row, col: t.col, points };
      }
    }
    if (!pick) break;
    b = removePoint(data, b, pick.id);
    removed++;
  }
  return { build: b, removed };
}

export function resetTree(data: ClassTalents, build: Build, treeId: string): Build {
  const tree = data.trees.find((t) => t.id === treeId);
  if (!tree) return build;
  const ranks = { ...build.ranks };
  for (const t of tree.talents) delete ranks[t.id];
  return { ...build, ranks };
}

export function resetAll(build: Build): Build {
  return { ...build, ranks: {} };
}

/** Cambio di livello: i punti oltre quelli disponibili restano, e `validateBuild` lo segnala (`overLevel`). */
export function withLevel(build: Build, level: number): Build {
  const l = Math.min(MAX_LEVEL, Math.max(1, Math.floor(level)));
  return { ...build, level: l };
}

/** Il livello minimo per giocare la build com'è (1 senza punti). */
export function requiredLevel(data: ClassTalents, build: Build): number {
  return levelForPoints(totalPoints(data, build.ranks));
}

/**
 * L'albero con più punti (la "specializzazione" della build), o null senza punti. A parità vince il primo albero:
 * è una convenzione del sito, non una regola del gioco.
 */
export function mainTree(data: ClassTalents, ranks: Build["ranks"]): TalentTree | null {
  let best: TalentTree | null = null;
  let bestPoints = 0;
  for (const tree of data.trees) {
    const p = treePoints(tree, ranks);
    if (p > bestPoints) {
      best = tree;
      bestPoints = p;
    }
  }
  return best;
}

/** La fila più bassa raggiunta in un albero (−1 senza punti): serve alle etichette "talento da 31 punti". */
export function deepestRow(tree: TalentTree, ranks: Build["ranks"]): number {
  let row = -1;
  for (const t of tree.talents) if ((ranks[t.id] ?? 0) > 0 && t.row > row) row = t.row;
  return row;
}

/**
 * Tutti i problemi di una build: una build arrivata da un link o dal salvataggio del browser si pulisce con
 * `sanitize`, questa funzione dice solo che cosa non va.
 */
export function validateBuild(data: ClassTalents, build: Build, allowedRaces?: readonly RaceId[]): BuildIssue[] {
  const issues: BuildIssue[] = [];
  const idx = indexOf(data);
  if (!Number.isInteger(build.level) || build.level < 1 || build.level > MAX_LEVEL) issues.push({ code: "levelOutOfRange" });
  for (const [id, rank] of Object.entries(build.ranks)) {
    const entry = idx.byId.get(id);
    if (!entry) {
      issues.push({ code: "unknownTalent", talentId: id });
      continue;
    }
    if (rank > entry.talent.maxRank) issues.push({ code: "rankOverMax", talentId: id, treeId: entry.tree.id });
    if (rank > 0 && !rowUnlocked(entry.tree, build.ranks, entry.talent.row)) issues.push({ code: "rowLocked", talentId: id, treeId: entry.tree.id });
    if (rank > 0 && !prerequisiteMet(data, build.ranks, entry.talent)) issues.push({ code: "prerequisiteMissing", talentId: id, treeId: entry.tree.id });
  }
  const total = totalPoints(data, build.ranks);
  if (total > MAX_POINTS) issues.push({ code: "tooManyPoints" });
  else if (total > pointsAtLevel(build.level)) issues.push({ code: "overLevel" });
  if (build.raceId && allowedRaces && !allowedRaces.includes(build.raceId)) issues.push({ code: "raceNotAllowed" });
  return issues;
}

/**
 * Ricostruisce una build valida a partire da una qualsiasi (link vecchio, dati cambiati): rimette i punti uno alla
 * volta in ordine di griglia, albero per albero, saltando quello che le regole non permettono. Il livello si alza, se
 * serve, fino a quello richiesto dai punti; una razza non ammessa si toglie.
 */
export function sanitize(data: ClassTalents, build: Build, allowedRaces?: readonly RaceId[]): Build {
  const level = Number.isInteger(build.level) ? Math.min(MAX_LEVEL, Math.max(1, build.level)) : MAX_LEVEL;
  let out: Build = { classId: data.classId, raceId: build.raceId && (!allowedRaces || allowedRaces.includes(build.raceId)) ? build.raceId : null, level: MAX_LEVEL, ranks: {} };
  // con il livello al massimo si rimettono tutti i punti possibili; i talenti si scorrono per fila, così i prerequisiti
  // e le file aperte vengono prima dei talenti che li chiedono
  let changed = true;
  const wanted = new Map(Object.entries(build.ranks).filter(([, r]) => Number.isInteger(r) && r > 0));
  while (changed) {
    changed = false;
    for (const tree of data.trees) {
      for (const t of orderedTalents(tree)) {
        const target = Math.min(t.maxRank, wanted.get(t.id) ?? 0);
        while (rankOf(out, t.id) < target) {
          const next = addPoint(data, out, t.id);
          if (next === out) break;
          out = next;
          changed = true;
        }
      }
    }
  }
  const needed = requiredLevel(data, out);
  return { ...out, level: Math.max(level, needed) };
}

/** Elenco testuale della build (per copiare o incollare): "Arms 31 / Fury 20 / Protection 0" e i talenti presi. */
export function buildAsText(data: ClassTalents, build: Build): string {
  const lines: string[] = [];
  lines.push(data.trees.map((tree) => `${tree.name} ${treePoints(tree, build.ranks)}`).join(" / "));
  for (const tree of data.trees) {
    const taken = orderedTalents(tree).filter((t) => rankOf(build, t.id) > 0);
    if (!taken.length) continue;
    lines.push("");
    lines.push(`${tree.name}:`);
    for (const t of taken) lines.push(`  ${rankOf(build, t.id)}/${t.maxRank} ${t.name}`);
  }
  return lines.join("\n");
}

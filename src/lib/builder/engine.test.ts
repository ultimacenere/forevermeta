// Regole dei talenti e codice condivisibile del builder, su un albero finto: `npm test`.
import * as nodeModule from "node:module";
import { describe, test } from "node:test";
import assert from "node:assert/strict";

type Resolved = { url: string; format?: string | null; shortCircuit?: boolean };
type ResolveHook = (specifier: string, context: object, next: (specifier: string, context?: object) => Resolved) => Resolved;
const { registerHooks } = nodeModule as unknown as { registerHooks: (hooks: { resolve: ResolveHook }) => void };
registerHooks({
  resolve(specifier, context, next) {
    if (/^\.\.?\//.test(specifier) && !/\.(?:[cm]?[jt]sx?|json)$/.test(specifier)) {
      try {
        return next(`${specifier}.ts`, context);
      } catch {
        // non è un modulo .ts
      }
    }
    return next(specifier, context);
  },
});

// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const engine: typeof import("./engine") = await import("./engine.ts");
// @ts-expect-error TS5097: Node richiede l'estensione .ts nell'import
const code: typeof import("./code") = await import("./code.ts");
type ClassTalents = import("./types").ClassTalents;
type Build = import("./types").Build;

const { addPoint, canAdd, canRemove, addBlocker, emptyBuild, levelForPoints, maxOut, pointsAtLevel, removePoint, requiredLevel, resetTree, sanitize, totalPoints, treeSummary, validateBuild, buildAsText, mainTree, withLevel } = engine;
const { encodeBuild, decodeBuild, peekCode, codeFromInput } = code;

const t = (id: string, row: number, col: number, maxRank: number, requires?: string) => ({
  id,
  name: id,
  row,
  col,
  maxRank,
  ranks: Array.from({ length: maxRank }, (_, i) => `${id} rank ${i + 1}`),
  ...(requires ? { requires: { id: requires } } : {}),
});

/** Albero finto: a e b in fila 0, c in fila 1 (vuole a al massimo), d in fila 2, e in fila 6 (il "31 punti"). */
const data: ClassTalents = {
  classId: "warrior",
  gameVersion: "test",
  source: { label: "test", fetched: "2026-10-22", verifiedInGame: false },
  trees: [
    { id: "arms", name: "Arms", role: "melee", talents: [t("a", 0, 1, 5), t("b", 0, 2, 5), t("c", 1, 1, 3, "a"), t("d", 2, 1, 1), t("e", 6, 1, 1), t("f", 1, 3, 5), t("g", 2, 2, 5), t("h", 3, 1, 5), t("i", 4, 1, 5), t("j", 5, 1, 5)] },
    { id: "fury", name: "Fury", role: "melee", talents: [t("x", 0, 0, 5), t("y", 1, 0, 5)] },
    { id: "protection", name: "Protection", role: "tank", talents: [t("z", 0, 0, 5)] },
  ],
};

function put(build: Build, id: string, n: number): Build {
  let b = build;
  for (let i = 0; i < n; i++) {
    const next = addPoint(data, b, id);
    assert.notEqual(next, b, `non si può mettere il punto ${i + 1} su ${id}`);
    b = next;
  }
  return b;
}

describe("punti e livelli", () => {
  test("un punto per livello dal 10, 51 al 60", () => {
    assert.equal(pointsAtLevel(1), 0);
    assert.equal(pointsAtLevel(9), 0);
    assert.equal(pointsAtLevel(10), 1);
    assert.equal(pointsAtLevel(30), 21);
    assert.equal(pointsAtLevel(60), 51);
    assert.equal(pointsAtLevel(70), 51);
    assert.equal(levelForPoints(0), 1);
    assert.equal(levelForPoints(1), 10);
    assert.equal(levelForPoints(21), 30);
    assert.equal(levelForPoints(51), 60);
  });
});

describe("aggiungere punti", () => {
  test("la fila 1 si apre con 5 punti sopra", () => {
    let b = emptyBuild("warrior");
    assert.equal(addBlocker(data, b, "c"), "rowLocked");
    b = put(b, "a", 5);
    assert.equal(addBlocker(data, b, "c"), null);
    assert.equal(addBlocker(data, b, "d"), "rowLocked");
    b = put(b, "c", 3);
    assert.equal(addBlocker(data, b, "d"), "rowLocked", "8 punti non bastano per la fila 2");
    b = put(b, "f", 2);
    assert.equal(addBlocker(data, b, "d"), null);
  });
  test("il prerequisito deve essere al massimo", () => {
    let b = put(emptyBuild("warrior"), "b", 5);
    assert.equal(addBlocker(data, b, "c"), "prerequisiteMissing");
    b = put(b, "a", 4);
    assert.equal(addBlocker(data, b, "c"), "prerequisiteMissing");
    b = put(b, "a", 1);
    assert.equal(canAdd(data, b, "c"), true);
  });
  test("non si supera il rango massimo né i punti del livello", () => {
    let b = emptyBuild("warrior", 10);
    b = put(b, "a", 1);
    assert.equal(addBlocker(data, b, "a"), "noPointsLeft");
    b = withLevel(b, 14);
    b = put(b, "a", 4);
    assert.equal(addBlocker(data, b, "a"), "maxRank");
    assert.equal(addBlocker(data, b, "nope"), "unknownTalent");
    assert.equal(addPoint(data, b, "a"), b, "la stessa build quando non si può");
  });
  test("maxOut si ferma dove le regole lo fermano", () => {
    const b = maxOut(data, emptyBuild("warrior", 12), "a");
    assert.equal(b.ranks.a, 3);
  });
  test("il 31 punti chiede 30 punti nell'albero", () => {
    let b = emptyBuild("warrior");
    b = put(b, "a", 5);
    b = put(b, "c", 3);
    b = put(b, "f", 2);
    b = put(b, "d", 1);
    b = put(b, "g", 4);
    assert.equal(addBlocker(data, b, "h"), null);
    b = put(b, "h", 5);
    b = put(b, "i", 5);
    b = put(b, "j", 5);
    assert.equal(totalPoints(data, b.ranks), 30);
    assert.equal(addBlocker(data, b, "e"), null);
    b = put(b, "e", 1);
    assert.deepEqual(treeSummary(data, b.ranks), [31, 0, 0]);
    assert.equal(requiredLevel(data, b), 40);
    assert.equal(mainTree(data, b.ranks)?.id, "arms");
  });
});

describe("togliere punti", () => {
  test("non si lascia un dipendente senza prerequisito", () => {
    let b = put(emptyBuild("warrior"), "a", 5);
    b = put(b, "c", 1);
    assert.equal(canRemove(data, b, "a"), false);
    b = removePoint(data, b, "c");
    assert.equal(canRemove(data, b, "a"), true);
  });
  test("non si chiude una fila con punti sotto", () => {
    let b = put(emptyBuild("warrior"), "a", 5);
    b = put(b, "f", 1);
    assert.equal(canRemove(data, b, "a"), false, "togliere da a lascerebbe 4 punti sopra la fila 1");
    assert.equal(canRemove(data, b, "f"), true);
    b = put(b, "b", 1);
    assert.equal(canRemove(data, b, "a"), true, "con 6 punti sopra se ne può togliere uno");
  });
  test("togliere da un talento vuoto non cambia nulla", () => {
    const b = emptyBuild("warrior");
    assert.equal(removePoint(data, b, "a"), b);
    assert.equal(canRemove(data, b, "nope"), false);
  });
  test("reset di un albero", () => {
    let b = put(emptyBuild("warrior"), "a", 5);
    b = put(b, "x", 2);
    b = resetTree(data, b, "arms");
    assert.deepEqual(treeSummary(data, b.ranks), [0, 2, 0]);
  });
});

describe("validazione e pulizia", () => {
  test("una build arrivata da fuori con punti impossibili", () => {
    const bad: Build = { classId: "warrior", raceId: null, level: 60, ranks: { c: 3, a: 2, nope: 1, e: 1, x: 9 } };
    const issues = validateBuild(data, bad).map((i) => i.code);
    assert.ok(issues.includes("unknownTalent"));
    assert.ok(issues.includes("rowLocked"));
    assert.ok(issues.includes("prerequisiteMissing"));
    assert.ok(issues.includes("rankOverMax"));
    const clean = sanitize(data, bad);
    assert.deepEqual(clean.ranks, { a: 2, x: 5 });
    assert.deepEqual(validateBuild(data, clean), []);
  });
  test("la pulizia alza il livello fino ai punti messi", () => {
    const b = sanitize(data, { classId: "warrior", raceId: null, level: 10, ranks: { a: 5, b: 5 } });
    assert.equal(b.level, 19);
    assert.deepEqual(b.ranks, { a: 5, b: 5 });
  });
  test("il livello segnala i punti di troppo senza toglierli", () => {
    const b = withLevel(put(emptyBuild("warrior"), "a", 5), 10);
    assert.deepEqual(validateBuild(data, b).map((i) => i.code), ["overLevel"]);
  });
  test("la razza deve essere fra quelle ammesse", () => {
    const b: Build = { ...emptyBuild("warrior"), raceId: "tauren" };
    assert.deepEqual(validateBuild(data, b, ["human", "orc"]).map((i) => i.code), ["raceNotAllowed"]);
    assert.equal(sanitize(data, b, ["human", "orc"]).raceId, null);
    assert.equal(sanitize(data, b, ["tauren"]).raceId, "tauren");
  });
});

describe("codice condivisibile", () => {
  test("andata e ritorno", () => {
    let b = put(emptyBuild("warrior"), "a", 5);
    b = put(b, "c", 3);
    b = put(b, "x", 2);
    b = { ...b, raceId: "human" };
    const c = encodeBuild(data, b);
    assert.equal(c, "FW1.wa.hm.60.503.2.0");
    assert.deepEqual(decodeBuild(data, c), b);
    assert.deepEqual(peekCode(c), { classId: "warrior", raceId: "human", level: 60 });
  });
  test("senza razza e albero vuoto", () => {
    const b = emptyBuild("warrior", 25);
    assert.equal(encodeBuild(data, b), "FW1.wa.xx.25.0.0.0");
    assert.deepEqual(decodeBuild(data, "FW1.wa.xx.25.0.0.0"), b);
  });
  test("codici che non si leggono", () => {
    assert.equal(decodeBuild(data, "FW2.wa.xx.60.0.0.0"), null);
    assert.equal(decodeBuild(data, "FW1.zz.xx.60"), null);
    assert.equal(decodeBuild(data, "FW1.ma.xx.60.0.0.0"), null, "classe diversa dai dati");
    assert.equal(decodeBuild(data, "FW1.wa.qq.60.0.0.0"), null, "razza sconosciuta");
    assert.equal(decodeBuild(data, "FW1.wa.xx.99.0.0.0"), null, "livello oltre il massimo");
    assert.equal(decodeBuild(data, "FW1.wa.xx.60.5x.0.0"), null, "cifre non numeriche");
  });
  test("un codice incollato a mano viene pulito dalle regole", () => {
    const b = decodeBuild(data, "FW1.wa.xx.60.0530001")!;
    assert.deepEqual(b.ranks, { b: 5 }, "c vuole a al massimo, h vuole la fila 3: restano solo i 5 su b");
    assert.equal(b.level, 60);
  });
  test("il codice si trova dentro un link o incollato", () => {
    assert.equal(codeFromInput("https://forevermeta.me/it/builder/warrior#FW1.wa.hm.60.503.2.0"), "FW1.wa.hm.60.503.2.0");
    assert.equal(codeFromInput("  FW1.wa.hm.60.503.2.0 "), "FW1.wa.hm.60.503.2.0");
    assert.equal(codeFromInput("#fw1.WA.HM.60.53"), "fw1.WA.HM.60.53");
    assert.equal(codeFromInput("ciao"), null);
  });
  test("testo della build", () => {
    let b = put(emptyBuild("warrior"), "a", 5);
    b = put(b, "c", 1);
    assert.equal(buildAsText(data, b), "Arms 6 / Fury 0 / Protection 0\n\nArms:\n  5/5 a\n  1/3 c");
  });
});

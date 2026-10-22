// Coerenza dei dati dei talenti scritti da scripts/import-talents.mjs: `npm test`.
import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

type Talent = { id: string; name: string; row: number; col: number; maxRank: number; ranks: string[]; requires?: { id: string }; icon?: string; classic?: { status: string; text?: string } };
type Tree = { id: string; name: string; role: string; talents: Talent[]; removed?: { name: string; maxRank: number }[] };
type ClassTalents = { classId: string; gameVersion: string; source: { label: string; url?: string; license?: string; fetched: string; verifiedInGame: boolean; attribution?: string }; trees: Tree[] };

const here = join(import.meta.dirname ?? ".", ".");
const classIds = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const roles = new Set(["tank", "healer", "melee", "ranged", "caster"]);
const load = (id: string): ClassTalents => JSON.parse(readFileSync(join(here, `${id}.json`), "utf8"));

describe("alberi dei talenti", () => {
  for (const id of classIds) {
    test(id, () => {
      const c = load(id);
      assert.equal(c.classId, id);
      assert.match(c.gameVersion, /^\d+(\.\d+)+$/, "versione del gioco come numero di build");
      assert.ok(c.source.label && c.source.fetched && typeof c.source.verifiedInGame === "boolean");
      assert.ok(c.source.license && c.source.attribution, "licenza e attribuzione della fonte");
      assert.equal(c.trees.length, 3);
      const ids = new Set<string>();
      let total = 0;
      for (const tree of c.trees) {
        assert.ok(roles.has(tree.role), `${tree.name}: ruolo ${tree.role}`);
        assert.match(tree.id, /^[a-z0-9-]+$/);
        assert.ok(tree.talents.length >= 14 && tree.talents.length <= 22, `${tree.name}: ${tree.talents.length} talenti`);
        const cells = new Set<string>();
        const byId = new Map(tree.talents.map((t) => [t.id, t]));
        let maxPoints = 0;
        for (const t of tree.talents) {
          assert.match(t.id, /^[a-z0-9-]+$/, `${t.name}: id`);
          assert.ok(!ids.has(t.id), `${c.classId}: id doppio ${t.id}`);
          ids.add(t.id);
          assert.ok(Number.isInteger(t.row) && t.row >= 0 && t.row <= 6, `${t.name}: fila ${t.row}`);
          assert.ok(Number.isInteger(t.col) && t.col >= 0 && t.col <= 3, `${t.name}: colonna ${t.col}`);
          const cell = `${t.row},${t.col}`;
          assert.ok(!cells.has(cell), `${tree.name}: due talenti nella casella ${cell}`);
          cells.add(cell);
          assert.ok(t.maxRank >= 1 && t.maxRank <= 5, `${t.name}: ${t.maxRank} ranghi`);
          assert.equal(t.ranks.length, t.maxRank, `${t.name}: un testo per rango`);
          for (const r of t.ranks) assert.ok(r.trim().length > 10, `${t.name}: testo di rango vuoto`);
          if (t.requires) {
            const req = byId.get(t.requires.id);
            assert.ok(req, `${t.name}: prerequisito ${t.requires.id} non nell'albero`);
            assert.ok(req!.row <= t.row, `${t.name}: il prerequisito ${req!.name} sta più in basso`);
            assert.notEqual(req!.id, t.id);
          }
          if (t.icon) assert.ok(existsSync(join(here, "..", "..", "..", "..", "public", "talents", "icons", `${t.icon}.jpg`)), `${t.name}: icona ${t.icon} non in public/talents/icons`);
          if (t.classic) assert.ok(["same", "changed", "moved", "new"].includes(t.classic.status));
          maxPoints += t.maxRank;
        }
        // l'ultima fila (il talento da 31 punti) deve essere raggiungibile: almeno 30 punti nelle sei file sopra
        const above = tree.talents.filter((t) => t.row < 6).reduce((a, t) => a + t.maxRank, 0);
        assert.ok(above >= 30, `${tree.name}: nelle prime sei file ci sono solo ${above} punti, l'ultima fila non si apre`);
        assert.ok(maxPoints >= 31, `${tree.name}: con tutti i ranghi si arriva solo a ${maxPoints} punti`);
        assert.ok(tree.talents.some((t) => t.row === 6), `${tree.name}: nessun talento nell'ultima fila`);
        total += tree.talents.length;
      }
      assert.ok(total >= 45 && total <= 60, `${id}: ${total} talenti`);
    });
  }
  test("ogni classe ha un file e le classi sono nove", () => {
    assert.equal(classIds.length, 9);
    for (const id of classIds) assert.ok(existsSync(join(here, `${id}.json`)), id);
  });
});

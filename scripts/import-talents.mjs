// Importa gli alberi dei talenti di World of Warcraft: Forever nel formato del builder (src/lib/builder/types.ts).
//
// Fonte: i JSON pubblici di talentsforever.com, pubblicati con licenza CC BY 4.0 (pagine /about e /terms, campi
// `license` e `attribution` del file; i testi, i nomi e le icone restano di Blizzard Entertainment). Il sito li
// genera dai file del client della beta e dichiara la build in `talents.source` di ogni classe: qui si copia tale
// riga nella `source` del nostro file, con la data dell'importazione, e il sito la mostra in fondo al builder.
//
//   node scripts/import-talents.mjs                 scarica https://talentsforever.com/data.json e scrive i 9 file
//   node scripts/import-talents.mjs --from <file>   usa un data.json già scaricato
//   node scripts/import-talents.mjs --icons         scarica anche le icone (56 px) dal CDN di Blizzard in
//                                                   public/talents/icons/, una alla volta (in parallelo il CDN
//                                                   risponde 403 a caso); un'icona assente lascia il talento senza
//                                                   `icon` e il builder mostra le iniziali
//   node scripts/import-talents.mjs --check         non scrive: confronta con i file che ci sono e riporta le differenze
//
// Ordine dei talenti: ogni albero tiene l'ordine del file già scritto (è l'ordine delle cifre del codice
// condivisibile); i talenti nuovi si accodano, quelli spariti si tolgono (e i codici che li usavano perdono quel
// punto, come dice `sanitize`). Il file va committato insieme a `gameVersion` nuova.
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "src", "lib", "data", "talents");
const iconDir = join(root, "public", "talents", "icons");
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

const SOURCE_URL = "https://talentsforever.com/data.json";
const SOURCE_LABEL = "talentsforever.com";
const ICON_CDN = ["https://render.worldofwarcraft.com/classic-us/icons/56/", "https://render.worldofwarcraft.com/us/icons/56/"];

/** Classi nel nostro ordine, con il ruolo di ogni albero (uguale a src/lib/data/classes.ts). */
const CLASSES = {
  Druid: { id: "druid", roles: ["caster", "melee", "healer"] },
  Hunter: { id: "hunter", roles: ["ranged", "ranged", "ranged"] },
  Mage: { id: "mage", roles: ["caster", "caster", "caster"] },
  Paladin: { id: "paladin", roles: ["healer", "tank", "melee"] },
  Priest: { id: "priest", roles: ["healer", "healer", "caster"] },
  Rogue: { id: "rogue", roles: ["melee", "melee", "melee"] },
  Shaman: { id: "shaman", roles: ["caster", "melee", "healer"] },
  Warlock: { id: "warlock", roles: ["caster", "caster", "caster"] },
  Warrior: { id: "warrior", roles: ["melee", "melee", "tank"] },
};

const slug = (s) =>
  String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

async function load() {
  const from = opt("--from");
  if (from) return JSON.parse(readFileSync(from, "utf8"));
  const res = await fetch(SOURCE_URL, { headers: { "user-agent": "ForeverMeta import (forevermeta.me)" } });
  if (!res.ok) throw new Error(`${SOURCE_URL}: HTTP ${res.status}`);
  return res.json();
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function downloadIcon(name) {
  const file = join(iconDir, `${name}.jpg`);
  if (existsSync(file)) return true;
  for (const base of ICON_CDN) {
    try {
      const res = await fetch(`${base}${name}.jpg`);
      if (res.ok && (res.headers.get("content-type") ?? "").startsWith("image/")) {
        writeFileSync(file, Buffer.from(await res.arrayBuffer()));
        await sleep(150);
        return true;
      }
    } catch {
      // si prova il percorso successivo
    }
    await sleep(150);
  }
  return false;
}

function readExisting(classId) {
  const file = join(outDir, `${classId}.json`);
  return existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : null;
}

/** Ordina i talenti come nel file già scritto (per id), poi i nuovi in ordine di griglia. */
function keepOrder(existingTree, talents) {
  const order = new Map((existingTree?.talents ?? []).map((t, i) => [t.id, i]));
  return [...talents].sort((a, b) => {
    const ia = order.has(a.id) ? order.get(a.id) : Infinity;
    const ib = order.has(b.id) ? order.get(b.id) : Infinity;
    if (ia !== ib) return ia - ib;
    return a.row - b.row || a.col - b.col;
  });
}

function convertClass(name, raw, existing, iconOk, today) {
  const meta = CLASSES[name];
  if (!meta) throw new Error(`classe sconosciuta nel file: ${name}`);
  const trees = raw.trees;
  if (!Array.isArray(trees) || trees.length !== 3) throw new Error(`${name}: attesi 3 alberi, trovati ${trees?.length}`);
  const usedIds = new Set();
  const outTrees = trees.map((tree, i) => {
    const treeId = slug(tree.name);
    const talents = tree.talents.map((t) => {
      let id = slug(t.name);
      if (usedIds.has(id)) id = `${treeId}-${id}`;
      if (usedIds.has(id)) throw new Error(`${name}: id doppio ${id}`);
      usedIds.add(id);
      if (!Array.isArray(t.desc) || t.desc.length !== t.max) throw new Error(`${name}/${t.name}: ${t.desc?.length} testi per ${t.max} ranghi`);
      const talent = { id, name: t.name, row: t.row - 1, col: t.col - 1, maxRank: t.max, ranks: t.desc };
      if (t.req) {
        const req = tree.talents.find((x) => x.name === t.req);
        if (!req) throw new Error(`${name}/${t.name}: prerequisito ${t.req} non nell'albero`);
        talent.requires = { id: null, name: t.req };
      }
      if (t.icon && iconOk(t.icon)) talent.icon = t.icon;
      if (t.classic?.status) {
        talent.classic = { status: t.classic.status };
        if (t.classic.status !== "same" && t.classic.text) talent.classic.text = t.classic.text;
      }
      return talent;
    });
    // i prerequisiti per id: lo stesso nome può avere un id con il prefisso dell'albero
    const idByName = new Map(talents.map((t) => [t.name, t.id]));
    for (const t of talents) if (t.requires) t.requires = { id: idByName.get(t.requires.name) };
    const removed = (tree.removed ?? []).map((r) => ({ name: r.name, maxRank: r.max, ...(r.text ? { text: r.text } : {}), ...(Number.isInteger(r.row) ? { row: r.row - 1 } : {}) }));
    return { id: treeId, name: tree.name, role: meta.roles[i], talents: keepOrder(existing?.trees?.[i], talents), ...(removed.length ? { removed } : {}) };
  });
  const sourceLine = String(raw.source ?? "");
  const build = /build\s+(\d+(?:\.\d+)*)/i.exec(sourceLine)?.[1] ?? "beta";
  return {
    classId: meta.id,
    gameVersion: build,
    source: {
      label: SOURCE_LABEL,
      url: "https://talentsforever.com/",
      license: "CC BY 4.0",
      fetched: today,
      verifiedInGame: false,
      attribution: "Data from talentsforever.com (https://talentsforever.com)",
      ...(sourceLine ? { note: sourceLine } : {}),
    },
    trees: outTrees,
  };
}

function diff(a, b) {
  const flat = (c) => new Map(c.trees.flatMap((t) => t.talents.map((x) => [x.id, JSON.stringify({ ...x, icon: undefined })])));
  const fa = flat(a);
  const fb = flat(b);
  const out = [];
  for (const [id, v] of fb) {
    if (!fa.has(id)) out.push(`+ ${id}`);
    else if (fa.get(id) !== v) out.push(`~ ${id}`);
  }
  for (const id of fa.keys()) if (!fb.has(id)) out.push(`- ${id}`);
  return out;
}

const data = await load();
const classesRaw = data.talents ?? {};
const today = new Date().toISOString().slice(0, 10);
console.log(`fonte: ${opt("--from") ?? SOURCE_URL} · generato il ${data.generated ?? "?"} · licenza ${data.license ?? "?"}`);

const iconNames = new Set();
for (const raw of Object.values(classesRaw)) for (const tree of raw.trees ?? []) for (const t of tree.talents ?? []) if (t.icon) iconNames.add(t.icon);

if (flag("--icons")) {
  mkdirSync(iconDir, { recursive: true });
  let ok = 0;
  let missing = [];
  for (const name of [...iconNames].sort()) {
    if (await downloadIcon(name)) ok++;
    else missing.push(name);
  }
  console.log(`icone: ${ok} presenti in public/talents/icons, ${missing.length} non trovate${missing.length ? `: ${missing.join(", ")}` : ""}`);
}

const iconOk = (name) => existsSync(join(iconDir, `${name}.jpg`));
mkdirSync(outDir, { recursive: true });
let total = 0;
for (const [name, raw] of Object.entries(classesRaw)) {
  const meta = CLASSES[name];
  if (!meta) {
    console.warn(`salto ${name}: non è una delle nove classi`);
    continue;
  }
  const existing = readExisting(meta.id);
  const converted = convertClass(name, raw, existing, iconOk, today);
  const n = converted.trees.reduce((a, t) => a + t.talents.length, 0);
  total += n;
  const changes = existing ? diff(existing, converted) : [];
  if (flag("--check")) {
    console.log(`${meta.id}: ${n} talenti, build ${converted.gameVersion}${existing ? `, differenze ${changes.length}` : ", file nuovo"}${changes.length ? `\n  ${changes.join("\n  ")}` : ""}`);
    continue;
  }
  writeFileSync(join(outDir, `${meta.id}.json`), `${JSON.stringify(converted, null, 2)}\n`);
  console.log(`${meta.id}: ${n} talenti, build ${converted.gameVersion}, icone ${converted.trees.reduce((a, t) => a + t.talents.filter((x) => x.icon).length, 0)}/${n}${existing ? `, differenze ${changes.length}` : ""}`);
}
console.log(`${total} talenti in tutto`);

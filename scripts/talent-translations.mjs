// Traduzioni dei testi dei talenti in italiano e spagnolo (23/10/2026, Pierluigi: "le abilità sono in inglese e non
// sono tradotte in lingua, andrebbero messe nelle altre due lingue"). Sono traduzioni NOSTRE dall'inglese del client
// (il client di Forever non ha l'italiano; i testi spagnoli ufficiali non li abbiamo): i nomi di talenti e abilità
// restano in inglese. Un file per classe in src/lib/data/talents/i18n/<classe>.json, forma { it: {id: [ranghi]},
// es: {...} }, letto da `localizeTalents` in src/lib/data/talents/index.ts.
//
//   node scripts/talent-translations.mjs <cartella> [--apply]   controlla i file tr-<classe>.json della cartella
//                                                               (id, numero di ranghi, numeri uguali all'inglese) e
//                                                               con --apply li scrive in i18n/
//   node scripts/talent-translations.mjs --check                controlla i file già in i18n/ contro i dati attuali
//                                                               (un talento senza traduzione = avviso, non errore)
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dataDir = join(root, "src", "lib", "data", "talents");
const outDir = join(dataDir, "i18n");
const CLASSES = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const LANGS = ["it", "es"];
const args = process.argv.slice(2);
const apply = args.includes("--apply");
const checkOnly = args.includes("--check");
const srcDir = args.find((a) => !a.startsWith("--"));

const numbers = (s) => (s.match(/\d+(?:\.\d+)?/g) ?? []).join(" ");

/** Confronta una traduzione con i dati: restituisce gli errori (bloccanti) e gli avvisi. */
function verify(classId, tr) {
  const data = JSON.parse(readFileSync(join(dataDir, `${classId}.json`), "utf8"));
  const errors = [];
  const warnings = [];
  for (const lang of LANGS) {
    const map = tr[lang];
    if (!map || typeof map !== "object") {
      errors.push(`${classId}/${lang}: manca`);
      continue;
    }
    for (const tree of data.trees) {
      for (const t of tree.talents) {
        const ranks = map[t.id];
        if (!Array.isArray(ranks)) {
          (checkOnly ? warnings : errors).push(`${classId}/${lang}/${t.id}: traduzione assente`);
          continue;
        }
        if (ranks.length !== t.maxRank) errors.push(`${classId}/${lang}/${t.id}: ${ranks.length} testi per ${t.maxRank} ranghi`);
        ranks.forEach((r, i) => {
          if (typeof r !== "string" || r.trim().length < 5) errors.push(`${classId}/${lang}/${t.id}: rango ${i + 1} vuoto`);
          else if (numbers(r) !== numbers(t.ranks[i] ?? "")) warnings.push(`${classId}/${lang}/${t.id}: numeri diversi al rango ${i + 1} (EN "${numbers(t.ranks[i] ?? "")}" vs "${numbers(r)}")`);
        });
      }
    }
    const known = new Set(data.trees.flatMap((tree) => tree.talents.map((t) => t.id)));
    for (const id of Object.keys(map)) if (!known.has(id)) warnings.push(`${classId}/${lang}/${id}: id che non esiste più nei dati`);
  }
  return { errors, warnings };
}

let failed = false;
for (const classId of CLASSES) {
  const file = checkOnly ? join(outDir, `${classId}.json`) : join(srcDir ?? ".", `tr-${classId}.json`);
  if (!existsSync(file)) {
    console.log(`${classId}: file assente (${file})`);
    if (!checkOnly) failed = true;
    continue;
  }
  let tr;
  try {
    tr = JSON.parse(readFileSync(file, "utf8").replace(/^﻿/, ""));
  } catch (e) {
    console.log(`${classId}: JSON non valido (${e.message})`);
    failed = true;
    continue;
  }
  const { errors, warnings } = verify(classId, tr);
  const counts = LANGS.map((l) => `${l} ${Object.keys(tr[l] ?? {}).length}`).join(", ");
  console.log(`${classId}: ${counts}; errori ${errors.length}, avvisi ${warnings.length}`);
  for (const e of errors) console.log(`  ✖ ${e}`);
  for (const w of warnings.slice(0, 20)) console.log(`  · ${w}`);
  if (warnings.length > 20) console.log(`  · … e altri ${warnings.length - 20}`);
  if (errors.length) failed = true;
  else if (apply) {
    mkdirSync(outDir, { recursive: true });
    const out = {};
    for (const l of LANGS) out[l] = Object.fromEntries(Object.entries(tr[l]).sort(([a], [b]) => a.localeCompare(b)));
    writeFileSync(join(outDir, `${classId}.json`), `${JSON.stringify(out, null, 2)}\n`);
  }
}
if (failed) {
  console.log("Controllo fallito.");
  process.exit(1);
}
console.log(apply ? "Traduzioni scritte in src/lib/data/talents/i18n/." : "Controllo riuscito.");

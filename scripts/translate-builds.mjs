// Traduce nome e guida delle build pubblicate che non hanno ancora la traduzione (o l'hanno rimasta indietro rispetto
// al testo) nelle altre lingue del sito, e la salva nella colonna community_builds.translations (23/10/2026, Pierluigi:
// "tutti i contenuti, anche le guide vanno tradotte nelle tre lingue del sito").
//
// Serve per gli arretrati (le build pubblicate prima della traduzione automatica) e per ritentare quando la traduzione
// dopo la pubblicazione non è riuscita (rete, API, tempo della funzione). Il sito, dopo ogni pubblicazione o modifica,
// fa da solo lo stesso lavoro (src/lib/community/buildTranslate.ts): lo script usa le stesse funzioni (buildTranslation.ts).
//
// Uso (dalla cartella del repo; .env.local con la password del database, come db-migrate.mjs):
//   node scripts/translate-builds.mjs --dry-run            elenca che cosa manca, non scrive nulla
//   node scripts/translate-builds.mjs                      traduce con l'API (serve ANTHROPIC_API_KEY) e salva
//   node scripts/translate-builds.mjs --only <slug>        solo quella build
//   node scripts/translate-builds.mjs --export <file>      scrive in un JSON i testi da tradurre (per tradurli fuori, senza chiave):
//                                                          { "<slug>": { lang, missing, names, guide: { name, summary, … } } }
//   node scripts/translate-builds.mjs --from <file>        salva traduzioni già pronte: { "<slug>": { "<lingua>": { name, summary, … } } }
//                                                          (gli stessi campi dell'originale); --model <nome> per etichettarle
//   --redo <lingue>                                        rifà anche le traduzioni ancora valide in quelle lingue (es. "it,es"),
//                                                          dopo un cambio del prompt; con --export aggiunge la traduzione attuale
//   --env <file>                                           .env.local da usare (di default quello del repo o del checkout principale)
// Le traduzioni si scrivono solo se il testo della build è ancora quello da cui sono state fatte (impronta), e il
// trigger del database le ricontrolla (forma e lunghezze).
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { execSync } from "node:child_process";
import * as nodeModule from "node:module";
import path from "node:path";
import { fileURLToPath } from "node:url";
import pg from "pg";
import Anthropic from "@anthropic-ai/sdk";

// I moduli del sito sono scritti per Next (import senza estensione): come nei test, un hook aggiunge ".ts".
nodeModule.registerHooks({
  resolve(specifier, context, next) {
    if (/^\.\.?\//.test(specifier) && !/\.(?:[cm]?[jt]sx?|json)$/.test(specifier)) {
      try {
        return next(`${specifier}.ts`, context);
      } catch {
        // non è un modulo .ts: si risolve com'è scritto
      }
    }
    return next(specifier, context);
  },
});
const T = await import("../src/lib/community/buildTranslation.ts");

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const args = process.argv.slice(2);
const flag = (name) => args.includes(name);
const opt = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};

// Lingue del sito: le stesse di src/lib/i18n.ts (lette dal file, così non si copiano a mano).
const i18n = readFileSync(path.join(root, "src/lib/i18n.ts"), "utf8");
const LOCALES = JSON.parse(`[${/export const locales = \[([^\]]+)\]/.exec(i18n)[1]}]`);

// .env.local: quello indicato, quello del repo o quello del checkout principale (un worktree ne ha spesso uno con la sola
// FOREVERMETA_OPEN, senza la password del database: si prende il primo che ce l'ha).
function envFile() {
  const candidates = [opt("--env"), path.join(root, ".env.local")];
  try {
    const common = execSync("git rev-parse --path-format=absolute --git-common-dir", { cwd: root, encoding: "utf8" }).trim();
    candidates.push(path.join(path.dirname(common), ".env.local"));
  } catch {}
  const found = candidates.find((f) => f && existsSync(f) && /^SUPABASE_DB_PASSWORD=.+/m.test(readFileSync(f, "utf8")));
  if (!found) throw new Error(".env.local con SUPABASE_DB_PASSWORD non trovato: indicarlo con --env <file>");
  return found;
}
const env = Object.fromEntries(
  readFileSync(envFile(), "utf8")
    .split(/\r?\n/)
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => [l.slice(0, l.indexOf("=")).trim(), l.slice(l.indexOf("=") + 1).trim()]),
);

// Nomi del gioco da non tradurre: talenti e alberi delle nove classi (gli stessi di `officialNames` in buildTranslate.ts).
const CLASSES = ["druid", "hunter", "mage", "paladin", "priest", "rogue", "shaman", "warlock", "warrior"];
const NAMES = [
  ...new Set(
    CLASSES.flatMap((id) => {
      const data = JSON.parse(readFileSync(path.join(root, `src/lib/data/talents/${id}.json`), "utf8"));
      return data.trees.flatMap((t) => [t.name, ...t.talents.map((x) => x.name)]);
    }),
  ),
];

const db = new pg.Client({
  host: env.SUPABASE_DB_HOST || `db.${env.SUPABASE_PROJECT_REF}.supabase.co`,
  port: Number(env.SUPABASE_DB_PORT || 5432),
  user: env.SUPABASE_DB_USER || "postgres",
  password: env.SUPABASE_DB_PASSWORD,
  database: "postgres",
  ssl: { rejectUnauthorized: false },
});
await db.connect();

const only = opt("--only");
const { rows } = await db
  .query(
    `select id, slug, status, guide_lang, name, summary, plan, strengths, weaknesses, notes, translations from public.community_builds
    where status in ('published','hidden') ${only ? "and slug = $1" : ""} order by created_at`,
    only ? [only] : [],
  )
  .catch(async (e) => {
    await db.end();
    if (e?.code === "42703") throw new Error("la colonna community_builds.translations non c'è ancora: lanciare prima la migrazione (node scripts/db-migrate.mjs, blocco BUILD TRADOTTE)");
    throw e;
  });
const buildOf = (r) => ({
  ...r,
  guide_lang: LOCALES.includes(r.guide_lang) ? r.guide_lang : "en",
  translations: r.translations && typeof r.translations === "object" && !Array.isArray(r.translations) ? r.translations : {},
});
// --redo: lingue da rifare anche se la traduzione c'è ed è valida (mai la lingua in cui l'autore ha scritto)
const redo = (opt("--redo") ?? "").split(",").map((s) => s.trim()).filter((l) => LOCALES.includes(l));
const todo = rows
  .map((r) => {
    const b = buildOf(r);
    return { ...b, missing: [...new Set([...T.missingBuildLocales(b, LOCALES), ...redo.filter((l) => l !== b.guide_lang)])] };
  })
  .filter((r) => r.missing.length && r.summary && r.plan);
console.log(`${rows.length} build lette, ${todo.length} con traduzioni da fare (lingue del sito: ${LOCALES.join(", ")})`);
for (const r of todo) console.log(`- ${r.slug} (${r.guide_lang} → ${r.missing.join(", ")})`);

/** Salva una traduzione, solo se la build è ancora quella da cui è stata fatta. */
async function save(build, locale, text, model) {
  const hash = T.buildGuideHash(build);
  await db.query("begin");
  try {
    const cur = await db.query("select guide_lang, name, summary, plan, strengths, weaknesses, notes, translations from public.community_builds where id = $1 for update", [build.id]);
    const row = cur.rows[0];
    if (!row || T.buildGuideHash(row) !== hash) {
      await db.query("rollback");
      console.log(`  ${build.slug} ${locale}: la build è cambiata nel frattempo, traduzione scartata`);
      return false;
    }
    const next = { ...(row.translations ?? {}), [locale]: { hash, at: new Date().toISOString(), model, guide: text } };
    delete next[row.guide_lang];
    await db.query("update public.community_builds set translations = $1::jsonb where id = $2", [JSON.stringify(next), build.id]);
    await db.query("commit");
    return true;
  } catch (e) {
    await db.query("rollback");
    throw e;
  }
}

if (flag("--dry-run")) {
  await db.end();
} else if (opt("--export")) {
  const current = (r) => Object.fromEntries(r.missing.filter((l) => r.translations?.[l]?.guide).map((l) => [l, r.translations[l].guide]));
  const out = Object.fromEntries(
    todo.map((r) => [r.slug, { lang: r.guide_lang, missing: r.missing, names: T.namesIn(T.buildGuideText(r), NAMES), guide: T.buildGuideText(r), ...(redo.length ? { current: current(r) } : {}) }]),
  );
  writeFileSync(opt("--export"), JSON.stringify(out, null, 1));
  console.log(`testi da tradurre scritti in ${opt("--export")}`);
  await db.end();
} else if (opt("--from")) {
  const ready = JSON.parse(readFileSync(opt("--from"), "utf8"));
  let saved = 0;
  for (const r of todo) {
    for (const locale of r.missing) {
      const t = ready[r.slug]?.[locale];
      if (!t) continue;
      const text = T.parseTranslation(T.buildGuideText(r), JSON.stringify(t));
      if (!text) {
        console.log(`  ${r.slug} ${locale}: traduzione scartata (campi diversi dall'originale o testo non valido)`);
        continue;
      }
      if (await save(r, locale, text, opt("--model") ?? "manual")) saved++;
    }
  }
  console.log(`${saved} traduzioni salvate`);
  await db.end();
} else {
  const key = process.env.ANTHROPIC_API_KEY || env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("serve ANTHROPIC_API_KEY (variabile d'ambiente o .env.local), oppure --export/--from");
  const client = new Anthropic({ apiKey: key, maxRetries: 2 });
  let saved = 0;
  for (const r of todo) {
    const names = T.namesIn(T.buildGuideText(r), NAMES);
    for (const locale of r.missing) {
      try {
        const res = await T.translateBuildWith(client, r, locale, names);
        if (!res) {
          console.log(`  ${r.slug} ${locale}: nessuna traduzione valida (rifiuto, testo troncato o controlli non superati)`);
          continue;
        }
        if (await save(r, locale, res.guide, res.model ?? T.TRANSLATION_MODEL)) {
          saved++;
          console.log(`  ${r.slug} ${locale}: salvata`);
        }
      } catch (e) {
        console.log(`  ${r.slug} ${locale}: errore ${e instanceof Error ? e.message : e}`);
      }
    }
  }
  console.log(`${saved} traduzioni salvate`);
  await db.end();
}

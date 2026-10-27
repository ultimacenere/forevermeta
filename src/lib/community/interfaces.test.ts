// Regole delle interfacce condivise (24/10/2026): `npm test`.
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
const m: typeof import("./interfaces") = await import("./interfaces.ts");
const { INTERFACE_LIMITS, INTERFACE_SLUG_RE, addonFree, anyShotPathOk, checkCooldowns, checkInterfaceFields, checkLayout, interfaceIndexable, interfaceTableMissing, layoutElements, newInterfaceSlug, normalizeResolution, normalizeScale, shotPathOk, shotUrl } = m;

const uid = "0f1e2d3c-4b5a-4968-8778-695a4b3c2d1e";
const shot = `${uid}/a1b2c3d4-e5f6-4789-8abc-def012345678.webp`;
// la forma di un layout Edit Mode: due numeri in testa, poi un record per elemento (campione costruito, non del gioco)
const layout = "5 26 0 0 0 4 4 UIParent 0.0 45.0 -1 ##$$%/&('%)#+$ 0 1 0 4 4 UIParent 0.0 90.0 -1 ##$$%/&('%(#+$ 1 0 1 0 2 MultiBarRight -5.0 -77.0 -1 #$$$%/&('%)$+$";
const locales = ["en", "it", "es"];
const good = {
  name: "  Healer   compatto  ",
  layout,
  cooldowns: "",
  shots: [shot],
  classes: ["priest", "druid"],
  roles: ["healer"],
  input: "mouse",
  preset: "modern",
  resolution: "2560 × 1440",
  uiScale: "0,71",
  addons: "",
  descriptionLang: "it",
  description: "Interfaccia per guaritori su schermo 1440p: frame di gruppo al centro sotto il personaggio, barre in basso a tre file, Cooldown Manager sopra la barra principale e meter nativo a destra.",
};

describe("stringa Edit Mode", () => {
  test("riconosce la testa e conta gli elementi", () => {
    const r = checkLayout(layout);
    assert.ok(r.ok);
    if (r.ok) {
      assert.equal(r.formatVersion, 5);
      assert.equal(r.elements, 26);
    }
    assert.equal(layoutElements(layout), 26);
  });
  test("gli a capo incollati diventano spazi, gli spazi interni restano", () => {
    const r = checkLayout(`\n${layout.slice(0, 40)}\r\n${layout.slice(40)}  \n`);
    assert.ok(r.ok);
    if (r.ok) assert.equal(r.layout, `${layout.slice(0, 40)} ${layout.slice(40)}`);
  });
  test("rifiuta ciò che non è un layout", () => {
    assert.deepEqual(checkLayout("ciao"), { ok: false, error: "layoutShort" });
    assert.deepEqual(checkLayout("!WA:2!" + "a".repeat(60)), { ok: false, error: "invalidLayout" });
    assert.deepEqual(checkLayout("5 0 " + "x".repeat(60)), { ok: false, error: "invalidLayout" });
    assert.deepEqual(checkLayout(`5 26 <script>${"x".repeat(60)}`), { ok: false, error: "invalidLayout" });
    assert.deepEqual(checkLayout(`5 26 è${"x".repeat(60)}`), { ok: false, error: "invalidLayout" });
    assert.deepEqual(checkLayout(`5 26 ${"x".repeat(INTERFACE_LIMITS.layout.max)}`), { ok: false, error: "layoutLong" });
  });
});

describe("stringa del Cooldown Manager", () => {
  test("vuota resta vuota, gli spazi spariscono, la forma è versione|Base64", () => {
    assert.deepEqual(checkCooldowns("  "), { ok: true, cooldowns: "" });
    assert.deepEqual(checkCooldowns("1|eJyrVkrLz1eyUkpKLFKqBQAvkwVz \n"), { ok: true, cooldowns: "1|eJyrVkrLz1eyUkpKLFKqBQAvkwVz" });
    assert.deepEqual(checkCooldowns("eJyrVkrLz1eyUkpKLFKqBQAvkwVz"), { ok: false, error: "invalidCooldowns" });
    assert.deepEqual(checkCooldowns("1|abc"), { ok: false, error: "invalidCooldowns" });
  });
});

describe("screenshot", () => {
  test("solo nella cartella dell'autore, con il nome che dà il sito", () => {
    assert.equal(shotPathOk(uid, shot), true);
    assert.equal(shotPathOk(uid, `${uid}/foto.png`), false);
    assert.equal(shotPathOk(uid, `11111111-2222-4333-8444-555555555555/a1b2c3d4-e5f6-4789-8abc-def012345678.webp`), false);
    assert.equal(shotPathOk("non-un-id", shot), false);
    assert.equal(anyShotPathOk(shot), true);
    assert.equal(anyShotPathOk("../x.webp"), false);
    assert.equal(shotUrl("https://x.supabase.co", shot), `https://x.supabase.co/storage/v1/object/public/interface-shots/${shot}`);
  });
});

describe("risoluzione e scala", () => {
  test("risoluzione normalizzata o rifiutata", () => {
    assert.equal(normalizeResolution("2560 × 1440"), "2560x1440");
    assert.equal(normalizeResolution("3440X1440"), "3440x1440");
    assert.equal(normalizeResolution(""), "");
    assert.equal(normalizeResolution("4k"), null);
    assert.equal(normalizeResolution("100x100"), null);
  });
  test("scala con virgola o punto, nei limiti del gioco", () => {
    assert.equal(normalizeScale("0,71"), 0.71);
    assert.equal(normalizeScale("1"), 1);
    assert.equal(normalizeScale(""), null);
    assert.equal(normalizeScale("2"), false);
    assert.equal(normalizeScale("0.1"), false);
    assert.equal(normalizeScale("abc"), false);
  });
});

describe("campi del modulo", () => {
  test("valori puliti", () => {
    const r = checkInterfaceFields(good, uid, locales);
    assert.ok(r.ok);
    if (!r.ok) return;
    assert.equal(r.fields.name, "Healer compatto");
    assert.deepEqual(r.fields.classes, ["druid", "priest"]);
    assert.deepEqual(r.fields.roles, ["healer"]);
    assert.equal(r.fields.resolution, "2560x1440");
    assert.equal(r.fields.uiScale, 0.71);
    assert.equal(r.elements, 26);
  });
  test("serve almeno uno screenshot, al massimo quattro, tutti dell'autore", () => {
    assert.deepEqual(checkInterfaceFields({ ...good, shots: [] }, uid, locales), { ok: false, error: "noShots", field: "shots" });
    const five = Array.from({ length: 5 }, (_, i) => `${uid}/a1b2c3d4-e5f6-4789-8abc-def01234567${i}.webp`);
    assert.deepEqual(checkInterfaceFields({ ...good, shots: five }, uid, locales), { ok: false, error: "tooManyShots", field: "shots" });
    assert.deepEqual(checkInterfaceFields({ ...good, shots: ["https://example.org/x.png"] }, uid, locales), { ok: false, error: "invalidShot", field: "shots" });
    const r = checkInterfaceFields({ ...good, shots: [shot, shot] }, uid, locales);
    assert.ok(r.ok && r.fields.shots.length === 1);
  });
  test("valori fuori elenco, descrizione e lingua", () => {
    assert.deepEqual(checkInterfaceFields({ ...good, name: "ab" }, uid, locales), { ok: false, error: "invalidName", field: "name" });
    assert.deepEqual(checkInterfaceFields({ ...good, input: "joystick" }, uid, locales), { ok: false, error: "invalidInput", field: "input" });
    assert.deepEqual(checkInterfaceFields({ ...good, preset: "retail" }, uid, locales), { ok: false, error: "invalidPreset", field: "preset" });
    assert.deepEqual(checkInterfaceFields({ ...good, resolution: "boh" }, uid, locales), { ok: false, error: "invalidResolution", field: "resolution" });
    assert.deepEqual(checkInterfaceFields({ ...good, uiScale: "3" }, uid, locales), { ok: false, error: "invalidScale", field: "uiScale" });
    assert.deepEqual(checkInterfaceFields({ ...good, description: "corta" }, uid, locales), { ok: false, error: "descriptionShort", field: "description" });
    assert.deepEqual(checkInterfaceFields({ ...good, descriptionLang: "fr" }, uid, locales), { ok: false, error: "invalidLang", field: "descriptionLang" });
    assert.deepEqual(checkInterfaceFields({ ...good, addons: "x".repeat(401) }, uid, locales), { ok: false, error: "addonsLong", field: "addons" });
    assert.deepEqual(checkInterfaceFields({ ...good, layout: "non è un layout del gioco, ma un testo qualsiasi lungo abbastanza" }, uid, locales), { ok: false, error: "invalidLayout", field: "layout" });
  });
});

describe("indicizzazione, addon, slug, tabella", () => {
  test("indicizzabile solo pubblicata e con abbastanza parole", () => {
    assert.equal(interfaceIndexable({ status: "published", description: "parola ".repeat(70) }), true);
    assert.equal(interfaceIndexable({ status: "hidden", description: "parola ".repeat(70) }), false);
    assert.equal(interfaceIndexable({ status: "published", description: "poche parole" }), false);
  });
  test("senza addon quando l'elenco è vuoto", () => {
    assert.equal(addonFree({ addons: "  " }), true);
    assert.equal(addonFree({ addons: "Bartender4" }), false);
  });
  test("slug dal nome, senza accenti, con la coda casuale", () => {
    assert.equal(newInterfaceSlug("Healer compatto 1440p", () => 0), "healer-compatto-1440p-aaaa");
    assert.match(newInterfaceSlug("Ñ", () => 0.5), /^ui-n-ssss$/);
    assert.match(newInterfaceSlug("Interfaccia pulita", () => 0), INTERFACE_SLUG_RE);
  });
  test("riconosce la tabella mancante", () => {
    assert.equal(interfaceTableMissing({ code: "42P01", message: "" }), true);
    assert.equal(interfaceTableMissing({ message: "Could not find the table 'public.community_interfaces'" }), true);
    assert.equal(interfaceTableMissing({ code: "23514", message: "check" }), false);
  });
});

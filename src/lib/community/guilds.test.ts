// Regole della bacheca delle gilde (23/10/2026): `npm test`.
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
const g: typeof import("./guilds") = await import("./guilds.ts");
const { GUILD_LIMITS, GUILD_SLUG_RE, GUILD_STALE_DAYS, checkGuildFields, guildIndexable, guildTableMissing, guildWords, isStale, newGuildSlug, normalizeDiscordInvite, normalizeWebsite, pickMany, staleCutoff } = g;

const locales = ["en", "it", "es"];
const good = {
  name: "  Cenere   Eterna ",
  region: "eu",
  realm: "Pyrewood Village",
  realmType: "pvp",
  faction: "horde",
  languages: ["it", "en"],
  focus: ["leveling", "raids"],
  roles: ["healer"],
  classes: ["priest", "druid"],
  raidDays: ["wed", "sun"],
  schedule: "21:00-23:30 ora italiana",
  size: "forming",
  descriptionLang: "it",
  description: "Gilda italiana Orda in formazione per il lancio del 4 novembre: livelliamo insieme in gruppo fisso, spedizioni ogni sera e incursioni dal 9 dicembre, due sere a settimana. Cerchiamo guaritori e giocatori con voglia di imparare.",
  discordUrl: "discord.gg/abc123",
  websiteUrl: "",
  contact: "",
};

describe("campi del modulo", () => {
  test("testi puliti, elenchi nell'ordine ammesso, invito Discord canonico", () => {
    const r = checkGuildFields(good, locales);
    assert.ok(r.ok);
    if (!r.ok) return;
    assert.equal(r.fields.name, "Cenere Eterna");
    assert.deepEqual(r.fields.languages, ["en", "it"]);
    assert.deepEqual(r.fields.focus, ["leveling", "raids"]);
    assert.deepEqual(r.fields.raidDays, ["wed", "sun"]);
    assert.equal(r.fields.discordUrl, "https://discord.gg/abc123");
    assert.equal(r.fields.websiteUrl, "");
    assert.equal(r.fields.descriptionLang, "it");
  });
  test("il nome ha il limite del gioco (24 caratteri)", () => {
    const r = checkGuildFields({ ...good, name: "x".repeat(40) }, locales);
    assert.ok(r.ok);
    if (r.ok) assert.equal(r.fields.name.length, GUILD_LIMITS.name.max);
    const short = checkGuildFields({ ...good, name: " a " }, locales);
    assert.deepEqual(short, { ok: false, error: "invalidName", field: "name" });
  });
  test("serve almeno una lingua e un obiettivo, con i tetti", () => {
    assert.deepEqual(checkGuildFields({ ...good, languages: [] }, locales), { ok: false, error: "noLanguage", field: "languages" });
    assert.deepEqual(checkGuildFields({ ...good, languages: ["it", "en", "es", "de"] }, locales), { ok: false, error: "tooManyLanguages", field: "languages" });
    assert.deepEqual(checkGuildFields({ ...good, focus: "pvp" }, locales).ok, true);
    assert.deepEqual(checkGuildFields({ ...good, focus: ["ignoto"] }, locales), { ok: false, error: "noFocus", field: "focus" });
  });
  test("valori fuori elenco e lingua della descrizione", () => {
    assert.deepEqual(checkGuildFields({ ...good, region: "mars" }, locales), { ok: false, error: "invalidRegion", field: "region" });
    assert.deepEqual(checkGuildFields({ ...good, faction: "neutral" }, locales), { ok: false, error: "invalidFaction", field: "faction" });
    assert.deepEqual(checkGuildFields({ ...good, realmType: "hc" }, locales), { ok: false, error: "invalidRealmType", field: "realmType" });
    assert.deepEqual(checkGuildFields({ ...good, size: "huge" }, locales), { ok: false, error: "invalidSize", field: "size" });
    assert.deepEqual(checkGuildFields({ ...good, descriptionLang: "fr" }, locales), { ok: false, error: "invalidLang", field: "descriptionLang" });
  });
  test("descrizione corta o lunga", () => {
    assert.deepEqual(checkGuildFields({ ...good, description: "Gilda italiana." }, locales), { ok: false, error: "descriptionShort", field: "description" });
    assert.deepEqual(checkGuildFields({ ...good, description: "parola ".repeat(1000) }, locales), { ok: false, error: "descriptionLong", field: "description" });
  });
  test("almeno un contatto, e gli indirizzi devono essere validi", () => {
    assert.deepEqual(checkGuildFields({ ...good, discordUrl: "" }, locales), { ok: false, error: "noContact", field: "discordUrl" });
    assert.equal(checkGuildFields({ ...good, discordUrl: "", contact: "sussurra a Pyra in gioco" }, locales).ok, true);
    assert.equal(checkGuildFields({ ...good, discordUrl: "", websiteUrl: "https://cenere.example.org/gilda" }, locales).ok, true);
    assert.deepEqual(checkGuildFields({ ...good, discordUrl: "https://example.com/not-discord" }, locales), { ok: false, error: "invalidDiscord", field: "discordUrl" });
    assert.deepEqual(checkGuildFields({ ...good, websiteUrl: "ftp://x" }, locales), { ok: false, error: "invalidWebsite", field: "websiteUrl" });
    assert.deepEqual(checkGuildFields({ ...good, contact: "x".repeat(81) }, locales), { ok: false, error: "contactLong", field: "contact" });
  });
});

describe("inviti e siti", () => {
  test("le forme comuni dell'invito diventano discord.gg/<codice>", () => {
    for (const s of ["https://discord.gg/abc-123", "http://discord.com/invite/abc-123", "discordapp.com/invite/abc-123/", "https://discord.gg/abc-123?event=1"]) assert.equal(normalizeDiscordInvite(s), "https://discord.gg/abc-123", s);
    assert.equal(normalizeDiscordInvite("  "), "");
    assert.equal(normalizeDiscordInvite("discord.gg/"), null);
    assert.equal(normalizeDiscordInvite("https://discord.gg/abc 123"), null);
  });
  test("il sito vuole un dominio con il punto e niente spazi", () => {
    assert.equal(normalizeWebsite("https://example.org/x"), "https://example.org/x");
    assert.equal(normalizeWebsite(""), "");
    assert.equal(normalizeWebsite("https://localhost/x"), null);
    assert.equal(normalizeWebsite("javascript:alert(1)"), null);
    assert.equal(normalizeWebsite(`https://example.org/${"a".repeat(300)}`), null);
  });
});

describe("elenchi, parole, scadenza, slug", () => {
  test("pickMany accetta stringa o array e toglie i doppioni", () => {
    assert.deepEqual(pickMany("dps", ["tank", "healer", "dps"]), ["dps"]);
    assert.deepEqual(pickMany(["dps", "tank", "dps", "x"], ["tank", "healer", "dps"]), ["tank", "dps"]);
    assert.deepEqual(pickMany(undefined, ["tank"]), []);
  });
  test("le parole contano lettere e cifre, non i segni", () => {
    assert.equal(guildWords("Gilda Orda - 2 sere / settimana, raid il mercoledì!"), 8);
  });
  test("scadenza dopo 45 giorni e data di taglio stabile nel giorno", () => {
    const now = Date.parse("2026-11-20T12:00:00Z");
    assert.equal(isStale("2026-11-19T00:00:00Z", now), false);
    assert.equal(isStale(new Date(now - (GUILD_STALE_DAYS + 1) * 86_400_000).toISOString(), now), true);
    assert.equal(isStale("non una data", now), true);
    assert.equal(staleCutoff(now), "2026-10-06T00:00:00.000Z");
    assert.equal(staleCutoff(now + 3600_000), staleCutoff(now));
  });
  test("indicizzabile solo se pubblicato, lungo abbastanza e non scaduto", () => {
    const now = Date.parse("2026-11-20T12:00:00Z");
    const text = "parola ".repeat(70);
    assert.equal(guildIndexable({ status: "published", description: text, refreshed_at: "2026-11-19T00:00:00Z" }, now), true);
    assert.equal(guildIndexable({ status: "hidden", description: text, refreshed_at: "2026-11-19T00:00:00Z" }, now), false);
    assert.equal(guildIndexable({ status: "published", description: "poche parole", refreshed_at: "2026-11-19T00:00:00Z" }, now), false);
    assert.equal(guildIndexable({ status: "published", description: text, refreshed_at: "2026-08-01T00:00:00Z" }, now), false);
  });
  test("slug da nome e reame, senza accenti, con la coda casuale", () => {
    const slug = newGuildSlug("Cenere Eterna", "Pyrewood Village", () => 0);
    assert.equal(slug, "cenere-eterna-pyrewood-village-aaaa");
    assert.match(slug, GUILD_SLUG_RE);
    assert.match(newGuildSlug("Ñu", "È", () => 0.5), /^nu-e-ssss$/);
    assert.match(newGuildSlug("!!", "??", () => 0), /^guild-aaaa$/);
  });
  test("riconosce la tabella mancante", () => {
    assert.equal(guildTableMissing({ code: "42P01", message: "" }), true);
    assert.equal(guildTableMissing({ code: "PGRST205", message: "" }), true);
    assert.equal(guildTableMissing({ message: "Could not find the table 'public.community_guilds'" }), true);
    assert.equal(guildTableMissing({ code: "23514", message: "check" }), false);
    assert.equal(guildTableMissing(null), false);
  });
});

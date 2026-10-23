import type { Locale } from "../../i18n";
import type { ClassId, ClassTalents } from "../../builder/types";
import druid from "./druid.json";
import hunter from "./hunter.json";
import mage from "./mage.json";
import paladin from "./paladin.json";
import priest from "./priest.json";
import rogue from "./rogue.json";
import shaman from "./shaman.json";
import warlock from "./warlock.json";
import warrior from "./warrior.json";
import druidI18n from "./i18n/druid.json";
import hunterI18n from "./i18n/hunter.json";
import mageI18n from "./i18n/mage.json";
import paladinI18n from "./i18n/paladin.json";
import priestI18n from "./i18n/priest.json";
import rogueI18n from "./i18n/rogue.json";
import shamanI18n from "./i18n/shaman.json";
import warlockI18n from "./i18n/warlock.json";
import warriorI18n from "./i18n/warrior.json";

/**
 * Gli alberi dei talenti per classe, un file JSON per classe scritto da `node scripts/import-talents.mjs` (non si
 * modificano a mano): la fonte, la licenza e la build del gioco stanno dentro (`source`, `gameVersion`) e la pagina
 * li mostra in fondo. I testi sono inglesi come nel gioco (il client di Forever non ha l'italiano); le traduzioni
 * italiane e spagnole, nostre, stanno in `i18n/<classe>.json` (`scripts/talent-translations.mjs`) e `localizeTalents`
 * le mette al posto dei testi inglesi per le pagine in quelle lingue. Le regole stanno in `src/lib/builder/engine.ts`,
 * i controlli di coerenza dei dati in `talents.test.ts`.
 */
const registry: Record<ClassId, ClassTalents> = {
  druid: druid as ClassTalents,
  hunter: hunter as ClassTalents,
  mage: mage as ClassTalents,
  paladin: paladin as ClassTalents,
  priest: priest as ClassTalents,
  rogue: rogue as ClassTalents,
  shaman: shaman as ClassTalents,
  warlock: warlock as ClassTalents,
  warrior: warrior as ClassTalents,
};

type Translations = Partial<Record<Locale, Record<string, string[]>>>;

const translations: Record<ClassId, Translations> = {
  druid: druidI18n as Translations,
  hunter: hunterI18n as Translations,
  mage: mageI18n as Translations,
  paladin: paladinI18n as Translations,
  priest: priestI18n as Translations,
  rogue: rogueI18n as Translations,
  shaman: shamanI18n as Translations,
  warlock: warlockI18n as Translations,
  warrior: warriorI18n as Translations,
};

const localized = new Map<string, ClassTalents>();

export function talentsOf(classId: ClassId): ClassTalents | null {
  return registry[classId] ?? null;
}

/**
 * I dati di una classe con i testi dei ranghi nella lingua della pagina (inglese: gli stessi dati). Un talento senza
 * traduzione tiene il testo inglese. L'oggetto per lingua è uno solo e stabile, così l'indice del motore (per oggetto)
 * resta valido.
 */
export function localizeTalents(data: ClassTalents | null, locale: Locale): ClassTalents | null {
  if (!data || locale === "en") return data;
  const key = `${data.classId}:${locale}`;
  const cached = localized.get(key);
  if (cached) return cached;
  const map = translations[data.classId]?.[locale] ?? {};
  const out: ClassTalents = {
    ...data,
    trees: data.trees.map((tree) => ({
      ...tree,
      talents: tree.talents.map((t) => {
        const ranks = map[t.id];
        return Array.isArray(ranks) && ranks.length === t.maxRank ? { ...t, ranks } : t;
      }),
    })) as ClassTalents["trees"],
  };
  localized.set(key, out);
  return out;
}

export const allTalents: ClassTalents[] = Object.values(registry);

/** Cartella delle icone dei talenti (file scaricati dal CDN di Blizzard da `import-talents.mjs --icons`). */
export const TALENT_ICON_BASE = "/talents/icons/";

export function talentIconUrl(icon: string): string {
  return `${TALENT_ICON_BASE}${icon}.jpg`;
}

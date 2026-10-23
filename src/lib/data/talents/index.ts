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

/**
 * Gli alberi dei talenti per classe, un file JSON per classe scritto da `node scripts/import-talents.mjs` (non si
 * modificano a mano): la fonte, la licenza e la build del gioco stanno dentro (`source`, `gameVersion`) e la pagina
 * li mostra in fondo. I testi sono inglesi come nel gioco (il client di Forever non ha l'italiano). Le regole stanno
 * in `src/lib/builder/engine.ts`, i controlli di coerenza dei dati in `talents.test.ts`.
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

export function talentsOf(classId: ClassId): ClassTalents | null {
  return registry[classId] ?? null;
}

export const allTalents: ClassTalents[] = Object.values(registry);

/** Cartella delle icone dei talenti (file scaricati dal CDN di Blizzard da `import-talents.mjs --icons`). */
export const TALENT_ICON_BASE = "/talents/icons/";

export function talentIconUrl(icon: string): string {
  return `${TALENT_ICON_BASE}${icon}.jpg`;
}

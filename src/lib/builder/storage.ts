/**
 * Salvataggio nel browser delle build del builder: una per classe, come codice condivisibile (`code.ts`), sotto una
 * sola chiave di localStorage. Funzioni pure sul testo salvato, così si provano senza browser; il componente le
 * chiama dentro try/catch (localStorage può non esserci o essere pieno).
 */
import type { ClassId } from "./types";

export const BUILDER_STORAGE_KEY = "forevermeta.builder.v1";

export type StoredBuilds = Partial<Record<ClassId, string>>;

export function parseStored(raw: string | null): StoredBuilds {
  if (!raw) return {};
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    const out: StoredBuilds = {};
    for (const [k, v] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof v === "string" && /^v1\./.test(v)) out[k as ClassId] = v;
    }
    return out;
  } catch {
    return {};
  }
}

export function withStored(raw: string | null, classId: ClassId, code: string | null): string {
  const all = parseStored(raw);
  if (code) all[classId] = code;
  else delete all[classId];
  return JSON.stringify(all);
}

export function readStored(classId: ClassId): string | null {
  try {
    return parseStored(window.localStorage.getItem(BUILDER_STORAGE_KEY))[classId] ?? null;
  } catch {
    return null;
  }
}

export function writeStored(classId: ClassId, code: string | null): void {
  try {
    const raw = window.localStorage.getItem(BUILDER_STORAGE_KEY);
    window.localStorage.setItem(BUILDER_STORAGE_KEY, withStored(raw, classId, code));
  } catch {
    // niente localStorage: la build resta nel link
  }
}

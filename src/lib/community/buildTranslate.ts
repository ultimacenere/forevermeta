import Anthropic from "@anthropic-ai/sdk";
import { after } from "next/server";
import { revalidatePath } from "next/cache";
import { locales, type Locale } from "@/lib/i18n";
import type { Db } from "@/lib/supabase/public";
import { allTalents } from "@/lib/data/talents";
import { buildPath } from "./builds";
import { buildGuideHash, buildGuideText, missingBuildLocales, namesIn, translateBuildWith, type BuildTranslations, type TranslatableBuild } from "./buildTranslation";

/**
 * Dopo la pubblicazione o la modifica di una build, nome e guida si traducono nelle altre lingue del sito (Pierluigi,
 * 23/10/2026: "tutti i contenuti, anche le guide vanno tradotte nelle tre lingue del sito"). Il lavoro vero sta in
 * `buildTranslation.ts`; qui c'è il giro del sito, lo stesso dei mazzi di OriginsMeta (`translate.ts`):
 *
 * - parte dopo la risposta al browser (`after()`, pagine di scrittura con `maxDuration = 300`): chi pubblica non
 *   aspetta il modello;
 * - scrive con la sessione del proprietario (policy di community_builds), la stessa della Server Action; il trigger
 *   `guard_build_translations` ricontrolla forma e lunghezze;
 * - traduce solo le lingue che mancano o che sono rimaste indietro rispetto al testo (impronta `hash`);
 * - prima di scrivere rilegge la build: se nel frattempo l'autore l'ha cambiata la traduzione è vecchia e si lascia
 *   perdere (ci pensa il giro partito con la modifica); se non è più online non si scrive;
 * - nessuna eccezione verso chi pubblica: senza traduzione la pagina mostra l'originale con la nota ed è noindex in
 *   quella lingua. Gli arretrati e i nuovi tentativi: `node scripts/translate-builds.mjs`.
 *
 * INTERRUTTORE: ANTHROPIC_API_KEY (Vercel → Settings → Environment Variables, tipo Secret; solo server). Senza, non
 * parte nulla e le build restano nella lingua dell'autore.
 */

export function translationEnabled(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY);
}

/**
 * Nomi del gioco che il modello non deve tradurre: i talenti delle nove classi e i nomi dei tre alberi, in inglese come
 * li scrive il builder in ogni lingua. I nomi di abilità e incantesimi non talento non li abbiamo in elenco: li copre la
 * regola generale del prompt.
 */
export const officialNames: string[] = [...new Set(allTalents.flatMap((c) => c.trees.flatMap((t) => [t.name, ...t.talents.map((x) => x.name)])))];

type Row = TranslatableBuild & { translations: BuildTranslations | null; status: string; slug: string };

async function readRow(supabase: Db, buildId: string): Promise<Row | null> {
  const { data, error } = await supabase.from("community_builds").select("guide_lang, name, summary, plan, strengths, weaknesses, notes, translations, status, slug").eq("id", buildId).maybeSingle();
  if (error || !data) return null;
  const raw = data as unknown as Omit<Row, "translations"> & { translations: unknown };
  const translations = raw.translations && typeof raw.translations === "object" && !Array.isArray(raw.translations) ? (raw.translations as BuildTranslations) : null;
  return { ...raw, translations };
}

/** Traduce nome e guida della build nelle lingue che mancano e salva il risultato. Restituisce le lingue scritte. */
export async function translateBuild(supabase: Db, buildId: string): Promise<Locale[]> {
  const row = await readRow(supabase, buildId);
  if (!row || row.status !== "published" || !row.summary || !row.plan) return [];
  const targets = missingBuildLocales(row, locales);
  if (!targets.length) return [];

  const hash = buildGuideHash(row);
  const names = namesIn(buildGuideText(row), officialNames);
  const client = new Anthropic({ maxRetries: 1 });
  const results = await Promise.all(
    targets.map((to) =>
      translateBuildWith(client, row, to, names).catch((e: unknown) => {
        console.error(`[builds] traduzione ${row.guide_lang}→${to} non riuscita:`, e instanceof Error ? e.message : e);
        return null;
      }),
    ),
  );

  // Rilettura: se la build è cambiata (o non è più online) mentre traducevamo, queste traduzioni non servono.
  const fresh = await readRow(supabase, buildId);
  if (!fresh || fresh.status !== "published" || buildGuideHash(fresh) !== hash) return [];
  const next: BuildTranslations = { ...(fresh.translations ?? {}) };
  delete next[fresh.guide_lang];
  const written: Locale[] = [];
  targets.forEach((to, i) => {
    const r = results[i];
    if (!r) return;
    next[to] = { hash, at: new Date().toISOString(), model: r.model, guide: r.guide };
    written.push(to);
  });
  if (!written.length) return [];
  const { error } = await supabase.from("community_builds").update({ translations: next as unknown as Record<string, unknown> }).eq("id", buildId);
  if (error) {
    console.error("[builds] salvataggio delle traduzioni non riuscito:", error.message);
    return [];
  }
  // la scheda esiste ora anche in queste lingue: pagina, elenco e sitemap si rigenerano
  for (const l of locales) {
    for (const p of [`/${l}${buildPath(fresh.slug)}`, `/${l}/builds`, `/${l}/sitemap-builds.xml`]) {
      try {
        revalidatePath(p);
      } catch {
        // fuori dalla richiesta la pagina si aggiorna comunque da sola (ISR, al massimo un minuto)
      }
    }
  }
  return written;
}

/** Da chiamare dopo la pubblicazione o la modifica: traduce dopo la risposta al browser. Senza chiave non fa nulla. */
export function translateBuildLater(supabase: Db, buildId: string): void {
  if (!translationEnabled()) return;
  const job = async () => {
    try {
      await translateBuild(supabase, buildId);
    } catch (e) {
      console.error("[builds] traduzione della build non riuscita:", e instanceof Error ? e.message : e);
    }
  };
  try {
    after(job);
  } catch {
    void job();
  }
}

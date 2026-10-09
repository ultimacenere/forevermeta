/**
 * Configurazione pubblica di Supabase (progetto "forevermeta", jncrmiazefxzdxywsdga, regione eu-west-1).
 *
 * URL e chiave "publishable" (anon) sono fatti per stare nel bundle del browser: l'accesso ai dati è
 * governato dalle policy RLS in supabase/schema.sql, non da questa chiave. Le variabili d'ambiente
 * NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY (vedi .env.example) hanno la precedenza.
 * NEXT_PUBLIC_COMMUNITY=off spegne account, pubblicazione e voti (il resto del sito resta statico).
 *
 * ForeverMeta (09/10/2026): l'URL di default è quello del progetto di ForeverMeta, lo stesso che sta in
 * `profile_media_url` di supabase/schema.sql (showcase.test.ts li confronta). La chiave non ha default: senza
 * NEXT_PUBLIC_SUPABASE_ANON_KEY la community resta spenta. Mai rimettere URL o chiave del progetto di OriginsMeta,
 * da cui questo motore è stato copiato.
 */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jncrmiazefxzdxywsdga.supabase.co";
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabaseEnabled = process.env.NEXT_PUBLIC_COMMUNITY !== "off" && supabaseUrl.length > 0 && supabaseKey.length > 0;

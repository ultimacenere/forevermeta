/**
 * Configurazione pubblica di Supabase.
 *
 * URL e chiave "publishable" (anon) sono fatti per stare nel bundle del browser: l'accesso ai dati è
 * governato dalle policy RLS in supabase/schema.sql, non da questa chiave. Si leggono da
 * NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY (vedi .env.example).
 * NEXT_PUBLIC_COMMUNITY=off spegne account, pubblicazione e voti (il resto del sito resta statico).
 *
 * ForeverMeta (08/10/2026): niente valori di default. Il motore arriva da OriginsMeta, che qui aveva
 * l'URL e la chiave del suo database di produzione: senza variabili la community resta spenta, così
 * questa copia non legge né scrive mai nel database di OriginsMeta. Quando esiste il progetto Supabase
 * di ForeverMeta, URL e chiave vanno nelle variabili d'ambiente (.env.local e Vercel).
 */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";
export const supabaseEnabled = process.env.NEXT_PUBLIC_COMMUNITY !== "off" && supabaseUrl.length > 0 && supabaseKey.length > 0;

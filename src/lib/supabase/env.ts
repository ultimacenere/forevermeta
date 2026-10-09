/**
 * Configurazione pubblica di Supabase (progetto "forevermeta", jncrmiazefxzdxywsdga, regione eu-west-1).
 *
 * URL e chiave "publishable" (anon) sono fatti per stare nel bundle del browser: l'accesso ai dati è
 * governato dalle policy RLS in supabase/schema.sql, non da questa chiave. Le variabili d'ambiente
 * NEXT_PUBLIC_SUPABASE_URL / NEXT_PUBLIC_SUPABASE_ANON_KEY (vedi .env.example) hanno la precedenza
 * sui valori di default, così si può puntare a un altro progetto senza toccare il codice.
 * NEXT_PUBLIC_COMMUNITY=off spegne account, pubblicazione e voti (il resto del sito resta statico).
 *
 * ForeverMeta (09/10/2026): i default sono quelli del progetto di ForeverMeta, come OriginsMeta fa con il suo. L'URL è
 * lo stesso di `profile_media_url` in supabase/schema.sql (showcase.test.ts li confronta). Mai rimettere URL o chiave
 * del progetto di OriginsMeta, da cui questo motore è stato copiato; mai qui la chiave segreta.
 */
export const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "https://jncrmiazefxzdxywsdga.supabase.co";
export const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "sb_publishable_SmGz-sVA3-fTZi6M176pxA_Mr74sslD";
export const supabaseEnabled = process.env.NEXT_PUBLIC_COMMUNITY !== "off" && supabaseUrl.length > 0 && supabaseKey.length > 0;

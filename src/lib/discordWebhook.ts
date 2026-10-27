/**
 * Invio a un webhook Discord, solo lato server (nessuna dipendenza: solo fetch). Portato dal motore di OriginsMeta
 * (`src/lib/discordWebhook.ts`, 22/09/2026) il 23/10/2026 per gli annunci della bacheca delle gilde; lo useranno anche
 * le build pubblicate quando ci sarà il server Discord di ForeverMeta.
 *
 * L'URL di un webhook è un segreto (chi lo conosce scrive nel canale): si legge da una variabile d'ambiente senza
 * prefisso NEXT_PUBLIC_, impostata su Vercel, e non va mai nel codice né nel repository.
 */

/** Campo di un embed. Limiti di Discord: nome 256 caratteri, valore 1024. */
export type DiscordEmbedField = { name: string; value: string; inline?: boolean };

export type DiscordEmbed = {
  title?: string;
  /** link del titolo */
  url?: string;
  /** fino a 4096 caratteri */
  description?: string;
  /** immagine grande sotto il testo (URL assoluto) */
  image?: { url: string };
  /** colore della barra laterale, come intero (0xeab54e = oro antico) */
  color?: number;
  fields?: DiscordEmbedField[];
  /** data ISO 8601: Discord la mostra nell'ora locale di chi legge */
  timestamp?: string;
  footer?: { text: string };
};

export type DiscordWebhookPayload = {
  content?: string;
  username?: string;
  /** immagine del mittente; senza, vale DISCORD_AVATAR_URL */
  avatar_url?: string;
  embeds?: DiscordEmbed[];
};

/**
 * Nome e immagine con cui firma ogni messaggio mandato dal sito. Senza, Discord usa quelli dati al webhook quando è
 * stato creato: il messaggio li sovrascrive, così non serve rinominare i webhook a mano.
 */
export const DISCORD_USERNAME = "ForeverMeta";
export const DISCORD_AVATAR_URL = "https://forevermeta.me/media/og-forever.jpg";

/**
 * Legge l'URL del webhook dalla variabile indicata e lo accetta solo se è davvero un webhook Discord
 * (https://discord.com/api/webhooks/<id>/<token>, anche discordapp.com, ptb e canary). Un valore sbagliato
 * (per esempio il link del canale incollato al posto del webhook) vale come variabile assente.
 */
export function discordWebhookUrl(envName: string): string | null {
  const raw = process.env[envName]?.trim();
  if (!raw) return null;
  try {
    const u = new URL(raw);
    const hostOk = /^(?:(?:ptb|canary)\.)?discord(?:app)?\.com$/i.test(u.hostname);
    if (u.protocol !== "https:" || !hostOk || !/^\/api\/webhooks\/\d+\/[\w-]+\/?$/.test(u.pathname)) {
      console.error(`[discord] ${envName} non sembra l'URL di un webhook Discord: la variabile viene ignorata`);
      return null;
    }
    return u.toString();
  } catch {
    console.error(`[discord] ${envName} non è un URL valido: la variabile viene ignorata`);
    return null;
  }
}

/**
 * Rende "testo semplice" una stringa scritta da un utente prima di metterla in un messaggio Discord: la formattazione
 * Markdown di Discord viene annullata con una barra rovesciata davanti a ogni simbolo, e le menzioni (@everyone,
 * @here, <@utente>, <@&ruolo>, <#canale>) vengono spezzate. È una seconda linea di difesa: la prima è
 * `allowed_mentions: { parse: [] }` in `sendDiscordWebhook`.
 */
export function escapeDiscord(text: string): string {
  return text.replace(/[\\*_~`|>#[\]()<:-]/g, "\\$&").replace(/@/g, "@\u200b");
}

/**
 * Manda il messaggio e dice se Discord l'ha accettato. Non lancia mai eccezioni: rete giù, timeout o risposta d'errore
 * diventano `{ ok: false }` (con il codice HTTP quando c'è), e il dettaglio finisce in console.error.
 */
export async function sendDiscordWebhook(url: string, payload: DiscordWebhookPayload, { timeoutMs = 5000 }: { timeoutMs?: number } = {}): Promise<{ ok: boolean; status?: number }> {
  // nessuna menzione può partire, qualunque cosa contenga il testo
  const body = JSON.stringify({ username: DISCORD_USERNAME, avatar_url: DISCORD_AVATAR_URL, ...payload, allowed_mentions: { parse: [] } });
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(timeoutMs),
    });
    if (!res.ok) console.error("[discord] il webhook ha risposto", res.status);
    return { ok: res.ok, status: res.status };
  } catch (e) {
    console.error("[discord] invio non riuscito:", e instanceof Error ? e.message : e);
    return { ok: false };
  }
}

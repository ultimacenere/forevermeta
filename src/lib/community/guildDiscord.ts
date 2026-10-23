import { after } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database";
import { supabaseEnabled, supabaseKey, supabaseUrl } from "@/lib/supabase/env";
import { siteUrl } from "@/lib/i18n";
import { discordWebhookUrl, escapeDiscord, sendDiscordWebhook, type DiscordWebhookPayload } from "@/lib/discordWebhook";
import { guildLabels } from "@/lib/guildLabels";
import { guildPath, type CommunityGuild } from "./guilds";

/**
 * Ogni annuncio di gilda pubblicato sul sito va in diretta nel canale delle gilde del Discord di ForeverMeta (il vuoto
 * numero tre del rapporto del 27/09/2026: nessun sito annuncia su Discord i contenuti della community).
 *
 * INTERRUTTORE: DISCORD_WEBHOOK_GUILDS (Vercel → Settings → Environment Variables, solo server, poi un deploy): webhook
 * del canale. Senza, `announceGuild` non fa nulla: il server Discord di ForeverMeta al 23/10/2026 non esiste ancora.
 *
 * Garanzie, come i mazzi di OriginsMeta (`discordDeck.ts`): la pubblicazione non aspetta Discord (`after()`), nessuna
 * eccezione, timeout di rete; l'annuncio si rilegge con il client anonimo, quindi parte solo se è davvero pubblico;
 * nessuna menzione e i testi dell'autore sono ripuliti.
 */

const GOLD = 0xeab54e;
const TIMEOUT_MS = 3000;

type Announced = Pick<CommunityGuild, "slug" | "name" | "region" | "ruleset" | "faction" | "languages" | "focus" | "roles" | "size"> & { author: string };

/** Messaggio del canale: italiano per primo, poi inglese e spagnolo, con i link alle tre pagine. */
export function guildPayload(g: Announced): DiscordWebhookPayload {
  const author = escapeDiscord(g.author);
  const name = escapeDiscord(g.name).slice(0, 200);
  const line = (l: "it" | "en" | "es") => {
    const L = guildLabels[l];
    const parts = [L.factions[g.faction], `${L.regions[g.region]} · ${L.rulesets[g.ruleset]}`, g.languages.map((x) => L.languages[x]).join("/"), g.focus.map((x) => L.focus[x]).join(", ")];
    if (g.roles.length) parts.push(g.roles.map((x) => L.roles[x]).join(", "));
    return `${parts.join(" · ")} · ${L.page.by} ${author}`;
  };
  return {
    content: "🏰 **Nuova gilda · New guild · Nueva hermandad**",
    embeds: [
      {
        title: g.name.slice(0, 256),
        url: `${siteUrl}/it${guildPath(g.slug)}`,
        description: [line("it"), line("en"), line("es")].join("\n"),
        fields: [
          { name: "🇬🇧 English", value: `[${name}](${siteUrl}/en${guildPath(g.slug)})`, inline: true },
          { name: "🇪🇸 Español", value: `[${name}](${siteUrl}/es${guildPath(g.slug)})`, inline: true },
        ],
        color: GOLD,
        footer: { text: "forevermeta.me" },
      },
    ],
  };
}

/** Rilegge l'annuncio appena pubblicato come lo vede chiunque (client anonimo, senza cache): niente se non è pubblico. */
async function readPublished(slug: string): Promise<Announced | null> {
  if (!supabaseEnabled) return null;
  const sb = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store", signal: init?.signal ?? AbortSignal.timeout(TIMEOUT_MS) }) },
  });
  const { data } = await sb
    .from("community_guilds")
    .select("slug, name, region, ruleset, faction, languages, focus, roles, size, status, owner:profiles!community_guilds_owner_fkey(username, display_name)")
    .eq("slug", slug)
    .maybeSingle();
  const row = data as unknown as (Announced & { status: string; owner: { username: string | null; display_name: string | null } | null }) | null;
  if (!row || row.status !== "published") return null;
  const author = (row.owner?.display_name || row.owner?.username || "?").replace(/[\r\n]+/g, " ").trim().slice(0, 60);
  return { ...row, author };
}

/** Da chiamare dopo la pubblicazione di un annuncio: lo manda nel canale dopo la risposta al browser. */
export function announceGuild(slug: string): void {
  const url = discordWebhookUrl("DISCORD_WEBHOOK_GUILDS");
  if (!url || !supabaseEnabled) return;
  const job = async () => {
    try {
      const guild = await readPublished(slug);
      if (guild) await sendDiscordWebhook(url, guildPayload(guild), { timeoutMs: TIMEOUT_MS });
    } catch (e) {
      console.error("[guilds] annuncio su Discord non riuscito:", e instanceof Error ? e.message : e);
    }
  };
  try {
    after(job);
  } catch {
    void job();
  }
}

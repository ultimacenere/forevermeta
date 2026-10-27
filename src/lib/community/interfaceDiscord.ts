import { after } from "next/server";
import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/lib/supabase/database";
import { supabaseEnabled, supabaseKey, supabaseUrl } from "@/lib/supabase/env";
import { siteUrl } from "@/lib/i18n";
import { discordWebhookUrl, escapeDiscord, sendDiscordWebhook, type DiscordWebhookPayload } from "@/lib/discordWebhook";
import { interfaceLabels } from "@/lib/interfaceLabels";
import { anyShotPathOk, interfacePath, shotUrl, type CommunityInterface } from "./interfaces";

/**
 * Ogni interfaccia pubblicata va in diretta nel canale delle interfacce del Discord di ForeverMeta, con il primo
 * screenshot. INTERRUTTORE: DISCORD_WEBHOOK_INTERFACES (Vercel, solo server, poi un deploy); senza, non fa nulla (al
 * 24/10/2026 il server Discord di ForeverMeta non esiste ancora). Stesse garanzie degli annunci delle gilde: dopo la
 * risposta al browser, nessuna eccezione, rilettura con il client anonimo, nessuna menzione.
 */
const GOLD = 0xd7ba96;
const TIMEOUT_MS = 3000;

type Announced = Pick<CommunityInterface, "slug" | "name" | "roles" | "input" | "addons" | "shots"> & { author: string };

export function interfacePayload(i: Announced): DiscordWebhookPayload {
  const author = escapeDiscord(i.author);
  const name = escapeDiscord(i.name).slice(0, 200);
  const line = (l: "it" | "en" | "es") => {
    const L = interfaceLabels[l];
    const parts = [L.inputs[i.input], i.roles.length ? i.roles.map((r) => L.roles[r]).join(", ") : L.page.anyRole, i.addons.trim() ? L.page.withAddons : L.page.noAddons];
    return `${parts.join(" · ")} · ${L.page.by} ${author}`;
  };
  const first = i.shots.find(anyShotPathOk);
  return {
    content: "🖥️ **Nuova interfaccia · New interface · Nueva interfaz**",
    embeds: [
      {
        title: i.name.slice(0, 256),
        url: `${siteUrl}/it${interfacePath(i.slug)}`,
        description: [line("it"), line("en"), line("es")].join("\n"),
        fields: [
          { name: "🇬🇧 English", value: `[${name}](${siteUrl}/en${interfacePath(i.slug)})`, inline: true },
          { name: "🇪🇸 Español", value: `[${name}](${siteUrl}/es${interfacePath(i.slug)})`, inline: true },
        ],
        ...(first ? { image: { url: shotUrl(supabaseUrl, first) } } : {}),
        color: GOLD,
        footer: { text: "forevermeta.me" },
      },
    ],
  };
}

async function readPublished(slug: string): Promise<Announced | null> {
  if (!supabaseEnabled) return null;
  const sb = createClient<Database>(supabaseUrl, supabaseKey, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    global: { fetch: (input, init) => fetch(input, { ...init, cache: "no-store", signal: init?.signal ?? AbortSignal.timeout(TIMEOUT_MS) }) },
  });
  const { data } = await sb
    .from("community_interfaces")
    .select("slug, name, roles, input, addons, shots, status, owner:profiles!community_interfaces_owner_fkey(username, display_name)")
    .eq("slug", slug)
    .maybeSingle();
  const row = data as unknown as (Announced & { status: string; owner: { username: string | null; display_name: string | null } | null }) | null;
  if (!row || row.status !== "published") return null;
  const author = (row.owner?.display_name || row.owner?.username || "?").replace(/[\r\n]+/g, " ").trim().slice(0, 60);
  return { ...row, author };
}

/** Da chiamare dopo la pubblicazione di un'interfaccia: la manda nel canale dopo la risposta al browser. */
export function announceInterface(slug: string): void {
  const url = discordWebhookUrl("DISCORD_WEBHOOK_INTERFACES");
  if (!url || !supabaseEnabled) return;
  const job = async () => {
    try {
      const item = await readPublished(slug);
      if (item) await sendDiscordWebhook(url, interfacePayload(item), { timeoutMs: TIMEOUT_MS });
    } catch (e) {
      console.error("[interfaces] annuncio su Discord non riuscito:", e instanceof Error ? e.message : e);
    }
  };
  try {
    after(job);
  } catch {
    void job();
  }
}

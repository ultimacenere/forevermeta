"use server";

import { revalidatePath } from "next/cache";
import { locales, type Locale } from "@/lib/i18n";
import { currentUser } from "@/lib/supabase/server";
import type { GuildRow } from "@/lib/supabase/database";
import { GUILDS_PER_USER, GUILD_SLUG_RE, checkGuildFields, cleanText, guildPath, guildTableMissing, newGuildSlug, type GuildFields } from "./guilds";
import { announceGuild } from "./guildDiscord";

/**
 * Server Action della bacheca delle gilde (23/10/2026): pubblicazione, modifica, stato, rinnovo, eliminazione e
 * segnalazione. Le regole dei campi stanno in guilds.ts (uguali ai vincoli dello schema). Chi può scrivere lo decide RLS.
 */
export type GuildActionState = { ok?: boolean; href?: string; error?: string; field?: string };

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function localeOf(formData: FormData): Locale {
  const l = String(formData.get("locale") ?? "en");
  return (locales as readonly string[]).includes(l) ? (l as Locale) : "en";
}

function revalidateGuildPaths(slug?: string) {
  for (const l of locales) {
    revalidatePath(`/${l}/guilds`);
    revalidatePath(`/${l}/account`);
    revalidatePath(`/${l}/sitemap-guilds.xml`);
    if (slug) revalidatePath(`/${l}${guildPath(slug)}`);
  }
}

/** I campi del modulo: i valori multipli arrivano con getAll (caselle con lo stesso nome). */
function fieldsOf(formData: FormData) {
  const one = (k: string) => formData.get(k) ?? "";
  const many = (k: string) => formData.getAll(k).map(String);
  return checkGuildFields(
    {
      name: one("name"),
      region: one("region"),
      realm: one("realm"),
      realmType: one("realmType"),
      faction: one("faction"),
      languages: many("languages"),
      focus: many("focus"),
      roles: many("roles"),
      classes: many("classes"),
      raidDays: many("raidDays"),
      schedule: one("schedule"),
      size: one("size"),
      descriptionLang: one("descriptionLang"),
      description: one("description"),
      discordUrl: one("discordUrl"),
      websiteUrl: one("websiteUrl"),
      contact: one("contact"),
    },
    locales,
  );
}

function rowOf(f: GuildFields): Omit<GuildRow, "id" | "slug" | "owner" | "status" | "refreshed_at" | "created_at" | "updated_at"> {
  return {
    name: f.name,
    region: f.region,
    realm: f.realm,
    realm_type: f.realmType,
    faction: f.faction,
    languages: f.languages,
    focus: f.focus,
    roles: f.roles,
    classes: f.classes,
    raid_days: f.raidDays,
    schedule: f.schedule,
    size: f.size,
    description_lang: f.descriptionLang,
    description: f.description,
    discord_url: f.discordUrl,
    website_url: f.websiteUrl,
    contact: f.contact,
  };
}

function writeError(error: { code?: string; message: string } | null): GuildActionState {
  if (guildTableMissing(error)) return { error: "unavailable" };
  if (error?.message?.includes("guild limit")) return { error: "limit" };
  if (error?.code === "23514") return { error: "invalid" };
  if (error?.code === "42501") return { error: "forbidden" };
  return { error: "db" };
}

export async function publishGuild(_prev: GuildActionState, formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const parsed = fieldsOf(formData);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  const { count, error: countError } = await supabase.from("community_guilds").select("id", { count: "exact", head: true }).eq("owner", user.id).eq("status", "published");
  if (countError) return writeError(countError);
  if ((count ?? 0) >= GUILDS_PER_USER) return { error: "limit" };
  const row = { ...rowOf(parsed.fields), owner: user.id, status: "published" };
  for (let attempt = 0; attempt < 6; attempt++) {
    const slug = newGuildSlug(parsed.fields.name, parsed.fields.realm);
    const { data, error } = await supabase
      .from("community_guilds")
      .insert({ ...row, slug })
      .select("slug")
      .single();
    if (!error && data) {
      revalidateGuildPaths(slug);
      announceGuild(slug);
      return { ok: true, href: `/${locale}${guildPath(slug)}?new=1` };
    }
    if (error?.code !== "23505") return writeError(error);
  }
  return { error: "db" };
}

export async function updateGuild(_prev: GuildActionState, formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const locale = localeOf(formData);
  const id = String(formData.get("id") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const parsed = fieldsOf(formData);
  if (!parsed.ok) return { error: parsed.error, field: parsed.field };
  // una modifica vale anche come rinnovo: l'autore ha appena riletto l'annuncio
  const patch: Partial<GuildRow> = { ...rowOf(parsed.fields), refreshed_at: new Date().toISOString() };
  const { data, error } = await supabase.from("community_guilds").update(patch).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  const slug = (data as { slug: string }).slug;
  revalidateGuildPaths(slug);
  return { ok: true, href: `/${locale}${guildPath(slug)}` };
}

/** Nasconde o rimette online un annuncio proprio. */
export async function setGuildStatus(formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const status = String(formData.get("status") ?? "");
  if (!UUID_RE.test(id) || (status !== "published" && status !== "hidden")) return { error: "invalid" };
  const { data, error } = await supabase.from("community_guilds").update({ status }).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  revalidateGuildPaths((data as { slug: string }).slug);
  return { ok: true };
}

/** Rinnova un annuncio proprio: torna in cima all'elenco e non scade per altri 45 giorni. */
export async function refreshGuild(formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const { data, error } = await supabase.from("community_guilds").update({ refreshed_at: new Date().toISOString() }).eq("id", id).eq("owner", user.id).select("slug").maybeSingle();
  if (error) return writeError(error);
  if (!data) return { error: "forbidden" };
  revalidateGuildPaths((data as { slug: string }).slug);
  return { ok: true };
}

/** Elimina un annuncio proprio (le segnalazioni cadono con lui). */
export async function deleteGuild(formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const slug = String(formData.get("slug") ?? "");
  if (!UUID_RE.test(id)) return { error: "invalid" };
  const { error } = await supabase.from("community_guilds").delete().eq("id", id).eq("owner", user.id);
  if (error) return writeError(error);
  revalidateGuildPaths(GUILD_SLUG_RE.test(slug) ? slug : undefined);
  return { ok: true, href: `/${localeOf(formData)}/account#guilds` };
}

/** Segnala un annuncio (serve l'accesso: la policy vuole user_id = auth.uid()). Gli admin leggono le segnalazioni. */
export async function reportGuild(formData: FormData): Promise<GuildActionState> {
  const { supabase, user } = await currentUser();
  if (!supabase) return { error: "disabled" };
  if (!user) return { error: "notLoggedIn" };
  const id = String(formData.get("id") ?? "");
  const reason = cleanText(formData.get("reason"), 500);
  if (!UUID_RE.test(id) || reason.length < 3) return { error: "invalid", field: "reason" };
  const { error } = await supabase.from("guild_reports").insert({ guild_id: id, user_id: user.id, reason });
  if (error) return writeError(error);
  return { ok: true };
}

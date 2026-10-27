/**
 * Tipi delle tabelle di Supabase lette dal sito: `profiles` (account e avatar) e, dal 23/10/2026, le build pubblicate
 * (`community_builds`, `build_votes`, vista `build_ratings`: blocco "BUILD PUBBLICATE" di supabase/schema.sql).
 * Lo schema completo, ereditato dal motore di OriginsMeta, sta in supabase/schema.sql; i tipi delle altre tabelle si
 * aggiungono qui quando una pagina comincia a leggerle (tier list, gilde).
 */
type ProfileRow = {
  id: string;
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  avatar_path: string | null;
  badge: string | null;
  role: string;
  created_at: string;
};

export type BuildRow = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  class_id: string;
  race_id: string | null;
  level: number;
  code: string;
  points: number;
  purpose: string;
  guide_lang: string;
  summary: string;
  plan: string;
  strengths: string;
  weaknesses: string;
  notes: string;
  game_version: string;
  status: string;
  /** traduzioni automatiche di nome e guida, una per lingua (blocco "BUILD TRADOTTE" di schema.sql) */
  translations: Record<string, unknown>;
  created_at: string;
  updated_at: string;
};

type BuildVoteRow = {
  build_id: string;
  user_id: string;
  stars: number;
  created_at: string;
  updated_at: string;
};

/** Annuncio di gilda (blocco "BACHECA GILDE" di supabase/schema.sql, 23/10/2026). */
export type GuildRow = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  region: string;
  ruleset: string;
  faction: string;
  languages: string[];
  focus: string[];
  roles: string[];
  classes: string[];
  raid_days: string[];
  schedule: string;
  size: string;
  description_lang: string;
  description: string;
  discord_url: string;
  website_url: string;
  contact: string;
  status: string;
  refreshed_at: string;
  created_at: string;
  updated_at: string;
};

type GuildReportRow = {
  id: number;
  guild_id: string;
  user_id: string | null;
  reason: string;
  created_at: string;
};

/** Interfaccia condivisa (blocco "INTERFACCE" di supabase/schema.sql, 24/10/2026). */
export type InterfaceRow = {
  id: string;
  slug: string;
  owner: string;
  name: string;
  layout: string;
  cooldowns: string;
  shots: string[];
  classes: string[];
  roles: string[];
  input: string;
  preset: string;
  resolution: string;
  ui_scale: number | null;
  addons: string;
  description_lang: string;
  description: string;
  game_version: string;
  status: string;
  created_at: string;
  updated_at: string;
};

type InterfaceVoteRow = {
  interface_id: string;
  user_id: string;
  stars: number;
  created_at: string;
  updated_at: string;
};

type InterfaceReportRow = {
  id: number;
  interface_id: string;
  user_id: string | null;
  reason: string;
  created_at: string;
};

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: Partial<ProfileRow> & { id: string };
        Update: Partial<ProfileRow>;
        Relationships: [];
      };
      community_builds: {
        Row: BuildRow;
        Insert: Partial<BuildRow> & Pick<BuildRow, "slug" | "owner" | "name" | "class_id" | "level" | "code" | "summary" | "plan">;
        Update: Partial<BuildRow>;
        Relationships: [{ foreignKeyName: "community_builds_owner_fkey"; columns: ["owner"]; isOneToOne: false; referencedRelation: "profiles"; referencedColumns: ["id"] }];
      };
      build_votes: {
        Row: BuildVoteRow;
        Insert: Pick<BuildVoteRow, "build_id" | "user_id" | "stars"> & Partial<BuildVoteRow>;
        Update: Partial<BuildVoteRow>;
        Relationships: [];
      };
      community_guilds: {
        Row: GuildRow;
        Insert: Partial<GuildRow> & Pick<GuildRow, "slug" | "owner" | "name" | "region" | "faction" | "languages" | "focus" | "description">;
        Update: Partial<GuildRow>;
        Relationships: [{ foreignKeyName: "community_guilds_owner_fkey"; columns: ["owner"]; isOneToOne: false; referencedRelation: "profiles"; referencedColumns: ["id"] }];
      };
      guild_reports: {
        Row: GuildReportRow;
        Insert: Pick<GuildReportRow, "guild_id" | "reason"> & Partial<GuildReportRow>;
        Update: Partial<GuildReportRow>;
        Relationships: [];
      };
      community_interfaces: {
        Row: InterfaceRow;
        Insert: Partial<InterfaceRow> & Pick<InterfaceRow, "slug" | "owner" | "name" | "layout" | "shots" | "description">;
        Update: Partial<InterfaceRow>;
        Relationships: [{ foreignKeyName: "community_interfaces_owner_fkey"; columns: ["owner"]; isOneToOne: false; referencedRelation: "profiles"; referencedColumns: ["id"] }];
      };
      interface_votes: {
        Row: InterfaceVoteRow;
        Insert: Pick<InterfaceVoteRow, "interface_id" | "user_id" | "stars"> & Partial<InterfaceVoteRow>;
        Update: Partial<InterfaceVoteRow>;
        Relationships: [];
      };
      interface_reports: {
        Row: InterfaceReportRow;
        Insert: Pick<InterfaceReportRow, "interface_id" | "reason"> & Partial<InterfaceReportRow>;
        Update: Partial<InterfaceReportRow>;
        Relationships: [];
      };
    };
    Views: {
      build_ratings: {
        Row: { build_id: string; avg_stars: number | string; votes: number };
        Relationships: [];
      };
      interface_ratings: {
        Row: { interface_id: string; avg_stars: number | string; votes: number };
        Relationships: [];
      };
    };
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

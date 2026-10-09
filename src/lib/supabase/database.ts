/**
 * Tipi delle tabelle di Supabase lette dal sito (prima versione di ForeverMeta, 10/10/2026): oggi solo `profiles`.
 * Lo schema completo, ereditato dal motore di OriginsMeta, sta in supabase/schema.sql; i tipi delle altre tabelle si
 * aggiungono qui quando una pagina comincia a leggerle (build, tier list, gilde).
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

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: Partial<ProfileRow> & { id: string };
        Update: Partial<ProfileRow>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
};

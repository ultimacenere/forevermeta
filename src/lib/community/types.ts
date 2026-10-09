/** Riga di public.profiles letta dal sito (account e avatar nell'header). */
export type Profile = {
  username: string | null;
  display_name: string | null;
  avatar_url: string | null;
  badge?: string | null;
  /** foto caricata dal sito: `Avatar` la mostra prima di `avatar_url`, quando la lettura la porta */
  avatar_path?: string | null;
};

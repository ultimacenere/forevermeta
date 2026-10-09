/**
 * Link che si aprono in una scheda nuova (fonti ufficiali Blizzard, video): rel, avviso per i lettori di schermo
 * (l'elemento con `NEW_TAB_HINT_ID` sta nel footer, in ogni pagina) e la freccia visibile.
 */
export const NEW_TAB_HINT_ID = "fm-new-tab-hint";
export const NEW_TAB_REL = "noopener";
export const newTabProps = { target: "_blank", rel: NEW_TAB_REL, "aria-describedby": NEW_TAB_HINT_ID } as const;
export const isExternalHref = (url?: string | null): boolean => /^https?:\/\//i.test(url ?? "");

export function NewTabIcon({ className = "h-3 w-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" aria-hidden="true" className={`${className} shrink-0`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6.5 3.5h6v6M12.5 3.5 4 12" />
    </svg>
  );
}

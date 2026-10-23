import { WORDMARK } from "./wordmarkPaths";

/**
 * Logo di ForeverMeta (23/10/2026, scelto da Pierluigi fra quattro proposte): l'infinito dorato che avvolge la F di
 * "Forever", lettere in Cinzel Bold con "Meta" nell'oro del simbolo. Dal 10/10 al 23/10/2026 era un logo testuale con
 * un infinito disegnato da noi. Niente loghi né grafica Blizzard nell'identità del sito (regola del progetto).
 * È un unico SVG inline con i tracciati di `wordmarkPaths.ts` (generati da scripts/logo/make-logo.py): le lettere sono
 * contorni, non testo, così il logo non cambia faccia mentre il font si carica e l'infinito resta agganciato alla F.
 * Si ragiona per altezza, come il logo di OriginsMeta: `height` decide la misura, la larghezza viene dal viewBox.
 * "Forever" prende il colore del testo (currentColor, di base il gesso), l'oro è quello del bozzetto. Il nome del sito
 * c'è sempre per chi non vede l'immagine: nell'header il link ha già il suo `aria-label`, quindi lì l'SVG è nascosto
 * (`alt` vuoto), altrove l'`alt` diventa l'etichetta dell'immagine.
 */
export function Wordmark({ className = "", height = 26, alt = "" }: { className?: string; height?: number; alt?: string }) {
  return (
    <svg
      viewBox={WORDMARK.viewBox}
      className={`shrink-0 text-chalk ${className}`}
      style={{ height, width: "auto" }}
      {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
    >
      <path fill={WORDMARK.gold} d={WORDMARK.infinity} />
      <path fill="currentColor" d={WORDMARK.forever} />
      <path fill={WORDMARK.gold} d={WORDMARK.meta} />
    </svg>
  );
}

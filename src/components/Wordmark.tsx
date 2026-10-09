/**
 * Logo di ForeverMeta (10/10/2026, identità propria decisa da Pierluigi): logo testuale nel font display del sito,
 * "Forever" in gesso e "Meta" nell'oro dell'accento, con un simbolo dell'infinito disegnato da noi. Niente loghi né
 * grafica Blizzard nell'identità del sito (regola del progetto). Si ragiona per altezza, come il logo di OriginsMeta:
 * `height` decide la misura, la larghezza viene dal testo. Il nome del sito c'è sempre per chi non vede il simbolo:
 * il testo è testo vero; nell'header il link ha già il suo `aria-label`, quindi lì il gruppo è nascosto
 * (`alt` vuoto), altrove l'`alt` diventa l'etichetta del gruppo.
 */
export function Wordmark({ className = "", height = 26, alt = "" }: { className?: string; height?: number; alt?: string }) {
  const font = Math.round(height * 0.62);
  return (
    <span
      className={`inline-flex items-center gap-[0.35em] whitespace-nowrap font-display font-bold leading-none tracking-tight text-chalk ${className}`}
      style={{ height, fontSize: font }}
      {...(alt ? { role: "img", "aria-label": alt } : { "aria-hidden": true })}
    >
      <svg viewBox="0 0 40 24" aria-hidden="true" className="shrink-0" style={{ height: Math.round(height * 0.8), width: "auto" }}>
        <path
          d="M20 12c-3.6-4.6-6.4-7-9.6-7C6.6 5 4 8.1 4 12s2.6 7 6.4 7c3.2 0 6-2.4 9.6-7Zm0 0c3.6 4.6 6.4 7 9.6 7 3.8 0 6.4-3.1 6.4-7s-2.6-7-6.4-7c-3.2 0-6 2.4-9.6 7Z"
          fill="none"
          stroke="var(--color-mint)"
          strokeWidth="3.2"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="12" r="1.9" fill="var(--color-sky)" />
      </svg>
      <span>
        Forever<span className="text-mint">Meta</span>
      </span>
    </span>
  );
}

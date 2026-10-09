/**
 * Copertina di una news o di una guida: sempre presente, diversa per ogni contenuto. Immagine semplice, non
 * next/image, così le miniature remote non richiedono configurazione. `alt` vuoto quando accanto c'è già il titolo.
 */
export function NewsCover({ src, alt = "", className = "", priority = false }: { src: string; alt?: string; className?: string; priority?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      className={`aspect-[16/9] w-full rounded-lg border border-sky/70 object-cover ${className}`}
    />
  );
}

import Link from "next/link";
import type { CSSProperties } from "react";
import { classes, className } from "@/lib/data/classes";
import { href, type Locale } from "@/lib/i18n";
import { classPath } from "@/lib/builder/page";
import type { ClassId } from "@/lib/builder/types";
import { TALENT_ICON_BASE } from "@/lib/data/talents";

/** Icona ufficiale della classe (classicon_*), con la cornice nel colore della classe. */
function ClassIcon({ icon, size }: { icon: string; size: number }) {
  // eslint-disable-next-line @next/next/no-img-element -- icona piccola già nel sito
  return <img src={`${TALENT_ICON_BASE}${icon}.jpg`} alt="" className="tb-class-icon" width={size} height={size} loading="lazy" />;
}

/**
 * La striscia delle nove classi in cima al builder: link alle pagine delle classi (una per classe, statiche), con il
 * colore del gioco. Server component: niente stato, la classe corrente è quella della pagina.
 */
export function ClassStrip({ locale, current, label }: { locale: Locale; current?: ClassId; label: string }) {
  return (
    <nav className="tb-classes" aria-label={label}>
      {classes.map((c) => (
        <Link
          key={c.id}
          href={href(locale, classPath(c.id))}
          className="tb-class"
          aria-current={c.id === current ? "page" : undefined}
          style={{ "--tb-class": c.color, "--tb-ink": c.ink } as CSSProperties}
          prefetch={false}
        >
          <ClassIcon icon={c.icon} size={24} />
          {className(c, locale)}
        </Link>
      ))}
    </nav>
  );
}

/** Le nove classi come schede grandi, per la pagina d'ingresso del builder. */
export function ClassGrid({ locale }: { locale: Locale }) {
  return (
    <div className="tb-class-grid">
      {classes.map((c) => (
        <Link key={c.id} href={href(locale, classPath(c.id))} className="tb-class-card" style={{ "--tb-class": c.color, "--tb-ink": c.ink } as CSSProperties} prefetch={false}>
          <ClassIcon icon={c.icon} size={38} />
          <span>
            <span className="tb-class-card-name">{className(c, locale)}</span>
            <span className="tb-class-card-trees">{c.trees.map((t) => t.name).join(" · ")}</span>
          </span>
        </Link>
      ))}
    </div>
  );
}

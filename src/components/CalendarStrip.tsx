import Link from "next/link";
import { dayNumber, href, monthShort, type Dictionary, type Locale } from "@/lib/i18n";
import { upcomingEvents } from "@/lib/data/events";

/**
 * Striscia del calendario sotto l'header: le prossime date ufficiali di Forever, ognuna con il link al calendario.
 * Statica (le date si ricalcolano a ogni build). Senza date in arrivo non compare.
 */
export function CalendarStrip({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = upcomingEvents().slice(0, 4);
  if (!items.length) return null;
  return (
    <div className="border-b border-felt-line/70 bg-felt-deep/70">
      <ul className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-2 sm:px-6" aria-label={dict.nav.calendar}>
        {items.map((e) => (
          <li key={e.slug} className="shrink-0">
            <Link href={href(locale, `/calendar#${e.slug}`)} className="flex items-center gap-2 rounded-full border border-felt-line px-3 py-1 text-xs text-chalk hover:border-mint">
              <span className="font-mono text-mint">
                {dayNumber(e.start)} {monthShort(locale, e.start)}
              </span>
              <span className="max-w-[16rem] truncate">{e.title[locale]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

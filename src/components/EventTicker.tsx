import { dayNumber, formatDateShort, href, monthShort, weekdayLong, type Dictionary, type Locale } from "@/lib/i18n";
import { upcomingEvents } from "@/lib/data/events";
import { TickerMarquee, type TickerItem } from "./TickerMarquee";

/**
 * Striscia scorrevole della home con tutte le prossime date ufficiali di Forever (23/10/2026, Pierluigi: "in movimento
 * come in originsmeta", "un po' più visibile", "alterna i colori orda e alleanza"). Ogni voce ha il cubetto con giorno
 * e mese e il link alla voce del calendario; i colori si alternano Alleanza (blu) e Orda (rosso) a partire dalla data
 * più vicina, che è anche quella segnata come "prossima". Le date si calcolano alla build (la home si rigenera ogni
 * giorno); senza date in arrivo la striscia non compare.
 */
export function EventTicker({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const events = upcomingEvents();
  if (!events.length) return null;
  const items: TickerItem[] = events.map((e, i) => ({
    key: e.slug,
    href: href(locale, `/calendar#${e.slug}`),
    day: dayNumber(e.start),
    month: monthShort(locale, e.start),
    title: e.title[locale],
    // un periodo mostra il suo intervallo, un giorno solo il giorno della settimana
    sub: e.end ? `${formatDateShort(locale, e.start)} – ${formatDateShort(locale, e.end)}` : weekdayLong(locale, e.start),
    faction: i % 2 === 0 ? "alliance" : "horde",
    isNext: i === 0,
  }));
  return <TickerMarquee items={items} ariaLabel={dict.nav.calendar} nextLabel={dict.common.next} prevLabel={dict.common.scrollLeft} nextBtnLabel={dict.common.scrollRight} />;
}

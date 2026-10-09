import type { Metadata } from "next";
import { formatDate, href, siteUrl, type Locale } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { pastEvents, upcomingEvents, type CalendarEvent } from "@/lib/data/events";
import { LocalTime } from "@/components/LocalTime";
import { NEW_TAB_REL, NewTabIcon } from "@/components/NewTab";
import { JsonLd, blizzardId, breadcrumbs, videoGameId } from "@/components/JsonLd";
import type { Dictionary } from "@/lib/i18n";

/** La pagina si rigenera una volta al giorno, così le date passano da "in arrivo" a "già passate" da sole. */
export const revalidate = 86400;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/calendar", dict.calendar.metaTitle, dict.calendar.description);
}

function EventItem({ e, locale, d }: { e: CalendarEvent; locale: Locale; d: Dictionary }) {
  return (
    <li id={e.slug} className="card-night scroll-mt-24 p-5">
      <p className="font-mono text-sm text-mint">
        <time dateTime={e.start}>{formatDate(locale, e.start)}</time>
        {e.end ? (
          <>
            {" → "}
            <time dateTime={e.end}>{formatDate(locale, e.end)}</time>
          </>
        ) : null}
      </p>
      <h3 className="t-item mt-1">{e.title[locale]}</h3>
      <p className="mt-2 text-pale">{e.text[locale]}</p>
      {e.startAt ? (
        <p className="mt-2 text-sm text-pale-muted">
          {d.calendar.yourTime}: <LocalTime iso={e.startAt} locale={locale} utcLabel="UTC" className="text-chalk" />
        </p>
      ) : null}
      <p className="mt-3 text-sm">
        <a href={e.source.url} target="_blank" rel={NEW_TAB_REL} className="inline-flex items-center gap-1.5 text-mint underline">
          {d.common.source}: {e.source.label}
          <NewTabIcon />
          <span className="sr-only"> {d.common.newTab}</span>
        </a>
      </p>
    </li>
  );
}

/** Calendario delle date ufficiali di Forever: in arrivo prima, poi quelle passate. Dati in src/lib/data/events.ts. */
export default async function CalendarPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const upcoming = upcomingEvents();
  const past = pastEvents();
  const path = href(locale, "/calendar");
  const eventLd = [...upcoming, ...past].map((e) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "@id": `${siteUrl}${path}#${e.slug}`,
    name: e.title[locale],
    description: e.text[locale],
    startDate: e.startAt ?? e.start,
    ...(e.end ? { endDate: e.end } : {}),
    eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: { "@type": "VirtualLocation", url: e.source.url },
    organizer: { "@type": "Organization", "@id": blizzardId, name: "Blizzard Entertainment", url: "https://www.blizzard.com" },
    about: { "@id": videoGameId },
    url: `${siteUrl}${path}#${e.slug}`,
  }));
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <JsonLd
        data={[
          ...eventLd,
          breadcrumbs([
            { name: "ForeverMeta", path: href(locale) },
            { name: d.calendar.title, path },
          ]),
        ]}
      />
      <p className="kicker text-mint">{d.nav.calendar}</p>
      <h1 className="t-page mt-2">{d.calendar.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{d.calendar.intro}</p>
      {upcoming.length ? (
        <section className="mt-10" aria-labelledby="cal-upcoming">
          <h2 id="cal-upcoming" className="t-section">
            {d.calendar.upcoming}
          </h2>
          <ol className="mt-4 space-y-4">
            {upcoming.map((e) => (
              <EventItem key={e.slug} e={e} locale={locale} d={d} />
            ))}
          </ol>
        </section>
      ) : null}
      {past.length ? (
        <section className="mt-12" aria-labelledby="cal-past">
          <h2 id="cal-past" className="t-section">
            {d.calendar.past}
          </h2>
          <ol className="mt-4 space-y-4 opacity-80">
            {past.map((e) => (
              <EventItem key={e.slug} e={e} locale={locale} d={d} />
            ))}
          </ol>
        </section>
      ) : null}
      <p className="mt-10 text-xs text-pale-muted">{d.common.notAffiliated}</p>
    </div>
  );
}

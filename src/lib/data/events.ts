import type { Locale } from "../i18n";

type L10n = Record<Locale, string>;

/**
 * Una data ufficiale di Forever per /calendar e la striscia in cima alle pagine. Solo date con una fonte ufficiale
 * Blizzard (`source`). `start` è il giorno ISO; `startAt` l'istante esatto con il fuso, quando la fonte dà l'ora (la
 * pagina lo mostra anche nel fuso di chi guarda).
 */
export type CalendarEvent = {
  slug: string;
  start: string;
  end?: string;
  startAt?: string;
  title: L10n;
  text: L10n;
  source: { label: string; url: string };
};

const n = (en: string, it: string, es: string): L10n => ({ en, it, es });

/** Fonti ufficiali delle date (raccolta del 10/10/2026). */
const preorder = {
  label: "Pre-Purchase World of Warcraft: Forever Upgrades (Blizzard News, 12/09/2026)",
  url: "https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth",
};
const whatsNext = {
  label: "World of Warcraft: Forever What's Next Panel Recap (Blizzard News, 12/09/2026)",
  url: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap",
};

export const events: CalendarEvent[] = [
  {
    slug: "beta",
    start: "2026-09-17",
    end: "2026-10-21",
    title: n("World of Warcraft: Forever beta", "Beta di World of Warcraft: Forever", "Beta de World of Warcraft: Forever"),
    text: n(
      "From 17 September to 21 October 2026 (Pacific time), the last full day of testing. Access by invitation or with the Skyborne Epic Pack or the Warcraft Forever Collection.",
      "Dal 17 settembre al 21 ottobre 2026 (ora del Pacifico), l'ultimo giorno completo di test. Si entra su invito o con lo Skyborne Epic Pack o la Warcraft Forever Collection.",
      "Del 17 de septiembre al 21 de octubre de 2026 (hora del Pacífico), el último día completo de pruebas. Se entra por invitación o con el Pack Epic de los célicos o la Warcraft Forever Collection.",
    ),
    source: preorder,
  },
  {
    slug: "invite-a-friend",
    start: "2026-10-20",
    title: n("Invite-A-Friend codes by email", "Codici Invita un amico via email", "Códigos de invitación por correo"),
    text: n(
      "Launch codes from the paid editions arrive by email from 20 October (Pacific time). The invited friend can play from 4 to 11 November without a subscription.",
      "I codici di lancio delle edizioni a pagamento arrivano via email dal 20 ottobre (ora del Pacifico). L'amico invitato gioca dal 4 all'11 novembre senza abbonamento.",
      "Los códigos de lanzamiento de las ediciones de pago llegan por correo desde el 20 de octubre (hora del Pacífico). El amigo invitado juega del 4 al 11 de noviembre sin suscripción.",
    ),
    source: preorder,
  },
  {
    slug: "name-reservation",
    start: "2026-10-27",
    end: "2026-11-03",
    title: n("Early Name Reservation", "Prenotazione anticipata dei nomi", "Reserva de nombres anticipada"),
    text: n(
      "With any upgrade edition you can reserve up to three character names, first come, first served. Blizzard has not announced the opening time.",
      "Con un'edizione a pagamento puoi prenotare fino a tre nomi di personaggio, a chi arriva prima. Blizzard non ha annunciato l'ora di apertura.",
      "Con cualquier edición de pago puedes reservar hasta tres nombres de personaje; el primero que llega se lo queda. Blizzard no ha anunciado la hora de apertura.",
    ),
    source: preorder,
  },
  {
    slug: "launch",
    start: "2026-11-04",
    startAt: "2026-11-04T15:00:00-08:00",
    title: n("World of Warcraft: Forever launch", "Lancio di World of Warcraft: Forever", "Lanzamiento de World of Warcraft: Forever"),
    text: n(
      "Global launch on 4 November 2026 at 3:00 p.m. PST, which is midnight between 4 and 5 November in Central Europe (00:00 CET on 5 November, as Blizzard's Italian and Spanish pages say).",
      "Lancio mondiale il 4 novembre 2026 alle 15:00 PST, cioè la mezzanotte fra il 4 e il 5 novembre in Italia (00:00 CET del 5 novembre, come dicono le pagine italiane di Blizzard).",
      "Lanzamiento mundial el 4 de noviembre de 2026 a las 15:00 PST, es decir, la medianoche entre el 4 y el 5 de noviembre en España (00:00 CET del 5 de noviembre, como dicen las páginas de Blizzard en español).",
    ),
    source: preorder,
  },
  {
    slug: "raids",
    start: "2026-12-09",
    title: n("New raids unlock", "Si sbloccano le nuove incursioni", "Se desbloquean las nuevas bandas"),
    text: n(
      "Blizzard says new raids unlock on 9 December, without saying which ones. The two announced raids are the Barrow Deeps (10 players) and Hyjal Summit (20 players).",
      "Blizzard dice che le nuove incursioni si sbloccano il 9 dicembre, senza dire quali. Le due annunciate sono Barrow Deeps (10 giocatori) e Hyjal Summit (20 giocatori).",
      "Blizzard dice que las nuevas bandas se desbloquean el 9 de diciembre, sin decir cuáles. Las dos anunciadas son las Cavernas del Túmulo (10 jugadores) y la Cima Hyjal (20 jugadores).",
    ),
    source: whatsNext,
  },
  {
    slug: "collection-end",
    start: "2027-01-11",
    title: n("Last day to buy the Warcraft Forever Collection", "Ultimo giorno per la Warcraft Forever Collection", "Último día para comprar la Warcraft Forever Collection"),
    text: n(
      "The Warcraft Forever Collection, the most complete upgrade, is sold until 11 January 2027.",
      "La Warcraft Forever Collection, l'edizione più completa, è in vendita fino all'11 gennaio 2027.",
      "La Warcraft Forever Collection, la edición más completa, se vende hasta el 11 de enero de 2027.",
    ),
    source: preorder,
  },
];

/** Le date da oggi in poi (un evento in corso conta fino al suo ultimo giorno), dalla più vicina. */
export function upcomingEvents(today: string = new Date().toISOString().slice(0, 10)): CalendarEvent[] {
  return events.filter((e) => (e.end ?? e.start) >= today).sort((a, b) => a.start.localeCompare(b.start));
}

/** Le date già passate, dalla più recente. */
export function pastEvents(today: string = new Date().toISOString().slice(0, 10)): CalendarEvent[] {
  return events.filter((e) => (e.end ?? e.start) < today).sort((a, b) => b.start.localeCompare(a.start));
}

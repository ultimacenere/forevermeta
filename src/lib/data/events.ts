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

/**
 * Fonti ufficiali delle date (raccolta del 10/10/2026, aggiornata il 28/10/2026). L'apertura reale della prenotazione
 * dei nomi in Europa (verso le 20:40 CET del 27/10, con il ritardo annunciato nel launcher) viene dal live blog di
 * Wowhead (aggiornamento delle 12:40 PDT): Blizzard non ha dato un orario nuovo.
 */
const preorder = {
  label: "Pre-Purchase World of Warcraft: Forever Upgrades (Blizzard News, 12/09/2026)",
  url: "https://news.blizzard.com/en-us/article/24301508/pre-purchase-world-of-warcraft-forever-upgrades-and-begin-your-next-journey-in-azeroth",
};
const betaEnd = {
  label: "The WoW Forever Beta Celebration is Underway (Kaivax, Blizzard forums, 22/10/2026)",
  url: "https://us.forums.blizzard.com/en/wow/t/the-wow-forever-beta-celebration-is-underway/2389633",
};
const names = {
  label: "Claim Your World of Warcraft: Forever Character Names (Blizzard News, 20/10/2026)",
  url: "https://news.blizzard.com/en-us/article/24303866/claim-your-world-of-warcraft-forever-character-names",
};
const raidOverview = {
  label: "World of Warcraft: Forever Raid Overview—Locations, Raid Sizes, and Attunement (Blizzard News, 20/10/2026)",
  url: "https://news.blizzard.com/en-us/article/24303009/world-of-warcraft-forever-raid-overviewlocations-raid-sizes-and-attunement",
};

export const events: CalendarEvent[] = [
  {
    slug: "beta",
    start: "2026-09-17",
    end: "2026-10-23",
    title: n("World of Warcraft: Forever beta", "Beta di World of Warcraft: Forever", "Beta de World of Warcraft: Forever"),
    text: n(
      "From 17 September to 23 October 2026 at 10:00 a.m. PDT (19:00 in Central Europe). The last full day was to be 21 October; Blizzard extended the beta by two days on 20 October. Access by invitation or with the Skyborne Epic Pack or the Warcraft Forever Collection.",
      "Dal 17 settembre al 23 ottobre 2026 alle 10:00 PDT (le 19:00 in Italia). L'ultimo giorno completo doveva essere il 21 ottobre; Blizzard ha prorogato la beta di due giorni il 20 ottobre. Si entra su invito o con lo Skyborne Epic Pack o la Warcraft Forever Collection.",
      "Del 17 de septiembre al 23 de octubre de 2026 a las 10:00 PDT (las 19:00 en España peninsular). El último día completo iba a ser el 21 de octubre; Blizzard prorrogó la beta dos días el 20 de octubre. Se entra por invitación o con el Pack Epic de los célicos o la Warcraft Forever Collection.",
    ),
    source: betaEnd,
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
    startAt: "2026-10-27T18:00:00+01:00",
    title: n("Early Name Reservation", "Prenotazione anticipata dei nomi", "Reserva de nombres anticipada"),
    text: n(
      "With any upgrade edition you can reserve up to three character names in total across all rulesets, including Roleplay-PvP, first come, first served, until 3 November. It was scheduled for 27 October at 18:00 CET in Europe and 1:00 p.m. PDT in North America; in Europe it actually opened about 20:40 CET, after a delay announced in the Battle.net launcher.",
      "Con un'edizione a pagamento puoi prenotare fino a tre nomi di personaggio in totale su tutti i set di regole, Roleplay-PvP compreso, a chi arriva prima, fino al 3 novembre. Era prevista il 27 ottobre alle 18:00 in Italia (18:00 CET) e alle 13:00 PDT in Nord America; in Europa è partita davvero verso le 20:40, dopo un ritardo annunciato nel launcher di Battle.net.",
      "Con cualquier edición de pago puedes reservar hasta tres nombres de personaje en total entre todos los conjuntos de reglas, Rol-JcJ incluido; el primero que llega se lo queda, hasta el 3 de noviembre. Estaba prevista el 27 de octubre a las 18:00 CET en Europa y a las 13:00 PDT en Norteamérica; en Europa abrió de verdad hacia las 20:40 CET, tras un retraso anunciado en el launcher de Battle.net.",
    ),
    source: names,
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
      "Three level 60 raids open on 9 December: the Barrow Deeps (10 players), Hyjal Summit (20 players) and Onyxia's Lair (40 players, Drakefire Amulet required).",
      "Il 9 dicembre aprono tre incursioni di livello 60: Barrow Deeps (10 giocatori), Hyjal Summit (20 giocatori) e Onyxia's Lair (40 giocatori, serve il Drakefire Amulet).",
      "El 9 de diciembre abren tres bandas de nivel 60: las Cavernas del Túmulo (10 jugadores), la Cima Hyjal (20 jugadores) y la Guarida de Onyxia (40 jugadores, hace falta el Drakefire Amulet).",
    ),
    source: raidOverview,
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

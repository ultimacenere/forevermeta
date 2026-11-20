import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Primi numeri ufficiali di WoW Forever, fonti rilette il 20/11/2026.
 * - @Warcraft su X, 18/11 00:00 UTC (17/11 16:00 PST, 18/11 01:00 CET), tre infografiche "By the numbers ... and still
 *   tickin'": nove voci, nessuna data di riferimento dichiarata.
 * - Holly Longdale (vicepresidente ed executive producer di World of Warcraft) su X, 18/11 00:03 UTC, cita il post:
 *   più persone che giocano ogni settimana di quante WoW ne abbia viste in 15 anni, senza cifre; ringrazia i giocatori.
 * - Contesto già sul sito: record del 7/11 senza cifre (/news/first-week-record-launch-crash-totems), prenotazione dei
 *   nomi dal 27/10 (/news/name-reservation-opening-october-27).
 * Le cautele (personaggi e non giocatori, prenotazione dei nomi) sono osservazioni nostre e sono scritte come tali.
 */
const NUMBERS = "https://x.com/Warcraft/status/2122842235263680581";
const LONGDALE = "https://x.com/TheWindstalker/status/2122843024791314913";

const item: NewsItem = {
  slug: "forever-by-the-numbers-15-million-characters",
  date: "2026-11-18",
  source: "blizzard",
  topic: "news",
  url: NUMBERS,
  image: media.newsRecordNumbers.src,
  imageAlt: media.newsRecordNumbers.alt,
  guides: ["wow-forever-camping-professions", "wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever by the numbers: over 15 million characters, 1.48 billion quests and Arugal as the deadliest boss",
    "WoW Forever in numeri: oltre 15 milioni di personaggi, 1,48 miliardi di missioni e Arugal il boss più letale",
    "WoW Forever en cifras: más de 15 millones de personajes, 1.480 millones de misiones y Arugal, jefe más letal",
  ),
  metaTitle: n(
    "WoW Forever by the numbers: 15 million characters",
    "WoW Forever in numeri: 15 milioni di personaggi",
    "WoW Forever en cifras: 15 millones de personajes",
  ),
  summary: n(
    "On 17 November Blizzard published its first official figures for WoW Forever: 15,160,147 characters created, nearly 1.5 billion quests completed and almost 10 billion enemies defeated, with Archmage Arugal named the deadliest boss. Holly Longdale added that more people play each week than WoW has seen in 15 years. There is still no number of players, and no date for the count.",
    "Il 17 novembre Blizzard ha pubblicato i primi numeri ufficiali di WoW Forever: 15.160.147 personaggi creati, quasi 1,5 miliardi di missioni completate e quasi 10 miliardi di nemici sconfitti, con Archmage Arugal indicato come il boss più letale. Holly Longdale ha aggiunto che ogni settimana gioca più gente di quanta WoW ne abbia vista in 15 anni. Manca ancora un numero di giocatori, e manca la data del conteggio.",
    "El 17 de noviembre Blizzard publicó las primeras cifras oficiales de WoW Forever: 15.160.147 personajes creados, casi 1.500 millones de misiones completadas y casi 10.000 millones de enemigos derrotados, con Archmage Arugal como el jefe más letal. Holly Longdale añadió que cada semana juega más gente de la que WoW ha visto en 15 años. Sigue sin haber una cifra de jugadores ni una fecha del recuento.",
  ),
  description: n(
    "Blizzard's first WoW Forever figures: 15,160,147 characters, 1.48 billion quests, Arugal as the deadliest boss. What they count and what they leave out.",
    "I primi numeri di Blizzard su WoW Forever: 15.160.147 personaggi, 1,48 miliardi di missioni, Arugal il boss più letale. Cosa contano e cosa no.",
    "Primeras cifras de Blizzard sobre WoW Forever: 15.160.147 personajes, 1.480 millones de misiones, Arugal el jefe más letal. Qué cuentan y qué no.",
  ),
  highlights: {
    en: [
      { label: "Nine figures", text: "characters, quests, enemies, guilds, Camping, parties, PvP, deaths and a boss", anchor: "numbers" },
      { label: "Holly Longdale", text: "more weekly players than in 15 years, no number given", anchor: "longdale" },
      { label: "After the 7 November record", text: "the first real figures, but none on players", anchor: "record" },
      { label: "Characters, not players", text: "name reservation inflates the total", anchor: "what-they-measure" },
      { label: "What we don't know", text: "players, accounts, subscriptions, date of the count", anchor: "unknowns" },
    ],
    it: [
      { label: "Nove numeri", text: "personaggi, missioni, nemici, gilde, Camping, gruppi, PvP, morti e un boss", anchor: "numeri" },
      { label: "Holly Longdale", text: "più giocatori a settimana che in 15 anni, senza cifre", anchor: "longdale" },
      { label: "Dopo il record del 7 novembre", text: "le prime cifre vere, ma nessuna sui giocatori", anchor: "record" },
      { label: "Personaggi, non giocatori", text: "la prenotazione dei nomi gonfia il totale", anchor: "cosa-misurano" },
      { label: "Cosa non sappiamo", text: "giocatori, account, abbonamenti, data del conteggio", anchor: "cosa-non-sappiamo" },
    ],
    es: [
      { label: "Nueve cifras", text: "personajes, misiones, enemigos, hermandades, Camping, grupos, JcJ, muertes y un jefe", anchor: "cifras" },
      { label: "Holly Longdale", text: "más jugadores por semana que en 15 años, sin cifras", anchor: "longdale" },
      { label: "Tras el récord del 7 de noviembre", text: "las primeras cifras reales, pero ninguna de jugadores", anchor: "record" },
      { label: "Personajes, no jugadores", text: "la reserva de nombres infla el total", anchor: "que-miden" },
      { label: "Lo que no sabemos", text: "jugadores, cuentas, suscripciones, fecha del recuento", anchor: "lo-que-no-sabemos" },
    ],
  },
  body: n(
    `On Tuesday 17 November at 16:00 PST (18 November, 00:00 UTC and 01:00 CET), [@Warcraft published](${NUMBERS}) three infographics with the first official figures for WoW Forever since [launch on 4 November](/en/guides/wow-forever-release-date). The post presents them as a count that is "still tickin'", without saying on which day they were taken. Below are the nine figures, Holly Longdale's comment and, kept apart, our own notes on what they can and cannot tell us.

## The nine figures {#numbers}

| What Blizzard counted | Figure |
| --- | --- |
| Characters created | 15,160,147 |
| Quests completed | 1,480,343,357 |
| Enemies defeated | 9,786,925,806 |
| Guilds created | 140,764 |
| Camping items used | 28,696,386 |
| Parties formed | 71,309,889 |
| PvP kills | 28,938,569 |
| Player deaths | 196,851,761 |
| Deadliest boss | Archmage Arugal |

Archmage Arugal is the boss players meet in Shadowfang Keep (dungeons are covered in our [zones, dungeons and raids guide](/en/guides/wow-forever-zones-dungeons-raids)). Blizzard does not say how it measured "deadliest" or how many characters the boss has killed. The Camping items are those of the system described in our [camping and professions guide](/en/guides/wow-forever-camping-professions); the infographic does not say which items are included.

## Holly Longdale's comment {#longdale}

Three minutes later [Holly Longdale](${LONGDALE}), vice president and executive producer of World of Warcraft, shared the post: according to Longdale, more people are playing WoW Forever each week than World of Warcraft has seen in 15 years, with thanks to the players. It is the strongest claim of the day, and it also comes without a number.

## After the record of 7 November {#record}

On 7 November @Warcraft had spoken of the biggest launch in WoW history by peak concurrent players and the highest number of returning players, again without figures ([our article on the first week](/en/news/first-week-record-launch-crash-totems)). The new post adds the first real numbers, but they describe what happened in the game, not how many people are playing it.

## What these numbers measure {#what-they-measure}

These are our observations, not Blizzard's:

- **Characters, not players.** 15,160,147 is the number of characters created. Blizzard does not say how many accounts or people are behind them, and one player can have several characters.
- **Name reservation.** From 27 October players could create characters to [reserve their names](/en/news/name-reservation-opening-october-27), and many made more than one. Part of the total is likely to be characters that have barely been played.
- **Totals, not averages.** Dividing quests or deaths by the number of characters would give misleading averages, because those characters are played very differently.

## What we don't know {#unknowns}

- How many players, accounts or subscriptions WoW Forever has: Blizzard has published no figure for any of them.
- The date of the count: the infographics give none.
- What Holly Longdale's comparison is based on, and with which period of the last 15 years.
- How the deadliest boss was worked out, and whether the figures can be broken down by region or ruleset.`,
    `Martedì 17 novembre alle 16:00 PST (mercoledì 18 alle 00:00 UTC, 01:00 CET) [@Warcraft ha pubblicato](${NUMBERS}) tre infografiche con i primi numeri ufficiali di WoW Forever dall'[uscita del 4 novembre](/it/guides/wow-forever-release-date). Il post li presenta come un conteggio che "still tickin'", cioè ancora in corso, senza dire a quale giorno si riferiscano. Qui sotto trovate i nove numeri, il commento di Holly Longdale e, tenute a parte, le nostre osservazioni su cosa dicono e cosa no.

## I nove numeri {#numeri}

| Cosa ha contato Blizzard | Numero |
| --- | --- |
| Personaggi creati | 15.160.147 |
| Missioni completate | 1.480.343.357 |
| Nemici sconfitti | 9.786.925.806 |
| Gilde create | 140.764 |
| Oggetti del Camping usati | 28.696.386 |
| Gruppi formati | 71.309.889 |
| Uccisioni PvP | 28.938.569 |
| Morti dei giocatori | 196.851.761 |
| Boss più letale | Archmage Arugal |

Archmage Arugal è il boss che si incontra a Shadowfang Keep (i dungeon sono nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids)). Blizzard non dice come abbia misurato il boss "più letale" né quanti personaggi abbia ucciso. Gli oggetti del Camping sono quelli del sistema spiegato nella nostra [guida a camping e professioni](/it/guides/wow-forever-camping-professions); l'infografica non dice quali oggetti rientrino nel conteggio.

## Il commento di Holly Longdale {#longdale}

Tre minuti dopo [Holly Longdale](${LONGDALE}), vicepresidente ed executive producer di World of Warcraft, ha rilanciato il post: secondo Longdale ogni settimana gioca a WoW Forever più gente di quanta World of Warcraft ne abbia vista in 15 anni, e ha ringraziato i giocatori. È l'affermazione più forte della giornata, e anche questa arriva senza un numero.

## Dopo il record del 7 novembre {#record}

Il 7 novembre @Warcraft aveva parlato del lancio più grande nella storia di WoW per picco di giocatori connessi e del numero più alto di giocatori di ritorno, anche lì senza cifre ([il nostro articolo sulla prima settimana](/it/news/first-week-record-launch-crash-totems)). Il nuovo post aggiunge i primi numeri veri, ma descrivono quello che è successo nel gioco, non quante persone ci giocano.

## Cosa misurano questi numeri {#cosa-misurano}

Queste sono osservazioni nostre, non di Blizzard:

- **Personaggi, non giocatori.** 15.160.147 è il numero di personaggi creati. Blizzard non dice quanti account o quante persone ci siano dietro, e un giocatore può avere più personaggi.
- **Prenotazione dei nomi.** Dal 27 ottobre si potevano creare personaggi per [prenotare i nomi](/it/news/name-reservation-opening-october-27), e molti ne hanno creato più di uno: se l'avete fatto anche voi, nel totale contate più volte. È probabile che una parte siano personaggi giocati poco o niente.
- **Totali, non medie.** Dividere missioni o morti per il numero di personaggi darebbe medie fuorvianti, perché quei personaggi sono giocati in modi molto diversi.

## Cosa non sappiamo {#cosa-non-sappiamo}

- Quanti giocatori, account o abbonati abbia WoW Forever: Blizzard non ha pubblicato cifre su nessuno dei tre.
- La data del conteggio: le infografiche non la indicano.
- Su che cosa si basi il confronto di Holly Longdale, e con quale periodo degli ultimi 15 anni.
- Come sia stato stabilito il boss più letale, e se i numeri si possano dividere per regione o per set di regole.`,
    `El martes 17 de noviembre a las 16:00 PST (miércoles 18 a las 00:00 UTC, 01:00 CET), [@Warcraft publicó](${NUMBERS}) tres infografías con las primeras cifras oficiales de WoW Forever desde el [lanzamiento del 4 de noviembre](/es/guides/wow-forever-release-date). El mensaje las presenta como un recuento que "still tickin'", es decir, que sigue en marcha, sin decir de qué día son. Aquí tienes las nueve cifras, el comentario de Holly Longdale y, por separado, nuestras notas sobre lo que dicen y lo que no.

## Las nueve cifras {#cifras}

| Qué contó Blizzard | Cifra |
| --- | --- |
| Personajes creados | 15.160.147 |
| Misiones completadas | 1.480.343.357 |
| Enemigos derrotados | 9.786.925.806 |
| Hermandades creadas | 140.764 |
| Objetos de Camping usados | 28.696.386 |
| Grupos formados | 71.309.889 |
| Asesinatos en JcJ | 28.938.569 |
| Muertes de jugadores | 196.851.761 |
| Jefe más letal | Archmage Arugal |

Archmage Arugal es el jefe que se encuentra en Shadowfang Keep (las mazmorras están en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids)). Blizzard no dice cómo midió el jefe "más letal" ni a cuántos personajes ha matado. Los objetos de Camping son los del sistema que explicamos en nuestra [guía de acampada y profesiones](/es/guides/wow-forever-camping-professions); la infografía no dice qué objetos entran en el recuento.

## El comentario de Holly Longdale {#longdale}

Tres minutos después, [Holly Longdale](${LONGDALE}), al frente de World of Warcraft como vicepresidencia y producción ejecutiva, compartió el mensaje: según Longdale, cada semana juega a WoW Forever más gente de la que World of Warcraft ha visto en 15 años, y dio las gracias a los jugadores. Es la afirmación más fuerte del día, y también llega sin una cifra.

## Tras el récord del 7 de noviembre {#record}

El 7 de noviembre @Warcraft había hablado del mayor lanzamiento de la historia de WoW por pico de jugadores conectados y del mayor número de jugadores que regresan, también sin cifras ([nuestro artículo sobre la primera semana](/es/news/first-week-record-launch-crash-totems)). El nuevo mensaje añade las primeras cifras reales, pero describen lo que ha pasado en el juego, no cuánta gente lo juega.

## Qué miden estas cifras {#que-miden}

Estas son observaciones nuestras, no de Blizzard:

- **Personajes, no jugadores.** 15.160.147 es el número de personajes creados. Blizzard no dice cuántas cuentas o personas hay detrás, y un jugador puede tener varios personajes.
- **Reserva de nombres.** Desde el 27 de octubre se podían crear personajes para [reservar nombres](/es/news/name-reservation-opening-october-27), y muchos crearon más de uno: si tú también lo hiciste, cuentas varias veces en el total. Es probable que una parte sean personajes que apenas se han jugado.
- **Totales, no medias.** Dividir misiones o muertes entre el número de personajes daría medias engañosas, porque esos personajes se juegan de formas muy distintas.

## Lo que no sabemos {#lo-que-no-sabemos}

- Cuántos jugadores, cuentas o suscripciones tiene WoW Forever: Blizzard no ha publicado ninguna cifra de ellos.
- La fecha del recuento: las infografías no la indican.
- En qué se basa la comparación de Holly Longdale, y con qué periodo de los últimos 15 años.
- Cómo se decidió el jefe más letal, y si las cifras se pueden dividir por región o por conjunto de reglas.`,
  ),
  faq: {
    en: [
      {
        q: "How many players does WoW Forever have?",
        a: "Blizzard has not said. The figures of 17 November count 15,160,147 characters created, not players or accounts, and Holly Longdale's comment on weekly players being the highest in 15 years comes without a number.",
      },
      {
        q: "What is the deadliest boss in WoW Forever?",
        a: "According to @Warcraft it is Archmage Arugal, whom players meet in Shadowfang Keep. Blizzard did not say how it measured this or how many characters the boss has killed.",
      },
      {
        q: "What date are the WoW Forever figures from?",
        a: "Blizzard published them on 18 November at 00:00 UTC (17 November in the Americas) but gave no reference date: the post only says the count is still running.",
      },
    ],
    it: [
      {
        q: "Quanti giocatori ha WoW Forever?",
        a: "Blizzard non l'ha detto. I numeri del 17 novembre contano 15.160.147 personaggi creati, non giocatori né account, e il commento di Holly Longdale sui giocatori settimanali più numerosi da 15 anni non ha cifre.",
      },
      {
        q: "Qual è il boss più letale di WoW Forever?",
        a: "Secondo @Warcraft è Archmage Arugal, che si incontra a Shadowfang Keep. Blizzard non ha detto come l'abbia misurato né quanti personaggi abbia ucciso.",
      },
      {
        q: "A che data si riferiscono i numeri di WoW Forever?",
        a: "Blizzard li ha pubblicati il 18 novembre alle 00:00 UTC (il 17 nelle Americhe) senza una data di riferimento: il post dice solo che il conteggio è ancora in corso.",
      },
    ],
    es: [
      {
        q: "¿Cuántos jugadores tiene WoW Forever?",
        a: "Blizzard no lo ha dicho. Las cifras del 17 de noviembre cuentan 15.160.147 personajes creados, no jugadores ni cuentas, y el comentario de Holly Longdale sobre los jugadores semanales más numerosos en 15 años no incluye cifras.",
      },
      {
        q: "¿Cuál es el jefe más letal de WoW Forever?",
        a: "Según @Warcraft es Archmage Arugal, al que se encuentra en Shadowfang Keep. Blizzard no dijo cómo lo midió ni a cuántos personajes ha matado.",
      },
      {
        q: "¿De qué fecha son las cifras de WoW Forever?",
        a: "Blizzard las publicó el 18 de noviembre a las 00:00 UTC (el 17 en América) sin una fecha de referencia: el mensaje solo dice que el recuento sigue en marcha.",
      },
    ],
  },
};

export default item;

import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Post di Kaivax (Community Manager) sul forum ufficiale US, 22 ottobre 2026, 17:00 UTC: la beta finisce il 23 ottobre
 * alle 10:00 PDT e le ultime 24 ore sono una festa nelle zone iniziali. La proroga dal 21 al 23 ottobre era stata
 * annunciata da Blizzard su X il 20 ottobre; lo stress test del 21 e il riavvio del 22 vengono dagli altri post di Kaivax.
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/the-wow-forever-beta-celebration-is-underway/2389633";
const RESTART = "https://us.forums.blizzard.com/en/wow/t/beta-realm-restart-today-at-200-pm-pdt/2389801";
const STRESS_TEST = "https://news.blizzard.com/en-us/article/24302072/updated-oct-16-join-the-world-of-warcraft-forever-stress-test";

const item: NewsItem = {
  slug: "beta-ends-october-23-farewell-celebration",
  date: "2026-10-22",
  source: "blizzard",
  topic: "beta",
  url: POST,
  image: media.zephras.src,
  imageAlt: media.zephras.alt,
  guides: ["wow-forever-release-date", "wow-forever-rulesets"],
  title: n(
    "WoW Forever beta ends on 23 October after a two-day extension, with 24 hours of chaos in the starting zones",
    "La beta di WoW Forever finisce il 23 ottobre dopo due giorni di proroga: 24 ore di caos nelle zone iniziali",
    "La beta de WoW Forever termina el 23 de octubre tras dos días de prórroga, con 24 horas de caos",
  ),
  metaTitle: n("WoW Forever beta ends 23 October: the farewell event", "WoW Forever: la beta finisce il 23 ottobre", "WoW Forever: la beta termina el 23 de octubre"),
  summary: n(
    "The WoW Forever beta, which was to end on 21 October, closes on Friday 23 October at 10:00 a.m. PDT, 19:00 in Central Europe. After the public stress test of 21 October and a quick restart on 22 October, Blizzard is spending the last 24 hours on a farewell celebration in seven starting zones, with loot and creatures that will not exist at launch.",
    "La beta di WoW Forever, che doveva finire il 21 ottobre, chiude venerdì 23 ottobre alle 10:00 PDT, le 19:00 in Italia. Dopo lo stress test pubblico del 21 ottobre e un riavvio rapido il 22, Blizzard passa le ultime 24 ore con una festa d'addio in sette zone iniziali, con bottino e creature che al lancio non esisteranno.",
    "La beta de WoW Forever, que debía terminar el 21 de octubre, cierra el viernes 23 de octubre a las 10:00 PDT, las 19:00 en España peninsular. Tras la prueba de estrés pública del 21 de octubre y un reinicio rápido el 22, Blizzard dedica las últimas 24 horas a una fiesta de despedida en siete zonas iniciales, con botín y criaturas que no existirán en el lanzamiento.",
  ),
  description: n(
    "The WoW Forever beta ends on 23 October 2026 at 10:00 a.m. PDT after a two-day extension: the stress test, the restart and the 24-hour farewell celebration.",
    "La beta di WoW Forever finisce il 23 ottobre 2026 alle 10:00 PDT dopo una proroga di due giorni: lo stress test, il riavvio e la festa d'addio di 24 ore.",
    "La beta de WoW Forever termina el 23 de octubre a las 10:00 PDT tras una prórroga de dos días: la prueba de estrés, el reinicio y la fiesta de 24 horas.",
  ),
  highlights: {
    en: [
      { label: "New closing date", text: "23 October at 10:00 a.m. PDT, two days later than planned", anchor: "closing" },
      { label: "Stress test", text: "open to everyone on 21 October, from 2:00 p.m. PDT", anchor: "stress-test" },
      { label: "Farewell celebration", text: "24 hours of \"shenanigans\" in seven starting zones", anchor: "celebration" },
      { label: "Restart", text: "a quick restart on 22 October at 2:00 p.m. PDT", anchor: "restart" },
      { label: "What's next", text: "name reservation on 27 October, launch on 4 November", anchor: "next" },
    ],
    it: [
      { label: "Nuova data di chiusura", text: "23 ottobre alle 10:00 PDT, due giorni dopo il previsto", anchor: "chiusura" },
      { label: "Stress test", text: "aperto a tutti il 21 ottobre, dalle 14:00 PDT", anchor: "stress-test" },
      { label: "Festa d'addio", text: "24 ore di \"shenanigans\" in sette zone iniziali", anchor: "festa" },
      { label: "Riavvio", text: "un riavvio rapido il 22 ottobre alle 14:00 PDT", anchor: "riavvio" },
      { label: "Cosa viene dopo", text: "prenotazione dei nomi il 27 ottobre, lancio il 4 novembre", anchor: "dopo" },
    ],
    es: [
      { label: "Nueva fecha de cierre", text: "23 de octubre a las 10:00 PDT, dos días más tarde de lo previsto", anchor: "cierre" },
      { label: "Prueba de estrés", text: "abierta a todos el 21 de octubre, desde las 14:00 PDT", anchor: "prueba-de-estres" },
      { label: "Fiesta de despedida", text: "24 horas de \"shenanigans\" en siete zonas iniciales", anchor: "fiesta" },
      { label: "Reinicio", text: "un reinicio rápido el 22 de octubre a las 14:00 PDT", anchor: "reinicio" },
      { label: "Lo que viene", text: "reserva de nombres el 27 de octubre, lanzamiento el 4 de noviembre", anchor: "despues" },
    ],
  },
  body: n(
    `The WoW Forever beta opened on 17 September 2026 and was due to end on 21 October, "the last full day of testing" in Blizzard's words. It ends instead on Friday 23 October at 10:00 a.m. PDT, which is 19:00 in Central Europe. Here is how the last week went, from the official posts of Kaivax, Community Manager at Blizzard.

## The new closing date {#closing}

Blizzard announced the two-day extension on X on 20 October: the beta would stay online until 23 October at 10:00 a.m. PDT. Kaivax confirmed the time in the forum post of 22 October: "The WoW Forever Beta will end 24 hours from now, at 10:00 a.m. PDT on Friday, October 23". Our [calendar](/en/calendar) and [release date guide](/en/guides/wow-forever-release-date) now carry the new date.

## The stress test of 21 October {#stress-test}

On 21 October Blizzard ran the [stress test](${STRESS_TEST}) it had announced on 15 October: for a few hours anyone with a World of Warcraft account could play Forever, without a subscription, Game Time or beta access, choosing "Stress Test" in the Game Version menu of the Battle.net app. In the Americas it started at 2:00 p.m. PDT, 23:00 in Central Europe. Blizzard said in advance that characters created for the test would be deleted afterwards. Kaivax also explained that the beta itself went offline before the test and that the test ran on the regional hardware the game will use at launch.

Bringing the beta back that evening hit "a small snag", as Kaivax put it: players were advised to fully exit the Battle.net desktop app to force the update. The beta was back online for its last two days.

## The farewell celebration {#celebration}

On 22 October at 10:00 a.m. PDT Kaivax opened the thread [The WoW Forever Beta Celebration is Underway](${POST}): for the last 24 hours Blizzard is "celebrating the joy and wonder of WoW Forever with 24 hours of shenanigans and upheaval" in seven starting zones, **Zephras Isle, Dun Morogh, Elwynn Forest, Teldrassil, Durotar, Tirisfal Glades and Mulgore**. The post invites testers to log in one last time and warns, in italics, that the celebration "almost certainly" includes items and experiences that **will not** be part of WoW Forever after launch.

Blizzard did not publish the list of what happens. According to what players and the fan sites Wowhead and Icy Veins reported during the day, which we have not verified ourselves, creatures of every level were dropping raid-quality epics, vendors sold experience potions and world bosses such as Azuregos and Lord Kazzak appeared in the starting zones. Johanna Faries, Blizzard's president, mentioned Azuregos and Kazzak on X.

## A quick restart in the middle {#restart}

At 2:00 p.m. PDT on 22 October, 23:00 in Central Europe, Blizzard [restarted the beta](${RESTART}) "quickly", with warnings in game from 15 minutes before. The post does not say what the restart contained. The day before, Rommax, a WoW developer, had written in the Mac graphics thread that the next round of fixes, including the colour tint issue, would only be deployed on Thursday, after the stress test; our [changes page](/en/changes) has the note.

## What comes next {#next}

- **27 October**: Early Name Reservation opens, in Europe at 18:00 CET (our [news with the times](/en/news/early-name-reservation-october-27-times)).
- **4 November**: launch at 3:00 p.m. PST, midnight between 4 and 5 November in Central Europe.
- **9 December**: the Barrow Deeps, Hyjal Summit and Onyxia's Lair raids open.

## What we don't know yet {#unknown}

- The content of the restart of 22 October and whether the Mac fixes went live with it: Blizzard has not written it.
- Whether beta characters will be deleted before launch: Blizzard's beta FAQ says beta progress does not carry over, and we have seen no new statement.
- Whether the podcast's hint of "undiscovered secrets" in the beta refers to the celebration or to the game itself.`,
    `La beta di WoW Forever si è aperta il 17 settembre 2026 e doveva finire il 21 ottobre, "l'ultimo giorno completo di test" secondo Blizzard. Finisce invece venerdì 23 ottobre alle 10:00 PDT, cioè alle 19:00 in Italia. Ecco com'è andata l'ultima settimana, dai post ufficiali di Kaivax, Community Manager di Blizzard.

## La nuova data di chiusura {#chiusura}

Blizzard ha annunciato la proroga di due giorni su X il 20 ottobre: la beta sarebbe rimasta accesa fino al 23 ottobre alle 10:00 PDT. Kaivax ha confermato l'orario nel post del 22 ottobre sul forum: "The WoW Forever Beta will end 24 hours from now, at 10:00 a.m. PDT on Friday, October 23". Il nostro [calendario](/it/calendar) e la [guida alla data di uscita](/it/guides/wow-forever-release-date) riportano la data nuova.

## Lo stress test del 21 ottobre {#stress-test}

Il 21 ottobre Blizzard ha fatto lo [stress test](${STRESS_TEST}) annunciato il 15 ottobre: per qualche ora chiunque avesse un account di World of Warcraft poteva giocare a Forever, senza abbonamento, tempo di gioco o accesso alla beta, scegliendo "Stress Test" nel menu Game Version dell'app Battle.net. Nelle Americhe è iniziato alle 14:00 PDT, le 23:00 in Italia. Blizzard aveva avvisato che i personaggi creati per il test sarebbero stati cancellati. Kaivax ha spiegato anche che la beta è andata offline prima del test e che il test ha girato sull'hardware regionale che il gioco userà al lancio.

Riaccendere la beta quella sera ha avuto "un piccolo intoppo", parole di Kaivax: il consiglio era di chiudere del tutto l'app Battle.net per forzare l'aggiornamento. La beta è tornata online per i suoi ultimi due giorni.

## La festa d'addio {#festa}

Il 22 ottobre alle 10:00 PDT Kaivax ha aperto la discussione [The WoW Forever Beta Celebration is Underway](${POST}): per le ultime 24 ore Blizzard "festeggia la gioia e la meraviglia di WoW Forever con 24 ore di shenanigans e sconvolgimenti" in sette zone iniziali, **Zephras Isle, Dun Morogh, Elwynn Forest, Teldrassil, Durotar, Tirisfal Glades e Mulgore**. Il post invita i tester a entrare un'ultima volta e avverte, in corsivo, che la festa include "quasi certamente" oggetti ed esperienze che **non** faranno parte di WoW Forever dopo il lancio.

Blizzard non ha pubblicato l'elenco di cosa succede. Secondo quello che giocatori e siti fan come Wowhead e Icy Veins hanno raccontato durante la giornata, e che non abbiamo verificato di persona, le creature di ogni livello lasciavano epici da raid, i venditori vendevano pozioni di esperienza e nelle zone iniziali comparivano boss del mondo come Azuregos e Lord Kazzak. Johanna Faries, presidente di Blizzard, ha citato Azuregos e Kazzak su X.

## Un riavvio rapido nel mezzo {#riavvio}

Alle 14:00 PDT del 22 ottobre, le 23:00 in Italia, Blizzard ha [riavviato la beta](${RESTART}) "rapidamente", con avvisi in gioco da 15 minuti prima. Il post non dice cosa contenesse il riavvio. Il giorno prima Rommax, sviluppatore di WoW, aveva scritto nella discussione sulla grafica Mac che la prossima tornata di correzioni, compresa la tinta dei colori, sarebbe uscita solo giovedì, dopo lo stress test; la nota è nella nostra [pagina delle modifiche](/it/changes).

## Cosa viene dopo {#dopo}

- **27 ottobre**: si apre la prenotazione anticipata dei nomi, in Italia alle 18:00 (la nostra [news con gli orari](/it/news/early-name-reservation-october-27-times)).
- **4 novembre**: lancio alle 15:00 PST, la mezzanotte fra il 4 e il 5 novembre in Italia.
- **9 dicembre**: si aprono le incursioni Barrow Deeps, Hyjal Summit e Onyxia's Lair.

## Cosa non sappiamo ancora {#non-sappiamo}

- Il contenuto del riavvio del 22 ottobre e se le correzioni per Mac siano uscite con quello: Blizzard non l'ha scritto.
- Se i personaggi della beta verranno cancellati prima del lancio: le FAQ della beta di Blizzard dicono che i progressi della beta non si portano dietro, e non abbiamo visto dichiarazioni nuove.
- Se i "segreti non scoperti" di cui parla il podcast riguardino la festa o il gioco vero e proprio.`,
    `La beta de WoW Forever abrió el 17 de septiembre de 2026 y debía terminar el 21 de octubre, "el último día completo de pruebas" según Blizzard. Termina en cambio el viernes 23 de octubre a las 10:00 PDT, es decir, a las 19:00 en España peninsular. Así ha ido la última semana, según los mensajes oficiales de Kaivax, Community Manager de Blizzard.

## La nueva fecha de cierre {#cierre}

Blizzard anunció la prórroga de dos días en X el 20 de octubre: la beta seguiría en línea hasta el 23 de octubre a las 10:00 PDT. Kaivax confirmó la hora en el mensaje del 22 de octubre en el foro: "The WoW Forever Beta will end 24 hours from now, at 10:00 a.m. PDT on Friday, October 23". Nuestro [calendario](/es/calendar) y la [guía de la fecha de lanzamiento](/es/guides/wow-forever-release-date) ya llevan la fecha nueva.

## La prueba de estrés del 21 de octubre {#prueba-de-estres}

El 21 de octubre Blizzard hizo la [prueba de estrés](${STRESS_TEST}) anunciada el 15 de octubre: durante unas horas cualquiera con una cuenta de World of Warcraft podía jugar a Forever, sin suscripción, tiempo de juego ni acceso a la beta, eligiendo "Stress Test" en el menú Game Version de la aplicación de Battle.net. En América empezó a las 14:00 PDT, las 23:00 en España peninsular. Blizzard había avisado de que los personajes creados para la prueba se borrarían después. Kaivax explicó también que la beta se desconectó antes de la prueba y que la prueba corrió en el hardware regional que el juego usará en el lanzamiento.

Volver a encender la beta esa noche tuvo "un pequeño contratiempo", en palabras de Kaivax: el consejo fue cerrar del todo la aplicación de Battle.net para forzar la actualización. La beta volvió para sus últimos dos días.

## La fiesta de despedida {#fiesta}

El 22 de octubre a las 10:00 PDT Kaivax abrió el hilo [The WoW Forever Beta Celebration is Underway](${POST}): durante las últimas 24 horas Blizzard "celebra la alegría y la maravilla de WoW Forever con 24 horas de shenanigans y desbarajuste" en siete zonas iniciales, **Isla de Zephras, Dun Morogh, Bosque de Elwynn, Teldrassil, Durotar, Claros de Tirisfal y Mulgore**. El mensaje invita a los probadores a entrar una última vez y avisa, en cursiva, de que la fiesta incluye "casi con seguridad" objetos y experiencias que **no** formarán parte de WoW Forever tras el lanzamiento.

Blizzard no publicó la lista de lo que ocurre. Según lo que jugadores y webs de fans como Wowhead e Icy Veins contaron durante el día, y que no hemos comprobado nosotros, las criaturas de cualquier nivel soltaban épicos de banda, los vendedores vendían pociones de experiencia y en las zonas iniciales aparecían jefes de mundo como Azuregos y Lord Kazzak. Johanna Faries, presidenta de Blizzard, mencionó a Azuregos y Kazzak en X.

## Un reinicio rápido en medio {#reinicio}

A las 14:00 PDT del 22 de octubre, las 23:00 en España peninsular, Blizzard [reinició la beta](${RESTART}) "rápidamente", con avisos en el juego desde 15 minutos antes. El mensaje no dice qué traía el reinicio. El día anterior Rommax, desarrollador de WoW, había escrito en el hilo de los gráficos en Mac que la siguiente tanda de correcciones, incluido el tinte de color, saldría solo el jueves, después de la prueba de estrés; la nota está en nuestra [página de cambios](/es/changes).

## Lo que viene después {#despues}

- **27 de octubre**: abre la reserva de nombres anticipada, en Europa a las 18:00 CET (nuestra [noticia con las horas](/es/news/early-name-reservation-october-27-times)).
- **4 de noviembre**: lanzamiento a las 15:00 PST, la medianoche entre el 4 y el 5 de noviembre en España peninsular.
- **9 de diciembre**: abren las bandas Cavernas del Túmulo, Cima Hyjal y Guarida de Onyxia.

## Lo que aún no sabemos {#no-sabemos}

- El contenido del reinicio del 22 de octubre y si las correcciones para Mac salieron con él: Blizzard no lo ha escrito.
- Si los personajes de la beta se borrarán antes del lanzamiento: las preguntas frecuentes de la beta de Blizzard dicen que el progreso de la beta no se conserva, y no hemos visto declaraciones nuevas.
- Si los "secretos por descubrir" de los que habla el pódcast se refieren a la fiesta o al juego en sí.`,
  ),
  faq: {
    en: [
      {
        q: "When does the WoW Forever beta end?",
        a: "On Friday 23 October 2026 at 10:00 a.m. PDT, which is 19:00 in Central Europe. Blizzard extended it by two days on 20 October; the original last day was 21 October.",
      },
      {
        q: "Do the items from the end-of-beta celebration stay in WoW Forever?",
        a: "No. Kaivax wrote that the one-time celebration almost certainly includes items and experiences that will not be part of WoW Forever after it launches on 4 November.",
      },
    ],
    it: [
      {
        q: "Quando finisce la beta di WoW Forever?",
        a: "Venerdì 23 ottobre 2026 alle 10:00 PDT, cioè alle 19:00 in Italia. Blizzard l'ha prorogata di due giorni il 20 ottobre; l'ultimo giorno previsto all'inizio era il 21 ottobre.",
      },
      {
        q: "Gli oggetti della festa di fine beta restano in WoW Forever?",
        a: "No. Kaivax ha scritto che la festa, unica e irripetibile, include quasi certamente oggetti ed esperienze che non faranno parte di WoW Forever dopo il lancio del 4 novembre.",
      },
    ],
    es: [
      {
        q: "¿Cuándo termina la beta de WoW Forever?",
        a: "El viernes 23 de octubre de 2026 a las 10:00 PDT, es decir, a las 19:00 en España peninsular. Blizzard la prorrogó dos días el 20 de octubre; el último día previsto al principio era el 21 de octubre.",
      },
      {
        q: "¿Los objetos de la fiesta de fin de beta se quedan en WoW Forever?",
        a: "No. Kaivax escribió que la fiesta, única e irrepetible, incluye casi con seguridad objetos y experiencias que no formarán parte de WoW Forever tras el lanzamiento del 4 de noviembre.",
      },
    ],
  },
};

export default item;

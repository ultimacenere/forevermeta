import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Articolo ufficiale "Claim Your World of Warcraft: Forever Character Names" (Blizzard News, 20 ottobre 2026; in
 * italiano "Prenota i nomi dei tuoi personaggi in World of Warcraft: Forever"): gli orari di apertura per regione della
 * prenotazione anticipata dei nomi, il limite di tre personaggi e la procedura nell'app Battle.net.
 */
const ARTICLE = "https://news.blizzard.com/en-us/article/24303866/claim-your-world-of-warcraft-forever-character-names";

const item: NewsItem = {
  slug: "early-name-reservation-october-27-times",
  date: "2026-10-20",
  source: "blizzard",
  topic: "event",
  url: ARTICLE,
  image: "/covers/early-name-reservation-october-27-times.png",
  cover: { word: "Battle.net", tone: "sky" },
  imageAlt: n(
    "ForeverMeta typographic cover with the word «Battle.net» in light blue on a midnight blue background",
    "Copertina tipografica di ForeverMeta con la scritta «Battle.net» in azzurro su fondo blu notte",
    "Portada tipográfica de ForeverMeta con la palabra «Battle.net» en azul claro sobre fondo azul noche",
  ),
  guides: ["wow-forever-release-date", "wow-forever-editions-prices", "wow-forever-rulesets"],
  title: n(
    "WoW Forever Early Name Reservation: 27 October at 18:00 CET in Europe, three names per account",
    "Prenotazione anticipata dei nomi in WoW Forever: dal 27 ottobre alle 18:00 in Italia, tre nomi per account",
    "Reserva de nombres anticipada en WoW Forever: 27 de octubre a las 18:00 CET en Europa, tres nombres por cuenta",
  ),
  metaTitle: n("WoW Forever name reservation: 27 October times", "WoW Forever: prenotazione nomi, orari del 27 ottobre", "WoW Forever: reserva de nombres, horas del 27 de octubre"),
  summary: n(
    "Blizzard has published the opening times of WoW Forever's Early Name Reservation: in Europe on 27 October 2026 at 18:00 CET, in North America at 1:00 p.m. PDT, in Korea and Taiwan on 28 October. Until 3 November, players with a paid edition can reserve up to three names in total across all rulesets.",
    "Blizzard ha pubblicato gli orari di apertura della prenotazione anticipata dei nomi di WoW Forever: in Europa il 27 ottobre 2026 alle 18:00 CET, in Nord America alle 13:00 PDT, in Corea e Taiwan il 28 ottobre. Fino al 3 novembre chi ha un'edizione a pagamento può prenotare fino a tre nomi in totale su tutti i set di regole.",
    "Blizzard ha publicado las horas de apertura de la reserva de nombres anticipada de WoW Forever: en Europa el 27 de octubre de 2026 a las 18:00 CET, en Norteamérica a las 13:00 PDT, en Corea y Taiwán el 28 de octubre. Hasta el 3 de noviembre, quien tenga una edición de pago puede reservar hasta tres nombres en total entre todos los conjuntos de reglas.",
  ),
  description: n(
    "WoW Forever Early Name Reservation opens on 27 October 2026 at 18:00 CET in Europe and runs until 3 November: three names per account and how to do it.",
    "La prenotazione anticipata dei nomi di WoW Forever apre il 27 ottobre 2026 alle 18:00 in Italia e dura fino al 3 novembre: tre nomi per account.",
    "La reserva de nombres anticipada de WoW Forever abre el 27 de octubre de 2026 a las 18:00 CET y dura hasta el 3 de noviembre: tres nombres por cuenta.",
  ),
  highlights: {
    en: [
      { label: "Europe: 18:00 CET", text: "27 October; North America at 1:00 p.m. PDT", anchor: "times" },
      { label: "Three names in total", text: "across all rulesets, only during the reservation", anchor: "three" },
      { label: "Who can reserve", text: "any paid edition, tied to the account that bought it", anchor: "who" },
      { label: "How to do it", text: "install Forever from the Battle.net app and choose a ruleset", anchor: "how" },
      { label: "Roleplay-PvP too", text: "Blizzard wants the new ruleset selectable that day", anchor: "rp-pvp" },
    ],
    it: [
      { label: "Italia: 18:00", text: "il 27 ottobre; Nord America alle 13:00 PDT", anchor: "orari" },
      { label: "Tre nomi in totale", text: "su tutti i set di regole, solo durante la prenotazione", anchor: "tre" },
      { label: "Chi può prenotare", text: "qualsiasi edizione a pagamento, legata all'account che l'ha comprata", anchor: "chi" },
      { label: "Come si fa", text: "installa Forever dall'app Battle.net e scegli un set di regole", anchor: "come" },
      { label: "Anche Roleplay-PvP", text: "Blizzard vuole il set nuovo selezionabile quel giorno", anchor: "rp-pvp" },
    ],
    es: [
      { label: "Europa: 18:00 CET", text: "el 27 de octubre; Norteamérica a las 13:00 PDT", anchor: "horas" },
      { label: "Tres nombres en total", text: "entre todos los conjuntos de reglas, solo durante la reserva", anchor: "tres" },
      { label: "Quién puede reservar", text: "cualquier edición de pago, ligada a la cuenta que la compró", anchor: "quien" },
      { label: "Cómo se hace", text: "instala Forever desde la aplicación de Battle.net y elige un conjunto", anchor: "como" },
      { label: "También Rol-JcJ", text: "Blizzard quiere que el conjunto nuevo se pueda elegir ese día", anchor: "rol-jcj" },
    ],
  },
  body: n(
    `On 20 October 2026 Blizzard published [Claim Your World of Warcraft: Forever Character Names](${ARTICLE}), with the detail that was missing from every earlier announcement: the time at which Early Name Reservation opens in each region. The reservation runs from 27 October to 3 November, before the launch on 4 November.

## Opening times by region {#times}

| Region | Opens |
|---|---|
| Europe | 27 October at 18:00 CET |
| North America | 27 October at 1:00 p.m. PDT |
| Korea | 28 October at 07:00 KST |
| Taiwan | 28 October at 07:00 CST |

Europe switches back to standard time on 25 October, so 18:00 CET is 18:00 in Italy, Spain, Germany and France, 17:00 in the United Kingdom. The dates are on our [calendar](/en/calendar).

## Three names in total {#three}

During the reservation period you can create and reserve names for **up to three characters in total across all rulesets**. Blizzard's example: if you create two on the PvP ruleset, you can only create one more on Normal or Roleplaying. The limit applies only to Early Name Reservation, not after launch. Names are unique per region and go to whoever claims them first: Blizzard repeats that "desired names cannot be guaranteed".

## Who can reserve {#who}

Players who pre-purchase the Skyborne Heroic Pack, the Skyborne Epic Pack or the Warcraft Forever Collection (the article's footnote says "Digital Upgrade or Collector's Edition"). The benefit applies only to the WoW account the edition was bought for. What each edition contains is in our [editions and prices guide](/en/guides/wow-forever-editions-prices).

## How to do it {#how}

Blizzard's "Prepare to Launch" steps:

1. Update your graphics drivers.
2. Install the Battle.net desktop app and let it update.
3. Select World of Warcraft from the list of games.
4. In the Game Version menu above the Play button, select **World of Warcraft: Forever**, then Install.
5. Press Play, choose your ruleset and create up to three characters with the names you want.

Name rules are in the earlier article "Create a Name of Your Own in WoW: Forever", summed up in our [rulesets guide](/en/guides/wow-forever-rulesets).

## Roleplay-PvP too {#rp-pvp}

Two days after this article, on 22 October, Blizzard announced a Roleplay-PvP ruleset for launch and said it is working to make it selectable, with name reservation, from 27 October as well. Details in our [news on the Roleplay-PvP ruleset](/en/news/roleplay-pvp-ruleset-at-launch).

## What we don't know yet {#unknown}

- Whether a reserved name can be changed or released before launch.
- What happens to reserved characters you do not log into after 4 November.
- Whether Roleplay-PvP will really be available on 27 October: Blizzard describes it as a goal.`,
    `Il 20 ottobre 2026 Blizzard ha pubblicato [Claim Your World of Warcraft: Forever Character Names](${ARTICLE}) (in italiano "Prenota i nomi dei tuoi personaggi in World of Warcraft: Forever"), con il dettaglio che mancava in tutti gli annunci precedenti: l'ora a cui si apre la prenotazione anticipata dei nomi in ogni regione. La prenotazione va dal 27 ottobre al 3 novembre, prima del lancio del 4 novembre.

## Gli orari di apertura per regione {#orari}

| Regione | Apre |
|---|---|
| Europa | 27 ottobre alle 18:00 CET |
| Nord America | 27 ottobre alle 13:00 PDT |
| Corea | 28 ottobre alle 07:00 KST |
| Taiwan | 28 ottobre alle 07:00 CST |

L'Europa torna all'ora solare il 25 ottobre, quindi le 18:00 CET sono le 18:00 in Italia. Le date sono nel nostro [calendario](/it/calendar).

## Tre nomi in totale {#tre}

Durante la prenotazione puoi creare e prenotare i nomi di **al massimo tre personaggi in totale su tutti i set di regole**. L'esempio di Blizzard: se ne crei due sul set PvP, puoi crearne solo un altro su Normal o Roleplaying. Il limite vale solo per la prenotazione anticipata, non dopo il lancio. I nomi sono unici per regione e vanno a chi arriva prima: Blizzard ripete che "i nomi desiderati non possono essere garantiti".

## Chi può prenotare {#chi}

Chi ha preacquistato il Pacchetto Heroic Skyborne, il Pacchetto Epic Skyborne o la Warcraft Forever Collection (la nota a piè dell'articolo dice "Digital Upgrade o Collector's Edition"). Il vantaggio vale solo per l'account WoW per cui è stata comprata l'edizione. Cosa c'è in ogni edizione è nella nostra guida a [edizioni e prezzi](/it/guides/wow-forever-editions-prices).

## Come si fa {#come}

I passaggi di Blizzard, "Prepare to Launch":

1. Aggiorna i driver della scheda video.
2. Installa l'app desktop Battle.net e lasciala aggiornare.
3. Seleziona World of Warcraft nell'elenco dei giochi.
4. Nel menu Game Version sopra il tasto Play, scegli **World of Warcraft: Forever**, poi Install.
5. Premi Play, scegli il set di regole e crea fino a tre personaggi con i nomi che vuoi.

Le regole sui nomi sono nell'articolo precedente "Crea un nome solo tuo su WoW: Forever", riassunte nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets).

## Anche Roleplay-PvP {#rp-pvp}

Due giorni dopo questo articolo, il 22 ottobre, Blizzard ha annunciato un set di regole Roleplay-PvP per il lancio e ha detto che lavora per renderlo selezionabile, con la prenotazione del nome, già dal 27 ottobre. I dettagli nella nostra [news sul set Roleplay-PvP](/it/news/roleplay-pvp-ruleset-at-launch).

## Cosa non sappiamo ancora {#non-sappiamo}

- Se un nome prenotato si possa cambiare o liberare prima del lancio.
- Cosa succede ai personaggi prenotati in cui non entri dopo il 4 novembre.
- Se Roleplay-PvP sarà davvero disponibile il 27 ottobre: Blizzard lo presenta come un obiettivo.`,
    `El 20 de octubre de 2026 Blizzard publicó [Claim Your World of Warcraft: Forever Character Names](${ARTICLE}), con el detalle que faltaba en todos los anuncios anteriores: la hora a la que abre la reserva de nombres anticipada en cada región. La reserva va del 27 de octubre al 3 de noviembre, antes del lanzamiento del 4 de noviembre.

## Las horas de apertura por región {#horas}

| Región | Abre |
|---|---|
| Europa | 27 de octubre a las 18:00 CET |
| Norteamérica | 27 de octubre a las 13:00 PDT |
| Corea | 28 de octubre a las 07:00 KST |
| Taiwán | 28 de octubre a las 07:00 CST |

Europa vuelve al horario de invierno el 25 de octubre, así que las 18:00 CET son las 18:00 en España peninsular y las 17:00 en Canarias. En Ciudad de México, la apertura de Norteamérica cae a las 14:00. Las fechas están en nuestro [calendario](/es/calendar).

## Tres nombres en total {#tres}

Durante la reserva puedes crear y reservar nombres para **un máximo de tres personajes en total entre todos los conjuntos de reglas**. El ejemplo de Blizzard: si creas dos en el conjunto JcJ, solo puedes crear uno más en Normal o Rol. El límite se aplica solo a la reserva anticipada, no después del lanzamiento. Los nombres son únicos por región y son para quien los reserva primero: Blizzard repite que "los nombres deseados no se pueden garantizar".

## Quién puede reservar {#quien}

Quien haya comprado por adelantado el Pack Heroic de los célicos, el Pack Epic de los célicos o la Warcraft Forever Collection (la nota al pie del artículo dice "Digital Upgrade o Collector's Edition"). La ventaja solo vale para la cuenta de WoW con la que se compró la edición. Lo que trae cada edición está en nuestra guía de [ediciones y precios](/es/guides/wow-forever-editions-prices).

## Cómo se hace {#como}

Los pasos de Blizzard, "Prepare to Launch":

1. Actualiza los controladores de la tarjeta gráfica.
2. Instala la aplicación de escritorio de Battle.net y deja que se actualice.
3. Selecciona World of Warcraft en la lista de juegos.
4. En el menú Game Version, encima del botón Jugar, elige **World of Warcraft: Forever** y después Instalar.
5. Pulsa Jugar, elige el conjunto de reglas y crea hasta tres personajes con los nombres que quieras.

Las reglas de los nombres están en el artículo anterior "Crea un nombre verdaderamente tuyo en WoW: Forever", resumidas en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets).

## También Rol-JcJ {#rol-jcj}

Dos días después de este artículo, el 22 de octubre, Blizzard anunció un conjunto de reglas Rol-JcJ (Roleplay-PvP) para el lanzamiento y dijo que trabaja para que se pueda elegir, con reserva de nombre, también desde el 27 de octubre. Los detalles, en nuestra [noticia sobre el conjunto Rol-JcJ](/es/news/roleplay-pvp-ruleset-at-launch).

## Lo que aún no sabemos {#no-sabemos}

- Si un nombre reservado se puede cambiar o liberar antes del lanzamiento.
- Qué pasa con los personajes reservados en los que no entres después del 4 de noviembre.
- Si Rol-JcJ estará de verdad disponible el 27 de octubre: Blizzard lo presenta como un objetivo.`,
  ),
  faq: {
    en: [
      {
        q: "What time does WoW Forever name reservation open in Europe?",
        a: "On 27 October 2026 at 18:00 CET, according to Blizzard's article of 20 October. In North America it opens the same day at 1:00 p.m. PDT; in Korea and Taiwan on 28 October at 07:00 local time.",
      },
      {
        q: "How many names can I reserve in WoW Forever?",
        a: "Up to three in total across all rulesets, with any paid edition, from 27 October to 3 November 2026. The limit only applies during Early Name Reservation.",
      },
    ],
    it: [
      {
        q: "A che ora apre la prenotazione dei nomi di WoW Forever in Italia?",
        a: "Il 27 ottobre 2026 alle 18:00, secondo l'articolo di Blizzard del 20 ottobre (18:00 CET per tutta l'Europa). In Nord America apre lo stesso giorno alle 13:00 PDT; in Corea e Taiwan il 28 ottobre alle 07:00 locali.",
      },
      {
        q: "Quanti nomi posso prenotare in WoW Forever?",
        a: "Fino a tre in totale su tutti i set di regole, con qualsiasi edizione a pagamento, dal 27 ottobre al 3 novembre 2026. Il limite vale solo durante la prenotazione anticipata.",
      },
    ],
    es: [
      {
        q: "¿A qué hora abre la reserva de nombres de WoW Forever en Europa?",
        a: "El 27 de octubre de 2026 a las 18:00 CET, según el artículo de Blizzard del 20 de octubre. En Norteamérica abre el mismo día a las 13:00 PDT; en Corea y Taiwán, el 28 de octubre a las 07:00 hora local.",
      },
      {
        q: "¿Cuántos nombres puedo reservar en WoW Forever?",
        a: "Hasta tres en total entre todos los conjuntos de reglas, con cualquier edición de pago, del 27 de octubre al 3 de noviembre de 2026. El límite solo se aplica durante la reserva anticipada.",
      },
    ],
  },
};

export default item;

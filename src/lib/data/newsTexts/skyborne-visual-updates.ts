import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/** Articolo ufficiale del 7 ottobre 2026, 21:00 UTC (Blizzard Entertainment), nelle tre versioni lette. */
const ARTICLE = "https://news.blizzard.com/en-us/article/24302546";
const ARTICLE_IT = "https://news.blizzard.com/it-it/article/24302546";
const ARTICLE_ES = "https://news.blizzard.com/es-es/article/24302546";
/** Known Issues della beta, punti nuovi dell'8 ottobre 2026 (post #7, 21:38 UTC, forum ufficiale US). */
const KNOWN_ISSUES_OCT_8 = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-known-issues-october-8/2352687/7";

const item: NewsItem = {
  slug: "skyborne-visual-updates-standard-definition",
  date: "2026-10-07",
  source: "blizzard",
  topic: "news",
  url: ARTICLE,
  image: media.skyborne.src,
  imageAlt: media.skyborne.alt,
  guides: ["wow-forever-races-classes", "wow-forever-editions-prices"],
  title: n(
    "WoW Forever: Skyborne Druid forms reworked in HD, Standard Definition Skyborne models coming in early 2027",
    "WoW Forever: forme da Druido Skyborne riviste in HD, gli Skyborne in definizione standard a inizio 2027",
    "WoW Forever: Blizzard retoca las formas de druida de los célicos en HD y los célicos en SD llegan en 2027",
  ),
  metaTitle: n("WoW Forever: SD Skyborne models in early 2027", "WoW Forever: Skyborne in SD a inizio 2027", "WoW Forever: célicos en SD a principios de 2027"),
  summary: n(
    "On 7 October Blizzard explained how it is reworking the look of the Skyborne in WoW Forever. The HD Druid forms are getting less softness, more detailed fur and adjusted saturation, and Standard Definition Skyborne models, Druid forms included, are in development for early 2027.",
    "Il 7 ottobre Blizzard ha spiegato come sta rivedendo l'aspetto degli Skyborne in WoW Forever. Le forme da Druido in HD perdono un po' di morbidezza e guadagnano una pelliccia più dettagliata, e i modelli Skyborne in definizione standard, forme da Druido comprese, sono in sviluppo per l'inizio del 2027.",
    "El 7 de octubre Blizzard explicó cómo está revisando el aspecto de los célicos en WoW Forever. Las formas de druida en HD pierden algo de suavidad y ganan un pelaje más detallado, y los modelos célicos en definición estándar, formas de druida incluidas, están en desarrollo para principios de 2027.",
  ),
  description: n(
    "WoW Forever: Blizzard is reworking the HD Druid forms of the Skyborne, and Standard Definition Skyborne models, Druid forms included, arrive in early 2027.",
    "WoW Forever: Blizzard rivede le forme da Druido Skyborne in HD; gli Skyborne in definizione standard, forme da Druido comprese, arrivano a inizio 2027.",
    "WoW Forever: Blizzard retoca en HD las formas de druida de los célicos, y los célicos en SD llegarán a principios de 2027 con sus formas de druida.",
  ),
  highlights: {
    en: [
      { label: "HD Druid forms", text: "less softness, more detailed fur, adjusted saturation", anchor: "hd-druid" },
      { label: "Standard Definition Skyborne", text: "in development, Druid forms included, arriving in early 2027", anchor: "sd" },
      { label: "In the beta", text: "new textures for the bear and travel forms since 8 October", anchor: "beta" },
      { label: "Still unknown", text: "the exact date of the SD models", anchor: "unknown" },
    ],
    it: [
      { label: "Forme da Druido in HD", text: "meno morbidezza, pelliccia più dettagliata, saturazione ritoccata", anchor: "druido-hd" },
      { label: "Skyborne in definizione standard", text: "in sviluppo, forme da Druido comprese, in arrivo a inizio 2027", anchor: "sd" },
      { label: "Nella beta", text: "texture nuove per le forme d'orso e di viaggio dall'8 ottobre", anchor: "beta" },
      { label: "Ancora da sapere", text: "la data precisa dei modelli SD", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Formas de druida en HD", text: "menos suavidad, pelaje más detallado, saturación ajustada", anchor: "druida-hd" },
      { label: "Célicos en definición estándar", text: "en desarrollo, formas de druida incluidas, llegan a principios de 2027", anchor: "sd" },
      { label: "En la beta", text: "texturas nuevas para las formas de oso y de viaje desde el 8 de octubre", anchor: "beta" },
      { label: "Aún por saber", text: "la fecha exacta de los modelos SD", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `On 7 October 2026 Blizzard published "World of Warcraft: Forever - The Future of Skyborne Visual Updates", a short article from the development team on the look of the new race. The aim, the team writes, has always been to keep the aesthetic of the original WoW era while giving players more choice in how they experience Azeroth, and some ideas tried along the way did not reach the consistency the team wants. The article brings two pieces of news: the HD Druid forms of the Skyborne are being reworked, and Standard Definition Skyborne models are on the way.

## Who the Skyborne are {#skyborne}

The Skyborne are the only new playable race of Forever: High Elf exiles who can join either faction, the Windshaper with the Horde and the High Order with the Alliance. Both can be Druids, with druid forms of their own, and they start on Zephras Isle. According to the legal notes of the shop, they require the Skyborne Heroic Pack or higher. More in our [guide to races and classes](/en/guides/wow-forever-races-classes) and in [editions and prices](/en/guides/wow-forever-editions-prices).

## HD Druid forms reworked {#hd-druid}

The first example in the article is the High Definition (HD) Skyborne Druid forms. Blizzard removed a bit of the softness, added more detailed fur textures and adjusted the color saturation. The Skyborne come from an exotic environment and their Druid forms show it, the team explains, but they should not clash with the visual language of the other creatures in the world. The article shows the new versions in its images.

## Skyborne in Standard Definition, early 2027 {#sd}

Forever lets you switch player characters between Standard Definition (SD) and HD models. Blizzard explains that it built that choice around the races of the original World of Warcraft, because many players are attached to those models, so the Skyborne only exist in HD. Players said that HD Skyborne can look jarring next to SD models and an SD world, and Blizzard agrees.

The answer, in the article's words: "Skyborne player characters (and yes SD Druid forms) are in development and arriving early 2027." Blizzard promises more details closer to that date and shows an early work-in-progress image. Since Forever launches in November 2026 (see our [release date guide](/en/guides/wow-forever-release-date)), the SD models are scheduled for after launch.

## What is already in the beta {#beta}

The day after, in the [Known Issues of 8 October](${KNOWN_ISSUES_OCT_8}), Blizzard wrote that the new textures for the Skyborne Druid bear and travel forms are in the beta, while those for the cat form, various creatures of Zephras Isle and some mounts, pets and other creatures will arrive in a future build. The update is also on our [beta changes page](/en/changes).

## What we don't know yet {#unknown}

- The exact date of the SD models: Blizzard only says "early 2027".
- Whether the SD Skyborne will work with the same SD or HD toggle as the other races: the article does not say how they will be selected.
- Which build will bring the new cat form textures, and whether other Skyborne visuals will change: the article calls this "just the start".`,
    `Il 7 ottobre 2026 Blizzard ha pubblicato "[World of Warcraft: Forever - Il futuro degli aggiornamenti visivi degli Skyborne](${ARTICLE_IT})", un breve articolo del team di sviluppo sull'aspetto della nuova razza. L'obiettivo, scrive il team, è sempre stato conservare l'estetica dell'epoca del WoW originale lasciando più scelta su come vivere Azeroth, e alcune idee provate lungo la strada non hanno raggiunto la coerenza che il team cerca. Le novità sono due: le forme da Druido Skyborne in HD vengono riviste, e arrivano i modelli Skyborne in definizione standard.

## Chi sono gli Skyborne {#skyborne}

Gli Skyborne sono l'unica razza giocabile nuova di Forever: esuli Alti Elfi che possono unirsi a tutte e due le fazioni, i Windshaper con l'Orda e gli High Order con l'Alleanza. Tutti e due possono essere Druidi, con forme druidiche proprie, e partono da Zephras Isle. Secondo le note legali del negozio richiedono il Pacchetto Heroic Skyborne o superiore. Di più nella nostra [guida a razze e classi](/it/guides/wow-forever-races-classes) e in [edizioni e prezzi](/it/guides/wow-forever-editions-prices).

## Forme da Druido in HD riviste {#druido-hd}

Il primo esempio dell'articolo sono le forme da Druido Skyborne in alta definizione (HD). Blizzard ha tolto un po' di morbidezza, aggiunto texture della pelliccia più dettagliate e ritoccato la saturazione dei colori. Gli Skyborne vengono da un ambiente esotico e le loro forme da Druido lo mostrano, spiega il team, ma non devono stonare con il linguaggio visivo delle altre creature del mondo. Le nuove versioni si vedono nelle immagini dell'articolo.

## Skyborne in definizione standard, inizio 2027 {#sd}

Forever permette di passare dai modelli in definizione standard (SD) a quelli in HD per i personaggi. Blizzard spiega di aver costruito questa scelta intorno alle razze del World of Warcraft originale, perché molti giocatori sono legati a quei modelli: per questo gli Skyborne esistono solo in HD. Nei feedback è emerso che gli Skyborne in HD possono stonare accanto ai modelli e al mondo in SD, e Blizzard è d'accordo.

La risposta: i personaggi giocanti Skyborne in SD, e anche le forme da Druido in SD, sono in sviluppo e arriveranno all'inizio del 2027. Blizzard promette altri dettagli più avanti e mostra un'immagine preliminare dei lavori in corso. Visto che Forever esce a novembre 2026 (vedi la [guida alla data di uscita](/it/guides/wow-forever-release-date)), i modelli SD sono previsti dopo il lancio.

## Cosa c'è già nella beta {#beta}

Il giorno dopo, nei [Known Issues dell'8 ottobre](${KNOWN_ISSUES_OCT_8}), Blizzard ha scritto che nella beta ci sono le texture nuove delle forme d'orso e di viaggio del Druido Skyborne, mentre quelle della forma felina (Cat Form), di varie creature di Zephras Isle e di alcune cavalcature, mascotte e altre creature arriveranno in una build futura. La modifica è anche nella nostra [pagina delle modifiche della beta](/it/changes).

## Cosa non sappiamo ancora {#non-sappiamo}

- La data precisa dei modelli SD: Blizzard dice solo "inizio del 2027".
- Se gli Skyborne in SD useranno la stessa opzione SD o HD delle altre razze: l'articolo non spiega come si sceglieranno.
- In quale build arriveranno le texture nuove della forma felina e se cambieranno altri elementi visivi degli Skyborne: l'articolo dice che questo è "solo l'inizio".`,
    `El 7 de octubre de 2026 Blizzard publicó "[World of Warcraft: Forever: El futuro de las actualizaciones visuales de los cielonatos](${ARTICLE_ES})", un breve artículo del equipo de desarrollo sobre el aspecto de la nueva raza. En este artículo, la versión en español de España los llama "cielonatos"; en el resto de sus textos, y en ForeverMeta, son los célicos (consulta el [glosario](/es/glossary)). El objetivo, escribe el equipo, siempre ha sido conservar la estética de la era del WoW original y ofrecer más opciones a la hora de descubrir Azeroth, y algunas ideas que probaron por el camino no alcanzaron la coherencia que buscan. Las novedades son dos: se revisan las formas de druida de los célicos en HD y llegan los modelos célicos en definición estándar.

## Quiénes son los célicos {#celicos}

Los célicos son la única raza jugable nueva de Forever: altos elfos exiliados que pueden unirse a cualquiera de las dos facciones, los Formaviento con la Horda y los de la Orden Eminente con la Alianza. Ambos pueden ser druidas, con formas de druida propias, y empiezan en la Isla de Zephras. Según las notas legales de la tienda, requieren el Pack Heroic de los célicos o superior. Más en nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes) y en [ediciones y precios](/es/guides/wow-forever-editions-prices).

## Formas de druida en HD revisadas {#druida-hd}

El primer ejemplo del artículo son las formas de druida de los célicos en alta definición (HD). Blizzard ha reducido un poco la suavidad, ha añadido texturas de pelaje más detalladas y ha ajustado la saturación de color. Los célicos proceden de un entorno exótico y sus formas de druida lo reflejan, explica el equipo, pero no deben desentonar con el lenguaje visual de las demás criaturas del mundo. Las nuevas versiones se ven en las imágenes del artículo.

## Célicos en definición estándar, principios de 2027 {#sd}

Forever permite alternar entre modelos en definición estándar (SD) y en HD para los personajes. Blizzard explica que construyó esa opción alrededor de las razas del World of Warcraft original, porque mucha gente les tiene cariño a esos modelos, así que los célicos solo existen en HD. Los jugadores han comentado que los célicos en HD pueden chocar junto a los modelos y el mundo en SD, y Blizzard está de acuerdo.

La respuesta: los personajes célicos en SD, y también sus formas de druida en SD, están en desarrollo y llegarán a principios de 2027. Blizzard promete más información cuando se acerque la fecha y muestra una imagen preliminar del trabajo en curso. Como Forever sale en noviembre de 2026 (consulta la [guía de la fecha de lanzamiento](/es/guides/wow-forever-release-date)), los modelos SD están previstos para después del lanzamiento.

## Lo que ya está en la beta {#beta}

Al día siguiente, en los [Known Issues del 8 de octubre](${KNOWN_ISSUES_OCT_8}), Blizzard escribió que en la beta ya están las texturas nuevas de las formas de oso y de viaje del druida célico, mientras que las de la forma felina (Cat Form), varias criaturas de la Isla de Zephras y algunas monturas, mascotas y otras criaturas llegarán en una build futura. El cambio también está en nuestra [página de cambios de la beta](/es/changes).

## Lo que aún no sabemos {#no-sabemos}

- La fecha exacta de los modelos SD: Blizzard solo dice "principios de 2027".
- Si los célicos en SD usarán la misma opción SD o HD que las demás razas: el artículo no explica cómo se elegirán.
- En qué build llegarán las texturas nuevas de la forma felina y si cambiarán otros elementos visuales de los célicos: el artículo dice que esto es "solo el comienzo".`,
  ),
  faq: {
    en: [
      {
        q: "Will the Skyborne have Standard Definition models at the launch of WoW Forever?",
        a: "No. Blizzard says SD Skyborne player characters, Druid forms included, are in development and arriving in early 2027, after the November 2026 launch.",
      },
      {
        q: "What changes in the HD Skyborne Druid forms?",
        a: "Less softness, more detailed fur textures and adjusted color saturation, so they fit better with the other creatures of the world. In the beta the bear and travel forms already have the new textures; the cat form will follow in a future build.",
      },
    ],
    it: [
      {
        q: "Al lancio di WoW Forever gli Skyborne avranno i modelli in definizione standard?",
        a: "No. Blizzard dice che i personaggi Skyborne in SD, forme da Druido comprese, sono in sviluppo e arriveranno all'inizio del 2027, dopo il lancio di novembre 2026.",
      },
      {
        q: "Che cosa cambia nelle forme da Druido Skyborne in HD?",
        a: "Meno morbidezza, texture della pelliccia più dettagliate e saturazione dei colori ritoccata, per stare meglio accanto alle altre creature del mondo. Nella beta le forme d'orso e di viaggio hanno già le texture nuove; la forma felina arriverà in una build futura.",
      },
    ],
    es: [
      {
        q: "¿Tendrán los célicos modelos en definición estándar en el lanzamiento de WoW Forever?",
        a: "No. Blizzard dice que los personajes célicos en SD, formas de druida incluidas, están en desarrollo y llegarán a principios de 2027, después del lanzamiento de noviembre de 2026.",
      },
      {
        q: "¿Qué cambia en las formas de druida de los célicos en HD?",
        a: "Menos suavidad, texturas de pelaje más detalladas y saturación de color ajustada, para que encajen mejor con las demás criaturas del mundo. En la beta, las formas de oso y de viaje ya tienen las texturas nuevas; la forma felina llegará en una build futura.",
      },
    ],
  },
};

export default item;

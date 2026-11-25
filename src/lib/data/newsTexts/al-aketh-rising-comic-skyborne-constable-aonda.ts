import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Fumetto ufficiale "Al'Aketh Rising": articolo Blizzard 24317680 del 24/11/2026 18:00 UTC (datePublished), annunciato
 * sul forum US (topic 2427978, BlizzardEntertainment, 18:03 UTC) e sul forum EU (topic 645664). Motion comic sul canale
 * YouTube World of Warcraft (hlsH0ivB-6c, 6:17) e PDF di 12 pagine. Crediti dall'articolo e dalla descrizione del video:
 * Sam Slade (lettura, voce di Constable Aonda), Robert Brooks (testi), Stefano Porcu (disegni e copertina), Mauro Gulma
 * (colori), AndWorld Design (lettering). La trama qui è solo la presentazione di Blizzard, con parole nostre: il PDF è
 * fatto di immagini e i sottotitoli del video hanno solo effetti sonori e la chiusura del narratore. Chi siano gli
 * Al'Aketh e se il fumetto anticipi contenuti in gioco Blizzard non lo dice (non verificato). Pagine es-es ("La ascensión
 * de los Al'Aketh") ed es-mx ("El ascenso de Al'Aketh") esistono, it-it dà 404 (25/11). Letto il 25/11/2026.
 */
const ARTICLE = "https://news.blizzard.com/en-us/article/24317680/dont-miss-the-world-of-warcraft-forever-comic-al-aketh-rising";
const ARTICLE_ES =
  "https://news.blizzard.com/es-es/article/24317680/no-te-pierdas-el-comic-la-ascension-de-los-al-aketh-de-world-of-warcraft-forever";
const VIDEO = "https://www.youtube.com/watch?v=hlsH0ivB-6c";
const PDF = "https://bnetcmsus-a.akamaihd.net/cms/template_resource/V9MYNN200O731793636709095.pdf";
/** PDF della pagina es-es: tradotto (in copertina il titolo "La ascensión de los Al'Aketh"); la pagina es-mx ne ha un altro. */
const PDF_ES = "https://bnetcmsus-a.akamaihd.net/cms/template_resource/ASNNA9W63PUW1793636713764.pdf";

const item: NewsItem = {
  slug: "al-aketh-rising-comic-skyborne-constable-aonda",
  date: "2026-11-24",
  source: "blizzard",
  topic: "news",
  url: ARTICLE,
  image: media.newsAlAkethComic.src,
  imageAlt: media.newsAlAkethComic.alt,
  guides: ["wow-forever-races-classes", "wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever comic Al'Aketh Rising: a Skyborne constable, a motion comic and a free PDF",
    "Fumetto di WoW Forever Al'Aketh Rising: una guardia Skyborne, un motion comic e un PDF gratuito",
    "Cómic de WoW Forever Al'Aketh Rising: una agente célica, un cómic animado y un PDF gratuito",
  ),
  metaTitle: n(
    "WoW Forever comic: Al'Aketh Rising",
    "Fumetto di WoW Forever: Al'Aketh Rising",
    "Cómic de WoW Forever: Al'Aketh Rising",
  ),
  summary: n(
    "On 24 November 2026 Blizzard published Al'Aketh Rising, a free World of Warcraft: Forever comic about Constable Aonda of the Skyborne. It comes as a motion comic of about six minutes on YouTube, read by Sam Slade, and as a 12-page PDF. Robert Brooks wrote it and Stefano Porcu drew it. Aonda goes into a remote settlement under strict control and plays along to find out what threat is growing there.",
    "Il 24 novembre 2026 Blizzard ha pubblicato Al'Aketh Rising, un fumetto gratuito di World of Warcraft: Forever su Constable Aonda, guardia degli Skyborne. Esce come motion comic di circa sei minuti su YouTube, letto da Sam Slade, e come PDF di 12 pagine, in inglese. L'ha scritto Robert Brooks e disegnato Stefano Porcu. Aonda entra in un insediamento isolato e sorvegliato e sta al gioco per capire quale minaccia vi stia crescendo.",
    "El 24 de noviembre de 2026 Blizzard publicó Al'Aketh Rising, un cómic gratuito de World of Warcraft: Forever sobre la agente Aonda, de los célicos. Sale como cómic animado de unos seis minutos en YouTube, leído por Sam Slade, y como PDF de 12 páginas, traducido al español. Lo escribió Robert Brooks y lo dibujó Stefano Porcu. Aonda entra en un asentamiento aislado y vigilado y le sigue el juego a todos para averiguar qué amenaza crece allí.",
  ),
  description: n(
    "Al'Aketh Rising, the free WoW Forever comic of 24 November: Constable Aonda of the Skyborne, a six-minute motion comic, the PDF and the credits.",
    "Al'Aketh Rising, il fumetto gratuito di WoW Forever del 24 novembre: Constable Aonda degli Skyborne, il motion comic di sei minuti, il PDF e i crediti.",
    "Al'Aketh Rising, el cómic gratuito de WoW Forever del 24 de noviembre: la agente célica Aonda, el cómic animado de seis minutos, el PDF y los créditos.",
  ),
  highlights: {
    en: [
      { label: "The story", text: "a Skyborne constable inside a settlement under strict control", anchor: "story" },
      { label: "Where to read it", text: "a six-minute motion comic on YouTube and a 12-page PDF", anchor: "where" },
      { label: "Who made it", text: "Robert Brooks, Stefano Porcu, Mauro Gulma, read by Sam Slade", anchor: "credits" },
      { label: "What Blizzard does not say", text: "who the Al'Aketh are and whether the story reaches the game", anchor: "unknowns" },
    ],
    it: [
      { label: "La storia", text: "una guardia Skyborne dentro un insediamento sotto stretto controllo", anchor: "storia" },
      { label: "Dove leggerlo", text: "un motion comic di sei minuti su YouTube e un PDF di 12 pagine", anchor: "dove" },
      { label: "Chi l'ha fatto", text: "Robert Brooks, Stefano Porcu, Mauro Gulma, letto da Sam Slade", anchor: "crediti" },
      { label: "Cosa Blizzard non dice", text: "chi siano gli Al'Aketh e se la storia arriverà in gioco", anchor: "cosa-non-dice" },
    ],
    es: [
      { label: "La historia", text: "una agente célica dentro de un asentamiento bajo estricto control", anchor: "historia" },
      { label: "Dónde leerlo", text: "un cómic animado de seis minutos en YouTube y un PDF de 12 páginas", anchor: "donde" },
      { label: "Quién lo hizo", text: "Robert Brooks, Stefano Porcu, Mauro Gulma, leído por Sam Slade", anchor: "creditos" },
      { label: "Lo que Blizzard no dice", text: "quiénes son los Al'Aketh y si la historia llegará al juego", anchor: "lo-que-no-dice" },
    ],
  },
  body: n(
    `On Tuesday 24 November 2026 at 18:00 UTC (19:00 CET) Blizzard published [Al'Aketh Rising](${ARTICLE}), a new World of Warcraft: Forever comic, and announced it on the official forums. It is free and comes in two versions: a motion comic on YouTube and a PDF to download. It is the second piece of Forever fiction in a few weeks, after the short story Cost of Honor of 13 November, covered in our [article on podcast episodes 7 and 8](/en/news/podcast-episodes-7-8-lore-classes).

## The story {#story}

The main character is Constable Aonda, a Skyborne, the new race of WoW Forever. In Blizzard's presentation she travels to a remote settlement that seems to live under strict control: prisoners marched under guard, strangers smiling with unsettling conviction, a silence that hides a growing threat. To get closer to the truth she plays along, and ends up caught between hidden agendas and fanatical devotion. Blizzard sums it up with one line: in a land ruled by wind, blind devotion can turn into a storm. We do not tell the ending: the comic is short and worth reading as it is.

## Where to read or watch it {#where}

- **[Motion comic on YouTube](${VIDEO})**: about 6 minutes, the panels animated with music, sound effects and the reading of the dialogue. It closes with the narrator inviting viewers to continue the journey in WoW Forever.
- **[PDF](${PDF})**: the same comic in 12 pages, linked from the article and from the video description. It is about 18 MB.

The motion comic is in English. Blizzard also published the article in Spanish, with the titles "La ascensión de los Al'Aketh" (Spain) and "El ascenso de Al'Aketh" (Latin America), each with its own translated PDF.

## Who made it {#credits}

- **Story**: Robert Brooks
- **Art and cover**: Stefano Porcu
- **Colors**: Mauro Gulma
- **Letters**: AndWorld Design
- **Reading**: Sam Slade as Constable Aonda

## What Blizzard does not say {#unknowns}

The article and the video do not say who the Al'Aketh are, where exactly the settlement is, or whether the story leads into content coming to the game. We do not guess. If you want to know more about the Skyborne, their island and their racial abilities, start with our [races and classes guide](/en/guides/wow-forever-races-classes); Zephras Isle, their starting zone, is in the [zones, dungeons and raids guide](/en/guides/wow-forever-zones-dungeons-raids).`,
    `Martedì 24 novembre 2026 alle 18:00 UTC (le 19:00 in Italia) Blizzard ha pubblicato [Al'Aketh Rising](${ARTICLE}) (solo in inglese), un nuovo fumetto di World of Warcraft: Forever, annunciato anche sui forum ufficiali. È gratuito ed esce in due versioni: un motion comic su YouTube e un PDF da scaricare. È il secondo racconto di Forever in poche settimane, dopo il racconto breve Cost of Honor del 13 novembre, di cui parliamo nell'[articolo sugli episodi 7 e 8 del podcast](/it/news/podcast-episodes-7-8-lore-classes).

## La storia {#storia}

La protagonista è Constable Aonda, una guardia degli Skyborne, la nuova razza di WoW Forever. Nella presentazione di Blizzard, Aonda raggiunge un insediamento isolato che sembra vivere sotto un controllo rigidissimo: prigionieri in marcia sotto scorta, sconosciuti che sorridono con una convinzione inquietante, un silenzio che copre una minaccia in crescita. Per avvicinarsi alla verità sta al gioco, e finisce stretta fra secondi fini e devozione fanatica. Blizzard lo riassume con una frase: in una terra governata dal vento, la devozione cieca può diventare una tempesta. Il finale non lo raccontiamo: il fumetto è breve e vale la pena leggerlo così com'è.

## Dove leggerlo o guardarlo {#dove}

- **[Motion comic su YouTube](${VIDEO})**: circa 6 minuti, con le tavole animate, musica, effetti sonori e la lettura dei dialoghi. Si chiude con il narratore che invita a continuare il viaggio in WoW Forever.
- **[PDF](${PDF})**: lo stesso fumetto in 12 pagine, linkato dall'articolo e dalla descrizione del video. Pesa circa 18 MB.

Non c'è una versione italiana: il motion comic e il PDF sono in inglese. Blizzard ha pubblicato l'articolo anche in spagnolo, con i titoli "La ascensión de los Al'Aketh" (Spagna) ed "El ascenso de Al'Aketh" (America Latina), ciascuno con il suo PDF tradotto.

## Chi l'ha fatto {#crediti}

- **Testi**: Robert Brooks
- **Disegni e copertina**: Stefano Porcu
- **Colori**: Mauro Gulma
- **Lettering**: AndWorld Design
- **Lettura**: Sam Slade nella parte di Constable Aonda

## Cosa Blizzard non dice {#cosa-non-dice}

L'articolo e il video non dicono chi siano gli Al'Aketh, dove si trovi di preciso l'insediamento, né se la storia porti a contenuti in arrivo nel gioco. Noi non tiriamo a indovinare. Per saperne di più sugli Skyborne, sulla loro isola e sulle loro abilità razziali si parte dalla nostra [guida a razze e classi](/it/guides/wow-forever-races-classes); Zephras Isle, la loro zona di partenza, è nella [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).`,
    `El martes 24 de noviembre de 2026 a las 18:00 UTC (19:00 en la España peninsular) Blizzard publicó [La ascensión de los Al'Aketh](${ARTICLE_ES}) (título original, Al'Aketh Rising), un nuevo cómic de World of Warcraft: Forever, y lo anunció en los foros oficiales. Es gratuito y sale en dos versiones: un cómic animado en YouTube y un PDF para descargar, también en español. Es la segunda historia de Forever en pocas semanas, después del relato breve Cost of Honor del 13 de noviembre, del que hablamos en nuestro [artículo sobre los episodios 7 y 8 del pódcast](/es/news/podcast-episodes-7-8-lore-classes).

## La historia {#historia}

La protagonista es la agente Aonda (Constable Aonda en inglés), de los célicos, la nueva raza de WoW Forever. Según la presentación de Blizzard, Aonda llega a un asentamiento remoto que parece vivir bajo un control estricto: prisioneros que marchan escoltados, desconocidos que sonríen con una convicción inquietante y un silencio que oculta una amenaza creciente. Para acercarse a la verdad le sigue el juego a todos, y acaba atrapada entre intenciones ocultas y una devoción fanática. Blizzard lo resume en una frase: en una tierra gobernada por el viento, la devoción ciega puede convertirse en tormenta. No contamos el final: el cómic es corto y merece la pena leerlo tal cual.

## Dónde leerlo o verlo {#donde}

- **[Cómic animado en YouTube](${VIDEO})**: unos 6 minutos, con las viñetas animadas, música, efectos de sonido y la lectura de los diálogos. Termina con el narrador invitando a seguir el viaje en WoW Forever.
- **[PDF en español](${PDF_ES})**: el mismo cómic en 12 páginas, traducido, enlazado desde el artículo en español. Pesa unos 17 MB. La versión latinoamericana, «El ascenso de Al'Aketh», tiene su propio PDF en la página de Blizzard para México.

El cómic animado de YouTube está en inglés.

## Quién lo hizo {#creditos}

- **Guion**: Robert Brooks
- **Dibujo y portada**: Stefano Porcu
- **Color**: Mauro Gulma
- **Rotulación**: AndWorld Design
- **Lectura**: Sam Slade como la agente Aonda

## Lo que Blizzard no dice {#lo-que-no-dice}

El artículo y el vídeo no dicen quiénes son los Al'Aketh, dónde está exactamente el asentamiento ni si la historia lleva a contenido que vaya a llegar al juego. No hacemos conjeturas. Si quieres saber más de los célicos, de su isla y de sus habilidades raciales, empieza por nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes); Zephras Isle, su zona de inicio, está en la [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).`,
  ),
  faq: {
    en: [
      {
        q: "What is Al'Aketh Rising in WoW Forever?",
        a: "A free World of Warcraft: Forever comic published by Blizzard on 24 November 2026. It follows Constable Aonda of the Skyborne into a remote settlement under strict control, where she plays along to uncover a growing threat.",
      },
      {
        q: "Where can I read the Al'Aketh Rising comic?",
        a: "On Blizzard's news site, as a motion comic of about six minutes on the World of Warcraft YouTube channel, or as a 12-page PDF linked from the article. Both are free and in English.",
      },
      {
        q: "Who wrote and drew Al'Aketh Rising?",
        a: "Robert Brooks wrote it, Stefano Porcu drew the art and the cover, Mauro Gulma did the colors and AndWorld Design the letters. Sam Slade reads Constable Aonda in the motion comic.",
      },
      {
        q: "Who are the Al'Aketh?",
        a: "Blizzard has not said. The article and the video only present the story; they do not explain who the Al'Aketh are or whether the comic leads into content coming to the game.",
      },
    ],
    it: [
      {
        q: "Che cos'è Al'Aketh Rising di WoW Forever?",
        a: "Un fumetto gratuito di World of Warcraft: Forever pubblicato da Blizzard il 24 novembre 2026. Segue Constable Aonda, guardia degli Skyborne, in un insediamento isolato sotto stretto controllo, dove sta al gioco per scoprire una minaccia in crescita.",
      },
      {
        q: "Dove si legge il fumetto Al'Aketh Rising?",
        a: "Sul sito delle news di Blizzard, come motion comic di circa sei minuti sul canale YouTube di World of Warcraft, oppure come PDF di 12 pagine linkato dall'articolo. Sono gratuiti e in inglese.",
      },
      {
        q: "Chi ha scritto e disegnato Al'Aketh Rising?",
        a: "I testi sono di Robert Brooks, disegni e copertina di Stefano Porcu, i colori di Mauro Gulma e il lettering di AndWorld Design. Nel motion comic Sam Slade legge la parte di Constable Aonda.",
      },
      {
        q: "Chi sono gli Al'Aketh?",
        a: "Blizzard non l'ha detto. L'articolo e il video presentano solo la storia; non spiegano chi siano gli Al'Aketh né se il fumetto porti a contenuti in arrivo nel gioco.",
      },
    ],
    es: [
      {
        q: "¿Qué es Al'Aketh Rising de WoW Forever?",
        a: "Un cómic gratuito de World of Warcraft: Forever publicado por Blizzard el 24 de noviembre de 2026. Sigue a la agente Aonda, de los célicos, en un asentamiento remoto bajo estricto control, donde le sigue el juego a todos para descubrir una amenaza creciente.",
      },
      {
        q: "¿Dónde se puede leer el cómic Al'Aketh Rising?",
        a: "En la web de noticias de Blizzard, como cómic animado de unos seis minutos en el canal de YouTube de World of Warcraft, o como PDF de 12 páginas enlazado desde el artículo, que en la versión española está traducido. El cómic animado está en inglés.",
      },
      {
        q: "¿Quién escribió y dibujó Al'Aketh Rising?",
        a: "El guion es de Robert Brooks, el dibujo y la portada de Stefano Porcu, el color de Mauro Gulma y la rotulación de AndWorld Design. En el cómic animado Sam Slade lee el papel de la agente Aonda.",
      },
      {
        q: "¿Quiénes son los Al'Aketh?",
        a: "Blizzard no lo ha dicho. El artículo y el vídeo solo presentan la historia; no explican quiénes son los Al'Aketh ni si el cómic lleva a contenido que vaya a llegar al juego.",
      },
    ],
  },
};

export default item;

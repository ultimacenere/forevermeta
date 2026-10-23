import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Episodio 5 del WoW: Forever Podcast, "End of Beta Special", pubblicato da Blizzard il 22 ottobre 2026 (articolo
 * "Dive into the End of Beta Special!", video sul canale YouTube World of Warcraft, ID uOlxa3xvNq4). Blizzard non ha
 * pubblicato una trascrizione: le citazioni qui sotto sono quelle riportate da Wowhead e Icy Veins il 22 ottobre, e la
 * news lo dice. Da riascoltare sul video prima di darle per verificate.
 */
const ARTICLE = "https://news.blizzard.com/en-us/article/24302577/dive-into-the-end-of-beta-special";
const VIDEO = "https://www.youtube.com/watch?v=uOlxa3xvNq4";

const item: NewsItem = {
  slug: "podcast-episode-5-end-of-beta-special",
  date: "2026-10-22",
  source: "blizzard",
  topic: "news",
  url: ARTICLE,
  image: media.hyjal.src,
  imageAlt: media.hyjal.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-legacy-system"],
  title: n(
    "WoW Forever podcast, episode 5: Molten Core gets new mechanics, how raids are designed, and the show goes on",
    "Podcast di WoW Forever, episodio 5: Molten Core cambia, come si progettano i raid e lo show continua",
    "Pódcast de WoW Forever, episodio 5: Molten Core cambia, cómo se diseñan las bandas y el programa sigue",
  ),
  metaTitle: n("WoW Forever podcast 5: Molten Core and the raids", "WoW Forever, podcast 5: Molten Core e i raid", "WoW Forever, pódcast 5: Molten Core y las bandas"),
  summary: n(
    "On 22 October 2026 Blizzard published the fifth episode of the WoW Forever Podcast, an end-of-beta special with Josh \"Aggrend\" Greenfield, Clay Stone, Ana Resendez and Michael Nuthals. The news reported by fan sites: Molten Core will not be the raid everyone already knows, the new raids aim at \"beer and pretzels\" difficulty, and the podcast will continue after the beta.",
    "Il 22 ottobre 2026 Blizzard ha pubblicato il quinto episodio del podcast di WoW Forever, uno speciale di fine beta con Josh \"Aggrend\" Greenfield, Clay Stone, Ana Resendez e Michael Nuthals. Le novità riportate dai siti fan: Molten Core non sarà il raid che tutti conoscono già, i raid nuovi puntano a una difficoltà \"da birra e salatini\", e il podcast continuerà dopo la beta.",
    "El 22 de octubre de 2026 Blizzard publicó el quinto episodio del pódcast de WoW Forever, un especial de fin de beta con Josh \"Aggrend\" Greenfield, Clay Stone, Ana Resendez y Michael Nuthals. Las novedades que recogen las webs de fans: Molten Core no será la banda que todos conocen ya, las bandas nuevas apuntan a una dificultad \"de cerveza y pretzels\", y el pódcast seguirá tras la beta.",
  ),
  description: n(
    "WoW Forever Podcast episode 5 (22 October 2026): Molten Core with new mechanics, Michael Nuthals on raid design and difficulty, and a show that continues.",
    "Episodio 5 del podcast di WoW Forever (22 ottobre 2026): Molten Core con meccaniche nuove, Michael Nuthals su raid e difficoltà, e uno show che continua.",
    "Episodio 5 del pódcast de WoW Forever (22 de octubre de 2026): Molten Core con mecánicas nuevas, Nuthals sobre bandas y dificultad, y un programa que sigue.",
  ),
  highlights: {
    en: [
      { label: "Four Blizzard guests", text: "design, production, engineering and encounters", anchor: "guests" },
      { label: "Molten Core", text: "\"not just tank and spank Golemagg\", says Aggrend", anchor: "molten-core" },
      { label: "Raid design", text: "\"beer and pretzels\", playtests and three bosses teased", anchor: "raids" },
      { label: "The podcast continues", text: "five episodes were planned, more are coming", anchor: "continues" },
      { label: "A caveat", text: "the quotes come from fan sites, not from a transcript", anchor: "unknown" },
    ],
    it: [
      { label: "Quattro ospiti Blizzard", text: "design, produzione, ingegneria e scontri", anchor: "ospiti" },
      { label: "Molten Core", text: "\"non solo tank and spank su Golemagg\", dice Aggrend", anchor: "molten-core" },
      { label: "Progettare i raid", text: "\"birra e salatini\", playtest e tre boss anticipati", anchor: "raid" },
      { label: "Il podcast continua", text: "erano previste cinque puntate, ne arrivano altre", anchor: "continua" },
      { label: "Un'avvertenza", text: "le citazioni vengono dai siti fan, non da una trascrizione", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Cuatro invitados de Blizzard", text: "diseño, producción, ingeniería y encuentros", anchor: "invitados" },
      { label: "Molten Core", text: "\"no solo tank and spank a Golemagg\", dice Aggrend", anchor: "molten-core" },
      { label: "Diseño de bandas", text: "\"cerveza y pretzels\", pruebas y tres jefes adelantados", anchor: "bandas" },
      { label: "El pódcast sigue", text: "estaban previstos cinco episodios, vienen más", anchor: "sigue" },
      { label: "Una advertencia", text: "las citas vienen de webs de fans, no de una transcripción", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `On 22 October 2026 Blizzard published [Dive into the End of Beta Special!](${ARTICLE}), the fifth episode of the WoW: Forever Podcast, on the [World of Warcraft YouTube channel](${VIDEO}). It was planned as the last one, timed with the end of the beta on 23 October. Blizzard's article only lists the guests; what was said in the episode has been reported by Wowhead and Icy Veins, and that is where the quotes below come from. We have not transcribed the video yet.

## Who is on the episode {#guests}

The host is Countdown To Classic, with Meeix as guest. From Blizzard: **Josh "Aggrend" Greenfield**, Senior Game Designer; **Clay Stone**, Associate Production Director; **Ana Resendez**, Lead Software Engineer; **Michael Nuthals**, Lead Encounter Designer. Blizzard's summary says the episode gives "insights from the development team about the beta" and the launch on 4 November.

## Molten Core will not be "tank and spank" {#molten-core}

According to Wowhead, Greenfield confirmed that the old raids will have mechanics players do not know. Asked whether Molten Core will be the raid everyone has already solved, he answered that it is "probably safe to say you're not just going to stand there and tank and spank Golemagg", adding that at BlizzCon the team had used the words "revamped" or "reimagined". No detail on the new mechanics, and no date: Molten Core is not among the three raids that open on 9 December (the Barrow Deeps, Hyjal Summit and Onyxia's Lair, in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids)).

## How the raids are designed {#raids}

Michael Nuthals, who leads encounter design, described the target difficulty with a phrase Wowhead quotes: "we want folks to feel comfortable bringing their friends, we talk about beer and pretzels a lot". If a group has prepared, it should be able to clear a fight and find new epics. He explained the process: the encounter is built, the QA team playtests it, the designers listen to what is boring or too complex and iterate, trying not to go too far in either direction. Coordination still matters, by voice or with the game's ping and alert system.

Asked about his favourite fights of the first tier, Nuthals teased three: a boss in the **Barrow Deeps** where you manage a buff that increases your damage at a cost, a boss with **a pair of spiders**, and an **undead crocolisk in Hyjal Summit** possessed by a creature that pops out, with the fight alternating between the two. He closed by hinting at future instanced content tied to a "home or manor" players have found; Wowhead reads it as Manor Mistmantle in Duskwood.

## The podcast continues {#continues}

Icy Veins noticed a message in the background of the set: "The Podcast WILL Continue". The show had been planned as five episodes, one per week of beta. Greenfield hinted that a future episode would be about server infrastructure. Icy Veins also lists the episode's themes: the beta, who WoW Forever is made for, and secrets that have not been discovered yet.

## What we don't know yet {#unknown}

- **The exact words**: everything above is reported by Wowhead and Icy Veins; Blizzard has published no transcript, and we will check the quotes against the video.
- **Molten Core's mechanics and date**: nothing official beyond "reimagined".
- **The "manor"**: Blizzard has not named it or said whether it is a dungeon or a raid.
- **When the next episode comes out**, now that the beta is over.`,
    `Il 22 ottobre 2026 Blizzard ha pubblicato [Dive into the End of Beta Special!](${ARTICLE}), il quinto episodio del WoW: Forever Podcast, sul [canale YouTube di World of Warcraft](${VIDEO}). Era previsto come l'ultimo, in coincidenza con la fine della beta del 23 ottobre. L'articolo di Blizzard elenca solo gli ospiti; quello che è stato detto nella puntata lo hanno riportato Wowhead e Icy Veins, ed è da lì che vengono le citazioni qui sotto. Non abbiamo ancora trascritto il video.

## Chi c'è nella puntata {#ospiti}

Conduce Countdown To Classic, con Meeix come ospite. Per Blizzard: **Josh "Aggrend" Greenfield**, Senior Game Designer; **Clay Stone**, Associate Production Director; **Ana Resendez**, Lead Software Engineer; **Michael Nuthals**, Lead Encounter Designer. Il riassunto di Blizzard dice che la puntata dà "spunti dal team di sviluppo sulla beta" e sul lancio del 4 novembre.

## Molten Core non sarà "tank and spank" {#molten-core}

Secondo Wowhead, Greenfield ha confermato che i raid vecchi avranno meccaniche che i giocatori non conoscono. Alla domanda se Molten Core sarà il raid che tutti hanno già risolto, ha risposto che "si può dire con una certa sicurezza che non starete lì fermi a fare tank and spank su Golemagg", aggiungendo che alla BlizzCon il team aveva usato le parole "revamped" o "reimagined". Nessun dettaglio sulle meccaniche nuove e nessuna data: Molten Core non è fra le tre incursioni che aprono il 9 dicembre (Barrow Deeps, Hyjal Summit e Onyxia's Lair, nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids)).

## Come si progettano i raid {#raid}

Michael Nuthals, che guida la progettazione degli scontri, ha descritto la difficoltà a cui puntano con una frase che Wowhead cita: "vogliamo che la gente si senta a suo agio a portare gli amici, parliamo molto di birra e salatini". Se un gruppo si è preparato, deve poter superare uno scontro e trovare epici nuovi. Ha spiegato il metodo: lo scontro si costruisce, il team di QA lo prova, i designer ascoltano cosa è noioso o troppo complesso e iterano, cercando di non esagerare in nessuna delle due direzioni. La coordinazione conta comunque, a voce o con il sistema di ping e avvisi del gioco.

Sui suoi scontri preferiti del primo tier, Nuthals ne ha anticipati tre: un boss in **Barrow Deeps** dove gestisci un buff che aumenta il danno ma ha un costo, un boss con **una coppia di ragni**, e un **crocalisk non morto a Hyjal Summit** posseduto da una creatura che salta fuori, con lo scontro che alterna le due fasi. Ha chiuso accennando a contenuti istanziati futuri legati a una "casa o magione" che i giocatori hanno trovato; Wowhead la legge come Manor Mistmantle a Duskwood.

## Il podcast continua {#continua}

Icy Veins ha notato una scritta sullo sfondo del set: "The Podcast WILL Continue". Lo show era previsto in cinque puntate, una per settimana di beta. Greenfield ha accennato a una puntata futura sull'infrastruttura dei server. Icy Veins elenca anche i temi della puntata: la beta, per chi è fatto WoW Forever e i segreti che non sono ancora stati scoperti.

## Cosa non sappiamo ancora {#non-sappiamo}

- **Le parole esatte**: tutto quello che c'è sopra è riportato da Wowhead e Icy Veins; Blizzard non ha pubblicato una trascrizione, e confronteremo le citazioni con il video.
- **Meccaniche e data di Molten Core**: niente di ufficiale oltre a "reimagined".
- **La "magione"**: Blizzard non l'ha nominata e non ha detto se sia un dungeon o un raid.
- **Quando esce la prossima puntata**, ora che la beta è finita.`,
    `El 22 de octubre de 2026 Blizzard publicó [Dive into the End of Beta Special!](${ARTICLE}), el quinto episodio del WoW: Forever Podcast, en el [canal de YouTube de World of Warcraft](${VIDEO}). Estaba previsto como el último, coincidiendo con el final de la beta el 23 de octubre. El artículo de Blizzard solo enumera a los invitados; lo que se dijo en el episodio lo han recogido Wowhead e Icy Veins, y de ahí salen las citas de abajo. Todavía no hemos transcrito el vídeo.

## Quién está en el episodio {#invitados}

Presenta Countdown To Classic, con Meeix como invitado. Por Blizzard: **Josh "Aggrend" Greenfield**, diseñador de juego sénior; **Clay Stone**, director de producción asociado; **Ana Resendez**, ingeniera de software jefa; **Michael Nuthals**, diseñador jefe de encuentros. El resumen de Blizzard dice que el episodio da "perspectivas del equipo de desarrollo sobre la beta" y el lanzamiento del 4 de noviembre.

## Molten Core no será "tank and spank" {#molten-core}

Según Wowhead, Greenfield confirmó que las bandas antiguas tendrán mecánicas que los jugadores no conocen. Preguntado si el Núcleo de Magma (Molten Core) será la banda que todos tienen ya resuelta, respondió que "se puede decir con bastante seguridad que no os vais a quedar ahí haciendo tank and spank a Golemagg", y añadió que en la BlizzCon el equipo había usado las palabras "revamped" o "reimagined". Sin detalles sobre las mecánicas nuevas y sin fecha: el Núcleo de Magma no está entre las tres bandas que abren el 9 de diciembre (Cavernas del Túmulo, Cima Hyjal y Guarida de Onyxia, en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids)).

## Cómo se diseñan las bandas {#bandas}

Michael Nuthals, que dirige el diseño de encuentros, describió la dificultad a la que apuntan con una frase que cita Wowhead: "queremos que la gente se sienta cómoda trayendo a sus amigos, hablamos mucho de cerveza y pretzels". Si un grupo se ha preparado, debería poder superar un combate y encontrar épicos nuevos. Explicó el método: el encuentro se construye, el equipo de QA lo prueba, los diseñadores escuchan qué es aburrido o demasiado complejo e iteran, intentando no pasarse en ninguna de las dos direcciones. La coordinación sigue contando, por voz o con el sistema de pings y avisos del juego.

Sobre sus combates favoritos del primer tier, Nuthals adelantó tres: un jefe en las **Cavernas del Túmulo** donde gestionas un beneficio que aumenta tu daño a cambio de un coste, un jefe con **una pareja de arañas**, y un **crocolisco no-muerto en la Cima Hyjal** poseído por una criatura que sale de él, con el combate alternando las dos fases. Cerró con una pista sobre contenido instanciado futuro ligado a una "casa o mansión" que los jugadores han encontrado; Wowhead la interpreta como la Mansión Mistmantle en Bosque del Ocaso.

## El pódcast sigue {#sigue}

Icy Veins se fijó en un mensaje del fondo del plató: "The Podcast WILL Continue". El programa estaba previsto en cinco episodios, uno por semana de beta. Greenfield insinuó que un episodio futuro tratará de la infraestructura de servidores. Icy Veins enumera también los temas del episodio: la beta, para quién está hecho WoW Forever y los secretos que aún no se han descubierto.

## Lo que aún no sabemos {#no-sabemos}

- **Las palabras exactas**: todo lo anterior lo recogen Wowhead e Icy Veins; Blizzard no ha publicado transcripción, y compararemos las citas con el vídeo.
- **Mecánicas y fecha del Núcleo de Magma**: nada oficial más allá de "reimagined".
- **La "mansión"**: Blizzard no la ha nombrado ni ha dicho si es una mazmorra o una banda.
- **Cuándo sale el próximo episodio**, ahora que la beta ha terminado.`,
  ),
  faq: {
    en: [
      {
        q: "Will Molten Core be different in WoW Forever?",
        a: "According to Josh Greenfield in episode 5 of the WoW Forever Podcast, as reported by Wowhead, yes: players will not simply \"tank and spank\" bosses like Golemagg, and the team describes the raid as \"reimagined\". Blizzard has given no details or date.",
      },
      {
        q: "Is the WoW Forever Podcast over after the beta?",
        a: "No. The fifth episode was planned as the last one, but a message on the set read \"The Podcast WILL Continue\", and Greenfield hinted at a future episode on server infrastructure.",
      },
    ],
    it: [
      {
        q: "Molten Core sarà diverso in WoW Forever?",
        a: "Secondo Josh Greenfield nell'episodio 5 del podcast di WoW Forever, come riportato da Wowhead, sì: i giocatori non faranno semplicemente \"tank and spank\" su boss come Golemagg, e il team descrive il raid come \"reimagined\". Blizzard non ha dato dettagli né una data.",
      },
      {
        q: "Il podcast di WoW Forever finisce con la beta?",
        a: "No. La quinta puntata era prevista come l'ultima, ma una scritta sul set diceva \"The Podcast WILL Continue\", e Greenfield ha accennato a una puntata futura sull'infrastruttura dei server.",
      },
    ],
    es: [
      {
        q: "¿Molten Core será distinto en WoW Forever?",
        a: "Según Josh Greenfield en el episodio 5 del pódcast de WoW Forever, tal como lo recoge Wowhead, sí: los jugadores no harán simplemente \"tank and spank\" a jefes como Golemagg, y el equipo describe la banda como \"reimagined\". Blizzard no ha dado detalles ni fecha.",
      },
      {
        q: "¿El pódcast de WoW Forever termina con la beta?",
        a: "No. El quinto episodio estaba previsto como el último, pero un mensaje en el plató decía \"The Podcast WILL Continue\", y Greenfield insinuó un episodio futuro sobre la infraestructura de servidores.",
      },
    ],
  },
};

export default item;

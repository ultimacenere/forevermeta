import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Post di Josh "Aggrend" Greenfield (Senior Game Designer) sul forum ufficiale US, 22 ottobre 2026, 15:33 UTC: il set
 * di regole Roleplay-PvP arriva al lancio. Lo stesso giorno l'articolo "Choose Your Ruleset" ha ricevuto la nota
 * "[Updated 10/22]" nell'edizione inglese (l'italiana e la spagnola non l'hanno, controllato il 23/10).
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/the-roleplay-pvp-ruleset-is-coming-to-wow-forever/2389502";
const ARTICLE = "https://news.blizzard.com/en-us/article/24302070/updated-10-22-choose-your-ruleset-in-world-of-warcraft-forever";

const item: NewsItem = {
  slug: "roleplay-pvp-ruleset-at-launch",
  date: "2026-10-22",
  source: "blizzard",
  topic: "pvp",
  url: POST,
  image: "/covers/roleplay-pvp-ruleset-at-launch.png",
  cover: { word: "Roleplay-PvP", tone: "gold" },
  imageAlt: n(
    "ForeverMeta typographic cover with the words «Roleplay-PvP» in gold on a midnight blue background",
    "Copertina tipografica di ForeverMeta con la scritta «Roleplay-PvP» in oro su fondo blu notte",
    "Portada tipográfica de ForeverMeta con las palabras «Roleplay-PvP» en dorado sobre fondo azul noche",
  ),
  guides: ["wow-forever-rulesets", "wow-forever-release-date"],
  title: n(
    "WoW Forever adds a Roleplay-PvP ruleset at launch: Blizzard changes its mind after player feedback",
    "WoW Forever avrà il set di regole Roleplay-PvP al lancio: Blizzard cambia idea dopo il feedback dei giocatori",
    "WoW Forever tendrá el conjunto de reglas Rol-JcJ en el lanzamiento: Blizzard cambia de idea",
  ),
  metaTitle: n("WoW Forever: Roleplay-PvP ruleset confirmed at launch", "WoW Forever: set di regole Roleplay-PvP al lancio", "WoW Forever: conjunto de reglas Rol-JcJ al lanzar"),
  summary: n(
    "On 22 October 2026 Josh \"Aggrend\" Greenfield announced on the official forum that WoW Forever will launch on 4 November with a fifth ruleset, Roleplay-PvP, a week after the team had explained why it was reluctant to add one. Blizzard is also working to make it selectable during Early Name Reservation from 27 October.",
    "Il 22 ottobre 2026 Josh \"Aggrend\" Greenfield ha annunciato sul forum ufficiale che WoW Forever uscirà il 4 novembre con un quinto set di regole, Roleplay-PvP, una settimana dopo che il team aveva spiegato perché esitava ad aggiungerlo. Blizzard lavora anche per renderlo selezionabile già nella prenotazione anticipata dei nomi dal 27 ottobre.",
    "El 22 de octubre de 2026 Josh \"Aggrend\" Greenfield anunció en el foro oficial que WoW Forever saldrá el 4 de noviembre con un quinto conjunto de reglas, Rol-JcJ, una semana después de que el equipo explicara por qué dudaba en añadirlo. Blizzard también trabaja para que se pueda elegir en la reserva de nombres anticipada desde el 27 de octubre.",
  ),
  description: n(
    "On 22 October 2026 Blizzard announced a Roleplay-PvP ruleset for WoW Forever's launch on 4 November, selectable at Early Name Reservation from 27 October.",
    "Il 22 ottobre 2026 Blizzard ha annunciato il set di regole Roleplay-PvP per il lancio di WoW Forever del 4 novembre, selezionabile già dal 27 ottobre.",
    "El 22 de octubre de 2026 Blizzard anunció el conjunto de reglas Rol-JcJ para el estreno de WoW Forever el 4 de noviembre, elegible desde el 27 de octubre.",
  ),
  highlights: {
    en: [
      { label: "Roleplay-PvP at launch", text: "a fifth ruleset, announced on 22 October by Aggrend", anchor: "announcement" },
      { label: "A change of mind", text: "a week earlier the podcast had explained the team's doubts", anchor: "why" },
      { label: "Name reservation", text: "Blizzard wants it selectable from 27 October", anchor: "names" },
      { label: "The other rules", text: "the official article is unchanged apart from the note", anchor: "rules" },
      { label: "Open questions", text: "faction limit, rules, availability on 27 October", anchor: "unknown" },
    ],
    it: [
      { label: "Roleplay-PvP al lancio", text: "un quinto set di regole, annunciato il 22 ottobre da Aggrend", anchor: "annuncio" },
      { label: "Un cambio di idea", text: "una settimana prima il podcast aveva spiegato i dubbi del team", anchor: "perche" },
      { label: "Prenotazione dei nomi", text: "Blizzard vuole renderlo selezionabile dal 27 ottobre", anchor: "nomi" },
      { label: "Le altre regole", text: "l'articolo ufficiale non cambia, a parte la nota", anchor: "regole" },
      { label: "Domande aperte", text: "limite di fazione, regole, disponibilità il 27 ottobre", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Rol-JcJ en el lanzamiento", text: "un quinto conjunto de reglas, anunciado el 22 de octubre por Aggrend", anchor: "anuncio" },
      { label: "Un cambio de idea", text: "una semana antes el pódcast había explicado las dudas del equipo", anchor: "por-que" },
      { label: "Reserva de nombres", text: "Blizzard quiere que se pueda elegir desde el 27 de octubre", anchor: "nombres" },
      { label: "Las demás reglas", text: "el artículo oficial no cambia, salvo la nota", anchor: "reglas" },
      { label: "Preguntas abiertas", text: "límite de facción, reglas, disponibilidad el 27 de octubre", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `On 22 October 2026, at 15:33 UTC, Josh "Aggrend" Greenfield, Senior Game Designer on WoW Forever, opened a thread on the official US forum titled [The Roleplay-PvP Ruleset is Coming to WoW Forever](${POST}). Ten hours later it had more than 300 replies. Here is what it says and what it changes.

## What Blizzard announced {#announcement}

The post is short. Blizzard had discussed its concerns about a Roleplay-PvP ruleset in a recent episode of the WoW Forever Podcast, but had also said the topic was still being discussed internally while watching player feedback. "Over the last few days", Aggrend writes, the team examined what it would take to add it "and decided to go for it": **a Roleplay-PvP Ruleset will be there at launch on 4 November**.

The same day the official article [Choose Your Ruleset in World of Warcraft: Forever](${ARTICLE}), published on 21 September, received a note at the top, "[Updated 10/22]", with the same two facts: the ruleset arrives at launch, and Blizzard plans to make it available with Early Name Reservation on Tuesday 27 October. The note is only in the English edition: the Italian and Spanish versions of the article had no update when we checked on 23 October.

## A change of mind in a week {#why}

Until then there were four rulesets: Normal, PvP, Roleplaying and Hardcore, the last one due some time after launch (all in our [rulesets guide](/en/guides/wow-forever-rulesets)). In episode 4 of the podcast, published on 15 October and dedicated to PvP, Greenfield had explained why the team was reluctant: the roleplaying community is small compared with the Normal and PvP ones, Forever's realmless rulesets need a critical mass of players to work, and splitting an already tight-knit community had to be "carefully considered". The post of 22 October does not say what tipped the balance; it thanks players for "the feedback and comments on this".

## Name reservation {#names}

Blizzard is "working hard", in Aggrend's words, to make the Roleplay-PvP ruleset selectable, with name reservation, when Early Name Reservation begins on 27 October (in Europe at 18:00 CET; the times by region are in our [news on the opening times](/en/news/early-name-reservation-october-27-times)). It is a goal, not a promise: the post says "working hard", the article note says "we plan to".

## What stays the same {#rules}

Apart from the note, the article is unchanged. Each ruleset remains its own ecosystem: groups, dungeons and raids only with players of the same ruleset, battlegrounds mixed except for Hardcore, no moving a character between rulesets, Collections and Legacy Points shared across the account except for Hardcore. On the PvP ruleset each account can create characters of one faction only; the article does not say whether this applies to Roleplay-PvP as well.

## What we don't know yet {#unknown}

- **The rules of Roleplay-PvP**: Blizzard has not described it. On Classic's RP-PvP realms the roleplaying naming and behaviour rules applied together with open-world PvP, but nothing official has been said for Forever.
- **The one-faction limit**: whether the PvP rule of one faction per account also applies here.
- **27 October**: whether the ruleset will really be selectable at Early Name Reservation; Blizzard describes it as something it is working towards.
- **Italian and Spanish names**: Blizzard has not published them, so we keep Roleplay-PvP.`,
    `Il 22 ottobre 2026, alle 15:33 UTC, Josh "Aggrend" Greenfield, Senior Game Designer di WoW Forever, ha aperto sul forum ufficiale US una discussione intitolata [The Roleplay-PvP Ruleset is Coming to WoW Forever](${POST}). Dieci ore dopo aveva più di 300 risposte. Ecco cosa dice e cosa cambia.

## Cosa ha annunciato Blizzard {#annuncio}

Il post è breve. In una puntata recente del podcast di WoW Forever Blizzard aveva spiegato i suoi dubbi su un set di regole Roleplay-PvP, ma aveva anche detto che il tema era ancora in discussione interna e che guardava il feedback dei giocatori. "Negli ultimi giorni", scrive Aggrend, il team ha valutato che cosa servisse per aggiungerlo "e ha deciso di farlo": **il set di regole Roleplay-PvP ci sarà al lancio del 4 novembre**.

Lo stesso giorno l'articolo ufficiale [Choose Your Ruleset in World of Warcraft: Forever](${ARTICLE}), pubblicato il 21 settembre, ha ricevuto in testa una nota, "[Updated 10/22]", con gli stessi due fatti: il set di regole arriva al lancio e Blizzard conta di renderlo disponibile con la prenotazione anticipata dei nomi di martedì 27 ottobre. La nota c'è solo nell'edizione inglese: l'articolo italiano ("Scegli il tuo set di regole") e quello spagnolo non avevano nessun aggiornamento quando li abbiamo controllati il 23 ottobre.

## Un cambio di idea in una settimana {#perche}

Fino ad allora i set di regole erano quattro: Normal, PvP, Roleplaying e Hardcore, l'ultimo previsto qualche tempo dopo il lancio (tutti nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets)). Nella puntata 4 del podcast, uscita il 15 ottobre e dedicata al PvP, Greenfield aveva spiegato perché il team esitava: la community del gioco di ruolo è piccola rispetto a quelle Normal e PvP, i set di regole senza reami di Forever hanno bisogno di una massa critica di giocatori per funzionare, e dividere una community già piccola andava "valutato con attenzione". Il post del 22 ottobre non dice cosa abbia fatto pendere la bilancia; ringrazia i giocatori per "il feedback e i commenti".

## La prenotazione dei nomi {#nomi}

Blizzard "lavora sodo", parole di Aggrend, per rendere il set Roleplay-PvP selezionabile, con la prenotazione del nome, quando il 27 ottobre si apre la prenotazione anticipata dei nomi (in Italia alle 18:00; gli orari per regione sono nella nostra [news sugli orari di apertura](/it/news/early-name-reservation-october-27-times)). È un obiettivo, non una promessa: il post dice "working hard", la nota dell'articolo "we plan to".

## Cosa resta uguale {#regole}

A parte la nota, l'articolo non cambia. Ogni set di regole resta un ecosistema a sé: gruppi, dungeon (spedizioni) e raid (incursioni) solo con chi ha lo stesso set, campi di battaglia misti tranne Hardcore, nessun passaggio di un personaggio da un set all'altro, collezioni e Legacy Points condivisi su tutto l'account tranne Hardcore. Sul set PvP ogni account può creare personaggi di una sola fazione; l'articolo non dice se vale anche per Roleplay-PvP.

## Cosa non sappiamo ancora {#non-sappiamo}

- **Le regole del Roleplay-PvP**: Blizzard non le ha descritte. Sui reami RP-PvP di Classic valevano le regole di nomi e comportamento del gioco di ruolo insieme al PvP nel mondo aperto, ma per Forever non c'è niente di ufficiale.
- **Il limite di fazione**: se la regola del PvP, una sola fazione per account, vale anche qui.
- **Il 27 ottobre**: se il set sarà davvero selezionabile nella prenotazione anticipata dei nomi; Blizzard lo presenta come un obiettivo a cui sta lavorando.
- **I nomi italiano e spagnolo**: Blizzard non li ha pubblicati, quindi teniamo Roleplay-PvP.`,
    `El 22 de octubre de 2026, a las 15:33 UTC, Josh "Aggrend" Greenfield, diseñador de juego sénior de WoW Forever, abrió en el foro oficial de Estados Unidos un hilo titulado [The Roleplay-PvP Ruleset is Coming to WoW Forever](${POST}). Diez horas después tenía más de 300 respuestas. Esto es lo que dice y lo que cambia.

## Qué ha anunciado Blizzard {#anuncio}

El mensaje es breve. En un episodio reciente del pódcast de WoW Forever, Blizzard había explicado sus dudas sobre un conjunto de reglas de rol con JcJ, pero también había dicho que el tema seguía en discusión interna y que vigilaba las opiniones de los jugadores. "En los últimos días", escribe Aggrend, el equipo examinó qué haría falta para añadirlo "y decidió hacerlo": **habrá un conjunto de reglas Rol-JcJ (Roleplay-PvP) en el lanzamiento del 4 de noviembre**.

Ese mismo día el artículo oficial [Choose Your Ruleset in World of Warcraft: Forever](${ARTICLE}), publicado el 21 de septiembre, recibió una nota al principio, "[Updated 10/22]", con los mismos dos datos: el conjunto llega en el lanzamiento y Blizzard planea que esté disponible con la reserva de nombres anticipada del martes 27 de octubre. La nota solo está en la edición en inglés: las versiones en español y en italiano del artículo no tenían ninguna actualización cuando las comprobamos el 23 de octubre.

## Un cambio de idea en una semana {#por-que}

Hasta entonces los conjuntos de reglas eran cuatro: Normal, JcJ, Rol y Hardcore, el último previsto algún tiempo después del lanzamiento (todos en nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets)). En el episodio 4 del pódcast, publicado el 15 de octubre y dedicado al JcJ, Greenfield había explicado por qué el equipo dudaba: la comunidad de rol es pequeña comparada con las de Normal y JcJ, los conjuntos sin reinos de Forever necesitan una masa crítica de jugadores para funcionar, y dividir una comunidad ya pequeña había que "considerarlo con cuidado". El mensaje del 22 de octubre no dice qué inclinó la balanza; da las gracias a los jugadores por "las opiniones y los comentarios".

## La reserva de nombres {#nombres}

Blizzard "trabaja a fondo", en palabras de Aggrend, para que el conjunto Rol-JcJ se pueda elegir, con reserva de nombre, cuando el 27 de octubre empiece la reserva de nombres anticipada (en Europa a las 18:00 CET; las horas por región están en nuestra [noticia sobre los horarios de apertura](/es/news/early-name-reservation-october-27-times)). Es un objetivo, no una promesa: el mensaje dice "working hard" y la nota del artículo "we plan to".

## Qué sigue igual {#reglas}

Aparte de la nota, el artículo no cambia. Cada conjunto de reglas sigue siendo un ecosistema propio: grupos, mazmorras y bandas solo con jugadores del mismo conjunto, campos de batalla mezclados salvo Hardcore, ningún traslado de personajes entre conjuntos, colecciones y puntos de legado compartidos en toda la cuenta salvo Hardcore. En el conjunto JcJ cada cuenta solo puede crear personajes de una facción; el artículo no dice si eso vale también para Rol-JcJ.

## Lo que aún no sabemos {#no-sabemos}

- **Las reglas de Rol-JcJ**: Blizzard no las ha descrito. En los reinos RP-PvP de Classic se aplicaban las normas de nombres y comportamiento del rol junto con el JcJ en el mundo abierto, pero para Forever no hay nada oficial.
- **El límite de facción**: si la regla del JcJ, una sola facción por cuenta, se aplica también aquí.
- **El 27 de octubre**: si el conjunto se podrá elegir de verdad en la reserva de nombres anticipada; Blizzard lo presenta como un objetivo en el que trabaja.
- **Los nombres en español**: Blizzard no los ha publicado, así que usamos Rol-JcJ como forma nuestra, no oficial.`,
  ),
  faq: {
    en: [
      {
        q: "Will WoW Forever have an RP-PvP ruleset?",
        a: "Yes. On 22 October 2026 Blizzard announced that a Roleplay-PvP ruleset will be available at launch on 4 November, and that it plans to make it selectable during Early Name Reservation from 27 October.",
      },
      {
        q: "How many rulesets will WoW Forever have at launch?",
        a: "Four: Normal, PvP, Roleplaying and Roleplay-PvP. Hardcore, the fifth, arrives some time after launch, with no date yet.",
      },
    ],
    it: [
      {
        q: "WoW Forever avrà un set di regole RP-PvP?",
        a: "Sì. Il 22 ottobre 2026 Blizzard ha annunciato che un set di regole Roleplay-PvP sarà disponibile al lancio del 4 novembre e che conta di renderlo selezionabile nella prenotazione anticipata dei nomi dal 27 ottobre.",
      },
      {
        q: "Quanti set di regole avrà WoW Forever al lancio?",
        a: "Quattro: Normal, PvP, Roleplaying e Roleplay-PvP. Hardcore, il quinto, arriva qualche tempo dopo il lancio, ancora senza data.",
      },
    ],
    es: [
      {
        q: "¿WoW Forever tendrá un conjunto de reglas RP-PvP?",
        a: "Sí. El 22 de octubre de 2026 Blizzard anunció que un conjunto de reglas Roleplay-PvP estará disponible en el lanzamiento del 4 de noviembre y que planea que se pueda elegir en la reserva de nombres anticipada desde el 27 de octubre.",
      },
      {
        q: "¿Cuántos conjuntos de reglas tendrá WoW Forever en el lanzamiento?",
        a: "Cuatro: Normal, JcJ, Rol y Rol-JcJ. Hardcore, el quinto, llega algún tiempo después del lanzamiento, todavía sin fecha.",
      },
    ],
  },
};

export default item;

import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/** Post di Aggrend (WoW Game Developer) dell'8 ottobre 2026, 17:05 UTC, sotto il podcast 3 (forum ufficiale US). */
const AGGREND_POST = "https://us.forums.blizzard.com/en/wow/t/the-wow-forever-podcast-episode-3-dive-into-dungeons-with-devs-ft-hammerdancegaming/2376010/20";
/** Articolo del podcast, episodio 3 (Blizzard News, 8 ottobre 2026, 16:25 UTC), nelle tre versioni. */
const PODCAST = "https://news.blizzard.com/en-us/article/24310653";
const PODCAST_IT = "https://news.blizzard.com/it-it/article/24310653";
const PODCAST_ES = "https://news.blizzard.com/es-es/article/24310653";

const item: NewsItem = {
  slug: "aggrend-dungeon-leveling-xp",
  date: "2026-10-08",
  source: "blizzard",
  topic: "beta",
  url: AGGREND_POST,
  image: media.dungeonLeveling.src,
  imageAlt: media.dungeonLeveling.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-release-date"],
  title: n(
    "WoW Forever: Aggrend explains dungeon XP, levelling in dungeons will match questing but not beat it",
    "WoW Forever: Aggrend spiega l'esperienza nei dungeon, veloci quanto le missioni ma non di più",
    "WoW Forever: Aggrend explica la experiencia en mazmorras, tan rápidas como las misiones pero no más",
  ),
  metaTitle: n("WoW Forever: dungeon XP vs questing, Aggrend explains", "WoW Forever: l'esperienza nei dungeon, parla Aggrend", "WoW Forever: Aggrend y la experiencia en mazmorras"),
  summary: n(
    "On 8 October Blizzard developer Aggrend explained the dungeon XP fix of the WoW Forever beta: each player now earns XP on their own level, and kills give about 20% more. Dungeons should level you about as fast as the best questing, but Blizzard does not want them to be faster.",
    "L'8 ottobre lo sviluppatore Blizzard Aggrend ha spiegato la correzione dell'esperienza nei dungeon della beta di WoW Forever: ognuno prende esperienza in base al proprio livello e le uccisioni danno il 20% circa in più. Nei dungeon si livellerà più o meno veloci quanto con le missioni fatte al meglio, ma Blizzard non vuole che siano più veloci.",
    "El 8 de octubre el desarrollador de Blizzard Aggrend explicó la corrección de la experiencia en mazmorras de la beta de WoW Forever: cada jugador gana experiencia según su propio nivel y las muertes dan un 20% más. En mazmorras subirás de nivel casi tan rápido como con las misiones bien hechas, pero Blizzard no quiere que sean más rápidas.",
  ),
  description: n(
    "WoW Forever: Aggrend explains the dungeon XP fix and the +20% from kills, and why dungeons should level you as fast as questing, not faster.",
    "WoW Forever: Aggrend spiega la correzione dell'esperienza nei dungeon e il +20% dalle uccisioni, e perché non saranno più veloci delle missioni.",
    "WoW Forever: Aggrend explica la corrección de la experiencia en mazmorras y el +20% por muertes, y por qué no serán más rápidas que las misiones.",
  ),
  highlights: {
    en: [
      { label: "The bug", text: "group XP was calculated on the highest-level player", anchor: "bug" },
      { label: "More XP", text: "your own level counts, and kills give about 20% more", anchor: "xp" },
      { label: "Dungeons vs questing", text: "about as fast as the best questing, never clearly faster", anchor: "questing" },
      { label: "Why", text: "two design pillars: the world and social play", anchor: "pillars" },
      { label: "Context", text: "dungeon quest XP was already cut on 1 October", anchor: "context" },
    ],
    it: [
      { label: "Il bug", text: "l'esperienza del gruppo si calcolava sul giocatore di livello più alto", anchor: "bug" },
      { label: "Più esperienza", text: "conta il tuo livello, e le uccisioni danno il 20% circa in più", anchor: "esperienza" },
      { label: "Dungeon e missioni", text: "veloci quanto le missioni fatte al meglio, mai nettamente di più", anchor: "missioni" },
      { label: "Perché", text: "due pilastri del progetto: il mondo e il gioco insieme agli altri", anchor: "pilastri" },
      { label: "Il contesto", text: "l'esperienza delle missioni dei dungeon era già stata tagliata l'1 ottobre", anchor: "contesto" },
    ],
    es: [
      { label: "El error", text: "la experiencia del grupo se calculaba con el jugador de mayor nivel", anchor: "error" },
      { label: "Más experiencia", text: "cuenta tu propio nivel, y las muertes dan un 20% más", anchor: "experiencia" },
      { label: "Mazmorras y misiones", text: "casi tan rápidas como las misiones bien hechas, nunca claramente más", anchor: "misiones" },
      { label: "Por qué", text: "dos pilares del diseño: el mundo y el juego en compañía", anchor: "pilares" },
      { label: "El contexto", text: "la experiencia de las misiones de mazmorra ya se recortó el 1 de octubre", anchor: "contexto" },
    ],
  },
  body: n(
    `On 8 October 2026 Blizzard released [episode 3 of the WoW: Forever Podcast](${PODCAST}), "Dive into Dungeons with Devs": host Countdown To Classic and guest Hammerdance talk about dungeon levelling and questing with Senior Game Designers Josh "Aggrend" Greenfield, Jay Hartman and Rowan Ryder. Shortly after, Aggrend added on the [official forum](${AGGREND_POST}) something the episode had left out: a fix to the experience earned in dungeons, and why Blizzard does not want dungeons to be the fastest way to level 60.

## The bug: XP based on the highest level in the group {#bug}

In the earlier beta builds, the experience for each kill in a group was calculated on the highest-level player. Aggrend's example: in The Deadmines with four level 20 players and one level 25, the level 20s got very little XP per kill. With the fix, each player earns experience based on their own level compared with the enemies. The fix went live that same evening with the [8 October beta update](/en/news/beta-development-notes-october-8).

## More XP from kills {#xp}

The same update raises the experience from kills in dungeons by **about 20%**. According to Aggrend, the two changes together should make dungeons feel better and more even. Dungeon XP will still not be what it was in Classic Era, he writes, but it should feel significantly better than in the earlier beta builds. As before, if a group member is far above the enemies' level, nobody gets experience.

## Dungeons as fast as questing, not faster {#questing}

Aggrend knows that some players would like to "dungeon cleave" all the way to 60, that is, level only by running dungeons over and over. Making that the best way to level, he says, does not fit the core pillars of Forever, and Blizzard will hold firm on these balance choices. After the changes, with perfect play measured in XP per hour, levelling in dungeons should be very close to, or equal to, the speed of the best questing. In Classic Era, he notes, dungeons were much faster than that.

## Why: two design pillars {#pillars}

Aggrend names two pillars of Forever: "World is the Main Character" and "Nurture and Protect Social Experiences". If dungeons became the clear winner, he explains, it would have a cascading effect on how players behave, and Blizzard has to weigh that impact as a whole. In practice: questing out in the world has to stay a real option for levelling.

## The context: dungeon quests already cut on 1 October {#context}

This is the second change to dungeon levelling in two weeks. With the 1 October update Blizzard had already reduced by 50% the extra experience that dungeon quests give beyond normal quest values, citing players' feedback on levelling speed. Every change, update by update, is on our [beta changes page](/en/changes); the dungeons of Forever are in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).

## What we don't know yet {#unknown}

- Blizzard has not published XP-per-hour figures for dungeons and questing, only the comparison.
- Whether more adjustments will come before launch on 4 November (see our [release date guide](/en/guides/wow-forever-release-date)).
- This article is based on Aggrend's forum post and on the episode description: the full conversation is in the podcast.`,
    `L'8 ottobre 2026 Blizzard ha pubblicato l'[episodio 3 del WoW: Forever Podcast](${PODCAST_IT}), "Dive into Dungeons with Devs": il conduttore Countdown To Classic e l'ospite Hammerdance parlano di livellamento nei dungeon e di missioni con i Senior Game Designer Josh "Aggrend" Greenfield, Jay Hartman e Rowan Ryder. Poco dopo Aggrend ha aggiunto sul [forum ufficiale](${AGGREND_POST}) una cosa che nell'episodio non era stata detta: una correzione all'esperienza che si guadagna nei dungeon, e il motivo per cui Blizzard non vuole che i dungeon siano la strada più veloce per il livello 60.

## Il bug: esperienza calcolata sul livello più alto del gruppo {#bug}

Nelle build precedenti della beta l'esperienza di ogni uccisione in gruppo si calcolava sul giocatore di livello più alto. L'esempio di Aggrend: nelle Deadmines con quattro giocatori di livello 20 e uno di livello 25, quelli di livello 20 prendevano pochissima esperienza per uccisione. Con la correzione ognuno guadagna esperienza in base al proprio livello rispetto ai nemici. La correzione è entrata la sera stessa con l'[aggiornamento della beta dell'8 ottobre](/it/news/beta-development-notes-october-8).

## Più esperienza dalle uccisioni {#esperienza}

Lo stesso aggiornamento alza **del 20% circa** l'esperienza delle uccisioni nei dungeon. Secondo Aggrend, insieme le due modifiche dovrebbero rendere i dungeon più piacevoli e più equilibrati. L'esperienza nei dungeon non sarà comunque quella di Classic Era, scrive, ma dovrebbe essere molto migliore rispetto alle build precedenti della beta. Come prima, se un membro del gruppo è molto sopra il livello dei nemici, nessuno prende esperienza.

## Dungeon veloci quanto le missioni, non di più {#missioni}

Aggrend sa che alcuni giocatori vorrebbero arrivare a 60 con il "dungeon cleave", cioè livellando solo con i dungeon, uno dopo l'altro. Farne il modo migliore per livellare, dice, non è compatibile con i pilastri di Forever, e Blizzard terrà ferme queste scelte di bilanciamento. Dopo le modifiche, giocando alla perfezione e contando l'esperienza all'ora, nei dungeon si dovrebbe livellare quasi alla stessa velocità, o alla stessa, delle missioni fatte al meglio. In Classic Era, ricorda, i dungeon erano molto più veloci di così.

## Perché: due pilastri del progetto {#pilastri}

Aggrend cita due pilastri di Forever: "World is the Main Character" (il mondo è il protagonista) e "Nurture and Protect Social Experiences" (coltivare e proteggere le esperienze sociali). Se i dungeon diventassero la scelta nettamente migliore, spiega, l'effetto si propagherebbe a cascata sul comportamento dei giocatori, e Blizzard deve valutarlo nel suo insieme. In pratica: le missioni nel mondo devono restare una strada vera per livellare.

## Il contesto: missioni dei dungeon già tagliate l'1 ottobre {#contesto}

È il secondo intervento sul livellamento nei dungeon in due settimane. Con l'aggiornamento dell'1 ottobre Blizzard aveva già ridotto del 50% l'esperienza in più che le missioni dei dungeon danno oltre ai valori normali delle missioni, citando i commenti dei giocatori sulla velocità di livellamento. Tutte le modifiche, aggiornamento per aggiornamento, sono nella nostra [pagina delle modifiche della beta](/it/changes); i dungeon di Forever nella [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).

## Cosa non sappiamo ancora {#non-sappiamo}

- Blizzard non ha pubblicato numeri di esperienza all'ora per dungeon e missioni, solo il confronto.
- Se arriveranno altri ritocchi prima del lancio del 4 novembre (vedi la [guida alla data di uscita](/it/guides/wow-forever-release-date)).
- Questo articolo si basa sul post di Aggrend nel forum e sulla presentazione dell'episodio: la conversazione completa è nel podcast.`,
    `El 8 de octubre de 2026 Blizzard publicó el [episodio 3 del WoW: Forever Podcast](${PODCAST_ES}), "Dive into Dungeons with Devs": el presentador Countdown To Classic y el invitado Hammerdance hablan de subir de nivel en mazmorras y de misiones con los Senior Game Designers Josh "Aggrend" Greenfield, Jay Hartman y Rowan Ryder. Poco después Aggrend añadió en el [foro oficial](${AGGREND_POST}) algo que no se había dicho en el episodio: una corrección de la experiencia que se gana en mazmorras, y el motivo por el que Blizzard no quiere que las mazmorras sean el camino más rápido al nivel 60.

## El error: experiencia calculada con el nivel más alto del grupo {#error}

En las builds anteriores de la beta, la experiencia de cada muerte en grupo se calculaba con el jugador de mayor nivel. El ejemplo de Aggrend: en The Deadmines con cuatro jugadores de nivel 20 y uno de nivel 25, los de nivel 20 recibían muy poca experiencia por muerte. Con la corrección, cada jugador gana experiencia según su propio nivel frente a los enemigos. La corrección llegó esa misma noche con la [actualización de la beta del 8 de octubre](/es/news/beta-development-notes-october-8).

## Más experiencia por muertes {#experiencia}

La misma actualización sube **un 20% aproximadamente** la experiencia por muertes en mazmorras. Según Aggrend, juntos los dos cambios deberían hacer que las mazmorras se sientan mejor y más equilibradas. La experiencia en mazmorras no será la de Classic Era, escribe, pero debería ser bastante mejor que en las builds anteriores de la beta. Como antes, si un miembro del grupo está muy por encima del nivel de los enemigos, nadie recibe experiencia.

## Mazmorras tan rápidas como las misiones, no más {#misiones}

Aggrend sabe que algunos jugadores querrían llegar a 60 con el "dungeon cleave", es decir, subiendo de nivel solo con mazmorras, una tras otra. Que esa sea la mejor forma de subir de nivel, dice, no encaja con los pilares de Forever, y Blizzard mantendrá firmes estas decisiones de equilibrio. Después de los cambios, jugando a la perfección y contando la experiencia por hora, en mazmorras se debería subir casi a la misma velocidad, o a la misma, que con las misiones bien hechas. En Classic Era, recuerda, las mazmorras eran mucho más rápidas que eso.

## Por qué: dos pilares del diseño {#pilares}

Aggrend cita dos pilares de Forever: "World is the Main Character" (el mundo es el protagonista) y "Nurture and Protect Social Experiences" (cuidar y proteger las experiencias sociales). Si las mazmorras se convirtieran en la opción claramente mejor, explica, el efecto se extendería en cascada al comportamiento de los jugadores, y Blizzard tiene que valorarlo en conjunto. En la práctica: las misiones en el mundo tienen que seguir siendo un camino real para subir de nivel.

## El contexto: misiones de mazmorra ya recortadas el 1 de octubre {#contexto}

Es el segundo cambio sobre la subida de nivel en mazmorras en dos semanas. Con la actualización del 1 de octubre Blizzard ya había reducido un 50% la experiencia extra que dan las misiones de mazmorra por encima de los valores normales de las misiones, citando los comentarios de los jugadores sobre la velocidad de subida de nivel. Todos los cambios, actualización a actualización, están en nuestra [página de cambios de la beta](/es/changes); las mazmorras de Forever, en la [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).

## Lo que aún no sabemos {#no-sabemos}

- Blizzard no ha publicado cifras de experiencia por hora para mazmorras y misiones, solo la comparación.
- Si habrá más ajustes antes del lanzamiento del 4 de noviembre (mira la [guía de la fecha de lanzamiento](/es/guides/wow-forever-release-date)).
- Este artículo se basa en el mensaje de Aggrend en el foro y en la presentación del episodio: la conversación completa está en el pódcast.`,
  ),
  faq: {
    en: [
      {
        q: "Is levelling in dungeons faster than questing in WoW Forever?",
        a: "No. According to Blizzard developer Aggrend, after the 8 October beta changes dungeons should level you about as fast as the best questing, possibly equally fast, but Blizzard does not want them to be clearly faster.",
      },
      {
        q: "How much XP do dungeons give in the WoW Forever beta?",
        a: "Since 8 October, kills in dungeons give about 20% more experience, and each player earns XP on their own level instead of the highest level in the group. Blizzard has not published exact figures.",
      },
    ],
    it: [
      {
        q: "In WoW Forever si livella più in fretta nei dungeon o con le missioni?",
        a: "Secondo lo sviluppatore Blizzard Aggrend, dopo le modifiche alla beta dell'8 ottobre nei dungeon si livella quasi alla stessa velocità delle missioni fatte al meglio, forse alla stessa, ma Blizzard non vuole che siano nettamente più veloci.",
      },
      {
        q: "Quanta esperienza danno i dungeon nella beta di WoW Forever?",
        a: "Dall'8 ottobre le uccisioni nei dungeon danno il 20% circa di esperienza in più, e ognuno la guadagna in base al proprio livello invece che a quello più alto del gruppo. Blizzard non ha pubblicato numeri esatti.",
      },
    ],
    es: [
      {
        q: "¿En WoW Forever se sube de nivel más rápido en mazmorras o con misiones?",
        a: "Según el desarrollador de Blizzard Aggrend, tras los cambios de la beta del 8 de octubre en mazmorras se sube casi a la misma velocidad que con las misiones bien hechas, quizá a la misma, pero Blizzard no quiere que sean claramente más rápidas.",
      },
      {
        q: "¿Cuánta experiencia dan las mazmorras en la beta de WoW Forever?",
        a: "Desde el 8 de octubre las muertes en mazmorras dan un 20% más de experiencia, y cada jugador la gana según su propio nivel en lugar del nivel más alto del grupo. Blizzard no ha publicado cifras exactas.",
      },
    ],
  },
};

export default item;

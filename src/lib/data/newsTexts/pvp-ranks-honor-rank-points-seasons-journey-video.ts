import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Video ufficiale "Honor Rewards & Battlegrounds | World of Warcraft: Forever" (canale YouTube World of Warcraft),
 * pubblicato il 18/11/2026 alle 09:59 PST (17:59 UTC, 18:59 CET), durata 3:43. Fonte riletta il 20/11/2026 dai
 * sottotitoli inglesi caricati da Blizzard (traccia manuale, non automatica).
 * Cosa dice il video: Honor come valuta, Rank Points per il grado, fonti dei Rank Points, equipaggiamento Rare ai
 * gradi bassi, passaggio a Epic dal grado 8, armi Epic al grado 14 pari alle incursioni, Season's Journey con una
 * missione nuova a settimana e recupero di quelle perse, grado massimo dopo la settimana 8 o 9, "Honor 3.0".
 * Cosa non dice: quanti Rank Points servono, quanto vale il limite settimanale, quando comincia la stagione e
 * quanto dura. La durata di 16-18 settimane è un nostro calcolo ed è scritta come tale.
 * Contesto già sul sito: articolo del 7/10 con la tabella dei gradi (/news/darkspear-islands-battleground-pvp-progression).
 */
const VIDEO = "https://www.youtube.com/watch?v=VDNmrrB2k2w";

const item: NewsItem = {
  slug: "pvp-ranks-honor-rank-points-seasons-journey-video",
  date: "2026-11-18",
  source: "blizzard",
  topic: "pvp",
  url: VIDEO,
  image: media.newsPvpRanksVideo.src,
  imageAlt: media.newsPvpRanksVideo.alt,
  guides: ["wow-forever-rulesets", "wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever PvP ranks explained: Honor buys gear, Rank Points set your rank, rank 14 in 8-9 weeks",
    "Gradi PvP di WoW Forever: l'Honor compra l'equipaggiamento, i Rank Points il grado, il 14 in 8-9 settimane",
    "Rangos JcJ de WoW Forever: el Honor compra el equipo, los Rank Points dan el rango, el 14 en 8-9 semanas",
  ),
  metaTitle: n(
    "WoW Forever PvP ranks: Honor and Rank Points",
    "Gradi PvP di WoW Forever: Honor e Rank Points",
    "Rangos JcJ de WoW Forever: Honor y Rank Points",
  ),
  summary: n(
    "On 18 November 2026 Blizzard published a video on how PvP ranks work in WoW Forever. Honor is now only a currency for PvP rewards, while Rank Points decide your rank and which rewards you can buy. The main source of Rank Points is the Season's Journey, one new quest a week that can be caught up later. Blizzard expects players to reach rank 14 after week 8 or 9, about halfway through a season.",
    "Il 18 novembre 2026 Blizzard ha pubblicato un video su come funzionano i gradi PvP in WoW Forever. L'Honor è ormai solo la valuta delle ricompense PvP, mentre i Rank Points decidono il grado e quali ricompense si possono comprare. La fonte principale di Rank Points è il Season's Journey, una missione nuova a settimana che si può recuperare più avanti. Blizzard prevede che si arrivi al grado 14 dopo la settimana 8 o 9, circa a metà stagione.",
    "El 18 de noviembre de 2026 Blizzard publicó un vídeo sobre cómo funcionan los rangos JcJ en WoW Forever. El Honor es ya solo la moneda de las recompensas JcJ, mientras que los Rank Points deciden tu rango y qué recompensas puedes comprar. La fuente principal de Rank Points es el Season's Journey, una misión nueva cada semana que se puede recuperar más adelante. Blizzard calcula que se llega al rango 14 tras la semana 8 o 9, más o menos a mitad de temporada.",
  ),
  description: n(
    "How PvP ranks work in WoW Forever: Honor as currency, Rank Points for rank, the weekly Season's Journey quest and rank 14 after week 8 or 9.",
    "Come funzionano i gradi PvP di WoW Forever: Honor come valuta, Rank Points per il grado, il Season's Journey settimanale e il grado 14 in 8-9 settimane.",
    "Cómo funcionan los rangos JcJ de WoW Forever: Honor como moneda, Rank Points para el rango, el Season's Journey semanal y el rango 14 en 8-9 semanas.",
  ),
  highlights: {
    en: [
      { label: "Two currencies", text: "Honor is spent, Rank Points set your rank", anchor: "honor-rank-points" },
      { label: "Where Rank Points come from", text: "daily and weekly sources, the weekly Battleground, Gurubashi Arena", anchor: "sources" },
      { label: "Gear by rank", text: "Rare at low ranks, Epic from rank 8, Epic weapons at rank 14", anchor: "gear" },
      { label: "Season's Journey", text: "one new quest a week, missed weeks can be caught up", anchor: "seasons-journey" },
      { label: "How long it takes", text: "top rank after week 8 or 9, about half a season", anchor: "timing" },
      { label: "What the video leaves out", text: "point totals, the weekly cap, season dates", anchor: "unknowns" },
    ],
    it: [
      { label: "Due valute", text: "l'Honor si spende, i Rank Points danno il grado", anchor: "honor-rank-points" },
      { label: "Da dove vengono i Rank Points", text: "fonti giornaliere e settimanali, il campo di battaglia della settimana, Gurubashi Arena", anchor: "fonti" },
      { label: "Equipaggiamento per grado", text: "Rare ai gradi bassi, Epic dal grado 8, armi Epic al 14", anchor: "equipaggiamento" },
      { label: "Season's Journey", text: "una missione nuova a settimana, quelle perse si recuperano", anchor: "seasons-journey" },
      { label: "Quanto ci vuole", text: "grado massimo dopo la settimana 8 o 9, circa metà stagione", anchor: "tempi" },
      { label: "Cosa il video non dice", text: "quanti punti servono, il limite settimanale, le date della stagione", anchor: "cosa-non-dice" },
    ],
    es: [
      { label: "Dos monedas", text: "el Honor se gasta, los Rank Points dan el rango", anchor: "honor-rank-points" },
      { label: "De dónde salen los Rank Points", text: "fuentes diarias y semanales, el campo de batalla de la semana, Gurubashi Arena", anchor: "fuentes" },
      { label: "Equipo por rango", text: "Rare en los rangos bajos, Epic desde el rango 8, armas Epic en el 14", anchor: "equipo" },
      { label: "Season's Journey", text: "una misión nueva cada semana, las perdidas se recuperan", anchor: "seasons-journey" },
      { label: "Cuánto se tarda", text: "rango máximo tras la semana 8 o 9, media temporada", anchor: "tiempos" },
      { label: "Lo que el vídeo no dice", text: "cuántos puntos hacen falta, el límite semanal, las fechas de la temporada", anchor: "lo-que-no-dice" },
    ],
  },
  body: n(
    `On Wednesday 18 November 2026 at 09:59 PST (17:59 UTC, 18:59 CET) Blizzard published [Honor Rewards & Battlegrounds](${VIDEO}) on the World of Warcraft YouTube channel: a video of 3 minutes and 43 seconds on how PvP ranks work in WoW Forever. What follows comes from the English captions Blizzard uploaded with the video, which we read on 20 November. The video adds timings and details to the system Blizzard first described on 7 October, covered in our [article on the Darkspear Islands and PvP progression](/en/news/darkspear-islands-battleground-pvp-progression), where you also find the reward for each of the 14 ranks.

## Honor and Rank Points: who does what {#honor-rank-points}

The short version, in Blizzard's own framing: **Rank Points decide which rewards are available, Honor is what you spend to get them.**

- **Honor Points** are still earned the familiar way, in Battlegrounds and other PvP activities. The difference from the original game is that they no longer decide your rank: Honor is the currency you spend on PvP rewards.
- **Rank Points** raise your PvP rank. According to the video they also make progress easier to read, because you see how far you are from the next rank instead of comparing yourself with a leaderboard.

## Where Rank Points come from {#sources}

The video lists these sources, "among other activities":

- daily and weekly sources;
- the **Season's Journey** quests, which Blizzard calls the biggest source;
- the **weekly Battleground**;
- some world PvP events, with the fights at **Gurubashi Arena** as the example.

Blizzard says the aim is a climb that feels more varied and more predictable, and that pushes players to try a different Battleground each week rather than repeating one.

## Gear by rank {#gear}

- **Lower ranks**: you unlock **Rare** quality PvP gear.
- **Rank 8** (Knight-Captain for the Alliance, Legionnaire for the Horde): from here on, as you climb, you can upgrade those rewards to **Epic** quality.
- **Rank 14**: you unlock **Epic weapons**. Blizzard says they are equal in power level to raiding gear, with stats better suited to PvP.

Raids open on 9 December: what the developers have said about them is in our [article on the raid interviews](/en/news/raids-december-9-developer-interviews).

## Season's Journey: one quest a week, no progress lost {#seasons-journey}

Each week adds one new Season's Journey quest, and completing it gives Rank Points. Blizzard stresses two things:

- it is **not a rotating list**: the quests come in order and are tuned to how far you have got;
- **missed weeks wait for you**. The video's example is a player who starts in week 5: the quests of weeks 1 to 4 are still there, and nothing is lost.

## How long it takes to reach top rank {#timing}

Blizzard expects players to reach the maximum rank **after week 8 or 9, about halfway through the season**. The rest of the season is meant for playing at top rank with the rewards unlocked.

The video calls the system "Honor 3.0" and says it changes the old brackets too: your rank depends only on your own Rank Points, so another player's progress no longer costs you yours. In the original game the ranking compared players with each other every week. Blizzard sums up the goal as a system that brings you back each week instead of asking you to grind every day, and adds that the climb will change with each new patch.

A note of ours, not Blizzard's: if week 8 or 9 is about the halfway point, a season should last roughly 16 to 18 weeks. The video does not give a length.

## What the video leaves out {#unknowns}

- How many Rank Points each rank needs, and how many each activity gives.
- The size of the weekly cap on ranks that Blizzard mentioned on 7 October: the video does not bring it up.
- When the first season starts and ends.
- What changes from one patch to the next.

For the differences between PvP and PvE realms, see our [rulesets guide](/en/guides/wow-forever-rulesets).`,
    `Mercoledì 18 novembre 2026 alle 09:59 PST (17:59 UTC, 18:59 CET) Blizzard ha pubblicato sul canale YouTube di World of Warcraft [Honor Rewards & Battlegrounds](${VIDEO}): un video di 3 minuti e 43 secondi su come funzionano i gradi PvP in WoW Forever. Quello che segue viene dai sottotitoli inglesi caricati da Blizzard insieme al video, letti il 20 novembre. Il video aggiunge tempi e dettagli al sistema che Blizzard aveva descritto il 7 ottobre e che trovate nel nostro [articolo sulle Darkspear Islands e sulla progressione PvP](/it/news/darkspear-islands-battleground-pvp-progression), con la ricompensa di ciascuno dei 14 gradi.

## Honor e Rank Points: chi fa che cosa {#honor-rank-points}

In breve, come lo presenta Blizzard: **i Rank Points decidono quali ricompense sono disponibili, l'Honor è quello che si spende per prenderle.**

- Gli **Honor Points** si guadagnano come sempre, nei campi di battaglia e nelle altre attività PvP. La differenza rispetto al gioco originale è che non decidono più il grado: l'Honor è la valuta con cui si comprano le ricompense PvP.
- I **Rank Points** fanno salire il grado PvP. Secondo il video rendono anche più leggibile il progresso, perché si vede quanto manca al grado successivo invece di confrontarsi con una classifica.

## Da dove vengono i Rank Points {#fonti}

Il video elenca queste fonti, "fra le altre attività":

- fonti giornaliere e settimanali;
- le missioni del **Season's Journey**, che Blizzard indica come la fonte più grande;
- il **campo di battaglia della settimana**;
- alcuni eventi di PvP nel mondo, con l'esempio degli scontri alla **Gurubashi Arena**.

L'obiettivo dichiarato è una scalata più varia e più prevedibile, che spinga a provare ogni settimana un campo di battaglia diverso invece di ripetere sempre lo stesso.

## Equipaggiamento per grado {#equipaggiamento}

- **Gradi bassi**: si sblocca l'equipaggiamento PvP di qualità **Rare**.
- **Grado 8** (Knight-Captain per l'Alleanza, Legionnaire per l'Orda): da qui in su, salendo, quelle ricompense si possono portare a qualità **Epic**.
- **Grado 14**: si sbloccano le **armi Epic**. Blizzard dice che hanno lo stesso livello di potenza dell'equipaggiamento delle incursioni, con statistiche più adatte al PvP.

Le incursioni aprono il 9 dicembre: quello che ne hanno detto gli sviluppatori è nel nostro [articolo sulle interviste](/it/news/raids-december-9-developer-interviews).

## Season's Journey: una missione a settimana, niente progresso perso {#seasons-journey}

Ogni settimana arriva una nuova missione del Season's Journey, e completarla dà Rank Points. Blizzard insiste su due punti:

- **non è un elenco a rotazione**: le missioni arrivano in ordine e sono tarate su dove siete arrivati;
- **le settimane saltate vi aspettano**. L'esempio del video è chi comincia alla settimana 5: le missioni delle settimane da 1 a 4 sono ancora lì, e non si perde niente.

## Quanto ci vuole per il grado massimo {#tempi}

Blizzard prevede che si arrivi al grado massimo **dopo la settimana 8 o 9, circa a metà stagione**. Il resto della stagione serve a giocare al grado più alto con le ricompense già sbloccate.

Il video chiama il sistema "Honor 3.0" e dice che cambia anche le vecchie fasce: il grado dipende solo dai vostri Rank Points, quindi il progresso di un altro giocatore non toglie più niente al vostro. Nel gioco originale la classifica metteva i giocatori a confronto ogni settimana. Blizzard riassume l'obiettivo così: un sistema che fa tornare ogni settimana invece di chiedere di macinare partite ogni giorno. Aggiunge che la scalata cambierà con ogni nuova patch.

Una nota nostra, non di Blizzard: se la settimana 8 o 9 è circa la metà, una stagione dovrebbe durare più o meno 16-18 settimane. Il video non dà una durata.

## Cosa il video non dice {#cosa-non-dice}

- Quanti Rank Points servono per ogni grado, e quanti ne dà ogni attività.
- Quanto vale il limite settimanale ai gradi di cui Blizzard parlava il 7 ottobre: il video non lo nomina.
- Quando comincia e quando finisce la prima stagione.
- Che cosa cambierà da una patch all'altra.

Per le differenze fra reami PvP e PvE c'è la nostra [guida ai set di regole](/it/guides/wow-forever-rulesets).`,
    `El miércoles 18 de noviembre de 2026 a las 09:59 PST (17:59 UTC, 18:59 CET) Blizzard publicó en el canal de YouTube de World of Warcraft [Honor Rewards & Battlegrounds](${VIDEO}): un vídeo de 3 minutos y 43 segundos sobre cómo funcionan los rangos JcJ en WoW Forever. Lo que sigue sale de los subtítulos en inglés que Blizzard subió con el vídeo, leídos el 20 de noviembre. El vídeo añade plazos y detalles al sistema que Blizzard describió el 7 de octubre y que tienes en nuestro [artículo sobre las Darkspear Islands y la progresión JcJ](/es/news/darkspear-islands-battleground-pvp-progression), con la recompensa de cada uno de los 14 rangos.

## Honor y Rank Points: qué hace cada uno {#honor-rank-points}

En pocas palabras, tal como lo presenta Blizzard: **los Rank Points deciden qué recompensas están disponibles y el Honor es lo que gastas para conseguirlas.**

- Los **Honor Points** se ganan como siempre, en los campos de batalla y en otras actividades JcJ. La diferencia con el juego original es que ya no deciden el rango: el Honor es la moneda con la que se compran las recompensas JcJ.
- Los **Rank Points** suben tu rango JcJ. Según el vídeo también hacen más fácil ver el progreso, porque sabes cuánto falta para el siguiente rango en lugar de compararte con una clasificación.

## De dónde salen los Rank Points {#fuentes}

El vídeo enumera estas fuentes, "entre otras actividades":

- fuentes diarias y semanales;
- las misiones del **Season's Journey**, que Blizzard señala como la fuente más grande;
- el **campo de batalla de la semana**;
- algunos eventos de JcJ en el mundo, con el ejemplo de los combates en **Gurubashi Arena**.

El objetivo declarado es una subida más variada y más previsible, que anime a probar cada semana un campo de batalla distinto en lugar de repetir siempre el mismo.

## Equipo por rango {#equipo}

- **Rangos bajos**: desbloqueas equipo JcJ de calidad **Rare**.
- **Rango 8** (Knight-Captain en la Alianza, Legionnaire en la Horda): a partir de aquí, según subes, esas recompensas se pueden mejorar a calidad **Epic**.
- **Rango 14**: desbloqueas las **armas Epic**. Blizzard dice que tienen el mismo nivel de poder que el equipo de banda, con estadísticas más pensadas para JcJ.

Las bandas abren el 9 de diciembre: lo que han contado los desarrolladores está en nuestro [artículo sobre las entrevistas](/es/news/raids-december-9-developer-interviews).

## Season's Journey: una misión por semana, sin perder progreso {#seasons-journey}

Cada semana llega una misión nueva del Season's Journey, y completarla da Rank Points. Blizzard insiste en dos cosas:

- **no es una lista rotatoria**: las misiones llegan en orden y se ajustan a tu progreso;
- **las semanas que te saltes te esperan**. El ejemplo del vídeo es alguien que empieza en la semana 5: las misiones de las semanas 1 a 4 siguen ahí, y no se pierde nada.

## Cuánto se tarda en llegar al rango máximo {#tiempos}

Blizzard calcula que se llega al rango máximo **tras la semana 8 o 9, más o menos a mitad de temporada**. El resto de la temporada es para jugar en el rango más alto con las recompensas ya desbloqueadas.

El vídeo llama al sistema "Honor 3.0" y dice que también cambia los antiguos tramos: tu rango depende solo de tus Rank Points, así que el progreso de otro jugador ya no te quita el tuyo. En el juego original la clasificación comparaba a los jugadores entre sí cada semana. Blizzard resume el objetivo como un sistema que te hace volver cada semana en lugar de pedirte jugar sin parar todos los días, y añade que la subida cambiará con cada parche nuevo.

Una nota nuestra, no de Blizzard: si la semana 8 o 9 es más o menos la mitad, una temporada debería durar unas 16-18 semanas. El vídeo no da una duración.

## Lo que el vídeo no dice {#lo-que-no-dice}

- Cuántos Rank Points hacen falta para cada rango, y cuántos da cada actividad.
- Cuánto vale el límite semanal de rangos del que Blizzard habló el 7 de octubre: el vídeo no lo menciona.
- Cuándo empieza y cuándo termina la primera temporada.
- Qué cambiará de un parche a otro.

Para las diferencias entre reinos JcJ y JcE tienes nuestra [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets).`,
  ),
  faq: {
    en: [
      {
        q: "How do PvP ranks work in WoW Forever?",
        a: "Rank Points raise your rank and decide which rewards you can buy; Honor is the currency you spend on them. Honor no longer decides your rank, as Blizzard explained in its video of 18 November 2026.",
      },
      {
        q: "How long does it take to reach rank 14 in WoW Forever?",
        a: "Blizzard expects players to reach the maximum rank after week 8 or 9 of a season, about halfway through it. The video does not say how many Rank Points are needed.",
      },
      {
        q: "How do you earn Rank Points in WoW Forever?",
        a: "From daily and weekly sources, the weekly Season's Journey quest (the biggest source), the weekly Battleground and some world PvP events such as the fights at Gurubashi Arena.",
      },
      {
        q: "Do you fall behind if you miss a week of the Season's Journey?",
        a: "No. According to Blizzard the quests of the weeks you missed stay available: a player who starts in week 5 can still do the quests of weeks 1 to 4.",
      },
      {
        q: "What do you get at rank 14 in WoW Forever?",
        a: "Epic weapons that Blizzard says are equal in power level to raiding gear, with stats better suited to PvP. Epic upgrades for PvP armor start at rank 8.",
      },
    ],
    it: [
      {
        q: "Come funzionano i gradi PvP in WoW Forever?",
        a: "I Rank Points fanno salire il grado e decidono quali ricompense si possono comprare; l'Honor è la valuta con cui si pagano. L'Honor non decide più il grado, come ha spiegato Blizzard nel video del 18 novembre 2026.",
      },
      {
        q: "Quanto ci vuole per arrivare al grado 14 in WoW Forever?",
        a: "Blizzard prevede che si arrivi al grado massimo dopo la settimana 8 o 9 di una stagione, circa a metà. Il video non dice quanti Rank Points servono.",
      },
      {
        q: "Come si guadagnano i Rank Points in WoW Forever?",
        a: "Con fonti giornaliere e settimanali, la missione settimanale del Season's Journey (la fonte più grande), il campo di battaglia della settimana e alcuni eventi di PvP nel mondo, come gli scontri alla Gurubashi Arena.",
      },
      {
        q: "Se salto una settimana del Season's Journey resto indietro?",
        a: "No. Secondo Blizzard le missioni delle settimane saltate restano disponibili: chi comincia alla settimana 5 può ancora fare quelle delle settimane da 1 a 4.",
      },
      {
        q: "Che cosa si ottiene al grado 14 in WoW Forever?",
        a: "Armi Epic che secondo Blizzard hanno lo stesso livello di potenza dell'equipaggiamento delle incursioni, con statistiche più adatte al PvP. I miglioramenti Epic delle armature PvP cominciano dal grado 8.",
      },
    ],
    es: [
      {
        q: "¿Cómo funcionan los rangos JcJ en WoW Forever?",
        a: "Los Rank Points suben tu rango y deciden qué recompensas puedes comprar; el Honor es la moneda con la que las pagas. El Honor ya no decide el rango, como explicó Blizzard en su vídeo del 18 de noviembre de 2026.",
      },
      {
        q: "¿Cuánto se tarda en llegar al rango 14 en WoW Forever?",
        a: "Blizzard calcula que se llega al rango máximo tras la semana 8 o 9 de una temporada, más o menos a la mitad. El vídeo no dice cuántos Rank Points hacen falta.",
      },
      {
        q: "¿Cómo se ganan Rank Points en WoW Forever?",
        a: "Con fuentes diarias y semanales, la misión semanal del Season's Journey (la fuente más grande), el campo de batalla de la semana y algunos eventos de JcJ en el mundo, como los combates en Gurubashi Arena.",
      },
      {
        q: "¿Me quedo atrás si me salto una semana del Season's Journey?",
        a: "No. Según Blizzard las misiones de las semanas que te saltes siguen disponibles: quien empieza en la semana 5 todavía puede hacer las de las semanas 1 a 4.",
      },
      {
        q: "¿Qué se consigue en el rango 14 en WoW Forever?",
        a: "Armas Epic que según Blizzard tienen el mismo nivel de poder que el equipo de banda, con estadísticas más pensadas para JcJ. Las mejoras Epic de las armaduras JcJ empiezan en el rango 8.",
      },
    ],
  },
};

export default item;

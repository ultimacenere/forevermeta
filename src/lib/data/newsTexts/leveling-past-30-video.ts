import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Video ufficiale "Your Leveling Journey Past 30 | World of Warcraft: Forever" (canale YouTube World of Warcraft,
 * 19 ottobre 2026, 17:00 UTC, 6:54). I nomi propri vengono dai sottotitoli inglesi caricati da Blizzard (non quelli
 * automatici); i nomi spagnoli dei luoghi già noti vengono dal glossario, quelli nuovi restano in inglese.
 */
const VIDEO = "https://www.youtube.com/watch?v=hTCBfrFZ2qU";

const item: NewsItem = {
  slug: "leveling-past-30-riverglades-hyjal",
  date: "2026-10-19",
  source: "blizzard",
  topic: "news",
  url: VIDEO,
  image: media.levelingPast30.src,
  imageAlt: media.levelingPast30.alt,
  guides: ["wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever after level 30: the new factions of the Riverglades, the Bloodmasters' Ring and Mount Hyjal",
    "WoW Forever dopo il livello 30: le nuove fazioni delle Riverglades, il Bloodmasters' Ring e Mount Hyjal",
    "WoW Forever tras el nivel 30: las nuevas facciones de Clarofluvial, el Bloodmasters' Ring y el Monte Hyjal",
  ),
  metaTitle: n("WoW Forever after level 30: Riverglades and Hyjal", "WoW Forever dopo il 30: Riverglades e Hyjal", "WoW Forever tras el nivel 30: Clarofluvial y Hyjal"),
  summary: n(
    "On 19 October Blizzard published a video on levelling past 30 in WoW Forever. In the Riverglades the Alliance meets the Brotherhood of the Horse and the Horde the Bolder'ok ogres, with a fighting ring and the Twilight's Hammer as common enemy; then Mount Hyjal opens, with the Curious Crow questline and the Barrow Deeps raid.",
    "Il 19 ottobre Blizzard ha pubblicato un video sul livellamento dopo il 30 in WoW Forever. Nelle Riverglades l'Alleanza incontra la Brotherhood of the Horse e l'Orda gli ogre Bolder'ok, con un'arena e il Twilight's Hammer come nemico comune; poi si apre Mount Hyjal, con la catena del Curious Crow e l'incursione Barrow Deeps.",
    "El 19 de octubre Blizzard publicó un vídeo sobre la subida de nivel después del 30 en WoW Forever. En Clarofluvial la Alianza conoce a la Brotherhood of the Horse y la Horda a los ogros Bolder'ok, con un ring de lucha y el Martillo Crepuscular como enemigo común; después se abre el Monte Hyjal, con la cadena del Curious Crow y la banda de las Cavernas del Túmulo.",
  ),
  description: n(
    "Blizzard's WoW Forever video on levelling past 30: the Riverglades factions, the Bloodmasters' Ring, Mount Hyjal, the Curious Crow and the Barrow Deeps.",
    "Il video di Blizzard su WoW Forever dopo il livello 30: fazioni delle Riverglades, Bloodmasters' Ring, Mount Hyjal, Curious Crow e Barrow Deeps.",
    "El vídeo de Blizzard sobre WoW Forever tras el nivel 30: facciones de Clarofluvial, Bloodmasters' Ring, Monte Hyjal, Curious Crow y Cavernas del Túmulo.",
  ),
  highlights: {
    en: [
      { label: "Alliance", text: "the Brotherhood of the Horse, knights from Warcraft II, at Farholde Keep", anchor: "alliance" },
      { label: "Horde", text: "the Bolder'ok ogres, who left the Twilight's Hammer", anchor: "horde" },
      { label: "Common enemy", text: "the Twilight's Hammer holds Twilight's Shroud and Krol'dok Stronghold", anchor: "twilights-hammer" },
      { label: "Bloodmasters' Ring", text: "a fighting ring against the ogres' best brawlers", anchor: "ring" },
      { label: "Mount Hyjal", text: "the road opens for the first time since the Third War", anchor: "hyjal" },
      { label: "Curious Crow and Barrow Deeps", text: "a questline and the new 10-player raid", anchor: "crow" },
    ],
    it: [
      { label: "Alleanza", text: "la Brotherhood of the Horse, cavalieri di Warcraft II, a Farholde Keep", anchor: "alleanza" },
      { label: "Orda", text: "gli ogre Bolder'ok, usciti dal Twilight's Hammer", anchor: "orda" },
      { label: "Nemico comune", text: "il Twilight's Hammer tiene Twilight's Shroud e Krol'dok Stronghold", anchor: "twilights-hammer" },
      { label: "Bloodmasters' Ring", text: "un'arena contro i lottatori migliori degli ogre", anchor: "arena" },
      { label: "Mount Hyjal", text: "la strada si apre per la prima volta dalla Terza Guerra", anchor: "hyjal" },
      { label: "Curious Crow e Barrow Deeps", text: "una catena di missioni e la nuova incursione da 10", anchor: "corvo" },
    ],
    es: [
      { label: "Alianza", text: "la Brotherhood of the Horse, caballeros de Warcraft II, en Farholde Keep", anchor: "alianza" },
      { label: "Horda", text: "los ogros Bolder'ok, que dejaron el Martillo Crepuscular", anchor: "horda" },
      { label: "Enemigo común", text: "el Martillo Crepuscular controla Twilight's Shroud y el Bastión Krol'dok", anchor: "martillo-crepuscular" },
      { label: "Bloodmasters' Ring", text: "un ring de lucha contra los mejores luchadores ogros", anchor: "ring" },
      { label: "Monte Hyjal", text: "el camino se abre por primera vez desde la Tercera Guerra", anchor: "hyjal" },
      { label: "Curious Crow y Cavernas del Túmulo", text: "una cadena de misiones y la nueva banda de 10", anchor: "cuervo" },
    ],
  },
  body: n(
    `On 19 October 2026 the official World of Warcraft YouTube channel published [Your Leveling Journey Past 30](${VIDEO}), a seven-minute video narrated by Blizzard on what comes after level 30 in WoW Forever. Two new areas carry the story: the **Riverglades**, which Blizzard places from the mid-30s to the mid-40s, and **Mount Hyjal**, presented as the climax of the levelling journey. Names are written as in Blizzard's English subtitles.

## Alliance: the Brotherhood of the Horse {#alliance}

Where the road used to end in places like Redridge Mountains, the Riverglades now continue it. Alliance players meet a faction from Warcraft II, the **Brotherhood of the Horse**: what remains of Stormwind's elite knights who fought at Blackrock Mountain. When Turalyon led the Alliance through the Dark Portal, they disobeyed and stayed behind to hunt down the last of the Horde, breaking with Stormwind for good. Twenty years later they live at **Farholde Keep**, still fighting the remnants of the old Horde, the Twilight's Hammer and the Bolder'ok ogres. For them, says the video, the Second War never ended.

## Horde: the Bolder'ok ogres {#horde}

Like Stranglethorn Vale, the Riverglades are not only for the Alliance. Horde players meet the **Bolder'ok**, an ogre clan that once belonged to the Twilight's Hammer and left it after seeing the madness of many of its members after the Second War. They survive between their former masters and the humans of Farholde, competing for the resources of the plains.

## The Twilight's Hammer, enemy of both {#twilights-hammer}

Both factions clash with the **Twilight's Hammer**, whose real goals the video does not reveal. The clan has taken the westernmost stronghold of the old Horde, now called **Twilight's Shroud**, and the fortress of **Krol'dok Stronghold**, which is also one of the new dungeons in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids). Blizzard presents the threat as one for all the Eastern Kingdoms, not only the Riverglades. Around the main story there are lighter quests: wrecking a pirate operation, rescuing a horse and more.

## The Bloodmasters' Ring {#ring}

Deep in ogre territory is the **Bloodmasters' Ring**, a fighting ring where players test themselves against the ogres' best brawlers. The video does not say how it works or what it rewards.

## Mount Hyjal {#hyjal}

For five years Malfurion Stormrage and the druids have kept Hyjal closed; now, for the first time since the Third War, the road into the mountain opens. Players work with the **Druids of the Talon** and the rest of the **Cenarion Circle** to heal the land and rebuild after the Battle of Mount Hyjal. Horde and Alliance members who have lived side by side there in an uneasy truce see their old tensions flare up again.

## The Curious Crow and the Barrow Deeps {#crow}

One of the questlines shown is that of the **Curious Crow**: a crow who has discovered warlocks at work and activity linked to the Wild King, and asks players for help. Inside Mount Hyjal waits the **Barrow Deeps**, the new 10-player raid of Forever: a prison that once held, in Blizzard's words, Azeroth's most infamous betrayer. The video does not name him.

## What we don't know yet {#unknown}

- The video gives no levels for Mount Hyjal, no rewards and no dates.
- It does not say whether these areas are already open in the beta.
- The Italian and Spanish names of the new factions and places: Blizzard has not published them yet, so we keep the English ones.

Forever launches on 4 November 2026: see our [release date guide](/en/guides/wow-forever-release-date).`,
    `Il 19 ottobre 2026 il canale YouTube ufficiale di World of Warcraft ha pubblicato [Your Leveling Journey Past 30](${VIDEO}), un video di sette minuti narrato da Blizzard su che cosa viene dopo il livello 30 in WoW Forever. Il racconto gira intorno a due aree nuove: le **Riverglades**, che Blizzard colloca più o meno dal livello 35 al 45, e **Mount Hyjal**, presentato come il culmine del livellamento. I nomi sono quelli dei sottotitoli inglesi di Blizzard: il gioco non ha l'italiano.

## Alleanza: la Brotherhood of the Horse {#alleanza}

Dove prima la strada finiva, per esempio nelle Redridge Mountains, ora continua nelle Riverglades. Chi gioca con l'Alleanza incontra una fazione di Warcraft II, la **Brotherhood of the Horse**: ciò che resta dei cavalieri migliori di Stormwind, che combatterono a Blackrock Mountain. Quando Turalyon guidò l'Alleanza oltre il Dark Portal, loro disobbedirono e restarono a dare la caccia agli ultimi resti dell'Orda, rompendo per sempre con Stormwind. Vent'anni dopo vivono a **Farholde Keep** e combattono ancora i resti della vecchia Orda, il Twilight's Hammer e gli ogre Bolder'ok. Per loro, dice il video, la Seconda Guerra non è mai finita.

## Orda: gli ogre Bolder'ok {#orda}

Come la Stranglethorn Vale, le Riverglades non sono solo per l'Alleanza. Chi gioca con l'Orda incontra i **Bolder'ok**, un clan di ogre che faceva parte del Twilight's Hammer e se n'è andato dopo aver visto la follia di tanti suoi membri dopo la Seconda Guerra. Sopravvivono fra i loro ex padroni e gli umani di Farholde, contendendosi le risorse delle pianure.

## Il Twilight's Hammer, nemico di tutti e due {#twilights-hammer}

Entrambe le fazioni si scontrano con il **Twilight's Hammer**, di cui il video non svela i veri scopi. Il clan ha preso la roccaforte più a ovest della vecchia Orda, che ora si chiama **Twilight's Shroud**, e la fortezza di **Krol'dok Stronghold**, che è anche uno dei nuovi dungeon della nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids). Blizzard la presenta come una minaccia per tutti gli Eastern Kingdoms, non solo per le Riverglades. Intorno alla storia principale ci sono missioni più leggere: smantellare un'operazione di pirati, salvare un cavallo e altro.

## Il Bloodmasters' Ring {#arena}

Nel cuore del territorio degli ogre c'è il **Bloodmasters' Ring**, un'arena dove i giocatori si misurano con i lottatori migliori degli ogre. Il video non dice come funziona né che cosa si vince.

## Mount Hyjal {#hyjal}

Per cinque anni Malfurion Stormrage e i druidi hanno tenuto chiuso Hyjal; ora, per la prima volta dalla Terza Guerra, la strada per la montagna si apre. I giocatori lavorano con i **Druids of the Talon** e il resto del **Cenarion Circle** per guarire la terra e ricostruire dopo la Battaglia di Mount Hyjal. Orda e Alleanza, che lì convivono da anni in una tregua difficile, vedono riaccendersi le vecchie tensioni.

## Il Curious Crow e le Barrow Deeps {#corvo}

Una delle catene di missioni mostrate è quella del **Curious Crow**: una cornacchia che ha scoperto degli stregoni all'opera e attività legate al Wild King, e chiede aiuto ai giocatori. Dentro Mount Hyjal aspetta **Barrow Deeps**, la nuova incursione da 10 giocatori di Forever: una prigione che un tempo teneva rinchiuso, dice Blizzard, il traditore più famoso di Azeroth. Il video non dice chi sia.

## Cosa non sappiamo ancora {#non-sappiamo}

- Il video non dà i livelli di Mount Hyjal, né ricompense, né date.
- Non dice se queste aree sono già aperte nella beta.
- I nomi spagnoli delle nuove fazioni e dei nuovi luoghi: Blizzard non li ha ancora pubblicati.

Forever esce il 4 novembre 2026: vedi la nostra [guida alla data di uscita](/it/guides/wow-forever-release-date).`,
    `El 19 de octubre de 2026 el canal oficial de YouTube de World of Warcraft publicó [Your Leveling Journey Past 30](${VIDEO}), un vídeo de siete minutos narrado por Blizzard sobre lo que viene después del nivel 30 en WoW Forever. La historia gira en torno a dos zonas nuevas: **Clarofluvial** (Riverglades en inglés), que Blizzard sitúa más o menos del nivel 35 al 45, y el **Monte Hyjal**, presentado como el punto culminante de la subida de nivel. Los nombres nuevos se quedan en inglés, como en los subtítulos de Blizzard, porque todavía no hay versión oficial en español.

## Alianza: la Brotherhood of the Horse {#alianza}

Donde antes el camino terminaba, por ejemplo en las Montañas Crestagrana, ahora sigue en Clarofluvial. Quien juega con la Alianza conoce una facción de Warcraft II, la **Brotherhood of the Horse**: lo que queda de los mejores caballeros de Ventormenta, que lucharon en la Montaña Roca Negra. Cuando Turalyon llevó a la Alianza a través del Portal Oscuro, ellos desobedecieron y se quedaron a perseguir los últimos restos de la Horda, rompiendo para siempre con Ventormenta. Veinte años después viven en **Farholde Keep** y siguen luchando contra los restos de la antigua Horda, el Martillo Crepuscular y los ogros Bolder'ok. Para ellos, dice el vídeo, la Segunda Guerra nunca terminó.

## Horda: los ogros Bolder'ok {#horda}

Como la Vega de Tuercespina, Clarofluvial no es solo para la Alianza. Quien juega con la Horda conoce a los **Bolder'ok**, un clan de ogros que formaba parte del Martillo Crepuscular y lo dejó tras ver la locura de muchos de sus miembros después de la Segunda Guerra. Sobreviven entre sus antiguos amos y los humanos de Farholde, disputándose los recursos de las llanuras.

## El Martillo Crepuscular, enemigo de ambos {#martillo-crepuscular}

Las dos facciones se enfrentan al **Martillo Crepuscular**, cuyos verdaderos objetivos el vídeo no desvela. El clan ha tomado la fortaleza más occidental de la antigua Horda, que ahora se llama **Twilight's Shroud**, y el **Bastión Krol'dok** (Krol'dok Stronghold), que también es una de las nuevas mazmorras de nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids). Blizzard la presenta como una amenaza para todos los Reinos del Este, no solo para Clarofluvial. Alrededor de la historia principal hay misiones más ligeras: desmantelar una operación de piratas, rescatar un caballo y más.

## El Bloodmasters' Ring {#ring}

En pleno territorio ogro está el **Bloodmasters' Ring**, un ring de lucha donde los jugadores se miden con los mejores luchadores ogros. El vídeo no dice cómo funciona ni qué recompensas da.

## Monte Hyjal {#hyjal}

Durante cinco años Malfurion Tempestira y los druidas han mantenido Hyjal cerrado; ahora, por primera vez desde la Tercera Guerra, el camino a la montaña se abre. Los jugadores colaboran con los **Druidas del Espolón** y el resto del **Círculo Cenarion** para sanar la tierra y reconstruir tras la Batalla del Monte Hyjal. La Horda y la Alianza, que allí conviven desde hace años en una tregua difícil, ven cómo vuelven las viejas tensiones.

## El Curious Crow y las Cavernas del Túmulo {#cuervo}

Una de las cadenas de misiones que se ven es la del **Curious Crow**: un cuervo que ha descubierto brujos en acción y actividad relacionada con el Wild King, y pide ayuda a los jugadores. Dentro del Monte Hyjal esperan **las Cavernas del Túmulo** (The Barrow Deeps), la nueva banda de 10 jugadores de Forever: una prisión que antaño encerró, según Blizzard, al traidor más famoso de Azeroth. El vídeo no dice quién es.

## Lo que aún no sabemos {#no-sabemos}

- El vídeo no da los niveles del Monte Hyjal, ni recompensas, ni fechas.
- No dice si estas zonas ya están abiertas en la beta.
- Los nombres en español de las nuevas facciones y lugares: Blizzard todavía no los ha publicado.

Forever sale el 4 de noviembre de 2026: consulta la [guía de la fecha de lanzamiento](/es/guides/wow-forever-release-date).`,
  ),
  faq: {
    en: [
      {
        q: "What are the new factions of the Riverglades in WoW Forever?",
        a: "According to Blizzard's video of 19 October 2026, Alliance players meet the Brotherhood of the Horse, knights from Warcraft II based at Farholde Keep, and Horde players meet the Bolder'ok ogre clan. Both fight the Twilight's Hammer.",
      },
      {
        q: "What is the Barrow Deeps in WoW Forever?",
        a: "It is the new 10-player raid of WoW Forever, located inside Mount Hyjal. Blizzard describes it as a prison that once held Azeroth's most infamous betrayer.",
      },
    ],
    it: [
      {
        q: "Quali sono le nuove fazioni delle Riverglades in WoW Forever?",
        a: "Secondo il video di Blizzard del 19 ottobre 2026, l'Alleanza incontra la Brotherhood of the Horse, cavalieri di Warcraft II che vivono a Farholde Keep, e l'Orda il clan di ogre Bolder'ok. Tutti e due combattono il Twilight's Hammer.",
      },
      {
        q: "Che cos'è Barrow Deeps in WoW Forever?",
        a: "È la nuova incursione da 10 giocatori di WoW Forever, dentro Mount Hyjal. Blizzard la descrive come una prigione che un tempo teneva rinchiuso il traditore più famoso di Azeroth.",
      },
    ],
    es: [
      {
        q: "¿Cuáles son las nuevas facciones de Clarofluvial en WoW Forever?",
        a: "Según el vídeo de Blizzard del 19 de octubre de 2026, la Alianza conoce a la Brotherhood of the Horse, caballeros de Warcraft II que viven en Farholde Keep, y la Horda al clan de ogros Bolder'ok. Los dos luchan contra el Martillo Crepuscular.",
      },
      {
        q: "¿Qué son las Cavernas del Túmulo en WoW Forever?",
        a: "Es la nueva banda de 10 jugadores de WoW Forever, dentro del Monte Hyjal. Blizzard la describe como una prisión que antaño encerró al traidor más famoso de Azeroth.",
      },
    ],
  },
};

export default item;

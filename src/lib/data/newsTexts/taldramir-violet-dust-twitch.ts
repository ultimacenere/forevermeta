import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Taldramir e Pouch of Violet Dust (4-5/11/2026), fonti rilette il 5/11 alle 02:20 CET.
 * - Ufficiale: post di @Warcraft del 4/11 22:03 UTC con l'immagine del tooltip (Soulbound, Two-Hand, Staff); replica
 *   "Forging Forever" su YouTube (4/11 22:42 UTC, 19.428 secondi = 5 h 23 min 48 s, descrizione "first legendary");
 *   articolo "Set Your Campfire Ablaze with the Pouch of Violet Dust!" (24317678, 5/11 00:30 UTC, solo en-us: le pagine
 *   it-it ed es-es non esistono ancora), con i post sul forum US 2401461 ed EU 639571.
 * - Stampa: Mein-MMO (live ticker: 14.000 spettatori alle 18:40 MEZ, drop segreto alle 23:00 MEZ; intervista del 28/10,
 *   pagina 4, sui leggendari), Wowhead 383735, 383747, 383748, 383740, GameSpot (articolo aggiornato dopo la rivelazione).
 * Come si ottiene Taldramir e per quali classi: nessuna informazione ufficiale.
 */
const POUCH = "https://news.blizzard.com/en-us/article/24317678/set-your-campfire-ablaze-with-the-pouch-of-violet-dust";
const REVEAL = "https://x.com/Warcraft/status/2118101756739531129";
const VIDEO = "https://www.youtube.com/watch?v=mFOkBPMKJhc";
const MEINMMO_INT = "https://mein-mmo.de/wow-forever-interview-aidan-moon-kris-zierhut/4/";
const MEINMMO_TICKER = "https://mein-mmo.de/wow-forever-launch-live-ticker/";
const WH_REVEAL = "https://www.wowhead.com/news=383747/taldramir-the-whispering-wood-revealed-as-wow-forever-legendary";
const WH_SECRET = "https://www.wowhead.com/news=383748/secret-twitch-drop-awards-pouch-of-violet-dust-toy-in-wow-forever";
const WH_BADGES = "https://www.wowhead.com/news=383740/new-alliance-and-horde-twitch-chat-badges-for-subs-to-wow-streamers";
const GS_LEGENDARY = "https://www.gamespot.com/articles/what-might-be-a-brand-new-wow-forever-legendary-weapon-is-being-teased/";

const item: NewsItem = {
  slug: "taldramir-violet-dust-twitch",
  date: "2026-11-04",
  source: "blizzard",
  topic: "news",
  url: POUCH,
  image: media.newsTaldramir.src,
  imageAlt: media.newsTaldramir.alt,
  guides: ["wow-forever-camping-professions", "wow-forever-zones-dungeons-raids"],
  title: n(
    "Taldramir, the Whispering Wood: WoW Forever's first legendary, and the Pouch of Violet Dust Twitch drop",
    "Taldramir, the Whispering Wood: il primo leggendario di WoW Forever e la Pouch of Violet Dust su Twitch",
    "Taldramir, the Whispering Wood: el primer legendario de WoW Forever y la Pouch of Violet Dust en Twitch",
  ),
  metaTitle: n(
    "WoW Forever: Taldramir legendary and Violet Dust drop",
    "WoW Forever: Taldramir e la Pouch of Violet Dust",
    "WoW Forever: Taldramir y la Pouch of Violet Dust",
  ),
  summary: n(
    "A few hours before launch Blizzard revealed Taldramir, the Whispering Wood, the first legendary of WoW Forever: a two-handed staff that Wētā Workshop built at full scale live on Twitch. How to get it, and for which classes, is not known. Four hours of WoW streams watched on Twitch by 13 November at 01:30 CET also earn the Pouch of Violet Dust, a toy that adds an hour to camp buffs until early December.",
    "Poche ore prima del lancio Blizzard ha svelato Taldramir, the Whispering Wood, il primo leggendario di WoW Forever: un bastone a due mani che Wētā Workshop ha costruito a grandezza naturale in diretta su Twitch. Come si ottiene, e per quali classi, non si sa. Con quattro ore di dirette di WoW guardate su Twitch entro le 01:30 CET del 13 novembre si ottiene anche la Pouch of Violet Dust, un giocattolo che allunga di un'ora i buff del campo fino a inizio dicembre.",
    "Pocas horas antes del lanzamiento Blizzard presentó Taldramir, the Whispering Wood, el primer legendario de WoW Forever: un bastón a dos manos que Wētā Workshop construyó a tamaño real en directo en Twitch. Cómo se consigue, y para qué clases, no se sabe. Con cuatro horas de directos de WoW vistas en Twitch antes de la 01:30 CET del 13 de noviembre se consigue además la Pouch of Violet Dust, un juguete que alarga una hora los beneficios del campamento hasta principios de diciembre.",
  ),
  description: n(
    "Taldramir, WoW Forever's first legendary, built live by Wētā Workshop, and the Pouch of Violet Dust Twitch drop: 4 hours by 13 November, 01:30 CET.",
    "Taldramir, il primo leggendario di WoW Forever costruito in diretta da Wētā Workshop, e la Pouch of Violet Dust: 4 ore su Twitch entro il 13 novembre.",
    "Taldramir, el primer legendario de WoW Forever hecho en directo por Wētā Workshop, y la Pouch of Violet Dust: 4 horas en Twitch hasta el 13 de noviembre.",
  ),
  highlights: {
    en: [
      { label: "Taldramir", text: "a two-handed staff, the first legendary of WoW Forever", anchor: "taldramir" },
      { label: "Built live", text: "Wētā Workshop on Twitch, 5 hours 24 minutes of replay", anchor: "stream" },
      { label: "How to get it", text: "not known: only what the developers said in October and guesses by the press", anchor: "how" },
      { label: "Pouch of Violet Dust", text: "one more hour of camp buffs, until early December", anchor: "pouch" },
      { label: "The drop", text: "4 hours on Twitch by 13 November at 01:30 CET", anchor: "drop" },
      { label: "The secret drop", text: "already given out at the end of the stream", anchor: "secret" },
    ],
    it: [
      { label: "Taldramir", text: "un bastone a due mani, il primo leggendario di WoW Forever", anchor: "taldramir" },
      { label: "Costruito in diretta", text: "Wētā Workshop su Twitch, 5 ore e 24 minuti di replica", anchor: "diretta" },
      { label: "Come si ottiene", text: "non si sa: solo cosa dicevano gli sviluppatori a ottobre e le ipotesi della stampa", anchor: "come" },
      { label: "Pouch of Violet Dust", text: "un'ora in più di buff del campo, fino a inizio dicembre", anchor: "pouch" },
      { label: "Il drop", text: "4 ore su Twitch entro le 01:30 CET del 13 novembre", anchor: "drop" },
      { label: "Il drop segreto", text: "già assegnato alla fine della diretta", anchor: "segreto" },
    ],
    es: [
      { label: "Taldramir", text: "un bastón a dos manos, el primer legendario de WoW Forever", anchor: "taldramir" },
      { label: "Hecho en directo", text: "Wētā Workshop en Twitch, 5 horas y 24 minutos de vídeo", anchor: "directo" },
      { label: "Cómo se consigue", text: "no se sabe: solo lo que dijeron los desarrolladores en octubre y las hipótesis de la prensa", anchor: "como" },
      { label: "Pouch of Violet Dust", text: "una hora más de beneficios del campamento, hasta principios de diciembre", anchor: "pouch" },
      { label: "El drop", text: "4 horas en Twitch antes de la 01:30 CET del 13 de noviembre", anchor: "drop" },
      { label: "El drop secreto", text: "ya repartido al final del directo", anchor: "secreto" },
    ],
  },
  body: n(
    `On 4 November 2026, while WoW Forever was in maintenance before launch, Blizzard used its Twitch channel for two things: a stream of more than five hours in which Wētā Workshop built a full-scale replica of Taldramir, the Whispering Wood, the first legendary of WoW Forever, and a toy given out as a Twitch drop, the Pouch of Violet Dust. Here is what is official, what is still a guess by the press, and how to get the drop before 13 November.

## Taldramir, the Whispering Wood {#taldramir}

At 22:03 UTC (23:03 CET) the official @Warcraft account [revealed the weapon](${REVEAL}): "Introducing Taldramir, the Whispering Wood, forged in partnership with @WetaWorkshop". The image shows its tooltip and little else: **Taldramir, the Whispering Wood**, Soulbound, a **two-handed staff**. No item level, no stats, no effect. The description of the replay on YouTube calls it "World of Warcraft: Forever's first legendary".

## The stream with Wētā Workshop {#stream}

The stream started on the afternoon of 4 November on the Warcraft Twitch channel with no announcement, only a title, "Camelot_reveal v2_final.mp4", while Twitch itself teased a "major reveal". For hours the team of Wētā Workshop, the New Zealand studio that makes props and replicas for cinema, 3D-printed, assembled and painted the staff, with Forever's music in the background. [Mein-MMO](${MEINMMO_TICKER}) counted more than 14,000 viewers at 18:40 CET. The replay is on YouTube as [Forging Forever](${VIDEO}), 5 hours and 24 minutes long, published at 22:42 UTC (23:42 CET).

## How to get it: not known yet {#how}

Blizzard has not said how to obtain Taldramir, which classes can use it or when it arrives. This is what we have:

- **What the developers said before.** In the interview with [Mein-MMO](${MEINMMO_INT}) published on 28 October, Forever's principal designer explained that legendaries are already planned for the first raid tiers, that the very first legendary item will require a massive guild-wide effort to craft and will benefit the whole group, and that over time every class and specialisation should get a chance at one. Blizzard has not said whether Taldramir is that item.
- **What the press guesses.** [Wowhead](${WH_REVEAL}) sees a clear Druid theme and points out that the staff appears in the Skyborne key art. [GameSpot](${GS_LEGENDARY}) notes that a Skyborne Druid holds a very similar staff in the WARPATH music video and in recent promotional art, and links it to the night elf lore of Hyjal Summit and the Barrow Deeps, two of the three raids that open on 9 December. These are guesses, not information from Blizzard.

The raids and their dates are in our [zones, dungeons and raids guide](/en/guides/wow-forever-zones-dungeons-raids).

## Pouch of Violet Dust {#pouch}

At 00:30 UTC on 5 November (01:30 CET) Blizzard published [Set Your Campfire Ablaze with the Pouch of Violet Dust!](${POUCH}), for now only in English. The Pouch of Violet Dust is an "ephemeral" toy that exists only in WoW Forever:

- it turns a campfire purple and adds **1 hour to all camp benefits**, for 2 hours in total;
- the bonus is shared: every player resting at that camp gets the same extension;
- it can only be used during the "WoW: Forever Launch Celebration" event, which ends **in early December**, with no exact date; after that the toy is removed from collections and leaves the game.

How camps and their one-hour buffs work is explained in our [camping and professions guide](/en/guides/wow-forever-camping-professions).

## How to get the drop {#drop}

| Drop | Details |
|---|---|
| Start | 4 November, 4:30 p.m. PST: 5 November, 00:30 UTC (01:30 CET) |
| End | 12 November, 4:30 p.m. PST: 13 November, 00:30 UTC (01:30 CET) |
| What to watch | 4 hours of any eligible World of Warcraft stream on Twitch |
| On YouTube | only the official World of Warcraft channel, for the whole time |

The rules from Blizzard's article:

- link your Twitch account at account.battle.net/connections, or YouTube from YouTube's Connected Apps page; if you changed your password or your Twitch or Battle.net account, you have to link them again, and after relinking you wait 7 days before you can link a different Twitch account;
- on Twitch you can switch channels without losing progress, but watching several at once does not make it faster;
- on Twitch you claim the drop on the channel you are watching or in the Drops Inventory; on YouTube the reward arrives by itself if the accounts were linked while you watched;
- the toy arrives in game within 24 hours, in the Battle.net region you log into first;
- browsers on PC and Mac and the Twitch and YouTube apps for Android and iOS count; apps on consoles and smart TVs do not;
- a claimed Twitch drop expires after 7 days if no Battle.net account is linked;
- eligible regions on Twitch: North America, Latin America, Europe, the Middle East, Africa, Japan, Taiwan, Southeast Asia, Australia and New Zealand; on YouTube Korea too.

The toy does not exist in Classic or in modern WoW, and you need a subscription or Game Time.

## The "secret" drop of 4 November {#secret}

Some players had the Pouch before the official campaign started. According to [Wowhead](${WH_SECRET}) and Mein-MMO, a drop that was not listed among Twitch's campaigns was given out in the last minutes of the legendary stream, when Taldramir was revealed; Wowhead adds that the exact criteria are unknown and that some players got it while watching other WoW streamers. Blizzard has not mentioned it. If you were watching on the evening of 4 November, check your Twitch Drops Inventory.

Also on Twitch, according to [Wowhead](${WH_BADGES}), anyone who subscribes or gifts a sub to a WoW streamer in November can claim Horde and Alliance chat badges until 30 November.

## What we don't know yet {#unknown}

- How to get Taldramir, for which classes, with which stats, and when.
- Whether it is the guild-wide legendary the developers spoke about in October.
- The exact end date of the Launch Celebration, and so of the Pouch of Violet Dust.
- When the Pouch article will be published in Italian and Spanish.`,
    `Il 4 novembre 2026, mentre WoW Forever era in manutenzione prima del lancio, Blizzard ha usato il suo canale Twitch per due cose: una diretta di oltre cinque ore in cui Wētā Workshop ha costruito una replica a grandezza naturale di Taldramir, the Whispering Wood, il primo leggendario di WoW Forever, e un giocattolo distribuito come drop di Twitch, la Pouch of Violet Dust. Ecco cosa è ufficiale, cosa è ancora un'ipotesi della stampa e come ottenere il drop entro il 13 novembre.

## Taldramir, the Whispering Wood {#taldramir}

Alle 22:03 UTC (23:03 CET) l'account ufficiale @Warcraft [ha svelato l'arma](${REVEAL}): "Introducing Taldramir, the Whispering Wood, forged in partnership with @WetaWorkshop", cioè forgiata insieme a Wētā Workshop. L'immagine mostra il suo tooltip e poco altro: **Taldramir, the Whispering Wood**, Soulbound (vincolato all'anima), **bastone a due mani**. Niente livello dell'oggetto, niente statistiche, nessun effetto. La descrizione della replica su YouTube lo chiama "World of Warcraft: Forever's first legendary", il primo leggendario del gioco.

## La diretta con Wētā Workshop {#diretta}

La diretta è partita nel pomeriggio del 4 novembre sul canale Twitch di Warcraft senza annunci, con un solo titolo, "Camelot_reveal v2_final.mp4", mentre la stessa Twitch prometteva una "major reveal", una grande rivelazione. Per ore la squadra di Wētā Workshop, lo studio neozelandese che realizza oggetti di scena e repliche per il cinema, ha stampato in 3D, montato e dipinto il bastone, con la musica di Forever in sottofondo. [Mein-MMO](${MEINMMO_TICKER}) contava più di 14.000 spettatori alle 18:40 CET. La replica è su YouTube con il titolo [Forging Forever](${VIDEO}), dura 5 ore e 24 minuti ed è uscita alle 22:42 UTC (23:42 CET).

## Come si ottiene: ancora non si sa {#come}

Blizzard non ha detto come si ottiene Taldramir, quali classi possono usarlo né quando arriva. Questo è quello che c'è:

- **Cosa avevano detto gli sviluppatori.** Nell'intervista a [Mein-MMO](${MEINMMO_INT}) pubblicata il 28 ottobre, il principal designer di Forever spiegava che i leggendari sono già previsti per i primi livelli di incursione, che il primissimo oggetto leggendario richiederà uno sforzo enorme di tutta la gilda per essere creato e andrà a vantaggio dell'intero gruppo, e che col tempo ogni classe e specializzazione avrà la sua occasione. Blizzard non ha detto se Taldramir sia quell'oggetto.
- **Le ipotesi della stampa.** Per [Wowhead](${WH_REVEAL}) il tema da Druido è evidente, e il bastone compare nelle illustrazioni principali degli Skyborne. [GameSpot](${GS_LEGENDARY}) fa notare che un Druido Skyborne impugna un bastone molto simile nel video musicale WARPATH e nelle immagini promozionali recenti, e lo collega al lore degli elfi della notte di Hyjal Summit e Barrow Deeps, due delle tre incursioni che aprono il 9 dicembre. Sono supposizioni, non informazioni di Blizzard.

Le incursioni e le loro date sono nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).

## Pouch of Violet Dust {#pouch}

Alle 00:30 UTC del 5 novembre (01:30 CET) Blizzard ha pubblicato [Set Your Campfire Ablaze with the Pouch of Violet Dust!](${POUCH}), per ora solo in inglese. La Pouch of Violet Dust è un giocattolo "effimero" che esiste solo in WoW Forever:

- colora di viola il fuoco del campo e allunga di **1 ora tutti i benefici del campo**, per 2 ore in tutto;
- il bonus è condiviso: chiunque riposi allo stesso campo riceve la stessa estensione;
- si può usare solo durante l'evento "WoW: Forever Launch Celebration", che finisce **a inizio dicembre**, senza una data precisa; dopo, il giocattolo viene tolto dalle collezioni e sparisce dal gioco.

Come funzionano i campi e i loro buff da un'ora è spiegato nella nostra [guida a camping e professioni](/it/guides/wow-forever-camping-professions).

## Come ottenere il drop {#drop}

| Drop | Dettagli |
|---|---|
| Inizio | 4 novembre alle 16:30 PST: 5 novembre alle 00:30 UTC (01:30 CET) |
| Fine | 12 novembre alle 16:30 PST: 13 novembre alle 00:30 UTC (01:30 CET) |
| Cosa guardare | 4 ore di una qualsiasi diretta idonea di World of Warcraft su Twitch |
| Su YouTube | solo il canale ufficiale di World of Warcraft, per tutto il tempo |

Le regole dell'articolo di Blizzard:

- collegate l'account Twitch da account.battle.net/connections, o YouTube dalla pagina Connected Apps di YouTube; se avete cambiato la password o modificato l'account Twitch o Battle.net, dovete ricollegarli, e dopo un nuovo collegamento passano 7 giorni prima di poter collegare un altro account Twitch;
- su Twitch si può cambiare canale senza perdere i progressi, ma guardarne più di uno insieme non fa andare più veloci;
- su Twitch il drop si riscatta sul canale che state guardando o nel Drops Inventory; su YouTube la ricompensa arriva da sola, se gli account erano collegati mentre guardavate;
- il giocattolo arriva in gioco entro 24 ore, nella regione Battle.net in cui entrate per prima;
- valgono i browser su PC e Mac e le app di Twitch e YouTube per Android e iOS; non valgono le app per console e smart TV;
- un drop di Twitch riscattato scade dopo 7 giorni se non c'è un account Battle.net collegato;
- regioni idonee su Twitch: Nord America, America Latina, Europa, Medio Oriente, Africa, Giappone, Taiwan, Sud-est asiatico, Australia e Nuova Zelanda; su YouTube anche la Corea.

Il giocattolo non esiste in Classic né nel WoW moderno, e serve un abbonamento o il Game Time.

## Il drop "segreto" del 4 novembre {#segreto}

Qualcuno aveva la Pouch già prima che partisse la campagna ufficiale. Secondo [Wowhead](${WH_SECRET}) e Mein-MMO, negli ultimi minuti della diretta del leggendario, quando è stato svelato Taldramir, è arrivato un drop che non compariva fra le campagne di Twitch; Wowhead aggiunge che i criteri esatti non si conoscono e che alcuni giocatori l'hanno avuto guardando altri streamer di WoW. Blizzard non ne ha parlato. Se stavate guardando la sera del 4 novembre, controllate il vostro Drops Inventory su Twitch.

Sempre su Twitch, secondo [Wowhead](${WH_BADGES}), chi a novembre si abbona o regala un abbonamento a uno streamer di WoW può ottenere i badge della chat di Orda e Alleanza fino al 30 novembre.

## Cosa non sappiamo ancora {#non-sappiamo}

- Come si ottiene Taldramir, per quali classi, con quali statistiche e quando.
- Se sia il leggendario di gilda di cui parlavano gli sviluppatori a ottobre.
- La data esatta in cui finisce la Launch Celebration, e quindi la Pouch of Violet Dust.
- Quando l'articolo sulla Pouch uscirà in italiano e in spagnolo.`,
    `El 4 de noviembre de 2026, mientras WoW Forever estaba en mantenimiento antes del lanzamiento, Blizzard usó su canal de Twitch para dos cosas: un directo de más de cinco horas en el que Wētā Workshop construyó una réplica a tamaño real de Taldramir, the Whispering Wood, el primer legendario de WoW Forever, y un juguete repartido como drop de Twitch, la Pouch of Violet Dust. Esto es lo oficial, lo que todavía es una hipótesis de la prensa y cómo conseguir el drop antes del 13 de noviembre.

## Taldramir, the Whispering Wood {#taldramir}

A las 22:03 UTC (23:03 CET) la cuenta oficial @Warcraft [presentó el arma](${REVEAL}): "Introducing Taldramir, the Whispering Wood, forged in partnership with @WetaWorkshop", es decir, forjada junto con Wētā Workshop. La imagen muestra su descripción emergente y poco más: **Taldramir, the Whispering Wood**, Soulbound (ligado al alma), **bastón a dos manos**. Ni nivel de objeto, ni estadísticas, ni efecto. La descripción del vídeo en YouTube lo llama "World of Warcraft: Forever's first legendary", el primer legendario del juego.

## El directo con Wētā Workshop {#directo}

El directo empezó la tarde del 4 de noviembre en el canal de Twitch de Warcraft sin anuncio previo, solo con un título, "Camelot_reveal v2_final.mp4", mientras la propia Twitch anunciaba una "major reveal", una gran revelación. Durante horas el equipo de Wētā Workshop, el estudio neozelandés que fabrica atrezo y réplicas para el cine, imprimió en 3D, montó y pintó el bastón, con la música de Forever de fondo. [Mein-MMO](${MEINMMO_TICKER}) contaba más de 14.000 espectadores a las 18:40 CET. El vídeo completo está en YouTube con el título [Forging Forever](${VIDEO}), dura 5 horas y 24 minutos y se publicó a las 22:42 UTC (23:42 CET).

## Cómo se consigue: aún no se sabe {#como}

Blizzard no ha dicho cómo se consigue Taldramir, qué clases pueden usarlo ni cuándo llega. Esto es lo que hay:

- **Lo que habían dicho los desarrolladores.** En la entrevista con [Mein-MMO](${MEINMMO_INT}) publicada el 28 de octubre, el diseñador principal de Forever explicaba que los legendarios ya están previstos para los primeros niveles de bandas, que el primerísimo objeto legendario exigirá un esfuerzo enorme de toda la hermandad para fabricarlo y beneficiará a todo el grupo, y que con el tiempo cada clase y especialización tendrá su oportunidad. Blizzard no ha dicho si Taldramir es ese objeto.
- **Las hipótesis de la prensa.** Para [Wowhead](${WH_REVEAL}) el tema de druida es claro, y el bastón aparece en las ilustraciones principales de los célicos. [GameSpot](${GS_LEGENDARY}) señala que un druida célico lleva un bastón muy parecido en el videoclip WARPATH y en imágenes promocionales recientes, y lo relaciona con el trasfondo de los elfos de la noche de la Cima Hyjal y las Cavernas del Túmulo, dos de las tres bandas que abren el 9 de diciembre. Son suposiciones, no información de Blizzard.

Las bandas y sus fechas están en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).

## Pouch of Violet Dust {#pouch}

A las 00:30 UTC del 5 de noviembre (01:30 CET) Blizzard publicó [Set Your Campfire Ablaze with the Pouch of Violet Dust!](${POUCH}), por ahora solo en inglés. La Pouch of Violet Dust es un juguete "efímero" que solo existe en WoW Forever:

- vuelve morada la hoguera del campamento y alarga **1 hora todos los beneficios del campamento**, hasta 2 horas en total;
- el bonus se comparte: cualquier jugador que descanse en ese campamento recibe la misma ampliación;
- solo se puede usar durante el evento "WoW: Forever Launch Celebration", que termina **a principios de diciembre**, sin fecha exacta; después, el juguete se retira de las colecciones y desaparece del juego.

Cómo funcionan los campamentos y sus beneficios de una hora está en nuestra [guía de campamentos y profesiones](/es/guides/wow-forever-camping-professions).

## Cómo conseguir el drop {#drop}

| Drop | Detalles |
|---|---|
| Inicio | 4 de noviembre a las 16:30 PST: 5 de noviembre a las 00:30 UTC (01:30 CET) |
| Fin | 12 de noviembre a las 16:30 PST: 13 de noviembre a las 00:30 UTC (01:30 CET) |
| Qué ver | 4 horas de cualquier directo apto de World of Warcraft en Twitch |
| En YouTube | solo el canal oficial de World of Warcraft, todo el tiempo |

Las reglas del artículo de Blizzard:

- vincula tu cuenta de Twitch en account.battle.net/connections, o YouTube desde la página Connected Apps de YouTube; si has cambiado la contraseña o la cuenta de Twitch o de Battle.net, tienes que volver a vincularlas, y tras una nueva vinculación hay que esperar 7 días para vincular otra cuenta de Twitch;
- en Twitch puedes cambiar de canal sin perder el progreso, pero ver varios a la vez no lo acelera;
- en Twitch el drop se reclama en el canal que estás viendo o en el Drops Inventory; en YouTube la recompensa llega sola si las cuentas estaban vinculadas mientras mirabas;
- el juguete llega al juego en un plazo de 24 horas, en la región de Battle.net en la que entres primero;
- valen los navegadores de PC y Mac y las aplicaciones de Twitch y YouTube para Android e iOS; no valen las aplicaciones de consolas y televisores inteligentes;
- un drop de Twitch reclamado caduca a los 7 días si no hay una cuenta de Battle.net vinculada;
- regiones aptas en Twitch: Norteamérica, Latinoamérica, Europa, Oriente Medio, África, Japón, Taiwán, el Sudeste Asiático, Australia y Nueva Zelanda; en YouTube también Corea.

El juguete no existe en Classic ni en el WoW moderno, y hace falta una suscripción o tiempo de juego.

## El drop "secreto" del 4 de noviembre {#secreto}

Algunos jugadores tenían la Pouch antes de que empezara la campaña oficial. Según [Wowhead](${WH_SECRET}) y Mein-MMO, en los últimos minutos del directo del legendario, cuando se presentó Taldramir, se repartió un drop que no aparecía entre las campañas de Twitch; Wowhead añade que no se conocen los criterios exactos y que algunos lo recibieron viendo a otros streamers de WoW. Blizzard no lo ha mencionado. Si estabas viendo el directo la noche del 4 de noviembre, revisa tu Drops Inventory en Twitch.

También en Twitch, según [Wowhead](${WH_BADGES}), quien se suscriba o regale una suscripción a un streamer de WoW en noviembre puede conseguir las insignias de chat de la Horda y de la Alianza hasta el 30 de noviembre.

## Lo que aún no sabemos {#no-sabemos}

- Cómo se consigue Taldramir, para qué clases, con qué estadísticas y cuándo.
- Si es el legendario de hermandad del que hablaron los desarrolladores en octubre.
- La fecha exacta en que termina la Launch Celebration, y con ella la Pouch of Violet Dust.
- Cuándo saldrá en español e italiano el artículo de la Pouch.`,
  ),
  faq: {
    en: [
      {
        q: "How do you get Taldramir in WoW Forever?",
        a: "Blizzard has not said yet. It revealed the staff on 4 November 2026 as the first legendary of WoW Forever, a two-handed staff, without saying how to obtain it, for which classes or when.",
      },
      {
        q: "How do I get the Pouch of Violet Dust?",
        a: "Link your Twitch account to Battle.net and watch four hours of World of Warcraft streams on Twitch between 00:30 UTC on 5 November and 00:30 UTC on 13 November (01:30 CET), then claim the drop. On YouTube only the official World of Warcraft channel counts.",
      },
      {
        q: "Until when can I use the Pouch of Violet Dust?",
        a: "Only during the WoW: Forever Launch Celebration event, which ends in early December; Blizzard has not given the exact date. After that the toy is removed from collections.",
      },
    ],
    it: [
      {
        q: "Come si ottiene Taldramir in WoW Forever?",
        a: "Blizzard non l'ha ancora detto. Il 4 novembre 2026 ha svelato il bastone come primo leggendario di WoW Forever, un bastone a due mani, senza dire come si ottiene, per quali classi né quando.",
      },
      {
        q: "Come si ottiene la Pouch of Violet Dust?",
        a: "Collega l'account Twitch a Battle.net e guarda quattro ore di dirette di World of Warcraft su Twitch fra le 00:30 UTC del 5 novembre e le 00:30 UTC del 13 novembre (01:30 CET), poi riscatta il drop. Su YouTube vale solo il canale ufficiale di World of Warcraft.",
      },
      {
        q: "Fino a quando si può usare la Pouch of Violet Dust?",
        a: "Solo durante l'evento WoW: Forever Launch Celebration, che finisce a inizio dicembre; Blizzard non ha dato la data esatta. Dopo, il giocattolo viene tolto dalle collezioni.",
      },
    ],
    es: [
      {
        q: "¿Cómo se consigue Taldramir en WoW Forever?",
        a: "Blizzard aún no lo ha dicho. El 4 de noviembre de 2026 presentó el bastón como el primer legendario de WoW Forever, un bastón a dos manos, sin decir cómo se consigue, para qué clases ni cuándo.",
      },
      {
        q: "¿Cómo consigo la Pouch of Violet Dust?",
        a: "Vincula tu cuenta de Twitch a Battle.net y mira cuatro horas de directos de World of Warcraft en Twitch entre las 00:30 UTC del 5 de noviembre y las 00:30 UTC del 13 de noviembre (01:30 CET), y luego reclama el drop. En YouTube solo cuenta el canal oficial de World of Warcraft.",
      },
      {
        q: "¿Hasta cuándo se puede usar la Pouch of Violet Dust?",
        a: "Solo durante el evento WoW: Forever Launch Celebration, que termina a principios de diciembre; Blizzard no ha dado la fecha exacta. Después, el juguete se retira de las colecciones.",
      },
    ],
  },
};

export default item;

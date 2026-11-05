import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Gli articoli ufficiali della vigilia del lancio, letti il 5/11/2026 nelle tre lingue.
 * - "WoW: Forever—What's New and What Feels Familiar" (24315821, 3/11 18:00 UTC; it "Contenuti nuovi e conosciuti",
 *   es "Entre novedades y cosas que ya conoces"). La regola di una sola fazione sul PvP c'era già nell'articolo sui set di
 *   regole (24302070): qui è ripetuta, non è una novità. Anche i 16 Legacy Points al lancio erano già nella guida Legacy.
 * - "Explore WoW: Forever with a Gamepad" (24316974, 3/11 20:00 UTC).
 * - "Stay Connected in World of Warcraft with Discord" (24296228): uscito il 6/8/2026 per il WoW moderno (topic US
 *   2333511), aggiornato il 4/11 alle 18:00 UTC con WoW Forever.
 * - Video "Launch Overview" (YouTube n2Wg46fwmb0, 3/11 17:00 UTC, 1.839 secondi = 30:39, 1.854.258 visualizzazioni alle
 *   02:20 CET del 5/11), senza sottotitoli scaricabili: capitoli dalla descrizione ufficiale.
 * - Stampa (non verificato da noi sul video): GameSpot e Wowhead 383725 sulle combinazioni, Wowhead 383716 sui token.
 */
const WHATS_NEW = "https://news.blizzard.com/en-us/article/24315821/wow-foreverwhats-new-and-what-feels-familiar";
const WHATS_NEW_IT = "https://news.blizzard.com/it-it/article/24315821/wow-forever-contenuti-nuovi-e-conosciuti";
const WHATS_NEW_ES = "https://news.blizzard.com/es-es/article/24315821/wow-forever-entre-novedades-y-cosas-que-ya-conoces";
const GAMEPAD = "https://news.blizzard.com/en-us/article/24316974/explore-wow-forever-with-a-gamepad";
const GAMEPAD_IT = "https://news.blizzard.com/it-it/article/24316974/scopri-wow-forever-con-il-controller";
const GAMEPAD_ES = "https://news.blizzard.com/es-es/article/24316974/explora-wow-forever-con-un-mando";
const DISCORD = "https://news.blizzard.com/en-us/article/24296228/stay-connected-in-world-of-warcraft-with-discord";
const DISCORD_IT = "https://news.blizzard.com/it-it/article/24296228/continua-a-seguire-world-of-warcraft-su-discord";
const DISCORD_ES = "https://news.blizzard.com/es-es/article/24296228/manten-el-contacto-en-world-of-warcraft-con-discord";
const VIDEO = "https://www.youtube.com/watch?v=n2Wg46fwmb0";
const NOW_LIVE = "https://news.blizzard.com/en-us/article/24315820/world-of-warcraft-forever-now-live";
const NOW_LIVE_IT = "https://news.blizzard.com/it-it/article/24315820/world-of-warcraft-forever-e-disponibile-ora";
const NOW_LIVE_ES = "https://news.blizzard.com/es-es/article/24315820/world-of-warcraft-forever-ya-esta-disponible";
const RULESETS = "https://news.blizzard.com/en-us/article/24302070/choose-your-ruleset-in-world-of-warcraft-forever";
const RULESETS_IT = "https://news.blizzard.com/it-it/article/24302070/scegli-il-tuo-set-di-regole-in-world-of-warcraft-forever";
const RULESETS_ES = "https://news.blizzard.com/es-es/article/24302070/elige-un-conjunto-de-reglas-para-world-of-warcraft-forever";
const GS_COMBOS = "https://www.gamespot.com/articles/wow-forever-may-have-just-sneakily-revealed-new-class-and-race-combos/";
const WH_COMBOS = "https://www.wowhead.com/news=383725/did-blizzard-tease-future-wow-forever-class-and-race-combinations";
const WH_TIER = "https://www.wowhead.com/news=383716/tier-pieces-require-quest-chain-that-requires-group-content-in-wow-forever";

const item: NewsItem = {
  slug: "launch-eve-official-guides",
  date: "2026-11-03",
  source: "blizzard",
  topic: "news",
  url: WHATS_NEW,
  image: media.newsEveGuides.src,
  imageAlt: media.newsEveGuides.alt,
  guides: ["wow-forever-addons-interface", "wow-forever-legacy-system", "wow-forever-rulesets", "wow-forever-races-classes"],
  title: n(
    "WoW Forever on launch eve: Blizzard's guides to what's new, gamepads and Discord, plus a 30-minute video",
    "WoW Forever alla vigilia: le guide di Blizzard su novità, controller e Discord, più un video di 30 minuti",
    "WoW Forever en la víspera: las guías de Blizzard sobre novedades, mando y Discord, y un vídeo de 30 minutos",
  ),
  metaTitle: n(
    "WoW Forever: Blizzard's launch eve guides and video",
    "WoW Forever: le guide e il video della vigilia",
    "WoW Forever: las guías y el vídeo de la víspera",
  ),
  summary: n(
    "On 3 and 4 November Blizzard published three practical guides for WoW Forever and a 30-minute Launch Overview video. They repeat that on PvP each account has one faction and confirm the cap of 16 Legacy Points per character at launch; the gamepad guide explains 84 slots on three bar sets, and the Discord article mirrors guild chat. The press spotted new race and class combinations in the video, which Blizzard has not confirmed.",
    "Il 3 e il 4 novembre Blizzard ha pubblicato tre guide pratiche per WoW Forever e un video di 30 minuti, il Launch Overview. Ripetono che sul PvP ogni account ha una sola fazione e confermano il tetto di 16 Legacy Point per personaggio al lancio; la guida al controller spiega gli 84 slot su tre set di barre, e l'articolo su Discord porta la chat di gilda su un canale Discord. Nel video la stampa ha visto nuove combinazioni di razza e classe, che Blizzard non ha confermato.",
    "El 3 y el 4 de noviembre Blizzard publicó tres guías prácticas para WoW Forever y un vídeo de 30 minutos, el Launch Overview. Repiten que en JcJ cada cuenta tiene una sola facción y confirman el límite de 16 puntos de legado por personaje en el lanzamiento; la guía del mando explica las 84 casillas en tres conjuntos de barras, y el artículo de Discord lleva el chat de hermandad a un canal de Discord. La prensa vio en el vídeo nuevas combinaciones de raza y clase, que Blizzard no ha confirmado.",
  ),
  description: n(
    "Blizzard's last WoW Forever guides before launch: one faction on PvP, 16 Legacy Points, a gamepad with 84 slots, Discord guild chat, the Launch Overview.",
    "Le ultime guide di Blizzard prima del lancio di WoW Forever: una fazione sul PvP, 16 Legacy Point, controller con 84 slot, Discord e il Launch Overview.",
    "Las últimas guías de Blizzard antes de WoW Forever: una facción en JcJ, 16 puntos de legado, mando con 84 casillas, Discord y el vídeo Launch Overview.",
  ),
  highlights: {
    en: [
      { label: "What's New", text: "one faction on PvP, 16 Legacy Points per character, Cooldown Manager and Damage Meter", anchor: "whats-new" },
      { label: "Gamepad", text: "every XInput controller, 84 slots on three bar sets, still in beta", anchor: "gamepad" },
      { label: "Discord", text: "guild chat mirrored between the game and a Discord channel", anchor: "discord" },
      { label: "Launch Overview", text: "30 minutes and twelve chapters, from the world to the raids", anchor: "video" },
      { label: "New combinations?", text: "spotted by the press in the video, not confirmed", anchor: "combos" },
    ],
    it: [
      { label: "Le novità", text: "una fazione sul PvP, 16 Legacy Point per personaggio, Cooldown Manager e Damage Meter", anchor: "novita" },
      { label: "Controller", text: "tutti i controller XInput, 84 slot su tre set di barre, ancora in beta", anchor: "controller" },
      { label: "Discord", text: "la chat di gilda collegata fra il gioco e un canale Discord", anchor: "discord" },
      { label: "Launch Overview", text: "30 minuti e dodici capitoli, dal mondo alle incursioni", anchor: "video" },
      { label: "Nuove combinazioni?", text: "viste dalla stampa nel video, non confermate", anchor: "combinazioni" },
    ],
    es: [
      { label: "Las novedades", text: "una facción en JcJ, 16 puntos de legado por personaje, Cooldown Manager y Damage Meter", anchor: "novedades" },
      { label: "Mando", text: "todos los mandos XInput, 84 casillas en tres conjuntos de barras, aún en beta", anchor: "mando" },
      { label: "Discord", text: "el chat de hermandad conectado entre el juego y un canal de Discord", anchor: "discord" },
      { label: "Launch Overview", text: "30 minutos y doce capítulos, del mundo a las bandas", anchor: "video" },
      { label: "¿Nuevas combinaciones?", text: "vistas por la prensa en el vídeo, sin confirmar", anchor: "combinaciones" },
    ],
  },
  body: n(
    `On 3 and 4 November 2026, in the last hours before launch, Blizzard published three practical articles for WoW Forever and a 30-minute video: [What's New and What Feels Familiar](${WHATS_NEW}) (3 November, 18:00 UTC), [Explore WoW: Forever with a Gamepad](${GAMEPAD}) (3 November, 20:00 UTC), an update of [Stay Connected in World of Warcraft with Discord](${DISCORD}) (4 November, 18:00 UTC) and the [Launch Overview](${VIDEO}) (3 November, 17:00 UTC). The three articles also exist in Italian and Spanish. Much of it confirms what we already knew; here is what is useful, and what is new.

## What's New and What Feels Familiar {#whats-new}

The article is written for those who play modern WoW and want to know what changes. The points that matter:

- **One faction on PvP**: "Players on PvP realms are restricted to one faction". It is the rule already written in the [rulesets article](${RULESETS}), repeated the day before launch: on the PvP ruleset an account only has characters of one faction. Groups, guilds, dungeons and raids still only work within the same ruleset and the same faction.
- **16 Legacy Points per character**: at launch each character can spend up to 16 Legacy Points, and you can reach that cap with a single character, with no need for alts. More in our [Legacy System guide](/en/guides/wow-forever-legacy-system).
- **Cooldown Manager and Damage Meter**: the game's Advanced options give access to both, alongside the Experience Preset settings. Our [addons and interface guide](/en/guides/wow-forever-addons-interface) explains where they are and how they work.
- **Experience Preset**: Classic or Enhanced only changes presentation, not the ruleset, and the names describe the default settings, not the player's skill.
- **Level cap**: it stays at 60, leaving "room for an expanding game without an expansion of levels".
- **Classes**: a familiar class name is only a starting point. Hunters, for example, use traps in combat, and their pets scale with gear and have abilities unique to each family. The new race and class combinations at launch are six: Undead Paladin, Dwarf Shaman, Gnome Priest, Human Hunter, Orc Mage and Troll Warlock.
- **Hardcore** arrives "a little after launch", still with no date.
- **Subscription**: a World of Warcraft subscription or Game Time covers both Forever and modern WoW.

## Playing with a gamepad {#gamepad}

WoW Forever supports **every XInput controller**, with Xbox and PlayStation button icons. You turn it on from Esc > Options > Gameplay > Gamepad, where you can also adjust Camera, HUD Modifier, Frame Focus Style, Action Bars, Targeting and Raid Targeting Options. On controllers with lighting, the light turns red for a Horde character and blue for an Alliance one.

The basic controls, with Xbox names:

| Button | What it does |
|---|---|
| Left stick / right stick | move / camera |
| LB / RB | friendly target / hostile target |
| X, A, B, Y | interact, jump, back, inspect (they also hold spells) |
| Menu / View | main menu / change focus frame |
| LB + RB + right stick | camera zoom |

- **Bars**: the HUD shows four action bars with the same layout; you switch by holding LT, RT or LT + RT, and release to return to the default bar. Blizzard's example for a Mage: Up for Polymorph, LT + Up for Fireball, RT + Up for Frostbolt, LT + RT + Up for Blizzard.
- **Bar sets**: holding LB + RB and pressing left or right on the D-pad switches between **three sets**, each with four bars and 28 slots, for **84 slots** in total.
- **Shortcuts**: LB + RB + B opens the backpack, LB + RB + Up the quest tracker, LB + RB + Down the chat, LB + RB + Y the buffs; the same functions are in the radial menu.
- A legend in the top-left corner shows the controls, and most screens, not all yet, have a footer with the available options.

Support is still a "functional beta": you need a keyboard to type in chat, and a keyboard-free experience is a longer-term aim, with no date.

## Discord for guilds {#discord}

The Discord article first came out on 6 August for modern WoW; on 4 November Blizzard updated it to include WoW Forever. It explains how to mirror guild chat between the game and a Discord channel:

1. **Link your account**: Esc > Options > Social > Enable Discord Functionality, while logged into Discord, then confirm.
2. **Discord permissions**: the administrator of the guild's Discord server must enable Manage Channels, View Channel and Send Messages for the channel to link.
3. **Link the guild**: in game the guild leader, or officers with the right permissions, open Guild & Communities (J) > Roster > Guild Settings > Guild Control > Discord Settings, then choose the server and a linkable channel. You can also give Discord its own separate chat channel in game.
4. **Display name**: messages from Discord show the default name (currently the last online character), the last online character name or the Discord Global Name.

In-game messages from players who have not linked their account do not appear in Discord. The guild leader can send Discord traffic to the normal /guild channel or to a dedicated /discord channel.

## The Launch Overview video {#video}

On 3 November at 17:00 UTC (18:00 CET) the World of Warcraft YouTube channel published the [Launch Overview](${VIDEO}), 30 minutes and 39 seconds in English; we could not download its subtitles. By the night of 5 November it had more than 1.8 million views, and Blizzard also embedded it in the [Now Live!](${NOW_LIVE}) article of launch night. The official chapters:

| Time | Chapter |
|---|---|
| 01:03 | The World |
| 03:52 | The Skyborne |
| 06:17 | Classes |
| 09:10 | Paladins |
| 11:24 | Rogues |
| 13:47 | Gear |
| 15:43 | Professions |
| 17:26 | Legacy System |
| 19:17 | Campsites |
| 21:02 | PvP |
| 22:37 | Dungeons |
| 26:58 | Raids |

According to [Wowhead](${WH_TIER}), in the raid chapter Blizzard explains that tier tokens open a questline that ends with the tier piece and requires group content. We have not been able to check it in the video.

## New race and class combinations? Not confirmed {#combos}

This part is **not confirmed by Blizzard**, and we have not checked the frames ourselves. [GameSpot](${GS_COMBOS}) and [Wowhead](${WH_COMBOS}) report that some shots in the video show combinations that are not possible at launch: a **Tauren Mage** casting Frostbolt, a **Skyborne Paladin** and what looks like a **Night Elf Shaman**, or at least a night elf in Shaman armour. Wowhead also spotted abilities that are not in the game, such as Chaos Bolt and a Druid casting Starfall, so the footage does not necessarily show the game as it is. GameSpot recalls that in October Forever's associate production director told it that some features planned for day one had been held back, and that new combinations would come "not that far after launch".

Blizzard has announced no new combinations: the ones you can play at launch are in our [races and classes guide](/en/guides/wow-forever-races-classes).

## What we don't know yet {#unknown}

- Whether the combinations in the video are a hint of what is coming or old footage.
- When gamepad support will leave the beta.
- The details of the tier token questline.`,
    `Il 3 e il 4 novembre 2026, nelle ultime ore prima del lancio, Blizzard ha pubblicato tre articoli pratici per WoW Forever e un video di 30 minuti: [Contenuti nuovi e conosciuti](${WHATS_NEW_IT}) (What's New and What Feels Familiar, 3 novembre alle 18:00 UTC, le 19:00 CET), [Scopri WoW: Forever con il controller](${GAMEPAD_IT}) (3 novembre alle 20:00 UTC, le 21:00 CET), un aggiornamento di [Continua a seguire World of Warcraft su Discord](${DISCORD_IT}) (4 novembre alle 18:00 UTC, le 19:00 CET) e il [Launch Overview](${VIDEO}) (3 novembre alle 17:00 UTC, le 18:00 CET). I tre articoli ci sono anche in italiano e in spagnolo. Molto conferma cose che sapevamo già; ecco cosa serve, e cosa c'è di nuovo.

## Contenuti nuovi e conosciuti {#novita}

L'articolo è scritto per chi gioca a WoW moderno e vuole capire cosa cambia. I punti che contano:

- **Una sola fazione sul PvP**: "I personaggi nei reami PvP hanno accesso a una sola fazione", scrive la versione italiana. È la regola già scritta nell'[articolo sui set di regole](${RULESETS_IT}), ripetuta il giorno prima del lancio: sul set PvP un account ha personaggi di una sola fazione. Gruppi, gilde, dungeon e incursioni funzionano sempre solo con lo stesso set di regole e la stessa fazione.
- **16 Legacy Point per personaggio**: al lancio ogni personaggio può spendere fino a 16 Legacy Point, e quel tetto si raggiunge anche con un solo personaggio, senza bisogno di personaggi secondari. Di più nella nostra [guida al Legacy System](/it/guides/wow-forever-legacy-system).
- **Cooldown Manager e Damage Meter**: le opzioni Advanced del gioco danno accesso a tutti e due, accanto alle impostazioni dell'Experience Preset. Dove sono e come funzionano lo spiega la nostra [guida ad addon e interfaccia](/it/guides/wow-forever-addons-interface).
- **Experience Preset**: Classic o Enhanced cambia solo la presentazione, non il set di regole, e i nomi descrivono le impostazioni di partenza, non la bravura di chi gioca.
- **Livello massimo**: resta 60, per lasciare spazio a un gioco che cresce senza alzare i livelli.
- **Classi**: un nome di classe conosciuto è solo un punto di partenza. I Cacciatori, per esempio, usano le trappole in combattimento, e i loro famigli crescono con l'equipaggiamento e hanno abilità uniche per ogni famiglia. Le nuove combinazioni di razza e classe al lancio sono sei: Paladino Non Morto, Sciamano Nano, Sacerdote Gnomo, Cacciatore Umano, Mago Orco e Stregone Troll.
- **Hardcore** arriva "a breve dopo il lancio", ancora senza una data.
- **Abbonamento**: l'abbonamento a World of Warcraft o il Game Time valgono sia per Forever sia per WoW moderno.

## Giocare con il controller {#controller}

WoW Forever supporta **tutti i controller XInput**, con le icone dei pulsanti Xbox e PlayStation. Si attiva da Esc > Options > Gameplay > Gamepad, dove si regolano anche Camera, HUD Modifier, Frame Focus Style, Action Bars, Targeting e Raid Targeting Options. Sui controller con l'illuminazione, la luce diventa rossa con un personaggio dell'Orda e blu con uno dell'Alleanza.

I comandi di base, con i nomi dei pulsanti Xbox:

| Pulsante | Cosa fa |
|---|---|
| Levetta sinistra / destra | movimento / visuale |
| LB / RB | bersaglio alleato / bersaglio nemico |
| X, A, B, Y | interagire, saltare, indietro, ispezionare (reggono anche incantesimi) |
| Menu / Visualizza | menu principale / cambio del riquadro di focus |
| LB + RB + levetta destra | zoom della visuale |

- **Barre**: l'HUD mostra quattro barre delle azioni con la stessa disposizione; si passa dall'una all'altra tenendo premuto LT, RT o LT + RT, e si torna alla barra di base lasciando i grilletti. L'esempio di Blizzard per un Mago: Su per Polymorph, LT + Su per Fireball, RT + Su per Frostbolt, LT + RT + Su per Blizzard.
- **Set di barre**: tenendo premuti LB + RB e premendo sinistra o destra sulla croce direzionale si passa fra **tre set**, ognuno con quattro barre e 28 slot, per **84 slot** in tutto.
- **Scorciatoie**: LB + RB + B apre la borsa, LB + RB + Su il Quest Tracker, LB + RB + Giù la chat, LB + RB + Y i buff; le stesse funzioni sono nel menu radiale.
- Una legenda nell'angolo in alto a sinistra mostra i comandi, e quasi tutte le schermate, non ancora tutte, hanno un piè di pagina con le opzioni disponibili.

Il supporto è ancora in "functional beta", una beta funzionante: per scrivere in chat serve la tastiera, e giocare senza tastiera è un obiettivo a lungo termine, senza una data.

## Discord per le gilde {#discord}

L'articolo su Discord era uscito il 6 agosto per WoW moderno; il 4 novembre Blizzard l'ha aggiornato includendo WoW Forever. Spiega come collegare la chat di gilda fra il gioco e un canale Discord:

1. **Collegare l'account**: Esc > Options > Social > Enable Discord Functionality (nella traduzione italiana dell'articolo Opzioni > Sociale > Attiva integrazione con Discord), con l'accesso a Discord già fatto, poi si conferma.
2. **Permessi su Discord**: l'amministratore del server Discord della gilda deve attivare sul canale da collegare i permessi per gestire il canale, vederlo e scriverci (Manage Channels, View Channel e Send Messages).
3. **Collegare la gilda**: in gioco il capogilda, o gli ufficiali con i permessi giusti, aprono Guild & Communities (J) > Roster > Guild Settings > Guild Control > Discord Settings, poi scelgono il server e un canale collegabile. Si può anche dare a Discord un canale di chat separato in gioco.
4. **Nome mostrato**: i messaggi in arrivo da Discord mostrano il nome predefinito (oggi l'ultimo personaggio online), il nome dell'ultimo personaggio online o il nome globale di Discord.

I messaggi in gioco di chi non ha collegato l'account non compaiono su Discord. Il capogilda può mandare il traffico di Discord nel normale canale /guild o in un canale dedicato /discord.

## Il video Launch Overview {#video}

Il 3 novembre alle 17:00 UTC (18:00 CET) il canale YouTube di World of Warcraft ha pubblicato il [Launch Overview](${VIDEO}), 30 minuti e 39 secondi in inglese; i sottotitoli non siamo riusciti a scaricarli. Nella notte del 5 novembre aveva più di 1,8 milioni di visualizzazioni, e Blizzard l'ha inserito anche nell'articolo [World of Warcraft: Forever è disponibile ora!](${NOW_LIVE_IT}) della notte del lancio. I capitoli ufficiali:

| Minuto | Capitolo |
|---|---|
| 01:03 | The World, il mondo |
| 03:52 | The Skyborne |
| 06:17 | Classes, le classi |
| 09:10 | Paladins, i Paladini |
| 11:24 | Rogues, i Ladri |
| 13:47 | Gear, l'equipaggiamento |
| 15:43 | Professions, le professioni |
| 17:26 | Legacy System |
| 19:17 | Campsites, i campi |
| 21:02 | PvP |
| 22:37 | Dungeons |
| 26:58 | Raids, le incursioni |

Secondo [Wowhead](${WH_TIER}), nel capitolo sulle incursioni Blizzard spiega che i token dei set tier aprono una catena di missioni che finisce con il pezzo del set e richiede contenuti di gruppo. Non abbiamo potuto verificarlo sul video.

## Nuove combinazioni di razza e classe? Non confermate {#combinazioni}

Questa parte **non è confermata da Blizzard**, e i fotogrammi non li abbiamo controllati noi. [GameSpot](${GS_COMBOS}) e [Wowhead](${WH_COMBOS}) riferiscono che alcune inquadrature del video mostrano combinazioni oggi impossibili: un **Mago Tauren** che lancia Frostbolt, un **Paladino Skyborne** e quello che sembra uno **Sciamano Elfo della Notte**, o almeno un elfo della notte con un'armatura da Sciamano. Wowhead ha notato anche abilità che nel gioco non ci sono, come Chaos Bolt e un Druido che lancia Starfall: le immagini quindi non mostrano per forza il gioco com'è. GameSpot ricorda che a ottobre l'associate production director di Forever le aveva detto che alcune funzioni previste per il primo giorno erano state tenute da parte, e che nuove combinazioni sarebbero arrivate "not that far after launch", non molto dopo il lancio.

Blizzard non ha annunciato combinazioni nuove: quelle giocabili al lancio sono nella nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).

## Cosa non sappiamo ancora {#non-sappiamo}

- Se le combinazioni del video siano un'anticipazione o immagini vecchie.
- Quando il supporto al controller uscirà dalla beta.
- I dettagli della catena di missioni dei token dei set tier.`,
    `El 3 y el 4 de noviembre de 2026, en las últimas horas antes del lanzamiento, Blizzard publicó tres artículos prácticos para WoW Forever y un vídeo de 30 minutos: [Entre novedades y cosas que ya conoces](${WHATS_NEW_ES}) (What's New and What Feels Familiar, 3 de noviembre a las 18:00 UTC, las 19:00 CET), [Explora WoW: Forever con un mando](${GAMEPAD_ES}) (3 de noviembre a las 20:00 UTC, las 21:00 CET), una actualización de [Mantén el contacto en World of Warcraft con Discord](${DISCORD_ES}) (4 de noviembre a las 18:00 UTC, las 19:00 CET) y el [Launch Overview](${VIDEO}) (3 de noviembre a las 17:00 UTC, las 18:00 CET). Los tres artículos existen también en español e italiano. Buena parte confirma lo que ya sabíamos; esto es lo útil, y lo nuevo.

## Entre novedades y cosas que ya conoces {#novedades}

El artículo está pensado para quien juega al WoW moderno y quiere saber qué cambia. Los puntos que importan:

- **Una sola facción en JcJ**: "Los jugadores de los reinos JcJ solo pueden unirse a una facción", dice la versión en español. Es la regla que ya estaba en el [artículo sobre los conjuntos de reglas](${RULESETS_ES}), repetida la víspera del lanzamiento: en el conjunto JcJ una cuenta solo tiene personajes de una facción. Grupos, hermandades, mazmorras y bandas siguen funcionando solo con el mismo conjunto de reglas y la misma facción.
- **16 puntos de legado por personaje**: en el lanzamiento cada personaje puede gastar hasta 16 puntos de legado, y ese límite se alcanza con un solo personaje, sin necesidad de alters. Más en nuestra [guía del sistema de legado](/es/guides/wow-forever-legacy-system).
- **Cooldown Manager y Damage Meter**: las opciones avanzadas del juego dan acceso a los dos (el gestor de tiempos de reutilización y el medidor de daño, en la traducción oficial), junto a los ajustes de la configuración de la experiencia. Dónde están y cómo funcionan lo explica nuestra [guía de addons e interfaz](/es/guides/wow-forever-addons-interface).
- **Configuración de la experiencia**: Clásica o Mejorada solo cambia la presentación, no el conjunto de reglas, y los nombres describen los ajustes iniciales, no la habilidad del jugador.
- **Nivel máximo**: sigue en 60, para que el juego pueda crecer sin que crezcan los niveles.
- **Clases**: un nombre de clase conocido es solo un punto de partida. Los cazadores, por ejemplo, usan trampas en combate, y sus mascotas escalan con el equipo y tienen facultades propias de cada familia. Las combinaciones nuevas de raza y clase en el lanzamiento son seis: paladín no-muerto, chamán enano, sacerdote gnomo, cazador humano, mago orco y brujo trol.
- **Hardcore** llegará "poco después del lanzamiento", todavía sin fecha.
- **Suscripción**: la suscripción a World of Warcraft o el tiempo de juego sirven tanto para Forever como para el WoW moderno.

## Jugar con mando {#mando}

WoW Forever es compatible con **todos los mandos XInput**, con iconos de botones de Xbox y PlayStation. Se activa en Escape > Opciones > Experiencia de juego > Mando, donde también se ajustan la cámara, el modificador de HUD, el estilo de enfoque de marco, las barras de acción, la selección de objetivo y las opciones de selección de objetivo de banda. En los mandos con iluminación, la luz se vuelve roja con un personaje de la Horda y azul con uno de la Alianza.

Los controles básicos, con los nombres de los botones de Xbox:

| Botón | Qué hace |
|---|---|
| Stick izquierdo / derecho | movimiento / cámara |
| LB / RB | objetivo amistoso / objetivo hostil |
| X, A, B, Y | interactuar, saltar, atrás, inspeccionar (también llevan hechizos) |
| Menú / Vista | menú principal / cambiar el marco de enfoque |
| LB + RB + stick derecho | zoom de la cámara |

- **Barras**: el HUD muestra cuatro barras de acción con la misma distribución; se cambia de una a otra manteniendo LT, RT o LT + RT, y al soltar los gatillos se vuelve a la barra principal. El ejemplo de Blizzard para un mago: Arriba para Polymorph, LT + Arriba para Fireball, RT + Arriba para Frostbolt, LT + RT + Arriba para Blizzard.
- **Conjuntos de barras**: manteniendo LB + RB y pulsando izquierda o derecha en la cruceta se pasa entre **tres conjuntos**, cada uno con cuatro barras y 28 casillas, hasta **84 casillas** en total.
- **Atajos**: LB + RB + B abre la mochila, LB + RB + Arriba el seguimiento de misiones, LB + RB + Abajo el chat, LB + RB + Y los beneficios; las mismas funciones están en el menú radial.
- Una leyenda en la esquina superior izquierda muestra los controles, y casi todas las pantallas, todavía no todas, tienen una franja inferior con las opciones disponibles.

La compatibilidad sigue en "fase beta funcional": para escribir en el chat hace falta un teclado, y jugar sin teclado es un objetivo a largo plazo, sin fecha.

## Discord para hermandades {#discord}

El artículo de Discord salió el 6 de agosto para el WoW moderno; el 4 de noviembre Blizzard lo actualizó para incluir WoW Forever. Explica cómo conectar el chat de hermandad entre el juego y un canal de Discord:

1. **Vincular la cuenta**: Escape > Opciones > Social > Activar funcionalidad de Discord, con la sesión de Discord ya iniciada, y luego confirmar.
2. **Permisos en Discord**: el administrador del servidor de Discord de la hermandad tiene que activar en el canal que se va a vincular los permisos para gestionar el canal, ver el canal y enviar mensajes (Manage Channels, View Channel y Send Messages).
3. **Vincular la hermandad**: en el juego, el maestro de hermandad, o los oficiales con los permisos adecuados, abren Hermandad y comunidades (J) > Lista > Ajustes de hermandad > menú Control > Ajustes de Discord, y eligen el servidor y un canal enlazable. También se puede dar a Discord un canal de chat propio dentro del juego.
4. **Nombre visible**: los mensajes que llegan de Discord muestran el nombre predeterminado (ahora, el último personaje en línea), el nombre del último personaje en línea o el nombre global de Discord.

Los mensajes del juego de quien no ha vinculado su cuenta no aparecen en Discord. El maestro de hermandad puede enviar el tráfico de Discord al canal /guild normal o a un canal /discord propio.

## El vídeo Launch Overview {#video}

El 3 de noviembre a las 17:00 UTC (18:00 CET) el canal de YouTube de World of Warcraft publicó el [Launch Overview](${VIDEO}), 30 minutos y 39 segundos en inglés; no hemos podido descargar sus subtítulos. En la noche del 5 de noviembre superaba los 1,8 millones de visualizaciones, y Blizzard lo incluyó también en el artículo [¡World of Warcraft: Forever ya está disponible!](${NOW_LIVE_ES}) de la noche del lanzamiento. Los capítulos oficiales:

| Minuto | Capítulo |
|---|---|
| 01:03 | The World, el mundo |
| 03:52 | The Skyborne, los célicos |
| 06:17 | Classes, las clases |
| 09:10 | Paladins, los paladines |
| 11:24 | Rogues, los pícaros |
| 13:47 | Gear, el equipo |
| 15:43 | Professions, las profesiones |
| 17:26 | Legacy System, el sistema de legado |
| 19:17 | Campsites, los campamentos |
| 21:02 | PvP, el JcJ |
| 22:37 | Dungeons, las mazmorras |
| 26:58 | Raids, las bandas |

Según [Wowhead](${WH_TIER}), en el capítulo de las bandas Blizzard explica que las fichas de conjunto (tier tokens) abren una cadena de misiones que termina con la pieza del conjunto y exige contenido de grupo. No hemos podido comprobarlo en el vídeo.

## ¿Nuevas combinaciones de raza y clase? Sin confirmar {#combinaciones}

Esta parte **no está confirmada por Blizzard**, y no hemos revisado los fotogramas nosotros. [GameSpot](${GS_COMBOS}) y [Wowhead](${WH_COMBOS}) cuentan que algunos planos del vídeo muestran combinaciones que hoy no son posibles: un **mago tauren** lanzando Frostbolt, un **paladín célico** y lo que parece un **chamán elfo de la noche**, o al menos un elfo de la noche con armadura de chamán. Wowhead vio también facultades que no están en el juego, como Chaos Bolt y un druida lanzando Starfall, así que las imágenes no muestran necesariamente el juego tal como es. GameSpot recuerda que en octubre el associate production director de Forever le dijo que algunas funciones previstas para el primer día se habían guardado para más adelante, y que las nuevas combinaciones llegarían "not that far after launch", no mucho después del lanzamiento.

Blizzard no ha anunciado combinaciones nuevas: las que se pueden jugar en el lanzamiento están en nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).

## Lo que aún no sabemos {#no-sabemos}

- Si las combinaciones del vídeo son un adelanto o imágenes antiguas.
- Cuándo saldrá de la beta la compatibilidad con mandos.
- Los detalles de la cadena de misiones de las fichas de conjunto.`,
  ),
  faq: {
    en: [
      {
        q: "Can I play both factions on the WoW Forever PvP ruleset?",
        a: "No. On the PvP ruleset each account can only create characters of one faction, as Blizzard repeated on 3 November 2026. On Normal and Roleplay you can have both factions.",
      },
      {
        q: "Does WoW Forever support controllers?",
        a: "Yes, every XInput controller, with Xbox and PlayStation icons, from Options > Gameplay > Gamepad. Support is still a functional beta, and you need a keyboard to type in chat.",
      },
      {
        q: "Are new race and class combinations coming to WoW Forever?",
        a: "Blizzard has not announced any beyond the six new ones at launch. The press spotted a Tauren Mage, a Skyborne Paladin and possibly a Night Elf Shaman in the Launch Overview video, but the same footage shows abilities that are not in the game.",
      },
    ],
    it: [
      {
        q: "Posso giocare tutte e due le fazioni sul set PvP di WoW Forever?",
        a: "No. Sul set PvP ogni account può creare personaggi di una sola fazione, come Blizzard ha ripetuto il 3 novembre 2026. Su Normal e Roleplay si possono avere tutte e due le fazioni.",
      },
      {
        q: "WoW Forever si gioca con il controller?",
        a: "Sì, con tutti i controller XInput, con le icone Xbox e PlayStation, da Options > Gameplay > Gamepad. Il supporto è ancora in beta e per scrivere in chat serve la tastiera.",
      },
      {
        q: "In WoW Forever arriveranno nuove combinazioni di razza e classe?",
        a: "Blizzard non ne ha annunciate oltre alle sei nuove del lancio. La stampa ha visto un Mago Tauren, un Paladino Skyborne e forse uno Sciamano Elfo della Notte nel video Launch Overview, ma le stesse immagini mostrano abilità che nel gioco non ci sono.",
      },
    ],
    es: [
      {
        q: "¿Puedo jugar con las dos facciones en el conjunto JcJ de WoW Forever?",
        a: "No. En el conjunto JcJ cada cuenta solo puede crear personajes de una facción, como repitió Blizzard el 3 de noviembre de 2026. En Normal y en Rol se pueden tener las dos facciones.",
      },
      {
        q: "¿WoW Forever se puede jugar con mando?",
        a: "Sí, con cualquier mando XInput, con iconos de Xbox y PlayStation, desde Opciones > Experiencia de juego > Mando. La compatibilidad sigue en fase beta y para escribir en el chat hace falta un teclado.",
      },
      {
        q: "¿Llegarán nuevas combinaciones de raza y clase a WoW Forever?",
        a: "Blizzard no ha anunciado ninguna aparte de las seis nuevas del lanzamiento. La prensa vio un mago tauren, un paladín célico y quizá un chamán elfo de la noche en el vídeo Launch Overview, pero las mismas imágenes muestran facultades que no están en el juego.",
      },
    ],
  },
};

export default item;

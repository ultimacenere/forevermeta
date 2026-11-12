import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Prima settimana di WoW Forever (4-11/11/2026), fonti rilette il 12/11. `source: "site"` perché mescola post ufficiali,
 * stampa e segnalazioni dei giocatori.
 * - Ufficiale: @Warcraft sul record (7/11 02:30 UTC, nessuna cifra); Kaivax sui totem (US 2409772/2, 11/11 01:10 UTC);
 *   thread degli hotfix di Kaivax (US 2403040, voci del 6, 9, 10 e 11 novembre, ultima modifica 12/11 00:47 UTC).
 * - Giocatori (segnalazioni): apertura del thread dei totem (US 2409772, 10/11 17:09 UTC: lag, disconnessioni,
 *   manutenzione d'emergenza non annunciata, totem Fire/Earth/Water persi); risposta #4 sulle altre perdite (oro,
 *   ricette, materiali), senza replica blu alle 11:50 UTC dell'11/11.
 * - Stampa (Wowhead): primi 60 (7/11, "almost 52 hours", gruppo di cinque con Jokerd), GM in gioco (7/11), messaggi in
 *   gioco sullo spegnimento (9/11 21:55 UTC), inizio dei problemi "around 1 PM PST" (articolo sui totem del 10/11),
 *   doppioni fra i layer (6/11), Darkmoon Faire a Elwynn Forest (8/11), dual spec a 50 oro dal 40 (11/11), podcast
 *   Pull 10 con Jokerd (11/11).
 * - Build del client (wago.tools, prodotto wowf): 1.60.1.70840 (7/11 02:28 UTC), 70862 (7/11 04:43 UTC), 70888
 *   (10/11 15:10 UTC). Nessuna nota trovata.
 * Ritocchi alle classi, XP dei dungeon, oro delle missioni e fazioni PvP hanno news proprie dello stesso giorno: qui
 * solo un rimando a /news.
 */
const RECORD = "https://x.com/Warcraft/status/2118893768984162668";
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-11-2026/2403040";
const TOTEM = "https://us.forums.blizzard.com/en/wow/t/buggedmissing-shaman-totems-since-mondays-server-chaos/2409772";
const TOTEM_FIX = `${TOTEM}/2`;
const WH_FIRST60 = "https://www.wowhead.com/news=383797/world-first-level-60s-in-wow-forever-in-less-than-three-days";
const WH_PULL10 = "https://www.wowhead.com/news=383843/jokerd-talks-secrets-and-plans-behind-world-first-60-the-pull-10-podcast";
const WH_GMS = "https://www.wowhead.com/news=383796/gms-appeared-in-person-to-celebrate-the-launch-of-wow-forever";
const WH_SHUTDOWN = "https://www.wowhead.com/news=383815/blizzard-taking-down-wow-forever-servers-shortly";
const WH_TOTEMS = "https://www.wowhead.com/news=383833/blizzard-addressing-missing-shaman-totems-due-to-mondays-server-issue-in-wow";
const WH_DUPES = "https://www.wowhead.com/news=383789/blizzard-fixing-issues-causing-duplicates-of-npcs-and-mobs";
const WH_DMF = "https://www.wowhead.com/news=383802/the-darkmoon-faire-is-coming-to-elwynn-forest-first-in-wow-forever";
const WH_DUAL = "https://www.wowhead.com/news=383835/dual-spec-costs-50-gold-at-level-40-unlock-secondary-talent-tree";

const item: NewsItem = {
  slug: "first-week-record-launch-crash-totems",
  date: "2026-11-11",
  source: "site",
  topic: "event",
  url: TOTEM,
  image: media.newsFirstWeek.src,
  imageAlt: media.newsFirstWeek.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-release-date"],
  title: n(
    "WoW Forever's first week: a record launch, the first level 60s, Monday's crash and the Shaman totem fix",
    "La prima settimana di WoW Forever: lancio da record, i primi 60, il crash di lunedì e i totem degli Sciamani",
    "Primera semana de WoW Forever: lanzamiento récord, primeros 60, la caída del lunes y los tótems del chamán",
  ),
  metaTitle: n(
    "WoW Forever first week: record, crash and totems",
    "WoW Forever, prima settimana: record, crash e totem",
    "WoW Forever, primera semana: récord, caída y tótems",
  ),
  summary: n(
    "Blizzard says WoW Forever had the biggest launch in WoW history by peak concurrent players, without giving numbers, and a group of five reached level 60 in under three days. On Monday 9 November a server crash took totems away from some Shamans, and a fix returned them on 11 November. Below are the week's main world hotfixes and a few things worth knowing.",
    "Blizzard dice che WoW Forever ha avuto il lancio più grande nella storia di WoW per picco di giocatori connessi, senza dare cifre, e un gruppo di cinque è arrivato al 60 in meno di tre giorni. Lunedì 9 novembre un crash dei server ha tolto i totem ad alcuni Sciamani, restituiti con una correzione l'11 novembre. Qui sotto trovate i principali hotfix della settimana sul mondo e alcune cose utili da sapere.",
    "Blizzard dice que WoW Forever tuvo el mayor lanzamiento de la historia de WoW por pico de jugadores conectados, sin dar cifras, y un grupo de cinco llegó al nivel 60 en menos de tres días. El lunes 9 de noviembre una caída de los servidores dejó a algunos chamanes sin tótems, devueltos con una corrección el 11 de noviembre. Aquí tienes las principales correcciones de la semana en el mundo y algunas cosas que conviene saber.",
  ),
  description: n(
    "WoW Forever's first week: a record launch with no numbers, the first level 60s, Monday's crash, the Shaman totem fix and the main world hotfixes.",
    "La prima settimana di WoW Forever: lancio da record senza cifre, i primi 60, il crash di lunedì, i totem degli Sciamani e gli hotfix sul mondo.",
    "Primera semana de WoW Forever: lanzamiento récord sin cifras, los primeros 60, la caída del lunes, los tótems del chamán y las correcciones.",
  ),
  highlights: {
    en: [
      { label: "Record launch", text: "peak concurrent and returning players, no numbers", anchor: "record" },
      { label: "First level 60s", text: "five players together in almost 52 hours", anchor: "first-60" },
      { label: "Monday's crash", text: "unstable servers on 9 November", anchor: "crash" },
      { label: "Shaman totems", text: "restored: free bag space and log in again", anchor: "totems" },
      { label: "World hotfixes", text: "fewer crowds, The Drowned City, graveyards, dungeon drops", anchor: "hotfixes" },
      { label: "Worth knowing", text: "Darkmoon Faire, dual spec, new client builds", anchor: "worth-knowing" },
    ],
    it: [
      { label: "Lancio da record", text: "picco di giocatori connessi e di ritorno, senza cifre", anchor: "record" },
      { label: "I primi 60", text: "cinque giocatori insieme in quasi 52 ore", anchor: "primi-60" },
      { label: "Il crash di lunedì", text: "server instabili il 9 novembre", anchor: "crash" },
      { label: "Totem degli Sciamani", text: "restituiti: liberate spazio nelle borse e rientrate", anchor: "totem" },
      { label: "Hotfix sul mondo", text: "meno affollamento, The Drowned City, cimiteri, bottino nei dungeon", anchor: "hotfix" },
      { label: "Da sapere", text: "Darkmoon Faire, dual spec, nuove build del client", anchor: "da-sapere" },
    ],
    es: [
      { label: "Lanzamiento récord", text: "pico de jugadores conectados y de regreso, sin cifras", anchor: "record" },
      { label: "Los primeros 60", text: "cinco jugadores juntos en casi 52 horas", anchor: "primeros-60" },
      { label: "La caída del lunes", text: "servidores inestables el 9 de noviembre", anchor: "caida" },
      { label: "Tótems del chamán", text: "devueltos: deja espacio en las bolsas y vuelve a entrar", anchor: "totems" },
      { label: "Correcciones en el mundo", text: "menos gente, The Drowned City, cementerios, botín en mazmorras", anchor: "correcciones" },
      { label: "Conviene saber", text: "Darkmoon Faire, doble especialización, nuevas versiones del cliente", anchor: "conviene-saber" },
    ],
  },
  body: n(
    `WoW Forever [opened on Wednesday 4 November 2026](/en/guides/wow-forever-release-date), and its first week brought a record announced by Blizzard, the first level 60 characters, a server crash on Monday and a long list of hotfixes. This article collects what happened from 4 to 11 November, keeping Blizzard's posts, press reports and players' reports apart. Launch night is covered in [our article of 4 November](/en/news/launch-day-november-4). Class tuning, dungeon experience, quest gold and PvP faction balance each have their own article in our [news](/en/news).

## The biggest launch in WoW history {#record}

On Saturday 7 November at 02:30 UTC (03:30 CET), [@Warcraft announced](${RECORD}) that WoW: Forever had the biggest launch in the game's history by peak concurrent players, and the highest number of returning players ever. Blizzard gave no figures, so we do not know how many people were online at the peak or what data the comparison is based on.

Blizzard also celebrated inside the game. [According to Wowhead](${WH_GMS}), GM characters appeared in the world to mark the launch, something that had become very rare in recent years: at least two were seen in Thunder Bluff and one in an Alliance location, all with the surname Snowstorm.

## The first level 60s in under three days {#first-60}

On 7 November [Wowhead reported](${WH_FIRST60}) the world first level 60, after almost 52 hours of play: a group of five players who levelled together and reached 60 at the same moment. The streamer Jokerd was one of them. Wowhead describes the method: the Paladin pulled large packs of enemies and the Mages killed them with Arcane Explosion, with careful calculations to keep everyone's experience in step until the end. Jokerd talked about the preparation on the [Pull 10 podcast](${WH_PULL10}) on 11 November.

## Monday's crash {#crash}

On Monday 9 November the servers became unstable. [According to Wowhead](${WH_TOTEMS}), the problems started around 13:00 PST (21:00 UTC, 22:00 CET), and at 21:55 UTC (22:55 CET) [the same site reported](${WH_SHUTDOWN}) in-game messages announcing that the servers would come down briefly, with a joke about murlocs in the server room. A player on the [Blizzard forum](${TOTEM}) describes lag, disconnections and an emergency maintenance that had not been announced. We have found no Blizzard post on the cause or the length of the outage: Kaivax only called it a crash when he announced the totem fix.

## Shaman totems restored {#totems}

After the crash some Shamans found a totem missing: Fire, Earth or Water, according to the reports [on the forum](${TOTEM}). The player who opened the thread adds that the class trainer could not provide a new one and that the starting quest could not be repeated, so without Blizzard the loss was permanent.

On Wednesday 11 November at 01:10 UTC (02:10 CET), Kaivax [replied](${TOTEM_FIX}) that a fix had been deployed in all regions: Shamans who lost a totem in the crash get it back in their bags. If you were online when the fix went live, make sure you have free space in your bags, then log out and back in to receive it.

In the same thread a player asks about other losses, such as gold spent on training and profession recipes and materials; Blizzard's reply covers only the totems. On 11 November the [hotfix list](${HOTFIX}) also says that the Item Restoration service has been disabled while Blizzard investigates a critical bug. Blizzard does not say what the bug is, so nothing official links it to the crash.

## The week's world hotfixes {#hotfixes}

Kaivax updates a single [hotfix thread](${HOTFIX}) every day. Leaving the class changes aside, these are the ones that change the most in the world:

- **6 November**: other players and their targets are easier to see at long distances, and the quest "Vorsha the Lasher" no longer hits everyone in the zone. The same day, [according to Wowhead](${WH_DUPES}), an in-game message said Blizzard was cleaning up duplicates of NPCs and monsters that had appeared across layers.
- **9 November**: fewer players in several congested zones, with a bigger cut on the PvP ruleset after complaints about overcrowding. In [The Drowned City](/en/guides/wow-forever-zones-dungeons-raids) creatures dealt about 30% more damage than intended, now fixed; in the Deathless Marrow encounter the creatures have 25% less health, and some of their abilities hit less hard or less often. Mounts can no longer be used inside Stratholme. Waylaid Crates and Craftsman's Writs now drop inside dungeons too, and the [Pouch of Violet Dust](/en/news/taldramir-violet-dust-twitch) now really adds the extra hour to Camp Benefits (see our [camping and professions guide](/en/guides/wow-forever-camping-professions)).
- **10 November**: players are no longer sent to the wrong graveyard when they die, and Shatterspear Trolls no longer give experience when killed.
- **11 November**: besides the Item Restoration shutdown, mounts now work in the named areas of Shen'dralas.

## Worth knowing {#worth-knowing}

- **Darkmoon Faire**: [according to Wowhead](${WH_DMF}), its first stop in WoW Forever is Elwynn Forest, and the in-game calendar listed it from Monday 9 November for one week.
- **Dual spec**: [Wowhead writes](${WH_DUAL}) that from level 40 the class trainer sells the second talent specialization for 50 gold. Before launch Blizzard had said that [dual spec would be there from day one](/en/news/blizzard-layering-cadence-dual-spec).
- **New client builds**: according to wago.tools, the game client has had three new builds since launch, 1.60.1.70840 and 1.60.1.70862 on 7 November and 1.60.1.70888 on 10 November. We have found no notes for them.
- **Known issues**: the ones Blizzard listed in the first days are in [our article of 5 November](/en/news/known-issues-november-5), and day two is covered [here](/en/news/day-two-layering-portals-maintenance).`,
    `WoW Forever è [uscito mercoledì 4 novembre 2026](/it/guides/wow-forever-release-date), e la prima settimana ha portato un record annunciato da Blizzard, i primi personaggi al livello 60, un crash dei server lunedì e una lunga serie di hotfix. Qui raccogliamo quello che è successo dal 4 all'11 novembre, tenendo separati i post di Blizzard, la stampa e le segnalazioni dei giocatori. La notte del lancio è nel [nostro articolo del 4 novembre](/it/news/launch-day-november-4). Ritocchi alle classi, esperienza nei dungeon, oro delle missioni ed equilibrio delle fazioni nel PvP hanno articoli a parte nelle [news](/it/news).

## Il lancio più grande nella storia di WoW {#record}

Sabato 7 novembre alle 02:30 UTC (03:30 CET) [@Warcraft ha annunciato](${RECORD}) che WoW: Forever ha avuto il lancio più grande nella storia del gioco per picco di giocatori connessi contemporaneamente, e il numero più alto di sempre di giocatori di ritorno. Blizzard non ha dato cifre, quindi non sappiamo quante persone fossero in gioco al picco né su quali dati si basi il confronto.

Blizzard ha festeggiato anche dentro il gioco. [Secondo Wowhead](${WH_GMS}) per il lancio si sono visti in giro personaggi GM, una cosa diventata molto rara negli ultimi anni: almeno due a Thunder Bluff e uno in una località dell'Alleanza, tutti con il cognome Snowstorm.

## I primi 60 in meno di tre giorni {#primi-60}

Il 7 novembre [Wowhead ha riportato](${WH_FIRST60}) il primo livello 60 mondiale, dopo quasi 52 ore di gioco: un gruppo di cinque giocatori che ha livellato insieme ed è arrivato al 60 nello stesso momento. Fra loro c'era lo streamer Jokerd. Wowhead descrive il metodo: il Paladino attirava grandi gruppi di nemici e i Maghi li eliminavano con Arcane Explosion, con calcoli precisi per tenere allineata l'esperienza di tutti fino all'ultimo. Jokerd ha raccontato la preparazione nel [podcast Pull 10](${WH_PULL10}) dell'11 novembre.

## Il crash di lunedì {#crash}

Lunedì 9 novembre i server sono diventati instabili. [Secondo Wowhead](${WH_TOTEMS}) i problemi sono cominciati verso le 13:00 PST (21:00 UTC, 22:00 CET), e alle 21:55 UTC (22:55 CET) [lo stesso sito riportava](${WH_SHUTDOWN}) i messaggi in gioco che annunciavano un breve spegnimento dei server, con una battuta sui murloc entrati nella sala server. Un giocatore sul [forum di Blizzard](${TOTEM}) parla di lag, disconnessioni e di una manutenzione d'emergenza non annunciata. Non abbiamo trovato post di Blizzard sulla causa o sulla durata del blocco: Kaivax lo ha solo chiamato crash annunciando la correzione dei totem.

## I totem degli Sciamani restituiti {#totem}

Dopo il crash alcuni Sciamani si sono ritrovati senza un totem: Fire, Earth o Water, secondo le segnalazioni [sul forum](${TOTEM}). Il giocatore che ha aperto il topic aggiunge che l'istruttore di classe non poteva darne uno nuovo e che la missione iniziale non si poteva ripetere: senza Blizzard la perdita era definitiva.

Mercoledì 11 novembre alle 01:10 UTC (02:10 CET) Kaivax [ha risposto](${TOTEM_FIX}) che la correzione è stata distribuita in tutte le regioni: gli Sciamani che hanno perso un totem nel crash lo ritrovano nelle borse. Se eravate in gioco quando è arrivata, liberate spazio nelle borse, poi uscite e rientrate per riceverlo.

Nello stesso topic un giocatore chiede di altre perdite, come l'oro speso per l'addestramento e ricette e materiali delle professioni; la risposta di Blizzard riguarda solo i totem. L'11 novembre, inoltre, la [lista degli hotfix](${HOTFIX}) dice che il servizio Item Restoration è disattivato mentre Blizzard indaga su un bug critico. Blizzard non dice di che bug si tratti, quindi nulla di ufficiale lo collega al crash.

## Gli hotfix della settimana sul mondo {#hotfix}

Kaivax aggiorna ogni giorno un unico [topic degli hotfix](${HOTFIX}). Lasciando da parte le classi, questi sono quelli che cambiano di più nel mondo di gioco:

- **6 novembre**: gli altri giocatori e i loro bersagli si vedono meglio a grande distanza, e la missione "Vorsha the Lasher" non colpisce più tutti quelli presenti nella zona. Lo stesso giorno, [secondo Wowhead](${WH_DUPES}), un messaggio in gioco diceva che Blizzard stava eliminando i doppioni di PNG e mostri comparsi fra i layer.
- **9 novembre**: meno giocatori in diverse zone congestionate, con un taglio più forte sul set di regole PvP dopo le lamentele per il sovraffollamento. In [The Drowned City](/it/guides/wow-forever-zones-dungeons-raids) i mostri facevano circa il 30% di danno in più del previsto, ora corretto; nell'incontro Deathless Marrow i mostri hanno il 25% di vita in meno, e alcune loro abilità colpiscono meno forte o meno spesso. Dentro Stratholme non si possono più usare le cavalcature. Waylaid Crates e Craftsman's Writs ora cadono anche nei dungeon, e la [Pouch of Violet Dust](/it/news/taldramir-violet-dust-twitch) aggiunge davvero l'ora in più ai Camp Benefits (vedete la nostra [guida a camping e professioni](/it/guides/wow-forever-camping-professions)).
- **10 novembre**: chi muore non viene più mandato al cimitero sbagliato, e gli Shatterspear Trolls non danno più esperienza quando li uccidete.
- **11 novembre**: oltre allo stop a Item Restoration, le cavalcature ora funzionano nelle aree con nome di Shen'dralas.

## Da sapere {#da-sapere}

- **Darkmoon Faire**: [secondo Wowhead](${WH_DMF}) la prima tappa in WoW Forever è Elwynn Forest, e il calendario in gioco la dava attiva da lunedì 9 novembre per una settimana.
- **Dual spec**: [Wowhead scrive](${WH_DUAL}) che dal livello 40 l'istruttore di classe vende la seconda specializzazione dei talenti per 50 oro. Prima del lancio Blizzard aveva detto che il [dual spec ci sarebbe stato dal primo giorno](/it/news/blizzard-layering-cadence-dual-spec).
- **Nuove build del client**: secondo wago.tools il client ha avuto tre build nuove dal lancio, la 1.60.1.70840 e la 1.60.1.70862 il 7 novembre e la 1.60.1.70888 il 10 novembre. Non abbiamo trovato note che le accompagnino.
- **Problemi noti**: quelli elencati da Blizzard nei primi giorni sono nel [nostro articolo del 5 novembre](/it/news/known-issues-november-5), e il secondo giorno è raccontato [qui](/it/news/day-two-layering-portals-maintenance).`,
    `WoW Forever [salió el miércoles 4 de noviembre de 2026](/es/guides/wow-forever-release-date), y su primera semana trajo un récord anunciado por Blizzard, los primeros personajes de nivel 60, una caída de los servidores el lunes y una larga lista de correcciones. Aquí reunimos lo que pasó del 4 al 11 de noviembre, separando los mensajes de Blizzard, la prensa y los avisos de los jugadores. La noche del lanzamiento está en [nuestro artículo del 4 de noviembre](/es/news/launch-day-november-4). Los ajustes de clases, la experiencia en mazmorras, el oro de las misiones y el equilibrio de facciones en JcJ tienen sus propios artículos en las [noticias](/es/news).

## El mayor lanzamiento de la historia de WoW {#record}

El sábado 7 de noviembre a las 02:30 UTC (03:30 CET), [@Warcraft anunció](${RECORD}) que WoW: Forever tuvo el mayor lanzamiento de la historia del juego por pico de jugadores conectados a la vez, y el mayor número de jugadores que regresan de toda su historia. Blizzard no dio cifras, así que no sabemos cuánta gente había conectada en el pico ni con qué datos se hizo la comparación.

Blizzard también lo celebró dentro del juego. [Según Wowhead](${WH_GMS}), por el lanzamiento se vieron personajes GM por el mundo, algo que se había vuelto muy raro en los últimos años: al menos dos en Cima del Trueno y uno en una zona de la Alianza, todos con el apellido Snowstorm.

## Los primeros 60 en menos de tres días {#primeros-60}

El 7 de noviembre [Wowhead informó](${WH_FIRST60}) del primer nivel 60 mundial, tras casi 52 horas de juego: un grupo de cinco jugadores que subió de nivel junto y llegó al 60 en el mismo momento. Uno de ellos era el streamer Jokerd. Wowhead describe el método: el paladín atraía grandes grupos de enemigos y los magos los eliminaban con Arcane Explosion, con cálculos precisos para mantener igualada la experiencia de todos hasta el final. Jokerd habló de la preparación en el [pódcast Pull 10](${WH_PULL10}) del 11 de noviembre.

## La caída del lunes {#caida}

El lunes 9 de noviembre los servidores se volvieron inestables. [Según Wowhead](${WH_TOTEMS}), los problemas empezaron hacia las 13:00 PST (21:00 UTC, 22:00 CET), y a las 21:55 UTC (22:55 CET) [la misma web recogía](${WH_SHUTDOWN}) los mensajes del juego que anunciaban un apagado breve de los servidores, con una broma sobre múrlocs en la sala de servidores. Un jugador en el [foro de Blizzard](${TOTEM}) habla de lag, desconexiones y un mantenimiento de emergencia sin aviso previo. No hemos encontrado ningún mensaje de Blizzard sobre la causa o la duración del corte: Kaivax solo lo llamó "crash" al anunciar la corrección de los tótems.

## Los tótems de los chamanes, devueltos {#totems}

Tras la caída, algunos chamanes se quedaron sin un tótem: Fire, Earth o Water, según los avisos [en el foro](${TOTEM}). El jugador que abrió el tema añade que el instructor de clase no podía darle uno nuevo y que la misión inicial no se podía repetir: sin Blizzard, la pérdida era definitiva.

El miércoles 11 de noviembre a las 01:10 UTC (02:10 CET), Kaivax [respondió](${TOTEM_FIX}) que la corrección ya está aplicada en todas las regiones: los chamanes que perdieron un tótem en la caída lo recuperan en sus bolsas. Si estabas conectado cuando llegó, deja espacio libre en las bolsas y luego cierra sesión y vuelve a entrar para recibirlo.

En el mismo tema, un jugador pregunta por otras pérdidas, como el oro gastado en entrenamiento y las recetas y materiales de profesión; la respuesta de Blizzard solo trata los tótems. Además, el 11 de noviembre la [lista de correcciones](${HOTFIX}) indica que el servicio Item Restoration está desactivado mientras Blizzard investiga un error crítico. Blizzard no dice de qué error se trata, así que nada oficial lo relaciona con la caída.

## Las correcciones de la semana en el mundo {#correcciones}

Kaivax actualiza cada día un único [tema de correcciones](${HOTFIX}). Dejando aparte las clases, estas son las que más cambian el mundo del juego:

- **6 de noviembre**: se ve mejor a los demás jugadores y sus objetivos a gran distancia, y la misión "Vorsha the Lasher" ya no golpea a todos los que están en la zona. Ese mismo día, [según Wowhead](${WH_DUPES}), un mensaje del juego decía que Blizzard estaba eliminando los duplicados de PNJ y monstruos aparecidos entre capas.
- **9 de noviembre**: menos jugadores en varias zonas congestionadas, con un recorte mayor en el conjunto de reglas JcJ tras las quejas por exceso de gente. En [The Drowned City](/es/guides/wow-forever-zones-dungeons-raids) los monstruos hacían un 30% más de daño del previsto, ya corregido; en el encuentro Deathless Marrow los monstruos tienen un 25% menos de salud, y algunas de sus habilidades pegan menos fuerte o con menos frecuencia. Ya no se pueden usar monturas dentro de Stratholme. Waylaid Crates y Craftsman's Writs ahora también caen en las mazmorras, y la [Pouch of Violet Dust](/es/news/taldramir-violet-dust-twitch) ya añade de verdad la hora extra a los Camp Benefits (mira nuestra [guía de acampada y profesiones](/es/guides/wow-forever-camping-professions)).
- **10 de noviembre**: si mueres, ya no acabas en el cementerio equivocado, y los Shatterspear Trolls ya no dan experiencia al matarlos.
- **11 de noviembre**: además de la desactivación de Item Restoration, las monturas ya funcionan en las áreas con nombre de Shen'dralas.

## Conviene saber {#conviene-saber}

- **Darkmoon Faire (Feria de la Luna Negra)**: [según Wowhead](${WH_DMF}), su primera parada en WoW Forever es el Bosque de Elwynn, y el calendario del juego la daba activa desde el lunes 9 de noviembre durante una semana.
- **Doble especialización**: [Wowhead escribe](${WH_DUAL}) que desde el nivel 40 el instructor de clase vende la segunda especialización de talentos por 50 de oro. Antes del lanzamiento Blizzard había dicho que la [doble especialización estaría desde el primer día](/es/news/blizzard-layering-cadence-dual-spec).
- **Nuevas versiones del cliente**: según wago.tools, el cliente ha tenido tres compilaciones nuevas desde el lanzamiento, la 1.60.1.70840 y la 1.60.1.70862 el 7 de noviembre y la 1.60.1.70888 el 10 de noviembre. No hemos encontrado notas que las acompañen.
- **Problemas conocidos**: los que Blizzard listó en los primeros días están en [nuestro artículo del 5 de noviembre](/es/news/known-issues-november-5), y el segundo día lo contamos [aquí](/es/news/day-two-layering-portals-maintenance).`,
  ),
  faq: {
    en: [
      {
        q: "How big was the WoW Forever launch?",
        a: "On 7 November @Warcraft said that WoW Forever had the biggest launch in WoW history by peak concurrent players and the highest number of returning players. Blizzard did not publish any figures.",
      },
      {
        q: "My Shaman lost a totem in the WoW Forever crash: how do I get it back?",
        a: "Blizzard deployed a fix in all regions on 11 November at 01:10 UTC, and the totem goes back into your bags. If you were online at that time, free some bag space, then log out and back in.",
      },
      {
        q: "How much does dual spec cost in WoW Forever?",
        a: "According to Wowhead, the class trainer sells the second talent specialization for 50 gold from level 40. Blizzard had said before launch that dual spec would be in the game from day one.",
      },
    ],
    it: [
      {
        q: "Quanto è stato grande il lancio di WoW Forever?",
        a: "Il 7 novembre @Warcraft ha detto che WoW Forever ha avuto il lancio più grande nella storia di WoW per picco di giocatori connessi e il numero più alto di giocatori di ritorno. Blizzard non ha pubblicato cifre.",
      },
      {
        q: "Il mio Sciamano ha perso un totem nel crash di WoW Forever: come lo recupero?",
        a: "Blizzard ha distribuito una correzione in tutte le regioni l'11 novembre alle 01:10 UTC, e il totem torna nelle borse. Se eravate in gioco in quel momento, liberate spazio nelle borse, poi uscite e rientrate.",
      },
      {
        q: "Quanto costa il dual spec in WoW Forever?",
        a: "Secondo Wowhead l'istruttore di classe vende la seconda specializzazione dei talenti per 50 oro dal livello 40. Prima del lancio Blizzard aveva detto che il dual spec ci sarebbe stato dal primo giorno.",
      },
    ],
    es: [
      {
        q: "¿Cómo de grande fue el lanzamiento de WoW Forever?",
        a: "El 7 de noviembre @Warcraft dijo que WoW Forever tuvo el mayor lanzamiento de la historia de WoW por pico de jugadores conectados y el mayor número de jugadores que regresan. Blizzard no publicó cifras.",
      },
      {
        q: "Mi chamán perdió un tótem en la caída de WoW Forever: ¿cómo lo recupero?",
        a: "Blizzard aplicó una corrección en todas las regiones el 11 de noviembre a las 01:10 UTC, y el tótem vuelve a tus bolsas. Si estabas conectado en ese momento, deja espacio libre en las bolsas, cierra sesión y vuelve a entrar.",
      },
      {
        q: "¿Cuánto cuesta la doble especialización en WoW Forever?",
        a: "Según Wowhead, el instructor de clase vende la segunda especialización de talentos por 50 de oro desde el nivel 40. Blizzard había dicho antes del lanzamiento que estaría en el juego desde el primer día.",
      },
    ],
  },
};

export default item;

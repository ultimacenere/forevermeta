import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Notte del lancio di WoW Forever (4/11/2026 23:00 UTC), riletta sulle fonti il 5/11 alle 02:15 CET. `source: "site"`
 * perché mescola post ufficiali e segnalazioni dei giocatori.
 * - Ufficiale: post di Kaivax sull'orario (US 2400905, 18:13 UTC); "Now Live!" su Blizzard News (24315820, 23:00 UTC,
 *   stessa pagina dell'articolo del 29/10, riscritta); topic "Info & Known Issues" di Vrakthris (US 2396179, 23:21 UTC,
 *   sezione Known Issues vuota, post 2-4 segnaposto); Kaivax "Language and Social Settings" solo EU (639555, 23:44 UTC,
 *   screenshot di Options > System > Languages and Social); @BlizzardCS su WOW51900337 (14:00 UTC); @Warcraft "starting
 *   NOW" (23:30 UTC). Cooldown di 24 ore della Preferred Online Language dall'articolo sui set di regole (24302070).
 * - Giocatori (non confermato, nessuna risposta blu fino alle 02:15 CET): US 2401237, 2401379, 2401391, 2401311,
 *   2401326, 2401401, 2401467, 2401444, 2401490; EU 639549, 639545, 639517 (pre-lancio), 639559, 639555 (post 4).
 * - Stampa: GameSpot (5/11 00:45 UTC), live ticker di Mein-MMO (voci fino alle 01:45 MEZ), Wowhead 383749 e 383753.
 * La manutenzione 18:00-23:00 UTC è un messaggio del launcher riportato dalla stampa, non un post ufficiale.
 */
const LAUNCH_TIME = "https://us.forums.blizzard.com/en/wow/t/world-of-warcraft-forever-launch-time/2400905";
const NOW_LIVE = "https://news.blizzard.com/en-us/article/24315820/world-of-warcraft-forever-now-live";
const NOW_LIVE_IT = "https://news.blizzard.com/it-it/article/24315820/world-of-warcraft-forever-e-disponibile-ora";
const NOW_LIVE_ES = "https://news.blizzard.com/es-es/article/24315820/world-of-warcraft-forever-ya-esta-disponible";
const KNOWN_ISSUES = "https://us.forums.blizzard.com/en/wow/t/world-of-warcraft-forever-info-known-issues/2396179";
const LANGUAGE_EU = "https://eu.forums.blizzard.com/en/wow/t/language-and-social-settings/639555";
const CS_X = "https://x.com/BlizzardCS/status/2117980182384390462";
const LIVE_X = "https://x.com/Warcraft/status/2118123750788943915";
const RULESETS = "https://news.blizzard.com/en-us/article/24302070/choose-your-ruleset-in-world-of-warcraft-forever";
const RULESETS_IT = "https://news.blizzard.com/it-it/article/24302070/scegli-il-tuo-set-di-regole-in-world-of-warcraft-forever";
const RULESETS_ES = "https://news.blizzard.com/es-es/article/24302070/elige-un-conjunto-de-reglas-para-world-of-warcraft-forever";
const GAMESPOT = "https://www.gamespot.com/articles/wow-forevers-launch-is-going-surprisingly-smooth/";
const MEINMMO = "https://mein-mmo.de/wow-forever-launch-live-ticker/";
const WH_LIVE = "https://www.wowhead.com/news=383749/world-of-warcraft-forever-is-now-live";
const RULESET_GREY = "https://us.forums.blizzard.com/en/wow/t/this-ruleset-is-temporarily-not-available/2401237";
const THROTTLE_US = "https://us.forums.blizzard.com/en/wow/t/creation-of-that-type-of-charachter-is-throttled/2401379";
const THROTTLE_US2 = "https://us.forums.blizzard.com/en/wow/t/1-hour-and-50-mins-of-throttle/2401391";
const THROTTLE_EU = "https://eu.forums.blizzard.com/en/wow/t/unable-to-create-characters/639549";
const IMBALANCE = "https://us.forums.blizzard.com/en/wow/t/this-faction-is-currently-unaivalable-on-this-ruleset-due-to-population-imbalance/2401311";
const DELETE_EU = "https://eu.forums.blizzard.com/en/wow/t/cant-delete-alliance-character-to-create-horde/639545";
const RESERVED = "https://us.forums.blizzard.com/en/wow/t/reserved-names-gone/2401326";
const SKYBORNE = "https://us.forums.blizzard.com/en/wow/t/no-quests-showing-up-for-new-race/2401401";
const DC_EU_PRE = "https://eu.forums.blizzard.com/en/wow/t/you-have-been-disconnected/639517";
const DC_EU = "https://eu.forums.blizzard.com/en/wow/t/fix-constant-disconnects-and-not-being-able-to-log-in/639559";
const DC_US = "https://us.forums.blizzard.com/en/wow/t/anyone-else-getting-dced-every-5-minuts/2401467";

const item: NewsItem = {
  slug: "launch-day-november-4",
  date: "2026-11-04",
  source: "site",
  topic: "event",
  image: media.newsLaunchDay.src,
  imageAlt: media.newsLaunchDay.alt,
  guides: ["wow-forever-release-date", "wow-forever-rulesets", "wow-forever-addons-interface"],
  title: n(
    "WoW Forever is live: how launch night went, the first problems players report and what to do now",
    "WoW Forever è online: com'è andata la notte del lancio, i primi problemi segnalati e cosa fare adesso",
    "WoW Forever ya está disponible: cómo fue la noche del lanzamiento, los primeros problemas y qué hacer",
  ),
  metaTitle: n(
    "WoW Forever launch night: first problems and what to do",
    "WoW Forever: la notte del lancio e i primi problemi",
    "WoW Forever: la noche del lanzamiento y los problemas",
  ),
  summary: n(
    "WoW Forever opened on time at 23:00 UTC on 4 November, midnight CET, after five hours of maintenance. After half an hour of greyed-out rulesets and short queues the game ran smoothly, but players report characters they cannot create (\"throttled\"), the Horde locked on PvP and missing reserved characters, with no answer from Blizzard so far. Blizzard's Known Issues topic is open, but its list is still empty.",
    "WoW Forever è partito puntuale alle 23:00 UTC del 4 novembre, la mezzanotte in Italia, dopo cinque ore di manutenzione. Dopo mezz'ora di set di regole grigi e code brevi il gioco ha retto bene, ma i giocatori segnalano personaggi che non si riescono a creare (\"throttled\"), l'Orda bloccata sul PvP e personaggi prenotati spariti, per ora senza risposta da Blizzard. Il topic ufficiale dei problemi noti è aperto, ma l'elenco è ancora vuoto.",
    "WoW Forever abrió puntual a las 23:00 UTC del 4 de noviembre, la medianoche CET, tras cinco horas de mantenimiento. Tras media hora de conjuntos de reglas en gris y colas cortas el juego funcionó bien, pero los jugadores cuentan que no pueden crear personajes (\"throttled\"), que la Horda está bloqueada en JcJ y que han desaparecido personajes reservados, por ahora sin respuesta de Blizzard. El tema oficial de problemas conocidos está abierto, pero su lista sigue vacía.",
  ),
  description: n(
    "WoW Forever launch night: on time at midnight CET, greyed-out rulesets, problems reported by players, the empty Known Issues list and what to do now.",
    "La notte del lancio di WoW Forever: puntuale a mezzanotte, set di regole grigi, problemi segnalati dai giocatori, problemi noti vuoti e cosa fare.",
    "La noche del lanzamiento de WoW Forever: puntual a medianoche CET, conjuntos en gris, problemas de los jugadores, la lista vacía y qué hacer ahora.",
  ),
  highlights: {
    en: [
      { label: "On time", text: "23:00 UTC, midnight CET, after five hours of maintenance", anchor: "launch" },
      { label: "The first half hour", text: "short queues and greyed-out rulesets", anchor: "first-minutes" },
      { label: "Then stable", text: "little lag and crowded starting zones, according to the press", anchor: "stable" },
      { label: "Player reports", text: "\"throttled\" creation, Horde locked on PvP, missing reserved characters", anchor: "problems" },
      { label: "Known Issues", text: "Blizzard's topic is open, the list is empty", anchor: "known-issues" },
      { label: "Language settings", text: "Blizzard's only tip on launch night", anchor: "language" },
      { label: "What to do now", text: "practical steps for each problem", anchor: "what-to-do" },
    ],
    it: [
      { label: "Puntuale", text: "23:00 UTC, mezzanotte in Italia, dopo cinque ore di manutenzione", anchor: "lancio" },
      { label: "La prima mezz'ora", text: "code brevi e set di regole grigi", anchor: "prima-mezzora" },
      { label: "Poi stabile", text: "poco lag e zone iniziali affollate, secondo la stampa", anchor: "stabile" },
      { label: "Segnalazioni dei giocatori", text: "creazione \"throttled\", Orda bloccata sul PvP, personaggi prenotati spariti", anchor: "problemi" },
      { label: "Problemi noti", text: "il topic di Blizzard è aperto, l'elenco è vuoto", anchor: "problemi-noti" },
      { label: "Impostazioni della lingua", text: "l'unico consiglio di Blizzard nella notte del lancio", anchor: "lingua" },
      { label: "Cosa fare adesso", text: "i passi pratici per ogni problema", anchor: "cosa-fare" },
    ],
    es: [
      { label: "Puntual", text: "23:00 UTC, medianoche CET, tras cinco horas de mantenimiento", anchor: "lanzamiento" },
      { label: "La primera media hora", text: "colas cortas y conjuntos de reglas en gris", anchor: "primera-media-hora" },
      { label: "Después, estable", text: "poco lag y zonas de inicio abarrotadas, según la prensa", anchor: "estable" },
      { label: "Avisos de jugadores", text: "creación \"throttled\", Horda bloqueada en JcJ, personajes reservados desaparecidos", anchor: "problemas" },
      { label: "Problemas conocidos", text: "el tema de Blizzard está abierto, la lista está vacía", anchor: "problemas-conocidos" },
      { label: "Ajustes de idioma", text: "el único consejo de Blizzard en la noche del lanzamiento", anchor: "idioma" },
      { label: "Qué hacer ahora", text: "los pasos prácticos para cada problema", anchor: "que-hacer" },
    ],
  },
  body: n(
    `WoW Forever opened on time on Wednesday 4 November 2026 at 23:00 UTC, midnight CET between 4 and 5 November, after five hours of maintenance. The first half hour was rough, with greyed-out rulesets and short queues; after that, according to players and the press, the game ran smoothly. Here is what Blizzard published, from the launch time post by Kaivax, Community Manager, to the Known Issues topic opened by Vrakthris of Customer Support, and what players report on the official forums, which Blizzard has neither confirmed nor answered yet. This is the situation at 02:15 CET on 5 November.

## On time, after five hours of maintenance {#launch}

- At 18:13 UTC (19:13 CET) on 4 November the community manager confirmed on the US forum that the game [launches simultaneously in all regions](${LAUNCH_TIME}) at 3:00 p.m. PST, with a table of times for the Americas and Oceania. Nothing changed for Europe: midnight CET, as in [our launch article](/en/news/wow-forever-launch-times-starter-guide).
- From 18:00 UTC (19:00 CET) until launch the game was in maintenance, announced in the Battle.net app according to [Mein-MMO](${MEINMMO}) and Wowhead: no logins and no character creation. Earlier in the day [Blizzard's support account](${CS_X}) had explained that error WOW51900337 at login "is expected, as the game is not live yet".
- At 23:00 UTC Blizzard News published [World of Warcraft: Forever Now Live!](${NOW_LIVE}). It is the page of the launch article of 29 October, retitled and rewritten as a recap of the game, with the Launch Overview video.
- Blizzard has announced no delay and no emergency maintenance.

## The first half hour: greyed-out rulesets {#first-minutes}

At 23:00 UTC logins opened with short queues: about five minutes at most for the Mein-MMO team, 5 to 10 minutes with positions between 1,500 and 4,000 according to [Wowhead](${WH_LIVE}). After the queue, though, many players found the ruleset screen greyed out, with nothing to click, or the message "[This ruleset is temporarily not available](${RULESET_GREY})", in a forum topic opened at 23:05 UTC. Wowhead's advice was to queue again; restarting the Battle.net app also leads to a new, short queue.

[GameSpot](${GAMESPOT}) counts "around 30 minutes" of retries before everything worked; the Mein-MMO team was in by 00:20 CET. At 23:30 UTC (00:30 CET) the official @Warcraft account wrote "[You can play WoW: Forever starting NOW!](${LIVE_X})". Blizzard has not explained why the rulesets were unavailable at first.

## Then, a stable launch {#stable}

After that half hour GameSpot describes "minimal lag and few issues": the starting zones are crowded, but you can still complete quests, and players on Reddit call it "possibly the best Blizzard launch ever". At 01:13 CET Mein-MMO reported a stable game and a packed night elf starting zone. During the launch the official Twitch channel showed a live map of players levelling up. Neither Blizzard nor any reliable outlet has published player or viewer numbers.

## Problems reported by players {#problems}

These reports come from the official US and EU forums and are **not confirmed by Blizzard**: by 02:15 CET no community manager or Customer Support agent had answered any of them.

- **Character creation "throttled".** Since about 23:40 UTC many players who click to create a character get "Creation of that type of character is currently throttled", in [North America](${THROTTLE_US}) and in [Europe](${THROTTLE_EU}). It mostly hits Horde races on the PvP ruleset, Undead and Trolls above all, but some see it with Alliance characters too, and in Europe with any character. One topic speaks of [almost two hours](${THROTTLE_US2}) of attempts. Several players think it is another form of the faction limit; others got through by retrying, or by logging into another ruleset and coming back. Blizzard has not said what the message means.
- **Horde locked on PvP.** The message of the reservation days is back: "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})", in a topic opened at 23:18 UTC that has reached 59 posts. Some get through after a few attempts. On the PvP ruleset an account can only have characters of one faction, so anyone who made an Alliance character there and now wants the Horde has to delete it first: in Europe some players get "[character deletion failed](${DELETE_EU})".
- **Reserved characters missing.** Some players who reserved their names [cannot find the characters](${RESERVED}), while the names still show as taken. A few found them on Roleplay-PvP instead of PvP, a mix-up between rulesets like the one Customer Support confirmed in North America at the end of October ([our article of 1 November](/en/news/name-filter-fix-faction-locks)); others say they are on no ruleset at all. Blizzard has not said whether they will come back.
- **Skyborne without quests.** On Zephras Isle some Skyborne players [see no quests at all](${SKYBORNE}), not even the first one, even after clearing the map filters and reloading. Players suspect it hits those who bought the pack or redeemed a code just before launch; it is not confirmed.
- **Disconnections.** Error BLZ51901016, "You have been disconnected", filled a [European topic](${DC_EU_PRE}) already during the maintenance, when it was expected. Since launch other players report being kicked out [every 2–3 minutes](${DC_EU}) or [every 5–15 minutes](${DC_US}), sometimes with their keybindings reset.
- **Smaller issues.** Friends in the same group who cannot see each other because of layering; group invites refused because the other player is "playing a different version of WoW", which restarting the game and Battle.net fixed for Mein-MMO; the "Sit near the campfire" objective of the Camping tutorial quest, The Great Outdoors, that does not complete.

## Blizzard's answer so far: an empty list {#known-issues}

At 23:21 UTC (00:21 CET) Customer Support opened the [World of Warcraft: Forever - Info & Known Issues](${KNOWN_ISSUES}) topic on the US forum, pinned and closed to replies. It collects links to the official articles and guides, recommends updating addons and links the pages on resetting the interface and on technical problems. The **Known Issues** section, however, is empty: there is only an invitation to report anything that is not on the list in the Bug Report forum. Since launch, Blizzard's support account on X has posted no alert.

## Check your language settings {#language}

Blizzard's only practical tip on launch night came at 23:44 UTC (00:44 CET), and only on the European forum: the community manager [suggests checking](${LANGUAGE_EU}) the settings in Options > System > Languages and Social, shown in a screenshot:

- under **Languages**, the Text and Audio language;
- under **Social**, **Preferred Online Language** and **Preferred Account Location**, each with its Apply button.

If they are not set to your preferred language, change them, then log out and back in "to improve your in-game experience". The post says nothing more, but the [rulesets article](${RULESETS}) explains Preferred Online Language: it lets you meet players who chose the same language, it applies to the whole account and, once changed, it cannot be changed again for 24 hours. Choose calmly, and if you play with friends, all pick the same one. In the same topic one player says that after switching from French to English he ended up on an almost empty layer; it is a single report.

## What to do now {#what-to-do}

- **Greyed-out rulesets**: queue again, or restart the Battle.net app.
- **"Throttled" or faction unavailable**: try again later. During name reservation Customer Support said that faction balance is recalculated during the day; logging into another ruleset and coming back worked for some players, not for all.
- **Missing reserved characters**: check all four rulesets, Roleplay-PvP first, before creating new ones; if they are not there, report it to Blizzard support. The names still show as taken.
- **Skyborne without quests**: no known fix; report it in the Bug Report forum.
- **Addons and interface**: update your addons; if the interface misbehaves, reset it as the Known Issues topic suggests.
- **The Great Outdoors**: according to players and Wowhead, type /sit instead of using the key, or type /sit again while already sitting, then wait the full minute.
- **Playing with friends**: same ruleset, same faction and the same Preferred Online Language.
- **Twitch**: four hours of WoW streams watched by 13 November at 01:30 CET earn the Pouch of Violet Dust toy, as explained in [our article on Taldramir](/en/news/taldramir-violet-dust-twitch).

## What we don't know yet {#unknown}

- Why the rulesets were unavailable in the first half hour.
- What "throttled" means: a limit on character creation because of the crowd, or the faction lock under another name.
- Whether the missing reserved characters are a display bug or really lost, and whether Blizzard will restore them.
- When the Known Issues list will be filled in.
- How many players logged in at launch.`,
    `WoW Forever è partito puntuale mercoledì 4 novembre 2026 alle 23:00 UTC, la mezzanotte fra il 4 e il 5 novembre in Italia (00:00 CET), dopo cinque ore di manutenzione. La prima mezz'ora è stata complicata, con i set di regole grigi e code brevi; poi, secondo giocatori e stampa, il gioco ha retto bene. Qui mettiamo insieme quello che ha pubblicato Blizzard, dal post sull'orario di Kaivax, Community Manager, al topic dei problemi noti aperto da Vrakthris dell'assistenza clienti, e quello che segnalano i giocatori sui forum ufficiali, per ora senza conferme né risposte di Blizzard. La situazione è quella delle 02:15 CET del 5 novembre.

## Puntuale, dopo cinque ore di manutenzione {#lancio}

- Alle 18:13 UTC (19:13 CET) del 4 novembre il community manager ha confermato sul forum US che il gioco [parte in contemporanea in tutte le regioni](${LAUNCH_TIME}) alle 15:00 PST, con una tabella degli orari per le Americhe e l'Oceania. Per l'Europa niente di nuovo: mezzanotte CET, come nel [nostro articolo sul lancio](/it/news/wow-forever-launch-times-starter-guide).
- Dalle 18:00 UTC (19:00 CET) fino al lancio il gioco è rimasto in manutenzione, annunciata nell'app Battle.net secondo [Mein-MMO](${MEINMMO}) e Wowhead: niente accessi e niente creazione dei personaggi. Nel pomeriggio l'[account dell'assistenza Blizzard](${CS_X}) aveva spiegato che l'errore WOW51900337 all'accesso era previsto, perché il gioco non era ancora online.
- Alle 23:00 UTC Blizzard News ha pubblicato [World of Warcraft: Forever è disponibile ora!](${NOW_LIVE_IT}). È la pagina dell'articolo sul lancio del 29 ottobre, con un titolo nuovo e riscritta come riepilogo del gioco, con il video Launch Overview.
- Blizzard non ha annunciato rinvii né manutenzioni d'emergenza.

## La prima mezz'ora: set di regole grigi {#prima-mezzora}

Alle 23:00 UTC gli accessi si sono aperti con code brevi: cinque minuti al massimo per la redazione di Mein-MMO, da 5 a 10 minuti con posizioni fra 1.500 e 4.000 secondo [Wowhead](${WH_LIVE}). Dopo la coda, però, molti giocatori si sono trovati davanti la schermata dei set di regole grigia, senza niente da cliccare, oppure il messaggio "[This ruleset is temporarily not available](${RULESET_GREY})", set di regole non disponibile per il momento, in un topic del forum aperto alle 23:05 UTC. Wowhead consigliava di rimettersi in coda; anche riavviare l'app Battle.net riporta in una coda nuova, e breve.

[GameSpot](${GAMESPOT}) parla di circa 30 minuti di tentativi prima che tutto funzionasse; la redazione di Mein-MMO era dentro alle 00:20 CET. Alle 23:30 UTC (00:30 CET) l'account ufficiale @Warcraft ha scritto "[You can play WoW: Forever starting NOW!](${LIVE_X})": si gioca da adesso. Blizzard non ha spiegato perché all'inizio i set di regole non fossero disponibili.

## Poi, un lancio stabile {#stabile}

Passata la mezz'ora, GameSpot descrive un gioco con poco lag e pochi problemi: zone iniziali affollate, ma le missioni si riescono a fare, e su Reddit c'è chi lo chiama "possibly the best Blizzard launch ever", forse il miglior lancio di Blizzard di sempre. Alle 01:13 CET Mein-MMO segnalava un gioco stabile e la zona iniziale degli elfi della notte piena di gente. Durante il lancio il canale Twitch ufficiale ha mostrato una mappa in diretta dei level up dei giocatori. Né Blizzard né una testata affidabile hanno pubblicato numeri di giocatori o di spettatori.

## I problemi segnalati dai giocatori {#problemi}

Queste segnalazioni vengono dai forum ufficiali US ed EU e **non sono confermate da Blizzard**: alle 02:15 CET nessun community manager e nessun addetto dell'assistenza aveva risposto su nessuna di queste.

- **Creazione dei personaggi "throttled".** Da circa le 23:40 UTC molti giocatori, quando confermano la creazione di un personaggio, ricevono "Creation of that type of character is currently throttled", cioè creazione limitata per quel tipo di personaggio, in [Nord America](${THROTTLE_US}) e in [Europa](${THROTTLE_EU}). Colpisce soprattutto le razze dell'Orda sul set PvP, Non Morti e Troll in testa, ma c'è chi lo vede anche con l'Alleanza e, in Europa, con qualsiasi personaggio. Un topic parla di [quasi due ore](${THROTTLE_US2}) di tentativi. Diversi giocatori pensano che sia un'altra forma del limite di fazione; altri sono passati riprovando, o entrando in un altro set di regole e tornando indietro. Blizzard non ha detto cosa significhi il messaggio.
- **Orda bloccata sul PvP.** Torna il messaggio dei giorni della prenotazione: "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})", in un topic aperto alle 23:18 UTC e arrivato a 59 messaggi. Qualcuno passa dopo qualche tentativo. Sul set PvP un account può avere personaggi di una sola fazione, quindi chi ha creato lì un personaggio dell'Alleanza e ora vuole l'Orda deve prima cancellarlo: in Europa alcuni giocatori ricevono "[character deletion failed](${DELETE_EU})", cancellazione non riuscita.
- **Personaggi prenotati spariti.** Alcuni giocatori che avevano prenotato i nomi [non trovano più i personaggi](${RESERVED}), mentre i nomi risultano ancora presi. Qualcuno li ha ritrovati sul Roleplay-PvP invece che sul PvP, uno scambio fra set di regole come quello che l'assistenza aveva confermato in Nord America a fine ottobre ([nostro articolo del 1° novembre](/it/news/name-filter-fix-faction-locks)); altri dicono di non trovarli su nessun set. Blizzard non ha detto se torneranno.
- **Skyborne senza missioni.** Su Zephras Isle alcuni giocatori Skyborne [non vedono nessuna missione](${SKYBORNE}), nemmeno la prima, anche dopo aver tolto i filtri della mappa e ricaricato l'interfaccia. I giocatori sospettano che succeda a chi ha comprato il pacchetto o riscattato un codice poco prima del lancio; non è confermato.
- **Disconnessioni.** L'errore BLZ51901016, "You have been disconnected", riempiva un [topic europeo](${DC_EU_PRE}) già durante la manutenzione, quando era normale. Dopo il lancio altri giocatori raccontano di essere buttati fuori [ogni 2–3 minuti](${DC_EU}) o [ogni 5–15 minuti](${DC_US}), a volte con i tasti da riassegnare da capo.
- **Problemi minori.** Amici nello stesso gruppo che non si vedono per il layering; inviti di gruppo rifiutati perché l'altro "gioca a un'altra versione di WoW", risolti per Mein-MMO riavviando gioco e Battle.net; l'obiettivo "Sit near the campfire" della missione che introduce il Camping, The Great Outdoors, che non si completa.

## La risposta di Blizzard per ora: un elenco vuoto {#problemi-noti}

Alle 23:21 UTC (00:21 CET) l'assistenza clienti ha aperto sul forum US il topic [World of Warcraft: Forever - Info & Known Issues](${KNOWN_ISSUES}), fissato in alto e chiuso alle risposte. Raccoglie i link agli articoli e alle guide ufficiali, raccomanda di aggiornare gli addon e rimanda alle pagine per resettare l'interfaccia e per i problemi tecnici. La sezione **Known Issues**, i problemi noti, però è vuota: c'è solo l'invito a segnalare nel forum Bug Report quello che non è nell'elenco. Dal lancio l'account dell'assistenza Blizzard su X non ha pubblicato avvisi.

## Controllate le impostazioni della lingua {#lingua}

L'unico consiglio pratico di Blizzard nella notte del lancio è arrivato alle 23:44 UTC (00:44 CET), e solo sul forum europeo: il community manager [invita a controllare](${LANGUAGE_EU}) le impostazioni in Options > System > Languages and Social, mostrate in uno screenshot:

- in **Languages**, la lingua del testo (Text) e dell'audio (Audio);
- in **Social**, **Preferred Online Language** e **Preferred Account Location**, cioè la lingua preferita per il gioco online e la località dell'account, ognuna con il suo pulsante Apply.

Se non sono sulla lingua che preferite, cambiatele, poi uscite e rientrate "to improve your in-game experience", per giocare meglio. Il post non dice altro, ma l'[articolo sui set di regole](${RULESETS_IT}) spiega la Preferred Online Language: serve a incontrare giocatori che hanno scelto la stessa lingua, vale per tutto l'account e, una volta cambiata, non si può cambiare di nuovo per 24 ore. Sceglietela con calma e, se giocate con amici, scegliete tutti la stessa. Nello stesso topic un giocatore racconta che, passato dal francese all'inglese, è finito in un layer quasi vuoto; è una segnalazione isolata.

## Cosa fare adesso {#cosa-fare}

- **Set di regole grigi**: rimettetevi in coda, o riavviate l'app Battle.net.
- **"Throttled" o fazione non disponibile**: riprovate più tardi. Durante la prenotazione dei nomi l'assistenza aveva detto che l'equilibrio delle fazioni viene ricalcolato nel corso della giornata; entrare in un altro set di regole e tornare indietro ha funzionato per alcuni giocatori, non per tutti.
- **Personaggi prenotati spariti**: controllate tutti e quattro i set di regole, il Roleplay-PvP per primo, prima di crearne di nuovi; se non ci sono, segnalatelo all'assistenza Blizzard. I nomi risultano ancora presi.
- **Skyborne senza missioni**: nessuna soluzione nota; segnalatelo nel forum Bug Report.
- **Addon e interfaccia**: aggiornate gli addon; se l'interfaccia fa i capricci, resettatela come suggerisce il topic dei problemi noti.
- **The Great Outdoors**: secondo i giocatori e Wowhead, scrivete /sit invece di usare il tasto, oppure scrivete di nuovo /sit quando siete già seduti, e aspettate il minuto intero.
- **Giocare con gli amici**: stesso set di regole, stessa fazione e stessa Preferred Online Language.
- **Twitch**: guardando quattro ore di dirette di WoW entro le 01:30 CET del 13 novembre si ottiene il giocattolo Pouch of Violet Dust, come spieghiamo nel [nostro articolo su Taldramir](/it/news/taldramir-violet-dust-twitch).

## Cosa non sappiamo ancora {#non-sappiamo}

- Perché nella prima mezz'ora i set di regole non fossero disponibili.
- Cosa voglia dire "throttled": un limite alla creazione per l'affollamento, o il blocco di fazione sotto un altro nome.
- Se i personaggi prenotati spariti siano un errore di visualizzazione o persi davvero, e se Blizzard li ripristinerà.
- Quando l'elenco dei problemi noti verrà compilato.
- Quanti giocatori sono entrati al lancio.`,
    `WoW Forever abrió puntual el miércoles 4 de noviembre de 2026 a las 23:00 UTC, la medianoche del 4 al 5 de noviembre en la España peninsular (00:00 CET), tras cinco horas de mantenimiento. La primera media hora fue complicada, con los conjuntos de reglas en gris y colas cortas; después, según los jugadores y la prensa, el juego funcionó bien. Aquí reunimos lo que ha publicado Blizzard, del mensaje con el horario de Kaivax, Community Manager, al tema de problemas conocidos que abrió Vrakthris, del servicio de atención al cliente, y lo que cuentan los jugadores en los foros oficiales, por ahora sin confirmación ni respuesta de Blizzard. Es la situación a las 02:15 CET del 5 de noviembre.

## Puntual, tras cinco horas de mantenimiento {#lanzamiento}

- A las 18:13 UTC (19:13 CET) del 4 de noviembre el community manager confirmó en el foro estadounidense que el juego [se lanza a la vez en todas las regiones](${LAUNCH_TIME}) a las 15:00 PST, con una tabla de horarios para América y Oceanía. Para Europa nada cambia: medianoche CET, como en [nuestro artículo del lanzamiento](/es/news/wow-forever-launch-times-starter-guide).
- Desde las 18:00 UTC (19:00 CET) hasta el lanzamiento el juego estuvo en mantenimiento, anunciado en la aplicación de Battle.net según [Mein-MMO](${MEINMMO}) y Wowhead: sin inicios de sesión ni creación de personajes. Por la tarde la [cuenta de soporte de Blizzard](${CS_X}) había explicado que el error WOW51900337 al entrar era lo esperado, porque el juego aún no estaba disponible.
- A las 23:00 UTC Blizzard News publicó [¡World of Warcraft: Forever ya está disponible!](${NOW_LIVE_ES}). Es la página del artículo del lanzamiento del 29 de octubre, con un título nuevo y reescrita como resumen del juego, con el vídeo Launch Overview.
- Blizzard no ha anunciado retrasos ni mantenimientos de emergencia.

## La primera media hora: conjuntos de reglas en gris {#primera-media-hora}

A las 23:00 UTC se abrieron los inicios de sesión con colas cortas: unos cinco minutos como mucho para la redacción de Mein-MMO, de 5 a 10 minutos con posiciones entre 1500 y 4000 según [Wowhead](${WH_LIVE}). Tras la cola, sin embargo, muchos jugadores se encontraron la pantalla de conjuntos de reglas en gris, sin nada que pulsar, o el mensaje "[This ruleset is temporarily not available](${RULESET_GREY})", conjunto de reglas no disponible por ahora, en un tema del foro abierto a las 23:05 UTC. Wowhead aconsejaba volver a la cola; reiniciar la aplicación de Battle.net también lleva a una cola nueva y corta.

[GameSpot](${GAMESPOT}) habla de unos 30 minutos de intentos hasta que todo funcionó; la redacción de Mein-MMO ya estaba dentro a las 00:20 CET. A las 23:30 UTC (00:30 CET) la cuenta oficial @Warcraft escribió "[You can play WoW: Forever starting NOW!](${LIVE_X})": ya se puede jugar. Blizzard no ha explicado por qué los conjuntos de reglas no estaban disponibles al principio.

## Después, un lanzamiento estable {#estable}

Pasada esa media hora, GameSpot describe un juego con poco lag y pocos problemas: zonas de inicio abarrotadas, pero las misiones se pueden hacer, y en Reddit hay quien lo llama "possibly the best Blizzard launch ever", quizá el mejor lanzamiento de Blizzard. A la 01:13 CET Mein-MMO informaba de un juego estable y de la zona de inicio de los elfos de la noche llena de gente. Durante el lanzamiento el canal oficial de Twitch mostró un mapa en directo de las subidas de nivel de los jugadores. Ni Blizzard ni ningún medio fiable han publicado cifras de jugadores o de espectadores.

## Los problemas que cuentan los jugadores {#problemas}

Estos avisos vienen de los foros oficiales de EE. UU. y de Europa y **no están confirmados por Blizzard**: a las 02:15 CET ningún community manager ni agente del servicio de atención al cliente había respondido a ninguno.

- **Creación de personajes "throttled".** Desde las 23:40 UTC, más o menos, muchos jugadores reciben al crear un personaje "Creation of that type of character is currently throttled", es decir, creación limitada para ese tipo de personaje, en [Norteamérica](${THROTTLE_US}) y en [Europa](${THROTTLE_EU}). Afecta sobre todo a las razas de la Horda en el conjunto JcJ, con no-muertos y trols a la cabeza, pero algunos lo ven también con la Alianza y, en Europa, con cualquier personaje. Un tema habla de [casi dos horas](${THROTTLE_US2}) de intentos. Varios jugadores creen que es otra forma del límite de facción; otros lo han superado insistiendo, o entrando en otro conjunto de reglas y volviendo. Blizzard no ha dicho qué significa el mensaje.
- **Horda bloqueada en JcJ.** Vuelve el mensaje de los días de la reserva: "[This faction is currently unavailable on this ruleset due to population imbalance](${IMBALANCE})", en un tema abierto a las 23:18 UTC que ya llega a 59 mensajes. Algunos pasan tras varios intentos. En el conjunto JcJ una cuenta solo puede tener personajes de una facción, así que quien creó allí un personaje de la Alianza y ahora quiere la Horda tiene que borrarlo antes: en Europa algunos jugadores reciben "[character deletion failed](${DELETE_EU})", el borrado ha fallado.
- **Personajes reservados desaparecidos.** Algunos jugadores que habían reservado sus nombres [no encuentran los personajes](${RESERVED}), aunque los nombres siguen apareciendo como ocupados. Unos pocos los han encontrado en Rol-JcJ en vez de en JcJ, una confusión entre conjuntos como la que el servicio de atención al cliente confirmó en Norteamérica a finales de octubre ([nuestro artículo del 1 de noviembre](/es/news/name-filter-fix-faction-locks)); otros dicen que no están en ningún conjunto. Blizzard no ha dicho si volverán.
- **Célicos sin misiones.** En Zephras Isle algunos jugadores célicos [no ven ninguna misión](${SKYBORNE}), ni siquiera la primera, aunque hayan quitado los filtros del mapa y recargado la interfaz. Los jugadores sospechan que pasa a quien compró el pack o canjeó un código justo antes del lanzamiento; no está confirmado.
- **Desconexiones.** El error BLZ51901016, "You have been disconnected", ya llenaba un [tema europeo](${DC_EU_PRE}) durante el mantenimiento, cuando era lo normal. Desde el lanzamiento otros jugadores cuentan que el juego los echa [cada 2–3 minutos](${DC_EU}) o [cada 5–15 minutos](${DC_US}), a veces con los atajos de teclado borrados.
- **Problemas menores.** Amigos del mismo grupo que no se ven por las capas (layering); invitaciones de grupo rechazadas porque el otro "juega a otra versión de WoW", que Mein-MMO resolvió reiniciando el juego y Battle.net; el objetivo "Sit near the campfire" de la misión que presenta la acampada, The Great Outdoors, que no se completa.

## La respuesta de Blizzard por ahora: una lista vacía {#problemas-conocidos}

A las 23:21 UTC (00:21 CET) el servicio de atención al cliente abrió en el foro estadounidense el tema [World of Warcraft: Forever - Info & Known Issues](${KNOWN_ISSUES}), fijado y cerrado a respuestas. Reúne enlaces a los artículos y guías oficiales, recomienda actualizar los addons y enlaza las páginas para restablecer la interfaz y resolver problemas técnicos. La sección **Known Issues**, los problemas conocidos, está vacía: solo hay una invitación a avisar en el foro Bug Report de lo que no esté en la lista. Desde el lanzamiento la cuenta de soporte de Blizzard en X no ha publicado ningún aviso.

## Revisa los ajustes de idioma {#idioma}

El único consejo práctico de Blizzard en la noche del lanzamiento llegó a las 23:44 UTC (00:44 CET), y solo en el foro europeo: el community manager [recomienda revisar](${LANGUAGE_EU}) los ajustes de Options > System > Languages and Social, que muestra en una captura:

- en **Languages**, el idioma del texto (Text) y del audio (Audio);
- en **Social**, **Preferred Online Language** y **Preferred Account Location**, el idioma preferido para jugar en línea y la ubicación de la cuenta, cada uno con su botón Apply.

Si no están en tu idioma preferido, cámbialos, cierra sesión y vuelve a entrar "to improve your in-game experience", para jugar mejor. El mensaje no dice más, pero el [artículo sobre los conjuntos de reglas](${RULESETS_ES}) explica Preferred Online Language: sirve para coincidir con jugadores que eligieron el mismo idioma, vale para toda la cuenta y, una vez cambiado, no se puede volver a cambiar en 24 horas. Elígelo con calma y, si juegas con amigos, elegid todos el mismo. En el mismo tema un jugador cuenta que, al pasar del francés al inglés, acabó en una capa casi vacía; es un caso aislado.

## Qué hacer ahora {#que-hacer}

- **Conjuntos de reglas en gris**: vuelve a la cola o reinicia la aplicación de Battle.net.
- **"Throttled" o facción no disponible**: inténtalo más tarde. Durante la reserva de nombres el servicio de atención al cliente dijo que el equilibrio de facciones se recalcula a lo largo del día; entrar en otro conjunto de reglas y volver ha funcionado a algunos jugadores, no a todos.
- **Personajes reservados desaparecidos**: revisa los cuatro conjuntos de reglas, Rol-JcJ el primero, antes de crear otros; si no están, avisa al soporte de Blizzard. Los nombres siguen apareciendo como ocupados.
- **Célicos sin misiones**: no hay solución conocida; avisa en el foro Bug Report.
- **Addons e interfaz**: actualiza los addons; si la interfaz falla, restablécela como sugiere el tema de problemas conocidos.
- **The Great Outdoors**: según los jugadores y Wowhead, escribe /sit en vez de usar la tecla, o vuelve a escribir /sit cuando ya estés sentado, y espera el minuto completo.
- **Jugar con amigos**: mismo conjunto de reglas, misma facción y mismo Preferred Online Language.
- **Twitch**: con cuatro horas de directos de WoW vistas antes de la 01:30 CET del 13 de noviembre se consigue el juguete Pouch of Violet Dust, como contamos en [nuestro artículo sobre Taldramir](/es/news/taldramir-violet-dust-twitch).

## Lo que aún no sabemos {#no-sabemos}

- Por qué los conjuntos de reglas no estaban disponibles en la primera media hora.
- Qué significa "throttled": un límite a la creación por la afluencia, o el bloqueo de facción con otro nombre.
- Si los personajes reservados desaparecidos son un fallo de visualización o se han perdido de verdad, y si Blizzard los recuperará.
- Cuándo se rellenará la lista de problemas conocidos.
- Cuántos jugadores entraron en el lanzamiento.`,
  ),
  faq: {
    en: [
      {
        q: "Did WoW Forever launch on time?",
        a: "Yes. It opened at 23:00 UTC on 4 November 2026, midnight CET, after five hours of maintenance. In the first half hour many players saw the rulesets greyed out; after that the game ran smoothly, according to players and the press.",
      },
      {
        q: "Why does WoW Forever say character creation is throttled?",
        a: "Blizzard has not explained it. Players have seen the message since launch night, mostly with Horde races on the PvP ruleset, and many think it is linked to the faction balance limits. Retrying later, or logging into another ruleset and back, worked for some players but not for all.",
      },
      {
        q: "My reserved WoW Forever characters are gone: what can I do?",
        a: "Check all four rulesets, Roleplay-PvP first: some players found them there instead of on PvP. If they are not there, report it to Blizzard support. The names still show as taken, and Blizzard has not said yet whether the characters will be restored.",
      },
    ],
    it: [
      {
        q: "WoW Forever è uscito in orario?",
        a: "Sì. È partito alle 23:00 UTC del 4 novembre 2026, la mezzanotte in Italia, dopo cinque ore di manutenzione. Nella prima mezz'ora molti giocatori hanno visto i set di regole grigi; poi il gioco ha retto bene, secondo giocatori e stampa.",
      },
      {
        q: "Perché WoW Forever dice che la creazione del personaggio è \"throttled\"?",
        a: "Blizzard non l'ha spiegato. I giocatori vedono il messaggio dalla notte del lancio, soprattutto con le razze dell'Orda sul set PvP, e molti pensano che sia legato ai limiti per l'equilibrio delle fazioni. Riprovare più tardi, o entrare in un altro set di regole e tornare, ha funzionato per alcuni giocatori ma non per tutti.",
      },
      {
        q: "I miei personaggi prenotati in WoW Forever sono spariti: cosa posso fare?",
        a: "Controlla tutti e quattro i set di regole, il Roleplay-PvP per primo: alcuni giocatori li hanno ritrovati lì invece che sul PvP. Se non ci sono, segnalalo all'assistenza Blizzard. I nomi risultano ancora presi, e Blizzard non ha ancora detto se i personaggi verranno ripristinati.",
      },
    ],
    es: [
      {
        q: "¿WoW Forever salió a su hora?",
        a: "Sí. Abrió a las 23:00 UTC del 4 de noviembre de 2026, la medianoche CET, tras cinco horas de mantenimiento. En la primera media hora muchos jugadores vieron los conjuntos de reglas en gris; después el juego funcionó bien, según los jugadores y la prensa.",
      },
      {
        q: "¿Por qué WoW Forever dice que la creación de personajes está \"throttled\"?",
        a: "Blizzard no lo ha explicado. Los jugadores ven el mensaje desde la noche del lanzamiento, sobre todo con razas de la Horda en el conjunto JcJ, y muchos creen que tiene que ver con los límites para equilibrar las facciones. Volver a intentarlo más tarde, o entrar en otro conjunto de reglas y volver, ha funcionado a algunos jugadores, pero no a todos.",
      },
      {
        q: "Mis personajes reservados de WoW Forever han desaparecido: ¿qué puedo hacer?",
        a: "Revisa los cuatro conjuntos de reglas, Rol-JcJ el primero: algunos jugadores los han encontrado allí en vez de en JcJ. Si no están, avisa al soporte de Blizzard. Los nombres siguen apareciendo como ocupados, y Blizzard aún no ha dicho si recuperará los personajes.",
      },
    ],
  },
};

export default item;

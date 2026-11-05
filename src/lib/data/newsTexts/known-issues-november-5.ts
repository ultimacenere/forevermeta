import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Prima lista ufficiale dei problemi noti di WoW Forever (5/11/2026), riletta sul JSON del forum il 5/11 alle 23:15 UTC.
 * - Ufficiale: Kaivax, "Known Issues - WoW Forever - Updated Nov. 5" (US 2402363, creato alle 15:42 UTC, ultima modifica
 *   alle 22:07 UTC, versione 4, solo forum US: nessuna copia nel blue tracker EU); linee guida del forum bug (US 2402319,
 *   15:22 UTC); categoria Bug Report di Forever (US 2402289, id 352, 15:11 UTC).
 * - Stampa: Wowhead 383760 (solo sommario del feed).
 * Blizzard non dice perché i venditori PvP sono chiusi né quando tornano.
 */
const KNOWN_ISSUES = "https://us.forums.blizzard.com/en/wow/t/known-issues-wow-forever-updated-nov-5/2402363";
const BUG_GUIDELINES = "https://us.forums.blizzard.com/en/wow/t/wow-forever-bug-report-forum-guidelines/2402319";
const WH_KNOWN = "https://www.wowhead.com/news=383760/wo-w-forever-known-issues";

const item: NewsItem = {
  slug: "known-issues-november-5",
  date: "2026-11-05",
  source: "blizzard",
  topic: "news",
  url: KNOWN_ISSUES,
  image: media.newsKnownIssues.src,
  imageAlt: media.newsKnownIssues.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-rulesets"],
  title: n(
    "WoW Forever's first Known Issues list: PvP vendors closed, Vorsha disabled and a new bug forum",
    "I primi problemi noti di WoW Forever: venditori PvP chiusi, Vorsha disattivata e un forum per i bug",
    "Primeros problemas conocidos de WoW Forever: vendedores JcJ cerrados, Vorsha desactivada y foro de errores",
  ),
  metaTitle: n(
    "WoW Forever known issues: PvP vendors and Vorsha",
    "WoW Forever, problemi noti: venditori PvP e Vorsha",
    "WoW Forever: problemas conocidos, JcJ y Vorsha",
  ),
  summary: n(
    "The day after launch Blizzard published the first official Known Issues list for WoW Forever. PvP vendors are temporarily unavailable in Orgrimmar, Stormwind and Dalaran, and the quest \"Vorsha the Lasher\" is disabled because of a crash. The game also has its own bug report forum now.",
    "Il giorno dopo il lancio Blizzard ha pubblicato la prima lista ufficiale dei problemi noti di WoW Forever. I venditori PvP sono temporaneamente non disponibili a Orgrimmar, Stormwind e Dalaran, e la missione \"Vorsha the Lasher\" è disattivata per un crash. Il gioco ha anche un forum proprio per segnalare i bug.",
    "El día después del lanzamiento Blizzard publicó la primera lista oficial de problemas conocidos de WoW Forever. Los vendedores JcJ no están disponibles por ahora en Orgrimmar, Ventormenta y Dalaran, y la misión \"Vorsha the Lasher\" está desactivada por un cierre del juego. Además, el juego ya tiene su propio foro de errores.",
  ),
  description: n(
    "WoW Forever's first Known Issues list: PvP vendors unavailable, the Vorsha the Lasher quest disabled, smaller bugs and a new bug report forum.",
    "I primi problemi noti di WoW Forever: venditori PvP non disponibili, missione Vorsha the Lasher disattivata, bug minori e un nuovo forum per i bug.",
    "Primera lista de problemas de WoW Forever: vendedores JcJ no disponibles, la misión Vorsha the Lasher desactivada y un nuevo foro de errores.",
  ),
  highlights: {
    en: [
      { label: "PvP vendors", text: "temporarily unavailable in all three cities", anchor: "pvp-vendors" },
      { label: "Vorsha the Lasher", text: "quest disabled until a crash is fixed", anchor: "vorsha" },
      { label: "The rest of the list", text: "Razorfen Kraul, gamepad, bank, Stormwind", anchor: "full-list" },
      { label: "New bug forum", text: "how Blizzard wants reports written", anchor: "bug-forum" },
      { label: "Not on the list", text: "the problems players talk about most", anchor: "not-listed" },
    ],
    it: [
      { label: "Venditori PvP", text: "temporaneamente non disponibili in tutte e tre le città", anchor: "venditori-pvp" },
      { label: "Vorsha the Lasher", text: "missione disattivata finché non si corregge un crash", anchor: "vorsha" },
      { label: "Il resto dell'elenco", text: "Razorfen Kraul, gamepad, banca, Stormwind", anchor: "elenco" },
      { label: "Nuovo forum per i bug", text: "come Blizzard vuole le segnalazioni", anchor: "forum-bug" },
      { label: "Cosa non c'è", text: "i problemi di cui i giocatori parlano di più", anchor: "cosa-manca" },
    ],
    es: [
      { label: "Vendedores JcJ", text: "no disponibles por ahora en las tres ciudades", anchor: "vendedores-jcj" },
      { label: "Vorsha the Lasher", text: "misión desactivada hasta corregir un cierre del juego", anchor: "vorsha" },
      { label: "El resto de la lista", text: "Razorfen Kraul, mando, banco, Ventormenta", anchor: "lista" },
      { label: "Nuevo foro de errores", text: "cómo quiere Blizzard los informes", anchor: "foro-errores" },
      { label: "Lo que no está", text: "los problemas de los que más hablan los jugadores", anchor: "lo-que-falta" },
    ],
  },
  body: n(
    `On Thursday 5 November 2026, the day after launch, Kaivax, Community Manager, published [the first official list of known issues](${KNOWN_ISSUES}) for WoW Forever on the US forum, at 15:42 UTC (16:42 CET), with a last edit at 22:07 UTC (23:07 CET). On launch night the Known Issues section was still empty, as we wrote in [our article on that night](/en/news/launch-day-november-4). Blizzard says this list covers notable problems it already tracks and plans to fix, that it is not complete and that it will be updated regularly.

## PvP vendors closed for now {#pvp-vendors}

PvP vendors are temporarily unavailable in every location: Orgrimmar, Stormwind and Dalaran. Blizzard does not say why or when they will be back.

## Vorsha the Lasher disabled {#vorsha}

The quest "Vorsha the Lasher" in Ashenvale is disabled until the team fixes a bug that causes a crash. If it is missing from your quest route, this is why.

## The rest of the list {#full-list}

- **Dungeons**: in Razorfen Kraul you can fall into a cauldron near Roogug and get stuck.
- **Gamepad**: deleting more than one rare or epic item may cause an error, and the instructions for the push-to-talk keyboard button may appear by mistake when you join a voice channel.
- **NPCs**: Stormwind guards send you to "Fyrenz Stagazer" for transmogrification; the NPC's real name is Fyrenz Vishonar.
- **User interface**: the bank shows its contents in pages, which pushes the tabs outside the frame.
- **World**: the entrance of Stormwind Keep may look wrong, with flashing textures.

## A bug forum of its own {#bug-forum}

On launch night the bug report link still led to the forum for Classic. Since 5 November WoW Forever has its own category, with [guidelines by Kaivax](${BUG_GUIDELINES}). Blizzard asks for a one-sentence summary, numbered steps to reproduce the bug, the expected and the wrong behaviour, and ideally your character's name and ruleset. Videos and screenshots help. Off-topic posts will be removed, and asking for a Blizzard reply is discouraged: the team says it reads every post but cannot answer most of them.

## What the list leaves out {#not-listed}

The list says nothing about the problems players have discussed most since launch: "throttled" character creation, the Horde locked on PvP and missing reserved characters. The empty layers and the lost ships and zeppelins are not on it either: Blizzard answered those in separate forum posts, which we cover in [our article on the second day](/en/news/day-two-layering-portals-maintenance). Since the list is not complete, being absent from it does not mean a problem is not real. For now the post is only on the US forum, and Wowhead [reported it too](${WH_KNOWN}).`,
    `Giovedì 5 novembre 2026, il giorno dopo il lancio, Kaivax, Community Manager, ha pubblicato sul forum US [la prima lista ufficiale dei problemi noti](${KNOWN_ISSUES}) di WoW Forever, alle 15:42 UTC (16:42 CET), con un'ultima modifica alle 22:07 UTC (23:07 CET). Nella notte del lancio la sezione dei problemi noti era ancora vuota, come abbiamo scritto nel [nostro articolo su quella notte](/it/news/launch-day-november-4). Blizzard spiega che la lista raccoglie i problemi rilevanti già tracciati e da correggere, che non è completa e che verrà aggiornata regolarmente.

## Venditori PvP chiusi per ora {#venditori-pvp}

I venditori PvP sono temporaneamente non disponibili ovunque: Orgrimmar, Stormwind e Dalaran. Blizzard non dice perché né quando torneranno.

## Vorsha the Lasher disattivata {#vorsha}

La missione "Vorsha the Lasher" ad Ashenvale è disattivata finché il team non corregge un bug che causa un crash. Se non la trovate lungo il vostro percorso, il motivo è questo.

## Il resto dell'elenco {#elenco}

- **Dungeon**: a Razorfen Kraul si può cadere in un calderone vicino a Roogug e restare bloccati.
- **Gamepad**: cancellare più di un oggetto raro o epico può dare un errore, e le istruzioni del tasto push-to-talk da tastiera possono comparire per sbaglio entrando in un canale vocale.
- **PNG**: le guardie di Stormwind mandano da "Fyrenz Stagazer" per la trasmogrificazione; il nome vero del PNG è Fyrenz Vishonar.
- **Interfaccia**: la banca mostra il contenuto a pagine, e questo spinge le schede fuori dalla cornice.
- **Mondo**: l'ingresso di Stormwind Keep può avere un aspetto sbagliato, con texture lampeggianti.

## Un forum proprio per i bug {#forum-bug}

Nella notte del lancio il link per segnalare i bug portava ancora al forum di Classic. Dal 5 novembre WoW Forever ha una categoria sua, con le [linee guida di Kaivax](${BUG_GUIDELINES}). Blizzard chiede un riassunto in una frase, passi numerati per riprodurre il bug, il comportamento atteso e quello sbagliato e, se possibile, il nome del personaggio e il set di regole. Video e screenshot aiutano. I post fuori tema verranno rimossi, e chiedere una risposta di Blizzard è sconsigliato: il team dice di leggere tutto, ma di non poter rispondere alla maggior parte dei post.

## Cosa non c'è nell'elenco {#cosa-manca}

La lista non dice nulla dei problemi più discussi dai giocatori dal lancio: la creazione dei personaggi "throttled", l'Orda bloccata sul PvP e i personaggi prenotati spariti. Non ci sono nemmeno i layer vuoti e le navi e gli zeppelin persi: su quelli Blizzard ha risposto in post separati del forum, di cui parliamo nel [nostro articolo sul secondo giorno](/it/news/day-two-layering-portals-maintenance). La lista non è completa, quindi l'assenza di un problema non vuol dire che non esista. Per ora il post è solo sul forum US, e ne ha [parlato anche Wowhead](${WH_KNOWN}).`,
    `El jueves 5 de noviembre de 2026, el día después del lanzamiento, Kaivax, Community Manager, publicó en el foro de EE. UU. [la primera lista oficial de problemas conocidos](${KNOWN_ISSUES}) de WoW Forever, a las 15:42 UTC (16:42 CET), con una última edición a las 22:07 UTC (23:07 CET). En la noche del lanzamiento la sección de problemas conocidos seguía vacía, como contamos en [nuestro artículo sobre esa noche](/es/news/launch-day-november-4). Blizzard explica que la lista recoge problemas importantes que ya tiene localizados y piensa corregir, que no está completa y que se actualizará con regularidad.

## Vendedores JcJ cerrados por ahora {#vendedores-jcj}

Los vendedores JcJ no están disponibles por ahora en ningún sitio: Orgrimmar, Ventormenta y Dalaran. Blizzard no dice por qué ni cuándo volverán.

## Vorsha the Lasher, desactivada {#vorsha}

La misión "Vorsha the Lasher" de Vallefresno (Ashenvale) está desactivada hasta que el equipo corrija un error que provoca un cierre del juego. Si no la encuentras en tu ruta, este es el motivo.

## El resto de la lista {#lista}

- **Mazmorras**: en Horado Rajacieno (Razorfen Kraul) puedes caer en un caldero cerca de Roogug y quedarte atascado.
- **Mando**: borrar más de un objeto raro o épico puede dar un error, y las instrucciones de la tecla de pulsar para hablar pueden aparecer por error al entrar en un canal de voz.
- **PNJ**: los guardias de Ventormenta mandan a "Fyrenz Stagazer" para la transfiguración; el nombre real del PNJ es Fyrenz Vishonar.
- **Interfaz**: el banco muestra su contenido en páginas, y eso deja las pestañas fuera del marco.
- **Mundo**: la entrada de Stormwind Keep puede verse mal, con texturas que parpadean.

## Un foro de errores propio {#foro-errores}

En la noche del lanzamiento el enlace para informar de errores aún llevaba al foro de Classic. Desde el 5 de noviembre WoW Forever tiene su propia categoría, con las [normas de Kaivax](${BUG_GUIDELINES}). Blizzard pide un resumen en una frase, pasos numerados para reproducir el error, el comportamiento esperado y el incorrecto y, si es posible, el nombre del personaje y su conjunto de reglas. Los vídeos y las capturas ayudan. Los mensajes fuera de tema se eliminarán, y no conviene pedir una respuesta de Blizzard: el equipo dice que lo lee todo, pero que no puede contestar a la mayoría.

## Lo que no está en la lista {#lo-que-falta}

La lista no dice nada de los problemas más comentados por los jugadores desde el lanzamiento: la creación de personajes "throttled", la Horda bloqueada en JcJ y los personajes reservados desaparecidos. Tampoco están las capas vacías ni los barcos y zepelines perdidos: Blizzard respondió a eso en otros mensajes del foro, que contamos en [nuestro artículo sobre el segundo día](/es/news/day-two-layering-portals-maintenance). La lista no está completa, así que no estar en ella no significa que un problema no exista. Por ahora el mensaje solo está en el foro de EE. UU., y también [lo recogió Wowhead](${WH_KNOWN}).`,
  ),
  faq: {
    en: [
      {
        q: "Why are PvP vendors unavailable in WoW Forever?",
        a: "Blizzard has not explained it. The Known Issues list of 5 November only says they are temporarily unavailable in Orgrimmar, Stormwind and Dalaran, with no date for their return.",
      },
      {
        q: "Where do I report a bug in WoW Forever?",
        a: "In the WoW Forever Bug Report category of the official forum, opened on 5 November 2026. Blizzard asks for a short summary, numbered steps to reproduce the bug and your character's name and ruleset.",
      },
    ],
    it: [
      {
        q: "Perché i venditori PvP non sono disponibili in WoW Forever?",
        a: "Blizzard non l'ha spiegato. La lista dei problemi noti del 5 novembre dice solo che sono temporaneamente non disponibili a Orgrimmar, Stormwind e Dalaran, senza una data per il loro ritorno.",
      },
      {
        q: "Dove si segnala un bug di WoW Forever?",
        a: "Nella categoria WoW Forever Bug Report del forum ufficiale, aperta il 5 novembre 2026. Blizzard chiede un riassunto breve, passi numerati per riprodurre il bug, il nome del personaggio e il set di regole.",
      },
    ],
    es: [
      {
        q: "¿Por qué no están disponibles los vendedores JcJ en WoW Forever?",
        a: "Blizzard no lo ha explicado. La lista de problemas conocidos del 5 de noviembre solo dice que no están disponibles por ahora en Orgrimmar, Ventormenta y Dalaran, sin fecha de regreso.",
      },
      {
        q: "¿Dónde se informa de un error de WoW Forever?",
        a: "En la categoría WoW Forever Bug Report del foro oficial, abierta el 5 de noviembre de 2026. Blizzard pide un resumen breve, pasos numerados para reproducir el error, el nombre del personaje y su conjunto de reglas.",
      },
    ],
  },
};

export default item;

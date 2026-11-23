import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * World Buffs tolti a ogni schermata di caricamento (22/11/2026). Fonte ufficiale: il post su X di Aidan "Zirene" Moon,
 * Senior Game Designer di WoW Forever, del 22/11 alle 22:53 UTC (letto dall'API di fxtwitter il 23/11): è un bug, la
 * correzione è prevista per il 23/11. Il resto (lockbox, Obsidian Sentinel) viene dalle prove di Wowhead del 22-23/11 e
 * NON è nelle note ufficiali: il thread degli hotfix (topic 2403040) il 23/11 mattina era fermo alla voce del 20/11.
 * Scritto come tale. La news non descrive come si sfruttavano i due farm.
 */
const MOON = "https://x.com/Zirene/status/2124637371132236185";
const WH_BUFFS = "https://www.wowhead.com/forever/news/world-buffs-removed-on-any-loading-screen-in-wow-forever-383954";
const WH_LOCKBOX =
  "https://www.wowhead.com/forever/news/players-can-no-longer-peek-inside-lockboxes-due-to-reroll-exploit-383956";
const WH_ULDAMAN =
  "https://www.wowhead.com/forever/news/uldaman-boss-no-longer-drops-loot-nerf-targets-gold-farming-strategy-383955";

const item: NewsItem = {
  slug: "world-buffs-removed-loading-screen-bug-fix-aidan-moon",
  date: "2026-11-22",
  source: "site",
  topic: "news",
  image: media.newsWorldBuffsBug.src,
  imageAlt: media.newsWorldBuffsBug.alt,
  guides: ["wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever World Buffs vanish on loading screens: Blizzard designer calls it a bug, fix due 23 November",
    "World Buffs di WoW Forever persi a ogni caricamento: Aidan Moon dice che è un bug, correzione il 23 novembre",
    "Los World Buffs de WoW Forever se pierden al cargar: el diseñador de Blizzard dice que es un error",
  ),
  metaTitle: n(
    "WoW Forever: World Buffs lost on loading screens are a bug",
    "WoW Forever: World Buffs persi ai caricamenti, è un bug",
    "WoW Forever: World Buffs perdidos al cargar, es un error",
  ),
  summary: n(
    "Since 22 November 2026, World Buffs in WoW Forever such as Warchief's Blessing, Might of Stormwind and the Dire Maul Tribute buffs are removed at every loading screen, so they cannot be taken into a dungeon or to the other continent. Aidan Moon, Senior Game Designer on WoW Forever, wrote on X the same evening that this is a bug, caused by another fix, and that the correction is due on 23 November. Over the same weekend Wowhead also found two changes that are not in Blizzard's hotfix notes: lockboxes can no longer be previewed, and the Obsidian Sentinel in Uldaman no longer drops its items.",
    "Dal 22 novembre 2026 i World Buffs di WoW Forever, come Warchief's Blessing, Might of Stormwind e i buff del Tribute di Dire Maul, vengono tolti a ogni schermata di caricamento: non si possono più portare in un dungeon né sull'altro continente. Aidan Moon, Senior Game Designer di WoW Forever, ha scritto su X la sera stessa che è un bug, nato da un'altra correzione, e che la sistemazione è prevista per il 23 novembre. Nello stesso fine settimana Wowhead ha trovato anche due cambi che non sono nelle note degli hotfix di Blizzard: i lockbox non si possono più sbirciare e l'Obsidian Sentinel di Uldaman non lascia più i suoi oggetti.",
    "Desde el 22 de noviembre de 2026, los World Buffs de WoW Forever, como Warchief's Blessing, Might of Stormwind y los del Tribute de Dire Maul, se eliminan en cada pantalla de carga: ya no se pueden llevar a una mazmorra ni al otro continente. Aidan Moon, Senior Game Designer de WoW Forever, escribió en X esa misma noche que es un error, causado por otra corrección, y que el arreglo está previsto para el 23 de noviembre. Ese mismo fin de semana Wowhead encontró además dos cambios que no figuran en las notas de hotfixes de Blizzard: los lockboxes ya no se pueden previsualizar y el Obsidian Sentinel de Uldaman ya no suelta sus objetos.",
  ),
  description: n(
    "WoW Forever World Buffs are removed on every loading screen since 22 November. Designer Aidan Moon: it is a bug, fix due 23 November. What to do meanwhile.",
    "I World Buffs di WoW Forever spariscono a ogni caricamento dal 22 novembre. Aidan Moon: è un bug, correzione il 23 novembre. Cosa fare nel frattempo.",
    "Los World Buffs de WoW Forever se pierden en cada pantalla de carga desde el 22 de noviembre. Aidan Moon: es un error, arreglo el 23 de noviembre.",
  ),
  highlights: {
    en: [
      { label: "World Buffs", text: "removed at every loading screen since 22 November, login included", anchor: "what-happens" },
      { label: "Blizzard", text: "Aidan Moon on X: not intended, a bug, fix due 23 November", anchor: "moon" },
      { label: "Cause", text: "a fix for a Battle Shout from the Diamond Flask quest that spread between players", anchor: "moon" },
      { label: "Meanwhile", text: "keep your Head of Rend Blackhand and Tribute runs for after the fix", anchor: "what-to-do" },
      { label: "Lockboxes", text: "can no longer be previewed, per Wowhead; not in the official notes", anchor: "undocumented" },
      { label: "Uldaman", text: "Obsidian Sentinel no longer drops its items, per Wowhead", anchor: "undocumented" },
    ],
    it: [
      { label: "World Buffs", text: "tolti a ogni schermata di caricamento dal 22 novembre, login compreso", anchor: "cosa-succede" },
      { label: "Blizzard", text: "Aidan Moon su X: non voluto, è un bug, correzione il 23 novembre", anchor: "moon" },
      { label: "Causa", text: "la correzione di un Battle Shout della missione Diamond Flask che si propagava fra i giocatori", anchor: "moon" },
      { label: "Nel frattempo", text: "tenete la Head of Rend Blackhand e i Tribute per dopo la correzione", anchor: "cosa-fare" },
      { label: "Lockbox", text: "non si possono più sbirciare, secondo Wowhead; non è nelle note ufficiali", anchor: "non-documentati" },
      { label: "Uldaman", text: "l'Obsidian Sentinel non lascia più i suoi oggetti, secondo Wowhead", anchor: "non-documentati" },
    ],
    es: [
      { label: "World Buffs", text: "eliminados en cada pantalla de carga desde el 22 de noviembre, también al entrar al juego", anchor: "que-pasa" },
      { label: "Blizzard", text: "Aidan Moon en X: no es intencionado, es un error, arreglo el 23 de noviembre", anchor: "moon" },
      { label: "Causa", text: "la corrección de un Battle Shout de la misión Diamond Flask que se propagaba entre jugadores", anchor: "moon" },
      { label: "Mientras tanto", text: "guarda la Head of Rend Blackhand y los Tribute para después del arreglo", anchor: "que-hacer" },
      { label: "Lockboxes", text: "ya no se pueden previsualizar, según Wowhead; no está en las notas oficiales", anchor: "sin-documentar" },
      { label: "Uldaman", text: "el Obsidian Sentinel ya no suelta sus objetos, según Wowhead", anchor: "sin-documentar" },
    ],
  },
  body: n(
    `On Sunday 22 November 2026 players noticed that their World Buffs in WoW Forever disappeared whenever the game showed a loading screen. A few hours later a Blizzard designer confirmed that it was not a design change. This article separates what Blizzard has said from what only players and Wowhead have observed. Spell, item and place names stay in English, as in the game.

## What happens to World Buffs {#what-happens}

[Wowhead reported it](${WH_BUFFS}) on 22 November (its post on X is from 19:12 UTC): the buffs are removed by **any loading screen**, including the one at login. The buffs named are Warchief's Blessing and Might of Stormwind, which come from turning in the Head of Rend Blackhand, and Mol'dar's Moxie, Fengus' Ferocity and Slip'kik's Savvy from a Dire Maul Tribute run.

In practice, while the bug is live:

- a World Buff cannot be taken **into a dungeon**, because entering one always loads;
- it does not survive a trip to **the other continent**, a portal, a teleport or a Hearthstone that loads;
- the Tribute buffs are lost on the way out of Dire Maul;
- logging out and back in removes them too.

The change was not in any hotfix note. Blizzard's hotfix thread still ended with the entry of 20 November when we checked on the morning of 23 November; that entry is covered in our article on the [hotfixes of 20 November](/en/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## Blizzard's answer: it is a bug {#moon}

Aidan "Zirene" Moon, Senior Game Designer on WoW Forever, [replied on X](${MOON}) at 22:53 UTC on 22 November: "This is not intended and is a bug that is fixed tomorrow". That points to **Monday 23 November**.

He also explained where it came from. The Battle Shout granted by the Diamond Flask quest was being cast again every time a player changed zone, and from there it spread from player to player. The fix for that problem is what started stripping World Buffs on loading screens.

Two cautions. The statement comes from a developer's personal account, not from the hotfix thread or the forums. And at the time of writing we have not been able to confirm in game that the fix is live, so treat 23 November as the announced date, not as a done deal.

## What to do in the meantime {#what-to-do}

Our advice, not Blizzard's: if you planned to use a World Buff inside a dungeon, wait. Hold on to the Head of Rend Blackhand instead of turning it in, and put off a Dire Maul Tribute run done only for the buffs, until players report that the buffs survive a loading screen again. In the open world on the same continent they still work, as long as you do not log out or teleport.

Once the fix is in, World Buffs should behave as they did before the weekend. Blizzard has not announced any other change to them.

## Two more changes that are not in the notes {#undocumented}

Over the same weekend Wowhead tested two other changes. **Neither appears in Blizzard's hotfix notes and Blizzard has not commented on them**; the reasons given are Wowhead's reading, not an official statement.

- **Lockboxes.** [According to Wowhead](${WH_LOCKBOX}), a lockbox can no longer be opened just to look inside: its contents now go straight into your bags. Before, a Rogue could look at what a box held before handing it back. The change followed a player report on Reddit that the contents a Rogue saw could differ from what the owner later received.
- **Uldaman, Obsidian Sentinel.** [Wowhead found](${WH_ULDAMAN}) that this boss, which stands just inside the back entrance, no longer drops its Rare items: in its test it left only coins and Solid Stone. One side effect matters for levelling characters: the Axe of Lingering Dread came from this boss, and without it the Pendulum of Doom cannot be put together for now.

Both follow a week in which Blizzard acted on gold sources, from the dungeon reset cap to the accounts sanctioned for [Blackmaw Hold](/en/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). We will update this article if Blizzard documents either change or restores the axe. More on Uldaman, Dire Maul and the other instances in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).`,
    `Domenica 22 novembre 2026 i giocatori si sono accorti che i loro World Buffs in WoW Forever sparivano ogni volta che il gioco mostrava una schermata di caricamento. Poche ore dopo un designer di Blizzard ha confermato che non era un cambio voluto. Questo articolo tiene separato ciò che ha detto Blizzard da ciò che hanno osservato solo i giocatori e Wowhead. I nomi di incantesimi, oggetti e luoghi restano in inglese, come nel gioco.

## Cosa succede ai World Buffs {#cosa-succede}

[Lo ha segnalato Wowhead](${WH_BUFFS}) il 22 novembre (il suo post su X è delle 19:12 UTC, le 20:12 in Italia): i buff vengono tolti da **qualsiasi schermata di caricamento**, compresa quella del login. I buff citati sono Warchief's Blessing e Might of Stormwind, che si ottengono consegnando la Head of Rend Blackhand, e Mol'dar's Moxie, Fengus' Ferocity e Slip'kik's Savvy, che arrivano da un Tribute di Dire Maul.

In pratica, finché c'è il bug:

- un World Buff non si può portare **dentro un dungeon**, perché entrarci carica sempre;
- non sopravvive a un viaggio **sull'altro continente**, a un portale, a un teletrasporto o a una Hearthstone che carica;
- i buff del Tribute si perdono uscendo da Dire Maul;
- anche uscire dal gioco e rientrare li toglie.

Il cambio non era in nessuna nota degli hotfix. Il thread degli hotfix di Blizzard, quando l'abbiamo controllato la mattina del 23 novembre, finiva ancora con la voce del 20 novembre, che trovate nel nostro articolo sugli [hotfix del 20 novembre](/it/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## La risposta di Blizzard: è un bug {#moon}

Aidan "Zirene" Moon, Senior Game Designer di WoW Forever, [ha risposto su X](${MOON}) alle 22:53 UTC del 22 novembre (le 23:53 in Italia): non è voluto, è un bug e viene corretto «domani». Cioè **lunedì 23 novembre**.

Ha spiegato anche da dove nasce. Il Battle Shout dato dalla missione Diamond Flask veniva lanciato di nuovo a ogni cambio di zona, e da lì si propagava da un giocatore all'altro. È la correzione di quel problema ad aver cominciato a togliere i World Buffs alle schermate di caricamento.

Due avvertenze. La dichiarazione viene dall'account personale di uno sviluppatore, non dal thread degli hotfix né dal forum. E mentre scriviamo non abbiamo potuto verificare in gioco che la correzione sia attiva: il 23 novembre è la data annunciata, non una cosa già fatta.

## Cosa fare nel frattempo {#cosa-fare}

Il consiglio è nostro, non di Blizzard: se volevate usare un World Buff dentro un dungeon, aspettate. Tenete da parte la Head of Rend Blackhand invece di consegnarla, e rimandate un Tribute di Dire Maul fatto solo per i buff, finché i giocatori non confermano che i buff reggono di nuovo a una schermata di caricamento. Nel mondo aperto, sullo stesso continente, funzionano ancora, purché non usciate dal gioco e non vi teletrasportiate.

Con la correzione i World Buffs dovrebbero tornare come prima del fine settimana. Blizzard non ha annunciato altri cambi che li riguardano.

## Altri due cambi che non sono nelle note {#non-documentati}

Nello stesso fine settimana Wowhead ha provato altri due cambi. **Nessuno dei due è nelle note degli hotfix di Blizzard e Blizzard non li ha commentati**; i motivi indicati sono una lettura di Wowhead, non una dichiarazione ufficiale.

- **Lockbox.** [Secondo Wowhead](${WH_LOCKBOX}), un lockbox non si può più aprire solo per guardarci dentro: il contenuto finisce subito nelle borse. Prima un Ladro poteva vedere cosa c'era in una scatola prima di restituirla. Il cambio arriva dopo la segnalazione di un giocatore su Reddit: il contenuto visto dal Ladro poteva essere diverso da quello ricevuto poi dal proprietario.
- **Uldaman, Obsidian Sentinel.** [Wowhead ha verificato](${WH_ULDAMAN}) che questo boss, subito dietro l'ingresso posteriore, non lascia più i suoi oggetti Rare: nella sua prova ha lasciato solo monete e Solid Stone. Un effetto collaterale conta per chi sta livellando: l'Axe of Lingering Dread cadeva da questo boss, e senza quella il Pendulum of Doom per ora non si può comporre.

Tutti e due arrivano dopo una settimana in cui Blizzard è intervenuta sulle fonti di oro, dal limite ai reset dei dungeon agli account sanzionati per [Blackmaw Hold](/it/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). Aggiorneremo questo articolo se Blizzard documenta uno dei due cambi o rimette l'ascia. Altro su Uldaman, Dire Maul e le altre istanze nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).`,
    `El domingo 22 de noviembre de 2026 los jugadores notaron que sus World Buffs en WoW Forever desaparecían cada vez que el juego mostraba una pantalla de carga. Pocas horas después un diseñador de Blizzard confirmó que no era un cambio intencionado. Este artículo separa lo que ha dicho Blizzard de lo que solo han observado los jugadores y Wowhead. Los nombres de hechizos, objetos y lugares siguen en inglés, como en el juego.

## Qué pasa con los World Buffs {#que-pasa}

[Lo contó Wowhead](${WH_BUFFS}) el 22 de noviembre (su publicación en X es de las 19:12 UTC, las 20:12 CET): los buffs se eliminan en **cualquier pantalla de carga**, incluida la de entrar al juego. Los buffs citados son Warchief's Blessing y Might of Stormwind, que se consiguen entregando la Head of Rend Blackhand, y Mol'dar's Moxie, Fengus' Ferocity y Slip'kik's Savvy, que salen de un Tribute de Dire Maul.

En la práctica, mientras dure el error:

- un World Buff no se puede llevar **dentro de una mazmorra**, porque entrar siempre carga;
- no sobrevive a un viaje **al otro continente**, a un portal, a un teletransporte ni a una Hearthstone que cargue;
- los buffs del Tribute se pierden al salir de Dire Maul;
- salir del juego y volver a entrar también los quita.

El cambio no estaba en ninguna nota de hotfixes. El hilo de hotfixes de Blizzard, cuando lo revisamos la mañana del 23 de noviembre, seguía terminando en la entrada del 20 de noviembre, que tienes en nuestro artículo sobre los [hotfixes del 20 de noviembre](/es/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## La respuesta de Blizzard: es un error {#moon}

Aidan "Zirene" Moon, Senior Game Designer de WoW Forever, [respondió en X](${MOON}) a las 22:53 UTC del 22 de noviembre (las 23:53 CET): no es intencionado, es un error y se corrige «mañana». Es decir, el **lunes 23 de noviembre**.

También explicó de dónde viene. El Battle Shout que da la misión Diamond Flask se volvía a lanzar con cada cambio de zona, y desde ahí se propagaba de un jugador a otro. La corrección de ese problema es la que empezó a quitar los World Buffs en las pantallas de carga.

Dos advertencias. La declaración viene de la cuenta personal de un desarrollador, no del hilo de hotfixes ni de los foros. Y al escribir esto no hemos podido comprobar en el juego que el arreglo esté activo: el 23 de noviembre es la fecha anunciada, no un hecho consumado.

## Qué hacer mientras tanto {#que-hacer}

El consejo es nuestro, no de Blizzard: si querías usar un World Buff dentro de una mazmorra, espera. Guarda la Head of Rend Blackhand en lugar de entregarla, y aplaza un Tribute de Dire Maul hecho solo por los buffs, hasta que los jugadores confirmen que los buffs vuelven a aguantar una pantalla de carga. En el mundo abierto, en el mismo continente, siguen funcionando, siempre que no salgas del juego ni te teletransportes.

Con el arreglo, los World Buffs deberían volver a comportarse como antes del fin de semana. Blizzard no ha anunciado ningún otro cambio sobre ellos.

## Otros dos cambios que no están en las notas {#sin-documentar}

Ese mismo fin de semana Wowhead probó otros dos cambios. **Ninguno aparece en las notas de hotfixes de Blizzard y Blizzard no los ha comentado**; los motivos que se dan son una lectura de Wowhead, no una declaración oficial.

- **Lockboxes.** [Según Wowhead](${WH_LOCKBOX}), un lockbox ya no se puede abrir solo para mirar dentro: el contenido va directo a las bolsas. Antes un pícaro podía ver qué había en una caja antes de devolverla. El cambio llega tras el aviso de un jugador en Reddit: el contenido que veía el pícaro podía ser distinto del que recibía después el dueño.
- **Uldaman, Obsidian Sentinel.** [Wowhead comprobó](${WH_ULDAMAN}) que este jefe, justo detrás de la entrada trasera, ya no suelta sus objetos Rare: en su prueba dejó solo monedas y Solid Stone. Un efecto secundario importa a quien está subiendo de nivel: el Axe of Lingering Dread caía de este jefe, y sin él el Pendulum of Doom no se puede montar por ahora.

Los dos llegan tras una semana en la que Blizzard actuó sobre las fuentes de oro, del límite de reinicios de mazmorra a las cuentas sancionadas por [Blackmaw Hold](/es/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). Actualizaremos este artículo si Blizzard documenta alguno de los dos cambios o devuelve el hacha. Más sobre Uldaman, Dire Maul y las demás instancias en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).`,
  ),
  faq: {
    en: [
      {
        q: "Why do World Buffs disappear on loading screens in WoW Forever?",
        a: "It is a bug. Since 22 November 2026 World Buffs are removed at every loading screen. Aidan Moon, Senior Game Designer on WoW Forever, said on X that it is not intended and was caused by a fix for a Battle Shout from the Diamond Flask quest that kept spreading between players.",
      },
      {
        q: "When will the World Buffs bug in WoW Forever be fixed?",
        a: "Aidan Moon wrote on 22 November 2026 that the bug would be fixed the next day, 23 November. Blizzard has not confirmed the fix in its hotfix notes yet, so check that your buffs survive a loading screen before you use them.",
      },
      {
        q: "Can you use World Buffs in dungeons in WoW Forever?",
        a: "Not while the bug of 22 November 2026 is live, because entering a dungeon triggers a loading screen that removes them. Blizzard's designer said this is unintended, so after the fix World Buffs should work in dungeons again as before.",
      },
      {
        q: "Did Blizzard remove the loot from the Obsidian Sentinel in Uldaman?",
        a: "Wowhead found on 22-23 November 2026 that the Obsidian Sentinel no longer drops its Rare items, which also makes the Pendulum of Doom impossible to assemble for now. Blizzard has not listed or explained the change in its hotfix notes.",
      },
    ],
    it: [
      {
        q: "Perché i World Buffs spariscono alle schermate di caricamento in WoW Forever?",
        a: "È un bug. Dal 22 novembre 2026 i World Buffs vengono tolti a ogni schermata di caricamento. Aidan Moon, Senior Game Designer di WoW Forever, ha detto su X che non è voluto e che nasce dalla correzione di un Battle Shout della missione Diamond Flask che continuava a propagarsi fra i giocatori.",
      },
      {
        q: "Quando viene corretto il bug dei World Buffs in WoW Forever?",
        a: "Aidan Moon ha scritto il 22 novembre 2026 che il bug sarebbe stato corretto il giorno dopo, il 23 novembre. Blizzard non ha ancora confermato la correzione nelle note degli hotfix: prima di usare i buff controllate che reggano a una schermata di caricamento.",
      },
      {
        q: "Si possono usare i World Buffs nei dungeon in WoW Forever?",
        a: "Non finché è attivo il bug del 22 novembre 2026, perché entrare in un dungeon fa partire una schermata di caricamento che li toglie. Il designer di Blizzard ha detto che non è voluto: dopo la correzione i World Buffs dovrebbero tornare a funzionare nei dungeon come prima.",
      },
      {
        q: "Blizzard ha tolto il bottino dell'Obsidian Sentinel di Uldaman?",
        a: "Wowhead ha verificato il 22-23 novembre 2026 che l'Obsidian Sentinel non lascia più i suoi oggetti Rare, e questo per ora rende impossibile comporre il Pendulum of Doom. Blizzard non ha elencato né spiegato il cambio nelle note degli hotfix.",
      },
    ],
    es: [
      {
        q: "¿Por qué desaparecen los World Buffs en las pantallas de carga de WoW Forever?",
        a: "Es un error. Desde el 22 de noviembre de 2026 los World Buffs se eliminan en cada pantalla de carga. Aidan Moon, Senior Game Designer de WoW Forever, dijo en X que no es intencionado y que lo causó la corrección de un Battle Shout de la misión Diamond Flask que seguía propagándose entre jugadores.",
      },
      {
        q: "¿Cuándo se arregla el error de los World Buffs en WoW Forever?",
        a: "Aidan Moon escribió el 22 de noviembre de 2026 que el error se corregiría al día siguiente, el 23 de noviembre. Blizzard aún no ha confirmado el arreglo en sus notas de hotfixes: antes de usar los buffs comprueba que aguantan una pantalla de carga.",
      },
      {
        q: "¿Se pueden usar los World Buffs en las mazmorras de WoW Forever?",
        a: "No mientras siga activo el error del 22 de noviembre de 2026, porque entrar en una mazmorra provoca una pantalla de carga que los quita. El diseñador de Blizzard dijo que no es intencionado: tras el arreglo, los World Buffs deberían volver a funcionar en las mazmorras como antes.",
      },
      {
        q: "¿Ha quitado Blizzard el botín del Obsidian Sentinel de Uldaman?",
        a: "Wowhead comprobó el 22 y 23 de noviembre de 2026 que el Obsidian Sentinel ya no suelta sus objetos Rare, lo que por ahora impide montar el Pendulum of Doom. Blizzard no ha incluido ni explicado el cambio en sus notas de hotfixes.",
      },
    ],
  },
};

export default item;

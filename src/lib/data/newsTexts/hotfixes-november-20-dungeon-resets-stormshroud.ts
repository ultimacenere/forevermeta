import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Hotfix del 20/11/2026. Fonte unica: il thread "WoW Forever Hotfixes" (forum US, topic 2403040), voce "November 20"
 * (post 14 di Kaivax, 21/11 00:18 UTC). Blizzard non spiega il motivo del limite ai reset dei dungeon: le considerazioni
 * su chi lo sente sono nostre e sono scritte come tali. Nessun testo di talento annunciato come cambiato.
 */
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-20-2026/2403040";

const item: NewsItem = {
  slug: "hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud",
  date: "2026-11-20",
  source: "blizzard",
  topic: "news",
  url: `${HOTFIX}/14`,
  image: media.newsHotfixesNov20.src,
  imageAlt: media.newsHotfixesNov20.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-races-classes"],
  title: n(
    "WoW Forever hotfixes of 20 November: dungeon resets cut to 5 per hour, Stormshroud Armor nerfed",
    "Hotfix di WoW Forever del 20 novembre: reset dei dungeon a 5 all'ora, Stormshroud Armor ridotta",
    "Hotfixes de WoW Forever del 20 de noviembre: 5 reinicios de mazmorra por hora y Stormshroud Armor",
  ),
  metaTitle: n(
    "WoW Forever hotfixes, 20 November: 5 dungeon resets an hour",
    "WoW Forever, hotfix del 20 novembre: 5 reset dungeon all'ora",
    "WoW Forever, hotfixes del 20 de noviembre: 5 reinicios/hora",
  ),
  summary: n(
    "With the hotfixes of 20 November 2026, WoW Forever players can reset and enter each dungeon at most 5 times per hour, down from 10. The Stormshroud Armor 3-piece bonus drops to a 3% chance to restore 18 energy (it was 4% and 30). Blizzard also fixed Blade Flurry with Shank for Combat Rogues, closed a Demonic Aegis trick for Warlocks and repaired the group finder list.",
    "Con gli hotfix del 20 novembre 2026 in WoW Forever si può resettare ed entrare in ogni dungeon al massimo 5 volte all'ora, non più 10. Il bonus da 3 pezzi della Stormshroud Armor scende al 3% di probabilità di restituire 18 energia (era il 4% e 30). Blizzard ha anche corretto Blade Flurry con Shank per i Ladri Combat, chiuso un trucco con Demonic Aegis per gli Stregoni e sistemato l'elenco della ricerca dei gruppi.",
    "Con los hotfixes del 20 de noviembre de 2026, en WoW Forever se puede reiniciar y entrar en cada mazmorra como máximo 5 veces por hora, en lugar de 10. La bonificación de 3 piezas de la Stormshroud Armor baja a un 3% de probabilidad de restaurar 18 de energía (antes un 4% y 30). Blizzard también corrigió Blade Flurry con Shank para los pícaros Combat, cerró un truco con Demonic Aegis para los brujos y arregló la lista del buscador de grupos.",
  ),
  description: n(
    "WoW Forever hotfixes of 20 November: 5 dungeon resets per hour instead of 10, Stormshroud Armor nerf, Blade Flurry and Demonic Aegis fixes, quests.",
    "Hotfix di WoW Forever del 20 novembre: 5 reset dei dungeon all'ora invece di 10, Stormshroud Armor ridotta, Blade Flurry, Demonic Aegis e missioni.",
    "Hotfixes de WoW Forever del 20 de noviembre: 5 reinicios de mazmorra por hora en vez de 10, Stormshroud Armor reducida, Blade Flurry y Demonic Aegis.",
  ),
  highlights: {
    en: [
      { label: "Dungeons", text: "each dungeon can be reset and entered 5 times per hour, was 10", anchor: "dungeon-resets" },
      { label: "Stormshroud Armor", text: "3-piece bonus at 3% for 18 energy, was 4% for 30", anchor: "stormshroud" },
      { label: "Rogue", text: "Blade Flurry now carries Shank's damage to a second target", anchor: "classes" },
      { label: "Warlock", text: "Demonic Aegis can no longer be kept after unlearning talents", anchor: "classes" },
      { label: "Group finder", text: "the list no longer shows fewer groups than it should", anchor: "interface" },
      { label: "Quests", text: "four fixes in The Hinterlands, Feralas, Tanaris and Riverglades", anchor: "quests" },
    ],
    it: [
      { label: "Dungeon", text: "ogni dungeon si resetta e si riapre 5 volte all'ora, erano 10", anchor: "reset-dungeon" },
      { label: "Stormshroud Armor", text: "bonus da 3 pezzi al 3% per 18 energia, era il 4% per 30", anchor: "stormshroud" },
      { label: "Ladro", text: "Blade Flurry porta il danno di Shank su un secondo bersaglio", anchor: "classi" },
      { label: "Stregone", text: "Demonic Aegis non resta più dopo aver tolto i talenti", anchor: "classi" },
      { label: "Ricerca dei gruppi", text: "l'elenco non mostra più meno gruppi del dovuto", anchor: "interfaccia" },
      { label: "Missioni", text: "quattro correzioni fra The Hinterlands, Feralas, Tanaris e Riverglades", anchor: "missioni" },
    ],
    es: [
      { label: "Mazmorras", text: "cada mazmorra se reinicia y se abre 5 veces por hora, antes 10", anchor: "reinicios-mazmorras" },
      { label: "Stormshroud Armor", text: "bonificación de 3 piezas al 3% para 18 de energía, antes 4% para 30", anchor: "stormshroud" },
      { label: "Pícaro", text: "Blade Flurry lleva el daño de Shank a un segundo objetivo", anchor: "clases" },
      { label: "Brujo", text: "Demonic Aegis ya no se conserva al desaprender los talentos", anchor: "clases" },
      { label: "Buscador de grupos", text: "la lista ya no muestra menos grupos de los debidos", anchor: "interfaz" },
      { label: "Misiones", text: "cuatro correcciones en The Hinterlands, Feralas, Tanaris y Riverglades", anchor: "misiones" },
    ],
  },
  body: n(
    `Blizzard added the entry [20 November](${HOTFIX}/14) to its WoW Forever hotfix thread at 00:18 UTC on 21 November (01:18 CET). It is a short list, but two lines matter to many players: the hourly cap on dungeon resets is halved, and the Stormshroud Armor set bonus loses close to half its energy. Talent, spell and item names stay in English, as in the game. The previous entries are in our article on the [hotfixes of 13-19 November](/en/news/hotfixes-november-13-19-classes-items).

## Dungeon resets: 5 per hour instead of 10 {#dungeon-resets}

Players can now reset and enter **each dungeon a maximum of 5 times per hour**; the limit was 10. Blizzard's note says nothing more: no reason is given, and it does not mention a daily cap.

What it means in practice, in our reading: 5 entries an hour is one every 12 minutes on average. A group that clears a whole dungeon takes longer than that and will not notice. The cap bites on very short repeated runs, where you kill one boss or a few enemies, leave, reset and go back in. If you farm that way, after the fifth entry within the hour you have to wait or move to another dungeon, since the note counts the limit per dungeon.

The same entry frees players from a stone pillar in Blackrock Spire that could trap them. For the dungeon changes of the past days, from the experience rule to Upper Blackrock Spire, see our article on [Blackmaw Hold and dungeon XP](/en/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17).

## Stormshroud Armor: less energy from the set bonus {#stormshroud}

The 3-piece bonus of Stormshroud Armor now has a **3% chance** on melee attacks (was 4%) to restore **18 energy** (was 30). Fewer procs and smaller ones: on average the bonus gives back about 45% of the energy it did before (3 × 18 against 4 × 30). It is still an energy bonus for Rogues and for Druids in Cat Form, just a much weaker one; if you were crafting the set mainly for those three pieces, compare it again with your other options.

## Classes: Rogue and Warlock {#classes}

- **Rogue, Combat**: Blade Flurry now correctly makes Shank's damage hit an additional target.
- **Warlock, Demonology**: the effects of the Demonic Aegis talent could be stored in Demon Armor or Demon Skin and kept after giving up the talent. Now the armour buff is removed when you unlearn your talents, so the bonus only stays with those who actually have the talent.

Both are bug fixes; Blizzard does not announce any change to the talents' text. For an overview of the classes there is our [races and classes guide](/en/guides/wow-forever-races-classes).

## Professions and the world {#world}

- **Blacksmithing**: Toron Rockhoof has repaired his forge and anvil at the Summit of Eternity, which now work for blacksmithing and smelting.
- **Orgrimmar**: Mayhoa Skyhoof no longer has glowing eyes.

## Group finder {#interface}

Blizzard resolved an issue that made some players see fewer groups than intended when looking for a group. If your list looked empty in the past days, it is worth checking again.

## Quests {#quests}

- **The Hinterlands**: Witch Doctor Ti'ik drops several copies of his head when killed by a group on the quest "Witch Doctor Ti'ik".
- **Feralas**: Perfect Yeti Hide no longer drops again while you are already on the quest it starts.
- **Tanaris**: Gor'marok respawns more quickly for "The Dunemaul Compound".
- **Riverglades**: Dunston Willis no longer runs off partway through "Dunston Checks Out".

More on dungeons and zones in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).`,
    `Blizzard ha aggiunto la voce [20 novembre](${HOTFIX}/14) al thread degli hotfix di WoW Forever alle 00:18 UTC del 21 novembre (01:18 in Italia). È una lista corta, ma due righe toccano molti giocatori: il limite orario ai reset dei dungeon è dimezzato, e il bonus del set Stormshroud Armor perde quasi metà della sua energia. I nomi di talenti, incantesimi e oggetti restano in inglese, come nel gioco. Le voci precedenti sono nel nostro articolo sugli [hotfix del 13-19 novembre](/it/news/hotfixes-november-13-19-classes-items).

## Reset dei dungeon: 5 all'ora invece di 10 {#reset-dungeon}

Ora si può resettare ed entrare in **ogni dungeon al massimo 5 volte all'ora**; il limite era 10. La nota di Blizzard non dice altro: non spiega il motivo e non parla di un limite giornaliero.

Cosa vuol dire in pratica, secondo noi: 5 ingressi all'ora sono uno ogni 12 minuti in media. Un gruppo che completa tutto il dungeon ci mette di più e non se ne accorge. Il limite pesa sulle corse brevissime ripetute, quelle in cui si uccide un boss o qualche nemico, si esce, si resetta e si rientra. Se farmate così, dopo il quinto ingresso nell'ora dovete aspettare oppure cambiare dungeon, perché la nota conta il limite per ogni dungeon.

La stessa voce libera i giocatori da un pilastro di pietra di Blackrock Spire che poteva intrappolarli. Per i cambi ai dungeon dei giorni scorsi, dalla regola sull'esperienza a Upper Blackrock Spire, c'è il nostro articolo su [Blackmaw Hold e l'XP nei dungeon](/it/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17).

## Stormshroud Armor: meno energia dal bonus del set {#stormshroud}

Il bonus da 3 pezzi della Stormshroud Armor ha ora il **3% di probabilità** sugli attacchi in mischia (era il 4%) di restituire **18 energia** (era 30). Scatta meno spesso e dà meno: in media il bonus restituisce circa il 45% dell'energia di prima (3 × 18 contro 4 × 30). Resta un bonus di energia per i Ladri e per i Druidi in Cat Form, ma molto più debole; se stavate creando il set soprattutto per quei tre pezzi, confrontatelo di nuovo con le alternative.

## Classi: Ladro e Stregone {#classi}

- **Ladro, Combat**: Blade Flurry ora fa colpire correttamente un bersaglio in più anche al danno di Shank.
- **Stregone, Demonology**: gli effetti del talento Demonic Aegis si potevano fissare in Demon Armor o Demon Skin e tenere anche dopo aver rinunciato al talento. Ora il potenziamento dell'armatura viene tolto quando disimparate i talenti: il bonus resta solo a chi il talento ce l'ha davvero.

Sono due correzioni di bug; Blizzard non annuncia cambi al testo dei talenti. Per un quadro delle classi c'è la nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).

## Professioni e mondo {#mondo}

- **Blacksmithing**: Toron Rockhoof ha riparato la sua forgia e la sua incudine a Summit of Eternity, che ora funzionano per Blacksmithing e per fondere i metalli.
- **Orgrimmar**: Mayhoa Skyhoof non ha più gli occhi luminosi.

## Ricerca dei gruppi {#interfaccia}

Blizzard ha risolto un problema per cui alcuni giocatori vedevano meno gruppi del previsto quando ne cercavano uno. Se nei giorni scorsi il vostro elenco sembrava vuoto, vale la pena riguardare.

## Missioni {#missioni}

- **The Hinterlands**: Witch Doctor Ti'ik lascia più copie della sua testa quando lo uccide un gruppo che ha la missione "Witch Doctor Ti'ik".
- **Feralas**: Perfect Yeti Hide non cade più di nuovo se avete già la missione che fa partire.
- **Tanaris**: Gor'marok ricompare più in fretta per "The Dunemaul Compound".
- **Riverglades**: Dunston Willis non scappa più a metà della missione "Dunston Checks Out".

Altro su dungeon e zone nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).`,
    `Blizzard añadió la entrada [20 de noviembre](${HOTFIX}/14) a su hilo de hotfixes de WoW Forever a las 00:18 UTC del 21 de noviembre (01:18 CET). Es una lista corta, pero dos líneas afectan a muchos jugadores: el límite por hora de reinicios de mazmorra baja a la mitad, y la bonificación del conjunto Stormshroud Armor pierde casi la mitad de su energía. Los nombres de talentos, hechizos y objetos siguen en inglés, como en el juego. Las entradas anteriores están en nuestro artículo sobre los [hotfixes del 13 al 19 de noviembre](/es/news/hotfixes-november-13-19-classes-items).

## Reinicios de mazmorra: 5 por hora en lugar de 10 {#reinicios-mazmorras}

Ahora se puede reiniciar y entrar en **cada mazmorra como máximo 5 veces por hora**; el límite era 10. La nota de Blizzard no dice más: no explica el motivo ni habla de un límite diario.

Qué significa en la práctica, a nuestro juicio: 5 entradas por hora son una cada 12 minutos de media. Un grupo que completa toda la mazmorra tarda más y no lo notará. El límite pesa en las carreras muy cortas y repetidas, en las que se mata a un jefe o a unos pocos enemigos, se sale, se reinicia y se vuelve a entrar. Si farmeas así, tras la quinta entrada en la hora tendrás que esperar o cambiar de mazmorra, porque la nota cuenta el límite por cada mazmorra.

La misma entrada libera a los jugadores de un pilar de piedra de Blackrock Spire que podía atraparlos. Para los cambios de mazmorras de los últimos días, de la regla de experiencia a Upper Blackrock Spire, tienes nuestro artículo sobre [Blackmaw Hold y la XP en mazmorras](/es/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17).

## Stormshroud Armor: menos energía con la bonificación de conjunto {#stormshroud}

La bonificación de 3 piezas de la Stormshroud Armor tiene ahora un **3% de probabilidad** con los ataques cuerpo a cuerpo (antes un 4%) de restaurar **18 de energía** (antes 30). Salta menos y da menos: de media devuelve cerca del 45% de la energía de antes (3 × 18 frente a 4 × 30). Sigue siendo una bonificación de energía para los pícaros y para los druidas en Cat Form, pero mucho más débil; si estabas fabricando el conjunto sobre todo por esas tres piezas, compáralo otra vez con tus alternativas.

## Clases: pícaro y brujo {#clases}

- **Pícaro, Combat**: Blade Flurry ahora hace que el daño de Shank golpee correctamente a un objetivo adicional.
- **Brujo, Demonology**: los efectos del talento Demonic Aegis se podían fijar en Demon Armor o Demon Skin y conservar después de renunciar al talento. Ahora la mejora de armadura se quita al desaprender los talentos: la bonificación solo se queda con quien tiene de verdad el talento.

Son dos correcciones de errores; Blizzard no anuncia cambios en el texto de los talentos. Para un panorama de las clases tienes nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).

## Profesiones y mundo {#mundo}

- **Blacksmithing**: Toron Rockhoof ha reparado su forja y su yunque en Summit of Eternity, que ahora sirven para Blacksmithing y para fundir.
- **Orgrimmar**: Mayhoa Skyhoof ya no tiene los ojos brillantes.

## Buscador de grupos {#interfaz}

Blizzard resolvió un problema por el que algunos jugadores veían menos grupos de los previstos al buscar grupo. Si estos días tu lista parecía vacía, merece la pena volver a mirar.

## Misiones {#misiones}

- **The Hinterlands**: Witch Doctor Ti'ik suelta varias copias de su cabeza cuando lo mata un grupo con la misión "Witch Doctor Ti'ik".
- **Feralas**: Perfect Yeti Hide ya no vuelve a caer si ya tienes la misión que inicia.
- **Tanaris**: Gor'marok reaparece más rápido para "The Dunemaul Compound".
- **Riverglades**: Dunston Willis ya no sale corriendo a mitad de la misión "Dunston Checks Out".

Más sobre mazmorras y zonas en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).`,
  ),
  faq: {
    en: [
      {
        q: "How many times per hour can you reset a dungeon in WoW Forever?",
        a: "Five. Since the hotfix of 20 November 2026 players can reset and enter each dungeon a maximum of 5 times per hour; before, the limit was 10. Blizzard's note gives no reason and mentions no daily cap.",
      },
      {
        q: "What changed for the Stormshroud Armor set bonus in WoW Forever?",
        a: "Since the hotfix of 20 November 2026 the 3-piece bonus has a 3% chance on melee attacks to restore 18 energy. Before, it was a 4% chance to restore 30 energy, so on average it now gives back about 45% of the energy it used to.",
      },
      {
        q: "Was Demonic Aegis changed for Warlocks in WoW Forever?",
        a: "The talent itself was not changed. Blizzard fixed a bug that let Warlocks store its effects in Demon Armor or Demon Skin and keep them after dropping the talent: the armour buff is now removed when talents are unlearned.",
      },
    ],
    it: [
      {
        q: "Quante volte all'ora si può resettare un dungeon in WoW Forever?",
        a: "Cinque. Dall'hotfix del 20 novembre 2026 si può resettare ed entrare in ogni dungeon al massimo 5 volte all'ora; prima il limite era 10. La nota di Blizzard non spiega il motivo e non parla di un limite giornaliero.",
      },
      {
        q: "Cosa è cambiato per il bonus del set Stormshroud Armor in WoW Forever?",
        a: "Dall'hotfix del 20 novembre 2026 il bonus da 3 pezzi ha il 3% di probabilità sugli attacchi in mischia di restituire 18 energia. Prima era il 4% di probabilità di restituirne 30: in media ora rende circa il 45% dell'energia di prima.",
      },
      {
        q: "Demonic Aegis dello Stregone è stato cambiato in WoW Forever?",
        a: "Il talento in sé no. Blizzard ha corretto un bug che permetteva agli Stregoni di fissare i suoi effetti in Demon Armor o Demon Skin e di tenerli dopo aver tolto il talento: ora il potenziamento dell'armatura viene rimosso quando si disimparano i talenti.",
      },
    ],
    es: [
      {
        q: "¿Cuántas veces por hora se puede reiniciar una mazmorra en WoW Forever?",
        a: "Cinco. Desde el hotfix del 20 de noviembre de 2026 se puede reiniciar y entrar en cada mazmorra un máximo de 5 veces por hora; antes el límite era 10. La nota de Blizzard no explica el motivo ni menciona un límite diario.",
      },
      {
        q: "¿Qué cambió en la bonificación del conjunto Stormshroud Armor en WoW Forever?",
        a: "Desde el hotfix del 20 de noviembre de 2026 la bonificación de 3 piezas tiene un 3% de probabilidad con los ataques cuerpo a cuerpo de restaurar 18 de energía. Antes era un 4% de probabilidad de restaurar 30: de media ahora devuelve cerca del 45% de la energía de antes.",
      },
      {
        q: "¿Cambió Demonic Aegis para los brujos en WoW Forever?",
        a: "El talento en sí no. Blizzard corrigió un error que permitía a los brujos fijar sus efectos en Demon Armor o Demon Skin y conservarlos tras quitarse el talento: ahora la mejora de armadura se elimina al desaprender los talentos.",
      },
    ],
  },
};

export default item;

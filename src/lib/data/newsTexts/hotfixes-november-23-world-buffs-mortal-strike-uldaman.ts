import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Hotfix del 23/11/2026. Fonti: il thread "WoW Forever Hotfixes" (forum US, topic 2403040), voce "November 23" (post 15
 * di Kaivax, 24/11 02:06 UTC); il post 4 di Kaivax nel thread sui lockbox (topic 2426335, 23/11 16:26 UTC); il post 2 di
 * Kaivax nel thread "Epic Mount Riding Skill" del forum Bug Report (topic 2424420, 23/11 18:55 UTC). Letti dal JSON del
 * forum il 24/11. Le considerazioni pratiche sono nostre e scritte come tali.
 */
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-23-2026/2403040";
const LOCKBOX = "https://us.forums.blizzard.com/en/wow/t/lockbox-exploit-and-economy-hold-heuristic/2426335/4";
const MOUNT = "https://us.forums.blizzard.com/en/wow/t/epic-mount-riding-skill/2424420/2";

const item: NewsItem = {
  slug: "hotfixes-november-23-world-buffs-mortal-strike-uldaman",
  date: "2026-11-23",
  source: "blizzard",
  topic: "news",
  url: `${HOTFIX}/15`,
  image: media.newsHotfixesNov23.src,
  imageAlt: media.newsHotfixesNov23.alt,
  guides: ["wow-forever-races-classes", "wow-forever-zones-dungeons-raids", "wow-forever-camping-professions"],
  title: n(
    "WoW Forever hotfixes of 23 November: World Buffs survive loading screens, Mortal Strike and Uldaman fixed",
    "Hotfix di WoW Forever del 23 novembre: World Buffs salvi ai caricamenti, Mortal Strike e Uldaman corretti",
    "Hotfixes de WoW Forever del 23 de noviembre: World Buffs tras las cargas, Mortal Strike y Uldaman",
  ),
  metaTitle: n(
    "WoW Forever hotfixes, 23 November: World Buffs fixed",
    "WoW Forever, hotfix del 23 novembre: World Buffs",
    "WoW Forever, hotfixes del 23 de noviembre: World Buffs",
  ),
  summary: n(
    "With the hotfixes of 23 November 2026, World Buffs in WoW Forever no longer fall off when you change zone or see a loading screen, but they are still removed when you enter a raid instance. Fengus' Ferocity and the Darkmoon Faire buffs, which were giving twice the intended power, have been halved back to normal. Warriors can no longer use Mortal Strike without the talent, the Obsidian Sentinel in Uldaman drops its loot again, and Blizzard confirmed that the lockbox change of 22 November is temporary.",
    "Con gli hotfix del 23 novembre 2026 i World Buffs di WoW Forever non si perdono più cambiando zona o a una schermata di caricamento, ma vengono ancora tolti entrando in un'incursione. Fengus' Ferocity e i buff della Darkmoon Faire, che davano il doppio del previsto, tornano al valore giusto. I Guerrieri non possono più usare Mortal Strike senza il talento, l'Obsidian Sentinel di Uldaman lascia di nuovo il suo bottino e Blizzard ha confermato che il cambio ai lockbox del 22 novembre è temporaneo.",
    "Con los hotfixes del 23 de noviembre de 2026, los World Buffs de WoW Forever ya no se pierden al cambiar de zona ni en una pantalla de carga, aunque se siguen quitando al entrar en una banda. Fengus' Ferocity y los buffs de la Darkmoon Faire, que daban el doble de lo previsto, vuelven a su valor correcto. Los guerreros ya no pueden usar Mortal Strike sin el talento, el Obsidian Sentinel de Uldaman vuelve a soltar botín y Blizzard confirmó que el cambio de los lockboxes del 22 de noviembre es temporal.",
  ),
  description: n(
    "WoW Forever hotfixes of 23 November: World Buffs survive loading screens again, Fengus' Ferocity halved, Mortal Strike, Uldaman loot, lockboxes.",
    "Hotfix di WoW Forever del 23 novembre: World Buffs salvi ai caricamenti, Fengus' Ferocity dimezzato, Mortal Strike, bottino di Uldaman e lockbox.",
    "Hotfixes de WoW Forever del 23 de noviembre: World Buffs tras las cargas, Fengus' Ferocity a la mitad, Mortal Strike, botín de Uldaman, lockboxes.",
  ),
  highlights: {
    en: [
      { label: "World Buffs", text: "no longer lost on zone changes and loading screens; still removed in raids", anchor: "world-buffs" },
      { label: "Buff power", text: "Fengus' Ferocity and Darkmoon Faire buffs no longer give double", anchor: "world-buffs" },
      { label: "Warrior", text: "Mortal Strike can no longer be used without the talent", anchor: "classes" },
      { label: "Uldaman", text: "the Obsidian Sentinel drops its loot as intended again", anchor: "uldaman" },
      { label: "Lockboxes", text: "Blizzard: the change of 22 November is temporary, a proper fix is coming", anchor: "lockboxes" },
      { label: "Epic mounts", text: "riding skill bug for Paladins and Warlocks found, fix in a day or two", anchor: "mounts" },
    ],
    it: [
      { label: "World Buffs", text: "non si perdono più a cambi di zona e caricamenti; restano tolti nelle incursioni", anchor: "world-buffs" },
      { label: "Potenza dei buff", text: "Fengus' Ferocity e i buff della Darkmoon Faire non danno più il doppio", anchor: "world-buffs" },
      { label: "Guerriero", text: "Mortal Strike non si può più usare senza il talento", anchor: "classi" },
      { label: "Uldaman", text: "l'Obsidian Sentinel lascia di nuovo il suo bottino come previsto", anchor: "uldaman" },
      { label: "Lockbox", text: "Blizzard: il cambio del 22 novembre è temporaneo, arriva una correzione vera", anchor: "lockbox" },
      { label: "Cavalcature epiche", text: "trovato il bug della cavalcatura per Paladini e Stregoni, correzione in un giorno o due", anchor: "cavalcature" },
    ],
    es: [
      { label: "World Buffs", text: "ya no se pierden al cambiar de zona ni al cargar; se siguen quitando en bandas", anchor: "world-buffs" },
      { label: "Poder de los buffs", text: "Fengus' Ferocity y los buffs de la Darkmoon Faire ya no dan el doble", anchor: "world-buffs" },
      { label: "Guerrero", text: "Mortal Strike ya no se puede usar sin el talento", anchor: "clases" },
      { label: "Uldaman", text: "el Obsidian Sentinel vuelve a soltar su botín como estaba previsto", anchor: "uldaman" },
      { label: "Lockboxes", text: "Blizzard: el cambio del 22 de noviembre es temporal, llegará un arreglo real", anchor: "lockboxes" },
      { label: "Monturas épicas", text: "encontrado el error de equitación de paladines y brujos, arreglo en uno o dos días", anchor: "monturas" },
    ],
  },
  body: n(
    `Blizzard added the entry [23 November](${HOTFIX}/15) to its WoW Forever hotfix thread at 02:06 UTC on 24 November (03:06 CET). It closes the World Buffs bug of the weekend and fixes a long list of class, profession and quest issues. On the same Monday the community manager Kaivax also answered two forum threads, on lockboxes and on epic class mounts. Talent, spell and item names stay in English, as in the game. The previous entry is in our article on the [hotfixes of 20 November](/en/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## World Buffs: fixed, with one exception {#world-buffs}

Since 22 November World Buffs were removed at every loading screen; the story is in our article on the [World Buffs bug](/en/news/world-buffs-removed-loading-screen-bug-fix-aidan-moon). The note of 23 November fixes it: **World Buffs no longer fall off when you change areas**. Blizzard adds one line that matters: **they still fall off when you enter a raid instance**.

In practice, in our reading: you can again take Warchief's Blessing, Might of Stormwind or the Dire Maul Tribute buffs into a dungeon, across a portal or to the other continent. You cannot take them into a raid. Raids open on 9 December, so for now this rule only matters for planning.

The same section fixes two buffs that were too strong:

- **Fengus' Ferocity**, one of the Dire Maul Tribute buffs, was granting **twice the intended spell power**;
- the **Darkmoon Faire** buffs were granting **twice the intended power**.

Both are now back to the intended value, so expect smaller numbers than last week if you used them. Blizzard also fixed a few spells and abilities that triggered weapon procs more often than intended, without naming them.

## Classes {#classes}

- **Warrior**: some players could use Mortal Strike from the spellbook **without the talent**. The ability stays in the spellbook, but it can no longer be used unless you have spent the talent point.
- **Druid**: the 4-piece Feralheart bonus now correctly gives 4 energy every second for 5 seconds.
- **Priest**: Mind Vision no longer triggers other effects. For Shadow, Dark Inspiration now gives the right Spirit bonus when Mind Flay triggers it, and Chastise can be used in Shadowform.
- **Warlock, Destruction**: Intensity now works on Incinerate.

All of these are bug fixes; Blizzard does not announce changes to the talents' text. For an overview of the classes there is our [races and classes guide](/en/guides/wow-forever-races-classes).

## Uldaman: the Obsidian Sentinel drops loot again {#uldaman}

Over the weekend Wowhead had found that the Obsidian Sentinel in Uldaman dropped no Rare items. The note now says only that the boss **"drops loot as intended"**: it does not say what its table contains today. If you are levelling and were waiting for the Axe of Lingering Dread, it is worth trying again, but we have not checked in game whether the axe is back.

## Lockboxes: a temporary measure {#lockboxes}

Kaivax [confirmed on the forum](${LOCKBOX}) at 16:26 UTC on 23 November that lockboxes were changed **on 22 November at 9:55 a.m. Pacific time** (18:55 CET) **as a temporary measure**. Blizzard is working on a proper fix that brings back the option to peek inside a box and to loot only part of it, so that lockboxes work as intended. There is no date yet: Blizzard says it will post when the fix is ready.

## Epic class mounts: riding skill bug {#mounts}

In the Bug Report forum players wrote that, after the Paladin epic mount quest chain, they did not get the upgraded riding skill, so other mounts stayed below full speed. Kaivax [replied](${MOUNT}) at 18:55 UTC on 23 November that the bug has been found and probably affects **both Paladins and Warlocks**. The fix needs another day or two.

## Professions and items {#professions}

- **Cooking**: Boiled Clams, Clam Chowder, Goblin Deviled Clams, Giant Clam Scorcho, Undermine Clam Chowder and Clam Linguine now give the right Well Fed bonus and are listed under "Stamina Food". Murloc Fin Soup moves up to the next food tier, with more recovery and a stronger Well Fed bonus.
- **Engineering**: the Goblin and Gnome Engineer's Renewal Gift no longer show up as broken question marks in your bags, and learning "Goblin Mortar" teaches "The Mortar: Reloaded" again.
- **Leatherworking**: Pattern: Centaur Hoofwarmers can be learned.
- **Items**: The Filcher's Cowl no longer has a level requirement.

More on crafting in our [Camping and professions guide](/en/guides/wow-forever-camping-professions).

## Quests and races {#quests}

- **Wetlands**: "For Further Study" now has rewards; "Uncovering the Past" and "Gleaning Our Future" now give Ironforge reputation.
- **Riverglades**: Dunston Willis runs near the end of the escort "Dunston Checks Out" again (the fix of 20 November had stopped him running partway).
- **Races**: Wisp Form could be applied to players who were alive; that no longer happens.

More on dungeons and zones in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).`,
    `Blizzard ha aggiunto la voce [23 novembre](${HOTFIX}/15) al thread degli hotfix di WoW Forever alle 02:06 UTC del 24 novembre (le 03:06 in Italia). Chiude il bug dei World Buffs del fine settimana e corregge una lunga lista di problemi di classi, professioni e missioni. Lo stesso lunedì il community manager Kaivax ha risposto anche a due discussioni del forum, sui lockbox e sulle cavalcature epiche di classe. I nomi di talenti, incantesimi e oggetti restano in inglese, come nel gioco. La voce precedente è nel nostro articolo sugli [hotfix del 20 novembre](/it/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## World Buffs: corretti, con un'eccezione {#world-buffs}

Dal 22 novembre i World Buffs venivano tolti a ogni schermata di caricamento; la storia è nel nostro articolo sul [bug dei World Buffs](/it/news/world-buffs-removed-loading-screen-bug-fix-aidan-moon). La nota del 23 novembre lo corregge: **i World Buffs non si perdono più cambiando zona**. Blizzard aggiunge una riga che conta: **vengono ancora tolti quando si entra in un'incursione**.

In pratica, secondo noi: Warchief's Blessing, Might of Stormwind e i buff del Tribute di Dire Maul si possono di nuovo portare in un dungeon, attraverso un portale o sull'altro continente. In un'incursione no. Le incursioni aprono il 9 dicembre, quindi per ora la regola serve solo per organizzarsi.

La stessa sezione sistema due buff troppo forti:

- **Fengus' Ferocity**, uno dei buff del Tribute di Dire Maul, dava **il doppio del potere degli incantesimi previsto**;
- i buff della **Darkmoon Faire** davano **il doppio del potere previsto**.

Ora tutti e due tornano al valore giusto: se li usavate, aspettatevi numeri più bassi della settimana scorsa. Blizzard ha anche corretto alcuni incantesimi e abilità che facevano scattare gli effetti delle armi più spesso del dovuto, senza dire quali.

## Classi {#classi}

- **Guerriero**: alcuni giocatori potevano usare Mortal Strike dal libro degli incantesimi **senza il talento**. L'abilità resta nel libro, ma non si può più usare se non avete speso il punto nel talento.
- **Druido**: il bonus da 4 pezzi del set Feralheart ora dà correttamente 4 energia al secondo per 5 secondi.
- **Sacerdote**: Mind Vision non fa più scattare altri effetti. Per Shadow, Dark Inspiration dà ora il giusto bonus allo Spirito quando lo attiva Mind Flay, e Chastise si può usare in Shadowform.
- **Stregone, Destruction**: Intensity ora funziona su Incinerate.

Sono tutte correzioni di bug; Blizzard non annuncia cambi al testo dei talenti. Per un quadro delle classi c'è la nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).

## Uldaman: l'Obsidian Sentinel lascia di nuovo il bottino {#uldaman}

Nel fine settimana Wowhead aveva visto che l'Obsidian Sentinel di Uldaman non lasciava oggetti Rare. Ora la nota dice solo che il boss **lascia il bottino come previsto**, senza dire cosa contiene oggi la sua tabella. Se state livellando e aspettavate l'Axe of Lingering Dread vale la pena riprovare, ma non abbiamo verificato in gioco che l'ascia sia tornata.

## Lockbox: una misura temporanea {#lockbox}

Kaivax [ha confermato sul forum](${LOCKBOX}) alle 16:26 UTC del 23 novembre che i lockbox sono stati cambiati **il 22 novembre alle 9:55 ora del Pacifico** (le 18:55 in Italia) **come misura temporanea**. Blizzard sta preparando una correzione vera che rimette la possibilità di sbirciare in una scatola e di prenderne solo una parte, così che i lockbox funzionino come previsto. Non c'è ancora una data: Blizzard scriverà quando la correzione è pronta.

## Cavalcature epiche di classe: bug dell'abilità di cavalcare {#cavalcature}

Nel forum Bug Report alcuni giocatori hanno scritto che, finita la catena di missioni della cavalcatura epica del Paladino, non ricevevano l'abilità di cavalcare superiore, e le altre cavalcature restavano sotto la velocità piena. Kaivax [ha risposto](${MOUNT}) alle 18:55 UTC del 23 novembre che il bug è stato trovato e probabilmente riguarda **sia i Paladini sia gli Stregoni**. La correzione richiede ancora un giorno o due.

## Professioni e oggetti {#professioni}

- **Cooking**: Boiled Clams, Clam Chowder, Goblin Deviled Clams, Giant Clam Scorcho, Undermine Clam Chowder e Clam Linguine ora danno il giusto bonus Well Fed e sono elencati sotto "Stamina Food". Murloc Fin Soup sale al livello di cibo successivo, con più recupero e un Well Fed più forte.
- **Engineering**: Goblin e Gnome Engineer's Renewal Gift non compaiono più nelle borse come punti di domanda inutilizzabili, e imparando "Goblin Mortar" si impara di nuovo anche "The Mortar: Reloaded".
- **Leatherworking**: Pattern: Centaur Hoofwarmers si può imparare.
- **Oggetti**: The Filcher's Cowl non ha più un requisito di livello.

Altro sulle professioni nella nostra [guida a Camping e professioni](/it/guides/wow-forever-camping-professions).

## Missioni e razze {#missioni}

- **Wetlands**: "For Further Study" ora ha le ricompense; "Uncovering the Past" e "Gleaning Our Future" ora danno reputazione con Ironforge.
- **Riverglades**: Dunston Willis torna a correre verso la fine della scorta "Dunston Checks Out" (la correzione del 20 novembre lo aveva fermato a metà strada).
- **Razze**: Wisp Form poteva essere applicata ai giocatori ancora vivi; non succede più.

Altro su dungeon e zone nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).`,
    `Blizzard añadió la entrada [23 de noviembre](${HOTFIX}/15) a su hilo de hotfixes de WoW Forever a las 02:06 UTC del 24 de noviembre (03:06 CET). Cierra el error de los World Buffs del fin de semana y corrige una larga lista de problemas de clases, profesiones y misiones. Ese mismo lunes el community manager Kaivax respondió además a dos hilos del foro, sobre los lockboxes y sobre las monturas épicas de clase. Los nombres de talentos, hechizos y objetos siguen en inglés, como en el juego. La entrada anterior está en nuestro artículo sobre los [hotfixes del 20 de noviembre](/es/news/hotfixes-november-20-dungeon-resets-5-per-hour-stormshroud).

## World Buffs: corregidos, con una excepción {#world-buffs}

Desde el 22 de noviembre los World Buffs se eliminaban en cada pantalla de carga; la historia está en nuestro artículo sobre el [error de los World Buffs](/es/news/world-buffs-removed-loading-screen-bug-fix-aidan-moon). La nota del 23 de noviembre lo corrige: **los World Buffs ya no se pierden al cambiar de zona**. Blizzard añade una línea importante: **se siguen quitando al entrar en una banda**.

En la práctica, a nuestro juicio: Warchief's Blessing, Might of Stormwind y los buffs del Tribute de Dire Maul se pueden volver a llevar a una mazmorra, a través de un portal o al otro continente. A una banda no. Las bandas abren el 9 de diciembre, así que por ahora esta regla solo sirve para organizarse.

La misma sección corrige dos buffs demasiado fuertes:

- **Fengus' Ferocity**, uno de los buffs del Tribute de Dire Maul, daba **el doble del poder con hechizos previsto**;
- los buffs de la **Darkmoon Faire** daban **el doble del poder previsto**.

Los dos vuelven ahora a su valor correcto: si los usabas, espera cifras más bajas que la semana pasada. Blizzard también corrigió algunos hechizos y habilidades que activaban los efectos de las armas más a menudo de lo debido, sin decir cuáles.

## Clases {#clases}

- **Guerrero**: algunos jugadores podían usar Mortal Strike desde el libro de hechizos **sin el talento**. La habilidad sigue en el libro, pero ya no se puede usar si no has gastado el punto en el talento.
- **Druida**: la bonificación de 4 piezas del conjunto Feralheart da ahora correctamente 4 de energía por segundo durante 5 segundos.
- **Sacerdote**: Mind Vision ya no activa otros efectos. Para Shadow, Dark Inspiration da ahora la bonificación correcta de Espíritu cuando la activa Mind Flay, y Chastise se puede usar en Shadowform.
- **Brujo, Destruction**: Intensity ya funciona con Incinerate.

Todas son correcciones de errores; Blizzard no anuncia cambios en el texto de los talentos. Para un panorama de las clases tienes nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).

## Uldaman: el Obsidian Sentinel vuelve a soltar botín {#uldaman}

El fin de semana Wowhead vio que el Obsidian Sentinel de Uldaman no soltaba objetos Rare. Ahora la nota dice solo que el jefe **suelta el botín como estaba previsto**, sin decir qué contiene hoy su tabla. Si estás subiendo de nivel y esperabas el Axe of Lingering Dread merece la pena volver a intentarlo, pero no hemos comprobado en el juego que el hacha haya vuelto.

## Lockboxes: una medida temporal {#lockboxes}

Kaivax [confirmó en el foro](${LOCKBOX}) a las 16:26 UTC del 23 de noviembre que los lockboxes se cambiaron **el 22 de noviembre a las 9:55 hora del Pacífico** (18:55 CET) **como medida temporal**. Blizzard prepara un arreglo de verdad que devuelve la opción de mirar dentro de una caja y de saquear solo una parte, para que los lockboxes funcionen como estaba previsto. Aún no hay fecha: Blizzard avisará cuando el arreglo esté listo.

## Monturas épicas de clase: error de equitación {#monturas}

En el foro Bug Report algunos jugadores contaron que, al terminar la cadena de misiones de la montura épica del paladín, no recibían la habilidad de equitación superior, y las demás monturas se quedaban por debajo de la velocidad completa. Kaivax [respondió](${MOUNT}) a las 18:55 UTC del 23 de noviembre que el error está localizado y probablemente afecta **tanto a paladines como a brujos**. El arreglo necesita uno o dos días más.

## Profesiones y objetos {#profesiones}

- **Cooking**: Boiled Clams, Clam Chowder, Goblin Deviled Clams, Giant Clam Scorcho, Undermine Clam Chowder y Clam Linguine dan ahora la bonificación Well Fed correcta y aparecen en "Stamina Food". Murloc Fin Soup sube al siguiente nivel de comida, con más recuperación y un Well Fed más fuerte.
- **Engineering**: Goblin y Gnome Engineer's Renewal Gift ya no aparecen en las bolsas como signos de interrogación inservibles, y al aprender "Goblin Mortar" se vuelve a aprender "The Mortar: Reloaded".
- **Leatherworking**: Pattern: Centaur Hoofwarmers ya se puede aprender.
- **Objetos**: The Filcher's Cowl ya no tiene requisito de nivel.

Más sobre profesiones en nuestra [guía de Camping y profesiones](/es/guides/wow-forever-camping-professions).

## Misiones y razas {#misiones}

- **Wetlands**: "For Further Study" ya tiene recompensas; "Uncovering the Past" y "Gleaning Our Future" dan ahora reputación con Ironforge.
- **Riverglades**: Dunston Willis vuelve a correr cerca del final de la escolta "Dunston Checks Out" (el arreglo del 20 de noviembre lo había parado a mitad de camino).
- **Razas**: Wisp Form se podía aplicar a jugadores vivos; ya no ocurre.

Más sobre mazmorras y zonas en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).`,
  ),
  faq: {
    en: [
      {
        q: "Are World Buffs fixed in WoW Forever?",
        a: "Yes. The hotfix of 23 November 2026 fixed the bug that removed World Buffs on every loading screen since 22 November, so they again survive zone changes, portals and dungeons. Blizzard notes that World Buffs are still removed when you enter a raid instance.",
      },
      {
        q: "Was Fengus' Ferocity nerfed in WoW Forever?",
        a: "It was fixed. Until the hotfix of 23 November 2026 the Dire Maul Tribute buff Fengus' Ferocity granted twice the intended spell power; it now gives the intended amount. The Darkmoon Faire buffs had the same double-power bug and were fixed too.",
      },
      {
        q: "Can Warriors use Mortal Strike without the talent in WoW Forever?",
        a: "Not any more. Since the hotfix of 23 November 2026 Mortal Strike can stay in the spellbook, but it cannot be used unless the Warrior has spent the talent point on it.",
      },
      {
        q: "Can you still peek inside lockboxes in WoW Forever?",
        a: "Not for now. Blizzard confirmed on 23 November 2026 that the lockbox change made on 22 November is temporary, and that a proper fix will bring back peeking and partial looting. No date has been given.",
      },
    ],
    it: [
      {
        q: "I World Buffs sono stati corretti in WoW Forever?",
        a: "Sì. L'hotfix del 23 novembre 2026 ha corretto il bug che dal 22 novembre toglieva i World Buffs a ogni schermata di caricamento: ora reggono di nuovo a cambi di zona, portali e dungeon. Blizzard precisa che vengono ancora tolti quando si entra in un'incursione.",
      },
      {
        q: "Fengus' Ferocity è stato ridotto in WoW Forever?",
        a: "È stato corretto. Fino all'hotfix del 23 novembre 2026 il buff Fengus' Ferocity del Tribute di Dire Maul dava il doppio del potere degli incantesimi previsto; ora dà il valore giusto. Anche i buff della Darkmoon Faire davano il doppio e sono stati corretti.",
      },
      {
        q: "I Guerrieri possono usare Mortal Strike senza il talento in WoW Forever?",
        a: "Non più. Dall'hotfix del 23 novembre 2026 Mortal Strike può restare nel libro degli incantesimi, ma non si può usare se il Guerriero non ha speso il punto nel talento.",
      },
      {
        q: "Si può ancora sbirciare nei lockbox in WoW Forever?",
        a: "Per ora no. Blizzard ha confermato il 23 novembre 2026 che il cambio ai lockbox del 22 novembre è temporaneo e che una correzione vera rimetterà la possibilità di sbirciare e di prendere solo una parte del contenuto. Non c'è ancora una data.",
      },
    ],
    es: [
      {
        q: "¿Se han corregido los World Buffs en WoW Forever?",
        a: "Sí. El hotfix del 23 de noviembre de 2026 corrigió el error que desde el 22 de noviembre quitaba los World Buffs en cada pantalla de carga: vuelven a aguantar cambios de zona, portales y mazmorras. Blizzard aclara que se siguen quitando al entrar en una banda.",
      },
      {
        q: "¿Han reducido Fengus' Ferocity en WoW Forever?",
        a: "Lo han corregido. Hasta el hotfix del 23 de noviembre de 2026 el buff Fengus' Ferocity del Tribute de Dire Maul daba el doble del poder con hechizos previsto; ahora da el valor correcto. Los buffs de la Darkmoon Faire tenían el mismo error y también se corrigieron.",
      },
      {
        q: "¿Pueden los guerreros usar Mortal Strike sin el talento en WoW Forever?",
        a: "Ya no. Desde el hotfix del 23 de noviembre de 2026 Mortal Strike puede seguir en el libro de hechizos, pero no se puede usar si el guerrero no ha gastado el punto en el talento.",
      },
      {
        q: "¿Se puede seguir mirando dentro de los lockboxes en WoW Forever?",
        a: "Por ahora no. Blizzard confirmó el 23 de noviembre de 2026 que el cambio de los lockboxes del 22 de noviembre es temporal y que un arreglo real devolverá la opción de mirar dentro y de saquear solo una parte. Todavía no hay fecha.",
      },
    ],
  },
};

export default item;

import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/** I due articoli ufficiali del 7 ottobre 2026 (Blizzard News): progressione PvP alle 17:00 UTC, Darkspear Islands alle 19:00 UTC. */
const DARKSPEAR = "https://news.blizzard.com/en-us/article/24307308/battle-for-the-darkspear-islands-in-world-of-warcraft-forever";
const PVP = {
  en: "https://news.blizzard.com/en-us/article/24303316/how-pvp-progression-in-world-of-warcraft-forever-works",
  it: "https://news.blizzard.com/it-it/article/24303316/come-funziona-la-progressione-pvp-in-world-of-warcraft-forever",
  es: "https://news.blizzard.com/es-es/article/24303316/como-funciona-la-progresion-jcj-en-world-of-warcraft-forever",
};
const DARKSPEAR_IT = "https://news.blizzard.com/it-it/article/24307308/combatti-per-le-darkspear-islands-in-world-of-warcraft-forever";
const DARKSPEAR_ES = "https://news.blizzard.com/es-es/article/24307308/lucha-por-las-islas-lanza-negra-en-world-of-warcraft-forever";

const item: NewsItem = {
  slug: "darkspear-islands-battleground-pvp-progression",
  date: "2026-10-07",
  source: "blizzard",
  topic: "pvp",
  url: DARKSPEAR,
  image: media.darkspearPvp.src,
  imageAlt: media.darkspearPvp.alt,
  guides: ["wow-forever-zones-dungeons-raids", "wow-forever-legacy-system", "wow-forever-rulesets"],
  title: n(
    "WoW Forever: the Darkspear Islands, a 15v15 battleground for levels 30–60, and how PvP ranks and Honor work",
    "WoW Forever: le Darkspear Islands, campo di battaglia 15 contro 15 per i livelli 30–60, e come funziona il PvP",
    "WoW Forever: las Islas Lanza Negra, campo de batalla 15 contra 15 de nivel 30–60, y cómo funciona el JcJ",
  ),
  metaTitle: n(
    "WoW Forever: Darkspear Islands and PvP progression",
    "WoW Forever: Darkspear Islands e progressione PvP",
    "WoW Forever: Islas Lanza Negra y progresión JcJ",
  ),
  summary: n(
    "On 7 October 2026 Blizzard presented the Darkspear Islands, a new 15v15 battleground for levels 30–60 off Dustwallow Marsh, and explained how PvP progression works in WoW Forever. Honor buys the gear, Rank Points lead to High Warlord and Grand Marshal, and each season has weekly tasks, three of which give a Legacy Point.",
    "Il 7 ottobre 2026 Blizzard ha presentato le Darkspear Islands, un nuovo campo di battaglia 15 contro 15 per i livelli 30–60 al largo di Dustwallow Marsh, e ha spiegato come funziona la progressione PvP di WoW Forever. Con l'Honor si compra l'equipaggiamento, i Rank Points portano a High Warlord e Grand Marshal e ogni stagione ha incarichi settimanali, tre dei quali danno un Legacy Point.",
    "El 7 de octubre de 2026 Blizzard presentó las Islas Lanza Negra, un nuevo campo de batalla 15 contra 15 para los niveles 30–60 frente a Marjal Revolcafango, y explicó cómo funciona la progresión JcJ de WoW Forever. Con el honor se compra el equipo, los puntos de rango llevan a Gran Señor de la Guerra y Gran mariscal, y cada temporada tiene tareas semanales, tres de las cuales dan un punto de legado.",
  ),
  description: n(
    "Darkspear Islands, WoW Forever's new 15v15 battleground for levels 30–60, and the PvP progression: Honor, Rank Points, gear by rank and seasons.",
    "Darkspear Islands, il nuovo campo di battaglia 15 contro 15 di WoW Forever (livelli 30–60), e la progressione PvP: Honor, Rank Points, gradi e stagioni.",
    "Islas Lanza Negra, el nuevo campo de batalla 15 contra 15 de WoW Forever (niveles 30–60), y la progresión JcJ: honor, puntos de rango y temporadas.",
  ),
  highlights: {
    en: [
      { label: "Darkspear Islands", text: "a new 15v15 battleground for levels 30–60, off Dustwallow Marsh", anchor: "darkspear-islands" },
      { label: "How to win", text: "four capture points, a central flag, first team to 2,000 points", anchor: "how-to-win" },
      { label: "Two reputations", text: "Darkspear Raiders and Theramore Expeditionary Force, with a tabard at Exalted", anchor: "rewards" },
      { label: "Honor and Rank Points", text: "the two parts of PvP progression, with a weekly cap on ranks", anchor: "honor-ranks" },
      { label: "Gear by rank", text: "a blue set, an epic set and rewards from Rank 1 to Rank 14", anchor: "gear" },
      { label: "PvP seasons", text: "weekly tasks, three of which give a Legacy Point", anchor: "seasons" },
    ],
    it: [
      { label: "Darkspear Islands", text: "un nuovo campo di battaglia 15 contro 15 per i livelli 30–60, al largo di Dustwallow Marsh", anchor: "darkspear-islands" },
      { label: "Come si vince", text: "quattro punti di cattura, una bandiera al centro, vince chi arriva a 2.000 punti", anchor: "come-si-vince" },
      { label: "Due reputazioni", text: "Darkspear Raiders e Theramore Expeditionary Force, con un'insegna a Exalted", anchor: "ricompense" },
      { label: "Honor e Rank Points", text: "le due parti della progressione PvP, con un limite settimanale ai gradi", anchor: "honor-e-gradi" },
      { label: "Equipaggiamento per grado", text: "un set blu, un set epico e ricompense dal grado 1 al 14", anchor: "equipaggiamento" },
      { label: "Stagioni PvP", text: "incarichi settimanali, tre dei quali danno un Legacy Point", anchor: "stagioni" },
    ],
    es: [
      { label: "Islas Lanza Negra", text: "un nuevo campo de batalla 15 contra 15 para los niveles 30–60, frente a Marjal Revolcafango", anchor: "islas-lanza-negra" },
      { label: "Cómo se gana", text: "cuatro puntos de captura, una bandera central y gana quien llega a 2000 puntos", anchor: "como-se-gana" },
      { label: "Dos reputaciones", text: "Asaltantes Lanza Negra y Fuerza Expedicionaria de Theramore, con tabardo en Exaltado", anchor: "recompensas" },
      { label: "Honor y puntos de rango", text: "las dos partes de la progresión JcJ, con un límite semanal en los rangos", anchor: "honor-y-rangos" },
      { label: "Equipo por rango", text: "un conjunto azul, uno épico y recompensas del rango 1 al 14", anchor: "equipo" },
      { label: "Temporadas JcJ", text: "tareas semanales, tres de las cuales dan un punto de legado", anchor: "temporadas" },
    ],
  },
  body: n(
    `On 7 October 2026 Blizzard published two articles on PvP in World of Warcraft: Forever. The first, at 17:00 UTC, explains [how PvP progression works](${PVP.en}); the second, at 19:00 UTC, presents the [Darkspear Islands](${DARKSPEAR}), the new battleground. Here is what they say, in short. Names of places, factions and items are the ones used in the articles.

## The Darkspear Islands {#darkspear-islands}

- **Type**: 15v15 battleground, with capture points and a flag to capture.
- **Where**: off the shores of Dustwallow Marsh.
- **Levels**: 30–60.
- **Victory**: the first team to reach 2,000 points.

The two sides are the **Darkspear Raiders** (Horde) and the **Theramore Expeditionary Force** (Alliance). The battleground is also listed in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids#darkspear-islands).

## How to win {#how-to-win}

Teams earn points by controlling **four capture points** spread across the islands: the more points a team holds, the faster it scores. In the middle of the map there is a **flag**: grab it, carry it to one of the bases your team has captured and you earn more points. The first team to 2,000 points wins.

## How to queue {#queue}

You can queue at a battlemaster in any major capital city or in the Barrens (Kalimdor), or at the two faction bases: the Darkspear Raiders at the **Merchant Coast** (Horde) and the Theramore Expeditionary Force at **Northwatch** (Alliance), where a portal takes you into the battle. The bases also have vendors with reputation rewards and quests for the battleground.

On which players you meet, Blizzard's article on rulesets of 21 September says that battlegrounds may include players from other rulesets, except Hardcore: more in our [rulesets guide](/en/guides/wow-forever-rulesets).

## Rewards {#rewards}

Each faction has its own reputation track. As you reach higher reputation thresholds you can buy gear and consumables, including **trinkets, rings, cloaks, weapons and armor pieces**. The battleground has quests too: the reputation quests involve **Marks of Honor**, and at **Exalted** a short questline unlocks the faction's exclusive **tabard**.

## Honor and Rank Points {#honor-ranks}

Blizzard says it wanted PvP to be "Approachable and Familiar": a simplified version of the original Honor System that stays true to its roots. Progression has two parts.

- **Honor** is a currency. You earn it by defeating other players, completing battlegrounds and finishing PvP quests, and you get more of it in the highlighted battlegrounds during their holiday weeks. Blizzard has reviewed Honor gains so that rates are more consistent across battlegrounds: the goal is that nobody feels pushed to pick Alterac Valley just because it gives Honor faster.
- **Rank Points** come from battlegrounds and PvP quests, with an extra boost in holiday-week battlegrounds. They take you through the ranks of the original World of Warcraft, up to **High Warlord** (Horde) or **Grand Marshal** (Alliance). Ranks have a **weekly cap**.

To check your progress, open the Character Pane (C) and select the Player vs. Player tab on the right: it shows your rank, your current Rank Points and the rewards you can buy at your rank.

## Gear by rank {#gear}

Honor buys two sets of PvP gear, one **blue** and one **epic**. To upgrade a piece to epic you need the blue piece plus an **Emboldened Seal**, and Emboldened Seals have rank requirements. There are also new and reworked items for specializations that had no options before: Shamans, for example, now have healer, melee and caster PvP sets.

| Rank | Reward |
| --- | --- |
| 1 | Tabard |
| 2 | PvP Trinket |
| 3 | Cloaks |
| 4 | Necklace |
| 5 | Combat Potions |
| 6 | Tabard |
| 7 | Battle Standard |
| 8 | Epic Bracers/Epic Belt Upgrade Token |
| 9 | Epic Boots Upgrade Token |
| 10 | Epic Gloves Upgrade Token |
| 11 | Mounts |
| 12 | Epic Legs/Epic Shoulders Upgrade Token |
| 13 | Epic Chest/Epic Helm Upgrade Token |
| 14 | Epic Weapons |

## PvP seasons {#seasons}

During a PvP season you climb the ranks and earn Honor. Each season also has a journey of **weekly tasks**: completing them gives Honor and Rank Points, and **three tasks per season give a Legacy Point**. Because they are tied to the Legacy System, these tasks stay available in future seasons. How Legacy Points work is in our [Legacy System guide](/en/guides/wow-forever-legacy-system).

## What we don't know yet {#unknown}

- **When the Darkspear Islands open**: the article gives no date, and does not say whether the 30–60 range is split into brackets.
- **Numbers**: how many points a capture point or the flag is worth, the reputation needed for each reward, the prices in Honor, how many Rank Points each rank takes and how high the weekly cap is.
- **Seasons**: start date, length, and whether ranks are kept or reset from one season to the next.
- **Marks of Honor**: the three versions of the article do not agree. The English text says "Turn in for Marks of Honor for reputation quests", the Italian one says you hand them in for the reputation quests, the Spanish one that completing the quests earns them.
- **Other battlegrounds and holiday weeks**: apart from the Darkspear Islands, only Alterac Valley is named, and there is no calendar of the holiday weeks yet.
- **Which other specializations** get new PvP sets besides the Shaman ones, and which weekly tasks give the Legacy Points.`,
    `Il 7 ottobre 2026 Blizzard ha pubblicato due articoli sul PvP di World of Warcraft: Forever. Il primo, alle 17:00 UTC, spiega [come funziona la progressione PvP](${PVP.it}); il secondo, alle 19:00 UTC, presenta il nuovo campo di battaglia, le [Darkspear Islands](${DARKSPEAR_IT}). Ecco in breve cosa dicono. Il client non ha l'italiano, quindi i nomi di luoghi, fazioni e oggetti restano quelli delle pagine italiane di Blizzard, quasi sempre in inglese.

## Le Darkspear Islands {#darkspear-islands}

- **Tipo**: campo di battaglia 15 contro 15, con conquista dei punti e cattura della bandiera.
- **Dove**: al largo delle coste di Dustwallow Marsh.
- **Livelli**: 30–60.
- **Vittoria**: la prima squadra che arriva a 2.000 punti.

Le due parti sono i **Darkspear Raiders** (Orda) e la **Theramore Expeditionary Force** (Alleanza). Il campo di battaglia è anche nella nostra [guida a zone, dungeon e raid](/it/guides/wow-forever-zones-dungeons-raids#darkspear-islands).

## Come si vince {#come-si-vince}

Le squadre fanno punti controllando **quattro punti di cattura** sparsi per le isole: più punti controlla una squadra, più in fretta accumula. Al centro della mappa c'è una **bandiera**: la prendi, la porti in una delle basi conquistate dalla tua squadra e ottieni altri punti. Vince la prima squadra che arriva a 2.000.

## Come mettersi in coda {#coda}

Ti metti in coda da un Battlemaster in una qualsiasi delle capitali principali o nelle Barrens (Kalimdor), oppure nelle basi delle due fazioni: i Darkspear Raiders sulla **Merchant Coast** (Orda) e la Theramore Expeditionary Force a **Northwatch** (Alleanza), dove un portale ti porta in battaglia. Nelle basi ci sono anche mercanti con le ricompense di reputazione e le missioni del campo di battaglia.

Su chi si incontra: l'articolo di Blizzard sui set di regole del 21 settembre dice che i campi di battaglia possono mescolare giocatori di set di regole diversi, tranne Hardcore. Di più nella nostra [guida ai set di regole](/it/guides/wow-forever-rulesets).

## Ricompense {#ricompense}

Ogni fazione ha il suo percorso di reputazione. Alle varie soglie si possono comprare equipaggiamento e consumabili, fra cui **monili, anelli, mantelli, armi e pezzi di armatura**. Ci sono anche le missioni del campo di battaglia: quelle di reputazione girano intorno ai **Marks of Honor**, e al grado **Exalted** si sblocca una breve serie di missioni per ottenere l'**insegna** (tabard) esclusiva della fazione.

## Honor e Rank Points {#honor-e-gradi}

Blizzard dice di aver tenuto fermo il principio "accessibile e familiare": semplificare l'Honor System originale restando fedeli alle sue radici. La progressione ha due parti.

- L'**Honor** è una valuta. Si ottiene sconfiggendo altri giocatori, completando campi di battaglia e finendo le missioni PvP, e se ne guadagna di più nei campi di battaglia in evidenza durante le loro settimane di festività. Blizzard ha rivisto i guadagni di Honor perché siano più uniformi fra i campi di battaglia: nessuno deve sentirsi costretto a scegliere Alterac Valley solo perché rende di più.
- I **Rank Points** arrivano dai campi di battaglia e dalle missioni PvP, con un bonus in più nei campi di battaglia delle settimane di festività. Fanno salire nei gradi PvP dell'originale World of Warcraft, fino a **High Warlord** (Orda) o **Grand Marshal** (Alleanza). I gradi hanno un **limite settimanale**.

Per vedere i progressi apri il pannello del personaggio (tasto C) e scegli la scheda Player vs. Player sul lato destro: mostra il grado, i Rank Points attuali e le ricompense che puoi comprare con il tuo grado.

## Equipaggiamento per grado {#equipaggiamento}

Con l'Honor si comprano due set di equipaggiamento PvP, uno **blu** e uno **epico**. Per passare all'epico serve il pezzo blu più un **Emboldened Seal**, e gli Emboldened Seal hanno dei requisiti di grado. Ci sono anche oggetti nuovi o rielaborati per le specializzazioni che prima non avevano opzioni: gli Sciamani, per esempio, hanno set PvP da guaritore, da mischia e da incantatore.

| Grado | Ricompensa |
| --- | --- |
| 1 | Insegna |
| 2 | Monile PvP |
| 3 | Mantelli |
| 4 | Collana |
| 5 | Pozioni da combattimento |
| 6 | Insegna |
| 7 | Stendardo da Battaglia |
| 8 | Upgrade Token Cintura Epica/Bracciali Epici |
| 9 | Upgrade Token Stivali Epici |
| 10 | Upgrade Token Guanti Epici |
| 11 | Cavalcature |
| 12 | Upgrade Token Gambe Epiche/Spallacci Epici |
| 13 | Upgrade Token Corazza Epica/Elmo Epico |
| 14 | Armi Epiche |

## Stagioni PvP {#stagioni}

Durante una stagione PvP si sale di grado e si guadagna Honor. Ogni stagione ha anche un percorso di **incarichi settimanali**: completarli dà Honor e Rank Points, e **tre incarichi per stagione danno un Legacy Point**. Siccome sono legati al Legacy System, questi incarichi restano disponibili anche nelle stagioni successive. Come funzionano i Legacy Point lo trovi nella nostra [guida al Legacy System](/it/guides/wow-forever-legacy-system).

## Cosa non sappiamo ancora {#cosa-non-sappiamo}

- **Quando aprono le Darkspear Islands**: l'articolo non dà una data e non dice se la fascia 30–60 è divisa in scaglioni.
- **I numeri**: quanti punti valgono un punto di cattura o la bandiera, quanta reputazione serve per ogni ricompensa, i prezzi in Honor, quanti Rank Points servono per ogni grado e quanto è alto il limite settimanale.
- **Le stagioni**: data d'inizio, durata, e se il grado si conserva o si azzera da una stagione all'altra.
- **I Marks of Honor**: le tre versioni dell'articolo non coincidono. Quella italiana dice di consegnarli per le missioni di reputazione, quella spagnola che le missioni li fanno ottenere, e la frase inglese ("Turn in for Marks of Honor for reputation quests") si presta a tutte e due le letture.
- **Gli altri campi di battaglia e le settimane di festività**: oltre alle Darkspear Islands è nominata solo Alterac Valley, e un calendario delle settimane di festività non c'è ancora.
- **Quali altre specializzazioni** hanno set PvP nuovi oltre a quelli degli Sciamani, e quali incarichi settimanali danno i Legacy Point.`,
    `El 7 de octubre de 2026 Blizzard publicó dos artículos sobre el JcJ de World of Warcraft: Forever. El primero, a las 17:00 UTC, explica [cómo funciona la progresión JcJ](${PVP.es}); el segundo, a las 19:00 UTC, presenta el nuevo campo de batalla, las [Islas Lanza Negra](${DARKSPEAR_ES}). Esto es, en resumen, lo que dicen. Los nombres de lugares, facciones y objetos son los de los artículos en español.

## Las Islas Lanza Negra {#islas-lanza-negra}

- **Tipo**: campo de batalla 15 contra 15, con puntos de captura y captura de bandera.
- **Dónde**: frente a las costas de Marjal Revolcafango.
- **Niveles**: 30–60.
- **Victoria**: el primer equipo en llegar a 2000 puntos.

Los dos bandos son los **Asaltantes Lanza Negra** (Horda) y la **Fuerza Expedicionaria de Theramore** (Alianza). El campo de batalla también está en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids#islas-lanza-negra).

## Cómo se gana {#como-se-gana}

Los equipos consiguen puntos controlando **cuatro puntos de captura** repartidos por las islas: cuantos más controla un equipo, más rápido suma. En el centro del mapa hay una **bandera**: cógela, llévala a una de las bases que haya capturado tu equipo y obtendrás más puntos. Gana el primer equipo que llega a 2000.

## Cómo hacer cola {#cola}

Puedes hacer cola con un maestro de batalla en cualquiera de las capitales o en Los Baldíos (Kalimdor), o en las bases de las dos facciones: los Asaltantes Lanza Negra en la **Costa Mercante** (Horda) y la Fuerza Expedicionaria de Theramore en **Fuerte del Norte** (Alianza), donde un portal te lleva a la batalla. En las bases también hay vendedores con recompensas de reputación y misiones del campo de batalla.

Sobre con quién juegas: el artículo de Blizzard sobre los conjuntos de reglas del 21 de septiembre dice que los campos de batalla pueden mezclar jugadores de otros conjuntos de reglas, excepto Hardcore. Más en nuestra [guía de los conjuntos de reglas](/es/guides/wow-forever-rulesets).

## Recompensas {#recompensas}

Cada facción tiene su propio registro de reputación. Al llegar a determinados hitos se pueden comprar equipo y consumibles, como **abalorios, anillos, capas, armas y piezas de armadura**. El campo de batalla también tiene misiones: las de reputación están ligadas a las **marcas de honor**, y en **Exaltado** se desbloquea una breve cadena de misiones para obtener el **tabardo** exclusivo de la facción.

## Honor y puntos de rango {#honor-y-rangos}

Blizzard dice que quiso mantener el concepto de «accesible y conocido»: simplificar el sistema de honor original sin perder de vista sus raíces. La progresión tiene dos partes.

- El **honor** es una divisa. Se obtiene derrotando a otros jugadores, participando en campos de batalla y completando misiones JcJ, y se gana más en los campos de batalla destacados durante sus semanas festivas. Blizzard ha revisado las ganancias de honor para que sean más homogéneas entre campos de batalla: nadie debería sentirse obligado a elegir el Valle de Alterac solo porque allí se gana más rápido.
- Los **puntos de rango** llegan de los campos de batalla y de las misiones JcJ, con una bonificación adicional en los campos de batalla de las semanas festivas. Hacen subir por los rangos JcJ del World of Warcraft original, hasta **Gran Señor de la Guerra** (Horda) o **Gran mariscal** (Alianza). Los rangos tienen un **límite semanal**.

Para ver tu progreso, abre el panel del personaje (atajo: C) y selecciona la pestaña Jugador contra jugador, a la derecha: muestra tu rango, tus puntos de rango y las recompensas que puedes comprar con tu rango.

## Equipo por rango {#equipo}

Con el honor se compran dos conjuntos de equipo JcJ, uno **azul** y otro **épico**. Para mejorar una pieza a épica hace falta la pieza azul y un **lacre envalentonado**, y los lacres envalentonados tienen requisitos de rango. También hay objetos nuevos y rediseñados para especializaciones que antes no tenían opciones: el chamán, por ejemplo, tiene conjuntos JcJ para sanador, combatiente cuerpo a cuerpo y taumaturgo.

| Rango | Recompensa |
| --- | --- |
| 1 | Tabardo |
| 2 | Abalorio JcJ |
| 3 | Capas |
| 4 | Collar |
| 5 | Pociones de combate |
| 6 | Tabardo |
| 7 | Confalón de batalla |
| 8 | Ficha de mejora de brazales épicos/cinturón épico |
| 9 | Ficha de mejora de botas épicas |
| 10 | Ficha de mejora de guantes épicos |
| 11 | Monturas |
| 12 | Ficha de mejora de piernas épicas/sobrehombros épicos |
| 13 | Ficha de mejora de pechera épica/yelmo épico |
| 14 | Armas épicas |

## Temporadas JcJ {#temporadas}

Durante una temporada JcJ se sube de rango y se gana honor. Cada temporada tiene además un registro de **tareas semanales**: completarlas da honor y puntos de rango, y **tres tareas por temporada dan un punto de legado**. Como están vinculadas al sistema de legado, estas tareas siguen disponibles en las temporadas siguientes. Cómo funcionan los puntos de legado lo tienes en nuestra [guía del sistema de legado](/es/guides/wow-forever-legacy-system).

## Lo que aún no sabemos {#lo-que-aun-no-sabemos}

- **Cuándo abren las Islas Lanza Negra**: el artículo no da fecha y no dice si la franja 30–60 se divide en tramos.
- **Las cifras**: cuántos puntos valen un punto de captura o la bandera, cuánta reputación hace falta para cada recompensa, los precios en honor, cuántos puntos de rango pide cada rango y cuál es el límite semanal.
- **Las temporadas**: fecha de inicio, duración y si el rango se conserva o se reinicia de una temporada a otra.
- **Las marcas de honor**: las tres versiones del artículo no coinciden. La española dice que las misiones las dan, la italiana que se entregan para las misiones de reputación, y la frase inglesa ("Turn in for Marks of Honor for reputation quests") admite las dos lecturas.
- **Los demás campos de batalla y las semanas festivas**: aparte de las Islas Lanza Negra solo se nombra el Valle de Alterac, y aún no hay un calendario de las semanas festivas.
- **Qué otras especializaciones** tienen conjuntos JcJ nuevos además de las del chamán, y qué tareas semanales dan los puntos de legado.`,
  ),
  faq: {
    en: [
      {
        q: "What level do you need for the Darkspear Islands?",
        a: "The battleground is for levels 30 to 60. Blizzard's article of 7 October 2026 does not say when it opens.",
      },
      {
        q: "How do you reach High Warlord or Grand Marshal in WoW Forever?",
        a: "By earning Rank Points in battlegrounds and PvP quests, with a boost in holiday-week battlegrounds. Ranks have a weekly cap, and the article does not give the numbers.",
      },
      {
        q: "Does PvP give Legacy Points?",
        a: "Yes. Each PvP season has weekly tasks, and three of them give a Legacy Point. They stay available in future seasons.",
      },
    ],
    it: [
      {
        q: "Che livello serve per le Darkspear Islands?",
        a: "Il campo di battaglia è per i livelli dal 30 al 60. L'articolo di Blizzard del 7 ottobre 2026 non dice quando apre.",
      },
      {
        q: "Come si arriva a High Warlord o Grand Marshal in WoW Forever?",
        a: "Guadagnando Rank Points nei campi di battaglia e nelle missioni PvP, con un bonus nei campi di battaglia delle settimane di festività. I gradi hanno un limite settimanale, e l'articolo non dà i numeri.",
      },
      {
        q: "Il PvP dà Legacy Point?",
        a: "Sì. Ogni stagione PvP ha incarichi settimanali, e tre di questi danno un Legacy Point. Restano disponibili anche nelle stagioni successive.",
      },
    ],
    es: [
      {
        q: "¿Qué nivel hace falta para las Islas Lanza Negra?",
        a: "El campo de batalla es para los niveles del 30 al 60. El artículo de Blizzard del 7 de octubre de 2026 no dice cuándo abre.",
      },
      {
        q: "¿Cómo se llega a Gran Señor de la Guerra o Gran mariscal en WoW Forever?",
        a: "Ganando puntos de rango en campos de batalla y misiones JcJ, con una bonificación en los campos de batalla de las semanas festivas. Los rangos tienen un límite semanal, y el artículo no da las cifras.",
      },
      {
        q: "¿El JcJ da puntos de legado?",
        a: "Sí. Cada temporada JcJ tiene tareas semanales, y tres de ellas dan un punto de legado. Siguen disponibles en las temporadas siguientes.",
      },
    ],
  },
};

export default item;

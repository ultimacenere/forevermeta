import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Articolo ufficiale "Gather Around the Campfire in World of Warcraft: Forever" (Blizzard News, 21 ottobre 2026; in
 * italiano "Siediti accanto al falò in World of Warcraft: Forever"): la prima descrizione completa del Camping, con la
 * tabella delle camp feature di professione. I nomi degli oggetti restano in inglese anche nell'articolo italiano.
 */
const ARTICLE = "https://news.blizzard.com/en-us/article/24301516/gather-around-the-campfire-in-world-of-warcraft-forever";

const item: NewsItem = {
  slug: "camping-system-official-camp-features",
  date: "2026-10-21",
  source: "blizzard",
  topic: "news",
  url: ARTICLE,
  image: media.camping.src,
  imageAlt: media.camping.alt,
  guides: ["wow-forever-camping-professions", "wow-forever-legacy-system", "wow-forever-rulesets"],
  title: n(
    "WoW Forever Camping explained by Blizzard: the Basic Campfire, profession camp features and one-hour buffs",
    "Il Camping di WoW Forever spiegato da Blizzard: Basic Campfire, camp feature per professione e buff di un'ora",
    "La acampada de WoW Forever según Blizzard: hoguera básica, objetos de campamento y beneficios de una hora",
  ),
  metaTitle: n("WoW Forever Camping: the official campfire rules", "WoW Forever: il Camping spiegato da Blizzard", "WoW Forever: la acampada explicada por Blizzard"),
  summary: n(
    "On 21 October 2026 Blizzard published the first full description of Camping in WoW Forever. A Basic Campfire holds up to three profession-made camp features, each a variant of a class buff: sit or craft by the fire for one minute and you get them all, for one hour. Here is the official table, profession by profession.",
    "Il 21 ottobre 2026 Blizzard ha pubblicato la prima descrizione completa del Camping di WoW Forever. Un Basic Campfire regge fino a tre camp feature fatte con le professioni, ognuna una variante di un buff di classe: siediti o crafta accanto al fuoco per un minuto e le ricevi tutte, per un'ora. Ecco la tabella ufficiale, professione per professione.",
    "El 21 de octubre de 2026 Blizzard publicó la primera descripción completa de la acampada en WoW Forever. Una hoguera básica admite hasta tres objetos de campamento hechos con profesiones, cada uno una variante de un beneficio de clase: siéntate o fabrica junto al fuego un minuto y los recibes todos, durante una hora. Esta es la tabla oficial, profesión por profesión.",
  ),
  description: n(
    "Blizzard's 21 October 2026 article on WoW Forever Camping: how a campsite works, each profession's camp feature and buff, and where the items come from.",
    "Articolo Blizzard del 21 ottobre 2026 sul Camping di WoW Forever: come funziona l'accampamento, la camp feature di ogni professione, dove trovare gli oggetti.",
    "Artículo de Blizzard (21 de octubre de 2026) sobre la acampada en WoW Forever: cómo funciona un campamento, el objeto de cada profesión y de dónde salen.",
  ),
  highlights: {
    en: [
      { label: "One minute by the fire", text: "sit or craft for a minute and you get every camp feature", anchor: "campsite" },
      { label: "Eleven camp features", text: "one per profession, each a variant of a class buff", anchor: "features" },
      { label: "Skill 20 and 140", text: "first items from quests or trainers, the rest from dungeons and raids", anchor: "items" },
      { label: "Bigger campfires", text: "cooks learn fires with 5 and 10 slots", anchor: "upgrades" },
      { label: "Still unknown", text: "the full list, the upgraded fires, the Blueprints", anchor: "unknown" },
    ],
    it: [
      { label: "Un minuto accanto al fuoco", text: "siediti o crafta per un minuto e ricevi tutte le camp feature", anchor: "accampamento" },
      { label: "Undici camp feature", text: "una per professione, ognuna variante di un buff di classe", anchor: "feature" },
      { label: "Skill 20 e 140", text: "i primi oggetti da missioni o trainer, il resto da dungeon e raid", anchor: "oggetti" },
      { label: "Fuochi più grandi", text: "i cuochi imparano fuochi da 5 e da 10 posti", anchor: "miglioramenti" },
      { label: "Ancora ignoto", text: "la lista completa, i fuochi migliorati, i Blueprint", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Un minuto junto al fuego", text: "siéntate o fabrica un minuto y recibes todos los objetos de campamento", anchor: "campamento" },
      { label: "Once objetos de campamento", text: "uno por profesión, cada uno variante de un beneficio de clase", anchor: "objetos" },
      { label: "Habilidad 20 y 140", text: "los primeros de misiones o maestros, el resto de mazmorras y bandas", anchor: "origen" },
      { label: "Hogueras más grandes", text: "los cocineros aprenden hogueras de 5 y 10 huecos", anchor: "mejoras" },
      { label: "Todavía sin saber", text: "la lista completa, las hogueras mejoradas, los planos", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `On 21 October 2026 Blizzard published [Gather Around the Campfire in World of Warcraft: Forever](${ARTICLE}), the first article entirely about Camping, the system announced at BlizzCon that turns the Cooking Fire into a shared campsite. Until then we only had the panel recaps and the beta notes; now there is an official table of what each profession brings to the fire. Item names are in English, as in the game and in Blizzard's Italian article.

## How a campsite works {#campsite}

- The Cooking profession's Cooking Fire becomes a **Basic Campfire**. Once placed, it creates a campsite where nearby players can rest.
- A Basic Campfire supports up to **three camp features**, special crafted objects, and each player can add **one**.
- Players who **sit or craft at the campsite for at least one minute** gain the benefits of the other camp features.
- The buffs are **variants of buffs normally given by specific classes, and are exclusive with them**: a Sharpening Wheel does not stack with a Shaman's Strength of Earth Totem, for example.
- All camp features require a campfire nearby and **share a one-hour cooldown**.
- Blizzard adds a warning: on a PvP ruleset, a camp is a risk when enemy players find it (see the [rulesets guide](/en/guides/wow-forever-rulesets)).

## The camp feature of each profession {#features}

The table is "a sample" according to Blizzard, so there may be more items. Numbers depend on your level.

| Profession | Item | Skill | Effect (exclusive with) |
|---|---|---|---|
| Cooking | Basic Campfire | 1 | Cooking, plus up to three camp features |
| First Aid | First Aid Kit | 20 | +3 to +56 Stamina (Power Word: Fortitude) |
| Fishing | Fishing Bowl | 20 | +8% to all stats (Blessing of Kings) |
| Alchemy | Mana Well | 20 | 10 to 29 Mana every 5 seconds (Blessing of Wisdom) |
| Blacksmithing | Sharpening Wheel | 20 | +6 to +34 Strength (Strength of Earth Totem) |
| Enchanting | Enchanted Lute | 20 | +28 to +260 Armor, +0 to +13 all stats, +0 to +22 all resistances (Mark of the Wild) |
| Engineering | Reagent Bot | 20 | Sells reagents to everyone nearby |
| Herbalism | Incense Candle | 20 | +2 to +25 Intellect (Arcane Intellect) |
| Leatherworking | Camp Tent | 20 | Rested experience up by 5% of a level, if you have less than that |
| Skinning | Camp Chair | 20 | +2% critical strike chance with spells and attacks (Moonkin Aura) |
| Tailoring | Faction Banner | 20 | +14 to +32 Spirit, only for your faction (Divine Spirit) |

## Where the items come from {#items}

A simple quest early in the game introduces Camping. Once a profession reaches **skill 20**, its first campsite items come from quests in the starting zones or from a profession trainer. Items that need **skill 140 or higher** drop in dungeons and raids.

The article also sums up the profession rules: you can learn all three secondary professions (Cooking, Fishing, First Aid) and two primary ones, among the gathering professions (Skinning, Mining, Herbalism) and the crafting ones (Alchemy, Blacksmithing, Enchanting, Engineering, Leatherworking, Tailoring). Ranks go from Apprentice to Journeyman, Expert and Artisan; to unlearn one, open the Professions tab (K) and click the X next to it.

## Bigger campfires and other camp objects {#upgrades}

Cooks can eventually learn upgraded campfires with **five or even ten** slots, and other professions unlock "helpful conveniences" such as Alchemy Laboratories and Tanning Racks. Blizzard gives no skill levels for these.

Our [Camping and professions guide](/en/guides/wow-forever-camping-professions) has been updated with all of this.

## What we don't know yet {#unknown}

- **The full list**: the table is a sample; Blizzard does not say how many camp features exist in total.
- **The upgraded campfires**: which skill level unlocks the 5- and 10-slot fires, and what the Alchemy Laboratory and the Tanning Rack do.
- **The Blueprints** mentioned at BlizzCon: the article does not use the word.
- **How long a fire stays lit.**`,
    `Il 21 ottobre 2026 Blizzard ha pubblicato [Gather Around the Campfire in World of Warcraft: Forever](${ARTICLE}) (in italiano "Siediti accanto al falò in World of Warcraft: Forever"), il primo articolo dedicato tutto al Camping, il sistema annunciato alla BlizzCon che trasforma il Cooking Fire in un accampamento condiviso. Fino ad allora c'erano solo i riepiloghi dei panel e le note della beta; ora c'è una tabella ufficiale di cosa porta al fuoco ogni professione. I nomi degli oggetti sono in inglese, come nel gioco e nell'articolo italiano di Blizzard.

## Come funziona un accampamento {#accampamento}

- Il Cooking Fire della professione Cooking diventa un **Basic Campfire**. Una volta piazzato, crea un accampamento dove i giocatori vicini possono riposare.
- Un Basic Campfire regge fino a **tre camp feature**, oggetti speciali creati con le professioni, e ogni giocatore può aggiungerne **una**.
- Chi **si siede o crafta all'accampamento per almeno un minuto** riceve i benefici delle camp feature degli altri.
- I buff sono **varianti dei buff normalmente dati da certe classi, e si escludono con quelli**: una Sharpening Wheel non si somma allo Strength of Earth Totem di uno Sciamano, per esempio.
- Tutte le camp feature richiedono un fuoco vicino e **condividono un tempo di recupero di un'ora**.
- Blizzard aggiunge un avvertimento: su un set di regole PvP l'accampamento è un rischio quando lo trovano giocatori nemici (vedi la [guida ai set di regole](/it/guides/wow-forever-rulesets)).

## La camp feature di ogni professione {#feature}

La tabella è "un campione" secondo Blizzard, quindi potrebbero esserci altri oggetti. I numeri dipendono dal livello.

| Professione | Oggetto | Skill | Effetto (esclusivo con) |
|---|---|---|---|
| Cooking | Basic Campfire | 1 | Cucina, più fino a tre camp feature |
| First Aid | First Aid Kit | 20 | Da +3 a +56 Stamina (Power Word: Fortitude) |
| Fishing | Fishing Bowl | 20 | +8% a tutte le statistiche (Blessing of Kings) |
| Alchemy | Mana Well | 20 | Da 10 a 29 Mana ogni 5 secondi (Blessing of Wisdom) |
| Blacksmithing | Sharpening Wheel | 20 | Da +6 a +34 Forza (Strength of Earth Totem) |
| Enchanting | Enchanted Lute | 20 | Da +28 a +260 armatura, da +0 a +13 a tutte le statistiche, da +0 a +22 a tutte le resistenze (Mark of the Wild) |
| Engineering | Reagent Bot | 20 | Vende reagenti a chi è vicino |
| Herbalism | Incense Candle | 20 | Da +2 a +25 Intelletto (Arcane Intellect) |
| Leatherworking | Camp Tent | 20 | Esperienza riposata aumentata del 5% di un livello, se ne hai meno |
| Skinning | Camp Chair | 20 | +2% di probabilità di critico con incantesimi e attacchi (Moonkin Aura) |
| Tailoring | Faction Banner | 20 | Da +14 a +32 Spirito, solo per la tua fazione (Divine Spirit) |

## Da dove vengono gli oggetti {#oggetti}

Una missione semplice all'inizio del gioco presenta il Camping. Quando una professione arriva a **skill 20**, i suoi primi oggetti da accampamento si ottengono dalle missioni delle zone iniziali o da un trainer della professione. Gli oggetti che richiedono **skill 140 o più** droppano nei dungeon (spedizioni) e nei raid (incursioni).

L'articolo riassume anche le regole delle professioni: si possono imparare tutte e tre le secondarie (Cooking, Fishing, First Aid) e due primarie, fra quelle di raccolta (Skinning, Mining, Herbalism) e quelle di creazione (Alchemy, Blacksmithing, Enchanting, Engineering, Leatherworking, Tailoring). I gradi vanno da Apprentice a Journeyman, Expert e Artisan; per disimparare una professione si apre la scheda Professions (K) e si clicca la X accanto.

## Fuochi più grandi e altri oggetti da campo {#miglioramenti}

I cuochi possono imparare col tempo fuochi migliorati da **cinque o anche dieci** posti, e le altre professioni sbloccano "comodità utili" come l'Alchemy Laboratory e il Tanning Rack. Blizzard non dà i livelli di skill di questi oggetti.

La nostra [guida a Camping e professioni](/it/guides/wow-forever-camping-professions) è aggiornata con tutto questo.

## Cosa non sappiamo ancora {#non-sappiamo}

- **La lista completa**: la tabella è un campione; Blizzard non dice quante camp feature esistano in tutto.
- **I fuochi migliorati**: a quale skill si sbloccano i fuochi da 5 e da 10 posti, e cosa fanno l'Alchemy Laboratory e il Tanning Rack.
- **I Blueprint** citati alla BlizzCon: l'articolo non usa la parola.
- **Quanto resta acceso un fuoco.**`,
    `El 21 de octubre de 2026 Blizzard publicó [Gather Around the Campfire in World of Warcraft: Forever](${ARTICLE}), el primer artículo dedicado por completo a la acampada (Camping), el sistema anunciado en la BlizzCon que convierte la lumbre de cocina en un campamento compartido. Hasta entonces solo había resúmenes de las mesas redondas y notas de la beta; ahora hay una tabla oficial de lo que cada profesión aporta al fuego. Los nombres de los objetos se quedan en inglés: Blizzard no ha publicado todavía el artículo en español.

## Cómo funciona un campamento {#campamento}

- La lumbre de cocina de la profesión de cocina se convierte en una **hoguera básica** (Basic Campfire). Una vez colocada, crea un campamento donde los jugadores cercanos pueden descansar.
- Una hoguera básica admite hasta **tres objetos de campamento** (camp features), objetos especiales fabricados con profesiones, y cada jugador puede añadir **uno**.
- Quien **se sienta o fabrica en el campamento durante al menos un minuto** recibe los beneficios de los objetos de los demás.
- Los beneficios son **variantes de los que dan normalmente algunas clases, y son excluyentes con ellos**: una Sharpening Wheel no se suma al Strength of Earth Totem de un chamán, por ejemplo.
- Todos los objetos de campamento necesitan una hoguera cerca y **comparten un tiempo de reutilización de una hora**.
- Blizzard añade un aviso: en un conjunto de reglas JcJ, el campamento es un riesgo cuando lo encuentran jugadores enemigos (ver la [guía de conjuntos de reglas](/es/guides/wow-forever-rulesets)).

## El objeto de campamento de cada profesión {#objetos}

La tabla es "una muestra" según Blizzard, así que puede haber más objetos. Los números dependen del nivel.

| Profesión | Objeto | Habilidad | Efecto (excluyente con) |
|---|---|---|---|
| Cocina | Basic Campfire | 1 | Cocinar, más hasta tres objetos de campamento |
| Primeros auxilios | First Aid Kit | 20 | De +3 a +56 de aguante (Power Word: Fortitude) |
| Pesca | Fishing Bowl | 20 | +8% a todas las características (Blessing of Kings) |
| Alquimia | Mana Well | 20 | De 10 a 29 de maná cada 5 segundos (Blessing of Wisdom) |
| Herrería | Sharpening Wheel | 20 | De +6 a +34 de fuerza (Strength of Earth Totem) |
| Encantamiento | Enchanted Lute | 20 | De +28 a +260 de armadura, de +0 a +13 a todas las características, de +0 a +22 a todas las resistencias (Mark of the Wild) |
| Ingeniería | Reagent Bot | 20 | Vende reactivos a quien esté cerca |
| Herboristería | Incense Candle | 20 | De +2 a +25 de intelecto (Arcane Intellect) |
| Peletería | Camp Tent | 20 | Experiencia de descanso aumentada un 5% de un nivel, si tienes menos |
| Desuello | Camp Chair | 20 | +2% de probabilidad de golpe crítico con hechizos y ataques (Moonkin Aura) |
| Sastrería | Faction Banner | 20 | De +14 a +32 de espíritu, solo para tu facción (Divine Spirit) |

## De dónde salen los objetos {#origen}

Una misión sencilla al principio del juego presenta la acampada. Cuando una profesión llega a **habilidad 20**, sus primeros objetos de campamento se consiguen en misiones de las zonas iniciales o con un maestro de la profesión. Los objetos que requieren **habilidad 140 o más** los sueltan las mazmorras y las bandas.

El artículo resume también las reglas de las profesiones: se pueden aprender las tres secundarias (cocina, pesca, primeros auxilios) y dos principales, entre las de recolección (desuello, minería, herboristería) y las de fabricación (alquimia, herrería, encantamiento, ingeniería, peletería, sastrería). Los rangos van de aprendiz a oficial, experto y artesano; para olvidar una, se abre la pestaña de profesiones (K) y se pulsa la X de al lado.

## Hogueras más grandes y otros objetos de campamento {#mejoras}

Los cocineros pueden aprender con el tiempo hogueras mejoradas de **cinco o incluso diez** huecos, y las demás profesiones desbloquean "comodidades útiles" como el Alchemy Laboratory y el Tanning Rack. Blizzard no da los niveles de habilidad de estos objetos.

Nuestra [guía de acampada y profesiones](/es/guides/wow-forever-camping-professions) está actualizada con todo esto.

## Lo que aún no sabemos {#no-sabemos}

- **La lista completa**: la tabla es una muestra; Blizzard no dice cuántos objetos de campamento existen en total.
- **Las hogueras mejoradas**: con qué habilidad se desbloquean las de 5 y 10 huecos, y qué hacen el Alchemy Laboratory y el Tanning Rack.
- **Los planos** (Blueprints) mencionados en la BlizzCon: el artículo no usa la palabra.
- **Cuánto tiempo sigue encendida una hoguera.**`,
  ),
  faq: {
    en: [
      {
        q: "How do I get the campfire buffs in WoW Forever?",
        a: "Sit or craft at a campsite for at least one minute: you then gain the benefits of the camp features other players have placed. They are exclusive with the class buffs they imitate and share a one-hour cooldown.",
      },
      {
        q: "How many camp features can a Basic Campfire hold?",
        a: "Three, one per player. Cooks can later learn upgraded campfires with five or ten slots, according to Blizzard's article of 21 October 2026.",
      },
    ],
    it: [
      {
        q: "Come si prendono i buff del fuoco da campo in WoW Forever?",
        a: "Ti siedi o crafti all'accampamento per almeno un minuto: ricevi allora i benefici delle camp feature piazzate dagli altri giocatori. Si escludono con i buff di classe che imitano e condividono un tempo di recupero di un'ora.",
      },
      {
        q: "Quante camp feature regge un Basic Campfire?",
        a: "Tre, una per giocatore. I cuochi possono imparare più avanti fuochi migliorati da cinque o dieci posti, secondo l'articolo di Blizzard del 21 ottobre 2026.",
      },
    ],
    es: [
      {
        q: "¿Cómo se consiguen los beneficios de la hoguera en WoW Forever?",
        a: "Te sientas o fabricas en el campamento durante al menos un minuto: entonces recibes los beneficios de los objetos de campamento que han colocado los demás. Son excluyentes con los beneficios de clase que imitan y comparten una reutilización de una hora.",
      },
      {
        q: "¿Cuántos objetos de campamento admite una hoguera básica?",
        a: "Tres, uno por jugador. Los cocineros pueden aprender más adelante hogueras mejoradas de cinco o diez huecos, según el artículo de Blizzard del 21 de octubre de 2026.",
      },
    ],
  },
};

export default item;

import type { GuideEntry } from "../guides";

export const guide: GuideEntry = {
  slug: "wow-forever-camping-professions",
  category: "systems",
  published: "2026-10-10",
  updated: "2026-10-23",
  cover: { word: "Camping", tone: "sky" },
  sources: [
    {
      label: "Gather Around the Campfire in World of Warcraft: Forever (Blizzard News, October 21, 2026)",
      url: "https://news.blizzard.com/en-us/article/24301516/gather-around-the-campfire-in-world-of-warcraft-forever",
    },
    {
      label: "World of Warcraft: Forever What's Next Panel Recap (Blizzard News, September 12, 2026)",
      url: "https://news.blizzard.com/en-us/article/24303862/world-of-warcraft-forever-whats-next-panel-recap",
    },
    {
      label: "World of Warcraft: Forever Deep Dive Panel Recap (Blizzard News, September 13, 2026)",
      url: "https://news.blizzard.com/en-us/article/24303313/world-of-warcraft-forever-deep-dive-panel-recap",
    },
    {
      label: "Get to Know the World of Warcraft: Forever Legacy System (Blizzard News, September 23, 2026)",
      url: "https://news.blizzard.com/en-us/article/24307383/get-to-know-the-world-of-warcraft-forever-legacy-system",
    },
    {
      label: "World of Warcraft: Forever- The Future of Skyborne Visual Updates (Blizzard News, October 7, 2026)",
      url: "https://news.blizzard.com/en-us/article/24302546/world-of-warcraft-forever-the-future-of-skyborne-visual-updates",
    },
    {
      label: "The World of Warcraft: Forever Beta Now Live (Blizzard News, September 17, 2026)",
      url: "https://news.blizzard.com/en-us/article/24304160/the-world-of-warcraft-forever-beta-now-live",
    },
    {
      label: "WoW Forever Beta Development Notes – Updated October 8 (Blizzard forums, September 24, 2026)",
      url: "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-8/2360696",
    },
    {
      label: "World of Warcraft: Forever (official page, Blizzard)",
      url: "https://worldofwarcraft.blizzard.com/en-us/forever",
    },
  ],
  text: {
    en: {
      title: "WoW Forever Camping and professions: campfires, recipes and quality-of-life changes",
      metaTitle: "WoW Forever Camping: campfires and professions",
      excerpt:
        "How Camping works in WoW Forever: the Basic Campfire, campsites, profession items and one-hour buffs, plus 600+ new recipes and other quality-of-life changes.",
      imageAlt: "ForeverMeta typographic cover with the word “Camping” in light blue on a night-blue background",
      body: `Camping is the World of Warcraft: Forever system that turns the old Cooking Fire into a Basic Campfire you build in the open world: other players can stop by, add items made with their professions and share one-hour buffs. Blizzard presented it at BlizzCon 2026, in the panels of September 12 and 13, together with more than 600 new profession recipes, and on October 21, 2026 published the first full article on the system, with the official table of the profession items: this guide follows that article.

## What Camping is {#what-is-camping}

In the What's Next panel recap, Blizzard describes Camping as a way to craft campfires in the outdoor world, so that other adventurers can stop by, contribute through their professions and share the campsite buffs. The Deep Dive recap, in its “Camping and Professions” section, adds that the simple Cooking Fire is reimagined as a **Basic Campfire**, which creates a **campsite**.

A note on the name: the official press fact sheet speaks of the “Campfire feature”, while the official Forever page calls it “the new Camping system” and the news articles say Camping too. We use Camping, the public name.

## How a campsite works {#how-campsites-work}

The rules, from Blizzard's article of October 21, 2026:

| What | How it works |
|---|---|
| Starting point | the Basic Campfire, which replaces the Cooking Fire (Cooking skill 1) |
| Camp features per fire | up to 3, one per player |
| Improved campfires made by cooks | 5 or 10 camp features |
| How you get the buffs | sit or craft at the campsite for at least 1 minute |
| Duration and cooldown | one hour; all camp features share a 1-hour cooldown |
| Stacking | each buff is a variant of a class buff and is exclusive with it |
| First items | at profession skill 20, from starting-zone quests or the profession trainer |
| Items at skill 140 and above | drop in dungeons and raids |

The idea is social: the fire stays in the open world, and the players who pass by can add something with their own professions and share the buffs of the campsite. Blizzard adds that on a PvP ruleset a camp is a risk when enemy players come upon it.

## The camp feature of each profession {#camp-features}

Blizzard calls this table "a sample", so there may be more items. Numbers depend on your level; the class buff in brackets is the one the item is exclusive with.

| Profession | Item | Skill | Effect |
|---|---|---|---|
| Cooking | Basic Campfire | 1 | cooking, plus up to 3 camp features |
| First Aid | First Aid Kit | 20 | +3 to +56 Stamina (Power Word: Fortitude) |
| Fishing | Fishing Bowl | 20 | +8% to all stats (Blessing of Kings) |
| Alchemy | Mana Well | 20 | 10 to 29 Mana every 5 seconds (Blessing of Wisdom) |
| Blacksmithing | Sharpening Wheel | 20 | +6 to +34 Strength (Strength of Earth Totem) |
| Enchanting | Enchanted Lute | 20 | +28 to +260 Armor, +0 to +13 all stats, +0 to +22 all resistances (Mark of the Wild) |
| Engineering | Reagent Bot | 20 | sells reagents to everyone nearby |
| Herbalism | Incense Candle | 20 | +2 to +25 Intellect (Arcane Intellect) |
| Leatherworking | Camp Tent | 20 | rested experience up by 5% of a level, if you have less than that |
| Skinning | Camp Chair | 20 | +2% critical strike chance with spells and attacks (Moonkin Aura) |
| Tailoring | Faction Banner | 20 | +14 to +32 Spirit, for your faction only (Divine Spirit) |

Cooks can eventually learn campfires with 5 or 10 slots, and other professions unlock "helpful conveniences" such as Alchemy Laboratories and Tanning Racks, with no skill levels given. A simple quest early in the game introduces the system. The article is summed up in our [news on the Camping article](/en/news/camping-system-official-camp-features).

## What changed in the beta {#beta-changes}

The beta development notes posted by Blizzard on the official forums (a thread started on September 24 and updated through October 8) show the system being tuned:

- the build of September 24 mentions the “Campfire buff”;
- since the build of October 1, campfires no longer deal damage to players below level 5.

The beta ended on October 23, 2026, after a two-day extension. The rules above are those of the article of October 21; if Blizzard changes them, we will update this guide.

## Professions {#professions}

According to the Deep Dive recap, professions get:

- over **600 new recipes** across professions and level ranges;
- **food** that gives a small experience bonus;
- **Blueprints** from bosses.

The Legacy System article of September 23 also introduces two new trade factions: the **Azeroth Commerce Authority** and **Durotar Supply and Logistics**.

Professions are tied into the [Legacy System](/en/guides/wow-forever-legacy-system) as well: 18 of the 65 Legacy Challenges are Tradeskills challenges, Professions is one of the three perk trees, and reaching 150 in a primary non-gathering profession is one of the ways to earn your first Legacy Point.

## Other quality-of-life changes {#quality-of-life}

From the BlizzCon panel recaps (What's Next and Deep Dive):

- **Transmog** is optional and can be turned off.
- A **Classic Mode**.
- **HD and SD models**, with the classic animations restored for the HD models. The SD models of the Skyborne, and their SD druid forms, are in development and due in early 2027, according to the article of October 7.
- Official **gamepad** support.
- A **mount** is given to you when you learn riding.

In the beta, the development notes also mention a **Cooldown Manager**: it is off by default, it can be turned on in the options, and since the October 8 build it covers all classes.

New terms are explained in the [glossary](/en/glossary), and the full list of differences is on the [changes page](/en/changes).

## What we don't know yet {#what-we-dont-know}

- **The full list of camp features**: Blizzard's table is a sample.
- **Improved campfires**: at which skill cooks learn the 5- and 10-slot versions, what the Alchemy Laboratory and the Tanning Rack do, and how long a fire stays lit.
- **Blueprints**: what they unlock; the article of October 21 does not use the word.
- **Trade factions**: how the Azeroth Commerce Authority and Durotar Supply and Logistics work, from reputation to rewards.
- **Classic Mode**: Blizzard lists it, but we have not found a detailed official description to cite yet.`,
      faq: [
        {
          q: "Is Camping the same as the Campfire feature?",
          a: "Yes. The press fact sheet calls it the Campfire feature, while the official site and the news articles call the system Camping. The fire you build is the Basic Campfire.",
        },
        {
          q: "How long do campfire buffs last in WoW Forever?",
          a: "One hour, and all camp features share a one-hour cooldown, according to Blizzard's article of October 21, 2026. You get the buffs by sitting or crafting at the campsite for at least one minute.",
        },
        {
          q: "How many profession items can a campfire hold?",
          a: "Up to three on a Basic Campfire, one per player. Improved campfires made by cooks raise the limit to five or ten.",
        },
        {
          q: "Can I turn off transmog in WoW Forever?",
          a: "Yes. Blizzard says transmog is optional and can be turned off.",
        },
      ],
    },
    it: {
      title: "Camping e professioni in WoW Forever: Basic Campfire, ricette e altre comodità",
      metaTitle: "WoW Forever: Camping e professioni",
      excerpt:
        "Come funziona il Camping di WoW Forever: Basic Campfire, accampamenti, oggetti delle professioni e buff di un'ora, più 600 ricette nuove e altre comodità.",
      imageAlt: "Copertina tipografica di ForeverMeta con la scritta «Camping» in azzurro su fondo blu notte",
      body: `Il Camping è il sistema di World of Warcraft: Forever che trasforma il vecchio Cooking Fire in un Basic Campfire da costruire nel mondo aperto: gli altri giocatori possono fermarsi, aggiungere oggetti fatti con le loro professioni e condividere buff di un'ora. Blizzard lo ha presentato alla BlizzCon 2026, nei pannelli del 12 e del 13 settembre, insieme a più di 600 ricette nuove per le professioni, e il 21 ottobre 2026 ha pubblicato il primo articolo completo sul sistema, con la tabella ufficiale degli oggetti delle professioni: questa guida segue quell'articolo.

## Che cos'è il Camping {#che-cosa-e-il-camping}

Nel resoconto del pannello What's Next, Blizzard descrive il Camping come la possibilità di costruire fuochi da campo nel mondo aperto, dove altri avventurieri possono fermarsi, contribuire con le loro professioni e condividere i buff dell'accampamento. Il resoconto del pannello Deep Dive, nella sezione «Camping and Professions», aggiunge che il semplice Cooking Fire diventa un **Basic Campfire**, che crea un **accampamento** (campsite).

Il nome resta in inglese: la pagina italiana di Forever parla del «nuovo sistema Camping», e per «Basic Campfire» non c'è un nome italiano ufficiale (i due resoconti dei pannelli non esistono in italiano). La scheda per la stampa lo chiama «Campfire feature», ma le pagine pubbliche dicono Camping: usiamo quello.

## Come funziona un accampamento {#come-funziona-un-accampamento}

Le regole, dall'articolo di Blizzard del 21 ottobre 2026:

| Cosa | Come funziona |
|---|---|
| Punto di partenza | il Basic Campfire, che prende il posto del Cooking Fire (Cooking a 1) |
| Camp feature per fuoco | fino a 3, una per giocatore |
| Campfire migliorati fatti dai cuochi | 5 o 10 camp feature |
| Come si prendono i buff | ci si siede o si crafta all'accampamento per almeno 1 minuto |
| Durata e tempo di recupero | un'ora; tutte le camp feature condividono un tempo di recupero di 1 ora |
| Cumulo | ogni buff è una variante di un buff di classe e si esclude con quello |
| Primi oggetti | con la professione a 20, dalle missioni delle zone iniziali o dal trainer |
| Oggetti da skill 140 in su | droppano nei dungeon (spedizioni) e nei raid (incursioni) |

L'idea è sociale: il fuoco resta nel mondo aperto, e chi passa può aggiungere qualcosa con le proprie professioni e condividere i buff dell'accampamento. Blizzard aggiunge che su un set di regole PvP l'accampamento è un rischio quando lo trovano giocatori nemici.

## La camp feature di ogni professione {#camp-feature}

Blizzard chiama questa tabella «un campione», quindi potrebbero esserci altri oggetti. I numeri dipendono dal livello; il buff di classe fra parentesi è quello con cui l'oggetto si esclude. I nomi degli oggetti restano in inglese anche nell'articolo italiano di Blizzard.

| Professione | Oggetto | Skill | Effetto |
|---|---|---|---|
| Cooking | Basic Campfire | 1 | cucina, più fino a 3 camp feature |
| First Aid | First Aid Kit | 20 | da +3 a +56 Stamina (Power Word: Fortitude) |
| Fishing | Fishing Bowl | 20 | +8% a tutte le statistiche (Blessing of Kings) |
| Alchemy | Mana Well | 20 | da 10 a 29 Mana ogni 5 secondi (Blessing of Wisdom) |
| Blacksmithing | Sharpening Wheel | 20 | da +6 a +34 Forza (Strength of Earth Totem) |
| Enchanting | Enchanted Lute | 20 | da +28 a +260 armatura, da +0 a +13 a tutte le statistiche, da +0 a +22 a tutte le resistenze (Mark of the Wild) |
| Engineering | Reagent Bot | 20 | vende reagenti a chi è vicino |
| Herbalism | Incense Candle | 20 | da +2 a +25 Intelletto (Arcane Intellect) |
| Leatherworking | Camp Tent | 20 | esperienza riposata aumentata del 5% di un livello, se ne hai meno |
| Skinning | Camp Chair | 20 | +2% di probabilità di critico con incantesimi e attacchi (Moonkin Aura) |
| Tailoring | Faction Banner | 20 | da +14 a +32 Spirito, solo per la tua fazione (Divine Spirit) |

I cuochi possono imparare col tempo fuochi da 5 o 10 posti, e le altre professioni sbloccano «comodità utili» come l'Alchemy Laboratory e il Tanning Rack, senza livelli di skill indicati. Una missione semplice all'inizio del gioco presenta il sistema. L'articolo è riassunto nella nostra [news sull'articolo del Camping](/it/news/camping-system-official-camp-features).

## Cosa è cambiato in beta {#cosa-e-cambiato-in-beta}

Le note di sviluppo della beta pubblicate da Blizzard sul forum ufficiale (una discussione aperta il 24 settembre e aggiornata fino all'8 ottobre) mostrano il sistema in rodaggio:

- la build del 24 settembre parla del «Campfire buff»;
- dalla build del 1° ottobre i fuochi non fanno più danni ai giocatori sotto il livello 5.

La beta è finita il 23 ottobre 2026, dopo una proroga di due giorni. Le regole qui sopra sono quelle dell'articolo del 21 ottobre; se Blizzard le cambia, aggiorniamo la guida.

## Le professioni {#professioni}

Secondo il resoconto del pannello Deep Dive, le professioni ricevono:

- più di **600 ricette nuove**, distribuite fra le professioni e le fasce di livello;
- **cibo** che dà un piccolo bonus di esperienza;
- **Blueprint** dai boss.

L'articolo sul Legacy System del 23 settembre presenta anche due nuove fazioni del commercio: **Azeroth Commerce Authority** e **Durotar Supply and Logistics**.

Le professioni pesano anche nel [Legacy System](/it/guides/wow-forever-legacy-system): 18 delle 65 Legacy Challenges sono della categoria Tradeskills, Professions è uno dei tre alberi dei Perks, e arrivare a 150 in una professione primaria non di raccolta è uno dei modi per ottenere il primo Legacy Point.

## Altre comodità {#altre-comodita}

Dai resoconti dei pannelli della BlizzCon (What's Next e Deep Dive):

- La **trasmogrificazione** (transmog) è facoltativa e si può disattivare.
- Un **Classic Mode**.
- **Modelli HD e SD**, con le animazioni classiche ripristinate per i modelli HD. I modelli SD degli Skyborne, con le loro forme druidiche SD, sono in sviluppo e arriveranno all'inizio del 2027, secondo l'articolo del 7 ottobre.
- Supporto ufficiale al **gamepad**.
- Una **cavalcatura** in regalo quando impari la monta.

In beta le note di sviluppo citano anche un **Cooldown Manager**: è spento di base, si accende dalle opzioni e dalla build dell'8 ottobre copre tutte le classi.

I termini nuovi sono spiegati nel [glossario](/it/glossary) e l'elenco completo delle differenze è nella [pagina delle novità](/it/changes).

## Cosa non sappiamo ancora {#cosa-non-sappiamo-ancora}

- **La lista completa delle camp feature**: la tabella di Blizzard è un campione.
- **I Campfire migliorati**: a quale skill i cuochi imparano le versioni da 5 e da 10 posti, cosa fanno l'Alchemy Laboratory e il Tanning Rack, e quanto resta acceso un fuoco.
- **I Blueprint**: che cosa sbloccano; l'articolo del 21 ottobre non usa la parola.
- **Le fazioni del commercio**: come funzionano Azeroth Commerce Authority e Durotar Supply and Logistics, dalla reputazione alle ricompense.
- **Il Classic Mode**: Blizzard lo cita, ma non abbiamo ancora trovato una descrizione ufficiale dettagliata da riportare.`,
      faq: [
        {
          q: "Camping e «Campfire feature» sono la stessa cosa?",
          a: "Sì. La scheda per la stampa parla di Campfire feature, mentre il sito ufficiale e gli articoli chiamano il sistema Camping. Il fuoco che costruisci è il Basic Campfire.",
        },
        {
          q: "Quanto durano i buff dei fuochi in WoW Forever?",
          a: "Un'ora, e tutte le camp feature condividono un tempo di recupero di un'ora, secondo l'articolo di Blizzard del 21 ottobre 2026. I buff si prendono sedendosi o craftando all'accampamento per almeno un minuto.",
        },
        {
          q: "Quanti oggetti da professione può avere un fuoco?",
          a: "Fino a tre su un Basic Campfire, una per giocatore. I Campfire migliorati fatti dai cuochi portano il limite a cinque o dieci.",
        },
        {
          q: "Si può disattivare la trasmogrificazione in WoW Forever?",
          a: "Sì. Secondo Blizzard il transmog è facoltativo e si può disattivare.",
        },
      ],
    },
    es: {
      title: "Acampada y profesiones en WoW Forever: hogueras, recetas y otras mejoras de comodidad",
      metaTitle: "WoW Forever: acampada, hogueras y profesiones",
      excerpt:
        "Cómo funciona la acampada en WoW Forever: hoguera básica, campamentos, objetos de profesión, beneficios de una hora, más de 600 recetas y otras mejoras.",
      imageAlt: "Portada tipográfica de ForeverMeta con la palabra «Camping» en azul celeste sobre fondo azul noche",
      body: `La acampada (Camping en inglés; sistema de campamento en Latinoamérica) es el sistema de World of Warcraft: Forever que convierte la antigua lumbre de cocina en una hoguera básica que construyes en el mundo abierto: otros jugadores pueden detenerse, añadir objetos hechos con sus profesiones y compartir beneficios de una hora. Blizzard lo presentó en la BlizzCon 2026, en las mesas redondas del 12 y el 13 de septiembre, junto con más de 600 recetas nuevas de profesiones, y el 21 de octubre de 2026 publicó el primer artículo completo sobre el sistema, con la tabla oficial de los objetos de profesión: esta guía sigue ese artículo.

## Qué es la acampada {#que-es-la-acampada}

En el resumen de la mesa redonda What's Next, Blizzard describe la acampada como la posibilidad de fabricar hogueras en el mundo exterior, para que otros aventureros se detengan, contribuyan con sus profesiones y compartan los beneficios del campamento. El resumen de la mesa redonda Deep Dive («Repaso a fondo»), en su sección sobre acampada y profesiones, añade que la sencilla lumbre de cocina se reinventa como **hoguera básica**, que crea un **campamento**.

Sobre el nombre: la ficha oficial para la prensa habla de «Campfire feature», mientras que la página oficial de Forever en inglés dice «Camping», y la española habla de «nuevas mecánicas de acampada». En Latinoamérica la hoguera también aparece como «fogata». Aquí usamos acampada, el nombre de las páginas públicas de es-ES.

## Cómo funciona un campamento {#como-funciona-un-campamento}

Las reglas, según el artículo de Blizzard del 21 de octubre de 2026:

| Qué | Cómo funciona |
|---|---|
| Punto de partida | la hoguera básica (Basic Campfire), que sustituye a la lumbre de cocina (cocina a 1) |
| Objetos de campamento por hoguera | hasta 3, uno por jugador |
| Hogueras mejoradas que hacen los cocineros | 5 o 10 objetos de campamento |
| Cómo se consiguen los beneficios | sentándose o fabricando en el campamento durante al menos 1 minuto |
| Duración y reutilización | una hora; todos los objetos de campamento comparten una reutilización de 1 hora |
| Acumulación | cada beneficio es una variante de uno de clase y es excluyente con él |
| Primeros objetos | con la profesión a 20, en misiones de las zonas iniciales o con el maestro |
| Objetos de habilidad 140 o más | los sueltan mazmorras y bandas |

La idea es social: la hoguera se queda en el mundo abierto, y quien pasa puede añadir algo con sus propias profesiones y compartir los beneficios del campamento. Blizzard añade que en un conjunto de reglas JcJ el campamento es un riesgo cuando lo encuentran jugadores enemigos.

## El objeto de campamento de cada profesión {#objetos-de-campamento}

Blizzard llama a esta tabla «una muestra», así que puede haber más objetos. Los números dependen del nivel; el beneficio de clase entre paréntesis es con el que el objeto es excluyente. Los nombres de los objetos se quedan en inglés: Blizzard aún no ha publicado el artículo en español.

| Profesión | Objeto | Habilidad | Efecto |
|---|---|---|---|
| Cocina | Basic Campfire | 1 | cocinar, más hasta 3 objetos de campamento |
| Primeros auxilios | First Aid Kit | 20 | de +3 a +56 de aguante (Power Word: Fortitude) |
| Pesca | Fishing Bowl | 20 | +8% a todas las características (Blessing of Kings) |
| Alquimia | Mana Well | 20 | de 10 a 29 de maná cada 5 segundos (Blessing of Wisdom) |
| Herrería | Sharpening Wheel | 20 | de +6 a +34 de fuerza (Strength of Earth Totem) |
| Encantamiento | Enchanted Lute | 20 | de +28 a +260 de armadura, de +0 a +13 a todas las características, de +0 a +22 a todas las resistencias (Mark of the Wild) |
| Ingeniería | Reagent Bot | 20 | vende reactivos a quien esté cerca |
| Herboristería | Incense Candle | 20 | de +2 a +25 de intelecto (Arcane Intellect) |
| Peletería | Camp Tent | 20 | experiencia de descanso aumentada un 5% de un nivel, si tienes menos |
| Desuello | Camp Chair | 20 | +2% de probabilidad de golpe crítico con hechizos y ataques (Moonkin Aura) |
| Sastrería | Faction Banner | 20 | de +14 a +32 de espíritu, solo para tu facción (Divine Spirit) |

Los cocineros pueden aprender con el tiempo hogueras de 5 o 10 huecos, y las demás profesiones desbloquean «comodidades útiles» como el Alchemy Laboratory y el Tanning Rack, sin niveles de habilidad indicados. Una misión sencilla al principio del juego presenta el sistema. El artículo está resumido en nuestra [noticia sobre el artículo de la acampada](/es/news/camping-system-official-camp-features).

## Qué ha cambiado en la beta {#que-ha-cambiado-en-la-beta}

Las notas de desarrollo de la beta que Blizzard publica en el foro oficial (un hilo abierto el 24 de septiembre y actualizado hasta el 8 de octubre) muestran el sistema en pleno ajuste:

- la compilación del 24 de septiembre menciona el «Campfire buff»;
- desde la compilación del 1 de octubre, las hogueras ya no hacen daño a los jugadores por debajo del nivel 5.

La beta terminó el 23 de octubre de 2026, tras una prórroga de dos días. Las reglas de arriba son las del artículo del 21 de octubre; si Blizzard las cambia, actualizaremos esta guía.

## Las profesiones {#profesiones}

Según el resumen de la mesa redonda Deep Dive, las profesiones reciben:

- más de **600 recetas nuevas** repartidas entre profesiones y rangos de nivel;
- **comida** que da una pequeña bonificación de experiencia;
- **planos** que sueltan los jefes.

El artículo sobre el sistema de legado del 23 de septiembre presenta además dos nuevas facciones comerciales: la **Azeroth Commerce Authority** y **Durotar Supply and Logistics** (con su nombre en inglés).

Las profesiones también cuentan en el [sistema de legado](/es/guides/wow-forever-legacy-system): 18 de los 65 desafíos de legado son de la categoría Tradeskills (profesiones), Profesiones es uno de los tres árboles de ventajas, y llegar a 150 en una profesión principal que no sea de recolección es una de las formas de conseguir el primer punto de legado.

## Otras mejoras de comodidad {#otras-mejoras}

Según los resúmenes de las mesas redondas de la BlizzCon (What's Next y Deep Dive):

- La **transfiguración** (transmog) es opcional y se puede desactivar.
- Un **Classic Mode** (modo clásico).
- **Modelos HD y SD**, con las animaciones clásicas recuperadas para los modelos HD. Los modelos SD de los célicos (cielonato en Latinoamérica), con sus formas de druida SD, están en desarrollo y llegarán a principios de 2027, según el artículo del 7 de octubre.
- Compatibilidad oficial con **mando**.
- Una **montura** de regalo cuando aprendes a montar.

En la beta, las notas de desarrollo mencionan también un **Cooldown Manager**: viene desactivado, se activa desde las opciones y desde la compilación del 8 de octubre cubre todas las clases.

Los términos nuevos están en el [glosario](/es/glossary) y la lista completa de diferencias en la [página de cambios](/es/changes).

## Lo que aún no sabemos {#lo-que-aun-no-sabemos}

- **La lista completa de objetos de campamento**: la tabla de Blizzard es una muestra.
- **Las hogueras mejoradas**: con qué habilidad aprenden los cocineros las versiones de 5 y 10 huecos, qué hacen el Alchemy Laboratory y el Tanning Rack, y cuánto tiempo sigue encendida una hoguera.
- **Los planos**: qué desbloquean; el artículo del 21 de octubre no usa la palabra.
- **Las facciones comerciales**: cómo funcionan la Azeroth Commerce Authority y Durotar Supply and Logistics, de la reputación a las recompensas.
- **El Classic Mode**: Blizzard lo menciona, pero aún no hemos encontrado una descripción oficial detallada que citar.`,
      faq: [
        {
          q: "¿La acampada es lo mismo que la «Campfire feature»?",
          a: "Sí. La ficha para la prensa habla de Campfire feature, mientras que la web oficial y los artículos llaman al sistema Camping (acampada en es-ES). La hoguera que construyes es la hoguera básica.",
        },
        {
          q: "¿Cuánto duran los beneficios de las hogueras en WoW Forever?",
          a: "Una hora, y todos los objetos de campamento comparten una reutilización de una hora, según el artículo de Blizzard del 21 de octubre de 2026. Los beneficios se consiguen sentándose o fabricando en el campamento durante al menos un minuto.",
        },
        {
          q: "¿Cuántos objetos de profesión admite una hoguera?",
          a: "Hasta tres en una hoguera básica, uno por jugador. Las hogueras mejoradas que hacen los cocineros suben el límite a cinco o diez.",
        },
        {
          q: "¿Se puede desactivar la transfiguración en WoW Forever?",
          a: "Sí. Según Blizzard, el transmog es opcional y se puede desactivar.",
        },
      ],
    },
  },
};

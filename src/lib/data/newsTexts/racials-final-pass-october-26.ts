import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Ultima revisione delle razziali prima del lancio: post 7 delle Development Notes di Kaivax (forum ufficiale US,
 * 26/10/2026 20:35 UTC), completato dal post 8 (27/10/2026 15:37 UTC) con Blood Fury, Berserking e Touch of the Grave,
 * «additions that were intended to be listed». La beta è chiusa dal 23/10: nessuna build le contiene ancora.
 */
const POST = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696/7";
const POST_27 = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-26/2360696/8";

const item: NewsItem = {
  slug: "racials-final-pass-october-26",
  date: "2026-10-26",
  updated: "2026-10-27",
  source: "blizzard",
  topic: "beta",
  url: POST,
  image: "/covers/racials-final-pass-october-26.png",
  cover: { word: "Artisan's Precision", tone: "gold" },
  imageAlt: n(
    "ForeverMeta typographic cover with the words «Artisan's Precision» in gold on a midnight blue background",
    "Copertina tipografica di ForeverMeta con la scritta «Artisan's Precision» in oro su fondo blu notte",
    "Portada tipográfica de ForeverMeta con las palabras «Artisan's Precision» en dorado sobre fondo azul noche",
  ),
  guides: ["wow-forever-races-classes"],
  title: n(
    "WoW Forever racials, final pass before launch: Command returns, Dwarves get hit, Tauren run faster",
    "Razziali di WoW Forever, ultima revisione prima del lancio: torna Command, i Nani prendono il colpire",
    "Raciales de WoW Forever, última revisión antes del lanzamiento: vuelve Command y los enanos ganan golpe",
  ),
  metaTitle: n("WoW Forever racials: final pass before launch", "WoW Forever: ultima revisione delle razziali", "WoW Forever: última revisión de las raciales"),
  summary: n(
    "On 26 October 2026 Blizzard published its final pass on WoW Forever's racial abilities before the 4 November launch, and completed it the next day. It puts racial identity first: Orcs get Command back, Dwarves swap Earth Fury for 1% hit, Tauren Endurance is health only again and the Skyborne get one-hour buffs. The weapon specializations do not come back.",
    "Il 26 ottobre 2026 Blizzard ha pubblicato l'ultima revisione delle abilità razziali di WoW Forever prima del lancio del 4 novembre, completata il giorno dopo. Mette al primo posto l'identità delle razze: agli Orchi torna Command, i Nani cambiano Earth Fury con l'1% di probabilità di colpire, l'Endurance dei Tauren torna a dare solo salute e gli Skyborne ricevono buff di un'ora. Le specializzazioni d'arma non tornano.",
    "El 26 de octubre de 2026 Blizzard publicó la última revisión de las habilidades raciales de WoW Forever antes del lanzamiento del 4 de noviembre, y la completó al día siguiente. Pone por delante la identidad de las razas: los orcos recuperan Command, los enanos cambian Earth Fury por un 1 % de golpe, la Endurance de los tauren vuelve a dar solo salud y los célicos reciben bonificaciones de una hora. Las especializaciones de arma no vuelven.",
  ),
  description: n(
    "WoW Forever's final racial pass of 26–27 October 2026: Command returns for Orcs, 1% hit for Dwarves, faster Tauren, new Skyborne buffs, no weapon specs.",
    "Ultima revisione delle razziali di WoW Forever del 26–27 ottobre 2026: torna Command per gli Orchi, colpire per i Nani, Tauren più veloci, buff Skyborne.",
    "Última revisión de las raciales de WoW Forever del 26 y 27 de octubre de 2026: vuelve Command para orcos, golpe para enanos y nuevos buffs célicos.",
  ),
  highlights: {
    en: [
      { label: "Why", text: "racial identity first, but no weapon specializations", anchor: "why" },
      { label: "Alliance", text: "Ruthless halved, Human Spirit doubled, Artisan's Precision for Dwarves", anchor: "alliance" },
      { label: "Horde", text: "Command returns, Blood Fury back to 2 minutes, Plainsrunning up to 60%", anchor: "horde" },
      { label: "Skyborne", text: "2% haste, and the Attuned and Charged buffs", anchor: "skyborne" },
      { label: "27 October", text: "three changes added to the post a day later", anchor: "update" },
      { label: "Not tested", text: "the beta is over, these values arrive with the launch", anchor: "unknown" },
    ],
    it: [
      { label: "Perché", text: "prima l'identità delle razze, ma niente specializzazioni d'arma", anchor: "perche" },
      { label: "Alleanza", text: "Ruthless dimezzata, Human Spirit raddoppiata, Artisan's Precision per i Nani", anchor: "alleanza" },
      { label: "Orda", text: "torna Command, Blood Fury di nuovo a 2 minuti, Plainsrunning fino al 60%", anchor: "orda" },
      { label: "Skyborne", text: "celerità al 2% e i buff Attuned e Charged", anchor: "skyborne" },
      { label: "27 ottobre", text: "tre modifiche aggiunte al post il giorno dopo", anchor: "aggiornamento" },
      { label: "Non provate", text: "la beta è finita, questi valori arrivano con il lancio", anchor: "non-sappiamo" },
    ],
    es: [
      { label: "Por qué", text: "primero la identidad de las razas, pero sin especializaciones de arma", anchor: "por-que" },
      { label: "Alianza", text: "Ruthless a la mitad, Human Spirit al doble, Artisan's Precision para los enanos", anchor: "alianza" },
      { label: "Horda", text: "vuelve Command, Blood Fury otra vez a 2 minutos, Plainsrunning hasta el 60 %", anchor: "horda" },
      { label: "Célicos", text: "celeridad al 2 % y las bonificaciones Attuned y Charged", anchor: "celicos" },
      { label: "27 de octubre", text: "tres cambios añadidos al mensaje un día después", anchor: "actualizacion" },
      { label: "Sin probar", text: "la beta ha terminado, estos valores llegan con el lanzamiento", anchor: "no-sabemos" },
    ],
  },
  body: n(
    `On 26 October 2026, at 20:35 UTC, Kaivax, Community Manager at Blizzard, added a new post to the official [WoW Forever development notes](${POST}), now titled "Updated October 26". It is not about a new build: the beta closed on 23 October. It is the final pass on racial abilities before the launch on 4 November. The next day a second post added three changes that had been left out. The previous round, from 15 October, is in our article on the [15 October notes](/en/news/beta-development-notes-october-15).

## Why Blizzard changed them again {#why}

Blizzard explains that it heard two complaints about the racials introduced in October: some felt "too generic", others were objectively stronger than the rest. In this final pass the team put **racial identity** first. That means some races will be slightly better than others at certain roles, and where role- or class-focused racials had been replaced by generic bonuses, those changes are rolled back.

There is one exception: the **weapon specializations** (the Humans' Sword Specialization, the Orcs' Axe Specialization and the Dwarves' Mace Specialization) do not return. Blizzard writes that they have a strong fantasy component, but in the long run raid and dungeon loot would end up judged by which weapon type a race "requires". The remaining passive bonuses also get a tuning pass.

## Alliance {#alliance}

- **Human**: Ruthless now gives **1%** critical strike chance (was 2%); The Human Spirit gives **10%** more Spirit (was 5%).
- **Dwarf**: Earth Fury (2% increased critical damage and healing) is removed. In its place comes a new passive, **Artisan's Precision**: 1% increased hit chance with spells and attacks.
- **Night Elf** and **Gnome**: no changes.

## Horde {#horde}

- **Orc**: Savage (1% critical strike chance) is removed and **Command** comes back: Hunter and Warlock pets deal 5% more damage. **Blood Fury** has a 2-minute cooldown again (it had gone up to 3 minutes on 15 October).
- **Tauren**: **Plainsrunning** gives 2% movement speed per stack (was 1%), up to **60%** (was 30%), but no longer works while mounted. **Endurance** goes back to 5% increased health only, with no hit chance or critical damage bonus.
- **Troll**: **Berserking** lasts 15 seconds (was 10).
- **Undead**: the internal cooldown of **Touch of the Grave** drops to 15 seconds (was 25).

## Skyborne {#skyborne}

- **Both factions**: Wind-Blessed gives **2%** haste (was 3%).
- **High Order** (Alliance): **Read Leyline** increases health and mana regeneration by 50% (was 100%) for 15 seconds, and cannot be used while Innervate is active, which replaces it as the stronger effect. Used at a ley line, it also grants **Attuned** for one hour: while Attuned, the bonus goes back to 100%.
- **Windshaper** (Horde): **Skysight** increases movement speed by 15% (was 10%) for 15 seconds. Used at an elemental convergence, it also grants **Charged** for one hour: while Charged, the bonus is 30%.
- Attuned and Charged persist through death and are removed when you enter a raid.

## Update of 27 October {#update}

On 27 October at 15:37 UTC Kaivax added a [second post](${POST_27}) with "additions that were intended to be listed" and edited the first one: Blood Fury back to 2 minutes, Berserking at 15 seconds and Touch of the Grave at 15 seconds come from this update. Articles written before then may still describe these three racials as unchanged.

Our [talent builder](/en/builder) already shows the new values, and every change is listed in the [change history](/en/changes).

## What we don't know yet {#unknown}

- **When we will see them in game**: the beta closed on 23 October, so no test build has these values. Blizzard calls this a final pass before launch; we will check every racial in game from 4 November.
- **Plainsrunning**: Blizzard gives the maximum (60%) but not how many stacks it takes or how fast they build up.
- **Command**: the notes mention Hunter and Warlock pets; they do not say whether other summoned creatures, such as an Orc Mage's Water Elemental, benefit too.
- **Names**: Artisan's Precision, Attuned and Charged have no official Italian or Spanish name yet. Blizzard now writes "Wind-Blessed" and "Read Leyline", while the 22 September article had "Wind Blessed" and "Read Ley Line".`,
    `Il 26 ottobre 2026, alle 20:35 UTC (le 21:35 in Italia), Kaivax, Community Manager di Blizzard, ha aggiunto un nuovo post alle [note di sviluppo ufficiali di WoW Forever](${POST}), ora intitolate "Updated October 26". Non parla di una nuova build, perché la beta è chiusa dal 23 ottobre: è l'ultima revisione delle abilità razziali prima del lancio del 4 novembre. Il giorno dopo un secondo post ha aggiunto tre modifiche rimaste fuori. La tornata precedente, del 15 ottobre, è nel nostro articolo sulle [note del 15 ottobre](/it/news/beta-development-notes-october-15).

## Perché Blizzard le ha cambiate di nuovo {#perche}

Blizzard spiega di aver raccolto due critiche alle razziali introdotte a ottobre: alcune sembravano "troppo generiche", altre oggettivamente più forti delle altre. In quest'ultima revisione il team ha messo al primo posto **l'identità delle razze**. Vuol dire che alcune razze saranno un po' più efficaci di altre in certi ruoli, e che dove razziali legate a un ruolo o a una classe erano state sostituite da bonus generici si torna indietro.

C'è un'eccezione: le **specializzazioni d'arma** (Sword Specialization degli Umani, Axe Specialization degli Orchi, Mace Specialization dei Nani) non tornano. Blizzard scrive che hanno un forte valore di immaginario, ma alla lunga il bottino di incursioni e dungeon (spedizioni) finirebbe giudicato in base al tipo d'arma "richiesto" da una razza. Anche i bonus passivi rimasti ricevono un ritocco dei numeri.

## Alleanza {#alleanza}

- **Umano**: Ruthless ora dà l'**1%** di probabilità di colpo critico (era il 2%); The Human Spirit dà il **10%** di Spirito in più (era il 5%).
- **Nano**: sparisce Earth Fury (danni e cure critiche +2%). Al suo posto arriva una passiva nuova, **Artisan's Precision**: +1% di probabilità di colpire con incantesimi e attacchi.
- **Elfo della Notte** e **Gnomo**: nessuna modifica.

## Orda {#orda}

- **Orco**: sparisce Savage (critico +1%) e torna **Command**: i pet del Cacciatore e dello Stregone fanno il 5% di danni in più. **Blood Fury** torna a 2 minuti di ricarica (il 15 ottobre era salita a 3).
- **Tauren**: **Plainsrunning** dà il 2% di velocità di movimento per accumulo (era l'1%), fino al **60%** (era il 30%), ma non vale più a cavallo. **Endurance** torna a dare solo il 5% di salute in più, senza probabilità di colpire né bonus ai critici.
- **Troll**: **Berserking** dura 15 secondi (erano 10).
- **Non Morto**: la ricarica interna di **Touch of the Grave** scende a 15 secondi (erano 25).

## Skyborne {#skyborne}

- **Tutte e due le fazioni**: Wind-Blessed dà il **2%** di celerità (era il 3%).
- **High Order** (Alleanza): **Read Leyline** aumenta la rigenerazione di salute e mana del 50% (era il 100%) per 15 secondi, e non si usa con Innervate attivo, che la sostituisce perché è più forte. Usata su una linea di ley dà anche **Attuned** per un'ora: con Attuned il bonus torna al 100%.
- **Windshaper** (Orda): **Skysight** aumenta la velocità di movimento del 15% (era il 10%) per 15 secondi. Usata su una convergenza elementale dà anche **Charged** per un'ora: con Charged il bonus è del 30%.
- Attuned e Charged restano dopo la morte e spariscono entrando in un'incursione.

## Aggiornamento del 27 ottobre {#aggiornamento}

Il 27 ottobre alle 15:37 UTC (le 16:37 in Italia) Kaivax ha aggiunto un [secondo post](${POST_27}) con le aggiunte "che dovevano essere elencate" e ha corretto il primo: Blood Fury di nuovo a 2 minuti, Berserking a 15 secondi e Touch of the Grave a 15 secondi vengono da qui. Gli articoli scritti prima possono ancora dare queste tre razziali come invariate.

Il nostro [builder dei talenti](/it/builder) mostra già i valori nuovi, e ogni modifica è nello [storico delle modifiche](/it/changes).

## Cosa non sappiamo ancora {#non-sappiamo}

- **Quando le vedremo nel gioco**: la beta è chiusa dal 23 ottobre, quindi nessuna build di prova ha questi valori. Blizzard parla di un'ultima revisione prima del lancio; dal 4 novembre controlliamo ogni razziale nel gioco.
- **Plainsrunning**: Blizzard dà il massimo (60%), non quanti accumuli servono né quanto in fretta si sommano.
- **Command**: le note parlano dei pet del Cacciatore e dello Stregone; non dicono se valga per altre creature evocate, per esempio il Water Elemental di un Mago orco.
- **Nomi**: Artisan's Precision, Attuned e Charged non hanno ancora un nome italiano o spagnolo ufficiale (in italiano Blizzard lascia comunque in inglese i nomi delle razziali). Ora Blizzard scrive "Wind-Blessed" e "Read Leyline", mentre l'articolo del 22 settembre diceva "Wind Blessed" e "Read Ley Line".`,
    `El 26 de octubre de 2026, a las 20:35 UTC (las 21:35 en España peninsular), Kaivax, community manager de Blizzard, añadió un mensaje nuevo a las [notas de desarrollo oficiales de WoW Forever](${POST}), que ahora se titulan "Updated October 26". No habla de una build nueva, porque la beta cerró el 23 de octubre: es la última revisión de las habilidades raciales antes del lanzamiento del 4 de noviembre. Al día siguiente un segundo mensaje añadió tres cambios que se habían quedado fuera. La ronda anterior, del 15 de octubre, está en nuestro artículo sobre las [notas del 15 de octubre](/es/news/beta-development-notes-october-15).

## Por qué Blizzard las ha cambiado otra vez {#por-que}

Blizzard explica que recibió dos críticas a las raciales introducidas en octubre: algunas parecían "demasiado genéricas" y otras eran objetivamente más fuertes que el resto. En esta última revisión el equipo ha puesto por delante **la identidad de las razas**. Eso significa que algunas razas serán algo más eficaces que otras en ciertos roles, y que donde las raciales ligadas a un rol o a una clase se habían sustituido por bonificaciones genéricas se vuelve atrás.

Hay una excepción: las **especializaciones de arma** (Sword Specialization de los humanos, Axe Specialization de los orcos, Mace Specialization de los enanos) no vuelven. Blizzard escribe que tienen mucha fantasía, pero que a la larga el botín de bandas y mazmorras acabaría valorándose según el tipo de arma que "exige" cada raza. Las bonificaciones pasivas que quedan también reciben un ajuste de números.

## Alianza {#alianza}

- **Humano**: Ruthless ahora da un **1 %** de probabilidad de golpe crítico (era un 2 %); The Human Spirit da un **10 %** más de espíritu (era un 5 %).
- **Enano**: desaparece Earth Fury (daño y sanación críticos +2 %). En su lugar llega una pasiva nueva, **Artisan's Precision**: +1 % de probabilidad de golpe con hechizos y ataques.
- **Elfo de la noche** y **gnomo**: sin cambios.

## Horda {#horda}

- **Orco**: desaparece Savage (crítico +1 %) y vuelve **Command**: las mascotas del cazador y del brujo hacen un 5 % más de daño. **Blood Fury** vuelve a 2 minutos de reutilización (el 15 de octubre había subido a 3).
- **Tauren**: **Plainsrunning** da un 2 % de velocidad de movimiento por acumulación (era un 1 %), hasta un **60 %** (era un 30 %), pero ya no funciona montado. **Endurance** vuelve a dar solo un 5 % más de salud, sin probabilidad de golpe ni bonificación al crítico.
- **Trol**: **Berserking** dura 15 segundos (eran 10).
- **No-muerto**: la reutilización interna de **Touch of the Grave** baja a 15 segundos (eran 25).

## Célicos (Skyborne) {#celicos}

- **Las dos facciones**: Wind-Blessed da un **2 %** de celeridad (era un 3 %).
- **Orden Eminente** (Alianza): **Read Leyline** aumenta la regeneración de salud y maná un 50 % (era un 100 %) durante 15 segundos, y no se puede usar con Innervate activo, que la sustituye por ser más fuerte. Usada en una línea ley también da **Attuned** durante una hora: con Attuned la bonificación vuelve al 100 %.
- **Formaviento** (Horda): **Skysight** aumenta la velocidad de movimiento un 15 % (era un 10 %) durante 15 segundos. Usada en una convergencia elemental también da **Charged** durante una hora: con Charged la bonificación es del 30 %.
- Attuned y Charged se mantienen tras morir y desaparecen al entrar en una banda.

## Actualización del 27 de octubre {#actualizacion}

El 27 de octubre a las 15:37 UTC Kaivax añadió un [segundo mensaje](${POST_27}) con los añadidos "que debían figurar" y corrigió el primero: Blood Fury otra vez a 2 minutos, Berserking a 15 segundos y Touch of the Grave a 15 segundos vienen de ahí. Los artículos escritos antes pueden seguir dando estas tres raciales como sin cambios.

Nuestro [calculador de talentos](/es/builder) ya muestra los valores nuevos, y cada cambio está en el [historial de cambios](/es/changes).

## Lo que aún no sabemos {#no-sabemos}

- **Cuándo las veremos en el juego**: la beta cerró el 23 de octubre, así que ninguna build de prueba tiene estos valores. Blizzard habla de una última revisión antes del lanzamiento; desde el 4 de noviembre comprobaremos cada racial en el juego.
- **Plainsrunning**: Blizzard da el máximo (60 %), pero no cuántas acumulaciones hacen falta ni a qué ritmo se suman.
- **Command**: las notas hablan de las mascotas del cazador y del brujo; no dicen si vale para otras criaturas invocadas, como el Water Elemental de un mago orco.
- **Nombres**: Artisan's Precision, Attuned y Charged todavía no tienen nombre oficial en español. Blizzard escribe ahora "Wind-Blessed" y "Read Leyline", mientras que el artículo del 22 de septiembre decía "Wind Blessed" y "Read Ley Line".`,
  ),
  faq: {
    en: [
      {
        q: "Do weapon specialization racials come back in WoW Forever?",
        a: "No. In its final pass of 26 October 2026 Blizzard rolled back several generic racials, but explicitly kept the weapon specializations out, so that loot is not judged by the weapon type a race prefers.",
      },
      {
        q: "What are Attuned and Charged in WoW Forever?",
        a: "One-hour buffs for the Skyborne. Read Leyline used at a ley line grants Attuned (100% regeneration instead of 50%); Skysight used at an elemental convergence grants Charged (30% speed instead of 15%). Both persist through death and end when you enter a raid.",
      },
    ],
    it: [
      {
        q: "In WoW Forever tornano le razziali delle specializzazioni d'arma?",
        a: "No. Nell'ultima revisione del 26 ottobre 2026 Blizzard è tornata indietro su diverse razziali generiche, ma ha tenuto fuori di proposito le specializzazioni d'arma, perché il bottino non venga giudicato in base all'arma preferita da una razza.",
      },
      {
        q: "Cosa sono Attuned e Charged in WoW Forever?",
        a: "Buff di un'ora degli Skyborne. Read Leyline usata su una linea di ley dà Attuned (rigenerazione al 100% invece del 50%); Skysight usata su una convergenza elementale dà Charged (velocità al 30% invece del 15%). Restano dopo la morte e finiscono entrando in un'incursione.",
      },
    ],
    es: [
      {
        q: "¿Vuelven en WoW Forever las raciales de especialización de arma?",
        a: "No. En la última revisión del 26 de octubre de 2026 Blizzard dio marcha atrás con varias raciales genéricas, pero dejó fuera a propósito las especializaciones de arma, para que el botín no se valore según el arma que prefiere una raza.",
      },
      {
        q: "¿Qué son Attuned y Charged en WoW Forever?",
        a: "Bonificaciones de una hora de los célicos. Read Leyline usada en una línea ley da Attuned (regeneración del 100 % en lugar del 50 %); Skysight usada en una convergencia elemental da Charged (velocidad del 30 % en lugar del 15 %). Se mantienen tras morir y terminan al entrar en una banda.",
      },
    ],
  },
};

export default item;

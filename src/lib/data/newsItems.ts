import type { NewsItem } from "./news";
import { media } from "../media";
import darkspear from "./newsTexts/darkspear-islands-pvp";
import skyborne from "./newsTexts/skyborne-visual-updates";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/** Note di sviluppo della beta dell'8 ottobre 2026 (Kaivax, Community Manager, forum ufficiale US). */
const DEV_NOTES_OCT_8 = "https://us.forums.blizzard.com/en/wow/t/wow-forever-beta-development-notes-%E2%80%93-updated-october-8/2360696/5";

/** Le news di ForeverMeta, in inglese, italiano e spagnolo. Ognuna con una copertina diversa e la sua fonte. */
export const newsItems: NewsItem[] = [
  {
    slug: "beta-development-notes-october-8",
    date: "2026-10-08",
    source: "blizzard",
    topic: "beta",
    url: DEV_NOTES_OCT_8,
    image: media.dalaran.src,
    imageAlt: media.dalaran.alt,
    guides: ["wow-forever-zones-dungeons-raids", "wow-forever-legacy-system"],
    title: n(
      "WoW Forever beta, 8 October notes: City of Dalaran opens, Rage is recalculated, 16 Legacy Points for testers",
      "Beta di WoW Forever, note dell'8 ottobre: apre City of Dalaran, Ira ricalcolata, 16 Legacy Points ai tester",
      "Beta de WoW Forever, notas del 8 de octubre: abre City of Dalaran, se recalcula la Ira y 16 puntos de legado",
    ),
    metaTitle: n("WoW Forever beta notes, 8 October: City of Dalaran", "WoW Forever: note della beta dell'8 ottobre", "WoW Forever: notas de la beta del 8 de octubre"),
    summary: n(
      "Blizzard's third weekly update to the WoW Forever beta opens the City of Dalaran dungeon for testing, raises dungeon XP by about 20% and fixes how Rage is earned from damage taken. Every tester also gets 16 Legacy Points.",
      "Il terzo aggiornamento settimanale della beta di WoW Forever apre al test il dungeon City of Dalaran, alza di circa il 20% l'esperienza nei dungeon e corregge l'Ira che si guadagna dai danni subiti. Tutti i tester ricevono anche 16 Legacy Points.",
      "La tercera actualización semanal de la beta de WoW Forever abre a las pruebas la mazmorra City of Dalaran, sube un 20% la experiencia en mazmorras y corrige la Ira que se gana al recibir daño. Además, todos los probadores reciben 16 puntos de legado.",
    ),
    description: n(
      "WoW Forever beta notes of 8 October 2026: City of Dalaran testable, about 20% more dungeon XP, Rage from damage fixed and 16 Legacy Points.",
      "Note della beta di WoW Forever dell'8 ottobre 2026: City of Dalaran in test, +20% di esperienza nei dungeon, Ira corretta e 16 Legacy Points.",
      "Notas de la beta de WoW Forever del 8 de octubre: City of Dalaran en pruebas, un 20% más de experiencia en mazmorras, Ira corregida y 16 puntos de legado.",
    ),
    highlights: {
      en: [
        { label: "City of Dalaran", text: "the new dungeon can be tested", anchor: "dalaran" },
        { label: "More XP in dungeons", text: "about +20% from kills, and a fairer group XP rule", anchor: "xp" },
        { label: "Rage", text: "three bugs fixed, typical Warriors and Druids should get more", anchor: "rage" },
        { label: "Classes", text: "changes for eight classes out of nine", anchor: "classes" },
        { label: "Legacy System", text: "16 Legacy Points for every tester", anchor: "legacy" },
      ],
      it: [
        { label: "City of Dalaran", text: "il nuovo dungeon si può provare", anchor: "dalaran" },
        { label: "Più esperienza nei dungeon", text: "circa +20% dalle uccisioni e una regola più giusta in gruppo", anchor: "esperienza" },
        { label: "Ira", text: "tre bug corretti, Guerrieri e Druidi dovrebbero riceverne di più", anchor: "ira" },
        { label: "Classi", text: "modifiche per otto classi su nove", anchor: "classi" },
        { label: "Legacy System", text: "16 Legacy Points a ogni tester", anchor: "legacy" },
      ],
      es: [
        { label: "City of Dalaran", text: "ya se puede probar la nueva mazmorra", anchor: "dalaran" },
        { label: "Más experiencia en mazmorras", text: "un 20% más por muertes y una regla de grupo más justa", anchor: "experiencia" },
        { label: "Ira", text: "tres errores corregidos; guerreros y druidas deberían recibir más", anchor: "ira" },
        { label: "Clases", text: "cambios para ocho de las nueve clases", anchor: "clases" },
        { label: "Sistema de legado", text: "16 puntos de legado para cada probador", anchor: "legado" },
      ],
    },
    body: n(
      `On 8 October 2026 Kaivax, Community Manager at Blizzard, updated the official WoW Forever beta development notes for the third Thursday in a row. Here is what changed for players, in short. Spell and talent names stay in English, as in the notes.

## City of Dalaran {#dalaran}

The **City of Dalaran** dungeon, one of the nine new dungeons of Forever, is now open for testing. Blizzard has not published its level range yet. You can find all nine in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).

## More experience in dungeons {#xp}

- Experience from kills in dungeons goes up by **about 20%**.
- Group experience no longer applies a penalty based on the highest-level member: each player's own level counts, as in Classic Era. If a member is far above the enemy's level, nobody gets experience, as before.

## Rage {#rage}

Blizzard fixed three bugs in how Rage is earned from damage taken (it used the player's health instead of the creature's expected health, it ignored critical and crushing hit multipliers, and it counted absorbed damage) and rebalanced it around an armor value of 20–40% depending on level, instead of a tank-like 50%. According to the notes, typical Warriors and Druids should get more Rage.

## Classes {#classes}

- **Druid**: Mana Potions work again in Bear, Dire Bear and Cat Form; 100% extra Rage from crits (was 75%); Bear and Dire Bear Form threat bonus 50% (was 30%); Thorns back to its original base damage with a 6% spell power ratio; Predatory Instincts renamed Natural Instinct.
- **Hunter**: Disengage threat reduction doubled as intended; Expose Prey lasts 10 seconds (was 5).
- **Mage**: Impact no longer triggers from Flamestrike's periodic damage; low ranks of Frostbolt, Fireball and Arcane Missiles retuned.
- **Paladin**: Retribution Aura uses the Paladin's spell power, with its original base damage and a 6% ratio; Reckoning triggers at most every 1.5 seconds.
- **Priest**: Penance damage and healing reduced and its costs reworked; low ranks of Smite, Lesser Heal and Heal retuned.
- **Shaman**: Flametongue Totem uses the target's attack speed; low ranks of Lightning Bolt retuned.
- **Warlock**: low ranks of Shadow Bolt retuned; the current pet is stunned while you summon another one.
- **Warrior**: Deep Wounds is required again for Impale; Demoralizing Shout now generates threat on all targets.
- **Rogue**: no class changes in this update.

The full list, update by update, is on our [beta changes page](/en/changes).

## Legacy System {#legacy}

Every tester has completed a Legacy Challenge and received **16 Legacy Points**, so the Legacy trees can be tested. During the beta, resetting Legacy talents costs 1 silver at the lowest step. More in our [Legacy System guide](/en/guides/wow-forever-legacy-system).

## Other changes {#other}

Voice chat with Discord Voice (set by the group leader), a voice mode in Group Finder postings, an updated Inspect window, fixes for gamepad and Mac graphics (MSAA is turned off for now), and many quest and item fixes.

## What we don't know yet {#unknown}

The level range of City of Dalaran, and whether the fixes Blizzard announced in advance (the Auto Shot bug, the Gnome racial) are already in this build: the notes do not say.`,
      `L'8 ottobre 2026 Kaivax, Community Manager di Blizzard, ha aggiornato per il terzo giovedì di fila le note di sviluppo ufficiali della beta di WoW Forever. Ecco in breve cosa cambia per chi gioca. I nomi di incantesimi e talenti restano in inglese, come nelle note e nel gioco.

## City of Dalaran {#dalaran}

Il dungeon **City of Dalaran**, uno dei nove nuovi di Forever, si può provare. Blizzard non ha ancora pubblicato i suoi livelli. Li trovi tutti e nove nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).

## Più esperienza nei dungeon {#esperienza}

- L'esperienza dalle uccisioni nei dungeon sale **del 20% circa**.
- L'esperienza in gruppo non applica più una penalità calcolata sul membro di livello più alto: conta il livello di ciascuno, come in Classic Era. Se un membro è molto sopra il livello del nemico, nessuno riceve esperienza, come prima.

## Ira {#ira}

Blizzard ha corretto tre bug nel calcolo dell'Ira che si guadagna dai danni subiti (usava la vita del giocatore invece di quella prevista della creatura, ignorava i moltiplicatori dei colpi critici e dei crushing blow e contava i danni assorbiti) e l'ha ribilanciata su un'armatura del 20–40% a seconda del livello, invece del 50% da tank. Secondo le note, Guerrieri e Druidi "tipici" dovrebbero riceverne di più.

## Classi {#classi}

- **Druido**: le Mana Potion tornano usabili in Bear, Dire Bear e Cat Form; Ira in più dai critici al 100% (era 75%); bonus di minaccia di Bear e Dire Bear Form al 50% (era 30%); Thorns torna al danno base originale con un rapporto di spell power del 6%; Predatory Instincts diventa Natural Instinct.
- **Cacciatore**: la riduzione di minaccia di Disengage raddoppia come previsto; Expose Prey dura 10 secondi (erano 5).
- **Mago**: Impact non si attiva più dal danno periodico di Flamestrike; ritoccati i ranghi bassi di Frostbolt, Fireball e Arcane Missiles.
- **Paladino**: Retribution Aura usa lo spell power del Paladino, con il danno base originale e un rapporto del 6%; Reckoning si attiva al massimo ogni 1,5 secondi.
- **Sacerdote**: Penance fa meno danno e meno cura e cambia i costi; ritoccati i ranghi bassi di Smite, Lesser Heal e Heal.
- **Sciamano**: Flametongue Totem usa la velocità d'attacco del bersaglio; ritoccati i ranghi bassi di Lightning Bolt.
- **Stregone**: ritoccati i ranghi bassi di Shadow Bolt; il famiglio attuale viene stordito mentre ne evochi un altro.
- **Guerriero**: Deep Wounds torna necessario per Impale; Demoralizing Shout genera minaccia su tutti i bersagli.
- **Ladro**: nessuna modifica di classe in questo aggiornamento.

L'elenco completo, aggiornamento per aggiornamento, è nella nostra [pagina delle modifiche della beta](/it/changes).

## Legacy System {#legacy}

Tutti i tester hanno completato una Legacy Challenge e ricevuto **16 Legacy Points**, così gli alberi del Legacy si possono provare. Durante la beta azzerare i talenti Legacy costa 1 argento al gradino più basso. Di più nella nostra [guida al Legacy System](/it/guides/wow-forever-legacy-system).

## Altre modifiche {#altro}

Chat vocale anche con Discord Voice (la sceglie il capogruppo), modalità vocale negli annunci del Group Finder, finestra Inspect aggiornata, correzioni per il gamepad e per la grafica su Mac (per ora l'MSAA è spento) e molte correzioni a missioni e oggetti.

## Cosa non sappiamo ancora {#non-sappiamo}

I livelli di City of Dalaran, e se le correzioni annunciate prima da Blizzard (il bug dell'Auto Shot, la razziale degli Gnomi) sono già in questa build: le note non lo dicono.`,
      `El 8 de octubre de 2026 Kaivax, Community Manager de Blizzard, actualizó por tercer jueves seguido las notas de desarrollo oficiales de la beta de WoW Forever. Esto es, en resumen, lo que cambia para quien juega. Los nombres de hechizos y talentos se quedan en inglés, como en las notas.

## City of Dalaran {#dalaran}

La mazmorra **City of Dalaran** (Ciudad de Dalaran), una de las nueve nuevas de Forever, ya se puede probar. Blizzard todavía no ha publicado sus niveles. Las tienes todas en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).

## Más experiencia en mazmorras {#experiencia}

- La experiencia por muertes en mazmorras sube **un 20% aproximadamente**.
- La experiencia en grupo ya no aplica una penalización calculada sobre el miembro de nivel más alto: cuenta el nivel de cada uno, como en Classic Era. Si un miembro está muy por encima del nivel del enemigo, nadie recibe experiencia, como antes.

## Ira {#ira}

Blizzard corrigió tres errores en el cálculo de la Ira que se gana al recibir daño (usaba la salud del jugador en lugar de la salud prevista de la criatura, ignoraba los multiplicadores de críticos y golpes aplastantes y contaba el daño absorbido) y la reequilibró sobre una armadura del 20–40% según el nivel, en lugar del 50% propio de un tanque. Según las notas, los guerreros y druidas "típicos" deberían recibir más Ira.

## Clases {#clases}

- **Druida**: las Mana Potion vuelven a poder usarse en Bear, Dire Bear y Cat Form; Ira extra por críticos al 100% (era 75%); bonificación de amenaza de Bear y Dire Bear Form al 50% (era 30%); Thorns vuelve a su daño base original con una proporción de poder con hechizos del 6%; Predatory Instincts pasa a llamarse Natural Instinct.
- **Cazador**: la reducción de amenaza de Disengage se duplica como estaba previsto; Expose Prey dura 10 segundos (eran 5).
- **Mago**: Impact ya no se activa con el daño periódico de Flamestrike; retocados los rangos bajos de Frostbolt, Fireball y Arcane Missiles.
- **Paladín**: Retribution Aura usa el poder con hechizos del paladín, con su daño base original y una proporción del 6%; Reckoning se activa como mucho cada 1,5 segundos.
- **Sacerdote**: Penance hace menos daño y sanación y cambia sus costes; retocados los rangos bajos de Smite, Lesser Heal y Heal.
- **Chamán**: Flametongue Totem usa la velocidad de ataque del objetivo; retocados los rangos bajos de Lightning Bolt.
- **Brujo**: retocados los rangos bajos de Shadow Bolt; el esbirro actual queda aturdido mientras invocas otro.
- **Guerrero**: Deep Wounds vuelve a ser necesario para Impale; Demoralizing Shout genera amenaza en todos los objetivos.
- **Pícaro**: sin cambios de clase en esta actualización.

La lista completa, actualización a actualización, está en nuestra [página de cambios de la beta](/es/changes).

## Sistema de legado {#legado}

Todos los probadores han completado un desafío de legado y han recibido **16 puntos de legado**, para que se puedan probar los árboles del sistema. Durante la beta, reiniciar los talentos de legado cuesta 1 de plata en el escalón más bajo. Más en nuestra [guía del sistema de legado](/es/guides/wow-forever-legacy-system).

## Otros cambios {#otros}

Chat de voz también con Discord Voice (lo elige el líder del grupo), modo de voz en los anuncios del Group Finder, ventana de inspección actualizada, correcciones para el mando y para los gráficos en Mac (de momento el MSAA está desactivado) y muchas correcciones de misiones y objetos.

## Lo que aún no sabemos {#no-sabemos}

Los niveles de City of Dalaran y si las correcciones que Blizzard anunció antes (el error del Auto Shot, la racial de los gnomos) ya están en esta build: las notas no lo dicen.`,
    ),
  },
  darkspear,
  skyborne,
];

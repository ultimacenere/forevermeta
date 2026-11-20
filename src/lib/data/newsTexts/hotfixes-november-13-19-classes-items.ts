import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Hotfix di classi, oggetti e mondo del 13-19/11/2026. Fonte unica: il thread "WoW Forever Hotfixes" (forum US, topic
 * 2403040), voci "November 13" (post 10, 14/11 01:54 UTC), "November 16" (post 11, 17/11 02:17 UTC), "November 17"
 * (post 12, 18/11 03:24 UTC) e "November 19" (post 13, 20/11 04:00 UTC). Il post 9 del 12/11 (Enhancement) è già
 * raccontato nella news class-tuning-november-10. Manutenzione settimanale del 17/11 nelle Americhe e del 18/11 in Europa
 * dal thread EU (topic 639885, post 6). Dungeon, XP, Blackmaw Hold, UBRS, rimborsi e casa d'aste stanno nella news gemella
 * blackmaw-hold-exploit-dungeon-xp-ubrs-november-17. Apertura delle incursioni (9/12) dalle note di sviluppo del 2/11
 * (news del sito). Builder aggiornato il 20/11 (data.json di talentsforever del 18/11): cambia solo Vampiric Embrace.
 */
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-19-2026/2403040";

const item: NewsItem = {
  slug: "hotfixes-november-13-19-classes-items",
  date: "2026-11-19",
  source: "blizzard",
  topic: "news",
  url: HOTFIX,
  image: media.newsHotfixesNov13.src,
  imageAlt: media.newsHotfixesNov13.alt,
  guides: ["wow-forever-races-classes", "wow-forever-camping-professions"],
  title: n(
    "WoW Forever hotfixes of 13-19 November: stuns, Vampiric Embrace, Wild Growth, Paladin tanks and items",
    "Hotfix di WoW Forever del 13-19 novembre: stordimenti, Vampiric Embrace, Wild Growth, Paladini tank e oggetti",
    "Hotfixes de WoW Forever del 13 al 19 de noviembre: aturdimientos, Vampiric Embrace, Wild Growth y objetos",
  ),
  metaTitle: n(
    "WoW Forever hotfixes, 13-19 November: classes and items",
    "WoW Forever: hotfix del 13-19 novembre a classi e oggetti",
    "WoW Forever: hotfixes de clases del 13 al 19 de noviembre",
  ),
  summary: n(
    "Between 13 and 19 November Blizzard added four hotfix entries for WoW Forever. Stuns now have diminishing returns in both directions, Vampiric Embrace heals the party half as much, Wild Growth's coefficient doubles and Paladin tanks are steered towards Spell Power. Owners of the Blessed Band of Light can swap it, once and for good, for a Channeler's Ring.",
    "Fra il 13 e il 19 novembre Blizzard ha aggiunto quattro voci di hotfix per WoW Forever. Gli stordimenti hanno ora rendimenti decrescenti in tutte e due le direzioni, Vampiric Embrace cura il gruppo la metà, il coefficiente di Wild Growth raddoppia e i Paladini tank vengono spinti verso il potere magico. Chi ha la Blessed Band of Light può scambiarla, una volta e per sempre, con un Channeler's Ring.",
    "Entre el 13 y el 19 de noviembre Blizzard añadió cuatro entradas de hotfixes para WoW Forever. Los aturdimientos tienen ahora rendimientos decrecientes en los dos sentidos, Vampiric Embrace cura al grupo la mitad, el coeficiente de Wild Growth se duplica y los paladines tanque se orientan al poder con hechizos. Quien tenga la Blessed Band of Light puede cambiarla, una sola vez y para siempre, por un Channeler's Ring.",
  ),
  description: n(
    "WoW Forever hotfixes of 13-19 November: stun diminishing returns, Vampiric Embrace halved for the party, Wild Growth doubled, Paladin tanks and items.",
    "Hotfix di WoW Forever del 13-19 novembre: rendimenti decrescenti sugli stordimenti, Vampiric Embrace dimezzato, Wild Growth raddoppiato e oggetti.",
    "Hotfixes de WoW Forever del 13 al 19 de noviembre: aturdimientos con rendimientos decrecientes, Vampiric Embrace a la mitad, Wild Growth al doble.",
  ),
  highlights: {
    en: [
      { label: "Stuns", text: "diminishing returns now apply both ways, players and creatures", anchor: "stuns" },
      { label: "Vampiric Embrace", text: "half the healing for the party, unchanged for the Priest", anchor: "vampiric-embrace" },
      { label: "Wild Growth", text: "healing coefficient doubled to 6.6%, no more casting on the move", anchor: "wild-growth" },
      { label: "Paladin", text: "tanks steered to Spell Power, Judgement of Command in melee", anchor: "paladin" },
      { label: "Windfury Totem", text: "armour and internal cooldown fixed, Rage for Warriors, Fury and Cleave", anchor: "windfury" },
      { label: "Blessed Band of Light", text: "an optional, irreversible swap for a Channeler's Ring until raids open", anchor: "items" },
      { label: "Camping", text: "Fishing Rack, Cozy Sleeping Bag, Seed Hybridizer and the fishing tournament", anchor: "camping" },
    ],
    it: [
      { label: "Stordimenti", text: "rendimenti decrescenti in tutte e due le direzioni, giocatori e creature", anchor: "stordimenti" },
      { label: "Vampiric Embrace", text: "metà delle cure per il gruppo, invariato per il Sacerdote", anchor: "vampiric-embrace" },
      { label: "Wild Growth", text: "coefficiente di cura raddoppiato al 6,6%, niente più lanci in movimento", anchor: "wild-growth" },
      { label: "Paladino", text: "tank verso il potere magico, Judgement of Command in mischia", anchor: "paladino" },
      { label: "Windfury Totem", text: "armatura e tempo di recupero interno corretti, Ira ai Guerrieri, Fury e Cleave", anchor: "windfury" },
      { label: "Blessed Band of Light", text: "scambio facoltativo e irreversibile con un Channeler's Ring fino alle incursioni", anchor: "oggetti" },
      { label: "Camping", text: "Fishing Rack, Cozy Sleeping Bag, Seed Hybridizer e torneo di pesca", anchor: "camping" },
    ],
    es: [
      { label: "Aturdimientos", text: "rendimientos decrecientes en los dos sentidos, jugadores y criaturas", anchor: "aturdimientos" },
      { label: "Vampiric Embrace", text: "la mitad de sanación para el grupo, igual para el sacerdote", anchor: "vampiric-embrace" },
      { label: "Wild Growth", text: "coeficiente de sanación duplicado al 6,6%, ya no se lanza en movimiento", anchor: "wild-growth" },
      { label: "Paladín", text: "tanques hacia el poder con hechizos, Judgement of Command cuerpo a cuerpo", anchor: "paladin" },
      { label: "Windfury Totem", text: "armadura y tiempo de reutilización interno corregidos, Ira para guerreros, Fury y Cleave", anchor: "windfury" },
      { label: "Blessed Band of Light", text: "cambio opcional e irreversible por un Channeler's Ring hasta que abran las bandas", anchor: "objetos" },
      { label: "Camping", text: "Fishing Rack, Cozy Sleeping Bag, Seed Hybridizer y el torneo de pesca", anchor: "camping" },
    ],
  },
  body: n(
    `Blizzard keeps a single forum thread for WoW Forever hotfixes and adds a dated entry whenever something changes. Between 14 and 20 November four entries appeared: [13 November](${HOTFIX}/10), posted at 01:54 UTC on the 14th (02:54 CET), [16 November](${HOTFIX}/11), [17 November](${HOTFIX}/12) and [19 November](${HOTFIX}/13), posted at 04:00 UTC on the 20th (05:00 CET). Each item below carries its entry's date. The dungeon changes of the same days, from the experience rule for groups to Upper Blackrock Spire and Blackmaw Hold, are in [a separate article](/en/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). Talent, spell and item names stay in English, as in the game.

## Stuns now have diminishing returns {#stuns}

**13 November.** Two related bugs are fixed: players had no diminishing returns against creature stuns, and creatures had none against player stuns. Now, both ways, stunning the same target repeatedly gives shorter and shorter stuns. Chaining stuns on one dangerous enemy will work less well; in return, creatures that stun often can no longer lock you down for the full duration every time.

## Priest: Vampiric Embrace halved for the party {#vampiric-embrace}

**16 November, live with the weekly maintenance** (17 November in the Americas, 18 in Europe). Vampiric Embrace now heals the party for 10% of the casting Priest's Shadow damage (was 20%), and that Priest receives 100% more healing from the effect. For the Priest the two numbers cancel out, since 10% doubled is the old 20%: that is why Blizzard says solo play does not change. The rest of the party gets half the healing it used to. On the same day Dark Inspiration stopped stacking when a party has more than one Shadow Priest.

## Druid: Wild Growth gets twice as much from gear {#wild-growth}

**13 November.** For Restoration, Wild Growth's healing coefficient, the share of your bonus healing that goes into the spell, rises from 3.3% to 6.6%, so the spell scales twice as well with healing gear. Being able to cast it while moving was a bug and is gone. On **16 November** its ranks started going on cooldown as intended, and for Balance the Genesis talent now increases the damage of Pounce's bleed.

## Paladin: tanks on Spell Power, Command in melee {#paladin}

- **13 November**: Judgement of Command counts as a melee attack and triggers on-hit effects. All other Judgements stay ranged attacks: Blizzard recalls that Command was the only melee one in the original game too, where the other seals were spells.
- **17 November**: Soulforge Armor, the upgraded dungeon set for tanks, has Spell Power instead of Strength. Blizzard says it is leaning further into Spell Power as the Paladin tank's main stat for dealing damage, so that is the stat to watch on your gear.
- **19 November**: for Retribution, Two-Handed Weapon Specialization now increases all the Holy damage you deal with a two-handed weapon equipped.

## Windfury Totem, Fury and Cleave {#windfury}

- **13 November**: any melee ability can now trigger it, even one that does not use the main-hand weapon. Off-hand strikes, as in Whirlwind or Mutilate, still cannot; their main-hand strike can.
- **16 November**: its extra attacks ignored armour and had no internal cooldown. With both bugs fixed, expect fewer and weaker extra attacks, which now generate Rage. Mutilate and Execute lose an extra attempt they should not have had, and Shield Slam, Shield Bash and Holy Strikes empowered by Shieldworn no longer trigger it.
- **17 November**: Flurry no longer loses stacks when Windfury Totem attacks land.

For **Fury Warriors** (16 November), Unbridled Wrath and Reckless Swings now trigger from Cleave and Heroic Strike, which no longer use up Flurry stacks; Reckless Swings can be tracked in the Cooldown Manager. For **Enhancement Shamans** (16 November), Maelstrom Weapon can no longer benefit two casts, and Thundering Strikes gives its critical strike chance even without a weapon equipped. The bigger Enhancement changes are in our article on the [class tuning of 10 November](/en/news/class-tuning-november-10).

## The other class fixes {#classes}

- **Mage** (13 November): Frost Nova breaks correctly from proc damage and from Blizzard.
- **Priest**: the Legacy Perk The Quick and the Dead really reduces the mana cost of Divine Spirit (13 November); Shadow Priests can hold a Night Watchman's Torch (17 November).
- **Rogue** (16 November): poison ranks no longer go above the maximum, and Shank no longer clears your combo points on other targets when you do not have Boot Knife.
- **Warlock** (13 November): Siphon Life Rank 1 can no longer be cast while silenced.
- **Warrior**: Berserker Rage removes Sap (13 November); the Revered Champion offers Legacy of Valor again to Warriors who qualify (16 November).
- **Everyone** (17 November): Might of Stormwind and Warchief's Blessing always end when you die and no longer apply to non-players.

## Items: the Blessed Band of Light exchange {#items}

**13 November.** Blessed Band of Light loses its Hit, and Channeler's Ring gets Spell Power in place of Spirit. Anyone who owns the band can trade it for the ring. Before you do:

- **It is optional.** If you do nothing, you keep your band, without the Hit.
- **Only owners of the band see it** in Pix Xizzix's vendor list, where it sits first until raids open (planned for 9 December); Blizzard does not say what happens after that.
- **It cannot be reversed.** Once you take the Channeler's Ring, the band does not come back. Compare the two rings in game first.

Smaller fixes: Darkspear signet rings give as much mana regeneration as the Alliance ones and Taran Icebreaker is a two-handed mace (13 November); Formula: Enchant Boots - Speed, from reputation, is bind-on-pickup (16 November); Whiteout Staff and Crackling Staff share the same stats: 25 Stamina, 25 Intellect and 74 Spell Power (17 November).

## PvP {#pvp}

- **16 November**: dying in the Gold Mine of Arathi Basin no longer sends you to a graveyard in the Riverglades.
- **17 November**: no more mounting up in the starting rooms of Warsong Gulch, and the quests "The Battle for Alterac Valley" require level 58.

## Camping, professions and the fishing tournament {#camping}

- **Fishing Rack** (16 November): lures for everyone, and the Bloated Fish caught through it drop more often, with adjusted loot.
- **Cozy Sleeping Bag** (17 November): no sleeping in the saddle; it can be placed in specific spots, like Hunter traps; a Resting aura shows when you are inside its area.
- **Seed Hybridizer** (19 November): back, with new values and a chance that combining seeds fails; Scarce Herb Seeds can no longer go in.
- **Blacksmithing** (17 November): the quest "The Old Ways" gives the Orcish War Leggings recipe through an item, and Sumi, in the nearby blacksmithing hut, replaces it if you lost it; Bronze Mace is Bind on Equip, so it can join the Transmog Collection.
- **Stranglethorn Fishing Extravaganza** (13 November): many more players can win in each [ruleset](/en/guides/wow-forever-rulesets) of the weekly tournament. Blizzard is still working on its performance problems.

More on these systems in our [Camping and professions guide](/en/guides/wow-forever-camping-professions).

## Races and interface {#races-interface}

- **Skyborne** (19 November): the 10% Honored discount now applies to the Apprentice and Journeyman riding skills sold by Genn Fairweather on Zephras Isle.
- **Tauren**: Cultivation works on Mageroyal (17 November) and Purple Lotus, and succeeds more reliably on herbs you have the Herbalism skill for (19 November).
- **Interface**: action bar settings no longer reset at every logout for players with Secondary Talents (13 November), and the ignore list survives logging out (17 November).

## Quests in brief {#quests}

Each entry also lists many quest fixes, for example: several quest items now drop for everyone in the party who is on the quest (13 November); "Water Pouch Bounty" no longer gives experience (16 November); "Agamaggan's Blood" is no longer a dungeon quest and can be completed outside Razorfen Downs (17 November).

## Our builder {#builder}

Since 20 November our [talent builder](/en/builder) shows the new Vampiric Embrace text (10% for the party, 100% more for the Priest). The other talents in this article were bug fixes that do not change their tooltip: Two-Handed Weapon Specialization already promised Holy damage, and the Wild Growth coefficient does not appear in the text. Every entry, day by day, is also in our [log of changes](/en/changes). For an overview of the classes there is our [races and classes guide](/en/guides/wow-forever-races-classes).`,
    `Blizzard tiene un solo thread degli hotfix di WoW Forever sui forum e ci aggiunge una voce datata ogni volta che cambia qualcosa. Fra il 14 e il 20 novembre ne sono arrivate quattro: [13 novembre](${HOTFIX}/10), pubblicata alle 01:54 UTC del 14 (02:54 CET), [16 novembre](${HOTFIX}/11), [17 novembre](${HOTFIX}/12) e [19 novembre](${HOTFIX}/13), pubblicata alle 04:00 UTC del 20 (05:00 CET). Ogni punto qui sotto porta la data della sua voce. I cambi ai dungeon degli stessi giorni, con Upper Blackrock Spire e Blackmaw Hold, sono in [un articolo a parte](/it/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). I nomi di talenti, incantesimi e oggetti restano in inglese, come nel gioco.

## Stordimenti con rendimenti decrescenti {#stordimenti}

**13 novembre.** Corretti due bug collegati: i giocatori non avevano rendimenti decrescenti contro gli stordimenti delle creature, e le creature non li avevano contro quelli dei giocatori. Ora, in tutte e due le direzioni, stordire più volte lo stesso bersaglio dà stordimenti sempre più brevi. Una catena di stordimenti su un nemico pericoloso funzionerà meno bene; in compenso le creature che stordiscono spesso non possono più bloccarvi ogni volta per la durata piena.

## Sacerdote: Vampiric Embrace dimezzato per il gruppo {#vampiric-embrace}

**16 novembre, attivo con la manutenzione settimanale** (17 novembre nelle Americhe, 18 in Europa). Vampiric Embrace ora cura il gruppo per il 10% dei danni d'Ombra del Sacerdote che l'ha lanciato (era il 20%), e quel Sacerdote riceve il 100% di cure in più dall'effetto. Per il Sacerdote i due numeri si compensano, perché il 10% raddoppiato è il vecchio 20%: per questo Blizzard precisa che da soli non cambia niente. Il resto del gruppo riceve metà delle cure di prima. Lo stesso giorno Dark Inspiration ha smesso di accumularsi quando nel gruppo ci sono più Sacerdoti Shadow.

## Druido: Wild Growth rende il doppio dall'equipaggiamento {#wild-growth}

**13 novembre.** Per il Restoration il coefficiente di cura di Wild Growth, cioè la parte del vostro bonus alle cure che entra nell'incantesimo, passa dal 3,3% al 6,6%: l'incantesimo cresce il doppio con l'equipaggiamento da guaritore. Poterlo lanciare in movimento era un bug, e non si può più. Il **16 novembre** i suoi ranghi hanno cominciato ad andare in tempo di recupero come previsto, e per il Balance il talento Genesis ora aumenta il danno del sanguinamento di Pounce.

## Paladino: tank sul potere magico, Command in mischia {#paladino}

- **13 novembre**: Judgement of Command conta come attacco in mischia e attiva gli effetti "al colpo". Tutti gli altri Judgement restano attacchi a distanza: Blizzard ricorda che nel gioco originale Command era già l'unico in mischia.
- **17 novembre**: Soulforge Armor, il set da dungeon potenziato per i tank, ha potere magico al posto della Forza. Blizzard dice di voler puntare di più sul potere magico come statistica principale del Paladino tank per fare danni: è quella da guardare sui vostri oggetti.
- **19 novembre**: per il Retribution, Two-Handed Weapon Specialization ora aumenta tutti i danni Sacri che infliggete con un'arma a due mani.

## Windfury Totem, Fury e Cleave {#windfury}

- **13 novembre**: ora lo attiva qualunque abilità in mischia, anche se non usa l'arma della mano principale. I colpi della mano secondaria, come in Whirlwind o Mutilate, continuano a non attivarlo; quelli della mano principale sì.
- **16 novembre**: i suoi attacchi extra ignoravano l'armatura e non avevano un tempo di recupero interno. Corretti i due bug, aspettatevi attacchi extra meno frequenti e meno forti, che ora però generano Ira. Mutilate ed Execute perdono un tentativo in più, e Shield Slam, Shield Bash e gli Holy Strike potenziati da Shieldworn non lo attivano più.
- **17 novembre**: Flurry non perde più cariche quando vanno a segno gli attacchi di Windfury Totem.

Per il **Guerriero Fury** (16 novembre) Unbridled Wrath e Reckless Swings ora si attivano con Cleave e Heroic Strike, che non consumano più le cariche di Flurry. Per lo **Sciamano Enhancement** (16 novembre) Maelstrom Weapon non vale più per due lanci, e Thundering Strikes dà la sua probabilità di critico anche senza un'arma equipaggiata. I cambi più grossi all'Enhancement sono nei [ritocchi di classe del 10 novembre](/it/news/class-tuning-november-10).

## Gli altri ritocchi alle classi {#classi}

- **Mago** (13 novembre): Frost Nova si rompe correttamente con i danni da proc e con quelli di Blizzard.
- **Sacerdote**: il Legacy Perk The Quick and the Dead riduce davvero il costo in mana di Divine Spirit (13 novembre); i Sacerdoti Shadow possono impugnare la Night Watchman's Torch (17 novembre).
- **Ladro** (16 novembre): i ranghi dei veleni non superano più il massimo, e Shank non vi toglie più i punti combo sugli altri bersagli se non avete Boot Knife.
- **Stregone** (13 novembre): Siphon Life Rank 1 non si può più lanciare da silenziati.
- **Guerriero**: Berserker Rage toglie Sap (13 novembre); il Revered Champion offre di nuovo Legacy of Valor ai Guerrieri che ne hanno diritto (16 novembre).
- **Tutti** (17 novembre): Might of Stormwind e Warchief's Blessing finiscono sempre quando morite e non si applicano più a chi non è un giocatore.

## Oggetti: lo scambio della Blessed Band of Light {#oggetti}

**13 novembre.** La Blessed Band of Light perde il colpire, e il Channeler's Ring ha potere magico al posto dello Spirito. Chi possiede la Blessed Band of Light può scambiarla con il Channeler's Ring. Prima di farlo:

- **È facoltativo.** Se non fate niente vi tenete il vostro anello, senza il colpire.
- **Lo vede solo chi ha la Blessed Band of Light** nella lista del mercante Pix Xizzix, dove resta il primo oggetto fino all'apertura delle incursioni (prevista il 9 dicembre); Blizzard non dice cosa succede dopo.
- **Non si può annullare.** Una volta preso il Channeler's Ring, la Blessed Band of Light non torna indietro. Confrontate prima i due anelli in gioco.

Correzioni minori: gli anelli con sigillo dei Darkspear danno la stessa rigenerazione di mana di quelli dell'Alleanza e Taran Icebreaker è una mazza a due mani (13 novembre); Formula: Enchant Boots - Speed, da reputazione, si lega quando la raccogliete (16 novembre); Whiteout Staff e Crackling Staff hanno le stesse statistiche: 25 Tempra, 25 Intelletto e 74 potere magico (17 novembre).

## PvP {#pvp}

- **16 novembre**: morire nella Gold Mine di Arathi Basin non vi manda più a un cimitero delle Riverglades.
- **17 novembre**: non si sale più in sella nelle stanze di partenza di Warsong Gulch, e le missioni "The Battle for Alterac Valley" richiedono il livello 58.

## Camping, professioni e torneo di pesca {#camping}

- **Fishing Rack** (16 novembre): esche per tutti, e i Bloated Fish pescati col suo effetto escono più spesso, con un bottino ritoccato.
- **Cozy Sleeping Bag** (17 novembre): niente sonno in sella; si può piazzare in punti specifici, come le trappole del Cacciatore; un'aura Resting vi mostra quando siete nella sua area.
- **Seed Hybridizer** (19 novembre): è tornato, con valori nuovi e una probabilità che l'unione dei semi fallisca; gli Scarce Herb Seeds non si possono più usare.
- **Blacksmithing** (17 novembre): "The Old Ways" dà la ricetta degli Orcish War Leggings tramite un oggetto, e Sumi ve la ridà se l'avete persa; la Bronze Mace si lega quando la indossate e può entrare nella collezione Transmog.
- **Stranglethorn Fishing Extravaganza** (13 novembre): nel torneo settimanale possono vincere molti più giocatori per ogni [set di regole](/it/guides/wow-forever-rulesets). Blizzard lavora ancora sui problemi di prestazioni del torneo.

Altro nella nostra [guida al Camping e alle professioni](/it/guides/wow-forever-camping-professions).

## Razze e interfaccia {#razze-interfaccia}

- **Skyborne** (19 novembre): lo sconto del 10% a Honored ora si applica alle abilità di cavalcatura Apprentice e Journeyman vendute da Genn Fairweather a Zephras Isle.
- **Tauren**: Cultivation funziona sulla Mageroyal (17 novembre) e sul Purple Lotus, e riesce più spesso sulle erbe che sapete raccogliere con Herbalism (19 novembre).
- **Interfaccia**: chi ha i talenti secondari non perde più le impostazioni delle barre delle azioni a ogni logout (13 novembre), e la lista degli ignorati resta dopo il logout (17 novembre).

## Missioni in breve {#missioni}

Ogni voce ha anche molte correzioni alle missioni, per esempio: diversi oggetti di missione ora cadono per tutti i membri del gruppo che hanno la missione (13 novembre); "Water Pouch Bounty" non dà più esperienza (16 novembre); "Agamaggan's Blood" non è più una missione di dungeon e si completa fuori da Razorfen Downs (17 novembre).

## Il nostro builder {#builder}

Dal 20 novembre il nostro [builder dei talenti](/it/builder) ha il testo nuovo di Vampiric Embrace (10% per il gruppo, 100% in più per il Sacerdote). Gli altri talenti di questo articolo erano correzioni di bug che non cambiano il tooltip: Two-Handed Weapon Specialization prometteva già i danni Sacri, e il coefficiente di Wild Growth nel testo non compare. Tutte le voci, giorno per giorno, sono anche nel nostro [storico delle modifiche](/it/changes). Per un quadro delle classi c'è la nostra [guida a razze e classi](/it/guides/wow-forever-races-classes).`,
    `Blizzard añade a su hilo de hotfixes de WoW Forever una entrada con fecha cada vez que cambia algo. Entre el 14 y el 20 de noviembre llegaron cuatro: [13 de noviembre](${HOTFIX}/10), publicada a las 01:54 UTC del 14 (02:54 CET), [16 de noviembre](${HOTFIX}/11), [17 de noviembre](${HOTFIX}/12) y [19 de noviembre](${HOTFIX}/13), publicada a las 04:00 UTC del 20 (05:00 CET). Cada punto lleva la fecha de su entrada. Los cambios en las mazmorras de esos días, con Upper Blackrock Spire y Blackmaw Hold, están en [otro artículo](/es/news/blackmaw-hold-exploit-dungeon-xp-ubrs-november-17). Los nombres de talentos, hechizos y objetos siguen en inglés, como en el juego.

## Aturdimientos con rendimientos decrecientes {#aturdimientos}

**13 de noviembre.** Se corrigieron dos errores: los jugadores no tenían rendimientos decrecientes contra los aturdimientos de las criaturas, ni las criaturas contra los de los jugadores. Ahora, en los dos sentidos, aturdir varias veces al mismo objetivo da aturdimientos cada vez más cortos. Encadenar aturdimientos sobre un mismo enemigo rendirá menos, pero las criaturas tampoco podrán bloquearte siempre durante toda la duración.

## Sacerdote: Vampiric Embrace a la mitad para el grupo {#vampiric-embrace}

**16 de noviembre, activo con el mantenimiento semanal** (17 de noviembre en América, 18 en Europa). Vampiric Embrace ahora cura al grupo el 10% del daño de Sombras del sacerdote que lo lanzó (antes el 20%), y ese sacerdote recibe un 100% más de sanación del efecto. Para el sacerdote las cifras se compensan (el 10% duplicado es el antiguo 20%), y por eso Blizzard aclara que en solitario no cambia nada. El resto del grupo recibe la mitad que antes. Ese mismo día Dark Inspiration dejó de acumularse cuando hay varios sacerdotes Shadow en el grupo.

## Druida: Wild Growth saca el doble del equipo {#wild-growth}

**13 de noviembre.** Para Restoration, el coeficiente de sanación de Wild Growth, la parte de tu bonificación a la sanación que entra en el hechizo, pasa del 3,3% al 6,6%: el hechizo mejora el doble con el equipo de sanador. Ya no se puede lanzar en movimiento, que era un error. El **16 de noviembre** sus rangos empezaron a entrar en reutilización como debían, y para Balance el talento Genesis ahora aumenta el daño del sangrado de Pounce.

## Paladín: tanques con poder con hechizos, Command cuerpo a cuerpo {#paladin}

- **13 de noviembre**: Judgement of Command cuenta como ataque cuerpo a cuerpo y activa los efectos "al golpear". Los demás Judgement siguen siendo ataques a distancia, y Command es el único cuerpo a cuerpo, como en el juego original.
- **17 de noviembre**: Soulforge Armor, el conjunto de mazmorra mejorado para tanques, tiene poder con hechizos en lugar de Fuerza. Blizzard dice que apuesta más por el poder con hechizos como atributo principal del paladín tanque para hacer daño: es el que debes mirar en tu equipo.
- **19 de noviembre**: para Retribution, Two-Handed Weapon Specialization ahora aumenta todo el daño Sagrado que infliges con un arma a dos manos.

## Windfury Totem, Fury y Cleave {#windfury}

- **13 de noviembre**: ahora lo activa cualquier habilidad cuerpo a cuerpo, aunque no use la mano principal; los golpes de la mano secundaria, como en Whirlwind o Mutilate, siguen sin activarlo.
- **16 de noviembre**: sus ataques adicionales ignoraban la armadura y no tenían reutilización interna. Corregidos los dos errores, espera ataques adicionales menos frecuentes y más débiles, que ahora generan Ira. Mutilate y Execute pierden un intento de más, y Shield Slam, Shield Bash y los Holy Strike potenciados por Shieldworn ya no lo activan.
- **17 de noviembre**: Flurry ya no pierde cargas cuando aciertan los ataques de Windfury Totem.

Para el **guerrero Fury** (16 de noviembre), Unbridled Wrath y Reckless Swings ahora se activan con Cleave y Heroic Strike, que ya no consumen cargas de Flurry. Para el **chamán Enhancement** (16 de noviembre), Maelstrom Weapon ya no sirve para dos lanzamientos, y Thundering Strikes da su probabilidad de crítico aunque no lleves arma. Los cambios más grandes a Enhancement están en los [ajustes de clase del 10 de noviembre](/es/news/class-tuning-november-10).

## Los demás ajustes de clase {#clases}

- **Mago** (13 de noviembre): Frost Nova se rompe bien con el daño de los procs y con el de Blizzard.
- **Sacerdote**: el Legacy Perk The Quick and the Dead reduce de verdad el coste de maná de Divine Spirit (13 de noviembre); los sacerdotes Shadow pueden empuñar la Night Watchman's Torch (17 de noviembre).
- **Pícaro** (16 de noviembre): Shank ya no te quita los puntos de combo de otros objetivos sin Boot Knife, y los venenos no pasan de su rango máximo.
- **Brujo** (13 de noviembre): Siphon Life Rank 1 ya no se puede lanzar estando silenciado.
- **Guerrero**: Berserker Rage quita Sap (13 de noviembre); el Revered Champion vuelve a ofrecer Legacy of Valor a quien cumple los requisitos (16 de noviembre).
- **Todos** (17 de noviembre): Might of Stormwind y Warchief's Blessing terminan siempre al morir y ya no se aplican a quien no es jugador.

## Objetos: el cambio de la Blessed Band of Light {#objetos}

**13 de noviembre.** La Blessed Band of Light pierde el golpe, y el Channeler's Ring tiene poder con hechizos en lugar de Espíritu. Quien tenga la Blessed Band of Light puede cambiarla por el Channeler's Ring. Antes de hacerlo:

- **Es opcional.** Si no haces nada, te quedas con tu anillo, sin el golpe.
- **Solo lo ve quien tiene la Blessed Band of Light** en la lista del vendedor Pix Xizzix, donde es el primer objeto hasta que abran las bandas (previsto el 9 de diciembre); Blizzard no dice qué pasa después.
- **No se puede deshacer.** Una vez que tomas el Channeler's Ring, la Blessed Band of Light no vuelve. Compara antes los dos anillos en el juego.

Correcciones menores: los anillos de sello de los Darkspear dan la misma regeneración de maná que los de la Alianza y Taran Icebreaker es una maza a dos manos (13 de noviembre); Formula: Enchant Boots - Speed, de reputación, se liga al recogerla (16 de noviembre); Whiteout Staff y Crackling Staff tienen los mismos atributos: 25 de Aguante, 25 de Intelecto y 74 de poder con hechizos (17 de noviembre).

## JcJ {#pvp}

- **16 de noviembre**: morir en la Gold Mine de Arathi Basin ya no te manda a un cementerio de las Riverglades.
- **17 de noviembre**: ya no se puede montar en las salas de salida de Warsong Gulch, y las misiones "The Battle for Alterac Valley" exigen nivel 58.

## Camping, profesiones y torneo de pesca {#camping}

- **Fishing Rack** (16 de noviembre): cebos para todos, y los Bloated Fish que se pescan con él salen más a menudo, con otro botín.
- **Cozy Sleeping Bag** (17 de noviembre): nada de dormir sobre la montura; se puede colocar en puntos concretos, como las trampas del cazador; un aura Resting te indica cuándo estás en su área.
- **Seed Hybridizer** (19 de noviembre): vuelve, con valores nuevos y una probabilidad de que la combinación de semillas falle; las Scarce Herb Seeds ya no se pueden usar.
- **Blacksmithing** (17 de noviembre): "The Old Ways" da la receta de los Orcish War Leggings mediante un objeto, y Sumi te la repone si la perdiste; la Bronze Mace se liga al equiparla y puede entrar en la colección de Transmog.
- **Stranglethorn Fishing Extravaganza** (13 de noviembre): en el torneo semanal pueden ganar muchos más jugadores en cada [conjunto de reglas](/es/guides/wow-forever-rulesets). Blizzard sigue trabajando en el rendimiento del torneo.

Más en nuestra [guía de Camping y profesiones](/es/guides/wow-forever-camping-professions).

## Razas e interfaz {#razas-interfaz}

- **Skyborne** (19 de noviembre): el descuento del 10% con Honored ahora se aplica a las habilidades de montar Apprentice y Journeyman que vende Genn Fairweather en Zephras Isle.
- **Tauren**: Cultivation funciona con la Mageroyal (17 de noviembre) y el Purple Lotus, y falla menos con las hierbas que sabes recoger (19 de noviembre).
- **Interfaz**: quien tiene talentos secundarios ya no pierde la configuración de las barras de acción al cerrar sesión (13 de noviembre), y la lista de ignorados se conserva (17 de noviembre).

## Misiones en breve {#misiones}

Hay también muchas correcciones de misiones, por ejemplo: varios objetos de misión caen ahora para todos los del grupo que tienen la misión (13 de noviembre); "Water Pouch Bounty" ya no da experiencia (16 de noviembre); "Agamaggan's Blood" ya no es de mazmorra y se completa fuera de Razorfen Downs (17 de noviembre).

## Nuestro calculador {#calculador}

Desde el 20 de noviembre nuestro [calculador de talentos](/es/builder) tiene el texto nuevo de Vampiric Embrace (10% para el grupo, 100% más para el sacerdote). Los demás talentos de este artículo eran correcciones de errores que no cambian su descripción: Two-Handed Weapon Specialization ya prometía daño Sagrado, y el coeficiente de Wild Growth no aparece en el texto. Todas las entradas, día a día, están también en nuestro [historial de cambios](/es/changes). Para un panorama de las clases tienes nuestra [guía de razas y clases](/es/guides/wow-forever-races-classes).`,
  ),
  faq: {
    en: [
      {
        q: "What changed for Vampiric Embrace in WoW Forever?",
        a: "With the weekly maintenance after the hotfix of 16 November, it heals the party for 10% of the Priest's Shadow damage instead of 20%, while the Priest gets 100% more healing from it. The Priest's own healing stays the same; the rest of the party gets half.",
      },
      {
        q: "Should I exchange my Blessed Band of Light for a Channeler's Ring?",
        a: "It is your choice. Since 13 November the band has no Hit and the ring has Spell Power instead of Spirit. The swap is optional, sits first in Pix Xizzix's vendor list until raids open on 9 December, and cannot be undone: compare both rings in game first.",
      },
      {
        q: "Do stuns have diminishing returns in WoW Forever?",
        a: "Yes, since the hotfix of 13 November. Before, because of two bugs, players had none against creature stuns and creatures had none against player stuns. Now stunning the same target repeatedly gives shorter stuns in both directions.",
      },
    ],
    it: [
      {
        q: "Cosa è cambiato per Vampiric Embrace in WoW Forever?",
        a: "Con la manutenzione settimanale dopo l'hotfix del 16 novembre cura il gruppo per il 10% dei danni d'Ombra del Sacerdote invece del 20%, e il Sacerdote riceve il 100% di cure in più dall'effetto. Le cure del Sacerdote restano uguali; il resto del gruppo ne riceve la metà.",
      },
      {
        q: "Conviene scambiare la Blessed Band of Light con il Channeler's Ring?",
        a: "Sta a voi. Dal 13 novembre l'anello Blessed Band of Light non ha più il colpire e il Channeler's Ring ha potere magico al posto dello Spirito. Lo scambio è facoltativo, è il primo oggetto del mercante Pix Xizzix fino all'apertura delle incursioni, il 9 dicembre, e non si può annullare: confrontate prima i due anelli in gioco.",
      },
      {
        q: "Gli stordimenti hanno rendimenti decrescenti in WoW Forever?",
        a: "Sì, dall'hotfix del 13 novembre. Prima, per due bug, i giocatori non li avevano contro gli stordimenti delle creature e le creature non li avevano contro quelli dei giocatori. Ora stordire più volte lo stesso bersaglio dà stordimenti più brevi in tutte e due le direzioni.",
      },
    ],
    es: [
      {
        q: "¿Qué cambió en Vampiric Embrace en WoW Forever?",
        a: "Con el mantenimiento semanal posterior al hotfix del 16 de noviembre, cura al grupo el 10% del daño de Sombras del sacerdote en lugar del 20%, y el sacerdote recibe un 100% más de sanación del efecto. La sanación del sacerdote sigue igual; el resto del grupo recibe la mitad.",
      },
      {
        q: "¿Me conviene cambiar la Blessed Band of Light por el Channeler's Ring?",
        a: "Depende de ti. Desde el 13 de noviembre la Blessed Band of Light ya no tiene golpe y el Channeler's Ring tiene poder con hechizos en lugar de Espíritu. El cambio es opcional, es el primer objeto del vendedor Pix Xizzix hasta que abran las bandas, el 9 de diciembre, y no se puede deshacer: compara antes los dos anillos en el juego.",
      },
      {
        q: "¿Los aturdimientos tienen rendimientos decrecientes en WoW Forever?",
        a: "Sí, desde el hotfix del 13 de noviembre. Antes, por dos errores, los jugadores no los tenían contra los aturdimientos de las criaturas y las criaturas no los tenían contra los de los jugadores. Ahora aturdir varias veces al mismo objetivo da aturdimientos más cortos en los dos sentidos.",
      },
    ],
  },
};

export default item;

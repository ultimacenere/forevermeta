import type { NewsItem } from "../news";
import { media } from "../../media";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Episodi 7 e 8 del WoW: Forever Podcast, in un solo articolo.
 * - Episodio 7, "Turbo Nerds Lore-ing Out": video YouTube a_fLWei5KwE, topic del forum US 2412856 del 12/11/2026 alle
 *   17:46 UTC. Host Countdown to Classic, Josh "Aggrend" Greenfield (Senior Game Designer), Sean Copeland (Lore
 *   Historian Lead), ospiti i creator Platinum WoW e Nobbel87 (le loro parole non sono usate come fonte).
 * - Episodio 8, "Catching Up On Classes": video YouTube 67dDe3QgJtM, topic del forum US 2422535 del 19/11/2026 alle
 *   17:35 UTC. Host Countdown to Classic, Aidan Moon (Senior Game Designer), Kris Zierhut (Principal Designer).
 * Il contenuto viene dai sottotitoli automatici inglesi dei due video, letti il 20/11: si riportano solo cose dette
 * chiaramente dagli sviluppatori; nomi storpiati dalla trascrizione (talenti, personaggi, un designer citato) lasciati
 * fuori; citazioni di poche parole. Il calendario del podcast (Thanksgiving, puntata sulle incursioni) lo dice l'host.
 * "Cost of Honor": articolo Blizzard 24316096 del 13/11/2026 (c'è in es-es come "El coste del honor", non in it-it: 404 il 20/11).
 */
const VIDEO7 = "https://www.youtube.com/watch?v=a_fLWei5KwE";
const VIDEO8 = "https://www.youtube.com/watch?v=67dDe3QgJtM";
const TOPIC7 = "https://us.forums.blizzard.com/en/wow/t/the-wow-forever-podcast-episode-7-turbo-nerds-lore-ing-out-ft-nobbel87-platinum-wow/2412856";
const TOPIC8 = "https://us.forums.blizzard.com/en/wow/t/the-wow-forever-podcast-episode-8-catching-up-on-classes/2422535";
const COST_OF_HONOR = "https://news.blizzard.com/en-us/article/24316096";
const COST_OF_HONOR_ES = "https://news.blizzard.com/es-es/article/24316096/no-te-pierdas-el-relato-corto-el-coste-del-honor-de-wow-forever";

const item: NewsItem = {
  slug: "podcast-episodes-7-8-lore-classes",
  date: "2026-11-19",
  source: "blizzard",
  topic: "news",
  url: VIDEO8,
  image: media.newsPodcasts78.src,
  imageAlt: media.newsPodcasts78.alt,
  guides: ["wow-forever-races-classes", "wow-forever-rulesets", "wow-forever-camping-professions"],
  title: n(
    "WoW Forever podcast, episodes 7 and 8: more spell power, one class rework at a time, a separate story",
    "Podcast di WoW Forever, episodi 7 e 8: più potere magico, una classe rivista alla volta e una storia a parte",
    "Pódcast de WoW Forever, episodios 7 y 8: más poder con hechizos, una clase cada vez y una historia aparte",
  ),
  metaTitle: n(
    "WoW Forever podcast 7 and 8: classes and lore",
    "WoW Forever, podcast 7 e 8: classi e storia",
    "WoW Forever, pódcast 7 y 8: clases e historia",
  ),
  summary: n(
    "In episode 8 of the WoW Forever Podcast (19 November 2026) Kris Zierhut and Aidan Moon promised more spell power gear for levels 15-40, talked about PvP burst and Balance Druid talents, and said one class at a time will get a deep rework. In episode 7 (12 November) Aggrend and Sean Copeland explained that Forever's story is a separate continuity with a plan for several years.",
    "Nell'episodio 8 del podcast di WoW Forever (19 novembre 2026) Kris Zierhut e Aidan Moon hanno promesso più equipaggiamento con potere magico fra i livelli 15 e 40, hanno parlato del burst in PvP e dei talenti del Druido Balance e hanno detto che una classe alla volta riceverà una revisione profonda. Nell'episodio 7 (12 novembre) Aggrend e Sean Copeland hanno spiegato che la storia di Forever è una continuità separata, con un piano di più anni.",
    "En el episodio 8 del pódcast de WoW Forever (19 de noviembre de 2026) Kris Zierhut y Aidan Moon prometieron más equipo con poder con hechizos entre los niveles 15 y 40, hablaron del daño en ráfaga en JcJ y de los talentos del Druida Balance y dijeron que cada vez una clase recibirá una revisión a fondo. En el episodio 7 (12 de noviembre) Aggrend y Sean Copeland explicaron que la historia de Forever es una continuidad aparte, con un plan de varios años.",
  ),
  description: n(
    "WoW Forever Podcast 7 and 8: more spell power gear for levels 15-40, one class rework at a time, PvP burst, Balance Druid and a separate lore.",
    "Podcast di WoW Forever 7 e 8: più potere magico ai livelli 15-40, una classe rivista alla volta, burst in PvP, Druido Balance e una storia a parte.",
    "Pódcast de WoW Forever 7 y 8: más poder con hechizos de 15 a 40, una clase revisada cada vez, ráfagas en JcJ, Druida Balance y una historia aparte.",
  ),
  highlights: {
    en: [
      { label: "More spell power", text: "more gear for levels 15-40 in future patches", anchor: "spell-power" },
      { label: "PvP burst", text: "damage target up 10%; stamina gear first, a PvP-only damage cut last", anchor: "pvp" },
      { label: "Balance Druid", text: "talent changes under study, by hotfix or patch", anchor: "balance-druid" },
      { label: "One class at a time", text: "a deep talent rework per class, as in 2005", anchor: "classes" },
      { label: "Trade Authority", text: "easier reputation, recipes sooner, new recipes every patch", anchor: "trade-authority" },
      { label: "Faction balance", text: "55-45 is the limit; level 1 characters don't count", anchor: "faction-balance" },
      { label: "A separate continuity", text: "Forever's story branches off, with a plan for several years", anchor: "lore" },
      { label: "Cost of Honor", text: "an official short story set in the Riverglades", anchor: "cost-of-honor" },
    ],
    it: [
      { label: "Più potere magico", text: "più equipaggiamento per i livelli 15-40 nelle prossime patch", anchor: "potere-magico" },
      { label: "Burst in PvP", text: "obiettivo di danno +10%; prima la Tempra, ultima risorsa un taglio solo PvP", anchor: "pvp" },
      { label: "Druido Balance", text: "modifiche ai talenti allo studio, in hotfix o in patch", anchor: "druido-balance" },
      { label: "Una classe alla volta", text: "una revisione profonda dei talenti per classe, come nel 2005", anchor: "classi" },
      { label: "Trade Authority", text: "reputazione più facile, ricette prima, ricette nuove a ogni patch", anchor: "trade-authority" },
      { label: "Equilibrio delle fazioni", text: "il 55-45 è il limite; i personaggi di livello 1 non contano", anchor: "fazioni" },
      { label: "Una continuità separata", text: "la storia di Forever si stacca, con un piano di più anni", anchor: "storia" },
      { label: "Cost of Honor", text: "un racconto ufficiale ambientato nelle Riverglades", anchor: "cost-of-honor" },
    ],
    es: [
      { label: "Más poder con hechizos", text: "más equipo para los niveles 15-40 en próximos parches", anchor: "poder-con-hechizos" },
      { label: "Ráfagas en JcJ", text: "objetivo de daño +10%; primero aguante, como último recurso un recorte solo JcJ", anchor: "jcj" },
      { label: "Druida Balance", text: "cambios de talentos en estudio, por hotfix o parche", anchor: "druida-balance" },
      { label: "Una clase cada vez", text: "una revisión a fondo de los talentos por clase, como en 2005", anchor: "clases" },
      { label: "Trade Authority", text: "reputación más fácil, recetas antes y recetas nuevas en cada parche", anchor: "trade-authority" },
      { label: "Equilibrio de facciones", text: "el 55-45 es el límite; los personajes de nivel 1 no cuentan", anchor: "facciones" },
      { label: "Una continuidad aparte", text: "la historia de Forever se separa, con un plan de varios años", anchor: "historia" },
      { label: "Cost of Honor", text: "un relato oficial ambientado en las Riverglades", anchor: "cost-of-honor" },
    ],
  },
  body: n(
    `On 19 November 2026 at 17:35 UTC Blizzard posted the eighth episode of The WoW: Forever Podcast, [Catching Up On Classes](${VIDEO8}), on the official forum ([topic](${TOPIC8})). The seventh, [Turbo Nerds Lore-ing Out](${VIDEO7}), had arrived on 12 November at 17:46 UTC ([topic](${TOPIC7})). What follows comes from the automatic English captions of the two videos, which we read on 20 November: automatic captions garble names, so we only report what the developers said clearly, and we keep quotes to a few words.

## Episode 8: more spell power while levelling {#spell-power}

The host, Countdown to Classic, talks with **Aidan Moon** (Senior Game Designer) and **Kris Zierhut** (Principal Designer). Zierhut started with the casters. In Forever the team added spell power gear (crafted items, rewards and drops) so that casters care about their equipment as much as warriors do, and lowered the base values of spells to make up for it. Zierhut admits there is **too little spell power gear between levels 15 and 40**: in future patches the plan is to add more. The example given is a friend's level 27 Frost Mage with 104 frost damage, mostly from crafted items.

On healers, Zierhut said a healing spec is not needed before dungeons around level 35 but is past level 40, and the team is weighing options for those who level alone. Moon described the "fantasy forward" approach to itemization, where names and stats tell a story: the Stockades now have loot of their own, and in the raid Moon talked about each wing has its own biome, with very rare items to chase for a long time. Class problems, both said, will not be fixed with set bonuses but in talents or a new system.

## PvP burst: stamina first {#pvp}

Zierhut explained that every class was made about as competitive as a Fire Mage was in 2005, and that the damage target was then raised by 10%. On top of that, players level in damage gear with little stamina and have not yet bought the honor gear, which has a lot of it. He also mentioned a bug that made Windfury ignore armor: the fix is in our [article on the hotfixes of 13-19 November](/en/news/hotfixes-november-13-19-classes-items).

The plan is to watch the level 60 game and perhaps add more stamina gear. A damage reduction that applies only in PvP is **the last resort**, not the preferred solution; raising player health and creature damage across the game would be a huge retune that is "a little scary". The faction side is in our [article on PvP balance](/en/news/pvp-faction-balance-november-10).

## Balance Druid: talent changes under study {#balance-druid}

For Zierhut the Balance tree works with 51 points but not while levelling: Starfire suffers too much pushback, and the talent that fixes it sits in the Restoration tree. The direction, not yet a decision: put the cast time reduction for Wrath and Starfire back together in the first talent, cut the mandatory points in the Improved Starfire row, and replace Moonfury (+10% damage) with something more interesting, moving the 10% into Moonkin Form. That is a lot of change for a hotfix, so the team will decide what to do now and what to leave for a patch; since none of it changes the power of a level 60 druid, raid testing is not affected.

## One class at a time, and the others {#classes}

Zierhut recalled that in 2005 the class team picked one class per patch and fixed its talent trees. Forever will do the same: **one class at a time gets an in-depth rework** based on feedback, and it will keep happening over the years. The other chapters, briefly:

- **Rogue** (Moon): Relentless Strikes, too strong, was moved lower; every rogue now has Shank, a very low damage ability that gives energy back.
- **Enhancement Shaman** (Zierhut): after double Windfury (weapon and totem) was allowed, damage got too high, so earlier buffs to Maelstrom procs and Stormstrike were rolled back.
- **Healers**: a pre-launch review of risky abilities is why Wild Growth has a cast time and Riptide has no initial heal.
- **Arms Warrior** (Moon): no more mobility, at most control tools.
- **Survival Hunter** (Zierhut): the final talent, triggered by Mongoose Bite, is too weak; its damage over time should be worth more than 100% of the hit, perhaps up to 200%, tuned after the raid data.

The class changes already in the game are in our [article on the tuning of 10 November](/en/news/class-tuning-november-10), and you can try the talent trees in the [builder](/en/builder).

## Trade Authority: easier reputation {#trade-authority}

Zierhut explained how the **Trade Authority** is meant to work: writs (craft an item and deliver it to someone in the world) give reputation, crates give a currency to buy recipes, and Friendly and Honored unlock more recipes. There are probably bugs, and the two sources confuse players. The system designers were meeting right after the podcast: the direction is **easier reputation and recipes unlocked sooner**. Forever adds over 600 new recipes, and the plan is to add more to the merchant faction **in every patch**. Camping and professions are in our [guide](/en/guides/wow-forever-camping-professions).

## Episode 7: faction balance and population per zone {#faction-balance}

Episode 7 has **Josh "Aggrend" Greenfield** (Senior Game Designer) and **Sean Copeland** (Lore Historian Lead), with the creators Platinum WoW and Nobbel87 as guests. Aggrend opened on balance: Horde character creation has been tightened on PvP and RP-PvP realms (in Europe, on RP-PvP, it is the Alliance), because the split has reached 55-45, the upper limit. Level 1 characters and trial accounts do not move the count: Blizzard looks at characters that actually play over a period of time. The new server infrastructure lets Blizzard tune population per zone: congested zones were turned down, more on PvP, in what seems to be the level 25-45 range, and in a month starting zones may need more players. The rulesets are explained in our [guide](/en/guides/wow-forever-rulesets).

## A separate continuity with a multi-year plan {#lore}

Forever's story is **a separate branch** from modern WoW, as Hearthstone is. The first plan was to stay in the main continuity; after talking with Chris Metzen the team chose to split them, so that neither game would trip up the other. The starting point is 2004, five years after the Third War, and there is a narrative plan for several years, told through ordinary quests as in the original game. The original raids are anchor points: Molten Core, then Blackwing Lair, Ahn'Qiraj. There will be no Dark Portal in the sense of a level cap raise and Outland; Outland and Northrend may appear one day, but you won't fight the Lich King at level 60.

## What will come back, and races {#returns}

Aggrend said **Scarlet Enclave and the Ashbringer will return**, though it may take a while. Timed events like the Scourge Invasion are planned: the timeline is a stretched-out first year of the original game, and an event could unfold across several updates. There are no plans for more cross-faction races after the Skyborne, though "never say never". New race and class combinations will have to be earned through content: the Sun Priest of An'she in Thunder Bluff points towards Tauren Priests and Paladins, but it is a hint, not an announcement. Races and classes are in our [guide](/en/guides/wow-forever-races-classes).

## Cost of Honor {#cost-of-honor}

On 13 November Blizzard published [Cost of Honor](${COST_OF_HONOR}), a short story written by Jonathan Maberry, illustrated by Surfside 3D and narrated by Peter Jessop as Demar Brant. Young people of the Riverglades gather around a fire to hear the stories of their heroes: war, sacrifice, hard choices, and the idea that a people's strength lies in protecting one another. The article also offers a PDF to download.

## What is promised and what is not {#promised}

- **Said clearly**: more spell power gear for levels 15-40; one class reworked at a time; new Trade Authority recipes every patch; the return of Scarlet Enclave and the Ashbringer; timed events; no level cap raise to Outland.
- **Intentions, no date**: the Balance Druid talents, easier Trade Authority reputation, the Survival talent, more stamina gear.
- **Ideas, not announcements**: Discipline as a support spec, new race and class combinations, bigger bags, a collection of the in-game books.

## What we don't know {#unknown}

- **Which class comes first**, and in which patch; **when** the Balance Druid changes arrive.
- **The next episode**: the host said there is no podcast in Thanksgiving week and the following one will be about the raids, which open on 9 December ([our article](/en/news/raids-december-9-developer-interviews)).`,
    `Il 19 novembre 2026 alle 17:35 UTC (le 18:35 in Italia) Blizzard ha pubblicato sul forum ufficiale ([topic](${TOPIC8})) l'ottavo episodio di The WoW: Forever Podcast, [Catching Up On Classes](${VIDEO8}). Il settimo, [Turbo Nerds Lore-ing Out](${VIDEO7}), era arrivato il 12 novembre alle 17:46 UTC ([topic](${TOPIC7})). Sono video in inglese di oltre un'ora. Quello che segue viene dai loro sottotitoli automatici inglesi, letti il 20 novembre: siccome storpiano i nomi, riportiamo solo quello che gli sviluppatori hanno detto chiaramente e limitiamo le citazioni a poche parole.

## Episodio 8: più potere magico mentre livellate {#potere-magico}

Conduce Countdown to Classic, con **Aidan Moon** (Senior Game Designer) e **Kris Zierhut** (Principal Designer). Zierhut è partito dagli incantatori. In Forever ha aggiunto equipaggiamento con potere magico (oggetti craftati, ricompense e drop) perché gli incantatori tengano all'equipaggiamento quanto i guerrieri, e per compensare ha abbassato i valori base degli incantesimi. Ammette però che **fra i livelli 15 e 40 c'è troppo poco equipaggiamento con potere magico**: nelle prossime patch vuole aggiungerne. Il suo esempio è il Mago Frost di livello 27 di un amico, con 104 di danno da gelo, quasi tutto da oggetti craftati.

Sui guaritori, Zierhut ha detto che la specializzazione da guaritore non serve prima dei dungeon di livello 35 circa ma serve oltre il 40, e che il team sta valutando come aiutare chi livella da solo. Moon ha descritto la sua itemization "fantasy forward", dove nomi e statistiche raccontano una storia: le Stockades ora hanno un bottino tutto loro e, nell'incursione di cui ha parlato, ogni ala ha un suo bioma, con oggetti rarissimi da inseguire a lungo. I problemi delle classi, hanno detto tutti e due, non si risolveranno con i bonus dei set ma nei talenti o in un sistema nuovo.

## Burst in PvP: prima la Tempra {#pvp}

Zierhut ha spiegato che ogni classe è stata resa competitiva più o meno quanto un Mago Fire nel 2005, e che poi l'obiettivo di danno è stato alzato del 10%. In più, i giocatori livellano con equipaggiamento da danno e poca Tempra, e non hanno ancora comprato l'equipaggiamento da honor, che ne ha molta. Ha citato anche un bug che faceva ignorare l'armatura a Windfury: la correzione è nel nostro [articolo sugli hotfix del 13-19 novembre](/it/news/hotfixes-november-13-19-classes-items).

Il piano è guardare come va il gioco al livello 60 e forse aggiungere altro equipaggiamento con Tempra. Una riduzione del danno valida solo in PvP è **l'ultima risorsa**, non la soluzione preferita; alzare la vita dei giocatori e il danno delle creature in tutto il gioco sarebbe un ritocco enorme, che "fa un po' paura". La parte sulle fazioni è nel nostro [articolo sull'equilibrio nel PvP](/it/news/pvp-faction-balance-november-10).

## Druido Balance: modifiche ai talenti allo studio {#druido-balance}

Per Zierhut l'albero Balance funziona con 51 punti ma non mentre si livella: Starfire subisce troppo pushback e il talento che lo riduce sta nell'albero Restoration. La direzione, non ancora una decisione: riunire nel primo talento la riduzione del tempo di lancio di Wrath e Starfire, togliere punti obbligatori dalla riga di Improved Starfire e sostituire Moonfury (+10% di danno) con qualcosa di più interessante, spostando il 10% in Moonkin Form. Sono troppe modifiche per un hotfix, quindi il team deciderà cosa fare subito e cosa lasciare a una patch; non cambiano la potenza di un druido di livello 60, perciò non disturbano i test delle incursioni.

## Una classe alla volta, e le altre {#classi}

Zierhut ha ricordato che nel 2005 il team delle classi sceglieva una classe a ogni patch e ne sistemava gli alberi dei talenti. Forever farà lo stesso: **una classe alla volta riceverà una revisione profonda** e succederà di continuo negli anni. Gli altri capitoli, in breve:

- **Ladro** (Moon): Relentless Strikes, troppo forte, è stato spostato più in basso; ogni ladro ora ha Shank, un'abilità dal danno bassissimo che restituisce energia.
- **Sciamano Enhancement** (Zierhut): dopo il via libera al doppio Windfury (arma e totem) il danno era troppo alto, quindi sono stati annullati i potenziamenti precedenti ai proc di Maelstrom e a Stormstrike.
- **Guaritori**: una revisione prima del lancio delle abilità rischiose spiega perché Wild Growth ha un tempo di lancio e Riptide non ha la cura iniziale.
- **Guerriero Arms** (Moon): niente più mobilità, al massimo strumenti di controllo.
- **Cacciatore Survival** (Zierhut): il talento finale, che si attiva con Mongoose Bite, è troppo debole; il suo danno nel tempo dovrebbe valere più del 100% del colpo, forse fino al 200%, da regolare dopo i dati delle incursioni.

I ritocchi alle classi già in gioco sono nel nostro [articolo sul tuning del 10 novembre](/it/news/class-tuning-november-10), e gli alberi dei talenti si provano nel [builder](/it/builder).

## Trade Authority: reputazione più facile {#trade-authority}

Zierhut ha spiegato come dovrebbe funzionare la **Trade Authority**: le writ (craftare un oggetto e consegnarlo a qualcuno nel mondo) danno reputazione, le casse danno una valuta per comprare ricette, e Friendly e Honored sbloccano altre ricette. Ci sono probabilmente dei bug, e le due fonti confondono i giocatori. Subito dopo il podcast era prevista una riunione dei system designer: la direzione è **reputazione più facile e ricette sbloccate prima**. Forever aggiunge oltre 600 ricette nuove, e il piano è aggiungerne altre alla fazione mercantile **a ogni patch**. Camping e professioni sono nella nostra [guida](/it/guides/wow-forever-camping-professions).

## Episodio 7: equilibrio delle fazioni e popolazione per zona {#fazioni}

Nell'episodio 7 ci sono **Josh "Aggrend" Greenfield** (Senior Game Designer) e **Sean Copeland** (Lore Historian Lead), con ospiti i creator Platinum WoW e Nobbel87. Aggrend ha aperto con l'equilibrio: sui reami PvP e RP-PvP è stata ristretta la creazione di personaggi dell'Orda (in Europa, su RP-PvP, dell'Alleanza), perché il rapporto ha raggiunto il 55-45, il limite massimo. I personaggi di livello 1 e gli account di prova non spostano il conteggio: Blizzard guarda i personaggi che giocano davvero per un certo periodo. La nuova infrastruttura dei server permette di regolare la popolazione per zona: le zone congestionate sono state alleggerite, di più sul PvP, in quella che sembra la fascia di livello 25-45, e fra un mese le zone iniziali potrebbero aver bisogno di più giocatori. I set di regole sono spiegati nella nostra [guida](/it/guides/wow-forever-rulesets).

## Una continuità separata, con un piano di più anni {#storia}

La storia di Forever è **un ramo separato** da quella di WoW moderno, come lo è Hearthstone. All'inizio il piano era restare nella continuità principale; dopo un confronto con Chris Metzen il team ha scelto di dividerle, perché nessuno dei due giochi intralci l'altro. Il punto di partenza è il 2004, cinque anni dopo la Terza Guerra, e c'è un piano narrativo di più anni, raccontato con missioni normali come nel gioco originale. Le incursioni originali fanno da punti d'ancoraggio: Molten Core, poi Blackwing Lair, Ahn'Qiraj. Non ci sarà un Dark Portal nel senso di un aumento del livello massimo e di Outland; Outland e Northrend potranno comparire un giorno, ma il Lich King non si affronterà al livello 60.

## Cosa tornerà, e le razze {#ritorni}

Aggrend ha detto che **Scarlet Enclave e l'Ashbringer torneranno**, anche se potrebbe volerci un po'. Sono previsti eventi a tempo come la Scourge Invasion, che potrebbe svolgersi su più aggiornamenti: la linea temporale è un primo anno del gioco originale molto dilatato. Non ci sono piani per altre razze di entrambe le fazioni dopo gli Skyborne, anche se "mai dire mai". Le nuove combinazioni di razza e classe andranno guadagnate con i contenuti: il Sun Priest di An'she a Thunder Bluff fa pensare a Sacerdoti e Paladini Tauren, ma è un indizio, non un annuncio. Razze e classi sono nella nostra [guida](/it/guides/wow-forever-races-classes).

## Cost of Honor {#cost-of-honor}

Il 13 novembre Blizzard ha pubblicato [Cost of Honor](${COST_OF_HONOR}) (solo in inglese), un racconto breve scritto da Jonathan Maberry, illustrato da Surfside 3D e narrato da Peter Jessop nei panni di Demar Brant. I giovani delle Riverglades si riuniscono attorno a un fuoco per ascoltare le storie dei loro eroi: guerra, sacrificio, scelte difficili, e l'idea che la forza di un popolo stia nel proteggersi a vicenda. C'è anche un PDF da scaricare.

## Cosa è promesso e cosa no {#promesse}

- **Detto chiaramente**: più equipaggiamento con potere magico per i livelli 15-40; una classe rivista alla volta; ricette nuove della Trade Authority a ogni patch; il ritorno di Scarlet Enclave e dell'Ashbringer; eventi a tempo; nessun aumento del livello massimo verso Outland.
- **Intenzioni, senza data**: i talenti del Druido Balance, la reputazione più facile della Trade Authority, il talento di Survival, più equipaggiamento con Tempra.
- **Idee, non annunci**: Discipline come specializzazione di supporto, nuove combinazioni di razza e classe, borse più grandi, una raccolta dei libri del gioco.

## Cosa non sappiamo {#non-sappiamo}

- **Quale classe viene per prima**, e in quale patch; **quando** arrivano le modifiche al Druido Balance.
- **La prossima puntata**: l'host ha detto che nella settimana del Thanksgiving non c'è il podcast e che quella dopo parlerà delle incursioni, che aprono il 9 dicembre ([il nostro articolo](/it/news/raids-december-9-developer-interviews)).`,
    `El 19 de noviembre de 2026 a las 17:35 UTC (las 18:35 en España peninsular) Blizzard publicó en el foro oficial ([tema](${TOPIC8})) el octavo episodio de The WoW: Forever Podcast, [Catching Up On Classes](${VIDEO8}). El séptimo, [Turbo Nerds Lore-ing Out](${VIDEO7}), había llegado el 12 de noviembre a las 17:46 UTC ([tema](${TOPIC7})). Son vídeos en inglés de más de una hora. Lo que sigue viene de sus subtítulos automáticos en inglés, leídos el 20 de noviembre: como deforman los nombres, solo recogemos lo que los desarrolladores dijeron con claridad y limitamos las citas a pocas palabras.

## Episodio 8: más poder con hechizos mientras subes de nivel {#poder-con-hechizos}

Presenta Countdown to Classic, con **Aidan Moon** (Senior Game Designer) y **Kris Zierhut** (Principal Designer). Zierhut empezó por los lanzadores de hechizos: en Forever añadió equipo con poder con hechizos (objetos fabricados, recompensas y botín) para que les importe su equipo tanto como a los guerreros, y para compensar bajó los valores base de los hechizos. Admite que **entre los niveles 15 y 40 hay muy poco equipo con poder con hechizos**: en los próximos parches quiere añadir más. Su ejemplo es el Mago Frost de nivel 27 de un amigo, con 104 de daño de escarcha, casi todo de objetos fabricados.

Sobre los sanadores, Zierhut dijo que la especialización de sanación no hace falta antes de las mazmorras de nivel 35 más o menos, pero sí pasado el 40, y que el equipo está valorando cómo ayudar a quien sube de nivel solo. Moon describió su itemización "fantasy forward", en la que nombres y estadísticas cuentan una historia: las Stockades tienen ahora botín propio y, en la banda de la que habló, cada ala tiene su bioma, con objetos rarísimos que perseguir durante mucho tiempo. Los problemas de las clases, dijeron los dos, no se resolverán con bonificaciones de conjunto, sino en los talentos o en un sistema nuevo.

## Ráfagas en JcJ: primero el aguante {#jcj}

Zierhut explicó que todas las clases se hicieron más o menos tan competitivas como un Mago Fire en 2005, y que después el objetivo de daño subió un 10%. Además, los jugadores suben de nivel con equipo de daño y poco aguante, y todavía no han comprado el equipo de honor, que tiene mucho. También citó un error que hacía que Windfury ignorara la armadura: la corrección está en nuestro [artículo sobre los hotfixes del 13 al 19 de noviembre](/es/news/hotfixes-november-13-19-classes-items).

El plan es ver cómo queda el juego en el nivel 60 y quizá añadir más equipo con aguante. Una reducción de daño que solo se aplique en JcJ es **el último recurso**, no la solución preferida; subir la vida de los jugadores y el daño de las criaturas en todo el juego sería un ajuste enorme que "da un poco de miedo". La parte de las facciones está en nuestro [artículo sobre el equilibrio en JcJ](/es/news/pvp-faction-balance-november-10).

## Druida Balance: cambios de talentos en estudio {#druida-balance}

Para Zierhut el árbol Balance funciona con 51 puntos, pero no mientras subes de nivel: Starfire sufre demasiado retroceso y el talento que lo reduce está en el árbol Restoration. La dirección, todavía no una decisión: volver a juntar en el primer talento la reducción del tiempo de lanzamiento de Wrath y Starfire, quitar puntos obligatorios de la fila de Improved Starfire y sustituir Moonfury (+10% de daño) por algo más interesante, pasando ese 10% a Moonkin Form. Son demasiados cambios para un hotfix: el equipo decidirá qué hacer ya y qué dejar para un parche; como no cambian el poder de un druida de nivel 60, no afectan a las pruebas de las bandas.

## Una clase cada vez, y las demás {#clases}

Zierhut recordó que en 2005 el equipo de clases elegía una clase en cada parche y arreglaba sus árboles de talentos. Forever hará lo mismo: **cada vez una clase recibirá una revisión a fondo** y seguirá pasando con los años. Los demás capítulos, en breve:

- **Pícaro** (Moon): Relentless Strikes, demasiado fuerte, se bajó en el árbol; todos los pícaros tienen ahora Shank, una habilidad de daño bajísimo que devuelve energía.
- **Chamán Enhancement** (Zierhut): tras permitir el doble Windfury (arma y tótem) el daño quedó demasiado alto, así que se deshicieron las mejoras anteriores a los procs de Maelstrom y a Stormstrike.
- **Sanadores**: una revisión antes del lanzamiento de las habilidades arriesgadas explica por qué Wild Growth tiene tiempo de lanzamiento y Riptide no tiene sanación inicial.
- **Guerrero Arms** (Moon): nada de más movilidad, como mucho herramientas de control.
- **Cazador Survival** (Zierhut): el talento final, que se activa con Mongoose Bite, es demasiado débil; su daño en el tiempo debería valer más del 100% del golpe, quizá hasta el 200%, y se ajustará con los datos de las bandas.

Los ajustes de clase que ya están en el juego aparecen en nuestro [artículo sobre los ajustes del 10 de noviembre](/es/news/class-tuning-november-10), y puedes probar los árboles de talentos en el [builder](/es/builder).

## Trade Authority: reputación más fácil {#trade-authority}

Zierhut explicó cómo debería funcionar la **Trade Authority**: las writs (fabricar un objeto y entregárselo a alguien en el mundo) dan reputación, las cajas dan una moneda para comprar recetas, y Friendly y Honored desbloquean más recetas. Probablemente hay errores, y las dos fuentes confunden a los jugadores. Justo después del pódcast había una reunión de los diseñadores de sistemas: la dirección es **reputación más fácil y recetas desbloqueadas antes**. Forever añade más de 600 recetas nuevas, y el plan es sumar otras a la facción de comerciantes **en cada parche**. La acampada y las profesiones están en nuestra [guía](/es/guides/wow-forever-camping-professions).

## Episodio 7: equilibrio de facciones y población por zona {#facciones}

En el episodio 7 están **Josh "Aggrend" Greenfield** (Senior Game Designer) y **Sean Copeland** (Lore Historian Lead), con los creadores Platinum WoW y Nobbel87 como invitados. Aggrend abrió con el equilibrio: en los reinos PvP y RP-PvP se ha restringido la creación de personajes de la Horda (en Europa, en RP-PvP, de la Alianza), porque la proporción ha llegado al 55-45, el límite máximo. Los personajes de nivel 1 y las cuentas de prueba no mueven el recuento: Blizzard mira los personajes que juegan de verdad durante un tiempo. La nueva infraestructura de servidores permite ajustar la población por zona: las zonas congestionadas se han aligerado, más en JcJ, en lo que parece el rango de niveles 25-45, y dentro de un mes las zonas iniciales podrían necesitar más jugadores. Los conjuntos de reglas están explicados en nuestra [guía](/es/guides/wow-forever-rulesets).

## Una continuidad aparte, con un plan de varios años {#historia}

La historia de Forever es **una rama separada** de la de WoW actual, como lo es Hearthstone. Al principio el plan era quedarse en la continuidad principal; tras hablar con Chris Metzen el equipo decidió separarlas, para que ningún juego le pusiera trabas al otro. El punto de partida es 2004, cinco años después de la Tercera Guerra, y hay un plan narrativo de varios años, contado con misiones normales como en el juego original. Las bandas originales hacen de puntos de anclaje: Molten Core, luego Blackwing Lair, Ahn'Qiraj. No habrá un Dark Portal en el sentido de subir el nivel máximo e ir a Outland; Outland y Northrend podrán aparecer algún día, pero el Lich King no se combatirá en el nivel 60.

## Lo que volverá, y las razas {#regresos}

Aggrend dijo que **Scarlet Enclave y la Ashbringer volverán**, aunque puede tardar. Están previstos eventos temporales como la Scourge Invasion, que podría desarrollarse en varias actualizaciones: la línea temporal es un primer año del juego original muy estirado. No hay planes de más razas para las dos facciones después de los Skyborne, aunque "nunca digas nunca". Las nuevas combinaciones de raza y clase habrá que ganárselas con contenido: el Sun Priest de An'she en Thunder Bluff apunta a Sacerdotes y Paladines Tauren, pero es una pista, no un anuncio. Las razas y las clases están en nuestra [guía](/es/guides/wow-forever-races-classes).

## Cost of Honor {#cost-of-honor}

El 13 de noviembre Blizzard publicó [Cost of Honor](${COST_OF_HONOR_ES}) (en español, «El coste del honor»), un relato breve escrito por Jonathan Maberry, ilustrado por Surfside 3D y narrado por Peter Jessop en el papel de Demar Brant. Los jóvenes de las Riverglades se reúnen alrededor de una hoguera para escuchar las historias de sus héroes: guerra, sacrificio, decisiones difíciles y la idea de que la fuerza de un pueblo está en protegerse unos a otros. Incluye un PDF descargable.

## Lo prometido y lo que no {#promesas}

- **Dicho con claridad**: más equipo con poder con hechizos para los niveles 15-40; una clase revisada cada vez; recetas nuevas de la Trade Authority en cada parche; la vuelta de Scarlet Enclave y la Ashbringer; eventos temporales; ninguna subida del nivel máximo hacia Outland.
- **Intenciones, sin fecha**: los talentos del Druida Balance, la reputación más fácil de la Trade Authority, el talento de Survival, más equipo con aguante.
- **Ideas, no anuncios**: Discipline como especialización de apoyo, nuevas combinaciones de raza y clase, bolsas más grandes, una colección de los libros del juego.

## Lo que no sabemos {#no-sabemos}

- **Qué clase va primero**, y en qué parche; **cuándo** llegan los cambios del Druida Balance.
- **El próximo episodio**: el presentador dijo que en la semana de Acción de Gracias no hay pódcast y que el siguiente hablará de las bandas, que abren el 9 de diciembre ([nuestro artículo](/es/news/raids-december-9-developer-interviews)).`,
  ),
  faq: {
    en: [
      {
        q: "Will WoW Forever add more spell power gear for levelling?",
        a: "Yes. In episode 8 of the WoW Forever Podcast (19 November 2026) Kris Zierhut said there is too little spell power gear between levels 15 and 40 and that more will be added in future patches. No date was given.",
      },
      {
        q: "Will Blizzard add a PvP damage reduction in WoW Forever?",
        a: "Not as a first choice. Zierhut called a PvP-only damage reduction the last resort: the team first wants to see the level 60 game and may add more gear with stamina.",
      },
      {
        q: "Which class will be reworked first in WoW Forever?",
        a: "Blizzard has not said. Zierhut explained that, as in 2005, one class at a time will get an in-depth talent rework; for Balance Druids changes are already under study, still without a date.",
      },
      {
        q: "Is the WoW Forever story the same as modern World of Warcraft?",
        a: "No. In episode 7 Josh Greenfield and Sean Copeland explained that Forever is a separate continuity, as Hearthstone is, starting from 2004 and with a narrative plan for several years.",
      },
    ],
    it: [
      {
        q: "WoW Forever aggiungerà più equipaggiamento con potere magico per livellare?",
        a: "Sì. Nell'episodio 8 del podcast di WoW Forever (19 novembre 2026) Kris Zierhut ha detto che fra i livelli 15 e 40 c'è troppo poco equipaggiamento con potere magico e che vuole aggiungerne nelle prossime patch. Non ha dato una data.",
      },
      {
        q: "Blizzard aggiungerà una riduzione del danno nel PvP di WoW Forever?",
        a: "Non come prima scelta. Zierhut ha definito una riduzione del danno solo PvP l'ultima risorsa: il team vuole prima vedere il gioco al livello 60 e potrebbe aggiungere altro equipaggiamento con Tempra.",
      },
      {
        q: "Quale classe sarà rivista per prima in WoW Forever?",
        a: "Blizzard non l'ha detto. Zierhut ha spiegato che, come nel 2005, una classe alla volta riceverà una revisione profonda dei talenti; per il Druido Balance ci sono già modifiche allo studio, ancora senza data.",
      },
      {
        q: "La storia di WoW Forever è la stessa di World of Warcraft moderno?",
        a: "No. Nell'episodio 7 Josh Greenfield e Sean Copeland hanno spiegato che Forever è una continuità separata, come Hearthstone, che parte dal 2004 e ha un piano narrativo di più anni.",
      },
    ],
    es: [
      {
        q: "¿WoW Forever añadirá más equipo con poder con hechizos para subir de nivel?",
        a: "Sí. En el episodio 8 del pódcast de WoW Forever (19 de noviembre de 2026) Kris Zierhut dijo que entre los niveles 15 y 40 hay muy poco equipo con poder con hechizos y que quiere añadir más en próximos parches. No dio fecha.",
      },
      {
        q: "¿Blizzard añadirá una reducción de daño en el JcJ de WoW Forever?",
        a: "No como primera opción. Zierhut llamó a una reducción de daño solo para JcJ el último recurso: el equipo quiere ver antes el juego en el nivel 60 y podría añadir más equipo con aguante.",
      },
      {
        q: "¿Qué clase se revisará primero en WoW Forever?",
        a: "Blizzard no lo ha dicho. Zierhut explicó que, como en 2005, cada vez una clase recibirá una revisión a fondo de sus talentos; para el Druida Balance ya hay cambios en estudio, todavía sin fecha.",
      },
      {
        q: "¿La historia de WoW Forever es la misma que la de World of Warcraft actual?",
        a: "No. En el episodio 7 Josh Greenfield y Sean Copeland explicaron que Forever es una continuidad aparte, como Hearthstone, que parte de 2004 y tiene un plan narrativo de varios años.",
      },
    ],
  },
};

export default item;

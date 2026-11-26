import { media } from "../../media";
import type { NewsItem } from "../news";

const n = (en: string, it: string, es: string) => ({ en, it, es });

/**
 * Hotfix del 25/11/2026. Fonti, lette dal JSON del forum US il 26/11: il post di Kaivax "Balance Druid Adjustments -
 * November 25" (topic 2429007, 25/11 18:32 UTC); i due post di Kaivax "Alterac Valley Adjustments - November 25"
 * (topic 2429074, post 1 delle 19:42 UTC e post 567 delle 23:04 UTC); la voce "November 25" del thread degli hotfix
 * (topic 2403040, post 16 di Kaivax, 25/11 23:25 UTC); l'articolo Blizzard 24315646 sul WoW Celebration Pass (25/11).
 * Le considerazioni pratiche sono nostre e scritte come tali.
 */
const HOTFIX = "https://us.forums.blizzard.com/en/wow/t/wow-forever-hotfixes-november-25-2026/2403040";
const DRUID = "https://us.forums.blizzard.com/en/wow/t/balance-druid-adjustments-november-25/2429007";
const AV = "https://us.forums.blizzard.com/en/wow/t/alterac-valley-adjustments-november-25/2429074";
const PASS = "https://worldofwarcraft.blizzard.com/en-us/news/24315646";

const item: NewsItem = {
  slug: "hotfixes-november-25-balance-druid-alterac-valley-riding",
  date: "2026-11-25",
  source: "blizzard",
  topic: "news",
  url: `${HOTFIX}/16`,
  image: media.newsHotfixesNov25.src,
  imageAlt: media.newsHotfixesNov25.alt,
  guides: ["wow-forever-races-classes", "wow-forever-legacy-system", "wow-forever-zones-dungeons-raids"],
  title: n(
    "WoW Forever hotfixes of 25 November: Balance Druid rework, tougher Alterac Valley, riding skill fixed",
    "Hotfix di WoW Forever del 25 novembre: Druido Balance rivisto, Alterac Valley più dura, cavalcature corrette",
    "Hotfixes de WoW Forever del 25 de noviembre: Druida Balance renovado, Alterac Valley más dura y equitación",
  ),
  metaTitle: n(
    "WoW Forever hotfixes, 25 November: Balance Druid, AV",
    "WoW Forever, hotfix del 25 novembre: Druido Balance",
    "WoW Forever, hotfixes del 25 de noviembre: Druida Balance",
  ),
  summary: n(
    "With the hotfixes of 25 November 2026 Blizzard reworked the Balance Druid talents in WoW Forever: Improved Starfire drops to 2 points, Moonfury is replaced by Dreamstate, Eclipse adds up to 20% critical strike chance to Wrath and Moonkin Form now gives 10% more Arcane and Nature damage. Alterac Valley now rewards towers, graveyards and mines more than killing the General, whose reputation and Honor were cut sharply, and its NPCs hit harder. Paladins and Warlocks finally get Journeyman Riding from their class mount quests.",
    "Con gli hotfix del 25 novembre 2026 Blizzard ha rivisto i talenti del Druido Balance in WoW Forever: Improved Starfire scende a 2 punti, Moonfury lascia il posto a Dreamstate, Eclipse aggiunge fino al 20% di critico a Wrath e la Moonkin Form dà il 10% di danni Arcane e Nature in più. Alterac Valley premia ora torri, cimiteri e miniere più dell'uccisione del Generale, la cui reputazione e Honor sono state tagliate di molto, e i suoi PNG colpiscono più forte. Paladini e Stregoni ottengono finalmente il Journeyman Riding dalle missioni della cavalcatura di classe.",
    "Con los hotfixes del 25 de noviembre de 2026 Blizzard renovó los talentos del druida Balance en WoW Forever: Improved Starfire baja a 2 puntos, Moonfury deja su sitio a Dreamstate, Eclipse añade hasta un 20% de crítico a Wrath y la Moonkin Form da un 10% más de daño Arcane y Nature. Alterac Valley premia ahora torres, cementerios y minas más que matar al General, cuya reputación y honor se recortaron mucho, y sus PNJ pegan más fuerte. Paladines y brujos reciben por fin Journeyman Riding con las misiones de su montura de clase.",
  ),
  description: n(
    "WoW Forever hotfixes of 25 November: Balance Druid talents reworked, Alterac Valley rewards objectives, Journeyman Riding for Paladins and Warlocks.",
    "Hotfix di WoW Forever del 25 novembre: talenti del Druido Balance rivisti, Alterac Valley premia gli obiettivi, Journeyman Riding a Paladini e Stregoni.",
    "Hotfixes de WoW Forever del 25 de noviembre: talentos del druida Balance renovados, Alterac Valley premia objetivos, Journeyman Riding a paladines y brujos.",
  ),
  highlights: {
    en: [
      { label: "Balance Druid", text: "Starlight Wrath, Moon and Stars, Dreamstate; Improved Starfire down to 2 points", anchor: "balance-druid" },
      { label: "Talent reset", text: "Druids with 3 or more points in Improved Starfire get their talents reset", anchor: "balance-druid" },
      { label: "Alterac Valley", text: "less for the General, more for objectives, stronger NPCs, 20-minute long-match bonus", anchor: "alterac-valley" },
      { label: "Riding", text: "Journeyman Riding from the Paladin and Warlock mount quests, free for those who already did them", anchor: "riding" },
      { label: "Rogue", text: "poisons and Blinding Powder temporarily bind on pickup", anchor: "classes" },
      { label: "Celebration Pass", text: "365 days of game time at a discount until 7 December", anchor: "celebration-pass" },
    ],
    it: [
      { label: "Druido Balance", text: "Starlight Wrath, Moon and Stars, Dreamstate; Improved Starfire scende a 2 punti", anchor: "druido-balance" },
      { label: "Talenti azzerati", text: "chi ha 3 o più punti in Improved Starfire si ritrova i talenti azzerati", anchor: "druido-balance" },
      { label: "Alterac Valley", text: "meno per il Generale, più per gli obiettivi, PNG più forti, bonus di partita lunga a 20 minuti", anchor: "alterac-valley" },
      { label: "Cavalcature", text: "Journeyman Riding dalle missioni di Paladini e Stregoni, gratis per chi le ha già fatte", anchor: "cavalcature" },
      { label: "Ladro", text: "veleni e Blinding Powder temporaneamente vincolati alla raccolta", anchor: "classi" },
      { label: "Celebration Pass", text: "365 giorni di tempo di gioco scontati fino al 7 dicembre", anchor: "celebration-pass" },
    ],
    es: [
      { label: "Druida Balance", text: "Starlight Wrath, Moon and Stars, Dreamstate; Improved Starfire baja a 2 puntos", anchor: "druida-balance" },
      { label: "Talentos reiniciados", text: "quien tenga 3 o más puntos en Improved Starfire verá sus talentos reiniciados", anchor: "druida-balance" },
      { label: "Alterac Valley", text: "menos por el General, más por los objetivos, PNJ más fuertes, bonificación de partida larga a 20 minutos", anchor: "alterac-valley" },
      { label: "Equitación", text: "Journeyman Riding con las misiones de paladines y brujos, gratis para quien ya las hizo", anchor: "equitacion" },
      { label: "Pícaro", text: "venenos y Blinding Powder ligados al recogerlos de forma temporal", anchor: "clases" },
      { label: "Celebration Pass", text: "365 días de tiempo de juego con descuento hasta el 7 de diciembre", anchor: "celebration-pass" },
    ],
  },
  body: n(
    `On 25 November Blizzard published three things for WoW Forever on its forums: a post on the [Balance Druid](${DRUID}) at 18:32 UTC (19:32 CET), one on [Alterac Valley](${AV}) at 19:42 UTC with a follow-up at 23:04 UTC, and the full [25 November entry](${HOTFIX}/16) of the hotfix thread at 23:25 UTC (00:25 CET on 26 November). All the changes are already live. Talent, spell, item and quest names stay in English, as in the game. The previous entry is in our article on the [hotfixes of 23 November](/en/news/hotfixes-november-23-world-buffs-mortal-strike-uldaman).

## Balance Druid: fewer points to make Starfire work {#balance-druid}

This is the only real redesign of the day. Blizzard explains the goal: Balance should need fewer points to make Starfire viable, depend less on Nature's Focus in the Restoration tree, flow better thanks to more Wrath critical strikes, and feel stronger in Moonkin Form. The result, in Blizzard's words, is more free points for optional utility talents.

| Talent | What changes |
|---|---|
| Improved Wrath → **Starlight Wrath** | renamed; it also cuts Starfire's cast time by 0.1 to 0.5 seconds |
| Improved Moonfire → **Moon and Stars** | renamed; it also gives Starfire a 50/100% chance not to lose cast time when you take damage |
| **Improved Starfire** | down to 2 points (was 5), with an 8/15% chance |
| **Eclipse** | also raises Wrath's critical strike chance by 7/13/20%, at all times |
| Moonfury → **Dreamstate** | Moonfury is removed; Dreamstate gives you 20% to 100% of the benefit of Innervate when you cast it on someone else |
| **Moonkin Form** | also increases Arcane and Nature damage by 10% while in the form |

Two notes of ours. First, the Improved Starfire line does not say what the 8/15% chance is for; in the old version of the talent the chance was to stun the target, and the cast-time reduction has moved to Starlight Wrath. Second, the old Moonfury gave up to 10% more Arcane and Nature damage for 5 points: that bonus now comes from Moonkin Form, so the 5 points are free for something else.

**If you had 3 or more points in Improved Starfire**, all your talent points are reset and returned to you: open the talent window and spend them again. The site's [talent builder](/en/builder) does not yet show these changes, so check the in-game tooltips before you copy a Balance build.

Two Druid bug fixes complete the picture: Hurricane now lands its final hit, and Genesis now increases the damage of Hurricane and the healing of Tranquility.

## Alterac Valley: objectives over the General {#alterac-valley}

Blizzard [writes](${AV}) that many matches were ending without anyone capturing an objective, with both sides rushing the enemy General. The aim is to keep Honor per match about the same while raising reputation, even if matches last longer. The changes:

- reputation and Honor for **killing the enemy General are significantly reduced**;
- **towers, graveyards and mines** give more reputation, and slightly more Honor;
- killing enemy NPCs gives more reputation, and **Lieutenants** give much more;
- the bonus for a "long match" now starts after **20 minutes** (it was 60, as in Classic Era), and pays a lot of reputation if you hold graveyards and mines when the match ends;
- all enemy creatures in Alterac Valley have **more health and damage**;
- Warmasters and Marshals now go back if pulled out of their rooms and aggro from further away;
- Generals, Warmasters and Marshals are **stronger while the objectives stand**: the buff starts at 4 stacks, lasts 20 minutes and loses a stack for every objective taken;
- Generals hit harder, are as sturdy as intended and see stealthed players from further away;
- Storm Crystals and other quest items you leave on the ground are no longer mailed to you.

In practice, in our reading: a straight run to the General now pays little and is harder; taking towers and graveyards first is the expected route. Blizzard warns that reputation will vary with how well your team does on towers and capture points. More on PvP progression in our article on [ranks and Honor](/en/news/pvp-ranks-honor-rank-points-seasons-journey-video).

## Riding: the Paladin and Warlock bug is fixed {#riding}

On 23 November Blizzard had confirmed a bug with the class mount quests. Now Paladins and Warlocks get **Journeyman Riding** when they complete "Justice and Retribution" (Forsaken Paladins), "Judgment and Redemption" (Dwarf and Human Paladins) or "Dreadsteed of Xoroth" (all Warlocks).

If you finished the quest before the fix, speak to the right trainer for a special dialogue option that teaches Journeyman Riding **for free**:

- Danitha Morr in Bandarion Keep, for Forsaken Paladins;
- Lord Grayson Shadowbreaker in the Stormwind Cathedral, for Alliance Paladins;
- Zevrost at the Cleft of Shadow in Orgrimmar, for Horde Warlocks;
- Ursula Deline at the Slaughtered Lamb in Stormwind, for Alliance Warlocks.

## Classes {#classes}

- **Hunter**: pets no longer have 0% critical strike chance on melee attacks. For Beast Mastery, Summoned Hawks attack their target even with the pet on Passive, can be dismissed with Dismiss Pet or by right-clicking their icon, and had about 5% too little critical strike chance.
- **Paladin**: Judgements on enemies refresh again from attacks below 20 seconds, and Exorcism can now crit. For Holy, Oath of Light lasts 60 minutes.
- **Rogue**: **all poisons and Blinding Powder are temporarily bind on pickup** while Blizzard fixes a bug (which one is not said), so for now you cannot trade or sell them. Poised is now removed when you cast Sap or Distract in Stealth.
- **Shaman**: Chain Lightning now uses Clearcasting when you also have 5 stacks of Maelstrom Weapon.
- **Warlock**: pets no longer have 0% critical strike chance on melee attacks; Succubus and Incubus had 5% too much.
- **Warrior, Arms**: Weaponmaster reapplies after you die in a battleground.

## Legacy system {#legacy}

- PvP Legacy achievements grant credit again after you reach Exalted.
- "Lord Valthalak Laid to Rest" now gives Legacy credit.
- Reinforce now really reduces durability loss by 8% to 40%.
- The Quick and the Dead now makes Shadowform, Moonkin Form, Travel Form and Trueshot Aura free, as intended.

More in our [Legacy system guide](/en/guides/wow-forever-legacy-system).

## Dungeons, items and enchanting {#items}

- **Blackfathom Deeps**: the Altar of the Deeps can be used again after 3 seconds and grants the Blessing of Blackfathom.
- **Sunken Temple**: the Avatar of Hakkar no longer fails to spawn.
- **Items**: The Blackblade of Shahram's haste now works, but only on its wielder; Libram of Law affects Judgement of Command; Chained Essence of Eranikus no longer goes through immunities; Blackhand's Breadth can no longer be resisted; the Night Watchman's Torch works again while mounted or casting; Unerring Purpose sells for more than 2 copper; Totem of the Storm is now called Totem of the Maelstrom.
- **Enchanting**: the Revelation weapon enchant now rolls its chance once per wave of an area spell, not for every target hit, and no longer covers the whole duration of channelled spells. In practice it gets weaker on area spells.

More on instances in our [guide to zones, dungeons and raids](/en/guides/wow-forever-zones-dungeons-raids).

## Quests, NPCs and reputations {#quests}

- **Silithus**: Encrypted Twilight Texts drop again for "Secret Communication", "True Believers" and "Still Believing". Blizzard says the repeatable version for Cenarion Circle reputation is unavailable **on purpose**; "Still Believing" can still lead to recipes through a later mail.
- **Western Plaguelands**: the Scarlet Illusion of "Scarlet Subterfuge" lasts one hour (was 30 minutes).
- **Searing Gorge**: on "STOLEN: Smithing Tuyere and Lookout's Spyglass" there are more Steamsmiths.
- **Mount Hyjal**: on "Blind Vengeance" the Explosive Runeshard no longer boosts the Felguard Sentinel's Mortal Strike.
- **Hunter**: the Horde version of "Saving the Best for Last" can be completed.
- **NPCs**: the Magram Village centaurs in Desolace respawn faster, the Lost Knight in Duskwood no longer spawns inside a tree, and Clubtoe in Sunnyglade (Riverglades) no longer flags you for PvP.
- **Reputations**: Gnomes, Humans, Night Elves and Dwarves can no longer go to war with the Kirin Tor, and Dwarves can no longer go to war with the Wildhammer Clan.

Not in this round: the proper fix for lockboxes, which Blizzard called temporary on 23 November.

## Also on 25 November: the WoW Celebration Pass {#celebration-pass}

To thank players for the launch of WoW Forever, Blizzard [put on sale](${PASS}) **365 days of WoW game time** at a special price, called the WoW Celebration Pass. It can also be added to existing game time or a subscription, and it covers WoW Forever, WoW Classic and modern WoW up to the content before Midnight. The offer runs **until 7 December 2026**. The article does not give the price: it is in the shop and may vary by region. For editions and access there is our [guide to editions and prices](/en/guides/wow-forever-editions-prices).`,
    `Il 25 novembre Blizzard ha pubblicato sui forum tre cose per WoW Forever: un post sul [Druido Balance](${DRUID}) alle 18:32 UTC (le 19:32 in Italia), uno su [Alterac Valley](${AV}) alle 19:42 UTC con un seguito alle 23:04 UTC, e la [voce del 25 novembre](${HOTFIX}/16) del thread degli hotfix alle 23:25 UTC (le 00:25 del 26 novembre in Italia). Tutte le modifiche sono già attive. I nomi di talenti, incantesimi, oggetti e missioni restano in inglese, come nel gioco. La voce precedente è nel nostro articolo sugli [hotfix del 23 novembre](/it/news/hotfixes-november-23-world-buffs-mortal-strike-uldaman).

## Druido Balance: meno punti per far funzionare Starfire {#druido-balance}

È l'unica vera revisione della giornata. Blizzard spiega l'obiettivo: il Balance deve spendere meno punti per rendere utile Starfire, dipendere meno da Nature's Focus nell'albero Restoration, avere un ritmo migliore grazie a più critici di Wrath e sentirsi più forte in Moonkin Form. Il risultato, dice Blizzard, è avere più punti liberi per i talenti di utilità.

| Talento | Cosa cambia |
|---|---|
| Improved Wrath → **Starlight Wrath** | rinominato; riduce anche il tempo di lancio di Starfire da 0,1 a 0,5 secondi |
| Improved Moonfire → **Moon and Stars** | rinominato; dà anche a Starfire il 50/100% di probabilità di non perdere tempo di lancio quando si subiscono danni |
| **Improved Starfire** | scende a 2 punti (erano 5), con l'8/15% di probabilità |
| **Eclipse** | aumenta anche il critico di Wrath del 7/13/20%, sempre |
| Moonfury → **Dreamstate** | Moonfury è tolto; Dreamstate vi dà dal 20% al 100% del beneficio di Innervate quando lo lanciate su qualcun altro |
| **Moonkin Form** | aumenta anche i danni Arcane e Nature del 10% finché si è nella forma |

Due note nostre. La prima: la riga su Improved Starfire non dice a cosa serva l'8/15% di probabilità; nella versione vecchia del talento era la probabilità di stordire il bersaglio, e la riduzione del tempo di lancio è passata a Starlight Wrath. La seconda: il vecchio Moonfury dava fino al 10% di danni Arcane e Nature in più per 5 punti; quel bonus ora arriva dalla Moonkin Form, quindi quei 5 punti restano liberi.

**Se avevate 3 o più punti in Improved Starfire**, tutti i punti talento vengono azzerati e restituiti: aprite la finestra dei talenti e spendeteli di nuovo. Il [builder dei talenti](/it/builder) del sito non ha ancora questi cambi, quindi controllate i tooltip in gioco prima di copiare una build Balance.

Completano il quadro due correzioni per il Druido: Hurricane ora mette a segno l'ultimo colpo e Genesis aumenta i danni di Hurricane e le cure di Tranquility.

## Alterac Valley: gli obiettivi prima del Generale {#alterac-valley}

Blizzard [scrive](${AV}) che molte partite finivano senza che nessuno conquistasse un obiettivo, con le due fazioni lanciate verso il Generale nemico. L'idea è lasciare l'Honor per partita più o meno uguale e alzare la reputazione, anche se le partite durano di più. Le modifiche:

- reputazione e Honor per **l'uccisione del Generale nemico sono molto ridotte**;
- **torri, cimiteri e miniere** danno più reputazione e un po' più di Honor;
- uccidere i PNG nemici dà più reputazione, e i **Lieutenant** ne danno molta di più;
- il bonus di "partita lunga" parte ora dopo **20 minuti** (erano 60, come in Classic Era) e dà molta reputazione se a fine partita tenete cimiteri e miniere;
- tutte le creature nemiche di Alterac Valley hanno **più vita e fanno più danni**;
- Warmaster e Marshal tornano indietro se li tirate fuori dalle loro stanze e attaccano da più lontano;
- Generali, Warmaster e Marshal sono **più forti finché gli obiettivi restano in piedi**: il buff parte da 4 cariche, dura 20 minuti e perde una carica per ogni obiettivo preso;
- i Generali fanno più danni, sono resistenti come previsto e vedono da più lontano chi è in Stealth;
- Storm Crystals e gli altri oggetti delle missioni lasciati a terra non arrivano più per posta.

In pratica, secondo noi: correre dritti al Generale ora rende poco ed è più difficile; la strada prevista è prendere prima torri e cimiteri. Blizzard avverte che la reputazione cambierà a seconda di come va la squadra su torri e punti di cattura. Sulla progressione PvP c'è il nostro articolo su [gradi e Honor](/it/news/pvp-ranks-honor-rank-points-seasons-journey-video).

## Cavalcature: corretto il bug di Paladini e Stregoni {#cavalcature}

Il 23 novembre Blizzard aveva confermato un bug delle missioni della cavalcatura di classe. Ora Paladini e Stregoni ottengono il **Journeyman Riding** quando completano "Justice and Retribution" (Paladini Forsaken), "Judgment and Redemption" (Paladini Nani e Umani) o "Dreadsteed of Xoroth" (tutti gli Stregoni).

Se avevate già finito la missione prima della correzione, parlate con il personaggio giusto: avrete un'opzione di dialogo speciale che insegna il Journeyman Riding **gratis**:

- Danitha Morr a Bandarion Keep, per i Paladini Forsaken;
- Lord Grayson Shadowbreaker nella Cattedrale di Stormwind, per i Paladini dell'Alleanza;
- Zevrost al Cleft of Shadow di Orgrimmar, per gli Stregoni dell'Orda;
- Ursula Deline al Slaughtered Lamb di Stormwind, per gli Stregoni dell'Alleanza.

## Classi {#classi}

- **Cacciatore**: i famigli non hanno più lo 0% di critico negli attacchi in mischia. Per Beast Mastery, i Summoned Hawks attaccano il bersaglio anche con il famiglio su Passive, si congedano con Dismiss Pet o con il tasto destro sulla loro icona, e avevano circa il 5% di critico in meno del previsto.
- **Paladino**: i Judgement sui nemici si rinnovano di nuovo con gli attacchi sotto i 20 secondi ed Exorcism ora può fare critico. Per Holy, Oath of Light dura 60 minuti.
- **Ladro**: **tutti i veleni e la Blinding Powder sono temporaneamente vincolati alla raccolta** mentre Blizzard corregge un bug (non dice quale), quindi per ora non si possono scambiare né vendere. Poised ora viene tolto quando lanciate Sap o Distract in Stealth.
- **Sciamano**: Chain Lightning ora consuma Clearcasting anche quando avete 5 cariche di Maelstrom Weapon.
- **Stregone**: i famigli non hanno più lo 0% di critico negli attacchi in mischia; Succubus e Incubus avevano il 5% di troppo.
- **Guerriero, Arms**: Weaponmaster si riattiva dopo la morte in un campo di battaglia.

## Sistema Legacy {#legacy}

- Le imprese Legacy del PvP danno di nuovo il credito dopo l'Exalted.
- "Lord Valthalak Laid to Rest" ora dà il credito Legacy.
- Reinforce riduce davvero la perdita di durabilità dall'8% al 40%.
- The Quick and the Dead rende gratuite Shadowform, Moonkin Form, Travel Form e Trueshot Aura, come previsto.

Altro nella nostra [guida al sistema Legacy](/it/guides/wow-forever-legacy-system).

## Dungeon, oggetti e incantamento {#oggetti}

- **Blackfathom Deeps**: l'Altar of the Deeps si può riusare dopo 3 secondi e dà la Blessing of Blackfathom.
- **Sunken Temple**: l'Avatar of Hakkar compare di nuovo.
- **Oggetti**: la velocità della Blackblade of Shahram ora funziona, ma solo su chi la impugna; Libram of Law agisce su Judgement of Command; Chained Essence of Eranikus non passa più attraverso le immunità; Blackhand's Breadth non si può più resistere; la Night Watchman's Torch si usa di nuovo in sella o mentre si lancia; Unerring Purpose si vende per più di 2 rame; Totem of the Storm si chiama ora Totem of the Maelstrom.
- **Incantamento**: l'incantamento d'arma Revelation tira la sua probabilità una volta per ondata degli incantesimi ad area, non per ogni bersaglio colpito, e non copre più tutta la durata degli incantesimi canalizzati. In pratica, sugli incantesimi ad area rende meno.

Altro sulle istanze nella nostra [guida a zone, dungeon e incursioni](/it/guides/wow-forever-zones-dungeons-raids).

## Missioni, PNG e reputazioni {#missioni}

- **Silithus**: gli Encrypted Twilight Texts cadono di nuovo per "Secret Communication", "True Believers" e "Still Believing". Blizzard dice che la versione ripetibile per la reputazione del Cenarion Circle non c'è **di proposito**; "Still Believing" può comunque portare a ricette con una lettera che arriva dopo.
- **Western Plaguelands**: la Scarlet Illusion di "Scarlet Subterfuge" dura un'ora (erano 30 minuti).
- **Searing Gorge**: in "STOLEN: Smithing Tuyere and Lookout's Spyglass" ci sono più Steamsmith.
- **Mount Hyjal**: in "Blind Vengeance" l'Explosive Runeshard non potenzia più la Mortal Strike della Felguard Sentinel.
- **Cacciatore**: la versione dell'Orda di "Saving the Best for Last" si può completare.
- **PNG**: i centauri di Magram Village a Desolace ricompaiono prima, il Lost Knight di Duskwood non compare più dentro un albero e Clubtoe a Sunnyglade (Riverglades) non vi segna più per il PvP.
- **Reputazioni**: Gnomi, Umani, Elfi della Notte e Nani non possono più mettersi in guerra con il Kirin Tor, e i Nani non possono più farlo con il Wildhammer Clan.

Non c'è in questo giro la correzione vera dei lockbox, che Blizzard il 23 novembre aveva definito temporanea.

## Sempre il 25 novembre: il WoW Celebration Pass {#celebration-pass}

Per ringraziare i giocatori del lancio di WoW Forever, Blizzard [ha messo in vendita](${PASS}) **365 giorni di tempo di gioco** di WoW a un prezzo speciale, con il nome di WoW Celebration Pass. Si può aggiungere anche a un tempo di gioco o a un abbonamento già attivo e vale per WoW Forever, WoW Classic e il WoW moderno fino ai contenuti prima di Midnight. L'offerta dura **fino al 7 dicembre 2026**. L'articolo non dà il prezzo: è nel negozio e può cambiare da regione a regione. Per edizioni e accesso c'è la nostra [guida a edizioni e prezzi](/it/guides/wow-forever-editions-prices).`,
    `El 25 de noviembre Blizzard publicó en sus foros tres cosas para WoW Forever: un mensaje sobre el [druida Balance](${DRUID}) a las 18:32 UTC (19:32 en España), otro sobre [Alterac Valley](${AV}) a las 19:42 UTC con una continuación a las 23:04 UTC, y la [entrada del 25 de noviembre](${HOTFIX}/16) del hilo de hotfixes a las 23:25 UTC (00:25 del 26 de noviembre en España). Todos los cambios ya están activos. Los nombres de talentos, hechizos, objetos y misiones se quedan en inglés, como en el juego. La entrada anterior está en nuestro artículo sobre los [hotfixes del 23 de noviembre](/es/news/hotfixes-november-23-world-buffs-mortal-strike-uldaman).

## Druida Balance: menos puntos para que Starfire funcione {#druida-balance}

Es el único rediseño de verdad del día. Blizzard explica el objetivo: Balance debe gastar menos puntos para que Starfire sea útil, depender menos de Nature's Focus en el árbol Restoration, tener mejor ritmo gracias a más críticos de Wrath y sentirse más fuerte en Moonkin Form. El resultado, según Blizzard, son más puntos libres para talentos de utilidad.

| Talento | Qué cambia |
|---|---|
| Improved Wrath → **Starlight Wrath** | cambia de nombre; también reduce el tiempo de lanzamiento de Starfire de 0,1 a 0,5 segundos |
| Improved Moonfire → **Moon and Stars** | cambia de nombre; también da a Starfire un 50/100% de probabilidad de no perder tiempo de lanzamiento al recibir daño |
| **Improved Starfire** | baja a 2 puntos (eran 5), con un 8/15% de probabilidad |
| **Eclipse** | también aumenta el crítico de Wrath un 7/13/20%, siempre |
| Moonfury → **Dreamstate** | Moonfury desaparece; Dreamstate te da del 20% al 100% del beneficio de Innervate cuando lo lanzas sobre otra persona |
| **Moonkin Form** | también aumenta el daño Arcane y Nature un 10% mientras estás en la forma |

Dos notas nuestras. La primera: la línea de Improved Starfire no dice para qué es el 8/15% de probabilidad; en la versión antigua del talento era la probabilidad de aturdir al objetivo, y la reducción del tiempo de lanzamiento ha pasado a Starlight Wrath. La segunda: el antiguo Moonfury daba hasta un 10% más de daño Arcane y Nature por 5 puntos; esa bonificación viene ahora de la Moonkin Form, así que esos 5 puntos quedan libres.

**Si tenías 3 o más puntos en Improved Starfire**, todos tus puntos de talento se reinician y se te devuelven: abre la ventana de talentos y vuelve a gastarlos. El [creador de talentos](/es/builder) del sitio todavía no tiene estos cambios, así que mira los tooltips del juego antes de copiar una build de Balance.

Completan el cuadro dos correcciones para el druida: Hurricane ya acierta su último golpe y Genesis aumenta el daño de Hurricane y la sanación de Tranquility.

## Alterac Valley: los objetivos antes que el General {#alterac-valley}

Blizzard [escribe](${AV}) que muchas partidas terminaban sin que nadie capturara un objetivo, con los dos bandos corriendo hacia el General enemigo. La idea es mantener el honor por partida más o menos igual y subir la reputación, aunque las partidas duren más. Los cambios:

- la reputación y el honor por **matar al General enemigo se reducen mucho**;
- **torres, cementerios y minas** dan más reputación y algo más de honor;
- matar PNJ enemigos da más reputación, y los **Lieutenant** dan mucha más;
- la bonificación de "partida larga" empieza ahora a los **20 minutos** (eran 60, como en Classic Era) y da mucha reputación si al final de la partida tienes cementerios y minas;
- todas las criaturas enemigas de Alterac Valley tienen **más salud y hacen más daño**;
- los Warmaster y Marshal vuelven atrás si los sacas de sus salas y atacan desde más lejos;
- Generales, Warmaster y Marshal son **más fuertes mientras los objetivos sigan en pie**: el buff empieza con 4 acumulaciones, dura 20 minutos y pierde una por cada objetivo tomado;
- los Generales hacen más daño, aguantan como estaba previsto y detectan desde más lejos a quien va en sigilo;
- los Storm Crystals y otros objetos de misión que dejes en el suelo ya no llegan por correo.

En la práctica, según nuestra lectura: ir directo al General ahora rinde poco y es más difícil; lo previsto es tomar antes torres y cementerios. Blizzard avisa de que la reputación variará según cómo le vaya a tu equipo con torres y puntos de captura. Sobre la progresión JcJ está nuestro artículo sobre [rangos y honor](/es/news/pvp-ranks-honor-rank-points-seasons-journey-video).

## Equitación: corregido el error de paladines y brujos {#equitacion}

El 23 de noviembre Blizzard había confirmado un error en las misiones de la montura de clase. Ahora paladines y brujos reciben **Journeyman Riding** al completar "Justice and Retribution" (paladines Forsaken), "Judgment and Redemption" (paladines enanos y humanos) o "Dreadsteed of Xoroth" (todos los brujos).

Si ya habías terminado la misión antes de la corrección, habla con el personaje adecuado: tendrás una opción de diálogo especial que enseña Journeyman Riding **gratis**:

- Danitha Morr en Bandarion Keep, para paladines Forsaken;
- Lord Grayson Shadowbreaker en la Catedral de Stormwind, para paladines de la Alianza;
- Zevrost en el Cleft of Shadow de Orgrimmar, para brujos de la Horda;
- Ursula Deline en el Slaughtered Lamb de Stormwind, para brujos de la Alianza.

## Clases {#clases}

- **Cazador**: las mascotas ya no tienen un 0% de crítico en los ataques cuerpo a cuerpo. Para Beast Mastery, los Summoned Hawks atacan a su objetivo aunque la mascota esté en Passive, se despiden con Dismiss Pet o con clic derecho en su icono, y tenían un 5% menos de crítico del previsto.
- **Paladín**: los Judgement sobre enemigos vuelven a renovarse con los ataques por debajo de 20 segundos y Exorcism ya puede ser crítico. Para Holy, Oath of Light dura 60 minutos.
- **Pícaro**: **todos los venenos y la Blinding Powder se ligan al recogerlos de forma temporal** mientras Blizzard corrige un error (no dice cuál), así que por ahora no se pueden comerciar ni vender. Poised ahora se quita al lanzar Sap o Distract en sigilo.
- **Chamán**: Chain Lightning ya consume Clearcasting aunque tengas 5 acumulaciones de Maelstrom Weapon.
- **Brujo**: las mascotas ya no tienen un 0% de crítico en los ataques cuerpo a cuerpo; Succubus e Incubus tenían un 5% de más.
- **Guerrero, Arms**: Weaponmaster vuelve a aplicarse tras morir en un campo de batalla.

## Sistema Legacy {#legacy}

- Los logros Legacy de JcJ vuelven a dar crédito después de Exalted.
- "Lord Valthalak Laid to Rest" ya da crédito Legacy.
- Reinforce reduce de verdad la pérdida de durabilidad del 8% al 40%.
- The Quick and the Dead hace gratuitas Shadowform, Moonkin Form, Travel Form y Trueshot Aura, como estaba previsto.

Más en nuestra [guía del sistema Legacy](/es/guides/wow-forever-legacy-system).

## Mazmorras, objetos y encantamiento {#objetos}

- **Blackfathom Deeps**: el Altar of the Deeps se puede volver a usar a los 3 segundos y da la Blessing of Blackfathom.
- **Sunken Temple**: el Avatar of Hakkar vuelve a aparecer.
- **Objetos**: la celeridad de The Blackblade of Shahram ya funciona, pero solo para quien la empuña; Libram of Law afecta a Judgement of Command; Chained Essence of Eranikus ya no atraviesa inmunidades; Blackhand's Breadth ya no se puede resistir; la Night Watchman's Torch vuelve a usarse montado o lanzando hechizos; Unerring Purpose se vende por más de 2 cobres; Totem of the Storm se llama ahora Totem of the Maelstrom.
- **Encantamiento**: el encantamiento de arma Revelation tira su probabilidad una vez por oleada de los hechizos de área, no por cada objetivo alcanzado, y ya no cubre toda la duración de los hechizos canalizados. En la práctica, rinde menos con hechizos de área.

Más sobre las instancias en nuestra [guía de zonas, mazmorras y bandas](/es/guides/wow-forever-zones-dungeons-raids).

## Misiones, PNJ y reputaciones {#misiones}

- **Silithus**: los Encrypted Twilight Texts vuelven a caer para "Secret Communication", "True Believers" y "Still Believing". Blizzard dice que la versión repetible para la reputación del Cenarion Circle no está disponible **a propósito**; "Still Believing" puede dar recetas con un correo que llega más tarde.
- **Western Plaguelands**: la Scarlet Illusion de "Scarlet Subterfuge" dura una hora (eran 30 minutos).
- **Searing Gorge**: en "STOLEN: Smithing Tuyere and Lookout's Spyglass" hay más Steamsmith.
- **Mount Hyjal**: en "Blind Vengeance" el Explosive Runeshard ya no potencia el Mortal Strike del Felguard Sentinel.
- **Cazador**: la versión de la Horda de "Saving the Best for Last" ya se puede completar.
- **PNJ**: los centauros de Magram Village en Desolace reaparecen antes, el Lost Knight de Duskwood ya no aparece dentro de un árbol y Clubtoe en Sunnyglade (Riverglades) ya no te marca para JcJ.
- **Reputaciones**: gnomos, humanos, elfos de la noche y enanos ya no pueden declarar la guerra al Kirin Tor, y los enanos ya no pueden hacerlo con el Wildhammer Clan.

En esta tanda no está el arreglo definitivo de los lockboxes, que Blizzard llamó temporal el 23 de noviembre.

## También el 25 de noviembre: el WoW Celebration Pass {#celebration-pass}

Para agradecer el lanzamiento de WoW Forever, Blizzard [puso a la venta](${PASS}) **365 días de tiempo de juego** de WoW a un precio especial, con el nombre de WoW Celebration Pass. También se puede sumar a un tiempo de juego o a una suscripción ya activos y vale para WoW Forever, WoW Classic y el WoW moderno hasta el contenido anterior a Midnight. La oferta dura **hasta el 7 de diciembre de 2026**. El artículo no da el precio: está en la tienda y puede variar según la región. Para ediciones y acceso está nuestra [guía de ediciones y precios](/es/guides/wow-forever-editions-prices).`,
  ),
  faq: {
    en: [
      {
        q: "What changed for Balance Druids in WoW Forever on 25 November?",
        a: "With the hotfixes of 25 November 2026 Improved Wrath became Starlight Wrath and also speeds up Starfire, Improved Moonfire became Moon and Stars, Improved Starfire went from 5 to 2 points, Eclipse adds up to 20% critical strike chance to Wrath, Moonfury was replaced by Dreamstate and Moonkin Form gives 10% more Arcane and Nature damage.",
      },
      {
        q: "Why were my Druid talents reset in WoW Forever?",
        a: "Because you had 3 or more points in Improved Starfire. On 25 November 2026 the talent went down to 2 points, so Blizzard reset and returned all talent points of Druids above that limit. Spend them again in the talent window.",
      },
      {
        q: "What changed in Alterac Valley in WoW Forever?",
        a: "Since 25 November 2026 killing the enemy General gives much less reputation and Honor, while towers, graveyards, mines and Lieutenants give more. Enemy NPCs have more health and damage, Generals are stronger while objectives stand, and the long-match reputation bonus starts after 20 minutes instead of 60.",
      },
      {
        q: "How do Paladins and Warlocks get Journeyman Riding in WoW Forever?",
        a: "By completing their class mount quest: Justice and Retribution, Judgment and Redemption or Dreadsteed of Xoroth. Since 25 November 2026 it grants Journeyman Riding; if you finished it earlier, Danitha Morr, Lord Grayson Shadowbreaker, Zevrost or Ursula Deline teach it for free.",
      },
    ],
    it: [
      {
        q: "Cosa è cambiato per il Druido Balance in WoW Forever il 25 novembre?",
        a: "Con gli hotfix del 25 novembre 2026 Improved Wrath è diventato Starlight Wrath e accelera anche Starfire, Improved Moonfire è diventato Moon and Stars, Improved Starfire è sceso da 5 a 2 punti, Eclipse aggiunge fino al 20% di critico a Wrath, Moonfury è stato sostituito da Dreamstate e la Moonkin Form dà il 10% di danni Arcane e Nature in più.",
      },
      {
        q: "Perché i talenti del mio Druido sono stati azzerati in WoW Forever?",
        a: "Perché avevate 3 o più punti in Improved Starfire. Il 25 novembre 2026 il talento è sceso a 2 punti, quindi Blizzard ha azzerato e restituito tutti i punti talento dei Druidi sopra quel limite. Basta spenderli di nuovo nella finestra dei talenti.",
      },
      {
        q: "Cosa è cambiato ad Alterac Valley in WoW Forever?",
        a: "Dal 25 novembre 2026 uccidere il Generale nemico dà molta meno reputazione e Honor, mentre torri, cimiteri, miniere e Lieutenant ne danno di più. I PNG nemici hanno più vita e fanno più danni, i Generali sono più forti finché gli obiettivi restano in piedi e il bonus di reputazione per le partite lunghe parte dopo 20 minuti invece di 60.",
      },
      {
        q: "Come ottengono il Journeyman Riding Paladini e Stregoni in WoW Forever?",
        a: "Completando la missione della cavalcatura di classe: Justice and Retribution, Judgment and Redemption o Dreadsteed of Xoroth. Dal 25 novembre 2026 dà il Journeyman Riding; chi l'aveva già finita lo impara gratis da Danitha Morr, Lord Grayson Shadowbreaker, Zevrost o Ursula Deline.",
      },
    ],
    es: [
      {
        q: "¿Qué cambió para el druida Balance en WoW Forever el 25 de noviembre?",
        a: "Con los hotfixes del 25 de noviembre de 2026 Improved Wrath pasó a ser Starlight Wrath y también acelera Starfire, Improved Moonfire pasó a ser Moon and Stars, Improved Starfire bajó de 5 a 2 puntos, Eclipse añade hasta un 20% de crítico a Wrath, Moonfury fue sustituido por Dreamstate y la Moonkin Form da un 10% más de daño Arcane y Nature.",
      },
      {
        q: "¿Por qué se reiniciaron los talentos de mi druida en WoW Forever?",
        a: "Porque tenías 3 o más puntos en Improved Starfire. El 25 de noviembre de 2026 el talento bajó a 2 puntos, así que Blizzard reinició y devolvió todos los puntos de talento de los druidas por encima de ese límite. Vuelve a gastarlos en la ventana de talentos.",
      },
      {
        q: "¿Qué cambió en Alterac Valley en WoW Forever?",
        a: "Desde el 25 de noviembre de 2026 matar al General enemigo da mucha menos reputación y honor, mientras que torres, cementerios, minas y Lieutenant dan más. Los PNJ enemigos tienen más salud y daño, los Generales son más fuertes mientras los objetivos sigan en pie y la bonificación de reputación por partida larga empieza a los 20 minutos en vez de 60.",
      },
      {
        q: "¿Cómo consiguen Journeyman Riding paladines y brujos en WoW Forever?",
        a: "Completando la misión de su montura de clase: Justice and Retribution, Judgment and Redemption o Dreadsteed of Xoroth. Desde el 25 de noviembre de 2026 da Journeyman Riding; quien ya la había terminado lo aprende gratis con Danitha Morr, Lord Grayson Shadowbreaker, Zevrost o Ursula Deline.",
      },
    ],
  },
};

export default item;

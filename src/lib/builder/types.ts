/**
 * Tipi del builder di ForeverMeta (classe + razza + talenti di World of Warcraft: Forever).
 *
 * Il modello è quello degli alberi "Classic": tre alberi per classe, griglia di 7 file × 4 colonne, un talento ha da 1
 * a 5 ranghi, ogni fila si sblocca con 5 punti nell'albero per ogni fila sopra (fila 0 libera, fila 6 da 30 punti), e
 * un talento può richiedere un altro talento al rango massimo (le frecce). Blizzard ha detto che Forever tiene «la
 * stessa struttura e lo stesso numero di file» di Classic, con i talenti di soglia a 11, 21 e 31 punti più uno nuovo
 * a 16 (Blizzard News, "Create the Hero You Want to Be", 22/09/2026). Le regole stanno in engine.ts; qui solo le forme.
 */

export type ClassId = "druid" | "hunter" | "mage" | "paladin" | "priest" | "rogue" | "shaman" | "warlock" | "warrior";

export type RaceId =
  | "human"
  | "dwarf"
  | "night-elf"
  | "gnome"
  | "skyborne-high-order"
  | "orc"
  | "undead"
  | "tauren"
  | "troll"
  | "skyborne-windshaper";

export type Faction = "alliance" | "horde";

export type Role = "tank" | "healer" | "melee" | "ranged" | "caster";

/** Un talento di un albero, com'è scritto nei dati di `src/lib/data/talents/`. */
export type Talent = {
  /** identificatore stabile dentro la classe (kebab-case del nome inglese) */
  id: string;
  /** nome inglese, come nel gioco */
  name: string;
  /** fila 0–6 e colonna 0–3 della griglia */
  row: number;
  col: number;
  /** ranghi massimi, 1–5 */
  maxRank: number;
  /** testo di ogni rango (inglese, come nel gioco): `ranks.length === maxRank` */
  ranks: string[];
  /** talento richiesto (freccia): al rango massimo, salvo `rank` */
  requires?: { id: string; rank?: number };
  /** nome dell'icona del gioco (senza estensione), solo se il file sta in public/talents/icons/ */
  icon?: string;
  /** confronto con Classic Era (1.12), dalla fonte dei dati: stato e, se diverso, il testo del rango 1 di Classic */
  classic?: { status: "same" | "changed" | "moved" | "new"; text?: string };
};

/** Un talento di Classic che in Forever non c'è più (o è diventato di base): si elenca sotto l'albero. */
export type RemovedTalent = { name: string; maxRank: number; text?: string; row?: number };

export type TalentTree = {
  /** identificatore dentro la classe (kebab-case del nome inglese) */
  id: string;
  /** nome inglese dell'albero (la specializzazione), come nel gioco */
  name: string;
  /** ruolo prevalente dell'albero, per le etichette e i filtri */
  role: Role;
  /** i talenti nell'ordine del file dei dati: è anche l'ordine delle cifre nel codice condivisibile (un talento
   *  nuovo si accoda, uno spostato di casella tiene il posto, così i codici vecchi restano leggibili) */
  talents: Talent[];
  removed?: RemovedTalent[];
};

/** Provenienza e stato di verifica dei dati di un albero o di una classe: si mostra in fondo alla pagina. */
export type TalentSource = {
  /** etichetta della fonte, in inglese (nome del dataset o "read in the game") */
  label: string;
  url?: string;
  /** licenza dichiarata dalla fonte, se c'è */
  license?: string;
  /** giorno della lettura o dell'importazione (ISO) */
  fetched: string;
  /** riga di attribuzione chiesta dalla licenza, com'è scritta dalla fonte */
  attribution?: string;
  /** nota della fonte su questa classe (es. hotfix applicati sopra la build letta) */
  note?: string;
  /** true solo se ogni talento è stato confrontato nel gioco (come le carte della collezione su OriginsMeta) */
  verifiedInGame: boolean;
};

export type ClassTalents = {
  classId: ClassId;
  /** versione del gioco cui i dati si riferiscono (patch o build), per le etichette */
  gameVersion: string;
  source: TalentSource;
  trees: [TalentTree, TalentTree, TalentTree];
};

/** Lo stato di una build nel builder: i ranghi messi, per id di talento (solo quelli > 0). */
export type Build = {
  classId: ClassId;
  raceId: RaceId | null;
  /** livello del personaggio per cui si costruisce, da `FIRST_TALENT_LEVEL` a `MAX_LEVEL` */
  level: number;
  ranks: Record<string, number>;
};

export type BuildIssueCode =
  | "unknownTalent"
  | "rankOverMax"
  | "rowLocked"
  | "prerequisiteMissing"
  | "tooManyPoints"
  | "overLevel"
  | "raceNotAllowed"
  | "levelOutOfRange";

export type BuildIssue = { code: BuildIssueCode; talentId?: string; treeId?: string };

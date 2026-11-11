import type { Locale } from "./i18n";

/**
 * Testi di /account/tracker e della sezione in /account (ForeverMeta Companion, 11/11/2026), nelle tre lingue; stanno
 * fuori dai dizionari perché li usa anche il riquadro del codice, che è un componente client. `en` è il tipo di
 * riferimento. Nomi propri dell'app e dell'addon in inglese, come i nomi del gioco.
 */
export type TrackerLabels = typeof EN;

const EN = {
  meta: {
    title: "ForeverMeta Companion",
    description: "Link ForeverMeta Companion to your account: the app sends the items, sources and auction prices that the ForeverMeta Tracker addon records while you play.",
  },
  back: "Your account",
  kicker: "ForeverMeta Companion",
  h1: "Link the app to your account",
  intro:
    "ForeverMeta Tracker is an addon that writes down what you see while you play WoW: Forever: loot, vendors, quest rewards, item tooltips, linked items and the auction house searches you run. ForeverMeta Companion is the app on your PC that reads that file and sends it to the site, where it becomes a shared item database.",
  sends: "What it sends: items with their stats, where they drop or who sells them, the zone, your character's level, and auction prices (lowest, median, quantity).",
  never: "What it never sends: names of other players, sellers, chat authors or crafters, your character's name or your Battle.net account. The addon never runs anything on its own: auction scans are always started by you.",
  testing: "The app is in testing: for now only players who got it from the ForeverMeta team use it.",
  unavailable: "This section is not active yet.",
  link: {
    title: "Link a PC",
    steps: ["Create a code with the button below.", "Open ForeverMeta Companion on your PC and type the code.", "The app is linked: from now on it sends what the addon records."],
    create: "Create a code",
    creating: "Creating…",
    yourCode: "Your code",
    expires: "Valid until {time}, once.",
    expired: "The code has expired: create a new one.",
    copy: "Copy",
    copied: "Copied",
    errors: {
      too_many_codes: "Too many codes in the last hour: try again later.",
      unavailable: "This section is not active yet.",
      not_authenticated: "Sign in again to create a code.",
      error: "Something went wrong: try again.",
    },
  },
  devices: {
    title: "Linked PCs",
    empty: "No PC linked yet.",
    linked: "Linked",
    lastSync: "last data",
    never: "no data yet",
    revoke: "Unlink",
    done: "PC unlinked: its app no longer sends data.",
    error: "The PC could not be unlinked: try again.",
  },
  contributions: {
    title: "Your contributions",
    intro: "Rows that reached the site from your PCs. They become credits on the item pages when those pages open.",
    empty: "Nothing yet: play with the addon on, then log out or type /reload so the game saves the file.",
    today: "Today (UTC)",
    total: "Total",
    kinds: { added: "Rows used", items: "Item details", opens: "Loot windows", loot: "Looted items", vendor: "Vendor items", quest: "Quest rewards", inspect: "Inspected items", chat: "Linked items", prices: "Auction prices" },
  },
  account: {
    title: "ForeverMeta Companion",
    text: "Link the app that sends what the ForeverMeta Tracker addon records while you play.",
    open: "Open",
  },
};

const IT: TrackerLabels = {
  meta: {
    title: "ForeverMeta Companion",
    description: "Collega ForeverMeta Companion al tuo account: l'app manda gli oggetti, le provenienze e i prezzi dell'asta che l'addon ForeverMeta Tracker registra mentre giochi.",
  },
  back: "Il tuo account",
  kicker: "ForeverMeta Companion",
  h1: "Collega l'app al tuo account",
  intro:
    "ForeverMeta Tracker è un addon che annota quello che vedi mentre giochi a WoW: Forever: il bottino, i mercanti, le ricompense delle missioni, i tooltip degli oggetti, gli oggetti linkati in chat e le ricerche all'asta che lanci tu. ForeverMeta Companion è l'app sul PC che legge quel file e lo manda al sito, dove diventa un database degli oggetti costruito insieme.",
  sends: "Cosa manda: gli oggetti con le statistiche, dove cadono o chi li vende, la zona, il livello del tuo personaggio e i prezzi dell'asta (minimo, mediana, quantità).",
  never: "Cosa non manda mai: nomi di altri giocatori, venditori, autori dei messaggi o artigiani, il nome del tuo personaggio o il tuo account Battle.net. L'addon non fa niente da solo: le scansioni dell'asta le lanci sempre tu.",
  testing: "L'app è in prova: per ora la usa solo chi l'ha ricevuta dalla squadra di ForeverMeta.",
  unavailable: "Questa sezione non è ancora attiva.",
  link: {
    title: "Collega un PC",
    steps: ["Crea un codice con il tasto qui sotto.", "Apri ForeverMeta Companion sul PC e scrivi il codice.", "L'app è collegata: da ora manda quello che l'addon registra."],
    create: "Crea il codice",
    creating: "Un attimo…",
    yourCode: "Il tuo codice",
    expires: "Vale fino alle {time}, una volta sola.",
    expired: "Il codice è scaduto: creane uno nuovo.",
    copy: "Copia",
    copied: "Copiato",
    errors: {
      too_many_codes: "Troppi codici nell'ultima ora: riprova più tardi.",
      unavailable: "Questa sezione non è ancora attiva.",
      not_authenticated: "Rifai l'accesso per creare un codice.",
      error: "Qualcosa non ha funzionato: riprova.",
    },
  },
  devices: {
    title: "PC collegati",
    empty: "Nessun PC collegato.",
    linked: "Collegato il",
    lastSync: "ultimi dati",
    never: "nessun dato ancora",
    revoke: "Scollega",
    done: "PC scollegato: la sua app non manda più dati.",
    error: "Non è stato possibile scollegare il PC: riprova.",
  },
  contributions: {
    title: "I tuoi contributi",
    intro: "Le righe arrivate al sito dai tuoi PC. Diventano crediti sulle pagine degli oggetti quando apriranno.",
    empty: "Ancora niente: gioca con l'addon attivo, poi esci dal gioco o scrivi /reload perché il gioco salvi il file.",
    today: "Oggi (UTC)",
    total: "Totale",
    kinds: { added: "Righe usate", items: "Dettagli degli oggetti", opens: "Finestre di bottino", loot: "Oggetti raccolti", vendor: "Oggetti dei mercanti", quest: "Ricompense delle missioni", inspect: "Oggetti ispezionati", chat: "Oggetti linkati", prices: "Prezzi dell'asta" },
  },
  account: {
    title: "ForeverMeta Companion",
    text: "Collega l'app che manda al sito quello che l'addon ForeverMeta Tracker registra mentre giochi.",
    open: "Apri",
  },
};

const ES: TrackerLabels = {
  meta: {
    title: "ForeverMeta Companion",
    description: "Vincula ForeverMeta Companion a tu cuenta: la app envía los objetos, las fuentes y los precios de la casa de subastas que el addon ForeverMeta Tracker registra mientras juegas.",
  },
  back: "Tu cuenta",
  kicker: "ForeverMeta Companion",
  h1: "Vincula la app a tu cuenta",
  intro:
    "ForeverMeta Tracker es un addon que anota lo que ves mientras juegas a WoW: Forever: el botín, los vendedores, las recompensas de misión, los tooltips de los objetos, los objetos enlazados en el chat y las búsquedas en la casa de subastas que lanzas tú. ForeverMeta Companion es la app del PC que lee ese archivo y lo envía al sitio, donde se convierte en una base de datos de objetos hecha entre todos.",
  sends: "Qué envía: los objetos con sus estadísticas, dónde caen o quién los vende, la zona, el nivel de tu personaje y los precios de la subasta (mínimo, mediana, cantidad).",
  never: "Qué no envía nunca: nombres de otros jugadores, vendedores, autores de mensajes o artesanos, el nombre de tu personaje ni tu cuenta de Battle.net. El addon no hace nada por su cuenta: los escaneos de la subasta los lanzas siempre tú.",
  testing: "La app está en pruebas: por ahora solo la usa quien la ha recibido del equipo de ForeverMeta.",
  unavailable: "Esta sección todavía no está activa.",
  link: {
    title: "Vincula un PC",
    steps: ["Crea un código con el botón de abajo.", "Abre ForeverMeta Companion en tu PC y escribe el código.", "La app queda vinculada: desde ahora envía lo que registra el addon."],
    create: "Crear el código",
    creating: "Un momento…",
    yourCode: "Tu código",
    expires: "Vale hasta las {time}, una sola vez.",
    expired: "El código ha caducado: crea uno nuevo.",
    copy: "Copiar",
    copied: "Copiado",
    errors: {
      too_many_codes: "Demasiados códigos en la última hora: inténtalo más tarde.",
      unavailable: "Esta sección todavía no está activa.",
      not_authenticated: "Vuelve a iniciar sesión para crear un código.",
      error: "Algo ha fallado: inténtalo de nuevo.",
    },
  },
  devices: {
    title: "PC vinculados",
    empty: "Ningún PC vinculado.",
    linked: "Vinculado el",
    lastSync: "últimos datos",
    never: "sin datos todavía",
    revoke: "Desvincular",
    done: "PC desvinculado: su app ya no envía datos.",
    error: "No se ha podido desvincular el PC: inténtalo de nuevo.",
  },
  contributions: {
    title: "Tus contribuciones",
    intro: "Las filas que han llegado al sitio desde tus PC. Serán créditos en las páginas de los objetos cuando abran.",
    empty: "Nada todavía: juega con el addon activo y luego sal del juego o escribe /reload para que el juego guarde el archivo.",
    today: "Hoy (UTC)",
    total: "Total",
    kinds: { added: "Filas usadas", items: "Detalles de objetos", opens: "Ventanas de botín", loot: "Objetos despojados", vendor: "Objetos de vendedores", quest: "Recompensas de misión", inspect: "Objetos inspeccionados", chat: "Objetos enlazados", prices: "Precios de la subasta" },
  },
  account: {
    title: "ForeverMeta Companion",
    text: "Vincula la app que envía al sitio lo que el addon ForeverMeta Tracker registra mientras juegas.",
    open: "Abrir",
  },
};

export const trackerLabels: Record<Locale, TrackerLabels> = { en: EN, it: IT, es: ES };

/** "{time}" e simili → valori. */
export function fillTracker(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, k: string) => (k in vars ? String(vars[k]) : m));
}

export type ContributionKind = keyof TrackerLabels["contributions"]["kinds"];
export const CONTRIBUTION_KINDS = Object.keys(EN.contributions.kinds) as ContributionKind[];

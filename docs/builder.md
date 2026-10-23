# Builder: classe, razza e talenti

Il builder di ForeverMeta (`/builder`, dal 22/10/2026) è il calcolatore di talenti di World of Warcraft: Forever con
la scelta della classe e della razza. Una pagina per classe (`/<lingua>/builder/<classe>`, statica, nove classi × tre
lingue), la build nell'hash del link e nel browser, nessun account. La pubblicazione delle build con guida e voti
arriva con il lancio del gioco (04/11/2026) e riusa il modello dei mazzi della community di OriginsMeta.

## Dove sta che cosa

| Pezzo | File |
| --- | --- |
| Tipi (talento, albero, build) | `src/lib/builder/types.ts` |
| Regole (punti per livello, file, prerequisiti, cascate, pulizia) | `src/lib/builder/engine.ts` + `engine.test.ts` |
| Codice condivisibile `FW1.<classe>.<razza>.<livello>.<a1>.<a2>.<a3>` | `src/lib/builder/code.ts` (test in `engine.test.ts`) |
| Salvataggio nel browser (una build per classe) | `src/lib/builder/storage.ts` |
| Dati delle pagine (opzioni delle razze, indirizzi, fonti) | `src/lib/builder/page.ts` |
| Classi (nomi ufficiali EN/IT/ES, colori, alberi) | `src/lib/data/classes.ts` |
| Razze (fazione, combinazioni, razziali) | `src/lib/data/races.ts` |
| Alberi dei talenti, un JSON per classe | `src/lib/data/talents/<classe>.json` + `index.ts` + `talents.test.ts` |
| Icone dei talenti (56 px) | `public/talents/icons/<nome>.jpg` |
| Importazione dei dati e delle icone | `scripts/import-talents.mjs` |
| Testi dell'interfaccia (EN/IT/ES) | `src/lib/builderLabels.ts`; i testi delle pagine in `dictionaries/*.ts` (`builder`) |
| Componenti | `src/components/builder/` (`TalentBuilder`, `TalentTree`, `TalentDetail`, `RacePicker`, `SharePanel`, `ClassStrip`) |
| Stili (`.tb-*`) | `src/app/builder.css` |
| Pagine | `src/app/[locale]/(site)/builder/page.tsx` e `builder/[class]/page.tsx` |

## I dati e da dove vengono

- **Classi, razze, combinazioni e razziali** vengono dalle fonti ufficiali Blizzard (Blizzard News del 22/09/2026 "Create
  the Hero You Want to Be" e "Meet the New Skyborne", le Development Notes della beta del 15–16/10/2026 per le razziali
  cambiate). Le descrizioni brevi delle razziali in italiano e spagnolo sono nostre; i nomi restano in inglese.
- **Gli alberi dei talenti** (465 talenti, nomi, posizioni, ranghi, testo per rango, prerequisiti, confronto con Classic)
  vengono dai JSON pubblici di talentsforever.com, pubblicati con licenza **CC BY 4.0** (pagine /about e /terms del sito,
  campi `license` e `attribution` del file). Il sito li legge dal client della beta e dichiara la build (`gameVersion`,
  oggi 1.60.1.70425 del 20/10/2026). **Non sono verificati nel gioco**: ogni pagina lo dice in fondo (`dataNotVerified`),
  con l'attribuzione richiesta dalla licenza e il link. Dopo il lancio si confrontano nel gioco, come per le carte su
  OriginsMeta, e `verifiedInGame` passa a true. Testi, nomi e icone restano di Blizzard Entertainment: il footer porta il
  notice e la non affiliazione.
- **Le icone** sono le icone del gioco servite dal CDN pubblico di Blizzard (`render.worldofwarcraft.com`), scaricate una
  volta e ospitate da noi come chiede la guida "Media Documents" dell'API Blizzard (niente hotlink), mai modificate.
  Senza il file dell'icona il builder mostra le iniziali del talento.

Rinnovo dei dati:

```
node scripts/import-talents.mjs --check     # confronta con i file che ci sono, non scrive
node scripts/import-talents.mjs             # scarica data.json e riscrive i nove file
node scripts/import-talents.mjs --icons     # anche le icone mancanti (una alla volta)
```

L'ordine dei talenti in ogni file è l'ordine delle cifre del codice condivisibile: lo script tiene l'ordine già scritto
e accoda i talenti nuovi, così i codici già condivisi restano leggibili. Un talento sparito fa cadere il suo punto
(`sanitize` del motore). Dopo un'importazione: `npm test` (coerenza dei dati), `npm run build`.

## Le regole del motore

- Un punto per livello dal 10, 51 punti al 60 (`pointsAtLevel`); livello necessario = 9 + punti spesi.
- Ogni fila si apre con 5 punti per fila nelle file sopra, nello stesso albero (`rowUnlocked`).
- Un prerequisito (freccia) va al rango massimo, salvo `requires.rank`.
- Togliere un punto è lecito solo se l'albero resta coerente (`canRemove`); altrimenti la **cascata**
  (`removeWithDependents`) toglie anche i punti che ci si appoggiano, dal basso in su, e l'interfaccia lo dice prima.
- Abbassare il livello sotto i punti spesi non toglie nulla: il contatore segna i punti di troppo e offre
  "Togli gli ultimi N punti" (`trimPoints`).
- Una build arrivata da un link o dal browser passa sempre da `sanitize`: i punti impossibili cadono, il livello sale
  se serve, una razza che la classe non può avere sparisce.

## Interazione

Mouse: clic +1, clic destro −1, Maiusc + clic tutti i ranghi, Maiusc + clic destro svuota. Tastiera: frecce nella
griglia (un tab stop per albero), Invio/Spazio +1, Backspace/Canc −1, 0–5 rango esatto, Ctrl+Z / Ctrl+Maiusc+Z
annulla e ripeti. Touch (`pointer: coarse`): tocco +1 e selezione, "−" e "i" sulla cella selezionata, pressione lunga
(400 ms) apre il foglio dei dettagli con +, −, massimo, svuota. Sotto 1024 px gli alberi sono a schede con una barra
fissa in basso (riassunto, punti, livello, Condividi). Ogni azione o rifiuto viene detto nell'area `aria-live`.

Misura (`src/lib/analytics.ts`): `build_share` (method, class), `build_complete` (class), `build_import` (ok).

## Testi dei talenti in italiano e spagnolo (23/10/2026)

Pierluigi: "le abilità sono in inglese e non sono tradotte in lingua, andrebbero messe nelle altre due lingue". I testi
di ogni rango sono tradotti da noi dall'inglese del client (il client di Forever non ha l'italiano; i testi spagnoli
ufficiali non li abbiamo), con i nomi di talenti e abilità in inglese e il glossario dei termini di gioco del brief
(`Attack Power` → Potenza d'attacco / Poder de ataque, `Rage` → Ira, `Haste` → Celerità / Celeridad, ecc.). Stanno in
`src/lib/data/talents/i18n/<classe>.json` (`{ it: { <id>: [ranghi] }, es: {…} }`), scritti da
`node scripts/talent-translations.mjs <cartella> --apply` dai file `tr-<classe>.json` di una traduzione (controlli: id,
numero di ranghi, numeri uguali all'inglese); `--check` li confronta con i dati attuali dopo un'importazione (un
talento nuovo senza traduzione tiene il testo inglese). `localizeTalents(data, locale)` (`src/lib/data/talents/index.ts`)
mette i testi tradotti al posto degli inglesi per le pagine it ed es; la pagina lo dice in fondo (`textsOurs`). Il
confronto con Classic nel dettaglio resta in inglese.

## Build pubblicate (23/10/2026)

Pierluigi: "attiviamo la pubblicazione delle build sì da subito". Sul modello dei mazzi della community di OriginsMeta.

| Pezzo | File |
| --- | --- |
| Regole pure (campi, limiti, slug, soglia di indicizzazione, tabella mancante) | `src/lib/community/builds.ts` + `builds.test.ts` |
| Letture (elenco, scheda, le mie, sitemap) | `src/lib/community/buildQueries.ts` |
| Server Action (pubblica, modifica, stato, elimina, vota) | `src/lib/community/buildActions.ts` |
| Dati delle pagine (classi, razze, autore, link al builder) | `src/lib/community/buildView.ts` |
| Testi EN/IT/ES | `src/lib/buildLabels.ts` (componenti) e `dictionaries/*.ts` (`builds`) |
| Componenti | `src/components/builds/` (`BuildForm`, `BuildList`, `BuildTrees` in sola lettura, `BuildStars`, `BuildOwnerActions`, `BuildExtras`) |
| Pagine | `/builds` (ISR 300), `/builds/[slug]` (ISR 60), `/builds/publish` e `/builds/[slug]/edit` (dinamiche, noindex, nel matcher del proxy), sezione `#builds` di `/account` |
| Sitemap | `/<lingua>/sitemap-builds.xml` (`buildsSitemapResponse`), nell'indice |
| SQL | blocco `-- ===== 23/10/2026: BUILD PUBBLICATE =====` in fondo a `supabase/schema.sql` |

Giro: builder → "Pubblica la tua build" (link a `/builds/publish#<codice>`; senza accesso la pagina mostra il link al
login che riporta qui, hash compreso) → modulo (nome, scopo, lingua della guida, riassunto, come si gioca, punti di
forza, punti deboli, note) → Server Action `publishBuild`: rilegge il codice con il motore (classe, razza, livello,
punti), lo salva in forma canonica, slug dal nome più quattro caratteri casuali → scheda `/builds/<slug>?new=1`.
Regole: testo semplice (niente HTML né Markdown), riassunto 40–600 caratteri, "come si gioca" 100–6.000, le altre
sezioni facoltative; una build senza punti non si pubblica; 20 build pubblicate per iscritto (trigger
`enforce_build_limit`); voti 1–5 uno per iscritto e per build, mai sulla propria (policy); le letture pubbliche
filtrano su `status = 'published'`; la scheda è indicizzata solo nella lingua della guida e da 75 parole
(`buildIndexable`), nelle altre lingue è noindex e dice in che lingua è la guida. Eventi `build_published` e
`build_vote`. Niente annuncio su Discord finché ForeverMeta non ha i suoi webhook.

**Il sito regge senza migrazione**: se la tabella non c'è, l'elenco e il modulo dicono "non ancora attivo"
(`tableMissing`). **Migrazione da lanciare** dalla cartella del repository, con la password del database in
`.env.local` (PowerShell: un comando per riga):

```
cd C:\Users\User\Desktop\forevermeta
node scripts\db-migrate.mjs
```

Verifica dopo: `/it/builds` risponde con l'elenco vuoto ("Nessuna build pubblicata ancora") invece del messaggio
"non ancora attive"; una build pubblicata dal builder compare in `/account#builds` e in `/it/builds`.

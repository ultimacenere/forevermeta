@AGENTS.md

# ForeverMeta — note per Claude

Sito fan non ufficiale su **World of Warcraft: Forever** (Blizzard). Sottoprogetto di OriginsMeta: stessa proprietà (Pierluigi Cella), stesso metodo, motore del sito copiato da OriginsMeta l'08/10/2026. Repository GitHub `ultimacenere/forevermeta`, **pubblico** (scelta di Pierluigi del 09/10/2026, come originsmeta): mai segreti nel codice né nei commit, e i piani di prodotto stanno nella KB, non in `docs/`.

KB di progetto (stato, decisioni, domini, ricerche, log): `G:\Il mio Drive\OriginsMeta\30_ForeverMeta\00_KB\_kb_master_forevermeta.md`, da leggere a inizio sessione; a fine sessione si aggiornano §1 (Stato) e §9 (Log). La KB di OriginsMeta (`G:\Il mio Drive\OriginsMeta\00_KB\_kb_master_originsmeta.md`) vale per il motore comune.

## Stato del codice

- È ancora **il codice di OriginsMeta**: testi, dati, dizionari, dominio e grafica parlano di Origins TCG. Cosa va adattato, in che ordine, è in `docs/adattamento.md`. Finché un pezzo non è adattato, non si pubblica.
- La guida tecnica del motore è quella di OriginsMeta, copiata in `docs/motore-originsmeta-CLAUDE.md` e `docs/motore-originsmeta-README.md`: vale per l'architettura e le convenzioni, **non** per le regole editoriali, che sono quelle qui sotto.
- Scollegato da OriginsMeta: nessun default per Supabase (`src/lib/supabase/env.ts`) né per GA4 (`NEXT_PUBLIC_GA_ID`). Senza variabili d'ambiente la community e GA4 sono spenti. Mai rimettere URL, chiavi o ID dei servizi di OriginsMeta.

## Collegamento con OriginsMeta

- Remote `upstream` = `https://github.com/ultimacenere/originsmeta.git`, solo in lettura (push disattivato). Le correzioni al motore fatte su OriginsMeta si portano con `git fetch upstream` e `git cherry-pick <commit>` (le storie sono separate: niente merge). Ogni porting va nel log della KB con i due hash.
- Supabase, Vercel, GA4, Search Console, IndexNow e Discord sono **separati** da quelli di OriginsMeta.
- Il materiale ufficiale di Koin Games non si usa mai qui (l'autorizzazione di Koin vale solo per OriginsMeta).

## Regole del progetto (dai rapporti del 26 e 27/09/2026, KB §7)

- Rispondere e commentare in italiano.
- Niente dati inventati e niente testi generati in serie: testi firmati da chi gioca, con data di verifica; "verificato" e "non verificato" sempre distinti.
- Blizzard non dà permessi ai siti fan. Copertine da screenshot fatti in gioco; trailer solo incorporati; immagini del press kit solo dopo un sì scritto di pr@blizzard.com; loghi Blizzard mai nell'identità del sito; footer con non affiliazione a Blizzard Entertainment, riga di copyright e credit line dei marchi, in ogni lingua. Nessun marchio Blizzard nei domini.
- Dati di gioco: mai scraping di Wowhead o wago.tools, mai testi Blizzard copiati; datamining solo dopo un parere legale (decisione di Pierluigi).
- Lingue: l'italiano spiega un gioco che si gioca in inglese (client senza italiano: nomi inglesi, glossario EN→IT); lo spagnolo usa i testi ufficiali e ha due varianti (es-ES, es-MX).
- Prima di ogni push: `npm run build` deve passare. Push su `main` solo su richiesta di Pierluigi.

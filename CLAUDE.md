@AGENTS.md

# ForeverMeta — note per Claude

Sito fan non ufficiale su **World of Warcraft: Forever** (Blizzard), online dal 10/10/2026 su https://forevermeta.me in tre lingue (en/it/es). Proprietario: Pierluigi Cella. **Progetto autonomo dal 22/10/2026** (Pierluigi: "il progetto forevermeta deve vivere in una sua repository, altrimenti è un casino, spostalo fuori da originsmeta e rendilo autonomo"): repository GitHub `ultimacenere/forevermeta`, **pubblico** (scelta di Pierluigi del 09/10/2026, come originsmeta: mai segreti nel codice né nei commit, i piani di prodotto stanno nella KB e non in `docs/`), cartella `C:\Users\User\Desktop\forevermeta`, progetto Claude a sé. È nato dal motore di OriginsMeta (copia pulita dell'08/10/2026) e ne condivide proprietà e metodo, ma nel lavoro di tutti i giorni non ha niente in comune: sessioni, worktree, memoria, servizi e deploy sono suoi.

KB di progetto (stato, decisioni, domini, ricerche, log): `G:\Il mio Drive\OriginsMeta\30_ForeverMeta\00_KB\_kb_master_forevermeta.md`, da leggere a inizio sessione; a fine sessione si aggiornano §1 (Stato) e §9 (Log). Materiale Blizzard in `30_ForeverMeta\10_Materiale_Blizzard\`. Sul Drive la cartella sta ancora dentro quella di OriginsMeta, e il Cervello (`40_Cervello\`) è comune ai due siti: è l'unica cosa condivisa.

## Sessioni Claude

- Si lavora **solo** aprendo questa cartella come progetto nell'app Claude (`C:\Users\User\Desktop\forevermeta`): i worktree nascono in `.claude/worktrees/` di questo repository (cartella ignorata da git) e la memoria sta in `C:\Users\User\.claude\projects\C--Users-User-Desktop-forevermeta\memory\`. Fino al 22/10/2026 le sessioni partivano dal progetto originsmeta (quattro worktree `wow-*` di quel repository), con il CLAUDE.md e la memoria di Origins caricati e gli hook che bloccavano le scritture fuori dal worktree: è il "casino" che ha portato alla separazione. Se una sessione su ForeverMeta parte per sbaglio dal progetto originsmeta, dirlo subito a Pierluigi e fermarsi.
- Branch: `main` è la produzione (Vercel pubblica da lì), `anteprima` è l'anteprima (sito aperto, `FOREVERMETA_OPEN=1` solo in Preview). Prima di ogni push `npm run build` deve passare; push su `main` solo su richiesta esplicita di Pierluigi (comando pronto per lui: `git -C C:\Users\User\Desktop\forevermeta push origin anteprima:main`).
- I worktree nascono senza `node_modules`: `npm ci --no-audit --no-fund` prima della prima build.

## Collegamento con OriginsMeta (solo il motore)

- Remote `upstream` = `https://github.com/ultimacenere/originsmeta.git`, solo in lettura (push disattivato) e, dal 22/10/2026, limitato a `main` (`remote.upstream.fetch = +refs/heads/main:refs/remotes/upstream/main`: un fetch non porta più i cento branch di lavoro di Origins; su un clone nuovo le due impostazioni vanno rifatte nel `.git/config`). Le correzioni al motore fatte su OriginsMeta si portano con `git fetch upstream` e `git cherry-pick <commit>` (le storie sono separate: niente merge). Ogni porting va nel log della KB con i due hash.
- La guida tecnica del motore è quella di OriginsMeta, copiata in `docs/motore-originsmeta-CLAUDE.md` e `docs/motore-originsmeta-README.md`: vale per l'architettura e le convenzioni, **non** per le regole editoriali, che sono quelle qui sotto. Che cosa del motore è ancora di Origins e che cosa è stato adattato sta in `docs/adattamento.md`.
- Supabase (`jncrmiazefxzdxywsdga`), Vercel (progetto `forevermeta`), GA4, Search Console, IndexNow e Discord sono **separati** da quelli di OriginsMeta. Mai rimettere URL, chiavi o ID dei servizi di OriginsMeta. Scelte di prodotto che collegano i due siti e restano come sono (decisioni del 10/10/2026): il sito si presenta come "fatto dalla squadra di OriginsMeta" (dizionari, `parentOrganization` in `src/lib/jsonld/entities.ts`, profilo dell'autore), il Discord è quello di OriginsMeta (`src/lib/discord.ts`) e il contatto della privacy è staff@originsmeta.com finché non c'è una casella sul dominio (`src/lib/privacyText.ts`).
- Il materiale ufficiale di Koin Games non si usa mai qui (l'autorizzazione di Koin vale solo per OriginsMeta) e niente di Blizzard entra nel repository di OriginsMeta.

## Regole del progetto (dai rapporti del 26 e 27/09/2026, KB §7)

- Rispondere e commentare in italiano.
- Niente dati inventati e niente testi generati in serie: testi firmati da chi gioca, con data di verifica; "verificato" e "non verificato" sempre distinti.
- Blizzard non dà permessi ai siti fan. Copertine da screenshot fatti in gioco o dalle immagini del pacco stampa "WoW Forever Reveal" archiviato sul Drive, usate come contenuto con il credito (decisione di Pierluigi del 10/10/2026, regole d'uso nel `LEGGIMI.md` di quella cartella; il permesso scritto di Blizzard resta da chiedere, Pierluigi scrive a Tobias Garsten); trailer solo incorporati; loghi Blizzard mai nell'identità del sito; footer con non affiliazione a Blizzard Entertainment, riga di copyright e credit line dei marchi, in ogni lingua. Nessun marchio Blizzard nei domini.
- Dati di gioco: mai scraping di Wowhead o wago.tools, mai testi Blizzard copiati; datamining solo dopo un parere legale (decisione di Pierluigi).
- Lingue: l'italiano spiega un gioco che si gioca in inglese (client senza italiano: nomi inglesi, glossario EN→IT); lo spagnolo usa i testi ufficiali e ha due varianti (es-ES, es-MX).
- Prima di ogni push: `npm run build` deve passare. Push su `main` solo su richiesta di Pierluigi.

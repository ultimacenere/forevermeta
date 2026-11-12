# Tracker degli oggetti (ForeverMeta Tracker e ForeverMeta Companion)

Guida tecnica della parte sito del tracker degli oggetti di WoW: Forever. Piano, decisioni e stato stanno nella KB
(`G:\Il mio Drive\ForeverMeta\00_KB\_piano_tracker_oggetti_2026-10-24.md`, §1 della KB master); il contratto dei dati
fra addon, app e sito sta nel repository degli addon, `forevermeta-addons/tracker/docs/formato.md`. Fino al 10/11/2026
questo file era la guida del tracker di OriginsMeta, copiata con il motore: la storia sta in upstream.

## Cos'è

Tre pezzi (nomi decisi da Pierluigi l'11/11/2026):
- **ForeverMeta Tracker**, addon Lua nel gioco (cartella `ForeverMetaTracker`, distribuito su CurseForge): annota
  quello che il giocatore vede mentre gioca (bottino, mercanti, ricompense delle missioni, ispezione, oggetti linkati in
  chat, tooltip, ricerche e scansioni dell'asta lanciate da lui) nei suoi SavedVariables, che il gioco scrive sul disco
  al logout, al cambio personaggio e con `/reload`;
- **ForeverMeta Companion**, app Electron sul PC: legge quel file senza eseguirlo e manda le righe nuove al sito;
- **il sito**: `/api/tracker/*` e le tabelle aggregate del blocco `-- ===== 11/11/2026: OGGETTI =====` di
  `supabase/schema.sql`, più la pagina privata `/account/tracker`.

Perché: al lancio Blizzard nasconde le statistiche degli oggetti finché non cadono in gioco, quindi nessuno le può
estrarre dal client; le vede solo chi gioca.

## Regole

1. **Mai nomi di giocatori**: né di altri (venditori dell'asta, autori in chat, ispezionati, chi ha fabbricato un
   oggetto) né del giocatore stesso, né l'account di Battle.net. Il contratto non ha campi per loro; le righe hanno un
   elenco chiuso di chiavi (una chiave in più scarta la riga, in TypeScript e in SQL); le righe del tooltip fra "<" e ">"
   ("<Made by …>", "<Gift from …>") le toglie anche il database.
2. **Nessuna automazione**: la scansione dell'asta la lancia il giocatore; l'addon ascolta e basta (termini di
   Blizzard: niente account che scansionano da soli). Addon gratuito, codice leggibile, niente pubblicità.
3. **Solo aggregati**: nessuna osservazione grezza resta nel database; le righe si fondono all'arrivo (upsert).
4. **Verificato** = segnalato da `tracker_items_verify_min()` utenti diversi (3). Prima resta "segnalato".
5. Le tabelle sono chiuse ad anon e authenticated; si scrive solo con `tracker_items_submit`. Ognuno legge solo i suoi
   contributi. Le letture pubbliche arriveranno con le pagine Oggetti (fase 2), con le loro funzioni.

## Flusso

```
addon ─► SavedVariables ─► Companion ─► POST /api/tracker/items (token) ─► tracker_items_submit ─► tabelle
                              ▲
             codice di /account/tracker ─► POST /api/tracker/link ─► tracker_link_claim ─► token "omt_…"
```

- **Collegamento** (blocco `30/09/2026: TRACKER`, ereditato dal motore e già in produzione): in `/account/tracker`
  "Crea il codice" chiama `tracker_link_code` (8 caratteri, 10 minuti, al massimo 5 l'ora); l'app lo manda a
  `POST /api/tracker/link` con il nome del PC e riceve il token, che cifra sul PC; del token il database tiene
  l'impronta SHA-256; al massimo 10 PC per utente. Si scollega dal sito ("Scollega", `tracker_revoke`) o dall'app
  (`DELETE /api/tracker/link`, `tracker_device_unlink`).
- **Invio**: `POST /api/tracker/items` con `Authorization: Bearer omt_…` e `{v: 1, addon, client, batch}`. La rotta
  controlla la busta e le righe con `src/lib/tracker/items.ts` (`checkItemPayload`, `isItemRow`), manda al database
  solo le righe giuste e i campi noti della busta, e risponde `{added, skipped}` (le righe scartate dalla rotta più
  quelle che il database salta).
- **Errori** (`src/lib/tracker/upload.ts`): `bad_request` 400, `invalid_code` 400, `invalid_token` 401,
  `too_many_devices` 409, `too_many` e `too_many_codes` 429, `unavailable` 503 (funzioni o tabelle che mancano: la
  migrazione non è fatta), `error` 500.

## Limiti

| Cosa | Limite | Dove |
|---|---|---|
| corpo della richiesta | 512 KB | rotta |
| righe per chiamata | 200 | rotta e database |
| voci di prezzo per chiamata (somma di `e`) | 5.000 | rotta e database |
| voci di una riga `ah` | 500 | rotta e database |
| righe per utente al giorno (UTC), anche scartate | 20.000 | database (`contributions.received`) |
| righe `ah` per utente al giorno | 300 | database (`contributions.ah_received`) |

L'app deve quindi mandare le istantanee dell'asta in chiamate di al massimo 10 righe `ah` da 500 voci.

## Tabelle (blocco "11/11/2026: OGGETTI")

- `items`: una riga per chiave di oggetto (`id`, `id:suffisso`, `id:suffisso:bonus.bonus`): nomi e righe del tooltip
  per lingua del client, qualità, livelli, classe, slot, legame, statistiche, build del client dei dettagli, quante
  volte è stato visto, contributori distinti, verificato. I dettagli li riscrive l'ultimo che li manda.
- `item_sources`: oggetto × tipo (`loot`, `vendor`, `quest`, `inspect`, `chat`) × fonte (`npc:<id>`, `obj:<id>`,
  `item:<id>` contenitore aperto dalle borse, `de:<id>` arma o armatura disincantata, `quest:<id>`) × mappa (0 dentro
  le istanze, che in Forever non hanno mappa): quante volte, quantità, livelli del giocatore, prezzo e disponibilità del
  mercante, ricompensa a scelta, contributori, verificato.
- `loot_sources`: finestre di bottino aperte per fonte e mappa, il denominatore delle probabilità di drop
  (`item_sources.seen` / `loot_sources.opens`).
- `tracker_loot_seen`: impronte `g` delle fonti già contate negli ultimi 3 giorni (e `g:chiave` per il loro bottino).
  Lo stesso cadavere aperto da più giocatori del gruppo conta una volta (il primo); il bottino conta solo se l'apertura
  è dello stesso utente e nello stesso momento (5 secondi); un reinvio dello stesso cadavere non conta.
- `auction_prices`: oggetto × regione × reame (`GetRealmName()`; in gioco l'11/11 vale `CAMWOW EU4 Realm 5 PvE`) ×
  fazione × giorno UTC: minimo del giorno, mediana delle mediane delle istantanee (al massimo 48 tenute; le ricerche
  `browse` conoscono solo il minimo e non entrano nelle mediane), quantità massima, campioni. Le aste restano separate
  per fazione finché una prova con un personaggio dell'altra fazione non dice se l'asta è comune.
- `contributions`: utente × giorno: righe ricevute, usate e per tipo (crediti e limiti). La legge solo il proprietario
  (`/account/tracker`).
- `item_contributors`, `item_source_contributors`: chi ha contribuito a un oggetto o a una provenienza, solo per
  contare i distinti; nessun client le legge.

Limiti noti della v0: un reinvio di righe senza impronta (mercanti, missioni, chat, ispezione, prezzi) conta due
volte; i dettagli di un oggetto li può sovrascrivere chiunque abbia un token (la verifica conta le persone, non i
valori). Da rivedere con i primi dati veri.

## Comandi

- Test: `npm test` (comprende `src/lib/tracker/items.test.ts`: righe, busta, codici d'errore, e confronto dei limiti
  e delle chiavi ammesse con il blocco SQL).
- Prova del blocco SQL: su PGlite, con gli stub di auth, il blocco TRACKER e il blocco OGGETTI applicato due volte,
  poi `tracker_items_submit` come anon con tutti i tipi di riga, doppioni, due e tre utenti, limiti, permessi, e il
  confronto riga per riga fra `isItemRow` e `tracker_item_row_ok` (458 righe l'11/11/2026, zero disaccordi). Lo
  script sta nella scratchpad della sessione; si rifà sul modello delle prove dei blocchi precedenti.
- **Migrazione** (la lancia Pierluigi, dal worktree aggiornato con la sua `.env.local`):
  `node scripts/db-migrate.mjs`. Prima della migrazione `/api/tracker/items` risponde 503 `unavailable` e
  `/account/tracker` dice "non ancora attiva" per i contributi (il collegamento dei PC funziona già: il blocco TRACKER
  è in produzione).

## Dopo (fase 2 e oltre, nella KB)

Pagine `/items` e `/items/<id>` con "segnalato/verificato", provenienze e prezzi, letture pubbliche con soglie;
crediti ai contributori e alle community; informativa (`/privacy`) con la sezione del tracker prima di aprire l'app
fuori dalla gilda; file dati di ritorno nell'addon (fase 3).

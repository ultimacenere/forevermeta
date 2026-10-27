# Interfacce condivise

La sezione Interfacce di ForeverMeta (`/interfaces`, dal 24/10/2026) raccoglie i layout dell'interfaccia di World of
Warcraft: Forever condivisi dagli iscritti, "come le build". WoW Forever ha l'Edit Mode di Blizzard con Condividi e
Importa (ramo `forever` del codice dell'interfaccia, note della beta, tester): il layout esce come una riga di testo in
chiaro, senza codice. Al lancio il sito accetta solo questi layout, con 1–4 screenshot obbligatori dell'autore e,
facoltativa, la stringa del Cooldown Manager nativo. Ricerca: `00_KB/_interfacce_condivisione_2026-10-23.md`.

## Dove sta che cosa

| Pezzo | File |
| --- | --- |
| Regole (stringhe del gioco, screenshot, risoluzione e scala, slug, soglia noindex) | `src/lib/community/interfaces.ts` + `interfaces.test.ts` |
| Letture (elenco, scheda, interfacce dell'iscritto, sitemap) | `src/lib/community/interfaceQueries.ts` |
| Server Action (pubblica, modifica, stato, elimina, voto, segnalazione) | `src/lib/community/interfaceActions.ts` |
| Annuncio su Discord alla pubblicazione (spento) | `src/lib/community/interfaceDiscord.ts` |
| Testi dell'interfaccia (EN/IT/ES) | `src/lib/interfaceLabels.ts`; i testi delle pagine in `dictionaries/*.ts` (`interfaces`) |
| Componenti | `src/components/interfaces/` (`InterfaceForm` con il caricamento degli screenshot, `InterfaceList`, `InterfaceView`, `InterfaceExtras`: copia, voti, tasti del proprietario, segnalazione) |
| Stili (`.if-*`) | `src/app/interfaces.css` |
| Pagine | `src/app/[locale]/(site)/interfaces/` (`page`, `[slug]/page`, `publish/page`, `[slug]/edit/page`) |
| Sitemap per lingua | `src/app/[locale]/sitemap-interfaces.xml/route.ts` + `interfacesSitemapResponse` in `src/lib/sitemap.ts` |
| Tabelle, trigger, RLS, bucket | blocco "24/10/2026: INTERFACCE" di `supabase/schema.sql`; tipi in `src/lib/supabase/database.ts` |

## Regole

- **Stringa dell'Edit Mode**: comincia con due numeri (versione del formato e numero degli elementi) separati da uno
  spazio, come controlla wago.io; solo ASCII stampabile, niente `<`, 40–16.000 caratteri. Gli a capo incollati per
  sbaglio diventano spazi. La scheda mostra quanti elementi dichiara la stringa. Nessuna stringa "esportata da Forever"
  era pubblica al 24/10/2026: il controllo è volutamente largo, va ristretto quando ci saranno layout veri.
- **Cooldown Manager** (facoltativo): `versione|Base64`, fino a 32.000 caratteri.
- **Screenshot**: 1–4, caricati dal browser nel bucket pubblico `interface-shots` prima di inviare il modulo, ridotti a
  1920 px di lato lungo e convertiti in WebP (JPEG dove il browser non scrive WebP), percorso `<id>/<uuid>.webp`. La
  policy accetta solo la cartella dell'iscritto e il nome che dà il sito, al massimo 40 file a testa; il trigger
  `guard_interface` rifiuta un'interfaccia con screenshot fuori dalla cartella del proprietario. Gli screenshot tolti in
  modifica e quelli di un'interfaccia eliminata si cancellano dal bucket.
- **Metadati**: classi e ruoli (vuoto = tutti), comandi (mouse e tastiera o gamepad), punto di partenza (preset Modern,
  Classic, da zero), risoluzione (`1920x1080`) e scala dell'interfaccia (0,40–1,20), entrambe facoltative perché non
  stanno nella stringa; addon in testo libero (vuoto = solo interfaccia di Blizzard, filtro "Senza addon"); build del
  gioco salvata dal sito (quella dei dati dei talenti).
- **Voti, segnalazioni, tetto**: 1–5 stelle, mai sulla propria; segnalazioni lette dagli admin; 10 interfacce pubblicate
  per iscritto (trigger).
- **Indicizzazione**: la scheda è indicizzata solo nella lingua della descrizione e da 60 parole; publish ed edit noindex.
- **Discord**: `DISCORD_WEBHOOK_INTERFACES` su Vercel (solo server); senza, niente annunci.
- **Analytics**: `interface_published`, `interface_copy` (layout o cooldown), `interface_vote`.

## Messa in produzione

1. Deploy del codice: senza la tabella le pagine dicono "non ancora attive".
2. Migrazione: `node scripts/db-migrate.mjs` dal checkout con `.env.local`; il blocco crea tabelle, trigger, RLS, il
   bucket `interface-shots` e le sue policy (se lo Storage rifiuta l'SQL, l'avviso dice di crearli dalla dashboard con
   gli stessi valori: pubblico, 3 MB, `image/webp`, `image/png`, `image/jpeg`).
3. Quando esiste il server Discord: webhook in `DISCORD_WEBHOOK_INTERFACES`, poi un deploy.

## Dopo

- Layout di partenza del team al lancio (Modern, Classic, guaritore, tank, gamepad), appena si può esportare da Forever.
- Profili degli addon come allegati (fork di WeakAuras, ElvUI quando esce per Forever, Plater, Details) con l'avviso
  "contiene codice", dipendenze dichiarate e nessuna esecuzione lato server.
- Versioni di un'interfaccia e avviso "pubblicata con la build X" dopo una patch; schema grafico del layout come extra.

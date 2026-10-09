# Adattamento del motore di OriginsMeta a ForeverMeta

Copia fatta l'08/10/2026 da `ultimacenere/originsmeta` al commit `9fdf3fe`. Questo file elenca ciò che è ancora di Origins TCG e va sostituito o tolto. Si aggiorna man mano: una voce fatta si segna con la data e il commit.

## Già fatto nella copia (08/10/2026)

- Tolti: `public/cards/` (immagini delle carte, materiale Koin), `public/media/` (media kit Koin), `public/llms.txt`, il file di verifica di Search Console e la chiave IndexNow di originsmeta.com, `tracker/` (app OriginsMeta Analytics), `docs/testi-ufficiali/`, `docs/contatto-koin.md`.
- `README.md` e `CLAUDE.md` di OriginsMeta spostati in `docs/motore-originsmeta-*.md` come guida del motore.
- Workflow degli annunci Discord spostato in `docs/workflows-da-attivare/` (si rimette in `.github/workflows/` quando esistono i canali e i secret di ForeverMeta).
- Mai più i servizi di OriginsMeta: Supabase punta al progetto di ForeverMeta (`src/lib/supabase/env.ts`, dal 09/10/2026), GA4 non ha default (`src/app/[locale]/layout.tsx`, `.env.example`).
- `npm run build` verde sulla copia l'08/10/2026, senza variabili d'ambiente (community e GA4 spenti). `npm test` non ancora lanciato: i test che controllano immagini, guide e news di Origins possono fallire finché i contenuti non sono sostituiti.

## Cantiere (09/10/2026)

- Finché `FOREVERMETA_OPEN` non vale `1` alla build, ogni indirizzo mostra `public/cantiere.html` (noindex, non affiliato a Blizzard), `robots.txt` è `public/cantiere-robots.txt` (Disallow su tutto) e i redirect del sito sono spenti (`next.config.ts`). Su Vercel: `FOREVERMETA_OPEN=1` solo nell'ambiente Preview, per vedere il lavoro; in Production solo al lancio, su decisione di Pierluigi.
- Tolto il cron di `vercel.json` (`/api/cron/live` ogni 10 minuti): sul piano Hobby di Vercel i cron possono essere al massimo giornalieri e il deploy fallirebbe; e senza community non serve. Si rimette quando c'è Supabase, con il piano adatto.

## Fase 1: infrastruttura (ordine deciso da Pierluigi il 27/09/2026)

1. ~~Repository GitHub `ultimacenere/forevermeta`, pubblico, e primo push~~: fatto il 09/10/2026.
2. Dominio principale **forevermeta.me** (deciso da Pierluigi il 09/10/2026) e DNS; forevermeta.online, .it ed .eu in redirect 308 verso forevermeta.me. Nel codice `originsmeta.com` diventa `forevermeta.me` (sezione "Identità del sito").
3. ~~Progetto Supabase nuovo~~: fatto il 09/10/2026 (`jncrmiazefxzdxywsdga`, eu-west-1, schema applicato con `node scripts/db-migrate.mjs`, URL di Auth impostati). URL e chiave pubblica sono i default di `env.ts`, come su OriginsMeta: su Vercel non servono variabili. L’email di accesso parte ancora dal mittente di prova di Supabase (pochi messaggi l’ora) finché non c’è la casella del dominio (punto 7).
4. Progetto Vercel nuovo collegato al repository; piano Pro se ci sarà pubblicità (Hobby è solo non commerciale).
5. Search Console, GA4 (proprietà nuova), chiave IndexNow nuova.
6. Server Discord di ForeverMeta e webhook; poi il workflow degli annunci torna attivo.
7. Casella email del dominio (sul modello di staff@originsmeta.com).

## Identità del sito (ancora OriginsMeta)

- Dominio scritto nel codice: `originsmeta.com` compare circa 290 volte in 70 file di `src/` (fra cui `src/lib/i18n.ts`, `src/lib/indexnow.ts` con `INDEXNOW_SITE` e `INDEXNOW_KEY`, `src/lib/jsonld/entities.ts`, `src/lib/data/authorsCore.ts`, `src/lib/stream.ts`, `src/lib/community/shortLink.ts`, `src/lib/videos.ts`, dizionari e test). Conviene una costante unica del sito prima di sostituire.
- Nome, logo e favicon: `src/app/icon.svg`, `src/app/favicon.ico` (`scripts/make-favicon.mjs`), header, footer, dizionari.
- Palette "ink & mint" e font (`src/app/globals.css`): da decidere se tenerli, ForeverMeta non deve sembrare OriginsMeta né usare grafica Blizzard.
- Footer: dicitura "non affiliato a Koin Games" da sostituire con la non affiliazione a Blizzard Entertainment, riga di copyright e credit line dei marchi.
- Link a Steam, PayPal e ai due Discord (`SteamButton`, `PayPalButton`, `src/lib/discord.ts`, `officialLinks` in `Footer.tsx`).
- `vercel.json` (cron `/api/cron/live`), `next.config.ts` (redirect di `originsmeta.vercel.app`, sezioni).

## Contenuti di Origins (da sostituire, non da tradurre)

- Dati: `src/lib/data/` (carte e `woo-cards.json`, `card-lore*.ts`, `card-history.ts`, luoghi, news, eventi, tier list, mazzi, autori), `src/lib/content/` (guide, FAQ).
- Dizionari: `src/lib/dictionaries/{en,it,es,fr}.ts`. Il francese c'è nel motore: tenerlo o no è una decisione di Pierluigi (in francese Forever ha già JudgeHype e Kami-labs).
- Documenti di Origins: `docs/spagnolo.md`, `docs/francese.md`, `docs/testi-di-gioco.md`, `docs/tracker.md`, `docs/fumetti.md`, `docs/guide-community.md` (gli ultimi due descrivono funzioni del motore, da rileggere).
- Script legati a Origins: `scripts/import-woo.mjs`, `scripts/official-texts.mjs`, `scripts/import-card-art.mjs`, `scripts/llms-txt.mjs`.

## Funzioni del motore

Quali funzioni si tengono, si trasformano o si tolgono, e in che ordine, sta nella KB del progetto (§7): il repository è pubblico e i piani di prodotto non si scrivono qui.

# Bacheca delle gilde

La bacheca delle gilde di ForeverMeta (`/guilds`, dal 23/10/2026) raccoglie gli annunci di reclutamento delle gilde di
World of Warcraft: Forever pubblicati dagli iscritti: lingua, regione, ruleset, fazione, obiettivi, ruoli e classi
cercati, giorni e orari, dimensione, descrizione nella lingua dell'autore, contatti. Si legge senza account (filtri nel
browser, conteggi per lingua), si pubblica con l'account, sul modello delle build pubblicate. Le gilde si formano fra la
prenotazione dei nomi (27/10/2026) e il lancio (04/11/2026). Forever è "realmless": niente reami, si sceglie regione e
ruleset (ricerca `_bacheca_gilde_ricerca_2026-10-23.md` nella KB).

## Dove sta che cosa

| Pezzo | File |
| --- | --- |
| Regole (valori ammessi, limiti, inviti Discord, slug, scadenza, soglia noindex) | `src/lib/community/guilds.ts` + `guilds.test.ts` |
| Letture (elenco pubblico, scheda, annunci dell'iscritto, sitemap) | `src/lib/community/guildQueries.ts` |
| Server Action (pubblica, modifica, stato, rinnova, elimina, segnala) | `src/lib/community/guildActions.ts` |
| Annuncio su Discord alla pubblicazione | `src/lib/community/guildDiscord.ts` + `src/lib/discordWebhook.ts` |
| Testi dell'interfaccia (EN/IT/ES) | `src/lib/guildLabels.ts`; i testi delle pagine in `dictionaries/*.ts` (`guilds`) |
| Componenti | `src/components/guilds/` (`GuildForm`, `GuildList`, `GuildOwnerActions`, `GuildReport`) |
| Stili (`.guild-card`, `.gl-*`) | `src/app/guilds.css` |
| Pagine | `src/app/[locale]/(site)/guilds/` (`page`, `[slug]/page`, `publish/page`, `[slug]/edit/page`) |
| Sitemap per lingua | `src/app/[locale]/sitemap-guilds.xml/route.ts` + `guildsSitemapResponse` in `src/lib/sitemap.ts` |
| Tabelle, trigger, RLS | blocco "23/10/2026: BACHECA GILDE" di `supabase/schema.sql`; tipi in `src/lib/supabase/database.ts` |

## Regole

- **Tabelle** `community_guilds` e `guild_reports`. Lettura pubblica degli annunci con `status = 'published'`; scrive solo
  il proprietario (RLS); tetto di 3 annunci pubblicati per iscritto (trigger `enforce_guild_limit`).
- **Campi**: nome 2–24 caratteri (il limite del gioco), regione (Europa, Americhe, Corea, Taiwan: le quattro nominate
  da Blizzard), ruleset (Normal, PvP, Roleplaying, Roleplay-PvP, Hardcore, "da decidere"), fazione (Alleanza, Orda, "da
  decidere" per chi si forma), 1–3 lingue, 1–4 obiettivi, ruoli e classi cercati (vuoto = tutti), giorni di raid e orari,
  dimensione, descrizione 80–4000 caratteri in EN/IT/ES, contatti: invito Discord (normalizzato in
  `https://discord.gg/<codice>`), sito, nota in gioco; almeno uno dei tre.
- **Scadenza**: `refreshed_at` è il rinnovo. L'elenco pubblico e la sitemap lasciano fuori gli annunci fermi da più di
  30 giorni (`GUILD_STALE_DAYS`); la scheda resta aperta dal link con l'avviso; "Rinnova" e ogni modifica riportano
  l'annuncio in cima. Il filtro sta nel sito (`staleCutoff`, arrotondato al giorno così le letture si cachano), non nel
  database.
- **Indicizzazione**: la scheda è indicizzata solo nella lingua della descrizione, da 60 parole (`GUILD_MIN_WORDS`), se
  non è scaduta; nelle altre lingue è noindex con la nota "testo scritto in …". `/guilds/publish` e `/edit` sono noindex.
- **Segnalazioni**: chi è entrato può segnalare un annuncio (tabella `guild_reports`, motivo 3–500 caratteri); le
  leggono solo gli admin. Il proprietario non vede il tasto.
- **Discord**: alla pubblicazione, `announceGuild` manda l'annuncio al webhook in `DISCORD_WEBHOOK_GUILDS` (variabile
  server su Vercel). Senza la variabile non fa nulla: il server Discord di ForeverMeta non esiste ancora (23/10/2026).
- **Analytics**: evento `guild_published` (regione, fazione, prima lingua) alla prima pubblicazione.

## Messa in produzione

1. Deploy del codice: senza la tabella le pagine dicono "la bacheca non è ancora attiva" (`guildTableMissing`).
2. Migrazione: `node scripts/db-migrate.mjs` dal checkout principale (serve `.env.local`), che applica l'intero
   `schema.sql`, blocco "BACHECA GILDE" compreso.
3. Quando esiste il server Discord: webhook del canale delle gilde in `DISCORD_WEBHOOK_GUILDS`, poi un deploy.

## Dopo

- Annunci "cerco gilda" dei singoli giocatori e gruppi fissi (duo di livellamento, gruppi dungeon), con gli stessi filtri.
- Orari con il fuso dell'autore convertiti in quello del lettore (Guilds Forever lo fa); contatti privati (BattleTag)
  mostrati solo dopo un'approvazione.
- Traduzione automatica della descrizione nelle altre due lingue, come i mazzi di OriginsMeta.

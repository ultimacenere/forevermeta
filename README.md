# ForeverMeta

Sito fan non ufficiale su **World of Warcraft: Forever**. Non affiliato a Blizzard Entertainment; World of Warcraft e WoW sono marchi di Blizzard Entertainment, Inc.

Sottoprogetto di [OriginsMeta](https://github.com/ultimacenere/originsmeta): il motore del sito (Next.js 16, Tailwind 4, Supabase, Vercel) è stato copiato da OriginsMeta l'08/10/2026, al commit `9fdf3fe`, senza la sua storia e senza il materiale di Origins TCG.

## Stato

Il codice è ancora quello di OriginsMeta: l'adattamento a Forever è descritto in [`docs/adattamento.md`](docs/adattamento.md). Stato e decisioni nella KB del progetto (Drive, `OriginsMeta\30_ForeverMeta\00_KB\`).

## Comandi

```bash
npm ci
npm run dev
npm run build   # prima di ogni push
npm test
```

Senza variabili d'ambiente la community (Supabase) e GA4 sono spenti: vedi `.env.example`.

## Correzioni dal motore di OriginsMeta

```bash
git fetch upstream
git cherry-pick <commit di originsmeta>
```

Il remote `upstream` è in sola lettura. Guida tecnica del motore: `docs/motore-originsmeta-README.md` e `docs/motore-originsmeta-CLAUDE.md`.

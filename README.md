# ForeverMeta

Sito fan non ufficiale su **World of Warcraft: Forever**, online su [forevermeta.me](https://forevermeta.me) in inglese, italiano e spagnolo. Non affiliato a Blizzard Entertainment; World of Warcraft e WoW sono marchi di Blizzard Entertainment, Inc.

Progetto autonomo di Pierluigi Cella, nato dal motore di [OriginsMeta](https://github.com/ultimacenere/originsmeta) (Next.js 16, Tailwind 4, Supabase, Vercel), copiato l'08/10/2026 al commit `9fdf3fe` senza la sua storia e senza il materiale di Origins TCG. Dal 22/10/2026 ha sessioni, memoria, servizi e deploy propri: si lavora aprendo questa cartella, mai dal repository di OriginsMeta.

## Stato

Online dal 10/10/2026. Che cosa del motore è ancora di Origins e che cosa è stato adattato: [`docs/adattamento.md`](docs/adattamento.md). Stato e decisioni nella KB del progetto (Drive, `ForeverMeta\00_KB\`).

## Comandi

```bash
npm ci
npm run dev
npm run build   # prima di ogni push
npm test
```

Senza variabili d'ambiente la community (Supabase) e GA4 sono spenti: vedi `.env.example`.

## Branch e deploy

`main` è la produzione (Vercel pubblica da lì), `anteprima` è l'anteprima (sito aperto solo in Preview, con `FOREVERMETA_OPEN=1`). `npm run build` deve passare prima di ogni push; su `main` si pusha solo su richiesta di Pierluigi.

## Correzioni dal motore di OriginsMeta

```bash
git fetch upstream
git cherry-pick <commit di originsmeta>
```

Il remote `upstream` è in sola lettura e porta solo `main` di OriginsMeta. Guida tecnica del motore: `docs/motore-originsmeta-README.md` e `docs/motore-originsmeta-CLAUDE.md`.

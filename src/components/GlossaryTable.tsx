"use client";

import { useMemo, useState } from "react";

export type GlossaryRow = {
  id: string;
  category: string;
  en: string;
  it: { term: string; official: boolean };
  es: { term: string; official: boolean };
  mx: { term: string; official: boolean };
  note?: string;
};

export type GlossaryLabels = {
  search: string;
  colEn: string;
  colIt: string;
  colEs: string;
  colMx: string;
  oursHint: string;
  count: string;
  none: string;
};

/** Toglie accenti e maiuscole, per cercare "celicos" e trovare "célicos". */
function fold(s: string): string {
  return s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

/**
 * Tabella del glossario con la ricerca: tutte le righe stanno già nell'HTML (le legge anche chi non ha JavaScript),
 * il filtro le nasconde soltanto. Un nome che non è ufficiale in quella lingua ha l'asterisco e la spiegazione.
 */
export function GlossaryTable({ groups, labels }: { groups: { title: string; rows: GlossaryRow[] }[]; labels: GlossaryLabels }) {
  const [q, setQ] = useState("");
  const needle = fold(q.trim());
  const visible = useMemo(
    () =>
      groups.map((g) => ({
        ...g,
        rows: needle ? g.rows.filter((r) => fold([r.en, r.it.term, r.es.term, r.mx.term, r.note ?? ""].join(" ")).includes(needle)) : g.rows,
      })),
    [groups, needle],
  );
  const total = visible.reduce((n, g) => n + g.rows.length, 0);
  const cell = (v: { term: string; official: boolean }) => (
    <>
      {v.term}
      {v.official ? null : (
        <abbr title={labels.oursHint} className="ml-0.5 text-mint no-underline">
          *
        </abbr>
      )}
    </>
  );
  return (
    <div>
      <label className="block max-w-md">
        <span className="kicker text-pale-muted">{labels.search}</span>
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="mt-2 w-full rounded-lg border-2 border-felt-line bg-night-2 px-3 py-2 text-chalk outline-none focus:border-mint"
        />
      </label>
      <p className="mt-2 font-mono text-xs text-pale-muted" aria-live="polite">
        {labels.count.replace("{n}", String(total))}
      </p>
      {total === 0 ? <p className="mt-6 text-pale-muted">{labels.none}</p> : null}
      {visible.map((g) =>
        g.rows.length ? (
          <section key={g.title} className="mt-8">
            <h2 className="t-section">{g.title}</h2>
            <div className="table-scroll mt-3">
              <table className="w-full min-w-[40rem] table-fixed text-left text-sm">
                <colgroup>
                  <col className="w-[31%]" />
                  <col className="w-[23%]" />
                  <col className="w-[23%]" />
                  <col className="w-[23%]" />
                </colgroup>
                <thead>
                  <tr className="text-pale-muted">
                    <th scope="col" className="py-2 pr-4">{labels.colEn}</th>
                    <th scope="col" className="py-2 pr-4">{labels.colIt}</th>
                    <th scope="col" className="py-2 pr-4">{labels.colEs}</th>
                    <th scope="col" className="py-2 pr-4">{labels.colMx}</th>
                  </tr>
                </thead>
                <tbody>
                  {g.rows.map((r) => (
                    <tr key={r.id} id={r.id} className="border-t border-felt-line align-top">
                      <th scope="row" className="py-2 pr-4 font-bold text-sky">
                        {r.en}
                        {r.note ? <span className="mt-1 block text-xs font-normal text-pale-muted">{r.note}</span> : null}
                      </th>
                      <td className="py-2 pr-4 text-chalk">{cell(r.it)}</td>
                      <td className="py-2 pr-4 text-chalk">{cell(r.es)}</td>
                      <td className="py-2 pr-4 text-chalk">{cell(r.mx)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ) : null,
      )}
    </div>
  );
}

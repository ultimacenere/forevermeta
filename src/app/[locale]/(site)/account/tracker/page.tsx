import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { href } from "@/lib/i18n";
import { cleanDescription, pageTitle, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { CONTRIBUTION_KINDS, trackerLabels } from "@/lib/trackerLabels";
import { readContributions, readTrackerDevices } from "@/lib/community/trackerQueries";
import { revokeTrackerDevice } from "@/lib/community/trackerActions";
import { TrackerCodeBox } from "@/components/tracker/TrackerCodeBox";
import { TrackerTime } from "@/components/tracker/TrackerTime";

/**
 * ForeverMeta Companion sul sito (11/11/2026, fase 1 del tracker degli oggetti; docs/tracker.md): pagina privata,
 * dinamica, noindex, fuori da sitemap e menu. Cosa manda l'app e cosa no, codice per collegarla, PC collegati
 * (scollega), contributi di oggi e totali. Chi non ha fatto l'accesso va alla pagina di accesso e poi torna qui. Prima
 * della migrazione del blocco "11/11/2026: OGGETTI" la parte dei contributi dice "non ancora attiva".
 */
export const dynamic = "force-dynamic";

type Search = Promise<Record<string, string | string[] | undefined>>;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale } = await resolveLocale(params);
  const L = trackerLabels[locale].meta;
  return { title: { absolute: pageTitle(L.title) }, description: cleanDescription(L.description), robots: { index: false, follow: false } };
}

const one = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v);

export default async function TrackerAccountPage({ params, searchParams }: { params: LocaleParams; searchParams: Search }) {
  const { locale } = await resolveLocale(params);
  const sp = await searchParams;
  const L = trackerLabels[locale];
  const { supabase, user } = await currentUser();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{L.unavailable}</p>
      </div>
    );
  }
  if (!user) redirect(`${href(locale, "/login")}?next=${encodeURIComponent(href(locale, "/account/tracker"))}`);

  const todayIso = new Date().toISOString().slice(0, 10);
  const [devices, contributions] = await Promise.all([readTrackerDevices(supabase), readContributions(supabase, user.id, todayIso)]);
  const nf = new Intl.NumberFormat(locale);

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="text-sm">
        <Link href={href(locale, "/account")} prefetch={false} className="link-mint font-bold">
          ← {L.back}
        </Link>
      </p>
      <p className="kicker mt-6 text-mint">{L.kicker}</p>
      <h1 className="t-page mt-2">{L.h1}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{L.intro}</p>
      <ul className="mt-4 max-w-2xl list-disc space-y-1 pl-5 text-sm text-pale">
        <li>{L.sends}</li>
        <li>{L.never}</li>
      </ul>
      <p className="mt-3 max-w-2xl text-sm text-pale-muted">{L.testing}</p>

      {devices.status !== "ok" ? (
        <p className="card-night mt-8 p-6 text-pale-muted">{L.unavailable}</p>
      ) : (
        <>
          <section id="link" className="mt-10 scroll-mt-24" aria-labelledby="tracker-link">
            <h2 id="tracker-link" className="t-section">
              {L.link.title}
            </h2>
            <ol className="mt-3 max-w-2xl list-decimal space-y-1 pl-5 text-sm text-pale">
              {L.link.steps.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ol>
            <TrackerCodeBox labels={L.link} locale={locale} />
          </section>

          <section id="devices" className="mt-12 scroll-mt-24" aria-labelledby="tracker-devices">
            <h2 id="tracker-devices" className="t-section">
              {L.devices.title}
            </h2>
            {one(sp.done) === "revoke" ? <p className="mt-3 text-sm text-good">{L.devices.done}</p> : null}
            {one(sp.error) === "revoke" ? <p className="mt-3 text-sm text-bad">{L.devices.error}</p> : null}
            {devices.data.length ? (
              <ul className="mt-4 space-y-2">
                {devices.data.map((dev) => (
                  <li key={dev.id} className="card-night flex flex-wrap items-center justify-between gap-3 p-4 text-sm">
                    <div className="min-w-0">
                      <p className="break-words font-semibold text-pale">{dev.name}</p>
                      <p className="font-mono text-xs text-pale-muted">
                        {L.devices.linked} <TrackerTime iso={dev.created_at} locale={locale} /> ·{" "}
                        {dev.last_seen_at ? (
                          <>
                            {L.devices.lastSync} <TrackerTime iso={dev.last_seen_at} locale={locale} />
                          </>
                        ) : (
                          L.devices.never
                        )}
                      </p>
                    </div>
                    <form action={revokeTrackerDevice}>
                      <input type="hidden" name="id" value={dev.id} />
                      <input type="hidden" name="locale" value={locale} />
                      <button type="submit" className="btn btn-ghost px-3 py-1 text-xs">
                        {L.devices.revoke}
                      </button>
                    </form>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-4 text-sm text-pale-muted">{L.devices.empty}</p>
            )}
          </section>

          <section id="contributions" className="mt-12 scroll-mt-24" aria-labelledby="tracker-contributions">
            <h2 id="tracker-contributions" className="t-section">
              {L.contributions.title}
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-chalk-muted">{L.contributions.intro}</p>
            {contributions.status !== "ok" ? (
              <p className="mt-4 text-sm text-pale-muted">{L.unavailable}</p>
            ) : contributions.data.days === 0 ? (
              <p className="mt-4 text-sm text-pale-muted">{L.contributions.empty}</p>
            ) : (
              <div className="card-night mt-4 overflow-x-auto p-2">
                <table className="w-full text-sm">
                  <thead>
                    <tr>
                      <th scope="col" className="kicker px-3 py-2 text-left text-chalk-muted">
                        <span className="sr-only">{L.contributions.title}</span>
                      </th>
                      <th scope="col" className="kicker px-3 py-2 text-right text-chalk-muted">
                        {L.contributions.today}
                      </th>
                      <th scope="col" className="kicker px-3 py-2 text-right text-chalk-muted">
                        {L.contributions.total}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {CONTRIBUTION_KINDS.map((k) => (
                      <tr key={k}>
                        <th scope="row" className="border-t border-night-3 px-3 py-2 text-left font-normal text-pale">
                          {L.contributions.kinds[k]}
                        </th>
                        <td className="border-t border-night-3 px-3 py-2 text-right font-mono text-chalk">{nf.format(contributions.data.today?.[k] ?? 0)}</td>
                        <td className="border-t border-night-3 px-3 py-2 text-right font-mono text-chalk">{nf.format(contributions.data.total[k])}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        </>
      )}
    </div>
  );
}

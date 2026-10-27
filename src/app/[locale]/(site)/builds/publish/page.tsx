import type { Metadata } from "next";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { BuildForm } from "@/components/builds/BuildForm";
import { LoginWithReturn } from "@/components/builds/BuildExtras";
import { classNameMap, raceNameMap } from "@/lib/community/buildView";
import { buildLabels, languageNames } from "@/lib/buildLabels";

export const dynamic = "force-dynamic";
// la Server Action traduce la guida dopo la risposta (`after()`): la funzione resta viva finché il modello risponde
export const maxDuration = 300;

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/builds/publish", dict.builds.publishMeta, dict.builds.description, undefined, { noindex: true });
}

/**
 * Pubblicazione di una build (dinamica, noindex): il codice arriva nell'hash dal tasto Pubblica del builder. Senza
 * accesso si mostra il modulo spento con il link all'accesso che riporta qui, hash compreso.
 */
export default async function PublishBuildPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const L = buildLabels[locale];
  const { supabase, user } = await currentUser();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.builds}</p>
      <h1 className="t-page mt-2">{L.form.title}</h1>
      <p className="mt-4 text-chalk-muted">{L.form.intro}</p>
      <div className="mt-8">
        {!supabase ? (
          <p className="card-night p-6 text-pale-muted">{d.auth.disabled}</p>
        ) : !user ? (
          <div className="card-night p-6">
            <p className="text-chalk">{L.form.loginNeeded}</p>
            <div className="mt-4">
              <LoginWithReturn loginPath={href(locale, "/login")} label={L.form.login} />
            </div>
          </div>
        ) : (
          <BuildForm locale={locale} labels={L} classNames={classNameMap(locale)} raceNames={raceNameMap(locale)} languageNames={languageNames[locale]} />
        )}
      </div>
    </div>
  );
}

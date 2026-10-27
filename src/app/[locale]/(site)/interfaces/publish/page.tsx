import type { Metadata } from "next";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { InterfaceForm } from "@/components/interfaces/InterfaceForm";
import { LoginWithReturn } from "@/components/builds/BuildExtras";
import { interfaceLabels } from "@/lib/interfaceLabels";
import { languageNames } from "@/lib/buildLabels";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/interfaces/publish", dict.interfaces.publishMeta, dict.interfaces.description, undefined, { noindex: true });
}

/** Pubblicazione di un'interfaccia (dinamica, noindex): come copiare il layout dal gioco, poi il modulo; senza accesso il link al login. */
export default async function PublishInterfacePage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const L = interfaceLabels[locale];
  const { supabase, user } = await currentUser();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.interfaces}</p>
      <h1 className="t-page mt-2">{L.form.title}</h1>
      <p className="mt-4 text-chalk-muted">{L.form.intro}</p>
      <div className="card-inset mt-6 p-4">
        <p className="kicker text-pale-muted">{L.howTo.exportTitle}</p>
        <ol className="mt-2 list-decimal space-y-1 pl-5 text-sm text-pale">
          {L.howTo.export.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ol>
        <p className="mt-2 text-xs text-pale-muted">{L.howTo.note}</p>
      </div>
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
          <InterfaceForm locale={locale} labels={L} languageNames={languageNames[locale]} userId={user.id} />
        )}
      </div>
    </div>
  );
}

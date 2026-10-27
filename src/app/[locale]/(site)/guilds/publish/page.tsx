import type { Metadata } from "next";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { GuildForm } from "@/components/guilds/GuildForm";
import { LoginWithReturn } from "@/components/builds/BuildExtras";
import { guildLabels } from "@/lib/guildLabels";
import { languageNames } from "@/lib/buildLabels";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/guilds/publish", dict.guilds.publishMeta, dict.guilds.description, undefined, { noindex: true });
}

/** Pubblicazione di un annuncio di gilda (dinamica, noindex): senza accesso, il modulo spento e il link all'accesso che riporta qui. */
export default async function PublishGuildPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const L = guildLabels[locale];
  const { supabase, user } = await currentUser();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.guilds}</p>
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
          <GuildForm locale={locale} labels={L} languageNames={languageNames[locale]} />
        )}
      </div>
    </div>
  );
}

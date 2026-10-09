import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import type { Profile } from "@/lib/community/types";
import { Avatar, SignOutButton } from "@/components/AccountMenu";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/account", dict.account.metaTitle, dict.account.intro, undefined, { noindex: true });
}

/**
 * Account (prima versione di ForeverMeta, 10/10/2026): profilo e uscita. Build pubblicate, tier list della community e
 * gilde arrivano con il lancio del gioco e avranno qui le loro sezioni.
 */
export default async function AccountPage({ params }: { params: LocaleParams }) {
  const { locale, dict: d } = await resolveLocale(params);
  const a = d.account;
  const { supabase, user } = await currentUser();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{d.auth.disabled}</p>
      </div>
    );
  }
  if (!user) redirect(`${href(locale, "/login")}?next=${encodeURIComponent(href(locale, "/account"))}`);

  const { data: row } = await supabase.from("profiles").select("username, display_name, avatar_url").eq("id", user.id).maybeSingle();
  const profile = (row as Profile | null) ?? null;
  const name = profile?.display_name || profile?.username || user.email?.split("@")[0] || d.nav.playerFallback;

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.account}</p>
      <h1 className="t-page mt-2">{a.title}</h1>
      <p className="mt-4 max-w-2xl text-chalk-muted">{a.intro}</p>
      <section className="card-night mt-8 flex flex-wrap items-center gap-4 p-6">
        <Avatar profile={profile} name={name} size={56} />
        <dl className="min-w-0 flex-1 space-y-1 text-sm">
          <div>
            <dt className="kicker inline text-pale-muted">{a.displayName}: </dt>
            <dd className="inline text-chalk">{name}</dd>
          </div>
          {profile?.username ? (
            <div>
              <dt className="kicker inline text-pale-muted">{a.username}: </dt>
              <dd className="inline font-mono text-chalk">@{profile.username}</dd>
            </div>
          ) : null}
          <div>
            <dt className="kicker inline text-pale-muted">{a.email}: </dt>
            <dd className="inline break-all font-mono text-chalk">{user.email}</dd>
          </div>
        </dl>
        <SignOutButton locale={locale} label={d.nav.logout} className="btn btn-ink text-xs" />
      </section>
    </div>
  );
}

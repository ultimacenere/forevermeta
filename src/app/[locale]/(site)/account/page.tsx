import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { formatDate, href } from "@/lib/i18n";
import { pageMeta, resolveLocale, type LocaleParams } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import type { Profile } from "@/lib/community/types";
import { Avatar, SignOutButton } from "@/components/AccountMenu";
import { listUserBuilds } from "@/lib/community/buildQueries";
import { buildPath, pointsFromCode } from "@/lib/community/builds";
import { classNameMap } from "@/lib/community/buildView";
import { buildLabels } from "@/lib/buildLabels";
import { fill } from "@/lib/builderLabels";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: LocaleParams }): Promise<Metadata> {
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, "/account", dict.account.metaTitle, dict.account.intro, undefined, { noindex: true });
}

/**
 * Account: profilo e uscita, poi "Le tue build" (23/10/2026: build pubblicate e nascoste, con i link alla scheda e
 * alla modifica). Tier list della community e gilde arrivano con il lancio del gioco e avranno qui le loro sezioni.
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
  const L = buildLabels[locale];
  const mine = await listUserBuilds(supabase, user.id);
  const classNames = classNameMap(locale);

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

      <section id="builds" className="mt-10" aria-labelledby="account-builds">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 id="account-builds" className="t-section">
            {L.account.title}
          </h2>
          <Link href={href(locale, "/builder")} className="btn btn-gold px-3 py-1.5 text-xs" prefetch={false}>
            {L.list.publish}
          </Link>
        </div>
        {mine.unavailable ? (
          <p className="mt-4 text-sm text-pale-muted">{L.list.unavailable}</p>
        ) : mine.builds.length === 0 ? (
          <p className="mt-4 text-sm text-pale-muted">{L.account.empty}</p>
        ) : (
          <ul className="mt-4 space-y-2">
            {mine.builds.map((b) => (
              <li key={b.id} className="card-night flex flex-wrap items-center gap-3 p-4 text-sm">
                <div className="min-w-0 flex-1">
                  <p className="t-item text-base">{b.name}</p>
                  <p className="text-pale-muted">
                    {classNames[b.class_id]} · {fill(L.page.level, { n: b.level })} · {pointsFromCode(b.code).join(" / ")} · {L.purposes[b.purpose]} · {formatDate(locale, b.created_at.slice(0, 10))}
                  </p>
                </div>
                <span className={b.status === "published" ? "stat-pill bg-mint-soft text-mint-deep" : "stat-pill bg-crimson-soft text-crimson-deep"}>{L.account.status[b.status]}</span>
                <Link href={href(locale, buildPath(b.slug))} className="btn btn-choice px-3 py-1 text-xs" prefetch={false}>
                  {L.account.open}
                </Link>
                <Link href={href(locale, `${buildPath(b.slug)}/edit`)} className="btn btn-ghost px-3 py-1 text-xs" prefetch={false}>
                  {L.owner.edit}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

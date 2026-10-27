import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { GuildForm } from "@/components/guilds/GuildForm";
import { getUserGuild } from "@/lib/community/guildQueries";
import { GUILD_SLUG_RE, guildPath } from "@/lib/community/guilds";
import { guildLabels } from "@/lib/guildLabels";
import { languageNames } from "@/lib/buildLabels";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, `${guildPath(slug)}/edit`, dict.guilds.editTitle, dict.guilds.description, undefined, { noindex: true });
}

/** Modifica di un annuncio proprio (dinamica, noindex): senza accesso si va al login, un annuncio non proprio è un 404. */
export default async function EditGuildPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!GUILD_SLUG_RE.test(slug)) notFound();
  const { supabase, user } = await currentUser();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{d.auth.disabled}</p>
      </div>
    );
  }
  const path = href(locale, `${guildPath(slug)}/edit`);
  if (!user) redirect(`${href(locale, "/login")}?next=${encodeURIComponent(path)}`);
  const guild = await getUserGuild(supabase, user.id, slug);
  if (!guild) notFound();
  const L = guildLabels[locale];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.guilds}</p>
      <h1 className="t-page mt-2">{L.form.editTitle}</h1>
      <p className="mt-4 text-chalk-muted">{L.form.intro}</p>
      <div className="mt-8">
        <GuildForm locale={locale} labels={L} languageNames={languageNames[locale]} initial={guild} />
      </div>
    </div>
  );
}

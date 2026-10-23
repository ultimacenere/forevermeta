import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { BuildForm } from "@/components/builds/BuildForm";
import { getUserBuild } from "@/lib/community/buildQueries";
import { BUILD_SLUG_RE, buildPath } from "@/lib/community/builds";
import { classNameMap, raceNameMap } from "@/lib/community/buildView";
import { buildLabels, languageNames } from "@/lib/buildLabels";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, `${buildPath(slug)}/edit`, dict.builds.editTitle, dict.builds.description, undefined, { noindex: true });
}

/** Modifica di una build propria (dinamica, noindex): senza accesso si va al login, una build non propria è un 404. */
export default async function EditBuildPage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!BUILD_SLUG_RE.test(slug)) notFound();
  const { supabase, user } = await currentUser();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{d.auth.disabled}</p>
      </div>
    );
  }
  const path = href(locale, `${buildPath(slug)}/edit`);
  if (!user) redirect(`${href(locale, "/login")}?next=${encodeURIComponent(path)}`);
  const build = await getUserBuild(supabase, user.id, slug);
  if (!build) notFound();
  const L = buildLabels[locale];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.builds}</p>
      <h1 className="t-page mt-2">{L.form.editTitle}</h1>
      <p className="mt-4 text-chalk-muted">{L.form.intro}</p>
      <div className="mt-8">
        <BuildForm locale={locale} labels={L} classNames={classNameMap(locale)} raceNames={raceNameMap(locale)} languageNames={languageNames[locale]} initial={build} />
      </div>
    </div>
  );
}

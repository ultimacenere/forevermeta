import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { href } from "@/lib/i18n";
import { pageMeta, resolveLocale } from "@/lib/page";
import { currentUser } from "@/lib/supabase/server";
import { InterfaceForm } from "@/components/interfaces/InterfaceForm";
import { getUserInterface } from "@/lib/community/interfaceQueries";
import { INTERFACE_SLUG_RE, interfacePath } from "@/lib/community/interfaces";
import { interfaceLabels } from "@/lib/interfaceLabels";
import { languageNames } from "@/lib/buildLabels";

type Params = Promise<{ locale: string; slug: string }>;

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  return pageMeta(locale, `${interfacePath(slug)}/edit`, dict.interfaces.editTitle, dict.interfaces.description, undefined, { noindex: true });
}

/** Modifica di un'interfaccia propria (dinamica, noindex): senza accesso si va al login, un'interfaccia non propria è un 404. */
export default async function EditInterfacePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!INTERFACE_SLUG_RE.test(slug)) notFound();
  const { supabase, user } = await currentUser();
  if (!supabase) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{d.auth.disabled}</p>
      </div>
    );
  }
  const path = href(locale, `${interfacePath(slug)}/edit`);
  if (!user) redirect(`${href(locale, "/login")}?next=${encodeURIComponent(path)}`);
  const item = await getUserInterface(supabase, user.id, slug);
  if (!item) notFound();
  const L = interfaceLabels[locale];
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="kicker text-mint">{d.nav.interfaces}</p>
      <h1 className="t-page mt-2">{L.form.editTitle}</h1>
      <p className="mt-4 text-chalk-muted">{L.form.intro}</p>
      <div className="mt-8">
        <InterfaceForm locale={locale} labels={L} languageNames={languageNames[locale]} userId={user.id} initial={item} />
      </div>
    </div>
  );
}

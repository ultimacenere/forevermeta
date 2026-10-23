import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta, resolveLocale } from "@/lib/page";
import { InterfaceView } from "@/components/interfaces/InterfaceView";
import { getPublishedInterface } from "@/lib/community/interfaceQueries";
import { INTERFACE_SLUG_RE, anyShotPathOk, interfaceIndexable, interfacePath, shotUrl } from "@/lib/community/interfaces";
import { supabaseUrl } from "@/lib/supabase/env";
import { interfaceLabels } from "@/lib/interfaceLabels";

type Params = Promise<{ locale: string; slug: string }>;

export const revalidate = 60;

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const { locale, dict } = await resolveLocale(params);
  if (!INTERFACE_SLUG_RE.test(slug)) return {};
  const { item } = await getPublishedInterface(slug);
  if (!item) return {};
  const first = item.shots.find(anyShotPathOk);
  const indexable = interfaceIndexable(item) && item.description_lang === locale;
  return pageMeta(locale, interfacePath(item.slug), item.name, item.description, first ? shotUrl(supabaseUrl, first) : undefined, {
    type: "article",
    published: item.created_at,
    modified: item.updated_at,
    languages: [item.description_lang],
    noindex: !indexable,
    imageAlt: dict.interfaces.title,
  });
}

/**
 * La scheda di un'interfaccia condivisa (ISR 60): nome, autore, voti; gli screenshot (il primo grande); la stringa
 * dell'Edit Mode con il tasto "Copia il layout" e, se c'è, quella del Cooldown Manager; i dettagli (classi, ruoli,
 * comandi, preset, risoluzione, scala, addon, build del gioco); la descrizione com'è scritta dall'autore; come
 * importarla; i tasti del proprietario e la segnalazione.
 */
export default async function InterfacePage({ params }: { params: Params }) {
  const { slug } = await params;
  const { locale, dict: d } = await resolveLocale(params);
  if (!INTERFACE_SLUG_RE.test(slug)) notFound();
  const { item, rating, unavailable } = await getPublishedInterface(slug);
  const L = interfaceLabels[locale];
  if (unavailable) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <p className="card-night p-6 text-pale-muted">{L.list.unavailable}</p>
      </div>
    );
  }
  if (!item) notFound();
  const shots = item.shots.filter(anyShotPathOk).map((p) => shotUrl(supabaseUrl, p));
  return <InterfaceView item={item} rating={rating} shots={shots} locale={locale} dict={d} />;
}

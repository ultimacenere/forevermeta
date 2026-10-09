import { resolveLocale, type LocaleParams } from "@/lib/page";
import { CalendarStrip } from "@/components/CalendarStrip";

/** Tutte le pagine tranne la home: striscia del calendario subito sotto l'header, poi il contenuto. */
export default async function SiteLayout({ children, params }: { children: React.ReactNode; params: LocaleParams }) {
  const { locale, dict } = await resolveLocale(params);
  return (
    <>
      <CalendarStrip locale={locale} dict={dict} />
      <main id="main" className="flex-1">
        {children}
      </main>
    </>
  );
}

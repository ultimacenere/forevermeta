import Link from "next/link";
import { href, type Dictionary, type Locale } from "@/lib/i18n";
import { Wordmark } from "./Wordmark";
import { LocaleSwitcher } from "./LocaleSwitcher";
import { AccountMenu } from "./AccountMenu";
import { AutoCloseDetails } from "./AutoCloseDetails";
import { NavLink } from "./NavLink";

type NavItem = { label: string; path: string };

/** Voci del menu di ForeverMeta (prima versione, 10/10/2026): le sezioni dei contenuti della fine della beta. */
export function navItems(dict: Dictionary): NavItem[] {
  return [
    { label: dict.nav.news, path: "/news" },
    { label: dict.nav.guides, path: "/guides" },
    { label: dict.nav.glossary, path: "/glossary" },
    { label: dict.nav.calendar, path: "/calendar" },
    { label: dict.nav.changes, path: "/changes" },
    { label: dict.nav.faq, path: "/faq" },
  ];
}

/**
 * Header fisso, server component statico: solo le voci di menu (NavLink) e lo stato di accesso (AccountMenu) leggono
 * il percorso nel browser. Sotto 1280 px il menu sta nella tendina, sotto 640 px anche il selettore della lingua.
 */
export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const items = navItems(dict);
  return (
    <header className="sticky top-0 z-40 border-b border-felt-line/70 bg-felt/85 backdrop-blur supports-[backdrop-filter]:bg-felt/70">
      <div className="mx-auto flex max-w-7xl items-center gap-2 px-4 py-3 max-[359px]:gap-1 max-[359px]:px-3 sm:gap-3 sm:px-6">
        <Link href={href(locale)} className="flex shrink-0 items-center gap-2" aria-label={dict.meta.siteName}>
          <Wordmark height={28} className="max-[359px]:!h-6" />
        </Link>
        <nav className="ml-2 hidden shrink-0 items-center gap-0.5 xl:flex" aria-label={dict.nav.mainNav}>
          {items.map((it) => (
            <NavLink key={it.path} href={href(locale, it.path)}>
              {it.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex min-w-0 items-center gap-2">
          <AccountMenu locale={locale} labels={{ login: dict.nav.login, account: dict.nav.account, logout: dict.nav.logout, player: dict.nav.playerFallback }} />
          <LocaleSwitcher locale={locale} label={dict.nav.language} className="hidden sm:flex" />
        </div>
        <AutoCloseDetails
          className="relative xl:hidden"
          summaryClassName="btn btn-ghost cursor-pointer list-none px-3 py-1.5 text-xs max-[359px]:px-2 [&::-webkit-details-marker]:hidden"
          summaryLabel={dict.nav.menu}
          summary={dict.nav.menu}
        >
          <nav className="absolute right-0 mt-2 w-60 rounded-xl border border-felt-line bg-felt-deep p-2 shadow-lift" aria-label={dict.nav.menu}>
            {items.map((it) => (
              <NavLink key={it.path} href={href(locale, it.path)} className="nav-link-block">
                {it.label}
              </NavLink>
            ))}
            <NavLink href={href(locale, "/about")} className="nav-link-block">
              {dict.nav.about}
            </NavLink>
            <div className="mt-2 flex items-center justify-between gap-3 border-t border-felt-line px-3 pt-3 sm:hidden">
              <span className="text-xs text-chalk-muted">{dict.nav.language}</span>
              <LocaleSwitcher locale={locale} label={dict.nav.language} />
            </div>
          </nav>
        </AutoCloseDetails>
      </div>
    </header>
  );
}

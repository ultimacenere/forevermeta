import type { ReactNode } from "react";
import Link from "next/link";
import { href, type Dictionary, type Locale } from "@/lib/i18n";
import { Wordmark } from "./Wordmark";
import { navItems } from "./Header";
import { NEW_TAB_HINT_ID, NEW_TAB_REL, NewTabIcon } from "./NewTab";
import { CookiePreferencesButton } from "./CookieBanner";

/** Il segmento di lingua dei siti Blizzard: lo spagnolo del sito è quello di Spagna (es-es). */
const blizzardLocale: Record<Locale, string> = { en: "en-us", it: "it-it", es: "es-es" };

/** Fonti ufficiali di Blizzard su Forever, nella lingua della pagina quando Blizzard la pubblica. */
export function officialLinks(locale: Locale) {
  const bl = blizzardLocale[locale];
  return {
    forever: `https://worldofwarcraft.blizzard.com/${bl}/forever`,
    news: `https://news.blizzard.com/${bl}/world-of-warcraft`,
    forum: "https://us.forums.blizzard.com/en/wow/c/in-development/wow-forever-beta-discussion/349",
    shop: `https://eu.shop.battle.net/${bl === "en-us" ? "en-gb" : bl}/product/world-of-warcraft-forever`,
    youtube: "https://www.youtube.com/@Warcraft",
  };
}

/** Link del footer come quelli dell'header: a riposo chalk, al passaggio menta. */
const linkCls = "text-chalk transition-colors hover:text-mint";

/** Link ufficiale esterno: nuova scheda, freccia visibile e avviso per i lettori di schermo nel nome del link. */
function OfficialLink({ url, newTab, children }: { url: string; newTab: string; children: ReactNode }) {
  return (
    <a className={`inline-flex items-center gap-1.5 ${linkCls}`} href={url} target="_blank" rel={NEW_TAB_REL}>
      {children}
      <NewTabIcon className="h-3 w-3" />
      <span className="sr-only"> {newTab}</span>
    </a>
  );
}

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const official = officialLinks(locale);
  const f = dict.footer;
  return (
    <footer className="mt-20 border-t border-felt-line/70 bg-felt-deep/60">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:grid-cols-2 sm:px-6 md:grid-cols-4 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div className="sm:col-span-2 md:col-span-4 lg:col-span-1">
          <Wordmark height={34} alt="ForeverMeta" />
          <p className="mt-3 max-w-sm text-sm text-chalk-muted">{f.disclaimer}</p>
          <p className="mt-3 max-w-sm text-xs text-chalk-muted">{f.copyright}</p>
        </div>
        <div>
          <h2 className="kicker mb-3 text-mint">{f.sections}</h2>
          <ul className="space-y-1.5 text-sm">
            {navItems(dict).map((it) => (
              <li key={it.path}>
                <Link className={linkCls} href={href(locale, it.path)}>
                  {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="kicker mb-3 text-mint">{f.official}</h2>
          <ul className="space-y-1.5 text-sm">
            <li>
              <OfficialLink url={official.forever} newTab={f.newTab}>
                {f.officialSite}
              </OfficialLink>
            </li>
            <li>
              <OfficialLink url={official.news} newTab={f.newTab}>
                Blizzard News
              </OfficialLink>
            </li>
            <li>
              <OfficialLink url={official.forum} newTab={f.newTab}>
                {f.officialForum}
              </OfficialLink>
            </li>
            <li>
              <OfficialLink url={official.youtube} newTab={f.newTab}>
                YouTube @Warcraft
              </OfficialLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="kicker mb-3 text-mint">{f.legal}</h2>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link className={linkCls} href={href(locale, "/about")}>
                {dict.nav.about}
              </Link>
            </li>
            <li>
              <Link className={linkCls} href={href(locale, "/authors")}>
                {f.authors}
              </Link>
            </li>
            <li>
              <Link className={linkCls} href={href(locale, "/privacy")}>
                {f.privacy}
              </Link>
            </li>
            <li>
              <CookiePreferencesButton label={dict.cookies.manage} className={`cursor-pointer ${linkCls}`} />
            </li>
          </ul>
        </div>
      </div>
      {/* Avviso richiamato con aria-describedby dai link che si aprono in una scheda nuova (vedi NewTab.tsx). */}
      <span id={NEW_TAB_HINT_ID} hidden>
        {f.newTab}
      </span>
    </footer>
  );
}

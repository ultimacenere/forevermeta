import type { Metadata } from "next";
import { Cinzel, Manrope, JetBrains_Mono, Caveat } from "next/font/google";
import { notFound } from "next/navigation";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../globals.css";
import { getDictionary, href, isLocale, locales, ogLocale, siteUrl, type Locale } from "@/lib/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { GoogleAnalytics, VercelAnalytics } from "@/components/GoogleAnalytics";
import { JsonLd, blizzard, organization, videoGame, website } from "@/components/JsonLd";
import { defaultOgAlt, defaultOgImage } from "@/lib/page";
import { newsFeedLabels, newsFeedPath } from "@/lib/newsFeedMeta";

/** ID misurazione GA4 (pubblico). Parte solo con il consenso "Accetta tutto" del banner cookie; senza variabile, niente GA4. */
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "";

// Identità di ForeverMeta (10/10/2026): Cinzel per titoli e logo, Manrope per il testo, JetBrains Mono per i numeri.
const display = Cinzel({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-display-face", display: "swap" });
const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-manrope", display: "swap" });
// Solo per i post-it delle news in home (scritti a penna, come su OriginsMeta): Caveat, non precaricato.
const hand = Caveat({ subsets: ["latin"], weight: ["700"], variable: "--font-hand", display: "swap", preload: false });
const jet = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-jet", display: "swap" });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = { children: React.ReactNode; params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return {
    metadataBase: new URL(siteUrl),
    title: { default: d.meta.homeTitle, template: `%s · ${d.meta.siteName}` },
    description: d.meta.description,
    // Canonical e hreflang li dichiara ogni pagina con `pageMeta`: una pagina che li ereditasse dal layout punterebbe alla home.
    openGraph: {
      type: "website",
      siteName: d.meta.siteName,
      locale: ogLocale[locale],
      url: `${siteUrl}/${locale}`,
      title: d.meta.homeTitle,
      description: d.meta.description,
      images: [{ url: defaultOgImage, width: 1200, height: 630, alt: defaultOgAlt[locale] }],
    },
    twitter: { card: "summary_large_image", title: d.meta.homeTitle, description: d.meta.description, images: [defaultOgImage] },
    robots: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const l: Locale = locale;
  const d = getDictionary(l);
  return (
    <html lang={l} className={`${display.variable} ${manrope.variable} ${jet.variable} ${hand.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <link rel="alternate" type="application/rss+xml" title={newsFeedLabels[l].title} href={`${siteUrl}${newsFeedPath(l)}`} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-md focus:bg-mint focus:px-3 focus:py-2 focus:text-ink"
        >
          {d.nav.skipToContent}
        </a>
        <Header locale={l} dict={d} />
        {children}
        <Footer locale={l} dict={d} />
        <CookieBanner labels={d.cookies} privacyHref={href(l, "/privacy")} />
        {/* Il grafo del sito su ogni pagina: il sito nella lingua, ForeverMeta, Blizzard e il gioco */}
        <JsonLd data={[website(l, d.meta.siteDescription), organization, blizzard, videoGame]} />
        <GoogleAnalytics id={GA_ID} />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

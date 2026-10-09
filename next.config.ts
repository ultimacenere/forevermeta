import type { NextConfig } from "next";

/**
 * Lingua del visitatore per i redirect senza lingua (la radice e le sezioni): italiano; spagnolo anche per catalano,
 * galiziano e basco; altrimenti inglese (la regola senza `has`, sempre per ultima). Si guarda solo la prima lingua
 * dell'header (è un'espressione regolare).
 */
const browserLocales = [
  { locale: "it", acceptLanguage: "^it.*" },
  { locale: "es", acceptLanguage: "^(?:es|ca|gl|eu).*" },
] as const;

const acceptLanguage = (value: string) => [{ type: "header" as const, key: "accept-language", value }];

/**
 * Le sezioni del sito, cioè le cartelle di src/app/[locale]/(site) tranne `[...rest]`: un indirizzo senza lingua con
 * una sezione vera (/guides/<slug>, /glossary) porta alla stessa pagina nella lingua del visitatore. Il resto del
 * percorso non ha punti (`[^.]+`), così i file di `public` non vengono toccati.
 */
const sections = ["about", "account", "authors", "calendar", "changes", "faq", "glossary", "guides", "login", "news", "privacy"] as const;

function sectionRedirects() {
  const section = `:section(${sections.join("|")})`;
  const forms = [
    { source: `/${section}`, rest: ":section" },
    { source: `/${section}/:path([^.]+)`, rest: ":section/:path" },
  ];
  const to = (locale: string, has?: ReturnType<typeof acceptLanguage>) =>
    forms.map(({ source, rest }) => ({ source, ...(has ? { has } : {}), destination: `/${locale}/${rest}`, permanent: false }));
  return [...browserLocales.flatMap(({ locale, acceptLanguage: language }) => to(locale, acceptLanguage(language))), ...to("en")];
}

/**
 * ForeverMeta, cantiere (09/10/2026): finché il motore copiato da OriginsMeta non è adattato, ogni indirizzo mostra
 * public/cantiere.html (noindex) e robots.txt chiude tutto, così forevermeta.me non pubblica il sito a metà.
 * Si apre con FOREVERMETA_OPEN=1, variabile di Vercel letta alla build: sulle anteprime per vedere il lavoro, in
 * produzione solo al lancio, su decisione di Pierluigi. Con il cantiere chiuso i redirect del sito non servono.
 */
const cantiere = process.env.FOREVERMETA_OPEN !== "1";

const nextConfig: NextConfig = {
  async rewrites() {
    if (!cantiere) return [];
    return {
      beforeFiles: [
        { source: "/robots.txt", destination: "/cantiere-robots.txt" },
        { source: "/", destination: "/cantiere.html" },
        // tutto tranne i file di Next e le due pagine del cantiere
        { source: "/:path((?!_next/|cantiere\\.html$|cantiere-robots\\.txt$).+)", destination: "/cantiere.html" },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  experimental: {
    globalNotFound: true,
  },
  async headers() {
    if (cantiere) return [{ source: "/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }] }];
    return [
      // Le pagine del sito non si mostrano dentro un iframe di un altro sito (clickjacking).
      {
        source: "/:locale(en|it|es)/:path*",
        headers: [
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
  async redirects() {
    if (cantiere) return [];
    return [
      // La copia di Vercel porta al dominio vero con lo stesso percorso, in modo permanente.
      { source: "/:path*", has: [{ type: "host", value: "forevermeta.vercel.app" }], destination: "https://forevermeta.me/:path*", permanent: true },
      // Radice del sito: la lingua del browser, con redirect temporanei (la radice cambia lingua a ogni visita).
      ...browserLocales.map(({ locale, acceptLanguage: language }) => ({ source: "/", has: acceptLanguage(language), destination: `/${locale}`, permanent: false })),
      { source: "/", destination: "/en", permanent: false },
      ...sectionRedirects(),
    ];
  },
};

export default nextConfig;

import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/i18n";

/**
 * robots.txt del sito aperto. Finché c'è il cantiere (next.config.ts) /robots.txt è riscritto su
 * public/cantiere-robots.txt, che chiude tutto: questo vale solo quando FOREVERMETA_OPEN=1.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/*?_rsc=", "/*&_rsc=", "/*/login?"] }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}

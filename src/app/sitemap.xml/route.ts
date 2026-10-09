import { sitemapIndexResponse } from "@/lib/sitemap";

/** /sitemap.xml: l'indice delle sitemap (src/lib/sitemap.ts). Statico, si rigenera a ogni deploy. */
export const dynamic = "force-static";

export function GET(): Response {
  return sitemapIndexResponse();
}

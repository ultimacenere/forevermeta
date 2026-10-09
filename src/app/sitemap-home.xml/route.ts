import { homeSitemapResponse } from "@/lib/sitemap";

/** /sitemap-home.xml: le home delle tre lingue (fuori dalle cartelle /en/, /it/, /es/). */
export const dynamic = "force-static";

export function GET(): Response {
  return homeSitemapResponse();
}

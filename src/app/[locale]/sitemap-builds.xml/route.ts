import { isLocale } from "@/lib/i18n";
import { buildsSitemapResponse } from "@/lib/sitemap";

/** /<lingua>/sitemap-builds.xml: le build pubblicate (vedi src/lib/sitemap.ts). ISR: si rigenera dalle Server Action e ogni ora. */
export const revalidate = 3600;

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }): Promise<Response> {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not Found", { status: 404 });
  return buildsSitemapResponse(locale);
}

import { isLocale, locales } from "@/lib/i18n";
import { sectionSitemapResponse } from "@/lib/sitemap";

/** /<lingua>/sitemap-guides.xml: vedi src/lib/sitemap.ts. Statica, si rigenera a ogni deploy. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }): Promise<Response> {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not Found", { status: 404 });
  return sectionSitemapResponse("guides", locale);
}

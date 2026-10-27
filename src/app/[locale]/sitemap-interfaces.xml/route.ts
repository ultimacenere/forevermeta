import { isLocale } from "@/lib/i18n";
import { interfacesSitemapResponse } from "@/lib/sitemap";

/** /<lingua>/sitemap-interfaces.xml: le interfacce condivise (vedi src/lib/sitemap.ts). ISR: si rigenera dalle Server Action e ogni ora. */
export const revalidate = 3600;

export async function GET(_request: Request, { params }: { params: Promise<{ locale: string }> }): Promise<Response> {
  const { locale } = await params;
  if (!isLocale(locale)) return new Response("Not Found", { status: 404 });
  return interfacesSitemapResponse(locale);
}

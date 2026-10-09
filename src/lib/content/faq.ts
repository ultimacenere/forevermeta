import type { Locale } from "@/lib/i18n";

/**
 * Le domande frequenti di /faq: risposte brevi scritte da noi, ognuna con la pagina del sito che spiega di più
 * (`links`: percorso senza lingua ed etichetta) e, quando serve, la fonte ufficiale. Finiscono nell'HTML e nei dati
 * strutturati FAQPage. Si scrivono nelle tre lingue con gli stessi `id`.
 */
export type Faq = {
  id: string;
  q: string;
  a: string;
  links?: { path: string; label: string }[];
};

export { faqEntries } from "./faqEntries";
import { faqEntries } from "./faqEntries";

export function getFaqs(locale: Locale): Faq[] {
  return faqEntries[locale];
}

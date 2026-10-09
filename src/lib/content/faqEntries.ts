import type { Locale } from "@/lib/i18n";
import type { Faq } from "./faq";

/** Le risposte di /faq nelle tre lingue (stessi `id`, stesso ordine). */
export const faqEntries: Record<Locale, Faq[]> = { en: [], it: [], es: [] };

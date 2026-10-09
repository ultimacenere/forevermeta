import { siteUrl } from "./i18n";
import { getGuides } from "./content/guides";
import { sortedNews, newsPath } from "./data/news";
import { glossary } from "./data/glossary";

/** /llms-full.txt: il testo del sito in inglese per i modelli linguistici (guide, news, glossario), in Markdown semplice. */
export const LLMS_FULL_PATH = "/llms-full.txt";

/** Toglie le ancore `{#…}` dei titoli, che servono solo al sito. */
function clean(md: string): string {
  return md.replace(/\s*\{#[a-z0-9-]+\}/g, "").trim();
}

export function llmsFull(): string {
  const out: string[] = [
    "# ForeverMeta — full text",
    "",
    "Unofficial fan site about World of Warcraft: Forever (Blizzard Entertainment). Not affiliated with Blizzard Entertainment. Facts come from official Blizzard sources; every guide lists them.",
    "",
  ];
  const guides = getGuides("en");
  if (guides.length) {
    out.push("## Guides", "");
    for (const g of guides) {
      out.push(`### ${g.title}`, "", `URL: ${siteUrl}/en/guides/${g.slug}`, `Last checked: ${g.updated}`, "", clean(g.body), "");
      if (g.sources.length) out.push("Sources:", ...g.sources.map((s) => `- ${s.label}: ${s.url}`), "");
    }
  }
  if (sortedNews.length) {
    out.push("## News", "");
    for (const n of sortedNews) {
      out.push(`### ${n.title.en}`, "", `URL: ${siteUrl}/en${newsPath(n)}`, `Date: ${n.date}`, "", clean(n.body?.en ?? n.summary.en), "");
      if (n.url && n.source === "blizzard") out.push(`Source: ${n.url}`, "");
    }
  }
  out.push("## Glossary (English · Italian · Spanish, Spain · Spanish, Latin America)", "");
  for (const t of glossary) out.push(`- ${t.en} · ${t.it.term} · ${t.es.term} · ${t.mx.term}`);
  out.push("");
  return out.join("\n");
}

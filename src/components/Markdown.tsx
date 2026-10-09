import { marked } from "marked";

marked.setOptions({ gfm: true, breaks: false });

/** Ancora leggibile dal testo di un titolo: minuscole, senza accenti né tag, trattini al posto degli spazi. */
function slugify(text: string): string {
  return text
    .replace(/<[^>]+>/g, "")
    .replace(/&[a-z0-9#]+;/gi, "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Dà un `id` ai titoli h2 e h3, così ogni sezione si può linkare ("In breve" delle news, link da altre pagine). Un
 * titolo che finisce con `{#ancora}` usa quella ancora; gli altri ricevono lo slug del testo. Ancore ripetute: -2, -3…
 */
function addHeadingIds(html: string): string {
  const used = new Map<string, number>();
  return html.replace(/<h([23])>([\s\S]*?)<\/h\1>/g, (_, level: string, inner: string) => {
    const explicit = inner.match(/\s*\{#([a-z0-9-]+)\}\s*$/);
    const content = explicit ? inner.slice(0, explicit.index).trimEnd() : inner;
    let id = explicit ? explicit[1] : slugify(content);
    if (!id) return `<h${level}>${content}</h${level}>`;
    const seen = used.get(id) ?? 0;
    used.set(id, seen + 1);
    if (seen) id = `${id}-${seen + 1}`;
    return `<h${level} id="${id}">${content}</h${level}>`;
  });
}

/** Ogni tabella sta in un contenitore che scorre di lato: la pagina non scorre mai di lato, le tabelle sì. */
function wrapTables(html: string): string {
  return html.replace(/<table>/g, '<div class="table-scroll"><table>').replace(/<\/table>/g, "</table></div>");
}

/** I link esterni (fonti ufficiali) si aprono in una scheda nuova, con rel noopener. */
function externalLinks(html: string): string {
  return html.replace(/<a href="(https?:\/\/[^"]+)"/g, '<a href="$1" target="_blank" rel="noopener"');
}

/** Testo Markdown di news e guide, con le ancore dei titoli e le tabelle che scorrono. */
export function Markdown({ source, className = "" }: { source: string; className?: string }) {
  const html = externalLinks(wrapTables(addHeadingIds(marked.parse(source, { async: false }) as string)));
  return <div className={`prose-night ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

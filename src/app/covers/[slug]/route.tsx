import { ImageResponse } from "next/og";
import { guideEntries } from "@/lib/content/guideEntries";
import { newsItems } from "@/lib/data/newsItems";

/**
 * /covers/<slug>.png: copertine tipografiche di guide e news (10/10/2026), diverse per ogni contenuto, finché Blizzard non
 * autorizza per iscritto le immagini del Press Center. Solo testo e il simbolo dell'infinito disegnato da noi: la parola
 * della copertina (`cover.word`) è un nome proprio del gioco, uguale in tutte le lingue, così l'immagine vale per tutte.
 */
export const dynamic = "force-static";
export const dynamicParams = false;

type Cover = { word: string; tone: "gold" | "sky" };

function covers(): Record<string, Cover> {
  const out: Record<string, Cover> = {};
  for (const g of guideEntries) out[`${g.slug}.png`] = g.cover;
  for (const n of newsItems) if (n.cover) out[`${n.slug}.png`] = n.cover;
  return out;
}

export function generateStaticParams() {
  return Object.keys(covers()).map((slug) => ({ slug }));
}

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }): Promise<Response> {
  const { slug } = await params;
  const cover = covers()[slug];
  if (!cover) return new Response("Not Found", { status: 404 });
  const accent = cover.tone === "gold" ? "#d7ba96" : "#32c9e7";
  const size = cover.word.length > 16 ? 130 : cover.word.length > 10 ? 165 : 210;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          backgroundColor: "#031a2b",
          backgroundImage: `radial-gradient(circle at 85% 10%, ${cover.tone === "gold" ? "rgba(215,186,150,0.28)" : "rgba(50,201,231,0.26)"}, transparent 55%), radial-gradient(circle at 5% 100%, ${cover.tone === "gold" ? "rgba(50,201,231,0.14)" : "rgba(104,70,41,0.45)"}, transparent 50%)`,
          color: "#fdf6e7",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "18px", fontSize: 34, color: "#b3bfcb" }}>
          <svg width="70" height="42" viewBox="0 0 40 24">
            <path
              d="M20 12c-3.6-4.6-6.4-7-9.6-7C6.6 5 4 8.1 4 12s2.6 7 6.4 7c3.2 0 6-2.4 9.6-7Zm0 0c3.6 4.6 6.4 7 9.6 7 3.8 0 6.4-3.1 6.4-7s-2.6-7-6.4-7c-3.2 0-6 2.4-9.6 7Z"
              fill="none"
              stroke="#d7ba96"
              strokeWidth="3.2"
            />
          </svg>
          ForeverMeta · WoW Forever
        </div>
        <div style={{ display: "flex", fontSize: size, fontWeight: 700, color: accent, lineHeight: 1.05 }}>{cover.word}</div>
        <div style={{ display: "flex", width: "100%", height: 6, backgroundColor: accent, opacity: 0.6 }} />
      </div>
    ),
    { width: 1600, height: 900 },
  );
}

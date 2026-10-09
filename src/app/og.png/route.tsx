import { ImageResponse } from "next/og";

/**
 * /og.png: immagine social di riserva (1200×630), generata alla build con il logo testuale di ForeverMeta. Nessuna
 * grafica Blizzard: solo testo e il simbolo dell'infinito disegnato da noi, nei colori del sito.
 */
export const dynamic = "force-static";

export function GET(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "radial-gradient(900px 500px at 85% 0%, rgba(130,201,238,0.25), transparent 60%), radial-gradient(700px 420px at 0% 100%, rgba(234,181,78,0.22), transparent 60%), #0b1220",
          color: "#e3e8ef",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "28px" }}>
          <svg width="150" height="90" viewBox="0 0 40 24">
            <path
              d="M20 12c-3.6-4.6-6.4-7-9.6-7C6.6 5 4 8.1 4 12s2.6 7 6.4 7c3.2 0 6-2.4 9.6-7Zm0 0c3.6 4.6 6.4 7 9.6 7 3.8 0 6.4-3.1 6.4-7s-2.6-7-6.4-7c-3.2 0-6 2.4-9.6 7Z"
              fill="none"
              stroke="#eab54e"
              strokeWidth="3.2"
            />
            <circle cx="20" cy="12" r="1.9" fill="#82c9ee" />
          </svg>
          <div style={{ display: "flex", fontSize: 96, fontWeight: 700 }}>
            Forever<span style={{ color: "#eab54e" }}>Meta</span>
          </div>
        </div>
        <div style={{ marginTop: 36, fontSize: 40, color: "#82c9ee" }}>World of Warcraft: Forever fan site</div>
        <div style={{ marginTop: 14, fontSize: 28, color: "#9ba8bb" }}>News · Guides · Glossary EN · IT · ES · Calendar · Beta changes</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}

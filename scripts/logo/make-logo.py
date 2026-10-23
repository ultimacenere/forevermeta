"""Genera il logo di ForeverMeta (23/10/2026, scelto da Pierluigi fra quattro proposte: l'infinito dorato che avvolge la F).

Che cosa fa:
- l'infinito viene vettorializzato dall'immagine scelta (`logo-sorgente.png`, il ritaglio del bozzetto, 386x85 px):
  maschera dei pixel dorati a 4x, sfocatura leggera, potrace;
- le lettere non si ricalcano dal bozzetto: sono i glifi veri di Cinzel Bold (il font dei titoli del sito), composti
  con HarfBuzz (kerning compreso), alla stessa altezza di maiuscola del bozzetto e con la F nello stesso punto, così
  l'infinito la avvolge come nell'originale;
- scrive `src/components/wordmarkPaths.ts` (i tracciati che usa `Wordmark.tsx`) e `src/app/icon.svg` (infinito + F
  su quadrato color feltro; da lì `node scripts/make-favicon.mjs` rigenera `favicon.ico`).

Spazio di coordinate: pixel del ritaglio x4, interi (la F è alta 132 unità).

Uso (Python 3.12+; `pip install pillow numpy potracer uharfbuzz fonttools`):
    python scripts/logo/make-logo.py [--font <Cinzel-Bold.ttf>] [--preview <cartella>]
Il font: Cinzel di Natanael Gama, OFL, https://fonts.google.com/specimen/Cinzel (peso 700, file statico).
Con --preview scrive anche una pagina HTML che confronta il risultato con il bozzetto e lo mostra alle misure del sito.
"""
import argparse
import base64
import json
import os
import sys
from pathlib import Path

import numpy as np
import potrace
import uharfbuzz as hb
from fontTools.pens.boundsPen import BoundsPen
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFilter

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SRC = HERE / "logo-sorgente.png"
OUT_TS = ROOT / "src/components/wordmarkPaths.ts"
OUT_ICON = ROOT / "src/app/icon.svg"

K = 4                   # fattore di ingrandimento del ritaglio
CAP_PX = 33.0           # altezza della F nel ritaglio (righe 24..56)
BASELINE_PX = 57.0      # bordo inferiore della riga 56
F_LEFT_PX = 56.0        # bordo sinistro del bbox della F nel ritaglio
BG = np.array([238.5, 232.5, 220.5])   # il fondo crema del bozzetto
GOLD = "#aa8548"        # l'oro del bozzetto (mediana dei pixel dorati)
DARK = "#1f2633"        # --color-chalk del sito, per l'icona (nel sito il componente usa currentColor)
FELT = "#f4efe4"        # --color-felt
FELT_LINE = "#d9ccb2"   # --color-felt-line

FONT_CANDIDATES = [
    os.environ.get("CINZEL_BOLD"),
    os.path.expandvars(r"%LOCALAPPDATA%\Microsoft\Windows\Fonts\Cinzel-Bold.ttf"),
    r"C:\Windows\Fonts\Cinzel-Bold.ttf",
    "/usr/share/fonts/truetype/cinzel/Cinzel-Bold.ttf",
    os.path.expanduser("~/Library/Fonts/Cinzel-Bold.ttf"),
]


def num(v):
    return str(int(round(v)))


def trace_infinity(crop):
    """Maschera dei pixel dorati (solo l'infinito), ponti dietro lo stelo della F, potrace. Ritorna (d, bbox)."""
    W, H = crop.size
    big = crop.resize((W * K, H * K), Image.LANCZOS)
    a = np.asarray(big).astype(float)
    alpha = np.clip(np.abs(a - BG).sum(axis=2) / 120.0, 0, 1)
    sat = a.max(axis=2) - a.min(axis=2)
    gold = (alpha > 0.5) & (sat >= 45)
    gold[:, 200 * K:] = False                      # via "META": resta solo l'infinito
    m = Image.fromarray((gold * 255).astype(np.uint8))
    d = ImageDraw.Draw(m)
    # i due tratti dell'incrocio, nascosti dietro lo stelo della F (x 59..64 nel ritaglio): nel bozzetto il cappio
    # di sinistra e i due archi di destra toccano lo stelo, i tratti li uniscono sotto la lettera
    d.line([(56 * K, 44 * K), (67 * K, 29 * K)], fill=255, width=4 * K)   # punta del cappio -> arco alto
    d.line([(56 * K, 44 * K), (67 * K, 53 * K)], fill=255, width=4 * K)   # punta del cappio -> arco basso
    # sfocatura e nuova soglia: smussa i gradini del raster
    m = m.filter(ImageFilter.GaussianBlur(2.2)).point(lambda v: 255 if v > 128 else 0)
    # resta solo la figura connessa al cappio di sinistra (le briciole staccate sulle punte degli archi spariscono)
    seed = (16 * K, 42 * K)
    assert m.getpixel(seed) == 255, "il seme del riempimento non è sul tratto dorato"
    ImageDraw.floodfill(m, seed, 128)
    gold = np.asarray(m) == 128

    # potracer legge la bitmap al contrario (False = tratto)
    path = potrace.Bitmap(np.logical_not(gold)).trace(
        turdsize=40, turnpolicy=potrace.POTRACE_TURNPOLICY_MINORITY, alphamax=1.0, opticurve=True, opttolerance=0.2
    )
    parts = []
    for curve in path.curves:
        parts.append(f"M{num(curve.start_point.x)} {num(curve.start_point.y)}")
        for seg in curve.segments:
            e = seg.end_point
            if seg.is_corner:
                parts.append(f"L{num(seg.c.x)} {num(seg.c.y)}L{num(e.x)} {num(e.y)}")
            else:
                parts.append(f"C{num(seg.c1.x)} {num(seg.c1.y)} {num(seg.c2.x)} {num(seg.c2.y)} {num(e.x)} {num(e.y)}")
        parts.append("Z")
    ys, xs = np.where(gold)
    return "".join(parts), (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1), len(path.curves)


class Letters:
    """Glifi di Cinzel Bold composti con HarfBuzz, nello spazio del ritaglio x4."""

    def __init__(self, font_path):
        self.tt = TTFont(font_path)
        self.gs = self.tt.getGlyphSet()
        self.S = CAP_PX * K / self.tt["OS/2"].sCapHeight      # px(4x) per unità del font
        self.font = hb.Font(hb.Face(hb.Blob.from_file_path(font_path)))
        self.baseline = BASELINE_PX * K
        self.glyphs = self.shape("ForeverMeta")
        f_bounds = self.bounds(self.glyphs[0][0])
        self.origin_x = F_LEFT_PX * K - f_bounds[0] * self.S

    def shape(self, text):
        buf = hb.Buffer()
        buf.add_str(text)
        buf.guess_segment_properties()
        hb.shape(self.font, buf, {"kern": True, "liga": True})
        out, x = [], 0
        for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
            out.append((self.tt.getGlyphName(info.codepoint), x + pos.x_offset, pos.y_offset))
            x += pos.x_advance
        return out

    def bounds(self, name):
        pen = BoundsPen(self.gs)
        self.gs[name].draw(pen)
        return pen.bounds

    def path(self, items):
        d = []
        for name, gx, gy in items:
            pen = SVGPathPen(self.gs, ntos=num)
            self.gs[name].draw(TransformPen(pen, (self.S, 0, 0, -self.S, self.origin_x + gx * self.S, self.baseline - gy * self.S)))
            d.append(pen.getCommands())
        return "".join(d)

    def bbox(self, items):
        xs0, ys0, xs1, ys1 = [], [], [], []
        for name, gx, gy in items:
            x0, y0, x1, y1 = self.bounds(name)
            xs0.append(self.origin_x + (gx + x0) * self.S)
            xs1.append(self.origin_x + (gx + x1) * self.S)
            ys0.append(self.baseline - (gy + y1) * self.S)
            ys1.append(self.baseline - (gy + y0) * self.S)
        return (min(xs0), min(ys0), max(xs1), max(ys1))


def svg_logo(view_box, infinity, forever, meta, dark=DARK):
    x0, y0, x1, y1 = view_box
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="{x0} {y0} {x1 - x0} {y1 - y0}" role="img" aria-label="ForeverMeta">'
        f'<path fill="{GOLD}" d="{infinity}"/><path fill="{dark}" d="{forever}"/><path fill="{GOLD}" d="{meta}"/></svg>'
    )


def svg_icon(infinity, f_path, cluster):
    """Quadrato 64x64 color feltro con angoli arrotondati; dentro, l'infinito con la F, largo 58."""
    x0, y0, x1, y1 = cluster
    s = 58 / (x1 - x0)
    tx = 32 - (x0 + x1) / 2 * s
    ty = 32 - (y0 + y1) / 2 * s
    return (
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">\n'
        f'  <rect x="0.75" y="0.75" width="62.5" height="62.5" rx="13" fill="{FELT}" stroke="{FELT_LINE}" stroke-width="1.5"/>\n'
        f'  <g transform="translate({tx:.3f} {ty:.3f}) scale({s:.5f})">\n'
        f'    <path fill="{GOLD}" d="{infinity}"/>\n'
        f'    <path fill="{DARK}" d="{f_path}"/>\n'
        "  </g>\n"
        "</svg>\n"
    )


def ts_module(view_box, infinity, forever, meta):
    x0, y0, x1, y1 = view_box
    return (
        "/**\n"
        " * Tracciati del logo di ForeverMeta, GENERATI da scripts/logo/make-logo.py (23/10/2026): non si modificano a mano,\n"
        " * si rilancia lo script. Coordinate: pixel del bozzetto x4 (la F è alta 132 unità). L'infinito è vettorializzato dal\n"
        " * bozzetto scelto da Pierluigi, le lettere sono i glifi di Cinzel Bold (OFL) composti con il kerning del font.\n"
        " */\n"
        "export const WORDMARK = {\n"
        f'  viewBox: "{x0} {y0} {x1 - x0} {y1 - y0}",\n'
        f"  width: {x1 - x0},\n"
        f"  height: {y1 - y0},\n"
        f'  gold: "{GOLD}",\n'
        f'  infinity:\n    "{infinity}",\n'
        f'  forever:\n    "{forever}",\n'
        f'  meta:\n    "{meta}",\n'
        "} as const;\n"
    )


def preview_html(crop, svg, view_box, out_dir):
    W, H = crop.size
    x0, y0, x1, y1 = view_box
    vw, vh = x1 - x0, y1 - y0
    png = base64.b64encode(SRC.read_bytes()).decode()
    def sized(h):
        return svg.replace("<svg ", f'<svg height="{h}" ', 1)
    html = f"""<!doctype html><meta charset="utf-8"><title>logo preview</title>
<style>body{{margin:0;background:{FELT};font:14px sans-serif;color:{DARK}}} h3{{margin:16px}}
.wrap{{position:relative;width:{W*K}px;height:{H*K}px;margin:16px}}
.wrap img{{position:absolute;left:0;top:0;width:{W*K}px;height:{H*K}px}}
.wrap svg{{position:absolute;left:{x0}px;top:{y0}px;width:{vw}px;height:{vh}px;opacity:var(--o,1)}}
.row{{display:flex;gap:24px;align-items:center;margin:16px;background:#fff;padding:12px}} .row svg{{display:block}}</style>
<h3>1. SVG sul fondo del sito</h3><div class="wrap">{svg}</div>
<h3>2. Bozzetto a 4x</h3><div class="wrap"><img src="data:image/png;base64,{png}"></div>
<h3>3. Sovrapposizione: SVG al 55% sul bozzetto</h3><div class="wrap" style="--o:.55"><img src="data:image/png;base64,{png}">{svg}</div>
<h3>4. Alle misure del sito: 28 px (header), 24 px (header stretto), 34 px (footer), 120 px</h3>
<div class="row">{sized(28)}{sized(24)}{sized(34)}</div><div class="row">{sized(120)}</div>
"""
    (out_dir / "preview.html").write_text(html, encoding="utf-8")


def preview_icon_html(icon, out_dir):
    def sized(n):
        return icon.replace("<svg ", f'<svg width="{n}" height="{n}" ', 1)
    html = f"""<!doctype html><meta charset="utf-8"><title>icon preview</title>
<style>body{{margin:0;font:14px sans-serif}} .row{{display:flex;gap:24px;align-items:flex-end;padding:16px}}
.light{{background:#fff}} .dark{{background:#202124}} .felt{{background:{FELT}}}</style>
<div class="row light">{sized(16)}{sized(32)}{sized(48)}{sized(64)}{sized(128)}{sized(256)}</div>
<div class="row dark">{sized(16)}{sized(32)}{sized(48)}{sized(64)}{sized(128)}</div>
<div class="row felt">{sized(16)}{sized(32)}{sized(48)}{sized(64)}{sized(128)}</div>
"""
    (out_dir / "preview-icon.html").write_text(html, encoding="utf-8")


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--font", help="Cinzel-Bold.ttf (altrimenti si cerca nei font di sistema)")
    ap.add_argument("--preview", help="cartella in cui scrivere preview.html e preview-icon.html")
    ap.add_argument("--out-ts", default=str(OUT_TS))
    ap.add_argument("--out-icon", default=str(OUT_ICON))
    args = ap.parse_args()

    font_path = args.font or next((p for p in FONT_CANDIDATES if p and Path(p).is_file()), None)
    if not font_path:
        sys.exit("Cinzel-Bold.ttf non trovato: passa --font o imposta CINZEL_BOLD")

    crop = Image.open(SRC).convert("RGB")
    infinity, inf_bbox, n_curves = trace_infinity(crop)
    print(f"infinito: {n_curves} contorni, {len(infinity)} byte, bbox {inf_bbox}")

    letters = Letters(font_path)
    forever_g, meta_g = letters.glyphs[:7], letters.glyphs[7:]
    forever, meta, f_only = letters.path(forever_g), letters.path(meta_g), letters.path(letters.glyphs[:1])
    fb, mb, f_bb = letters.bbox(forever_g), letters.bbox(meta_g), letters.bbox(letters.glyphs[:1])
    print(f"Forever: {len(forever)} byte, bbox {[round(v) for v in fb]}; Meta: {len(meta)} byte, bbox {[round(v) for v in mb]}")

    view_box = (
        int(np.floor(min(inf_bbox[0], fb[0]))), int(np.floor(min(inf_bbox[1], fb[1], mb[1]))),
        int(np.ceil(max(inf_bbox[2], mb[2]))), int(np.ceil(max(inf_bbox[3], fb[3], mb[3]))),
    )
    print(f"viewBox {view_box}: {view_box[2]-view_box[0]} x {view_box[3]-view_box[1]}")

    ts = ts_module(view_box, infinity, forever, meta)
    Path(args.out_ts).write_text(ts, encoding="utf-8", newline="\n")
    print(f"scritto {args.out_ts} ({len(ts)} byte)")

    cluster = (min(inf_bbox[0], f_bb[0]), min(inf_bbox[1], f_bb[1]), max(inf_bbox[2], f_bb[2]), max(inf_bbox[3], f_bb[3]))
    icon = svg_icon(infinity, f_only, cluster)
    Path(args.out_icon).write_text(icon, encoding="utf-8", newline="\n")
    print(f"scritto {args.out_icon} ({len(icon)} byte)")

    if args.preview:
        out_dir = Path(args.preview)
        out_dir.mkdir(parents=True, exist_ok=True)
        svg = svg_logo(view_box, infinity, forever, meta)
        (out_dir / "logo.svg").write_text(svg + "\n", encoding="utf-8")
        preview_html(crop, svg, view_box, out_dir)
        preview_icon_html(icon, out_dir)
        print(f"anteprime in {out_dir}")


if __name__ == "__main__":
    main()

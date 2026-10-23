"use client";

import { useEffect, useRef, useState } from "react";
import type { BuilderLabels } from "@/lib/builderLabels";

export type SharePanelProps = {
  link: string;
  code: string;
  text: string;
  labels: BuilderLabels;
  onCopied: (method: "link" | "code" | "text" | "native") => void;
  onClose: () => void;
};

async function copyText(s: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(s);
    return true;
  } catch {
    return false;
  }
}

/**
 * Pannello "Condividi" a tre voci, come nel deck builder di OriginsMeta: link, codice della build e lista in testo,
 * ognuna con il suo tasto Copia; "Condividi con…" usa il foglio di condivisione del sistema quando c'è.
 */
export function SharePanel({ link, code, text, labels, onCopied, onClose }: SharePanelProps) {
  const [done, setDone] = useState<string | null>(null);
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const canNative = typeof navigator !== "undefined" && typeof navigator.share === "function";

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [onClose]);

  const copy = async (what: "link" | "code" | "text", value: string) => {
    const ok = await copyText(value);
    setFailed(!ok);
    setDone(ok ? what : null);
    if (ok) onCopied(what);
  };

  const rows: { key: "link" | "code" | "text"; label: string; value: string; multiline?: boolean }[] = [
    { key: "link", label: labels.shareLink, value: link },
    { key: "code", label: labels.shareCode, value: code },
    { key: "text", label: labels.shareText, value: text, multiline: true },
  ];

  return (
    <div ref={ref} className="tb-share card-night" role="dialog" aria-label={labels.shareTitle}>
      <div className="flex items-center justify-between gap-3">
        <p className="t-panel">{labels.shareTitle}</p>
        <button type="button" className="btn btn-ghost px-3 py-1 text-xs" onClick={onClose}>
          {labels.close}
        </button>
      </div>
      {rows.map((row) => (
        <label key={row.key} className="tb-share-row">
          <span className="kicker text-pale-muted">{row.label}</span>
          <span className="tb-share-field">
            {row.multiline ? <textarea readOnly value={row.value} rows={4} onFocus={(e) => e.currentTarget.select()} /> : <input readOnly value={row.value} onFocus={(e) => e.currentTarget.select()} />}
            <button type="button" className="btn btn-gold px-3 py-1.5 text-xs" onClick={() => copy(row.key, row.value)}>
              {done === row.key ? labels.copied : labels.copy}
            </button>
          </span>
        </label>
      ))}
      {failed ? <p className="text-error text-sm">{labels.copyFailed}</p> : null}
      {canNative ? (
        <button
          type="button"
          className="btn btn-choice self-start"
          onClick={async () => {
            try {
              await navigator.share({ url: link, text });
              onCopied("native");
            } catch {
              // annullato
            }
          }}
        >
          {labels.shareNative}
        </button>
      ) : null}
    </div>
  );
}

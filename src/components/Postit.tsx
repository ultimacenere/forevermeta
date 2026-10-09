"use client";

import { useSyncExternalStore, type CSSProperties } from "react";
import type { NewsTopic } from "@/lib/data/news";

/** Una news è "fresca" (post-it che sbatte, bollino "Nuovo") per 72 ore dalla sua data. */
const FRESH_MS = 72 * 60 * 60 * 1000;

/* Nessuna sorgente da ascoltare: il valore si ricalcola a ogni render lato client, quanto basta per una pagina. */
const subscribeNothing = () => () => {};
/* Sul server (e durante l'idratazione) il post-it non è mai fresco: la home è generata prima della visita. */
const getServerFresh = () => false;
function isFresh(date: string | undefined): boolean {
  if (!date) return false;
  const t = Date.parse(date);
  return Number.isFinite(t) && Date.now() - t < FRESH_MS;
}

/**
 * Post-it di una news, ripreso da OriginsMeta (richiesta di Pierluigi del 10/10/2026: "con colori diversi vorrei
 * rimettere come su originsmeta i postit"): foglietto colorato, storto, con il nastro adesivo, scritto a penna.
 * Il colore viene dall'argomento della news (`topic`): forma, colori e animazioni stanno nelle classi `.postit*`
 * di globals.css. Il confronto con l'ora per `is-fresh` si fa solo nel browser (la pagina è in cache).
 * Va messo come figlio diretto di un contenitore con `position: relative`, mai dentro un riquadro con overflow nascosto.
 */
export function Postit({
  kind,
  label,
  date,
  size = "md",
  tilt,
  className = "",
}: {
  kind: NewsTopic;
  label: string;
  date?: string;
  size?: "md" | "lg";
  tilt?: number;
  className?: string;
}) {
  const fresh = useSyncExternalStore(subscribeNothing, () => isFresh(date), getServerFresh);
  const classes = ["postit", `postit-${kind}`, size === "lg" ? "postit-lg" : "", fresh ? "is-fresh" : "", className].filter(Boolean).join(" ");
  const style = tilt === undefined ? undefined : ({ "--tilt": `${tilt}deg` } as CSSProperties);
  return (
    <span className={classes} style={style}>
      {label}
    </span>
  );
}

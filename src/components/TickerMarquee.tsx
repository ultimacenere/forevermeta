"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Wordmark } from "./Wordmark";

/** Fazione che colora una voce del nastro (solo decorazione: le date non sono di una fazione). */
export type TickerFaction = "alliance" | "horde";

export type TickerItem = {
  key: string;
  href: string;
  day: string | number;
  month: string;
  title: string;
  /** seconda riga, in maiuscoletto (giorno della settimana o intervallo) */
  sub: string;
  faction: TickerFaction;
  isNext: boolean;
};

type Props = {
  items: TickerItem[];
  ariaLabel: string;
  nextLabel: string;
  prevLabel: string;
  nextBtnLabel: string;
  /** velocità in pixel al secondo */
  speed?: number;
};

const PAUSE_AFTER_INTERACTION = 6000;

/**
 * Quante volte ripetere la lista dentro una copia perché la copia sia più larga della striscia. Il ciclo di
 * scorrimento si regge su due copie identiche: se una copia non riempie la striscia non c'è niente da far scorrere e
 * il nastro resta fermo (con quattro date su uno schermo largo succede sempre). Tetto a 8 per non moltiplicare i nodi.
 */
const MAX_REPEATS = 8;

/**
 * Striscia del calendario che scorre da sola, portata dal motore di OriginsMeta (23/10/2026, Pierluigi: "il calendario
 * in homepage deve essere in movimento come in originsmeta"). Scorre con requestAnimationFrame, non con CSS, così si
 * può anche navigare a mano con le frecce, la rotella o il dito; si ferma al passaggio del mouse e con il focus. La
 * lista è duplicata e, superata la prima copia, la posizione torna indietro di una copia: il ciclo non ha mai un salto
 * visibile. Tra la fine e l'inizio del ciclo c'è il wordmark di ForeverMeta (mai loghi Blizzard nell'identità del
 * sito). Con "riduci il movimento" attivo non scorre da sola ma resta navigabile. Rispetto a Origins qui non ci sono
 * i tornei della community né "Ora live": solo le date ufficiali, calcolate alla build.
 */
export function TickerMarquee({ items, ariaLabel, nextLabel, prevLabel, nextBtnLabel, speed = 18 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);
  const [hover, setHover] = useState(false);
  /** ripetizioni della lista dentro ogni copia: si misurano nel browser (vedi MAX_REPEATS) */
  const [repeats, setRepeats] = useState(1);

  /*
   * Il ciclo di animazione gira solo quando serve: striscia dentro lo schermo e scheda visibile. Fuori schermo o a
   * scheda nascosta si ferma del tutto, invece di chiedere un fotogramma a vuoto 60 volte al secondo.
   */
  const [inView, setInView] = useState(true);
  const [pageVisible, setPageVisible] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver((entries) => setInView(entries[entries.length - 1].isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  useEffect(() => {
    const onVisibility = () => setPageVisible(document.visibilityState !== "hidden");
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  /*
   * Quante ripetizioni servono perché una copia superi la larghezza della striscia. Si misura la lista vera disegnata
   * (una copia = `repeats` ripetizioni più il blocco col wordmark) e si ricalcola quando la finestra cambia misura.
   * Il valore si alza solo di quanto serve, con il tetto di MAX_REPEATS, e non scende mai sotto 1.
   */
  useEffect(() => {
    const el = ref.current;
    const track = trackRef.current;
    if (!el || !track) return;
    const measure = () => {
      const copy = track.scrollWidth / 2;
      if (copy <= 0) return;
      const unit = copy / repeats;
      if (unit <= 0) return;
      // una copia deve superare la striscia: mezzo elemento in più evita di restare a filo
      const needed = Math.min(MAX_REPEATS, Math.max(1, Math.ceil((el.clientWidth + unit / 2) / unit)));
      if (needed !== repeats) setRepeats(needed);
    };
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [repeats, items]);

  /*
   * Posizione con i decimali: a 18 px al secondo ogni fotogramma vale 0,3 px e `scrollLeft` non tiene i decimali
   * (scriverci `+= 0,3` sessanta volte al secondo lascia la striscia ferma a zero). Il conto lo teniamo noi in virgola
   * mobile e allo scroll passiamo il totale. `applied` ricorda l'ultimo valore scritto: se nel frattempo la posizione
   * è cambiata per mano di qualcuno (rotella, dito, frecce) ci si risincronizza invece di riportare indietro il nastro.
   */
  const pos = useRef(0);
  const applied = useRef(0);
  useEffect(() => {
    const el = ref.current;
    if (!el || hover || !inView || !pageVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    let last = performance.now();
    pos.current = el.scrollLeft;
    applied.current = el.scrollLeft;
    const step = (now: number) => {
      const dt = Math.min(64, now - last);
      last = now;
      const half = el.scrollWidth / 2;
      if (now > pausedUntil.current && half > el.clientWidth) {
        if (Math.abs(el.scrollLeft - applied.current) > 2) pos.current = el.scrollLeft;
        pos.current += (speed * dt) / 1000;
        if (pos.current >= half) pos.current -= half;
        el.scrollLeft = pos.current;
        applied.current = el.scrollLeft;
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [hover, speed, inView, pageVisible]);

  const pause = () => {
    pausedUntil.current = performance.now() + PAUSE_AFTER_INTERACTION;
  };

  const nudge = (dir: 1 | -1) => {
    const el = ref.current;
    if (!el) return;
    pause();
    const half = el.scrollWidth / 2;
    const stepPx = Math.max(240, el.clientWidth * 0.6);
    // le due copie sono identiche: il riposizionamento di una copia intera non si vede
    if (dir < 0 && el.scrollLeft - stepPx < 0) el.scrollLeft += half;
    if (dir > 0 && el.scrollLeft + stepPx >= half) el.scrollLeft -= half;
    el.scrollBy({ left: dir * stepPx, behavior: "smooth" });
  };

  return (
    <div className="ticker" aria-label={ariaLabel} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} onFocusCapture={() => setHover(true)} onBlurCapture={() => setHover(false)}>
      <button type="button" className="ticker-arrow left-2" onClick={() => nudge(-1)} aria-label={prevLabel}>
        ‹
      </button>
      <div ref={ref} className="ticker-scroll" onWheel={pause} onTouchStart={pause} onPointerDown={pause}>
        <div ref={trackRef} className="ticker-track">
          {/* Due copie identiche per il ciclo; dentro ognuna la lista si ripete quanto basta a superare la larghezza
              della striscia (vedi MAX_REPEATS). Solo la prima ripetizione della prima copia parla ai lettori di schermo. */}
          {[0, 1].map((copy) => (
            <Fragment key={copy}>
              {Array.from({ length: repeats }).flatMap((_, rep) =>
                items.map((it) => {
                  const ghost = copy === 1 || rep > 0;
                  return (
                    <Link
                      key={`${it.key}-${copy}-${rep}`}
                      href={it.href}
                      aria-hidden={ghost ? true : undefined}
                      tabIndex={ghost ? -1 : undefined}
                      className={`ticker-item is-${it.faction}${it.isNext ? " is-next" : ""}`}
                    >
                      <span className="date-cube">
                        <span className="date-cube-day">{it.day}</span>
                        <small>{it.month}</small>
                      </span>
                      <span className="min-w-0">
                        <span className="ticker-item-title">{it.title}</span>
                        <span className="ticker-item-sub">
                          {it.isNext ? `${nextLabel} · ` : ""}
                          {it.sub}
                        </span>
                      </span>
                    </Link>
                  );
                }),
              )}
              <span className="ticker-spacer" aria-hidden="true">
                <Wordmark height={22} />
              </span>
            </Fragment>
          ))}
        </div>
      </div>
      <button type="button" className="ticker-arrow right-2" onClick={() => nudge(1)} aria-label={nextBtnLabel}>
        ›
      </button>
    </div>
  );
}

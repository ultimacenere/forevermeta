"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";

const noop = () => () => {};

/** Tasto "Copia il codice" della scheda di una build. */
export function CopyCode({ code, label, copied }: { code: string; label: string; copied: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className="btn btn-choice px-3 py-1.5 text-xs"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(code);
          setDone(true);
          window.setTimeout(() => setDone(false), 2000);
        } catch {
          window.prompt(label, code);
        }
      }}
    >
      {done ? copied : label}
    </button>
  );
}

const isNewSnapshot = () => {
  try {
    return new URLSearchParams(window.location.search).get("new") === "1";
  } catch {
    return false;
  }
};

/** Striscia "La tua build è online" dopo la pubblicazione (`?new=1`): letta nel browser, la pagina resta ISR. */
export function NewBanner({ text }: { text: string }) {
  const show = useSyncExternalStore(noop, isNewSnapshot, () => false);
  useEffect(() => {
    if (!show) return;
    try {
      window.history.replaceState(window.history.state, "", window.location.pathname + window.location.hash);
    } catch {
      // niente
    }
  }, [show]);
  return show ? <p className="alert-good mb-6">{text}</p> : null;
}

const hereSnapshot = () => `${window.location.pathname}${window.location.search}${window.location.hash}`;

/** Link all'accesso che riporta qui, hash compreso (il codice della build sta nell'hash). */
export function LoginWithReturn({ loginPath, label, className = "btn btn-primary" }: { loginPath: string; label: string; className?: string }) {
  const pathname = usePathname();
  const next = useSyncExternalStore(noop, hereSnapshot, () => pathname);
  return (
    <a href={`${loginPath}?next=${encodeURIComponent(next)}`} className={className}>
      {label}
    </a>
  );
}

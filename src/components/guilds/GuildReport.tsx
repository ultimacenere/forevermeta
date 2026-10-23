"use client";

import { useEffect, useState, useTransition } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { reportGuild } from "@/lib/community/guildActions";
import type { GuildLabels } from "@/lib/guildLabels";

/**
 * "Segnala questo annuncio" in fondo alla scheda: un tasto discreto, poi un campo per il motivo. Serve l'accesso (la
 * policy delle segnalazioni vuole l'utente): senza, il tasto porta al login e riporta qui. Il proprietario non lo vede.
 */
export function GuildReport({ guildId, ownerId, loginHref, labels }: { guildId: string; ownerId: string; loginHref: string; labels: GuildLabels["report"] }) {
  const [user, setUser] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [done, setDone] = useState<"sent" | "error" | null>(null);
  const [pending, start] = useTransition();

  useEffect(() => {
    const sb = supabaseBrowser();
    if (!sb) return;
    let alive = true;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (alive) setUser(session?.user.id ?? null);
    });
    return () => {
      alive = false;
    };
  }, []);

  if (user === ownerId) return null;
  if (done === "sent") return <p className="mt-8 text-sm text-mint">{labels.sent}</p>;
  if (!open) {
    return (
      <p className="mt-8">
        <button type="button" className="text-xs text-pale-muted underline-offset-2 hover:underline" onClick={() => setOpen(true)}>
          {labels.button}
        </button>
      </p>
    );
  }
  if (!user) {
    return (
      <p className="mt-8 text-sm text-pale-muted">
        {labels.loginNeeded}{" "}
        <a href={loginHref} className="text-sky underline-offset-2 hover:underline">
          →
        </a>
      </p>
    );
  }
  const send = () =>
    start(async () => {
      const fd = new FormData();
      fd.set("id", guildId);
      fd.set("reason", reason);
      const r = await reportGuild(fd);
      setDone(r.error ? "error" : "sent");
    });
  return (
    <form
      className="card-inset mt-8 max-w-xl p-4"
      onSubmit={(e) => {
        e.preventDefault();
        send();
      }}
    >
      <p className="kicker text-pale-muted">{labels.title}</p>
      <label htmlFor="gr-reason" className="mt-2 block text-sm text-chalk">
        {labels.reason}
      </label>
      <textarea id="gr-reason" value={reason} onChange={(e) => setReason(e.target.value)} rows={3} maxLength={500} minLength={3} required placeholder={labels.placeholder} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-sm text-chalk" />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <button type="submit" className="btn btn-choice px-3 py-1.5 text-xs" disabled={pending || reason.trim().length < 3}>
          {labels.send}
        </button>
        <button type="button" className="btn btn-ghost px-3 py-1.5 text-xs" onClick={() => setOpen(false)}>
          {labels.cancel}
        </button>
      </div>
      {done === "error" ? <p className="text-error mt-2 text-sm">{labels.error}</p> : null}
    </form>
  );
}

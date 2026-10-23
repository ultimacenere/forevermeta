"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { supabaseEnabled } from "@/lib/supabase/env";
import { deleteInterface, reportInterface, setInterfaceStatus, voteInterface } from "@/lib/community/interfaceActions";
import { trackEvent } from "@/lib/analytics";
import type { InterfaceLabels } from "@/lib/interfaceLabels";

/** Tasto "Copia il layout" (o il Cooldown Manager): appunti, e se il browser non li concede una finestra con il testo. */
export function CopyString({ text, label, copied, kind, className = "btn btn-primary" }: { text: string; label: string; copied: string; kind: "layout" | "cooldowns"; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      className={className}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          trackEvent("interface_copy", { kind });
          window.setTimeout(() => setDone(false), 2000);
        } catch {
          window.prompt(label, text);
        }
      }}
    >
      {done ? copied : label}
    </button>
  );
}

/** Media e voto dell'iscritto (1–5 stelle) su un'interfaccia, come le build: chi è loggato lo si scopre nel browser. */
export function InterfaceStars({ interfaceId, ownerId, avg, votes, path, loginHref, labels }: { interfaceId: string; ownerId: string; avg: number; votes: number; path: string; loginHref: string; labels: InterfaceLabels["rating"] }) {
  const [userId, setUserId] = useState<string | null | undefined>(supabaseEnabled ? undefined : null);
  const [mine, setMine] = useState<number | null>(null);
  const [stats, setStats] = useState({ avg, votes });
  const [hover, setHover] = useState(0);
  const [msg, setMsg] = useState<{ kind: "ok" | "err"; text: string } | null>(null);
  const [pending, start] = useTransition();

  useEffect(() => {
    const sb = supabaseBrowser();
    if (!sb) return;
    let alive = true;
    (async () => {
      const {
        data: { session },
      } = await sb.auth.getSession();
      const uid = session?.user.id ?? null;
      if (!alive) return;
      setUserId(uid);
      if (uid) {
        const { data } = await sb.from("interface_votes").select("stars").eq("interface_id", interfaceId).eq("user_id", uid).maybeSingle();
        if (alive && data) setMine((data as { stars: number }).stars);
      }
    })();
    return () => {
      alive = false;
    };
  }, [interfaceId]);

  const isOwner = Boolean(userId) && userId === ownerId;
  const canVote = Boolean(userId) && !isOwner && !pending;
  const cast = (n: number) => {
    if (!canVote) return;
    start(async () => {
      const r = await voteInterface(interfaceId, n, path);
      if (r.error) setMsg({ kind: "err", text: r.error === "ownInterface" ? labels.ownBuild : labels.voteError });
      else {
        trackEvent("interface_vote", { stars: n, vote_type: mine ? "update" : "new" });
        setMine(n);
        if (r.avg !== undefined && r.votes !== undefined) setStats({ avg: r.avg, votes: r.votes });
        setMsg({ kind: "ok", text: labels.voted });
      }
    });
  };
  const shown = hover || mine || Math.round(stats.avg);
  const status = !supabaseEnabled || userId === undefined ? null : !userId ? (
    <Link href={loginHref} className="font-semibold text-arcane underline underline-offset-2">
      {labels.loginToVote}
    </Link>
  ) : isOwner ? (
    labels.ownBuild
  ) : mine ? (
    `${labels.yourVote}: ${mine}/5`
  ) : (
    labels.rate
  );

  return (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border border-felt-line bg-night-2/60 px-4 py-3">
      <div>
        <p className="kicker text-pale-muted">{labels.rating}</p>
        <p className="mt-0.5 font-display text-3xl font-extrabold leading-none text-sky">
          {stats.votes ? stats.avg.toFixed(1) : "–"}
          <span className="ml-1 text-base font-semibold text-pale-muted">/5</span>
        </p>
        <p className="text-xs text-pale-muted">{stats.votes ? `${stats.votes} ${stats.votes === 1 ? labels.vote : labels.votes}` : labels.noVotes}</p>
      </div>
      <div>
        <div className="flex gap-1" role="group" aria-label={labels.rate} onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              className={`text-2xl leading-none transition-transform ${canVote ? "cursor-pointer hover:scale-110" : "cursor-default"} ${n <= shown ? "text-gold" : "text-felt-line"}`}
              aria-label={`${n}/5`}
              aria-pressed={mine === n}
              disabled={!canVote}
              onMouseEnter={() => canVote && setHover(n)}
              onClick={() => cast(n)}
            >
              ★
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-pale-muted" aria-live="polite">
          {msg ? <span className={msg.kind === "err" ? "text-error" : "text-good"}>{msg.text}</span> : status}
        </p>
      </div>
    </div>
  );
}

/** Tasti del proprietario (modifica, nascondi o rimetti online, elimina con conferma): invisibili agli altri. */
export function InterfaceOwnerActions({ interfaceId, slug, ownerId, status, locale, editHref, labels }: { interfaceId: string; slug: string; ownerId: string; status: "published" | "hidden"; locale: string; editHref: string; labels: InterfaceLabels["owner"] }) {
  const [mine, setMine] = useState(false);
  const [current, setCurrent] = useState(status);
  const [confirm, setConfirm] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [pending, start] = useTransition();
  const router = useRouter();

  useEffect(() => {
    const sb = supabaseBrowser();
    if (!sb) return;
    let alive = true;
    sb.auth.getSession().then(({ data: { session } }) => {
      if (alive) setMine(session?.user.id === ownerId);
    });
    return () => {
      alive = false;
    };
  }, [ownerId]);

  if (!mine) return null;
  const toggle = () => {
    const next = current === "published" ? "hidden" : "published";
    start(async () => {
      const fd = new FormData();
      fd.set("id", interfaceId);
      fd.set("status", next);
      const r = await setInterfaceStatus(fd);
      if (r.error) setError(labels.error);
      else {
        setError(null);
        setCurrent(next);
        router.refresh();
      }
    });
  };
  const remove = () => {
    start(async () => {
      const fd = new FormData();
      fd.set("id", interfaceId);
      fd.set("slug", slug);
      fd.set("locale", locale);
      const r = await deleteInterface(fd);
      if (r.error || !r.href) setError(labels.error);
      else router.push(r.href);
    });
  };
  return (
    <div className="card-night mt-6 p-4">
      <p className="kicker text-pale-muted">{labels.title}</p>
      {current === "hidden" ? <p className="mt-1 text-sm text-crimson">{labels.hidden}</p> : null}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link href={editHref} className="btn btn-gold px-3 py-1.5 text-xs">
          {labels.edit}
        </Link>
        <button type="button" className="btn btn-choice px-3 py-1.5 text-xs" onClick={toggle} disabled={pending}>
          {current === "published" ? labels.hide : labels.show}
        </button>
        {confirm ? (
          <span className="inline-flex flex-wrap items-center gap-2 text-sm text-chalk">
            {labels.confirm}
            <button type="button" className="btn btn-danger-solid px-3 py-1.5 text-xs" onClick={remove} disabled={pending}>
              {labels.yes}
            </button>
            <button type="button" className="btn btn-ghost px-3 py-1.5 text-xs" onClick={() => setConfirm(false)}>
              {labels.cancel}
            </button>
          </span>
        ) : (
          <button type="button" className="btn btn-danger px-3 py-1.5 text-xs" onClick={() => setConfirm(true)} disabled={pending}>
            {labels.remove}
          </button>
        )}
      </div>
      {error ? <p className="text-error mt-2 text-sm">{error}</p> : null}
    </div>
  );
}

/** "Segnala questa interfaccia": serve l'accesso; il proprietario non la vede. */
export function InterfaceReport({ interfaceId, ownerId, loginHref, labels }: { interfaceId: string; ownerId: string; loginHref: string; labels: InterfaceLabels["report"] }) {
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
  if (done === "sent") return <p className="mt-8 text-sm text-good">{labels.sent}</p>;
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
        <a href={loginHref} className="text-arcane underline-offset-2 hover:underline">
          →
        </a>
      </p>
    );
  }
  const send = () =>
    start(async () => {
      const fd = new FormData();
      fd.set("id", interfaceId);
      fd.set("reason", reason);
      const r = await reportInterface(fd);
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
      <label htmlFor="ir-reason" className="mt-2 block text-sm text-chalk">
        {labels.reason}
      </label>
      <textarea id="ir-reason" value={reason} onChange={(e) => setReason(e.target.value)} rows={3} maxLength={500} minLength={3} required placeholder={labels.placeholder} className="mt-1 w-full rounded-lg border border-felt-line bg-night-2 px-3 py-2 text-sm text-chalk" />
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

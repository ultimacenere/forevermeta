"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { supabaseBrowser } from "@/lib/supabase/client";
import { supabaseEnabled } from "@/lib/supabase/env";
import { voteBuild } from "@/lib/community/buildActions";
import { trackEvent } from "@/lib/analytics";
import type { BuildLabels } from "@/lib/buildLabels";

/**
 * Media e voto dell'iscritto (1–5 stelle) su una build pubblicata, come le stelle dei mazzi di OriginsMeta. La pagina
 * è ISR: chi è loggato e il suo voto si scoprono nel browser; il voto passa dalla Server Action `voteBuild`.
 */
export function BuildStars({ buildId, ownerId, avg, votes, path, loginHref, labels }: { buildId: string; ownerId: string; avg: number; votes: number; path: string; loginHref: string; labels: BuildLabels["rating"] }) {
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
        const { data } = await sb.from("build_votes").select("stars").eq("build_id", buildId).eq("user_id", uid).maybeSingle();
        if (alive && data) setMine((data as { stars: number }).stars);
      }
    })();
    return () => {
      alive = false;
    };
  }, [buildId]);

  const isOwner = Boolean(userId) && userId === ownerId;
  const canVote = Boolean(userId) && !isOwner && !pending;

  const cast = (n: number) => {
    if (!canVote) return;
    start(async () => {
      const r = await voteBuild(buildId, n, path);
      if (r.error) setMsg({ kind: "err", text: r.error === "ownBuild" ? labels.ownBuild : labels.voteError });
      else {
        trackEvent("build_vote", { stars: n, vote_type: mine ? "update" : "new" });
        setMine(n);
        if (r.avg !== undefined && r.votes !== undefined) setStats({ avg: r.avg, votes: r.votes });
        setMsg({ kind: "ok", text: labels.voted });
      }
    });
  };

  const shown = hover || mine || Math.round(stats.avg);
  const status = !supabaseEnabled || userId === undefined ? null : !userId ? (
    <Link href={loginHref} className="font-semibold text-mint underline underline-offset-2 hover:text-sky">
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
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3 rounded-xl border-2 border-sky bg-night-2/60 px-4 py-3">
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

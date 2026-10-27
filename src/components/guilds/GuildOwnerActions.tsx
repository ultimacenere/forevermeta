"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { deleteGuild, refreshGuild, setGuildStatus } from "@/lib/community/guildActions";
import type { GuildLabels } from "@/lib/guildLabels";

/**
 * Tasti del proprietario sulla scheda di una gilda (ISR: chi guarda lo si scopre nel browser): modifica, rinnova,
 * nascondi o rimetti online, elimina con conferma in pagina. Se chi guarda non è il proprietario non si vede nulla.
 */
export function GuildOwnerActions({ guildId, slug, ownerId, status, locale, editHref, labels }: { guildId: string; slug: string; ownerId: string; status: "published" | "hidden"; locale: string; editHref: string; labels: GuildLabels["owner"] }) {
  const [mine, setMine] = useState(false);
  const [current, setCurrent] = useState(status);
  const [confirm, setConfirm] = useState(false);
  const [note, setNote] = useState<{ kind: "ok" | "error"; text: string } | null>(null);
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

  const run = (job: () => Promise<{ error?: string; href?: string }>, onOk: (r: { href?: string }) => void) =>
    start(async () => {
      const r = await job();
      if (r.error) setNote({ kind: "error", text: labels.error });
      else {
        setNote(null);
        onOk(r);
      }
    });

  const toggle = () => {
    const next = current === "published" ? "hidden" : "published";
    const fd = new FormData();
    fd.set("id", guildId);
    fd.set("status", next);
    run(
      () => setGuildStatus(fd),
      () => {
        setCurrent(next);
        router.refresh();
      },
    );
  };

  const renew = () => {
    const fd = new FormData();
    fd.set("id", guildId);
    run(
      () => refreshGuild(fd),
      () => {
        setNote({ kind: "ok", text: labels.refreshed });
        router.refresh();
      },
    );
  };

  const remove = () => {
    const fd = new FormData();
    fd.set("id", guildId);
    fd.set("slug", slug);
    fd.set("locale", locale);
    run(
      () => deleteGuild(fd),
      (r) => {
        if (r.href) router.push(r.href);
      },
    );
  };

  return (
    <div className="card-night mt-6 p-4">
      <p className="kicker text-pale-muted">{labels.title}</p>
      {current === "hidden" ? <p className="mt-1 text-sm text-crimson">{labels.hidden}</p> : null}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Link href={editHref} className="btn btn-gold px-3 py-1.5 text-xs">
          {labels.edit}
        </Link>
        <button type="button" className="btn btn-choice px-3 py-1.5 text-xs" onClick={renew} disabled={pending}>
          {labels.refresh}
        </button>
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
      {note ? <p className={`mt-2 text-sm ${note.kind === "ok" ? "text-mint" : "text-error"}`}>{note.text}</p> : null}
    </div>
  );
}

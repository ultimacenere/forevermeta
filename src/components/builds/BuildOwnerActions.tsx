"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { supabaseBrowser } from "@/lib/supabase/client";
import { deleteBuild, setBuildStatus } from "@/lib/community/buildActions";
import type { BuildLabels } from "@/lib/buildLabels";

/**
 * Tasti del proprietario sulla scheda di una build (ISR: chi guarda lo si scopre nel browser): modifica, nascondi o
 * rimetti online, elimina con conferma in pagina. Se chi guarda non è il proprietario non si vede nulla.
 */
export function BuildOwnerActions({ buildId, slug, ownerId, status, locale, editHref, labels }: { buildId: string; slug: string; ownerId: string; status: "published" | "hidden"; locale: string; editHref: string; labels: BuildLabels["owner"] }) {
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
      fd.set("id", buildId);
      fd.set("status", next);
      const r = await setBuildStatus(fd);
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
      fd.set("id", buildId);
      fd.set("slug", slug);
      fd.set("locale", locale);
      const r = await deleteBuild(fd);
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

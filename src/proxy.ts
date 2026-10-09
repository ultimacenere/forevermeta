import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";
import { supabaseEnabled, supabaseKey, supabaseUrl } from "@/lib/supabase/env";

/**
 * Rinnova la sessione di Supabase nelle pagine renderizzate sul server che la leggono (oggi solo /account): le altre
 * pagine sono statiche e il proxy non le tocca.
 */
export async function proxy(request: NextRequest) {
  let response = NextResponse.next({ request });
  if (!supabaseEnabled) return response;
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (list) => {
        for (const { name, value } of list) request.cookies.set(name, value);
        response = NextResponse.next({ request });
        for (const { name, value, options } of list) response.cookies.set(name, value, options);
      },
    },
  });
  await supabase.auth.getUser();
  return response;
}

// Il matcher deve restare scritto per esteso (Next lo legge alla build): una lingua nuova va aggiunta a mano.
export const config = {
  matcher: ["/:locale(en|it|es)/account"],
};

"use server";

export type WaitlistState = {
  ok: boolean;
  error?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function joinWaitlist(
  _prev: WaitlistState,
  formData: FormData,
): Promise<WaitlistState> {
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const lang = String(formData.get("lang") ?? "en");
  const source = String(formData.get("source") ?? "unknown");

  if (!EMAIL_RE.test(email)) {
    return { ok: false, error: "invalid_email" };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    console.error("[waitlist] Supabase env vars missing");
    return { ok: false, error: "server_misconfigured" };
  }

  const res = await fetch(`${url}/rest/v1/waitlist`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: anonKey,
      Authorization: `Bearer ${anonKey}`,
      Prefer: "return=minimal,resolution=ignore-duplicates",
    },
    body: JSON.stringify([{ email, lang, source }]),
  });

  if (!res.ok) {
    const body = await res.text().catch(() => "");
    console.error("[waitlist] Supabase insert failed", res.status, body);
    return { ok: false, error: "server_error" };
  }

  return { ok: true };
}

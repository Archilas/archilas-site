import { NextResponse } from "next/server";
import { persistWaitlistEmail } from "@/lib/waitlist-store";

const emailOk = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * POST { email } → { ok: true } after durable store.
 * Duplicates are idempotent and still succeed.
 * Missing store env or store errors fail closed (503).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const email =
    typeof body === "object" && body && "email" in body
      ? String((body as { email: unknown }).email || "")
          .trim()
          .toLowerCase()
      : "";

  if (!emailOk(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const stored = await persistWaitlistEmail(email);
    if (!stored) {
      return NextResponse.json(
        { ok: false, error: "We couldn’t save your email just now. Try again shortly, or email hello@archilas.com." },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "We couldn’t save your email just now. Try again shortly, or email hello@archilas.com." },
      { status: 503 },
    );
  }
}

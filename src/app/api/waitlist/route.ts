import { NextResponse } from "next/server";

const emailOk = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

/**
 * Waitlist contract:
 * - POST { email } → { ok: true } for a valid address
 * - Repeats of the same email also succeed
 * Persistence is not wired in this repo. Do not add stores here.
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

  console.info(
    JSON.stringify({
      event: "WAITLIST_SIGNUP",
      email,
      at: new Date().toISOString(),
    }),
  );

  return NextResponse.json({ ok: true });
}

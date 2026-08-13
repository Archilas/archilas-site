import { NextResponse } from "next/server";

const emailOk = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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

  // Pre-launch: accept and acknowledge. Wire to your ESP (Resend, Loops, etc.) before production traffic.
  console.info("[waitlist]", email);

  return NextResponse.json({ ok: true });
}

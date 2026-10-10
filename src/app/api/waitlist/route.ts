import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { isRateLimited } from "@/lib/waitlist-rate";
import { persistWaitlistEmail } from "@/lib/waitlist-store";

const emailOk = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const unavailableMessage = `The waitlist isn’t taking signups right now. Email ${site.contactEmail} and we’ll add you.`;
const limitedMessage = `Too many attempts from here. Wait a few minutes, or email ${site.contactEmail}.`;

function clientKey(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
  return ip;
}

/**
 * POST { email, hp? } → { ok: true } after durable store.
 * `hp` is a honeypot: a filled value is accepted and not stored.
 * Duplicates are idempotent and still succeed.
 * Missing store env or store errors fail closed (503) with a mailto fallback.
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (isRateLimited(clientKey(request))) {
    return NextResponse.json(
      { ok: false, error: limitedMessage, limited: true, email: site.contactEmail },
      { status: 429 },
    );
  }

  const record = typeof body === "object" && body ? (body as { email?: unknown; hp?: unknown }) : {};
  const honeypot = String(record.hp || "").trim();
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const email = String(record.email || "")
    .trim()
    .toLowerCase();

  if (!emailOk(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email address." }, { status: 400 });
  }

  try {
    const stored = await persistWaitlistEmail(email);
    if (!stored) {
      return NextResponse.json(
        { ok: false, error: unavailableMessage, unavailable: true, email: site.contactEmail },
        { status: 503 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: unavailableMessage, unavailable: true, email: site.contactEmail },
      { status: 503 },
    );
  }
}

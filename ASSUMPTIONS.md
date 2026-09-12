# Assumptions

## Waitlist persistence

`POST /api/waitlist` durably stores `{ email, created_at }` in Upstash Redis (Vercel KV REST). Duplicates are idempotent and still return `{ ok: true }`. Missing store env or store errors return 503 — the UI never fakes success. The form lives in a shared modal.

Required env (set on Vercel; never commit secrets):

- `KV_REST_API_URL` + `KV_REST_API_TOKEN`
- or `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`

## Product and copy

- H1: “AI memory that *understands* you.” — Geist bold + Instrument Serif italic on “understands” only. Display size ~10% smaller than the previous clamp.
- Reinforce: Notes compact into living memory; at query time the right context loads — one clear answer.
- Dual CTAs: Join waitlist → (modal) and outline Contact.
- Hero: denser Mem0 stack (chip 18 / sub 22 / CTAs 32) plus “Powered by a memory SLM · early access.” Soft blue wash with depth. No cartoon clouds. Demo is not in the hero.
- Demo sits below the fold in an elevated product window (Notes / Compact / Reason / Answer). Exclusive stage switch, “Ship Friday?” thread. Reason/Answer refuse unsupported bridges. 36s (9s × 4), starts when ≥50% of the board is in view, pauses off-screen. Reduced motion shows the Answer end-state. Replay from Notes.
- How it works: Notes, Compact, Reason, Answer. Why: SLM differentiator band (in development / early access — not live). Footer: “MCP support — coming soon.”
- Sticky topbar is z-50 with blur so demo/cards cannot paint over it.

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

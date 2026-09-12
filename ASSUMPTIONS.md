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
- Hero: Mem0 structure — badge → H1 → sub → CTAs → SLM line → tab strip → product window peeking into the first viewport. Near-white wash with a subtle blue tint. No cartoon clouds.
- Demo lives in the hero (Notes / Compact / Reason / Answer). Exclusive stage switch, “Ship Friday?” thread. Reason/Answer refuse unsupported bridges. 36s (9s × 4), starts when ≥50% of the board is in view. Peek can show static Notes first. Replay from Notes.
- How it works: Notes, Compact, Reason, Answer. Why: SLM differentiator band (in development / early access — not live). Footer: “MCP support — coming soon.”
- Sticky topbar is z-50 with blur so demo/cards cannot paint over it.

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

# Assumptions

## Waitlist persistence

`POST /api/waitlist` durably stores `{ email, created_at }` in Upstash Redis (Vercel KV REST). Duplicates are idempotent and still return `{ ok: true }`. Missing store env or store errors return 503 — the UI never fakes success. The form lives in a shared modal.

Required env (set on Vercel; never commit secrets):

- `KV_REST_API_URL` + `KV_REST_API_TOKEN`
- or `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`

## Product and copy

- H1: “AI memory that *understands* you.” — Geist + Instrument Serif italic on “understands” only.
- One-line reinforce: Notes compact into living memory — then one clear answer.
- Dual CTAs: white Join waitlist → (modal) and outline Contact.
- Landing follows TRYCLEAN-CRAFT-BRIEF: dark canvas, floating pill nav, atmospheric plates, 2-col bands.
- Hero plate: Product demo / Demo video coming soon / Notes → Compact → Reason → Answer — filmed walkthrough on the way. Play glyph disabled. No Ship Friday.
- Compare plate: The usual approach → Archilas. Micros Search. Paste. Hope. → Compact. Reason. Deliver. Exact Marketing bullets. Reduced motion shows the Archilas end state.
- How: Notes / Compact / Reason / Answer. Exclusive stage switch. Spine Compact → Reason → Deliver.
- SLM band: in development / early access — not live. Surfaces: Claude / ChatGPT / Cursor intended; MCP coming soon.
- Footer: “MCP support — coming soon.”

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

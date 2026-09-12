# Assumptions

## Waitlist persistence

`POST /api/waitlist` durably stores `{ email, created_at }` in Upstash Redis (Vercel KV REST). Duplicates are idempotent and still return `{ ok: true }`. Missing store env or store errors return 503 — the UI never fakes success. The form lives in a shared modal.

Required env (set on Vercel; never commit secrets):

- `KV_REST_API_URL` + `KV_REST_API_TOKEN`
- or `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`

## Product and copy

- H1: “AI memory that *understands* you.” — Geist + Instrument Serif italic on “understands” only.
- One-line reinforce: Detailed notes → compacted memory → smart answers.
- Dual CTAs: white Join waitlist → (modal) and outline Contact.
- Landing follows TRYCLEAN-RESTORE-SPARSE: dark canvas, floating pill nav, photographic atmosphere plates, 2-col bands. Inner UI is opaque dark chrome; landscape stays on the outer plate only.
- Hero video: `public/hero-demo.mp4` (or `NEXT_PUBLIC_HERO_DEMO_URL`) loops muted autoplay, playsinline, no controls. Storyboard is HERO-VIDEO-STORYBOARD.md — pricing query, not Ship Friday. Failed load falls back to that query typed in the opaque chrome.
- Hero plate: Product demo / Demo video coming soon / Walkthrough on the way. Play glyph disabled. No Ship Friday.
- Compare: sparse chips on a landscape photo plate. Old way vs Archilas. No demo UI. Old: Search · Inject all · Heavy tokens · No long-term · No sense of time. Us: Compact · Reason · Deliver.
- How: Notes in. Answers out. / Compact what matters. Reason when you ask. Stage switch on the plate. Spine Compact → Reason → Deliver.
- SLM band: early access — not live. Surfaces: Built for tools you use. / Claude · ChatGPT · Cursor. MCP coming soon.
- Footer: “MCP support — coming soon.”

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

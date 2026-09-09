# Assumptions

## Waitlist persistence

`POST /api/waitlist` durably stores `{ email, created_at }` in Upstash Redis (Vercel KV REST). Duplicates are idempotent and still return `{ ok: true }`. Missing store env or store errors return 503 — the UI never fakes success. The form lives in a shared modal.

Required env (set on Vercel; never commit secrets):

- `KV_REST_API_URL` + `KV_REST_API_TOKEN`
- or `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN`

## Product and copy

- H1: “AI memory that *understands* you.” — Geist bold + Instrument Serif italic on “understands” only. Display size ~10% smaller than the previous clamp.
- Reinforce: Notes → compact → the right memory loads at query time → one clear answer.
- Dual CTAs: Join waitlist → (modal) and outline Contact.
- Hero: `#E8F0F9→#F7F7F5` wash plus large soft white radials. No cartoon clouds.
- Demo story is everyday work life (café Fridays). Not legal or launch dates. No “0 lines” first paint.
- Why-better: notes compact; query-time load; one clear answer. MCP intended, in development.
- Sticky topbar is z-50 with blur so demo/cards cannot paint over it.

## Unchanged

- Production DNS was not added in this repo.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

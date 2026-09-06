# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. The form lives only in a shared modal.

## Product and copy

- H1: “AI memory that *understands* you.” — Geist bold + Instrument Serif italic on “understands” only.
- Reinforce: Detailed notes → compacted memory → smart answers from many sources.
- Dual CTAs: Join waitlist → (modal) and outline Contact in topbar, hero, and waitlist band.
- Hero: soft blue wash, dense Mem0 stack, peeking product demo. No cartoon clouds.
- Demo story is everyday work life (café Fridays / flat white / deep work 10am). Not legal or launch dates.
- Why-better band states the architecture: compacted living memory, query-time reasoning, refuse unsupported bridges. MCP is intended, in development — not live.
- MCP is intended, not live. Surfaces state that as a fact, not an apology.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

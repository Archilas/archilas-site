# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. The form lives only in a shared modal.

## Product and copy

- H1: “AI memory” / “that understands you.”
- Reinforce: Detailed notes → compacted memory → smart answers from many sources.
- Dual CTAs: Join waitlist → (modal) and outline Contact in topbar, hero, and waitlist band.
- MCP is intended, not live. Surfaces state that as a fact, not an apology.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

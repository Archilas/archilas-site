# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. Persistence acceptance is waived. The form lives only in a shared modal.

## Product and copy

- H1: "AI memory that understands you."
- Reinforce: "Archilas remembers your preferences, decisions, and open loops — so your AI stops asking."
- Demo beats: notes → compacted memory → smart answer. Compact / Reason · Deliver are sublabels only.
- MCP is the intended delivery path and is not claimed as live. Surfaces say In development.
- Signal teal `#0F766E` is the active demo tab underline, Play fill, and focus rings only.
- Contact (`mailto:hello@archilas.com`) sits beside Join waitlist in the topbar, hero, and waitlist band.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

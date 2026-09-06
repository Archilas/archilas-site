# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. Persistence acceptance is waived.

## Product and copy

- H1: "Passages aren't memory. A record is."
- Sub: "Archilas turns your conversations into a record your tools can use."
- Spine is Compact → Reason → Deliver.
- MCP is the intended delivery path and is not claimed as live.
- Paper/ink system. Signal rust `#C2410C` is pipeline motion, active, and focus only.
- Nav is Pipeline, Record, Waitlist.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

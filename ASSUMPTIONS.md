# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. Persistence acceptance is waived.

## Product and copy

- H1: "Passages aren't memory. A record is."
- Sub: "Preferences, decisions, open loops — Compact. Reason. Deliver."
- Spine is Compact → Reason → Deliver.
- MCP is the intended delivery path and is not claimed as live.
- Paper/ink system. One inverse chapter. Teal `#0F766E` is focus rings only.
- Nav is Record, Comparison, Waitlist.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

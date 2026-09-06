# Assumptions

## Waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates, and writes a `WAITLIST_SIGNUP` log line. No DB. Persistence acceptance is waived.

## Product and copy

- H1: "Archilas keeps a record your AI can use."
- Only the word "record" is italic.
- Spine in the hero box: Transcript → Compact → Reason → Deliver → Record.
- Reason preserves “Not in the record.”
- MCP is the intended delivery path and is not claimed as live.
- Signal teal `#0F766E` is the active tab underline, Run fill, and focus rings only.
- Nav is How it works, Product, Waitlist. No login/signup.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when env vars are set.
- No facts were invented.

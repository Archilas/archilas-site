# Assumptions

## Blocker: waitlist does not persist

**This is the only backend blocker.** `POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates. It `console.info`s the address and does not persist.

Hermes and Marketing: leave waitlist non-persisting. Do not add Supabase/DB.

Form UX is wired: hero + waitlist `POST /api/waitlist`. Nav / mobile Join waitlist and anchors use real hash links.

## Product and copy

- Locked H1: "RAG finds passages. Archilas keeps a record."
- Locked sub: "Preferences, decisions, open loops — Compact. Reason. Deliver."
- Spine is Compact → Reason → Deliver. Distill / Vault are out.
- MCP is the intended delivery path and is not claimed as live.
- Ground is warm sand with crisp teal and warm section bands. Dark product windows. Teal `#0D9488` is the interactive accent. No atmospheric orbs.
- Auto motion is only the Example-record tab cycle.

## Unchanged

- Production DNS and env vars were not added.
- No facts were invented (latency, certifications, logos, counts, availability).

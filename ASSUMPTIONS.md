# Assumptions

## Blocker waived: waitlist does not persist

`POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates. It writes a structured `WAITLIST_SIGNUP` log line and does not persist.

Hermes: leave waitlist non-persisting. Do not add Supabase/DB. Acceptance line “Waitlist persists somewhere retrievable” is waived.

Form UX is wired on hero + waitlist: loading, error, and success states.

## Product and copy

- Locked H1: "RAG finds passages. Archilas keeps a record."
- Locked sub: "Preferences, decisions, open loops — Compact. Reason. Deliver."
- Spine is Compact → Reason → Deliver. Distill / Vault are out.
- MCP is the intended delivery path and is not claimed as live.
- Three solid bands: paper, one tint compare, dark product. Teal `#0D9488` is the interactive accent under 2%. No atmospheric orbs.
- Auto motion is only the Example-record tab cycle. Pause is a real control.

## Unchanged

- Production DNS and env vars were not added.
- Optional analytics scripts load only when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` or `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set.
- No facts were invented (latency, certifications, logos, counts, availability).

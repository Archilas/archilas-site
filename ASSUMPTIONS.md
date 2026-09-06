# Assumptions

## Blocker: waitlist does not persist

**This is the only backend blocker.** `POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates. It `console.info`s the address and does not persist.

Hermes: leave waitlist non-persisting. Do not add Supabase/DB.

Form UX is wired and should succeed in the browser:

- Hero and waitlist section both `POST /api/waitlist`
- Valid email → success
- Duplicate / repeat email → success
- Invalid email → error
- Network failure → error
- Nav / mobile "Join waitlist" and in-page anchors use real hash links (`/#waitlist`, `/#how`, `/#product`)

## Product and copy

- Spine is Compact → Reason → Deliver. Distill / Vault / Skeleton are out.
- H1: "RAG finds passages. Archilas keeps the picture." Subhead is the spine.
- MCP is the intended delivery path. Delivery surfaces are in development and are not claimed as live.
- Primary CTAs are near-black. Teal is steppers, focus, and one static wash.
- Ground is warm sand with two static washes. Not sterile #FAFAF9. Not multi-orb bokeh.
- Demos are interactive product windows. Auto-play stops on first click.

## Unchanged

- Production DNS and env vars were not added.
- No facts were invented (latency, certifications, logos, counts, availability).

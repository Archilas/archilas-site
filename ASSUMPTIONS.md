# Assumptions

## Blocker: waitlist does not persist

**This is the only backend blocker.** `POST /api/waitlist` returns `{ ok: true }` for a valid email, including duplicates. It `console.info`s the address and does not persist.

This repo has no database, ESP, KV, or env-backed waitlist destination. No `RESEND`, `UPSTASH`, `DATABASE`, or similar secrets are present. Persistence was not added (no new services).

Form UX is wired and should succeed in the browser:

- Hero and waitlist section both `POST /api/waitlist`
- Valid email → success
- Duplicate / repeat email → success
- Invalid email → error
- Network failure → error
- Nav / mobile "Join waitlist" and in-page anchors use real hash links (`/#waitlist`, `/#how`, `/#product`)

Until an existing persistence path is connected, signups will not survive a process restart and will not appear in an owned list.

## Product and copy

- Spine is Compact → Reason → Deliver. Prior theater names are out.
- H1 is "Memory that stays." Subhead is the spine.
- MCP is the intended delivery path. Delivery surfaces are in development and are not claimed as live.
- Primary CTAs are near-black. Teal is limited to focus rings and the active stepper.
- Page is a clean light surface with a sharp dark product window. No orbs, frost, or lavender.
- Motion is only inside the product window and contrast/RAG demos.

## Unchanged

- Production DNS and env vars were not added.
- No facts were invented (latency, certifications, logos, counts, availability).

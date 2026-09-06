# Assumptions

## Blocker: waitlist does not persist

**`POST /api/waitlist` exists and returns `{ ok: true }` for a valid email, including duplicates. It does not persist.** The handler only `console.info`s the address. This repo has no database, ESP, KV store, or env-backed waitlist destination. Per instructions, no new database, environment variables, or services were added.

Form UI is still built against the expected contract:

- Hero and waitlist section both `POST /api/waitlist`
- Valid email → success
- Duplicate / repeat email → success
- Invalid email → error
- Network failure → error

Until an existing persistence path is connected, waitlist signups will not survive a process restart and will not appear in an owned list.

## Product and copy

- Spine is Compact → Reason → Deliver. Prior theater names are out.
- MCP is the intended delivery path. Delivery surfaces are in development and are not claimed as live. Host names are text only. No MCP config JSON, tool names, or REST/SDK samples.
- Blog has five posts, so Resources appears in nav and footer.
- `/solutions` and `/pricing` redirect to `/#waitlist` so Solutions/Pricing nav and hardened pricing copy are gone.
- Analytics `track()` emits `waitlist_submit`, `waitlist_success`, `waitlist_error`, and `cta_click`. No analytics vendor is installed; adding one would be a new service.
- Primary CTAs are near-black. Teal is limited to focus rings and the active How-it-works stepper.
- One content dark section: How it works. Footer stays dark as chrome.
- Hero is centered on desktop and mobile. No side product panel.

## Demos

- How-it-works and contrast stages are illustrative motion, not product recordings.
- They only show Compact → Reason → Deliver and the existing example record. No Distill / Vault / Skeleton / confidence / tool theater / fake MCP live / REST / SDK.
- `prefers-reduced-motion: reduce` stops the loops and shows the filled static record.

## Unchanged

- Waitlist persistence is still not wired. This branch does not change `POST /api/waitlist`.
- Production deploy, DNS, and env vars were not touched. There is no `vercel.json` in this repo.
- This branch is isolation. No feature flag.
- No facts were invented (latency, certifications, logos, counts, availability).

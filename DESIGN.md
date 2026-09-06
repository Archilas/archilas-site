# Archilas Site — Design System

Flat warm off-white shell. Solid dark product windows. Hex lives in `src/styles/tokens.css` (JS mirror: `src/styles/tokens.ts`).

## Color

Three solid page bands only:

| Token | Value | Role |
|------|-------|------|
| `--paper` | `#F4F0E8` | Page ground (hero, holds, waitlist) |
| `--tint` | `#DCECEA` | One compare band |
| `--bg-dark` | `#0A0A0A` | Product band, product windows, footer |
| `--elevated` | `#FFFDF8` | Header, cards, controls |
| `--accent` | `#0D9488` | Stepper underline, focus, hold-card hover. Keep under 2%. |

No `--warm` section band. No orbs, radial washes, blobs, frost, glow, or lavender. Primary CTAs are near-black. Body copy ≥4.5:1.

## Motion

- Auto-play only on the Example-record Compact → Reason → Deliver cycle (~4s). Pause control is wired. Hover also pauses. Reduced motion is static and still clickable.
- Active step underline springs in 200ms.
- Compare windows are user-driven.

## Copy

- H1: RAG finds passages. Archilas keeps a record.
- Sub: Preferences, decisions, open loops — Compact. Reason. Deliver.
- Spine: Compact → Reason → Deliver. No Distill / Vault.
- Waitlist success: You’re on the list / We’ll email when Archilas opens.

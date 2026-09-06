# Archilas Site — Design System

Paper and ink. One inverse pipeline frame. Hex lives in `src/styles/tokens.css` (JS mirror: `src/styles/tokens.ts`).

## Color

| Token | Value | Role |
|------|-------|------|
| `--bg` | `#F7F7F5` | Page ground |
| `--surface` | `#FFFFFF` | Forms, windows, waitlist panel |
| `--ink` | `#0A0A0A` | Display, headings, primary CTAs |
| `--body` | `#3F3F46` | Body |
| `--muted` | `#737373` | Labels, captions |
| `--line` | `#E5E5E5` | Hairlines |
| `--inverse` | `#0A0A0A` | THE PIPELINE frame |
| `--signal` | `#C2410C` | Pipeline motion, active, focus only |
| `--focus` | `#C2410C` | Focus rings |

Signal rust is for pipeline motion / active / focus. Keep it under ~2% of the resting page. No mint, aqua, teal fills. No orbs, gradients, blobs. No traffic-light dots.

## Signatures

- Centered hero. Pipeline starts within ~400px of the H1.
- Archilas window chrome: mono object name. No macOS dots.
- CTAs are solid ink.

## Layout

- Landing: Nav / Hero / THE PIPELINE / Record / Compare / Delivery / Waitlist / Footer.
- Pipeline frame is full-bleed inverse, min-height 560px.
- Waitlist is the centered conversion block.

## Copy

- H1: Passages aren't memory. A record is.
- Sub: Archilas turns your conversations into a record your tools can use.
- Spine: Compact → Reason → Deliver. No Distill / Vault.

# Archilas Site — Design System

Warm sand marketing shell. Dark product windows you can drive. Hex lives in `src/styles/tokens.css` (JS mirror: `src/styles/tokens.ts`).

## Color

| Token | Value | Role |
|------|-------|------|
| `--paper` | `#F0EBE1` | Page ground (warm sand, not sterile white) |
| `--elevated` | `#FFFBF4` | Header, cards, controls |
| `--surface` | `#E7E1D4` | Recessed frames |
| `--tint` | `#E4EEE9` | Differ / RAG bands |
| `--border` | `#D4CBB8` | Hairlines |
| `--near-black` | `#0A0A0A` | Display, headings, primary CTAs |
| `--ink` | `#171717` | Strong UI text |
| `--body` | `#3F3F46` | Body copy |
| `--muted` | `#5C564C` | Labels |
| `--bg-dark` | `#0A0A0A` | Product windows, product band, footer |
| `--accent` | `#0D9488` | Active stepper, focus, one hero wash |
| `--ember` | `#C26A3A` | One foot wash only |

Two static washes (teal hero, ember foot). No floating orbs, no bokeh drift, no frost, no lavender. Primary CTAs stay near-black on light. Body copy ≥4.5:1.

## Type

Geist + Geist Mono. Upright only. No italics in UI.

- Display: 44–68 / 550 / tight tracking
- H2: 28–40 / 600
- Body: 16–18 / 400
- Label: 12 / uppercase / muted
- Mono: 12–13, product windows only

## Shape and space

- Cards 12, controls 8, product window 12
- Max width 1120, horizontal pad 24
- Vertical pad 88 desktop / 56 mobile
- Nav 64, controls 44
- Hero: RAG-contrast H1, then a dark product window. Differ and RAG are mini windows.

## Motion

- Auto-advance until the first click, then the user drives.
- Hover/focus pauses. Click tabs, snippets, passages, rows.
- Keyboard: arrow keys on tablists, Enter/Space on rows.
- Reduced motion: static first state, still clickable.

## Copy

- Precise. Builder-facing. Waitlist is the only conversion goal.
- Spine: Compact → Reason → Deliver.
- H1 contrasts RAG in one line.
- Do not invent certifications, customer logos, counts, or paid plans.
- No Distill / Vault / Skeleton theater.

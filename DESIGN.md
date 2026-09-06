# Archilas Site — Design System

Light-primary marketing shell on a warm atmospheric ground. Hex values live in `src/styles/tokens.css` (JS mirror: `src/styles/tokens.ts`).

## Color

| Token | Value | Role |
|------|-------|------|
| `--near-black` | `#0A0A0A` | Display, headings, primary CTAs |
| `--ink` | `#171717` | Strong UI text |
| `--body` | `#3F3F46` | Body copy |
| `--muted` | `#52525B` | Labels |
| `--border` | `#E4E4E7` | Rules |
| `--surface` / `--paper` | `#F3EEE6` | Warm page ground |
| `--elevated` | `#FFFFFF` | Solid controls |
| `--glass` | white 78% | Frosted cards / header |
| `--border-input` | `#D4D4D8` | Inputs / secondary buttons |
| `--bg-dark` | `#09090B` | Footer / OG / one content section |
| `--card-dark` | `#18181B` | Dark cards |
| `--border-dark` | `#27272A` | Dark rules |
| `--text-dark` | `#D4D4D8` | Dark text |
| `--accent` | `#0D9488` | Focus rings and the active stepper only |
| `--accent-dark` | `#2DD4BF` | Accent on dark |

Accent stays under 2% of the viewport. No `#0D9488` fills, buttons, or section backgrounds. Soft amber / dusk / sky orbs are atmosphere only — not brand fills, not lavender. Every primary CTA is solid near-black with white text. Body copy stays ≥4.5:1 on paper and glass.

## Type

Geist + Geist Mono. Upright only. No italics in UI.

- Display: 40–64 / 600–700
- H2: 28–40 / 600
- H3: 20–24 / 600
- Body: 16–18 / 400 / 1.6 / body color
- Label: 12–13 / uppercase / muted
- Mono: 13–14, example record only

## Shape and space

- Cards 12, controls 8
- Max width 1160, horizontal pad 24
- Vertical pad 80 desktop / 56 mobile
- Nav 64, controls 46
- Section height is content + padding. Cards hug content.

## Copy

- Precise. Builder-facing. Waitlist is the only conversion goal.
- Spine: Compact → Reason → Deliver.
- Do not invent certifications, customer logos, counts, or paid plans.

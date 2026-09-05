# Archilas Site — Design System

Light-primary marketing shell. Accent is Vault Teal. Hex values live in `src/styles/tokens.css` (JS mirror: `src/styles/tokens.ts`).

## Color

| Token | Value | Role |
|------|-------|------|
| `--near-black` | `#0A0A0A` | Display / headings |
| `--ink` | `#171717` | Strong UI text |
| `--body` | `#3F3F46` | Body copy |
| `--muted` | `#52525B` | Labels |
| `--border` | `#E4E4E7` | Rules |
| `--surface` | `#FAFAFA` | Bands |
| `--elevated` | `#FFFFFF` | Nav, cards, page |
| `--border-input` | `#D4D4D8` | Inputs / secondary buttons |
| `--bg-dark` | `#09090B` | Footer / OG / code |
| `--card-dark` | `#18181B` | Dark cards |
| `--border-dark` | `#27272A` | Dark rules |
| `--text-dark` | `#D4D4D8` | Dark text |
| `--accent` | `#0D9488` | Focus / borders (not white-on-teal fills) |
| `--accent-solid` | `#0F766E` | Filled buttons with white text |
| `--accent-dark` | `#2DD4BF` | Accent on dark |
| Confidence | high / mid / low | `#15803D` / `#B45309` / `#BE123C` |

Accent stays under 5% of the viewport. Never put white text on `#0D9488`.

## Type

Geist + Geist Mono. Upright only. Italics are allowed on `.pull-quote` only.

- Display: 40–64 / 600–700
- H2: 28–40 / 600
- H3: 20–24 / 600
- Body: 16–18 / 400 / 1.6 / body color
- Label: 12–13 / uppercase / muted
- Mono: 13–14

## Shape and space

- Cards 12, controls 8, pills 999 only for demo tools
- Max width 1160, horizontal pad 24
- Vertical pad 80 desktop / 56 mobile
- Nav 64, controls 46
- Section height is content + padding. Cards hug content.

## Copy

- Precise. Builder-facing. Waitlist is the only conversion goal.
- Do not invent SOC 2, customer logos, counts, or a free plan.

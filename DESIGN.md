# Archilas Site — Design System

Dark, textured, Resend-adjacent craft. Do not copy Resend. Do not ship flat #000 / #fff squares. Do not use Google “AI default” stacks (Geist, Instrument Serif, Inter).

## Color (never pure black / pure white)

| Token | Value | Role |
|------|-------|------|
| `--color-bg` | `#0B0B0C` | Page (charcoal) |
| `--color-surface` | `#121214` | Bands / wells |
| `--color-elevated` | `#17171A` | Cards / panels |
| `--color-ink` | `#ECECEE` | Primary text |
| `--color-muted` | `#9B9BA3` | Secondary text |
| `--color-border` | `rgba(255,255,255,0.08)` | Soft rules |
| `--color-border-strong` | `rgba(255,255,255,0.14)` | Buttons / focus |

Atmosphere: soft radial light from upper center (cool gray, low opacity) + fine film grain. No neon purple wash. No flat voids.

## Shape

- Soft radii: **14px** controls, **18px** cards/panels. Not hard squares. Not full pills by default.
- Thin 1px borders. Depth from layered charcoal + inset highlights, not drop-shadow spam.

## Type (self-hosted)

Resend uses Domaine + ABC Favorit + Commit Mono. We mirror the *roles*, not the licensed faces:

| Role | Face | Why |
|------|------|-----|
| Display | **Zodiak** | High-contrast editorial serif (Domaine energy) |
| UI / body | **Satoshi** | Geometric neo-grotesque (Favorit energy) |
| Code | **Commit Mono** | Same mono Resend ships |

- Hero display: ~`clamp(3.25rem, 8vw, 5.75rem)`, tracking `-0.01em`, optional soft vertical text gradient.
- Italics in Zodiak for emphasis beats. Hierarchy via size + gray, not heavy weight.

## Motion

- Soft fade/rise on hero.
- Grain is static CSS; caret / line reveal in product panel.
- Hover: border brightens slightly. No bounce. No glow spam.

## Copy

- Short. Direct. No em dashes. No hype.

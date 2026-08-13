# Archilas Site · Design System

Visual language: light-mode Resend / Cursor. Monochrome only. Engineer-written, not marketing-written.

## Color (black / white / gray only)

| Role | Token | Value |
|------|-------|-------|
| Background | `--color-bg` | `#FAFAF9` |
| Surface | `--color-surface` | `#F4F4F3` |
| Text | `--color-ink` | `#16161A` |
| Muted text | `--color-muted` | `#6B6B6B` |
| Border | `--color-border` | `#E5E5E3` |

Rules:

- No accent color. No amber, gold, brown, blue, purple, green.
- No gradients. No noise textures. No glow. No glassmorphism.
- Buttons: solid near-black on off-white. Never colored.
- Borders: 1px `--color-border` when structure needs a line. No heavy shadows.

## Typography

| Role | Family |
|------|--------|
| Headlines + body | **Geist Sans** (geometric). Weight ≤ 500 for headlines. Hierarchy via size and spacing, not boldness or color. |
| Code / technical | **Geist Mono** · API snippets, MCP examples, protocol names in technical context. |

- Body ≥ 16px, line-height ~1.6, measure ~60–80ch.
- One `h1` per page.

## Layout

- Generous whitespace. Major sections ~160–200px vertical padding.
- Spacing scale: multiples of 8px (4px half-step ok).
- Asymmetric or stacked layouts. No three-identical-card grids.
- Left-aligned content by default.
- Thin borders for chrome (code panels, dividers). No decorative cards.

## Copy

- Short sentences. Direct. No hype adjectives.
- No em dashes (` - `). Use periods, commas, or colons.
- Do not call out marketing tropes you are avoiding.

## Forbidden

- Colored CTAs, badges, pills, left-border stripes
- Stock photos, illustrations, 3D renders
- Serif display fonts
- Fabricated logos, testimonials, or stats

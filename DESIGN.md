---
name: Archilas Signal Ledger
version: 1.0
memorable: Agents forget. Archilas remembers — and cites the source.
---

# Archilas design system — Signal Ledger

## Design read

B2B SaaS landing for technical buyers and AI operators, with a diagram-led memory-agent language, leaning toward cool paper + forest ink + custom SVG illustrations (not glassmorphism, not dark mesh).

## Design-shotgun directions

| | Direction | Why considered |
|---|---|---|
| A | **Signal Ledger** (chosen) | Cool paper `#EEF1F0`, ink `#141816`, forest `#1F6B4A`. Asymmetric sections. Custom line diagrams carry the product story. |
| B | Dark Operator Desk | Charcoal + amber terminal panels. Rejected: too close to prior vibecoded dark AI looks Hermes rejected. |
| C | Editorial Blueprint | Ivory + serif + architectural rules. Rejected: warm cream/serif bias cluster; conflicts with playbook “one accent sans” rule. |

**Pick:** A — Signal Ledger. One-line reason: it shows the memory-agent story through ownable diagrams without the glass/blue SaaS defaults or the dark-glow AI template Hermes called vibecoded.

## Brandkit

- **Metaphor:** ledger / cited memory — a quiet central agent that receives streams and returns answers with sources.
- **Mark:** existing Archilas mark (retain). Wordmark in Geist, tight tracking.
- **Accent:** forest green only. No second accent.
- **Surfaces:** cool paper, slight grain via CSS noise, hairline `#C5CDC6` rules. Radius 4px. No glass, no glow, no gradient blobs.

## Tokens (primitive → semantic)

| Primitive | Value | Semantic |
|---|---|---|
| paper-100 | `#EEF1F0` | `--bg` |
| paper-50 | `#F7F8F7` | `--surface` |
| ink-900 | `#141816` | `--ink`, `--cta` |
| ink-600 | `#3D4540` | `--body` |
| ink-400 | `#6A736C` | `--muted` |
| line-300 | `#C5CDC6` | `--line` |
| forest-600 | `#1F6B4A` | `--signal`, `--diagram` |
| forest-100 | `#D7EBE1` | `--accent-soft` |

## Typography

- Display / UI: Geist, weight 600–680, tracking `-0.04em` to `-0.05em`
- Mono labels: Geist Mono, uppercase micro labels for diagram captions
- No Inter. Serif reserved off (Instrument kept loaded for legacy pages; unused on home)

## Layout

- Max width 1120px. Pad-x 20/40.
- Hero: brand + H1 + sub + one CTA + one full-bleed diagram plane (split on desktop, stack on mobile).
- Sections alternate left-copy/right-figure and figure-first. No 3-equal feature cards.
- Motion: enter fade/translate on scroll (respect `prefers-reduced-motion`). Diagram stroke draw optional, subtle.

## Copy posture

Locked memory-agent wording. Integrations (Cursor, Claude Code, MCP) = coming soon. Accuracy over split-second speed. Repo memory secondary.

## Conflicts resolved

- ui-ux-pro-max suggested glassmorphism + blue/orange → **rejected** (playbook + Hermes + no-ai-slop).
- theme-factory Tech Innovation / Forest Canopy → used only as palette inspiration; custom Signal Ledger tokens win.
- brand-guidelines (Anthropic) → **skipped** for product UI (wrong brand).
- soft-skill Ethereal Glass / cream editorial → **skipped** (anti-slop).
- brutalist CRT mode → **skipped**; Swiss-industrial line discipline only informs diagram stroke weight.

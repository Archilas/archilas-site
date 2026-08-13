# Archilas Site — Design System

Light-mode Resend / Cursor: monochrome, dense, product-forward.

## Color

| Role | Token | Value |
|------|-------|-------|
| Background | `--color-bg` | `#FAFAF9` |
| Surface | `--color-surface` | `#F4F4F3` |
| Text | `--color-ink` | `#16161A` |
| Muted | `--color-muted` | `#6B6B6B` |
| Border | `--color-border` | `#E5E5E3` |

No accent color. No gradients. No glow. Buttons are solid near-black.

## Type

- **Geist Sans** for UI and headlines. Tight tracking on large type. Headline weight 500.
- **Geist Mono** for code, MCP, API surfaces, technical labels.
- Hierarchy from size and spacing. Not color. Not heavy weight.
- Body 15–16px. Subheads short.

## Layout (critical)

- Prefer **product density** over empty whitespace. If a section feels sparse, add structure (bordered panel, grid, code) or cut padding. Do not pad emptiness.
- Section padding typically `64–96px`, not 160–200px on thin content.
- Hero should fill the first viewport with **copy + product chrome**, not a lonely headline in a void.
- Max content width ~1120px. Thin 1px borders for chrome.

## Copy

- Short. Specific. Engineer voice (Resend / Cursor).
- No em dashes. No hype. No tropes about tropes.
- Split long ideas: short `h1`, supporting sentence below.

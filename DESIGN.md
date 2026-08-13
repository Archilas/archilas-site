# Archilas Site — Design System

Every page and component must follow this file. If you are about to add a gradient, a three-card grid, Inter at weight 700, or a gray-bordered card: stop and re-read.

## Color (three hues maximum)

| Role | Token | Value |
|------|-------|-------|
| Background | `--color-bg` | `#FAF8F3` |
| Surface (subtle lift) | `--color-surface` | `#F3EFE6` |
| Text | `--color-ink` | `#1A1815` |
| Muted text | `--color-muted` | `#5C574F` |
| Accent | `--color-accent` | `#C4622D` |

Rules:

- Light mode is primary. No dark-mode-by-default. No `prefers-color-scheme` auto-swap.
- Accent appears in at most 3–4 places per page (primary CTA, a key phrase highlight, active nav, focus ring).
- No multi-stop gradients anywhere. Hero atmosphere: one subtle radial accent in a single corner at low opacity, and/or a fine noise texture — never a gradient wash.
- No purple, indigo, or default Tailwind blue as brand color.

## Typography

| Role | Family | Notes |
|------|--------|-------|
| Display / headlines | **Fraunces** | Serif with character. Weight **≤ 500**. Size carries weight, not boldness. |
| Body / UI | **Geist** | Clean sans. Not Inter, Roboto, or Open Sans. |

- Body minimum **16px**, line-height ~1.6–1.7.
- Measure (line length) **60–80 characters** for long reading text.
- One `h1` per page. Logical `h2` / `h3` hierarchy.

## Layout

- **No three-identical-card grids.** Prefer asymmetric splits (~60/40), vertical stacks with alternating alignment, or a single primary column with a secondary rail.
- Left-align body and section content. Center alignment only for rare moments — prefer a left-aligned hero with generous right margin.
- Major section vertical padding: **160–200px** (`py-20` / `py-24` / `py-[10rem]` equivalents using the 8px scale).
- Spacing scale: multiples of **8px** only (4px half-step allowed). No arbitrary values (13, 37, etc.).

## Components

### Cards

- Borderless by default.
- Separate with whitespace first, then a subtle surface shift (`--color-surface`), then soft elevation last.
- **Never** a flat gray 1px border as decoration.
- **Never** a colored left-border stripe unless it marks a semantic state (error/warning).

### Buttons

- Solid color only: ink-on-cream, cream-on-ink, or accent for primary CTAs.
- No gradient buttons. No sparkle/emoji CTAs. No icon-arrow “event” buttons.
- Primary marketing CTA copy for pre-launch: **Join the waitlist** (not “Get Started”).

### Forbidden patterns

- Badge/pill floating above hero headlines (“New!”).
- Numbered 1·2·3 step rows unless the content is genuinely sequential.
- Glassmorphism, glowing borders, 3D blobs, generic stock photography.
- Fabricated logos, testimonials, or usage statistics.

## Motion

Use motion sparingly for presence, not noise:

1. Soft fade/rise on first hero load.
2. Underline or color shift on nav hover.
3. Button active/pressed state.

No perpetual floating animations.

## SEO / markup checklist (every page)

- Server-rendered or statically generated HTML with real content in the initial response.
- Unique meta title + description; Open Graph + Twitter Card tags.
- Semantic landmarks: `header`, `nav`, `main`, `footer`, `article` where appropriate.
- JSON-LD where applicable (Organization on home, Article on posts).
- Descriptive `alt` on every meaningful image.

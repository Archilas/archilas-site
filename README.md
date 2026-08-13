# Archilas marketing site

Public marketing site for [Archilas](https://archilas.com) — persistent memory for AI.

## Stack

- Next.js App Router (SSR / static generation for SEO & AEO)
- TypeScript
- Tailwind CSS v4

## Design system

See [`DESIGN.md`](./DESIGN.md). Do not invent gradients, three-card grids, Inter-700 headlines, or bordered gray cards.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm start
```

## Pages

- `/` — landing
- `/solutions` — personas
- `/pricing` — indicative tiers
- `/resources` — hub
- `/blog` — index + posts

Waitlist submissions hit `POST /api/waitlist` (logs email; wire an ESP before production).

## Constraints

- Marketing only — no dashboard, auth, or connection UI
- No internal codenames or eval scoreboards
- No fabricated logos, testimonials, or usage stats

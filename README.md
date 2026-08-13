# Archilas marketing site

Public marketing site for [Archilas](https://archilas.com). Persistent memory for AI.

## Stack

- Next.js App Router (SSR / static generation for SEO and AEO)
- TypeScript
- Tailwind CSS v4

## Design system

See [`DESIGN.md`](./DESIGN.md). Light-mode monochrome (Resend / Cursor style). Black, white, gray only. Geist Sans + Geist Mono.

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

- `/` landing
- `/solutions` personas
- `/pricing` indicative tiers
- `/resources` hub
- `/blog` index and posts

Waitlist submissions hit `POST /api/waitlist` (logs email; wire an ESP before production).

## Constraints

- Marketing only. No dashboard, auth, or connection UI.
- No internal codenames or eval scoreboards.
- No fabricated logos, testimonials, or usage stats.

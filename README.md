# Archilas marketing site

Public marketing site for [Archilas](https://archilas.com). Persistent memory layer for AI.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4

## Design system

See [`DESIGN.md`](./DESIGN.md). Light-primary. Geist + Geist Mono.

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
- `/resources` hub (shown when the blog has two or more posts)
- `/blog` index and posts
- `/privacy` and `/terms`

Waitlist submissions hit `POST /api/waitlist`, which stores `{ email, created_at }` in Upstash Redis when `KV_REST_API_*` or `UPSTASH_REDIS_REST_*` env vars are set. Duplicates are idempotent. The handler fails closed (503) if the store is missing.

## Constraints

- Marketing only. No dashboard or auth.
- Waitlist is the only conversion.
- No fabricated logos, testimonials, or usage stats.

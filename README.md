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

Waitlist submissions hit `POST /api/waitlist`, which stores `{ email, created_at }` in Upstash Redis.

Set **either** pair on Vercel (Production + Preview). Do not commit secrets:

```
KV_REST_API_URL
KV_REST_API_TOKEN
```

or

```
UPSTASH_REDIS_REST_URL
UPSTASH_REDIS_REST_TOKEN
```

Valid emails persist and return `{ ok: true }`. Duplicate emails are idempotent and still `{ ok: true }`. If the store env is missing, the handler fails closed with **503** and the form shows an error — it never fakes success. See [`.env.example`](./.env.example).

## Constraints

- Marketing only. No dashboard or auth.
- Waitlist is the only conversion.
- No fabricated logos, testimonials, or usage stats.

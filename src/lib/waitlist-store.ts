import { Redis } from "@upstash/redis";

export type WaitlistEntry = {
  email: string;
  created_at: string;
};

function redisFromEnv(): Redis | null {
  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return null;
  return new Redis({ url, token });
}

function entryKey(email: string) {
  return `waitlist:entry:${email}`;
}

/**
 * Persist a waitlist email. Idempotent: an existing address is left untouched
 * and still counts as success. Returns null when the store is not configured.
 */
export async function persistWaitlistEmail(email: string): Promise<WaitlistEntry | null> {
  const redis = redisFromEnv();
  if (!redis) return null;

  const key = entryKey(email);
  const existing = await redis.get<WaitlistEntry | string>(key);
  if (existing) {
    if (typeof existing === "string") {
      try {
        return JSON.parse(existing) as WaitlistEntry;
      } catch {
        return { email, created_at: existing };
      }
    }
    return existing;
  }

  const entry: WaitlistEntry = { email, created_at: new Date().toISOString() };
  const wrote = await redis.set(key, entry, { nx: true });
  if (wrote === null) {
    const raced = await redis.get<WaitlistEntry>(key);
    if (raced && typeof raced === "object") return raced;
    return entry;
  }
  await redis.sadd("waitlist:emails", email);
  return entry;
}

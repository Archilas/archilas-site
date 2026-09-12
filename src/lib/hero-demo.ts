import { existsSync } from "node:fs";
import { join } from "node:path";

/** CDN override, else `/hero-demo.mp4` when that public file is present. */
export function heroDemoSrc(): string | null {
  const fromEnv = process.env.NEXT_PUBLIC_HERO_DEMO_URL?.trim();
  if (fromEnv) return fromEnv;
  if (existsSync(join(process.cwd(), "public/hero-demo.mp4"))) return "/hero-demo.mp4";
  return null;
}

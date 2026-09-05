import Link from "next/link";
import { TrustRow } from "@/components/TrustRow";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Hero() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[var(--max-width)] px-[var(--pad-x)] pb-14 pt-12 md:pb-16 md:pt-14">
        <p className="inline-flex h-fit items-center gap-2 rounded-[var(--arch-radius-control)] border border-border px-3 py-1.5">
          <span className="h-1.5 w-1.5 bg-accent-solid" aria-hidden />
          <span className="label">Pre-launch · MCP native</span>
        </p>
        <h1 className="display mt-6 max-w-[18ch]">Persistent memory your agents can prove</h1>
        <p className="mt-5 max-w-xl text-[17px] leading-[1.6] text-body">
          Structured evidence: claims, commitments, and signals with confidence. Not raw
          transcripts. Join the waitlist for access.
        </p>
        <div className="mt-8 max-w-lg">
          <WaitlistForm id="hero-waitlist" className="max-w-lg">
            <p className="mt-3 text-[13px] text-muted">
              We email when access opens.{" "}
              <Link href="/privacy" className="text-ink underline-offset-4 hover:underline">
                Privacy
              </Link>
            </p>
          </WaitlistForm>
        </div>
        <div className="mt-10 border-t border-border pt-5">
          <p className="label mb-3">Hosts we design for</p>
          <TrustRow items={["Claude", "ChatGPT", "Cursor", "MCP-compatible agents"]} />
        </div>
      </div>
    </section>
  );
}

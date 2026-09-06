import { ChapterRule } from "@/components/ChapterRule";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Waitlist() {
  return (
    <section
      id="waitlist"
      className="scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)] py-[var(--pad-y-mobile)] md:py-[var(--pad-y)]"
    >
      <div className="mx-auto grid w-full max-w-[var(--max-width)] grid-cols-12">
        <div className="col-span-12 border border-line bg-surface px-6 py-10 text-center sm:px-10 md:col-span-8 md:col-start-3 md:px-14 md:py-14">
          <ChapterRule index="05" title="Waitlist" />
          <h2 className="h2 mx-auto mt-6 max-w-[16ch]">Get early access.</h2>
          <p className="mx-auto mt-4 max-w-md text-body">
            A compact record of preferences, decisions, and open loops — delivered into the tools you
            already use.
          </p>
          <div className="mx-auto mt-8 flex justify-center">
            <WaitlistForm id="waitlist-form" source="waitlist" />
          </div>
          <p className="mt-5 text-[13px] text-muted">
            <a href="/privacy" className="text-ink underline-offset-4 hover:underline">
              Privacy
            </a>
            . No spam.
          </p>
        </div>
      </div>
    </section>
  );
}

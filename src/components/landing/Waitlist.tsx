import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { WaitlistForm } from "@/components/WaitlistForm";

export function Waitlist() {
  return (
    <Section id="waitlist">
      <Card className="mx-auto max-w-3xl px-6 py-12 text-center md:px-14 md:py-14">
        <p className="label">Waitlist</p>
        <h2 className="h2 mt-3">Get early access.</h2>
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
      </Card>
    </Section>
  );
}

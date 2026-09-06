import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export function Problem() {
  return (
    <Section>
      <div className="grid gap-4 md:grid-cols-2">
        <Card className="p-6 md:p-7">
          <p className="label">The old way</p>
          <h2 className="h2 mt-4">Search. Paste. Hope.</h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-body">
            You hunt for context, drop it into a prompt, and hope the model keeps the thread. Related
            facts stay fragments. Gaps get fluent guesses.
          </p>
        </Card>
        <Card className="p-6 md:p-7">
          <p className="label">The Archilas way</p>
          <h2 className="h2 mt-4">Compact. Reason. Deliver.</h2>
          <p className="mt-4 text-[16px] leading-[1.6] text-body">
            A compact, grounded, revisable record. Compose when the record supports it. Deliver into
            the tools you already use — instead of search-and-paste.
          </p>
        </Card>
      </div>
    </Section>
  );
}

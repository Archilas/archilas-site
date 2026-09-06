import { ContrastDemo } from "@/components/landing/ContrastDemo";
import { Section } from "@/components/Section";

export function Problem() {
  return (
    <Section className="section-tint">
      <p className="label mb-3 text-center">How we are different</p>
      <h2 className="h2 mx-auto max-w-[20ch] text-center">Search. Paste. Hope. vs a record you can drive.</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-body">
        Click the windows. Left is retrieval theater. Right is Compact. Reason. Deliver.
      </p>
      <div className="mt-8">
        <ContrastDemo />
      </div>
    </Section>
  );
}

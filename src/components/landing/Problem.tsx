import { ContrastDemo } from "@/components/landing/ContrastDemo";
import { Section } from "@/components/Section";

export function Problem() {
  return (
    <Section className="section-tint">
      <p className="label mb-3 text-center">One comparison</p>
      <h2 className="h2 mx-auto max-w-[20ch] text-center">Retrieval vs a record</h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-body">
        Same work, two shapes. Left is passages. Right is Compact. Reason. Deliver.
      </p>
      <div className="mt-8">
        <ContrastDemo />
      </div>
    </Section>
  );
}

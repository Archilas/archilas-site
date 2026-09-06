import { RagContrast } from "@/components/landing/RagContrast";
import { Section } from "@/components/Section";

export function MemoryVsSearch() {
  return (
    <Section className="section-tint">
      <div className="mx-auto max-w-2xl text-center">
        <p className="label">Memory is not search</p>
        <h2 className="h2 mt-3">RAG finds a passage. Archilas keeps the picture.</h2>
        <p className="mx-auto mt-3 max-w-lg text-body">
          Drive both windows. Snippets go into a prompt. The record stays a record.
        </p>
      </div>
      <div className="mt-8">
        <RagContrast />
      </div>
    </Section>
  );
}

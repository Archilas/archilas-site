import { RagContrast } from "@/components/landing/RagContrast";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function MemoryVsSearch() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label">Memory is not search</p>
          <h2 className="h2 mt-4">RAG finds passages. Archilas keeps a record.</h2>
        </div>
        <div className="mt-10">
          <RagContrast />
        </div>
      </Reveal>
    </Section>
  );
}

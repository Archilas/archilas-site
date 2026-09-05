import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

export function MemoryVsSearch() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="label">Memory is not search</p>
        <h2 className="h2 mt-4">RAG finds passages. Archilas keeps a record.</h2>
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        <Card className="p-6 md:p-7">
          <p className="label">RAG</p>
          <h3 className="h3 mt-4">Search, then paste</h3>
          <p className="mt-3 text-[16px] leading-[1.6] text-body">
            Retrieval finds snippets and drops them into a prompt. Related facts stay disconnected.
            The model is left to stitch, or invent, the missing link.
          </p>
        </Card>
        <Card className="p-6 md:p-7">
          <p className="label">Archilas</p>
          <h3 className="h3 mt-4">A persistent memory layer</h3>
          <p className="mt-3 text-[16px] leading-[1.6] text-body">
            Compact what matters. Reason only over what is grounded. Deliver into tools you already
            use — instead of search-and-paste every morning.
          </p>
        </Card>
      </div>
    </Section>
  );
}

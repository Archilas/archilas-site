import { Card } from "@/components/Card";
import { Section } from "@/components/Section";

const holds = [
  { title: "Preferences", body: "How you like to work." },
  { title: "Decisions", body: "What you chose, and why." },
  { title: "Open loops", body: "Work still in play." },
] as const;

export function MemoryHolds() {
  return (
    <Section>
      <div className="mx-auto max-w-2xl text-center">
        <p className="label">What memory holds</p>
        <h2 className="h2 mt-3">A compact record. Not a chat log.</h2>
      </div>
      <div className="mt-8 grid gap-3 md:grid-cols-3">
        {holds.map((item) => (
          <Card key={item.title} className="p-6">
            <h3 className="h3">{item.title}</h3>
            <p className="mt-2 text-[16px] leading-[1.5] text-body">{item.body}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}

import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const holds = [
  {
    title: "Preferences",
    body: "How you like to work. Stable constraints that should not reset every session.",
  },
  {
    title: "Decisions",
    body: "What you chose, and the reasons that still apply the next time the question comes up.",
  },
  {
    title: "Open loops",
    body: "Unfinished work, blockers, and promises still in play — so they do not vanish overnight.",
  },
] as const;

export function MemoryHolds() {
  return (
    <Section>
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label">What memory holds</p>
          <h2 className="h2 mt-4">A compact record. Not a chat log.</h2>
          <p className="mx-auto mt-4 max-w-lg text-body">
            Archilas keeps a grounded, revisable picture of what still matters — small enough to carry
            into the next session.
          </p>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {holds.map((item) => (
            <Card key={item.title} className="p-6">
              <h3 className="h3">{item.title}</h3>
              <p className="mt-3 text-[16px] leading-[1.6] text-body">{item.body}</p>
            </Card>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

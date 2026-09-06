import { ContrastDemo } from "@/components/landing/ContrastDemo";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

export function Problem() {
  return (
    <Section>
      <Reveal>
        <p className="label mb-8 text-center">How we are different</p>
        <ContrastDemo />
      </Reveal>
    </Section>
  );
}

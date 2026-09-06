import { ButtonPrimary } from "@/components/ButtonPrimary";
import { Reveal } from "@/components/Reveal";
import { Section } from "@/components/Section";

const hosts = ["Claude", "ChatGPT", "Cursor", "agents"] as const;

export function Delivery() {
  return (
    <Section id="product" className="bg-surface">
      <Reveal>
        <div className="mx-auto max-w-2xl text-center">
          <p className="label">Product</p>
          <h2 className="h2 mt-4">One layer. Many surfaces.</h2>
          <p className="mx-auto mt-4 max-w-lg text-body">
            Archilas is built to deliver memory into the hosts you already use. MCP is the intended
            path. Delivery surfaces are in development — not available now.
          </p>
          <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {hosts.map((host) => (
              <li key={host} className="text-[15px] font-medium not-italic text-ink">
                {host}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex justify-center">
            <ButtonPrimary href="/#waitlist">Join waitlist</ButtonPrimary>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

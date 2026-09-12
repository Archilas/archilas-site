import { Reveal } from "@/components/Reveal";

export function WhyCompare() {
  return (
    <section className="split-band scroll-mt-[var(--scroll-margin)] px-[var(--pad-x)]">
      <Reveal>
        <div className="band-plate mx-auto max-w-[1120px]">
          <div className="split-grid">
            <div className="split-copy">
              <p className="label">Why this</p>
              <h2 className="h2 mt-3">Paste memory forgets. Living memory holds.</h2>
              <p className="split-lede">
                A dumped prompt goes stale. Archilas compacts preferences, decisions, and open loops —
                then refuses bridges it cannot support.
              </p>
            </div>
            <div className="ui-stack" data-testid="why-compare">
              <div className="ui-card is-dim">
                <span className="ui-kicker">Paste</span>
                <p>Ship Friday? Monday? tests?? Alex said something — maybe slip it.</p>
              </div>
              <div className="ui-card">
                <span className="ui-kicker">Living memory</span>
                <p>Preference: Ship Friday when the work is ready.</p>
                <p>Decision: Don’t ship until tests are green.</p>
                <p>Open loop: Alex asked about slipping to Monday.</p>
                <p className="ui-held">Held back: Monday slip — not enough to invent a new plan.</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

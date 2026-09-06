import { demoHosts } from "@/components/landing/demo-data";

export function DestinationFrames({
  compact = false,
  line = "Record ready to deliver.",
}: {
  compact?: boolean;
  line?: string;
}) {
  return (
    <ul className={`grid ${compact ? "gap-2 sm:grid-cols-3" : "gap-3 md:grid-cols-3"}`}>
      {demoHosts.map((host) => (
        <li key={host} className="host-frame">
          <div className="host-frame-chrome">
            <span className="font-mono text-[11px] text-text-dark">{host}</span>
            <span className="host-frame-badge">In development</span>
          </div>
          <p className={`px-3 pb-3 font-mono leading-[1.45] text-text-dark/75 ${compact ? "text-[11px]" : "text-[12px]"}`}>
            {line}
          </p>
        </li>
      ))}
    </ul>
  );
}

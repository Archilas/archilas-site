import { Card } from "@/components/Card";

const features = [
  {
    title: "Structured memory",
    body: "Claims, commitments, and signals carry confidence. The record is compact and revisable. It is not a chat export.",
  },
  {
    title: "MCP native",
    body: "Point a host at mcp.archilas.com. Same evidence over MCP, then API or SDK when you need a direct path.",
  },
  {
    title: "Auditable vault",
    body: "You can inspect what was stored, where it came from, and how confident it is. We do not invent certifications.",
  },
  {
    title: "Cross-session and cross-agent",
    body: "The same vault can serve Cursor tonight and Claude tomorrow. Session state is not the product.",
  },
] as const;

export function FeatureGrid() {
  return (
    <div>
      <p className="label">Product</p>
      <h2 className="h2 mt-3 max-w-2xl">What the layer actually is</h2>
      <p className="mt-4 max-w-xl text-body">
        Always visible. No tabs. Four facts about the product, each hugging its own copy.
      </p>
      <div className="mt-8 grid items-start gap-3 md:grid-cols-2">
        {features.map((feature) => (
          <Card key={feature.title} className="p-6">
            <h3 className="h3">{feature.title}</h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-body">{feature.body}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}

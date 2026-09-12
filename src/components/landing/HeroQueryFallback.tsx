const QUERY =
  "What should we tell the customer about pricing — based on what we already decided and what’s still open?";

export function HeroQueryFallback() {
  return (
    <div className="hero-query-frame" data-testid="hero-query-fallback">
      <p className="hero-query-kicker">Ask</p>
      <p className="hero-query-text">{QUERY}</p>
    </div>
  );
}

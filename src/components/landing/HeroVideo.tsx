export function HeroVideo() {
  return (
    <div className="hero-demo" id="demo" data-testid="hero-video">
      <div className="demo-plate plate-drift">
        <div className="plate-sky is-night" aria-hidden="true" />
        <div className="demo-window video-ph">
          <div className="demo-chrome">
            <span>Product demo</span>
          </div>
          <div className="video-ph-stage">
            <button type="button" className="video-ph-play" disabled aria-disabled="true" aria-label="Demo video coming soon">
              <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                <path d="M8 5.5 L17 11 L8 16.5 Z" fill="currentColor" />
              </svg>
            </button>
            <p className="video-ph-label">Demo video coming soon</p>
            <p className="video-ph-sub">Notes → Compact → Reason → Answer — filmed walkthrough on the way.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HeroVideo() {
  return (
    <div className="hero-demo" id="demo" data-testid="hero-video">
      <div className="demo-plate plate-drift">
        <div className="demo-window video-ph">
          <div className="demo-chrome">
            <span>Archilas</span>
            <span>Preview</span>
          </div>
          <div className="video-ph-stage" aria-label="Demo video coming soon">
            <span className="video-ph-play" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 22 22">
                <path d="M8 5.5 L17 11 L8 16.5 Z" fill="currentColor" />
              </svg>
            </span>
            <p className="video-ph-label">Demo video coming soon</p>
            <p className="video-ph-sub">A short look at living memory — Compact, Reason, Deliver.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

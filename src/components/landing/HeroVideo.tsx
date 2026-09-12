import { HeroLoopVideo } from "@/components/landing/HeroLoopVideo";

export function HeroVideo({ src }: { src?: string | null }) {
  const live = Boolean(src);

  return (
    <div className="hero-demo" id="demo" data-testid="hero-video">
      <div className="demo-plate plate-drift is-wide">
        <div className="plate-sky is-alpine" aria-hidden="true" />
        <div className={live ? "chrome-window video-ph is-live" : "chrome-window video-ph"}>
          <div className="demo-chrome">
            <span>Product demo</span>
          </div>
          <div className={live ? "video-ph-stage is-live" : "video-ph-stage"}>
            {live && src ? (
              <HeroLoopVideo src={src} />
            ) : (
              <>
                <button type="button" className="video-ph-play" disabled aria-disabled="true" aria-label="Demo video coming soon">
                  <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
                    <path d="M8 5.5 L17 11 L8 16.5 Z" fill="currentColor" />
                  </svg>
                </button>
                <p className="video-ph-label">Demo video coming soon</p>
                <p className="video-ph-sub">Walkthrough on the way.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

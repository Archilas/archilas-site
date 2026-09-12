import { HeroLoopVideo } from "@/components/landing/HeroLoopVideo";
import { HeroQueryFallback } from "@/components/landing/HeroQueryFallback";

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
            {live && src ? <HeroLoopVideo src={src} /> : <HeroQueryFallback />}
          </div>
        </div>
      </div>
    </div>
  );
}

import { HeroProductDemo } from "@/components/landing/HeroProductDemo";

export function HeroVideo() {
  return (
    <div className="hero-demo" id="demo" data-testid="hero-video">
      <div className="demo-plate plate-drift is-wide">
        <div className="plate-sky is-alpine" aria-hidden="true" />
        <div className="chrome-window hero-app-window">
          <HeroProductDemo />
        </div>
      </div>
    </div>
  );
}

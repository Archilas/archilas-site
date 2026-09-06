import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
import { tokens } from "@/styles/tokens";

export const alt = `${site.name} · ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px 88px",
          background: tokens.bgDark,
          color: tokens.textDark,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 72,
            fontWeight: 650,
            letterSpacing: "-0.04em",
            color: tokens.elevated,
          }}
        >
          {site.name}
        </div>
        <div
          style={{
            marginTop: 20,
            width: 160,
            height: 2,
            background: tokens.accentDark,
          }}
        />
        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: tokens.textDark,
          }}
        >
          {site.tagline}
        </div>
      </div>
    ),
    { ...size },
  );
}

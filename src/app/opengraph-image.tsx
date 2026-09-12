import { ImageResponse } from "next/og";
import { site } from "@/lib/site";
export const alt = `${site.name} · ${site.headline}`;
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
          background: "#07080a",
          color: "#f3f0e8",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 18,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#787984",
          }}
        >
          Archilas
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 56,
            fontWeight: 550,
            letterSpacing: "-0.04em",
            lineHeight: 1.05,
            color: "#f3f0e8",
          }}
        >
          {site.headline}
        </div>
      </div>
    ),
    { ...size },
  );
}

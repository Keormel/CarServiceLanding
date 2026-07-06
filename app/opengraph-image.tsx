import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Apex Motors — премиальный автосервис";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background:
            "linear-gradient(135deg, #0B0B0B 0%, #151515 54%, #E11D2E 100%)",
          color: "white",
          fontFamily: "Arial"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              width: 74,
              height: 74,
              border: "3px solid rgba(255,255,255,0.82)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 34,
              fontWeight: 800
            }}
          >
            AM
          </div>
          <div style={{ fontSize: 42, fontWeight: 800 }}>Apex Motors</div>
        </div>
        <div>
          <div style={{ fontSize: 78, fontWeight: 900, maxWidth: 860 }}>
            Премиальный автосервис в Москве
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760
            }}
          >
            Диагностика, ремонт и обслуживание автомобилей с гарантией
          </div>
        </div>
      </div>
    ),
    size
  );
}

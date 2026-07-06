import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Aleks-Blitz — service auto premium";
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
            AB
          </div>
          <div style={{ fontSize: 42, fontWeight: 800 }}>Aleks-Blitz</div>
        </div>
        <div>
          <div style={{ fontSize: 78, fontWeight: 900, maxWidth: 860 }}>
            Service auto premium în Chișinău
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.82)",
              maxWidth: 760
            }}
          >
            Diagnosticare, reparații și întreținere auto cu garanție
          </div>
        </div>
      </div>
    ),
    size
  );
}

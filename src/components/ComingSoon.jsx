import React from "react";

export default function ComingSoon({ page }) {
  return (
    <div
      style={{
        position: "relative",
        width: "100dvw",
        height: "100dvh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          width: "fit-content",
          height: "fit-content",
          color: "#484747",
          letterSpacing: "0.1rem",
        }}
      >
        Coming Soon...
      </h1>
    </div>
  );
}

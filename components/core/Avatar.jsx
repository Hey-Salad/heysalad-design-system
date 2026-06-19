import React from "react";

/** Circular avatar. Falls back to initials on a warm tint when no image. */
export function Avatar({ src = null, name = "", size = 40, style = {}, ...rest }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
        borderRadius: "var(--radius-pill)",
        background: "var(--light-peach)",
        color: "var(--brand-press)",
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-semibold)",
        fontSize: size * 0.4,
        overflow: "hidden",
        flex: "none",
        ...style,
      }}
      {...rest}
    >
      {src ? (
        <img src={src} alt={name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        initials
      )}
    </span>
  );
}

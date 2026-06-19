import React from "react";

/**
 * Small status/label pill. Use `tone` for semantic meaning; keep text short.
 */
export function Badge({ tone = "brand", size = "md", children, style = {}, ...rest }) {
  const tones = {
    brand: { background: "var(--cherry-red-soft)", color: "var(--brand-press)" },
    neutral: { background: "var(--surface-muted)", color: "var(--text-body)" },
    success: { background: "var(--success-soft)", color: "var(--success)" },
    warning: { background: "var(--warning-soft)", color: "var(--warning)" },
    error: { background: "var(--error-soft)", color: "var(--error)" },
    solid: { background: "var(--brand)", color: "var(--white)" },
  };
  const sizes = {
    sm: { fontSize: 11, padding: "3px 8px" },
    md: { fontSize: 12.5, padding: "4px 11px" },
  };
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        fontFamily: "var(--font-body)",
        fontWeight: "var(--weight-semibold)",
        borderRadius: "var(--radius-pill)",
        lineHeight: 1.2,
        letterSpacing: "0.01em",
        ...sizes[size],
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}

import React from "react";

/** Text input with optional label, leading icon, and error state. */
export function Input({
  label = "",
  hint = "",
  error = "",
  iconLeft = null,
  id,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || `in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error
    ? "var(--error)"
    : focus
    ? "var(--brand)"
    : "var(--border)";
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, fontFamily: "var(--font-body)", ...style }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 14, fontWeight: "var(--weight-semibold)", color: "var(--text-strong)" }}>
          {label}
        </label>
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          background: "var(--white)",
          border: `1.5px solid ${borderColor}`,
          borderRadius: "var(--radius-md)",
          padding: "0 14px",
          boxShadow: focus ? "0 0 0 4px var(--cherry-red-soft)" : "none",
          transition: "border-color var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
        }}
      >
        {iconLeft}
        <input
          id={inputId}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            flex: 1,
            border: "none",
            outline: "none",
            background: "transparent",
            padding: "12px 0",
            fontFamily: "var(--font-body)",
            fontSize: 16,
            color: "var(--text-body)",
          }}
          {...rest}
        />
      </div>
      {(error || hint) && (
        <span style={{ fontSize: 13, color: error ? "var(--error)" : "var(--text-muted)" }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}

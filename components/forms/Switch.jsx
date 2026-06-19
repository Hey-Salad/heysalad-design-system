import React from "react";

/** Pill toggle switch in brand cherry. */
export function Switch({ checked = false, onChange, disabled = false, label = "", style = {}, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-body)", ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          position: "relative",
          width: 46,
          height: 26,
          borderRadius: "var(--radius-pill)",
          background: checked ? "var(--brand)" : "var(--ink-300)",
          transition: "background var(--dur-base) var(--ease-out)",
          flex: "none",
          opacity: disabled ? 0.5 : 1,
        }}
        {...rest}
      >
        <span
          style={{
            position: "absolute",
            top: 3,
            left: checked ? 23 : 3,
            width: 20,
            height: 20,
            borderRadius: "var(--radius-pill)",
            background: "var(--white)",
            boxShadow: "var(--shadow-sm)",
            transition: "left var(--dur-base) var(--ease-bounce)",
          }}
        />
      </span>
      {label}
    </label>
  );
}

import React from "react";

/** Checkbox with brand-cherry checked state and rounded box. */
export function Checkbox({ checked = false, onChange, disabled = false, label = "", style = {}, ...rest }) {
  return (
    <label style={{ display: "inline-flex", alignItems: "center", gap: 10, cursor: disabled ? "not-allowed" : "pointer", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-body)", opacity: disabled ? 0.5 : 1, ...style }}>
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 22,
          height: 22,
          borderRadius: "var(--radius-sm)",
          border: `1.5px solid ${checked ? "var(--brand)" : "var(--border-strong)"}`,
          background: checked ? "var(--brand)" : "var(--white)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all var(--dur-fast) var(--ease-out)",
          flex: "none",
        }}
        {...rest}
      >
        {checked && (
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
            <path d="M5 12.5l4.5 4.5L19 7" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}

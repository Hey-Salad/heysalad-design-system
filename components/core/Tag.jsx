import React from "react";

/**
 * Selectable filter chip / tag. Use for cuisine filters, dietary tags, etc.
 * Toggles between resting and selected (cherry) states.
 */
export function Tag({ selected = false, icon = null, children, onClick, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const resting = {
    background: hover ? "var(--cherry-red-soft)" : "var(--white)",
    color: "var(--text-body)",
    borderColor: "var(--border)",
  };
  const active = {
    background: "var(--brand)",
    color: "var(--white)",
    borderColor: "var(--brand)",
  };
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        padding: "8px 14px",
        fontFamily: "var(--font-body)",
        fontSize: 14,
        fontWeight: "var(--weight-medium)",
        borderRadius: "var(--radius-pill)",
        border: "1.5px solid",
        cursor: "pointer",
        transition: "all var(--dur-fast) var(--ease-out)",
        ...(selected ? active : resting),
        ...style,
      }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}

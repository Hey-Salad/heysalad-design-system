import React from "react";

/**
 * HeySalad primary button. Cherry Red is the hero color; use `primary` for the
 * single most important action per view. Pill-shaped, Figtree SemiBold label.
 */
export function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  iconLeft = null,
  iconRight = null,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "8px 16px", fontSize: 14, gap: 6 },
    md: { padding: "12px 22px", fontSize: 16, gap: 8 },
    lg: { padding: "15px 30px", fontSize: 18, gap: 10 },
  };

  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    fontFamily: "var(--font-body)",
    fontWeight: "var(--weight-semibold)",
    lineHeight: 1,
    borderRadius: "var(--radius-pill)",
    border: "1.5px solid transparent",
    cursor: disabled ? "not-allowed" : "pointer",
    width: fullWidth ? "100%" : "auto",
    transition: "background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    whiteSpace: "nowrap",
    ...style,
  };

  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--text-on-brand)",
      boxShadow: "var(--shadow-brand)",
    },
    secondary: {
      background: "var(--white)",
      color: "var(--brand)",
      borderColor: "var(--brand)",
    },
    soft: {
      background: "var(--light-peach)",
      color: "var(--brand-press)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
    },
  };

  const disabledStyle = disabled
    ? { background: "var(--light-peach)", color: "var(--text-disabled)", borderColor: "transparent", boxShadow: "none", opacity: 0.9 }
    : {};

  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const hoverStyle = !disabled && hover ? hoverFor(variant) : {};
  const activeStyle = !disabled && active ? { transform: "scale(0.97)" } : {};

  return (
    <button
      style={{ ...base, ...variants[variant], ...disabledStyle, ...hoverStyle, ...activeStyle }}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
}

function hoverFor(variant) {
  switch (variant) {
    case "primary": return { background: "var(--brand-hover)" };
    case "secondary": return { background: "var(--cherry-red-soft)" };
    case "soft": return { background: "var(--peach)", color: "var(--white)" };
    case "ghost": return { background: "var(--surface-muted)" };
    default: return {};
  }
}

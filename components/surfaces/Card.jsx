import React from "react";

/** Rounded content card. `warm` uses light-peach; `interactive` lifts on hover. */
export function Card({ warm = false, interactive = false, padding = 20, children, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: warm ? "var(--surface-warm)" : "var(--surface-card)",
        border: warm ? "none" : "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding,
        boxShadow: interactive && hover ? "var(--shadow-md)" : "var(--shadow-sm)",
        transform: interactive && hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out)",
        cursor: interactive ? "pointer" : "default",
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}

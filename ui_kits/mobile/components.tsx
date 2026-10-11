import { useEffect, type ReactNode } from "react";
import sal from "../../assets/logos/Sal.png";

export function Sheet({
  open,
  title,
  onClose,
  children,
}: {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="sheet-root">
      <button type="button" className="sheet-scrim" aria-label="Close sheet" onClick={onClose} />
      <div className="sheet" role="dialog" aria-modal="true" aria-label={title}>
        <h2 className="subhead">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function EmptyState({ title, body, action }: { title: string; body: string; action?: ReactNode }) {
  return (
    <div className="empty">
      <img src={sal} alt="" />
      <h3 className="subhead">{title}</h3>
      <p className="muted">{body}</p>
      {action}
    </div>
  );
}

export function Glyph({ name }: { name: "home" | "list" | "book" | "card" | "user" }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
      {name === "home" && <path {...common} d="M4 11.5 12 4l8 7.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-8.5z" />}
      {name === "list" && <path {...common} d="M8 7h12M8 12h12M8 17h12M4 7h.01M4 12h.01M4 17h.01" />}
      {name === "book" && <path {...common} d="M5 5.5A2.5 2.5 0 0 1 7.5 3H20v16H7.5A2.5 2.5 0 0 0 5 21.5zM5 5.5V21" />}
      {name === "card" && <path {...common} d="M3 8.5A2.5 2.5 0 0 1 5.5 6h13A2.5 2.5 0 0 1 21 8.5v7a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 15.5v-7zM3 10h18" />}
      {name === "user" && (
        <>
          <circle {...common} cx="12" cy="9" r="3" />
          <path {...common} d="M6 19c1-2.6 3-4 6-4s5 1.4 6 4" />
        </>
      )}
    </svg>
  );
}

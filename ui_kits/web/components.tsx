import { useEffect, type ReactNode } from "react";
import sal from "../../assets/logos/Sal.png";

export function Modal({
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
    <div className="modal-root">
      <button type="button" className="scrim" aria-label="Close dialog" onClick={onClose} />
      <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
        <h2 className="subhead">{title}</h2>
        {children}
      </div>
    </div>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="empty">
      <img src={sal} alt="" />
      <h3 className="subhead">{title}</h3>
      <p>{body}</p>
      {action}
    </div>
  );
}

export function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="10" r="2.2" fill="currentColor" />
    </svg>
  );
}

export function IconPeople() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16" cy="10" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M4.5 18.5c.8-2.4 2.6-3.5 4.5-3.5s3.7 1.1 4.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M14 15.2c1.4-.2 2.8.4 3.6 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconBowl() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 11h16c-.6 5-3.6 8-8 8s-7.4-3-8-8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M8 11V8M12 11V6M16 11V8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function CloseLabel({ open }: { open: boolean }) {
  return <span className="plus">{open ? "–" : "+"}</span>;
}

// Sally — Shopping list screen (aggregates added ingredients).
function ShoppingListScreen({ items, onToggle, onClear }) {
  const { Button, Badge } = window.HeySaladDesignSystem_7c87a6;
  const remaining = items.filter((i) => !i.done).length;
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--cream)" }}>
      <div style={{ padding: "16px 20px 10px" }}>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Shopping list</p>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--text-strong)", margin: 0 }}>Your basket</h2>
          {items.length > 0 && <Badge tone="brand">{remaining} to buy</Badge>}
        </div>
      </div>

      <div style={{ flex: 1, overflowY: "auto", padding: "6px 20px 16px" }}>
        {items.length === 0 ? (
          <div style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0 24px" }}>
            <img src="../../assets/logos/Sal.png" alt="Sally" style={{ width: 88, height: 88, opacity: 0.9, marginBottom: 16 }} />
            <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, color: "var(--text-strong)", margin: "0 0 6px" }}>Nothing here yet</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", margin: 0, maxWidth: 220 }}>Like a recipe and add its ingredients — they'll land right here.</p>
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {items.map((it, i) => (
              <button key={i} onClick={() => onToggle(i)} style={{
                display: "flex", alignItems: "center", gap: 12, width: "100%", textAlign: "left",
                background: "var(--white)", border: "1px solid var(--line-200)", borderRadius: "var(--radius-md)",
                padding: "13px 14px", cursor: "pointer",
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "var(--radius-sm)", flex: "none",
                  border: `1.5px solid ${it.done ? "var(--brand)" : "var(--border-strong)"}`,
                  background: it.done ? "var(--brand)" : "var(--white)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {it.done && <Glyph name="check" size={13} color="white" strokeWidth={3} />}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: it.done ? "var(--text-muted)" : "var(--text-body)", textDecoration: it.done ? "line-through" : "none" }}>{it.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {items.length > 0 && (
        <div style={{ padding: "12px 20px 24px", display: "flex", gap: 10 }}>
          <Button variant="ghost" onClick={onClear}>Clear</Button>
          <Button variant="primary" fullWidth>Order for delivery</Button>
        </div>
      )}
    </div>
  );
}
Object.assign(window, { ShoppingListScreen });

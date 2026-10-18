// Sally — Recipe detail screen.
function RecipeDetailScreen({ recipe, onBack, onAdd, saved, onToggleSave }) {
  const { Badge, Button } = window.HeySaladDesignSystem_7c87a6;
  const [tab, setTab] = React.useState("ingredients");
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--white)" }}>
      {/* Hero image + chrome */}
      <div style={{ position: "relative", height: 232, flex: "none" }}>
        <img src={recipe.photo} alt={recipe.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(31,20,22,0.28) 0%, rgba(31,20,22,0) 38%)" }} />
        <RoundChrome onClick={onBack} style={{ left: 16 }}><Glyph name="back" size={22} color="var(--text-strong)" /></RoundChrome>
        <RoundChrome onClick={onToggleSave} style={{ right: 16 }}>
          <BrandIcon name="heart" size={22} color={saved ? "var(--brand)" : "var(--ink-300)"} />
        </RoundChrome>
      </div>

      {/* Scroll body */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 22px 16px", marginTop: -22, background: "var(--white)", borderRadius: "var(--radius-xl) var(--radius-xl) 0 0", position: "relative" }}>
        <h1 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 28, color: "var(--text-strong)", margin: "0 0 8px", lineHeight: 1.1 }}>{recipe.title}</h1>
        <div style={{ display: "flex", gap: 6, marginBottom: 16, flexWrap: "wrap" }}>
          <Badge tone="solid"><BrandIcon name="time" size={12} color="white" />{recipe.minutes} min</Badge>
          <Badge tone="brand">{recipe.level}</Badge>
          <Badge tone="neutral">{recipe.kcal} kcal</Badge>
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.55, color: "var(--text-body)", margin: "0 0 18px" }}>{recipe.blurb}</p>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 24, borderBottom: "1px solid var(--line-200)", marginBottom: 16 }}>
          {["ingredients", "method"].map((t) => (
            <button key={t} onClick={() => setTab(t)} style={{
              border: "none", background: "none", cursor: "pointer", padding: "0 0 10px",
              fontFamily: "var(--font-body)", fontSize: 15, fontWeight: 600, textTransform: "capitalize",
              color: tab === t ? "var(--brand)" : "var(--text-muted)",
              borderBottom: tab === t ? "2.5px solid var(--brand)" : "2.5px solid transparent", marginBottom: -1,
            }}>{t}</button>
          ))}
        </div>

        {tab === "ingredients" ? (
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
            {recipe.ingredients.map((ing, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-body)" }}>
                <span style={{ width: 8, height: 8, borderRadius: 999, background: "var(--peach)", flex: "none" }} />
                {ing}
              </li>
            ))}
          </ul>
        ) : (
          <ol style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 16 }}>
            {recipe.steps.map((s, i) => (
              <li key={i} style={{ display: "flex", gap: 14 }}>
                <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--cherry-red-soft)", color: "var(--brand-press)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center", flex: "none" }}>{i + 1}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.5, color: "var(--text-body)" }}>{s}</span>
              </li>
            ))}
          </ol>
        )}
      </div>

      {/* Sticky CTA */}
      <div style={{ padding: "12px 22px 24px", borderTop: "1px solid var(--line-100)", background: "var(--white)" }}>
        <Button variant="primary" size="lg" fullWidth onClick={() => onAdd(recipe)}>Add ingredients to list</Button>
      </div>
    </div>
  );
}

function RoundChrome({ children, onClick, style }) {
  return (
    <button onClick={onClick} style={{
      position: "absolute", top: 16, width: 40, height: 40, borderRadius: 999, border: "none",
      background: "rgba(255,255,255,0.92)", backdropFilter: "blur(6px)", boxShadow: "var(--shadow-sm)",
      display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", ...style,
    }}>{children}</button>
  );
}
Object.assign(window, { RecipeDetailScreen });

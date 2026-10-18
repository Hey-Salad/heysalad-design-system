// Sally — Discover feed: swipeable recipe cards (dislike / refresh / like).
function DiscoverScreen({ onOpen, onLike }) {
  const { Badge, Tag } = window.HeySaladDesignSystem_7c87a6;
  const recipes = window.SALLY_RECIPES;
  const filters = window.SALLY_FILTERS;
  const [filter, setFilter] = React.useState("All");
  const [idx, setIdx] = React.useState(0);
  const [leaving, setLeaving] = React.useState(null); // 'left' | 'right' | null

  const recipe = recipes[idx % recipes.length];

  function advance(dir) {
    setLeaving(dir);
    if (dir === "right") onLike && onLike(recipe);
    setTimeout(() => {
      setIdx((i) => (i + 1) % recipes.length);
      setLeaving(null);
    }, 280);
  }

  const cardTransform =
    leaving === "left" ? "translateX(-130%) rotate(-14deg)" :
    leaving === "right" ? "translateX(130%) rotate(14deg)" : "none";

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "var(--cream)" }}>
      {/* Header */}
      <div style={{ padding: "16px 20px 8px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <div>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", margin: 0 }}>Tonight's pick</p>
            <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 24, color: "var(--text-strong)", margin: 0 }}>Discover</h2>
          </div>
          <BrandIcon name="chef" size={30} color="var(--brand)" />
        </div>
        <div style={{ display: "flex", gap: 8, overflowX: "auto", paddingBottom: 4 }}>
          {filters.map((f) => (
            <Tag key={f} selected={filter === f} onClick={() => setFilter(f)} style={{ flex: "none" }}>{f}</Tag>
          ))}
        </div>
      </div>

      {/* Card stack */}
      <div style={{ flex: 1, position: "relative", margin: "8px 20px 0" }}>
        {/* peek of next card */}
        <div style={{ position: "absolute", inset: "10px 10px 0", background: "var(--white)", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-sm)", transform: "scale(0.96)", transformOrigin: "top center" }} />
        <button
          onClick={() => onOpen(recipe)}
          style={{
            position: "absolute", inset: 0, textAlign: "left", border: "none", padding: 0, cursor: "pointer",
            background: "var(--white)", borderRadius: "var(--radius-xl)", overflow: "hidden",
            boxShadow: "var(--shadow-lg)",
            transform: cardTransform,
            opacity: leaving ? 0 : 1,
            transition: "transform 0.28s var(--ease-out), opacity 0.28s var(--ease-out)",
          }}
        >
          <div style={{ position: "relative", height: "62%" }}>
            <img src={recipe.photo} alt={recipe.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 6 }}>
              <Badge tone="solid"><BrandIcon name="time" size={12} color="white" />{recipe.minutes} min</Badge>
            </div>
          </div>
          <div style={{ padding: "16px 18px" }}>
            <h3 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 22, color: "var(--text-strong)", margin: "0 0 6px" }}>{recipe.title}</h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", margin: "0 0 12px", lineHeight: 1.45 }}>{recipe.blurb}</p>
            <div style={{ display: "flex", gap: 6 }}>
              {recipe.tags.map((t) => <Badge key={t} tone="brand">{t}</Badge>)}
              <Badge tone="neutral">{recipe.kcal} kcal</Badge>
            </div>
          </div>
        </button>
      </div>

      {/* Swipe actions */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 22, padding: "20px 0 24px" }}>
        <ActionButton onClick={() => advance("left")} icon="dislike" bg="var(--white)" tint="var(--ink-500)" size={58} />
        <ActionButton onClick={() => advance("refresh")} icon="refresh" bg="var(--white)" tint="var(--peach)" size={48} />
        <ActionButton onClick={() => advance("right")} icon="like" bg="var(--brand)" tint="white" size={64} glow />
      </div>
    </div>
  );
}

function ActionButton({ onClick, icon, bg, tint, size, glow }) {
  const [press, setPress] = React.useState(false);
  return (
    <button
      onClick={onClick}
      onMouseDown={() => setPress(true)}
      onMouseUp={() => setPress(false)}
      onMouseLeave={() => setPress(false)}
      style={{
        width: size, height: size, borderRadius: "var(--radius-pill)", border: "1px solid var(--line-200)",
        background: bg, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
        boxShadow: glow ? "var(--shadow-brand)" : "var(--shadow-sm)",
        transform: press ? "scale(0.9)" : "none",
        transition: "transform var(--dur-fast) var(--ease-bounce)",
      }}
    >
      <BrandIcon name={icon} size={size * 0.46} color={tint} />
    </button>
  );
}
Object.assign(window, { DiscoverScreen });

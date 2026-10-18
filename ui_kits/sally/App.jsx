// Sally — app shell: flow state, tab bar, and screen routing.
function SallyApp() {
  const [stage, setStage] = React.useState("welcome"); // welcome | app
  const [tab, setTab] = React.useState("discover");     // discover | list | profile
  const [detail, setDetail] = React.useState(null);     // recipe or null
  const [saved, setSaved] = React.useState({});         // id -> bool
  const [list, setList] = React.useState([]);           // {name, done}

  function addToList(recipe) {
    setList((prev) => {
      const names = new Set(prev.map((i) => i.name));
      const add = recipe.ingredients.filter((n) => !names.has(n)).map((name) => ({ name, done: false }));
      return [...prev, ...add];
    });
    setDetail(null);
    setTab("list");
  }

  let screen;
  if (detail) {
    screen = (
      <RecipeDetailScreen
        recipe={detail}
        onBack={() => setDetail(null)}
        onAdd={addToList}
        saved={!!saved[detail.id]}
        onToggleSave={() => setSaved((s) => ({ ...s, [detail.id]: !s[detail.id] }))}
      />
    );
  } else if (tab === "discover") {
    screen = <DiscoverScreen onOpen={setDetail} onLike={(r) => setSaved((s) => ({ ...s, [r.id]: true }))} />;
  } else if (tab === "list") {
    screen = (
      <ShoppingListScreen
        items={list}
        onToggle={(i) => setList((prev) => prev.map((it, j) => (j === i ? { ...it, done: !it.done } : it)))}
        onClear={() => setList([])}
      />
    );
  } else {
    screen = <ProfileScreen saved={saved} />;
  }

  if (stage === "welcome") {
    return <WelcomeScreen onStart={() => setStage("app")} />;
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, minHeight: 0 }}>{screen}</div>
      {!detail && <TabBar tab={tab} setTab={setTab} listCount={list.filter((i) => !i.done).length} />}
    </div>
  );
}

function TabBar({ tab, setTab, listCount }) {
  const tabs = [
    { id: "discover", glyph: "home", label: "Discover" },
    { id: "list", glyph: "cart", label: "List" },
    { id: "profile", glyph: "user", label: "Profile" },
  ];
  return (
    <div style={{
      display: "flex", borderTop: "1px solid var(--line-200)", background: "var(--white)",
      padding: "8px 8px 22px",
    }}>
      {tabs.map((t) => {
        const active = tab === t.id;
        return (
          <button key={t.id} onClick={() => setTab(t.id)} style={{
            flex: 1, border: "none", background: "none", cursor: "pointer",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 4, padding: "6px 0",
            color: active ? "var(--brand)" : "var(--ink-300)",
          }}>
            <span style={{ position: "relative" }}>
              <Glyph name={t.glyph} size={24} color={active ? "var(--brand)" : "var(--ink-300)"} strokeWidth={active ? 2.4 : 2} />
              {t.id === "list" && listCount > 0 && (
                <span style={{ position: "absolute", top: -4, right: -8, minWidth: 16, height: 16, padding: "0 4px", borderRadius: 999, background: "var(--brand)", color: "white", fontFamily: "var(--font-body)", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{listCount}</span>
              )}
            </span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 11, fontWeight: active ? 700 : 500 }}>{t.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function ProfileScreen({ saved }) {
  const { Avatar, Card, Switch, Badge } = window.HeySaladDesignSystem_7c87a6;
  const recipes = window.SALLY_RECIPES.filter((r) => saved[r.id]);
  const [veg, setVeg] = React.useState(true);
  const [notif, setNotif] = React.useState(false);
  return (
    <div style={{ height: "100%", overflowY: "auto", background: "var(--cream)", padding: "20px 20px 24px" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
        <Avatar name="Mei Tan" size={56} />
        <div>
          <h2 style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 22, color: "var(--text-strong)", margin: 0 }}>Mei Tan</h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", margin: 0 }}>Home cook · London</p>
        </div>
      </div>

      <h3 style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 10px" }}>Saved recipes <Badge tone="brand">{recipes.length}</Badge></h3>
      {recipes.length === 0 ? (
        <Card warm padding={18} style={{ marginBottom: 22 }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-body)", margin: 0 }}>Tap the heart on any recipe to save it here.</p>
        </Card>
      ) : (
        <div style={{ display: "flex", gap: 12, overflowX: "auto", marginBottom: 22, paddingBottom: 4 }}>
          {recipes.map((r) => (
            <div key={r.id} style={{ width: 130, flex: "none" }}>
              <img src={r.photo} alt={r.title} style={{ width: "100%", height: 90, objectFit: "cover", borderRadius: "var(--radius-md)", marginBottom: 6 }} />
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, color: "var(--text-strong)", margin: 0, lineHeight: 1.25 }}>{r.title}</p>
            </div>
          ))}
        </div>
      )}

      <h3 style={{ fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text-muted)", margin: "0 0 10px" }}>Preferences</h3>
      <Card padding={6}>
        <Row><Switch checked={veg} onChange={setVeg} label="Vegetarian recipes only" /></Row>
        <div style={{ height: 1, background: "var(--line-100)", margin: "2px 14px" }} />
        <Row><Switch checked={notif} onChange={setNotif} label="Daily recipe notification" /></Row>
      </Card>
    </div>
  );
}

function Row({ children }) {
  return <div style={{ padding: "12px 14px" }}>{children}</div>;
}

Object.assign(window, { SallyApp });

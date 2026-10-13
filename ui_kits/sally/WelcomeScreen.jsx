// Sally — Welcome / onboarding screen.
function WelcomeScreen({ onStart }) {
  const { Button } = window.HeySaladDesignSystem_7c87a6;
  return (
    <div style={{
      height: "100%",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(180deg, var(--light-peach) 0%, var(--cream) 60%)",
    }}>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 32px", textAlign: "center" }}>
        <img src="../../assets/logos/Sal.png" alt="Sally" style={{ width: 132, height: 132, marginBottom: 28, filter: "drop-shadow(var(--shadow-md))" }} />
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 33, lineHeight: 1.1, color: "var(--text-strong)", letterSpacing: "-0.02em", margin: "0 0 14px", whiteSpace: "nowrap" }}>
          Love your food
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 17, lineHeight: 1.5, color: "var(--text-body)", maxWidth: 280, margin: 0 }}>
          Snap your fridge, get recipes you'll actually cook — zero waste, no last-minute store runs.
        </p>
      </div>
      <div style={{ padding: "0 24px 40px", display: "flex", flexDirection: "column", gap: 12 }}>
        <Button variant="primary" size="lg" fullWidth onClick={onStart}>Get started</Button>
        <Button variant="ghost" size="md" fullWidth onClick={onStart}>I already have an account</Button>
      </div>
    </div>
  );
}
Object.assign(window, { WelcomeScreen });

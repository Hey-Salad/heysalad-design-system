import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../../styles.css";
import "./web.css";
import { DashboardScreen, HomeScreen, JoinScreen, PartsScreen } from "./screens";

type Screen = "parts" | "home" | "join" | "dashboard";

const screens: { id: Screen; label: string }[] = [
  { id: "parts", label: "Components" },
  { id: "home", label: "Home" },
  { id: "join", label: "Join" },
  { id: "dashboard", label: "Dashboard" },
];

function WebKit() {
  const [screen, setScreen] = useState<Screen>("home");

  return (
    <div className="studio">
      <header className="studio-bar">
        <p className="studio-mark">Web UI kit · heysalad.ai</p>
        <nav className="studio-tabs" aria-label="Kit screens">
          {screens.map((item) => (
            <button
              key={item.id}
              type="button"
              className={screen === item.id ? "on" : ""}
              aria-current={screen === item.id ? "page" : undefined}
              onClick={() => setScreen(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </header>
      <main className="stage">
        {screen === "parts" && <PartsScreen />}
        {screen === "home" && <HomeScreen onJoin={() => setScreen("join")} />}
        {screen === "join" && <JoinScreen />}
        {screen === "dashboard" && <DashboardScreen />}
      </main>
    </div>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root");

createRoot(root).render(
  <StrictMode>
    <WebKit />
  </StrictMode>,
);

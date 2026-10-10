import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "../../styles.css";
import "./mobile.css";
import { MobileParts, SallyPhone } from "./screens";

function MobileKit() {
  const [parts, setParts] = useState(false);

  return (
    <div className="studio">
      <header className="studio-bar">
        <p className="studio-mark">Mobile UI kit · Sally</p>
        <nav className="studio-tabs" aria-label="Kit views">
          <button type="button" className={parts ? "" : "on"} onClick={() => setParts(false)}>App</button>
          <button type="button" className={parts ? "on" : ""} onClick={() => setParts(true)}>Components</button>
        </nav>
      </header>
      <div className={parts ? "layout show-parts" : "layout"}>
        <div className="phone-wrap">
          <SallyPhone />
        </div>
        <div className="parts-pane">
          <MobileParts />
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root");

createRoot(root).render(
  <StrictMode>
    <MobileKit />
  </StrictMode>,
);

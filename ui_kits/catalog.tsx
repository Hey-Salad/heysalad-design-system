import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../styles.css";
import "./catalog.css";
import logo from "../assets/logos/HeySalad-Logo-Tagline-Black.svg";
import sal from "../assets/logos/Sal.png";

function Catalog() {
  return (
    <main className="catalog">
      <img className="logo" src={logo} alt="HeySalad — love your food" />
      <h1 className="display">UI kits</h1>
      <p className="lede">
        Two product kits on the shared tokens. Open one to click through components and example screens.
      </p>
      <div className="cards">
        <a className="kit-card" href="./web/index.html">
          <p className="kicker">Desktop</p>
          <h2 className="display">Web</h2>
          <p>The heysalad.ai marketing site, the join form, and the AI dashboard.</p>
        </a>
        <a className="kit-card" href="./mobile/index.html">
          <img src={sal} alt="" />
          <p className="kicker">Phone</p>
          <h2 className="display">Sally</h2>
          <p>Home, shopping list, recipes, loyalty card, and profile for Sally by HeySalad.</p>
        </a>
      </div>
    </main>
  );
}

const root = document.getElementById("root");
if (!root) throw new Error("Missing #root");

createRoot(root).render(
  <StrictMode>
    <Catalog />
  </StrictMode>,
);

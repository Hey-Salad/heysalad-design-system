import { useState } from "react";
import { Badge, Button, Card, Checkbox, Input, Switch, Tag } from "../../index.js";
import logo from "../../assets/logos/HeySalad-Logo-Black.svg";
import sal from "../../assets/logos/Sal.png";
import orzo from "../../assets/images/BrandImage1.jpg";
import greens from "../../assets/images/BrandImage2.jpg";
import berries from "../../assets/images/BrandImage4.jpg";
import { Avatar } from "../../index.js";
import { EmptyState, Glyph, Sheet } from "./components";

type Tab = "home" | "lists" | "recipes" | "card" | "you";

type Item = { name: string; note: string; done: boolean };

const starter: Item[] = [
  { name: "Cherry tomatoes", note: "1 punnet", done: false },
  { name: "Basil", note: "1 bunch", done: false },
  { name: "Orzo", note: "500 g", done: true },
  { name: "Olive oil", note: "Already in the cupboard", done: false },
];

const recipes = [
  { id: "orzo", title: "Tomato basil orzo", time: "25 min", price: "$12.40", photo: orzo, ingredients: ["Cherry tomatoes", "Basil", "Orzo", "Olive oil"] },
  { id: "greens", title: "Lemon greens", time: "15 min", price: "$8.10", photo: greens, ingredients: ["Leafy greens", "Lemon", "Garlic"] },
  { id: "berries", title: "Berry breakfast", time: "10 min", price: "$6.50", photo: berries, ingredients: ["Berries", "Yogurt", "Oats"] },
];

const prompts = ["Weeknight pasta", "Use up tomatoes", "Lunch for one"];

export function SallyPhone() {
  const [tab, setTab] = useState<Tab>("home");
  const [items, setItems] = useState<Item[]>(starter);
  const [sheet, setSheet] = useState<null | "link" | "bank">(null);
  const [link, setLink] = useState("");
  const [linkError, setLinkError] = useState("");
  const [recipeId, setRecipeId] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("What can I make for lunch?");
  const [reply, setReply] = useState("Let’s start with what’s in your kitchen.");
  const [draft, setDraft] = useState("");
  const [veg, setVeg] = useState(true);
  const [notes, setNotes] = useState(false);
  const [chip, setChip] = useState(prompts[0]);

  const recipe = recipes.find((item) => item.id === recipeId) ?? null;
  const openCount = items.filter((item) => !item.done).length;

  function addLink() {
    if (!link.includes("http")) {
      setLinkError("Paste a full recipe link.");
      return;
    }
    setItems((prev) => [...prev, { name: "Ingredients from your link", note: link.replace(/^https?:\/\//, "").slice(0, 28), done: false }]);
    setLink("");
    setLinkError("");
    setSheet(null);
    setTab("lists");
  }

  function addRecipe(id: string) {
    const found = recipes.find((item) => item.id === id);
    if (!found) return;
    setItems((prev) => {
      const names = new Set(prev.map((item) => item.name));
      const extra = found.ingredients.filter((name) => !names.has(name)).map((name) => ({ name, note: "From " + found.title, done: false }));
      return [...prev, ...extra];
    });
    setRecipeId(null);
    setTab("lists");
  }

  return (
    <div className="phone" data-screen={tab}>
      <div className="screen">
        <div className="statusbar">
          <span>9:41</span>
          <span>Sally</span>
        </div>
        <div className="app">
          {tab === "home" && (
            <>
              <div className="scroll">
                <p className="kicker">Sally</p>
                <h1 className="display hero-line">{prompt}</h1>
                <p className="muted">{reply}</p>
                <div className="chips">
                  {prompts.map((item) => (
                    <Tag key={item} selected={chip === item} onClick={() => { setChip(item); setPrompt(item === "Lunch for one" ? "What can I make for lunch?" : item); }}>
                      {item}
                    </Tag>
                  ))}
                </div>
                <div className="bubble mine"><p>What can I make for lunch?</p></div>
                <div className="bubble"><p>Let’s start with what’s in your kitchen.</p></div>
                <div className="bubble"><p>A little lunch inspiration: tomato basil orzo, using the orzo you already have.</p></div>
                <div style={{ marginTop: "var(--space-4)" }}>
                  <Button fullWidth variant="secondary" onClick={() => setSheet("link")}>Paste a recipe link</Button>
                </div>
              </div>
              <form
                className="composer"
                onSubmit={(event) => {
                  event.preventDefault();
                  if (!draft.trim()) return;
                  setPrompt(draft.trim());
                  setReply("A little lunch inspiration is on the way.");
                  setDraft("");
                }}
              >
                <div className="field">
                  <Input aria-label="Ask Sally" placeholder="Ask Sally" value={draft} onChange={(event) => setDraft(event.target.value)} />
                </div>
                <Button type="submit" size="md">Send</Button>
              </form>
            </>
          )}

          {tab === "lists" && (
            <div className="scroll">
              <p className="kicker">Groceries</p>
              <h1 className="display hero-line">Shopping list</h1>
              <p className="muted">{openCount === 0 ? "All packed." : `${openCount} still to grab`}</p>
              {items.length === 0 ? (
                <EmptyState
                  title="Your list is clear"
                  body="Paste a recipe link and Sally will write the ingredients here."
                  action={<Button onClick={() => setSheet("link")}>Paste a recipe link</Button>}
                />
              ) : (
                <Card padding={16} style={{ marginTop: "var(--space-4)" }}>
                  {items.map((item, index) => (
                    <div className={item.done ? "list-row done" : "list-row"} key={`${item.name}-${index}`}>
                      <Checkbox
                        checked={item.done}
                        onChange={(done) => setItems((prev) => prev.map((row, i) => (i === index ? { ...row, done } : row)))}
                        label={item.name}
                      />
                      <span>{item.note}</span>
                    </div>
                  ))}
                </Card>
              )}
              {items.length > 0 && (
                <div style={{ marginTop: "var(--space-4)" }}>
                  <Button variant="ghost" fullWidth onClick={() => setItems([])}>Clear list</Button>
                </div>
              )}
            </div>
          )}

          {tab === "recipes" && (
            <div className="scroll">
              <p className="kicker">From your kitchen</p>
              <h1 className="display hero-line">Recipes</h1>
              <p className="muted">Saved from links and lunch ideas.</p>
              <div style={{ marginTop: "var(--space-4)" }}>
                {recipes.map((item) => (
                  <button type="button" className="recipe" key={item.id} onClick={() => setRecipeId(item.id)}>
                    <img src={item.photo} alt="" />
                    <div>
                      <strong className="subhead">{item.title}</strong>
                      <p className="muted">{item.time}</p>
                      <p className="price">{item.price}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {tab === "card" && (
            <div className="scroll">
              <p className="kicker">Membership</p>
              <h1 className="display hero-line">Your card</h1>
              <p className="muted">A digital loyalty card. Not a payment card.</p>
              <article className="loyalty" aria-label="Loyalty card">
                <div className="loyalty-top">
                  <img className="wordmark" src={logo} alt="HeySalad" />
                  <span className="chip" aria-hidden="true" />
                </div>
                <p className="subhead" style={{ marginTop: "var(--space-5)" }}>Alex Rivera</p>
                <p className="muted">Member · check in at the till</p>
                <p className="display reward">love your food</p>
                <p className="price">2,480 pts</p>
              </article>
              <div className="stack" style={{ marginTop: "var(--space-4)" }}>
                <Button fullWidth onClick={() => setSheet("bank")}>Show to pay</Button>
                <Button fullWidth variant="secondary" onClick={() => setSheet("bank")}>Bank connection</Button>
              </div>
            </div>
          )}

          {tab === "you" && (
            <div className="scroll">
              <div className="profile-head">
                <Avatar name="Alex Rivera" size={56} />
                <div>
                  <h1 className="subhead" style={{ fontSize: "var(--text-h3)" }}>Alex Rivera</h1>
                  <p className="muted">Home cook · London</p>
                </div>
              </div>
              <Card padding={16}>
                <div className="list-row">
                  <strong>Saved recipes</strong>
                  <Badge>{recipes.length}</Badge>
                </div>
                <div className="list-row">
                  <strong>Open list items</strong>
                  <Badge tone="neutral">{openCount}</Badge>
                </div>
              </Card>
              <h2 className="subhead" style={{ margin: "var(--space-5) 0 var(--space-3)" }}>Preferences</h2>
              <Card padding={8}>
                <div className="list-row"><Switch checked={veg} onChange={setVeg} label="Vegetarian recipes only" /></div>
                <div className="list-row"><Switch checked={notes} onChange={setNotes} label="Daily recipe note" /></div>
              </Card>
            </div>
          )}
        </div>
        <nav className="tabbar" aria-label="App sections">
          {([
            ["home", "Home"],
            ["lists", "Lists"],
            ["recipes", "Recipes"],
            ["card", "Card"],
            ["you", "You"],
          ] as const).map(([id, label]) => (
            <button key={id} type="button" className={tab === id ? "on" : ""} onClick={() => setTab(id)}>
              <Glyph name={id === "lists" ? "list" : id === "recipes" ? "book" : id === "you" ? "user" : id} />
              {label}
            </button>
          ))}
        </nav>

        {recipe && (
          <div className="detail">
            <img className="cover" src={recipe.photo} alt="" />
            <button type="button" className="back" onClick={() => setRecipeId(null)}>Back</button>
            <div className="body">
              <p className="kicker">{recipe.time}</p>
              <h2 className="display hero-line">{recipe.title}</h2>
              <p className="price">{recipe.price}</p>
              {recipe.ingredients.map((item) => (
                <div className="list-row" key={item}><strong>{item}</strong></div>
              ))}
              <Button fullWidth onClick={() => addRecipe(recipe.id)}>Add to list</Button>
            </div>
          </div>
        )}

        <Sheet open={sheet === "link"} title="Paste a recipe link" onClose={() => setSheet(null)}>
          <Input label="Recipe link" placeholder="https://" value={link} error={linkError} onChange={(event) => setLink(event.target.value)} />
          <Button fullWidth onClick={addLink}>Add ingredients</Button>
        </Sheet>
        <Sheet open={sheet === "bank"} title="Check in, don’t pay" onClose={() => setSheet(null)}>
          <img src={sal} alt="" style={{ width: "var(--space-16)", height: "var(--space-16)", margin: "0 auto" }} />
          <p className="muted">Show this card at a participating partner. Bank linking and checkout cards are still being confirmed, and this screen does not take card details.</p>
          <Button fullWidth onClick={() => setSheet(null)}>Done</Button>
        </Sheet>
      </div>
    </div>
  );
}

export function MobileParts() {
  const [open, setOpen] = useState(false);
  const [on, setOn] = useState(true);
  const [box, setBox] = useState(false);

  return (
    <div className="parts">
      <header>
        <p className="kicker">Mobile kit</p>
        <h1 className="display" style={{ fontSize: "var(--text-h1)", marginTop: "var(--space-2)" }}>Components</h1>
        <p className="muted">The same tokens as the phone: pill buttons, 16px cards, Figtree labels, Grandstander only on the screen title and the card’s reward line.</p>
      </header>
      <section>
        <h2 className="display">Buttons</h2>
        <div className="stack">
          <Button fullWidth>Add to list</Button>
          <Button fullWidth variant="secondary">Paste a recipe link</Button>
          <Button fullWidth variant="soft">Soft action</Button>
          <Button fullWidth variant="ghost">Not now</Button>
        </div>
      </section>
      <section>
        <h2 className="display">Input</h2>
        <Input label="Recipe link" placeholder="https://" hint="Sally reads the ingredients. You still check the list." />
      </section>
      <section>
        <h2 className="display">Badges and tags</h2>
        <div className="row-wrap">
          <Badge>3 saved</Badge>
          <Badge tone="success">In stock</Badge>
          <Badge tone="warning">Check price</Badge>
          <Tag selected>Lunch</Tag>
          <Tag>Dinner</Tag>
        </div>
      </section>
      <section>
        <h2 className="display">List, switch, checkbox</h2>
        <Card padding={12}>
          <div className="list-row">
            <Checkbox checked={box} onChange={setBox} label="Cherry tomatoes" />
            <span className="price">1 punnet</span>
          </div>
          <div className="list-row">
            <Switch checked={on} onChange={setOn} label="Daily recipe note" />
          </div>
        </Card>
      </section>
      <section>
        <h2 className="display">Sheet and empty state</h2>
        <Button onClick={() => setOpen(true)}>Open sheet</Button>
        <Card padding={8} style={{ marginTop: "var(--space-3)" }}>
          <EmptyState title="Nothing saved" body="Heart a recipe in the app and it will sit here." />
        </Card>
        {open && (
          <Card padding={16} style={{ marginTop: "var(--space-3)" }}>
            <h3 className="subhead">Sheet content</h3>
            <p className="muted">On the phone, this sits in a bottom sheet over the screen. Press escape or the scrim to close it there.</p>
            <Button variant="secondary" onClick={() => setOpen(false)}>Close</Button>
          </Card>
        )}
      </section>
    </div>
  );
}

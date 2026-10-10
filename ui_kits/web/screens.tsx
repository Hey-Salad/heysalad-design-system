import { useState } from "react";
import { Avatar, Badge, Button, Card, Checkbox, Input, Switch, Tag } from "../../index.js";
import logo from "../../assets/logos/HeySalad-Logo-Black.svg";
import lunch from "../../assets/images/BrandImage1.jpg";
import greens from "../../assets/images/BrandImage2.jpg";
import table from "../../assets/images/BrandImage4.jpg";
import kitchen from "../../assets/images/BrandImage5.jpg";
import { CloseLabel, EmptyState, IconBowl, IconPeople, IconPin, Modal } from "./components";

const faqs = [
  {
    q: "When can I start earning points?",
    a: "Points are not available yet. We’ll publish the earning rules, participating locations, and rewards before membership opens.",
  },
  {
    q: "Do I need to use finger recognition?",
    a: "No. Finger-vein recognition is an optional check-in we’re exploring alongside digital and physical loyalty cards.",
  },
  {
    q: "Is this a payment or credit card?",
    a: "This is a loyalty membership. It does not provide a payment account, credit, or a card you can spend with.",
  },
  {
    q: "Can I use Sally today?",
    a: "Yes. Sally for iPhone, Mac, and Chrome is separate from membership. Included AI allowances will be announced with the pilot.",
  },
];

const nav = [
  { href: "#benefits", label: "Loyalty card" },
  { href: "#sally", label: "Meet Sally" },
  { href: "#how", label: "How it works" },
  { href: "#partners", label: "For partners" },
];

const dashNav = ["Dashboard", "API Keys", "Providers", "Analytics", "Billing", "Documentation", "Playground", "Settings"] as const;
type DashSection = (typeof dashNav)[number];

const keys = [
  { name: "Production API", hint: "Created 15 Feb · last used 2 hours ago", requests: "15,420 requests" },
  { name: "Development API", hint: "Created 10 Feb · last used 5 minutes ago", requests: "8,932 requests" },
];

const providers = [
  { name: "OpenAI", share: "45%", width: "45%", tone: "brand" as const, bar: "" },
  { name: "Anthropic", share: "30%", width: "30%", tone: "neutral" as const, bar: "peach" },
  { name: "Gemini", share: "20%", width: "20%", tone: "neutral" as const, bar: "ink" },
  { name: "Hugging Face", share: "5%", width: "5%", tone: "warning" as const, bar: "warn" },
];

export function HomeScreen({ onJoin }: { onJoin: () => void }) {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="site">
      <header className="site-header">
        <a href="#top" aria-label="HeySalad home">
          <img className="wordmark" src={logo} alt="HeySalad" />
        </a>
        <nav className="site-nav" aria-label="Primary">
          <span className="text-links">
            {nav.map((item) => (
              <a key={item.href} href={item.href}>{item.label}</a>
            ))}
          </span>
          <Button size="sm" onClick={onJoin}>Explore membership</Button>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="kicker">HeySalad membership</p>
          <h1 className="display hero-title">Good food. More together.</h1>
          <p className="lede">
            A food and lifestyle membership bringing together planned rewards, dining experiences, and everyday help from Sally.
          </p>
          <div className="actions">
            <Button size="lg" onClick={onJoin}>Explore membership</Button>
            <Button variant="secondary" size="lg" onClick={() => document.getElementById("partners")?.scrollIntoView({ behavior: "smooth" })}>
              Register your business
            </Button>
          </div>
          <p className="hand">love your food</p>
        </div>
        <div className="hero-art">
          <img className="lifestyle" src={lunch} alt="Friends sharing lunch" />
          <article className="member-card" aria-label="Loyalty card">
            <div className="member-card-top">
              <img className="wordmark" src={logo} alt="" />
              <span className="chip" aria-hidden="true" />
            </div>
            <p className="member-name">Alex Rivera</p>
            <p className="member-meta">Member · digital card</p>
            <p className="display reward">love your food</p>
            <p className="points">2,480 pts</p>
          </article>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="section-head">
          <h2 className="display section-title">Good places. Great company. More belonging.</h2>
          <p>We’re building a food membership. Register your interest to hear when it opens.</p>
        </div>
        <div className="grid-3">
          <Card>
            <div className="icon-bubble"><IconPin /></div>
            <h3 className="subhead">Local favourites</h3>
            <p>We’re exploring points on eligible purchases at future participating partners. Final earning rules are still to be confirmed.</p>
          </Card>
          <Card warm>
            <div className="icon-bubble"><IconPeople /></div>
            <h3 className="subhead">Shared experiences</h3>
            <p>From a lunch with friends to a new community. Make room for more moments together.</p>
          </Card>
          <Card>
            <div className="icon-bubble"><IconBowl /></div>
            <h3 className="subhead">Everyday assistance</h3>
            <p>Meet Sally, your companion for meal inspiration, shopping plans, and getting a little time back.</p>
          </Card>
        </div>
      </section>

      <section className="section sally-band" id="sally">
        <div className="section-head">
          <h2 className="display section-title">Your membership. Sally wherever you are.</h2>
          <p>On your phone, on your Mac, or in your browser. App access and membership benefits are separate today.</p>
        </div>
        <div className="grid-3">
          <Card className="app-card">
            <img className="device" src={kitchen} alt="" />
            <p className="kicker">iPhone</p>
            <h3 className="subhead">Sally for iPhone</h3>
            <p>Turn recipe links into shopping lists with Sally for iPhone.</p>
          </Card>
          <Card className="app-card">
            <img className="device" src={greens} alt="" />
            <p className="kicker">Mac</p>
            <h3 className="subhead">Sally for Mac</h3>
            <p>Mac beta for Apple silicon, macOS 14 or newer. Plan your shop with Sally.</p>
          </Card>
          <Card className="app-card">
            <img className="device" src={table} alt="" />
            <p className="kicker">Chrome</p>
            <h3 className="subhead">Sally for Chrome</h3>
            <p>A shopping assistant in the browser. See the Chrome Web Store listing for current features.</p>
          </Card>
        </div>
      </section>

      <section className="section" id="how">
        <h2 className="display section-title">Your loyalty card, your way.</h2>
        <div className="grid-3" style={{ marginTop: "var(--space-8)" }}>
          <Card className="step">
            <p className="step-no">01</p>
            <h3 className="subhead">Join the community</h3>
            <p>Register your interest with your name and email. We’ll send a confirmation when there is a next step.</p>
          </Card>
          <Card className="step">
            <p className="step-no">02</p>
            <h3 className="subhead">Choose how to check in</h3>
            <p>Digital and physical loyalty cards are planned, with optional finger-vein recognition.</p>
          </Card>
          <Card className="step">
            <p className="step-no">03</p>
            <h3 className="subhead">Find more to love</h3>
            <p>Planned points on eligible purchases. Partners and launch dates are still to be confirmed.</p>
          </Card>
        </div>
      </section>

      <section className="section" id="partners">
        <div className="section-head">
          <h2 className="display section-title">More reasons to come together.</h2>
          <p>Register your business to discuss HeySalad for your customers or team.</p>
        </div>
        <div className="grid-3">
          <Card>
            <h3 className="subhead">For cafés & restaurants</h3>
            <p>Give regulars more to love. Help shape rewards that bring people back.</p>
          </Card>
          <Card>
            <h3 className="subhead">For startups & teams</h3>
            <p>Bring people together around good food, shared experiences, and Sally.</p>
          </Card>
          <Card warm>
            <h3 className="subhead">HeySalad Host</h3>
            <p>A path for restaurants that want to talk about the pilot before membership opens.</p>
          </Card>
        </div>
      </section>

      <section className="section" id="faq">
        <h2 className="display section-title">Your questions, answered.</h2>
        <div className="faq" style={{ marginTop: "var(--space-6)" }}>
          {faqs.map((item, index) => {
            const open = openFaq === index;
            return (
              <div className="faq-item" key={item.q}>
                <button type="button" aria-expanded={open} onClick={() => setOpenFaq(open ? -1 : index)}>
                  {item.q}
                  <CloseLabel open={open} />
                </button>
                {open && <p>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </section>

      <section className="closing">
        <h2 className="display">Let’s make every day a little more rewarding.</h2>
        <p>Register your interest. This does not activate a membership or issue a card, and nothing is charged.</p>
        <Button size="lg" onClick={onJoin}>Explore membership</Button>
      </section>

      <footer className="site-footer">
        <div className="footer-top">
          <img className="wordmark" src={logo} alt="HeySalad" />
          <div className="footer-cols">
            <div>
              <h3>Loyalty card</h3>
              <a href="#how">How it works</a>
              <a href="#sally">Get Sally</a>
            </div>
            <div>
              <h3>For businesses</h3>
              <a href="#partners">Cafés & restaurants</a>
              <a href="#partners">Startups & teams</a>
            </div>
            <div>
              <h3>Help</h3>
              <a href="#faq">About the pilot</a>
              <p>Find your community.</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>HeySalad Inc. · 584 Castro St, Suite 4003, San Francisco, CA 94114</p>
          <p>© 2026 HeySalad · love your food</p>
        </div>
      </footer>
    </div>
  );
}

export function JoinScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "", agree: "" });

  function submit() {
    const next = {
      name: name.trim() ? "" : "Add the name you want on the confirmation.",
      email: email.includes("@") ? "" : "Use an email you actually check.",
      agree: agree ? "" : "Tick this so we can email you about the registration.",
    };
    setErrors(next);
    setSubmitted(!next.name && !next.email && !next.agree);
  }

  return (
    <div className="site">
      <header className="site-header">
        <img className="wordmark" src={logo} alt="HeySalad" />
        <p className="kicker">For you</p>
      </header>
      <div className="form-wrap">
        <Card padding={28}>
          {submitted ? (
            <div className="success-panel">
              <Badge tone="success">Interest saved</Badge>
              <h1 className="display" style={{ fontSize: "var(--text-h1)", margin: 0 }}>You’re on the list.</h1>
              <p className="lede">We’ll email {email} a confirmation. This does not create an active membership or issue a card.</p>
              <Button variant="secondary" onClick={() => { setSubmitted(false); setName(""); setEmail(""); setAgree(false); }}>
                Register someone else
              </Button>
            </div>
          ) : (
            <>
              <p className="kicker">For you</p>
              <h1 className="display" style={{ fontSize: "var(--text-h1)", margin: "var(--space-2) 0 0" }}>Explore membership.</h1>
              <p className="lede">Leave your details to hear when HeySalad membership opens.</p>
              <div className="form-stack">
                <Input label="Your name" value={name} error={errors.name} onChange={(event) => setName(event.target.value)} />
                <Input label="Email address" type="email" value={email} hint="We’ll only write about this registration." error={errors.email} onChange={(event) => setEmail(event.target.value)} />
                <Checkbox checked={agree} onChange={setAgree} label="HeySalad may store these details and email me about this registration." />
                {errors.agree && <p className="form-note" style={{ color: "var(--error)" }}>{errors.agree}</p>}
                <Button fullWidth size="lg" onClick={submit}>Register my interest</Button>
                <p className="form-note">You can withdraw your registration by replying to your confirmation email.</p>
              </div>
            </>
          )}
        </Card>
      </div>
    </div>
  );
}

export function DashboardScreen() {
  const [section, setSection] = useState<DashSection>("Dashboard");
  const [modal, setModal] = useState(false);
  const [keyName, setKeyName] = useState("");
  const [created, setCreated] = useState("");
  const [showRetired, setShowRetired] = useState(false);

  return (
    <div className="dash">
      <aside className="dash-side">
        <img className="wordmark" src={logo} alt="HeySalad" />
        <nav aria-label="Dashboard">
          {dashNav.map((item) => (
            <button key={item} type="button" className={section === item ? "nav-item on" : "nav-item"} onClick={() => setSection(item)}>
              {item}
            </button>
          ))}
        </nav>
        <div className="dash-user">
          <Avatar name="Alex Rivera" size={40} />
          <div>
            <p>Alex Rivera</p>
            <span>Growth plan</span>
          </div>
        </div>
      </aside>
      <div className="dash-main">
        {section === "Dashboard" && <Overview onCreate={() => setModal(true)} />}
        {section === "API Keys" && (
          <Keys
            showRetired={showRetired}
            onToggleRetired={setShowRetired}
            onCreate={() => setModal(true)}
            created={created}
          />
        )}
        {section === "Providers" && <Providers />}
        {section !== "Dashboard" && section !== "API Keys" && section !== "Providers" && (
          <Card>
            <p className="kicker">{section}</p>
            <h1 className="display" style={{ fontSize: "var(--text-h2)", margin: "var(--space-2) 0 var(--space-3)" }}>{section}</h1>
            <EmptyState
              title="Nothing queued here"
              body="This area of the AI dashboard is in the product map. Usage, keys, and providers are on the main views."
              action={<Button variant="secondary" onClick={() => setSection("Dashboard")}>Back to dashboard</Button>}
            />
          </Card>
        )}
      </div>
      <Modal open={modal} title="Create API key" onClose={() => setModal(false)}>
        <Input label="Key name" placeholder="Lunch service" value={keyName} onChange={(event) => setKeyName(event.target.value)} hint="Shown once in the list. You can revoke it later." />
        <div className="actions">
          <Button variant="ghost" onClick={() => setModal(false)}>Cancel</Button>
          <Button
            onClick={() => {
              if (!keyName.trim()) return;
              setCreated(keyName.trim());
              setKeyName("");
              setModal(false);
              setSection("API Keys");
            }}
          >
            Generate key
          </Button>
        </div>
      </Modal>
    </div>
  );
}

function Overview({ onCreate }: { onCreate: () => void }) {
  return (
    <>
      <div className="dash-head">
        <div>
          <p className="kicker">HeySalad AI</p>
          <h1 className="display">AI API Dashboard</h1>
          <p className="form-note">Monitor requests and manage providers for the food-business OS.</p>
        </div>
        <Button onClick={onCreate}>Create API key</Button>
      </div>
      <div className="stats">
        <Card>
          <p className="stat-label">Total requests</p>
          <p className="stat-value">24,352</p>
          <p className="stat-change">+12.5% from last month</p>
        </Card>
        <Card>
          <p className="stat-label">Active API keys</p>
          <p className="stat-value">2</p>
          <p className="stat-change" style={{ color: "var(--text-muted)" }}>2 keys configured</p>
        </Card>
        <Card>
          <p className="stat-label">Avg response</p>
          <p className="stat-value">245 ms</p>
          <p className="stat-change">15 ms faster than last week</p>
        </Card>
        <Card>
          <p className="stat-label">Monthly cost</p>
          <p className="stat-value">$127.50</p>
          <p className="stat-change" style={{ color: "var(--warning)" }}>+$23.50 this month</p>
        </Card>
      </div>
      <div className="two-col">
        <Card>
          <div className="panel-title">
            <h2 className="subhead">Recent requests</h2>
            <Badge tone="neutral">7 days</Badge>
          </div>
          <div className="rows">
            {[
              ["14 Feb", "1,200"],
              ["16 Feb", "1,100"],
              ["18 Feb", "1,920"],
              ["20 Feb", "2,100"],
            ].map(([date, count]) => (
              <div className="row" key={date}>
                <strong>{date}</strong>
                <span>{count} requests</span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <div className="panel-title">
            <h2 className="subhead">Usage by provider</h2>
          </div>
          {providers.map((provider) => (
            <div key={provider.name} style={{ marginBottom: "var(--space-3)" }}>
              <div className="row" style={{ border: 0, padding: 0 }}>
                <strong>{provider.name}</strong>
                <span>{provider.share}</span>
              </div>
              <div className={`bar ${provider.bar}`}><i style={{ width: provider.width }} /></div>
            </div>
          ))}
        </Card>
      </div>
    </>
  );
}

function Keys({
  showRetired,
  onToggleRetired,
  onCreate,
  created,
}: {
  showRetired: boolean;
  onToggleRetired: (value: boolean) => void;
  onCreate: () => void;
  created: string;
}) {
  return (
    <>
      <div className="dash-head">
        <div>
          <p className="kicker">Access</p>
          <h1 className="display">API keys</h1>
        </div>
        <Button onClick={onCreate}>Create API key</Button>
      </div>
      <Card>
        <div className="panel-title">
          <Switch checked={showRetired} onChange={onToggleRetired} label="Show retired keys" />
        </div>
        {showRetired ? (
          <EmptyState title="No retired keys" body="Keys you revoke will land here. Active keys stay in the list below." />
        ) : (
          <div className="rows">
            {created && (
              <div className="row">
                <div>
                  <strong>{created}</strong>
                  <small>Just created · copy it now</small>
                </div>
                <Badge tone="success">New</Badge>
              </div>
            )}
            {keys.map((key) => (
              <div className="row" key={key.name}>
                <div>
                  <strong>{key.name}</strong>
                  <small>{key.hint}</small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <Badge tone="brand">Active</Badge>
                  <small style={{ display: "block", marginTop: "var(--space-1)" }}>{key.requests}</small>
                </div>
              </div>
            ))}
          </div>
        )}
      </Card>
    </>
  );
}

function Providers() {
  return (
    <>
      <div className="dash-head">
        <div>
          <p className="kicker">Models</p>
          <h1 className="display">Providers</h1>
          <p className="form-note">OpenAI, Anthropic, Gemini, and Hugging Face, as wired in the AI dashboard.</p>
        </div>
      </div>
      <div className="rows">
        {providers.map((provider) => (
          <Card key={provider.name}>
            <div className="row" style={{ border: 0 }}>
              <strong>{provider.name}</strong>
              <Badge tone={provider.tone}>{provider.share}</Badge>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
}

export function PartsScreen() {
  const [open, setOpen] = useState(false);
  const [veg, setVeg] = useState(true);
  const [selected, setSelected] = useState("Lunch");
  const [checked, setChecked] = useState(true);

  return (
    <div className="parts">
      <header>
        <p className="kicker">Web kit</p>
        <h1 className="display" style={{ fontSize: "var(--text-h1)", margin: "var(--space-2) 0 0" }}>Components</h1>
        <p className="lede">Buttons, inputs, cards, navigation, lists, badges, a modal, and an empty state. Built on the shared tokens.</p>
      </header>

      <section className="parts-block">
        <h2 className="display">Buttons</h2>
        <div className="row-wrap">
          <Button>Start cooking</Button>
          <Button variant="secondary">Save for later</Button>
          <Button variant="soft">Light peach</Button>
          <Button variant="ghost">Not now</Button>
          <Button disabled>Unavailable</Button>
        </div>
      </section>

      <section className="parts-block">
        <h2 className="display">Inputs</h2>
        <div className="parts-grid">
          <Input label="Email address" placeholder="you@heysalad.ai" hint="Used for the membership confirmation." />
          <Input label="Town or city" error="Add a city so we know where to look for partners." defaultValue="" />
        </div>
      </section>

      <section className="parts-block">
        <h2 className="display">Badges, tags, and choices</h2>
        <div className="row-wrap">
          <Badge>Pilot</Badge>
          <Badge tone="neutral">Queued</Badge>
          <Badge tone="success">Active</Badge>
          <Badge tone="warning">Confirming</Badge>
          <Badge tone="error">Missing</Badge>
        </div>
        <div className="row-wrap" style={{ marginTop: "var(--space-4)" }}>
          {["Lunch", "Dinner", "Batch cook"].map((tag) => (
            <Tag key={tag} selected={selected === tag} onClick={() => setSelected(tag)}>{tag}</Tag>
          ))}
        </div>
        <div className="row-wrap" style={{ marginTop: "var(--space-4)" }}>
          <Switch checked={veg} onChange={setVeg} label="Vegetarian recipes only" />
          <Checkbox checked={checked} onChange={setChecked} label="Email me when membership opens" />
        </div>
      </section>

      <section className="parts-block">
        <h2 className="display">Cards, list, and navigation</h2>
        <div className="parts-grid">
          <Card>
            <p className="kicker">List</p>
            <div className="rows">
              <div className="row"><strong>Tomato basil orzo</strong><span>$12.40</span></div>
              <div className="row"><strong>Weeknight beans</strong><span>$8.10</span></div>
              <div className="row"><strong>Citrus salad</strong><span>$6.50</span></div>
            </div>
          </Card>
          <Card warm>
            <p className="kicker">Nav sample</p>
            <div className="row-wrap" style={{ marginTop: "var(--space-3)" }}>
              <Badge tone="solid">Home</Badge>
              <Badge tone="neutral">Journal</Badge>
              <Badge tone="neutral">Partners</Badge>
            </div>
            <p style={{ marginTop: "var(--space-4)" }}>Side navigation on the dashboard uses the same pill treatment, with cherry for the current item.</p>
          </Card>
        </div>
      </section>

      <section className="parts-block">
        <h2 className="display">Modal and empty state</h2>
        <div className="parts-grid">
          <Card>
            <h3 className="subhead">Confirm a key</h3>
            <p className="form-note">Modals sit on a warm ink scrim, with a 24px radius and the shared button pair.</p>
            <div style={{ marginTop: "var(--space-4)" }}>
              <Button onClick={() => setOpen(true)}>Open modal</Button>
            </div>
          </Card>
          <Card>
            <EmptyState title="No recipes yet" body="Paste a link when you have one. Sally will turn it into a shopping list." />
          </Card>
        </div>
        <Modal open={open} title="Revoke this key?" onClose={() => setOpen(false)}>
          <p>Production requests will stop as soon as you revoke it. You can create a new key after.</p>
          <div className="actions">
            <Button variant="ghost" onClick={() => setOpen(false)}>Keep it</Button>
            <Button onClick={() => setOpen(false)}>Revoke key</Button>
          </div>
        </Modal>
      </section>
    </div>
  );
}

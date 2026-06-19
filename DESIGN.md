# HeySalad Design System

**HeySalad — love your food.**

HeySalad is a global food company building tools that help people discover, cook, and share food they love — spanning AI-powered recipe shopping, creator commerce, payment hardware, and kitchen tech, all under one friendly mascot, **Sal** (a tomato-heart character). This project is the single source of truth for HeySalad's visual identity: tokens, fonts, brand assets, reusable components, and product UI kits.

> Mission, in the company's words: empower every household to reduce food waste, embrace healthier eating, and save time with AI-driven meal solutions. Most products are open source.

## Products represented
- **Sally** — AI recipe shopping / discovery (snap your fridge → recipes). The brand's swipe-to-discover icon set (Like, Dislike, Refresh, Heart, Chef's hat, Cooking time) points here.
- **Buy Me A Salad** — creator commerce.
- **heysalad.app / heysalad.io** — marketing + web product surface.
- **HeySalad TX** — payment hardware / kitchen tech.

## Sources used
- **GitHub — brand assets:** [Hey-Salad/.github](https://github.com/Hey-Salad/.github) (logos, Sal mascot, launcher icon). Explore further to build accurate product designs.
- **GitHub org:** [github.com/Hey-Salad](https://github.com/Hey-Salad) — 286 public repos; most products are open source.
- **Local "Brand Guidelines/"** folder (read-only mount): Grandstander + Figtree font families, brand photography, the brand icon set, and `HeySalad_BrandGuidelines_v.1.1.pdf`.
- Website: [heysalad.io](https://heysalad.io) · Contact: investors@heysalad.io

*Not all readers will have access to these — links are recorded so those who do can dig deeper.*

---

## Content fundamentals (voice & copy)

**Voice:** Direct, warm, a little playful. No corporate speak. Talks about food the way someone who actually loves eating talks about food — short sentences, concrete language, never precious.

- **Person:** Second person ("you"), occasional first-person plural for the mission ("we're cooking up a sustainable future"). Speak *to* the cook.
- **Casing:** Sentence case for everything — headlines, buttons, labels. The wordmark "HeySalad" is one word, capital H and S. Tagline "love your food" is lowercase.
- **Length:** Short. Headlines are a few words ("Love your food", "Snap your fridge, get dinner"). Body stays concise and concrete.
- **Concrete over abstract:** Name the food. "Tomato basil orzo," "what's already in your fridge" — not "culinary solutions."
- **Emoji:** Used warmly in community/marketing contexts (🍅 🌱 ♻️ ✨ — the tomato 🍅 is effectively a brand signature, echoing Sal). **Avoid emoji inside product UI chrome** (buttons, form labels, nav) — keep those clean; use the brand icon set instead.
- **Vibe:** Optimistic, sustainability-minded, friendly-not-cutesy. Talks about reducing food waste and saving time without lecturing.

Examples: *"Love your food."* · *"Let's make every meal count!"* · *"Snap your fridge, get dinner — no waste, no last-minute store runs."*

---

## Visual foundations

**Color.** Warm and saturated, anchored by **Cherry Red `#ed4c4c`** (the hero — logo, primary CTAs, Sal's body, one or two eye-draws per screen). **Peach `#faa09a`** and **Light Peach `#ffd0cd`** are supporting tones for depth, soft cards, and warm section backgrounds — never substitutes for cherry. **White does the heavy lifting as negative space** to keep the warm palette from feeling heavy. A warm off-white **Cream `#fff8f6`** is the app background. Neutrals are warm-leaning grays (`--ink-900…300`, `--line-200/100`) for text and hairlines. No blues/greens/purples as *brand* color — only as semantic success/warning/error utilities, used sparingly.
> **Accessibility:** Cherry on white is 3.66:1 — passes AA for large/bold text (18px+) and UI, **fails** for body text. Never set body copy <18px in cherry on white, or white on cherry below 18px. Pair cherry with dark neutral for body.

**Type.** Two families. **Grandstander** (rounded, playful) for display/headlines, the wordmark, and short large statements — Bold, tracking −0.02em. **Figtree** for body, UI labels, captions, tables — readable everywhere. Rule of thumb: a sentence or anything <16px → Figtree; a few attention-grabbing words at large size → Grandstander.

**Geometry & radius.** Soft and friendly, echoing Sal's rounded body and Grandstander's letterforms. Cards 16px radius; inputs 12px; buttons and chips fully pill (999px). Nothing sharp or angular.

**Backgrounds.** Default white; warm sections in light-peach or soft peach. **Avoid large flat fields of full-saturation cherry** — it's an accent, not a backdrop. Brand photography is warm, bright, natural daylight — real food, hands, kitchens, fresh produce (tomatoes, leafy greens, berries); no heavy filters, no grain, no moody/cool grading.

**Shadows.** Soft, warm-tinted (`rgba(31,20,22,…)`), never harsh. A signature **cherry glow** (`--shadow-brand`) sits under primary CTAs.

**Borders.** Hairline `--line-200` (#ECE5E5) on white cards/inputs; 1.5px cherry border for secondary buttons and focused inputs.

**Motion.** Friendly and quick — 120–320ms, `--ease-out` for most, a playful `--ease-bounce` overshoot for toggles/knobs and celebratory moments. Fades and gentle translateY lifts; no harsh or infinite decorative loops.

**States.** Hover = darker cherry (`--cherry-red-hover`) for primary, light-peach wash for secondary/ghost. Press = subtle `scale(0.97)`. Focus = cherry border + soft `--cherry-red-soft` halo ring. Selected chips fill cherry.

**Transparency/blur.** Used lightly — soft focus halos and gentle overlays; not a glassmorphism-heavy system.

**Layout.** Generous white space, comfortable padding, pill controls, rounded cards floating on cream or white.

---

## Iconography

- **Brand icon set** (in `assets/icons/`, copied from the Brand Guidelines): `Chefshat`, `CookingTime`, `Like`, `Dislike`, `Refresh`, `Heart`. These are **filled, rounded, friendly** SVGs at 96×96, authored white-filled to sit inside colored (cherry) circles/buttons — the swipe-to-discover vocabulary of the Sally recipe app. Recolor via container background, not by editing the SVG.
- **Style rule:** rounded and filled to match Sal and Grandstander. **Avoid sharp/angular or thin-line icon sets** — they clash with the brand's soft geometry.
- **For UI needs beyond the brand set,** prefer a rounded, filled or soft-stroke library. *(Substitution flag: where a broader icon set is needed, [Lucide](https://lucide.dev) at higher stroke + rounded caps is the closest CDN match, but it's a line set — confirm with the team before standardizing, and prefer the brand SVGs wherever they exist.)*
- **Emoji as icons:** only in marketing/community copy (🍅 especially); not in product chrome.
- **Mascot:** Sal (`assets/logos/Sal.png`, `Sal.ico`) doubles as app icon, favicon, loading indicator, and empty-state anchor. Never recolor, rotate, stretch, or add effects.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link; `@import`s all tokens + fonts.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css` (radius/shadow/motion), `fonts.css` (@font-face), `base.css`.
- `assets/` — `logos/` (HeySalad lockups black/white, Sal), `icons/` (brand SVG set), `fonts/` (Grandstander + Figtree TTFs), `images/` (brand photography).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) for the Design System tab.
- `SKILL.md` — Agent-Skill-compatible entry for downloaded use.

**Components** (`components/`) — `window.HeySaladDesignSystem_7c87a6.*`
- `core/` — `Button`, `Badge`, `Tag`, `Avatar`
- `forms/` — `Input`, `Switch`, `Checkbox`
- `surfaces/` — `Card`

**UI kits** (`ui_kits/`) — *in progress.* Planned: **Sally** recipe-discovery app (onboarding, swipe-to-discover feed, recipe detail, shopping list).

---

*Last updated: June 2026. Fonts shipped: Grandstander & Figtree (the brand's actual families — no substitution needed).*

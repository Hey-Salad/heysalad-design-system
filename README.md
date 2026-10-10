# HeySalad Design System

**Love your food.** The single source of truth for HeySalad's visual identity — design tokens, the real brand fonts, logos & mascot, reusable React components, and a full product UI kit.

> Using this with **Cursor**? A `.cursorrules` file is included — clone this repo into your project and Cursor will follow the HeySalad brand automatically. The complete guide is in **[DESIGN.md](./DESIGN.md)**.

## What's inside

| Path | What |
|---|---|
| `styles.css` | Single entry point — `@import`s all tokens + fonts. Link this one file. |
| `tokens/` | CSS custom properties: `colors.css`, `typography.css`, `spacing.css` (radius/shadow/motion), `fonts.css` (@font-face), `base.css`. |
| `components/` | React primitives — `core/` (Button, Badge, Tag, Avatar), `forms/` (Input, Switch, Checkbox), `surfaces/` (Card). |
| `ui_kits/sally/` | Full click-through recipe-app reference (welcome → discover → recipe detail → shopping list → profile). |
| `ui_kits/web/` | Web kit for the heysalad.ai marketing site, join form, and AI dashboard. |
| `ui_kits/mobile/` | Mobile kit for the Sally by HeySalad app: home, list, recipes, card, profile. |
| `ui_kits/index.html` | Browsable catalog for the web and mobile kits. |
| `guidelines/` | Brand specimen cards (colors, type, spacing, logo, mascot, icons). |
| `assets/` | `logos/` (HeySalad lockups + Sal mascot), `icons/` (recipe SVGs), `fonts/` (Grandstander + Figtree TTFs), `images/` (brand photography). |
| `DESIGN.md` | The full design guide — colors, type, voice, visual foundations, iconography. |
| `SKILL.md` | Agent-Skill entry point (for Claude Code / Codex-style agents). |

## Quick start

```html
<!-- Link the design system once; components read its CSS variables -->
<link rel="stylesheet" href="styles.css" />
```

```jsx
import { Button } from "./components/core/Button.jsx";

<Button variant="primary" size="lg">Start cooking</Button>
```

## UI kit preview

```bash
npm install
npm run typecheck
npm run build
npm run preview
```

Open the catalog at `ui_kits/index.html` (Vite serves it during `npm run dev` and `npm run preview`). The build writes a static site to `dist/`.

## Brand in one breath

- **Cherry Red `#ed4c4c`** is the hero (CTAs, logo, Sal) — an accent, never a flat background.
- **Peach `#faa09a` / Light Peach `#ffd0cd`** warm supporting tones; **white & cream** do the negative-space heavy lifting.
- **Grandstander** for rounded display headlines; **Figtree** for body/UI.
- Soft geometry — pill buttons, 16px cards, warm shadows, a cherry glow under primary CTAs.
- Voice: direct, warm, playful, concrete; sentence case; 🍅 in marketing only.

Brand source assets: [Hey-Salad/.github](https://github.com/Hey-Salad/.github) · [github.com/Hey-Salad](https://github.com/Hey-Salad)

# HeySalad Design System

**Love your food.** The single source of truth for HeySalad's visual identity — design tokens, the real brand fonts, logos & mascot, reusable React components, and a full product UI kit.

> Using this with **Cursor**? A `.cursorrules` file is included — clone this repo into your project and Cursor will follow the HeySalad brand automatically. The complete guide is in **[DESIGN.md](./DESIGN.md)**.

## What's inside

| Path | What |
|---|---|
| `styles.css` | Single entry point — `@import`s all tokens + fonts. Link this one file. |
| `tokens/` | CSS custom properties, plus generated `heysalad.tokens.json`, `heysalad.tokens.ts`, and `HeySaladTokens.swift`. |
| `components/` | React primitives — `core/` (Button, Badge, Tag, Avatar), `forms/` (Input, Switch, Checkbox), `surfaces/` (Card). |
| `ui_kits/sally/` | Full click-through recipe-app reference (welcome → discover → recipe detail → shopping list → profile). |
| `guidelines/` | Brand specimen cards (colors, type, spacing, logo, mascot, icons). |
| `assets/` | `logos/` (black wordmark, icon, Sally), `icons/` (recipe SVGs), `fonts/` (Figtree + Grandstander TTFs), `images/` (brand photography). |
| `scripts/generate-tokens.mjs` | Regenerates the JSON, TypeScript, and Swift token exports from the CSS. |
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

## Brand in one breath

- **Cherry Red `#ed4c4c`** is the hero (CTAs, logo, Sally) — an accent, never a flat background.
- **Peach `#faa09a` / Light Peach `#ffd0cd`** warm supporting tones; **white & cream** do the negative-space heavy lifting. Ink is `#1f1416`.
- **Figtree** is the only app UI typeface. **Grandstander** is for ads, marketing, and website hero headlines — never app UI.
- The official logo has a black wordmark. Chat avatars use `assets/logos/heysalad-icon.svg`. Sally is a large illustration on plain white.
- Soft geometry — pill buttons, 16px cards, warm shadows, a cherry glow under primary CTAs.
- Voice: direct, warm, playful, concrete; sentence case; 🍅 in marketing only.

Brand source assets: [Hey-Salad/.github](https://github.com/Hey-Salad/.github) · [github.com/Hey-Salad](https://github.com/Hey-Salad)

## License

Copyright (C) 2026 HeySalad Inc.

Licensed under the GNU Affero General Public License v3.0 only (AGPL-3.0-only). See [LICENSE](LICENSE) and [NOTICE](NOTICE). If you run a modified version of this software to provide a network service, the AGPL requires you to offer its users the corresponding source code. Versions published before this change remain under their previous licence.

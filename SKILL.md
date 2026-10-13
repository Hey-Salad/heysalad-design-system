---
name: heysalad-design
description: Use this skill to generate well-branded interfaces and assets for HeySalad, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Colors:** Cherry Red `#ed4c4c` (hero), Peach `#faa09a`, Light Peach `#ffd0cd`, White, Cream `#fff8f6`. Cherry is an accent, not a background. Never body text <18px in cherry on white.
- **Type:** Grandstander (rounded display/headlines, short & large); Figtree (body/UI, everything <16px or sentence-length).
- **Geometry:** soft — pill buttons/chips (999px), 16px cards, 12px inputs. Warm soft shadows; cherry glow under primary CTAs.
- **Voice:** direct, warm, playful, concrete; sentence case; "you"; 🍅 in marketing only, not product chrome.
- **Mascot:** Sally, the tomato-heart (`assets/logos/Sal.png`). Never recolor/rotate/stretch.
- **Assets:** logos in `assets/logos/`, brand icon SVGs in `assets/icons/`, fonts in `assets/fonts/`, photography in `assets/images/`.
- **Components:** `styles.css` + `_ds_bundle.js`, then `window.HeySaladDesignSystem_7c87a6.{Button,Badge,Tag,Avatar,Input,Switch,Checkbox,Card}`.

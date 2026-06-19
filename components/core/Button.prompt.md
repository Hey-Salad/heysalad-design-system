Pill-shaped brand button — use `primary` (Cherry Red) for the single most important action per view; everything else is secondary/soft/ghost.

```jsx
<Button variant="primary" size="lg">Start cooking</Button>
<Button variant="secondary">Browse recipes</Button>
<Button variant="soft" size="sm">Save</Button>
<Button variant="ghost">Cancel</Button>
```

Variants: `primary` (cherry fill + glow), `secondary` (white, cherry border/text), `soft` (light-peach fill), `ghost` (transparent). Sizes `sm | md | lg`. Supports `iconLeft` / `iconRight`, `fullWidth`, `disabled`.

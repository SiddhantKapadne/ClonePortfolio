# Motion Standard

This project uses a shared entrance motion system for all pages and primary sections.

## Principles

- Keep motion subtle, calm, and content-first.
- Use consistent timing to create a sense of flow.
- Prefer opacity + slight vertical translation for entrance.
- Respect accessibility with `prefers-reduced-motion`.

## Standard Tokens

- **Easing:** `cubic-bezier(0.22, 1, 0.36, 1)` (smooth out)
- **Duration:** `520ms`
- **Base offset:** `translateY(10px)` to `translateY(0)`
- **Delay pattern:** `0ms`, `80ms`, `160ms`, `240ms`, ...

## Utility Classes

Defined in `src/index.css`:

- `motion-page-enter`: for full page or major section entrance
- `motion-page-stagger`: for child blocks that should stagger

Set delay per element with CSS variable:

```jsx
<section className="motion-page-enter" style={{ '--motion-delay': '80ms' }}>
```

## Usage Rules

- Apply `motion-page-enter` to page root blocks and major sections.
- Apply `motion-page-stagger` to sequential blocks inside a page.
- Keep total entrance sequence under ~700ms for perceived responsiveness.
- Avoid large scale/rotation effects for content screens.

## Accessibility

- `prefers-reduced-motion: reduce` disables these animations globally.
- Ensure no essential information depends on animation to be understood.

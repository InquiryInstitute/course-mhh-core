# More Human Than Human — Style Bible

## Design Philosophy

The visual identity of MHH draws from two sources:
1. **Blade Runner** (1982, 2049) — neon against darkness, rain, CRT glow
2. **Academic sobriety** — clean typography, restrained animation, dignity

We are not making a fan site. We are making a serious inquiry program that acknowledges its source material.

---

## Color Palette

### Base Colors

| Name | Hex | Usage |
|------|-----|-------|
| `zinc-950` | `#09090b` | Page background |
| `zinc-900` | `#18181b` | Card/surface background |
| `zinc-800` | `#27272a` | Borders, dividers |
| `zinc-700` | `#3f3f46` | Disabled states |
| `zinc-500` | `#71717a` | Muted text |
| `zinc-400` | `#a1a1aa` | Secondary text |
| `zinc-200` | `#e4e4e7` | Primary text (light) |
| `zinc-100` | `#f4f4f5` | Headings |

### Season Accent Colors

| Season | Primary | Glow | Usage |
|--------|---------|------|-------|
| S0: Electric Sheep | `amber-500` (#f59e0b) | `amber-500/5` | Warmth, preparation |
| S1: Voight-Kampff | `cyan-500` (#06b6d4) | `cyan-500/5` | Technical, cold |
| S2: MHH | `rose-500` (#f43f5e) | `rose-500/5` | Intensity, collapse |

### Semantic Colors

| Purpose | Color | Usage |
|---------|-------|-------|
| Pass | `green-400` (#4ade80) | Assessment outcome |
| Revise | `amber-400` (#fbbf24) | Assessment outcome |
| Refuse | `zinc-400` (#a1a1aa) | Assessment outcome (dignified) |

---

## Typography

### Font Stack

```css
--font-display: 'Cinzel Decorative', serif;
--font-body: 'EB Garamond', Georgia, serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;
```

### Scale

| Element | Font | Size | Weight |
|---------|------|------|--------|
| Arc Title | Display | 5xl-8xl | Bold |
| Season Title | Display | 4xl-6xl | Bold |
| Section Head | Body | 2xl-3xl | Semibold |
| Body | Body | base-lg | Regular |
| Labels | Mono | xs | Regular |
| Faculty Names | Mono | lg | Regular |

### Treatment

- **Faculty names** always in monospace: `a.turing`, `a.dick`
- **Quotes** in italic serif with large decorative marks
- **Technical terms** in regular weight, not bold
- **Season numbers** as `S0`, `S1`, `S2` — always uppercase mono

---

## Spacing

Use Tailwind defaults with restraint:

| Context | Spacing |
|---------|---------|
| Section padding | `py-16` to `py-24` |
| Card padding | `p-6` to `p-8` |
| Element gaps | `gap-4` to `gap-8` |
| Text line-height | `leading-relaxed` |

---

## Backgrounds

### Page Background

Always `zinc-950` with subtle texture:

```css
background-color: #09090b;
background-image: 
  linear-gradient(to bottom, #18181b, #09090b, #09090b);
```

### Glow Effects

Soft, atmospheric glows using season colors:

```css
/* Amber glow for S0 */
.glow-amber {
  background: radial-gradient(
    ellipse at center,
    rgba(245, 158, 11, 0.05) 0%,
    transparent 70%
  );
  filter: blur(100px);
}
```

### Grid/Rain Patterns

Subtle, low-opacity background patterns:

```css
/* Circuit grid */
background-image: 
  linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
  linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
background-size: 50px 50px;

/* Rain effect (S2 only) */
background-image: repeating-linear-gradient(
  0deg,
  transparent,
  transparent 2px,
  rgba(244, 63, 94, 0.03) 2px,
  rgba(244, 63, 94, 0.03) 4px
);
```

---

## Components

### Cards

```css
.card {
  background: rgba(24, 24, 27, 0.5);  /* zinc-900/50 */
  border: 1px solid #27272a;          /* zinc-800 */
  border-radius: 0.5rem;
}

.card:hover {
  border-color: var(--season-color-30);
}
```

### Buttons

Primary buttons use season accent:

```css
.btn-primary {
  background: var(--season-primary);
  color: #09090b;
  font-weight: 600;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
}
```

### Module Numbers

Large, muted numbers for content sections:

```css
.module-number {
  font-family: var(--font-mono);
  font-size: 2rem;
  font-weight: 700;
  color: #3f3f46;  /* zinc-700 */
}
```

---

## Animation

### Principles

1. **Restrained** — no gratuitous motion
2. **Purposeful** — animation conveys meaning
3. **Subtle** — opacity and position, rarely scale
4. **Respectful** — reduced motion preference honored

### Timing

```css
--transition-fast: 150ms ease;
--transition-base: 200ms ease;
--transition-slow: 300ms ease;
```

### Hover States

```css
.interactive {
  transition: all var(--transition-base);
}

.interactive:hover {
  transform: translateY(-2px);
  /* OR */
  border-color: var(--season-primary-30);
}
```

### Faculty Busts

Subtle presence animations:
- Gentle breathing (scale 1.0 → 1.01)
- Eye tracking (if applicable)
- Ambient glow pulse

---

## Imagery

### Faculty Busts

- Format: SVG with embedded animations, or PNG with CSS animation
- Style: 2.5D relief, unadorned, dignified
- Size: 200-400px width
- Background: transparent

### Decorative Elements

- Minimal use of icons
- No emoji in body text
- Film stills used sparingly, credited

---

## Voice & Tone

### Headlines

Direct, declarative, questioning:
- "What does it mean to be human?"
- "Design your own humanity test"
- "If a test cannot be trusted, what replaces it?"

### Body Copy

- Second person ("You will...")
- Present tense
- No hedging ("might", "perhaps")
- No exclamation marks

### Faculty Quotes

Always attributed, always in character:

> "I created ELIZA to demonstrate the superficiality of communication between humans and machines."
> — a.weizenbaum

---

## Don'ts

- ❌ Purple gradients
- ❌ Excessive neon
- ❌ Cyberpunk clichés (circuitry, hex patterns)
- ❌ Generic AI imagery
- ❌ Stock photos
- ❌ Emoji
- ❌ Rounded everything
- ❌ Light mode (for arc sites)

---

## File Naming

```
assets/
├── busts/
│   ├── a-turing.svg
│   ├── a-dick.svg
│   └── ...
├── icons/
│   ├── season-0.svg
│   └── ...
└── backgrounds/
    ├── grid-pattern.svg
    └── ...
```

---

*This style bible governs all MHH arc materials.*

# mhh-core

**Canonical assets, style bible, and shared components for the More Human Than Human arc**

---

> *This course is not about proving you are human.*  
> *It is about questioning why anyone is allowed to decide.*

---

## Contents

```
mhh-core/
├── README.md
├── STYLE_BIBLE.md
├── FACULTY_CHARTER.md
├── assets/
│   └── busts/              # 2.5D reliquary busts (SVG/animated)
├── components/             # Shared Astro/React components
├── policies/               # Arc policies and charters
└── .github/
    └── workflows/
        └── pages.yml       # GitHub Pages deployment
```

## Faculty Busts

Faculty are represented as **2.5D reliquary busts**:

- Unadorned (no laurels, no symbols)
- Unnamed in physical form
- Identity disclosed only by context
- Reliquary forms designed to hold inquiry, not commemorate achievement

### Available Busts

| Faculty | Status | Focus |
|---------|--------|-------|
| `a.turing` | Lead | Tests, limits, detection logic |
| `a.dick` | Core | Artificial persons, empathy, breakdown |
| `a.weizenbaum` | Core | Refusal, moral limits of computation |
| `a.arendt` | Core | Judgment, banality, responsibility |
| `a.shannon` | Core | Information vs meaning |
| `a.foucault` | Core | Classification, power, surveillance |
| `a.nabokov` | Guest | Interpretation, misreading |

## Color System

```css
/* Season Colors */
--color-s0-primary: #f59e0b;   /* amber-500 - Electric Sheep */
--color-s1-primary: #06b6d4;   /* cyan-500 - Voight-Kampff */
--color-s2-primary: #f43f5e;   /* rose-500 - More Human Than Human */

/* Base */
--color-bg: #09090b;           /* zinc-950 */
--color-surface: #18181b;      /* zinc-900 */
--color-border: #27272a;       /* zinc-800 */
--color-text: #fafafa;         /* zinc-50 */
--color-text-muted: #71717a;   /* zinc-500 */
```

## Typography

- **Display**: Cinzel Decorative (headings)
- **Body**: EB Garamond (prose)
- **Mono**: JetBrains Mono (code, faculty names)

## Usage

Import shared components in season repos:

```astro
---
import { FacultyBust } from 'mhh-core/components/FacultyBust.astro';
import { SeasonHeader } from 'mhh-core/components/SeasonHeader.astro';
---

<FacultyBust slug="a-turing" />
<SeasonHeader season={0} title="Electric Sheep" />
```

## License

Part of the Inquiry Institute curriculum.

---

*Custodian: Inquiry Institute*

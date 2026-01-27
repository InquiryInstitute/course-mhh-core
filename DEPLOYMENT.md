# MHH Deployment Guide

## Repository Structure

The More Human Than Human arc consists of four separate repositories, each deployed to GitHub Pages:

```
inquiry-institute/
├── course-mhh-core/                    # Arc overview, style bible, shared assets
├── course-mhh-electric-sheep/          # Season 0: Invitation, orientation
├── course-mhh-voight-kampff/           # Season 1: Technical spine
└── course-mhh-more-human-than-human/   # Season 2: Synthesis, refusal
```

## GitHub Pages URLs

| Repository | URL |
|------------|-----|
| course-mhh-core | https://inquiry-institute.github.io/course-mhh-core |
| course-mhh-electric-sheep | https://inquiry-institute.github.io/course-mhh-electric-sheep |
| course-mhh-voight-kampff | https://inquiry-institute.github.io/course-mhh-voight-kampff |
| course-mhh-more-human-than-human | https://inquiry-institute.github.io/course-mhh-more-human-than-human |

## Setup Instructions

### 1. Create GitHub Repositories

For each repo directory, create a new GitHub repository:

```bash
# From course-mhh-core directory
gh repo create inquiry-institute/course-mhh-core --public --source=. --push

# From course-mhh-electric-sheep directory
gh repo create inquiry-institute/course-mhh-electric-sheep --public --source=. --push

# From course-mhh-voight-kampff directory
gh repo create inquiry-institute/course-mhh-voight-kampff --public --source=. --push

# From course-mhh-more-human-than-human directory
gh repo create inquiry-institute/course-mhh-more-human-than-human --public --source=. --push
```

### 2. Enable GitHub Pages

For each repository:

1. Go to **Settings** → **Pages**
2. Under **Source**, select **GitHub Actions**
3. The workflow will automatically deploy on push to `main`

### 3. Install Dependencies

Each repo uses Astro with Tailwind CSS:

```bash
cd course-mhh-core && npm install
cd course-mhh-electric-sheep && npm install
cd course-mhh-voight-kampff && npm install
cd course-mhh-more-human-than-human && npm install
```

### 4. Local Development

```bash
npm run dev
```

Each site will be available at `http://localhost:4321/course-{repo-name}`

## GitHub Actions Workflow

Each repository includes a `.github/workflows/deploy.yml` that:

1. Triggers on push to `main` or manual dispatch
2. Installs Node.js 20
3. Runs `npm ci` and `npm run build`
4. Uploads the `dist/` directory as a Pages artifact
5. Deploys to GitHub Pages

## Customization

### Base Path

The `base` option in `astro.config.mjs` must match the repository name:

```javascript
export default defineConfig({
  site: 'https://inquiry-institute.github.io',
  base: '/course-mhh-core',  // Change for each repo
  // ...
});
```

### Season Colors

Each season has its own primary color defined in `tailwind.config.mjs`:

| Season | Color | Hex |
|--------|-------|-----|
| S0: Electric Sheep | Amber | #f59e0b |
| S1: Voight-Kampff | Cyan | #06b6d4 |
| S2: More Human Than Human | Rose | #f43f5e |

## Shared Components

The `course-mhh-core` repository contains shared assets that can be referenced by other repos:

- `/assets/busts/` — Faculty bust SVGs
- `/STYLE_BIBLE.md` — Design system documentation
- `/FACULTY_CHARTER.md` — Agent design principles

To use shared assets, either:
1. Copy them to each repo
2. Reference the course-mhh-core URLs directly
3. Set up a monorepo with shared packages (future enhancement)

## Troubleshooting

### Build Failures

1. Ensure `package-lock.json` is committed
2. Check Node version matches workflow (20.x)
3. Verify all dependencies are in `package.json`

### 404 on GitHub Pages

1. Verify the `base` path matches the repo name
2. Check that Pages is enabled in repo settings
3. Ensure the workflow completed successfully

### CSS Not Loading

1. Check that Tailwind is processing all file types in `content` array
2. Verify `@astrojs/tailwind` integration is configured
3. Clear browser cache

---

*For support, contact the Inquiry Institute development team.*

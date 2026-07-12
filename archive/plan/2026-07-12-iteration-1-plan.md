# Iteration 1 Plan — Portfolio Shell + Live Foundations

**Date:** 2026-07-12 · **Owner:** Jeancarlo Javier · **Source:** [foundations research](../research/2026-07-12-foundations.md)
**Goal of this iteration:** replace the hello-world page with a real, publishable portfolio that already *proves* the "AI-operated site" concept — and lay the folder/data architecture every later iteration builds on.

---

## 1. Concept analysis — what iteration 1 must get right

The product is not "a portfolio". It is **a portfolio that demonstrates itself being operated by an AI agent**. From the research, the ranking of value is:

1. **Proof of liveness** — content only an agent-run site can have (changelog from git, deploy heartbeat). Even in v1, at least one such element must ship, or the site is indistinguishable from any static portfolio.
2. **Credible professional identity** — Jeancarlo Javier: frontend engineer (Vue/TS, currently at IDX Boost) with a real design/UX background (Guarnic), now building AI-operated systems. The hybrid is the headline, not an afterthought.
3. **Architecture that survives v2–v4** — the `data/` JSON contract, feature-based folders, and build-time data loading must be right *now*, because v2 (Model of the Day cron) and v3 (GitHub digest, PostHog stats) will only append data files and drop in new feature folders — no restructuring.

**Iteration-1 scope (from roadmap §7 of research):**
- Portfolio shell: hero, about, projects, contact/links — single page.
- `data/` directory with the JSON contract defined (schemas + seed files).
- **Live changelog section** (Tier A #2) — the one live feature in v1, because it costs nothing (git history already exists) and delivers the core story.
- A minimal **heartbeat line** (last-build timestamp) rendered at build time — trivially available (`new Date()` at build), reinforces liveness, and reserves the UI slot the v2 full heartbeat strip will occupy.

**Explicitly out of scope for v1** (deferred per research): Model of the Day + crons (v2), /now page, GitHub digest, PostHog widget (v3), any visitor-input feature (rejected), any i18n machinery (open question #1 — ship English-only, structure copy so translation is a later swap).

## 2. Architecture

### 2.1 Guiding constraints (non-negotiable, from CLAUDE.md + research)

- Static output only; every save auto-deploys → **prefer one coherent write per publishable state**; scaffold new files bottom-up (components before the page that imports them would break the build — see §5 build-safety notes).
- No server runtime → all data is **flat JSON in `data/`, read at build time** via Astro imports. Client-side fetch is deferred (research §4: rebuild-on-save already gives seconds-fresh content).
- Git history is the audit log → the changelog feature reads it **at build time** (Astro frontmatter can shell out via `node:child_process` during build — static output, no runtime cost).

### 2.2 Folder structure — feature-based

```
src/
  pages/
    index.astro              # composition only: imports layout + feature sections, zero logic
  layouts/
    Base.astro               # <html>, <head> (SEO/meta/OG), global CSS import, header/footer slots
  features/                  # one folder per vertical feature; each owns its UI + data access
    hero/
      Hero.astro
    about/
      About.astro
    projects/
      Projects.astro
      ProjectCard.astro
      projects.ts            # loads + validates data/projects.json, exports typed Project[]
    changelog/
      Changelog.astro
      changelog.ts           # build-time `git log` → typed CommitEntry[]
    heartbeat/
      Heartbeat.astro        # "last build: <ISO timestamp>" (build-time new Date())
    contact/
      Contact.astro          # links: GitHub, email, LinkedIn
  lib/
    types.ts                 # shared interfaces: Project, CommitEntry, SiteMeta
    site.ts                  # site-wide constants (name, tagline, links) — single source for copy
  styles/
    global.css               # design tokens (CSS custom properties) + reset + base typography
data/
  projects.json              # seed: huevue, jspdf-utils-vue, + 2–3 top repos
  site.json                  # name, headline, positioning copy, social links
tests/
  data.test.js               # JSON schema/shape validation of data/*.json
  build.test.js              # smoke: dist/index.html contains key markers
archive/
  research/  plan/           # docs (already excluded from build)
```

**Feature-based methodology (rules for this and all future iterations):**
- A feature folder contains everything vertical to it: its `.astro` components and its data-loading module. Nothing outside a feature imports from inside another feature; sharing goes through `lib/`.
- `pages/index.astro` is a **composition root** — it stacks `<Hero/> <About/> <Projects/> <Changelog/> <Contact/>` inside `<Base>` and contains no business logic. Adding v2's Model-of-the-Day = new `features/model-of-the-day/` folder + one line in the page.
- **Data contract:** every `data/*.json` file has a TypeScript interface in `lib/types.ts` and exactly one loader module that imports/validates it. Cron jobs (v2+) write JSON; they never touch `src/`. This is the seam that keeps automation and presentation decoupled.
- Styling: plain scoped CSS in each `.astro` component + design tokens (colors, spacing, type scale) as CSS custom properties in `styles/global.css`. No CSS framework — keeps builds fast, and the design background of the owner is better shown through deliberate custom styling than a Tailwind default look.

### 2.3 Data contracts (define now, consumed forever)

```ts
// lib/types.ts
interface Project {
  name: string; url: string; stack: string[];
  oneliner: string; highlight?: string;      // e.g. "Vue color-picker library"
}
interface CommitEntry {                       // produced at build from git log
  hash: string; date: string; subject: string;
}
interface SiteMeta {
  name: string; headline: string; positioning: string;
  links: { github: string; email?: string; linkedin?: string };
}
```

Rules (from research §6, restated as the contract): JSON files are append-only where they are feeds; every entry carries a `date`; one save per automated run; loaders must tolerate an empty/missing optional field rather than fail the build.

### 2.4 Tests — pragmatic for a hook-deployed static site

The deploy hook already gates publishing on `npm run build` succeeding, so the build **is** the primary test. Add two cheap layers on top, runnable via `node --test` (zero new dependencies):

1. **Data validation (`tests/data.test.js`):** every file in `data/` parses, matches its expected shape (required keys present, dates ISO). This is the test that matters most long-term — it protects against a future cron writing malformed JSON and breaking builds at 6am.
2. **Build smoke (`tests/build.test.js`):** after `astro build`, `dist/index.html` exists and contains sentinel strings (owner name, `<section id="projects">`, changelog marker). Catches "build passed but rendered empty".

Wire as `npm test` → `node --test tests/`. Not run by the deploy hook (keep deploys fast); run manually before committing, and it becomes the check every future cron/routine runs before saving. Skip component-unit testing frameworks (Vitest/Playwright) for now — no interactivity exists yet to justify them; revisit if v3+ adds client-side JS.

## 3. Website organization — sections of iteration 1

Single page (`/`), top to bottom:

| # | Section | Content | Notes |
|---|---------|---------|-------|
| 1 | **Hero** | Name; headline "Frontend engineer building AI-operated systems"; subline with design/UX background; CTA links (GitHub, contact) | Copy from `data/site.json`; headline is open question #2 — ship the hybrid version, easy to change |
| 2 | **Live badge / heartbeat** | Thin strip under hero: "This site is maintained by an AI agent · last build <timestamp>" linking down to changelog | The concept hook, above the fold |
| 3 | **About** | 3–4 sentences: IDX Boost frontend work, Guarnic product/UX design past, travel-tech in Peru, current focus on agentic automation | Static copy in component; honest, no invented details |
| 4 | **Projects** | Cards from `data/projects.json`: `huevue`, `jspdf-utils-vue` seeded first (the pinned repos), plus **this website itself** as a project card ("agent-operated portfolio") | The self-referential card is on-concept and free |
| 5 | **Live changelog** | "This site edits itself" — last ~8 commits (date · subject · short hash), rendered at build time from `git log` | Tier A #2; the proof-of-liveness feature |
| 6 | **Contact / footer** | GitHub, email, LinkedIn links; small print "Built with Astro · operated by Claude Code" | |

SEO/meta in `Base.astro`: proper `<title>`, description, OG tags, `lang="en"`, favicon (already present).

## 4. Implementation sequence (build-safe order)

Each numbered step ends in a state where `npm run build` succeeds — because every save deploys.

1. **Foundations commit:** `lib/types.ts`, `lib/site.ts`, `styles/global.css`, `data/site.json`, `data/projects.json`, `layouts/Base.astro` — none imported by the page yet, so the live site is untouched while they land.
2. **Feature components:** create all `features/*/` components (again, not yet imported → no visible change, builds stay green).
3. **The switch:** rewrite `pages/index.astro` as the composition root in **one write** — the site flips from hello-world to full portfolio in a single deploy.
4. **Tests:** add `tests/`, `npm test` script; run them.
5. **Verify live:** `curl -s http://127.0.0.1:8080/` — check hero name, projects, changelog entries present in served HTML.
6. Commit + push (git history itself becomes changelog content — commit messages from here on are visitor-facing; write them well).

Estimated: one session, ~6–8 commits.

## 5. Risks & build-safety notes

- **Half-scaffolded imports:** importing a component that doesn't exist yet fails the build → publish is blocked (safe) but the turn is burned. Mitigation: bottom-up order above; never save a page importing files not yet written.
- **`git log` at build time:** runs in frontmatter via `execSync`; if git is unavailable in some future build context, the loader must fall back to an empty list, not throw. Code it defensively from day one.
- **Changelog exposes commit messages publicly:** acceptable and on-concept, but from step 6 onward commit subjects are user-facing copy. No noise commits.
- **Copy accuracy:** LinkedIn is outdated (research §2) — about/projects copy sticks to verified public facts (GitHub, stated roles); superlatives avoided until owner confirms open question #3.

## 6. Definition of done for iteration 1

- [ ] Live site at `/` shows all six sections with real content, no lorem ipsum.
- [ ] Changelog section renders actual git commits; heartbeat shows real build time.
- [ ] `data/` contract in place: `site.json`, `projects.json` + typed loaders.
- [ ] `npm test` passes (data validation + build smoke).
- [ ] Everything committed and pushed; remote mirrors live.
- [ ] Verified in served HTML via curl (and previewable at the Tailscale hostname).

## 7. Carry-over open questions (answer before/during v2)

1. Language — v1 ships English-only; confirm if Spanish version wanted.
2. Headline — shipping "Frontend engineer building AI-operated systems"; veto anytime.
3. Proudest work — projects seeded from pinned GitHub repos; owner to confirm/extend the list.
4. Cron time-of-day for the v2 daily Model-of-the-Day run.

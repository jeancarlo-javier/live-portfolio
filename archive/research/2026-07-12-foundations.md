# Live Portfolio — Foundations & Feature Analysis
**Date:** 2026-07-12 · **Owner:** Jeancarlo Javier · **Iteration:** 0 (research)

## 1. What this project is

A personal portfolio that is also a *demonstration of itself*: a live website
operated by Claude Code (editing/publishing) and Hermes (web research /
scheduled intelligence). The portfolio's strongest selling point is not the
static content — it's that visitors can see an AI agent maintaining, updating
and enriching the site in near-real-time. Every feature should reinforce that
story; anything a normal static portfolio could do identically is second-tier.

## 2. Owner profile (from public sources — LinkedIn noted as outdated)

- **Jeancarlo Javier** — Frontend Developer at IDX Boost (real-estate web
  products); previously Product Designer & UX Designer at Guarnic, plus
  travel-tech roles in Peru (Valencia Travel Cusco, ITEP Travel, VIVE PERU).
- **GitHub (jeancarlo-javier):** 27 repos, Vue.js/TypeScript focus. Pinned:
  `huevue` (Vue color-picker library), `jspdf-utils-vue` (TS utility lib).
  Bio: "🎯 Zen Mode". Badges: Pull Shark ×2, Pair Extraordinaire, Quickdraw.
- **Positioning to lean into:** frontend engineer with a design/UX background
  who now builds AI-operated systems. The hybrid (design sense + frontend
  depth + agentic automation) is the differentiator.

## 3. Current technical base

- Astro 7 static site, single `src/pages/index.astro` (hello-world).
- Publish pipeline: every Edit/Write → `scripts/deploy.sh` → `npm run build`
  → rsync `dist/` → `/srv/website-live` → health check. No staging.
- Serves on loopback (:8080), previewable via Tailscale
  (`vps-52d0bcf6.taile13bae.ts.net`). No sudo, no new ports, no server-side
  runtime — **static output only**.
- PostHog is already connected (analytics available for a live-stats section).

## 4. Data architecture: "the database" for live sections

No API and no server runtime exist, and the constraint set (loopback-only,
no services) means we should not add one yet. The right v1 store is
**flat JSON files committed to git**, because the deploy hook already turns
"file changed" into "site republished":

```
data/
  model-of-the-day.json      # appended by Hermes cron
  ai-news.json               # optional broader feed
  now.json                   # current status/focus
  github-activity.json       # pulled from GitHub public API
```

- **Write path:** a scheduled agent run (cron/routine) does the web research,
  appends an entry to the JSON file, saves → hook builds & deploys → commits
  & pushes. Git history doubles as the audit log of what the agent did.
- **Read path (two options):**
  1. *Build-time:* Astro imports the JSON and renders it statically. Simplest,
     SEO-friendly, zero client JS. **Recommended default.**
  2. *Client-side:* also copy JSON into `public/data/` so the page can
     `fetch()` it — useful later for "live" widgets without full rebuilds.
     Since a rebuild happens on every save anyway, this adds little now.
- **Upgrade path:** if entries grow past a few hundred, move to one JSON file
  per day (`data/motd/2026-07-12.json`) with a small build-time index. A real
  DB/API only becomes worth it if we ever need per-visitor dynamics, which
  the current hosting model intentionally doesn't allow.

## 5. Features/sections evaluated

### Tier A — build these; they're only possible *because* the site is agent-run
1. **AI Model of the Day** — daily Hermes cron searches for the most notable
   new/updated AI model, writes `{date, name, org, summary, why_it_matters,
   source_url}` to `data/model-of-the-day.json`. Homepage shows today's card;
   `/models` archives the history. The flagship live feature.
2. **Live changelog / "this site edits itself"** — render recent git commits
   (short list generated at build time into a JSON file). Zero
   extra research cost, maximum proof-of-concept value: visitors literally see
   the agent's edit history.
3. **Agent heartbeat / status strip** — "last deploy: <timestamp> · last
   Hermes run: <timestamp> · build: passing". Cheap (deploy script already
   knows these moments; stamp them into a JSON file) and it makes the "live"
   claim verifiable at a glance.
4. **Now page (`/now`)** — auto-refreshed "currently working on / learning /
   reading" fed by a weekly agent run + manual owner notes in `now.json`.

### Tier B — good, add after Tier A
5. **GitHub activity digest** — weekly cron hits the public GitHub API
   (no auth needed for public events), summarizes pushes/PRs into a section.
   Keeps the projects area fresh without manual edits.
6. **Auto-written project cards** — one-time agent pass over the 27 public
   repos to draft cards (name, stack, one-liner, link) for the projects
   section; refreshed monthly.
7. **Visitor stats widget** — PostHog is connected; a cron can export
   yesterday's pageviews into JSON and render a tiny public dashboard.
   On-brand transparency, low effort.
8. **TIL / research notes feed** — Hermes drops a short "today I learned"
   about frontend/AI into a feed. Only if cadence can be sustained; a stale
   feed damages the live-site story more than no feed.

### Tier C — rejected or deferred, with reasons
- **Visitor-facing chat / guestbook / comments** — ❌ hard no for now.
  CLAUDE.md forbids bringing visitor-submitted content into the agent session
  (prompt-injection against an account with publish power). Would need an
  isolated, non-publishing pipeline first.
- **Real API / database service** — ❌ no sudo, no new ports, no services.
  Flat JSON + git covers every current need.
- **Real-time (websocket/SSE) widgets** — ❌ requires a server runtime.
  The rebuild-on-save loop already gives "seconds-fresh" content.
- **Full AI news aggregator** — ⚠ defer. Scope creep vs. "model of the day";
  one well-curated daily card beats a firehose.

## 6. Automation plan (cron/routines)

| Job | Cadence | Writes | Notes |
|---|---|---|---|
| model-of-the-day | daily (morning UTC) | `data/model-of-the-day.json` | Hermes web search + summarize; skip-with-note if nothing notable |
| github-digest | weekly | `data/github-activity.json` | public API only |
| now-refresh | weekly | `data/now.json` | agent drafts, owner can override |
| stats-export | daily | `data/stats.json` | PostHog query |

Rules every job must follow: append-only JSON with a `date` key; one save per
run (each save = one deploy); commit + push after; on build failure, fix or
revert in the same run; never ingest visitor-submitted content.

## 7. Proposed iteration roadmap

- **v1 (next session):** real portfolio shell — hero (name, positioning),
  about, projects (huevue, jspdf-utils-vue + top repos), contact/links;
  `data/` directory with the JSON contract defined; live-changelog section.
- **v2:** Model of the Day section + its daily cron; agent heartbeat strip.
- **v3:** /now page, GitHub digest, PostHog stats widget.
- **v4:** archive pages, TIL feed if cadence proves sustainable, design polish.

## 8. Open questions for the owner

1. Language: English, Spanish, or both?
2. Positioning headline: "Frontend engineer" vs "Frontend + AI automation"?
3. Which repos/work are you proudest of (LinkedIn is outdated, so confirm)?
4. Preferred cron time-of-day for the daily Hermes run?

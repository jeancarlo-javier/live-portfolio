import type { ChromeDict } from "./types";

export const en = {
  skipLink: "Skip to content",
  nav: {
    work: "Work",
    services: "Services",
    colophon: "Colophon",
    cta: "Discuss a project",
    projectSubject: "Project inquiry",
  },
  footer: {
    email: "Email",
    github: "GitHub",
    linkedin: "LinkedIn",
    builtLine:
      "Designed and directed by Jeancarlo Javier — built and operated by his agent pipeline.",
    colophon: "Colophon",
    copyright: "© 2026 Jeancarlo Javier",
  },
  langSwitch: {
    label: "ES",
    href: "/es/",
  },
  content: {
    hero: {
      kicker: "Jeancarlo Javier · Lima, Peru · remote — US & Chile",
      h1: "AI-native Fullstack Engineer & Agent Orchestrator",
      sub: "I design and ship web products end to end — integrating AI into the product, and into how it's built.",
      ctaPrimary: "Discuss a project",
      ctaSecondary: "See the work",
      metaLine: "This site maintains itself — see how",
    },
    credibility: [
      "6 years of frontend",
      "fullstack in production since 2024",
      "ships end-to-end products solo",
      "double degree in progress: Data Science + CS",
    ],
    work: {
      kicker: "01 · Work",
      title: "Shipped, not promised.",
      intro:
        "Four projects that carry the proof: a solo-built product, a public agent framework, and production work for real companies. Evidence links are labeled for what they actually prove.",
      secondaryTitle: "Also on the bench",
    },
    services: {
      kicker: "02 · Services",
      title: "What I can build for you",
      availability:
        "Open to freelance projects and consulting — currently taking conversations.",
      items: [
        {
          title: "Product UX/UI",
          oneLiner:
            "Design that ships: from Figma exploration to the production interface, by the same person.",
        },
        {
          title: "Frontend systems",
          oneLiner:
            "Six years of React and Vue: design systems, complex state, performance, i18n.",
        },
        {
          title: "Fullstack feature ownership",
          oneLiner:
            "Plan, build, test, ship: end-to-end ownership of a feature's lifecycle, backend included.",
        },
        {
          title: "AI integration & agentic workflows",
          oneLiner:
            "AI features via APIs and embeddings — not model training — plus agent pipelines that help build and operate the software itself.",
        },
      ],
    },
    experience: {
      kicker: "03 · Experience",
      title: "The path behind the proof",
      rows: [
        {
          period: "2024 — now",
          company: "Eventrid",
          role: "Fullstack Developer",
          note: "Chilean event-ticketing platform (Santiago Marathon, 20,000+ registrations). Full-cycle feature ownership; designed the new ticket-purchase flow in Figma and built it.",
        },
        {
          period: "2024 — now",
          company: "AuralFret",
          role: "Founder & solo builder",
          note: "Built the entire product alone: design, frontend, backend, AI.",
        },
        {
          period: "2020 — 2024",
          company: "TREM Group (US, remote)",
          role: "Frontend Developer",
          note: "Led frontend of the IDXBoost Website Builder (React + Redux), a real-estate CMS still on the market.",
        },
        {
          period: "2018 — 2020",
          company: "earlier roles",
          role: "Frontend & UI",
          note: "Frontend developer and UI designer roles in Peru and Chile (Mode ON, TRAVELING Peru, Guarnic).",
        },
      ],
    },
    operations: {
      kicker: "04 · Operations",
      title: "This site is operated by agents",
      body: "Every change here is made by an AI agent with publish rights, working inside guardrails I designed: build-or-nothing deploys, a protected main branch, and a hard rule against invented data. The panel below is generated from the repository at build time — verifiable freshness, not real-time.",
      telemetryLabel: "site telemetry — generated at build",
      panel: {
        lastBuild: "last build",
        lastCommit: "last commit",
        recentChanges: "recent changes",
        motd: "model of the day",
        utc: "UTC",
      },
      motdEmpty:
        "First scheduled run pending — the publishing pipeline is live; the daily research cron isn't yet.",
      colophonLink: "How this works",
    },
    colophon: {
      meta: {
        title: "Colophon — how this site works · Jeancarlo Javier",
        description:
          "A portfolio operated by AI agents with real publish rights — inside guardrails I designed. This page documents the pipeline, the rules it obeys, and where it goes next. Everything here is verifiable in the repository.",
      },
      kicker: "Colophon",
      title: "This site builds, publishes, and explains itself",
      intro:
        "A portfolio operated by AI agents with real publish rights — inside guardrails I designed. This page documents the pipeline, the rules it obeys, and where it goes next. Everything here is verifiable in the repository.",
      stack: {
        title: "The stack",
        body: "Astro 7 renders the site as fully static output. There is no client-side JavaScript and no webfont request: system font stacks do the work. Design tokens live in plain CSS, and English and Spanish have their own routes. The generated files are served from a private server behind a proxy. Those are deliberate constraints. The page you are reading costs almost nothing to load; the interface is making its own performance argument.",
      },
      pipeline: {
        title: "The pipeline",
        body: "An AI agent session holds publish rights to this repository. Every accepted change passes through one deployment script: build → rsync → health check. A failed build stops the script before files are copied, so nothing ships and the previous version keeps serving. Git is the audit log; every site change becomes a commit. The operations panel on the home page reads the latest commits and build timestamp directly from the repository during the static build.",
      },
      guardrails: {
        title: "The guardrails",
        items: [
          "Deployments are build-or-nothing. A broken build cannot go live.",
          "`main` is protected. Agents work on `dev`; Jeancarlo merges it as a checkpoint.",
          "Visitor-submitted content never enters an agent's context. That limits prompt-injection risk on an account with publish rights.",
          'Agents do not invent data. Every operations-panel value comes from the repository at build time; daily content requires cited sources and may report "nothing notable today."',
          "The deployment script and the agents' standing instructions are off-limits to the agents themselves.",
        ],
      },
      builders: {
        title: "Who builds it",
        body: "I designed and direct the site. I own the decisions that matter: positioning, the design system, copy rules, and guardrails. Implementation runs through a multi-model pipeline. A Claude model orchestrates and reviews; a GPT-5.6 model builds. A cross-family review happens before changes ship. The division is deliberate: models produce and challenge work, while I set the constraints and remain accountable for what reaches the site.",
        moaLead: "The same orchestration philosophy is published as",
        moaLink: "MOA on skills.sh",
        moaTail: ".",
      },
      next: {
        title: "What's next",
        label: "Planned — not shipped",
        body: 'A daily “AI Model of the Day” research cron is planned for 11:00 UTC. It will write citable JSON. A public automation ledger will show those runs. A `/models` archive will follow only after the history is credible, alongside a `/now` page. None of that exists as a public feature yet; the empty data files only define the contract.',
        closing:
          "When those ship, this page will say so — it has no reason to lie.",
      },
      footer: {
        built: "this page was built",
        commit: "commit",
        backHome: "← back to the work",
      },
    },
    contact: {
      kicker: "05 · Contact",
      title: "Have a project in mind?",
      body: "Tell me what you're building and where it hurts. I reply to every serious inquiry — from Lima, UTC−5.",
      emailCta: "Write me",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    meta: {
      home: {
        title:
          "Jeancarlo Javier — AI-native Fullstack Engineer & Agent Orchestrator",
        description:
          "Fullstack engineer who designs and ships web products end to end, integrating AI into the product and into how it's built. Portfolio operated by an agent pipeline.",
      },
    },
  },
} as const satisfies ChromeDict;

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
      panel: {
        lastBuild: "last build",
        lastCommit: "last commit",
        recentChanges: "recent changes",
        motd: "model of the day",
      },
      motdEmpty:
        "First scheduled run pending — the publishing pipeline is live; the daily research cron isn't yet.",
      colophonLink: "How this works",
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

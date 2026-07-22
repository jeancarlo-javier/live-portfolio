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
} as const satisfies ChromeDict;

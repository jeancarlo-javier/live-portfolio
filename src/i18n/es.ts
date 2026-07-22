import type { ChromeDict } from "./types";

export const es = {
  skipLink: "Saltar al contenido",
  nav: {
    work: "Trabajo",
    services: "Servicios",
    colophon: "Colofón",
    cta: "Hablemos de tu proyecto",
    projectSubject: "Consulta de proyecto",
  },
  footer: {
    email: "Correo",
    github: "GitHub",
    linkedin: "LinkedIn",
    builtLine:
      "Diseñado y dirigido por Jeancarlo Javier — construido y operado por su pipeline de agentes.",
    colophon: "Colofón",
    copyright: "© 2026 Jeancarlo Javier",
  },
  langSwitch: {
    label: "EN",
    href: "/",
  },
} as const satisfies ChromeDict;

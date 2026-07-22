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
  content: {
    hero: {
      kicker: "Jeancarlo Javier · Lima, Perú · remoto — EE. UU. y Chile",
      h1: "AI-native Fullstack Engineer & Agent Orchestrator",
      sub: "Diseño y shippeo productos web de punta a punta — integrando IA en el producto y en cómo se construye.",
      ctaPrimary: "Hablemos de tu proyecto",
      ctaSecondary: "Ver el trabajo",
      metaLine: "Este sitio se mantiene solo — mira cómo",
    },
    credibility: [
      "6 años de frontend",
      "fullstack en producción desde 2024",
      "shippea productos completos en solitario",
      "doble titulación en curso: Data Science + CS",
    ],
    work: {
      kicker: "01 · Trabajo",
      title: "Shippeado, no prometido.",
      intro:
        "Cuatro proyectos que llevan la prueba: un producto construido en solitario, un framework de agentes público y trabajo en producción para empresas reales. Los links de evidencia están etiquetados según lo que realmente demuestran.",
      secondaryTitle: "También en el banco de trabajo",
    },
    services: {
      kicker: "02 · Servicios",
      title: "Qué puedo construir para ti",
      availability:
        "Abierto a proyectos freelance y consultoría — actualmente aceptando conversaciones.",
      items: [
        {
          title: "UX/UI de producto",
          oneLiner:
            "Diseño que llega a producción: de la exploración en Figma a la interfaz final, por la misma persona.",
        },
        {
          title: "Sistemas frontend",
          oneLiner:
            "Seis años de React y Vue: design systems, estado complejo, performance, i18n.",
        },
        {
          title: "Ownership fullstack de features",
          oneLiner:
            "Planificar, construir, testear, shippear: ownership completo del ciclo de una feature, backend incluido.",
        },
        {
          title: "Integración de IA y flujos agénticos",
          oneLiner:
            "Features de IA vía APIs y embeddings — sin entrenar modelos — más pipelines de agentes que ayudan a construir y operar el software.",
        },
      ],
    },
    experience: {
      kicker: "03 · Experiencia",
      title: "El camino detrás de la prueba",
      rows: [
        {
          period: "2024 — hoy",
          company: "Eventrid",
          role: "Fullstack Developer",
          note: "Tiquetera chilena líder en eventos deportivos (Maratón de Santiago, +20.000 inscritos). Ownership completo de features; diseñé en Figma el nuevo flujo de compra de tickets y lo construí.",
        },
        {
          period: "2024 — hoy",
          company: "AuralFret",
          role: "Founder y solo builder",
          note: "Construí el producto entero en solitario: diseño, frontend, backend, IA.",
        },
        {
          period: "2020 — 2024",
          company: "TREM Group (EE. UU., remoto)",
          role: "Frontend Developer",
          note: "Lideré el frontend del IDXBoost Website Builder (React + Redux), un CMS inmobiliario que sigue en el mercado.",
        },
        {
          period: "2018 — 2020",
          company: "roles anteriores",
          role: "Frontend y UI",
          note: "Roles de frontend developer y UI designer en Perú y Chile (Mode ON, TRAVELING Peru, Guarnic).",
        },
      ],
    },
    operations: {
      kicker: "04 · Operaciones",
      title: "Este sitio lo operan agentes",
      body: "Cada cambio aquí lo hace un agente de IA con permiso de publicación, dentro de guardrails que diseñé: deploys que solo salen si el build pasa, una rama main protegida y una regla dura contra los datos inventados. El panel de abajo se genera desde el repositorio en cada build — frescura verificable, no tiempo real.",
      telemetryLabel: "telemetría del sitio — generada en el build",
      panel: {
        lastBuild: "último build",
        lastCommit: "último commit",
        recentChanges: "cambios recientes",
        motd: "modelo del día",
        utc: "UTC",
      },
      motdEmpty:
        "Primera corrida programada pendiente — el pipeline de publicación está vivo; el cron diario de research aún no.",
      colophonLink: "Cómo funciona",
    },
    contact: {
      kicker: "05 · Contacto",
      title: "¿Tienes un proyecto en mente?",
      body: "Cuéntame qué estás construyendo y dónde duele. Respondo toda consulta seria — desde Lima, UTC−5.",
      emailCta: "Escríbeme",
      githubLabel: "GitHub",
      linkedinLabel: "LinkedIn",
    },
    meta: {
      home: {
        title:
          "Jeancarlo Javier — AI-native Fullstack Engineer & Agent Orchestrator",
        description:
          "Ingeniero fullstack que diseña y shippea productos web de punta a punta, integrando IA en el producto y en cómo se construye. Portafolio operado por un pipeline de agentes.",
      },
    },
  },
} as const satisfies ChromeDict;

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
    colophon: {
      meta: {
        title: "Colofón — cómo funciona este sitio · Jeancarlo Javier",
        description:
          "Un portafolio operado por agentes de IA con permisos reales de publicación — dentro de guardrails que diseñé. Esta página documenta el pipeline, las reglas que obedece y lo que sigue. Todo lo que se afirma aquí puede verificarse en el repositorio.",
      },
      kicker: "Colofón",
      title: "Este sitio se construye, se publica y se explica solo",
      intro:
        "Un portafolio operado por agentes de IA con permisos reales de publicación — dentro de guardrails que diseñé. Esta página documenta el pipeline, las reglas que obedece y lo que sigue. Todo lo que se afirma aquí puede verificarse en el repositorio.",
      stack: {
        title: "El stack",
        body: "Astro 7 genera el sitio como archivos completamente estáticos. No hay JavaScript en el cliente ni solicitudes de webfonts: los stacks de fuentes del sistema hacen el trabajo. Los tokens de diseño viven en CSS plano, y el inglés y el español tienen rutas propias. Los archivos generados se sirven desde un servidor privado detrás de un proxy. Son restricciones deliberadas. La página que estás leyendo cuesta casi nada de cargar; la interfaz presenta su propio argumento de rendimiento.",
      },
      pipeline: {
        title: "El pipeline",
        body: "Una sesión de un agente de IA tiene permisos de publicación sobre este repositorio. Cada cambio aceptado pasa por un solo script de despliegue: build → rsync → health check. Si el build falla, el script se detiene antes de copiar archivos; nada se publica y la versión anterior sigue sirviéndose. Git es el registro de auditoría: cada cambio del sitio se convierte en un commit. El panel de operaciones de la página principal lee los commits recientes y la hora del build directamente del repositorio durante la generación estática.",
      },
      guardrails: {
        title: "Los guardrails",
        items: [
          "Los despliegues son build-or-nothing. Un build roto nunca puede llegar al sitio.",
          "`main` está protegida. Los agentes trabajan en `dev`; Jeancarlo hace el merge como punto de control.",
          "El contenido enviado por visitantes nunca entra en el contexto de un agente. Así se limita el riesgo de prompt injection en una cuenta con permisos de publicación.",
          'Los agentes no inventan datos. Cada valor del panel de operaciones viene del repositorio durante el build; el contenido diario exige fuentes citadas y puede decir “nada notable hoy”.',
          "El script de despliegue y las instrucciones permanentes de los agentes están fuera del alcance de los propios agentes.",
        ],
      },
      builders: {
        title: "Quién lo construye",
        body: "Diseñé y dirijo el sitio. Soy responsable de las decisiones que importan: el posicionamiento, el sistema de diseño, las reglas de copy y los guardrails. La implementación pasa por un pipeline multimodelo. Un modelo Claude orquesta y revisa; un modelo GPT-5.6 construye. Hay revisión entre familias antes de publicar cualquier cambio. La división es deliberada: los modelos producen y cuestionan el trabajo, mientras yo fijo las restricciones y respondo por lo que llega al sitio.",
        moaLead: "La misma filosofía de orquestación está publicada como",
        moaLink: "MOA en skills.sh",
        moaTail: ".",
      },
      next: {
        title: "Qué sigue",
        label: "Planeado — no publicado",
        body: "Está planeado un cron diario de investigación, “AI Model of the Day”, para las 11:00 UTC. Escribirá JSON citable. Un registro público de automatización mostrará esas ejecuciones. Un archivo `/models` llegará solo cuando el historial sea creíble, junto con una página `/now`. Nada de eso existe aún como una función pública; los archivos de datos vacíos solo definen el contrato.",
        closing:
          "Cuando se publique, esta página lo dirá — no tiene motivos para mentir.",
      },
      footer: {
        built: "esta página se construyó el",
        commit: "commit",
        backHome: "← volver al trabajo",
      },
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

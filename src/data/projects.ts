export interface Project {
  id: string;
  name: string;
  url?: string;
  urlSecondary?: { href: string; label: { en: string; es: string } };
  evidenceLabel: { en: string; es: string };
  role: { en: string; es: string };
  summary: { en: string; es: string };
  stack: string[];
  flagship: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "auralfret",
    name: "AuralFret",
    url: "https://www.auralfret.com/",
    urlSecondary: {
      href: "https://www.auralfret.com/ai-chord-generator",
      label: { en: "AI Chord Generator", es: "AI Chord Generator" },
    },
    evidenceLabel: {
      en: "Live product — built 100% solo",
      es: "Producto vivo — construido 100% en solitario",
    },
    role: {
      en: "Founder & solo builder",
      es: "Founder y solo builder",
    },
    summary: {
      en: 'The visual workspace for guitarists: interactive fretboard, 263+ voicings, 45 modes, custom tunings, infinite canvas, cloud sync — free, no signup. I designed and built all of it alone, end to end. Its AI Chord Generator finds chords from natural-language descriptors ("dark chord", "easy D") using Gemini embeddings over a hand-curated catalog.',
      es: 'El espacio de trabajo visual para guitarristas: diapasón interactivo, 263+ voicings, 45 modos, afinaciones custom, canvas infinito, sync en la nube — gratis y sin registro. Lo diseñé y construí completo, en solitario. Su AI Chord Generator encuentra acordes desde descriptores en lenguaje natural ("dark chord", "easy D") usando embeddings de Gemini sobre un catálogo curado a mano.',
    },
    stack: ["Nuxt", "Vue", "TypeScript", "Gemini embeddings", "Firebase"],
    flagship: true,
  },
  {
    id: "moa",
    name: "MOA — Master of Agents",
    url: "https://www.skills.sh/jeancarlo-javier/moa/moa",
    evidenceLabel: {
      en: "Public release on skills.sh",
      es: "Publicado en skills.sh",
    },
    role: { en: "Author", es: "Autor" },
    summary: {
      en: "A skill plus custom MCP for orchestrating software work across role-based subagents (produce / review / verify), runtime-agnostic by design. Published June 2026 — it's the same orchestration model that builds and operates this site.",
      es: "Una skill más un MCP custom para orquestar trabajo de software entre subagentes por rol (produce / review / verify), agnóstico al runtime por diseño. Publicado en junio de 2026 — es el mismo modelo de orquestación que construye y opera este sitio.",
    },
    stack: ["MCP", "Agent orchestration", "Claude Code CLI"],
    flagship: true,
  },
  {
    id: "eventrid-ticket-purchase",
    name: "Eventrid — new ticket-purchase flow",
    url: "https://www.eventrid.cl/",
    evidenceLabel: {
      en: "Employer's live platform — my exact contribution attributable privately",
      es: "Plataforma viva del empleador — mi contribución exacta, atribuible en privado",
    },
    role: {
      en: "Design + fullstack development",
      es: "Diseño + desarrollo fullstack",
    },
    summary: {
      en: "Eventrid is a leading Chilean ticketing platform for sports events (Santiago Marathon, 20,000+ registrations). I designed the new ticket-purchase platform in Figma and built it fullstack: planning, implementation, testing.",
      es: "Eventrid es una tiquetera chilena líder en eventos deportivos (Maratón de Santiago, +20.000 inscritos). Diseñé en Figma la nueva plataforma de compra de tickets y la construí fullstack: planificación, implementación, testing.",
    },
    stack: ["Vue", "TypeScript", "Laravel", "Figma"],
    flagship: true,
  },
  {
    id: "idxboost-website-builder",
    name: "IDXBoost Website Builder",
    url: "https://www.idxboost.com/",
    evidenceLabel: {
      en: "Product still live and sold — frontend led at TREM Group",
      es: "Producto vivo y comercializándose — lideré su frontend en TREM Group",
    },
    role: { en: "Frontend lead", es: "Frontend lead" },
    summary: {
      en: "A real-estate website builder (CMS) I led the frontend for during four years at TREM Group, in React + Redux. The product outlived my tenure — it's still on the market.",
      es: "Un website builder inmobiliario (CMS) cuyo frontend lideré durante cuatro años en TREM Group, en React + Redux. El producto sobrevivió a mi paso — sigue en el mercado.",
    },
    stack: ["React", "Redux"],
    flagship: true,
  },
  {
    id: "huevue",
    name: "huevue",
    url: "https://github.com/jeancarlo-javier",
    evidenceLabel: { en: "Open source", es: "Open source" },
    role: { en: "Author", es: "Autor" },
    summary: {
      en: "Color-picker component for Vue.",
      es: "Componente color-picker para Vue.",
    },
    stack: ["Vue"],
    flagship: false,
  },
  {
    id: "jspdf-utils-vue",
    name: "jspdf-utils-vue",
    url: "https://github.com/jeancarlo-javier",
    evidenceLabel: { en: "Open source", es: "Open source" },
    role: { en: "Author", es: "Autor" },
    summary: {
      en: "TypeScript utilities for PDF generation in Vue apps.",
      es: "Utilidades TypeScript para generar PDFs en apps Vue.",
    },
    stack: ["TypeScript"],
    flagship: false,
  },
  {
    id: "this-site",
    name: "This site",
    url: "/colophon",
    evidenceLabel: {
      en: "You're looking at it — see the colophon",
      es: "La estás viendo — mira el colofón",
    },
    role: {
      en: "Owner & orchestrator",
      es: "Owner y orquestador",
    },
    summary: {
      en: "An agent-operated portfolio: AI agents with publish rights maintain it inside guardrails I designed. The colophon documents the whole pipeline.",
      es: "Un portafolio operado por agentes: agentes de IA con permiso de publicación lo mantienen dentro de guardrails que diseñé. El colofón documenta el pipeline completo.",
    },
    stack: ["Astro", "Agent pipeline"],
    flagship: false,
  },
];

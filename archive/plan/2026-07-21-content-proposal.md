# Propuesta de contenido y secciones — v1 del portafolio vivo

- **Fecha:** 2026-07-21 · **Estado:** PROPUESTA — pendiente de decisión de Jeancarlo
- **Autores:** Claude (Fable 5, master) + GPT-5.6 Sol :high (analista externo vía omp, propuesta independiente + crítica cruzada)
- **Fuentes:** `archive/owner-profile.md` (manda), `archive/research/2026-07-12-foundations.md`, `docs/architecture/2026-07-19-estructura-base.md`
- **Material de trabajo:** `.omp-work/proposal-draft.md` (borrador Claude), `.omp-work/results/sol-proposal.md` (análisis Sol)

## 1. Alma del sitio (síntesis acordada entre ambos modelos)

> **"Un ingeniero de producto end-to-end cuyo portafolio hace inspeccionable su trabajo — incluidos los sistemas de agentes que lo operan."**

Matiz clave (aporte de Sol, aceptado): **Jeancarlo es el protagonista; los agentes son
evidencia, no autores.** El borrador inicial ("el sitio que se mantiene solo") invertía
la relación y rozaba el "automation theater" — exactamente la asociación vibe-coder
que el posicionamiento rechaza. Jeancarlo diseña, decide, implementa y verifica; sus
harnesses extienden ese ownership.

Voz: honesta, evidence-first, anti-hype. Sin etiquetas de seniority, sin buzzwords.
Distinguir evidencia pública de producto (AuralFret vivo, MOA en skills.sh) de trabajo
de empleo atribuible en privado (Eventrid, IDXBoost) — un link al producto prueba que
existe, no la contribución exacta; el copy lo etiqueta con honestidad.

## 2. Audiencia (prioridad)

1. **Clientes freelance/consultoría** (objetivo activo) — deciden en ~30s: qué puede
   construirme, evidencia shippeada, cómo contactar.
2. **Recruiters / hiring managers** (remoto EE. UU./Chile) — ancla reconocible,
   producción real, alcance honesto (integra IA vía APIs/agentes, no entrena modelos).
3. **Builders / comunidad de agentes** — la meta-historia, MOA, el colophon. Son
   quienes comparten el sitio.

## 3. Home v1 — orden optimizado para conversión (reordenado por crítica de Sol)

1. **Hero** — nombre + "AI-native Fullstack Engineer & Agent Orchestrator" (titular
   decidido) + subtítulo de valor cliente: *"Diseño y shippeo productos web de punta a
   punta — integrando IA en el producto y en cómo se construye."* CTA primario
   "Discuss a project" (persistente en el scroll). Una sola línea meta discreta:
   "This site maintains itself — see how ↓" (ancla al módulo de agentes; mantiene el
   gancho diferenciador sin que domine el hero).
2. **Franja de credibilidad** — "6 años frontend · fullstack en producción desde
   2024 · remoto US/Chile/Perú". Factual, sin adjetivos.
3. **Proyectos insignia** (orden fijado): AuralFret → MOA → flujo de compra Eventrid →
   IDXBoost CMS. Cada card: problema, contribución exacta, resultado shippeado, stack,
   link de evidencia etiquetado honestamente. Secundarios: huevue, jspdf-utils-vue,
   este sitio (meta-proyecto).
4. **Servicios / oferta** (nuevo — hallazgo #1 de Sol para audiencia cliente): las
   cuatro capas traducidas a lenguaje de compra: UX/UI de producto · sistemas
   frontend · ownership fullstack de features · integraciones de IA y flujos
   agénticos. Tipos de engagement y disponibilidad (⚠️ requiere decisión de Jeancarlo;
   sin tarifas públicas hasta que exista oferta productizada).
5. **Experiencia / las cuatro capas** — la trayectoria como evidencia por capa,
   compacta, sin párrafo-bio.
6. **Módulo "sitio operado por agentes"** (el proof, abajo de la evidencia cliente):
   último update de contenido con timestamp preciso, última corrida de automatización
   nombrada, cambios recientes del sitio (git log en build), teaser del Model of the
   Day. Etiquetado honesto: es *frescura verificable*, no "tiempo real".
7. **Contacto** — **un** email profesional (⚠️ decidir cuál) + LinkedIn + GitHub.
   Sin formulario en v1 (guardrail: contenido de visitantes jamás entra al pipeline).

Rutas fuera de home (v1): **/colophon** (cómo funciona el sitio agéntico — pieza de
portafolio en sí misma y asset de lanzamiento para audiencia #3) + páginas de
case-study por proyecto insignia (profundidad que las cards no dan).
**Bilingüe:** `/` EN (clientes US) · `/es/` ES, con canonical/hreflang.

**Diferido a v2+** (recorte de scope de Sol, aceptado): `/models` como archivo público
(lanza cuando el cron acumule un histórico creíble), `/now` (solo con validación del
owner de cada claim), RSS, widget de stats PostHog, OG images diarias, GitHub digest.

## 4. Contenido generado por agentes (diario / por evento)

| Contenido | Cadencia | Mecanismo | Estado |
|---|---|---|---|
| Model of the Day | diaria 11:00 UTC | Cron Hermes: research → JSON append → deploy → commit | v1 (teaser en home; archivo /models en v2) |
| Metadatos de build (timestamp, changelog git) | cada build | Build-time de Astro — **sin tocar deploy.sh** (guardrail) | v1 |
| Ledger de automatización (append-only por corrida) | por corrida | El propio cron escribe su entrada | v1 |
| /now refresh | semanal | Agente redacta, owner valida | v2 |
| GitHub digest | semanal | API pública | v2 |
| Stats PostHog públicas | diaria | Export a JSON | v3 |

Reglas del Model of the Day (endurecidas por Sol): fuentes citadas con
`publishedAt`/`updatedAt`, criterio de selección explícito, campos EN/ES, detección de
duplicados, y **estado honesto de "hoy no hubo nada notable"** — permiso para saltar
días débiles. Nunca inventar actividad del owner.

Features creativas extra (nota diaria del agente, mutación de design token, TIL):
**ninguna en v1** — ambos modelos coinciden: una feature diaria fiable y citada vale
más que varias promesas de frescura. Candidata favorita si se abre hueco en v2: la
nota diaria del agente pegada al ledger.

## 5. Distribución (reponderada por Sol)

1. **Outreach cálido primero** — redes Eventrid/TREM/producto, con el case study más
   relevante por contacto. Tráfico calificado > tráfico de lanzamiento.
2. **Cross-links del ecosistema propio** — GitHub README, skills.sh (MOA), footer de
   AuralFret → portafolio, y viceversa (el loop de evidencia de las cuatro capas).
3. **LinkedIn** — headline ya alineado; posts de case-study EN/ES en hitos reales.
4. **Lanzamiento comunidad builders** (después de varias corridas exitosas del cron):
   Show HN / r/webdev / dev.to apuntando a **/colophon**, no a la home.
5. **Medición** — conversión project-view → contact-click en PostHog como métrica de
   éxito del objetivo freelance.

## 6. Decisiones que solo Jeancarlo puede tomar

1. **Bloque de servicios:** ¿qué tipos de engagement ofrecer y qué disponibilidad
   declarar? (freelance por proyecto, consultoría, retainer…)
2. **Email de contacto único:** ¿cuál de los tres?
3. **Testimonios:** ¿pedirlos a Eventrid/TREM? (mejora material de confianza; jamás
   sintetizados).
4. **¿De acuerdo con el reorden conversión-first** (agentes abajo, proyectos/servicios
   arriba) y con el recorte de v1 (sin /models público, /now, RSS, stats)?
5. **Case-study pages en v1** ¿o cards ricas primero y páginas en v2?

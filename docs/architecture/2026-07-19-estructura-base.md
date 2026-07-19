# Design doc: estructura base del sitio

- **Autor:** agente (sesión Claude) + Jeancarlo (owner)
- **Estado:** Aprobado (punto de partida; revisable en cada iteración)
- **Fecha:** 2026-07-19
- **Revisores:** GPT-5.5 (revisión cruzada vía omp)

## Contexto

Sitio personal construido con Astro 7, estático, servido en loopback detrás
de un proxy. Particularidad central: es un **sitio vivo operado por agente**
— cada guardado en el repo dispara `scripts/deploy.sh` (build → rsync →
health check) y publica en segundos, sin staging ni revisión humana
intermedia. La rama de trabajo es `dev`; `main` es checkpoint protegido.

Hoy el código fuente es un único `src/pages/index.astro` placeholder. Antes
de construir la página principal (próxima sesión) hace falta una base:
dónde vive cada cosa y bajo qué reglas, sin fijar todavía contenido, diseño
ni vistas.

## Goals

- Definir la estructura de carpetas y las convenciones que gobiernan todo lo
  que se construya después.
- Separar desde el inicio contenido, presentación y configuración, para que
  cambios de contenido no toquen componentes y viceversa.
- Que cada guardado sea publicable: el esqueleto no puede romper el build ni
  alterar el HTML servido actual.
- Minimizar superficie: cero dependencias nuevas, cero JS de cliente por
  defecto.

## Non-goals

- Decidir contenido, copy, diseño visual, paleta, tipografía o vistas.
- Elegir integraciones de Astro (MDX, sitemap, etc.) — se añaden cuando una
  necesidad concreta las justifique.
- Tocar infraestructura, deploy o guardrails (`scripts/deploy.sh`, CLAUDE.md).

## Overview

```
website/
├── src/
│   ├── pages/         # SOLO enrutado: cada archivo = una ruta. Páginas
│   │                  # delgadas: componen layout + componentes + datos.
│   ├── layouts/       # Shells de página. BaseLayout.astro es el único
│   │                  # dueño de <html>/<head> (meta, título, estilos).
│   ├── components/    # UI reutilizable (.astro). Se crea con el primer
│   │                  # componente; no se mantienen carpetas vacías.
│   ├── styles/        # tokens.css (variables de diseño, única fuente) +
│   │                  # global.css (reset neutro). Nada visual aún.
│   ├── data/          # Configuración tipada del sitio (site.ts): nombre,
│   │                  # idioma, metadatos. Única fuente; sin duplicar
│   │                  # strings en componentes.
│   └── content/       # (futuro) Content collections de Astro para
│                      # contenido estructurado (p. ej. proyectos). Se crea
│                      # junto con su schema cuando exista contenido real.
├── public/            # Estáticos servidos tal cual (favicon, robots…).
├── docs/              # Design docs como este. Fuera del build.
├── scripts/           # deploy.sh — guardrail, no se toca.
├── archive/           # Material de investigación/perfil. Fuera del build.
└── dist/              # Salida de build (gitignored). Nunca editar.
```

Astro solo genera rutas desde `src/pages/`, así que `docs/` y `archive/`
quedan fuera de lo publicado sin configuración extra.

## Diseño detallado

### Convenciones por capa

| Capa | Regla |
|------|-------|
| `pages/` | Sin lógica de presentación ni HTML estructural propio; importa layout, componentes y datos. Un archivo por ruta. |
| `layouts/` | `BaseLayout.astro` recibe `title`/`description` por props y expone un `<slot />`. Todo `<head>` pasa por aquí. Layouts adicionales (si los hay) envuelven a BaseLayout, no lo duplican. |
| `components/` | `.astro` puros, sin JS de cliente salvo necesidad explícita (islands). PascalCase. Un componente = un archivo. |
| `styles/` | `tokens.css` define variables CSS en `:root` (colores, espaciado, tipografía) — vacío hasta la fase de diseño. `global.css` solo reset neutro. Estilos de componente viven scoped en su `.astro`. |
| `data/` | `site.ts` exporta un objeto `SITE` tipado. Los placeholders llevan `TODO` y se resuelven en la fase de contenido. |
| `content/` | Cuando exista contenido repetitivo (lista de proyectos, posts), entra como content collection con schema en `src/content.config.ts` — nunca hardcodeado en componentes. |

### Flujo de una página (cuando se construya)

`src/pages/x.astro` → importa `BaseLayout` → pasa metadatos desde
`src/data/site.ts` → compone `components/` → contenido estructurado viene de
`content/`. Ninguna capa salta a la de arriba.

### Qué se crea hoy (esqueleto)

- `src/layouts/BaseLayout.astro` — shell funcional pero **sin conectar** a
  `index.astro`: la página viva no cambia hasta la sesión de página
  principal.
- `src/styles/tokens.css` y `src/styles/global.css` — estructura y comentarios,
  sin decisiones visuales.
- `src/data/site.ts` — shape tipado con valores placeholder.
- Este documento.

### Restricciones operativas heredadas

- Cada `Write` publica: preferir un guardado coherente por archivo; verificar
  `curl http://127.0.0.1:8080/` tras cambios que afecten HTML.
- Commit + push a `dev` al cerrar cada unidad de trabajo.

## Alternativas consideradas

- **Todo en `pages/` (estado actual, sin capas):** funciona para 1 página,
  pero mezcla head/meta/estilos/contenido; cada página futura duplicaría el
  shell. Descartado.
- **Framework con más estructura impuesta (Next, SvelteKit):** innecesario
  para un sitio estático personal; Astro ya está instalado, publica HTML
  puro y su modelo zero-JS encaja con el guardrail de superficie mínima.
  Descartado cambiar.
- **Crear ya `src/content/` con schema:** sería inventar el modelo de
  contenido antes de decidir el contenido (violaría los non-goals). Se
  difiere; la decisión de usar collections queda registrada aquí.
- **Tailwind/CSS framework ahora:** decisión de diseño, no de base. Los
  tokens en CSS variables dejan ambas puertas abiertas. Diferido a la fase
  de diseño.

## Riesgos

- El esqueleto sin uso puede divergir de lo que la página principal necesite
  → se acepta: son <100 líneas y este doc los gobierna; ajustar entonces.
- Sitio vivo sin staging → mitigado por: build falla = no publica, rollback
  documentado (`git revert` + deploy).

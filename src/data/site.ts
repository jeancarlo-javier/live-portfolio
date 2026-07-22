/**
 * Única fuente de metadatos del sitio. Ningún componente o página debe
 * hardcodear estos valores.
 */
export interface SiteConfig {
  /** Nombre del sitio, usado en <title> y branding. */
  name: string;
  /** URL pública base; vacía hasta que el propietario elija el dominio. */
  url: string;
  /** Correo de contacto público. */
  email: string;
  /** Perfil público de GitHub. */
  github: string;
  /** Perfil público de LinkedIn. */
  linkedin: string;
}

export const SITE = {
  name: "Jeancarlo Javier",
  /** Public base URL — EMPTY until the owner picks the domain; empty = no canonical/hreflang/og:url emitted. */
  url: "",
  email: "javixlab@gmail.com",
  github: "https://github.com/jeancarlo-javier",
  linkedin: "https://www.linkedin.com/in/jeancarlojavier/",
} as const satisfies SiteConfig;

/**
 * Única fuente de metadatos del sitio. Ningún componente o página debe
 * hardcodear estos valores. Los TODO se resuelven en la fase de contenido.
 */
export interface SiteConfig {
  /** Nombre del sitio, usado en <title> y branding. */
  name: string;
  /** Descripción por defecto para <meta name="description">. */
  description: string;
  /** Idioma del documento (<html lang>). */
  lang: string;
}

export const SITE: SiteConfig = {
  name: "Hello", // pendiente: fase de contenido (coincide con el <title> vivo actual)
  description: "", // pendiente: fase de contenido; vacío = no se emite <meta>
  lang: "en", // pendiente: coincide con la página viva actual hasta decidir
};

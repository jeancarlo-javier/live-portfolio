export type Lang = "en" | "es";

export interface ChromeDict {
  skipLink: string;
  nav: {
    work: string;
    services: string;
    colophon: string;
    cta: string;
    projectSubject: string;
  };
  footer: {
    rights?: never;
    email: string;
    github: string;
    linkedin: string;
    builtLine: string;
    colophon: string;
    copyright: string;
  };
  langSwitch: {
    label: string;
    href: string;
  };
}

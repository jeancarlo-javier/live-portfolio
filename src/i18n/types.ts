export type Lang = "en" | "es";

export interface ContentDict {
  hero: {
    kicker: string;
    h1: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metaLine: string;
  };
  credibility: readonly string[];
  work: {
    kicker: string;
    title: string;
    intro: string;
    secondaryTitle: string;
  };
  services: {
    kicker: string;
    title: string;
    availability: string;
    items: readonly {
      title: string;
      oneLiner: string;
    }[];
  };
  experience: {
    kicker: string;
    title: string;
    rows: readonly {
      period: string;
      company: string;
      role: string;
      note: string;
    }[];
  };
  operations: {
    kicker: string;
    title: string;
    body: string;
    telemetryLabel: string;
    panel: {
      lastBuild: string;
      lastCommit: string;
      recentChanges: string;
      motd: string;
      utc: string;
    };
    motdEmpty: string;
    colophonLink: string;
  };
  colophon: {
    meta: {
      title: string;
      description: string;
    };
    kicker: string;
    title: string;
    intro: string;
    stack: {
      title: string;
      body: string;
    };
    pipeline: {
      title: string;
      body: string;
    };
    guardrails: {
      title: string;
      items: readonly string[];
    };
    builders: {
      title: string;
      body: string;
      moaLead: string;
      moaLink: string;
      moaTail: string;
    };
    next: {
      title: string;
      label: string;
      body: string;
      closing: string;
    };
    footer: {
      built: string;
      commit: string;
      backHome: string;
    };
  };
  contact: {
    kicker: string;
    title: string;
    body: string;
    emailCta: string;
    githubLabel: string;
    linkedinLabel: string;
  };
  meta: {
    home: {
      title: string;
      description: string;
    };
  };
}

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
  content: ContentDict;
}

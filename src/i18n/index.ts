import { en } from "./en";
import { es } from "./es";
import type { ChromeDict, Lang } from "./types";

const dictionaries = { en, es } as const satisfies Record<Lang, ChromeDict>;

export function t(lang: Lang): ChromeDict {
  return dictionaries[lang];
}

export type { ChromeDict, Lang } from "./types";

import { en } from "./en";
import { uk } from "./uk";
import type { Locale } from "@/lib/i18n";

const dictionaries = { en, uk };

export type Dictionary = typeof en;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

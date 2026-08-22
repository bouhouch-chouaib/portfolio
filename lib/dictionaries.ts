import fr from "@/content/i18n/fr";
import en from "@/content/i18n/en";
import type { Dict, Locale } from "@/lib/i18n";

const dictionaries: Record<Locale, Dict> = { fr, en };

export function getDict(locale: Locale): Dict {
  return dictionaries[locale];
}

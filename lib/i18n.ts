import fr from "@/content/i18n/fr";

export type Locale = "fr" | "en";
export const locales: Locale[] = ["fr", "en"];

// Le dictionnaire français fait office de contrat : une clé manquante
// dans la version anglaise est une erreur TypeScript, pas un trou sur le site.
export type Dict = typeof fr;

export function otherLocale(locale: Locale): Locale {
  return locale === "fr" ? "en" : "fr";
}

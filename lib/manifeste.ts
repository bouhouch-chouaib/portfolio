import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";

export type ActeEntry = { id: string; n: string; titre: string };

export type ManifesteMeta = {
  title: string;
  sousTitre: string;
  resume: string;
};

// Vitesse de lecture retenue : 200 mots/minute, valeur basse et courante
// pour un texte d'essai. Mieux vaut annoncer un peu long que trop court.
const MOTS_PAR_MINUTE = 200;

export function getManifeste(locale: Locale) {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content", "manifeste", `${locale}.mdx`),
    "utf8",
  );
  const { data, content } = matter(raw);

  // Sommaire construit depuis les balises <Acte …> du source : une seule
  // source de vérité, le contenu et la navigation ne peuvent pas diverger.
  const actes: ActeEntry[] = [...content.matchAll(/<Acte\s+n="([^"]+)"\s+titre="([^"]+)"/g)].map(
    (m) => ({ id: `acte-${m[1].toLowerCase()}`, n: m[1], titre: m[2] }),
  );

  // Le décompte ignore le balisage JSX pour ne pas gonfler le temps annoncé.
  const mots = content
    .replace(/<[^>]+>/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;

  return {
    meta: data as ManifesteMeta,
    content,
    actes,
    minutes: Math.round(mots / MOTS_PAR_MINUTE),
    mots,
  };
}

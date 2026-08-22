import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import type { Locale } from "@/lib/i18n";
import { slugify } from "@/lib/slugify";

export type CaseStudyMeta = {
  slug: string;
  title: string;
  subtitle: string;
  stack: string;
  periode: string;
  statut: string;
  resume: string;
  order: number;
};

export type Heading = { id: string; title: string };

// Un seul jeu de slugs pour les deux langues : le sélecteur de langue
// peut basculer d'une version à l'autre sans table de correspondance.
export const caseStudySlugs = [
  "aleth",
  "assistant-ia",
  "drones-livraison",
  "stationnement",
] as const;

const contentDir = (locale: Locale) =>
  path.join(process.cwd(), "content", "case-studies", locale);

function readOne(locale: Locale, slug: string) {
  const raw = fs.readFileSync(path.join(contentDir(locale), `${slug}.mdx`), "utf8");
  const { data, content } = matter(raw);
  return { meta: { ...(data as Omit<CaseStudyMeta, "slug">), slug }, content };
}

export function getCaseStudies(locale: Locale): CaseStudyMeta[] {
  return caseStudySlugs
    .map((slug) => readOne(locale, slug).meta)
    .sort((a, b) => a.order - b.order);
}

export function getCaseStudy(locale: Locale, slug: string) {
  const { meta, content } = readOne(locale, slug);
  // Le sommaire est extrait du source Markdown (lignes "## ") ;
  // les ids reprennent le slugify utilisé au rendu des H2.
  const headings: Heading[] = content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const title = line.slice(3).trim();
      return { id: slugify(title), title };
    });
  return { meta, content, headings };
}

import type { Metadata } from "next";
import Link from "next/link";
import { compileMDX } from "next-mdx-remote/rsc";
import { locales, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { caseStudySlugs, getCaseStudy } from "@/lib/case-studies";
import { makeMdxComponents } from "@/components/mdx-components";

export const dynamicParams = false;
export function generateStaticParams() {
  return locales.flatMap((locale) => caseStudySlugs.map((slug) => ({ locale, slug })));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const dict = getDict(locale);
  const { meta } = getCaseStudy(locale, slug);
  return {
    title: meta.title,
    description: meta.resume,
    alternates: {
      languages: {
        fr: `/fr/projets/${slug}/`,
        en: `/en/projets/${slug}/`,
      },
    },
    // L'objet openGraph d'une page remplace entièrement celui du layout :
    // siteName, locale et type doivent être répétés ici.
    openGraph: {
      title: meta.title,
      description: meta.resume,
      siteName: dict.meta.siteName,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "article",
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = (await params) as { locale: Locale; slug: string };
  const dict = getDict(locale);
  const { meta, content, headings } = getCaseStudy(locale, slug);

  // Compilation au build : le HTML est figé dans l'export statique,
  // aucun runtime MDX n'est envoyé au navigateur.
  const { content: body } = await compileMDX({
    source: content,
    components: makeMdxComponents(locale, dict),
  });

  // Le rôle n'apparaît que sur les projets d'équipe : présenter un travail
  // collectif comme individuel serait malhonnête vis-à-vis d'un recruteur.
  const facts: [string, string][] = [
    [dict.etude.stack, meta.stack],
    [dict.etude.periode, meta.periode],
    [dict.etude.statut, meta.statut],
  ];
  if (meta.role) facts.splice(1, 0, [dict.etude.role, meta.role]);

  return (
    <div className="py-10 sm:py-14">
      <Link href={`/${locale}/`} className="font-mono text-xs text-graphite hover:text-encre">
        {dict.etude.retour}
      </Link>

      {/* Cartouche : les faits bruts avant la prose. */}
      <header className="mt-6 border border-trait bg-blanc px-5 py-5 sm:px-7 sm:py-6">
        <h1 className="display">{meta.title}</h1>
        <p className="mt-2 text-lg text-graphite">{meta.subtitle}</p>
        <dl className="mt-5 grid gap-x-8 gap-y-2 sm:grid-cols-[auto_1fr]">
          {facts.map(([label, value]) => (
            <div key={label} className="sm:contents">
              <dt className="font-mono text-xs tracking-widest text-graphite uppercase pt-0.5">
                {label}
              </dt>
              <dd className="font-mono text-xs">{value}</dd>
            </div>
          ))}
        </dl>
      </header>

      <div className="mt-4 gap-12 xl:grid xl:grid-cols-[minmax(0,68ch)_1fr]">
        <article className="article">{body}</article>

        {/* Sommaire : desktop uniquement — sur mobile la page se lit de haut en bas. */}
        <nav aria-label={dict.etude.sommaire} className="hidden xl:block">
          <div className="sticky top-10">
            <p className="font-mono text-xs tracking-widest text-graphite uppercase">
              {dict.etude.sommaire}
            </p>
            <ol className="mt-3 space-y-1.5">
              {headings.map((h, i) => (
                <li key={h.id}>
                  <a
                    href={`#${h.id}`}
                    className="text-xs text-graphite hover:text-encre hover:underline hover:underline-offset-4"
                  >
                    <span aria-hidden="true" className="font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>{" "}
                    {h.title}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </nav>
      </div>
    </div>
  );
}

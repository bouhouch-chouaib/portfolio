import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getCaseStudies } from "@/lib/case-studies";

/*
 * Accueil : l'accroche, puis le registre des études de cas.
 * Pas de cartes à vignettes — les projets se jugent sur le raisonnement,
 * donc chaque entrée montre le problème et le statut, pas une capture.
 */
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  const studies = getCaseStudies(locale);

  return (
    <div className="py-12 sm:py-16">
      <section className="max-w-[42rem]">
        <h1 className="display">{dict.home.accroche}</h1>
        <p className="mt-5 text-lg text-graphite">{dict.home.sousAccroche}</p>
      </section>

      <section aria-labelledby="registre" className="mt-16">
        <h2 id="registre" className="font-mono text-xs tracking-widest text-graphite uppercase">
          {dict.home.registreTitre}
        </h2>
        <p className="mt-2 max-w-[42rem]">{dict.home.registreIntro}</p>

        <ol className="mt-8">
          {studies.map((s, i) => (
            <li key={s.slug} className="border-t border-trait last:border-b">
              <Link
                href={`/${locale}/projets/${s.slug}/`}
                className="group grid gap-x-6 gap-y-1 py-5 sm:grid-cols-[3rem_1fr_auto] sm:items-baseline"
              >
                <span aria-hidden="true" className="font-mono text-xs text-graphite">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block text-lg font-semibold group-hover:text-prusse group-hover:underline group-hover:underline-offset-4">
                    {s.title}
                  </span>
                  <span className="mt-1 block text-graphite">{s.resume}</span>
                </span>
                <span className="font-mono text-xs text-graphite sm:text-right sm:max-w-48">
                  {s.statut}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}

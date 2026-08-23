import type { Metadata } from "next";
import { compileMDX } from "next-mdx-remote/rsc";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { getManifeste } from "@/lib/manifeste";
import { makeMdxComponents } from "@/components/mdx-components";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  const { meta } = getManifeste(locale);
  return {
    title: meta.title,
    description: meta.resume,
    alternates: { languages: { fr: "/fr/manifeste/", en: "/en/manifeste/" } },
    openGraph: {
      title: meta.title,
      description: meta.resume,
      siteName: dict.meta.siteName,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "article",
    },
  };
}

export default async function ManifestePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  const { meta, content, actes, minutes } = getManifeste(locale);

  const { content: body } = await compileMDX({
    source: content,
    components: makeMdxComponents(locale, dict),
  });

  return (
    <div className="py-10 sm:py-14">
      <header className="max-w-[46rem]">
        <p className="font-mono text-xs tracking-widest text-graphite uppercase">
          {dict.manifeste.etiquette}
        </p>
        <h1 className="display mt-3">{meta.title}</h1>
        <p className="mt-3 text-lg text-graphite">{meta.sousTitre}</p>
        <p className="mt-4 font-mono text-xs text-graphite">
          {dict.manifeste.actesCount.replace("{n}", String(actes.length))} ·{" "}
          {dict.manifeste.lecture.replace("{n}", String(minutes))} ·{" "}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/manifeste.pdf`}
            className="text-prusse underline underline-offset-2"
          >
            {dict.manifeste.pdf}
          </a>
        </p>
      </header>

      <div className="mt-10 gap-12 xl:grid xl:grid-cols-[minmax(0,58ch)_1fr]">
        {/* Justification plus étroite que le reste du site : c'est une
            lecture longue, pas une page de documentation. */}
        <article className="manifeste">{body}</article>

        <nav aria-label={dict.manifeste.sommaire} className="hidden xl:block">
          <div className="sticky top-10">
            <p className="font-mono text-xs tracking-widest text-graphite uppercase">
              {dict.manifeste.sommaire}
            </p>
            <ol className="mt-3 space-y-2">
              {actes.map((a) => (
                <li key={a.id}>
                  <a
                    href={`#${a.id}`}
                    className="text-xs text-graphite hover:text-encre hover:underline hover:underline-offset-4"
                  >
                    <span aria-hidden="true" className="font-mono">
                      {a.n}
                    </span>{" "}
                    {a.titre}
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

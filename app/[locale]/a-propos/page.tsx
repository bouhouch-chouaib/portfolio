import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  return {
    title: dict.apropos.titre,
    alternates: { languages: { fr: "/fr/a-propos/", en: "/en/a-propos/" } },
  };
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  // next/image n'ajoute pas le basePath quand l'optimisation est désactivée
  // (export statique) : le préfixe du sous-chemin doit être mis à la main,
  // comme sur les liens de CV de la page Contact.
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="py-12 sm:py-16">
      <h1 className="display">{dict.apropos.titre}</h1>
      <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_12rem] sm:items-start">
        <div className="order-2 max-w-[42rem] space-y-4 sm:order-1">
          {dict.apropos.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
        {/* width/height explicites : la place est réservée avant le
            chargement, donc aucun décalage de mise en page. */}
        <Image
          src={`${base}/photo.jpg`}
          alt={dict.apropos.photoAlt}
          width={400}
          height={400}
          priority
          className="order-1 w-36 rounded-full border border-trait sm:order-2 sm:w-full"
        />
      </div>
    </div>
  );
}

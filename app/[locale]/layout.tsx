import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { SITE_URL } from "@/lib/site";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "@/app/globals.css";

/*
 * Polices auto-hébergées par next/font : téléchargées au build, servies
 * depuis le site — aucune requête tierce en production, pas de FOIT.
 * Trois graisses de Plex Sans et deux de Plex Mono, rien de plus :
 * chaque graisse est un fichier à charger.
 */
const plexSans = IBM_Plex_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
  variable: "--font-plex-sans",
  display: "swap",
});
const plexMono = IBM_Plex_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

// Export statique : les deux locales sont générées au build, rien d'autre.
export const dynamicParams = false;
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: dict.meta.titleHome,
      template: `%s — ${dict.meta.siteName}`,
    },
    description: dict.meta.description,
    alternates: {
      languages: { fr: "/fr/", en: "/en/" },
    },
    openGraph: {
      siteName: dict.meta.siteName,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  // Le validateur de routes de Next exige le type large { locale: string } ;
  // la valeur est vérifiée à l'exécution puis affinée en Locale.
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  if (!locales.includes(locale)) notFound();
  const dict = getDict(locale);

  return (
    <html lang={locale} className={`${plexSans.variable} ${plexMono.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Header locale={locale} dict={dict.header} />
        <main id="contenu" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
          {children}
        </main>
        <Footer dict={dict} />
      </body>
    </html>
  );
}

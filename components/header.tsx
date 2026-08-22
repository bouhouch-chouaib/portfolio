"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dict, Locale } from "@/lib/i18n";
import { otherLocale } from "@/lib/i18n";

/*
 * Composant client uniquement parce que le sélecteur de langue a besoin
 * du chemin courant : /fr/projets/aleth/ doit mener à /en/projets/aleth/,
 * pas à l'accueil anglais. Tout le reste du site est rendu côté serveur.
 */
export function Header({ locale, dict }: { locale: Locale; dict: Dict["header"] }) {
  const pathname = usePathname();
  const other = otherLocale(locale);
  const switched = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), `/${other}`);

  const links = [
    { href: `/${locale}/`, label: dict.navHome },
    { href: `/${locale}/a-propos/`, label: dict.navAbout },
    { href: `/${locale}/contact/`, label: dict.navContact },
  ];

  return (
    <header className="border-b border-trait bg-papier">
      <a href="#contenu" className="skip-link">
        {dict.skip}
      </a>
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline gap-x-6 gap-y-2 px-4 py-4 sm:px-6">
        <Link href={`/${locale}/`} className="font-semibold">
          {dict.name}
        </Link>
        <nav aria-label="principale" className="flex flex-1 flex-wrap items-baseline gap-x-5 gap-y-1">
          {links.map((l) => {
            const current =
              l.href === `/${locale}/`
                ? pathname === l.href || pathname === `/${locale}`
                : pathname.startsWith(l.href.replace(/\/$/, ""));
            return (
              <Link
                key={l.href}
                href={l.href}
                aria-current={current ? "page" : undefined}
                className={
                  current
                    ? "text-encre underline underline-offset-4"
                    : "text-graphite hover:text-encre"
                }
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <Link
          href={switched || `/${other}/`}
          hrefLang={other}
          lang={other}
          aria-label={dict.switchLang}
          className="font-mono text-xs tracking-widest text-graphite hover:text-encre border border-trait px-2 py-1"
        >
          {dict.switchShort}
        </Link>
      </div>
    </header>
  );
}

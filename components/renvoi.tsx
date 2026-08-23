import Link from "next/link";
import type { Dict, Locale } from "@/lib/i18n";

/*
 * Renvoi discret d'une étude de cas vers l'acte du manifeste dont elle est
 * la mise en pratique. C'est le dispositif qui relie les deux moitiés du
 * site : le lecteur qui suit le lien comprend qu'il s'agit d'un seul objet.
 *
 * Le href est construit ici à partir de la locale, pas écrit dans le MDX :
 * le contenu reste indépendant de la langue et du basePath (Link l'ajoute).
 */
export function Renvoi({
  locale,
  dict,
  acte,
  children,
}: {
  locale: Locale;
  dict: Dict;
  acte: string;
  children: React.ReactNode;
}) {
  return (
    <p className="mt-8 border-t border-trait pt-4 font-mono text-xs text-graphite">
      {children}{" "}
      <Link
        href={`/${locale}/manifeste/#acte-${acte.toLowerCase()}`}
        className="text-prusse underline underline-offset-2"
      >
        → {dict.manifeste.acte} {acte} {dict.manifeste.duManifeste}
      </Link>
    </p>
  );
}

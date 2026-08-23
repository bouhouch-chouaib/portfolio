import type { Dict } from "@/lib/i18n";

/*
 * Titre d'acte du manifeste. L'identifiant est dérivé du seul numéro
 * (acte-iii), donc stable quelle que soit la langue : les renvois depuis
 * les études de cas fonctionnent à l'identique en français et en anglais.
 */
export function Acte({
  dict,
  n,
  titre,
  sous,
}: {
  dict: Dict;
  n: string;
  titre: string;
  sous: string;
}) {
  return (
    <h2 id={`acte-${n.toLowerCase()}`} className="acte">
      <span className="acte-num">
        {dict.manifeste.acte} {n}
      </span>
      <span className="acte-titre">{titre}</span>
      <span className="acte-sous">{sous}</span>
    </h2>
  );
}

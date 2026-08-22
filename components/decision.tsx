import type { Dict } from "@/lib/i18n";

/*
 * L'élément signature du site : la fiche de décision, calquée sur les
 * Architecture Decision Records. Filet vertical bleu de Prusse à gauche —
 * la seule ligne colorée du site. Balise <article> + <dl> : la structure
 * contexte/retenu/écarté est sémantique, pas seulement visuelle.
 */
export function Decision({
  dict,
  n,
  statut,
  titre,
  contexte,
  retenu,
  ecarte,
  children,
}: {
  dict: Dict;
  n: string;
  statut: string;
  titre: string;
  contexte: string;
  retenu: string;
  ecarte: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="my-6 border-l-[3px] border-prusse bg-blanc px-5 py-4 sm:px-6 sm:py-5">
      <p className="font-mono text-xs tracking-widest text-graphite uppercase">
        {dict.decision.label} {n} · {dict.decision.statutLabel} : {statut}
      </p>
      <h3 className="mt-2 text-lg font-semibold">{titre}</h3>
      <dl className="mt-3 space-y-3">
        {(
          [
            [dict.decision.contexte, contexte],
            [dict.decision.retenu, retenu],
            [dict.decision.ecarte, ecarte],
          ] as const
        ).map(([label, value]) => (
          <div key={label} className="sm:grid sm:grid-cols-[6.5rem_1fr] sm:gap-3">
            <dt className="font-mono text-xs tracking-widest text-graphite uppercase pt-0.5">
              {label}
            </dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      {children ? <div className="mt-3 text-graphite">{children}</div> : null}
    </article>
  );
}

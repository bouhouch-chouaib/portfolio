import type { Dict } from "@/lib/i18n";

/*
 * Marqueur d'honnêteté : signale une donnée manquante au lieu de la combler.
 * Volontairement visible (ocre, mono, bordure pointillée) — c'est un
 * marqueur de chantier, pas une honte à cacher.
 */
export function Todo({
  dict,
  children,
}: {
  dict: Dict;
  children?: React.ReactNode;
}) {
  return (
    <span className="todo">
      [{dict.todoLabel}
      {children ? <> : {children}</> : null}]
    </span>
  );
}

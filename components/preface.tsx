import type { Dict } from "@/lib/i18n";

/*
 * Préface écrite pour le site — elle donne la clé de lecture avant l'Acte I.
 * Composée en corps légèrement plus grand que le texte courant : le lecteur
 * doit sentir qu'il ne lit pas encore le manifeste, mais son entrée.
 */
export function Preface({ dict, children }: { dict: Dict; children: React.ReactNode }) {
  return (
    <section aria-label={dict.manifeste.preface} className="preface">
      <p className="font-mono text-xs tracking-widest text-graphite uppercase">
        {dict.manifeste.preface}
      </p>
      {children}
    </section>
  );
}

/*
 * Note de méthode : date, nature du document, réserve sur l'actualité des
 * chiffres. Elle protège le texte des objections les plus faciles en les
 * formulant avant le lecteur.
 */
export function Methode({ dict, children }: { dict: Dict; children: React.ReactNode }) {
  return (
    <aside aria-label={dict.manifeste.methode} className="methode">
      <p className="font-mono text-xs tracking-widest text-graphite uppercase">
        {dict.manifeste.methode}
      </p>
      {children}
    </aside>
  );
}

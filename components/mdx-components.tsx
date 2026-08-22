import type { MDXComponents } from "mdx/types";
import { Decision } from "@/components/decision";
import { Todo } from "@/components/todo";
import { slugify } from "@/lib/slugify";
import type { Dict } from "@/lib/i18n";

function textOf(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textOf).join("");
  return "";
}

/*
 * Fabrique de composants MDX, liée au dictionnaire de la langue courante :
 * les fichiers de contenu écrivent <Decision …> et <Todo> sans se soucier
 * de la langue des libellés. Les H2 reçoivent un id dérivé de leur texte,
 * avec le même slugify que celui du sommaire — les ancres restent alignées.
 */
export function makeMdxComponents(dict: Dict): MDXComponents {
  return {
    h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
    Decision: (props: Omit<React.ComponentProps<typeof Decision>, "dict">) => (
      <Decision dict={dict} {...props} />
    ),
    Todo: (props: { children?: React.ReactNode }) => <Todo dict={dict} {...props} />,
  };
}

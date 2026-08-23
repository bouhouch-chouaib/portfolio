import type { MDXComponents } from "mdx/types";
import { Decision } from "@/components/decision";
import { Todo } from "@/components/todo";
import { Renvoi } from "@/components/renvoi";
import { Acte } from "@/components/acte";
import { Preface, Methode } from "@/components/preface";
import { slugify } from "@/lib/slugify";
import type { Dict, Locale } from "@/lib/i18n";

function textOf(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (Array.isArray(node)) return node.map(textOf).join("");
  return "";
}

/*
 * Fabrique de composants MDX, liée à la langue courante : les fichiers de
 * contenu écrivent <Decision …>, <Renvoi …> ou <Acte …> sans se soucier de
 * la langue des libellés ni de la construction des URL. Les H2 reçoivent un
 * id dérivé de leur texte, avec le même slugify que celui du sommaire.
 */
export function makeMdxComponents(locale: Locale, dict: Dict): MDXComponents {
  return {
    h2: ({ children }) => <h2 id={slugify(textOf(children))}>{children}</h2>,
    Decision: (props: Omit<React.ComponentProps<typeof Decision>, "dict">) => (
      <Decision dict={dict} {...props} />
    ),
    Todo: (props: { children?: React.ReactNode }) => <Todo dict={dict} {...props} />,
    Renvoi: (props: Omit<React.ComponentProps<typeof Renvoi>, "dict" | "locale">) => (
      <Renvoi dict={dict} locale={locale} {...props} />
    ),
    Acte: (props: Omit<React.ComponentProps<typeof Acte>, "dict">) => (
      <Acte dict={dict} {...props} />
    ),
    Preface: (props: { children: React.ReactNode }) => <Preface dict={dict} {...props} />,
    Methode: (props: { children: React.ReactNode }) => <Methode dict={dict} {...props} />,
  };
}

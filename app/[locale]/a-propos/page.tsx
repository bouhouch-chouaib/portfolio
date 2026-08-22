import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDict } from "@/lib/dictionaries";
import { Todo } from "@/components/todo";

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

  return (
    <div className="py-12 sm:py-16">
      <h1 className="display">{dict.apropos.titre}</h1>
      <div className="mt-8 grid gap-10 sm:grid-cols-[1fr_12rem] sm:items-start">
        <div className="max-w-[42rem] space-y-4">
          {dict.apropos.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <ul className="space-y-2 pt-2">
            {dict.apropos.todos.map((t) => (
              <li key={t}>
                <Todo dict={dict}>{t}</Todo>
              </li>
            ))}
          </ul>
        </div>
        {/* Emplacement photo : ratio fixe pour éviter tout décalage de mise
            en page quand l'image réelle sera ajoutée. */}
        <div
          aria-hidden="true"
          className="hidden aspect-[4/5] items-center justify-center border border-trait bg-blanc sm:flex"
        >
          <span className="font-mono text-xs text-graphite">photo</span>
        </div>
      </div>
    </div>
  );
}

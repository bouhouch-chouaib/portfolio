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
    title: dict.contact.titre,
    alternates: { languages: { fr: "/fr/contact/", en: "/en/contact/" } },
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = (await params) as { locale: Locale };
  const dict = getDict(locale);
  // Les fichiers de public/ ne passent pas par <Link> : le préfixe du
  // sous-chemin doit être ajouté à la main sur les liens de CV.
  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <div className="py-12 sm:py-16">
      <h1 className="display">{dict.contact.titre}</h1>
      <p className="mt-5 max-w-[42rem] text-lg text-graphite">{dict.contact.intro}</p>
      <dl className="mt-10 max-w-[42rem]">
        {dict.contact.items.map((item) => {
          const href = item.file ? `${base}${item.file}` : item.href;
          return (
            <div
              key={item.label}
              className="grid gap-x-6 gap-y-1 border-t border-trait py-4 last:border-b sm:grid-cols-[10rem_1fr]"
            >
              <dt className="pt-0.5 font-mono text-xs tracking-widest text-graphite uppercase">
                {item.label}
              </dt>
              <dd>
                {href ? (
                  <a
                    href={href}
                    {...(item.file ? { download: true } : {})}
                    {...(item.href?.startsWith("http")
                      ? { rel: "me noopener", target: "_blank" }
                      : {})}
                    className="text-prusse underline underline-offset-2"
                  >
                    {item.value ?? href}
                  </a>
                ) : item.value ? (
                  item.value
                ) : (
                  <Todo dict={dict}>{item.todo}</Todo>
                )}
              </dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}

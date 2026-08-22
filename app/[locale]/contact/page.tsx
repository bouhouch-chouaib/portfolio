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

  return (
    <div className="py-12 sm:py-16">
      <h1 className="display">{dict.contact.titre}</h1>
      <p className="mt-5 max-w-[42rem] text-lg text-graphite">{dict.contact.intro}</p>
      <dl className="mt-10 max-w-[42rem]">
        {dict.contact.items.map((item) => (
          <div
            key={item.label}
            className="grid gap-x-6 gap-y-1 border-t border-trait py-4 last:border-b sm:grid-cols-[10rem_1fr]"
          >
            <dt className="font-mono text-xs tracking-widest text-graphite uppercase pt-0.5">
              {item.label}
            </dt>
            <dd>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-prusse underline underline-offset-2"
                >
                  {item.value ?? item.href}
                </a>
              ) : item.value ? (
                item.value
              ) : (
                <Todo dict={dict}>{item.todo}</Todo>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

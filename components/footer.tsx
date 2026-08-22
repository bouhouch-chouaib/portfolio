import type { Dict } from "@/lib/i18n";

export function Footer({ dict }: { dict: Dict }) {
  return (
    <footer className="mt-16 border-t border-trait">
      <div className="mx-auto flex max-w-5xl flex-wrap items-baseline justify-between gap-2 px-4 py-6 sm:px-6">
        <p className="text-xs text-graphite">
          © {new Date().getFullYear()} {dict.meta.siteName}
        </p>
        <p className="font-mono text-xs text-graphite">{dict.footer.note}</p>
      </div>
    </footer>
  );
}

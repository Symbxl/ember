import Link from "next/link";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs text-ink-400">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={`${c.name}-${i}`} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link href={c.href} className="hover:text-ink-50 transition-colors">
                  {c.name}
                </Link>
              ) : (
                <span className={last ? "text-ink-200" : "text-ink-400"} aria-current={last ? "page" : undefined}>
                  {c.name}
                </span>
              )}
              {!last && <span aria-hidden className="text-ink-500">·</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

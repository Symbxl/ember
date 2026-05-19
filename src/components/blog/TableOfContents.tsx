"use client";

import { useEffect, useState } from "react";

export type TocItem = { id: string; text: string; level: 2 | 3 };

export default function TableOfContents({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    if (items.length === 0) return;

    const headings = items
      .map((i) => document.getElementById(i.id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-80px 0px -65% 0px", threshold: [0, 1] }
    );

    headings.forEach((h) => obs.observe(h));
    return () => obs.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents">
      <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
        On this page
      </div>
      <ul className="mt-4 space-y-1 text-sm">
        {items.map((h) => {
          const isActive = h.id === active;
          return (
            <li key={h.id} className={h.level === 3 ? "ml-3" : ""}>
              <a
                href={`#${h.id}`}
                aria-current={isActive ? "true" : undefined}
                className={`block py-1 pl-3 border-l transition-colors ${
                  isActive
                    ? "border-ember-500 text-ember-600 font-semibold"
                    : "border-ink-700 text-ink-300 hover:text-ember-600 hover:border-ember-500/60"
                }`}
              >
                {h.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

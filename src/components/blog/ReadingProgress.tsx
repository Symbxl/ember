"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const article = document.querySelector("article[data-progress-target]") as HTMLElement | null;
    let raf = 0;

    function update() {
      const target = article ?? document.documentElement;
      const rect = article ? article.getBoundingClientRect() : null;
      const winH = window.innerHeight;

      if (article && rect) {
        const start = rect.top;
        const total = rect.height - winH;
        const scrolled = Math.min(Math.max(-start, 0), Math.max(total, 1));
        setPct(total > 0 ? (scrolled / total) * 100 : 0);
      } else {
        const total = target.scrollHeight - winH;
        setPct(total > 0 ? (window.scrollY / total) * 100 : 0);
      }
    }

    function onScroll() {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-50 h-1 bg-transparent pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-ember-400 via-ember-500 to-ember-600 transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

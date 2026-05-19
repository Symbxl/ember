"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowRight, Menu as MenuIcon, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const links = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/about", label: "About" }
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname?.startsWith(href));

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/85 backdrop-blur-xl border-b border-ink-700 shadow-[0_8px_30px_-15px_rgba(15,23,42,0.12)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-x flex h-16 md:h-20 items-center justify-between gap-6">
          <div className="translate-y-[3px]">
            <Logo />
          </div>

          <nav className="hidden lg:flex items-center gap-1 rounded-full border border-ink-700 bg-white/70 px-1.5 py-1.5 backdrop-blur">
            {links.map((l) => {
              const active = isActive(l.href);
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-medium transition ${
                    active
                      ? "text-ink-50"
                      : "text-ink-400 hover:text-ink-50"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-full bg-ink-900 border border-ink-700"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{l.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link href="/contact" className="btn-ember">
              Start a project
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden grid h-11 w-11 place-items-center rounded-full text-ink-50 hover:bg-ink-900"
            onClick={() => setOpen(true)}
          >
            <MenuIcon size={22} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute inset-0 bg-ink-50/40 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 280 }}
              className="absolute top-0 right-0 h-full w-full sm:w-[360px] bg-white border-l border-ink-700 p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-8">
                <Logo />
                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-full text-ink-50 hover:bg-ink-900"
                >
                  <X size={20} />
                </button>
              </div>
              <nav className="flex flex-col gap-1 flex-1">
                {links.map((l) => {
                  const active = isActive(l.href);
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`rounded-lg px-4 py-3 font-medium transition ${
                        active
                          ? "bg-ink-900 text-ink-50 border border-ink-700"
                          : "text-ink-300 hover:bg-ink-900 hover:text-ink-50"
                      }`}
                    >
                      {l.label}
                    </Link>
                  );
                })}
              </nav>
              <Link href="/contact" className="btn-ember mt-4">
                Start a project
                <ArrowRight size={14} strokeWidth={2.5} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

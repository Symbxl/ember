"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { pricing } from "@/lib/content";

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Pricing() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="// engagements"
          title={<>Built around <span className="gradient-text animate-gradient-pan">outcomes</span>, priced clearly.</>}
          subtitle="Pick a starting point. We'll tell you on the first call if a different tier makes more sense for your stage."
        />
        <motion.div
          className="mt-14 grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {pricing.map((p) => (
            <motion.div key={p.name} variants={card} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 280, damping: 22 }}>
              <div
                className={`relative h-full rounded-2xl p-8 flex flex-col transition-all duration-500 bg-white ${
                  p.featured
                    ? "border border-ember-500/40 shadow-glow"
                    : "border border-ink-700 hover:border-ink-600 hover:shadow-lift"
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-ember-500 px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                    <span className="h-1 w-1 rounded-full bg-white animate-pulse-dot" />
                    Most popular
                  </span>
                )}
                <h3 className="font-display font-semibold text-2xl text-cream-50">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="font-display font-semibold text-4xl text-cream-50">{p.price}</span>
                  {p.cadence && <span className="font-mono text-xs text-ink-400">{p.cadence}</span>}
                </div>
                <p className="mt-3 text-sm text-ink-400">{p.tagline}</p>
                <ul className="mt-6 space-y-2.5 text-sm text-ink-200 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <span className="mt-0.5 grid h-4 w-4 place-items-center rounded-full bg-ember-500/15 text-ember-400 shrink-0">
                        <Check size={10} strokeWidth={3} />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-7 ${p.featured ? "btn-ember" : "btn-ghost"} w-full`}
                >
                  {p.cta}
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

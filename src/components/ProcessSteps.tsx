"use client";

import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { process } from "@/lib/content";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function ProcessSteps() {
  return (
    <section className="relative isolate border-y border-ink-700 bg-ink-900 py-24 md:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10 bg-ember-glow opacity-50" />
      <div className="container-x">
        <SectionHeader
          eyebrow="The process"
          title={<>How we <span className="text-ember-600">actually</span> work.</>}
          subtitle="No 90-page decks. No mystery handoffs. Every engagement runs through the same four phases."
        />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          {process.map((p, i) => (
            <motion.div key={p.step} variants={item} whileHover={{ y: -6 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-ink-600/70 bg-white p-7 shadow-soft transition-all duration-500 hover:border-ember-500/50 hover:shadow-lift">
                <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div aria-hidden className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-ember-500/0 blur-2xl transition-all duration-700 group-hover:bg-ember-500/10" />

                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-ink-400">Phase</span>
                    <span className="h-px w-6 bg-ink-600 transition-colors duration-500 group-hover:bg-ember-500/60" />
                  </div>
                  {i < process.length - 1 && (
                    <span className="hidden lg:flex h-7 w-7 items-center justify-center rounded-full border border-ink-700 text-ink-400 transition-all duration-500 group-hover:border-ember-500/60 group-hover:text-ember-500 group-hover:translate-x-1">
                      <ArrowRight size={14} strokeWidth={2.25} />
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-3">
                  <span className="font-display font-semibold text-6xl leading-none tracking-tight bg-gradient-to-br from-ink-50 to-ink-300 bg-clip-text text-transparent transition-all duration-500 group-hover:from-ember-500 group-hover:to-ember-700">
                    {p.step}
                  </span>
                  <span className="mb-1.5 h-2 w-2 rounded-full bg-ember-500/30 transition-all duration-500 group-hover:bg-ember-500 group-hover:shadow-[0_0_12px_rgba(249,115,22,0.6)]" />
                </div>

                <h3 className="mt-5 font-display font-semibold text-2xl text-ink-50">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

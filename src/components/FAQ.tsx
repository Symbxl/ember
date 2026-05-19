"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { faqs, brand } from "@/lib/content";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="relative isolate border-y border-ink-700 bg-ink-900 py-24 md:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <SectionHeader
          eyebrow="// faq"
          title={<>Things people <span className="gradient-text animate-gradient-pan">ask first.</span></>}
          subtitle={`More questions? Email ${brand.email} and we'll answer within a business day.`}
        />
        <div className="space-y-3">
          {faqs.map((f, i) => {
            const isOpen = openIdx === i;
            return (
              <motion.div
                key={f.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: "easeOut" }}
                className={`rounded-2xl border bg-white transition-colors ${
                  isOpen ? "border-ember-500/40 shadow-glow" : "border-ink-700 hover:border-ink-600"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="w-full p-5 flex items-center justify-between gap-4 text-left"
                >
                  <span className="font-medium text-ink-50">{f.q}</span>
                  <span
                    className={`grid h-7 w-7 place-items-center rounded-full transition-all duration-300 ${
                      isOpen ? "bg-ember-500 text-white rotate-45" : "bg-ink-900 border border-ink-700 text-ember-600"
                    }`}
                  >
                    <Plus size={14} strokeWidth={2.5} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-ink-300 leading-relaxed">{f.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

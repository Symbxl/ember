"use client";

import Image from "next/image";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { caseStudies } from "@/lib/content";

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } }
};

export default function CaseStudies() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-8 md:grid-cols-2 md:items-end mb-12">
          <SectionHeader
            eyebrow="Selected work"
            title={<>Numbers, not <span className="text-ember-600">narratives.</span></>}
            subtitle="A few recent engagements. Real metrics, real teams, real pipelines."
          />
          <div className="md:text-right">
            <Link href="/work" className="btn-ghost">See all work →</Link>
          </div>
        </div>

        <motion.div
          className="grid gap-6 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {caseStudies.map((c) => (
            <motion.div key={c.slug} variants={card} whileHover={{ y: -8 }} transition={{ type: "spring", stiffness: 250, damping: 22 }}>
              <Link
                href="/work"
                className="group block overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-soft transition-shadow duration-500 hover:shadow-lift hover:ring-glow-ember"
              >
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={c.cover}
                    alt={c.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  <Chip
                    icon={<Sparkles size={11} />}
                    label={c.sector}
                    size="small"
                    sx={{
                      position: "absolute",
                      top: 16,
                      left: 16,
                      bgcolor: "rgba(255,255,255,0.92)",
                      color: "primary.main",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      backdropFilter: "blur(6px)",
                      border: "1px solid",
                      borderColor: "divider",
                      "& .MuiChip-icon": { color: "primary.main", ml: 0.5 }
                    }}
                  />
                  <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between">
                    <h3 className="font-display font-semibold text-2xl text-white">{c.name}</h3>
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-ember-500 text-white opacity-0 translate-x-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0">
                      <ArrowRight size={14} strokeWidth={2.5} />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-ink-300">{c.summary}</p>
                  <div className="mt-5 grid grid-cols-3 gap-3 border-t border-ink-700 pt-5">
                    {c.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="font-display font-semibold text-xl text-ember-600">{m.value}</div>
                        <div className="text-[10px] uppercase tracking-widest text-ink-500">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

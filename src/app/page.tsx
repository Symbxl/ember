"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Layers,
  Sparkles,
  Star,
  TerminalSquare,
  Users
} from "lucide-react";
import { motion, type Variants } from "framer-motion";
import LeadForm from "@/components/LeadForm";
import Portfolio from "@/components/Portfolio";
import ProcessSteps from "@/components/ProcessSteps";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { brand } from "@/lib/content";

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } }
};
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

const heroLogos = [
  "Creator Terminal",
  "Relight Exterior",
  "Gaard Media",
  "Mystic Media",
  "Marks Heating",
  "Pocono Paint"
];

export default function LandingPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        {/* Aurora gradient + grid backdrop */}
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-hero-aurora opacity-80" />
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-[0.45]" />
          <div className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full bg-ember-500/30 blur-[160px] animate-drift-slow" />
          <div className="absolute top-1/3 -left-20 h-[420px] w-[420px] rounded-full bg-amber-400/20 blur-[140px] animate-ember-pulse" />
        </div>

        <div className="container-x pt-16 md:pt-24 pb-16 md:pb-24 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-[44px] sm:text-6xl lg:text-[80px] leading-[1.0] tracking-[-0.03em] text-cream-50"
            >
              Websites that{" "}
              <span className="relative inline-block">
                <span className="gradient-text animate-gradient-pan">convert.</span>
                <svg
                  aria-hidden
                  viewBox="0 0 220 14"
                  className="absolute -bottom-2 left-0 w-full"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 C 50 2, 110 14, 218 5"
                    stroke="url(#ember-underline)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    fill="none"
                  />
                  <defs>
                    <linearGradient id="ember-underline" x1="0" x2="1">
                      <stop offset="0%" stopColor="#fdba74" />
                      <stop offset="50%" stopColor="#f97316" />
                      <stop offset="100%" stopColor="#ea580c" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br className="hidden sm:inline" /> Marketing that{" "}
              <span className="bg-gradient-to-br from-ink-50 via-ink-100 to-ink-300 bg-clip-text text-transparent">
                compounds.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-[17px] md:text-lg text-ink-300 leading-[1.6]"
            >
              {brand.name} is a small studio of engineers, designers, and operators
              shipping high-converting digital homes for ambitious brands. No agency
              theater. No 90-page decks. Just sites that turn traffic into pipeline.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link href="/contact" className="btn-ember">
                Start a project
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link href="/work" className="btn-ghost">
                <TerminalSquare size={16} strokeWidth={2} />
                See the work
              </Link>
            </motion.div>

            {/* Trust strip */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-ink-400"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {["#F97316", "#2970FF", "#10B981", "#8B5CF6"].map((c, i) => (
                    <span
                      key={i}
                      className="grid h-8 w-8 place-items-center rounded-full border-2 border-white text-[11px] font-bold text-white shadow-sm"
                      style={{ backgroundColor: c }}
                    >
                      {["E", "C", "G", "R"][i]}
                    </span>
                  ))}
                </div>
                <span className="font-medium text-ink-50">
                  40+ brands launched
                </span>
              </div>
              <div className="hidden h-4 w-px bg-ink-700 sm:block" />
              <div className="flex items-center gap-1.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star
                    key={i}
                    size={14}
                    strokeWidth={0}
                    fill="#f59e0b"
                    className="drop-shadow-sm"
                  />
                ))}
                <span className="ml-1 font-medium text-ink-50">5.0</span>
                <span className="text-ink-400">avg. client review</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right column — lead form (unchanged on purpose) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:pl-4"
          >
            {/* Decorative halo around form */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-6 -z-10 rounded-[36px] opacity-70"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(249,115,22,0.25), transparent 70%)"
              }}
            />
            <div className="relative">
              <LeadForm />
            </div>
          </motion.div>
        </div>

        {/* Logo marquee */}
        <div className="relative overflow-hidden border-b border-ink-700/80 bg-white/40 py-6">
          <div className="container-x flex items-center gap-6">
            <span className="shrink-0 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-400">
              Recently shipped for
            </span>
            <div className="relative flex-1 overflow-hidden">
              <div className="flex w-max items-center gap-10 animate-marquee">
                {[...heroLogos, ...heroLogos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    className="whitespace-nowrap font-display text-lg font-semibold text-ink-300 transition-colors hover:text-ink-50"
                  >
                    {name}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      {/* MISSION / POSITIONING STRIP */}
      <section className="relative isolate overflow-hidden py-24 md:py-32">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-ember-500/[0.07] blur-[140px]" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-[60%] max-w-3xl bg-gradient-to-r from-transparent via-ink-700 to-transparent" />
        </div>

        <div className="container-x">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="eyebrow justify-center">
                <span className="h-px w-6 bg-ember-500" />
                Why {brand.name}
              </span>
              <h2 className="mt-4 font-display font-semibold text-4xl md:text-5xl tracking-[-0.025em] text-ink-50">
                The studio you&apos;d hire{" "}
                <span className="text-ember-600">if you were us.</span>
              </h2>
              <p className="mt-5 text-lg text-ink-300 leading-relaxed">
                Four commitments we don&apos;t compromise on. They&apos;re the reason
                our clients stay with us past year one — and refer the rest of
                their network.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Senior on every project.",
                body: "No bait-and-switch staffing. Your account lead writes the code or the strategy.",
                Icon: Users
              },
              {
                title: "Outcome-priced.",
                body: "We sell engagements, not hours. Fixed scope, fixed ship date, fixed price.",
                Icon: Sparkles
              },
              {
                title: "Engineering-led design.",
                body: "Every comp is built with the constraints of the production stack already in mind.",
                Icon: Layers
              },
              {
                title: "Reporting tied to revenue.",
                body: "Monthly recaps pinned to pipeline. No screenshots of impression counts.",
                Icon: BarChart3
              }
            ].map(({ title, body, Icon }, i) => (
              <Reveal key={title} delay={i * 90}>
                <article className="group relative h-full overflow-hidden rounded-2xl border border-ink-700 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30 hover:shadow-lift">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-ember-500/0 blur-2xl transition-all duration-700 group-hover:bg-ember-500/15"
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember-500/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <span className="absolute top-6 right-6 font-mono text-[11px] font-medium tracking-[0.18em] text-ink-500">
                    0{i + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-ember-50 ring-1 ring-ember-500/20 text-ember-600 transition-all duration-300 group-hover:ring-ember-500/40 group-hover:bg-ember-100">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="mt-5 font-display font-semibold text-lg text-ink-50 tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">
                    {body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSteps />
      <CaseStudies />
      <FAQ />
      <CTASection />
    </>
  );
}

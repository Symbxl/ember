"use client";

import Link from "next/link";
import { ArrowRight, BarChart3, Layers, Sparkles, TerminalSquare, Users } from "lucide-react";
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
        </div>

        <div className="container-x pt-20 md:pt-28 pb-24 md:pb-32 grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.h1
              variants={fadeUp}
              className="font-display font-semibold text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-cream-50"
            >
              Websites that<br className="hidden sm:inline" />{" "}
              <span className="gradient-text animate-gradient-pan">convert.</span><br className="hidden sm:inline" />{" "}
              Marketing that{" "}
              <span className="text-ink-400">compounds.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg text-ink-300 leading-relaxed">
              {brand.name} is a small studio of engineers, designers, and operators building
              high-converting digital homes for ambitious brands. We don&apos;t do agency theater.
              We ship work.
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

          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, filter: "blur(12px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="relative lg:pl-4"
          >
            <div className="relative">
              <LeadForm />
            </div>
          </motion.div>
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
                <article className="group relative h-full rounded-2xl border border-ink-700 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30 hover:shadow-lift">
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

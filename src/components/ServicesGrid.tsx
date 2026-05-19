"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import ServiceIcon from "./ServiceIcon";
import { services } from "@/lib/content";
import { serviceImages } from "@/lib/images";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } }
};
const card: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ServicesGrid() {
  return (
    <section className="relative isolate py-24 md:py-32">
      {/* Soft background wash */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ember-glow opacity-40" />
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[420px] w-[640px] rounded-full bg-ember-500/[0.06] blur-[140px]" />
      </div>

      <div className="container-x">
        {/* Header row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-14">
          <SectionHeader
            eyebrow="What we do"
            title={<>Four practices. <span className="text-ember-500">One studio.</span></>}
            subtitle="We build, optimize, and grow marketing websites for teams that care about the metrics, not just the mockups."
          />
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-1.5 font-mono text-[12px] uppercase tracking-[0.22em] text-ink-300 transition-colors hover:text-ember-500"
          >
            All services
            <ArrowRight size={14} strokeWidth={2.2} className="transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Cards grid */}
        <motion.div
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
        >
          {services.map((s, i) => (
            <motion.div key={s.title} variants={card} className="group relative h-full">
              <Link
                href="/services"
                className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-700 bg-white shadow-[0_2px_4px_rgba(15,23,42,0.04),0_8px_24px_-12px_rgba(15,23,42,0.10)] transition-all duration-500 hover:-translate-y-1 hover:border-ember-500/30 hover:shadow-[0_4px_8px_rgba(15,23,42,0.04),0_20px_40px_-12px_rgba(234,88,12,0.18)]"
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={serviceImages[s.title]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                  {/* Number badge */}
                  <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-white/90 px-2 py-0.5 font-mono text-[10px] font-semibold tracking-[0.18em] text-ink-200 ring-1 ring-ink-700 backdrop-blur">
                    0{i + 1}
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-center gap-2.5">
                    <span className="grid h-9 w-9 place-items-center rounded-lg bg-ember-50 ring-1 ring-ember-500/20">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <h3 className="font-display text-[17px] font-semibold tracking-tight text-ink-50">
                      {s.title}
                    </h3>
                  </div>

                  <p className="mt-3 text-[13.5px] leading-relaxed text-ink-300">
                    {s.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[13px] text-ink-200">
                    {s.bullets.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <Check size={13} strokeWidth={2.6} className="mt-1 shrink-0 text-ember-500" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer link */}
                  <div className="mt-5 flex items-center gap-1.5 border-t border-ink-700 pt-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-300 transition-colors group-hover:text-ember-500">
                    Learn more
                    <ArrowRight
                      size={13}
                      strokeWidth={2.3}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
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

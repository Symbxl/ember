"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import Reveal from "./Reveal";

type Item = {
  name: string;
  url: string;
  display: string;
  description: string;
  tags: string[];
  accent: string;
  image: string;
  feature?: boolean;
};

const items: Item[] = [
  {
    name: "Creator Terminal",
    url: "https://creatorterminal.com",
    display: "creatorterminal.com",
    description:
      "An AI-powered creator OS with a custom terminal UI, real-time dashboards, and a fully integrated content pipeline.",
    tags: ["SaaS", "Dashboard", "AI"],
    accent: "#2970FF",
    image: "/portfolio/creator.png",
    feature: true
  },
  {
    name: "Relight Exterior",
    url: "https://www.relightexteriorlighting.com/",
    display: "relightexteriorlighting.com",
    description:
      "Our own lighting company site — high-converting, fully integrated with the booking dashboard.",
    tags: ["Lighting", "Conversion", "Integrated"],
    accent: "#8B5CF6",
    image: "/portfolio/relight.png"
  },
  {
    name: "Gaard Media",
    url: "https://gaardmedia.com",
    display: "gaardmedia.com",
    description:
      "A media agency site stripped to the essentials — conversion-first, no agency theater.",
    tags: ["Agency", "Marketing", "Landing"],
    accent: "#10B981",
    image: "/portfolio/gaard.png"
  },
  {
    name: "Mystic Media",
    url: "https://mysticmediafilm.com",
    display: "mysticmediafilm.com",
    description:
      "A cinematic, motion-rich landing page for a video studio — built to sell the work, not the about page.",
    tags: ["Branding", "Motion", "Landing"],
    accent: "#EC4899",
    image: "/portfolio/mystic.png"
  },
  {
    name: "Marks Heating KC",
    url: "https://marksheatingkc.com",
    display: "marksheatingkc.com",
    description:
      "An HVAC service site with clear pricing, a fast lead form, and same-day booking flow.",
    tags: ["HVAC", "Local", "Leads"],
    accent: "#F97316",
    image: "/portfolio/mark.png"
  },
  {
    name: "Pocono Paint",
    url: "https://pocono-paint.vercel.app/",
    display: "pocono-paint.vercel.app",
    description:
      "Bold residential painting site with a before-after gallery and an instant-quote flow.",
    tags: ["Painting", "Local", "Gallery"],
    accent: "#06B6D4",
    image: "/portfolio/pocono.png"
  }
];

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function Card({ item, priority = false }: { item: Item; priority?: boolean }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex h-full flex-col overflow-hidden rounded-[22px] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-[color:var(--accent-border)] hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_32px_56px_var(--accent-shadow)]"
      style={
        {
          ["--accent" as string]: item.accent,
          ["--accent-border" as string]: hexToRgba(item.accent, 0.3),
          ["--accent-shadow" as string]: hexToRgba(item.accent, 0.22)
        } as React.CSSProperties
      }
    >
      {/* Gradient border halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[2] rounded-[22px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          padding: "1px",
          background: `linear-gradient(135deg, ${hexToRgba(item.accent, 0)}, ${hexToRgba(item.accent, 0.55)} 50%, ${hexToRgba(item.accent, 0)})`,
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude"
        }}
      />

      {/* Screenshot */}
      <div className="relative overflow-hidden">
        <div
          className="relative w-full"
          style={{ aspectRatio: "16 / 10" }}
        >
          <Image
            src={item.image}
            alt={`${item.name} website screenshot`}
            fill
            sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
            priority={priority}
            className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
          />
          {/* Top hairline */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${hexToRgba(item.accent, 0.6)}, transparent)`
            }}
          />
          {/* Browser chrome bar */}
          <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex items-center gap-1.5 bg-gradient-to-b from-white/95 to-white/0 px-4 py-2.5 backdrop-blur-[2px]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white/90 px-2 py-[3px] font-mono text-[10px] text-[#64748B] ring-1 ring-[rgba(15,23,42,0.06)]">
              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: item.accent }}
              />
              {item.display}
            </span>
          </div>
          {/* Bottom accent wash on hover */}
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{
              background: `linear-gradient(180deg, transparent 55%, ${hexToRgba(item.accent, 0.22)} 100%)`
            }}
          />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-[14px] p-6 pt-5">
        <div className="flex flex-wrap gap-1.5">
          {item.tags.map((t) => (
            <span
              key={t}
              className="rounded-md px-2 py-[3px] text-[11px] font-semibold uppercase tracking-[0.3px]"
              style={{
                backgroundColor: hexToRgba(item.accent, 0.12),
                color: item.accent
              }}
            >
              {t}
            </span>
          ))}
        </div>
        <h3 className="font-display text-[1.375rem] font-extrabold leading-[1.2] tracking-[-0.02em] text-ink-50">
          {item.name}
        </h3>
        <p className="text-[0.9375rem] leading-[1.6] text-[#55627A]">
          {item.description}
        </p>
        <div className="mt-1 h-px w-full bg-[rgba(15,23,42,0.06)]" />
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-ink-50 transition-[gap,color] duration-300 group-hover:gap-2.5 group-hover:[color:var(--accent)]">
            Visit site
            <ArrowUpRight
              size={16}
              strokeWidth={2.2}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </span>
          <span className="max-w-[55%] overflow-hidden text-ellipsis whitespace-nowrap font-mono text-xs text-[#94A3B8]">
            {item.display}
          </span>
        </div>
      </div>
    </a>
  );
}

export default function Portfolio({ withCta = true }: { withCta?: boolean }) {
  const [featured, ...rest] = items;

  return (
    <section className="relative isolate overflow-hidden bg-[#FAFAFB] py-20 md:py-28">
      {/* Decorative backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-ember-500/[0.07] blur-[140px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, transparent, #FAFAFB 92%), linear-gradient(rgba(15,23,42,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.05) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 32px 32px, 32px 32px"
          }}
        />
      </div>

      <div className="container-x">
        <Reveal>
          <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[13px] font-semibold tracking-[0.02em]"
              style={{
                backgroundColor: hexToRgba("#F97316", 0.1),
                border: `1px solid ${hexToRgba("#F97316", 0.2)}`,
                color: "#F97316"
              }}
            >
              <Sparkles size={14} strokeWidth={2.2} />
              Selected Work
            </span>
            <h2 className="mt-5 font-display font-semibold text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-cream-50">
              Real sites.{" "}
              <span className="gradient-text animate-gradient-pan">Real pipelines.</span>
            </h2>
            <p className="mt-5 max-w-[680px] text-base leading-[1.6] text-[#55627A] md:text-lg">
              We design and build modern, fast, beautiful websites that turn visitors
              into customers. A few we shipped recently — every screenshot is the live site.
            </p>
          </div>
        </Reveal>

        {/* Featured project — full width */}
        <Reveal>
          <div className="mt-14 md:mt-16">
            <div
              className="relative grid overflow-hidden rounded-[24px] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_44px_rgba(15,23,42,0.08)] lg:grid-cols-[1.35fr_1fr]"
              style={
                {
                  ["--accent" as string]: featured.accent
                } as React.CSSProperties
              }
            >
              {/* Image side */}
              <a
                href={featured.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block overflow-hidden"
              >
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "16 / 10" }}
                >
                  <Image
                    src={featured.image}
                    alt={`${featured.name} website screenshot`}
                    fill
                    sizes="(min-width: 1024px) 56vw, 100vw"
                    priority
                    className="object-cover object-top transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                  />
                  {/* Browser chrome */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 z-[1] flex items-center gap-1.5 bg-gradient-to-b from-white/95 to-white/0 px-5 py-3 backdrop-blur-[2px]">
                    <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
                    <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
                    <span className="h-3 w-3 rounded-full bg-[#28C840]" />
                    <span className="ml-3 inline-flex items-center gap-1.5 rounded-md bg-white/95 px-2.5 py-1 font-mono text-[11px] text-[#64748B] ring-1 ring-[rgba(15,23,42,0.06)]">
                      <span
                        className="h-1.5 w-1.5 rounded-full"
                        style={{ backgroundColor: featured.accent }}
                      />
                      {featured.display}
                    </span>
                  </div>
                </div>
              </a>

              {/* Copy side */}
              <div className="flex flex-col justify-center gap-5 p-7 md:p-10">
                <div className="flex items-center gap-2">
                  <span
                    className="rounded-full px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em]"
                    style={{
                      backgroundColor: hexToRgba(featured.accent, 0.12),
                      color: featured.accent
                    }}
                  >
                    Featured Project
                  </span>
                </div>
                <h3 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.025em] text-ink-50 md:text-4xl">
                  {featured.name}
                </h3>
                <p className="text-[1rem] leading-[1.65] text-[#55627A]">
                  {featured.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {featured.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md px-2 py-[3px] text-[11px] font-semibold uppercase tracking-[0.3px]"
                      style={{
                        backgroundColor: hexToRgba(featured.accent, 0.12),
                        color: featured.accent
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-2 flex items-center gap-3">
                  <a
                    href={featured.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-0.5"
                    style={{ backgroundColor: featured.accent }}
                  >
                    Visit live site
                    <ArrowUpRight size={15} strokeWidth={2.4} />
                  </a>
                  <span className="font-mono text-xs text-[#94A3B8]">
                    {featured.display}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Rest of the grid */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <Card item={item} />
            </Reveal>
          ))}
        </div>

        {withCta && (
          <Reveal>
            <div className="mt-14 flex justify-center md:mt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2970FF] px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-[#1F5AD6]"
              >
                Start Your Website
                <ArrowUpRight size={16} strokeWidth={2.2} />
              </Link>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}

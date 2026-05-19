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
};

const items: Item[] = [
  {
    name: "Creator Terminal",
    url: "https://creatorterminal.com",
    display: "creatorterminal.com",
    description: "Creator-focused platform with a custom terminal UI.",
    tags: ["SaaS", "Dashboard", "AI"],
    accent: "#2970FF"
  },
  {
    name: "Gaard Media",
    url: "https://gaardmedia.com",
    display: "gaardmedia.com",
    description: "Media agency site focused on conversion and clarity.",
    tags: ["Agency", "Marketing", "Landing"],
    accent: "#10B981"
  },
  {
    name: "Mystic Media",
    url: "https://mysticmediafilm.com",
    display: "mysticmediafilm.com",
    description: "High-impact marketing landing page with motion-rich hero.",
    tags: ["Branding", "Motion", "Landing"],
    accent: "#EC4899"
  },
  {
    name: "Marks Heating KC",
    url: "https://marksheatingkc.com",
    display: "marksheatingkc.com",
    description: "HVAC service site with clear pricing, lead form, and fast booking.",
    tags: ["HVAC", "Local", "Leads"],
    accent: "#F97316"
  },
  {
    name: "Pocono Paint",
    url: "https://pocono-paint.vercel.app/",
    display: "pocono-paint.vercel.app",
    description: "Bold residential painting site with before-after gallery and quote flow.",
    tags: ["Painting", "Local", "Gallery"],
    accent: "#06B6D4"
  },
  {
    name: "Relight Exterior",
    url: "https://www.relightexteriorlighting.com/",
    display: "relightexteriorlighting.com",
    description: "Our own lighting company site, high-converting and fully integrated with the dashboard.",
    tags: ["Lighting", "Conversion", "Integrated"],
    accent: "#8B5CF6"
  }
];

function hexToRgba(hex: string, alpha: number) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16);
  const g = parseInt(h.slice(2, 4), 16);
  const b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Portfolio({ withCta = true }: { withCta?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden bg-white py-20 md:py-28">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[420px] w-[720px] rounded-full bg-ember-500/[0.06] blur-[140px]" />
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
              Our Work
            </span>
            <h2 className="mt-5 font-display font-semibold text-[44px] sm:text-6xl lg:text-7xl leading-[1.02] tracking-[-0.025em] text-cream-50">
              High-Converting Websites for Local Businesses
            </h2>
            <p className="mt-5 max-w-[680px] text-base leading-[1.6] text-[#55627A] md:text-lg">
              We design and build modern, fast, and beautiful websites that turn visitors into customers. Here are a few sites we&apos;ve built.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:mt-16 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.name} delay={i * 80}>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-[rgba(15,23,42,0.08)] bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_12px_28px_rgba(15,23,42,0.06)] transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2.5 hover:border-[color:var(--accent-border)] hover:shadow-[0_2px_4px_rgba(15,23,42,0.04),0_32px_56px_var(--accent-shadow)]"
                style={
                  {
                    ["--accent" as string]: item.accent,
                    ["--accent-border" as string]: hexToRgba(item.accent, 0.25),
                    ["--accent-shadow" as string]: hexToRgba(item.accent, 0.18)
                  } as React.CSSProperties
                }
              >
                {/* Gradient border halo on hover */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[2] rounded-[24px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    padding: "1px",
                    background: `linear-gradient(135deg, ${hexToRgba(item.accent, 0)}, ${hexToRgba(item.accent, 0.5)} 50%, ${hexToRgba(item.accent, 0)})`,
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude"
                  }}
                />

                {/* Thumbnail */}
                <div className="p-2 pb-0">
                  <div
                    className="relative overflow-hidden rounded-2xl border border-[rgba(15,23,42,0.05)] bg-[#F4F6FA]"
                    style={{ aspectRatio: "16 / 10" }}
                  >
                    <div
                      className="absolute inset-0 flex items-center justify-center transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      style={{
                        background: `linear-gradient(135deg, ${hexToRgba(item.accent, 0.18)} 0%, ${hexToRgba(item.accent, 0.06)} 60%, #F4F6FA 100%)`
                      }}
                    >
                      <div className="flex flex-col items-center gap-2 px-6 text-center">
                        <div
                          className="grid h-14 w-14 place-items-center rounded-2xl text-xl font-extrabold tracking-tight text-white shadow-lg"
                          style={{ backgroundColor: item.accent }}
                        >
                          {item.name
                            .split(" ")
                            .map((w) => w[0])
                            .slice(0, 2)
                            .join("")}
                        </div>
                        <span
                          className="font-mono text-[11px] uppercase tracking-[0.16em]"
                          style={{ color: hexToRgba(item.accent, 0.85) }}
                        >
                          {item.display}
                        </span>
                      </div>
                    </div>
                    <div
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(180deg, transparent 40%, ${hexToRgba(item.accent, 0.18)} 100%)`
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
                          backgroundColor: hexToRgba(item.accent, 0.15),
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

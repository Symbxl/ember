import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { brand, stats } from "@/lib/content";
import { aboutHero, teamPortraits } from "@/lib/images";

export const metadata: Metadata = {
  title: `About — ${brand.name}`,
  description: `${brand.name} is a small studio of engineers, designers, and operators building high-converting websites and marketing programs.`
};

const principles = [
  { title: "Senior-only execution.", body: "No graduate-program staffing. Whoever wins the work is in the work." },
  { title: "Fewer clients, deeper work.", body: "We cap the studio so every engagement gets real attention." },
  { title: "Built to be measured.", body: "Every page, every email, every spend has a number behind it." },
  { title: "Honest scope.", body: "We say no a lot. It's why our clients keep coming back." }
];

const team = [
  { name: "Avery Sterling", role: "Founder · Strategy", bio: "Former marketing lead at two Series B startups. Builds the offer, the message, and the funnel." },
  { name: "Theo Ember", role: "Engineering Lead", bio: "Next.js / Vercel specialist. Ships the sites and tunes the Core Web Vitals." },
  { name: "Rin Okafor", role: "Design Lead", bio: "Design-systems thinker. Lives at the intersection of brand and conversion." },
  { name: "Marco Vela", role: "Performance Lead", bio: "Runs the paid + SEO programs. Eight years on the buy-side and the agency side." }
];

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-24 md:py-32 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="animate-fade-up">
            <span className="eyebrow"><span className="h-px w-6 bg-ember-500" />About</span>
            <h1 className="mt-3 font-display font-semibold text-5xl md:text-6xl tracking-tight text-ink-50 max-w-2xl">
              A small studio for teams that <span className="text-ember-600">care about the numbers.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-300">
              We&apos;re engineers and operators who got tired of agencies that don&apos;t know how to ship.
              So we started one that does.
            </p>
          </div>
          <div className="relative animate-blur-in">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-3xl border border-ink-700 shadow-lift">
              <Image src={aboutHero} alt="" fill priority sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-ember-500/15 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90}>
              <div className="font-display font-semibold text-4xl text-ember-600">{s.value}</div>
              <div className="mt-1 text-xs text-ink-500 uppercase tracking-widest">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="border-y border-ink-700 bg-ink-900 py-24">
        <div className="container-x">
          <SectionHeader eyebrow="What we believe" title={<>Four things we won&apos;t compromise on.</>} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="glass-strong glass-hover p-7 h-full">
                  <h3 className="font-display font-semibold text-xl text-ink-50">{p.title}</h3>
                  <p className="mt-2 text-ink-400">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-x py-24">
        <SectionHeader eyebrow="The team" title={<>The people on every <span className="text-ember-600">single</span> engagement.</>} />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="group photo-card h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={teamPortraits[m.name]}
                    alt={m.name}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="font-display font-semibold text-lg text-ink-50">{m.name}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-ember-600 mt-1">{m.role}</div>
                  <p className="mt-3 text-sm text-ink-400">{m.bio}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/work" className="btn-light">See our work</Link>
          <Link href="/contact" className="btn-ghost">Get in touch</Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}

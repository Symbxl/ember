import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ServiceIcon from "@/components/ServiceIcon";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { services, brand } from "@/lib/content";
import { serviceImages } from "@/lib/images";

export const metadata: Metadata = {
  title: `Services — ${brand.name}`,
  description: `Website development, SEO, paid acquisition, brand & design from ${brand.name}.`
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -left-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-24 md:py-32 animate-fade-up max-w-4xl">
          <span className="eyebrow"><span className="h-px w-6 bg-ember-500" />Services</span>
          <h1 className="mt-3 font-display font-semibold text-5xl md:text-6xl tracking-tight text-ink-50">
            Four practices. <span className="text-ember-600">Built to work together.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            We sell engagements, not retainers-of-noise. Each practice can stand alone — most clients
            engage two or three.
          </p>
        </div>
      </section>

      {services.map((s, i) => {
        const reverse = i % 2 === 1;
        return (
          <section key={s.title} className={`border-t border-ink-700 py-24 ${i % 2 === 0 ? "bg-white" : "bg-ink-900"}`}>
            <div className={`container-x grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <Reveal>
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink-700 shadow-lift">
                  <Image
                    src={serviceImages[s.title]}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-ember-500/15" />
                  <div className="absolute top-5 left-5 grid h-12 w-12 place-items-center rounded-xl bg-white/95 ring-1 ring-ember-500/30 shadow-soft backdrop-blur">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <span className="absolute bottom-5 left-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-200 backdrop-blur ring-1 ring-ink-700">
                    Practice {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>

              <Reveal delay={120}>
                <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink-50">{s.title}</h2>
                <p className="mt-3 text-ink-300 text-lg">{s.summary}</p>
                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <div key={b} className="glass-strong p-4">
                      <div className="flex items-start gap-3">
                        <span className="mt-1 grid h-5 w-5 place-items-center rounded-full bg-ember-500/15 text-ember-600 shrink-0">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5 9-11" /></svg>
                        </span>
                        <span className="text-ink-100">{b}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/contact" className="btn-ghost mt-7">Talk to us about this</Link>
              </Reveal>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}

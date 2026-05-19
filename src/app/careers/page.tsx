import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import CareersForm from "@/components/CareersForm";
import { brand } from "@/lib/content";
import { SITE_URL } from "@/lib/blog";

const description = `Join ${brand.name} — a senior-only studio building marketing sites and growth programmes for ambitious UK brands. We hire remotely across the UK.`;

export const metadata: Metadata = {
  title: `Careers — ${brand.name}`,
  description,
  alternates: { canonical: `${SITE_URL}/careers` },
  openGraph: {
    type: "website",
    title: `Careers — ${brand.name}`,
    description,
    url: `${SITE_URL}/careers`,
    siteName: brand.name
  },
  twitter: {
    card: "summary_large_image",
    title: `Careers — ${brand.name}`,
    description
  }
};

const openRoles = [
  {
    title: "Senior Next.js Engineer",
    type: "Full-time · Remote (UK)",
    summary:
      "Lead the engineering on 2–3 concurrent marketing-site builds. Next.js App Router, Vercel, MDX/Sanity. Senior IC role with strategy input."
  },
  {
    title: "SEO & Content Strategist",
    type: "Full-time · Remote (UK)",
    summary:
      "Run end-to-end SEO programmes for UK B2B clients. Topical-authority mapping, programmatic SEO, technical audits, monthly reporting tied to pipeline."
  },
  {
    title: "Brand & Product Designer",
    type: "Full-time · Remote (UK)",
    summary:
      "Lead identity and conversion design across client engagements. Senior portfolio expected. Figma, design systems, motion fluency a plus."
  },
  {
    title: "Open application",
    type: "Always reading",
    summary:
      "Senior operator, paid-media lead, or something we haven't thought of? Tell us what you'd build here and we'll read it."
  }
];

const benefits = [
  {
    title: "Senior-only studio.",
    body: "No graduate-program staffing. Everyone in the room is the person doing the work."
  },
  {
    title: "Remote across the UK.",
    body: "Async-first. Two in-person off-sites per year — London in spring, somewhere greener in autumn."
  },
  {
    title: "Real ownership.",
    body: "You'll own client outcomes end-to-end. No layers of project management between you and the work."
  },
  {
    title: "Profit-share, not equity theatre.",
    body: "20% of studio profit pooled and paid quarterly. Transparent finances, no vesting cliffs."
  },
  {
    title: "Learning budget.",
    body: "£1,500/year for books, courses, conferences. We trust you to spend it well."
  },
  {
    title: "32 days off.",
    body: "25 days holiday + the 8 UK bank holidays + the studio closes between Christmas and New Year."
  }
];

export default function CareersPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-ember-500/10 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-24 md:py-32 animate-fade-up max-w-4xl">
          <span className="eyebrow">
            <span className="h-px w-6 bg-ember-500" />
            Careers
          </span>
          <h1 className="mt-3 font-display font-semibold text-5xl md:text-6xl tracking-tight text-ink-50">
            Build the studio you&apos;d{" "}
            <span className="text-ember-600">want to work in.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            We&apos;re a small senior-only team building marketing sites and
            growth programmes for ambitious UK brands. If you&apos;ve outgrown
            agencies that staff projects with juniors and you want to do the
            best work of your career, we should talk.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#apply" className="btn-ember">
              Apply now
              <ArrowRight size={14} strokeWidth={2.5} />
            </a>
            <a href="#roles" className="btn-ghost">
              See open roles
            </a>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="border-t border-ink-700 bg-ink-900 py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="What you get"
            title={<>Senior pay. <span className="text-ember-600">Senior work.</span></>}
            subtitle="We don't compete on perks-of-the-week. The deal is: meaningful work, fair money, and a real seat at the table."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={i * 80}>
                <div className="glass-strong glass-hover p-7 h-full">
                  <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-ember-600">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-3 font-display font-semibold text-lg text-ink-50">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OPEN ROLES */}
      <section id="roles" className="bg-white py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Open roles"
            title={<>What we&apos;re hiring for.</>}
            subtitle="Each role is permanent, full-time, and based anywhere in the UK. We don't sponsor visas yet."
          />
          <div className="mt-12 grid gap-4">
            {openRoles.map((r, i) => (
              <Reveal key={r.title} delay={i * 70}>
                <a
                  href="#apply"
                  className="group flex items-start gap-6 rounded-2xl border border-ink-700 bg-white p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-ember-500/40 hover:shadow-lift"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-display font-semibold text-xl text-ink-50">
                        {r.title}
                      </h3>
                      <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-ink-900 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-ink-300 border border-ink-700">
                        <MapPin size={10} strokeWidth={2.5} />
                        {r.type}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-ink-300 leading-relaxed">
                      {r.summary}
                    </p>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-700 bg-white text-ink-50 transition-all duration-300 group-hover:bg-ember-500 group-hover:text-white group-hover:border-ember-500 group-hover:translate-x-0.5">
                    <ArrowRight size={16} strokeWidth={2.4} />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="border-t border-ink-700 bg-ink-900 py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">
              <span className="h-px w-6 bg-ember-500" />
              Apply
            </span>
            <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl tracking-tight text-ink-50">
              One form. <span className="text-ember-600">No tricks.</span>
            </h2>
            <p className="mt-4 text-ink-300 leading-relaxed">
              We read every application personally. If your background looks
              like a fit you&apos;ll hear from us within 5 working days. If
              not, you&apos;ll still hear from us — we don&apos;t ghost.
            </p>
            <ul className="mt-7 space-y-3 text-sm text-ink-300">
              <li>
                <strong className="text-ink-50">No coding tests.</strong>{" "}
                Bring real work. We&apos;ll discuss it.
              </li>
              <li>
                <strong className="text-ink-50">Three conversations,</strong>{" "}
                not seven rounds. Intro, deep-dive, founder chat.
              </li>
              <li>
                <strong className="text-ink-50">Decision within 14 days</strong>{" "}
                of the first call.
              </li>
              <li>
                Questions before applying?{" "}
                <Link
                  href={`mailto:${brand.email}?subject=Careers question`}
                  className="text-ember-600 underline decoration-ember-600/40 underline-offset-2 hover:decoration-ember-600"
                >
                  Email us
                </Link>
                .
              </li>
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <CareersForm />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

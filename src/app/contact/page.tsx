import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Contact — ${brand.name}`,
  description: `Book a 25-minute call with ${brand.name}.`
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-20 md:py-28 animate-fade-up max-w-4xl">
          <span className="eyebrow"><span className="h-px w-6 bg-ember-500" />Contact</span>
          <h1 className="mt-3 font-display font-semibold text-5xl md:text-6xl tracking-tight text-ink-50">
            Let&apos;s scope <span className="text-ember-600">the work.</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-ink-300">
            A 25-minute intro call. We&apos;ll tell you on the call if it&apos;s a fit. No decks, no pitches.
          </p>
        </div>
      </section>

      <section className="container-x pb-24 grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <div>
          <h2 className="font-display font-semibold text-2xl text-ink-50">Other ways to reach us</h2>
          <div className="mt-6 grid gap-4">
            <a href={`mailto:${brand.email}`} className="glass-strong glass-hover p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ember-500/10 ring-1 ring-ember-500/30 text-ember-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6 12 13 2 6" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">Email</div>
                <div className="font-semibold text-ink-50">{brand.email}</div>
              </div>
            </a>
            <a href={`tel:${brand.phoneDigits}`} className="glass-strong glass-hover p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ember-500/10 ring-1 ring-ember-500/30 text-ember-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">Phone</div>
                <div className="font-semibold text-ink-50">{brand.phone}</div>
              </div>
            </a>
            <div className="glass-strong p-5 flex items-center gap-4">
              <span className="grid h-11 w-11 place-items-center rounded-full bg-ember-500/10 ring-1 ring-ember-500/30 text-ember-600">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </span>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-ink-500">Studio</div>
                <div className="font-semibold text-ink-50">{brand.location}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-ember-500/20 bg-ember-50 p-5 text-sm text-ink-200">
            <strong className="text-ink-50">Heads up:</strong> we close intake one week per month to keep
            client work moving. If you don&apos;t hear back within a business day, we&apos;re heads-down — your
            note is in queue.
          </div>
        </div>

        <div>
          <LeadForm />
        </div>
      </section>
    </>
  );
}

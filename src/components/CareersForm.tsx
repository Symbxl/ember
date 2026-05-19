"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

// Same Formspree endpoint as the homepage lead form — distinguished by the
// hidden `form_type` and `_subject` fields below, so applications can be
// filtered in the Formspree dashboard. Swap to a dedicated form ID later
// if you want a separate inbox.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xqejagzr";

const ROLES = [
  "Engineering — Next.js / Frontend",
  "Engineering — Backend / Platform",
  "Design — Brand & Product",
  "SEO / Content Strategist",
  "Paid Acquisition Lead",
  "Project / Account Manager",
  "Open application"
];

export default function CareersForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(true);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Please accept the privacy notice to continue.");
      return;
    }
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          form_type: "careers",
          _subject: `Careers application — ${data.firstName ?? "candidate"} ${data.lastName ?? ""}`.trim()
        })
      });
      if (!res.ok) {
        const j = (await res.json().catch(() => ({}))) as {
          error?: string;
          errors?: Array<{ message?: string }>;
        };
        throw new Error(j.error || j.errors?.[0]?.message || "Something went wrong");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Submission failed");
    }
  }

  return (
    <div
      id="apply"
      className="relative overflow-hidden rounded-3xl bg-white text-slate-900 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.18)] ring-1 ring-ink-700"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="px-8 py-14 text-center"
          >
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white">
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-semibold">Application received.</h3>
            <p className="mt-2 text-slate-500 max-w-md mx-auto">
              We read every application personally. If your background looks
              like a fit, you&apos;ll hear from us within 5 working days.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Submit another application
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={onSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="border-b border-slate-200 px-7 pt-7 pb-5">
              <h2 className="text-[26px] font-bold leading-tight tracking-tight text-slate-900">
                Apply to join Ember Sterling
              </h2>
              <p className="mt-2 text-[14px] text-slate-500">
                One page. Senior-only studio, remote-first across the UK.
              </p>
            </div>

            <div className="px-7 pt-6 pb-7 space-y-4">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    First name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    name="firstName"
                    required
                    autoComplete="given-name"
                    placeholder="Avery"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    name="lastName"
                    required
                    autoComplete="family-name"
                    placeholder="Sterling"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Role + location row */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="role" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Role
                  </label>
                  <select
                    id="role"
                    name="role"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  >
                    <option value="" disabled>
                      Select a role
                    </option>
                    {ROLES.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="location" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Where you&apos;re based
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    required
                    placeholder="London, Manchester, Glasgow…"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              {/* Portfolio / LinkedIn */}
              <div>
                <label htmlFor="portfolio" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Portfolio, GitHub, or LinkedIn
                </label>
                <input
                  id="portfolio"
                  type="url"
                  name="portfolio"
                  required
                  placeholder="https://"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Years of experience + notice period */}
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="experience" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Years of experience
                  </label>
                  <input
                    id="experience"
                    type="text"
                    name="experience"
                    required
                    placeholder="e.g. 6"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
                <div>
                  <label htmlFor="notice" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Notice period
                  </label>
                  <input
                    id="notice"
                    type="text"
                    name="notice"
                    placeholder="e.g. 1 month / available now"
                    className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Why you&apos;d be a fit
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="The work you're proudest of, what you want to do more of, and why Ember Sterling."
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                />
              </div>

              {/* Consent */}
              <label htmlFor="consent" className="flex items-start gap-3 text-[13px] text-slate-600">
                <input
                  id="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 bg-orange-50 text-orange-600 accent-orange-600 focus:ring-orange-500"
                />
                <span>
                  I agree to Ember Sterling processing my application data
                  under UK GDPR for the purposes of this hiring round.
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-2 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[17px] font-semibold text-white shadow-[0_15px_40px_-10px_rgba(234,88,12,0.55)] transition-all hover:brightness-110 disabled:opacity-70"
                style={{
                  background: "linear-gradient(180deg, #fb923c 0%, #ea580c 50%, #9a3412 100%)"
                }}
              >
                {status === "submitting" ? "Sending…" : "Submit application"}
                {status !== "submitting" && (
                  <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              {error && (
                <p className="text-center text-sm text-red-600">{error}</p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

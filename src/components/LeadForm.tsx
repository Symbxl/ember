"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Status = "idle" | "submitting" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [consent, setConsent] = useState(true);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!consent) {
      setError("Please accept the terms to continue.");
      return;
    }
    setStatus("submitting");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("https://formspree.io/f/xqejagzr", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data)
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
      id="quote"
      className="relative overflow-hidden rounded-3xl bg-white text-slate-900 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.45)] ring-1 ring-slate-200"
    >
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="px-8 py-12 text-center"
          >
            <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white">
              <Check size={28} strokeWidth={3} />
            </div>
            <h3 className="text-2xl font-semibold">Got it. Talk soon.</h3>
            <p className="mt-2 text-slate-500">
              We&apos;ll reply within one business day with a calendar link.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 inline-flex items-center justify-center rounded-full border border-slate-300 px-5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
            >
              Submit another inquiry
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
            {/* Tabs */}
            <div className="flex items-center gap-6 border-b border-slate-200 px-7 pt-6 pb-4 text-sm">
              <div className="flex items-center gap-2 font-semibold text-slate-900">
                <span className="grid h-3 w-3 place-items-center rounded-full bg-orange-600 ring-4 ring-orange-100" />
                Fill out the form
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="h-3 w-3 rounded-full ring-1 ring-slate-300" />
                Book your event
              </div>
            </div>

            {/* Heading */}
            <div className="px-7 pt-6">
              <h2 className="text-[32px] font-bold leading-tight tracking-tight text-slate-900">
                Free Discovery Call
              </h2>
              <p className="mt-3 text-[15px] text-slate-800">
                Excited to speak with you about your new website
              </p>
              <p className="mt-1 text-[15px] text-slate-500">
                Book a call below to see if we&apos;re a fit.
              </p>
            </div>

            {/* Fields */}
            <div className="px-7 pt-6 pb-7">
              {/* Phone */}
              <div className="flex items-stretch overflow-hidden rounded-xl border border-slate-300 bg-white focus-within:border-slate-400">
                <div className="flex items-center gap-1.5 pl-3.5 pr-3 text-[15px] font-semibold text-slate-900">
                  <span className="text-base leading-none" aria-hidden>🇺🇸</span>
                  <span>+1</span>
                </div>
                <div className="my-2 w-px bg-slate-200" />
                <input
                  type="tel"
                  name="phone"
                  required
                  autoComplete="tel"
                  placeholder="(555) 123-4567"
                  className="w-full bg-transparent px-3.5 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:outline-none"
                />
              </div>

              {/* Name row */}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <input
                  type="text"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="First name * *"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                />
                <input
                  type="text"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Last name * *"
                  className="w-full rounded-xl border border-slate-300 bg-white px-3.5 py-3.5 text-[15px] text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none"
                />
              </div>

              {/* Cloudflare turnstile mock */}
              <div className="mt-5 flex items-center justify-between rounded-lg bg-slate-100 px-4 py-3.5 ring-1 ring-slate-200">
                <div className="flex items-center gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-emerald-500 text-white">
                    <Check size={16} strokeWidth={3.5} />
                  </span>
                  <span className="text-[15px] font-medium text-slate-800">Success!</span>
                </div>
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide">
                    <svg viewBox="0 0 32 32" className="h-5 w-5" aria-hidden>
                      <path
                        d="M22.4 19.6c.4-1.5.2-2.9-.7-3.9-.8-.9-2.1-1.5-3.6-1.6L9 13.9c-.2 0-.3-.1-.4-.2-.1-.1-.1-.3-.1-.4 0-.3.3-.5.6-.5l9.2-.2c1.1 0 2.3-.9 2.7-2L21.6 8c0-.1 0-.1 0-.2-.6-2.7-3-4.7-5.9-4.7-2.7 0-5 1.7-5.8 4.1-.5-.4-1.2-.6-1.9-.6-1.4.1-2.5 1.2-2.6 2.6 0 .4 0 .7.1 1-2.2.1-4 1.9-4 4.2 0 .2 0 .4 0 .6.1.1.2.2.3.2h19.7c.1 0 .3-.1.3-.2l.6-1.4z"
                        fill="#f48120"
                      />
                      <path
                        d="M25.5 13.7c-.1 0-.2 0-.3 0-.1 0-.1.1-.2.2l-.4 1.4c-.4 1.5-.2 2.9.7 3.9.8.9 2.1 1.5 3.6 1.6l1.9.1c.2 0 .3.1.4.2.1.1.1.3.1.4-.1.3-.3.5-.6.5l-2 .1c-1.1.1-2.3.9-2.7 2l-.1.3c0 .1 0 .2.1.2.1.1.1.1.2.1h6.9c.1 0 .2-.1.3-.2.1-.5.2-1.1.2-1.7 0-4-3.2-7.1-7-7.1z"
                        fill="#faae40"
                      />
                    </svg>
                    <span className="text-slate-500">CLOUDFLARE</span>
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-500">
                    <span className="underline">Privacy</span>
                    <span className="mx-1">•</span>
                    <span className="underline">Help</span>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <label className="mt-5 flex cursor-pointer items-start gap-2.5">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-4 w-4 cursor-pointer rounded border-slate-300 bg-orange-50 text-orange-600 accent-orange-600 focus:ring-orange-500"
                />
                <span className="text-[13px] leading-snug text-slate-600">
                  By entering your information, you consent to your data being saved in accordance
                  with our{" "}
                  <Link href="/terms" className="font-semibold text-slate-900 underline">
                    Terms
                  </Link>{" "}
                  &{" "}
                  <Link href="/privacy" className="font-semibold text-slate-900 underline">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group mt-5 flex w-full items-center justify-center gap-2 rounded-2xl py-4 text-[17px] font-semibold text-white shadow-[0_15px_40px_-10px_rgba(37,99,235,0.6)] transition-all hover:brightness-110 disabled:opacity-70"
                style={{
                  background:
                    "linear-gradient(180deg, #60a5fa 0%, #2563eb 50%, #1e40af 100%)"
                }}
              >
                {status === "submitting" ? "Sending…" : "Continue"}
                {status !== "submitting" && (
                  <ArrowRight size={18} strokeWidth={2.5} className="transition-transform group-hover:translate-x-0.5" />
                )}
              </button>

              {error && (
                <p className="mt-3 text-center text-sm text-red-600">{error}</p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

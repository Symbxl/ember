"use client";

import Link from "next/link";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="relative isolate overflow-hidden py-24 md:py-32 bg-white">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 px-8 py-20 md:px-16 md:py-24 text-center shadow-glow"
        >
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full bg-white/20 blur-3xl animate-drift-slow" />
            <div className="absolute -bottom-32 -right-20 h-[360px] w-[360px] rounded-full bg-white/10 blur-3xl animate-ember-pulse" />
            <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "radial-gradient(rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur ring-1 ring-white/25">
            <span className="h-px w-5 bg-white" />Ready when you are
          </span>
          <h2 className="mt-5 font-display font-semibold text-4xl md:text-6xl tracking-tight text-white">
            Build the site your<br className="hidden md:inline" /> brand deserves.
          </h2>
          <p className="mt-5 max-w-2xl mx-auto text-lg text-white/85">
            A 25-minute call. No pitch, no contracts. We&apos;ll tell you on the call if it&apos;s a fit.
          </p>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={1.5} sx={{ mt: 4, justifyContent: "center" }}>
            <Button
              component={Link}
              href="/contact"
              endIcon={<ArrowRight size={16} strokeWidth={2.5} />}
              sx={{
                bgcolor: "#fff",
                color: "#ea580c",
                py: 1.5,
                px: 3,
                "&:hover": {
                  bgcolor: "#fff7ed",
                  transform: "translateY(-1px)",
                  boxShadow: "0 12px 28px -10px rgba(0,0,0,0.25)"
                }
              }}
            >
              Book a Call
            </Button>
            <Button
              component={Link}
              href="/work"
              variant="outlined"
              sx={{
                bgcolor: "rgba(255,255,255,0.1)",
                borderColor: "rgba(255,255,255,0.4)",
                color: "#fff",
                backdropFilter: "blur(6px)",
                py: 1.5,
                px: 3,
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.2)",
                  borderColor: "rgba(255,255,255,0.6)",
                  color: "#fff"
                }
              }}
            >
              See our work
            </Button>
          </Stack>
        </motion.div>
      </div>
    </section>
  );
}

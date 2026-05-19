"use client";

import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { Quote } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/content";
import { testimonialPortraits } from "@/lib/images";

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
};

export default function Testimonials() {
  return (
    <section className="relative isolate border-y border-ink-700 bg-ink-900 py-24 md:py-28 overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[440px] w-[640px] rounded-full bg-ember-500/8 blur-[120px]" />
      </div>
      <div className="container-x">
        <SectionHeader
          align="center"
          eyebrow="What teams say"
          title={<>The work, in <span className="text-ember-600">their words.</span></>}
        />
        <motion.div
          className="mt-14 grid gap-6 md:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          variants={{ show: { transition: { staggerChildren: 0.12 } } }}
        >
          {testimonials.map((t) => (
            <motion.div key={t.name} variants={item} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }}>
              <Card sx={{ p: 3.5, height: "100%", display: "flex", flexDirection: "column" }} elevation={0}>
                <Quote size={32} color="#ea580c" style={{ opacity: 0.85 }} />
                <Typography sx={{ mt: 2, color: "text.primary", lineHeight: 1.65, flex: 1 }}>
                  &ldquo;{t.quote}&rdquo;
                </Typography>
                <Stack
                  direction="row"
                  spacing={1.5}
                  sx={{ mt: 3, pt: 2.5, borderTop: "1px solid", borderColor: "divider", alignItems: "center" }}
                >
                  <Avatar
                    src={testimonialPortraits[t.name]}
                    alt={t.name}
                    sx={{ height: 44, width: 44, border: "2px solid", borderColor: "rgba(234,88,12,0.4)" }}
                  />
                  <div>
                    <Typography sx={{ fontWeight: 600, color: "text.primary" }}>{t.name}</Typography>
                    <Typography variant="caption" color="text.secondary">
                      {t.role}
                    </Typography>
                  </div>
                </Stack>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

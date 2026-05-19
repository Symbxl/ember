"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 }
};

export default function Reveal({ children, delay = 0, className = "", as = "div" }: Props) {
  const reduce = useReducedMotion();
  // framer-motion expects ms as seconds and exposes per-element delay via transition
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={reduce ? false : "hidden"}
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -10% 0px", amount: 0.12 }}
      variants={variants}
      transition={{ duration: 0.7, ease: "easeOut", delay: delay / 1000 }}
    >
      {children}
    </Tag>
  );
}

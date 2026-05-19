import type { Metadata } from "next";
import CTASection from "@/components/CTASection";
import Portfolio from "@/components/Portfolio";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: `Work — ${brand.name}`,
  description: `High-converting websites for local businesses, built by ${brand.name}.`
};

export default function WorkPage() {
  return (
    <>
      <Portfolio />
      <CTASection />
    </>
  );
}

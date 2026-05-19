export const brand = {
  name: "Ember Sterling",
  short: "Ember Sterling",
  tagline: "Websites that ship leads. Marketing that compounds.",
  description:
    "Ember Sterling is a UK website development and marketing studio building high-converting digital homes for ambitious British brands.",
  email: "hello@sterlingember.com",
  phone: "+44 20 7946 0958",
  phoneDigits: "442079460958",
  location: "London · Serving the UK",
  social: {
    instagram: "https://instagram.com/embersterling",
    linkedin: "https://linkedin.com/company/embersterling",
    twitter: "https://x.com/embersterling"
  }
};

export const stats = [
  { value: "+182%", label: "Avg. organic traffic in 6 months" },
  { value: "2.4x", label: "Lead conversion vs. prior site" },
  { value: "4–6", label: "Weeks from kickoff to launch" },
  { value: "97%", label: "Client retention through year two" }
];

export const services = [
  {
    title: "Website Development",
    summary: "Custom Next.js sites engineered for speed, SEO, and conversion — not just aesthetics.",
    bullets: ["Next.js + Tailwind builds", "Headless CMS (Sanity / Contentful)", "Edge-deployed on Vercel", "Core Web Vitals 95+"],
    icon: "code"
  },
  {
    title: "SEO & Content",
    summary: "Long-tail content programs and technical SEO that compound month over month.",
    bullets: ["Keyword & intent strategy", "Programmatic SEO", "Content sprints", "Schema & site architecture"],
    icon: "search"
  },
  {
    title: "Paid Acquisition",
    summary: "Performance media across Meta, Google, and LinkedIn — built around your unit economics.",
    bullets: ["Funnel + offer design", "Creative testing", "Pixel & GTM setup", "Weekly performance reporting"],
    icon: "target"
  },
  {
    title: "Brand & Design",
    summary: "Identity systems, design tokens, and conversion-led product design.",
    bullets: ["Brand & visual identity", "Design systems", "Landing page design", "Motion & micro-interaction"],
    icon: "spark"
  }
];

export const process = [
  { step: "01", title: "Diagnose", body: "Two-week audit of site, traffic, funnel, and competitors. We tell you what's actually broken." },
  { step: "02", title: "Design", body: "Strategy doc, sitemap, wireframes, and high-fidelity comps. You sign off on outcomes, not pixels." },
  { step: "03", title: "Build", body: "We code in Next.js, ship to staging weekly, and pressure-test every flow before launch." },
  { step: "04", title: "Grow", body: "Post-launch SEO, paid, and CRO sprints. Monthly reporting tied to revenue, not vanity metrics." }
];

export const caseStudies = [
  {
    slug: "verdant-co",
    name: "Verdant & Co",
    sector: "DTC home goods",
    summary: "Rebuilt their Shopify-on-Wix mess into a Next.js commerce site with editorial CMS and a paid funnel that finally paid back.",
    metrics: [
      { value: "+264%", label: "Organic sessions" },
      { value: "3.1x", label: "Site speed (CWV)" },
      { value: "$1.84", label: "Blended CAC" }
    ],
    cover: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "northbound-cpa",
    name: "Northbound CPA",
    sector: "B2B services",
    summary: "Repositioned a regional accounting firm with a focused landing page, a 90-day SEO sprint, and a LinkedIn outbound engine.",
    metrics: [
      { value: "+142", label: "Qualified leads / mo" },
      { value: "47%", label: "Demo-to-close rate" },
      { value: "$240K", label: "Pipeline in Q1" }
    ],
    cover: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
  },
  {
    slug: "ember-financial",
    name: "Ember Financial",
    sector: "Fintech",
    summary: "Launched a marketing site + waitlist landing for a Series A fintech in 5 weeks. Captured 6,200 emails pre-launch.",
    metrics: [
      { value: "6,200", label: "Waitlist signups" },
      { value: "$0.42", label: "CPL on Meta" },
      { value: "5 wks", label: "Site → launch" }
    ],
    cover: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
  }
];

export const logos = [
  "Verdant & Co",
  "Northbound CPA",
  "Ember Financial",
  "Pinecrest Living",
  "Mainline Studio",
  "Foundry & Co",
  "Brightline Labs",
  "Strata Health",
  "Kindred Robotics",
  "Halcyon Group"
];

export const testimonials = [
  {
    quote:
      "Ember Sterling rebuilt our site in five weeks and our qualified demos doubled the month after launch. They are the only agency we'll work with again.",
    name: "Maya Chen",
    role: "Head of Marketing, Verdant & Co"
  },
  {
    quote:
      "They told us to stop running ads to a broken landing page before they'd take our money. That's the kind of partner we needed.",
    name: "Daniel Park",
    role: "Founder, Ember Financial"
  },
  {
    quote:
      "The dashboard reports tie every dollar back to pipeline. No fluff, no agency-speak — just real numbers and a roadmap.",
    name: "Avery Doyle",
    role: "CFO, Northbound CPA"
  }
];

export const pricing = [
  {
    name: "Launchpad",
    price: "$8,500",
    cadence: "one-time",
    tagline: "For pre-launch teams that need a website that actually converts.",
    features: [
      "Up to 7 pages, Next.js + Tailwind",
      "Conversion-led landing page",
      "On-page SEO + schema",
      "Vercel deployment",
      "2 rounds of revisions",
      "4–5 week timeline"
    ],
    cta: "Start with Launchpad"
  },
  {
    name: "Compounding",
    price: "$5,800",
    cadence: "/ month",
    featured: true,
    tagline: "Our SEO + content + CRO retainer for teams in growth mode.",
    features: [
      "Quarterly strategy + roadmap",
      "8 long-form SEO articles / mo",
      "Technical SEO + monitoring",
      "CRO testing + analytics",
      "Monthly performance report",
      "Slack channel with the team"
    ],
    cta: "Talk to us"
  },
  {
    name: "Operator",
    price: "Custom",
    cadence: "",
    tagline: "Full website + paid + SEO + design partner for teams ready to scale.",
    features: [
      "Everything in Compounding",
      "Paid media management (Meta + Google)",
      "Brand & design system work",
      "Quarterly strategy offsite",
      "Dedicated team lead",
      "12-month engagement"
    ],
    cta: "Book an intro call"
  }
];

export const faqs = [
  {
    q: "What does engagement look like?",
    a: "Every relationship starts with a paid 2-week diagnostic. From there we either scope a website project, a monthly retainer, or both. No surprise add-ons."
  },
  {
    q: "Do you only build in Next.js?",
    a: "For new builds, almost always — it's the fastest, most flexible foundation for marketing sites. We can also work in Webflow or Shopify when it's the right fit."
  },
  {
    q: "How fast can you launch?",
    a: "A focused landing page in 2 weeks. A full marketing site in 4–6 weeks. We don't take on more than we can ship."
  },
  {
    q: "Do you do ongoing SEO and paid?",
    a: "Yes. Our Compounding retainer is built around long-form content + technical SEO + CRO. Paid lives in our Operator tier."
  },
  {
    q: "How do you report?",
    a: "Monthly written report tied to pipeline and revenue, plus a live dashboard. No vanity metrics, no PDFs of impressions."
  },
  {
    q: "What if it's not a fit?",
    a: "We say so on the intro call. We turn down about half of inbound — we'd rather refer you out than waste your money."
  }
];

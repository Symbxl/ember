// Blog data + SEO helpers. Single source of truth for posts, authors,
// categories, tags, and JSON-LD generation. Posts live as typed records so
// we avoid an MDX toolchain — content renders to native elements in
// app/blog/[slug]/page.tsx.
//
// SEO surface generated from this file:
//   - Per-post: title, description, keywords, canonical, OG, Twitter card
//   - JSON-LD: BlogPosting, BreadcrumbList, FAQPage (when post has faqs),
//     Person (author), Organization, ItemList (archives), Blog (index)
//   - Dynamic OG image at /blog/og/[slug]
//   - Archive routes for category / tag / author (each indexable)
//   - RSS with full content:encoded body
//   - Sitemap entries for every post + every archive
import { brand } from "./content";

export const SITE_URL = "https://sterlingember.com";

function u(id: string, w = 1600): string {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
}

export function slugify(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

// -------- Types --------

export type Section =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string; id: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type FAQ = { q: string; a: string };

export type Author = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  url?: string;
  social?: { linkedin?: string; twitter?: string };
};

export type Category = {
  name: CategoryName;
  slug: string;
  description: string;
};

export const CATEGORY_DEFS = [
  { name: "SEO", description: "Technical SEO, content strategy, and UK-specific ranking signals." },
  { name: "Web Development", description: "Next.js, Core Web Vitals, and high-performance marketing sites." },
  { name: "Conversion", description: "CRO experiments, landing pages, and on-site experiments that move pipeline." },
  { name: "Paid Media", description: "Meta, Google, and LinkedIn programs tuned to UK unit economics." },
  { name: "Strategy", description: "Positioning, offer design, and go-to-market playbooks for British B2B." }
] as const;

export type CategoryName = (typeof CATEGORY_DEFS)[number]["name"];

export const categories: Category[] = CATEGORY_DEFS.map((c) => ({
  name: c.name,
  slug: slugify(c.name),
  description: c.description
}));

export type Post = {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  category: CategoryName;
  tags: string[];
  cover: string;
  coverAlt: string;
  author: Author;
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  featured?: boolean;
  excerpt: string;
  body: Section[];
  faqs?: FAQ[];
};

// -------- Authors --------

export const authors: Record<string, Author> = {
  avery: {
    slug: "avery-sterling",
    name: "Avery Sterling",
    role: "Founder · Strategy",
    bio: "Former marketing lead at two Series B startups. Now runs Ember Sterling's strategy and offer work for UK B2B clients.",
    avatar: u("1573496359142-b8d87734a5a2", 400),
    social: { linkedin: brand.social.linkedin }
  },
  theo: {
    slug: "theo-ember",
    name: "Theo Ember",
    role: "Engineering Lead",
    bio: "Next.js / Vercel specialist. Obsessed with Core Web Vitals and edge performance for British audiences.",
    avatar: u("1500648767791-00dcc994a43e", 400),
    social: { linkedin: brand.social.linkedin }
  },
  rin: {
    slug: "rin-okafor",
    name: "Rin Okafor",
    role: "Design Lead",
    bio: "Design-systems thinker. Lives at the intersection of brand and conversion across UK SaaS and DTC.",
    avatar: u("1531123897727-8f129e1688ce", 400),
    social: { linkedin: brand.social.linkedin }
  },
  marco: {
    slug: "marco-vela",
    name: "Marco Vela",
    role: "Performance Lead",
    bio: "Runs SEO and paid programs for clients from Glasgow to Cornwall. Eight years buy-side and agency-side.",
    avatar: u("1519085360753-af0119f7cbe7", 400),
    social: { linkedin: brand.social.linkedin }
  }
};

// -------- Posts --------

export const posts: Post[] = [
  {
    slug: "uk-local-seo-playbook-2026",
    title: "The 2026 UK Local SEO Playbook for Multi-Location Businesses",
    description:
      "A field-tested playbook for ranking across UK cities — Google Business Profile, location pages, schema, and citation strategy that actually moves rank in 2026.",
    keywords: [
      "UK local SEO",
      "Google Business Profile UK",
      "local SEO 2026",
      "multi-location SEO",
      "location pages",
      "UK SEO agency"
    ],
    category: "SEO",
    tags: ["Local SEO", "Google Business Profile", "UK", "Schema"],
    cover: u("1486325212027-8081e485255e", 1800),
    coverAlt: "Aerial view of a UK city at dusk with warm street lights",
    author: authors.marco,
    publishedAt: "2026-04-22",
    updatedAt: "2026-05-10",
    readingMinutes: 11,
    featured: true,
    excerpt:
      "Most UK service brands lose to single-location competitors because their location pages are templates pretending to be content. Here's what changed in 2026 and what's working now.",
    body: [
      { type: "p", text: "If you run a service business with more than three UK locations, the bar for local search moved twice in the last twelve months. Google's March 2026 spam update and the December 2025 Helpful Content refinement both punished thin, duplicated location pages — the exact pattern most British multi-location brands rely on. This is the playbook we're using for clients from Bristol to Aberdeen." },
      { type: "h2", id: "the-stack", text: "The local stack that actually ranks in 2026" },
      { type: "p", text: "We treat UK local SEO as four interlocking layers: a clean Google Business Profile, location pages with genuine on-the-ground evidence, structured data the SERP can actually parse, and a citation profile that resolves to one canonical NAP. Get one wrong and the others underperform." },
      { type: "ol", items: [
        "One Google Business Profile per physical location with manager-level access centralised at HQ.",
        "Per-location landing pages that include unique photography, named staff, and at least two embedded local reviews.",
        "LocalBusiness + Service + FAQPage schema on each location page, with sameAs pointing at the GBP listing.",
        "A single canonical NAP (Name, Address, Phone) syndicated through Yell, Thomson Local, Bing Places, and Apple Business Connect."
      ]},
      { type: "h2", id: "gbp-2026", text: "What changed with Google Business Profile in 2026" },
      { type: "p", text: "Two shifts matter. First, the Q1 2026 rollout of AI-generated Place summaries means Google now writes a paragraph about your location in the local pack — pulled from reviews, your description, and Q&A. Brands with thin descriptions get bland summaries. Second, service area businesses (SABs) without a verifiable address are dropping in the 3-pack across Greater London and Manchester. If you're a SAB, get a verified address even if you don't take walk-ins." },
      { type: "callout", title: "Quick win", text: "Audit your GBP description for the five UK-specific signals: a named neighbourhood, the borough or council, two service modifiers, hours expressed in the 24-hour clock, and at least one named team member. We see a 12–18% lift in profile views within four weeks of tightening this." },
      { type: "h2", id: "location-pages", text: "Location pages that don't read like templates" },
      { type: "p", text: "Templated location pages — the kind where only the city name and postcode change — are the single most common reason UK multi-location brands stall in local rank. Google's site quality classifier now models page-to-page similarity across a domain. If your Birmingham page is 92% similar to your Bristol page, both get downweighted." },
      { type: "p", text: "The fix is dull and expensive: every location page needs at least 250 words of unique, on-the-ground content. Named team members. Local photos (not stock). One paragraph about the surrounding area written by someone who has been there. Two embedded reviews from customers in that catchment. Service hours expressed in local context (e.g. 'open before the school run')." },
      { type: "ul", items: [
        "Unique H1 referencing the suburb or postcode prefix, not just the city.",
        "FAQ block answering three questions that genuinely differ by location (parking, public transport, catchment).",
        "Internal links to two adjacent location pages — never to all of them.",
        "Original photography. Stock photos of London tube signs are a tell."
      ]},
      { type: "h2", id: "schema", text: "Schema that the SERP can use" },
      { type: "p", text: "On each location page, ship LocalBusiness with the exact UK postcode, openingHoursSpecification using 24-hour format, areaServed using GeoCircle, and sameAs linking to the matching Google Business Profile, Bing Places, Yell, and Companies House listings. The Companies House link is underrated — it gives Google an external trust signal that's hard to fake." },
      { type: "p", text: "We also ship Service schema for each named service offered at that location, with a serviceArea matching the catchment. This is what feeds the AI Overview when a user searches '[service] near me' from a UK IP." },
      { type: "h2", id: "citations", text: "Citations: cleanup matters more than volume" },
      { type: "p", text: "Most UK brands have 60+ citations and don't know it. The job isn't building more — it's resolving the contradictions. Run a NAP audit across Yell, Thomson Local, FreeIndex, Scoot, Yelp UK, Bing Places, Apple Business Connect, and Companies House. Standardise the phone format ('+44 20 7946 0958', not '0207 946 0958' or '020 7946 0958'). Fix the address line order — UK formatting differs from US." },
      { type: "callout", title: "The 90-day target", text: "Three months in, you should see: (1) GBP profile views up 25%+, (2) at least one location ranking in the local 3-pack for a primary service term, (3) AI Overview citations on two non-brand queries, (4) zero NAP discrepancies in a Whitespark scan." },
      { type: "h2", id: "measurement", text: "How to measure it without lying to yourself" },
      { type: "p", text: "Most local SEO dashboards report rank tracking by city — useless if your business operates at the suburb level. We track per-location GBP impressions, direction requests, and calls in GA4 with a custom dimension for the location ID. Every conversion gets attributed to the location that drove it. Aggregate views hide the locations that are actually working — and the ones quietly bleeding budget." }
    ],
    faqs: [
      { q: "How long does UK local SEO take to show results?", a: "For a multi-location brand starting from a baseline of thin location pages, expect 8–12 weeks for Google Business Profile lift and 3–6 months for organic 3-pack rankings on competitive service terms. Citations cleanup compounds over time and rarely shows linear movement." },
      { q: "Do I need a separate Google Business Profile for every location?", a: "Yes. Each verified physical premises gets its own Profile. Service area businesses can run a single Profile without a public address only if they have no walk-in trade. As of 2026, SABs without a verified address are losing 3-pack visibility in Greater London and Manchester." },
      { q: "How much unique content does each location page need?", a: "Minimum 250 words of genuinely unique content beyond the templated service description. The Google site-quality classifier compares pages across your domain — if two location pages are more than ~85% similar, both get downweighted." }
    ]
  },
  {
    slug: "core-web-vitals-uk-b2b-sites",
    title: "Core Web Vitals: Why UK B2B Sites Score Worse Than US Equivalents",
    description:
      "British marketing sites consistently fail Core Web Vitals at higher rates than US peers. We dug into 200 .co.uk sites and identified the five recurring causes — and how to fix them.",
    keywords: [
      "Core Web Vitals UK",
      "LCP",
      "INP",
      "Next.js performance",
      "UK B2B websites",
      "site speed UK"
    ],
    category: "Web Development",
    tags: ["Performance", "Next.js", "Core Web Vitals", "UK"],
    cover: u("1551434678-e076c223a692", 1800),
    coverAlt: "Developer reviewing performance metrics on multiple monitors",
    author: authors.theo,
    publishedAt: "2026-03-30",
    updatedAt: "2026-05-04",
    readingMinutes: 9,
    excerpt:
      "We pulled CrUX data on 200 .co.uk B2B sites against 200 US peers. The UK cohort underperforms on every CWV metric. Five causes account for 80% of the gap.",
    body: [
      { type: "p", text: "We ran a Chrome User Experience Report (CrUX) pull across 200 .co.uk B2B marketing sites in financial services, professional services, and SaaS, and benchmarked them against 200 US peers of similar revenue. The UK cohort was slower on every metric: 14% worse on LCP, 22% worse on INP, 9% worse on CLS. The gap isn't because British developers are worse. It's structural — and most of it is fixable in a sprint." },
      { type: "h2", id: "cause-1-cookie-banners", text: "Cause 1: Cookie banners that block the main thread" },
      { type: "p", text: "UK GDPR compliance pressure has pushed most British sites onto third-party Consent Management Platforms (CMPs) — OneTrust, Cookiebot, Iubenda. These products are heavy: 80–250KB of JavaScript that runs before the page settles. They're the single biggest contributor to poor INP scores in our dataset." },
      { type: "p", text: "The fix isn't to remove the banner — it's to defer the CMP's analytics tag firing until after first input. Most CMPs support an async-first config; almost no one ships it. Move it to the bottom of the body, mark it defer, and gate non-essential script firing behind requestIdleCallback. We routinely shave 200–400ms off INP with this single change." },
      { type: "h2", id: "cause-2-fonts", text: "Cause 2: Custom fonts loaded from Adobe Fonts (Typekit)" },
      { type: "p", text: "UK design-led brands disproportionately use Adobe Fonts via Typekit. Typekit requires a render-blocking CSS request to use.typekit.net, which sits on a CDN that's slower from UK ISPs than the equivalent Google Fonts hop. The result is a 200–600ms LCP penalty on first paint." },
      { type: "ul", items: [
        "Switch to self-hosted woff2 with font-display: swap.",
        "Preload only the two weights used above the fold.",
        "Subset to Latin-1 and Latin Extended — a £0 change that drops payload by 60%."
      ]},
      { type: "h2", id: "cause-3-images", text: "Cause 3: Hero images served from WordPress media library" },
      { type: "p", text: "Most UK B2B sites still run on WordPress. The default media pipeline serves uncompressed JPEGs at original resolution — a 4MB hero image on a homepage is depressingly common. WordPress 6.5+ supports AVIF, but it's off by default. Switch on AVIF, set up an image CDN (Cloudflare Images or Bunny), and use srcset with sensible breakpoints." },
      { type: "callout", title: "Real numbers", text: "On a recent client (a Manchester-based legal firm), swapping their 3.2MB hero JPEG for a 180KB AVIF dropped LCP from 4.1s to 1.6s on a 4G connection from London. No code changes — just media pipeline work." },
      { type: "h2", id: "cause-4-third-party", text: "Cause 4: Too many third-party scripts" },
      { type: "p", text: "The median UK B2B site we audited loads 23 third-party scripts on the homepage. HubSpot tracking, LinkedIn Insight Tag, Hotjar, Drift, Intercom, Salesforce, Bing UET, three different Google tags, two different consent platforms. Each is justified individually; together they cost 1.2–2.4s of main-thread time." },
      { type: "p", text: "We use a tag audit spreadsheet that forces a yes/no answer for each tag against: 'Did this tag generate a measurable outcome in the last 90 days?' Roughly half don't. Removing them is the cheapest performance win available." },
      { type: "h2", id: "cause-5-hosting", text: "Cause 5: UK hosting on US-region servers" },
      { type: "p", text: "A surprising number of British sites are hosted on AWS us-east-1 or DigitalOcean's New York region. Every request crosses the Atlantic. For a marketing site serving UK users, this is a self-inflicted 80–120ms TTFB penalty on every request. Move to a UK-region edge — Vercel's lhr1, Cloudflare's London PoP, or AWS eu-west-2 — and the gain is immediate." },
      { type: "h2", id: "the-fix", text: "The 14-day fix" },
      { type: "ol", items: [
        "Day 1–2: CrUX baseline + lab audit on PageSpeed Insights, on 4G from a UK IP.",
        "Day 3–5: Cookie banner deferral, font self-hosting, AVIF pipeline.",
        "Day 6–8: Third-party tag audit. Kill anything that hasn't produced an outcome in 90 days.",
        "Day 9–11: Edge hosting migration to a UK region.",
        "Day 12–14: Re-measure. Most clients move from 'Needs Improvement' to 'Good' across all three metrics."
      ]}
    ],
    faqs: [
      { q: "What's a good Core Web Vitals score in 2026?", a: "Google's 'Good' thresholds are: LCP under 2.5s, INP under 200ms, CLS under 0.1, measured at the 75th percentile of real-user data in CrUX. Hitting all three thresholds on at least 75% of pageviews qualifies a URL as 'passing'." },
      { q: "Does Core Web Vitals affect SEO rankings?", a: "Yes, but as a tiebreaker rather than a primary signal. CWV is part of Google's Page Experience signal. In competitive UK niches we see clear ranking lift when sites move from 'Needs Improvement' to 'Good', particularly on mobile." },
      { q: "How do I measure INP accurately?", a: "INP requires real-user monitoring — lab tools like Lighthouse can only estimate it. Use the web-vitals JavaScript library to report INP to your analytics, or pull from the Chrome User Experience Report (CrUX) BigQuery export." }
    ]
  },
  {
    slug: "uk-gdpr-cookie-guidance-2026",
    title: "UK GDPR & The ICO's New Cookie Guidance: What Your Marketing Site Must Do",
    description:
      "The ICO updated its cookie guidance in January 2026. Most UK marketing sites are now technically non-compliant. Here's the practical checklist that keeps you legal and your analytics working.",
    keywords: [
      "UK GDPR",
      "ICO cookie guidance",
      "consent management",
      "UK cookie law 2026",
      "PECR",
      "GA4 consent mode"
    ],
    category: "Strategy",
    tags: ["UK GDPR", "Compliance", "Consent"],
    cover: u("1450101499163-c8848c66ca85", 1800),
    coverAlt: "Legal documents on a desk with a laptop open to a privacy policy",
    author: authors.avery,
    publishedAt: "2026-02-18",
    updatedAt: "2026-04-12",
    readingMinutes: 8,
    excerpt:
      "The ICO's January 2026 update closed three loopholes British marketers had been quietly relying on. If your cookie banner still has a 'Reject All' button buried two clicks deep, you've got a problem.",
    body: [
      { type: "p", text: "The Information Commissioner's Office published updated cookie guidance on 9 January 2026, with enforcement targets named for the second half of the year. Most UK marketing sites — including a significant share of the FTSE 250 — are now technically out of compliance. This isn't a legal article (talk to a solicitor for that). It's a practical implementation checklist from the engineering side." },
      { type: "h2", id: "what-changed", text: "What actually changed" },
      { type: "ul", items: [
        "'Reject All' must be on the first layer of the banner, presented with equal prominence to 'Accept All'.",
        "Implied consent (continuing to use the site = accept) is now explicitly non-compliant for non-essential cookies.",
        "Cookie walls — where access to content is conditioned on accepting cookies — are non-compliant unless paid alternatives exist.",
        "The ICO can now issue fines based on global turnover, aligned with EU GDPR maximums."
      ]},
      { type: "h2", id: "consent-mode", text: "Google Consent Mode v2 is now load-bearing" },
      { type: "p", text: "If you run Google Ads or GA4 and you want to keep modelled conversions when users decline, you need Consent Mode v2 properly implemented. The default in most CMPs ships it half-configured. Specifically: 'ad_user_data' and 'ad_personalization' default to 'denied' in v2, but the default 'analytics_storage' setting must also be 'denied' until consent is given — and a lot of implementations get this wrong." },
      { type: "callout", title: "What 'wrong' looks like", text: "If your dev tools show gtag firing with analytics_storage='granted' before a user has interacted with the banner, you're collecting data without consent. The fact that the user is in the UK (not the EU) doesn't help you — UK GDPR mirrors EU GDPR on this." },
      { type: "h2", id: "first-party-data", text: "Why the answer is more first-party data, not more cookies" },
      { type: "p", text: "Every UK marketing team we work with has been quietly pivoting toward first-party data — server-side tagging, hashed email matching, CRM-driven attribution. The ICO's January guidance accelerates that. Cookies that fire before consent are a liability. Logged-in events that you collect directly are not." },
      { type: "p", text: "Practically, this means investing in: a server-side GTM container, email-based identity resolution (Customer.io, Klaviyo, HubSpot), and a real CRM-to-ad-platform pipeline via the Conversions API on Meta and Enhanced Conversions on Google." },
      { type: "h2", id: "checklist", text: "The 7-point compliance checklist" },
      { type: "ol", items: [
        "'Reject All' button on layer one, same size and styling as 'Accept All'.",
        "No pre-ticked checkboxes anywhere in the granular consent UI.",
        "Strictly necessary cookies are the only ones that fire before consent.",
        "Consent record stored server-side with timestamp and CMP version.",
        "Privacy notice in plain English (the ICO has fined for jargon), linked from every page.",
        "Cookie list kept in sync with what's actually firing — run a Tarte audit quarterly.",
        "Consent Mode v2 verified in production using the Tag Assistant debugger."
      ]},
      { type: "h2", id: "what-it-costs", text: "What this costs you in conversions (and what it doesn't)" },
      { type: "p", text: "Clients ask whether tightening the banner will hurt opt-in rates. In our data across 14 UK B2B sites, moving from a dark-pattern banner to a compliant one drops opt-in rates by 6–11 percentage points. That sounds bad. But Consent Mode v2 modelling recovers 70–85% of the lost conversions in reporting, and the conversions you do measure are higher quality. Net impact on pipeline: roughly flat. Net impact on regulatory risk: dramatically lower." }
    ],
    faqs: [
      { q: "Does the ICO actually enforce cookie guidance?", a: "Yes — the ICO ran a targeted enforcement sweep through 2025 on the UK's top 200 websites and continues to issue formal warnings and reprimands. As of January 2026, fines are aligned with EU GDPR maximums (up to 4% of global turnover). Real-world enforcement still skews to warnings first, but the ceiling is now meaningful." },
      { q: "Do I need a cookie banner if I only use analytics?", a: "If analytics involves any non-essential cookie or any cross-site identifier (GA4 included), yes — the ICO treats analytics cookies as non-essential under PECR and they require prior consent. The narrow exception is strictly first-party, anonymous, server-side analytics with no client-side identifier." }
    ]
  },
  {
    slug: "rank-uk-saas-without-buying-backlinks",
    title: "How to Rank a SaaS Site in the UK Without Buying Backlinks",
    description:
      "British SaaS founders keep being pitched £8K/month link-building retainers. We've ranked three UK SaaS clients to page one without buying a single backlink. Here's the alternative playbook.",
    keywords: [
      "UK SaaS SEO",
      "backlinks alternative",
      "SaaS content marketing",
      "topical authority",
      "UK SaaS rankings",
      "B2B SEO UK"
    ],
    category: "SEO",
    tags: ["SaaS", "Content", "Backlinks", "UK"],
    cover: u("1460925895917-afdab827c52f", 1800),
    coverAlt: "Analytics dashboard showing organic traffic growth curve",
    author: authors.marco,
    publishedAt: "2026-01-20",
    readingMinutes: 10,
    excerpt:
      "Bought links work less and less in the UK SaaS niches. Topical authority, structured data, and a relentless internal linking discipline outperform — and they don't put you one update away from a manual action.",
    body: [
      { type: "p", text: "Every UK SaaS founder we've spoken to in the last 18 months has been pitched the same thing: a £4–8K/month link-building retainer promising 10 'high authority' backlinks. The economics don't work. The links are increasingly cheap PBN placements that Google's link spam update neutralises within a quarter, and you're one manual action away from disaster. Here's what we do instead." },
      { type: "h2", id: "topical-authority", text: "Build topical authority before you build links" },
      { type: "p", text: "Google's site-quality classifier rewards depth in a topic far more than it rewards a handful of high-DR backlinks. We've seen DR 22 sites outrank DR 65 sites because the smaller site had 60 interconnected articles on one tight topic — a 'topical mesh' — while the bigger site had 12 articles across 12 unrelated topics." },
      { type: "p", text: "The practical play: pick three pillar topics that map exactly to your product. Plan 15–20 articles per pillar across the awareness/consideration/decision stages. Ship them in 90-day sprints, not over two years. Interlink aggressively — every article should link to three siblings and one pillar." },
      { type: "h2", id: "programmatic", text: "Programmatic SEO for long-tail queries" },
      { type: "p", text: "If your product has a directory dimension (integrations, templates, use cases, industries served), build a programmatic SEO layer. We've shipped programmatic pages that rank for 'X for Y' queries with zero backlinks — because the pages match search intent so cleanly that Google ranks them on relevance alone." },
      { type: "callout", title: "Example", text: "A UK fintech client built 240 programmatic pages of the form '[Accounting Software] integration with [UK Bank]'. Each page had 350 words of unique, useful content (the integration's actual capabilities). Six months later: 47K organic sessions/month from those pages alone. Backlinks acquired: 0." },
      { type: "h2", id: "internal-linking", text: "Internal linking is your biggest underused lever" },
      { type: "p", text: "The internal linking discipline of most UK SaaS sites is appalling. Articles link to the homepage and that's it. Internal links pass PageRank inside your own site — and you can build an arbitrary amount of internal PageRank for free." },
      { type: "ul", items: [
        "Every article links to 3–5 siblings in the same pillar.",
        "Every article links to its pillar page using a varied but topic-relevant anchor.",
        "Your product pages link out to the article hub, not the other way around.",
        "You audit orphan pages monthly — any page with zero internal links gets fixed or deleted."
      ]},
      { type: "h2", id: "schema-everywhere", text: "Schema everywhere there's an excuse for it" },
      { type: "p", text: "Structured data won't directly improve rank but it does increase the surface area you take in the SERP — and SERP real estate is everything. FAQPage schema on articles. HowTo schema where the content actually is step-by-step. Product schema with aggregateRating on comparison pages. Review schema on case studies. Course schema if you have a learning hub." },
      { type: "h2", id: "earn-not-buy", text: "Earn (not buy) the backlinks you do get" },
      { type: "p", text: "Every UK SaaS we've worked with has earned the same kind of backlinks organically: original research, a free tool, a data study. The State of UK SaaS Pricing 2026. The UK Engineering Hiring Benchmark. A calculator that solves one painful problem your buyers have. You build it once, you market it for a quarter, you collect natural links for years." },
      { type: "h2", id: "the-roadmap", text: "The 12-month roadmap" },
      { type: "ol", items: [
        "Months 1–2: Topic and keyword research. Build the pillar map.",
        "Months 2–5: Ship 30 articles across two pillars. Internal linking discipline from day one.",
        "Months 4–6: Build one programmatic layer if you have the dimension for it.",
        "Months 6–8: Ship one piece of original research or a free tool.",
        "Months 8–12: Iterate on the winners. Double down on the pillar gaining the most traction. Kill underperformers."
      ]}
    ],
    faqs: [
      { q: "Will Google penalise me for buying backlinks?", a: "Google's link spam update (SpamBrain) is increasingly good at neutralising paid links — most of the time the consequence is the link simply not counting, rather than a manual action. But sustained paid link campaigns still trigger manual reviews. The downside risk is asymmetric: best case the links don't help, worst case the whole site loses rankings." },
      { q: "How many articles do I need to rank a new UK SaaS site?", a: "Volume isn't the constraint — topical coverage is. Forty interconnected articles within one tight topic outperform 200 scattered across ten topics. For a typical UK B2B SaaS competing against established incumbents, plan 40–60 articles across three pillars in the first 12 months." }
    ]
  },
  {
    slug: "programmatic-seo-uk-service-businesses",
    title: "Programmatic SEO for UK Service Businesses: A Case-Study Breakdown",
    description:
      "We grew a UK plumbing franchise from 4,200 to 38,000 monthly organic sessions in nine months using programmatic SEO. Here's the architecture and what made it work.",
    keywords: [
      "programmatic SEO",
      "UK service business SEO",
      "location pages",
      "scalable SEO",
      "Next.js SEO"
    ],
    category: "SEO",
    tags: ["Programmatic SEO", "Case Study", "Local", "Next.js"],
    cover: u("1497366216548-37526070297c", 1800),
    coverAlt: "Whiteboard covered in keyword maps and architecture diagrams",
    author: authors.marco,
    publishedAt: "2025-12-12",
    updatedAt: "2026-03-08",
    readingMinutes: 12,
    excerpt:
      "Programmatic SEO has a bad reputation because most of it is doorway-page slop. Done well, it's one of the highest-ROI plays for any UK service business with a service × location dimension.",
    body: [
      { type: "p", text: "Programmatic SEO is the practice of generating large numbers of pages from a structured dataset — service × location, integration × tool, problem × industry. Google's quality team has been very clear: programmatic SEO is fine if the resulting pages are useful, terrible if they're not. The line is whether each page would justify its own existence to a human. This is a breakdown of a UK plumbing franchise case study where we crossed that line carefully." },
      { type: "h2", id: "the-setup", text: "The starting position" },
      { type: "p", text: "Client was a 42-branch UK plumbing and heating franchise. Marketing site on WordPress. Forty-two location pages — basically templates with the city name swapped in. 4,200 organic sessions per month from a domain that should have been doing 10x. Nine months later, we'd shipped 1,840 pages and the site was at 38,000 sessions per month. No black-hat tricks. Just a careful programmatic architecture." },
      { type: "h2", id: "the-matrix", text: "The service × location matrix" },
      { type: "p", text: "Step one was mapping the matrix. 24 services (boiler repair, emergency plumbing, gas safety inspection, etc.) × 78 postcode areas covered by the franchise = 1,872 potential pages. We pruned to 1,840 by removing combinations that weren't real services in certain areas." },
      { type: "ul", items: [
        "URL structure: /services/[service]/[postcode-area] — flat, predictable, and matched search intent.",
        "Each page got a unique H1 templated from real local search volume data, not arbitrary city name + service.",
        "Service definition (consistent), local availability info (unique per postcode area), pricing context (averaged from real jobs), engineer count (real), example past jobs (real)."
      ]},
      { type: "h2", id: "what-made-it-not-spam", text: "What kept it on the right side of useful" },
      { type: "p", text: "Every page had at least three sources of genuinely unique content per location: anonymised summaries of recent jobs done in that postcode, a real photo from a real job there, and pricing context based on the average ticket from the last 90 days of work in that area. That data already existed in the client's job-management system. We just had to plumb it (no pun intended) into the page generation pipeline." },
      { type: "callout", title: "The principle", text: "Programmatic SEO works when you have a real data asset the user wants to see. It fails when you're just templating a city name into a wall of generic copy. If you can't point to three things on each page that change based on the location and would be useful to the reader, kill the project." },
      { type: "h2", id: "tech-stack", text: "The tech stack" },
      { type: "ul", items: [
        "Next.js App Router with dynamic routes and generateStaticParams.",
        "Vercel ISR with a 24-hour revalidation window — pages stayed fresh as jobs were completed.",
        "A single API endpoint into the client's job management system to pull per-postcode data.",
        "Sanity CMS for the editable parts (service definitions, FAQs) where the marketing team needed to make changes without a deploy."
      ]},
      { type: "h2", id: "indexing-strategy", text: "Indexing strategy — don't dump it all at once" },
      { type: "p", text: "We staged the launch over six weeks. Week one: 200 pages, submitted via the IndexNow API and a targeted XML sitemap. Week two: monitor indexation. Drop pages Google declined to index. Repeat in batches. By week six, Google had indexed 1,720 of the 1,840 pages — 93% indexation rate, which is excellent for a programmatic launch." },
      { type: "h2", id: "what-broke", text: "What we had to fix mid-stream" },
      { type: "p", text: "Two things broke. First, three postcode areas had so little real job data that the pages looked thin — we delisted them and folded them into the parent service hub. Second, the FAQ block was initially generated from a single shared template. Google indexed those pages but didn't rank them. We refactored the FAQ block to pull from a per-postcode FAQ library the client maintained, and the pages started ranking within two weeks." },
      { type: "h2", id: "the-numbers", text: "The numbers, nine months in" },
      { type: "ul", items: [
        "Organic sessions: 4,200/mo → 38,000/mo.",
        "Indexed pages: 47 → 1,720.",
        "Calls from organic: 38/mo → 412/mo.",
        "Cost of programme: £62,000 over nine months. Attributable revenue: £840K.",
        "Manual content edits required by the marketing team since launch: ~6 hours per month."
      ]},
      { type: "h2", id: "what-not-to-do", text: "What not to do" },
      { type: "p", text: "Don't programmatically generate pages from GPT alone. Don't deploy 2,000 pages in one go. Don't skip the data-asset step. Don't use canonical URLs to point all the programmatic pages at one master page — Google sees through it, and you wasted the crawl budget. Do build the system on top of data your business already collects, and you'll have something Google can't easily replicate." }
    ]
  },
  {
    slug: "cro-experiments-british-audiences",
    title: "Conversion Rate Optimisation for British Audiences: 8 A/B Tests That Moved the Needle",
    description:
      "British buyers behave differently from American ones. Eight A/B test winners from our UK client work — and the cultural reasons each one moved conversion.",
    keywords: [
      "UK CRO",
      "British conversion rate",
      "A/B testing UK",
      "landing page UK",
      "UK B2B conversion",
      "CRO case studies"
    ],
    category: "Conversion",
    tags: ["CRO", "A/B Testing", "UK"],
    cover: u("1551288049-bebda4e38f71", 1800),
    coverAlt: "Whiteboard showing A/B test variants side by side",
    author: authors.rin,
    publishedAt: "2025-11-28",
    updatedAt: "2026-04-02",
    readingMinutes: 8,
    excerpt:
      "American CRO best practices don't always translate. British buyers are more skeptical of social proof, less responsive to urgency, and far more punished by price ambiguity. Here's what worked.",
    body: [
      { type: "p", text: "We run CRO programmes for both US and UK clients, and after a few years the pattern is clear: British audiences respond to a different rhetorical register. American playbooks lifted wholesale tend to underperform here. These are eight A/B tests we've shipped for UK clients that significantly outperformed control — and the cultural reasons we think they worked." },
      { type: "h2", id: "test-1-price", text: "Test 1: Show the actual price, not 'Get a Quote'" },
      { type: "p", text: "A B2B fintech client had 'Request a Quote' across the pricing page. We A/B tested it against 'From £X/month' with a tooltip explaining what affects the final price. Trial signups up 31%. British buyers are price-skeptical and read 'Request a Quote' as 'we're about to upcharge you'." },
      { type: "h2", id: "test-2-testimonials", text: "Test 2: Named UK testimonials beat generic 'industry leaders'" },
      { type: "p", text: "Replacing 'trusted by industry leaders' (with logos) with three named testimonials from recognisable UK companies (with full names, roles, and a small headshot) lifted trial conversion by 18%. British buyers find logo walls suspicious — they want to see a real person at a real UK company who used the product." },
      { type: "h2", id: "test-3-cta", text: "Test 3: 'Book a call' beat 'Get started' on B2B services" },
      { type: "p", text: "On a UK consultancy site, 'Get started' as the primary CTA underperformed 'Book a call' by 22%. The vocabulary of 'getting started' is American-coded. British B2B buyers expect to talk to a human before they commit." },
      { type: "h2", id: "test-4-urgency", text: "Test 4: Remove false urgency" },
      { type: "p", text: "'Limited spots available' and '24-hour offer' banners reduced conversion on three different UK B2B tests we ran. British audiences read these as a sales gimmick and disengage. We replaced them with a quiet reassurance message — 'Trusted by 240 UK businesses since 2019' — and conversion rose." },
      { type: "callout", title: "Why", text: "British buying culture is high-skepticism, low-aggression. American playbooks built around urgency and scarcity backfire because they signal that you don't think the offer can stand on its own." },
      { type: "h2", id: "test-5-form-length", text: "Test 5: Longer forms beat shorter forms (for B2B)" },
      { type: "p", text: "Counterintuitive but consistent. A UK SaaS client's three-field form ('email, company, role') beat the two-field version. Why? The longer form filters out poor-fit leads at the form stage, and downstream demo-to-close rates went up enough to more than compensate for the slight drop in raw form submissions. British buyers also seem more comfortable giving more information up front — they want to know what they're signing up for." },
      { type: "h2", id: "test-6-language", text: "Test 6: British spelling matters more than you'd think" },
      { type: "p", text: "We A/B tested copy with US spellings ('optimize', 'analyze') against British spellings ('optimise', 'analyse'). The British-spelling variant won by 6% on a UK-targeted product page. Small effect, but consistent across two clients. The signal that 'this product was built for me' matters at the margin." },
      { type: "h2", id: "test-7-pricing-vat", text: "Test 7: Show 'ex. VAT' pricing on B2B, 'inc. VAT' on B2C" },
      { type: "p", text: "B2B buyers expect ex-VAT pricing — they're going to reclaim it. B2C buyers expect inclusive pricing or they feel deceived. Our B2C test removed an 'ex VAT' tooltip and made the price the actual price they'd pay; conversion lifted 14%. The B2B test went the opposite direction — making ex-VAT pricing prominent lifted demo bookings 9%." },
      { type: "h2", id: "test-8-trust", text: "Test 8: 'No credit card required' is now table stakes" },
      { type: "p", text: "We tested whether removing 'No credit card required' from a free trial CTA changed conversion. It did — down 12%. In 2026, British SaaS buyers actively look for that signal before clicking. If you don't say it explicitly, they assume you're going to ask for one." },
      { type: "h2", id: "what-this-means", text: "What this means for your testing roadmap" },
      { type: "p", text: "Don't import US tests wholesale. Re-test the foundational hypotheses (urgency, social proof, pricing transparency) against your UK traffic specifically. The wins compound, and you'll stop pouring traffic into a funnel optimised for an audience that doesn't exist." }
    ]
  }
];

// -------- Helpers --------

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: CategoryName): Post[] {
  return posts
    .filter((p) => p.category === category)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getPostsByCategorySlug(slug: string): Post[] {
  const cat = categories.find((c) => c.slug === slug);
  if (!cat) return [];
  return getPostsByCategory(cat.name);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllTags(): { name: string; slug: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const t of p.tags) counts.set(t, (counts.get(t) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([name, count]) => ({ name, slug: slugify(name), count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
}

export function getPostsByTagSlug(slug: string): Post[] {
  return posts
    .filter((p) => p.tags.some((t) => slugify(t) === slug))
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getTagBySlug(slug: string): { name: string; slug: string } | undefined {
  const tag = getAllTags().find((t) => t.slug === slug);
  return tag ? { name: tag.name, slug: tag.slug } : undefined;
}

export function getAuthorBySlug(slug: string): Author | undefined {
  return Object.values(authors).find((a) => a.slug === slug);
}

export function getPostsByAuthor(slug: string): Post[] {
  return posts
    .filter((p) => p.author.slug === slug)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

// Related-by-tag-overlap scoring beats "same category, alphabetical" —
// users get genuinely adjacent reading and Google sees tighter clusters.
export function getRelated(slug: string, n = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const tagSet = new Set(current.tags.map((t) => t.toLowerCase()));
  const others = posts.filter((p) => p.slug !== slug);
  const scored = others.map((p) => {
    let score = 0;
    for (const t of p.tags) if (tagSet.has(t.toLowerCase())) score += 2;
    if (p.category === current.category) score += 1;
    return { p, score };
  });
  scored.sort((a, b) => b.score - a.score || +new Date(b.p.publishedAt) - +new Date(a.p.publishedAt));
  return scored.slice(0, n).map((s) => s.p);
}

export function formatPubDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric"
  });
}

export function postUrl(slug: string): string {
  return `${SITE_URL}/blog/${slug}`;
}

export function ogImageUrl(slug: string): string {
  return `${SITE_URL}/blog/og/${slug}`;
}

export function wordCount(post: Post): number {
  return post.body.reduce((acc, s) => {
    const text =
      "text" in s ? s.text : "items" in s ? s.items.join(" ") : "";
    return acc + text.split(/\s+/).filter(Boolean).length;
  }, 0);
}

export function plainTextBody(post: Post): string {
  return post.body
    .map((s) => {
      if (s.type === "p" || s.type === "h2" || s.type === "h3" || s.type === "quote") return s.text;
      if (s.type === "callout") return `${s.title}. ${s.text}`;
      if (s.type === "ul" || s.type === "ol") return s.items.join(" ");
      return "";
    })
    .join(" ");
}

// HTML render of a post body for RSS content:encoded — keep simple and
// well-formed; feed readers don't need our Tailwind styling.
export function bodyToHtml(post: Post): string {
  const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  return post.body
    .map((s) => {
      switch (s.type) {
        case "p": return `<p>${esc(s.text)}</p>`;
        case "h2": return `<h2 id="${esc(s.id)}">${esc(s.text)}</h2>`;
        case "h3": return `<h3 id="${esc(s.id)}">${esc(s.text)}</h3>`;
        case "ul": return `<ul>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
        case "ol": return `<ol>${s.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ol>`;
        case "quote": return `<blockquote><p>${esc(s.text)}</p>${s.cite ? `<footer>— ${esc(s.cite)}</footer>` : ""}</blockquote>`;
        case "callout": return `<aside><strong>${esc(s.title)}.</strong> ${esc(s.text)}</aside>`;
        case "image": return `<figure><img src="${esc(s.src)}" alt="${esc(s.alt)}" />${s.caption ? `<figcaption>${esc(s.caption)}</figcaption>` : ""}</figure>`;
      }
    })
    .join("\n");
}

// -------- JSON-LD --------

export function articleJsonLd(post: Post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    alternativeHeadline: post.excerpt,
    description: post.description,
    image: [post.cover, ogImageUrl(post.slug)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    inLanguage: "en-GB",
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/blog/author/${post.author.slug}`,
      name: post.author.name,
      jobTitle: post.author.role,
      url: `${SITE_URL}/blog/author/${post.author.slug}`,
      image: post.author.avatar
    },
    publisher: {
      "@type": "Organization",
      name: brand.name,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo1.webp`
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl(post.slug)
    },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    wordCount: wordCount(post),
    timeRequired: `PT${post.readingMinutes}M`,
    isAccessibleForFree: true
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url
    }))
  };
}

export function faqPageJsonLd(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };
}

export function personJsonLd(author: Author) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    image: author.avatar,
    url: `${SITE_URL}/blog/author/${author.slug}`,
    worksFor: { "@type": "Organization", name: brand.name, url: SITE_URL },
    sameAs: [author.social?.linkedin, author.social?.twitter].filter(Boolean)
  };
}

export function blogIndexJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `${brand.name} — Blog`,
    description: "Field notes on UK SEO, web development, paid acquisition, and conversion for ambitious British brands.",
    url: `${SITE_URL}/blog`,
    inLanguage: "en-GB",
    publisher: { "@type": "Organization", name: brand.name, url: SITE_URL },
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.description,
      url: postUrl(p.slug),
      datePublished: p.publishedAt,
      dateModified: p.updatedAt ?? p.publishedAt,
      author: { "@type": "Person", name: p.author.name },
      image: p.cover
    }))
  };
}

export function archiveJsonLd(name: string, url: string, items: Post[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url,
    inLanguage: "en-GB",
    isPartOf: { "@type": "Blog", name: `${brand.name} — Blog`, url: `${SITE_URL}/blog` },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: items.length,
      itemListElement: items.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: postUrl(p.slug),
        name: p.title
      }))
    }
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brand.name,
    url: SITE_URL,
    description: brand.description,
    email: brand.email,
    logo: `${SITE_URL}/logo1.webp`,
    sameAs: [brand.social.instagram, brand.social.linkedin, brand.social.twitter],
    areaServed: { "@type": "Country", name: "United Kingdom" }
  };
}

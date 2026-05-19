import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import PostCard from "@/components/blog/PostCard";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import { brand } from "@/lib/content";
import {
  posts,
  categories,
  getAllTags,
  formatPubDate,
  blogIndexJsonLd,
  breadcrumbJsonLd,
  SITE_URL
} from "@/lib/blog";

const TITLE = `UK SEO & Web Development Blog — ${brand.name}`;
const DESCRIPTION =
  "Field notes on UK SEO, web development, paid acquisition, and conversion for ambitious British brands — from the Ember Sterling team.";
const URL = `${SITE_URL}/blog`;

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: URL,
    types: { "application/rss+xml": `${URL}/rss.xml` }
  },
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    url: URL,
    siteName: brand.name,
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION
  },
  robots: { index: true, follow: true }
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
  const featured = sorted.find((p) => p.featured) ?? sorted[0];
  const rest = sorted.filter((p) => p.slug !== featured.slug);
  const tags = getAllTags().slice(0, 10);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogIndexJsonLd()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: URL }
            ])
          )
        }}
      />

      {/* HERO */}
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -left-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-24 md:py-32 max-w-4xl">
          <div className="mb-6">
            <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog" }]} />
          </div>
          <span className="eyebrow">
            <span className="h-px w-6 bg-ember-500" />
            Field notes
          </span>
          <h1 className="mt-3 font-display font-semibold text-5xl md:text-6xl tracking-tight text-ink-50">
            UK SEO, performance, and{" "}
            <span className="text-ember-600">conversion playbooks.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            Practical, opinionated writing on what we&apos;re seeing across our UK
            client work — from local SEO in Manchester to Core Web Vitals on
            .co.uk sites and CRO experiments built for British buyers.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm">
            <Link
              href="/blog/rss.xml"
              className="inline-flex items-center gap-2 rounded-full border border-ink-700 bg-white px-3.5 py-1.5 font-semibold text-ink-100 hover:border-ember-500 hover:text-ember-600 transition"
              prefetch={false}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M6.18 17.82a2.18 2.18 0 1 1-4.36 0 2.18 2.18 0 0 1 4.36 0zM4 4.44v3.16c7.21 0 13 5.79 13 13h3.16C20.16 11.92 12.51 4.44 4 4.44zm0 5.66v3.16c4.65 0 8.34 3.78 8.34 8.34H15.5c0-6.34-5.16-11.5-11.5-11.5z" />
              </svg>
              RSS feed
            </Link>
            <span className="text-xs text-ink-400">
              {posts.length} articles · Updated {formatPubDate(sorted[0].updatedAt ?? sorted[0].publishedAt)}
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="border-t border-ink-700 bg-ink-900 py-20">
        <div className="container-x">
          <Reveal>
            <Link
              href={`/blog/${featured.slug}`}
              className="group grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-center glass-strong glass-hover p-6 md:p-8"
              aria-label={`Read featured article: ${featured.title}`}
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-ink-700 shadow-lift">
                <Image
                  src={featured.cover}
                  alt={featured.coverAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
                />
                <span className="absolute top-5 left-5 inline-flex items-center rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-200 backdrop-blur ring-1 ring-ink-700">
                  Featured · {featured.category}
                </span>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-ember-600">
                  <time dateTime={featured.publishedAt}>{formatPubDate(featured.publishedAt)}</time>
                  <span aria-hidden> · </span>
                  <span>{featured.readingMinutes} min read</span>
                </div>
                <h2 className="mt-3 font-display font-semibold text-3xl md:text-4xl text-ink-50">
                  {featured.title}
                </h2>
                <p className="mt-4 text-ink-300">{featured.excerpt}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Image
                    src={featured.author.avatar}
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full border border-ink-700"
                  />
                  <div>
                    <div className="text-sm font-semibold text-ink-50">
                      {featured.author.name}
                    </div>
                    <div className="text-xs text-ink-400">{featured.author.role}</div>
                  </div>
                </div>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ember-600">
                  Read the article
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14" />
                    <path d="m13 5 7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TOPICS — clickable, indexable category links */}
      <section className="border-t border-ink-700 bg-white py-12">
        <div className="container-x">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mr-2">
              Browse by topic:
            </span>
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="inline-flex items-center rounded-full border border-ink-700 bg-white px-3 py-1.5 text-xs font-semibold text-ink-100 hover:border-ember-500 hover:text-ember-600 transition"
                title={c.description}
              >
                {c.name}
              </Link>
            ))}
          </div>
          {tags.length > 0 && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-400 mr-2">
                Popular tags:
              </span>
              {tags.map((t) => (
                <Link
                  key={t.slug}
                  href={`/blog/tag/${t.slug}`}
                  className="inline-flex items-center rounded-full border border-ink-700/60 bg-white px-2.5 py-1 text-[11px] font-semibold text-ink-300 hover:border-ember-500 hover:text-ember-600 transition"
                >
                  #{t.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* GRID */}
      <section className="bg-white pb-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Latest"
            title={<>Every piece we&apos;ve published.</>}
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 90}>
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

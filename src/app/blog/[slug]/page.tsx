import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import TableOfContents, { type TocItem } from "@/components/blog/TableOfContents";
import ReadingProgress from "@/components/blog/ReadingProgress";
import ShareButtons from "@/components/blog/ShareButtons";
import PostCard from "@/components/blog/PostCard";
import { brand } from "@/lib/content";
import {
  posts,
  getPost,
  getRelated,
  formatPubDate,
  articleJsonLd,
  breadcrumbJsonLd,
  faqPageJsonLd,
  postUrl,
  ogImageUrl,
  slugify,
  categories,
  SITE_URL,
  type Section
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Not found", robots: { index: false, follow: false } };

  const url = postUrl(post.slug);
  const og = ogImageUrl(post.slug);

  return {
    title: post.title,
    description: post.description,
    keywords: post.keywords,
    authors: [{ name: post.author.name, url: `${SITE_URL}/blog/author/${post.author.slug}` }],
    category: post.category,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      url,
      siteName: brand.name,
      locale: "en_GB",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt ?? post.publishedAt,
      authors: [post.author.name],
      section: post.category,
      tags: post.tags,
      images: [
        { url: og, alt: post.title, width: 1200, height: 630 },
        { url: post.cover, alt: post.coverAlt, width: 1600, height: 900 }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [og]
    },
    robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
  };
}

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "p":
      return (
        <p key={i} className="text-ink-200 text-lg leading-relaxed mt-6">
          {s.text}
        </p>
      );
    case "h2":
      return (
        <h2
          key={i}
          id={s.id}
          className="font-display font-semibold text-2xl md:text-3xl text-ink-50 mt-14 scroll-mt-24 group"
        >
          <a href={`#${s.id}`} className="no-underline">
            <span>{s.text}</span>
            <span aria-hidden className="ml-2 text-ember-500/0 group-hover:text-ember-500/80 transition-colors text-base">#</span>
          </a>
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          id={s.id}
          className="font-display font-semibold text-xl text-ink-50 mt-10 scroll-mt-24"
        >
          {s.text}
        </h3>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {s.items.map((item, k) => (
            <li key={k} className="flex items-start gap-3 text-ink-200 text-lg leading-relaxed">
              <span aria-hidden className="mt-2.5 inline-block h-1.5 w-1.5 rounded-full bg-ember-500 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="mt-6 space-y-3 list-none">
          {s.items.map((item, k) => (
            <li key={k} className="flex items-start gap-3 text-ink-200 text-lg leading-relaxed">
              <span aria-hidden className="mt-1 grid h-6 w-6 place-items-center rounded-full bg-ember-500/15 text-ember-600 text-xs font-bold shrink-0">
                {k + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote
          key={i}
          className="mt-8 border-l-4 border-ember-500 pl-6 italic text-ink-100 text-lg"
        >
          &ldquo;{s.text}&rdquo;
          {s.cite && <footer className="mt-2 not-italic text-sm text-ink-400">— {s.cite}</footer>}
        </blockquote>
      );
    case "callout":
      return (
        <aside
          key={i}
          className="mt-8 glass-strong p-6 border-l-4 border-l-ember-500"
        >
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-ember-600">
            {s.title}
          </div>
          <p className="mt-2 text-ink-100">{s.text}</p>
        </aside>
      );
    case "image":
      return (
        <figure key={i} className="mt-8">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-ink-700">
            <Image src={s.src} alt={s.alt} fill sizes="(min-width: 1024px) 70vw, 100vw" className="object-cover" />
          </div>
          {s.caption && <figcaption className="mt-2 text-sm text-ink-400">{s.caption}</figcaption>}
        </figure>
      );
  }
}

export default async function BlogPostPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelated(post.slug);
  const categorySlug = categories.find((c) => c.name === post.category)?.slug ?? slugify(post.category);

  const toc: TocItem[] = post.body
    .filter((s): s is Extract<Section, { type: "h2" } | { type: "h3" }> => s.type === "h2" || s.type === "h3")
    .map((s) => ({ id: s.id, text: s.text, level: s.type === "h2" ? 2 : 3 }));

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.category, href: `/blog/category/${categorySlug}` },
    { name: post.title }
  ];

  return (
    <>
      <ReadingProgress />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: post.category, url: `${SITE_URL}/blog/category/${categorySlug}` },
              { name: post.title, url: postUrl(post.slug) }
            ])
          )
        }}
      />
      {post.faqs && post.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(post.faqs)) }}
        />
      )}

      {/* HEADER */}
      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-16 md:py-24">
          <Breadcrumbs items={crumbs} />

          <div className="mt-6 max-w-3xl animate-fade-up">
            <Link
              href={`/blog/category/${categorySlug}`}
              className="eyebrow hover:text-ember-600 transition-colors"
            >
              <span className="h-px w-6 bg-ember-500" />
              {post.category}
            </Link>
            <h1 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tight text-ink-50">
              {post.title}
            </h1>
            <p className="mt-5 text-lg text-ink-300">{post.description}</p>
            <div className="mt-7 flex items-center gap-3">
              <Link href={`/blog/author/${post.author.slug}`} className="flex items-center gap-3 group" aria-label={`More posts by ${post.author.name}`}>
                <Image
                  src={post.author.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="rounded-full border border-ink-700"
                />
                <div className="text-sm">
                  <div className="font-semibold text-ink-50 group-hover:text-ember-600 transition-colors">
                    {post.author.name}
                  </div>
                  <div className="text-ink-400">
                    <time dateTime={post.publishedAt}>{formatPubDate(post.publishedAt)}</time>
                    <span aria-hidden> · </span>
                    <span>{post.readingMinutes} min read</span>
                    {post.updatedAt && post.updatedAt !== post.publishedAt && (
                      <> · Updated <time dateTime={post.updatedAt}>{formatPubDate(post.updatedAt)}</time></>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COVER */}
      <section className="bg-white">
        <div className="container-x">
          <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-ink-700 shadow-lift">
            <Image
              src={post.cover}
              alt={post.coverAlt}
              fill
              priority
              sizes="(min-width: 1024px) 80vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* BODY + TOC */}
      <section className="bg-white pt-16 pb-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_260px]">
          <article data-progress-target className="max-w-3xl prose-base">
            {post.body.map((s, i) => renderSection(s, i))}

            {/* FAQ — visible content drives FAQPage schema */}
            {post.faqs && post.faqs.length > 0 && (
              <div className="mt-16">
                <h2
                  id="faq"
                  className="font-display font-semibold text-2xl md:text-3xl text-ink-50 scroll-mt-24"
                >
                  Frequently asked questions
                </h2>
                <div className="mt-6 divide-y divide-ink-700 border-y border-ink-700">
                  {post.faqs.map((f, i) => (
                    <details key={i} className="group py-5">
                      <summary className="flex cursor-pointer items-center justify-between gap-4 list-none">
                        <span className="font-semibold text-ink-50">{f.q}</span>
                        <span
                          aria-hidden
                          className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-ink-700 text-ink-300 transition-transform group-open:rotate-45"
                        >
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                            <path d="M12 5v14" />
                            <path d="M5 12h14" />
                          </svg>
                        </span>
                      </summary>
                      <p className="mt-3 text-ink-300 leading-relaxed">{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            )}

            {/* Tag chips */}
            <div className="mt-14 pt-6 border-t border-ink-700 flex flex-wrap gap-2">
              {post.tags.map((t) => (
                <Link
                  key={t}
                  href={`/blog/tag/${slugify(t)}`}
                  className="inline-flex items-center rounded-full border border-ink-700 bg-white px-3 py-1.5 text-xs font-semibold text-ink-100 hover:border-ember-500 hover:text-ember-600 transition"
                >
                  #{t}
                </Link>
              ))}
            </div>

            {/* Mobile share */}
            <div className="mt-8 lg:hidden">
              <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400 mb-3">
                Share
              </div>
              <ShareButtons url={postUrl(post.slug)} title={post.title} />
            </div>

            {/* Author bio */}
            <div className="mt-10 glass-strong p-6 flex items-start gap-4">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={56}
                height={56}
                className="rounded-full border border-ink-700 shrink-0"
              />
              <div>
                <div className="font-display font-semibold text-lg text-ink-50">
                  Written by{" "}
                  <Link href={`/blog/author/${post.author.slug}`} className="hover:text-ember-600 transition-colors">
                    {post.author.name}
                  </Link>
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ember-600 mt-1">
                  {post.author.role}
                </div>
                <p className="mt-2 text-sm text-ink-400">{post.author.bio}</p>
              </div>
            </div>
          </article>

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <TableOfContents
                items={
                  post.faqs && post.faqs.length > 0
                    ? [...toc, { id: "faq", text: "FAQ", level: 2 }]
                    : toc
                }
              />

              <div className="mt-8 pt-6 border-t border-ink-700">
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-ink-400">
                  Share
                </div>
                <div className="mt-4">
                  <ShareButtons url={postUrl(post.slug)} title={post.title} />
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* RELATED */}
      {related.length > 0 && (
        <section className="border-t border-ink-700 bg-ink-900 py-20">
          <div className="container-x">
            <div className="flex items-end justify-between gap-4">
              <h2 className="font-display font-semibold text-2xl md:text-3xl text-ink-50">
                Keep reading
              </h2>
              <Link href="/blog" className="text-sm font-semibold text-ember-600 hover:text-ember-700">
                All posts →
              </Link>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80}>
                  <PostCard post={r} variant="compact" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import { brand } from "@/lib/content";
import {
  getAllTags,
  getTagBySlug,
  getPostsByTagSlug,
  archiveJsonLd,
  breadcrumbJsonLd,
  SITE_URL
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllTags().map((t) => ({ slug: t.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) return { title: "Not found", robots: { index: false, follow: false } };

  const list = getPostsByTagSlug(slug);
  const url = `${SITE_URL}/blog/tag/${tag.slug}`;
  const title = `#${tag.name} — ${brand.name} Blog`;
  const description = `${list.length} article${list.length === 1 ? "" : "s"} tagged ${tag.name} on UK SEO, web development, and conversion from the Ember Sterling team.`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { type: "website", title, description, url, siteName: brand.name, locale: "en_GB" },
    twitter: { card: "summary_large_image", title, description },
    // Tag pages with 0 or 1 post are thin; let them index only when there's
    // enough content to justify the URL.
    robots: list.length >= 2 ? { index: true, follow: true } : { index: false, follow: true }
  };
}

export default async function TagPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);
  if (!tag) notFound();

  const list = getPostsByTagSlug(slug);
  const url = `${SITE_URL}/blog/tag/${tag.slug}`;
  const other = getAllTags().filter((t) => t.slug !== tag.slug).slice(0, 8);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(archiveJsonLd(`#${tag.name} — Blog`, url, list)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: `#${tag.name}`, url }
            ])
          )
        }}
      />

      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -right-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-20 md:py-28 max-w-4xl">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: `#${tag.name}` }]} />
          <span className="mt-6 inline-flex eyebrow">
            <span className="h-px w-6 bg-ember-500" />
            Tag
          </span>
          <h1 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tight text-ink-50">
            #{tag.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">
            {list.length} article{list.length === 1 ? "" : "s"} tagged{" "}
            <span className="text-ink-100 font-semibold">{tag.name}</span>.
          </p>
          {other.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
              <span className="font-semibold uppercase tracking-[0.18em] text-ink-400 mr-1">Related tags:</span>
              {other.map((t) => (
                <Link
                  key={t.slug}
                  href={`/blog/tag/${t.slug}`}
                  className="inline-flex items-center rounded-full border border-ink-700 bg-white px-2.5 py-1 font-semibold text-ink-300 hover:border-ember-500 hover:text-ember-600 transition"
                >
                  #{t.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white pb-24 pt-4">
        <div className="container-x">
          <SectionHeader
            eyebrow="Posts"
            title={<>Tagged <span className="text-ember-600">#{tag.name}</span></>}
          />
          {list.length === 0 ? (
            <p className="mt-10 text-ink-400">No posts under this tag.</p>
          ) : (
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}

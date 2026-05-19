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
  categories,
  getCategoryBySlug,
  getPostsByCategorySlug,
  archiveJsonLd,
  breadcrumbJsonLd,
  SITE_URL
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return categories.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return { title: "Not found", robots: { index: false, follow: false } };

  const url = `${SITE_URL}/blog/category/${cat.slug}`;
  const title = `${cat.name} — ${brand.name} Blog`;
  const description = cat.description;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      siteName: brand.name,
      locale: "en_GB"
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true }
  };
}

export default async function CategoryPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const list = getPostsByCategorySlug(slug);
  const url = `${SITE_URL}/blog/category/${cat.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(archiveJsonLd(`${cat.name} — Blog`, url, list)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: cat.name, url }
            ])
          )
        }}
      />

      <section className="relative isolate overflow-hidden bg-white">
        <div aria-hidden className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid-fade bg-grid opacity-50" />
          <div className="absolute -top-32 -left-20 h-[460px] w-[460px] rounded-full bg-ember-500/12 blur-[140px] animate-drift-slow" />
        </div>

        <div className="container-x py-20 md:py-28 max-w-4xl">
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: cat.name }]} />
          <span className="mt-6 inline-flex eyebrow">
            <span className="h-px w-6 bg-ember-500" />
            Category
          </span>
          <h1 className="mt-3 font-display font-semibold text-4xl md:text-6xl tracking-tight text-ink-50">
            {cat.name}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-300">{cat.description}</p>
          <div className="mt-6 flex flex-wrap items-center gap-2 text-xs">
            <span className="font-semibold uppercase tracking-[0.18em] text-ink-400 mr-1">Other topics:</span>
            {categories.filter((c) => c.slug !== cat.slug).map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="inline-flex items-center rounded-full border border-ink-700 bg-white px-2.5 py-1 font-semibold text-ink-100 hover:border-ember-500 hover:text-ember-600 transition"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-4">
        <div className="container-x">
          <SectionHeader
            eyebrow={`${list.length} article${list.length === 1 ? "" : "s"}`}
            title={<>Latest in <span className="text-ember-600">{cat.name}</span></>}
          />
          {list.length === 0 ? (
            <p className="mt-10 text-ink-400">No posts in this category yet.</p>
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

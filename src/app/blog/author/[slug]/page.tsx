import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import Breadcrumbs from "@/components/blog/Breadcrumbs";
import PostCard from "@/components/blog/PostCard";
import { brand } from "@/lib/content";
import {
  authors,
  getAuthorBySlug,
  getPostsByAuthor,
  personJsonLd,
  archiveJsonLd,
  breadcrumbJsonLd,
  SITE_URL
} from "@/lib/blog";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return Object.values(authors).map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata(
  { params }: { params: Promise<Params> }
): Promise<Metadata> {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) return { title: "Not found", robots: { index: false, follow: false } };

  const url = `${SITE_URL}/blog/author/${author.slug}`;
  const title = `${author.name} — ${author.role} at ${brand.name}`;

  return {
    title,
    description: author.bio,
    alternates: { canonical: url },
    openGraph: {
      type: "profile",
      title,
      description: author.bio,
      url,
      siteName: brand.name,
      locale: "en_GB",
      images: [{ url: author.avatar, alt: author.name }]
    },
    twitter: { card: "summary", title, description: author.bio, images: [author.avatar] },
    robots: { index: true, follow: true }
  };
}

export default async function AuthorPage(
  { params }: { params: Promise<Params> }
) {
  const { slug } = await params;
  const author = getAuthorBySlug(slug);
  if (!author) notFound();

  const list = getPostsByAuthor(slug);
  const url = `${SITE_URL}/blog/author/${author.slug}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd(author)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(archiveJsonLd(`${author.name} — Author`, url, list)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", url: `${SITE_URL}/` },
              { name: "Blog", url: `${SITE_URL}/blog` },
              { name: author.name, url }
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
          <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: author.name }]} />

          <div className="mt-8 flex flex-col items-start gap-6 md:flex-row md:items-center">
            <Image
              src={author.avatar}
              alt={author.name}
              width={120}
              height={120}
              className="rounded-full border border-ink-700 shadow-lift"
            />
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-ember-500" />
                Author
              </span>
              <h1 className="mt-3 font-display font-semibold text-4xl md:text-5xl tracking-tight text-ink-50">
                {author.name}
              </h1>
              <div className="mt-2 text-sm uppercase tracking-[0.18em] text-ember-600 font-semibold">
                {author.role}
              </div>
              <p className="mt-4 max-w-2xl text-lg text-ink-300">{author.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24 pt-4">
        <div className="container-x">
          <SectionHeader
            eyebrow={`${list.length} article${list.length === 1 ? "" : "s"}`}
            title={<>Posts by <span className="text-ember-600">{author.name.split(" ")[0]}</span></>}
          />
          {list.length === 0 ? (
            <p className="mt-10 text-ink-400">No posts published yet.</p>
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

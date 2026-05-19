import type { MetadataRoute } from "next";
import { posts, categories, getAllTags, authors, SITE_URL, getPostsByTagSlug } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, freq: "weekly" as const },
    { path: "/services", priority: 0.7, freq: "monthly" as const },
    { path: "/work", priority: 0.7, freq: "monthly" as const },
    { path: "/about", priority: 0.5, freq: "yearly" as const },
    { path: "/contact", priority: 0.5, freq: "yearly" as const },
    { path: "/careers", priority: 0.5, freq: "monthly" as const },
    { path: "/blog", priority: 0.9, freq: "daily" as const }
  ].map(({ path, priority, freq }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: freq,
    priority
  }));

  const postEntries: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${SITE_URL}/blog/${p.slug}`,
    lastModified: new Date(p.updatedAt ?? p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: p.featured ? 0.8 : 0.7
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories.map((c) => ({
    url: `${SITE_URL}/blog/category/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.6
  }));

  // Only include tag pages that have enough content to merit indexing —
  // mirrors the robots noindex logic on thin tags.
  const tagEntries: MetadataRoute.Sitemap = getAllTags()
    .filter((t) => getPostsByTagSlug(t.slug).length >= 2)
    .map((t) => ({
      url: `${SITE_URL}/blog/tag/${t.slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.4
    }));

  const authorEntries: MetadataRoute.Sitemap = Object.values(authors).map((a) => ({
    url: `${SITE_URL}/blog/author/${a.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.4
  }));

  return [
    ...staticEntries,
    ...postEntries,
    ...categoryEntries,
    ...tagEntries,
    ...authorEntries
  ];
}

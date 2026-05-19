import { brand } from "@/lib/content";
import { posts, SITE_URL, postUrl, bodyToHtml } from "@/lib/blog";

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function cdata(s: string): string {
  return `<![CDATA[${s.replace(/]]>/g, "]]]]><![CDATA[>")}]]>`;
}

export async function GET(): Promise<Response> {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  const items = sorted
    .map((p) => {
      const url = postUrl(p.slug);
      const html = `<p>${escape(p.excerpt)}</p>\n${bodyToHtml(p)}`;
      return `    <item>
      <title>${escape(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.publishedAt).toUTCString()}</pubDate>
      <dc:creator>${escape(p.author.name)}</dc:creator>
      <author>${escape(brand.email)} (${escape(p.author.name)})</author>
      <category>${escape(p.category)}</category>${p.tags.map((t) => `\n      <category>${escape(t)}</category>`).join("")}
      <description>${escape(p.description)}</description>
      <content:encoded>${cdata(html)}</content:encoded>
      <enclosure url="${escape(p.cover)}" type="image/jpeg" />
    </item>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:dc="http://purl.org/dc/elements/1.1/">
  <channel>
    <title>${escape(brand.name)} — Blog</title>
    <link>${SITE_URL}/blog</link>
    <atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml" />
    <description>Field notes on UK SEO, web development, and conversion for ambitious British brands.</description>
    <language>en-GB</language>
    <copyright>© ${new Date().getFullYear()} ${escape(brand.name)}</copyright>
    <managingEditor>${escape(brand.email)} (${escape(brand.name)})</managingEditor>
    <webMaster>${escape(brand.email)} (${escape(brand.name)})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>60</ttl>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600"
    }
  });
}

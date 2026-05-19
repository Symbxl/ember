import { ImageResponse } from "next/og";
import { brand } from "@/lib/content";
import { posts, getPost } from "@/lib/blog";

export const dynamic = "force-static";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  const excerpt =
    post.excerpt.length > 160 ? post.excerpt.slice(0, 157) + "…" : post.excerpt;
  const eyebrow = `${brand.name} · ${post.category}`;
  const readMeta = `${post.readingMinutes} min read`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "linear-gradient(135deg, #0a0a0b 0%, #18181b 60%, #1c1917 100%)",
          color: "#fafaf9",
          fontFamily: "sans-serif",
          position: "relative"
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: 600,
            background:
              "radial-gradient(circle, rgba(249,115,22,0.35) 0%, rgba(249,115,22,0) 70%)",
            display: "flex"
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -180,
            left: -180,
            width: 500,
            height: 500,
            borderRadius: 500,
            background:
              "radial-gradient(circle, rgba(251,146,60,0.2) 0%, rgba(251,146,60,0) 70%)",
            display: "flex"
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 14,
              background: "linear-gradient(180deg, #fb923c 0%, #ea580c 100%)",
              display: "flex"
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: 22,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#fb923c",
              fontWeight: 600
            }}
          >
            {eyebrow}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              lineHeight: 1.08,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              maxWidth: 1040
            }}
          >
            {post.title}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              lineHeight: 1.35,
              color: "#a8a29e",
              maxWidth: 980
            }}
          >
            {excerpt}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(250,250,249,0.12)",
            paddingTop: 28
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div style={{ display: "flex", fontSize: 24, fontWeight: 600, color: "#fafaf9" }}>
              {post.author.name}
            </div>
            <div style={{ display: "flex", fontSize: 20, color: "#a8a29e" }}>
              {post.author.role}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 6
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 18,
                color: "#fb923c",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                fontWeight: 600
              }}
            >
              {readMeta}
            </div>
            <div style={{ display: "flex", fontSize: 18, color: "#78716c" }}>
              sterlingember.com/blog
            </div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}

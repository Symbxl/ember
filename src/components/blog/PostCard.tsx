import Image from "next/image";
import Link from "next/link";
import { formatPubDate, type Post } from "@/lib/blog";

type Variant = "default" | "compact";

export default function PostCard({
  post,
  variant = "default",
  priority = false
}: {
  post: Post;
  variant?: Variant;
  priority?: boolean;
}) {
  const compact = variant === "compact";
  return (
    <article className="group photo-card h-full flex flex-col">
      <Link
        href={`/blog/${post.slug}`}
        className="flex-1 flex flex-col"
        aria-label={`Read: ${post.title}`}
      >
        <div className={`relative overflow-hidden ${compact ? "aspect-[16/10]" : "aspect-[16/10]"}`}>
          <Image
            src={post.cover}
            alt={post.coverAlt}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
          />
          <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink-200 backdrop-blur ring-1 ring-ink-700">
            {post.category}
          </span>
        </div>
        <div className={`${compact ? "p-5" : "p-6"} flex-1 flex flex-col`}>
          <div className="text-[11px] uppercase tracking-[0.18em] text-ember-600">
            <time dateTime={post.publishedAt}>{formatPubDate(post.publishedAt)}</time>
            <span aria-hidden> · </span>
            <span>{post.readingMinutes} min read</span>
          </div>
          <h3 className={`mt-3 font-display font-semibold text-ink-50 ${compact ? "text-lg leading-tight" : "text-xl"}`}>
            {post.title}
          </h3>
          {!compact && (
            <p className="mt-3 text-sm text-ink-400 flex-1">{post.excerpt}</p>
          )}
          <div className="mt-5 flex items-center gap-2.5 pt-4 border-t border-ink-700">
            <Image
              src={post.author.avatar}
              alt=""
              width={28}
              height={28}
              className="rounded-full border border-ink-700"
            />
            <span className="text-xs font-semibold text-ink-100">
              {post.author.name}
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}

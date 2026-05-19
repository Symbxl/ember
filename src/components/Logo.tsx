import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export default function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const height = size === "lg" ? 56 : size === "sm" ? 32 : 40;
  const text = size === "lg" ? "text-xl" : "text-base md:text-lg";
  return (
    <Link href="/" aria-label={`${brand.name} — home`} className="inline-flex items-center gap-2 group">
      <Image
        src="/logo1.webp"
        alt={brand.name}
        width={height}
        height={height}
        priority
        className="object-contain"
        style={{ height: `${height}px`, width: "auto" }}
      />
      <span className={`font-display font-semibold tracking-tight ${text}`}>
        <span className="text-ink-400">Ember</span>{" "}
        <span className="text-ember-500">Sterling</span>
      </span>
    </Link>
  );
}

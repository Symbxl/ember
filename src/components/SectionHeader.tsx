export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left"
}: { eyebrow?: string; title: React.ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={align === "center" ? "text-center max-w-2xl mx-auto" : "max-w-3xl"}>
      {eyebrow && (
        <div className={`eyebrow ${align === "center" ? "justify-center" : ""}`}>
          <span className="h-px w-6 bg-ember-500" />
          {eyebrow}
        </div>
      )}
      <h2 className="h-display mt-3 text-3xl md:text-5xl font-semibold">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-ink-300">{subtitle}</p>}
    </div>
  );
}

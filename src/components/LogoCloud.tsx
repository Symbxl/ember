import { logos } from "@/lib/content";

export default function LogoCloud() {
  // Duplicate for seamless marquee
  const items = [...logos, ...logos];
  return (
    <section className="border-y border-ink-700 bg-ink-900">
      <div className="container-x py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-ink-500">
          Trusted by ambitious teams across DTC, SaaS, fintech & services
        </p>
        <div className="mt-6 overflow-hidden mask-fade-x">
          <div className="flex w-max gap-10 animate-marquee">
            {items.map((name, i) => (
              <span key={i} className="font-display font-medium text-2xl md:text-3xl text-ink-400 hover:text-ink-50 transition whitespace-nowrap">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
      <style>{`.mask-fade-x { mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent); -webkit-mask-image: linear-gradient(90deg, transparent, black 12%, black 88%, transparent); }`}</style>
    </section>
  );
}

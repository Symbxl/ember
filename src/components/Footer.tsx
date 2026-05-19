import Link from "next/link";
import Logo from "./Logo";
import { brand } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700 bg-ink-900">
      <div className="container-x py-16 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo size="lg" />
          <p className="mt-4 max-w-sm text-sm text-ink-400">{brand.description}</p>
          <div className="mt-5 flex gap-3 text-ink-400">
            {[
              { href: brand.social.instagram, label: "Instagram", path: "M12 2.5c-2.6 0-2.9 0-3.9.1-1 .1-1.7.2-2.3.5-.7.3-1.3.6-1.9 1.2C3.3 4.9 3 5.5 2.7 6.2c-.3.6-.4 1.3-.5 2.3-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c.1 1 .2 1.7.5 2.3.3.7.6 1.3 1.2 1.9.6.6 1.2.9 1.9 1.2.6.3 1.3.4 2.3.5 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c1-.1 1.7-.2 2.3-.5.7-.3 1.3-.6 1.9-1.2.6-.6.9-1.2 1.2-1.9.3-.6.4-1.3.5-2.3.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.1-1-.2-1.7-.5-2.3-.3-.7-.6-1.3-1.2-1.9-.6-.6-1.2-.9-1.9-1.2-.6-.3-1.3-.4-2.3-.5-1-.1-1.3-.1-3.9-.1zm0 1.8c2.5 0 2.8 0 3.8.1.9 0 1.4.2 1.7.3.4.2.7.3 1 .7.3.3.5.6.7 1 .1.3.3.8.3 1.7 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c0 .9-.2 1.4-.3 1.7-.2.4-.3.7-.7 1-.3.3-.6.5-1 .7-.3.1-.8.3-1.7.3-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-.9 0-1.4-.2-1.7-.3-.4-.2-.7-.3-1-.7-.3-.3-.5-.6-.7-1-.1-.3-.3-.8-.3-1.7 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8c0-.9.2-1.4.3-1.7.2-.4.3-.7.7-1 .3-.3.6-.5 1-.7.3-.1.8-.3 1.7-.3 1 0 1.3-.1 3.8-.1zm0 3a5.2 5.2 0 1 0 0 10.4 5.2 5.2 0 0 0 0-10.4zm0 8.6a3.4 3.4 0 1 1 0-6.8 3.4 3.4 0 0 1 0 6.8zm6.6-8.8a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z" },
              { href: brand.social.linkedin, label: "LinkedIn", path: "M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56V24H.22V8zm7.78 0h4.37v2.2h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v9.18h-4.56v-8.14c0-1.94-.04-4.44-2.71-4.44-2.71 0-3.12 2.12-3.12 4.3V24H8V8z" },
              { href: brand.social.twitter, label: "X", path: "M18.244 2H21l-6.52 7.43L22 22h-6.4l-5.01-6.55L4.8 22H2l6.97-7.95L2 2h6.55l4.53 5.99L18.244 2zm-2.24 18h1.78L7.07 4h-1.9l10.83 16z" }
            ].map((s) => (
              <a key={s.label} aria-label={s.label} href={s.href} className="grid h-9 w-9 place-items-center rounded-full bg-white border border-ink-700 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.path} /></svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold text-ink-100 uppercase tracking-[0.18em]">Studio</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-400">
            <li><Link className="hover:text-ink-50" href="/services">Services</Link></li>
            <li><Link className="hover:text-ink-50" href="/work">Work</Link></li>
            <li><Link className="hover:text-ink-50" href="/blog">Blog</Link></li>
            <li><Link className="hover:text-ink-50" href="/careers">Careers</Link></li>
            <li><Link className="hover:text-ink-50" href="/about">About</Link></li>
            <li><Link className="hover:text-ink-50" href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-ink-100 uppercase tracking-[0.18em]">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm text-ink-400">
            <li><a href={`mailto:${brand.email}`} className="hover:text-ink-50">{brand.email}</a></li>
            <li><a href={`tel:${brand.phoneDigits}`} className="hover:text-ink-50">{brand.phone}</a></li>
            <li>{brand.location}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold text-ink-100 uppercase tracking-[0.18em]">Ready to build?</h4>
          <p className="mt-4 text-sm text-ink-400">A 25-minute call to see if we&apos;re the right fit.</p>
          <Link href="/contact" className="btn-ember mt-5">Book a Call</Link>
        </div>
      </div>
      <div className="border-t border-ink-700">
        <div className="container-x py-5 text-xs text-ink-500 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} {brand.name}. All rights reserved.</span>
          <span>Built with Next.js · Hosted on Vercel</span>
        </div>
      </div>
    </footer>
  );
}

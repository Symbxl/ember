export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-2">
      <a
        aria-label="Share on LinkedIn"
        rel="noopener noreferrer"
        target="_blank"
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${u}`}
        className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 bg-white text-ink-200 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.22 8h4.56V24H.22V8zm7.78 0h4.37v2.2h.06c.61-1.16 2.1-2.38 4.32-2.38 4.62 0 5.47 3.04 5.47 7v9.18h-4.56v-8.14c0-1.94-.04-4.44-2.71-4.44-2.71 0-3.12 2.12-3.12 4.3V24H8V8z" />
        </svg>
      </a>
      <a
        aria-label="Share on X"
        rel="noopener noreferrer"
        target="_blank"
        href={`https://twitter.com/intent/tweet?url=${u}&text=${t}`}
        className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 bg-white text-ink-200 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M18.244 2H21l-6.52 7.43L22 22h-6.4l-5.01-6.55L4.8 22H2l6.97-7.95L2 2h6.55l4.53 5.99L18.244 2zm-2.24 18h1.78L7.07 4h-1.9l10.83 16z" />
        </svg>
      </a>
      <a
        aria-label="Share via email"
        href={`mailto:?subject=${t}&body=${u}`}
        className="grid h-9 w-9 place-items-center rounded-full border border-ink-700 bg-white text-ink-200 hover:bg-ember-500 hover:text-white hover:border-ember-500 transition"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      </a>
    </div>
  );
}

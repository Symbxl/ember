import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MuiProvider from "@/components/MuiProvider";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { brand } from "@/lib/content";
import { organizationJsonLd, SITE_URL } from "@/lib/blog";

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

const display = Geist({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap"
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${brand.name} — ${brand.tagline}`,
    template: `%s — ${brand.name}`
  },
  description: brand.description,
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    url: SITE_URL,
    siteName: brand.name,
    type: "website",
    locale: "en_GB"
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description
  },
  alternates: {
    canonical: SITE_URL,
    types: {
      "application/rss+xml": `${SITE_URL}/blog/rss.xml`
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 }
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${sans.variable} ${display.variable} ${mono.variable}`}>
      <head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${brand.name} — Blog`}
          href={`${SITE_URL}/blog/rss.xml`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-ink-950 text-cream-50 font-sans antialiased">
        <MuiProvider>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </MuiProvider>
      </body>
    </html>
  );
}

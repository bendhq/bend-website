import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bendhq.org'),
  title: "Bend | Production-Ready Backend Bundler",
  description: "A production-ready backend generator that creates clean, optimized, secure backend apps instantly.",
  openGraph: {
    title: "Bend | Production-Ready Backend Bundler",
    description: "A production-ready backend generator that creates clean, optimized, secure backend apps instantly.",
    url: "https://bendhq.org",
    siteName: "Bend",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/design-mode/bend.png",
        width: 1200,
        height: 630,
        alt: "Bend | Production-Ready Backend Bundler",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bend | Production-Ready Backend Bundler",
    description: "A production-ready backend generator that creates clean, optimized, secure backend apps instantly.",
    images: ["/images/design-mode/bend.png"],
  },
  keywords: ["backend bundler", "backend generator", "nodejs", "fastify", "typescript", "database", "orm", "api"],
  authors: [{ name: "Bend Team", url: "https://bendhq.org" }],
  creator: "Bend Team",
  publisher: "Bend",
  robots: "index, follow",
  alternates: { canonical: "https://bendhq.org" },
  applicationName: "Bend",
  referrer: "origin-when-cross-origin",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b1b1f] text-[rgba(255,255,255,0.87)] selection:bg-[#257ee1] selection:text-white`}
      >
        <SiteHeader />
        <main className="flex min-h-screen flex-col items-center w-full overflow-x-hidden">
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <SiteFooter />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Bend",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "description": "A production-ready backend bundler that creates clean, optimized, secure backend apps instantly."
            })
          }}
        />
      </body>
    </html>
  );
}

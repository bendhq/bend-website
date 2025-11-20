import type { Metadata } from "next"
import { Geist, Geist_Mono } from 'next/font/google'
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Bend | Backend Generator",
  description: "A production-ready backend generator that creates clean, optimized, secure backend apps instantly.",
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
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}

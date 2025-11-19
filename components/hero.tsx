"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, Copy, Check } from 'lucide-react'
import { Hero3D } from "@/components/hero-3d"

export function Hero() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('npm create bend@latest')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 w-full min-h-[800px] flex items-center overflow-hidden">
      <Hero3D className="absolute inset-0 w-full h-full z-[-1] pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-start text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
              <span className="text-gradient">Bend</span>
              <br />
              <span className="text-white">Backend Generator </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-[600px] mb-8 leading-relaxed">
              A production-ready backend scaffolder that creates clean, optimized, secure backend apps instantly. Auto-detects runtime, language, framework, and ORM with best practices built in.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button
                onClick={handleCopy}
                className="flex items-center rounded-full bg-[#2f2f32]/80 backdrop-blur-sm p-1 pr-4 border border-[rgba(255,255,255,0.1)] hover:border-[#257ee1]/50 hover:shadow-[0_0_20px_rgba(37,126,225,0.3)] transition-all group cursor-pointer"
              >
                <div className="bg-[#257ee1] text-white rounded-full px-4 py-2 font-mono text-sm font-bold mr-3 group-hover:bg-[#1e6bc7] transition-colors">
                  npm create bend@latest
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground group-hover:text-white transition-colors">
                    {copied ? 'Copied!' : 'Get Started'}
                  </span>
                  {copied ? (
                    <Check className="h-4 w-4 text-[#257ee1]" />
                  ) : (
                    <Copy className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              </button>
              
              <Link 
                href="/docs" 
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#2f2f32]/80 backdrop-blur-sm hover:bg-[#3a3a3e] text-white font-medium transition-all border border-[rgba(255,255,255,0.1)] hover:border-[#257ee1]/30 hover:shadow-[0_0_15px_rgba(37,126,225,0.2)] group"
              >
                Why Bend? 
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="hidden lg:block h-[500px]">
            {/* Spacer to keep the grid layout for text but let the 3D object float in this space visually */}
          </div>
        </div>
      </div>
    </section>
  )
}

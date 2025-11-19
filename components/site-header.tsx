"use client"

import { useState } from "react"
import Link from "next/link"
import { Github, Search, Menu, X } from 'lucide-react'
import { BendLogo } from "@/components/bend-logo"

export function SiteHeader() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[rgba(255,255,255,0.1)] bg-[#1b1b1f]/80 backdrop-blur-md">
      <div className="flex h-14 items-center justify-between px-4 sm:px-8 max-w-[1440px] mx-auto">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg hover:opacity-80 transition-opacity">
            <BendLogo className="h-10 w-auto" />
          </Link>
          
          <form onSubmit={handleSearch} className="hidden md:flex items-center gap-1 bg-[rgba(255,255,255,0.05)] rounded-full px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors border border-transparent hover:border-[rgba(255,255,255,0.1)]">
            <Search className="h-3.5 w-3.5" />
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none mr-2 w-32 focus:w-48 transition-all"
            />
            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] px-1.5 font-mono text-[10px] font-medium opacity-100">
              <span className="text-xs">⌘</span>K
            </kbd>
          </form>
        </div>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/docs" className="hover:text-[#257ee1] transition-colors">Docs</Link>
          <Link href="/guide" className="hover:text-[#257ee1] transition-colors">Guide</Link>
          <Link href="/docs/configuration" className="hover:text-[#257ee1] transition-colors">Config</Link>
          <Link href="/docs/plugins" className="hover:text-[#257ee1] transition-colors">Plugins</Link>
          <Link href="/resources" className="hover:text-[#257ee1] transition-colors">Resources</Link>
          <div className="h-4 w-[1px] bg-[rgba(255,255,255,0.1)] mx-2"></div>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/bendhq/bend" target="_blank" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </nav>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-muted-foreground hover:text-foreground"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[rgba(255,255,255,0.1)] bg-[#1b1b1f] py-4 px-4">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <Link href="/docs" className="hover:text-[#257ee1] transition-colors">Docs</Link>
            <Link href="/guide" className="hover:text-[#257ee1] transition-colors">Guide</Link>
            <Link href="/docs/configuration" className="hover:text-[#257ee1] transition-colors">Config</Link>
            <Link href="/docs/plugins" className="hover:text-[#257ee1] transition-colors">Plugins</Link>
            <Link href="/resources" className="hover:text-[#257ee1] transition-colors">Resources</Link>
            <Link href="https://github.com/bendhq/bend" target="_blank" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" /> GitHub
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

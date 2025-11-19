"use client"

import { Suspense } from "react"
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { Search, ArrowLeft, FileText, BookOpen, Settings, Code } from 'lucide-react'

const searchableContent = [
  {
    id: 1,
    title: "Getting Started with Bend",
    description: "Learn how to scaffold your first backend project with Bend in minutes. Install, configure, and deploy.",
    category: "Documentation",
    href: "/docs/getting-started",
    keywords: ["install", "setup", "start", "begin", "npm", "create", "scaffold"]
  },
  {
    id: 2,
    title: "CLI Reference",
    description: "Complete command-line reference for all Bend commands and options. Learn about create, init, and more.",
    category: "Documentation",
    href: "/docs/cli",
    keywords: ["command", "cli", "terminal", "commands", "options", "flags"]
  },
  {
    id: 3,
    title: "Configuration",
    description: "Configure your Bend project with runtime, framework, and ORM options. Customize to your needs.",
    category: "Documentation",
    href: "/docs/configuration",
    keywords: ["config", "settings", "runtime", "framework", "orm", "database", "customize"]
  },
  {
    id: 4,
    title: "Plugins",
    description: "Extend Bend functionality with plugins and custom integrations. Build your own or use community plugins.",
    category: "Documentation",
    href: "/docs/plugins",
    keywords: ["plugin", "extend", "integration", "custom", "community"]
  },
  {
    id: 5,
    title: "Introduction to Bend",
    description: "Understand what Bend is and how it can help you build production-ready backends faster.",
    category: "Guide",
    href: "/guide/introduction",
    keywords: ["intro", "about", "what", "overview", "backend", "scaffolder"]
  },
  {
    id: 6,
    title: "Project Structure",
    description: "Learn about the clean, organized structure Bend creates for your projects.",
    category: "Guide",
    href: "/guide/structure",
    keywords: ["structure", "folders", "files", "organization", "layout"]
  },
  {
    id: 7,
    title: "Best Practices",
    description: "Follow industry best practices that are built into every Bend project.",
    category: "Guide",
    href: "/guide/best-practices",
    keywords: ["best", "practices", "tips", "recommendations", "quality"]
  },
  {
    id: 8,
    title: "Security",
    description: "Understand the security features and how to keep your backend secure.",
    category: "Guide",
    href: "/guide/security",
    keywords: ["security", "safe", "secure", "protection", "auth", "authentication"]
  }
]

function calculateRelevanceScore(item: typeof searchableContent[0], searchTerms: string[]): number {
  let score = 0;
  
  searchTerms.forEach(term => {
    // Exact title match gets highest score
    if (item.title.toLowerCase() === term) score += 100;
    else if (item.title.toLowerCase().includes(term)) score += 50;
    
    // Category match
    if (item.category.toLowerCase().includes(term)) score += 30;
    
    // Description match
    if (item.description.toLowerCase().includes(term)) score += 20;
    
    // Keyword match
    item.keywords.forEach(keyword => {
      if (keyword === term) score += 40;
      else if (keyword.includes(term)) score += 15;
    });
  });
  
  return score;
}

function SearchContent() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q') || ''

  const searchResults = query.trim() 
    ? searchableContent
        .map(item => ({
          ...item,
          score: calculateRelevanceScore(item, query.toLowerCase().split(' ').filter(t => t.length > 0))
        }))
        .filter(item => item.score > 0)
        .sort((a, b) => b.score - a.score)
    : []

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case "Documentation": return <FileText className="h-4 w-4" />
      case "Guide": return <BookOpen className="h-4 w-4" />
      case "Config": return <Settings className="h-4 w-4" />
      default: return <Code className="h-4 w-4" />
    }
  }

  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Home
      </Link>

      <div className="flex items-center gap-3 mb-8">
        <Search className="h-6 w-6 text-[#257ee1]" />
        <h1 className="text-3xl font-bold">Search Results</h1>
      </div>

      {query ? (
        <div>
          <p className="text-muted-foreground mb-8">
            {searchResults.length > 0 ? (
              <>Found <span className="text-white font-medium">{searchResults.length}</span> result{searchResults.length !== 1 ? 's' : ''} for: <span className="text-white font-medium">{query}</span></>
            ) : (
              <>No results found for: <span className="text-white font-medium">{query}</span></>
            )}
          </p>
          
          {searchResults.length > 0 ? (
            <div className="flex flex-col gap-4">
              {searchResults.map((result) => (
                <Link 
                  key={result.id}
                  href={result.href}
                  className="group bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="bg-[#1b1b1f] p-2 rounded-lg border border-[rgba(255,255,255,0.05)] group-hover:border-[#257ee1]/30 transition-colors">
                      {getCategoryIcon(result.category)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs text-[#257ee1] font-medium">{result.category}</span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[#257ee1] transition-colors">
                        {result.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8 text-center">
              <p className="text-muted-foreground mb-4">
                No results found. Try a different search term or browse our <Link href="/docs" className="text-[#257ee1] hover:underline">documentation</Link>.
              </p>
              <div className="flex flex-wrap gap-2 justify-center mt-6">
                <span className="text-sm text-muted-foreground">Try searching for:</span>
                <button onClick={() => window.location.href = '/search?q=getting started'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
                  getting started
                </button>
                <button onClick={() => window.location.href = '/search?q=cli'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
                  cli
                </button>
                <button onClick={() => window.location.href = '/search?q=configuration'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
                  configuration
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8 text-center">
          <p className="text-muted-foreground mb-6">
            Enter a search query to get started.
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            <button onClick={() => window.location.href = '/search?q=getting started'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
              getting started
            </button>
            <button onClick={() => window.location.href = '/search?q=cli'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
              cli
            </button>
            <button onClick={() => window.location.href = '/search?q=plugins'} className="text-sm px-3 py-1 bg-[#1b1b1f] border border-[rgba(255,255,255,0.05)] rounded-full hover:border-[#257ee1]/30 transition-colors">
              plugins
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="w-full max-w-[900px] px-4 py-16">Loading...</div>}>
      <SearchContent />
    </Suspense>
  )
}

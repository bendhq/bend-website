import Link from "next/link"
import { ArrowRight, BookOpen, Code, Settings, Puzzle } from 'lucide-react'

export default function DocsPage() {
  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Documentation</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to know about Bend
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <DocCard
          icon={<BookOpen className="h-6 w-6 text-[#257ee1]" />}
          title="Getting Started"
          description="Learn how to scaffold your first backend project with Bend in minutes."
          href="/docs/getting-started"
        />
        <DocCard
          icon={<Code className="h-6 w-6 text-[#257ee1]" />}
          title="CLI Reference"
          description="Complete command-line reference for all Bend commands and options."
          href="/docs/cli"
        />
        <DocCard
          icon={<Settings className="h-6 w-6 text-[#257ee1]" />}
          title="Configuration"
          description="Configure your Bend project with runtime, framework, and ORM options."
          href="/docs/configuration"
        />
        <DocCard
          icon={<Puzzle className="h-6 w-6 text-[#257ee1]" />}
          title="Plugins"
          description="Extend Bend functionality with plugins and custom integrations."
          href="/docs/plugins"
        />
      </div>

      <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link href="https://github.com/bendhq/bend" target="_blank" className="text-muted-foreground hover:text-[#257ee1] transition-colors flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            GitHub Repository
          </Link>
          <Link href="https://www.npmjs.com/package/create-bend" target="_blank" className="text-muted-foreground hover:text-[#257ee1] transition-colors flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            npm Package
          </Link>
          <Link href="https://github.com/bendhq/bend/issues" target="_blank" className="text-muted-foreground hover:text-[#257ee1] transition-colors flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Report Issues
          </Link>
          <Link href="/resources" className="text-muted-foreground hover:text-[#257ee1] transition-colors flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Resources
          </Link>
        </div>
      </div>
    </div>
  )
}

function DocCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="group bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all">
      <div className="bg-[#1b1b1f] w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.05)] group-hover:border-[#257ee1]/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#257ee1] transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
      <div className="mt-4 flex items-center gap-2 text-sm text-[#257ee1] opacity-0 group-hover:opacity-100 transition-opacity">
        Learn more <ArrowRight className="h-4 w-4" />
      </div>
    </Link>
  )
}

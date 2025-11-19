import Link from "next/link"
import { ExternalLink, Github, Package, Bug, BookOpen } from 'lucide-react'

export default function ResourcesPage() {
  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Resources</h1>
        <p className="text-xl text-muted-foreground">
          Everything you need to get the most out of Bend.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <ResourceCard
          icon={<Github className="h-6 w-6" />}
          title="GitHub Repository"
          description="View the source code, contribute, and track development progress."
          href="https://github.com/bendhq/bend"
          external
        />
        <ResourceCard
          icon={<Package className="h-6 w-6" />}
          title="npm Package"
          description="Install Bend via npm and check the latest version and downloads."
          href="https://www.npmjs.com/package/create-bend"
          external
        />
        <ResourceCard
          icon={<Bug className="h-6 w-6" />}
          title="Issue Tracker"
          description="Report bugs, request features, and see what's being worked on."
          href="https://github.com/bendhq/bend/issues"
          external
        />
        <ResourceCard
          icon={<BookOpen className="h-6 w-6" />}
          title="Documentation"
          description="Comprehensive guides and API references to help you get started."
          href="/docs"
        />
      </div>

      <div className="mt-16 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8">
        <h2 className="text-2xl font-bold mb-4">Community</h2>
        <p className="text-muted-foreground mb-6">
          Join the Bend community and get help from other developers.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link 
            href="https://github.com/bendhq/bend/discussions" 
            target="_blank"
            className="px-6 py-3 bg-[#257ee1] hover:bg-[#1e6ec9] text-white rounded-full font-medium transition-colors flex items-center gap-2"
          >
            GitHub Discussions <ExternalLink className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

function ResourceCard({ icon, title, description, href, external = false }: { 
  icon: React.ReactNode
  title: string
  description: string
  href: string
  external?: boolean
}) {
  return (
    <Link 
      href={href} 
      target={external ? "_blank" : undefined}
      className="group bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all"
    >
      <div className="bg-[#1b1b1f] w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.05)] group-hover:border-[#257ee1]/30 transition-colors text-[#257ee1]">
        {icon}
      </div>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2 group-hover:text-[#257ee1] transition-colors flex items-center gap-2">
            {title}
            {external && <ExternalLink className="h-4 w-4" />}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

import Link from "next/link"
import { Github } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-[rgba(255,255,255,0.1)] bg-[#1b1b1f] pt-16 pb-8">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-4 hover:text-[#257ee1] transition-colors">
              <span>Bend</span>
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Backend Scaffolder for Modern Development.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Docs</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/docs/getting-started" className="hover:text-[#257ee1] transition-colors">Get Started</Link></li>
              <li><Link href="/docs/cli" className="hover:text-[#257ee1] transition-colors">CLI Reference</Link></li>
              <li><Link href="/docs/configuration" className="hover:text-[#257ee1] transition-colors">Configuration</Link></li>
              <li><Link href="/docs/plugins" className="hover:text-[#257ee1] transition-colors">Plugins</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="https://github.com/bendhq/bend" target="_blank" className="hover:text-[#257ee1] transition-colors">GitHub</Link></li>
              <li><Link href="https://github.com/bendhq/bend/issues" target="_blank" className="hover:text-[#257ee1] transition-colors">Issues</Link></li>
              <li><Link href="https://www.npmjs.com/package/create-bend" target="_blank" className="hover:text-[#257ee1] transition-colors">npm Package</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">More</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-[#257ee1] transition-colors">Blog</Link></li>
              <li><Link href="https://github.com/bendhq/bend/releases" target="_blank" className="hover:text-[#257ee1] transition-colors">Releases</Link></li>
              <li><Link href="/resources" className="hover:text-[#257ee1] transition-colors">Resources</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[rgba(255,255,255,0.1)] pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            Released under the MIT License.
          </p>
          <p className="flex items-center gap-1">
            Copyright © 2025 Bend.
          </p>
          <div className="flex items-center gap-4">
            <Link href="https://github.com/bendhq/bend" target="_blank" className="hover:text-white transition-colors">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://x.com/bendhqdotorg" target="_blank" className="hover:text-white transition-colors">
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

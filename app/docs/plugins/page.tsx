import Link from "next/link"
import { ArrowLeft, Puzzle } from 'lucide-react'

export default function PluginsPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/docs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Docs
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Plugins</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Extend Bend with plugins and custom integrations.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Puzzle className="h-6 w-6 text-[#257ee1]" />
            Built-in Features
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Bend comes with production-ready features out of the box:
          </p>

          <div className="grid gap-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Security</h3>
              <p className="text-sm text-muted-foreground">Helmet, CORS, rate limiting, and security headers pre-configured</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Logging</h3>
              <p className="text-sm text-muted-foreground">Winston or Pino logging with request/response tracking</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Error Handling</h3>
              <p className="text-sm text-muted-foreground">Centralized error handling with custom error classes</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2">Compression</h3>
              <p className="text-sm text-muted-foreground">Response compression for improved performance</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

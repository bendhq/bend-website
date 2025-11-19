import Link from "next/link"
import { ArrowLeft, Terminal, Zap, CheckCircle2 } from 'lucide-react'

export default function GettingStartedPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/docs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Docs
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Getting Started</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Create your first backend project with Bend in under a minute.
      </p>

      <div className="prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <Terminal className="h-6 w-6 text-[#257ee1]" />
          Installation
        </h2>
        
        <p className="text-muted-foreground mb-4">
          Bend requires Node.js 18+ or Bun. Run this command in your terminal:
        </p>

        <div className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 mb-8 font-mono text-sm">
          <span className="text-[#257ee1]">$</span> npm create bend@latest my-backend
        </div>

        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 mt-12">
          <Zap className="h-6 w-6 text-[#257ee1]" />
          Interactive Setup
        </h2>

        <p className="text-muted-foreground mb-4">
          Bend will guide you through an interactive setup:
        </p>

        <ul className="space-y-3 mb-8">
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Choose your runtime (Node.js or Bun)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Select your language (JavaScript or TypeScript)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Pick your framework (Express or Fastify)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">Choose your ORM (Mongoose, Prisma, or none)</span>
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4 mt-12">Next Steps</h2>

        <div className="grid gap-4">
          <Link href="/docs/cli" className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all block">
            <h3 className="text-lg font-bold mb-2">CLI Reference</h3>
            <p className="text-sm text-muted-foreground">Learn about all available commands and options</p>
          </Link>
          <Link href="/docs/configuration" className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all block">
            <h3 className="text-lg font-bold mb-2">Configuration</h3>
            <p className="text-sm text-muted-foreground">Customize your project configuration</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

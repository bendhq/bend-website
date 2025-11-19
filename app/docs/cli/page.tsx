import Link from "next/link"
import { ArrowLeft, Terminal } from 'lucide-react'

export default function CLIPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/docs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Docs
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">CLI Reference</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Complete command-line reference for Bend.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Terminal className="h-6 w-6 text-[#257ee1]" />
            create bend
          </h2>
          
          <div className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 mb-4 font-mono text-sm">
            npm create bend@latest [project-name] [options]
          </div>

          <p className="text-muted-foreground mb-4">
            Creates a new Bend backend project with interactive prompts.
          </p>

          <h3 className="text-xl font-bold mb-3 mt-6">Options</h3>
          <div className="space-y-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <code className="text-[#257ee1]">--runtime</code>
              <p className="text-sm text-muted-foreground mt-2">Specify runtime (node or bun)</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <code className="text-[#257ee1]">--typescript</code>
              <p className="text-sm text-muted-foreground mt-2">Use TypeScript (default: true)</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <code className="text-[#257ee1]">--framework</code>
              <p className="text-sm text-muted-foreground mt-2">Choose framework (express or fastify)</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <code className="text-[#257ee1]">--orm</code>
              <p className="text-sm text-muted-foreground mt-2">Choose ORM (mongoose, prisma, or none)</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

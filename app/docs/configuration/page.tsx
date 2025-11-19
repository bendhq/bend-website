import Link from "next/link"
import { ArrowLeft, Settings } from 'lucide-react'

export default function ConfigurationPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/docs" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Docs
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Configuration</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Configure your Bend project to match your needs.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Settings className="h-6 w-6 text-[#257ee1]" />
            Project Structure
          </h2>
          
          <p className="text-muted-foreground mb-6">
            Bend creates a clean, organized project structure with best practices built in:
          </p>

          <div className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 font-mono text-sm space-y-1">
            <div>my-backend/</div>
            <div className="ml-4">├── src/</div>
            <div className="ml-8">├── routes/</div>
            <div className="ml-8">├── middleware/</div>
            <div className="ml-8">├── models/</div>
            <div className="ml-8">└── index.ts</div>
            <div className="ml-4">├── .env</div>
            <div className="ml-4">├── .gitignore</div>
            <div className="ml-4">└── package.json</div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Environment Variables</h2>
          
          <p className="text-muted-foreground mb-4">
            Bend automatically sets up environment variable management with sensible defaults.
          </p>

          <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
            <h3 className="font-bold mb-2">Common Variables</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><code className="text-[#257ee1]">PORT</code> - Server port (default: 3000)</li>
              <li><code className="text-[#257ee1]">NODE_ENV</code> - Environment (development/production)</li>
              <li><code className="text-[#257ee1]">DATABASE_URL</code> - Database connection string</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

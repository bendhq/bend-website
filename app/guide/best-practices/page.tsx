import Link from "next/link"
import { ArrowLeft, CheckCircle2, Shield, Code2, Zap } from 'lucide-react'

export default function BestPracticesPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/guide" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Guide
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Best Practices</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Follow industry best practices that are built into every Bend project.
      </p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Code2 className="h-6 w-6 text-[#257ee1]" />
            Code Quality
          </h2>

          <div className="space-y-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">TypeScript First</h3>
                  <p className="text-sm text-muted-foreground">
                    Bend encourages TypeScript for type safety and better developer experience. Catch errors at compile time, not runtime.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Async/Await Pattern</h3>
                  <p className="text-sm text-muted-foreground">
                    Use modern async/await syntax instead of callbacks or raw promises for cleaner, more readable asynchronous code.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Error Handling</h3>
                  <p className="text-sm text-muted-foreground">
                    Centralized error handling with custom error classes. All errors are caught, logged, and returned with appropriate status codes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Shield className="h-6 w-6 text-[#257ee1]" />
            Security Practices
          </h2>

          <div className="space-y-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Environment Variables</h3>
                  <p className="text-sm text-muted-foreground">
                    Never commit secrets. Use .env files for sensitive data and keep them out of version control with .gitignore.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Input Validation</h3>
                  <p className="text-sm text-muted-foreground">
                    Always validate and sanitize user input. Bend includes validation middleware to protect against injection attacks.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Rate Limiting</h3>
                  <p className="text-sm text-muted-foreground">
                    Protect your API from abuse with built-in rate limiting. Configurable per-route or globally.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Security Headers</h3>
                  <p className="text-sm text-muted-foreground">
                    Helmet middleware sets secure HTTP headers automatically, protecting against common vulnerabilities like XSS and clickjacking.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Zap className="h-6 w-6 text-[#257ee1]" />
            Performance Optimization
          </h2>

          <div className="space-y-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Response Compression</h3>
                  <p className="text-sm text-muted-foreground">
                    Automatic gzip compression reduces response size and improves load times for your API consumers.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Database Indexing</h3>
                  <p className="text-sm text-muted-foreground">
                    Properly index your database queries. Bend's ORM configurations include common indexes out of the box.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="h-5 w-5 text-[#257ee1] mt-0.5 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Graceful Shutdown</h3>
                  <p className="text-sm text-muted-foreground">
                    Handle SIGTERM and SIGINT signals properly to close database connections and finish pending requests before shutdown.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Development Workflow</h2>
          <div className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-6">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Use <code className="text-[#257ee1] bg-[#1b1b1f] px-2 py-1 rounded">npm run dev</code> for hot reloading during development</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Write tests for critical business logic and API endpoints</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Use environment-specific configs for dev, staging, and production</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Monitor logs and set up alerts for production errors</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
                <span className="text-muted-foreground">Keep dependencies updated and audit for security vulnerabilities</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}

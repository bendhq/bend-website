import Link from "next/link"
import { ArrowLeft, Rocket, Zap, Shield, Code2 } from 'lucide-react'

export default function IntroductionPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/guide" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Guide
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Introduction to Bend</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Understand what Bend is and how it revolutionizes backend development.
      </p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4">What is Bend?</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Bend is a production-ready backend scaffolder that eliminates the tedious setup process when starting a new backend project. Instead of spending hours configuring Express, setting up middleware, implementing security headers, and organizing your project structure, Bend does it all for you in seconds.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you're building a REST API, microservice, or full-stack application backend, Bend provides a solid foundation with industry best practices built in from day one.
          </p>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Why Bend?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#1b1b1f] p-2 rounded-lg border border-[rgba(255,255,255,0.05)]">
                  <Zap className="h-5 w-5 text-[#257ee1]" />
                </div>
                <h3 className="text-lg font-bold">Lightning Fast Setup</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Go from zero to a fully configured backend in under 60 seconds. No more copying boilerplate or following lengthy setup guides.
              </p>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#1b1b1f] p-2 rounded-lg border border-[rgba(255,255,255,0.05)]">
                  <Shield className="h-5 w-5 text-[#257ee1]" />
                </div>
                <h3 className="text-lg font-bold">Secure by Default</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Security isn't optional. Every Bend project includes Helmet, CORS, rate limiting, and HPP protection configured correctly.
              </p>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#1b1b1f] p-2 rounded-lg border border-[rgba(255,255,255,0.05)]">
                  <Code2 className="h-5 w-5 text-[#257ee1]" />
                </div>
                <h3 className="text-lg font-bold">Best Practices Built-In</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clean architecture, proper error handling, structured logging, and graceful shutdown - all configured and ready to use.
              </p>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-[#1b1b1f] p-2 rounded-lg border border-[rgba(255,255,255,0.05)]">
                  <Rocket className="h-5 w-5 text-[#257ee1]" />
                </div>
                <h3 className="text-lg font-bold">Production Ready</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Deploy with confidence. Bend projects are optimized for production with compression, monitoring, and health checks.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#257ee1] flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h3 className="font-bold mb-1">Run the Command</h3>
                <p className="text-sm text-muted-foreground">Execute <code className="text-[#257ee1] bg-[#1b1b1f] px-2 py-1 rounded">npm create bend@latest</code> in your terminal</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#257ee1] flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h3 className="font-bold mb-1">Answer Interactive Prompts</h3>
                <p className="text-sm text-muted-foreground">Choose your runtime, language, framework, and ORM preferences</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#257ee1] flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h3 className="font-bold mb-1">Start Building</h3>
                <p className="text-sm text-muted-foreground">Your backend is ready with all dependencies installed and configured</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Who Should Use Bend?</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Developers</strong> who want to focus on business logic instead of boilerplate</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Teams</strong> that need consistent project structure across multiple services</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Startups</strong> that need to move fast without compromising on quality</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Anyone</strong> building a Node.js or Bun backend application</span>
            </li>
          </ul>
        </section>

        <div className="mt-12 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-muted-foreground mb-6">
            Jump into the getting started guide to create your first Bend project.
          </p>
          <Link href="/docs/getting-started" className="inline-flex items-center gap-2 px-6 py-3 bg-[#257ee1] hover:bg-[#1e6bc7] text-white font-medium rounded-lg transition-colors">
            Get Started <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

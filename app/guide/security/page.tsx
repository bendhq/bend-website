import Link from "next/link"
import { ArrowLeft, Shield, Lock, AlertTriangle, Eye } from 'lucide-react'

export default function SecurityPage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/guide" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Guide
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Security</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Understand the security features and how to keep your backend secure.
      </p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <div className="bg-[#257ee1]/10 border border-[#257ee1]/30 rounded-xl p-6 mb-8">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-[#257ee1] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2 text-[#257ee1]">Security is Non-Negotiable</h3>
                <p className="text-sm text-muted-foreground">
                  Every Bend project comes with production-grade security features enabled by default. You don't have to be a security expert to build secure applications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Lock className="h-6 w-6 text-[#257ee1]" />
            Built-in Security Features
          </h2>

          <div className="space-y-6">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Helmet - Security Headers</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Helmet sets various HTTP headers to protect your app from common web vulnerabilities:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-[#257ee1]">•</span>
                  <span><strong className="text-white">X-Frame-Options:</strong> Prevents clickjacking attacks</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#257ee1]">•</span>
                  <span><strong className="text-white">X-Content-Type-Options:</strong> Prevents MIME type sniffing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#257ee1]">•</span>
                  <span><strong className="text-white">Strict-Transport-Security:</strong> Enforces HTTPS connections</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#257ee1]">•</span>
                  <span><strong className="text-white">X-XSS-Protection:</strong> Enables browser XSS filtering</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">CORS Configuration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Cross-Origin Resource Sharing is properly configured to control which domains can access your API.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// Configured in app.ts</div>
                <div className="text-white">app.use(cors({'{'}</div>
                <div className="ml-4 text-white">origin: process.env.ALLOWED_ORIGINS,</div>
                <div className="ml-4 text-white">credentials: <span className="text-blue-400">true</span></div>
                <div className="text-white">{'}'}));</div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">Rate Limiting</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Protect your API from brute force attacks and DDoS attempts with intelligent rate limiting.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// Default: 100 requests per 15 minutes</div>
                <div className="text-blue-400">const <span className="text-white">limiter = rateLimit({'{'}</span></div>
                <div className="ml-4 text-white">windowMs: <span className="text-yellow-400">15</span> * <span className="text-yellow-400">60</span> * <span className="text-yellow-400">1000</span>,</div>
                <div className="ml-4 text-white">max: <span className="text-yellow-400">100</span></div>
                <div className="text-white">{'}'})</div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-3">HPP Protection</h3>
              <p className="text-sm text-muted-foreground">
                HTTP Parameter Pollution protection prevents attackers from polluting query parameters to cause unexpected behavior.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-[#257ee1]" />
            Common Vulnerabilities Prevented
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <h3 className="font-bold mb-2 text-sm">SQL Injection</h3>
              <p className="text-xs text-muted-foreground">Prevented by ORM parameterized queries</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <h3 className="font-bold mb-2 text-sm">XSS Attacks</h3>
              <p className="text-xs text-muted-foreground">Mitigated by security headers and input sanitization</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <h3 className="font-bold mb-2 text-sm">CSRF</h3>
              <p className="text-xs text-muted-foreground">Protected with CSRF tokens for state-changing operations</p>
            </div>
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-4">
              <h3 className="font-bold mb-2 text-sm">Clickjacking</h3>
              <p className="text-xs text-muted-foreground">Prevented by X-Frame-Options header</p>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Eye className="h-6 w-6 text-[#257ee1]" />
            Security Best Practices
          </h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">1</div>
              <div>
                <h3 className="font-bold mb-1">Keep Dependencies Updated</h3>
                <p className="text-sm text-muted-foreground">Regularly update packages and run <code className="text-[#257ee1] bg-[#1b1b1f] px-2 py-1 rounded">npm audit</code> to check for vulnerabilities</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">2</div>
              <div>
                <h3 className="font-bold mb-1">Use Environment Variables</h3>
                <p className="text-sm text-muted-foreground">Never hardcode secrets. Store API keys, database credentials, and tokens in .env files</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">3</div>
              <div>
                <h3 className="font-bold mb-1">Implement Authentication</h3>
                <p className="text-sm text-muted-foreground">Use JWT tokens or session-based auth. Never store passwords in plain text - always hash with bcrypt</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">4</div>
              <div>
                <h3 className="font-bold mb-1">Validate All Input</h3>
                <p className="text-sm text-muted-foreground">Never trust user input. Validate and sanitize all data before processing</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">5</div>
              <div>
                <h3 className="font-bold mb-1">Enable HTTPS in Production</h3>
                <p className="text-sm text-muted-foreground">Always use HTTPS in production. Use Let's Encrypt for free SSL certificates</p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl">
              <div className="w-6 h-6 rounded-full bg-[#257ee1] flex items-center justify-center text-xs font-bold flex-shrink-0">6</div>
              <div>
                <h3 className="font-bold mb-1">Monitor and Log</h3>
                <p className="text-sm text-muted-foreground">Set up logging and monitoring to detect suspicious activity and security incidents</p>
              </div>
            </div>
          </div>
        </section>

        <div className="mt-12 bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-8">
          <h3 className="text-xl font-bold mb-4">Need More Security?</h3>
          <p className="text-muted-foreground mb-6">
            For enterprise applications, consider adding additional security layers like API gateways, WAF, and security audits.
          </p>
          <Link href="/docs" className="inline-flex items-center gap-2 px-6 py-3 bg-[#257ee1] hover:bg-[#1e6bc7] text-white font-medium rounded-lg transition-colors">
            View Documentation <ArrowLeft className="h-4 w-4 rotate-180" />
          </Link>
        </div>
      </div>
    </div>
  )
}

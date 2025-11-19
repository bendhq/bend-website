import Link from "next/link"
import { ArrowLeft, Folder, FileCode, Layers } from 'lucide-react'

export default function StructurePage() {
  return (
    <div className="w-full max-w-[900px] px-4 sm:px-6 lg:px-8 py-16">
      <Link href="/guide" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-[#257ee1] mb-8 transition-colors">
        <ArrowLeft className="h-4 w-4" />
        Back to Guide
      </Link>

      <h1 className="text-4xl sm:text-5xl font-bold mb-4">Project Structure</h1>
      <p className="text-xl text-muted-foreground mb-12">
        Learn about the clean, organized structure Bend creates for your projects.
      </p>

      <div className="prose prose-invert max-w-none space-y-8">
        <section>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Folder className="h-6 w-6 text-[#257ee1]" />
            Directory Overview
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Bend follows a clean, scalable architecture that separates concerns and makes your codebase easy to navigate and maintain.
          </p>

          <div className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-6 font-mono text-sm mb-6">
            <div className="space-y-1 text-muted-foreground">
              <div className="text-[#257ee1]">my-backend/</div>
              <div className="ml-4">├── <span className="text-yellow-400">src/</span></div>
              <div className="ml-8">├── <span className="text-blue-300">config/</span> <span className="text-gray-500">// Configuration files</span></div>
              <div className="ml-8">├── <span className="text-blue-300">controllers/</span> <span className="text-gray-500">// Request handlers</span></div>
              <div className="ml-8">├── <span className="text-blue-300">models/</span> <span className="text-gray-500">// Database models</span></div>
              <div className="ml-8">├── <span className="text-blue-300">routes/</span> <span className="text-gray-500">// API routes</span></div>
              <div className="ml-8">├── <span className="text-blue-300">services/</span> <span className="text-gray-500">// Business logic</span></div>
              <div className="ml-8">├── <span className="text-blue-300">middlewares/</span> <span className="text-gray-500">// Custom middleware</span></div>
              <div className="ml-8">├── <span className="text-blue-300">utils/</span> <span className="text-gray-500">// Helper functions</span></div>
              <div className="ml-8">├── <span className="text-white">app.ts</span> <span className="text-gray-500">// Express/Fastify app</span></div>
              <div className="ml-8">└── <span className="text-white">server.ts</span> <span className="text-gray-500">// Server entry point</span></div>
              <div className="ml-4">├── .env</div>
              <div className="ml-4">├── .gitignore</div>
              <div className="ml-4">├── package.json</div>
              <div className="ml-4">└── tsconfig.json</div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Layers className="h-6 w-6 text-[#257ee1]" />
            Layer Breakdown
          </h2>

          <div className="space-y-6">
            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#257ee1]" />
                Routes
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Define your API endpoints and map them to controllers. Routes are the entry point for all HTTP requests.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// routes/users.ts</div>
                <div className="text-blue-400">router.get<span className="text-white">(</span><span className="text-green-400">'/users'</span><span className="text-white">, userController.getAll)</span></div>
                <div className="text-blue-400">router.post<span className="text-white">(</span><span className="text-green-400">'/users'</span><span className="text-white">, userController.create)</span></div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#257ee1]" />
                Controllers
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Handle HTTP requests and responses. Controllers orchestrate the flow between routes and services.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// controllers/userController.ts</div>
                <div className="text-blue-400">export const <span className="text-yellow-400">getAll</span> = <span className="text-purple-400">async</span> <span className="text-white">(req, res) =&gt; {'{'}</span></div>
                <div className="ml-4 text-blue-400">const <span className="text-white">users = </span><span className="text-purple-400">await</span> <span className="text-white">userService.findAll()</span></div>
                <div className="ml-4 text-white">res.json(users)</div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#257ee1]" />
                Services
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Contain your business logic. Services interact with models and perform operations independent of HTTP.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// services/userService.ts</div>
                <div className="text-blue-400">export const <span className="text-yellow-400">findAll</span> = <span className="text-purple-400">async</span> <span className="text-white">() =&gt; {'{'}</span></div>
                <div className="ml-4 text-purple-400">return <span className="text-purple-400">await</span> <span className="text-white">User.find()</span></div>
                <div className="text-white">{'}'}</div>
              </div>
            </div>

            <div className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6">
              <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#257ee1]" />
                Models
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Define your data structure and database schema. Models represent your application's data layer.
              </p>
              <div className="bg-[#1b1b1f] p-4 rounded-lg font-mono text-xs">
                <div className="text-gray-400">// models/User.ts</div>
                <div className="text-blue-400">const <span className="text-white">userSchema = </span><span className="text-purple-400">new</span> <span className="text-yellow-400">Schema</span><span className="text-white">({'{'}</span></div>
                <div className="ml-4 text-white">name: String,</div>
                <div className="ml-4 text-white">email: String</div>
                <div className="text-white">{'}'})</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Benefits of This Structure</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Separation of Concerns:</strong> Each layer has a single responsibility</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Testability:</strong> Easy to unit test services and controllers independently</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Scalability:</strong> Structure grows naturally as your application expands</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-[#257ee1] mt-2 flex-shrink-0"></div>
              <span className="text-muted-foreground"><strong className="text-white">Maintainability:</strong> Easy to locate and modify specific functionality</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  )
}

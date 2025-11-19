import Link from "next/link"
import { BookOpen, Code2, Rocket, Shield } from 'lucide-react'

export default function GuidePage() {
  return (
    <div className="w-full max-w-[1200px] px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Guide</h1>
        <p className="text-xl text-muted-foreground">
          Learn Bend from the ground up with our comprehensive guide.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <GuideCard
          icon={<BookOpen className="h-6 w-6 text-[#257ee1]" />}
          title="Introduction"
          description="Understand what Bend is and how it can help you build production-ready backends faster."
          href="/guide/introduction"
        />
        <GuideCard
          icon={<Code2 className="h-6 w-6 text-[#257ee1]" />}
          title="Project Structure"
          description="Learn about the clean, organized structure Bend creates for your projects."
          href="/guide/structure"
        />
        <GuideCard
          icon={<Rocket className="h-6 w-6 text-[#257ee1]" />}
          title="Best Practices"
          description="Follow industry best practices that are built into every Bend project."
          href="/guide/best-practices"
        />
        <GuideCard
          icon={<Shield className="h-6 w-6 text-[#257ee1]" />}
          title="Security"
          description="Understand the security features and how to keep your backend secure."
          href="/guide/security"
        />
      </div>
    </div>
  )
}

function GuideCard({ icon, title, description, href }: { icon: React.ReactNode, title: string, description: string, href: string }) {
  return (
    <Link href={href} className="group bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 transition-all">
      <div className="bg-[#1b1b1f] w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.05)] group-hover:border-[#257ee1]/30 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#257ee1] transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </Link>
  )
}

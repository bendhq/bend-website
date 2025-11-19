import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { FeatureShowcase } from "@/components/feature-showcase"
import { ProjectStructure } from "@/components/project-structure"
import { GetStarted } from "@/components/get-started"

export default function Home() {
  return (
    <div className="w-full max-w-[1440px] px-4 sm:px-6 lg:px-8 flex flex-col gap-24 pb-24">
      <Hero />
      <Features />
      <GetStarted />
      <FeatureShowcase />
      <ProjectStructure />
    </div>
  )
}

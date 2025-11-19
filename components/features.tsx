"use client"

import { useRef } from "react"
import { Zap, Shield, FileCode } from 'lucide-react'
import { motion, useInView } from "framer-motion"

export function Features() {
  return (
    <section className="grid md:grid-cols-3 gap-6 w-full">
      <FeatureCard 
        icon={<Zap className="h-6 w-6 text-[#257ee1]" />}
        title="Smart Detection"
        description="Auto-detects Node/Bun and package manager. Intelligently configures JS/TS, Express/Fastify, and Mongoose/Prisma based on your preferences."
        delay={0}
      />
      <FeatureCard 
        icon={<Shield className="h-6 w-6 text-[#257ee1]" />}
        title="Production Ready"
        description="Comes with security headers, rate limiting, logging, error handling, compression, and graceful shutdown pre-configured out of the box."
        delay={0.1}
      />
      <FeatureCard 
        icon={<FileCode className="h-6 w-6 text-[#257ee1]" />}
        title="TypeScript First"
        description="Built with TypeScript in mind. Enjoy full type safety, minimal boilerplate, and optimized configurations for the best developer experience."
        delay={0.2}
      />
    </section>
  )
}

function FeatureCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay }}
      className="bg-[#2f2f32]/50 border border-[rgba(255,255,255,0.05)] rounded-xl p-6 hover:bg-[#2f2f32] hover:border-[#257ee1]/30 hover:shadow-[0_0_30px_rgba(37,126,225,0.15)] transition-all cursor-pointer group"
    >
      <div className="bg-[#1b1b1f] w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-[rgba(255,255,255,0.05)] group-hover:border-[#257ee1]/30 group-hover:scale-110 group-hover:rotate-[5deg] transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-[#257ee1] transition-colors">{title}</h3>
      <p className="text-muted-foreground leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  )
}

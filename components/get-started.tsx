"use client"

import { useState, useRef } from "react"
import { Check, Copy } from 'lucide-react'
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

const commands = {
  npm: "npm create bend@latest",
  pnpm: "pnpm create bend",
  yarn: "yarn create bend",
  bun: "bunx create-bend"
}

export function GetStarted() {
  const [activeTab, setActiveTab] = useState<keyof typeof commands>("npm")
  const [copied, setCopied] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const copyCommand = () => {
    navigator.clipboard.writeText(commands[activeTab])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-3xl mx-auto"
    >
      <div className="text-center mb-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold mb-4"
        >
          Get Started in Seconds
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground"
        >
          Bootstrap your next backend project with a single command.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_0_40px_rgba(37,126,225,0.2)] transition-shadow"
      >
        <div className="flex items-center border-b border-[rgba(255,255,255,0.05)] px-2 select-none">
          {(Object.keys(commands) as Array<keyof typeof commands>).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "px-4 py-3 text-sm font-medium transition-all relative hover:scale-105 select-none",
                activeTab === tab ? "text-[#257ee1]" : "text-muted-foreground hover:text-white"
              )}
              type="button"
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#257ee1]" />
              )}
            </button>
          ))}
        </div>
        
        <div className="p-6 flex items-center justify-between group">
          <div className="flex items-center gap-3 font-mono text-sm sm:text-base overflow-x-auto select-none">
            <span className="text-[#257ee1] select-none">$</span>
            <span className="text-white whitespace-nowrap">
              {commands[activeTab]}
            </span>
          </div>
          
          <button 
            onClick={copyCommand}
            className="p-2 rounded-md hover:bg-[rgba(255,255,255,0.1)] text-muted-foreground hover:text-white transition-all hover:scale-110 select-none"
            aria-label="Copy command"
            type="button"
          >
            {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
          </button>
        </div>
      </motion.div>
    </motion.section>
  )
}

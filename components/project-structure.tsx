"use client"

import { useRef } from "react"
import { Folder, FileJson, FileCode, File } from 'lucide-react'
import { motion, useInView } from "framer-motion"

export function ProjectStructure() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-12"
    >
      <div className="text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl font-bold mb-4"
        >
          Clean Architecture
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground"
        >
          A scalable project structure that grows with your application.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-2xl mx-auto bg-[#161618] border border-[rgba(255,255,255,0.1)] rounded-xl p-8 font-mono text-sm shadow-2xl transition-colors hover:border-[#257ee1]/30"
      >
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="flex items-center gap-2 text-[#257ee1] mb-2"
        >
          <Folder className="h-4 w-4 fill-current" />
          <span>my-backend/</span>
        </motion.div>
        
        <div className="pl-6 space-y-1 border-l border-[rgba(255,255,255,0.1)] ml-2">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-2 text-white"
          >
            <Folder className="h-4 w-4 text-yellow-500 fill-yellow-500/20" />
            <span>src/</span>
          </motion.div>
          
          <div className="pl-6 space-y-1 border-l border-[rgba(255,255,255,0.1)] ml-2">
            {["config/", "controllers/", "models/", "routes/", "services/", "middlewares/", "utils/"].map((folder, i) => (
              <TreeItem key={folder} name={folder} type="folder" delay={0.6 + i * 0.05} isInView={isInView} />
            ))}
            <TreeItem name="app.ts" type="file" delay={0.95} isInView={isInView} />
            <TreeItem name="server.ts" type="file" delay={1.0} isInView={isInView} />
          </div>
          
          <TreeItem name=".env" type="file" icon={<File className="h-4 w-4 text-gray-500" />} delay={1.05} isInView={isInView} />
          <TreeItem name="package.json" type="file" icon={<FileJson className="h-4 w-4 text-red-400" />} delay={1.1} isInView={isInView} />
          <TreeItem name="tsconfig.json" type="file" icon={<FileCode className="h-4 w-4 text-blue-400" />} delay={1.15} isInView={isInView} />
        </div>
      </motion.div>
    </motion.section>
  )
}

function TreeItem({ name, type, icon, delay, isInView }: { name: string, type: "folder" | "file", icon?: React.ReactNode, delay: number, isInView: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -10 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
      transition={{ duration: 0.3, delay }}
      className="flex items-center gap-2 text-muted-foreground hover:text-white hover:translate-x-1 transition-all cursor-default"
    >
      {icon ? icon : (
        type === "folder" ? 
        <Folder className="h-4 w-4 text-blue-300/50" /> : 
        <FileCode className="h-4 w-4 text-blue-400" />
      )}
      <span>{name}</span>
    </motion.div>
  )
}

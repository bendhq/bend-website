"use client"

import { useRef } from "react"
import { Server, ShieldCheck, Activity, Code2 } from 'lucide-react'
import { motion, useInView } from "framer-motion"

export function FeatureShowcase() {
  return (
    <section className="w-full space-y-24 py-12">
      <ShowcaseItem 
        title="Multiple Stacks"
        description="Whether you prefer Express or Fastify, Mongoose or Prisma, Bend has you covered. It auto-wires everything with preconfigured routing, controllers, and services so you can start coding logic immediately."
        icon={<Server className="h-6 w-6 text-[#257ee1]" />}
        align="left"
      >
        <div className="grid grid-cols-2 gap-4 p-6">
          {[
            { name: "Express", desc: "Standard & Robust" },
            { name: "Fastify", desc: "High Performance" },
            { name: "Prisma", desc: "Type-safe ORM" },
            { name: "Mongoose", desc: "MongoDB ODM" }
          ].map((item, i) => (
            <motion.div 
              key={item.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1b1b1f] p-4 rounded-lg border border-[rgba(255,255,255,0.05)] hover:border-[#257ee1]/30 hover:scale-105 hover:-translate-y-1 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <div className="font-bold text-white">{item.name}</div>
              <div className="text-xs text-muted-foreground">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </ShowcaseItem>

      <ShowcaseItem 
        title="Secure by Default"
        description="Security isn't an afterthought. Bend apps come with Helmet for headers, CORS configuration, HPP (HTTP Parameter Pollution) protection, rate limiting, and compression enabled by default."
        icon={<ShieldCheck className="h-6 w-6 text-[#257ee1]" />}
        align="right"
      >
        <div className="p-6 font-mono text-xs sm:text-sm text-muted-foreground space-y-2">
          {[
            { check: "helmet()", comment: "Security Headers" },
            { check: "cors()", comment: "Cross-Origin Resource Sharing" },
            { check: "rateLimit()", comment: "DDoS Protection" },
            { check: "hpp()", comment: "Parameter Pollution" }
          ].map((item, i) => (
            <motion.div 
              key={item.check}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 cursor-pointer hover:translate-x-1 transition-transform"
            >
              <span className="text-green-500">✓</span>
              <span>{item.check} <span className="text-gray-500">// {item.comment}</span></span>
            </motion.div>
          ))}
        </div>
      </ShowcaseItem>

      <ShowcaseItem 
        title="Logging & Monitoring"
        description="Built-in Winston logger with daily rotation, HTTP request logging, and structured metadata. Debugging is easier when your logs are clean, consistent, and informative."
        icon={<Activity className="h-6 w-6 text-[#257ee1]" />}
        align="left"
      >
        <div className="p-4 font-mono text-xs text-gray-300 bg-[#0d0d0d] rounded-lg border border-[rgba(255,255,255,0.05)] overflow-hidden">
          {[
            { time: "14:30:01", level: "INFO", color: "text-blue-400", msg: "Server started on port 3000" },
            { time: "14:30:05", level: "INFO", color: "text-blue-400", msg: "DB Connected successfully" },
            { time: "14:32:10", level: "HTTP", color: "text-green-400", msg: "GET /api/users 200 45ms" },
            { time: "14:35:22", level: "WARN", color: "text-yellow-400", msg: "Rate limit exceeded for IP 127.0.0.1" }
          ].map((log, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="mb-1"
            >
              <span className="text-gray-500">[2023-10-25 {log.time}]</span> <span className={log.color}>{log.level}</span>: {log.msg}
            </motion.div>
          ))}
        </div>
      </ShowcaseItem>
      
      <ShowcaseItem 
        title="Developer Experience"
        description="We prioritize your workflow. TypeScript-first approach, nodemon for hot reloading, esbuild for fast builds, and a consistent, scalable folder structure that makes sense."
        icon={<Code2 className="h-6 w-6 text-[#257ee1]" />}
        align="right"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center h-full"
        >
           <div className="text-center space-y-2">
             <motion.div 
               className="text-4xl font-bold text-white"
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.2 }}
               viewport={{ once: true }}
             >
               10x
             </motion.div>
             <div className="text-sm text-muted-foreground">Faster Setup</div>
             <div className="w-full h-1 bg-[#2f2f32] rounded-full mt-4 overflow-hidden">
               <motion.div 
                 className="h-full bg-[#257ee1]"
                 initial={{ width: "0%" }}
                 whileInView={{ width: "90%" }}
                 transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                 viewport={{ once: true }}
               />
             </div>
           </div>
        </motion.div>
      </ShowcaseItem>
    </section>
  )
}

function ShowcaseItem({ 
  title, 
  description, 
  icon, 
  children, 
  align 
}: { 
  title: string, 
  description: string, 
  icon: React.ReactNode, 
  children: React.ReactNode, 
  align: "left" | "right" 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-150px" })

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={`flex flex-col md:flex-row gap-8 md:gap-16 items-center ${align === "right" ? "md:flex-row-reverse" : ""}`}
    >
      <motion.div 
        initial={{ opacity: 0, x: align === "left" ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: align === "left" ? -50 : 50 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex-1 space-y-4"
      >
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[#2f2f32] border border-[rgba(255,255,255,0.05)] hover:scale-110 hover:rotate-[5deg] transition-all">
          {icon}
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: align === "left" ? 50 : -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: align === "left" ? 50 : -50 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="flex-1 w-full"
      >
        <div className="bg-[#1e1e20] border border-[rgba(255,255,255,0.05)] rounded-xl overflow-hidden shadow-2xl min-h-[200px] flex flex-col justify-center relative group hover:border-[#257ee1]/30 transition-colors">
          <div className="absolute inset-0 bg-gradient-to-br from-[#257ee1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

export function Cube3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotation, setRotation] = useState({ x: -20, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    const centerX = rect.width / 2
    const centerY = rect.height / 2
    
    const rotateY = ((x - centerX) / centerX) * 20
    const rotateX = -((y - centerY) / centerY) * 20 - 20
    
    setRotation({ x: rotateX, y: rotateY })
  }

  const handleMouseLeave = () => {
    setRotation({ x: -20, y: 0 })
    setIsHovered(false)
  }

  return (
    <motion.div 
      ref={containerRef}
      className="cube-container relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#257ee1] rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: [0, Math.cos(i * Math.PI / 4) * 150, 0],
            y: [0, Math.sin(i * Math.PI / 4) * 150, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.2,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div 
        className="cube"
        style={{
          rotateX: rotation.x,
          rotateY: rotation.y,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        {/* Layer 1: Runtime (Bottom) */}
        <motion.div 
          className="cube-layer" 
          style={{ transform: 'translateY(100px)' }}
          animate={{ 
            y: isHovered ? 110 : 100,
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="cube-face face-front flex items-center justify-center text-[#257ee1] font-mono text-xs font-bold tracking-widest hover:bg-[#257ee1]/20 transition-colors">RUNTIME</div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </motion.div>

        {/* Layer 2: Framework */}
        <motion.div 
          className="cube-layer" 
          style={{ transform: 'translateY(50px)' }}
          animate={{ 
            y: isHovered ? 60 : 50,
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <div className="cube-face face-front flex items-center justify-center text-[#257ee1] font-mono text-xs font-bold tracking-widest hover:bg-[#257ee1]/20 transition-colors">FRAMEWORK</div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </motion.div>

        {/* Layer 3: ORM */}
        <motion.div 
          className="cube-layer" 
          style={{ transform: 'translateY(0px)' }}
          animate={{ 
            y: isHovered ? 10 : 0,
          }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <div className="cube-face face-front flex items-center justify-center text-[#257ee1] font-mono text-xs font-bold tracking-widest hover:bg-[#257ee1]/20 transition-colors">ORM</div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top"></div>
          <div className="cube-face face-bottom"></div>
        </motion.div>

        {/* Layer 4: DB (Top) */}
        <motion.div 
          className="cube-layer" 
          style={{ transform: 'translateY(-50px)' }}
          animate={{ 
            y: isHovered ? -40 : -50,
          }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <div className="cube-face face-front flex items-center justify-center text-[#257ee1] font-mono text-xs font-bold tracking-widest hover:bg-[#257ee1]/20 transition-colors">DATABASE</div>
          <div className="cube-face face-back"></div>
          <div className="cube-face face-right"></div>
          <div className="cube-face face-left"></div>
          <div className="cube-face face-top bg-[#257ee1]/20"></div>
          <div className="cube-face face-bottom"></div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#257ee1] rounded-full -z-10" 
        animate={{
          opacity: isHovered ? [0.2, 0.35, 0.2] : [0.15, 0.25, 0.15],
          scale: isHovered ? [1, 1.1, 1] : [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{ filter: 'blur(80px)' }}
      />
    </motion.div>
  )
}

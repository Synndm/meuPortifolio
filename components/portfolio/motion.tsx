"use client"

import type { ReactNode } from "react"
import { motion, MotionConfig, useScroll, useSpring } from "motion/react"

export const easeOut = [0.22, 1, 0.36, 1] as const

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </motion.div>
  )
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-[60] bg-gradient-to-r from-violet-500 via-fuchsia-400 to-purple-500"
    />
  )
}

export function BackgroundGlow() {
  return (
    // Radial gradients instead of filter: blur() — same soft look, but the GPU
    // only has to move the layers instead of re-blurring them every frame.
    <div aria-hidden className="page-bg fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute -top-72 -right-72 w-[60rem] h-[60rem] bg-[radial-gradient(circle,rgba(147,51,234,0.22)_0%,transparent_60%)] animate-float-slow" />
      <div
        className="absolute top-1/4 -left-80 w-[56rem] h-[56rem] bg-[radial-gradient(circle,rgba(109,40,217,0.18)_0%,transparent_60%)] animate-float-slow"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute -bottom-72 right-0 w-[52rem] h-[52rem] bg-[radial-gradient(circle,rgba(192,38,211,0.12)_0%,transparent_60%)] animate-float-slow"
        style={{ animationDelay: "-12s" }}
      />
      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
    </div>
  )
}

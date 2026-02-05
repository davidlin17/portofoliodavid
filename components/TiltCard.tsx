"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { ReactNode } from "react"

export default function TiltCard({ children }: { children: ReactNode }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const rotateX = useTransform(y, [-100, 100], [15, -15])
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const dx = e.clientX - rect.left - rect.width / 2
    const dy = e.clientY - rect.top - rect.height / 2
    x.set(dx)
    y.set(dy)
  }

  function handleMouseLeave() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      transition={{ type: "spring", stiffness: 150, damping: 20 }}
      className="relative"
    >
      {children}
    </motion.div>
  )
}

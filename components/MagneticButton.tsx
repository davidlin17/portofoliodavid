"use client"

import { motion } from "framer-motion"
import { useRef } from "react"

export default function MagneticButton({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMove(e: React.MouseEvent) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  function reset() {
    if (!ref.current) return
    ref.current.style.transform = "translate(0px, 0px)"
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  )
}

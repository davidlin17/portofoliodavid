"use client"

import { motion } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function SkillCard({
  name,
  icon,
}: {
  name: string
  icon: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ref.current.style.setProperty("--x", `${x}px`)
    ref.current.style.setProperty("--y", `${y}px`)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0.85 }}
      animate={{ opacity: 1 }}
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      className="
        relative overflow-hidden rounded-2xl p-6
        bg-white/5 border border-white/10
        backdrop-blur-md
        group
      "
    >
      {/* GRADIENT FOLLOW */}
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 group-hover:opacity-100
          transition duration-300
        "
        style={{
          background: `
            radial-gradient(
              180px at var(--x) var(--y),
              rgba(59,130,246,0.35),
              transparent 70%
            )
          `,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center gap-3">
        <div className="relative w-10 h-10">
          <Image
            src={icon}
            alt={name}
            fill
            className="object-contain"
          />
        </div>

        <span className="text-sm text-gray-300">
          {name}
        </span>
      </div>
    </motion.div>
  )
}

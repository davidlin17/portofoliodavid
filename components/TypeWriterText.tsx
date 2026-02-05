"use client"

import { motion } from "framer-motion"

export default function TypewriterText({
  text,
  delay = 0,
}: {
  text: string
  delay?: number
}) {
  return (
    <motion.p
      className="text-gray-400 mt-6 max-w-md leading-relaxed"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      transition={{
        duration: text.length * 0.04,
        delay,
        ease: "linear",
      }}
      style={{
        whiteSpace: "nowrap",
        overflow: "hidden",
      }}
    >
      <span className="whitespace-normal">
        {text}
      </span>

      {/* CURSOR */}
      <motion.span
        className="ml-1 text-cyan-400"
        animate={{ opacity: [0, 1, 0] }}
        transition={{
          duration: 1,
          repeat: Infinity,
        }}
      >
        |
      </motion.span>
    </motion.p>
  )
}

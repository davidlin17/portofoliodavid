"use client"

import { motion } from "framer-motion"

export default function AuroraBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-neutral-950">
      <motion.svg
        viewBox="0 0 1200 600"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
        animate={{ y: [0, -40, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <defs>
          <linearGradient id="auroraGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(203,213,225,0.45)" />
            <stop offset="50%" stopColor="rgba(59,130,246,0.45)" />
            <stop offset="100%" stopColor="rgba(29,78,216,0.45)" />
          </linearGradient>

          <filter id="blur">
            <feGaussianBlur stdDeviation="60" />
          </filter>
        </defs>

        {/* ZIG ZAG PATH */}
        <motion.path
          d="
            M0 200
            L100 240
            L200 180
            L300 260
            L400 200
            L500 280
            L600 210
            L700 300
            L800 220
            L900 320
            L1000 250
            L1100 340
            L1200 280
            L1200 0
            L0 0
            Z
          "
          fill="url(#auroraGradient)"
          filter="url(#blur)"
          animate={{
            d: [
              `
              M0 200
              L100 240
              L200 180
              L300 260
              L400 200
              L500 280
              L600 210
              L700 300
              L800 220
              L900 320
              L1000 250
              L1100 340
              L1200 280
              L1200 0
              L0 0
              Z
              `,
              `
              M0 220
              L100 200
              L200 240
              L300 180
              L400 260
              L500 210
              L600 300
              L700 220
              L800 320
              L900 250
              L1000 340
              L1100 280
              L1200 300
              L1200 0
              L0 0
              Z
              `
            ]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.svg>
    </div>
  )
}

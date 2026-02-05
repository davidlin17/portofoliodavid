"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          setTimeout(() => setDone(true), 400)
          return 100
        }
        return p + Math.floor(Math.random() * 6) + 2
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="
            fixed inset-0 z-[9999]
            flex flex-col items-center justify-center
            bg-neutral-950
          "
        >
          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold mb-8"
          >
            Loading
          </motion.h1>

          {/* BAR */}
          <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-cyan-400"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut", duration: 0.3 }}
            />
          </div>

          {/* PERCENT */}
          <motion.p
            key={progress}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-gray-400"
          >
            {progress}%
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

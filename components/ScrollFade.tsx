"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useRef } from "react"

export default function ScrollFade({
  children,
}: {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          })
        } else {
          controls.start({
            opacity: 0,
            y: 40,
            transition: { duration: 0.6, ease: "easeIn" },
          })
        }
      },
      {
        threshold: 0.3,
      }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [controls])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={controls}
    >
      {children}
    </motion.div>
  )
}

"use client"

import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      style={{ scaleX: scrollYProgress, zIndex: 999 }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-cyan-400 origin-left"
    />
  )
}
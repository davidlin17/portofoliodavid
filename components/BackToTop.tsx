"use client"

import { motion, useScroll } from "framer-motion"
import { useEffect, useState } from "react"

export default function BackToTop() {
  const { scrollY } = useScroll()
  const [show, setShow] = useState(false)

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setShow(y > 300)
    })
  }, [scrollY])

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!show) return null

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-6 right-6 z-[999]
        w-12 h-12 rounded-full
        bg-white/10 backdrop-blur-xl
        border border-white/20
        text-white
        shadow-xl
        flex items-center justify-center
      "
    >
      ↑
    </motion.button>
  )
}

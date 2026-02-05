"use client"

import { motion } from "framer-motion"

export default function MetallicText({ text }: { text: string }) {
  return (
    <motion.h1
      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "linear",
      }}
className="
  text-5xl md:text-6xl font-extrabold
  bg-gradient-to-r from-gray-300 via-slate-400 to-blue-400
  bg-[length:200%_200%]
  bg-clip-text text-transparent
"

    >
      {text}
    </motion.h1>
  )
}

"use client"

import AuroraBackground from "@/components/AuroraBackground"
import MetallicText from "@/components/MetallicText"
import MagneticButton from "@/components/MagneticButton"
import TiltCard from "@/components/TiltCard"
import { motion } from "framer-motion"
import Image from "next/image"
import TypewriterText from "@/components/TypeWriterText"


export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <AuroraBackground />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm text-gray-400">
            “Just do it”
          </span>

          <div className="mt-4">
            <MetallicText text="Hi, I’m David Lin" />
          </div>

  <TypewriterText
  delay={0.6}
  text="Fullstack developer focused on modern UI, smooth animations,
interactive websites, and scalable React & Next.js architecture."
/>


          <div className="flex gap-4 mt-8">
            <MagneticButton>
              <a
                href="/cv/CV David Lin.pdf"
                download
                className="
                  px-6 py-3 rounded-full
                  bg-gradient-to-r from-gray-300 to-blue-400
                  text-black font-semibold
                "
              >
                Download CV
              </a>
            </MagneticButton>
          </div>
        </motion.div>

        {/* RIGHT CARD SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <TiltCard>
            <div
            className="
              relative
              w-[310px]
              h-[520px]
              rounded-3xl p-6
              bg-white/10 backdrop-blur-xl
              border border-white/20
              shadow-2xl
              flex flex-col
            "

              style={{
                transform: "translateZ(50px)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* HEADER */}
              <div
                className="text-center"
                style={{ transform: "translateZ(30px)" }}
              >
                <h3 className="text-xl font-semibold">David Lin</h3>
                <p className="text-sm text-gray-400">
                  Fullstack Developer
                </p>
              </div>

              {/* IMAGE */}
              <div className="
              relative w-[260px] 
              h-[380px] rounded-3xl 
              overflow-hidden">

                <Image
                  src="/myfacelol.jpg"
                  alt="David profile"
                  fill
                  priority
                  className="object-cover"
                />

                {/* overlay biar nyatu */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* FOOTER */}
              <div
                className="flex justify-between mt-6 text-sm text-gray-400"
                style={{ transform: "translateZ(30px)" }}
              >
                <span>Indonesia</span>
                <span>Tangerang</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}

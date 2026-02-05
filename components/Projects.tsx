"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"

const placeholders = [
  { title: "Project Vault", desc: "Rebuilding previous works" },
  { title: "New Case Studies", desc: "Coming soon" },
]

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-white/5">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4"
        >
          Projects
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mb-12 max-w-xl"
        >
          Currently rebuilding my project archive.
          New case studies will be available soon.
        </motion.p>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          {placeholders.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial={{ y: 0 }}
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              whileHover={{ scale: 1.04, y: -12 }}
              className="
                relative overflow-hidden
                p-8 rounded-3xl
                border border-white/20
                bg-white/5 backdrop-blur-xl
                group
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute inset-0 opacity-0
                  group-hover:opacity-100
                  transition duration-300
                "
                style={{
                  background: `
                    radial-gradient(
                      300px at 50% 50%,
                      rgba(59,130,246,0.25),
                      transparent 70%
                    )
                  `,
                }}
              />

              {/* CONTENT */}
              <div className="relative z-10">
                <span className="text-sm text-gray-400">
                  🚧 Under Maintenance
                </span>

                <h3 className="text-xl font-semibold mt-2">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

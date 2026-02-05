"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"
import SkillCard from "@/components/SkillCard"

const tools = [
  { name: "C", icon: "/icons/c.svg" },
  { name: "C#", icon: "/icons/csharp.svg" },
  { name: "Java", icon: "/icons/java.svg" },
  { name: "Python", icon: "/icons/python.svg" },
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "PHP", icon: "/icons/php.svg" },

  { name: "HTML", icon: "/icons/html.svg" },
  { name: "CSS", icon: "/icons/css.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextjs.svg" },

  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
]

export default function About() {
  return (
    <section id="about" className="py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
        className="max-w-6xl mx-auto px-6"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4"
        >
          Tools & Technologies
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mb-12 max-w-2xl"
        >
          Tools and technologies I use to build modern,
          scalable, and interactive web applications.
        </motion.p>

        {/* GRID */}
        <motion.div
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {tools.map((tool, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              exit="hidden"
              viewport={{ once: false, amount: 0.3 }}
            >
              <SkillCard
                name={tool.name}
                icon={tool.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

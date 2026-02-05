"use client"

import { motion } from "framer-motion"
import { fadeUp, stagger } from "@/lib/motion"
import Image from "next/image"

const contacts = [
  {
    name: "LinkedIn",
    icon: "/icons/linkedin.svg",
    link: "https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile",
  },
  {
    name: "Instagram",
    icon: "/icons/instagram.svg",
    link: "https://instagram.com/davitlinn",
  },
  {
    name: "Gmail",
    icon: "/icons/gmail.svg",
    link: "mailto:davidlin.info@gmail.com",
  },
]

export default function Contact() {
  return (
    <section id="contact" className="py-32">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-5xl mx-auto px-6 text-center"
      >
        {/* TITLE */}
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-bold mb-4"
        >
          Get In Touch
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-gray-400 mb-12"
        >
          Interested in working together or just want to say hi?
        </motion.p>

        {/* ICONS */}
        <motion.div
          variants={stagger}
          className="flex justify-center gap-6"
        >
          {contacts.map((c, i) => (
            <motion.a
              key={i}
              href={c.link}
              target="_blank"
              rel="noopener noreferrer"
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative group
                w-16 h-16
                flex items-center justify-center
                rounded-2xl
                bg-white/5 border border-white/10
                backdrop-blur-md
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
                      120px at 50% 50%,
                      rgba(59,130,246,0.35),
                      transparent 70%
                    )
                  `,
                }}
              />

              <div className="relative w-7 h-7">
                <Image
                  src={c.icon}
                  alt={c.name}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

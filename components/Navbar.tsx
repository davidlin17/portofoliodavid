"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const links = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [active, setActive] = useState("#")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setScrolled(y > 40)

      const sections = links
        .map((l) => l.href)
        .filter((h) => h !== "#")

      for (const id of sections) {
        const el = document.querySelector(id)
        if (!el) continue

        const rect = el.getBoundingClientRect()
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(id)
          break
        }
      }

      if (window.scrollY < 200) {
        setActive("#")
      }
    }

    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 left-0 right-0 z-50 flex justify-center"
    >
      <div
        className={`
          flex gap-8 px-8 py-3 rounded-full
          backdrop-blur-xl border
          transition-all duration-300
          ${
            scrolled
              ? "bg-white/15 border-white/30 shadow-xl"
              : "bg-white/10 border-white/20 shadow-lg"
          }
        `}
      >
        {links.map((link) => {
          const isActive = active === link.href

          return (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setActive(link.href)}
              className={`
                relative text-sm font-medium transition-colors
                ${
                  isActive
                    ? "text-cyan-400"
                    : "text-white hover:text-cyan-300"
                }
              `}
            >
              {link.label}

              {/* ACTIVE INDICATOR */}
              {isActive && (
                <motion.span
                  layoutId="nav-active"
                  className="
                    absolute -bottom-2 left-1/2
                    w-2 h-2 rounded-full
                    bg-cyan-400
                    -translate-x-1/2
                  "
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
              )}
            </a>
          )
        })}
      </div>
    </motion.nav>
  )
}

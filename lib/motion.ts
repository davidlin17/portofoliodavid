import type { Variants } from "framer-motion"

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(6px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
}

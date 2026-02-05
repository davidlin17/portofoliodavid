import Lenis from "lenis"


let lenis: Lenis | null = null

export function initLenis() {
  if (lenis) return

  lenis = new Lenis({
    smoothWheel: true,
    lerp: 0.1,
  })

  function raf(time: number) {
    lenis?.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
}

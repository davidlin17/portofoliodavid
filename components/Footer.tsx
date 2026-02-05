"use client"

import { useEffect, useState } from "react"

export default function Footer() {
  const [year, setYear] = useState<number | null>(null)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="py-12 text-center text-gray-500">
      © {year ?? "—"} David. All rights reserved.
    </footer>
  )
}

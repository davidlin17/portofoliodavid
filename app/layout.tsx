import "./globals.css"
import SmoothScroll from "@/components/SmoothScroll"
import LoadingScreen from "@/components/LoadingScreen"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="bg-neutral-950 text-white"
        suppressHydrationWarning
      >
        <LoadingScreen />
        <SmoothScroll />
        {children}
      </body>
    </html>
  )
}

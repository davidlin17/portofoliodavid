import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import BackToTop from "@/components/BackToTop"


export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  )
}

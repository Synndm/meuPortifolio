import { Navigation } from "@/components/portfolio/navigation"
import { Hero } from "@/components/portfolio/hero"
import { About } from "@/components/portfolio/about"
import { Projects } from "@/components/portfolio/projects"
import { Technologies } from "@/components/portfolio/technologies"
import { Experience } from "@/components/portfolio/experience"
import { Contact } from "@/components/portfolio/contact"
import { Footer } from "@/components/portfolio/footer"
import { BackgroundGlow, MotionProvider, ScrollProgress } from "@/components/portfolio/motion"

export default function Home() {
  return (
    <MotionProvider>
      <main className="relative min-h-screen overflow-x-clip bg-background text-foreground">
        <BackgroundGlow />
        <ScrollProgress />
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </MotionProvider>
  )
}

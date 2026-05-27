import { LoadingScreen } from "@/components/loading-screen"
import { Navbar } from "@/components/navbar"
import { BackgroundFx } from "@/components/background-fx"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <LoadingScreen />
      <BackgroundFx />
      <Navbar />
      <main className="noise relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

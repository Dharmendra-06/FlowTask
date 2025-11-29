import { Header } from "../components/header"
import { Hero } from "../components/hero"
import { LogoCloud } from "../components/logo-cloud"
import { Features } from "../components/features"
import { Testimonials } from "../components/testimonials"
import { Pricing } from "../components/pricing"
import { Footer } from "../components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  )
}

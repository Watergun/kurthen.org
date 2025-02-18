import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import CaseStudies from '@/components/CaseStudies'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <CaseStudies />
      <Contact />
      <Footer />
    </main>
  )
}
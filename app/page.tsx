import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Gallery from '../components/Gallery'
import Services from '../components/Services'
import RatesAccordion from '../components/RatesAccordion'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Page(){
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <RatesAccordion />
      <Contact />
      <Footer />
    </main>
  )
}
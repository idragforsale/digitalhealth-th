import Hero from '../components/Hero'
import About from '../components/About'
import Portfolio from '../components/Portfolio'
import Products from '../components/Products'
import Process from '../components/Process'
import Pricing from '../components/Pricing'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio limit={3} />
      <Products />
      <Process />
      <Pricing />
      <Contact />
    </>
  )
}

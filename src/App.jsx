import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Work from './components/Work'
import About from './components/About'
import Contact from './components/Contact'

export default function App() {
  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <Header />
      <Hero />
      <Marquee dark />
      <Work />
      <About />
      <Marquee dark={false} />
      <Contact />
    </main>
  )
}

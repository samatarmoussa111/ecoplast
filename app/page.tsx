import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Products } from '@/components/products'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { Toaster } from '@/components/ui/toaster'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Process />
      <Contact />
      <Footer />
      <Toaster />
    </main>
  )
}


import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Resume from './components/Resume'
import CoverLetter from './components/CoverLetter'
import Skills from './components/Skills'
import Credentials from './components/Credentials'
import Projects from './components/Projects'
import Capstone from './components/Capstone'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id) }),
      { threshold: 0.3 }
    )
    sections.forEach(s => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Navbar active={activeSection} />
      <main>
        <Hero />
        <About />
        <Resume />
        <CoverLetter />
        <Skills />
        <Credentials />
        <Projects />
        <Capstone />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

import { useState } from 'react'
import { themes } from './theme'
import AnimatedBG from './components/AnimatedBG'
import GlowOrbs from './components/GlowOrbs'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [isDark, setIsDark] = useState(true)
  const theme = isDark ? themes.dark : themes.light

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: theme.bg, transition: 'background 0.4s ease' }}>
      {/* Scrollbar track color sync */}
      <style>{`
        ::-webkit-scrollbar-track { background: ${theme.scrollTrack}; }
        body { background: ${theme.bg}; color: ${theme.text1}; }
      `}</style>

      {/* Background layers */}
      <AnimatedBG theme={theme} />
      <GlowOrbs theme={theme} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Navbar isDark={isDark} onToggle={() => setIsDark(d => !d)} theme={theme} />
        <Hero theme={theme} />
        <About theme={theme} />
        <Skills theme={theme} />
        <Projects theme={theme} />
        <Services theme={theme} />
        <Contact theme={theme} />
        <Footer theme={theme} />
      </div>
    </div>
  )
}

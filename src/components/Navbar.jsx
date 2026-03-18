import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = ['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact']

export default function Navbar({ isDark, onToggle, theme }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? theme.navBg : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? `1px solid ${theme.navBorder}` : 'none',
        transition: 'all .3s ease',
        padding: '0 clamp(1rem,5vw,4rem)',
      }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 68 }}>
        {/* Logo */}
        <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 20, fontWeight: 700, background: 'linear-gradient(90deg,#3b82f6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          VB.dev
        </span>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 28 }} className="desktop-nav">
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: theme.text3, fontSize: 14, fontWeight: 500, cursor: 'pointer', letterSpacing: 0.5, transition: 'color .2s', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              onMouseEnter={e => e.target.style.color = '#22d3ee'}
              onMouseLeave={e => e.target.style.color = theme.text3}
            >
              {l}
            </button>
          ))}
          <ThemeToggle isDark={isDark} onToggle={onToggle} theme={theme} />
        </div>

        {/* Mobile controls */}
        <div style={{ display: 'none', alignItems: 'center', gap: 10 }} className="hamburger">
          <ThemeToggle isDark={isDark} onToggle={onToggle} theme={theme} />
          <button
            onClick={() => setOpen(o => !o)}
            style={{ background: 'none', border: 'none', color: '#22d3ee', cursor: 'pointer', display: 'flex', padding: 4 }}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: isDark ? 'rgba(2,6,23,0.97)' : 'rgba(238,244,255,0.97)', borderTop: `1px solid ${theme.navBorder}`, padding: '1.5rem 2rem', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {NAV_LINKS.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              style={{ background: 'none', border: 'none', color: theme.text1, fontSize: 16, cursor: 'pointer', textAlign: 'left', fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}

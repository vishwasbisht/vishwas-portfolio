import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { useTypewriter } from '../hooks/useTypewriter'

const LINES = [
  'I build scalable frontend architectures.',
  'I craft pixel-perfect UI experiences.',
  'I write clean, maintainable code.',
]

const SOCIALS = [
  { icon: <Github size={20} />, href: 'https://github.com/vishwasbisht' },
  { icon: <Linkedin size={20} />, href: 'https://linkedin.com/in/vishwasbisht' },
  { icon: <Mail size={20} />, href: 'mailto:vishwasbisht711@gmail.com' },
]

export default function Hero({ theme }) {
  const typed = useTypewriter(LINES)

  return (
    <div
      id="home"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 clamp(1rem,5vw,4rem)', paddingTop: 68, position: 'relative' }}
    >
      <div style={{ maxWidth: 800, textAlign: 'center', zIndex: 2, position: 'relative' }}>
        {/* Badge */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(59,130,246,0.12)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: 100, padding: '6px 18px', marginBottom: 28 }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22d3ee', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 13, color: '#22d3ee', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>Available for work</span>
        </div>

        {/* Heading */}
        <h1 style={{ fontSize: 'clamp(2.8rem,7vw,5.5rem)', fontWeight: 900, lineHeight: 1.08, color: theme.text1, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 20 }}>
          Hi, I'm{' '}
          <span style={{ background: 'linear-gradient(135deg,#3b82f6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Vishwas Bisht
          </span>
        </h1>

        {/* Typewriter */}
        <div style={{ fontSize: 'clamp(1.1rem,2.5vw,1.5rem)', color: theme.text2, fontFamily: "'Fira Code', monospace", minHeight: 40, marginBottom: 40 }}>
          <span>{typed}</span>
          <span style={{ animation: 'blink 1s step-end infinite', color: '#3b82f6' }}>|</span>
        </div>

        {/* Sub-text */}
        <p style={{ fontSize: 'clamp(0.95rem,1.8vw,1.1rem)', color: theme.text3, lineHeight: 1.8, maxWidth: 560, margin: '0 auto 48px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Frontend Developer passionate about crafting modern, performant web applications with React &amp; cutting-edge UI patterns.
        </p>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'linear-gradient(135deg,#3b82f6,#22d3ee)', border: 'none', color: '#020617', fontWeight: 700, fontSize: 15, padding: '14px 32px', borderRadius: 100, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'transform .2s,box-shadow .2s', boxShadow: '0 0 30px rgba(59,130,246,0.4)' }}
            onMouseEnter={e => { e.target.style.transform = 'scale(1.05)'; e.target.style.boxShadow = '0 0 45px rgba(59,130,246,0.6)' }}
            onMouseLeave={e => { e.target.style.transform = 'scale(1)'; e.target.style.boxShadow = '0 0 30px rgba(59,130,246,0.4)' }}
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ background: 'transparent', border: '1.5px solid rgba(59,130,246,0.5)', color: theme.text1, fontWeight: 600, fontSize: 15, padding: '14px 32px', borderRadius: 100, cursor: 'pointer', fontFamily: "'Plus Jakarta Sans', sans-serif", transition: 'all .2s' }}
            onMouseEnter={e => { e.target.style.borderColor = '#22d3ee'; e.target.style.color = '#22d3ee' }}
            onMouseLeave={e => { e.target.style.borderColor = 'rgba(59,130,246,0.5)'; e.target.style.color = theme.text1 }}
          >
            Let's Talk
          </button>
        </div>

        {/* Socials */}
        <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 40 }}>
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              style={{ width: 44, height: 44, borderRadius: '50%', border: '1px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: theme.text3, transition: 'all .2s', textDecoration: 'none' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.background = 'rgba(34,211,238,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(59,130,246,0.3)'; e.currentTarget.style.color = theme.text3; e.currentTarget.style.background = 'transparent' }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ marginTop: 64, animation: 'bounce 2s infinite' }}>
          <ChevronDown size={22} style={{ color: '#3b82f6', margin: '0 auto', display: 'block' }} />
        </div>
      </div>
    </div>
  )
}

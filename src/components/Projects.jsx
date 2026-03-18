import { Github, ExternalLink } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import GlassCard from './GlassCard'

const PROJECTS = [
  {
    emoji: '💳',
    title: 'Wallet AI',
    tag: 'Finance Tech',
    desc: 'Intelligent personal finance tracker with AI-powered insights. Visualizes spending patterns, detects anomalies, and suggests savings strategies in real-time.',
    stack: ['React', 'Redux', 'Chart.js', 'REST API', 'Tailwind'],
    rgb: '59,130,246',
    color: '#3b82f6',
    github: '#',
    demo: 'https://walletai-theta.vercel.app/',
  },
  {
    emoji: '🎓',
    title: 'Student Management System',
    tag: 'EdTech',
    desc: 'Data-driven academic management tool for institutions. Handles enrollment, grades, attendance, and analytics with a clean, role-based dashboard.',
    stack: ['React', 'Node.js', 'Material-UI', 'REST API', 'SCSS'],
    rgb: '34,211,238',
    color: '#22d3ee',
    github: '#',
    demo: '',
  },
  {
    emoji: '🖼️',
    title: 'Redux Image Gallery',
    tag: 'Media App',
    desc: 'High-performance media browser with lazy loading, infinite scroll, and optimized state management. Delivers buttery-smooth UX even with thousands of images.',
    stack: ['React', 'Redux', 'CSS Grid', 'Axios', 'Vite'],
    rgb: '129,140,248',
    color: '#818cf8',
    github: '#',
    demo: '',
  },
]

export default function Projects({ theme }) {
  return (
    <Section id="projects" style={{ padding: '120px clamp(1rem,5vw,4rem)', background: theme.bgAlt }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle label="// what i've built" title="Featured Projects" theme={theme} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 28 }}>
          {PROJECTS.map(p => (
            <GlassCard key={p.title} hover3d style={{ padding: 30, display: 'flex', flexDirection: 'column', gap: 16, cursor: 'pointer' }} theme={theme}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ width: 52, height: 52, borderRadius: 14, background: `rgba(${p.rgb},0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 26 }}>
                  {p.emoji}
                </div>
                <span style={{ fontSize: 11, color: p.color, background: `rgba(${p.rgb},0.12)`, borderRadius: 100, padding: '4px 12px', fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>
                  {p.tag}
                </span>
              </div>

              <div>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: theme.text1, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 10 }}>{p.title}</h3>
                <p style={{ fontSize: 14, color: theme.text3, lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.desc}</p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto' }}>
                {p.stack.map(s => (
                  <span key={s} style={{ fontSize: 11.5, color: theme.text4, background: theme.surface, border: `1px solid ${theme.border}`, borderRadius: 6, padding: '3px 10px', fontFamily: "'Fira Code', monospace" }}>
                    {s}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', gap: 12, paddingTop: 8, borderTop: `1px solid ${theme.border}` }}>
                <a href={p.github} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: theme.text3, textDecoration: 'none', transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = p.color} onMouseLeave={e => e.currentTarget.style.color = theme.text3}>
                  <Github size={14} /> Code
                </a>
                <a href={p.demo} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: theme.text3, textDecoration: 'none', transition: 'color .2s' }} onMouseEnter={e => e.currentTarget.style.color = p.color} onMouseLeave={e => e.currentTarget.style.color = theme.text3}>
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

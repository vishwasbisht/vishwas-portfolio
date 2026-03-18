import { Code2, Layers, Database, Users } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import GlassCard from './GlassCard'

const CATEGORIES = [
  { icon: <Code2 size={22} />, rgb: '59,130,246', color: '#3b82f6', title: 'Languages', skills: ['JavaScript ES6+', 'HTML5', 'CSS3 / SCSS'] },
  { icon: <Layers size={22} />, rgb: '34,211,238', color: '#22d3ee', title: 'Frameworks & Libraries', skills: ['React', 'Redux', 'Tailwind CSS', 'Material-UI'] },
  { icon: <Database size={22} />, rgb: '129,140,248', color: '#818cf8', title: 'Data & APIs', skills: ['REST API', 'Axios', 'JSON'] },
  { icon: <Users size={22} />, rgb: '52,211,153', color: '#34d399', title: 'Soft Skills', skills: ['Agile / Scrum', 'Responsive Design', 'Animations & Motion'] },
]

const TECH_PILLS = ['React', 'Redux', 'TypeScript', 'Tailwind', 'HTML5', 'CSS3', 'Axios', 'Git', 'Figma', 'REST API', 'SCSS', 'Vite']

export default function Skills({ theme }) {
  return (
    <Section id="skills" style={{ padding: '120px clamp(1rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle label="// what i know" title="Skills & Technologies" theme={theme} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
          {CATEGORIES.map(cat => (
            <GlassCard key={cat.title} style={{ padding: 28 }} hover3d theme={theme}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `rgba(${cat.rgb},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: cat.color }}>
                  {cat.icon}
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: theme.text1, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {cat.title}
                </h3>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {cat.skills.map(s => (
                  <span key={s} style={{ background: `rgba(${cat.rgb},0.1)`, border: `1px solid ${cat.color}30`, color: cat.color, borderRadius: 8, padding: '5px 12px', fontSize: 12.5, fontFamily: "'Fira Code', monospace", letterSpacing: 0.3 }}>
                    {s}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Tech pill bar */}
        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 12, justifyContent: 'center' }}>
          {TECH_PILLS.map(t => (
            <span
              key={t}
              style={{ padding: '7px 18px', borderRadius: 100, background: theme.surface, border: `1px solid ${theme.border}`, color: theme.text3, fontSize: 13, fontFamily: "'Fira Code', monospace", transition: 'all .2s', cursor: 'default', backdropFilter: 'blur(8px)' }}
              onMouseEnter={e => { e.target.style.color = '#22d3ee'; e.target.style.borderColor = 'rgba(34,211,238,0.4)' }}
              onMouseLeave={e => { e.target.style.color = theme.text3; e.target.style.borderColor = theme.border }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  )
}

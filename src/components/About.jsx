import { Section, SectionTitle } from './Section'
import GlassCard from './GlassCard'

const STATS = [
  { n: 'Fresher', l: '.' },
  { n: '10+', l: 'Projects' },
  { n: '10+', l: 'Technologies' },
  { n: '100%', l: 'Dedication' },
]

export default function About({ theme }) {
  return (
    <Section id="about" style={{ padding: '120px clamp(1rem,5vw,4rem)', background: theme.bgAlt }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle label="// who i am" title="About Me" theme={theme} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }} className="about-grid">
          {/* Avatar */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ width: 280, height: 280, borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%', background: 'linear-gradient(135deg,rgba(59,130,246,0.2),rgba(34,211,238,0.12))', border: '2px solid rgba(59,130,246,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', animation: 'morphBlob 8s ease-in-out infinite alternate' }}>
                <span style={{ fontSize: 96, filter: 'drop-shadow(0 0 30px rgba(59,130,246,0.6))' }}>👨‍💻</span>
              </div>
              <div style={{ position: 'absolute', top: -12, right: -12, background: 'linear-gradient(135deg,#3b82f6,#22d3ee)', borderRadius: 12, padding: '8px 14px', fontSize: 13, fontWeight: 700, color: '#020617', fontFamily: "'Fira Code', monospace" }}>
                React Dev
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <p style={{ fontSize: 'clamp(1rem,1.6vw,1.15rem)', color: theme.text2, lineHeight: 1.9, marginBottom: 24, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              I'm a <span style={{ color: '#22d3ee', fontWeight: 600 }}>Frontend Developer</span> with a deep obsession for pixel-perfect interfaces and architectures that scale. I believe great UI is felt before it's seen — every transition, every spacing decision, every microinteraction shapes the experience.
            </p>
            <p style={{ fontSize: 'clamp(0.95rem,1.5vw,1.05rem)', color: theme.text3, lineHeight: 1.8, marginBottom: 32, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              Armed with React and a sharp eye for design systems, I turn complex requirements into clean, maintainable code — shipped fast, built to last.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              {STATS.map(s => (
                <GlassCard key={s.l} style={{ padding: '16px 20px', textAlign: 'center' }} theme={theme}>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, background: 'linear-gradient(135deg,#3b82f6,#22d3ee)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                    {s.n}
                  </div>
                  <div style={{ fontSize: 12, color: theme.text3, marginTop: 4, fontFamily: "'Fira Code', monospace", letterSpacing: 1 }}>
                    {s.l}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

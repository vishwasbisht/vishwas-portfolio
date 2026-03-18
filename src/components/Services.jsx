import { Globe, Cpu, Zap, Palette } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import GlassCard from './GlassCard'

const SERVICES = [
  { icon: <Globe size={28} />, title: 'Responsive Design', desc: 'Fluid layouts that look stunning on every screen size, from mobile to 4K.', rgb: '59,130,246', color: '#3b82f6' },
  { icon: <Cpu size={28} />, title: 'API Integration', desc: 'Seamless REST API integration with optimized data fetching, caching, and error handling.', rgb: '34,211,238', color: '#22d3ee' },
  { icon: <Zap size={28} />, title: 'Custom Animations', desc: 'Silky-smooth Framer Motion transitions and CSS animations that bring interfaces to life.', rgb: '129,140,248', color: '#818cf8' },
  { icon: <Palette size={28} />, title: 'UI/UX Implementation', desc: 'Pixel-perfect translation of design systems to production code with meticulous attention.', rgb: '52,211,153', color: '#34d399' },
]

export default function Services({ theme }) {
  return (
    <Section id="services" style={{ padding: '120px clamp(1rem,5vw,4rem)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionTitle label="// what i offer" title="Services" theme={theme} />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 24 }}>
          {SERVICES.map(s => (
            <GlassCard key={s.title} style={{ padding: 32, textAlign: 'center' }} hover3d theme={theme}>
              <div style={{ width: 64, height: 64, borderRadius: 18, background: `rgba(${s.rgb},0.12)`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: s.color, border: `1px solid ${s.color}25` }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: theme.text1, fontFamily: "'Plus Jakarta Sans', sans-serif", marginBottom: 12 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: theme.text3, lineHeight: 1.75, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </Section>
  )
}

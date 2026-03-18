import { Phone, Mail, Linkedin, Github } from 'lucide-react'
import { Section, SectionTitle } from './Section'
import GlassCard from './GlassCard'

const CONTACTS = [
  { icon: <Phone size={22} />, label: 'Phone', val: '+91-7696228696', href: 'tel:+917696228696', rgb: '59,130,246', color: '#3b82f6' },
  { icon: <Mail size={22} />, label: 'Email', val: 'vishwasbisht711@gmail.com', href: 'mailto:vishwasbisht711@gmail.com', rgb: '34,211,238', color: '#22d3ee' },
  { icon: <Linkedin size={22} />, label: 'LinkedIn', val: 'vishwasbisht', href: 'https://linkedin.com/in/vishwasbisht', rgb: '129,140,248', color: '#818cf8' },
  { icon: <Github size={22} />, label: 'GitHub', val: 'vishwasbisht', href: 'https://github.com/vishwasbisht', rgb: '52,211,153', color: '#34d399' },
]

export default function Contact({ theme }) {
  return (
    <Section id="contact" style={{ padding: '120px clamp(1rem,5vw,4rem) 80px', background: theme.bgAlt }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <SectionTitle label="// get in touch" title="Contact Me" theme={theme} />

        <p style={{ textAlign: 'center', fontSize: 16, color: theme.text3, lineHeight: 1.8, maxWidth: 520, margin: '0 auto 56px', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          Got a project in mind, or just want to say hi? My inbox is always open — let's build something great together.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: 20 }}>
          {CONTACTS.map(c => (
            <a key={c.label} href={c.href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
              <GlassCard hover3d style={{ padding: '32px 20px', textAlign: 'center', cursor: 'pointer' }} theme={theme}>
                <div style={{ width: 58, height: 58, borderRadius: 16, background: `rgba(${c.rgb},0.12)`, border: `1px solid ${c.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: c.color }}>
                  {c.icon}
                </div>
                <div style={{ fontSize: 11, color: theme.text4, fontFamily: "'Fira Code', monospace", letterSpacing: 2, textTransform: 'uppercase', marginBottom: 7 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: 13, color: theme.text2, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, wordBreak: 'break-all' }}>
                  {c.val}
                </div>
              </GlassCard>
            </a>
          ))}
        </div>
      </div>
    </Section>
  )
}

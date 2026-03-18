import { useInView } from '../hooks/useInView'

export function Section({ id, children, style = {} }) {
  const [ref, inView] = useInView()

  return (
    <section
      id={id}
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0)' : 'translateY(48px)',
        transition: 'opacity .7s ease, transform .7s ease',
        ...style,
      }}
    >
      {children}
    </section>
  )
}

export function SectionTitle({ label, title, theme }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 56 }}>
      <span style={{ fontSize: 12, letterSpacing: 4, color: '#22d3ee', textTransform: 'uppercase', fontFamily: "'Fira Code', monospace" }}>
        {label}
      </span>
      <h2 style={{ fontSize: 'clamp(2rem,4vw,3rem)', fontWeight: 800, color: theme.text1, marginTop: 8, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
        {title}
      </h2>
      <div style={{ width: 48, height: 3, background: 'linear-gradient(90deg,#3b82f6,#22d3ee)', borderRadius: 4, margin: '14px auto 0' }} />
    </div>
  )
}

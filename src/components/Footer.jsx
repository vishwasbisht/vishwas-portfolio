export default function Footer({ theme }) {
  return (
    <footer style={{ borderTop: `1px solid ${theme.sectionBorder}`, padding: '32px clamp(1rem,5vw,4rem)', textAlign: 'center' }}>
      <p style={{ color: theme.text4, fontSize: 13, fontFamily: "'Fira Code', monospace" }}>
        © 2025 Vishwas Bisht · Built with{' '}
        <span style={{ color: '#3b82f6' }}>React</span>{' '}
        &amp;{' '}
        <span style={{ color: '#22d3ee' }}>❤️</span>
      </p>
    </footer>
  )
}

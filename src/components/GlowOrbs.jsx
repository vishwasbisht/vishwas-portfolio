export default function GlowOrbs({ theme }) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', width: 600, height: 600, borderRadius: '50%', background: theme.orb1, top: '-10%', left: '-5%', animation: 'orb1 18s ease-in-out infinite alternate' }} />
      <div style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: theme.orb2, bottom: '10%', right: '-5%', animation: 'orb2 22s ease-in-out infinite alternate' }} />
      <div style={{ position: 'absolute', width: 400, height: 400, borderRadius: '50%', background: theme.orb3, top: '40%', left: '40%', animation: 'orb3 15s ease-in-out infinite alternate' }} />
    </div>
  )
}

import { useRef } from 'react'

export default function GlassCard({ children, style = {}, hover3d = false, theme }) {
  const ref = useRef(null)

  const handleMove = (e) => {
    if (!hover3d || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const x = ((e.clientX - r.left) / r.width - 0.5) * 18
    const y = ((e.clientY - r.top) / r.height - 0.5) * -18
    ref.current.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) scale(1.03)`
    ref.current.style.boxShadow = '0 20px 60px rgba(59,130,246,0.12)'
  }

  const handleLeave = () => {
    if (ref.current) {
      ref.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) scale(1)'
      ref.current.style.boxShadow = 'none'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        background: theme.surface,
        border: `1px solid ${theme.border}`,
        backdropFilter: 'blur(18px)',
        WebkitBackdropFilter: 'blur(18px)',
        borderRadius: 16,
        transition: 'transform 0.25s ease, box-shadow 0.25s ease',
        ...style,
      }}
    >
      {children}
    </div>
  )
}

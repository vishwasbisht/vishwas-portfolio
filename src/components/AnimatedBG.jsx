import { useEffect, useRef } from 'react'

export default function AnimatedBG({ theme }) {
  const canvasRef = useRef(null)
  const themeRef = useRef(theme)

  useEffect(() => { themeRef.current = theme }, [theme])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let W = window.innerWidth, H = window.innerHeight, raf

    canvas.width = W
    canvas.height = H

    const resize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width = W
      canvas.height = H
    }
    window.addEventListener('resize', resize)

    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
    }))

    const snippets = ['</>', '{}', '=>', 'const', 'async', 'useState', 'React', 'API', '[]', 'fn()', 'px', 'rem', '.map', 'await']
    const floaters = Array.from({ length: 18 }, (_, i) => ({
      text: snippets[i % snippets.length],
      x: Math.random() * W,
      y: Math.random() * H,
      vy: -(Math.random() * 0.3 + 0.1),
      opacity: Math.random() * 0.18 + 0.04,
      size: Math.random() * 10 + 10,
    }))

    const draw = () => {
      const t = themeRef.current
      ctx.clearRect(0, 0, W, H)

      // Grid
      ctx.strokeStyle = t.gridColor
      ctx.lineWidth = 1
      for (let x = 0; x < W; x += 60) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke() }
      for (let y = 0; y < H; y += 60) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke() }

      // Floating code snippets
      floaters.forEach(f => {
        ctx.font = `${f.size}px 'Fira Code', monospace`
        ctx.fillStyle = t.floatColor(f.opacity)
        ctx.fillText(f.text, f.x, f.y)
        f.y += f.vy
        if (f.y < -20) { f.y = H + 20; f.x = Math.random() * W }
      })

      // Particles + connections
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = t.particleColor
        ctx.fill()
      })

      pts.forEach((a, i) => pts.slice(i + 1).forEach(b => {
        const d = Math.hypot(a.x - b.x, a.y - b.y)
        if (d < 130) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = t.lineColor(0.18 * (1 - d / 130))
          ctx.lineWidth = 0.7; ctx.stroke()
        }
      }))

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}
    />
  )
}

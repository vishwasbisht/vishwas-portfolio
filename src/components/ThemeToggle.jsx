import { Sun, Moon } from 'lucide-react'

export default function ThemeToggle({ isDark, onToggle, theme }) {
  return (
    <button
      onClick={onToggle}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        width: 42,
        height: 42,
        borderRadius: '50%',
        border: `1.5px solid ${theme.toggleBorder}`,
        background: theme.toggleBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        color: theme.toggleColor,
        flexShrink: 0,
        transition: 'all .35s cubic-bezier(.34,1.56,.64,1)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'scale(1.12) rotate(22deg)'
        e.currentTarget.style.boxShadow = `0 0 16px ${theme.toggleGlow}`
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}

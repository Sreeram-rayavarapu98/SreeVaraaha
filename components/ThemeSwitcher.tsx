'use client'

import { useTheme } from './ThemeProvider'

const themes: Array<{ id: 'neo' | 'dark' | 'light'; label: string; desc: string }> = [
  { id: 'neo', label: 'Aurora', desc: 'Vibrant glassmorphism' },
  { id: 'dark', label: 'Midnight', desc: 'Pure dark slate' },
  { id: 'light', label: 'Lumina', desc: 'Clean bright cards' },
]

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="flex flex-col gap-2">
      <div className="text-xs uppercase tracking-wide text-[var(--muted-foreground)] font-semibold">
        Theme
      </div>
      <div className="flex flex-col gap-2">
        {themes.map(({ id, label, desc }) => {
          const active = theme === id
          return (
            <button
              key={id}
              onClick={() => setTheme(id)}
              className="flex items-start gap-3 rounded-xl border px-3 py-2 text-left transition"
              style={{
                borderColor: 'var(--border)',
                background: active ? 'var(--sidebar-primary)' : 'var(--overlay-very-light)',
                boxShadow: active ? '0 12px 25px rgba(39,126,255,0.25)' : 'none',
              }}
              onMouseEnter={(e) => {
                if (!active) {
                  e.currentTarget.style.borderColor = 'var(--border-overlay)'
                }
              }}
              onMouseLeave={(e) => {
                if (!active) {
                  e.currentTarget.style.borderColor = 'var(--border)'
                }
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  marginTop: 6,
                  borderRadius: '999px',
                  background: active ? 'var(--primary)' : 'var(--overlay-light)',
                }}
              />
              <div>
                <div className="text-sm font-semibold text-[var(--foreground)]">{label}</div>
                <div className="text-[11px] text-[var(--muted-foreground)]">{desc}</div>
              </div>
            </button>
          )
        })}
      </div>
    </div>
  )
}



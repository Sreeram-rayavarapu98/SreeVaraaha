'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

type Theme = 'neo' | 'dark' | 'light'

type ThemeContextValue = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined)

const STORAGE_KEY = 'sree-varaa-theme'

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('neo')

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null
    if (stored) {
      setThemeState(stored)
      document.body.dataset.theme = stored
    } else {
      document.body.dataset.theme = 'neo'
    }
  }, [])

  const setTheme = (next: Theme) => {
    setThemeState(next)
    document.body.dataset.theme = next
    window.localStorage.setItem(STORAGE_KEY, next)
  }

  const value = useMemo(() => ({ theme, setTheme }), [theme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) {
    throw new Error('useTheme must be used within ThemeProvider')
  }
  return ctx
}



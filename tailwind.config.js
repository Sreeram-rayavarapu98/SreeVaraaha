/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        border: '#e8e8e8',
        input: '#f8f8f7',
        primary: '#277eff',
        'primary-foreground': '#ffffff',
        secondary: '#dbe7fb',
        'secondary-foreground': '#277eff',
        muted: '#e8e8e8',
        'muted-foreground': '#949494',
        success: '#00c417',
        'success-foreground': '#ffffff',
        accent: '#277eff',
        'accent-foreground': '#ffffff',
        destructive: '#ff0000',
        'destructive-foreground': '#ffffff',
        warning: '#ff7308',
        'warning-foreground': '#ffffff',
        card: '#fbfaf9',
        'card-foreground': '#000000',
        sidebar: '#ffffff',
        'sidebar-foreground': '#4a4a4a',
        'sidebar-primary': '#e8e8e8',
        'sidebar-primary-foreground': '#000000',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '24px',
      },
      fontFamily: {
        body: ['Inter', 'Inter Fallback', 'sans-serif'],
      },
      fontSize: {
        'xs': ['11px', { lineHeight: '1.5' }],
        'sm': ['12px', { lineHeight: '1.5' }],
        'base': ['13px', { lineHeight: '1.5' }],
        'md': ['14px', { lineHeight: '1.5' }],
        'lg': ['15px', { lineHeight: '1.5' }],
        'xl': ['18px', { lineHeight: '1.5' }],
        '2xl': ['20px', { lineHeight: '1.5' }],
      },
      boxShadow: {
        'card': '0 1px 4px rgba(15, 23, 42, 0.08)',
        'fab': '0 2px 6px rgba(15, 23, 42, 0.2)',
        'toast': '0 1px 4px rgba(15, 23, 42, 0.16)',
      },
    },
  },
  plugins: [],
}


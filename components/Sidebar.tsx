'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import ThemeSwitcher from './ThemeSwitcher'

const navigation = [
  { name: 'Dashboard', href: '/', icon: '🏠' },
  { name: 'Customers', href: '/customers', icon: '👤' },
  { name: 'Flats & Apartments', href: '/flats', icon: '🏢' },
  { name: 'Appointments / Calendar', href: '/appointments', icon: '📅' },
  { name: 'Consultants', href: '/consultants', icon: '👥' },
]

export default function Sidebar() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`sidebar ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:static z-50 h-screen`}>
        <div className="sidebar-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-foreground)' }}>
              <Logo size={20} />
            </div>
            <div>
              <div className="sidebar-logo" style={{ fontSize: '18px', fontWeight: 600 }}>SREE VARAAHA</div>
              <div className="sidebar-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Prospects & inventory</div>
            </div>
          </div>
          <div style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
            v1.2
          </div>
        </div>
        
        <div className="sidebar-nav">
          <div className="sidebar-nav-section-label" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted-foreground)', marginBottom: '4px', padding: '0 8px' }}>
            MAIN
          </div>
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href))
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="nav-item"
                data-active={isActive}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '8px 10px',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: isActive ? 'var(--sidebar-primary-foreground)' : 'var(--sidebar-foreground)',
                  background: isActive ? 'var(--sidebar-primary)' : 'transparent',
                }}
              >
                <div className="nav-icon" style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {item.icon}
                </div>
                <div>{item.name}</div>
              </Link>
            )
          })}
          
          <div className="sidebar-nav-section-label" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--muted-foreground)', marginBottom: '4px', marginTop: '10px', padding: '0 8px' }}>
            OTHER
          </div>
          <Link
            href="/settings"
            onClick={() => setMobileMenuOpen(false)}
            className="nav-item"
            data-active={pathname === '/settings'}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '8px 10px',
              borderRadius: 'var(--radius-md)',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: pathname === '/settings' ? 'var(--sidebar-primary-foreground)' : 'var(--sidebar-foreground)',
              background: pathname === '/settings' ? 'var(--sidebar-primary)' : 'transparent',
            }}
          >
            <div className="nav-icon" style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ⚙️
            </div>
            <div>Settings</div>
          </Link>
        </div>
        
        <div style={{ marginTop: '16px' }}>
          <ThemeSwitcher />
        </div>

        <div className="nav-footer" style={{ marginTop: '16px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', color: 'var(--secondary-foreground)', padding: '10px 12px', fontSize: '12px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div className="nav-footer-title" style={{ fontWeight: 500 }}>Configuration</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
            <span>Teams</span>
            <span style={{ fontWeight: 500 }}>3</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px' }}>
            <span>Active users</span>
            <span style={{ fontWeight: 500 }}>18</span>
          </div>
          <Link href="/settings" className="nav-footer-link" style={{ marginTop: '4px', fontSize: '12px', fontWeight: 500, color: 'var(--primary)' }}>
            Manage access
          </Link>
        </div>
      </div>
    </>
  )
}

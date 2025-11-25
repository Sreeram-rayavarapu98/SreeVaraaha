'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Settings() {
  const [overlapping, setOverlapping] = useState(false)
  const [doubleBooking, setDoubleBooking] = useState(true)
  const [autoAssign, setAutoAssign] = useState(true)
  const [dataExport, setDataExport] = useState(false)
  const [strategy, setStrategy] = useState('Balance by load')

  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
            <Link href="/" style={{ color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>Home</Link>
            <span>·</span>
            <span>Settings</span>
          </div>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Settings</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Configure calendar rules, notifications, and more.
          </div>
        </div>
        <div className="topbar-spacer" style={{ flex: 1 }}></div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Appointment & calendar rules</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Control working hours, slot length, and overlap policies.
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Reset to defaults
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Default working hours:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>09:00 AM - 07:00 PM</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Slot duration:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>45 minutes per appointment</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Max visits per consultant / day:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>6 site visits • 4 calls</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Buffer between visits:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>15 minutes • Include travel time</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Allow overlapping appointments</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px', maxWidth: '220px' }}>
                    Useful for walk-ins or shared visits with more than one family.
                  </div>
                </div>
                <div
                  onClick={() => setOverlapping(!overlapping)}
                  style={{
                    width: '38px',
                    height: '22px',
                    borderRadius: '999px',
                    background: overlapping ? 'var(--primary)' : 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    justifyContent: overlapping ? 'flex-end' : 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ width: '18px', height: '18px', borderRadius: '999px', background: 'var(--card)' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Block double-booking per consultant</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px', maxWidth: '220px' }}>
                    Prevent two appointments at the same time for the same consultant.
                  </div>
                </div>
                <div
                  onClick={() => setDoubleBooking(!doubleBooking)}
                  style={{
                    width: '38px',
                    height: '22px',
                    borderRadius: '999px',
                    background: doubleBooking ? 'var(--primary)' : 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    justifyContent: doubleBooking ? 'flex-end' : 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ width: '18px', height: '18px', borderRadius: '999px', background: 'var(--card)' }}></div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Auto-assign consultant</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px', maxWidth: '220px' }}>
                    Assign new visits based on team, specialization, and current load.
                  </div>
                </div>
                <div
                  onClick={() => setAutoAssign(!autoAssign)}
                  style={{
                    width: '38px',
                    height: '22px',
                    borderRadius: '999px',
                    background: autoAssign ? 'var(--primary)' : 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    justifyContent: autoAssign ? 'flex-end' : 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ width: '18px', height: '18px', borderRadius: '999px', background: 'var(--card)' }}></div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '4px' }}>Auto-assignment strategy:</div>
                <div className="pill-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="pill-filter" data-active={strategy === 'Balance by load'} onClick={() => setStrategy('Balance by load')}>Balance by load</span>
                  <span className="pill-filter" data-active={strategy === 'Round-robin'} onClick={() => setStrategy('Round-robin')}>Round-robin</span>
                  <span className="pill-filter" data-active={strategy === 'High-intent to seniors'} onClick={() => setStrategy('High-intent to seniors')}>High-intent to seniors</span>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Team & access</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Control who can edit appointments, manage users, and view reports.
                </div>
              </div>
            </div>
            <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', marginBottom: '8px' }}>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Total users</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>18</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Including admins & consultants</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Users by role</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>2</div>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Admin:</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px' }}>Can manage users, inventory, and settings.</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Consultant:</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px' }}>Can edit own appointments and link prospects.</div>
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Viewer:</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px' }}>Can view dashboards, calendar, and reports.</div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Default role for new users:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Consultant</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Data & audit</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Control exports and keep a history of changes.
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '4px' }}>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Change log retention:</div>
                <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>12 months • Older data archived.</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>Allow data export</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px', maxWidth: '220px' }}>
                    Enable CSV download for admins.
                  </div>
                </div>
                <div
                  onClick={() => setDataExport(!dataExport)}
                  style={{
                    width: '38px',
                    height: '22px',
                    borderRadius: '999px',
                    background: dataExport ? 'var(--primary)' : 'var(--muted)',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '2px',
                    justifyContent: dataExport ? 'flex-end' : 'flex-start',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  <div style={{ width: '18px', height: '18px', borderRadius: '999px', background: 'var(--card)' }}></div>
                </div>
              </div>
              <div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginBottom: '2px' }}>Last updated:</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Today • 10:12 AM by [User Name]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

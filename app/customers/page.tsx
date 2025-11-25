'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Customers() {
  const [selectedCustomer, setSelectedCustomer] = useState('Sanjay Mehta')

  const customers = [
    { id: 'sm', name: 'Sanjay Mehta', initials: 'SM', details: '3BHK - A-1203 - Budget ₹1.0-1.2 Cr.', tags: ['High intent', 'Visited twice'], selected: true },
    { id: 'pr', name: 'Priya Rao', initials: 'PR', details: '2BHK - A-904 - Evening slot preferred.', tags: ['Warm', '1 visit'], selected: false },
    { id: 'vk', name: 'Vikas Khanna', initials: 'VK', details: '2/3BHK - Exploring B & C wing.', tags: ['Compare options'], selected: false },
    { id: 'as', name: 'Anita Shah', initials: 'AS', details: '3BHK - Corner flat - Referral.', tags: ['Ready to book'], selected: false },
  ]

  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Customers</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Manage leads, visits, and booking.
          </div>
        </div>
        <div className="topbar-spacer" style={{ flex: 1 }}></div>
        <div className="topbar-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--input)', borderRadius: 'var(--radius-lg)', padding: '6px 10px', minWidth: '200px' }}>
          <div className="topbar-search-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: '14px' }}>🔍</div>
          <div className="topbar-search-placeholder" style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
            Search by name, phone, flat
          </div>
        </div>
        <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="btn btn-primary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
            <div>New customer</div>
          </div>
        </div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: '2.5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Customer pipeline</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Snapshot across all stages.
                </div>
              </div>
            </div>
            <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>New leads</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>24</div>
                  <div className="summary-pill summary-pill-success">14 today</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>From web, walk-ins & referrals.</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Warm</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>18</div>
                  <div className="summary-pill summary-pill-success">6 today</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Visited once, exploring options.</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Customers list</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Filter by stage, consultant, and interest.
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              {customers.map((customer) => (
                <div
                  key={customer.id}
                  onClick={() => setSelectedCustomer(customer.name)}
                  className="card"
                  style={{
                    padding: '8px',
                    cursor: 'pointer',
                    border: customer.selected ? '2px solid var(--primary)' : '1px solid var(--border)',
                    background: customer.selected ? 'var(--card)' : 'var(--card)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>
                      {customer.initials}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '13px', fontWeight: 500, color: 'var(--foreground)' }}>{customer.name}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>{customer.details}</div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '4px' }}>
                    {customer.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={tag.includes('High intent') || tag.includes('Warm') || tag.includes('Ready') ? 'badge badge-success' : tag.includes('Compare') ? 'badge badge-warning' : 'badge badge-muted'}
                        style={{ fontSize: '10px' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>Showing 4 of 32 customers.</span>
            </div>
          </div>
        </div>

        <div className="content-row-side" style={{ flex: '1.5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Customer details</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Linked appointments & flats.
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '16px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>
                SM
              </div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--foreground)' }}>Sanjay Mehta</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Primary interest: 3BHK - Higher floor</div>
                <div style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Assigned consultant: Riya Sharma</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginBottom: '8px' }}>
              <span className="badge badge-success">High intent</span>
              <span className="badge badge-success">Family of 4</span>
              <span className="badge badge-success">2 visits</span>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Contact</div>
              <div style={{ fontSize: '12px', color: 'var(--foreground)' }}>+91 98XXXX1203</div>
              <div style={{ fontSize: '12px', color: 'var(--foreground)' }}>sanjay.mehta@email.com</div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Next best action</div>
              <div style={{ fontSize: '12px', color: 'var(--foreground)' }}>After upcoming A-1203 site visit, share payment plan.</div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Upcoming appointments</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
                <div style={{ background: 'var(--input)', padding: '6px 8px', borderRadius: 'var(--radius-md)', fontSize: '11px' }}>
                  <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>Site visit - A-1203</div>
                  <div style={{ color: 'var(--muted-foreground)', marginTop: '2px' }}>1 Sep - 12:00-12:45 PM - Consultant: Riya Sharma</div>
                </div>
                <div style={{ background: 'var(--input)', padding: '6px 8px', borderRadius: 'var(--radius-md)', fontSize: '11px' }}>
                  <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>Follow-up call</div>
                  <div style={{ color: 'var(--muted-foreground)', marginTop: '2px' }}>3 Sep - Check decision post visit.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Interest & fit</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Flats that match this customer.
                </div>
              </div>
            </div>
            <div className="inventory-table-wrapper" style={{ marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', overflow: 'hidden' }}>
              <table className="inventory-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead style={{ background: 'var(--secondary)' }}>
                  <tr>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Flat</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Wing</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { flat: 'A-1203', wing: 'A', highlight: true },
                    { flat: 'C-903', wing: 'C', highlight: false },
                    { flat: 'A-1104', wing: 'A', highlight: true },
                  ].map((row) => (
                    <tr key={row.flat} style={{ cursor: 'pointer' }}>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)', background: row.highlight ? 'var(--secondary)' : 'transparent' }}>{row.flat}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)', background: row.highlight ? 'var(--secondary)' : 'transparent' }}>{row.wing}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>3 matching options.</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fab" style={{ position: 'absolute', right: '22px', bottom: '18px', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '999px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, boxShadow: '0 2px 6px rgba(15, 23, 42, 0.2)', cursor: 'pointer' }}>
        <div className="fab-icon" style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
        <div>New customer</div>
      </div>
    </div>
  )
}

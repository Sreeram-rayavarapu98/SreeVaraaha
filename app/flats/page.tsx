'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Flats() {
  const [selectedTower, setSelectedTower] = useState('A')
  const [viewMode, setViewMode] = useState<'list' | 'stack'>('list')

  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
            <Link href="/" style={{ color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>Home</Link>
            <span>·</span>
            <span>Flats & Apartments</span>
          </div>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Flats & Apartments</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Track inventory, availability, and bookings across towers.
          </div>
        </div>
        <div className="topbar-spacer" style={{ flex: 1 }}></div>
        <div className="topbar-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--input)', borderRadius: 'var(--radius-lg)', padding: '6px 10px', minWidth: '200px' }}>
          <div className="topbar-search-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: '14px' }}>🔍</div>
          <div className="topbar-search-placeholder" style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
            Search by flat, tower, or customer
          </div>
        </div>
        <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="btn btn-secondary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>📥</div>
            <div>Import inventory</div>
          </div>
          <div className="btn btn-primary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
            <div>Add tower</div>
          </div>
        </div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: '2.5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Inventory overview</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Snapshot of all units across this project.
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Download report
              </div>
            </div>
            <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Total units</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>184</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Across 6 towers</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Available</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>92</div>
                  <div className="summary-pill summary-pill-success">50% open</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Ready for booking</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Reserved</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>36</div>
                  <div className="summary-pill summary-pill-warning">Hold</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Follow-up in 3 days</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Booked / Sold</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>56</div>
                  <div className="summary-pill summary-pill-muted">Closed</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Includes registered sales</div>
              </div>
            </div>
            <div className="divider" style={{ height: '1px', background: 'var(--muted)', opacity: 0.4, margin: '6px 0' }}></div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Filters</div>
              <div className="field-input field-input-inline" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span className="field-input-chip" data-active="true">All towers</span>
                <span className="field-input-chip">Tower A</span>
                <span className="field-input-chip">Tower B</span>
                <span className="field-input-chip">3 BHK</span>
                <span className="field-input-chip">Available only</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Units in Tower A</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Tap a unit row to view or edit details.
                </div>
              </div>
              <div className="segmented">
                <div className="segment-item" data-active={viewMode === 'list'} onClick={() => setViewMode('list')}>
                  List
                </div>
                <div className="segment-item" data-active={viewMode === 'stack'} onClick={() => setViewMode('stack')}>
                  Stack view
                </div>
              </div>
            </div>
            <div className="inventory-table-wrapper" style={{ marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', overflow: 'hidden' }}>
              <table className="inventory-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead style={{ background: 'var(--secondary)' }}>
                  <tr>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Unit</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Type</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Floor</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Status</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Price</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Assigned consultant</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { unit: 'A-1201', type: '3 BHK · 1480 sq.ft', floor: '12', status: 'available', price: '₹ 1.25 Cr', consultant: 'Unassigned' },
                    { unit: 'A-1202', type: '2 BHK · 1120 sq.ft', floor: '12', status: 'reserved', price: '₹ 98 L', consultant: 'Rahul S' },
                    { unit: 'A-1103', type: '3 BHK · 1520 sq.ft', floor: '11', status: 'booked', price: '₹ 1.32 Cr', consultant: 'Anita P' },
                    { unit: 'A-903', type: '2.5 BHK · 1300 sq.ft', floor: '9', status: 'available', price: '₹ 1.08 Cr', consultant: 'Unassigned' },
                    { unit: 'A-705', type: '3 BHK · 1450 sq.ft', floor: '7', status: 'reserved', price: '₹ 1.18 Cr', consultant: 'Vijay K' },
                    { unit: 'A-402', type: '2 BHK · 1080 sq.ft', floor: '4', status: 'booked', price: '₹ 92 L', consultant: 'Priya M' },
                  ].map((row) => (
                    <tr key={row.unit} style={{ cursor: 'pointer' }}>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>
                        <div className="inventory-unit-id" style={{ fontWeight: 500, fontSize: '12px' }}>{row.unit}</div>
                      </td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.type}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.floor}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>
                        <span className={`status-pill status-${row.status}`}>
                          {row.status === 'available' ? 'Available' : row.status === 'reserved' ? 'Reserved' : 'Booked'}
                        </span>
                      </td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.price}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.consultant}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>Showing 1–6 of 32 units in Tower A</span>
              <span className="mini-link" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--primary)', cursor: 'pointer' }}>View all units</span>
            </div>
          </div>
        </div>

        <div className="content-row-side" style={{ flex: '1.5', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Towers & stacks</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Quickly switch between towers and visual stacks.
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Manage towers
              </div>
            </div>
            <div className="tower-list" style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '4px' }}>
              {['A', 'B', 'C', 'D'].map((tower) => (
                <div
                  key={tower}
                  className="tower-item"
                  data-active={selectedTower === tower}
                  onClick={() => setSelectedTower(tower)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '6px 8px',
                    borderRadius: 'var(--radius-md)',
                    background: selectedTower === tower ? 'var(--primary)' : 'var(--secondary)',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: selectedTower === tower ? 'var(--primary-foreground)' : 'var(--secondary-foreground)',
                  }}
                >
                  <span>Tower {tower}</span>
                  <span>{tower === 'A' ? '32 / 48 available' : tower === 'B' ? '18 / 36 available' : tower === 'C' ? '12 / 28 available' : '6 / 24 available'}</span>
                </div>
              ))}
            </div>
            <div className="tower-meta" style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px' }}>
              Selected tower: A · North-facing · 12 floors · 2 lifts
            </div>
            <div className="divider" style={{ height: '1px', background: 'var(--muted)', opacity: 0.4, margin: '6px 0' }}></div>
            <div className="section-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Stack preview (floors 10–12)</div>
            <div className="stack-layout" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '6px' }}>
              {[
                [{ unit: '1201', type: '3 BHK · Avl', status: 'available' }, { unit: '1202', type: '2 BHK · Res', status: 'reserved' }, { unit: '1203', type: '3 BHK · Sold', status: 'booked' }],
                [{ unit: '1101', type: '3 BHK · Avl', status: 'available' }, { unit: '1102', type: '2 BHK · Avl', status: 'available' }, { unit: '1103', type: '3 BHK · Res', status: 'reserved' }],
                [{ unit: '1001', type: '3 BHK · Sold', status: 'booked' }, { unit: '1002', type: '2 BHK · Avl', status: 'available' }, { unit: '1003', type: '3 BHK · Avl', status: 'available' }],
              ].map((row, idx) => (
                <div key={idx} className="stack-row" style={{ display: 'flex', gap: '4px' }}>
                  {row.map((cell) => (
                    <div
                      key={cell.unit}
                      className="stack-cell"
                      data-status={cell.status}
                      style={{
                        flex: 1,
                        borderRadius: 'var(--radius-sm)',
                        background: cell.status === 'available' ? 'var(--success)' : cell.status === 'reserved' ? 'var(--warning)' : 'var(--muted)',
                        padding: '4px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '2px',
                        fontSize: '10px',
                        color: cell.status === 'available' ? 'var(--success-foreground)' : cell.status === 'reserved' ? 'var(--warning-foreground)' : 'var(--muted-foreground)',
                      }}
                    >
                      <div className="stack-cell-label" style={{ fontWeight: 500 }}>{cell.unit}</div>
                      <div className="stack-cell-meta" style={{ fontSize: '10px' }}>{cell.type}</div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
            <div className="legend-row" style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px', fontSize: '10px', color: 'var(--muted-foreground)' }}>
              <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div className="legend-dot legend-dot-available" style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--success)' }}></div>
                <span>Available</span>
              </div>
              <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div className="legend-dot legend-dot-reserved" style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--warning)' }}></div>
                <span>Reserved / Hold</span>
              </div>
              <div className="legend-item" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <div className="legend-dot legend-dot-booked" style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--muted)' }}></div>
                <span>Booked / Sold</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Selected unit details</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  A-1202 · Reserved by high-intent customer.
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Open in customer
              </div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Configuration</div>
              <div className="field-input" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px' }}>
                2 BHK · 1120 sq.ft · East-facing
              </div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Commercial terms</div>
              <div className="field-input" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px' }}>
                Base price: ₹ 98 L · Floor rise: ₹ 3 L · Parking: 1 covered
              </div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Reservation details</div>
              <div className="field-input" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px' }}>
                Reserved for: Priya Sharma · Valid till: 24 Nov, 5:00 PM
              </div>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Next step</div>
              <div className="field-input field-input-inline" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px', display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                <span className="field-input-chip" data-active="true">Confirm booking</span>
                <span className="field-input-chip">Extend hold</span>
                <span className="field-input-chip">Release unit</span>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '6px' }}>
              <div className="btn btn-secondary">
                <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>✏️</div>
                <div>Edit unit</div>
              </div>
              <div className="btn btn-primary">
                <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>🧾</div>
                <div>Create booking</div>
              </div>
            </div>
          </div>
        </div>

        <div className="fab" style={{ position: 'absolute', right: '22px', bottom: '18px', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '999px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, boxShadow: '0 2px 6px rgba(15, 23, 42, 0.2)', cursor: 'pointer' }}>
          <div className="fab-icon" style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
          <div>Add flat / unit</div>
        </div>

        <div className="toast-stack" style={{ position: 'absolute', right: '18px', bottom: '82px', display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '260px', pointerEvents: 'none' }}>
          <div className="toast" style={{ background: 'var(--card)', color: 'var(--card-foreground)', borderRadius: 'var(--radius-md)', padding: '8px 10px', boxShadow: '0 1px 4px rgba(15, 23, 42, 0.16)', fontSize: '11px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
            <div className="toast-badge" style={{ fontSize: '10px', fontWeight: 500, padding: '2px 6px', borderRadius: '999px', background: 'var(--success)', color: 'var(--success-foreground)' }}>Inventory</div>
            <div className="toast-message" style={{ flex: 1 }}>
              <div className="toast-title" style={{ fontWeight: 500, marginBottom: '2px' }}>Tower A updated</div>
              <div className="toast-body" style={{ color: 'var(--muted-foreground)' }}>
                2 new units were added and pricing synced from master sheet.
              </div>
              <div className="toast-time" style={{ fontSize: '10px', color: 'var(--muted-foreground)', marginTop: '2px' }}>2 min ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

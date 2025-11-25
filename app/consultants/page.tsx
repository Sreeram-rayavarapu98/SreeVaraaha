'use client'

import { useState } from 'react'

export default function Consultants() {
  const [selectedConsultant, setSelectedConsultant] = useState('Riya Sharma')
  const [filter, setFilter] = useState('Active')

  const consultants = [
    { id: 'rs', name: 'Riya Sharma', initials: 'RS', role: 'Senior consultant · Tower A & C · 3BHK focus', badges: ['6 visits today', '4 follow-ups'], status: 'High load', pipeline: 18, selected: true },
    { id: 'am', name: 'Amit Mehra', initials: 'AM', role: 'Consultant · Tower B · 2BHK & studio', badges: ['3 visits today', 'Lead response < 2 hrs'], status: 'Balanced', pipeline: 12, selected: false },
    { id: 'nk', name: 'Neha Kulkarni', initials: 'NK', role: 'Consultant · Weekend specialist', badges: ['Primarily follow-ups'], status: 'Low load', pipeline: 8, selected: false },
    { id: 'jd', name: 'Jay Desai', initials: 'JD', role: 'Junior consultant · New joiner', badges: ['Shadowing Riya'], status: 'Training', pipeline: 3, selected: false },
    { id: 'sp', name: 'Sonal Patel', initials: 'SP', role: 'Consultant · NRI & investor leads', badges: ['High close rate'], status: 'Key closer', pipeline: 15, selected: false },
  ]

  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Consultants</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Track capacity, appointments, and performance.
          </div>
        </div>
        <div className="topbar-spacer" style={{ flex: 1 }}></div>
        <div className="topbar-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--input)', borderRadius: 'var(--radius-lg)', padding: '6px 10px', minWidth: '200px' }}>
          <div className="topbar-search-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: '14px' }}>🔍</div>
          <div className="topbar-search-placeholder" style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
            Search by name, phone, team, tag
          </div>
        </div>
        <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="btn btn-secondary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>📊</div>
            <div>View performance</div>
          </div>
          <div className="btn btn-primary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>➕</div>
            <div>New consultant</div>
          </div>
        </div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="card">
        <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
          <div>
            <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Team overview</div>
            <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
              How your consultant capacity looks today.
            </div>
          </div>
          <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
            Configure targets
          </div>
        </div>
        <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
          <div className="summary-card">
            <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Active consultants</div>
            <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>8</div>
              <div className="summary-pill summary-pill-success">2 on floor</div>
            </div>
            <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Includes full-time & part-time</div>
          </div>
          <div className="summary-card">
            <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Visits scheduled today</div>
            <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>21</div>
              <div className="summary-pill summary-pill-success">16 confirmed</div>
            </div>
            <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Across 5 projects / towers</div>
          </div>
          <div className="summary-card">
            <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Follow-ups due</div>
            <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>34</div>
              <div className="summary-pill summary-pill-warning">12 overdue</div>
            </div>
            <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Based on last contact date</div>
          </div>
          <div className="summary-card">
            <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Unassigned leads</div>
            <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>9</div>
              <div className="summary-pill summary-pill-muted">Distribute now</div>
            </div>
            <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Waiting assignment to consultant</div>
          </div>
        </div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: '3', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Consultants list</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Assign leads and balance workload.
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '6px' }}>
                <div className="segmented">
                  <div className="segment-item" data-active={filter === 'Active'} onClick={() => setFilter('Active')}>Active</div>
                  <div className="segment-item" data-active={filter === 'All'} onClick={() => setFilter('All')}>All</div>
                  <div className="segment-item" data-active={filter === 'On leave'} onClick={() => setFilter('On leave')}>On leave</div>
                </div>
                <div className="pill-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  <span className="pill-filter" data-active="true">All teams</span>
                  <span className="pill-filter">Weekends</span>
                  <span className="pill-filter">High close rate</span>
                  <span className="pill-filter">New joiners</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px' }}>
              {consultants.map((consultant) => (
                <div
                  key={consultant.id}
                  onClick={() => setSelectedConsultant(consultant.name)}
                  style={{
                    display: 'flex',
                    gap: '6px',
                    padding: '4px',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--card)',
                    cursor: 'pointer',
                    fontSize: '11px',
                    alignItems: 'center',
                    border: consultant.selected ? '1px solid var(--primary)' : 'none',
                  }}
                >
                  <div style={{ width: '28px', height: '28px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>
                    {consultant.initials}
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ fontWeight: 500, fontSize: '12px', color: 'var(--foreground)' }}>{consultant.name}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>{consultant.role}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px', flexWrap: 'wrap' }}>
                      {consultant.badges.map((badge, idx) => (
                        <span key={idx} className={badge.includes('visits') || badge.includes('close') ? 'badge badge-success' : 'badge badge-muted'} style={{ fontSize: '10px' }}>
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px', fontSize: '10px' }}>
                    <span className={consultant.status === 'High load' ? 'badge badge-warning' : consultant.status === 'Key closer' ? 'badge badge-success' : 'badge badge-muted'} style={{ fontSize: '10px' }}>
                      {consultant.status}
                    </span>
                    <span style={{ color: 'var(--muted-foreground)' }}>Pipeline: {consultant.pipeline}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <div>Showing 5 of 8 consultants</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span className="mini-link" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--primary)', cursor: 'pointer' }}>Previous</span>
                <span>·</span>
                <span className="mini-link" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--primary)', cursor: 'pointer' }}>Next</span>
              </div>
            </div>
          </div>
        </div>

        <div className="content-row-side" style={{ flex: '2', display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>
                  RS
                </div>
                <div>
                  <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Consultant details</div>
                  <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                    Schedule, workload & performance.
                  </div>
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Open full profile
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '6px', marginTop: '4px', fontSize: '11px' }}>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Name</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>Riya Sharma</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Role</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>Senior consultant</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Primary towers</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>A & C wings</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Focus</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>3BHK, higher floors</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Today's visits</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>6 scheduled</div>
              </div>
              <div>
                <div style={{ color: 'var(--muted-foreground)' }}>Open leads</div>
                <div style={{ fontWeight: 500, color: 'var(--foreground)' }}>18 active</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <div style={{ flex: 1, borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px 8px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ color: 'var(--muted-foreground)' }}>Capacity used</span>
                <span style={{ fontWeight: 500, fontSize: '11px' }}>82%</span>
              </div>
              <div style={{ flex: 1, borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px 8px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ color: 'var(--muted-foreground)' }}>Avg. response</span>
                <span style={{ fontWeight: 500, fontSize: '11px' }}>1.4 hrs</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px', marginTop: '4px' }}>
              <div style={{ flex: 1, borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px 8px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ color: 'var(--muted-foreground)' }}>Conversion (last 30d)</div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)' }}>23%</div>
                <div style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>3 bookings closed</div>
              </div>
              <div style={{ flex: 1, borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px 8px', fontSize: '11px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <div style={{ color: 'var(--muted-foreground)' }}>Customer NPS</div>
                <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--foreground)' }}>9.1</div>
                <div style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>From 18 surveys</div>
              </div>
            </div>
            <div className="section-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Today's schedule</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px' }}>
              {[
                { time: '10:00', title: 'Site visit – A-1203', meta: 'Customer: Sanjay Mehta · 45 min' },
                { time: '12:30', title: 'Site visit – C-903', meta: 'Customer: Anita Shah · 45 min' },
                { time: '15:00', title: 'Video call – options review', meta: 'Customer: Priya Rao · 30 min' },
                { time: '17:15', title: 'Follow-up call block', meta: '5 customers · Post-visit decisions' },
              ].map((item) => (
                <div key={item.time} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', padding: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', fontSize: '11px' }}>
                  <div style={{ fontWeight: 500, fontSize: '11px', minWidth: '56px', color: 'var(--foreground)' }}>{item.time}</div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ fontSize: '12px', fontWeight: 500, color: 'var(--foreground)' }}>{item.title}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>{item.meta}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '4px' }}>Pipeline by stage</div>
            <div style={{ marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '11px' }}>
                <thead>
                  <tr>
                    <th style={{ padding: '4px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Stage</th>
                    <th style={{ padding: '4px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Count</th>
                    <th style={{ padding: '4px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Next actions</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { stage: 'New / contacted', count: 5, action: 'Schedule first visit' },
                    { stage: 'Visited once', count: 7, action: 'Share comparisons', badge: 'warning' },
                    { stage: 'Ready to book', count: 3, action: 'Lock slot', badge: 'success' },
                    { stage: 'On hold', count: 3, action: 'Check-in monthly', badge: 'muted' },
                  ].map((row) => (
                    <tr key={row.stage}>
                      <td style={{ padding: '4px' }}>{row.stage}</td>
                      <td style={{ padding: '4px' }}>{row.count}</td>
                      <td style={{ padding: '4px' }}>
                        {row.badge && (
                          <span className={`badge badge-${row.badge}`} style={{ fontSize: '10px' }}>
                            {row.action}
                          </span>
                        )}
                        {!row.badge && row.action}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="field-group" style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px' }}>
              <div className="field-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>Notes from today</div>
              <div className="field-input" style={{ borderRadius: 'var(--radius-md)', background: 'var(--input)', padding: '6px 8px', fontSize: '12px' }}>
                Prioritize A-wing high-floor inventory, watch for any cancellations that fit 3BHK requirements.
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Unassigned leads</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Quickly route new leads to consultants.
                </div>
              </div>
              <div className="card-actions" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>
                Open assignment view
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', padding: '6px' }}>
              {[
                { initials: 'NL', title: 'Walk-in – 3BHK', meta: 'C-wing preference · Budget ₹1.2–1.4Cr', badge: 'Came via weekend event', match: 'Match Riya' },
                { initials: 'NL', title: 'Web lead – 2BHK', meta: 'Evening slots · Tower B', badge: 'Best fit: Amit', match: 'Assign' },
              ].map((lead, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '6px', padding: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', cursor: 'pointer', fontSize: '11px', alignItems: 'center' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>
                    {lead.initials}
                  </div>
                  <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ fontWeight: 500, fontSize: '12px', color: 'var(--foreground)' }}>{lead.title}</div>
                    <div style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>{lead.meta}</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                      <span className="badge badge-muted" style={{ fontSize: '10px' }}>{lead.badge}</span>
                    </div>
                  </div>
                  <span className={lead.match === 'Match Riya' ? 'badge badge-success' : 'badge badge-muted'} style={{ fontSize: '10px' }}>
                    {lead.match}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <div>2 of 9 unassigned leads</div>
              <span className="mini-link" style={{ fontSize: '11px', fontWeight: 500, color: 'var(--primary)', cursor: 'pointer' }}>View all</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fab" style={{ position: 'absolute', right: '22px', bottom: '18px', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '999px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, boxShadow: '0 2px 6px rgba(15, 23, 42, 0.2)', cursor: 'pointer' }}>
        <div className="fab-icon" style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>➕</div>
        <div>Add consultant</div>
      </div>
    </div>
  )
}

'use client'

export default function Dashboard() {
  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Dashboard</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Tuesday, 12 March - 3 new walk-in
          </div>
        </div>
        <div className="topbar-spacer" style={{ flex: 1 }}></div>
        <div className="topbar-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--input)', borderRadius: 'var(--radius-lg)', padding: '6px 10px', minWidth: '200px' }}>
          <div className="topbar-search-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--muted-foreground)', fontSize: '14px' }}>🔍</div>
          <div className="topbar-search-placeholder" style={{ fontSize: '13px', color: 'var(--muted-foreground)' }}>
            Search appointments, customers
          </div>
        </div>
        <div className="topbar-actions" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div className="btn btn-primary">
            <div className="btn-icon" style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
            <div>Quick add</div>
          </div>
        </div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Today at a glance</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Keep up with visits, follow-ups, and
                </div>
              </div>
            </div>
            <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Today's appointments</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>12</div>
                  <div className="summary-pill summary-pill-warning">4 pending</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>3 completed • 1 no-show</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>New walk-ins</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>7</div>
                  <div className="summary-pill summary-pill-success">Walk</div>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Upcoming appointments</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Today & tomorrow across all consultants.
                </div>
              </div>
            </div>
            <div style={{ fontSize: '12px', fontWeight: 500, marginBottom: '4px' }}>Today</div>
            <div className="inventory-table-wrapper" style={{ marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', overflow: 'hidden' }}>
              <table className="inventory-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead style={{ background: 'var(--secondary)' }}>
                  <tr>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Time</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Customer</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Flat</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { time: '10:00', customer: 'Sanjay Mehta', flat: 'A-1203 3BHK' },
                    { time: '10:45', customer: 'Rohan Verma', flat: 'B-804 2BHK' },
                    { time: '11:30', customer: 'Priya Shah', flat: 'C-305 3BHK' },
                    { time: '12:15', customer: 'Online lead', flat: 'A-907 2BHK' },
                  ].map((row) => (
                    <tr key={row.time} style={{ cursor: 'pointer' }}>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.time}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.customer}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.flat}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>Showing 1-4 of 12</span>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Customers needing follow-up</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Last contact &gt; 2 days ago or missed appointment.
                </div>
              </div>
            </div>
            <div className="pill-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
              <span className="pill-filter" data-active="true">All</span>
              <span className="pill-filter">Interested</span>
              <span className="pill-filter">Considering</span>
            </div>
            <div className="inventory-table-wrapper" style={{ marginTop: '4px', borderRadius: 'var(--radius-md)', background: 'var(--card)', overflow: 'hidden' }}>
              <table className="inventory-table" style={{ width: '100%', borderCollapse: 'collapse', fontSize: '12px' }}>
                <thead style={{ background: 'var(--secondary)' }}>
                  <tr>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Name</th>
                    <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 500, color: 'var(--muted-foreground)' }}>Last visit</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Anuj Patil', visit: 'Sun' },
                    { name: 'Meera Iyer', visit: 'Sat' },
                    { name: 'Corporate walk-in', visit: 'Fri' },
                  ].map((row) => (
                    <tr key={row.name} style={{ cursor: 'pointer' }}>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.name}</td>
                      <td style={{ padding: '6px 8px', borderTop: '1px solid var(--border)' }}>{row.visit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>3 of 18 customers shown</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fab" style={{ position: 'absolute', right: '22px', bottom: '18px', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '999px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, boxShadow: '0 2px 6px rgba(15, 23, 42, 0.2)', cursor: 'pointer' }}>
        <div className="fab-icon" style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
        <div>Quick add</div>
      </div>

      <div className="toast-stack" style={{ position: 'absolute', right: '18px', bottom: '82px', display: 'flex', flexDirection: 'column', gap: '6px', maxWidth: '260px', pointerEvents: 'auto' }}>
        <div className="toast" style={{ background: 'var(--card)', color: 'var(--card-foreground)', borderRadius: 'var(--radius-md)', padding: '8px 10px', boxShadow: '0 1px 4px rgba(15, 23, 42, 0.16)', fontSize: '11px', display: 'flex', alignItems: 'flex-start', gap: '6px' }}>
          <div className="toast-badge" style={{ fontSize: '10px', fontWeight: 500, padding: '2px 6px', borderRadius: '999px', background: 'var(--success)', color: 'var(--success-foreground)' }}>Success</div>
          <div className="toast-message" style={{ flex: 1 }}>
            <div className="toast-title" style={{ fontWeight: 500, marginBottom: '2px' }}>Customer saved</div>
            <div className="toast-body" style={{ color: 'var(--muted-foreground)' }}>
              Anjali Nair assigned to Anita and added to follow-up list.
            </div>
            <div className="toast-time" style={{ fontSize: '10px', color: 'var(--muted-foreground)', marginTop: '2px' }}>Just now</div>
          </div>
        </div>
      </div>
    </div>
  )
}

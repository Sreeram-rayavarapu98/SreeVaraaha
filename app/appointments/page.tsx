'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { format, parseISO, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isSameDay, addMonths, subMonths, startOfWeek, endOfWeek, getMonth, getYear } from 'date-fns'

type AppointmentType = 'site' | 'call' | 'campaign' | 'overdue'
type AppointmentStatus = 'confirmed' | 'tentative'

type Appointment = {
  id: number
  date: string
  time: string
  title: string
  desc: string
  type: AppointmentType
  status: AppointmentStatus
}

type CalendarFilter = 'all' | AppointmentType

type DaySummary = {
  date: Date
  total: number
  counts: Record<AppointmentType, number>
  types: Set<AppointmentType>
  primaryType: AppointmentType | 'mixed'
}

const APPOINTMENT_DATA: Appointment[] = [
  {
    id: 1,
    date: '2024-09-03',
    time: '10:00',
    title: 'Qualification call – Shilpa',
    desc: 'Tower B · Pricing walkthrough',
    type: 'call',
    status: 'confirmed',
  },
  {
    id: 2,
    date: '2024-09-03',
    time: '16:30',
    title: 'Budget alignment – Rahul',
    desc: '2 BHK shortlist • Zoom call',
    type: 'call',
    status: 'tentative',
  },
  {
    id: 3,
    date: '2024-09-08',
    time: '09:30',
    title: 'Site visit – A-1203',
    desc: 'Sanjay Mehta • Consultant Vivek',
    type: 'site',
    status: 'confirmed',
  },
  {
    id: 4,
    date: '2024-09-08',
    time: '11:00',
    title: 'Post-visit follow-up',
    desc: 'Facebook lead • Documents pending',
    type: 'call',
    status: 'tentative',
  },
  {
    id: 5,
    date: '2024-09-08',
    time: '14:30',
    title: 'Walk-in site tour',
    desc: 'Family of 3 • Prefers 2 BHK',
    type: 'site',
    status: 'confirmed',
  },
  {
    id: 6,
    date: '2024-09-10',
    time: '15:15',
    title: 'Tower C mock-up visit',
    desc: 'Corporate referral • Parking add-on',
    type: 'site',
    status: 'confirmed',
  },
  {
    id: 7,
    date: '2024-09-18',
    time: '17:00',
    title: 'Overdue payment check-in',
    desc: 'Flat B-603 • Token pending',
    type: 'overdue',
    status: 'tentative',
  },
  {
    id: 8,
    date: '2024-09-25',
    time: '10:00',
    title: 'Campaign showcase',
    desc: 'Weekend event – leads download',
    type: 'campaign',
    status: 'confirmed',
  },
]

const DEFAULT_SELECTED_DAY = parseISO('2024-09-08')

const CALENDAR_SUMMARY = buildCalendarSummary(APPOINTMENT_DATA)
const CALENDAR_ENTRIES = Object.values(CALENDAR_SUMMARY)

function buildCalendarSummary(data: Appointment[]): Record<string, DaySummary> {
  const summary: Record<string, DaySummary> = {}
  const priority: AppointmentType[] = ['site', 'call', 'campaign', 'overdue']

  data.forEach((item) => {
    if (!summary[item.date]) {
      summary[item.date] = {
        date: parseISO(item.date),
        total: 0,
        counts: {
          site: 0,
          call: 0,
          campaign: 0,
          overdue: 0,
        },
        types: new Set<AppointmentType>(),
        primaryType: 'site',
      }
    }

    const entry = summary[item.date]
    entry.total += 1
    entry.counts[item.type] += 1
    entry.types.add(item.type)
  })

  Object.values(summary).forEach((entry) => {
    const dominant = priority.find((type) => entry.counts[type] > 0)
    entry.primaryType = entry.types.size > 1 ? 'mixed' : dominant ?? 'site'
  })

  return summary
}

export default function Appointments() {
  const [selectedFilter, setSelectedFilter] = useState<CalendarFilter>('all')
  const [selectedDay, setSelectedDay] = useState<Date | undefined>(DEFAULT_SELECTED_DAY)
  const [currentMonth, setCurrentMonth] = useState(startOfMonth(DEFAULT_SELECTED_DAY))
  const [viewFilter, setViewFilter] = useState<'All' | 'Confirmed' | 'Tentative'>('All')

  const activeType = selectedFilter === 'all' ? null : selectedFilter
  const selectedDayKey = format(selectedDay ?? DEFAULT_SELECTED_DAY, 'yyyy-MM-dd')

  const dayAppointments = useMemo(
    () => APPOINTMENT_DATA.filter((appointment) => appointment.date === selectedDayKey),
    [selectedDayKey]
  )

  const viewFilteredAppointments = useMemo(() => {
    if (viewFilter === 'All') return dayAppointments
    const statusMap: Record<'Confirmed' | 'Tentative', AppointmentStatus> = {
      Confirmed: 'confirmed',
      Tentative: 'tentative',
    }
    return dayAppointments.filter((appointment) => appointment.status === statusMap[viewFilter])
  }, [dayAppointments, viewFilter])

  const calendarGrid = useMemo(() => {
    const monthStart = startOfMonth(currentMonth)
    const monthEnd = endOfMonth(currentMonth)
    const calendarStart = startOfWeek(monthStart, { weekStartsOn: 1 })
    const calendarEnd = endOfWeek(monthEnd, { weekStartsOn: 1 })
    const days = eachDayOfInterval({ start: calendarStart, end: calendarEnd })
    
    // Group days into weeks
    const weeks: Date[][] = []
    for (let i = 0; i < days.length; i += 7) {
      weeks.push(days.slice(i, i + 7))
    }
    return weeks
  }, [currentMonth])

  const getBadgeColor = (type: AppointmentType | 'mixed') => {
    switch (type) {
      case 'site':
        return 'var(--success)'
      case 'call':
        return 'var(--warning)'
      case 'campaign':
        return 'var(--accent)'
      case 'overdue':
        return 'var(--destructive)'
      case 'mixed':
        return 'var(--muted)'
      default:
        return 'var(--muted)'
    }
  }


  const totalAppointments = dayAppointments.length
  const confirmedAppointments = dayAppointments.filter((item) => item.status === 'confirmed').length
  const siteVisits = dayAppointments.filter((item) => item.type === 'site').length

  return (
    <div className="content" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '4px', position: 'relative' }}>
      <div className="topbar" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div className="topbar-title-group" style={{ display: 'flex', flexDirection: 'column', gap: '2px', flex: '0 0 auto' }}>
          <div className="breadcrumbs" style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
            <Link href="/" style={{ color: 'var(--primary)', fontWeight: 500 }}>Home</Link>
            <span>·</span>
            <span>Appointments / Calendar</span>
          </div>
          <div className="topbar-title" style={{ fontSize: '20px', fontWeight: 600 }}>Appointments / Calendar</div>
          <div className="topbar-subtitle" style={{ fontSize: '12px', color: 'var(--muted-foreground)' }}>
            Plan visits, follow-ups, and site tours.
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
            <div>New appointment</div>
          </div>
        </div>
        <div className="topbar-profile" style={{ width: '30px', height: '30px', borderRadius: '999px', background: 'var(--secondary)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 500, color: 'var(--secondary-foreground)' }}>AK</div>
      </div>

      <div className="content-row" style={{ display: 'flex', gap: '12px' }}>
        <div className="content-row-main" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Day summary</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Highlights for {format(selectedDay ?? DEFAULT_SELECTED_DAY, 'd MMM, yyyy')}.
                </div>
              </div>
            </div>
            <div className="summary-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '8px' }}>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Total appointments</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>{totalAppointments}</div>
                  <div className="summary-pill summary-pill-success">{confirmedAppointments} confirmed</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>
                  {totalAppointments - confirmedAppointments} pending actions
                </div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Site visits</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>{siteVisits}</div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Includes guided tours & mock-ups</div>
              </div>
              <div className="summary-card">
                <div className="summary-label" style={{ fontSize: '11px', color: 'var(--muted-foreground)', fontWeight: 500 }}>Follow-ups</div>
                <div className="summary-value-row" style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                  <div className="summary-value" style={{ fontSize: '18px', fontWeight: 600 }}>
                    {dayAppointments.filter((item) => item.type === 'call').length}
                  </div>
                </div>
                <div className="summary-trend" style={{ fontSize: '10px', color: 'var(--muted-foreground)' }}>Calls, nurture loops & reminders</div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Calendar</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Intelligent month view with slots & statuses.
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
              <div className="pill-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {[
                  { label: 'All', value: 'all' },
                  { label: 'Site visits', value: 'site' },
                  { label: 'Calls', value: 'call' },
                  { label: 'Campaigns', value: 'campaign' },
                  { label: 'Overdue', value: 'overdue' },
                ].map((option) => (
                  <span key={option.value} className="pill-filter" data-active={selectedFilter === option.value} onClick={() => setSelectedFilter(option.value as CalendarFilter)}>
                    {option.label}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <button
                  onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
                  style={{
                    background: 'var(--input)',
                    border: '1px solid var(--border-overlay)',
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 12px',
                    color: 'var(--foreground)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--overlay-light)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--input)'
                  }}
                >
                  ←
                </button>
                <select
                  value={getMonth(currentMonth)}
                  onChange={(e) => setCurrentMonth(new Date(getYear(currentMonth), parseInt(e.target.value), 1))}
                  style={{
                    background: 'var(--input)',
                    border: '1px solid var(--border-overlay)',
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 12px',
                    color: 'var(--foreground)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    minWidth: '120px',
                  }}
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <option key={i} value={i} style={{ background: 'var(--card)', color: 'var(--foreground)' }}>
                      {format(new Date(2024, i, 1), 'MMMM')}
                    </option>
                  ))}
                </select>
                <select
                  value={getYear(currentMonth)}
                  onChange={(e) => setCurrentMonth(new Date(parseInt(e.target.value), getMonth(currentMonth), 1))}
                  style={{
                    background: 'var(--input)',
                    border: '1px solid var(--border-overlay)',
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 12px',
                    color: 'var(--foreground)',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    outline: 'none',
                    minWidth: '80px',
                  }}
                >
                  {Array.from({ length: 10 }, (_, i) => {
                    const year = 2020 + i
                    return (
                      <option key={year} value={year} style={{ background: 'var(--card)', color: 'var(--foreground)' }}>
                        {year}
                      </option>
                    )
                  })}
                </select>
                <button
                  onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
                  style={{
                    background: 'var(--input)',
                    border: '1px solid var(--border-overlay)',
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 12px',
                    color: 'var(--foreground)',
                    fontSize: '14px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'var(--overlay-light)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'var(--input)'
                  }}
                >
                  →
                </button>
                <button
                  onClick={() => setCurrentMonth(startOfMonth(new Date()))}
                  style={{
                    background: 'var(--primary)',
                    border: '1px solid var(--primary)',
                    borderRadius: 'var(--radius-md)',
                    padding: '8px 14px',
                    color: 'var(--primary-foreground)',
                    fontSize: '13px',
                    fontWeight: 500,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s',
                    marginLeft: '4px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = '0.9'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1'
                  }}
                >
                  Today
                </button>
              </div>
            </div>
            <div style={{ 
              borderRadius: 'var(--radius-md)',
              background: 'var(--overlay-very-light)',
              border: '1px solid var(--border-overlay)',
              overflow: 'hidden',
            }}>
              {/* Week day headers */}
              <div style={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(7, 1fr)',
                background: 'var(--overlay-light)',
                borderBottom: '1px solid var(--border-overlay)',
              }}>
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div
                    key={day}
                    style={{
                      padding: '12px 8px',
                      textAlign: 'center',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: 'var(--muted-foreground)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px',
                    }}
                  >
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar grid */}
              <div style={{ padding: '8px' }}>
                {calendarGrid.map((week, weekIndex) => (
                  <div
                    key={weekIndex}
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(7, 1fr)',
                      gap: '4px',
                      marginBottom: weekIndex < calendarGrid.length - 1 ? '4px' : '0',
                    }}
                  >
                    {week.map((day) => {
                      const key = format(day, 'yyyy-MM-dd')
                      const summary = CALENDAR_SUMMARY[key]
                      const isSelected = selectedDay && isSameDay(day, selectedDay)
                      const isToday = isSameDay(day, new Date())
                      const isCurrentMonth = isSameMonth(day, currentMonth)
                      const hasMatchingAppointments = summary && (!activeType || summary.types.has(activeType))

                      return (
                        <div
                          key={key}
                          onClick={() => setSelectedDay(day)}
                          style={{
                            aspectRatio: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'flex-start',
                            padding: '8px 4px',
                            borderRadius: 'var(--radius-sm)',
                            cursor: 'pointer',
                            transition: 'all 0.15s ease',
                            background: isSelected 
                              ? 'var(--primary)' 
                              : isToday 
                              ? 'var(--overlay-light)' 
                              : 'transparent',
                            color: isSelected 
                              ? 'var(--primary-foreground)' 
                              : isCurrentMonth 
                              ? 'var(--foreground)' 
                              : 'var(--muted-foreground)',
                            fontWeight: isSelected ? 600 : isToday ? 500 : 400,
                            opacity: isCurrentMonth ? 1 : 0.4,
                            position: 'relative',
                          }}
                          onMouseEnter={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = 'var(--overlay-light)'
                              e.currentTarget.style.opacity = '1'
                            }
                          }}
                          onMouseLeave={(e) => {
                            if (!isSelected) {
                              e.currentTarget.style.background = isToday ? 'var(--overlay-light)' : 'transparent'
                              e.currentTarget.style.opacity = isCurrentMonth ? '1' : '0.4'
                            }
                          }}
                        >
                          <div style={{ 
                            fontSize: '13px',
                            marginBottom: '4px',
                          }}>
                            {day.getDate()}
                          </div>
                          {hasMatchingAppointments && summary && (
                            <div
                              style={{
                                width: '20px',
                                height: '20px',
                                borderRadius: '999px',
                                background: activeType ? getBadgeColor(activeType) : getBadgeColor(summary.primaryType),
                                color: (activeType || summary.primaryType) === 'site' ? 'var(--success-foreground)' :
                                       (activeType || summary.primaryType) === 'call' ? 'var(--warning-foreground)' :
                                       (activeType || summary.primaryType) === 'campaign' ? 'var(--accent-foreground)' :
                                       (activeType || summary.primaryType) === 'overdue' ? 'var(--destructive-foreground)' :
                                       'var(--muted-foreground)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '10px',
                                fontWeight: 600,
                                flexShrink: 0,
                              }}
                            >
                              {activeType ? summary.counts[activeType] : summary.total}
                            </div>
                          )}
                        </div>
                      )
                    })}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ 
              display: 'flex', 
              gap: '16px', 
              marginTop: '16px', 
              paddingTop: '16px',
              borderTop: '1px solid var(--border-overlay)',
              fontSize: '11px', 
              color: 'var(--muted-foreground)', 
              flexWrap: 'wrap' 
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--success)' }}></span>
                Site visits
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--warning)' }}></span>
                Calls & nurture
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--accent)' }}></span>
                Campaigns
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '999px', background: 'var(--destructive)' }}></span>
                Overdue follow-ups
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2px' }}>
              <div>
                <div className="card-title" style={{ fontSize: '14px', fontWeight: 500 }}>Timeline</div>
                <div className="card-subtitle" style={{ fontSize: '11px', color: 'var(--muted-foreground)' }}>
                  Slots for the selected day.
                </div>
              </div>
            </div>
            <div className="pill-filters" style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: '2px' }}>
              <span className="pill-filter" data-active={viewFilter === 'All'} onClick={() => setViewFilter('All')}>All</span>
              <span className="pill-filter" data-active={viewFilter === 'Confirmed'} onClick={() => setViewFilter('Confirmed')}>Confirmed</span>
              <span className="pill-filter" data-active={viewFilter === 'Tentative'} onClick={() => setViewFilter('Tentative')}>Tentative</span>
            </div>
            <div style={{ marginTop: '6px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {viewFilteredAppointments.length === 0 && (
                <div style={{ padding: '12px', borderRadius: 'var(--radius-md)', background: 'var(--secondary)', color: 'var(--muted-foreground)', fontSize: '11px' }}>
                  No appointments match this status for {format(selectedDay ?? DEFAULT_SELECTED_DAY, 'd MMM')}. Try another filter or day.
                </div>
              )}
              {viewFilteredAppointments.map((item) => (
                <div key={`${item.date}-${item.time}-${item.title}`} style={{ borderLeft: `4px solid ${getBorderColor(item.type)}`, paddingLeft: '8px' }}>
                  <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--foreground)' }}>
                    {item.time} · {item.status === 'confirmed' ? 'Confirmed' : 'Tentative'}
                  </div>
                  <div style={{ fontSize: '13px', fontWeight: 500, marginTop: '2px', color: 'var(--foreground)' }}>{item.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted-foreground)', marginTop: '2px' }}>{item.desc}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '6px', fontSize: '11px', color: 'var(--muted-foreground)' }}>
              <span>Showing {viewFilteredAppointments.length} of {dayAppointments.length} slots</span>
              <span style={{ color: 'var(--primary)', fontWeight: 500, cursor: 'pointer' }}>View all appointments</span>
            </div>
          </div>
        </div>
      </div>

      <div className="fab" style={{ position: 'absolute', right: '22px', bottom: '18px', background: 'var(--primary)', color: 'var(--primary-foreground)', borderRadius: '999px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', fontWeight: 500, boxShadow: '0 2px 6px rgba(15, 23, 42, 0.2)', cursor: 'pointer' }}>
        <div className="fab-icon" style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px' }}>＋</div>
        <div>New appointment</div>
      </div>
    </div>
  )
}

function getBorderColor(type: AppointmentType) {
  switch (type) {
    case 'site':
      return 'var(--success)'
    case 'call':
      return 'var(--warning)'
    case 'campaign':
      return 'var(--accent)'
    case 'overdue':
      return 'var(--destructive)'
    default:
      return 'var(--primary)'
  }
}

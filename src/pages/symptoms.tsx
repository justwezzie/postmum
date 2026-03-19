import { useState, useMemo } from 'react'
import { format, parseISO, isToday, isYesterday } from 'date-fns'
import { Pill, Plus } from '@phosphor-icons/react'
import { Card } from '../components/ui/card'
import { useAuth } from '../hooks/use-auth'
import { useSymptomLogs } from '../hooks/use-symptom-logs'
import { SYMPTOM_CATEGORIES } from '../types/symptoms'
import type { SymptomCategory } from '../types/database'

const SYMPTOM_LABEL: Record<string, string> = Object.fromEntries(
  SYMPTOM_CATEGORIES.flatMap(cat => cat.symptoms.map(s => [s.key, s.label]))
)

const CATEGORY_META: Record<SymptomCategory, { label: string; icon: string; color: string }> = {
  physical: { label: 'Physical', icon: '🩹', color: '#8C5A38' },
  mental:   { label: 'Mood',     icon: '💜', color: '#627356' },
  sleep:    { label: 'Sleep',    icon: '🌙', color: '#7D8F65' },
  feeding:  { label: 'Feeding',  icon: '🤱', color: '#C4A87A' },
}

const SEVERITY_LABEL = ['', 'Very mild', 'Mild', 'Moderate', 'Significant', 'Severe']
const SEVERITY_COLOR = ['', '#AECA95', '#7D8F65', '#C4A87A', '#A8473A', '#7B1A1A']

function groupDateLabel(dateStr: string): string {
  const d = parseISO(dateStr + 'T00:00:00')
  if (isToday(d)) return 'Today'
  if (isYesterday(d)) return 'Yesterday'
  return format(d, 'EEEE, d MMM')
}

interface Medication {
  id: string
  name: string
  dose: string
  active: boolean
}

const DEFAULT_MEDS: Medication[] = [
  { id: '1', name: 'Paracetamol', dose: '1000mg (2 Tabs)', active: true },
  { id: '2', name: 'Ibuprofen', dose: '600mg (3 Tabs)', active: false },
]

export default function SymptomsPage() {
  const { supabaseUser } = useAuth()
  const { data: logs, isLoading } = useSymptomLogs(supabaseUser?.id)

  const [medications, setMedications] = useState<Medication[]>(DEFAULT_MEDS)
  const [showAddMed, setShowAddMed] = useState(false)
  const [newMedName, setNewMedName] = useState('')
  const [newMedDose, setNewMedDose] = useState('')

  const grouped = useMemo(() => {
    if (!logs?.length) return []
    const map = new Map<string, typeof logs>()
    for (const log of logs) {
      const day = format(parseISO(log.logged_at), 'yyyy-MM-dd')
      if (!map.has(day)) map.set(day, [])
      map.get(day)!.push(log)
    }
    return Array.from(map.entries()).map(([date, entries]) => ({ date, entries }))
  }, [logs])

  function toggleMed(id: string) {
    setMedications(meds => meds.map(m => (m.id === id ? { ...m, active: !m.active } : m)))
  }

  function addMedication() {
    if (!newMedName.trim()) return
    setMedications(meds => [
      ...meds,
      { id: Date.now().toString(), name: newMedName.trim(), dose: newMedDose.trim(), active: false },
    ])
    setNewMedName('')
    setNewMedDose('')
    setShowAddMed(false)
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1
        className="text-2xl font-bold"
        style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
      >
        Symptoms & Logs
      </h1>

      {/* Medication Log */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-pm-text-muted)' }}>
            Medication Log
          </p>
          <button
            onClick={() => setShowAddMed(o => !o)}
            className="flex items-center gap-1 text-xs font-semibold transition-opacity active:opacity-60"
            style={{ color: 'var(--color-pm-primary)' }}
          >
            <Plus size={12} weight="bold" />
            Add
          </button>
        </div>

        <Card style={{ padding: '0', overflow: 'hidden' }}>
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ borderBottom: '1px solid var(--color-pm-border)' }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--color-pm-bg)' }}
            >
              <Pill size={16} weight="fill" color="var(--color-pm-primary)" />
            </div>
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
              Medication
            </p>
          </div>

          {medications.map((med, i) => (
            <div
              key={med.id}
              className="flex items-center justify-between pl-4 pr-5 py-3"
              style={{ borderBottom: i < medications.length - 1 ? '1px solid var(--color-pm-border)' : 'none' }}
            >
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                  {med.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
                  {med.dose || 'No dose specified'}
                </p>
              </div>
              <button
                onClick={() => toggleMed(med.id)}
                className="relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0"
                style={{ background: med.active ? 'var(--color-pm-primary)' : 'var(--color-pm-border)' }}
                aria-label={`Toggle ${med.name}`}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all duration-200"
                  style={{ left: med.active ? '22px' : '2px', boxShadow: '0 1px 3px rgba(0,0,0,0.2)' }}
                />
              </button>
            </div>
          ))}

          {showAddMed && (
            <div
              className="px-4 py-3 flex flex-col gap-2"
              style={{ borderTop: '1px solid var(--color-pm-border)', background: 'var(--color-pm-bg)' }}
            >
              <input
                type="text"
                value={newMedName}
                onChange={e => setNewMedName(e.target.value)}
                placeholder="Medication name"
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
              />
              <input
                type="text"
                value={newMedDose}
                onChange={e => setNewMedDose(e.target.value)}
                placeholder="Dose (e.g. 500mg, 2 tablets)"
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
              />
              <button
                onClick={addMedication}
                disabled={!newMedName.trim()}
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity disabled:opacity-40"
                style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
              >
                Add Medication
              </button>
            </div>
          )}
        </Card>
      </div>

      {/* Symptom History */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          Symptom History
        </p>

        {isLoading && (
          <p className="text-sm" style={{ color: 'var(--color-pm-text-muted)' }}>Loading…</p>
        )}

        {!isLoading && !grouped.length && (
          <div
            className="rounded-2xl p-8 flex flex-col items-center text-center gap-3"
            style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}
          >
            <span className="text-4xl">📋</span>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                No symptoms logged yet
              </p>
              <p className="text-xs mt-1" style={{ color: 'var(--color-pm-text-muted)' }}>
                Use the check-in or quick log to start tracking your recovery.
              </p>
            </div>
          </div>
        )}

        <div className="flex flex-col gap-5">
          {grouped.map(({ date, entries }) => (
            <div key={date}>
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'var(--color-pm-text-muted)' }}
              >
                {groupDateLabel(date)}
              </p>
              <div
                className="rounded-2xl overflow-hidden"
                style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}
              >
                {entries.map((log, i) => {
                  const label = SYMPTOM_LABEL[log.symptom_key] ?? log.symptom_key
                  const cat = CATEGORY_META[log.category]
                  const time = format(parseISO(log.logged_at), 'h:mm a')
                  const color = SEVERITY_COLOR[log.severity]
                  return (
                    <div
                      key={log.id}
                      className="flex items-center gap-3 px-4 py-3"
                      style={{ borderTop: i > 0 ? '1px solid var(--color-pm-border)' : 'none' }}
                    >
                      <span className="text-lg flex-shrink-0">{cat?.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p
                          className="text-sm font-medium truncate"
                          style={{ color: 'var(--color-pm-text)' }}
                        >
                          {label}
                        </p>
                        <p className="text-xs mt-0.5" style={{ color: 'var(--color-pm-text-muted)' }}>
                          {cat?.label} · {time}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs font-semibold" style={{ color }}>
                          {SEVERITY_LABEL[log.severity]}
                        </span>
                        <div className="flex gap-0.5">
                          {[1, 2, 3, 4, 5].map(n => (
                            <span
                              key={n}
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ background: n <= log.severity ? color : 'var(--color-pm-border)' }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

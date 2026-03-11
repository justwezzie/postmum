import { useState } from 'react'
import { format } from 'date-fns'
import { Plus } from '@phosphor-icons/react'

type BleedingLevel = 'heavy' | 'moderate' | 'light' | 'spotting' | 'none'

const BLEEDING_LEVELS: { key: BleedingLevel; label: string; color: string }[] = [
  { key: 'heavy', label: 'Heavy', color: '#A8473A' },
  { key: 'moderate', label: 'Moderate', color: '#C4A87A' },
  { key: 'light', label: 'Light', color: '#7D8F65' },
  { key: 'spotting', label: 'Spotting', color: '#AECA95' },
  { key: 'none', label: 'None', color: 'var(--color-pm-border)' },
]

interface BleedingEntry {
  date: string
  level: BleedingLevel
}

const TODAY = new Date().toISOString().split('T')[0]
const YESTERDAY = new Date(Date.now() - 86400000).toISOString().split('T')[0]

function BleedingRow({
  entry,
  onChange,
}: {
  entry: BleedingEntry
  onChange: (level: BleedingLevel) => void
}) {
  const label = format(new Date(entry.date + 'T12:00:00'), 'EEE, MMM d')
  return (
    <div
      className="rounded-2xl p-4"
      style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)', boxShadow: 'var(--shadow-card)' }}
    >
      <p className="text-xs font-semibold mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
        {entry.date === TODAY ? `Today · ${label}` : label}
      </p>
      <div className="flex flex-col gap-2">
        {BLEEDING_LEVELS.map(lvl => (
          <button
            key={lvl.key}
            onClick={() => onChange(lvl.key)}
            className="flex items-center justify-between"
          >
            <span className="text-sm font-medium" style={{ color: 'var(--color-pm-text)' }}>
              {lvl.label}
            </span>
            <div className="flex gap-1.5">
              {[0, 1, 2, 3].map(i => {
                const isActive = lvl.key === entry.level
                return (
                  <span
                    key={i}
                    className="w-4 h-4 rounded-full border-2 transition-all"
                    style={{
                      background: isActive && i === 0 ? lvl.color : 'transparent',
                      borderColor: isActive ? lvl.color : 'var(--color-pm-border)',
                    }}
                  />
                )
              })}
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}

export default function SymptomsPage() {
  const [entries, setEntries] = useState<BleedingEntry[]>([
    { date: TODAY, level: 'light' },
    { date: YESTERDAY, level: 'moderate' },
  ])

  function updateEntry(date: string, level: BleedingLevel) {
    setEntries(prev =>
      prev.map(e => (e.date === date ? { ...e, level } : e))
    )
  }

  function addToday() {
    if (entries.find(e => e.date === TODAY)) return
    setEntries(prev => [{ date: TODAY, level: 'none' }, ...prev])
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}>
          Symptoms & Logs
        </h1>
        <button
          onClick={addToday}
          className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-opacity active:opacity-60"
          style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
        >
          <Plus size={12} weight="bold" />
          Add Medication
        </button>
      </div>

      <div className="flex flex-col gap-3">
        {entries.map(entry => (
          <BleedingRow
            key={entry.date}
            entry={entry}
            onChange={level => updateEntry(entry.date, level)}
          />
        ))}
      </div>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { SYMPTOM_CATEGORIES, getSymptomsForBirthType, isSafetySymptom } from '../types/symptoms'
import { SeverityPicker } from '../components/ui/severity-picker'
import { SafetyResourceCard } from '../components/ui/safety-resource-card'
import { useAppStore } from '../stores/app-store'
import { X } from '@phosphor-icons/react'
import type { SymptomCategory } from '../types/database'

type CategoryNotes = Partial<Record<SymptomCategory, string>>
type CategorySeverities = Partial<Record<string, number>>

export default function CheckInPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState<SymptomCategory>('physical')
  const [severities, setSeverities] = useState<CategorySeverities>({})
  const [notes, setNotes] = useState<CategoryNotes>({})
  const [showSafety, setShowSafety] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const shouldShowSafetyResource = useAppStore(s => s.shouldShowSafetyResource)

  const birthType = useAppStore(s => s.birthType)
  const activeCat = SYMPTOM_CATEGORIES.find(c => c.id === activeTab)!
  const activeSymptoms = getSymptomsForBirthType(activeCat, birthType)

  function setSeverity(symptomKey: string, value: number) {
    setSeverities(s => ({ ...s, [symptomKey]: value }))
  }

  async function handleSubmit() {
    setIsSubmitting(true)

    // Check if any safety symptoms are rated >= 4
    const hasSafetyTrigger = Object.entries(severities).some(
      ([key, val]) => (val ?? 0) >= 4 && isSafetySymptom(key)
    )

    setIsSubmitting(false)

    if (hasSafetyTrigger && shouldShowSafetyResource()) {
      setShowSafety(true)
    } else {
      navigate('/home')
    }
  }

  if (showSafety) {
    return <SafetyResourceCard onDismiss={() => navigate('/home')} />
  }

  const loggedCount = Object.values(severities).filter(Boolean).length

  return (
    <div className="flex flex-col min-h-dvh" style={{ background: 'var(--color-pm-bg)' }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-4 sticky top-0 z-10"
        style={{
          background: 'var(--color-pm-bg)',
          borderBottom: '1px solid var(--color-pm-border)',
        }}
      >
        <div>
          <p className="text-xs font-medium" style={{ color: 'var(--color-pm-text-secondary)' }}>
            Today's check-in
          </p>
          <h1
            className="text-lg font-bold"
            style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}
          >
            How are you feeling?
          </h1>
        </div>
        <button
          onClick={() => navigate('/')}
          className="w-8 h-8 flex items-center justify-center rounded-full"
          style={{ background: 'var(--color-pm-surface)', color: 'var(--color-pm-text-secondary)' }}
        >
          <X size={16} weight="bold" />
        </button>
      </div>

      {/* Category tabs */}
      <div
        className="flex items-stretch overflow-x-auto px-4 pt-4 pb-0 gap-2 no-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {SYMPTOM_CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveTab(cat.id)}
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl whitespace-nowrap text-sm font-semibold flex-shrink-0 transition-all"
            style={{
              background: activeTab === cat.id ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
              color: activeTab === cat.id ? '#fff' : 'var(--color-pm-text-secondary)',
              border: `1.5px solid ${activeTab === cat.id ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
            }}
          >
            <span>{cat.icon}</span>
            {cat.label}
          </button>
        ))}
      </div>

      {/* Symptoms */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-4">
        {activeSymptoms.map(sym => (
          <div
            key={sym.key}
            className="flex flex-col gap-3 p-4 rounded-2xl"
            style={{
              background: 'var(--color-pm-surface)',
              border: '1px solid var(--color-pm-border)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
              {sym.label}
              {sym.isSafetyFlag && (
                <span className="ml-1 text-xs">⚠️</span>
              )}
            </p>
            <SeverityPicker
              value={severities[sym.key] ?? null}
              onChange={v => setSeverity(sym.key, v)}
            />
          </div>
        ))}

        {/* Note for this category */}
        <div
          className="rounded-2xl p-4"
          style={{
            background: 'var(--color-pm-surface)',
            border: '1px solid var(--color-pm-border)',
          }}
        >
          <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-pm-text-muted)' }}>
            Notes for {activeCat.label}
          </p>
          <textarea
            value={notes[activeTab] ?? ''}
            onChange={e => setNotes(n => ({ ...n, [activeTab]: e.target.value }))}
            placeholder="Anything else to note? (optional)"
            rows={3}
            className="w-full bg-transparent text-sm resize-none outline-none"
            style={{ color: 'var(--color-pm-text)' }}
          />
        </div>
      </div>

      {/* Submit */}
      <div
        className="px-4 py-4 sticky bottom-0"
        style={{
          background: 'var(--color-pm-bg)',
          borderTop: '1px solid var(--color-pm-border)',
          paddingBottom: 'calc(16px + env(safe-area-inset-bottom))',
        }}
      >
        <button
          onClick={handleSubmit}
          disabled={isSubmitting || loggedCount === 0}
          className="w-full py-4 rounded-2xl text-sm font-semibold transition-opacity active:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
        >
          {isSubmitting ? 'Saving…' : loggedCount > 0 ? `Save check-in · ${loggedCount} logged` : 'Rate at least one symptom'}
        </button>
      </div>
    </div>
  )
}

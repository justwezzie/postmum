import { useState } from 'react'
import { useAppStore } from '../../stores/app-store'
import { useInsertLogs } from '../../hooks/use-symptom-logs'
import { supabase } from '../../lib/supabase'
import { BottomSheet } from '../ui/bottom-sheet'
import { SeverityPicker } from '../ui/severity-picker'
import { SafetyResourceCard } from '../ui/safety-resource-card'
import { SYMPTOM_CATEGORIES, getSymptomsForBirthType, isSafetySymptom } from '../../types/symptoms'
import type { SymptomCategory } from '../../types/database'
import { CaretLeft, Plus } from '@phosphor-icons/react'

type Step = 'category' | 'symptom' | 'severity' | 'note'

interface LogEntry {
  category: SymptomCategory | null
  symptomKey: string | null
  symptomLabel: string | null
  severity: number | null
  note: string
}

const INITIAL_ENTRY: LogEntry = {
  category: null,
  symptomKey: null,
  symptomLabel: null,
  severity: null,
  note: '',
}

export function QuickLogSheet() {
  const { isQuickLogOpen, closeQuickLog } = useAppStore()
  const [step, setStep] = useState<Step>('category')
  const [entry, setEntry] = useState<LogEntry>(INITIAL_ENTRY)
  const [customInput, setCustomInput] = useState('')
  const [showSafety, setShowSafety] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const shouldShowSafetyResource = useAppStore(s => s.shouldShowSafetyResource)

  function handleClose() {
    setStep('category')
    setEntry(INITIAL_ENTRY)
    setCustomInput('')
    setShowSafety(false)
    closeQuickLog()
  }

  function selectCategory(cat: SymptomCategory) {
    setEntry(e => ({ ...e, category: cat }))
    setStep('symptom')
  }

  function selectSymptom(key: string, label: string) {
    setEntry(e => ({ ...e, symptomKey: key, symptomLabel: label }))
    setStep('severity')
  }

  function addCustomSymptom() {
    if (!customInput.trim()) return
    selectSymptom(`custom_${customInput.toLowerCase().replace(/\s+/g, '_')}`, customInput.trim())
    setCustomInput('')
  }

  function selectSeverity(severity: number) {
    setEntry(e => ({ ...e, severity }))
    setStep('note')
  }

  async function handleSubmit() {
    if (!entry.category || !entry.symptomKey || !entry.severity) return
    setIsSubmitting(true)

    const { data: { user } } = await supabase.auth.getUser()
    if (user) {
      await insertLogs.mutateAsync([{
        user_id: user.id,
        logged_at: new Date().toISOString(),
        log_type: 'quick',
        category: entry.category,
        symptom_key: entry.symptomKey,
        severity: entry.severity,
        note: entry.note || null,
        is_custom: entry.symptomKey.startsWith('custom_'),
      }])
    }

    const isSafety = isSafetySymptom(entry.symptomKey) && entry.severity >= 4
    setIsSubmitting(false)

    if (isSafety && shouldShowSafetyResource()) {
      setShowSafety(true)
    } else {
      handleClose()
    }
  }

  const birthType = useAppStore(s => s.birthType)
  const insertLogs = useInsertLogs()
  const categoryDef = SYMPTOM_CATEGORIES.find(c => c.id === entry.category)
  const filteredSymptoms = categoryDef ? getSymptomsForBirthType(categoryDef, birthType) : []
  const title = step === 'category' ? 'Quick Log'
    : step === 'symptom' ? categoryDef?.label ?? 'Symptom'
    : step === 'severity' ? entry.symptomLabel ?? 'Severity'
    : 'Add a note'

  if (showSafety) {
    return <SafetyResourceCard onDismiss={handleClose} />
  }

  return (
    <BottomSheet isOpen={isQuickLogOpen} onClose={handleClose} title={title}>
      <div className="px-5 pb-6 flex flex-col gap-5">
        {/* Back button for non-first steps */}
        {step !== 'category' && (
          <button
            type="button"
            onClick={() => {
              if (step === 'symptom') setStep('category')
              else if (step === 'severity') setStep('symptom')
              else if (step === 'note') setStep('severity')
            }}
            className="flex items-center gap-1 text-sm self-start -mt-2 transition-opacity active:opacity-60"
            style={{ color: 'var(--color-pm-text-secondary)' }}
          >
            <CaretLeft size={14} weight="bold" />
            Back
          </button>
        )}

        {/* Step: Category */}
        {step === 'category' && (
          <div className="grid grid-cols-2 gap-3">
            {SYMPTOM_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                onClick={() => selectCategory(cat.id)}
                className="flex flex-col items-start gap-2 p-4 rounded-2xl text-left transition-all active:scale-95"
                style={{
                  background: 'var(--color-pm-bg)',
                  border: '1.5px solid var(--color-pm-border)',
                }}
              >
                <span className="text-2xl">{cat.icon}</span>
                <span className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                  {cat.label}
                </span>
              </button>
            ))}
          </div>
        )}

        {/* Step: Symptom */}
        {step === 'symptom' && categoryDef && (
          <div className="flex flex-col gap-2">
            {filteredSymptoms.map(sym => (
              <button
                key={sym.key}
                type="button"
                onClick={() => selectSymptom(sym.key, sym.label)}
                className="flex items-center justify-between p-4 rounded-2xl text-left transition-all active:scale-[0.98]"
                style={{
                  background: 'var(--color-pm-bg)',
                  border: '1.5px solid var(--color-pm-border)',
                }}
              >
                <span className="text-sm font-medium" style={{ color: 'var(--color-pm-text)' }}>
                  {sym.label}
                  {sym.isSafetyFlag && (
                    <span className="ml-1 text-xs" style={{ color: 'var(--color-severity-moderate)' }}>
                      ⚠️
                    </span>
                  )}
                </span>
              </button>
            ))}

            {/* Custom symptom */}
            <div
              className="flex items-center gap-2 p-3 rounded-2xl"
              style={{ border: '1.5px dashed var(--color-pm-border-strong)' }}
            >
              <input
                type="text"
                value={customInput}
                onChange={e => setCustomInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addCustomSymptom()}
                placeholder="Add custom symptom…"
                className="flex-1 bg-transparent text-sm outline-none"
                style={{ color: 'var(--color-pm-text)' }}
              />
              <button
                type="button"
                onClick={addCustomSymptom}
                disabled={!customInput.trim()}
                className="w-7 h-7 rounded-full flex items-center justify-center transition-opacity disabled:opacity-40"
                style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
              >
                <Plus size={14} weight="bold" />
              </button>
            </div>
          </div>
        )}

        {/* Step: Severity */}
        {step === 'severity' && (
          <div className="flex flex-col gap-6">
            <p className="text-sm" style={{ color: 'var(--color-pm-text-secondary)' }}>
              How would you rate <strong style={{ color: 'var(--color-pm-text)' }}>{entry.symptomLabel}</strong>?
            </p>
            <SeverityPicker
              value={entry.severity}
              onChange={selectSeverity}
            />
          </div>
        )}

        {/* Step: Note */}
        {step === 'note' && (
          <div className="flex flex-col gap-4">
            <textarea
              value={entry.note}
              onChange={e => setEntry(en => ({ ...en, note: e.target.value }))}
              placeholder="Any additional notes? (optional)"
              rows={4}
              className="w-full rounded-2xl p-4 text-sm resize-none outline-none"
              style={{
                background: 'var(--color-pm-bg)',
                border: '1.5px solid var(--color-pm-border)',
                color: 'var(--color-pm-text)',
              }}
            />
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full py-4 rounded-2xl text-sm font-semibold transition-opacity active:opacity-80 disabled:opacity-60"
              style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
            >
              {isSubmitting ? 'Saving…' : 'Log it'}
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              className="text-sm text-center transition-opacity active:opacity-60"
              style={{ color: 'var(--color-pm-text-muted)' }}
            >
              Skip note
            </button>
          </div>
        )}
      </div>
    </BottomSheet>
  )
}

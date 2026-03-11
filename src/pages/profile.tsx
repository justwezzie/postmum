import { useAppStore } from '../stores/app-store'
import { usePostpartumWeek } from '../hooks/use-postpartum-week'
import { Card } from '../components/ui/card'
import { Bell, Link, ArrowCounterClockwise, CaretRight, Baby } from '@phosphor-icons/react'

const BIRTH_TYPE_LABELS: Record<string, string> = {
  natural: 'Natural birth',
  assisted: 'Assisted delivery',
  planned_csection: 'Planned C-section',
  emergency_csection: 'Emergency C-section',
}

const FOCUS_LABELS: Record<string, string> = {
  core_pelvic: 'Core & Pelvic Floor',
  emotional_wellbeing: 'Emotional Wellbeing',
  sleep_energy: 'Sleep & Energy',
  feeding_support: 'Feeding Support',
  full_recovery: 'Full Recovery',
}

export default function ProfilePage() {
  const { displayName, babyBirthDate, birthType, recoveryFocus, weeklyRoutineTarget } = useAppStore()
  const week = usePostpartumWeek(babyBirthDate)

  function resetApp() {
    localStorage.removeItem('postmum-v1')
    window.location.href = '/'
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: '#E8F0DC' }}
        >
          🌸
        </div>
        <div>
          <h1 className="text-xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}>
            {displayName ?? 'Your Profile'}
          </h1>
          {week && (
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-pm-text-secondary)' }}>
              Week {week} postpartum
            </p>
          )}
        </div>
      </div>

      {/* Recovery summary */}
      <Card style={{ padding: '16px' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          My Recovery
        </p>
        <div className="flex flex-col gap-3">
          {[
            { label: 'Birth type', value: birthType ? BIRTH_TYPE_LABELS[birthType] : '—' },
            { label: 'Recovery focus', value: recoveryFocus ? FOCUS_LABELS[recoveryFocus] : '—' },
            { label: 'Weekly routine target', value: `${weeklyRoutineTarget}× per week` },
            { label: "Baby's birthday", value: babyBirthDate ? new Date(babyBirthDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>{label}</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Settings rows */}
      <div className="flex flex-col gap-2">
        {[
          { icon: Baby, label: 'Update birth details', description: 'Birth type & baby date' },
          { icon: Bell, label: 'Reminders', description: 'Daily check-in times' },
          { icon: Link, label: 'Partner invite', description: 'Share read-only access' },
        ].map(({ icon: Icon, label, description }) => (
          <Card key={label} style={{ padding: '16px' }}>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-pm-bg)' }}
              >
                <Icon size={18} weight="fill" color="var(--color-pm-primary)" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>{label}</p>
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>{description}</p>
              </div>
              <CaretRight size={16} color="var(--color-pm-text-muted)" />
            </div>
          </Card>
        ))}
      </div>

      {/* Reset */}
      <button
        onClick={resetApp}
        className="flex items-center gap-2 justify-center py-3 rounded-2xl text-sm font-semibold transition-opacity active:opacity-60"
        style={{
          background: 'var(--color-pm-surface)',
          border: '1.5px solid var(--color-pm-border)',
          color: 'var(--color-pm-text-secondary)',
        }}
      >
        <ArrowCounterClockwise size={14} weight="bold" />
        Reset onboarding
      </button>
    </div>
  )
}

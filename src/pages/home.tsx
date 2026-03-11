import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/app-store'
import { usePostpartumWeek } from '../hooks/use-postpartum-week'
import { ProgressRing } from '../components/ui/progress-ring'
import { Card } from '../components/ui/card'
import { Drop, ArrowRight } from '@phosphor-icons/react'

const RECOVERY_ITEMS = [
  { key: 'core', label: 'Core Exercises', total: 3 },
  { key: 'breathing', label: 'Breathing Exercises', total: 3 },
  { key: 'pelvic', label: 'Pelvic Floor Exercises', total: 3 },
]

// Dot row for each recovery item
function DotRow({ completed, total }: { completed: number; total: number }) {
  return (
    <div className="flex gap-1.5">
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          className="w-3 h-3 rounded-full"
          style={{
            background: i < completed ? 'var(--color-pm-primary)' : 'var(--color-pm-border)',
          }}
        />
      ))}
    </div>
  )
}

export default function HomePage() {
  const navigate = useNavigate()
  const { babyBirthDate, displayName, weeklyRoutineTarget } = useAppStore()
  const week = usePostpartumWeek(babyBirthDate)

  // Demo progress — will be real data once Supabase is wired
  const todayProgress = 80
  const completedToday = [1, 2, 1] // completed dots per item

  const greeting = displayName ? `Hi, ${displayName} 👋` : 'Good morning 👋'

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium" style={{ color: 'var(--color-pm-text-secondary)' }}>
            {greeting}
          </p>
          <h1
            className="text-2xl font-bold mt-0.5"
            style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
          >
            Today's Progress
          </h1>
        </div>
        {week && (
          <div
            className="flex items-center justify-center px-3 py-1.5 rounded-xl text-xs font-bold flex-shrink-0"
            style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
          >
            Week {week}
          </div>
        )}
      </div>

      {/* Progress card */}
      <Card>
        <div className="flex items-center gap-5">
          <ProgressRing percent={todayProgress} size={96} strokeWidth={8} />
          <div className="flex flex-col gap-1">
            <p
              className="text-base font-bold leading-tight"
              style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}
            >
              Daily Routine
            </p>
            <p className="text-sm" style={{ color: 'var(--color-pm-text-secondary)' }}>
              {todayProgress >= 100 ? 'Complete! 🎉' : `${todayProgress}% complete`}
            </p>
            <p className="text-xs mt-1" style={{ color: 'var(--color-pm-text-muted)' }}>
              Target: {weeklyRoutineTarget}× per week
            </p>
          </div>
        </div>
      </Card>

      {/* Recovery tracker */}
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--color-pm-text-muted)' }}
        >
          Recovery Tracker
        </p>
        <Card style={{ padding: '16px' }}>
          <div className="flex flex-col gap-4">
            {RECOVERY_ITEMS.map((item, i) => (
              <div key={item.key} className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <span
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--color-pm-primary)' }}
                  />
                  <p className="text-sm font-medium" style={{ color: 'var(--color-pm-text)' }}>
                    {item.label}
                  </p>
                </div>
                <DotRow completed={completedToday[i]} total={item.total} />
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Milestone */}
      <div>
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-3"
          style={{ color: 'var(--color-pm-text-muted)' }}
        >
          Milestones
        </p>
        <Card style={{ background: '#E8F0DC', border: '1.5px solid #7D8F6540' }}>
          <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
            {week && week <= 2
              ? 'Focus on rest. Your body is doing incredible work.'
              : week && week <= 4
              ? 'Your core is slowly getting stronger. Keep it up! 💪'
              : week && week <= 6
              ? "You're at 6 weeks — your check-up is coming up. We'll prepare a summary."
              : 'Great progress! Long-term wellbeing is your focus now.'}
          </p>
        </Card>
      </div>

      {/* Log bleeding CTA */}
      <button
        onClick={() => navigate('/symptoms')}
        className="flex items-center justify-between w-full px-5 py-4 rounded-2xl transition-opacity active:opacity-80"
        style={{
          background: 'var(--color-pm-primary)',
          color: '#fff',
        }}
      >
        <div className="flex items-center gap-3">
          <Drop size={20} weight="fill" />
          <span className="text-sm font-semibold">Log Bleeding</span>
        </div>
        <ArrowRight size={18} weight="bold" />
      </button>
    </div>
  )
}

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppStore } from '../stores/app-store'
import { usePostpartumWeek } from '../hooks/use-postpartum-week'
import { ProgressRing } from '../components/ui/progress-ring'
import { Card } from '../components/ui/card'
import { getWeeklyUpdate } from '../data/weekly-updates'
import { ClipboardText, ArrowRight, Lightbulb, Eye, CaretDown, CaretUp } from '@phosphor-icons/react'

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
  const update = getWeeklyUpdate(week)
  const [updateExpanded, setUpdateExpanded] = useState(false)

  const todayProgress = 0
  const completedToday = [0, 0, 0]

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

      {/* Log Symptoms CTA */}
      <button
        onClick={() => navigate('/symptoms')}
        className="flex items-center justify-between w-full px-5 py-4 rounded-2xl transition-opacity active:opacity-80"
        style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
      >
        <div className="flex items-center gap-3">
          <ClipboardText size={20} weight="fill" />
          <span className="text-sm font-semibold">Log Symptoms</span>
        </div>
        <ArrowRight size={18} weight="bold" />
      </button>

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
              ? "You've taken your first step to recovery. Rest is the work right now."
              : week && week <= 4
              ? 'Your core is slowly getting stronger. Keep it up! 💪'
              : week && week <= 6
              ? "You're at 6 weeks — your check-up is coming up. We'll prepare a summary."
              : 'Great progress! Long-term wellbeing is your focus now.'}
          </p>
        </Card>
      </div>

      {/* Weekly update */}
      {update && (
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-wider mb-3"
            style={{ color: 'var(--color-pm-text-muted)' }}
          >
            This Week
          </p>
          <Card>
            <div className="flex flex-col gap-3">
              <div>
                <p
                  className="text-base font-bold leading-tight"
                  style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}
                >
                  {update.title}
                </p>
                <p className="text-sm mt-1.5 leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
                  {update.summary}
                </p>
              </div>

              <button
                onClick={() => setUpdateExpanded(e => !e)}
                className="flex items-center gap-1.5 text-xs font-semibold self-start transition-opacity active:opacity-60"
                style={{ color: 'var(--color-pm-primary)' }}
              >
                {updateExpanded ? <CaretUp size={12} weight="bold" /> : <CaretDown size={12} weight="bold" />}
                {updateExpanded ? 'Show less' : 'Read more'}
              </button>

              {updateExpanded && (
                <>
                  {/* Common experiences */}
                  <div className="flex flex-col gap-1.5 pt-1">
                    <p className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
                      What to expect
                    </p>
                    {update.commonExperiences.map(exp => (
                      <div key={exp} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: 'var(--color-pm-primary)' }}
                        />
                        <p className="text-xs leading-snug" style={{ color: 'var(--color-pm-text-secondary)' }}>
                          {exp}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Watch for */}
                  <div
                    className="rounded-xl px-3 py-3 flex flex-col gap-2"
                    style={{ background: '#F5ECD8', border: '1px solid #C4A87A40' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Eye size={14} weight="fill" color="#8C5A38" />
                      <p className="text-xs font-semibold" style={{ color: '#8C5A38' }}>Watch for</p>
                    </div>
                    {update.watchFor.map(item => (
                      <div key={item} className="flex items-start gap-2">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#8C5A38' }}
                        />
                        <p className="text-xs leading-snug" style={{ color: '#6B4F32' }}>{item}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tip */}
                  <div
                    className="rounded-xl px-3 py-3 flex flex-col gap-2"
                    style={{ background: '#E8F0DC', border: '1px solid #AECA9540' }}
                  >
                    <div className="flex items-center gap-1.5">
                      <Lightbulb size={14} weight="fill" color="#627356" />
                      <p className="text-xs font-semibold" style={{ color: '#627356' }}>This week's tip</p>
                    </div>
                    <p className="text-xs font-semibold leading-snug" style={{ color: 'var(--color-pm-text)' }}>
                      {update.tip.heading}
                    </p>
                    <p className="text-xs leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
                      {update.tip.body}
                    </p>
                    {update.tip.product && (
                      <div
                        className="rounded-lg px-3 py-2.5 mt-0.5 flex flex-col gap-1"
                        style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid #AECA9560' }}
                      >
                        <p className="text-xs font-bold" style={{ color: 'var(--color-pm-text)' }}>
                          Recommended
                        </p>
                        <p className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-secondary)' }}>
                          {update.tip.product.name}
                        </p>
                        <p className="text-xs leading-snug" style={{ color: 'var(--color-pm-text-muted)' }}>
                          {update.tip.product.why}
                        </p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>
          </Card>
        </div>
      )}

    </div>
  )
}

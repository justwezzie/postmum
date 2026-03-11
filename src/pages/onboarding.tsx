import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useAppStore, type RecoveryFocus, type WeeksSinceBirth } from '../stores/app-store'
import type { BirthType } from '../types/database'
import { CaretLeft, Warning, Heart } from '@phosphor-icons/react'

type Step = 'welcome' | 'pathway' | 'questions' | 'goals'

interface DetailsForm {
  displayName: string
  babyBirthDate: string
}

interface BirthPathway {
  type: BirthType
  title: string
  subtitle: string
  emoji: string
  accentColor: string
  bg: string
}

const BIRTH_PATHWAYS: BirthPathway[] = [
  {
    type: 'natural',
    title: 'Natural',
    subtitle: 'Vaginal birth, no intervention',
    emoji: '🌿',
    accentColor: '#7D8F65',
    bg: '#E8F0DC',
  },
  {
    type: 'assisted',
    title: 'Assisted delivery',
    subtitle: 'Forceps or ventouse used',
    emoji: '🤝',
    accentColor: '#C4A87A',
    bg: '#F5ECD8',
  },
  {
    type: 'planned_csection',
    title: 'Planned C-section',
    subtitle: 'Caesarean arranged in advance',
    emoji: '📅',
    accentColor: '#627356',
    bg: '#E0EAD8',
  },
  {
    type: 'emergency_csection',
    title: 'Emergency C-section',
    subtitle: "Caesarean that wasn't planned",
    emoji: '⚡',
    accentColor: '#8C5A38',
    bg: '#F0E4D2',
  },
]

const RECOVERY_FOCUS_OPTIONS: { value: RecoveryFocus; label: string; description: string }[] = [
  { value: 'core_pelvic', label: 'Core & Pelvic Floor', description: 'Rebuild strength safely' },
  { value: 'emotional_wellbeing', label: 'Emotional Wellbeing', description: 'Mood, anxiety & bonding' },
  { value: 'sleep_energy', label: 'Sleep & Energy', description: 'Rest and fatigue management' },
  { value: 'feeding_support', label: 'Feeding Support', description: 'Breastfeeding & nutrition' },
  { value: 'full_recovery', label: 'Full Recovery', description: 'Physical & emotional balance' },
]

const CHILDREN_OPTIONS = [
  { value: 1, label: '1 Child' },
  { value: 2, label: '2 Children' },
  { value: 3, label: '3+ Children' },
]

const WEEKS_OPTIONS: { value: WeeksSinceBirth; label: string }[] = [
  { value: '<3', label: '< 3 weeks' },
  { value: '3-6', label: '3–6 weeks' },
  { value: '6+', label: '6+ weeks' },
]

const WEEKLY_TARGETS = [2, 3, 4, 5]

export default function OnboardingPage() {
  const navigate = useNavigate()
  const { setBirthType, setOnboardingAnswers, setGoal, completeOnboarding } = useAppStore()

  const [step, setStep] = useState<Step>('welcome')
  const [selectedPathway, setSelectedPathway] = useState<BirthPathway | null>(null)

  // Questions state
  const [numberOfChildren, setNumberOfChildren] = useState<number | null>(null)
  const [isFirstOfType, setIsFirstOfType] = useState<boolean | null>(null)
  const [weeksSinceBirth, setWeeksSinceBirth] = useState<WeeksSinceBirth | null>(null)

  // Goals state
  const [recoveryFocus, setRecoveryFocus] = useState<RecoveryFocus>('core_pelvic')
  const [weeklyTarget, setWeeklyTarget] = useState(3)
  const [goalsFocusOpen, setGoalsFocusOpen] = useState(false)

  const { register, handleSubmit, formState: { errors, isValid } } = useForm<DetailsForm>({
    mode: 'onChange',
  })

  function goBack() {
    if (step === 'pathway') setStep('welcome')
    else if (step === 'questions') setStep('pathway')
    else if (step === 'goals') setStep('questions')
  }

  function selectPathway(pathway: BirthPathway) {
    setSelectedPathway(pathway)
    setBirthType(pathway.type)
    setStep('questions')
  }

  function submitQuestions() {
    if (numberOfChildren === null || isFirstOfType === null || weeksSinceBirth === null) return
    setOnboardingAnswers({ numberOfChildren, isFirstOfType, weeksSinceBirth })
    setStep('goals')
  }

  function submitGoal() {
    setGoal(recoveryFocus, weeklyTarget)
    setStep('goals')
  }

  function onDetailsSubmit(data: DetailsForm) {
    setGoal(recoveryFocus, weeklyTarget)
    completeOnboarding(data.displayName, data.babyBirthDate)
    navigate('/home')
  }

  const questionsReady = numberOfChildren !== null && isFirstOfType !== null && weeksSinceBirth !== null
  const focusDef = RECOVERY_FOCUS_OPTIONS.find(f => f.value === recoveryFocus)!
  const birthLabel = selectedPathway?.type.includes('csection') ? 'C-section' : 'birth'

  return (
    <div className="flex flex-col min-h-dvh" style={{ background: 'var(--color-pm-bg)' }}>

      {/* Back button */}
      {step !== 'welcome' && (
        <button
          onClick={goBack}
          className="absolute top-12 left-5 z-10 flex items-center gap-1.5 text-sm font-medium transition-opacity active:opacity-60"
          style={{ color: 'var(--color-pm-text-secondary)' }}
        >
          <CaretLeft size={14} weight="bold" />
          Back
        </button>
      )}

      {/* ── STEP: WELCOME ── */}
      {step === 'welcome' && (
        <div className="flex flex-col min-h-dvh">
          {/* Botanical hero */}
          <div
            className="flex flex-col items-center justify-end px-8 pb-10 pt-20 flex-1"
            style={{
              background: 'linear-gradient(170deg, #E0EAD8 0%, var(--color-pm-bg) 60%)',
            }}
          >
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
              style={{ background: 'var(--color-pm-primary)' }}
            >
              <Heart size={32} weight="fill" color="#fff" />
            </div>
            <h1
              className="text-3xl font-bold text-center leading-tight mb-3"
              style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
            >
              postmum
            </h1>
            <p
              className="text-base text-center leading-relaxed mb-2"
              style={{ color: 'var(--color-pm-text-secondary)', maxWidth: '260px' }}
            >
              Helping you recover and thrive after birth.
            </p>
            <p
              className="text-xs text-center"
              style={{ color: 'var(--color-pm-text-muted)' }}
            >
              Guided recovery for every kind of birth
            </p>
          </div>

          <div className="px-6 pb-10 pt-6 flex flex-col gap-3">
            <button
              onClick={() => setStep('pathway')}
              className="w-full py-4 rounded-2xl text-sm font-semibold transition-opacity active:opacity-80"
              style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
            >
              Get Started
            </button>
            <p className="text-xs text-center" style={{ color: 'var(--color-pm-text-muted)' }}>
              Private & secure. Your data stays yours.
            </p>
          </div>
        </div>
      )}

      {/* ── STEP: PATHWAY ── */}
      {step === 'pathway' && (
        <div className="flex flex-col min-h-dvh px-5 pt-20 pb-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-pm-text-muted)' }}>
              Step 1 of 3
            </p>
            <h2 className="text-xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}>
              How did you bring your baby into the world?
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-pm-text-secondary)' }}>
              This personalises what we track for you.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 flex-1 content-start">
            {BIRTH_PATHWAYS.map(pathway => (
              <button
                key={pathway.type}
                onClick={() => selectPathway(pathway)}
                className="flex flex-col gap-3 p-5 rounded-3xl text-left transition-all duration-150 active:scale-95"
                style={{
                  background: pathway.bg,
                  border: `1.5px solid ${pathway.accentColor}40`,
                  boxShadow: `0 2px 8px ${pathway.accentColor}20`,
                }}
              >
                <span
                  className="w-11 h-11 rounded-2xl flex items-center justify-center text-xl"
                  style={{ background: `${pathway.accentColor}28` }}
                >
                  {pathway.emoji}
                </span>
                <div>
                  <p className="text-sm font-bold leading-tight" style={{ color: 'var(--color-pm-text)' }}>
                    {pathway.title}
                  </p>
                  <p className="text-xs mt-1 leading-snug" style={{ color: 'var(--color-pm-text-secondary)' }}>
                    {pathway.subtitle}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <p className="text-xs text-center mt-4" style={{ color: 'var(--color-pm-text-muted)' }}>
            You can change this any time in settings
          </p>
        </div>
      )}

      {/* ── STEP: QUESTIONS ── */}
      {step === 'questions' && (
        <div className="flex flex-col min-h-dvh px-5 pt-20 pb-8">
          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-pm-text-muted)' }}>
              Step 2 of 3
            </p>
            <h2 className="text-xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}>
              A little about you
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-pm-text-secondary)' }}>
              Helps us tailor your recovery plan.
            </p>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {/* Children count */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                How many children have you had?
              </p>
              <div className="flex gap-2">
                {CHILDREN_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setNumberOfChildren(opt.value)}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: numberOfChildren === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
                      color: numberOfChildren === opt.value ? '#fff' : 'var(--color-pm-text)',
                      border: `1.5px solid ${numberOfChildren === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* First of type */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                Is this your first {birthLabel}?
              </p>
              <div className="flex gap-2">
                {[{ label: 'Yes', value: true }, { label: 'No', value: false }].map(opt => (
                  <button
                    key={String(opt.value)}
                    onClick={() => setIsFirstOfType(opt.value)}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: isFirstOfType === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
                      color: isFirstOfType === opt.value ? '#fff' : 'var(--color-pm-text)',
                      border: `1.5px solid ${isFirstOfType === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Weeks since birth */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                How long since your birth?
              </p>
              <div className="flex gap-2">
                {WEEKS_OPTIONS.map(opt => (
                  <button
                    key={opt.value}
                    onClick={() => setWeeksSinceBirth(opt.value)}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: weeksSinceBirth === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
                      color: weeksSinceBirth === opt.value ? '#fff' : 'var(--color-pm-text)',
                      border: `1.5px solid ${weeksSinceBirth === opt.value ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
                    }}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <button
            onClick={submitQuestions}
            disabled={!questionsReady}
            className="w-full py-4 rounded-2xl text-sm font-semibold mt-6 transition-opacity active:opacity-80 disabled:opacity-40"
            style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
          >
            Continue
          </button>
        </div>
      )}

      {/* ── STEP: GOALS ── */}
      {step === 'goals' && (
        <div className="flex flex-col min-h-dvh overflow-y-auto">
          <div className="px-5 pt-20 pb-4">
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'var(--color-pm-text-muted)' }}>
              Step 3 of 3
            </p>
            <h2 className="text-xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}>
              Your Goal
            </h2>
            <p className="text-sm mt-1" style={{ color: 'var(--color-pm-text-secondary)' }}>
              We'll build your recovery plan around this.
            </p>
          </div>

          <div className="px-5 flex flex-col gap-5 pb-6">
            {/* Recovery focus selector */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                Physical recovery focus
              </p>
              <div className="relative">
                <button
                  onClick={() => setGoalsFocusOpen(o => !o)}
                  className="w-full flex items-center justify-between px-4 py-3.5 rounded-2xl text-sm font-medium text-left"
                  style={{
                    background: 'var(--color-pm-surface)',
                    border: '1.5px solid var(--color-pm-border)',
                    color: 'var(--color-pm-text)',
                  }}
                >
                  <span>{focusDef.label}</span>
                  <span style={{ color: 'var(--color-pm-text-muted)' }}>▾</span>
                </button>
                {goalsFocusOpen && (
                  <div
                    className="absolute left-0 right-0 z-20 mt-1 rounded-2xl overflow-hidden"
                    style={{
                      background: 'var(--color-pm-surface)',
                      border: '1.5px solid var(--color-pm-border)',
                      boxShadow: 'var(--shadow-card)',
                    }}
                  >
                    {RECOVERY_FOCUS_OPTIONS.map(opt => (
                      <button
                        key={opt.value}
                        onClick={() => { setRecoveryFocus(opt.value); setGoalsFocusOpen(false) }}
                        className="w-full flex flex-col items-start px-4 py-3 text-left transition-colors"
                        style={{
                          background: recoveryFocus === opt.value ? 'var(--color-pm-bg)' : 'transparent',
                        }}
                      >
                        <span className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                          {opt.label}
                        </span>
                        <span className="text-xs mt-0.5" style={{ color: 'var(--color-pm-text-muted)' }}>
                          {opt.description}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Weekly routine target */}
            <div className="flex flex-col gap-2">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                Weekly routine
              </p>
              <p className="text-xs" style={{ color: 'var(--color-pm-text-secondary)' }}>
                A gentle start is 2–3 recovery routines per week.
              </p>
              <div className="flex gap-2 mt-1">
                {WEEKLY_TARGETS.map(n => (
                  <button
                    key={n}
                    onClick={() => setWeeklyTarget(n)}
                    className="flex-1 py-3 rounded-xl text-sm font-semibold transition-all active:scale-95"
                    style={{
                      background: weeklyTarget === n ? 'var(--color-pm-primary)' : 'var(--color-pm-surface)',
                      color: weeklyTarget === n ? '#fff' : 'var(--color-pm-text)',
                      border: `1.5px solid ${weeklyTarget === n ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
                    }}
                  >
                    {n}×
                  </button>
                ))}
              </div>
            </div>

            {/* Emergency services */}
            <div
              className="rounded-2xl p-4 flex flex-col gap-2"
              style={{ background: '#F0E4D2', border: '1.5px solid #C4A87A40' }}
            >
              <div className="flex items-center gap-2">
                <Warning size={16} weight="fill" color="#8C5A38" />
                <p className="text-sm font-bold" style={{ color: '#8C5A38' }}>
                  When to seek emergency help
                </p>
              </div>
              {[
                'Heavy bleeding (soaking a pad per hour)',
                'Severe pain at incision or perineal site',
                'High fever (38°C / 100.4°F or higher)',
                'Signs of infection: redness, swelling, discharge',
              ].map(item => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#8C5A38' }} />
                  <p className="text-xs leading-snug" style={{ color: '#6B4F32' }}>{item}</p>
                </div>
              ))}
            </div>

            {/* Details form */}
            <form onSubmit={handleSubmit(onDetailsSubmit)} className="flex flex-col gap-4">
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                Almost done — just two quick details
              </p>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
                  Your name
                </label>
                <input
                  {...register('displayName', { required: true })}
                  type="text"
                  placeholder="e.g. Sarah"
                  className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none"
                  style={{
                    background: 'var(--color-pm-surface)',
                    border: `1.5px solid ${errors.displayName ? 'var(--color-severity-severe)' : 'var(--color-pm-border)'}`,
                    color: 'var(--color-pm-text)',
                  }}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
                  Baby's birth date
                </label>
                <input
                  {...register('babyBirthDate', { required: true })}
                  type="date"
                  max={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none"
                  style={{
                    background: 'var(--color-pm-surface)',
                    border: `1.5px solid ${errors.babyBirthDate ? 'var(--color-severity-severe)' : 'var(--color-pm-border)'}`,
                    color: 'var(--color-pm-text)',
                  }}
                />
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
                  Used to calculate your postpartum week — stays private
                </p>
              </div>

              <button
                type="submit"
                disabled={!isValid}
                onClick={submitGoal}
                className="w-full py-4 rounded-2xl text-sm font-semibold transition-opacity active:opacity-80 disabled:opacity-50"
                style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
              >
                Create My Plan 🌿
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

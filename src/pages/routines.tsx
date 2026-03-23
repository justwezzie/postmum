import { useState } from 'react'
import { format } from 'date-fns'
import { Card } from '../components/ui/card'
import { useAppStore } from '../stores/app-store'
import { usePostpartumWeek } from '../hooks/use-postpartum-week'
import { CheckCircle, Circle, Play } from '@phosphor-icons/react'

interface Routine {
  id: string
  title: string
  duration: string
  steps: string[]
  week: number
  videoUrl: string
}

const ROUTINES: Routine[] = [
  {
    id: 'breathing',
    title: 'Breathing & Relaxation',
    duration: '5 min',
    week: 1,
    videoUrl: 'https://www.youtube.com/watch?v=ThKahimNQP0',
    steps: [
      'Lie on your back with knees bent',
      'Inhale slowly for 4 counts through your nose',
      'Exhale for 6 counts through your mouth',
      'Repeat 8–10 times',
      'Notice your belly rise and fall gently',
    ],
  },
  {
    id: 'pelvic_gentle',
    title: 'Gentle Pelvic Floor',
    duration: '5 min',
    week: 3,
    videoUrl: 'https://www.youtube.com/watch?v=-hSZqmuN41E',
    steps: [
      'Lie comfortably with knees bent',
      'Gently squeeze your pelvic floor muscles',
      'Hold for 3–5 seconds, then slowly release',
      'Rest for 5 seconds between each squeeze',
      'Repeat 8–10 times, twice daily',
    ],
  },
  {
    id: 'neck_shoulder_stretch',
    title: 'Neck & Shoulder Release',
    duration: '5 min',
    week: 5,
    videoUrl: 'https://www.youtube.com/watch?v=4ZoGYD0zPMk',
    steps: [
      'Sit upright in a chair or on the floor',
      'Slowly tilt your right ear toward your right shoulder',
      'Hold for 20–30 seconds, breathing deeply',
      'Return to centre and repeat on the left side',
      'Do 3 rounds each side — stop if you feel sharp pain',
    ],
  },
  {
    id: 'core_gentle',
    title: 'Gentle Core Activation',
    duration: '8 min',
    week: 7,
    videoUrl: 'https://www.youtube.com/watch?v=ue4wcRcRGik',
    steps: [
      'Lie on your back, knees bent, feet flat',
      'Take a breath in; as you exhale, gently draw your belly button toward your spine',
      'Hold for 5 seconds while breathing normally',
      'Release and repeat 10 times',
      'Stop if you feel any pressure or discomfort',
    ],
  },
  {
    id: 'posture_walk',
    title: 'Posture & Short Walk',
    duration: '10 min',
    week: 9,
    videoUrl: 'https://www.youtube.com/watch?v=Lpf8kqpg86I',
    steps: [
      'Stand tall with shoulders back and relaxed',
      'Begin walking at a comfortable, gentle pace',
      'Aim for 5–10 minutes at first',
      'Focus on even breathing throughout',
      'Gradually increase distance over coming weeks',
    ],
  },
  {
    id: 'glute_bridge',
    title: 'Glute Bridge',
    duration: '8 min',
    week: 11,
    videoUrl: 'https://www.youtube.com/watch?v=OUgsJ8-Vi0E',
    steps: [
      'Lie on your back with knees bent and feet hip-width apart',
      'Inhale to prepare; on exhale, press feet into the floor and lift hips',
      'Squeeze glutes gently at the top — hold 3 seconds',
      'Lower slowly and rest 2 seconds',
      'Repeat 10–12 times, keeping core gently engaged throughout',
    ],
  },
  {
    id: 'hip_flexor_stretch',
    title: 'Hip Flexor Stretch',
    duration: '6 min',
    week: 13,
    videoUrl: 'https://www.youtube.com/watch?v=YqF8GcTcTwQ',
    steps: [
      'Kneel on one knee with the other foot forward (half-kneeling)',
      'Gently shift your weight forward until you feel a stretch at the front of your back hip',
      'Hold for 30 seconds while breathing steadily',
      'Switch sides and repeat',
      'Do 2 rounds each side',
    ],
  },
  {
    id: 'core_progressive',
    title: 'Progressive Core',
    duration: '12 min',
    week: 15,
    videoUrl: 'https://www.youtube.com/watch?v=ZPFc2noQGaw',
    steps: [
      'Lie on your back with knees bent',
      'Inhale; on exhale, lift head and shoulders slightly',
      'Hold 3 seconds — do NOT hold your breath',
      'Lower slowly and rest 5 seconds',
      'Repeat 8–12 times, stop if diastasis recti causes coning',
    ],
  },
  {
    id: 'bird_dog',
    title: 'Bird Dog',
    duration: '10 min',
    week: 17,
    videoUrl: 'https://www.youtube.com/watch?v=wiFNA3sqjCA',
    steps: [
      'Start on hands and knees, wrists under shoulders, knees under hips',
      'Brace your core gently before moving',
      'Extend your right arm and left leg simultaneously, keeping hips level',
      'Hold 3–5 seconds, then return to start',
      'Alternate sides for 10 reps each',
    ],
  },
  {
    id: 'side_lying_clam',
    title: 'Side-Lying Clam',
    duration: '8 min',
    week: 19,
    videoUrl: 'https://www.youtube.com/watch?v=7hEKWFDEXqQ',
    steps: [
      'Lie on your side with hips stacked and knees bent at 45°',
      'Keep feet together and rotate your top knee upward like a clamshell opening',
      'Stop before your pelvis rolls back',
      'Lower slowly and repeat 15 times',
      'Switch sides — feel the work in your outer hip/glute',
    ],
  },
]

export default function RoutinesPage() {
  const { babyBirthDate, weeklyRoutineTarget, routineCompletions, toggleRoutineComplete } = useAppStore()
  const week = usePostpartumWeek(babyBirthDate) ?? 1
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const today = format(new Date(), 'yyyy-MM-dd')
  const todayCompleted = new Set(routineCompletions[today] ?? [])

  const available = ROUTINES.filter(r => r.week <= week)
  const upcoming = ROUTINES.filter(r => r.week > week)

  function toggleComplete(id: string) {
    toggleRoutineComplete(today, id)
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}>
          Routines
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-pm-text-secondary)' }}>
          Target: {weeklyRoutineTarget}× this week · {todayCompleted.size} done today
        </p>
      </div>

      {/* Week progress bar */}
      <div
        className="rounded-2xl p-4"
        style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}
      >
        <div className="flex items-center justify-between mb-2">
          <p className="text-xs font-semibold" style={{ color: 'var(--color-pm-text)' }}>
            This week
          </p>
          <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
            {todayCompleted.size} / {weeklyRoutineTarget}
          </p>
        </div>
        <div className="flex gap-1.5">
          {Array.from({ length: weeklyRoutineTarget }).map((_, i) => (
            <div
              key={i}
              className="flex-1 h-2 rounded-full"
              style={{ background: i < todayCompleted.size ? 'var(--color-pm-primary)' : 'var(--color-pm-border)' }}
            />
          ))}
        </div>
      </div>

      {/* Available routines */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          Your routines — Week {week}
        </p>
        <div className="flex flex-col gap-3">
          {available.map(routine => {
            const isExpanded = expandedId === routine.id
            const isDone = todayCompleted.has(routine.id)

            return (
              <div
                key={routine.id}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'var(--color-pm-surface)',
                  border: `1.5px solid ${isDone ? 'var(--color-pm-primary)40' : 'var(--color-pm-border)'}`,
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <button
                  onClick={() => setExpandedId(isExpanded ? null : routine.id)}
                  className="w-full flex items-center justify-between px-4 py-4 text-left"
                >
                  <div className="flex items-center gap-3">
                    <button
                      onClick={e => { e.stopPropagation(); toggleComplete(routine.id) }}
                      style={{ color: isDone ? 'var(--color-pm-primary)' : 'var(--color-pm-text-muted)' }}
                    >
                      {isDone
                        ? <CheckCircle size={22} weight="fill" />
                        : <Circle size={22} weight="regular" />}
                    </button>
                    <div>
                      <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)', textDecoration: isDone ? 'line-through' : 'none' }}>
                        {routine.title}
                      </p>
                      <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
                        {routine.duration}
                      </p>
                    </div>
                  </div>
                  <a
                    href={routine.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={e => e.stopPropagation()}
                    className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'var(--color-pm-bg)', color: 'var(--color-pm-primary)' }}
                  >
                    <Play size={14} weight="fill" />
                  </a>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 flex flex-col gap-2">
                    <div className="h-px" style={{ background: 'var(--color-pm-border)' }} />
                    <p className="text-xs font-semibold pt-2" style={{ color: 'var(--color-pm-text-muted)' }}>
                      Steps
                    </p>
                    {routine.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5"
                          style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
                          {step}
                        </p>
                      </div>
                    ))}
                    <button
                      onClick={() => toggleComplete(routine.id)}
                      className="mt-2 w-full py-3 rounded-xl text-sm font-semibold transition-opacity active:opacity-80"
                      style={{
                        background: isDone ? 'var(--color-pm-bg)' : 'var(--color-pm-primary)',
                        color: isDone ? 'var(--color-pm-text)' : '#fff',
                        border: isDone ? '1.5px solid var(--color-pm-border)' : 'none',
                      }}
                    >
                      {isDone ? 'Mark as incomplete' : 'Mark as complete ✓'}
                    </button>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Upcoming */}
      {upcoming.length > 0 && (
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
            Unlocks later
          </p>
          <div className="flex flex-col gap-2">
            {upcoming.map(r => (
              <Card key={r.id} style={{ padding: '16px', opacity: 0.5 }}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>{r.title}</p>
                    <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>Available from week {r.week}</p>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-lg" style={{ background: 'var(--color-pm-bg)', color: 'var(--color-pm-text-muted)' }}>
                    🔒 Week {r.week}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

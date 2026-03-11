import { Heart, Phone } from '@phosphor-icons/react'
import { useAppStore } from '../../stores/app-store'

interface SafetyResourceCardProps {
  onDismiss: () => void
}

export function SafetyResourceCard({ onDismiss }: SafetyResourceCardProps) {
  const dismissSafetyResource = useAppStore(s => s.dismissSafetyResource)

  function handleDismiss() {
    dismissSafetyResource()
    onDismiss()
  }

  return (
    <div className="fixed inset-0 z-60 flex items-end justify-center p-4 pb-8">
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(61, 43, 31, 0.5)' }}
      />
      <div
        className="relative w-full max-w-sm rounded-3xl p-6 flex flex-col gap-4"
        style={{
          background: 'var(--color-pm-surface)',
          boxShadow: 'var(--shadow-sheet)',
        }}
      >
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{ background: '#F0E4D2' }}
          >
            <Heart size={20} weight="fill" color="#8C5A38" />
          </div>
          <p
            className="text-sm font-semibold leading-snug"
            style={{ color: 'var(--color-pm-text)' }}
          >
            You're not alone. Many mums experience this.
          </p>
        </div>

        <p className="text-sm" style={{ color: 'var(--color-pm-text-secondary)' }}>
          What you're feeling is valid. Reaching out is a sign of strength, not weakness.
        </p>

        <div
          className="rounded-2xl p-4 flex flex-col gap-3"
          style={{ background: 'var(--color-pm-bg)' }}
        >
          <a
            href="tel:18009444773"
            className="flex items-center gap-3 transition-opacity active:opacity-70"
          >
            <Phone size={18} weight="fill" color="#627356" />
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                PSI Helpline
              </p>
              <p className="text-xs" style={{ color: 'var(--color-pm-text-secondary)' }}>
                1-800-944-4773 · Free, confidential
              </p>
            </div>
          </a>

          <a
            href="sms:741741&body=HELLO"
            className="flex items-center gap-3 transition-opacity active:opacity-70"
          >
            <span className="text-lg">💬</span>
            <div>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                Crisis Text Line
              </p>
              <p className="text-xs" style={{ color: 'var(--color-pm-text-secondary)' }}>
                Text HELLO to 741741
              </p>
            </div>
          </a>
        </div>

        <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
          Talk to your midwife, GP, or healthcare provider at your next visit.
        </p>

        <button
          onClick={handleDismiss}
          className="w-full py-3 rounded-2xl text-sm font-semibold transition-opacity active:opacity-80"
          style={{
            background: 'var(--color-pm-primary)',
            color: '#fff',
          }}
        >
          I'm okay for now
        </button>
      </div>
    </div>
  )
}

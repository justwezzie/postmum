import { useEffect, type ReactNode } from 'react'
import { X } from '@phosphor-icons/react'

interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
}

export function BottomSheet({ isOpen, onClose, title, children }: BottomSheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(61, 43, 31, 0.5)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative flex flex-col w-full max-h-[85dvh] overflow-hidden"
        style={{
          background: 'var(--color-pm-surface)',
          borderRadius: '24px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
          maxWidth: '480px',
        }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid var(--color-pm-border)' }}>
          <h2
            className="text-base font-semibold"
            style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}
          >
            {title ?? 'Log Symptom'}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 rounded-full transition-colors"
            style={{ background: 'var(--color-pm-bg)', color: 'var(--color-pm-text-secondary)' }}
            aria-label="Close"
          >
            <X size={16} weight="bold" />
          </button>
        </div>

        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

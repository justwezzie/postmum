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
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(61, 43, 31, 0.4)' }}
        onClick={onClose}
      />

      {/* Sheet */}
      <div
        className="relative flex flex-col max-h-[90dvh] overflow-hidden"
        style={{
          background: 'var(--color-pm-surface)',
          borderRadius: '24px 24px 0 0',
          boxShadow: 'var(--shadow-sheet)',
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div
            className="w-10 h-1 rounded-full"
            style={{ background: 'var(--color-pm-border-strong)' }}
          />
        </div>

        {/* Header */}
        {title && (
          <div className="flex items-center justify-between px-5 py-3">
            <h2
              className="text-base font-semibold"
              style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}
            >
              {title}
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
        )}

        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  )
}

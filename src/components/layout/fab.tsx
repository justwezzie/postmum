import { Plus } from '@phosphor-icons/react'
import { useAppStore } from '../../stores/app-store'

export function FAB() {
  const openQuickLog = useAppStore(s => s.openQuickLog)

  return (
    <button
      onClick={openQuickLog}
      aria-label="Quick log a symptom"
      className="fixed z-50 flex items-center justify-center transition-transform duration-150 active:scale-95"
      style={{
        bottom: 'calc(72px + env(safe-area-inset-bottom) + 16px)',
        right: '20px',
        width: '56px',
        height: '56px',
        borderRadius: '18px',
        background: 'var(--color-pm-primary)',
        boxShadow: 'var(--shadow-fab)',
        border: 'none',
        cursor: 'pointer',
        color: '#fff',
      }}
    >
      <Plus size={24} weight="bold" />
    </button>
  )
}

import { Card } from '../components/ui/card'
import { ClockCounterClockwise } from '@phosphor-icons/react'

export default function HistoryPage() {
  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1
        className="text-2xl font-bold"
        style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
      >
        History
      </h1>

      <Card>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <ClockCounterClockwise size={40} weight="light" color="var(--color-pm-text-faint)" />
          <p className="text-sm font-medium" style={{ color: 'var(--color-pm-text-secondary)' }}>
            No logs yet
          </p>
          <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
            Your symptom history will appear here as a diary.
          </p>
        </div>
      </Card>
    </div>
  )
}

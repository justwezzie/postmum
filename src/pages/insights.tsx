import { Card } from '../components/ui/card'
import { ChartLine } from '@phosphor-icons/react'

export default function InsightsPage() {
  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1
        className="text-2xl font-bold"
        style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
      >
        Insights
      </h1>

      <Card>
        <div className="flex flex-col items-center gap-3 py-8 text-center">
          <ChartLine size={40} weight="light" color="var(--color-pm-text-faint)" />
          <p className="text-sm font-medium" style={{ color: 'var(--color-pm-text-secondary)' }}>
            Coming in v2
          </p>
          <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
            Trend charts and weekly summaries will be shown here once you have logs.
          </p>
        </div>
      </Card>
    </div>
  )
}

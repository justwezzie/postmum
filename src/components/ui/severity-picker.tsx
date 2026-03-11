interface SeverityPickerProps {
  value: number | null
  onChange: (value: number) => void
}

const SEVERITY_COLORS = [
  'var(--color-severity-mild)',
  'var(--color-severity-mild)',
  'var(--color-severity-moderate)',
  'var(--color-severity-severe)',
  'var(--color-severity-severe)',
]

const SEVERITY_LABELS = ['Barely noticeable', 'Mild', 'Moderate', 'Strong', 'Severe']

export function SeverityPicker({ value, onChange }: SeverityPickerProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 justify-between">
        {[1, 2, 3, 4, 5].map(n => {
          const isSelected = value === n
          const color = SEVERITY_COLORS[n - 1]
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              aria-label={`Severity ${n}: ${SEVERITY_LABELS[n - 1]}`}
              className="flex flex-col items-center gap-1.5 flex-1 py-2 rounded-xl transition-all duration-150 active:scale-95"
              style={{
                background: isSelected ? color + '22' : 'transparent',
                border: `2px solid ${isSelected ? color : 'var(--color-pm-border)'}`,
              }}
            >
              <span
                className="w-6 h-6 rounded-full transition-transform duration-150 flex items-center justify-center"
                style={{
                  background: isSelected ? color : 'var(--color-pm-border)',
                  transform: isSelected ? 'scale(1.1)' : 'scale(1)',
                }}
              >
                <span
                  className="text-[10px] font-bold"
                  style={{ color: isSelected ? '#fff' : 'var(--color-pm-text-muted)' }}
                >
                  {n}
                </span>
              </span>
            </button>
          )
        })}
      </div>
      {value !== null && (
        <p
          className="text-xs text-center font-medium transition-opacity"
          style={{ color: SEVERITY_COLORS[(value ?? 1) - 1] }}
        >
          {SEVERITY_LABELS[(value ?? 1) - 1]}
        </p>
      )}
    </div>
  )
}

import { Card } from '../components/ui/card'
import { Bell, Link, User, CaretRight } from '@phosphor-icons/react'

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1
        className="text-2xl font-bold"
        style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}
      >
        Settings
      </h1>

      <div className="flex flex-col gap-2">
        {[
          { icon: User, label: 'Account', description: 'Name, email, birth date' },
          { icon: Bell, label: 'Reminders', description: 'Set daily check-in times' },
          { icon: Link, label: 'Partner invite', description: 'Share read-only access' },
        ].map(({ icon: Icon, label, description }) => (
          <Card key={label} onClick={() => {}} style={{ padding: '16px' }}>
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'var(--color-pm-bg)' }}
              >
                <Icon size={18} weight="fill" color="var(--color-pm-primary)" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                  {label}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
                  {description}
                </p>
              </div>
              <CaretRight size={16} color="var(--color-pm-text-muted)" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

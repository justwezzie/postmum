import { NavLink } from 'react-router-dom'
import { House, ListChecks, BookOpen, UserCircle } from '@phosphor-icons/react'

const NAV_ITEMS = [
  { to: '/home', icon: House, label: 'Home' },
  { to: '/routines', icon: ListChecks, label: 'Routines' },
  { to: '/guides', icon: BookOpen, label: 'Guides' },
  { to: '/profile', icon: UserCircle, label: 'Profile' },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex items-stretch"
      style={{
        background: 'var(--color-pm-surface)',
        borderTop: '1px solid var(--color-pm-border)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className="flex flex-1 flex-col items-center gap-1 py-3 transition-colors"
          style={({ isActive }) => ({
            color: isActive ? 'var(--color-pm-primary)' : 'var(--color-pm-text-muted)',
          })}
        >
          {({ isActive }) => (
            <>
              <Icon size={22} weight={isActive ? 'fill' : 'regular'} />
              <span className="text-[10px] font-medium tracking-wide">{label}</span>
            </>
          )}
        </NavLink>
      ))}
    </nav>
  )
}

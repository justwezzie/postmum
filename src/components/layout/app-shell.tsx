import { Outlet } from 'react-router-dom'
import { BottomNav } from './bottom-nav'
import { FAB } from './fab'
import { QuickLogSheet } from '../checkin/quick-log-sheet'

export function AppShell() {
  return (
    <div
      className="flex flex-col min-h-dvh"
      style={{ background: 'var(--color-pm-bg)' }}
    >
      <main
        className="flex-1 overflow-y-auto"
        style={{ paddingBottom: 'calc(72px + env(safe-area-inset-bottom))' }}
      >
        <Outlet />
      </main>

      <BottomNav />
      <FAB />
      <QuickLogSheet />
    </div>
  )
}

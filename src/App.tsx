import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AppShell } from './components/layout/app-shell'
import HomePage from './pages/home'
import CheckInPage from './pages/checkin'
import RoutinesPage from './pages/routines'
import CommunityPage from './pages/guides'
import ProfilePage from './pages/profile'
import SymptomsPage from './pages/symptoms'
import OnboardingPage from './pages/onboarding'
import AuthPage from './pages/auth'
import { useAppStore } from './stores/app-store'
import { supabase } from './lib/supabase'

const queryClient = new QueryClient()

function RootRedirect() {
  const onboardingComplete = useAppStore(s => s.onboardingComplete)
  const markOnboardingComplete = useAppStore(s => s.markOnboardingComplete)
  const [sessionChecked, setSessionChecked] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) markOnboardingComplete()
      setSessionChecked(true)
    })
  }, [markOnboardingComplete])

  if (!sessionChecked && !onboardingComplete) return null

  return onboardingComplete ? <Navigate to="/home" replace /> : <Navigate to="/onboarding" replace />
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route element={<AppShell />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/checkin" element={<CheckInPage />} />
            <Route path="/routines" element={<RoutinesPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/symptoms" element={<SymptomsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

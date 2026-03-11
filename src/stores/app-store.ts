import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { BirthType } from '../types/database'

export type RecoveryFocus =
  | 'core_pelvic'
  | 'emotional_wellbeing'
  | 'sleep_energy'
  | 'feeding_support'
  | 'full_recovery'

export type WeeksSinceBirth = '<3' | '3-6' | '6+'

interface AppState {
  // UI
  isQuickLogOpen: boolean
  safetyResourceDismissedAt: number | null

  // Onboarding
  onboardingComplete: boolean
  birthType: BirthType | null
  babyBirthDate: string | null
  displayName: string | null
  numberOfChildren: number | null
  isFirstOfType: boolean | null
  weeksSinceBirth: WeeksSinceBirth | null

  // Goals
  recoveryFocus: RecoveryFocus | null
  weeklyRoutineTarget: number

  // Actions
  openQuickLog: () => void
  closeQuickLog: () => void
  dismissSafetyResource: () => void
  shouldShowSafetyResource: () => boolean
  setBirthType: (type: BirthType) => void
  setOnboardingAnswers: (answers: {
    numberOfChildren: number
    isFirstOfType: boolean
    weeksSinceBirth: WeeksSinceBirth
  }) => void
  setGoal: (focus: RecoveryFocus, weeklyTarget: number) => void
  completeOnboarding: (displayName: string, babyBirthDate: string) => void
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      isQuickLogOpen: false,
      safetyResourceDismissedAt: null,
      onboardingComplete: false,
      birthType: null,
      babyBirthDate: null,
      displayName: null,
      numberOfChildren: null,
      isFirstOfType: null,
      weeksSinceBirth: null,
      recoveryFocus: null,
      weeklyRoutineTarget: 3,

      openQuickLog: () => set({ isQuickLogOpen: true }),
      closeQuickLog: () => set({ isQuickLogOpen: false }),

      dismissSafetyResource: () => set({ safetyResourceDismissedAt: Date.now() }),

      shouldShowSafetyResource: () => {
        const { safetyResourceDismissedAt } = get()
        if (!safetyResourceDismissedAt) return true
        return (Date.now() - safetyResourceDismissedAt) / (1000 * 60 * 60) >= 24
      },

      setBirthType: (type) => set({ birthType: type }),

      setOnboardingAnswers: (answers) => set(answers),

      setGoal: (focus, weeklyTarget) =>
        set({ recoveryFocus: focus, weeklyRoutineTarget: weeklyTarget }),

      completeOnboarding: (displayName, babyBirthDate) =>
        set({ onboardingComplete: true, displayName, babyBirthDate }),
    }),
    { name: 'postmum-v1' }
  )
)

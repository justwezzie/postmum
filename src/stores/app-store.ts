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

export interface HealthcareDetails {
  midwifeName: string
  midwifePhone: string
  gpName: string
  gpPhone: string
  healthAdvisorName: string
  healthAdvisorPhone: string
  hospitalName: string
}

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

  // Healthcare
  healthcareDetails: HealthcareDetails

  // Reminders
  reminderEnabled: boolean
  reminderTime: string

  // Partner
  partnerInviteToken: string | null

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
  setHealthcareDetails: (details: HealthcareDetails) => void
  updateBirthDetails: (birthType: BirthType, babyBirthDate: string) => void
  setReminder: (enabled: boolean, time: string) => void
  generatePartnerToken: () => string
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
      healthcareDetails: {
        midwifeName: '',
        midwifePhone: '',
        gpName: '',
        gpPhone: '',
        healthAdvisorName: '',
        healthAdvisorPhone: '',
        hospitalName: '',
      },
      reminderEnabled: false,
      reminderTime: '09:00',
      partnerInviteToken: null,

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

      setHealthcareDetails: (details) => set({ healthcareDetails: details }),

      updateBirthDetails: (birthType, babyBirthDate) => set({ birthType, babyBirthDate }),

      setReminder: (enabled, time) => set({ reminderEnabled: enabled, reminderTime: time }),

      generatePartnerToken: () => {
        const token = crypto.randomUUID()
        set({ partnerInviteToken: token })
        return token
      },
    }),
    { name: 'postmum-v1' }
  )
)

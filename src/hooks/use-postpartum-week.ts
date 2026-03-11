import { differenceInDays, parseISO } from 'date-fns'

export function usePostpartumWeek(babyBirthDate: string | null | undefined): number | null {
  if (!babyBirthDate) return null
  const days = differenceInDays(new Date(), parseISO(babyBirthDate))
  return Math.max(1, Math.floor(days / 7) + 1)
}

export function getWeekFocus(week: number): { phase: string; description: string } {
  if (week <= 2) {
    return { phase: 'Acute Recovery', description: 'Focus on rest and physical healing' }
  } else if (week <= 4) {
    return { phase: 'Early Adjustment', description: 'Physical healing and emotional shifts' }
  } else if (week <= 6) {
    return { phase: 'Bonding & Emotional', description: 'Mood, bonding, and returning to self' }
  }
  return { phase: 'Long-term Wellbeing', description: 'Energy, mood, and ongoing recovery' }
}

import type { BirthType, SymptomCategory } from './database'

export interface SymptomDef {
  key: string
  label: string
  isSafetyFlag?: boolean
  /** If set, only shown for these birth types. Omit = shown for all. */
  onlyFor?: BirthType[]
}

export interface CategoryDef {
  id: SymptomCategory
  label: string
  icon: string
  symptoms: SymptomDef[]
}

export const SYMPTOM_CATEGORIES: CategoryDef[] = [
  {
    id: 'physical',
    label: 'Physical',
    icon: '🩹',
    symptoms: [
      {
        key: 'perineal_pain',
        label: 'Perineal pain / soreness',
        onlyFor: ['natural', 'assisted'],
      },
      {
        key: 'perineal_bruising',
        label: 'Bruising or swelling (perineum)',
        onlyFor: ['assisted'],
      },
      {
        key: 'csection_pain',
        label: 'C-section incision pain',
        onlyFor: ['planned_csection', 'emergency_csection'],
      },
      {
        key: 'csection_wound',
        label: 'Wound site redness / discharge',
        onlyFor: ['planned_csection', 'emergency_csection'],
      },
      {
        key: 'mobility',
        label: 'Mobility / getting up',
        onlyFor: ['planned_csection', 'emergency_csection'],
      },
      { key: 'bleeding', label: 'Bleeding (lochia)' },
      { key: 'headache', label: 'Headache' },
      { key: 'breast_pain', label: 'Breast pain / engorgement' },
      { key: 'urinary', label: 'Urinary issues' },
      { key: 'constipation', label: 'Constipation / bowel pain' },
      { key: 'swelling', label: 'Swelling (feet, hands)' },
    ],
  },
  {
    id: 'mental',
    label: 'Mood',
    icon: '💜',
    symptoms: [
      { key: 'mood', label: 'Overall mood' },
      { key: 'anxiety', label: 'Anxiety / worry' },
      {
        key: 'birth_trauma',
        label: 'Replaying the birth / flashbacks',
        isSafetyFlag: true,
        onlyFor: ['emergency_csection', 'assisted'],
      },
      { key: 'intrusive_thoughts', label: 'Intrusive thoughts', isSafetyFlag: true },
      { key: 'disconnected', label: 'Feeling disconnected from baby', isSafetyFlag: true },
      { key: 'crying', label: 'Crying spells' },
      { key: 'irritability', label: 'Irritability' },
      { key: 'overwhelmed', label: 'Feeling overwhelmed' },
      { key: 'bonding', label: 'Bonding feelings' },
    ],
  },
  {
    id: 'sleep',
    label: 'Sleep',
    icon: '🌙',
    symptoms: [
      { key: 'sleep_hours', label: 'Total sleep (hours)' },
      { key: 'sleep_quality', label: 'Sleep quality' },
      { key: 'energy', label: 'Energy level' },
      { key: 'dizziness', label: 'Dizziness / lightheadedness' },
    ],
  },
  {
    id: 'feeding',
    label: 'Feeding',
    icon: '🤱',
    symptoms: [
      { key: 'latch_pain', label: 'Latch pain' },
      { key: 'nipple_soreness', label: 'Nipple soreness / cracking' },
      { key: 'engorgement', label: 'Engorgement' },
      { key: 'supply_concern', label: 'Supply concern' },
      { key: 'mastitis', label: 'Mastitis symptoms' },
      { key: 'feeding_note', label: 'Formula / combination feeding' },
    ],
  },
]

export function getSymptomsForBirthType(
  category: CategoryDef,
  birthType: BirthType | null
): SymptomDef[] {
  if (!birthType) return category.symptoms
  return category.symptoms.filter(
    s => !s.onlyFor || s.onlyFor.includes(birthType)
  )
}

export function getCategoryDef(id: SymptomCategory): CategoryDef | undefined {
  return SYMPTOM_CATEGORIES.find(c => c.id === id)
}

export function isSafetySymptom(symptomKey: string): boolean {
  return SYMPTOM_CATEGORIES.some(cat =>
    cat.symptoms.some(s => s.key === symptomKey && s.isSafetyFlag)
  )
}

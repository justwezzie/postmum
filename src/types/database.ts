export type SymptomCategory = 'physical' | 'mental' | 'sleep' | 'feeding'
export type LogType = 'checkin' | 'quick'
export type BirthType = 'natural' | 'assisted' | 'planned_csection' | 'emergency_csection'

export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string
          email: string
          display_name: string | null
          baby_birth_date: string | null
          birth_type: BirthType | null
          partner_invite_token: string | null
          push_subscription: Record<string, unknown> | null
          reminder_times: string[] | null
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['users']['Insert']>
      }
      symptom_logs: {
        Row: {
          id: string
          user_id: string
          logged_at: string
          log_type: LogType
          category: SymptomCategory
          symptom_key: string
          severity: number
          note: string | null
          is_custom: boolean
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['symptom_logs']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['symptom_logs']['Insert']>
      }
      custom_symptoms: {
        Row: {
          id: string
          user_id: string
          category: SymptomCategory
          label: string
          created_at: string
        }
        Insert: Omit<Database['public']['Tables']['custom_symptoms']['Row'], 'id' | 'created_at'>
        Update: Partial<Database['public']['Tables']['custom_symptoms']['Insert']>
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}

export type User = Database['public']['Tables']['users']['Row']
export type SymptomLog = Database['public']['Tables']['symptom_logs']['Row']
export type CustomSymptom = Database['public']['Tables']['custom_symptoms']['Row']

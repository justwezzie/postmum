import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import type { SymptomLog } from '../types/database'

type LogInsert = Omit<SymptomLog, 'id' | 'created_at'>

export function useSymptomLogs(userId: string | undefined, from?: string) {
  return useQuery({
    queryKey: ['symptom_logs', userId, from],
    queryFn: async (): Promise<SymptomLog[]> => {
      if (!userId) return []
      let query = supabase
        .from('symptom_logs')
        .select('*')
        .eq('user_id', userId)
        .order('logged_at', { ascending: false })
      if (from) query = query.gte('logged_at', from)
      const { data, error } = await query
      if (error) throw error
      return (data ?? []) as SymptomLog[]
    },
    enabled: !!userId,
  })
}

export function useInsertLogs() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (logs: LogInsert[]): Promise<SymptomLog[]> => {
      const { data, error } = await supabase
        .from('symptom_logs')
        .insert(logs as Record<string, unknown>[])
        .select()
      if (error) throw error
      return (data ?? []) as SymptomLog[]
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['symptom_logs'] })
    },
  })
}

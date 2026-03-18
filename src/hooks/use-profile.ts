import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { supabase } from '../lib/supabase'
import type { User } from '../types/database'

export function useProfile(userId: string | undefined) {
  return useQuery({
    queryKey: ['profile', userId],
    queryFn: async (): Promise<User | null> => {
      if (!userId) return null
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single()
      if (error) throw error
      return data as User
    },
    enabled: !!userId,
  })
}

export function useUpsertProfile() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: async (profile: Partial<User> & { id: string }): Promise<User> => {
      const { data, error } = await supabase
        .from('users')
        .upsert(profile as Record<string, unknown>, { onConflict: 'id' })
        .select()
        .single()
      if (error) throw error
      return data as User
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['profile', data.id], data)
    },
  })
}

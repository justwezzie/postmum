import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { Heart } from '@phosphor-icons/react'

type Mode = 'login' | 'signup'

export default function AuthPage() {
  const navigate = useNavigate()
  const [mode, setMode] = useState<Mode>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)

    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      }
      navigate('/home')
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-dvh px-6 py-16" style={{ background: 'var(--color-pm-bg)' }}>
      <div className="flex flex-col items-center mb-10">
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
          style={{ background: 'var(--color-pm-primary)' }}
        >
          <Heart size={28} weight="fill" color="#fff" />
        </div>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}>
          {mode === 'login' ? 'Welcome back' : 'Create account'}
        </h1>
        <p className="text-sm mt-1" style={{ color: 'var(--color-pm-text-secondary)' }}>
          {mode === 'login' ? 'Sign in to access your recovery' : 'Save your data across devices'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            placeholder="you@example.com"
            className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none"
            style={{
              background: 'var(--color-pm-surface)',
              border: '1.5px solid var(--color-pm-border)',
              color: 'var(--color-pm-text)',
            }}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            placeholder="Min. 6 characters"
            minLength={6}
            className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none"
            style={{
              background: 'var(--color-pm-surface)',
              border: '1.5px solid var(--color-pm-border)',
              color: 'var(--color-pm-text)',
            }}
          />
        </div>

        {error && (
          <p className="text-xs px-1" style={{ color: 'var(--color-severity-severe)' }}>
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-2xl text-sm font-semibold mt-2 transition-opacity active:opacity-80 disabled:opacity-50"
          style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
        >
          {loading ? 'Please wait…' : mode === 'login' ? 'Sign in' : 'Create account'}
        </button>
      </form>

      <div className="flex items-center justify-center gap-2 mt-6">
        <p className="text-sm" style={{ color: 'var(--color-pm-text-secondary)' }}>
          {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}
        </p>
        <button
          onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(null) }}
          className="text-sm font-semibold transition-opacity active:opacity-60"
          style={{ color: 'var(--color-pm-primary)' }}
        >
          {mode === 'login' ? 'Sign up' : 'Sign in'}
        </button>
      </div>

      <Link
        to="/onboarding"
        className="text-xs text-center mt-4 transition-opacity active:opacity-60"
        style={{ color: 'var(--color-pm-text-muted)' }}
      >
        New here? Start onboarding →
      </Link>
    </div>
  )
}

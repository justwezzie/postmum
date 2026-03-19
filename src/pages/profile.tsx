import { useState } from 'react'
import { useAppStore } from '../stores/app-store'
import type { HealthcareDetails } from '../stores/app-store'
import { usePostpartumWeek } from '../hooks/use-postpartum-week'
import { Card } from '../components/ui/card'
import type { BirthType } from '../types/database'
import { Bell, Link, ArrowCounterClockwise, CaretDown, CaretUp, Baby, Stethoscope, PencilSimple, Check, X, Copy, CheckCircle } from '@phosphor-icons/react'

const BIRTH_TYPES: { type: BirthType; label: string; emoji: string }[] = [
  { type: 'natural',           label: 'Natural',           emoji: '🌿' },
  { type: 'assisted',          label: 'Assisted',          emoji: '🤝' },
  { type: 'planned_csection',  label: 'Planned C-section', emoji: '📅' },
  { type: 'emergency_csection',label: 'Emergency C-section',emoji: '⚡' },
]

const BIRTH_TYPE_LABELS: Record<string, string> = {
  natural: 'Natural birth',
  assisted: 'Assisted delivery',
  planned_csection: 'Planned C-section',
  emergency_csection: 'Emergency C-section',
}

const FOCUS_LABELS: Record<string, string> = {
  core_pelvic: 'Core & Pelvic Floor',
  emotional_wellbeing: 'Emotional Wellbeing',
  sleep_energy: 'Sleep & Energy',
  feeding_support: 'Feeding Support',
  full_recovery: 'Full Recovery',
}

const HEALTHCARE_FIELDS: { key: keyof HealthcareDetails; label: string; placeholder: string; type?: string }[] = [
  { key: 'midwifeName',       label: 'Midwife name',          placeholder: 'e.g. Sarah Johnson' },
  { key: 'midwifePhone',      label: 'Midwife phone',         placeholder: 'e.g. 07700 900000', type: 'tel' },
  { key: 'gpName',            label: 'GP / Doctor name',      placeholder: 'e.g. Dr. Ahmed' },
  { key: 'gpPhone',           label: 'GP phone',              placeholder: 'e.g. 01234 567890', type: 'tel' },
  { key: 'healthAdvisorName', label: 'Health advisor name',   placeholder: 'e.g. Emma Clarke' },
  { key: 'healthAdvisorPhone',label: 'Health advisor phone',  placeholder: 'e.g. 07700 900123', type: 'tel' },
  { key: 'hospitalName',      label: 'Maternity unit',        placeholder: 'e.g. St. Mary\'s Hospital' },
]

export default function ProfilePage() {
  const {
    displayName, babyBirthDate, birthType, recoveryFocus, weeklyRoutineTarget,
    healthcareDetails, setHealthcareDetails,
    reminderEnabled, reminderTime, setReminder,
    partnerInviteToken, generatePartnerToken,
    updateBirthDetails,
  } = useAppStore()
  const week = usePostpartumWeek(babyBirthDate)

  // Healthcare
  const [editingHealthcare, setEditingHealthcare] = useState(false)
  const [draft, setDraft] = useState<HealthcareDetails>(healthcareDetails)
  const hasHealthcareData = Object.values(healthcareDetails).some(v => v.trim() !== '')

  function saveHealthcare() { setHealthcareDetails(draft); setEditingHealthcare(false) }
  function cancelHealthcare() { setDraft(healthcareDetails); setEditingHealthcare(false) }

  // Birth details
  const [birthOpen, setBirthOpen] = useState(false)
  const [draftBirthType, setDraftBirthType] = useState<BirthType | null>(birthType)
  const [draftBirthDate, setDraftBirthDate] = useState(babyBirthDate ?? '')

  function saveBirthDetails() {
    if (draftBirthType && draftBirthDate) {
      updateBirthDetails(draftBirthType, draftBirthDate)
      setBirthOpen(false)
    }
  }

  // Reminders
  const [remindersOpen, setRemindersOpen] = useState(false)
  const [draftReminderEnabled, setDraftReminderEnabled] = useState(reminderEnabled)
  const [draftReminderTime, setDraftReminderTime] = useState(reminderTime)

  function saveReminders() {
    setReminder(draftReminderEnabled, draftReminderTime)
    setRemindersOpen(false)
  }

  // Partner invite
  const [partnerOpen, setPartnerOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const inviteToken = partnerInviteToken ?? ''
  const inviteLink = inviteToken ? `${window.location.origin}/join?token=${inviteToken}` : ''

  function handleGenerateToken() {
    generatePartnerToken()
  }

  function copyInviteLink() {
    navigator.clipboard.writeText(inviteLink).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  function resetApp() {
    localStorage.removeItem('postmum-v1')
    window.location.href = '/'
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      {/* Avatar + name */}
      <div className="flex items-center gap-4">
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
          style={{ background: '#E8F0DC' }}
        >
          🌸
        </div>
        <div>
          <h1 className="text-xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.02em' }}>
            {displayName ?? 'Your Profile'}
          </h1>
          {week && (
            <p className="text-sm mt-0.5" style={{ color: 'var(--color-pm-text-secondary)' }}>
              Week {week} postpartum
            </p>
          )}
        </div>
      </div>

      {/* Recovery summary */}
      <Card style={{ padding: '16px' }}>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          My Recovery
        </p>
        <div className="flex flex-col gap-3">
          {[
            { label: 'Birth type', value: birthType ? BIRTH_TYPE_LABELS[birthType] : '—' },
            { label: 'Recovery focus', value: recoveryFocus ? FOCUS_LABELS[recoveryFocus] : '—' },
            { label: 'Weekly routine target', value: `${weeklyRoutineTarget}× per week` },
            { label: "Baby's birthday", value: babyBirthDate ? new Date(babyBirthDate).toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' }) : '—' },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center justify-between">
              <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>{label}</p>
              <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>{value}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* Healthcare details */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}
      >
        <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--color-pm-border)' }}>
          <div className="flex items-center gap-2">
            <Stethoscope size={16} weight="fill" color="var(--color-pm-primary)" />
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>Healthcare Team</p>
          </div>
          {!editingHealthcare ? (
            <button
              onClick={() => { setDraft(healthcareDetails); setEditingHealthcare(true) }}
              className="flex items-center gap-1 text-xs font-semibold transition-opacity active:opacity-60"
              style={{ color: 'var(--color-pm-primary)' }}
            >
              <PencilSimple size={13} weight="bold" />
              {hasHealthcareData ? 'Edit' : 'Add'}
            </button>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={cancelHealthcare}
                className="flex items-center gap-1 text-xs font-medium transition-opacity active:opacity-60"
                style={{ color: 'var(--color-pm-text-muted)' }}
              >
                <X size={13} weight="bold" />
                Cancel
              </button>
              <button
                onClick={saveHealthcare}
                className="flex items-center gap-1 text-xs font-semibold transition-opacity active:opacity-60"
                style={{ color: 'var(--color-pm-primary)' }}
              >
                <Check size={13} weight="bold" />
                Save
              </button>
            </div>
          )}
        </div>

        {!editingHealthcare ? (
          <div className="flex flex-col">
            {HEALTHCARE_FIELDS.map(({ key, label }, i) => (
              <div
                key={key}
                className="flex items-center justify-between px-4 py-3"
                style={{ borderTop: i > 0 ? '1px solid var(--color-pm-border)' : 'none' }}
              >
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>{label}</p>
                <p
                  className="text-sm font-medium text-right ml-4"
                  style={{
                    color: healthcareDetails[key] ? 'var(--color-pm-text)' : 'var(--color-pm-text-muted)',
                    maxWidth: '60%',
                  }}
                >
                  {healthcareDetails[key] || '—'}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3 px-4 py-4">
            {HEALTHCARE_FIELDS.map(({ key, label, placeholder, type }) => (
              <div key={key} className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>
                  {label}
                </label>
                <input
                  type={type ?? 'text'}
                  value={draft[key]}
                  onChange={e => setDraft(d => ({ ...d, [key]: e.target.value }))}
                  placeholder={placeholder}
                  className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                  style={{
                    background: 'var(--color-pm-bg)',
                    border: '1.5px solid var(--color-pm-border)',
                    color: 'var(--color-pm-text)',
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Update birth details */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}>
        <button
          onClick={() => { setDraftBirthType(birthType); setDraftBirthDate(babyBirthDate ?? ''); setBirthOpen(o => !o) }}
          className="w-full flex items-center gap-3 px-4 py-3.5"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-pm-bg)' }}>
            <Baby size={18} weight="fill" color="var(--color-pm-primary)" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>Update birth details</p>
            <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>Birth type & baby date</p>
          </div>
          {birthOpen ? <CaretUp size={16} color="var(--color-pm-text-muted)" /> : <CaretDown size={16} color="var(--color-pm-text-muted)" />}
        </button>
        {birthOpen && (
          <div className="px-4 pb-4 flex flex-col gap-4" style={{ borderTop: '1px solid var(--color-pm-border)' }}>
            <div className="pt-3">
              <p className="text-xs font-semibold mb-2" style={{ color: 'var(--color-pm-text-muted)' }}>Birth type</p>
              <div className="grid grid-cols-2 gap-2">
                {BIRTH_TYPES.map(bt => (
                  <button
                    key={bt.type}
                    onClick={() => setDraftBirthType(bt.type)}
                    className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-sm font-medium text-left transition-all active:scale-95"
                    style={{
                      background: draftBirthType === bt.type ? 'var(--color-pm-primary)' : 'var(--color-pm-bg)',
                      color: draftBirthType === bt.type ? '#fff' : 'var(--color-pm-text)',
                      border: `1.5px solid ${draftBirthType === bt.type ? 'var(--color-pm-primary)' : 'var(--color-pm-border)'}`,
                    }}
                  >
                    <span>{bt.emoji}</span>
                    <span className="text-xs">{bt.label}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>Baby's birth date</label>
              <input
                type="date"
                value={draftBirthDate}
                max={new Date().toISOString().split('T')[0]}
                onChange={e => setDraftBirthDate(e.target.value)}
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-pm-bg)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
              />
            </div>
            <button
              onClick={saveBirthDetails}
              disabled={!draftBirthType || !draftBirthDate}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity active:opacity-80 disabled:opacity-40"
              style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
            >
              Save changes
            </button>
          </div>
        )}
      </div>

      {/* Reminders */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}>
        <button
          onClick={() => { setDraftReminderEnabled(reminderEnabled); setDraftReminderTime(reminderTime); setRemindersOpen(o => !o) }}
          className="w-full flex items-center gap-3 px-4 py-3.5"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-pm-bg)' }}>
            <Bell size={18} weight="fill" color="var(--color-pm-primary)" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>Reminders</p>
            <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
              {reminderEnabled ? `Daily at ${reminderTime}` : 'Off'}
            </p>
          </div>
          {remindersOpen ? <CaretUp size={16} color="var(--color-pm-text-muted)" /> : <CaretDown size={16} color="var(--color-pm-text-muted)" />}
        </button>
        {remindersOpen && (
          <div className="px-4 pb-4 flex flex-col gap-4 pt-3" style={{ borderTop: '1px solid var(--color-pm-border)' }}>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium" style={{ color: 'var(--color-pm-text)' }}>Enable daily reminder</p>
              <button
                onClick={() => setDraftReminderEnabled(e => !e)}
                className="w-12 h-6 rounded-full transition-colors relative flex-shrink-0"
                style={{ background: draftReminderEnabled ? 'var(--color-pm-primary)' : 'var(--color-pm-border)' }}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all"
                  style={{ left: draftReminderEnabled ? '26px' : '2px' }}
                />
              </button>
            </div>
            {draftReminderEnabled && (
              <div className="flex flex-col gap-1">
                <label className="text-xs font-semibold" style={{ color: 'var(--color-pm-text-muted)' }}>Reminder time</label>
                <input
                  type="time"
                  value={draftReminderTime}
                  onChange={e => setDraftReminderTime(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                  style={{ background: 'var(--color-pm-bg)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
                />
              </div>
            )}
            <button
              onClick={saveReminders}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity active:opacity-80"
              style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
            >
              Save
            </button>
          </div>
        )}
      </div>

      {/* Partner invite */}
      <div className="rounded-2xl overflow-hidden" style={{ background: 'var(--color-pm-surface)', border: '1px solid var(--color-pm-border)' }}>
        <button
          onClick={() => setPartnerOpen(o => !o)}
          className="w-full flex items-center gap-3 px-4 py-3.5"
        >
          <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'var(--color-pm-bg)' }}>
            <Link size={18} weight="fill" color="var(--color-pm-primary)" />
          </div>
          <div className="flex-1 text-left">
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>Partner invite</p>
            <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>Share read-only access</p>
          </div>
          {partnerOpen ? <CaretUp size={16} color="var(--color-pm-text-muted)" /> : <CaretDown size={16} color="var(--color-pm-text-muted)" />}
        </button>
        {partnerOpen && (
          <div className="px-4 pb-4 flex flex-col gap-3 pt-3" style={{ borderTop: '1px solid var(--color-pm-border)' }}>
            <p className="text-xs leading-relaxed" style={{ color: 'var(--color-pm-text-secondary)' }}>
              Generate a link to share your recovery progress with a partner or support person. They will have read-only access.
            </p>
            {!inviteToken ? (
              <button
                onClick={handleGenerateToken}
                className="w-full py-3 rounded-xl text-sm font-semibold transition-opacity active:opacity-80"
                style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
              >
                Generate invite link
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <div
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                  style={{ background: 'var(--color-pm-bg)', border: '1.5px solid var(--color-pm-border)' }}
                >
                  <p className="text-xs flex-1 truncate font-mono" style={{ color: 'var(--color-pm-text-secondary)' }}>
                    {inviteLink}
                  </p>
                </div>
                <button
                  onClick={copyInviteLink}
                  className="w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-opacity active:opacity-80"
                  style={{ background: copied ? '#E8F0DC' : 'var(--color-pm-primary)', color: copied ? 'var(--color-pm-primary)' : '#fff' }}
                >
                  {copied ? <CheckCircle size={16} weight="fill" /> : <Copy size={16} weight="bold" />}
                  {copied ? 'Copied!' : 'Copy link'}
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Reset */}
      <button
        onClick={resetApp}
        className="flex items-center gap-2 justify-center py-3 rounded-2xl text-sm font-semibold transition-opacity active:opacity-60"
        style={{
          background: 'var(--color-pm-surface)',
          border: '1.5px solid var(--color-pm-border)',
          color: 'var(--color-pm-text-secondary)',
        }}
      >
        <ArrowCounterClockwise size={14} weight="bold" />
        Reset onboarding
      </button>
    </div>
  )
}

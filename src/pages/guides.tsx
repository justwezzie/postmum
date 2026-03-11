import { useState } from 'react'
import { Card } from '../components/ui/card'
import { MagnifyingGlass, Pill, FirstAid, Brain, Baby, ArrowRight, Plus } from '@phosphor-icons/react'

interface Medication {
  id: string
  name: string
  dose: string
  active: boolean
}

interface Article {
  id: string
  title: string
  category: string
  icon: React.ElementType
  preview: string
}

const ARTICLES: Article[] = [
  {
    id: 'wound-care',
    title: 'Caring for your wound at home',
    category: 'Physical Recovery',
    icon: FirstAid,
    preview: 'Keep the area clean and dry. Watch for signs of infection — redness, warmth, or discharge.',
  },
  {
    id: 'ppd',
    title: 'Understanding postpartum mood',
    category: 'Mental Wellbeing',
    icon: Brain,
    preview: 'Baby blues vs. postpartum depression: what to look for and when to reach out.',
  },
  {
    id: 'feeding',
    title: 'Breastfeeding after birth',
    category: 'Feeding',
    icon: Baby,
    preview: 'Tips for establishing a good latch, managing engorgement and navigating supply concerns.',
  },
  {
    id: 'pain-relief',
    title: 'Managing pain after birth',
    category: 'Medication',
    icon: Pill,
    preview: 'Safe over-the-counter options, when to take them, and what to avoid while breastfeeding.',
  },
]

const DEFAULT_MEDS: Medication[] = [
  { id: '1', name: 'Paracetamol', dose: '1000mg (2 Tabs)', active: true },
  { id: '2', name: 'Ibuprofen', dose: '600mg (3 Tabs)', active: false },
]

export default function GuidesPage() {
  const [search, setSearch] = useState('')
  const [medications, setMedications] = useState<Medication[]>(DEFAULT_MEDS)
  const [showAddMed, setShowAddMed] = useState(false)
  const [newMedName, setNewMedName] = useState('')
  const [newMedDose, setNewMedDose] = useState('')
  const [expandedArticle, setExpandedArticle] = useState<string | null>(null)

  const filtered = ARTICLES.filter(
    a =>
      !search ||
      a.title.toLowerCase().includes(search.toLowerCase()) ||
      a.category.toLowerCase().includes(search.toLowerCase())
  )

  function toggleMed(id: string) {
    setMedications(meds =>
      meds.map(m => (m.id === id ? { ...m, active: !m.active } : m))
    )
  }

  function addMedication() {
    if (!newMedName.trim()) return
    setMedications(meds => [
      ...meds,
      { id: Date.now().toString(), name: newMedName.trim(), dose: newMedDose.trim(), active: false },
    ])
    setNewMedName('')
    setNewMedDose('')
    setShowAddMed(false)
  }

  return (
    <div className="flex flex-col gap-5 px-4 pt-8 pb-4">
      <h1 className="text-2xl font-bold" style={{ color: 'var(--color-pm-text)', letterSpacing: '-0.03em' }}>
        Help & Advice
      </h1>

      {/* Search */}
      <div
        className="flex items-center gap-3 px-4 py-3 rounded-2xl"
        style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)' }}
      >
        <MagnifyingGlass size={16} color="var(--color-pm-text-muted)" />
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search help topics…"
          className="flex-1 bg-transparent text-sm outline-none"
          style={{ color: 'var(--color-pm-text)' }}
        />
      </div>

      {/* Medication tracker */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: 'var(--color-pm-text-muted)' }}>
            Medication Log
          </p>
          <button
            onClick={() => setShowAddMed(o => !o)}
            className="flex items-center gap-1 text-xs font-semibold transition-opacity active:opacity-60"
            style={{ color: 'var(--color-pm-primary)' }}
          >
            <Plus size={12} weight="bold" />
            Add
          </button>
        </div>

        <Card style={{ padding: '0', overflow: 'hidden' }}>
          {/* Icon header row */}
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ borderBottom: '1px solid var(--color-pm-border)' }}
          >
            <div
              className="w-8 h-8 rounded-xl flex items-center justify-center"
              style={{ background: 'var(--color-pm-bg)' }}
            >
              <Pill size={16} weight="fill" color="var(--color-pm-primary)" />
            </div>
            <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
              Medication
            </p>
          </div>

          {medications.map((med, i) => (
            <div
              key={med.id}
              className="flex items-center justify-between px-4 py-3"
              style={{
                borderBottom: i < medications.length - 1 ? '1px solid var(--color-pm-border)' : 'none',
              }}
            >
              <div>
                <p className="text-sm font-semibold" style={{ color: 'var(--color-pm-text)' }}>
                  {med.name}
                </p>
                <p className="text-xs" style={{ color: 'var(--color-pm-text-muted)' }}>
                  {med.dose || 'No dose specified'}
                </p>
              </div>
              <button
                onClick={() => toggleMed(med.id)}
                className="relative w-11 h-6 rounded-full transition-colors duration-200 flex-shrink-0"
                style={{
                  background: med.active ? 'var(--color-pm-primary)' : 'var(--color-pm-border)',
                }}
                aria-label={`Toggle ${med.name}`}
              >
                <span
                  className="absolute top-0.5 w-5 h-5 rounded-full transition-transform duration-200"
                  style={{
                    background: '#fff',
                    transform: med.active ? 'translateX(22px)' : 'translateX(2px)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                  }}
                />
              </button>
            </div>
          ))}

          {/* Add medication inline form */}
          {showAddMed && (
            <div
              className="px-4 py-3 flex flex-col gap-2"
              style={{ borderTop: '1px solid var(--color-pm-border)', background: 'var(--color-pm-bg)' }}
            >
              <input
                type="text"
                value={newMedName}
                onChange={e => setNewMedName(e.target.value)}
                placeholder="Medication name"
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
              />
              <input
                type="text"
                value={newMedDose}
                onChange={e => setNewMedDose(e.target.value)}
                placeholder="Dose (e.g. 500mg, 2 tablets)"
                className="w-full px-3 py-2.5 rounded-xl text-sm outline-none"
                style={{ background: 'var(--color-pm-surface)', border: '1.5px solid var(--color-pm-border)', color: 'var(--color-pm-text)' }}
              />
              <button
                onClick={addMedication}
                disabled={!newMedName.trim()}
                className="w-full py-2.5 rounded-xl text-sm font-semibold transition-opacity disabled:opacity-40"
                style={{ background: 'var(--color-pm-primary)', color: '#fff' }}
              >
                Add Medication
              </button>
            </div>
          )}
        </Card>
      </div>

      {/* Articles */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'var(--color-pm-text-muted)' }}>
          {search ? `Results for "${search}"` : 'Articles & Guides'}
        </p>
        <div className="flex flex-col gap-3">
          {filtered.map(article => {
            const Icon = article.icon
            const isExpanded = expandedArticle === article.id
            return (
              <Card
                key={article.id}
                style={{ padding: '0', overflow: 'hidden' }}
                onClick={() => setExpandedArticle(isExpanded ? null : article.id)}
              >
                <div className="flex items-center gap-3 p-4">
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: '#E8F0DC' }}
                  >
                    <Icon size={18} weight="fill" color="var(--color-pm-primary)" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium" style={{ color: 'var(--color-pm-text-muted)' }}>
                      {article.category}
                    </p>
                    <p className="text-sm font-semibold mt-0.5" style={{ color: 'var(--color-pm-text)' }}>
                      {article.title}
                    </p>
                  </div>
                  <ArrowRight
                    size={16}
                    color="var(--color-pm-text-muted)"
                    style={{ transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s' }}
                  />
                </div>
                {isExpanded && (
                  <div
                    className="px-4 pb-4"
                    style={{ borderTop: '1px solid var(--color-pm-border)' }}
                  >
                    <p className="text-sm leading-relaxed pt-3" style={{ color: 'var(--color-pm-text-secondary)' }}>
                      {article.preview}
                    </p>
                  </div>
                )}
              </Card>
            )
          })}
          {filtered.length === 0 && (
            <Card>
              <p className="text-sm text-center py-4" style={{ color: 'var(--color-pm-text-muted)' }}>
                No results found for "{search}"
              </p>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}

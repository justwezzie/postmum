# Postmum — Product Specification

## Overview

A warm, mobile-first React web app for postpartum mothers to log physical and emotional symptoms across their recovery journey. Partners get read-only visibility. The app adapts what it tracks based on how many weeks postpartum she is.

---

## Target Users

- **Primary**: Postpartum mothers (0–12+ weeks after birth)
- **Secondary**: Partners with invited read-only access

---

## Core User Flows

### 1. Onboarding (try-first)
- Land on app → can log immediately without an account
- After first log OR when trying to view history/share → soft prompt to sign up
- Sign-up: email + password (or magic link — nice to have)
- Onboarding captures: **baby's birth date** (used for postpartum week calculation), display name

### 2. Scheduled Check-ins
- She sets 1–2 daily check-in times (e.g. 8am, 8pm)
- Browser push notification fires at those times: _"How are you feeling today?"_
- Opens to a guided check-in flow (~30s to complete)

### 3. On-demand Logging (acute event)
- FAB (floating action button) always accessible
- Opens quick-log sheet: pick category → pick/type symptom → rate severity → optional note
- In and out in under 30 seconds

### 4. Partner Invite
- She generates a unique read-only link from settings
- Partner opens link, sees her dashboard: recent logs, weekly summary, trends
- Partner cannot log, edit, or see any hidden/private entries

### 5. History & Trends Review
- **Timeline tab**: Reverse-chronological list of all entries (like a diary)
- **Charts tab**: Per-category line/area charts over time (mood, pain, sleep, feeding)
- **Weekly Summary card**: Each week auto-generated — "Week 3 · 14 entries · Your hardest days were Tuesday–Wednesday. Sleep averaged 4.2h."

---

## Symptom Categories & Pre-defined Symptoms

Categories adapt by postpartum week (more on this below). Pre-defined symptom lists, plus ability to add custom symptoms.

### Physical Recovery
- Perineal pain / soreness
- C-section incision pain
- Bleeding (lochia) — amount: light / moderate / heavy
- Headache
- Breast pain / engorgement
- Urinary issues (leaking, urgency)
- Constipation / bowel pain
- Swelling (feet, hands)

### Mental / Emotional
- Mood (general — scale)
- Anxiety / worry
- Intrusive thoughts ⚠️ (triggers resource card if rated severe)
- Feeling disconnected from baby
- Crying spells
- Irritability
- Feeling overwhelmed
- Bonding feelings (positive anchor)

### Sleep & Fatigue
- Total sleep (hours, approximate)
- Sleep quality (fragmented / okay / solid)
- Energy level
- Dizziness / lightheadedness

### Breastfeeding / Feeding
- Latch pain
- Nipple soreness / cracking
- Engorgement
- Supply concern (too little / too much)
- Mastitis symptoms (redness, fever, flu-like)
- Formula / combination feeding note

### Custom Symptoms
- Any category can have custom user-defined symptoms added
- Stored per user, available in all future logs

---

## Postpartum Timeline Adaptation

The app knows her postpartum week (calculated from birth date).

| Week | Primary Focus | Symptom Emphasis |
|------|--------------|------------------|
| 1–2  | Acute physical recovery | Bleeding, perineal/C-section pain, sleep deprivation |
| 3–4  | Physical + early emotional | Feeding struggles, mood shifts, baby blues peak |
| 5–6  | Emotional + bonding | PPD indicators, bonding, returning to self |
| 7+   | Long-term wellbeing | Mood, energy, body image, ongoing physical issues |

- Check-in prompts are reordered/weighted by week
- Non-relevant symptoms are still accessible but not front-and-center
- Milestones acknowledged: _"You're at 6 weeks — your 6-week check-up is coming up. Here's a summary you can bring."_

---

## Safety Protocol

If **Intrusive thoughts** or **Feeling disconnected from baby** is rated at **4 or 5** (on a 5-point scale):

1. Entry is saved normally
2. A **resource card** appears before returning to home:
   - _"You're not alone. Many mums experience this."_
   - Postpartum Support International helpline: 1-800-944-4773
   - PSI text line, local crisis line (if detectable by locale)
   - "Talk to your midwife or GP" CTA
3. Card is dismissible — no alerts to partner, no blocking
4. Card shown maximum once per 24h (not every single entry)

---

## Input UX

### Severity Scale
- **5-point visual scale** (not a slider): dots or faces
- 1 = barely noticeable, 5 = severe/unbearable
- Tappable — one tap to select

### Check-in Flow (guided)
1. Category tabs across top (Physical / Mood / Sleep / Feeding)
2. Symptom rows with 1–5 severity picker
3. Optional: free-text note per category (not per symptom — keeps it fast)
4. Submit → confirmation animation → back to home

### Quick Log (on-demand)
- Bottom sheet
- Step 1: Pick category
- Step 2: Pick symptom from list (or type custom)
- Step 3: Rate severity (1–5)
- Step 4: Optional note
- Tap "Log" → done

---

## Visual Design

**Tone**: Warm, nurturing, non-clinical. Safe and non-judgmental.

**Palette**:
- Background: `#FFF8F4` (warm off-white)
- Primary: `#E8927C` (terracotta peach)
- Secondary: `#F2C4A0` (soft apricot)
- Text: `#3D2B1F` (warm near-black)
- Accent: `#A8C5B5` (muted sage green — for positive/calm states)
- Surface: `#FFFFFF` with warm shadow

**Typography**: Rounded, friendly sans-serif (e.g. Plus Jakarta Sans or DM Sans)

**Shape language**: Generous border-radius (16–24px cards), soft shadows, no harsh edges

**Illustrations**: Optional — soft line-art of mothers, not stock photos

**Emotional states color-coded**:
- Severe (4–5): `#D9534F` muted red — understated, not alarming
- Moderate (3): `#F0AD4E` amber
- Mild (1–2): `#A8C5B5` sage

---

## Tech Stack (Recommended)

| Layer | Choice | Rationale |
|-------|--------|-----------|
| Framework | **Vite + React + TypeScript** | Fast dev, no SSR complexity needed |
| Styling | **Tailwind CSS** | Custom warm palette, utility-first, fast iteration |
| Backend / DB | **Supabase** | Auth, Postgres, Row-Level Security for partner access, real-time |
| Auth | **Supabase Auth** (email + password) | Handles try-first → sign-up flow cleanly |
| Charts | **Recharts** | Composable, works well with Tailwind, good mobile support |
| State | **TanStack Query** (server) + **Zustand** (local) | Clean separation, no Redux overhead |
| Push Notifications | **Web Push API** (via service worker) | Browser-native, no 3rd party cost |
| Date handling | **date-fns** | Lightweight, tree-shakeable |
| Forms | **React Hook Form** | Low re-render, clean validation |

---

## Data Model (Supabase / Postgres)

```sql
users
  id uuid PK
  email text
  display_name text
  baby_birth_date date
  partner_invite_token text (unique, nullable)
  push_subscription jsonb (nullable)
  reminder_times text[] (e.g. ['08:00', '20:00'])
  created_at timestamptz

symptom_logs
  id uuid PK
  user_id uuid FK → users.id
  logged_at timestamptz
  log_type enum('checkin', 'quick')
  category enum('physical', 'mental', 'sleep', 'feeding')
  symptom_key text (predefined key or custom label)
  severity smallint (1–5)
  note text nullable
  is_custom boolean
  created_at timestamptz

custom_symptoms
  id uuid PK
  user_id uuid FK → users.id
  category enum
  label text
  created_at timestamptz
```

**Row-Level Security**:
- `symptom_logs`: user can only read/write their own rows
- Partner access: via a separate Supabase function that validates `partner_invite_token` and returns read-only data — no direct table access

---

## App Structure (Routes)

```
/                     → Home (today's check-in status, quick-log FAB, streak)
/checkin              → Guided check-in flow
/log                  → Quick-log bottom sheet (also accessible from home)
/history              → Timeline view
/insights             → Charts + Weekly Summary cards
/settings             → Reminders, partner invite, account, birth date
/partner/:token       → Partner read-only dashboard
/onboarding           → Birth date + name setup (post sign-up)
```

---

## Notifications

- User sets reminder times in Settings (up to 2 per day)
- App registers a service worker + requests push permission
- On permission grant: subscription stored in `users.push_subscription`
- Supabase Edge Function (or lightweight Node cron) fires notifications at set times
- Notification tap → deep links to `/checkin`

---

## MVP Scope vs. Later

### MVP (v1)
- [ ] Auth (try-first → sign-up)
- [ ] Onboarding (birth date)
- [ ] Check-in flow (all 4 categories)
- [ ] Quick-log
- [ ] Pre-defined symptoms + custom
- [ ] Timeline history
- [ ] Partner invite (read-only link)
- [ ] Safety resource card
- [ ] Postpartum week display + basic adaptation

### v2
- [ ] Charts & trend graphs
- [ ] Weekly summary cards
- [ ] Push notification reminders
- [ ] 6-week check-up PDF export
- [ ] Adaptive symptom weighting by week

### v3
- [ ] Dark mode
- [ ] Magic link auth
- [ ] Localization (AU English, UK English at minimum)
- [ ] Partner digest emails

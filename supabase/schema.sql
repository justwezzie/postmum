-- ============================================================
-- postmum — database schema
-- Run this in Supabase SQL Editor: https://app.supabase.com
-- ============================================================

-- Users (extends Supabase auth.users)
create table if not exists public.users (
  id                   uuid references auth.users(id) on delete cascade primary key,
  email                text,
  display_name         text,
  baby_birth_date      date,
  birth_type           text check (birth_type in ('natural','assisted','planned_csection','emergency_csection')),
  number_of_children   int,
  is_first_of_type     boolean,
  weeks_since_birth    text,
  recovery_focus       text,
  weekly_routine_target int default 3,
  partner_invite_token text unique,
  push_subscription    jsonb,
  reminder_times       text[],
  created_at           timestamptz default now()
);

-- Symptom logs
create table if not exists public.symptom_logs (
  id           uuid default gen_random_uuid() primary key,
  user_id      uuid references public.users(id) on delete cascade not null,
  logged_at    timestamptz default now(),
  log_type     text check (log_type in ('checkin','quick')) not null,
  category     text check (category in ('physical','mental','sleep','feeding')) not null,
  symptom_key  text not null,
  severity     smallint check (severity between 1 and 5) not null,
  note         text,
  is_custom    boolean default false,
  created_at   timestamptz default now()
);

-- Custom symptoms
create table if not exists public.custom_symptoms (
  id         uuid default gen_random_uuid() primary key,
  user_id    uuid references public.users(id) on delete cascade not null,
  category   text check (category in ('physical','mental','sleep','feeding')) not null,
  label      text not null,
  created_at timestamptz default now()
);

-- ── Row Level Security ──────────────────────────────────────

alter table public.users enable row level security;
alter table public.symptom_logs enable row level security;
alter table public.custom_symptoms enable row level security;

-- Users
create policy "users: read own" on public.users
  for select using (auth.uid() = id);
create policy "users: insert own" on public.users
  for insert with check (auth.uid() = id);
create policy "users: update own" on public.users
  for update using (auth.uid() = id);

-- Symptom logs
create policy "logs: read own" on public.symptom_logs
  for select using (auth.uid() = user_id);
create policy "logs: insert own" on public.symptom_logs
  for insert with check (auth.uid() = user_id);
create policy "logs: delete own" on public.symptom_logs
  for delete using (auth.uid() = user_id);

-- Custom symptoms
create policy "custom: read own" on public.custom_symptoms
  for select using (auth.uid() = user_id);
create policy "custom: insert own" on public.custom_symptoms
  for insert with check (auth.uid() = user_id);

-- ── Auto-create profile row on sign-up ──────────────────────

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email)
  values (new.id, new.email)
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

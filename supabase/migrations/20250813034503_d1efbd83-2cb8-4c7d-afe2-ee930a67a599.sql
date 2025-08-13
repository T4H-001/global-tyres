
-- 1) Create table to store owner details with user-scoped access
create table if not exists public.owner_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  full_name text not null,
  email text,
  phone text,
  vehicle_make text,
  vehicle_model text,
  vehicle_year int,
  license_plate text,
  consent_marketing boolean default false,
  consent_terms boolean default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Enable Row Level Security
alter table public.owner_profiles enable row level security;

-- Policies: users can only manage their own rows
drop policy if exists "owner_profiles_select_own" on public.owner_profiles;
create policy "owner_profiles_select_own"
  on public.owner_profiles
  for select
  using (user_id = auth.uid());

drop policy if exists "owner_profiles_insert_own" on public.owner_profiles;
create policy "owner_profiles_insert_own"
  on public.owner_profiles
  for insert
  with check (user_id = auth.uid());

drop policy if exists "owner_profiles_update_own" on public.owner_profiles;
create policy "owner_profiles_update_own"
  on public.owner_profiles
  for update
  using (user_id = auth.uid());

drop policy if exists "owner_profiles_delete_own" on public.owner_profiles;
create policy "owner_profiles_delete_own"
  on public.owner_profiles
  for delete
  using (user_id = auth.uid());

-- Trigger to maintain updated_at automatically
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists set_updated_at on public.owner_profiles;
create trigger set_updated_at
before update on public.owner_profiles
for each row
execute function public.set_updated_at();

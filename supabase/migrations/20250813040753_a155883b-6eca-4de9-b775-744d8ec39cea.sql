
-- 1) Owner profiles: dev-friendly RLS and a safe default user_id

-- Ensure pgcrypto for gen_random_uuid (usually already enabled)
create extension if not exists pgcrypto;

-- Set a default for user_id so inserts without auth still get a value.
alter table public.owner_profiles
  alter column user_id set default gen_random_uuid();

-- Keep NOT NULL on user_id (default will satisfy it). If it was nullable, you can re-enforce:
-- alter table public.owner_profiles alter column user_id set not null;

-- Allow anonymous role to read/write owner_profiles during development.
-- This co-exists with your existing authenticated-user policies.
drop policy if exists "owner_profiles_dev_anon_all" on public.owner_profiles;
create policy "owner_profiles_dev_anon_all"
  on public.owner_profiles
  for all
  to anon
  using (true)
  with check (true);


-- 2) Enforce Australian state codes at the DB layer

-- lrs_businesses.state must be AU code or NULL
alter table public.lrs_businesses
  drop constraint if exists lrs_businesses_state_au_check;
alter table public.lrs_businesses
  add constraint lrs_businesses_state_au_check
  check (
    state is null or state in ('NSW','VIC','QLD','WA','SA','TAS','ACT','NT')
  );

-- tyre_registrations.location_state must be AU code or NULL
alter table public.tyre_registrations
  drop constraint if exists tyre_registrations_location_state_au_check;
alter table public.tyre_registrations
  add constraint tyre_registrations_location_state_au_check
  check (
    location_state is null or location_state in ('NSW','VIC','QLD','WA','SA','TAS','ACT','NT')
  );

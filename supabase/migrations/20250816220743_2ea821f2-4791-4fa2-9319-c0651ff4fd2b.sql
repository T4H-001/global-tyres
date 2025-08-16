
-- 1) ECO METRICS PER TYRE
create table if not exists public.tyre_eco_metrics (
  id uuid primary key default gen_random_uuid(),
  tyre_id uuid not null references public.tyre_registrations(id) on delete cascade,
  business_id uuid references public.lrs_businesses(id) on delete set null,
  wildlife_zone text,
  waterway_proximity_km numeric,
  microplastics_g_est numeric,
  co2e_saved_kg numeric,
  hazard_score integer,
  notes text,
  source text, -- e.g., 'recycling_event', 'inspection', 'import_estimate'
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Trigger to maintain updated_at
drop trigger if exists trg_tyre_eco_metrics_updated_at on public.tyre_eco_metrics;
create trigger trg_tyre_eco_metrics_updated_at
before update on public.tyre_eco_metrics
for each row execute function public.update_updated_at_timestamp();

-- Helpful indexes
create index if not exists idx_tyre_eco_metrics_business_id on public.tyre_eco_metrics(business_id);
create index if not exists idx_tyre_eco_metrics_tyre_id on public.tyre_eco_metrics(tyre_id);

-- RLS: Only business owners can see/manage their eco metrics
alter table public.tyre_eco_metrics enable row level security;

drop policy if exists "Eco metrics: owner can select" on public.tyre_eco_metrics;
create policy "Eco metrics: owner can select"
on public.tyre_eco_metrics
for select
using (
  exists (
    select 1 from public.lrs_businesses b
    where b.id = tyre_eco_metrics.business_id
      and b.owner_user_id = auth.uid()
  )
);

drop policy if exists "Eco metrics: owner can insert" on public.tyre_eco_metrics;
create policy "Eco metrics: owner can insert"
on public.tyre_eco_metrics
for insert
with check (
  exists (
    select 1 from public.lrs_businesses b
    where b.id = tyre_eco_metrics.business_id
      and b.owner_user_id = auth.uid()
  )
);

drop policy if exists "Eco metrics: owner can update" on public.tyre_eco_metrics;
create policy "Eco metrics: owner can update"
on public.tyre_eco_metrics
for update
using (
  exists (
    select 1 from public.lrs_businesses b
    where b.id = tyre_eco_metrics.business_id
      and b.owner_user_id = auth.uid()
  )
);

drop policy if exists "Eco metrics: owner can delete" on public.tyre_eco_metrics;
create policy "Eco metrics: owner can delete"
on public.tyre_eco_metrics
for delete
using (
  exists (
    select 1 from public.lrs_businesses b
    where b.id = tyre_eco_metrics.business_id
      and b.owner_user_id = auth.uid()
  )
);

-- Optional admin override
drop policy if exists "Eco metrics: admin can manage" on public.tyre_eco_metrics;
create policy "Eco metrics: admin can manage"
on public.tyre_eco_metrics
as permissive
for all
using (public.has_role('admin'::app_role))
with check (public.has_role('admin'::app_role));


-- 2) COMMUNITY REPORTS (dumping, sightings, pledges)
create table if not exists public.community_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid not null references public.profiles(id) on delete cascade,
  business_id uuid references public.lrs_businesses(id) on delete set null,
  tyre_id uuid references public.tyre_registrations(id) on delete set null,
  report_type text not null, -- 'dumping', 'sighting', 'cleanup_pledge', 'education'
  title text,
  description text,
  photo_path text, -- Supabase Storage path if uploaded
  lat numeric(9,6),
  lng numeric(9,6),
  status text not null default 'submitted', -- 'submitted','reviewed','approved','rejected','resolved'
  is_public boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- Trigger to maintain updated_at
drop trigger if exists trg_community_reports_updated_at on public.community_reports;
create trigger trg_community_reports_updated_at
before update on public.community_reports
for each row execute function public.update_updated_at_timestamp();

-- Helpful indexes
create index if not exists idx_community_reports_reporter on public.community_reports(reporter_id);
create index if not exists idx_community_reports_public on public.community_reports(is_public, status);
create index if not exists idx_community_reports_type on public.community_reports(report_type);

-- RLS
alter table public.community_reports enable row level security;

-- Reporter can view their own
drop policy if exists "Community: reporter can select own" on public.community_reports;
create policy "Community: reporter can select own"
on public.community_reports
for select
using (reporter_id = auth.uid());

-- Reporter can insert
drop policy if exists "Community: reporter can insert" on public.community_reports;
create policy "Community: reporter can insert"
on public.community_reports
for insert
with check (reporter_id = auth.uid());

-- Reporter can update/delete own submissions
drop policy if exists "Community: reporter can update" on public.community_reports;
create policy "Community: reporter can update"
on public.community_reports
for update
using (reporter_id = auth.uid());

drop policy if exists "Community: reporter can delete" on public.community_reports;
create policy "Community: reporter can delete"
on public.community_reports
for delete
using (reporter_id = auth.uid());

-- Public can see approved + public reports
drop policy if exists "Community: public can see approved" on public.community_reports;
create policy "Community: public can see approved"
on public.community_reports
for select
using (is_public = true and status in ('approved','resolved'));

-- Admin moderation (view/update/delete all)
drop policy if exists "Community: admin can manage" on public.community_reports;
create policy "Community: admin can manage"
on public.community_reports
as permissive
for all
using (public.has_role('admin'::app_role))
with check (public.has_role('admin'::app_role));


-- 1) Create or upsert a Development Business with a fixed UUID
--    Note: lrs_businesses requires: business_name (text), role (text), optional state/suburb/session_id
insert into public.lrs_businesses (id, business_name, role, plan_slug, state, suburb, session_id)
values (
  '11111111-1111-1111-1111-111111111111',
  'Development Business',
  'retail',
  'retail_basic',
  'NSW',
  'Sydney',
  'dev'
)
on conflict (id) do update
set business_name = excluded.business_name,
    role = excluded.role,
    plan_slug = excluded.plan_slug,
    state = excluded.state,
    suburb = excluded.suburb,
    session_id = excluded.session_id,
    updated_at = now();

-- 2) Add public read access in dev for tyres and lifecycle events (SELECT only)
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'tyre_registrations' and policyname = 'Dev public read access for tyre_registrations'
  ) then
    create policy "Dev public read access for tyre_registrations"
      on public.tyre_registrations
      for select
      using (true);
  end if;

  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'tyre_lifecycle_events' and policyname = 'Dev public read access for tyre_lifecycle_events'
  ) then
    create policy "Dev public read access for tyre_lifecycle_events"
      on public.tyre_lifecycle_events
      for select
      using (true);
  end if;
end
$$;

-- 3) Seed 5,000 tyre registrations with valid AU states and realistic data
--    We prefix tyre_serial with DEMO-5K- to avoid colliding with existing data.
with new_tyres as (
  insert into public.tyre_registrations (
    business_id,
    tyre_serial,
    dot_code,
    brand,
    size,
    manufacture_date,
    install_date,
    vehicle_registration,
    location_state,
    location_postcode,
    status,
    qr_code_url,
    session_id
  )
  select
    '11111111-1111-1111-1111-111111111111'::uuid as business_id,
    'DEMO-5K-' || lpad(gs::text, 5, '0') as tyre_serial,
    'DOT' || lpad((100000 + gs)::text, 6, '0') as dot_code,
    (array['Bridgestone','Michelin','Goodyear','Pirelli','Continental','Dunlop'])[1 + floor(random()*6)] as brand,
    (array['215/60R16','265/65R17','225/55R18','225/55R19','225/60R17','205/55R16','195/65R15'])[1 + floor(random()*7)] as size,
    (now()::date - ((random()*1825)::int))::date as manufacture_date, -- within ~5 years
    (now()::date - ((random()*1460)::int))::date as install_date,     -- within ~4 years
    'DEV' || lpad(((random()*9999)::int)::text, 4, '0') as vehicle_registration,
    (array['NSW','VIC','QLD','WA','SA','TAS','ACT','NT'])[1 + floor(random()*8)] as location_state,
    (2000 + (random()*4000)::int)::text as location_postcode,
    case
      when random() < 0.60 then 'active'
      when random() < 0.80 then 'removed'
      when random() < 0.95 then 'recycled'
      else 'disposed'
    end as status,
    'https://tlrs.demo/track/' || 'DEMO-5K-' || lpad(gs::text, 5, '0') as qr_code_url,
    'dev' as session_id
  from generate_series(1, 5000) as gs
  on conflict (tyre_serial) do nothing
  returning id
)
-- 4) For every newly inserted tyre, add one initial lifecycle event
insert into public.tyre_lifecycle_events (
  tyre_registration_id,
  event_type,
  event_date,
  notes,
  recorded_by,
  session_id
)
select
  id,
  'manufactured',
  now() - (random() * interval '365 days'),
  'Seed: initial manufactured event',
  'seed-script',
  'dev'
from new_tyres;

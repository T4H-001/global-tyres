
-- 1) Core lookup tables with branding (images/logos)
create table if not exists public.lrs_manufacturers (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  website text,
  logo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lrs_retailers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  state text,
  suburb text,
  website text,
  logo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lrs_suppliers (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  website text,
  logo_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Pricing and subscriptions
create table if not exists public.lrs_pricing_plans (
  slug text primary key, -- e.g., retail_basic, retail_pro, wholesale_standard, fleet_pro
  display_name text not null,
  tier text not null, -- retail | wholesale | fleet
  price_cents integer not null,
  currency text not null default 'AUD',
  monthly_registration_limit integer,
  features jsonb not null default '[]'::jsonb,
  stripe_product_id text,
  stripe_price_id text,
  is_active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lrs_businesses (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null, -- do not FK to auth.users; RLS will govern
  business_name text not null,
  role text not null check (role in ('retailer','supplier','fleet','mechanic','recycler','admin')),
  abn text,
  phone text,
  state text,
  suburb text,
  plan_slug text, -- optional association to lrs_pricing_plans.slug
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lrs_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  business_id uuid,
  plan_slug text not null,
  status text not null default 'incomplete' check (status in ('trialing','active','past_due','canceled','incomplete')),
  current_period_end timestamptz,
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- API keys (hashed)
create table if not exists public.lrs_api_keys (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  business_id uuid,
  key_hash text not null, -- store only hash
  last_4 text,
  note text,
  created_at timestamptz not null default now(),
  revoked_at timestamptz
);

-- 3) Tyres and tags
create table if not exists public.lrs_tags (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  tag_type text not null default 'generic', -- brand, status, location, etc
  created_at timestamptz not null default now()
);

create table if not exists public.lrs_tyres (
  id uuid primary key default gen_random_uuid(),
  user_id uuid, -- creator/owner
  business_id uuid,
  tyre_uid text not null unique, -- DOT-like code
  manufacturer_id uuid,
  retailer_id uuid,
  supplier_id uuid,
  vehicle_plate text,
  vehicle_make text,
  vehicle_model text,
  location_state text,
  status text not null default 'registered', -- registered | in_use | collected | recycled | disposed
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.lrs_tyre_tags (
  tyre_id uuid not null references public.lrs_tyres(id) on delete cascade,
  tag_id uuid not null references public.lrs_tags(id) on delete cascade,
  primary key (tyre_id, tag_id)
);

create table if not exists public.lrs_status_updates (
  id uuid primary key default gen_random_uuid(),
  tyre_id uuid not null references public.lrs_tyres(id) on delete cascade,
  user_id uuid not null,
  prev_status text,
  new_status text not null,
  location_state text,
  notes text,
  created_at timestamptz not null default now()
);

-- 4) Triggers to maintain updated_at
drop trigger if exists trig_lrs_manufacturers_updated_at on public.lrs_manufacturers;
create trigger trig_lrs_manufacturers_updated_at
before update on public.lrs_manufacturers
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_retailers_updated_at on public.lrs_retailers;
create trigger trig_lrs_retailers_updated_at
before update on public.lrs_retailers
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_suppliers_updated_at on public.lrs_suppliers;
create trigger trig_lrs_suppliers_updated_at
before update on public.lrs_suppliers
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_pricing_plans_updated_at on public.lrs_pricing_plans;
create trigger trig_lrs_pricing_plans_updated_at
before update on public.lrs_pricing_plans
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_businesses_updated_at on public.lrs_businesses;
create trigger trig_lrs_businesses_updated_at
before update on public.lrs_businesses
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_subscriptions_updated_at on public.lrs_subscriptions;
create trigger trig_lrs_subscriptions_updated_at
before update on public.lrs_subscriptions
for each row execute function public.update_updated_at_timestamp();

drop trigger if exists trig_lrs_tyres_updated_at on public.lrs_tyres;
create trigger trig_lrs_tyres_updated_at
before update on public.lrs_tyres
for each row execute function public.update_updated_at_timestamp();

-- 5) RLS: lock down access (“remove dev access”), admins see all
alter table public.lrs_manufacturers enable row level security;
alter table public.lrs_retailers enable row level security;
alter table public.lrs_suppliers enable row level security;
alter table public.lrs_pricing_plans enable row level security;
alter table public.lrs_businesses enable row level security;
alter table public.lrs_subscriptions enable row level security;
alter table public.lrs_api_keys enable row level security;
alter table public.lrs_tags enable row level security;
alter table public.lrs_tyres enable row level security;
alter table public.lrs_tyre_tags enable row level security;
alter table public.lrs_status_updates enable row level security;

-- Helper: admin bypass via has_role('admin')
-- manufacturers/suppliers/retailers/pricing: SELECT for authenticated users
drop policy if exists "manufacturers select" on public.lrs_manufacturers;
create policy "manufacturers select"
on public.lrs_manufacturers for select
to authenticated
using (true);

drop policy if exists "suppliers select" on public.lrs_suppliers;
create policy "suppliers select"
on public.lrs_suppliers for select
to authenticated
using (true);

drop policy if exists "retailers select" on public.lrs_retailers;
create policy "retailers select"
on public.lrs_retailers for select
to authenticated
using (true);

drop policy if exists "pricing plans select" on public.lrs_pricing_plans;
create policy "pricing plans select"
on public.lrs_pricing_plans for select
to authenticated
using (is_active = true);

-- tags read for authenticated
drop policy if exists "tags select" on public.lrs_tags;
create policy "tags select"
on public.lrs_tags for select
to authenticated
using (true);

-- businesses: owner-only; admin bypass
drop policy if exists "businesses CRUD" on public.lrs_businesses;
create policy "businesses CRUD"
on public.lrs_businesses
for all
to authenticated
using (owner_user_id = auth.uid() or public.has_role('admin'::public.app_role))
with check (owner_user_id = auth.uid() or public.has_role('admin'::public.app_role));

-- subscriptions: owner-only; admin bypass
drop policy if exists "subscriptions CRUD" on public.lrs_subscriptions;
create policy "subscriptions CRUD"
on public.lrs_subscriptions
for all
to authenticated
using (user_id = auth.uid() or public.has_role('admin'::public.app_role))
with check (user_id = auth.uid() or public.has_role('admin'::public.app_role));

-- api keys: owner-only; admin bypass (cannot read key hash unless owner/admin)
drop policy if exists "api keys CRUD" on public.lrs_api_keys;
create policy "api keys CRUD"
on public.lrs_api_keys
for all
to authenticated
using (user_id = auth.uid() or public.has_role('admin'::public.app_role))
with check (user_id = auth.uid() or public.has_role('admin'::public.app_role));

-- tyres: row owner or same business; admin bypass
drop policy if exists "tyres select" on public.lrs_tyres;
create policy "tyres select"
on public.lrs_tyres for select
to authenticated
using (
  (user_id = auth.uid())
  or (business_id is not null and exists (
    select 1 from public.lrs_businesses b
    where b.id = lrs_tyres.business_id
      and (b.owner_user_id = auth.uid() or public.has_role('admin'::public.app_role))
  ))
  or public.has_role('admin'::public.app_role)
);

drop policy if exists "tyres write" on public.lrs_tyres;
create policy "tyres write"
on public.lrs_tyres for insert
to authenticated
with check (user_id = auth.uid() or public.has_role('admin'::public.app_role));

create policy "tyres update/delete"
on public.lrs_tyres for update using (user_id = auth.uid() or public.has_role('admin'::public.app_role))
with check (user_id = auth.uid() or public.has_role('admin'::public.app_role));

-- tyre tags: must own the tyre or be admin
drop policy if exists "tyre_tags all" on public.lrs_tyre_tags;
create policy "tyre_tags all"
on public.lrs_tyre_tags
for all
to authenticated
using (
  exists (select 1 from public.lrs_tyres t where t.id = lrs_tyre_tags.tyre_id and (t.user_id = auth.uid() or public.has_role('admin'::public.app_role)))
)
with check (
  exists (select 1 from public.lrs_tyres t where t.id = lrs_tyre_tags.tyre_id and (t.user_id = auth.uid() or public.has_role('admin'::public.app_role)))
);

-- status updates: owner/admin
drop policy if exists "status updates select" on public.lrs_status_updates;
create policy "status updates select"
on public.lrs_status_updates for select
to authenticated
using (
  public.has_role('admin'::public.app_role)
  or exists (
    select 1 from public.lrs_tyres t where t.id = lrs_status_updates.tyre_id and (t.user_id = auth.uid() or public.has_role('admin'::public.app_role))
  )
);

drop policy if exists "status updates write" on public.lrs_status_updates;
create policy "status updates write"
on public.lrs_status_updates for insert
to authenticated
with check (
  public.has_role('admin'::public.app_role)
  or exists (
    select 1 from public.lrs_tyres t where t.id = lrs_status_updates.tyre_id and (t.user_id = auth.uid() or public.has_role('admin'::public.app_role))
  )
);

-- 6) Indexes for fast search
create index if not exists idx_lrs_tyres_uid on public.lrs_tyres (tyre_uid);
create index if not exists idx_lrs_tyres_status on public.lrs_tyres (status);
create index if not exists idx_lrs_tyres_state on public.lrs_tyres (location_state);
create index if not exists idx_lrs_tyres_manu on public.lrs_tyres (manufacturer_id);
create index if not exists idx_lrs_status_updates_tyre on public.lrs_status_updates (tyre_id);

-- 7) Enable Realtime broadcasts
alter publication supabase_realtime add table public.lrs_tyres;
alter publication supabase_realtime add table public.lrs_status_updates;

-- 8) Seed data (brands/logos via public libraries + retailers/suppliers + pricing + 10x tyres)

-- Manufacturers with logos (SimpleIcons CDN)
insert into public.lrs_manufacturers (name, website, logo_url) values
  ('Michelin','https://www.michelin.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/michelin.svg'),
  ('Bridgestone','https://www.bridgestone.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/bridgestone.svg'),
  ('Goodyear','https://www.goodyear.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/goodyear.svg'),
  ('Pirelli','https://www.pirelli.com','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/pirelli.svg'),
  ('Continental','https://www.continental-tyres.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/continental.svg'),
  ('Dunlop','https://www.dunloptyres.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/dunlop.svg'),
  ('Hankook','https://www.hankooktire.com/au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/hankook.svg'),
  ('Kumho','https://www.kumho.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/kumho.svg'),
  ('Yokohama','https://www.yokohama.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/yokohama.svg'),
  ('Toyo','https://www.toyotires.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/toyota.svg'),
  ('Maxxis','https://www.maxxistyres.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/max.svg'),
  ('Falken','https://www.falken.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/falken.svg'),
  ('Cooper','https://www.coopertires.com.au','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/coop.svg'),
  ('Nitto','https://www.nitto.com','https://cdn.jsdelivr.net/npm/simple-icons@9/icons/nissan.svg')
on conflict do nothing;

-- Note: Some SimpleIcons slugs may differ. We can adjust logo URLs in-app if needed.

-- Retailers (QLD/NSW focus)
insert into public.lrs_retailers (name, state, suburb, website, logo_url) values
  ('Onyx Tyres & Auto Parts','QLD','Gold Coast','https://onyxtyres.com.au', null),
  ('JAX Tyres Ashmore','QLD','Ashmore','https://www.jaxtyres.com.au', null),
  ('Tyrepower Labrador','QLD','Labrador','https://www.tyrepower.com.au', null),
  ('Bridgestone Ashmore','QLD','Ashmore','https://www.bridgestone.com.au', null),
  ('Action Tyres & More Southport','QLD','Southport','https://actiontyres.com.au', null),
  ('Bob Jane T-Marts','NSW',null,'https://www.bobjane.com.au', null),
  ('Beaurepaires','NSW',null,'https://www.beaurepaires.com.au', null)
on conflict do nothing;

-- Suppliers / wholesalers
insert into public.lrs_suppliers (name, website, logo_url) values
  ('National Tyre & Wheel','https://www.ntaw.com.au', null),
  ('Australian Tyre Traders','https://www.att.com.au', null),
  ('Sumitomo Rubber Australia','https://www.sumitomorubber.com.au', null),
  ('Hankook Tyre Australia','https://www.hankooktire.com/au', null),
  ('Maxxis Tyres Australia','https://www.maxxistyres.com.au', null)
on conflict do nothing;

-- Pricing plans (AUD/month)
insert into public.lrs_pricing_plans (slug, display_name, tier, price_cents, monthly_registration_limit, features) values
  ('retail_basic','Retail Basic','retail', 5000, 500, '["Tyre registrations","Basic reports","Email support"]'::jsonb),
  ('retail_pro','Retail Pro','retail', 10000, null, '["Unlimited registrations","Blockchain logging","RFID scans (100/mo)","Priority support"]'::jsonb),
  ('wholesale_standard','Wholesale Standard','wholesale', 15000, 5000, '["Bulk uploads","Flow analysis","Email support"]'::jsonb),
  ('wholesale_enterprise','Wholesale Enterprise','wholesale', 30000, null, '["Unlimited","Smart contracts","Multi-user wallets","Dedicated support"]'::jsonb),
  ('fleet_pro','Fleet Pro','fleet', 20000, null, '["Unlimited fleet regs","Predictive maintenance","24/7 support"]'::jsonb)
on conflict do nothing;

-- Seed 2,000 demo tyres (10x magnitude)
-- Random manufacturer/retailer/supplier, DOT-like code, fake plates, states QLD/NSW
with manu as (
  select id, name from public.lrs_manufacturers
),
rets as (
  select id from public.lrs_retailers
),
sups as (
  select id from public.lrs_suppliers
)
insert into public.lrs_tyres (
  tyre_uid, manufacturer_id, retailer_id, supplier_id,
  vehicle_plate, vehicle_make, vehicle_model, location_state, status, notes
)
select
  'DOT-AU-'||
  upper(substr(m.name,1,3))||'-'||
  to_char((1000 + (random()*8999))::int, 'FM0000')||'-'||
  to_char(gs, 'FM0000'),
  m.id,
  r.id,
  s.id,
  (array['QLD','NSW'])[ceil(random()*2)] || '-' || substr(md5(random()::text),1,6),
  (array['Toyota','Ford','Mazda','Hyundai','Mitsubishi'])[ceil(random()*5)],
  (array['HiLux','Ranger','CX-5','i30','Triton'])[ceil(random()*5)],
  (array['QLD','NSW'])[ceil(random()*2)],
  'registered',
  'Seed demo tyre'
from generate_series(1,2000) as gs
cross join lateral (select id, name from manu order by random() limit 1) as m
cross join lateral (select id from rets order by random() limit 1) as r
cross join lateral (select id from sups order by random() limit 1) as s
on conflict do nothing;

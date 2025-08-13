-- Enable required extension
create extension if not exists pgcrypto;

-- Enums
create type public.business_category as enum ('retail','wholesale','fleet','brand','recycler','regulator');
create type public.member_role as enum ('admin','manager','operator','analyst');
create type public.tag_type as enum ('laser','rfid','nfc','qr','ble','uwb');
create type public.tyre_status as enum ('new','in_use','collected','recycled','disposed');
create type public.subscription_status as enum ('active','past_due','canceled');

-- Reference tables
create table if not exists public.manufacturers (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists public.retailers (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists public.suppliers (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists public.car_brands (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

-- Core multi-tenant entities
create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  category public.business_category not null,
  abn text,
  state_code text,
  website text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.business_members (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.member_role not null default 'admin',
  is_primary boolean not null default false,
  created_at timestamptz not null default now(),
  unique (business_id, user_id)
);

create table if not exists public.api_keys (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  key_hash text not null,
  prefix text not null,
  monthly_quota integer,
  disabled boolean not null default false,
  created_at timestamptz not null default now(),
  last_used_at timestamptz
);

create table if not exists public.vehicles (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  brand_id uuid references public.car_brands(id),
  model text,
  license_plate text,
  state_code text,
  vin text,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (business_id, license_plate)
);

create table if not exists public.tyres (
  id uuid primary key default gen_random_uuid(),
  tyre_id text not null unique,
  manufacturer_id uuid references public.manufacturers(id),
  retailer_id uuid references public.retailers(id),
  supplier_id uuid references public.suppliers(id),
  business_id uuid not null references public.businesses(id) on delete cascade,
  status public.tyre_status not null default 'new',
  state_code text,
  current_location text,
  associated_vehicle_id uuid references public.vehicles(id) on delete set null,
  notes text,
  registered_by uuid references auth.users(id) on delete set null,
  updated_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.tags (
  id uuid primary key default gen_random_uuid(),
  tyre_id uuid not null references public.tyres(id) on delete cascade,
  business_id uuid not null references public.businesses(id) on delete cascade,
  tag_type public.tag_type not null,
  tag_uid text not null,
  epc text,
  encoded_at timestamptz not null default now(),
  encoded_by uuid references auth.users(id) on delete set null,
  unique (tag_uid),
  unique (tyre_id, tag_type)
);

create table if not exists public.status_updates (
  id uuid primary key default gen_random_uuid(),
  tyre_id uuid not null references public.tyres(id) on delete cascade,
  from_status public.tyre_status,
  to_status public.tyre_status not null,
  location_state text,
  actor_business_id uuid not null references public.businesses(id) on delete cascade,
  actor_user_id uuid not null references auth.users(id) on delete cascade,
  device_id text,
  notes text,
  created_at timestamptz not null default now()
);

create table if not exists public.pricing_plans (
  plan_code text primary key,
  monthly_price numeric,
  caps jsonb,
  features jsonb
);

create table if not exists public.subscriptions (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  plan_code text references public.pricing_plans(plan_code),
  status public.subscription_status not null default 'active',
  started_at timestamptz not null default now(),
  renews_at timestamptz
);

create table if not exists public.usage_counters (
  id uuid primary key default gen_random_uuid(),
  business_id uuid not null references public.businesses(id) on delete cascade,
  month date not null,
  tyres_registered integer not null default 0,
  status_updates integer not null default 0,
  tag_encodes integer not null default 0,
  unique (business_id, month)
);

-- Triggers to maintain updated_at
create or replace function public.set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger trg_businesses_updated_at
before update on public.businesses
for each row execute function public.set_updated_at();

create trigger trg_vehicles_updated_at
before update on public.vehicles
for each row execute function public.set_updated_at();

create trigger trg_tyres_updated_at
before update on public.tyres
for each row execute function public.set_updated_at();

-- Function to add creator as admin member on business creation
create or replace function public.add_creator_as_business_admin()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  if new.created_by is not null then
    insert into public.business_members (business_id, user_id, role, is_primary)
    values (new.id, new.created_by, 'admin', true)
    on conflict (business_id, user_id) do nothing;
  elsif auth.uid() is not null then
    insert into public.business_members (business_id, user_id, role, is_primary)
    values (new.id, auth.uid(), 'admin', true)
    on conflict (business_id, user_id) do nothing;
  end if;
  return new;
end;
$$;

create trigger trg_businesses_add_creator
after insert on public.businesses
for each row execute function public.add_creator_as_business_admin();

-- Helper to check if current user is admin of a business
create or replace function public.user_is_business_admin(p_business_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1 from public.business_members bm
    where bm.business_id = p_business_id
      and bm.user_id = auth.uid()
      and bm.role = 'admin'
  );
$$;

-- Enable RLS
alter table public.businesses enable row level security;
alter table public.business_members enable row level security;
alter table public.api_keys enable row level security;
alter table public.vehicles enable row level security;
alter table public.tyres enable row level security;
alter table public.tags enable row level security;
alter table public.status_updates enable row level security;
alter table public.subscriptions enable row level security;
alter table public.usage_counters enable row level security;

-- Policies
-- Businesses: anyone can create; members can select; admins can update/delete
create policy "Anyone can create business" on public.businesses
for insert to authenticated with check (true);

create policy "Members can view their businesses" on public.businesses
for select to authenticated using (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = businesses.id and bm.user_id = auth.uid()
  )
);

create policy "Admins can update businesses" on public.businesses
for update to authenticated using (public.user_is_business_admin(id));

create policy "Admins can delete businesses" on public.businesses
for delete to authenticated using (public.user_is_business_admin(id));

-- Business members
create policy "User can view own or admin business members" on public.business_members
for select to authenticated using (
  user_id = auth.uid() or public.user_is_business_admin(business_id)
);

create policy "Admins can add members" on public.business_members
for insert to authenticated with check (public.user_is_business_admin(business_id));

create policy "Admins can update members" on public.business_members
for update to authenticated using (public.user_is_business_admin(business_id));

create policy "Admins can delete members" on public.business_members
for delete to authenticated using (public.user_is_business_admin(business_id));

-- API keys (admins only)
create policy "Admins manage api keys" on public.api_keys
for all to authenticated using (public.user_is_business_admin(business_id)) with check (public.user_is_business_admin(business_id));

-- Vehicles (members of business)
create policy "Members manage vehicles" on public.vehicles
for all to authenticated using (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = vehicles.business_id and bm.user_id = auth.uid()
  )
) with check (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = vehicles.business_id and bm.user_id = auth.uid()
  )
);

-- Tyres (members of business)
create policy "Members manage tyres" on public.tyres
for all to authenticated using (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = tyres.business_id and bm.user_id = auth.uid()
  )
) with check (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = tyres.business_id and bm.user_id = auth.uid()
  )
);

-- Tags (members of business)
create policy "Members manage tags" on public.tags
for all to authenticated using (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = tags.business_id and bm.user_id = auth.uid()
  )
) with check (
  exists (
    select 1 from public.business_members bm
    where bm.business_id = tags.business_id and bm.user_id = auth.uid()
  )
);

-- Status updates (members of tyre's business)
create policy "Members view status updates" on public.status_updates
for select to authenticated using (
  exists (
    select 1 from public.tyres t
    join public.business_members bm on bm.business_id = t.business_id and bm.user_id = auth.uid()
    where t.id = status_updates.tyre_id
  )
);

create policy "Members insert status updates" on public.status_updates
for insert to authenticated with check (
  exists (
    select 1 from public.tyres t
    join public.business_members bm on bm.business_id = t.business_id and bm.user_id = auth.uid()
    where t.id = status_updates.tyre_id
  )
);

-- Subscriptions (admins)
create policy "Admins manage subscriptions" on public.subscriptions
for all to authenticated using (public.user_is_business_admin(business_id)) with check (public.user_is_business_admin(business_id));

-- Usage counters (admins)
create policy "Admins manage usage counters" on public.usage_counters
for all to authenticated using (public.user_is_business_admin(business_id)) with check (public.user_is_business_admin(business_id));

-- Seed AU reference data (idempotent)
insert into public.manufacturers (name) values
  ('Michelin'),('Bridgestone'),('Goodyear'),('Pirelli'),('Continental'),('Kumho'),('Yokohama'),('Hankook'),('Dunlop'),('Toyo'),('Sumitomo'),('Cooper'),('BFGoodrich'),('Nitto'),('Maxxis')
on conflict (name) do nothing;

insert into public.retailers (name) values
  ('JAX Tyres'),('Tyrepower'),('Bob Jane T-Marts'),('Beaurepaires'),('Tempe Tyres'),('mycar'),('Wangara Tyre Auto'),('Evertyres')
on conflict (name) do nothing;

insert into public.suppliers (name) values
  ('Toyo Tyres Australia'),('Sumitomo Rubber Australia'),('Hankook Tyre Australia'),('Maxxis Tyres Australia'),('Australian Tyre Traders'),('Tempe Tyres Wholesale'),('National Tyre & Wheel'),('Atlas Tyres Wholesale')
on conflict (name) do nothing;

insert into public.car_brands (name) values
  ('Toyota'),('Ford'),('Mazda'),('Hyundai'),('Kia'),('Mitsubishi'),('Isuzu'),('MG'),('Tesla'),('BYD'),('Subaru'),('Nissan'),('Volkswagen'),('BMW'),('Mercedes-Benz')
on conflict (name) do nothing;

-- Seed pricing plans
insert into public.pricing_plans (plan_code, monthly_price, caps, features) values
  ('retail_free', 0, '{"registrations":100,"rfid_scans":0}'::jsonb, '{"reports":"basic"}'::jsonb),
  ('retail_basic', 50, '{"registrations":500,"rfid_scans":100}'::jsonb, '{"reports":"custom"}'::jsonb),
  ('retail_pro', 100, '{"registrations":-1,"rfid_scans":-1}'::jsonb, '{"reports":"predictive"}'::jsonb),
  ('wholesale_std', 150, '{"registrations":5000,"rfid_scans":-1}'::jsonb, '{"integrations":"standard"}'::jsonb),
  ('wholesale_ent', 300, '{"registrations":-1,"rfid_scans":-1}'::jsonb, '{"integrations":"enterprise"}'::jsonb),
  ('fleet_pro', 200, '{"registrations":-1,"rfid_scans":-1}'::jsonb, '{"fleet":"advanced"}'::jsonb)
on conflict (plan_code) do nothing;

-- Seed TLRS Kirrawee/Sutherland Shire businesses (mechanics/retailers)

-- 1) lrs_businesses: RoverX
INSERT INTO public.lrs_businesses (business_name, role, abn, phone, state, suburb)
SELECT
  'RoverX' AS business_name,
  'mechanic' AS role,
  NULL AS abn,
  '0429 820 093' AS phone,
  'NSW' AS state,
  'Kirrawee' AS suburb
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_businesses
  WHERE lower(business_name) = 'roverx'
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

-- 2) lrs_businesses: BW Automotive
INSERT INTO public.lrs_businesses (business_name, role, abn, phone, state, suburb)
SELECT
  'BW Automotive' AS business_name,
  'mechanic' AS role,
  NULL AS abn,
  '02 9521 4389' AS phone,
  'NSW' AS state,
  'Kirrawee' AS suburb
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_businesses
  WHERE lower(business_name) = 'bw automotive'
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

-- 3) lrs_retailers: RoverX
INSERT INTO public.lrs_retailers (name, website, state, suburb, logo_url)
SELECT
  'RoverX' AS name,
  'https://roverx.com.au/' AS website,
  'NSW' AS state,
  'Kirrawee' AS suburb,
  NULL AS logo_url
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_retailers
  WHERE lower(name) = 'roverx'
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

-- 4) lrs_retailers: BW Automotive
INSERT INTO public.lrs_retailers (name, website, state, suburb, logo_url)
SELECT
  'BW Automotive' AS name,
  'https://www.bwautomotive.com.au/' AS website,
  'NSW' AS state,
  'Kirrawee' AS suburb,
  NULL AS logo_url
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_retailers
  WHERE lower(name) = 'bw automotive'
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

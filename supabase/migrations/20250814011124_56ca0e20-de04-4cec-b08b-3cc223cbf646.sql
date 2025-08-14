
-- Add "Tubbys Tyres" for Kirrawee, NSW
-- 1) Ensure a business exists in lrs_businesses
INSERT INTO public.lrs_businesses (business_name, role, abn, phone, state, suburb, plan_slug, owner_user_id, session_id)
SELECT
  'Tubbys Tyres' AS business_name,
  'retailer'     AS role,
  NULL           AS abn,
  NULL           AS phone,
  'NSW'          AS state,
  'Kirrawee'     AS suburb,
  NULL           AS plan_slug,
  NULL           AS owner_user_id,
  NULL           AS session_id
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_businesses
  WHERE lower(business_name) = lower('Tubbys Tyres')
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

-- 2) Ensure a retailer record exists in lrs_retailers (used by the demo dropdown/list)
INSERT INTO public.lrs_retailers (name, suburb, state, website, logo_url)
SELECT
  'Tubbys Tyres' AS name,
  'Kirrawee'     AS suburb,
  'NSW'          AS state,
  NULL           AS website,
  NULL           AS logo_url
WHERE NOT EXISTS (
  SELECT 1 FROM public.lrs_retailers
  WHERE lower(name) = lower('Tubbys Tyres')
    AND state = 'NSW'
    AND suburb = 'Kirrawee'
);

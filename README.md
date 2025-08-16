# Tyre Recovery System – Comprehensive Guide (Engineers, End Users, Marketing)

A modern, full‑stack web app for tyre lifecycle transparency and recovery with phased tyre identification (QR codes, RFID tags). Built with Vite, React, TypeScript, Tailwind (design tokens), and shadcn‑ui. Supabase powers auth, database, storage, and Edge Functions.

**Contact**: info@globaltyres.org | HQ - Sydney, Australia


## Table of Contents
- Overview
- For End Users (Feature Guide)
- For Marketing (Content & SEO Workflows)
- For Engineers (Setup & Architecture)
- Data & Integrations
- Demo Mode
- Deployment & Operations
- Troubleshooting
- Contributing
- License


## Overview
- Purpose: Provide a simple, verifiable way to register, track, and recover tyres across the lifecycle with phased identification methods.
- Key Features:
  - **Phased Tyre Identification**: QR codes (immediate), RFID tags (future), partner data integration
  - **Enhanced Verification**: Multi-method identification with verification badges
  - Demos & Stories hub with role-based vignettes and optional voice narration
  - Tyre registration and dashboard tools with identification method selection
  - Retailer portal (onboarding, bulk upload, RFID inventory management)
  - Partners carousel (major manufacturers, retailers, recyclers)
  - Prefill helpers for smoother UX
- Live (Lovable Preview): https://lovable.dev/projects/901576d5-f4bc-4bb3-b759-687108e5297d


## For End Users (Feature Guide)
- Navigation
  - Home: Overview, benefits, and quick links
  - Demos & Stories: Role-based video vignettes showcasing value for Individuals, Retailers, Recyclers, etc. Optional narration via ElevenLabs (local only)
  - Tyre Registration & Management: Register tyres with QR/RFID identification, search, and track lifecycle events
  - Retailer Portal: Onboarding, plan selection, owner/business details, payment
  - FAQ, Terms, Privacy, Contact: Standard support/info pages

- Voice Narration (optional)
  - On the Demos page, enter your ElevenLabs API key in the field provided (stored locally in your browser) to enable voice narration of stories

- Partners Carousel
  - Shows leading partners and chains across the ecosystem
  - Logos are sourced automatically (when available) from public sources and stored in the database for reliability

- Prefill
  - In supported flows, some fields may prefill (e.g., suggested brands, location in demo mode)


## For Marketing (Content & SEO Workflows)
- Update Story & Demo Content
  - File: src/content/demos.ts
  - Add roles, vignettes, descriptions, thumbnails, and links (engineers can help validate TypeScript types)

- Partners Carousel Content
  - Managed in Supabase table lrs_partners (see Data section below)
  - You can add partner name, website, suburb/state, and logo URL; logos are auto-fetched where possible

- Images & Assets
  - Place images under src/assets and reference them in content files
  - Always provide descriptive alt text containing relevant keywords

- SEO Checklist (every page)
  - Title: Include main keyword, < 60 chars
  - Meta Description: ≤ 160 chars with target keyword
  - Single H1: Page’s primary intent + main keyword
  - Semantic HTML: header, main, section, article, nav, aside
  - Image Optimization: descriptive alt, correct sizes; lazy-load non-critical imagery
  - Structured Data: Add JSON-LD (products, articles, FAQs) where applicable
  - Canonical Tag: Avoid duplicate content issues
  - Mobile: Responsive design + proper viewport meta
  - Clean URLs: Descriptive, crawlable links

- Visual Edits (quick text/color tweaks)
  - Use Lovable’s Visual Edits for static elements to quickly change headlines, colors, and copy
  - Docs: https://docs.lovable.dev/features/visual-edit

- Messaging & Positioning
  - Emphasize: Compliance, transparency, sustainability, and ease of use
  - Audience: Individuals, Retailers, Recyclers, Councils/Government, and OEMs


## For Engineers (Setup & Architecture)

### Tech Stack
- Frontend: React 18, TypeScript, Vite
- UI: Tailwind CSS with design tokens + shadcn‑ui components
- Routing: react-router-dom
- Data: Supabase (DB, RLS, Storage), Edge Functions

### Local Development
```sh
# Requirements: Node.js 18+, npm
npm i
npm run dev
```
Project URL (Lovable): https://lovable.dev/projects/901576d5-f4bc-4bb3-b759-687108e5297d

### Project Structure (selected)
- src/pages: Top-level routes (Index, Demos, TyreRegistration, etc.)
- src/components: UI and feature components
- src/components/ui: shadcn components
- src/content/demos.ts: Demo & vignette content definitions
- src/hooks/useDemoMode.ts: Demo flag parsing + partner loading
- src/services: API and helper services
- supabase/functions: Edge Functions (e.g., fetch-partner-logos)

### Design System (Critical)
- Use semantic tokens; do not hardcode colors
- Tokens defined in src/index.css and tailwind.config.ts (HSL only)
- Extend shadcn components via variants; avoid ad-hoc class overrides
- Always ensure contrast and dark/light compatibility

### Key Pages & Components
- Demos: src/pages/Demos.tsx
  - RoleSelector: src/components/demos/RoleSelector.tsx
  - VideoCard: src/components/demos/VideoCard.tsx
  - NarrationButton: src/components/demos/NarrationButton.tsx
  - Uses react-helmet for SEO metadata
- PartnersCarousel: src/components/PartnersCarousel.tsx
- Tyre Flows: src/pages/TyreRegistration.tsx, src/pages/TyreManagement.tsx, src/components/tyre/*
- Onboarding: src/pages/Onboarding.tsx and steps under src/components/onboarding/*

### Supabase Client
- File: src/integrations/supabase/client.ts (generated)
- Uses publishable anon key; sessions persisted to localStorage

### Edge Functions
- **fetch-partner-logos**: supabase/functions/fetch-partner-logos/index.ts
  - Fetches public logos (e.g., Clearbit) and updates lrs_partners.logo_url
- **activate-rfid-tag**: supabase/functions/activate-rfid-tag/index.ts
  - Activates RFID tags and links them to tyre registrations
- **ingest-partner-data**: supabase/functions/ingest-partner-data/index.ts
  - Ingests tyre data from partner systems with validation
- **send-notification**: Email notifications for important events
- **create-payment**: Stripe payment processing
- **stripe-webhook**: Handles Stripe webhook events
- **tyres-add-event**: Adds lifecycle events to tyres
- **tyres-bulk-upload**: Bulk tyre registration processing
- **perplexity-chat**: AI-powered chat functionality
- **sync-stripe-products**: Syncs Stripe product catalog

### Coding Standards
- TypeScript everywhere; strict types in content files
- Keep components focused; avoid monoliths
- Prefer hooks for shared logic
- Avoid env variables in this environment (Vite env vars disabled)


## Data & Integrations

### Core Tables

#### Partners Table (lrs_partners)
- Purpose: Store partner metadata and stable logo URLs for the carousel and other uses
- Columns: id (uuid), name (text), website (text), suburb (text), state (text), logo_url (text), created_at, updated_at
- Access: Exposed read-only to public UI with appropriate RLS; writes via admin flows or Edge Functions

#### Tyre Registrations (tyre_registrations) - Enhanced
- Purpose: Store tyre registration data with phased identification methods
- New columns: identification_method (qr_code/rfid_tag), verification_status (pending/verified/failed), rfid_tag_id, verification_notes, verified_at
- Features: Multi-method identification, verification tracking, audit trail

#### RFID Tag Inventory (rfid_tag_inventory)
- Purpose: Manage RFID tag lifecycle and allocation
- Columns: tag_id (text), status (available/allocated/activated/decommissioned), allocated_to, allocated_at, metadata
- Features: Tag inventory management, allocation tracking, status updates

#### Partner Integrations (partner_integrations)
- Purpose: Configure data integration settings for partners
- Columns: partner_id, integration_type, endpoint_url, auth_config, field_mappings, status, last_sync_at
- Features: Flexible partner data ingestion, authentication management, field mapping

#### Data Ingestion Logs (data_ingestion_logs)
- Purpose: Track all partner data ingestion attempts and results
- Columns: partner_id, integration_type, status, records_processed, error_details, processed_at
- Features: Audit trail, error tracking, performance monitoring

### Logo Fetching
- Edge Function: fetch-partner-logos
- Behavior: For records missing logo_url, attempts to locate a public logo and persists URL for reliability

### Prefill & External Data
- Forms may prefill with:
  - Suggested brands/partners from lrs_partners
  - Location (in demo mode)
  - Optional vehicle helpers (where supported)
- ElevenLabs (optional, local): API key stored in localStorage for narration in Demos


## Demo Mode
- Enabled via URL query param demo
  - Generic: ?demo=on
  - Location-specific: ?demo=kirrawee, ?demo=sutherland, ?demo=sutherland-shire
- Effects
  - Enables partners prefill for selected areas (fallback to static demo partners if API unreachable)
  - May enable location-based copy/examples in relevant screens
- Hook: src/hooks/useDemoMode.ts


## Deployment & Operations
- Deploy via Lovable: Open the project and Share → Publish
- Supabase
  - Manage tables/policies via Lovable’s Supabase migration tool (ask in chat to apply migrations)
  - Edge Functions are located under supabase/functions/*

### Content Updates (Non-Technical)
- Demos & Stories: Edit src/content/demos.ts (work with an engineer for review)
- Partners: Add/edit rows in lrs_partners via Supabase Dashboard; logos will be fetched automatically when possible
- Images: Add under src/assets and reference in content

### Email Testing & Notifications
- Email testing interface available at `/admin/email-test` for administrators
- Test email delivery using the EmailTestInterface component
- Notifications sent via send-notification Edge Function for registration confirmations, RFID activations, etc.

### SEO & Analytics
- Sitemap: `/sitemap.xml` for search engine optimization
- Robots.txt: `/robots.txt` with sitemap reference
- Structured data implementation for enhanced search visibility
- Google Analytics integration ready (configure in environment)


## Troubleshooting
- Build/runtime errors: Check browser console and the Lovable console logs panel
- Missing logos: Trigger fetch-partner-logos Edge Function (see below)
- Narration not working: Ensure ElevenLabs key is entered on Demos page; clear localStorage key elevenLabsKey to reset
- Demo mode not active: Ensure you have the query string ?demo=on (or a supported location key)
- RFID activation issues: Check rfid_tag_inventory table for tag status and allocation
- Partner data ingestion: Review data_ingestion_logs table for error details

### Invoke Edge Function (example)
Use the Supabase REST endpoint for your project (replace the URL if needed):
```sh
curl -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <YOUR_SERVICE_OR_ANON_KEY>" \
  https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/fetch-partner-logos
```
Note: Use an appropriate key for protected routes; anon key may be sufficient if function allows it.


## Contributing
- Branch strategy: Small, focused changes
- Code style: TypeScript, design tokens, shadcn variants; avoid inline hacks
- Testing: Prefer component isolation; keep effects simple and predictable
- PR checklist
  - Types added/updated
  - SEO tags added for new pages
  - Mobile responsive checks
  - No direct color classes; tokens only


## License
Proprietary – internal use for the Tyre Recovery System project team. Contact maintainers for reuse or distribution.

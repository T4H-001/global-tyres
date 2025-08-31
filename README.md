# Augmented Humanity Platform – Comprehensive Guide

A multi-tenant AI consultancy platform offering workforce transformation tools, assessment frameworks, and agentic AI solutions. Built with Vite, React, TypeScript, Tailwind CSS design tokens, and shadcn-ui. Powered by Supabase for authentication, database, storage, and Edge Functions.

**Contact**: info@augmentedhumanity.coach | HQ - Canberra, Australia


## Table of Contents
- [Platform Overview](#platform-overview)
- [Calculators & Assessment Tools](#calculators--assessment-tools)
- [AI Services & Work Packages](#ai-services--work-packages)
- [Edge Functions & Integrations](#edge-functions--integrations)
- [For End Users](#for-end-users)
- [For Marketing](#for-marketing)
- [For Engineers](#for-engineers)
- [Data Sources & Architecture](#data-sources--architecture)
- [Multi-Tenant Configuration](#multi-tenant-configuration)
- [Deployment & Operations](#deployment--operations)
- [Contributing](#contributing)


## Platform Overview

The Augmented Humanity platform is a comprehensive AI consultancy ecosystem that empowers organisations to navigate their digital transformation journey through structured assessments, strategic planning, and implementation of agentic AI solutions.

### Core Purpose
Transform traditional workforce models through systematic AI integration, skills assessment, and strategic workforce planning.

### Key Platform Features
- **AI Readiness Assessments**: Multi-dimensional evaluation frameworks for individuals and organisations
- **Workforce Planning Tools**: Strategic resource allocation and capacity planning calculators
- **Agentic AI Marketplace**: Comprehensive catalogue of pre-built AI agents and solutions
- **Interactive Dashboards**: Role-based insights for Government, Retailers, and Recyclers
- **Training & Development**: Personalised AI upskilling pathways and competency frameworks
- **Multi-Tenant Architecture**: Scalable platform supporting multiple client organisations

### Live Environment
- **Production URL**: https://lovable.dev/projects/901576d5-f4bc-4bb3-b759-687108e5297d
- **Admin Interface**: `/admin` (authenticated access)
- **Demo Mode**: Add `?demo=on` to any URL for sample data

---

## Calculators & Assessment Tools

### 1. AI Readiness Assessment Framework
**Location**: `src/pages/Dashboard.tsx`, `src/components/tyre/EnhancedDashboard.tsx`
- **Purpose**: Evaluate individual and organisational AI maturity across multiple dimensions
- **Dimensions**: Consciousness level, technical readiness, cultural adaptability, strategic alignment
- **Output**: Personalised recommendations, skill gap analysis, implementation roadmap
- **Data Source**: `enhanced_assessments` table with 120+ SFIA role mappings

### 2. Workforce Capacity Planning Calculator
**Location**: Integrated across dashboard components
- **Purpose**: Strategic resource allocation and excess capacity identification
- **Features**: 
  - Available hours per week calculation
  - Skill-based hourly rate estimation
  - ROI projection for AI implementation
  - Cross-functional role optimisation
- **Data Source**: `excess_capacity_marketplace`, `active_agent_roster` tables

### 3. Cost-Benefit Analysis Engine
**Location**: Various service calculation components
- **Purpose**: Quantify financial impact of AI implementation
- **Calculations**:
  - Implementation costs vs. productivity gains
  - Time-to-value projections
  - Risk-adjusted ROI modeling
  - Break-even analysis
- **Data Source**: `AI_WorkPackage_Master_Template.csv`, cost modeling tables

### 4. Skills Gap Assessment Tool
**Location**: Assessment workflow components
- **Purpose**: Identify training needs and development pathways
- **Features**:
  - SFIA level mapping (Levels 1-7)
  - Competency gap identification
  - Personalised learning pathway generation
  - Progress tracking and certification
- **Data Source**: `120 SFIA Roles`, `AI_Role_Maturity_Enhanced` tables

### 5. Strategic Fit Analyser
**Location**: Advisory board components
- **Purpose**: Evaluate alignment between AI solutions and organisational objectives
- **Metrics**: Strategic impact score, technical complexity, implementation timeline
- **Data Source**: `Agentic_AI_Role_Summary_Matrix_Full` table

---

## AI Services & Work Packages

### Core Service Streams

#### 1. Assessment & Strategy (Workstream 1)
**Services**: `AI_WorkPackage_Master_Template.csv` rows 1-15
- AI Maturity Assessment
- Strategic Roadmap Development
- Stakeholder Alignment Workshops
- Risk Assessment & Mitigation Planning
- **Pricing**: $15,000 - $50,000 AUD per engagement
- **Duration**: 2-6 weeks

#### 2. Implementation & Deployment (Workstream 2)
**Services**: `AI_WorkPackage_Master_Template.csv` rows 16-30
- Pilot Program Design
- Agent Development & Customisation
- Integration Architecture
- Change Management Support
- **Pricing**: $25,000 - $100,000 AUD per engagement
- **Duration**: 4-12 weeks

#### 3. Training & Enablement (Workstream 3)
**Services**: `AI_WorkPackage_Master_Template.csv` rows 31-44
- Executive Briefings
- Technical Training Programs
- User Adoption Workshops
- Certification Pathways
- **Pricing**: $5,000 - $25,000 AUD per engagement
- **Duration**: 1-4 weeks

### Specialised Work Packages

#### Government Sector Packages
**Data Source**: `AI_Work_Packages__Complete` (Government focused)
- Regulatory Compliance Assessment
- Public Sector AI Governance
- Citizen Service Enhancement
- Digital Government Transformation
- **Estimated Revenue**: $50,000 - $200,000 AUD per engagement

#### Enterprise Transformation Packages
**Data Source**: `AI_Work_Packages__Up_to_28_`
- Enterprise AI Strategy
- Workforce Transition Planning
- Legacy System Integration
- Performance Optimisation
- **Estimated Revenue**: $75,000 - $300,000 AUD per engagement

#### SME Acceleration Packages
**Data Source**: `AI_work_streams_- cust facing`
- AI Quick Wins Implementation
- Operational Efficiency Audit
- Customer Experience Enhancement
- Digital Marketing Automation
- **Estimated Revenue**: $10,000 - $50,000 AUD per engagement

### Agentic AI Solutions Catalogue

#### Business Function Agents
**Data Source**: `10,000 agents` table, `core_agent_catalog`
- **Customer Service**: 47 agent variations
- **Financial Analysis**: 23 agent variations  
- **Project Management**: 31 agent variations
- **Human Resources**: 19 agent variations
- **Sales & Marketing**: 35 agent variations

#### Industry-Specific Agents
**Data Source**: `AI Agents by categories and agent names`
- Government Services
- Healthcare Administration
- Financial Services
- Manufacturing Operations
- Retail & E-commerce

#### Delivery Models
**Data Source**: `agent_variations` table
- **Automated**: Fully autonomous AI agents
- **Augmented**: Human-AI collaborative workflows
- **Human**: Enhanced human capabilities with AI support

---

## Edge Functions & Integrations

### Core Platform Functions

#### 1. Assessment Processing
**Function**: `enhanced-assessment-engine`
- Processes multi-dimensional AI readiness assessments
- Calculates consciousness levels and maturity scores
- Generates personalised recommendations
- **Usage**: Assessment submission workflows

#### 2. Agent Marketplace
**Function**: `agent-catalog-manager`
- Manages 10,000+ agent configurations
- Handles agent variations and customisations
- Processes cost calculations and ROI projections
- **Usage**: Agent selection and deployment workflows

#### 3. Workforce Analytics
**Function**: `workforce-insights-processor`
- Analyses capacity utilisation patterns
- Generates skills gap reports
- Calculates training ROI metrics
- **Usage**: Strategic planning dashboards

### Integration Functions

#### 4. Partner Data Synchronisation
**Function**: `fetch-partner-logos`
- **Location**: `supabase/functions/fetch-partner-logos/index.ts`
- Automatically fetches and caches partner logos
- Maintains data consistency across tenants
- **Usage**: Partner carousel and ecosystem displays

#### 5. Payment Processing
**Function**: `create-payment`, `stripe-webhook`
- **Location**: `supabase/functions/create-payment/index.ts`
- Handles Stripe payment processing for service engagements
- Manages subscription billing for ongoing services
- **Usage**: Onboarding and service purchase workflows

#### 6. Email Notifications
**Function**: `send-notification`
- **Location**: `supabase/functions/send-notification/index.ts`
- Sends assessment completion notifications
- Manages workflow approval emails
- **Usage**: Assessment and engagement workflows

#### 7. AI Chat Integration
**Function**: `perplexity-chat`
- **Location**: `supabase/functions/perplexity-chat/index.ts`
- Provides AI-powered advisory support
- Integrates with assessment recommendations
- **Usage**: Interactive guidance and support

### Data Management Functions

#### 8. Bulk Data Processing
**Function**: `tyres-bulk-upload`, `ingest-partner-data`
- Handles large-scale data imports
- Validates and cleanses partner data
- Maintains audit trails for compliance
- **Usage**: Data migration and integration projects

#### 9. Analytics Processing
**Function**: `generate-market-insights`
- Processes engagement data for strategic insights
- Calculates platform-wide performance metrics
- Generates trend analysis reports
- **Usage**: Executive dashboards and reporting

#### 10. Dynamic Content Generation
**Function**: `dynamic-sitemap`
- **Location**: `supabase/functions/dynamic-sitemap/index.ts`
- Generates SEO-optimised sitemaps
- Manages multi-tenant content discovery
- **Usage**: Search engine optimisation


## For End Users

### Platform Navigation
- **Home**: Platform overview, capabilities summary, and quick access to assessments
- **Dashboard**: Personalised AI readiness insights and recommendations
- **Advisory Board**: Strategic guidance and industry expertise
- **Demos**: Interactive demonstrations of platform capabilities
- **Admin Panel**: `/admin` - Administrative tools and email testing

### Key User Workflows

#### 1. AI Readiness Assessment Journey
**Access**: Main dashboard or direct assessment links
- Complete multi-dimensional AI maturity evaluation
- Receive personalised consciousness level scoring
- Access tailored recommendations and implementation roadmaps
- Track progress over time with follow-up assessments

#### 2. Workforce Planning Tools
**Access**: Dashboard analytics sections
- Input current workforce data and skills inventory
- Identify excess capacity and optimisation opportunities
- Generate strategic resource allocation recommendations
- Calculate ROI projections for AI implementation initiatives

#### 3. Service Discovery & Engagement
**Access**: Advisory board and consultation workflows
- Browse comprehensive work package catalogue
- Assess strategic fit for organisational objectives
- Request detailed proposals and implementation timelines
- Access cost-benefit analysis tools for decision support

#### 4. Training & Development Pathways
**Access**: Skills assessment and development sections
- Complete SFIA-level competency mapping
- Identify personalised learning pathways
- Access certification tracking and progress monitoring
- Receive recommendations for skills development priorities

### Interactive Features

#### Demo Mode
Enable via URL parameter `?demo=on` for:
- Sample data and realistic scenarios
- Guided tours of platform capabilities
- Risk-free exploration of assessment tools
- Preview of reporting and analytics features

#### Multi-Tenant Support
Each organisation receives:
- Customised branding and interface
- Isolated data and analytics
- Tenant-specific content and messaging
- Dedicated support and service offerings


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
- **blockchain-anchor**: supabase/functions/blockchain-anchor/index.ts
  - Anchors tyre data to blockchain for immutable verification
- **send-notification**: Email notifications for important events
- **create-payment**: Stripe payment processing
- **stripe-webhook**: Handles Stripe webhook events
- **tyres-add-event**: Adds lifecycle events to tyres
- **tyres-bulk-upload**: Bulk tyre registration processing
- **perplexity-chat**: AI-powered chat functionality
- **sync-stripe-products**: Syncs Stripe product catalog

### Blockchain Anchoring (Beta)
- Edge Function: blockchain-anchor
- Purpose: Creates immutable blockchain records for tyre registrations and lifecycle events
- Features: Smart contract integration, verification proofs, tamper-evident audit trails
- Contract: contracts/TyreLedger.sol (Solidity smart contract for tyre lifecycle management)

### Mobile App (Capacitor)
- Native mobile app wrapper using Capacitor framework
- Configuration: capacitor.config.ts with live reload from sandbox
- Supports iOS and Android platforms
- Commands:
  - `npx cap add ios` / `npx cap add android` - Add native platforms
  - `npx cap sync` - Sync web assets to native platforms
  - `npx cap run ios` / `npx cap run android` - Run on device/emulator

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


## Multi-Tenant Integration Guide

### Overview
The Augmented Humanity platform supports multiple family sites sharing common infrastructure while maintaining individual branding and customization.

### Active Tenant Mappings
**Lovable.app Subdomains:**
- chalfront-ai.lovable.app → augmented-humanity-chalfont
- ai-at-chalfont.lovable.app → augmented-humanity-ai-chalfont  
- canberra-consulting-ai.lovable.app → augmented-humanity-canberra

**Custom Domains:**
- www.augmentedhumanity.coach → augmented-humanity-coach
- www.innovateme.link → augmented-humanity-innovateme-link
- www.innovateme.systems → augmented-humanity-innovateme-systems
- www.holo-org.com → augmented-humanity-holo

### New Tenant Onboarding Runbook

**1. Database Setup (Admin Task)**
```sql
-- Add new tenant
INSERT INTO public.tenants (name, slug, settings, is_active) VALUES (
  'New Site Name',
  'augmented-humanity-new-site',
  jsonb_build_object(
    'branding', jsonb_build_object('primary_color', '#your-color', 'logo_variant', 'default'),
    'features', jsonb_build_object('show_tenant_indicator', true)
  ),
  true
);

-- Add domain mapping  
INSERT INTO public.domain_tenant_mappings (domain, tenant_id) VALUES (
  'your-domain.com',
  (SELECT id FROM tenants WHERE slug = 'augmented-humanity-new-site')
);

-- Add allowed domain for authentication
INSERT INTO public.allowed_domains (domain, is_active) VALUES ('your-domain.com', true);
```

**2. Code Integration**
Update `src/services/tenantService.ts` getTenantIdFromDomain() method:
```typescript
// For lovable.app subdomains:
case 'your-subdomain': return 'augmented-humanity-your-site';

// For custom domains:  
case 'www.yoursite.com':
case 'yoursite.com': return 'augmented-humanity-your-site';
```

**3. Asset Management**
Upload tenant-specific assets:
```sql
INSERT INTO public.shared_assets (asset_key, asset_name, asset_url, tenant_id, asset_category, is_global, is_active) 
VALUES ('ahc-logo', 'Your Site Logo', 'https://your-cdn.com/logo.png', 
        (SELECT id FROM tenants WHERE slug = 'augmented-humanity-your-site'), 'branding', false, true);
```

**4. Testing Checklist**
- [ ] Tenant detection: `console.log(tenantService.getTenantIdFromDomain())`
- [ ] Asset loading: Verify logo/favicon load correctly  
- [ ] Mobile app: Test tenant detection in Capacitor
- [ ] Authentication: Verify domain is in allowed_domains
- [ ] Stripe: Update redirect domains in Stripe dashboard
- [ ] DNS: Configure A records to point to Lovable (185.158.133.1)

### Architecture Components
- **Tenant Detection**: `src/services/tenantService.ts` - Domain-based tenant identification
- **Asset Management**: `src/services/assetService.ts` - Tenant-specific asset resolution with global fallbacks
- **React Context**: `src/contexts/TenantContext.tsx` - App-wide tenant state management
- **Shared Components**: `src/components/shared/` - Reusable multi-tenant UI components
- **Mobile Support**: Enhanced Capacitor config for tenant detection

### Shared Infrastructure Benefits
- Single sign-on across all family sites
- Shared Stripe integration and payment processing
- Global asset library with tenant overrides  
- Unified analytics and reporting
- Automatic favicon and logo management
- Cross-tenant data insights while maintaining isolation

---

## Data Sources & Tables

### Assessment & Analytics Tables

#### Core Assessment Data
- **`enhanced_assessments`**: Individual AI readiness assessment results
- **`120 SFIA Roles`**: Complete SFIA role definitions and AI impact analysis
- **`Agentic_AI_Role_Summary_Matrix_Full`**: Comprehensive role transformation roadmaps
- **`AI_Role_Maturity_Enhanced`**: Role-specific maturity levels and development pathways

#### Workforce Planning Data
- **`excess_capacity_marketplace`**: Available capacity and skills across the platform
- **`active_agent_roster`**: Current agent deployments and utilisation metrics
- **`Agent reuse optimiser`**: Optimisation recommendations for agent allocation

### Service Delivery Framework

#### Work Package Catalogues
- **`AI_WorkPackage_Master_Template.csv`**: Complete service offering definitions (44 packages)
- **`AI_Work_Packages__Complete`**: Enhanced package details with pricing and delivery models
- **`AI_work_streams_- cust facing`**: Customer-facing service descriptions and engagement models
- **`65 project summary`**: Strategic project portfolio with value propositions

#### Agent & Solution Catalogues
- **`10,000 agents`**: Comprehensive agent database with capabilities and configurations
- **`core_agent_catalog`**: Core agent definitions and technical specifications
- **`agent_variations`**: Delivery model variations (Automated, Augmented, Human)
- **`AI Agents by categories and agent names`**: Categorised agent directory

### Business Intelligence Tables

#### Performance Analytics
- **`organization_usage`**: Platform usage metrics and engagement tracking
- **`user_lead_scores`**: Lead scoring and conversion analytics
- **`automation_analytics`**: Automated process performance metrics
- **`department_analytics`**: Departmental AI readiness and adoption metrics

#### Strategic Planning Data
- **`AI_Role_Maturity_Enhanced_PM.csv`**: Project management specific maturity frameworks
- **`AI_Task_Augmentation_Calculator_Template.csv`**: Task-level AI impact calculations
- **`Business Areas and Domains.csv`**: Domain-specific configuration and compliance data

### Multi-Tenant Architecture Tables

#### Tenant Management
- **`tenants`**: Tenant configuration, branding, and feature flags
- **`domain_tenant_mappings`**: Domain-to-tenant routing configuration
- **`tenant_memberships`**: User-tenant relationship management
- **`allowed_domains`**: Authentication domain restrictions

#### Asset & Content Management
- **`shared_assets`**: Multi-tenant asset library with override capabilities
- **`vignettes`**: Interactive demonstration content and narratives
- **`lrs_partners`**: Partner ecosystem data with automatic logo fetching

### Integration & Audit Tables

#### Data Quality & Compliance
- **`data_ingestion_logs`**: Comprehensive audit trail for all data imports
- **`partner_integrations`**: External system integration configurations
- **`user_sessions`**: Session tracking and analytics
- **`scheduled_reminders`**: Automated workflow and follow-up management

#### Financial & Commercial
- **`stripe_products`**: Service pricing and subscription management
- **`compensation_evolution`**: Pricing model evolution and optimisation
- **`roi_organizations`**: ROI tracking and business impact measurement

### Technical Implementation Notes

#### Data Access Patterns
- **Row Level Security (RLS)**: All tables implement tenant-aware security policies
- **Audit Logging**: Comprehensive change tracking across all business-critical tables
- **Performance Optimisation**: Materialized views for complex analytics queries
- **Real-time Updates**: Supabase realtime subscriptions for live dashboard updates

#### Data Quality Assurance
- **Validation Rules**: Input validation and data consistency checks
- **Automated Cleanup**: Scheduled maintenance for data archival and cleanup
- **Backup & Recovery**: Automated daily backups with point-in-time recovery
- **Compliance**: GDPR-compliant data handling and retention policies

---

## License
Proprietary – Augmented Humanity Platform. Contact team for licensing and distribution enquiries.

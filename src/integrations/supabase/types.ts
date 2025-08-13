export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      "120 SFIA Roles": {
        Row: {
          "AI Coverage 2000 (%)": string | null
          "AI Coverage 2010 (%)": number | null
          "AI Coverage 2020 (%)": number | null
          "AI Coverage 2025 (%)": number | null
          "AI Coverage 2030 (%)": number | null
          "Excitement Hook": string | null
          "Gained Capabilities": string | null
          "Key Actions 2000": string | null
          "Key Actions 2010": string | null
          "Key Actions 2020": string | null
          "Key Actions 2025": string | null
          "Key Actions 2030": string | null
          "Lost Capabilities": string | null
          "Major Disruptions / Triggers": string | null
          "Neural Ennead Agent Coverage Notes": string | null
          "Org Maturity Uplift (Δ)": number | null
          "Recommended Workshop / Dashboard Focus": string | null
          Role: string | null
          "Role Interdependencies": string | null
          "Self Maturity Uplift (Δ)": number | null
          "SFIA Level": string | null
          "Workshop Readiness": string | null
        }
        Insert: {
          "AI Coverage 2000 (%)"?: string | null
          "AI Coverage 2010 (%)"?: number | null
          "AI Coverage 2020 (%)"?: number | null
          "AI Coverage 2025 (%)"?: number | null
          "AI Coverage 2030 (%)"?: number | null
          "Excitement Hook"?: string | null
          "Gained Capabilities"?: string | null
          "Key Actions 2000"?: string | null
          "Key Actions 2010"?: string | null
          "Key Actions 2020"?: string | null
          "Key Actions 2025"?: string | null
          "Key Actions 2030"?: string | null
          "Lost Capabilities"?: string | null
          "Major Disruptions / Triggers"?: string | null
          "Neural Ennead Agent Coverage Notes"?: string | null
          "Org Maturity Uplift (Δ)"?: number | null
          "Recommended Workshop / Dashboard Focus"?: string | null
          Role?: string | null
          "Role Interdependencies"?: string | null
          "Self Maturity Uplift (Δ)"?: number | null
          "SFIA Level"?: string | null
          "Workshop Readiness"?: string | null
        }
        Update: {
          "AI Coverage 2000 (%)"?: string | null
          "AI Coverage 2010 (%)"?: number | null
          "AI Coverage 2020 (%)"?: number | null
          "AI Coverage 2025 (%)"?: number | null
          "AI Coverage 2030 (%)"?: number | null
          "Excitement Hook"?: string | null
          "Gained Capabilities"?: string | null
          "Key Actions 2000"?: string | null
          "Key Actions 2010"?: string | null
          "Key Actions 2020"?: string | null
          "Key Actions 2025"?: string | null
          "Key Actions 2030"?: string | null
          "Lost Capabilities"?: string | null
          "Major Disruptions / Triggers"?: string | null
          "Neural Ennead Agent Coverage Notes"?: string | null
          "Org Maturity Uplift (Δ)"?: number | null
          "Recommended Workshop / Dashboard Focus"?: string | null
          Role?: string | null
          "Role Interdependencies"?: string | null
          "Self Maturity Uplift (Δ)"?: number | null
          "SFIA Level"?: string | null
          "Workshop Readiness"?: string | null
        }
        Relationships: []
      }
      "65 project summary": {
        Row: {
          Cost: string | null
          "Immediate Benefit": string | null
          "Long-Term Value": string | null
          Project: string | null
          Purpose: string | null
          Reason: string | null
          "Year 1 Value": string | null
        }
        Insert: {
          Cost?: string | null
          "Immediate Benefit"?: string | null
          "Long-Term Value"?: string | null
          Project?: string | null
          Purpose?: string | null
          Reason?: string | null
          "Year 1 Value"?: string | null
        }
        Update: {
          Cost?: string | null
          "Immediate Benefit"?: string | null
          "Long-Term Value"?: string | null
          Project?: string | null
          Purpose?: string | null
          Reason?: string | null
          "Year 1 Value"?: string | null
        }
        Relationships: []
      }
      abm_accounts: {
        Row: {
          account_tier: string | null
          annual_revenue: number | null
          assigned_to: string | null
          budget_authority: number | null
          campaign_history: Json | null
          company_name: string
          created_at: string
          current_tech_stack: Json | null
          decision_makers: Json | null
          employee_count: number | null
          engagement_score: number | null
          id: string
          industry: string | null
          next_action: string | null
          pain_points: Json | null
          preferred_functions: Json | null
          updated_at: string
        }
        Insert: {
          account_tier?: string | null
          annual_revenue?: number | null
          assigned_to?: string | null
          budget_authority?: number | null
          campaign_history?: Json | null
          company_name: string
          created_at?: string
          current_tech_stack?: Json | null
          decision_makers?: Json | null
          employee_count?: number | null
          engagement_score?: number | null
          id?: string
          industry?: string | null
          next_action?: string | null
          pain_points?: Json | null
          preferred_functions?: Json | null
          updated_at?: string
        }
        Update: {
          account_tier?: string | null
          annual_revenue?: number | null
          assigned_to?: string | null
          budget_authority?: number | null
          campaign_history?: Json | null
          company_name?: string
          created_at?: string
          current_tech_stack?: Json | null
          decision_makers?: Json | null
          employee_count?: number | null
          engagement_score?: number | null
          id?: string
          industry?: string | null
          next_action?: string | null
          pain_points?: Json | null
          preferred_functions?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      access_requests: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          name: string
          page_requested: string
          reason: string
          role: string | null
          status: string
          updated_at: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          name: string
          page_requested: string
          reason: string
          role?: string | null
          status?: string
          updated_at?: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string
          page_requested?: string
          reason?: string
          role?: string | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      active_agent_roster: {
        Row: {
          agent_code: string | null
          agent_id: number | null
          agent_name: string | null
          ai_readiness_level: number | null
          core_team_label: string | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          task_usage_minutes: number | null
          value_score: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Relationships: []
      }
      activity_participants: {
        Row: {
          activity_id: string
          contribution_notes: string | null
          created_at: string
          family_member_id: string
          id: string
          involvement_level_id: string
          specific_role: string | null
          step_id: string | null
          updated_at: string
        }
        Insert: {
          activity_id: string
          contribution_notes?: string | null
          created_at?: string
          family_member_id: string
          id?: string
          involvement_level_id: string
          specific_role?: string | null
          step_id?: string | null
          updated_at?: string
        }
        Update: {
          activity_id?: string
          contribution_notes?: string | null
          created_at?: string
          family_member_id?: string
          id?: string
          involvement_level_id?: string
          specific_role?: string | null
          step_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_participants_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "business_activities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_participants_involvement_level_id_fkey"
            columns: ["involvement_level_id"]
            isOneToOne: false
            referencedRelation: "involvement_levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "activity_participants_step_id_fkey"
            columns: ["step_id"]
            isOneToOne: false
            referencedRelation: "activity_steps"
            referencedColumns: ["id"]
          },
        ]
      }
      activity_steps: {
        Row: {
          activity_id: string
          created_at: string
          dependencies: string[] | null
          estimated_hours: number | null
          id: string
          is_decision_point: boolean | null
          step_code: string
          step_description: string | null
          step_order: number
          step_title: string
          updated_at: string
        }
        Insert: {
          activity_id: string
          created_at?: string
          dependencies?: string[] | null
          estimated_hours?: number | null
          id?: string
          is_decision_point?: boolean | null
          step_code: string
          step_description?: string | null
          step_order: number
          step_title: string
          updated_at?: string
        }
        Update: {
          activity_id?: string
          created_at?: string
          dependencies?: string[] | null
          estimated_hours?: number | null
          id?: string
          is_decision_point?: boolean | null
          step_code?: string
          step_description?: string | null
          step_order?: number
          step_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "activity_steps_activity_id_fkey"
            columns: ["activity_id"]
            isOneToOne: false
            referencedRelation: "business_activities"
            referencedColumns: ["id"]
          },
        ]
      }
      agency_partner_network: {
        Row: {
          agency_id: string
          created_at: string | null
          joint_win_count: number | null
          labor_model: string | null
          last_engagement: string | null
          merged_ecosystem_entity_name: string | null
          network_rank: number | null
          partner_code: string
          relationship_score: number
          updated_at: string | null
        }
        Insert: {
          agency_id: string
          created_at?: string | null
          joint_win_count?: number | null
          labor_model?: string | null
          last_engagement?: string | null
          merged_ecosystem_entity_name?: string | null
          network_rank?: number | null
          partner_code: string
          relationship_score?: number
          updated_at?: string | null
        }
        Update: {
          agency_id?: string
          created_at?: string | null
          joint_win_count?: number | null
          labor_model?: string | null
          last_engagement?: string | null
          merged_ecosystem_entity_name?: string | null
          network_rank?: number | null
          partner_code?: string
          relationship_score?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_activity_log: {
        Row: {
          agent_id: string | null
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          user_id: string | null
        }
        Insert: {
          agent_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          user_id?: string | null
        }
        Update: {
          agent_id?: string | null
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_activity_log_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agent_registry"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_automation_readiness: {
        Row: {
          agent_code: string
          automation_resistance_score: number
          change_adaptability_rating: number
          created_at: string
          id: string
          innovation_openness_score: number
          process_flexibility_index: number
          tech_comfort_level: number
          training_willingness_score: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          automation_resistance_score?: number
          change_adaptability_rating?: number
          created_at?: string
          id?: string
          innovation_openness_score?: number
          process_flexibility_index?: number
          tech_comfort_level?: number
          training_willingness_score?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          automation_resistance_score?: number
          change_adaptability_rating?: number
          created_at?: string
          id?: string
          innovation_openness_score?: number
          process_flexibility_index?: number
          tech_comfort_level?: number
          training_willingness_score?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_collaboration_metrics: {
        Row: {
          agent_code: string
          communication_style: string
          conflict_resolution_approach: string
          created_at: string
          cross_functional_comfort: number
          id: string
          leadership_preference: string
          mentoring_capacity_score: number
          remote_collaboration_effectiveness: number
          team_size_preference: string
          updated_at: string
        }
        Insert: {
          agent_code: string
          communication_style?: string
          conflict_resolution_approach?: string
          created_at?: string
          cross_functional_comfort?: number
          id?: string
          leadership_preference?: string
          mentoring_capacity_score?: number
          remote_collaboration_effectiveness?: number
          team_size_preference?: string
          updated_at?: string
        }
        Update: {
          agent_code?: string
          communication_style?: string
          conflict_resolution_approach?: string
          created_at?: string
          cross_functional_comfort?: number
          id?: string
          leadership_preference?: string
          mentoring_capacity_score?: number
          remote_collaboration_effectiveness?: number
          team_size_preference?: string
          updated_at?: string
        }
        Relationships: []
      }
      agent_display_metadata: {
        Row: {
          agent_display_name: string | null
          summary: string | null
          title: string | null
        }
        Insert: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Update: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Relationships: []
      }
      agent_enhanced_skills: {
        Row: {
          agent_code: string
          continuous_learning_commitment: number
          created_at: string
          cross_domain_versatility: number
          expertise_validation_level: string
          id: string
          industry_depth_score: number
          learning_velocity_index: number
          skill_transfer_ability: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          continuous_learning_commitment?: number
          created_at?: string
          cross_domain_versatility?: number
          expertise_validation_level?: string
          id?: string
          industry_depth_score?: number
          learning_velocity_index?: number
          skill_transfer_ability?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          continuous_learning_commitment?: number
          created_at?: string
          cross_domain_versatility?: number
          expertise_validation_level?: string
          id?: string
          industry_depth_score?: number
          learning_velocity_index?: number
          skill_transfer_ability?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_external_data: {
        Row: {
          agent_code: string
          competitive_positioning_score: number | null
          created_at: string
          external_validation_sources: string[] | null
          id: string
          industry_demand_index: number | null
          last_updated: string
          market_intelligence_data: Json | null
          market_salary_benchmark: number | null
          onet_skill_alignment_score: number | null
          updated_at: string
        }
        Insert: {
          agent_code: string
          competitive_positioning_score?: number | null
          created_at?: string
          external_validation_sources?: string[] | null
          id?: string
          industry_demand_index?: number | null
          last_updated?: string
          market_intelligence_data?: Json | null
          market_salary_benchmark?: number | null
          onet_skill_alignment_score?: number | null
          updated_at?: string
        }
        Update: {
          agent_code?: string
          competitive_positioning_score?: number | null
          created_at?: string
          external_validation_sources?: string[] | null
          id?: string
          industry_demand_index?: number | null
          last_updated?: string
          market_intelligence_data?: Json | null
          market_salary_benchmark?: number | null
          onet_skill_alignment_score?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      agent_feature_requests: {
        Row: {
          classification: string | null
          coverage_score: number | null
          created_at: string | null
          department: string | null
          id: string
          job_id: string | null
          missing_skills: string[] | null
          reason: string | null
          slack_pct: number | null
          title: string | null
        }
        Insert: {
          classification?: string | null
          coverage_score?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          job_id?: string | null
          missing_skills?: string[] | null
          reason?: string | null
          slack_pct?: number | null
          title?: string | null
        }
        Update: {
          classification?: string | null
          coverage_score?: number | null
          created_at?: string | null
          department?: string | null
          id?: string
          job_id?: string | null
          missing_skills?: string[] | null
          reason?: string | null
          slack_pct?: number | null
          title?: string | null
        }
        Relationships: []
      }
      agent_financial_metrics: {
        Row: {
          agent_code: string
          budget_management_score: number
          cost_estimation_accuracy: number
          created_at: string
          financial_reporting_quality: number
          id: string
          project_profitability_history: number
          revenue_generation_track_record: number
          risk_management_capability: number
          updated_at: string
        }
        Insert: {
          agent_code: string
          budget_management_score?: number
          cost_estimation_accuracy?: number
          created_at?: string
          financial_reporting_quality?: number
          id?: string
          project_profitability_history?: number
          revenue_generation_track_record?: number
          risk_management_capability?: number
          updated_at?: string
        }
        Update: {
          agent_code?: string
          budget_management_score?: number
          cost_estimation_accuracy?: number
          created_at?: string
          financial_reporting_quality?: number
          id?: string
          project_profitability_history?: number
          revenue_generation_track_record?: number
          risk_management_capability?: number
          updated_at?: string
        }
        Relationships: []
      }
      agent_knowledge_base: {
        Row: {
          agent_name: string
          confidence_score: number | null
          content: string
          created_at: string
          expires_at: string | null
          id: string
          knowledge_type: string
          relevance_tags: string[] | null
          source: string | null
          updated_at: string
        }
        Insert: {
          agent_name: string
          confidence_score?: number | null
          content: string
          created_at?: string
          expires_at?: string | null
          id?: string
          knowledge_type: string
          relevance_tags?: string[] | null
          source?: string | null
          updated_at?: string
        }
        Update: {
          agent_name?: string
          confidence_score?: number | null
          content?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          knowledge_type?: string
          relevance_tags?: string[] | null
          source?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      agent_pack_activity: {
        Row: {
          created_at: string | null
          event: string
          id: string
          pack_id: string | null
        }
        Insert: {
          created_at?: string | null
          event: string
          id?: string
          pack_id?: string | null
        }
        Update: {
          created_at?: string | null
          event?: string
          id?: string
          pack_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_pack_activity_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_pack_pricing: {
        Row: {
          annual_price: number | null
          base_price: number
          created_at: string | null
          custom_integrations: boolean | null
          id: string
          implementation_included: boolean | null
          included_features: string[] | null
          max_agents: number
          max_monthly_hours: number | null
          monthly_price: number | null
          pack_id: string | null
          priority_support: boolean | null
          support_level: string | null
          tier_name: string
          updated_at: string | null
        }
        Insert: {
          annual_price?: number | null
          base_price: number
          created_at?: string | null
          custom_integrations?: boolean | null
          id?: string
          implementation_included?: boolean | null
          included_features?: string[] | null
          max_agents: number
          max_monthly_hours?: number | null
          monthly_price?: number | null
          pack_id?: string | null
          priority_support?: boolean | null
          support_level?: string | null
          tier_name: string
          updated_at?: string | null
        }
        Update: {
          annual_price?: number | null
          base_price?: number
          created_at?: string | null
          custom_integrations?: boolean | null
          id?: string
          implementation_included?: boolean | null
          included_features?: string[] | null
          max_agents?: number
          max_monthly_hours?: number | null
          monthly_price?: number | null
          pack_id?: string | null
          priority_support?: boolean | null
          support_level?: string | null
          tier_name?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_pack_pricing_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_packs: {
        Row: {
          agents: Json
          cost: number
          created_at: string | null
          id: string
          name: string
          reuse_score: number
          tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          agents: Json
          cost: number
          created_at?: string | null
          id?: string
          name: string
          reuse_score: number
          tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          agents?: Json
          cost?: number
          created_at?: string | null
          id?: string
          name?: string
          reuse_score?: number
          tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_performance: {
        Row: {
          agent_code: string
          created_at: string | null
          feedback_notes: string | null
          human_override: boolean | null
          labor_model: string | null
          logged_at: string | null
          perf_id: string
          reviewer_score: number | null
          rft_id: string
          section: string
          updated_at: string | null
          usage_time: number | null
          win_loss: boolean | null
        }
        Insert: {
          agent_code: string
          created_at?: string | null
          feedback_notes?: string | null
          human_override?: boolean | null
          labor_model?: string | null
          logged_at?: string | null
          perf_id?: string
          reviewer_score?: number | null
          rft_id: string
          section: string
          updated_at?: string | null
          usage_time?: number | null
          win_loss?: boolean | null
        }
        Update: {
          agent_code?: string
          created_at?: string | null
          feedback_notes?: string | null
          human_override?: boolean | null
          labor_model?: string | null
          logged_at?: string | null
          perf_id?: string
          reviewer_score?: number | null
          rft_id?: string
          section?: string
          updated_at?: string | null
          usage_time?: number | null
          win_loss?: boolean | null
        }
        Relationships: []
      }
      agent_performance_analytics: {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: string | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: string | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: string | null
          personality_c: number | null
          personality_e: number | null
          personality_n: string | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      agent_prices: {
        Row: {
          agent_code: string
          price_monthly: number
          updated_at: string | null
        }
        Insert: {
          agent_code: string
          price_monthly: number
          updated_at?: string | null
        }
        Update: {
          agent_code?: string
          price_monthly?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_prices_temp: {
        Row: {
          agent_count: number | null
          bundle_id: number | null
          bundle_name: string | null
          department: string | null
          description: string | null
          discount_pct: number | null
          lead_agent_code: string | null
          lead_agent_name: string | null
        }
        Insert: {
          agent_count?: number | null
          bundle_id?: number | null
          bundle_name?: string | null
          department?: string | null
          description?: string | null
          discount_pct?: number | null
          lead_agent_code?: string | null
          lead_agent_name?: string | null
        }
        Update: {
          agent_count?: number | null
          bundle_id?: number | null
          bundle_name?: string | null
          department?: string | null
          description?: string | null
          discount_pct?: number | null
          lead_agent_code?: string | null
          lead_agent_name?: string | null
        }
        Relationships: []
      }
      agent_pricing_tiers: {
        Row: {
          agent_code: string
          api_rate_limit: number | null
          created_at: string | null
          deployment_type: string | null
          id: string
          includes_source_code: boolean | null
          max_executions_per_month: number | null
          monthly_price: number
          pricing_tier: string | null
          setup_cost: number | null
          sla_uptime_pct: number | null
          support_level: string | null
          updated_at: string | null
          white_label_available: boolean | null
        }
        Insert: {
          agent_code: string
          api_rate_limit?: number | null
          created_at?: string | null
          deployment_type?: string | null
          id?: string
          includes_source_code?: boolean | null
          max_executions_per_month?: number | null
          monthly_price: number
          pricing_tier?: string | null
          setup_cost?: number | null
          sla_uptime_pct?: number | null
          support_level?: string | null
          updated_at?: string | null
          white_label_available?: boolean | null
        }
        Update: {
          agent_code?: string
          api_rate_limit?: number | null
          created_at?: string | null
          deployment_type?: string | null
          id?: string
          includes_source_code?: boolean | null
          max_executions_per_month?: number | null
          monthly_price?: number
          pricing_tier?: string | null
          setup_cost?: number | null
          sla_uptime_pct?: number | null
          support_level?: string | null
          updated_at?: string | null
          white_label_available?: boolean | null
        }
        Relationships: []
      }
      agent_registry: {
        Row: {
          agent_type: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          name: string
          parameters: Json | null
          status: string
          updated_at: string
        }
        Insert: {
          agent_type: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name: string
          parameters?: Json | null
          status?: string
          updated_at?: string
        }
        Update: {
          agent_type?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          name?: string
          parameters?: Json | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      agent_runs: {
        Row: {
          agent_id: string | null
          completed_at: string | null
          error: string | null
          id: string
          input_data: Json | null
          output_data: Json | null
          started_at: string | null
          status: string
          task_id: string | null
          user_id: string | null
        }
        Insert: {
          agent_id?: string | null
          completed_at?: string | null
          error?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          task_id?: string | null
          user_id?: string | null
        }
        Update: {
          agent_id?: string | null
          completed_at?: string | null
          error?: string | null
          id?: string
          input_data?: Json | null
          output_data?: Json | null
          started_at?: string | null
          status?: string
          task_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "agent_runs_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agent_registry"
            referencedColumns: ["id"]
          },
        ]
      }
      agent_states: {
        Row: {
          active: boolean
          agent_key: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          active?: boolean
          agent_key: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          active?: boolean
          agent_key?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      agent_technical_specs: {
        Row: {
          agent_code: string
          api_endpoint_pattern: string | null
          auto_scaling_enabled: boolean | null
          backup_frequency: string | null
          compliance_standards: string[] | null
          cpu_requirements_cores: number | null
          created_at: string | null
          docker_image: string | null
          github_repo_url: string | null
          id: string
          kubernetes_ready: boolean | null
          memory_requirements_mb: number | null
          monitoring_included: boolean | null
          network_requirements: string | null
          performance_benchmark_ops_per_sec: number | null
          security_certifications: string[] | null
          self_hosting_complexity: string | null
          storage_requirements_gb: number | null
          supported_integrations: string[] | null
          updated_at: string | null
        }
        Insert: {
          agent_code: string
          api_endpoint_pattern?: string | null
          auto_scaling_enabled?: boolean | null
          backup_frequency?: string | null
          compliance_standards?: string[] | null
          cpu_requirements_cores?: number | null
          created_at?: string | null
          docker_image?: string | null
          github_repo_url?: string | null
          id?: string
          kubernetes_ready?: boolean | null
          memory_requirements_mb?: number | null
          monitoring_included?: boolean | null
          network_requirements?: string | null
          performance_benchmark_ops_per_sec?: number | null
          security_certifications?: string[] | null
          self_hosting_complexity?: string | null
          storage_requirements_gb?: number | null
          supported_integrations?: string[] | null
          updated_at?: string | null
        }
        Update: {
          agent_code?: string
          api_endpoint_pattern?: string | null
          auto_scaling_enabled?: boolean | null
          backup_frequency?: string | null
          compliance_standards?: string[] | null
          cpu_requirements_cores?: number | null
          created_at?: string | null
          docker_image?: string | null
          github_repo_url?: string | null
          id?: string
          kubernetes_ready?: boolean | null
          memory_requirements_mb?: number | null
          monitoring_included?: boolean | null
          network_requirements?: string | null
          performance_benchmark_ops_per_sec?: number | null
          security_certifications?: string[] | null
          self_hosting_complexity?: string | null
          storage_requirements_gb?: number | null
          supported_integrations?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      agent_templates: {
        Row: {
          category: string | null
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          template_data: Json
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          template_data: Json
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          template_data?: Json
          updated_at?: string
        }
        Relationships: []
      }
      agent_variations: {
        Row: {
          agent_code: string
          consultant_hourly_rate: number | null
          core_skills: string | null
          created_at: string | null
          delivery_model: string | null
          domain: string | null
          final_cost: number | null
          function: string | null
          id: string
          integration_patterns: string | null
          parent_agent_code: string | null
          persona: string | null
          primary_cloud_environments: string | null
          sfia_level: string | null
          strategic_impact_score: number | null
          summary_bio: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          technical_complexity_score: number | null
          time_to_deploy: number | null
          updated_at: string | null
          variation_id: string | null
          variation_name: string | null
          weighted_score: number | null
        }
        Insert: {
          agent_code: string
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          function?: string | null
          id?: string
          integration_patterns?: string | null
          parent_agent_code?: string | null
          persona?: string | null
          primary_cloud_environments?: string | null
          sfia_level?: string | null
          strategic_impact_score?: number | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          technical_complexity_score?: number | null
          time_to_deploy?: number | null
          updated_at?: string | null
          variation_id?: string | null
          variation_name?: string | null
          weighted_score?: number | null
        }
        Update: {
          agent_code?: string
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          function?: string | null
          id?: string
          integration_patterns?: string | null
          parent_agent_code?: string | null
          persona?: string | null
          primary_cloud_environments?: string | null
          sfia_level?: string | null
          strategic_impact_score?: number | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          technical_complexity_score?: number | null
          time_to_deploy?: number | null
          updated_at?: string | null
          variation_id?: string | null
          variation_name?: string | null
          weighted_score?: number | null
        }
        Relationships: []
      }
      agent_variations_catalog: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: string | null
          Estimated_Price: string | null
          Estimated_Profit: string | null
          Integration_Pattern: string | null
          Variation_ID: string | null
          Variation_Name: string | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Relationships: []
      }
      agentic_ai_conversation_templates: {
        Row: {
          conversation_starters: Json | null
          created_at: string | null
          discussion_prompts: Json | null
          id: string
          journey_stage: string
          knowledge_base_refs: Json | null
          language_code: string
          template_name: string
          updated_at: string | null
        }
        Insert: {
          conversation_starters?: Json | null
          created_at?: string | null
          discussion_prompts?: Json | null
          id?: string
          journey_stage: string
          knowledge_base_refs?: Json | null
          language_code: string
          template_name: string
          updated_at?: string | null
        }
        Update: {
          conversation_starters?: Json | null
          created_at?: string | null
          discussion_prompts?: Json | null
          id?: string
          journey_stage?: string
          knowledge_base_refs?: Json | null
          language_code?: string
          template_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      Agentic_AI_Role_Summary_Matrix_Full: {
        Row: {
          "AI Coverage 2000 (%)": string | null
          "AI Coverage 2010 (%)": number | null
          "AI Coverage 2020 (%)": number | null
          "AI Coverage 2025 (%)": number | null
          "AI Coverage 2030 (%)": number | null
          "Excitement Hook": string | null
          "Gained Capabilities": string | null
          "Key Role Actions 2000": string | null
          "Key Role Actions 2010": string | null
          "Key Role Actions 2020": string | null
          "Key Role Actions 2025": string | null
          "Key Role Actions 2030": string | null
          "Lost Capabilities": string | null
          "Major Disruptions / Triggers": string | null
          "Neural Ennead Agent Coverage Notes": string | null
          "Org Maturity Uplift (Δ)": number | null
          "Recommended Workshop / Dashboard Focus": string | null
          Role: string | null
          "Role Interdependencies": string | null
          "Self Maturity Uplift (Δ)": number | null
          "SFIA Level": string | null
          "Workshop Readiness": string | null
        }
        Insert: {
          "AI Coverage 2000 (%)"?: string | null
          "AI Coverage 2010 (%)"?: number | null
          "AI Coverage 2020 (%)"?: number | null
          "AI Coverage 2025 (%)"?: number | null
          "AI Coverage 2030 (%)"?: number | null
          "Excitement Hook"?: string | null
          "Gained Capabilities"?: string | null
          "Key Role Actions 2000"?: string | null
          "Key Role Actions 2010"?: string | null
          "Key Role Actions 2020"?: string | null
          "Key Role Actions 2025"?: string | null
          "Key Role Actions 2030"?: string | null
          "Lost Capabilities"?: string | null
          "Major Disruptions / Triggers"?: string | null
          "Neural Ennead Agent Coverage Notes"?: string | null
          "Org Maturity Uplift (Δ)"?: number | null
          "Recommended Workshop / Dashboard Focus"?: string | null
          Role?: string | null
          "Role Interdependencies"?: string | null
          "Self Maturity Uplift (Δ)"?: number | null
          "SFIA Level"?: string | null
          "Workshop Readiness"?: string | null
        }
        Update: {
          "AI Coverage 2000 (%)"?: string | null
          "AI Coverage 2010 (%)"?: number | null
          "AI Coverage 2020 (%)"?: number | null
          "AI Coverage 2025 (%)"?: number | null
          "AI Coverage 2030 (%)"?: number | null
          "Excitement Hook"?: string | null
          "Gained Capabilities"?: string | null
          "Key Role Actions 2000"?: string | null
          "Key Role Actions 2010"?: string | null
          "Key Role Actions 2020"?: string | null
          "Key Role Actions 2025"?: string | null
          "Key Role Actions 2030"?: string | null
          "Lost Capabilities"?: string | null
          "Major Disruptions / Triggers"?: string | null
          "Neural Ennead Agent Coverage Notes"?: string | null
          "Org Maturity Uplift (Δ)"?: number | null
          "Recommended Workshop / Dashboard Focus"?: string | null
          Role?: string | null
          "Role Interdependencies"?: string | null
          "Self Maturity Uplift (Δ)"?: number | null
          "SFIA Level"?: string | null
          "Workshop Readiness"?: string | null
        }
        Relationships: []
      }
      "Agentic_Service_Catalogue_for_Chalfont___Aurec (2).csv": {
        Row: {
          "Client Engagement Notes": string | null
          "Delivery Format": string | null
          "Inputs Required": string | null
          "Lifecycle Phase": string | null
          "Outputs Delivered": string | null
          "Pricing (AUD)": string | null
          Service: string | null
          "Training Map": string | null
        }
        Insert: {
          "Client Engagement Notes"?: string | null
          "Delivery Format"?: string | null
          "Inputs Required"?: string | null
          "Lifecycle Phase"?: string | null
          "Outputs Delivered"?: string | null
          "Pricing (AUD)"?: string | null
          Service?: string | null
          "Training Map"?: string | null
        }
        Update: {
          "Client Engagement Notes"?: string | null
          "Delivery Format"?: string | null
          "Inputs Required"?: string | null
          "Lifecycle Phase"?: string | null
          "Outputs Delivered"?: string | null
          "Pricing (AUD)"?: string | null
          Service?: string | null
          "Training Map"?: string | null
        }
        Relationships: []
      }
      agentpackages: {
        Row: {
          agents_count: number | null
          description: string | null
          device_limit: string | null
          name: string | null
          package_id: string
          price_per_month: number | null
        }
        Insert: {
          agents_count?: number | null
          description?: string | null
          device_limit?: string | null
          name?: string | null
          package_id: string
          price_per_month?: number | null
        }
        Update: {
          agents_count?: number | null
          description?: string | null
          device_limit?: string | null
          name?: string | null
          package_id?: string
          price_per_month?: number | null
        }
        Relationships: []
      }
      agentpacks: {
        Row: {
          agents_included: number | null
          category: string | null
          description: string | null
          fte_replaced: number | null
          human_name: string | null
          name: string | null
          pack_id: string
          price_per_month: number | null
          savings_pct: number | null
        }
        Insert: {
          agents_included?: number | null
          category?: string | null
          description?: string | null
          fte_replaced?: number | null
          human_name?: string | null
          name?: string | null
          pack_id: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Update: {
          agents_included?: number | null
          category?: string | null
          description?: string | null
          fte_replaced?: number | null
          human_name?: string | null
          name?: string | null
          pack_id?: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Relationships: []
      }
      agents: {
        Row: {
          "12mo_TCO": number | null
          agent_coverage_score: number | null
          agent_id: string
          agent_intelligence_type: string | null
          agent_rank_score: number | null
          ai_summary: string | null
          aps_hourly_rate: number | null
          augmented_delivery_cost: number | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          certifications: string | null
          clearance_required: string | null
          cloud: string | null
          compliance_gap_flag: boolean | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          deployment_rank: number | null
          estimated_cost: number | null
          estimated_price: number | null
          estimated_profit: number | null
          estimated_total_hours: number | null
          function: string | null
          hourly_rate: number | null
          human_delivery_cost: number | null
          industry: string | null
          integration_pattern: string | null
          location: string | null
          output_rate: number | null
          output_unit_cost: number | null
          performance_efficiency_ratio: number | null
          persona: string | null
          recommended_clearance: string | null
          recommended_delivery_model: string | null
          region_unemployment_rate: number | null
          regulatory_flag: boolean | null
          roi: number | null
          role_name: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          tool: string | null
          total_years_experience: number | null
          utilization_pct: number | null
          weightedscore: number | null
        }
        Insert: {
          "12mo_TCO"?: number | null
          agent_coverage_score?: number | null
          agent_id: string
          agent_intelligence_type?: string | null
          agent_rank_score?: number | null
          ai_summary?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          certifications?: string | null
          clearance_required?: string | null
          cloud?: string | null
          compliance_gap_flag?: boolean | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          deployment_rank?: number | null
          estimated_cost?: number | null
          estimated_price?: number | null
          estimated_profit?: number | null
          estimated_total_hours?: number | null
          function?: string | null
          hourly_rate?: number | null
          human_delivery_cost?: number | null
          industry?: string | null
          integration_pattern?: string | null
          location?: string | null
          output_rate?: number | null
          output_unit_cost?: number | null
          performance_efficiency_ratio?: number | null
          persona?: string | null
          recommended_clearance?: string | null
          recommended_delivery_model?: string | null
          region_unemployment_rate?: number | null
          regulatory_flag?: boolean | null
          roi?: number | null
          role_name?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          tool?: string | null
          total_years_experience?: number | null
          utilization_pct?: number | null
          weightedscore?: number | null
        }
        Update: {
          "12mo_TCO"?: number | null
          agent_coverage_score?: number | null
          agent_id?: string
          agent_intelligence_type?: string | null
          agent_rank_score?: number | null
          ai_summary?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          certifications?: string | null
          clearance_required?: string | null
          cloud?: string | null
          compliance_gap_flag?: boolean | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          deployment_rank?: number | null
          estimated_cost?: number | null
          estimated_price?: number | null
          estimated_profit?: number | null
          estimated_total_hours?: number | null
          function?: string | null
          hourly_rate?: number | null
          human_delivery_cost?: number | null
          industry?: string | null
          integration_pattern?: string | null
          location?: string | null
          output_rate?: number | null
          output_unit_cost?: number | null
          performance_efficiency_ratio?: number | null
          persona?: string | null
          recommended_clearance?: string | null
          recommended_delivery_model?: string | null
          region_unemployment_rate?: number | null
          regulatory_flag?: boolean | null
          roi?: number | null
          role_name?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          tool?: string | null
          total_years_experience?: number | null
          utilization_pct?: number | null
          weightedscore?: number | null
        }
        Relationships: []
      }
      agreement_templates: {
        Row: {
          category: string
          created_at: string
          created_by: string | null
          description: string | null
          id: string
          is_public: boolean | null
          name: string
          template_content: string
          template_variables: Json | null
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          template_content: string
          template_variables?: Json | null
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          created_by?: string | null
          description?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          template_content?: string
          template_variables?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      "AI enablement streams": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      "AI work streams - cust facing": {
        Row: {
          "Core Deliverables": string | null
          "Customer Engagement (How They Buy)": string | null
          "Customer Outcome": string | null
          "How It’s Delivered": string | null
          "Revenue Range (AUD)": string | null
          Workstream: string | null
        }
        Insert: {
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          "How It’s Delivered"?: string | null
          "Revenue Range (AUD)"?: string | null
          Workstream?: string | null
        }
        Update: {
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          "How It’s Delivered"?: string | null
          "Revenue Range (AUD)"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      ai_recruiter_profiles: {
        Row: {
          after_ai_video_url: string | null
          ai_tools_mastered: string[] | null
          annual_cost_savings: number | null
          annual_revenue_generated: number | null
          aps_level: string | null
          automation_level: number | null
          before_ai_video_url: string | null
          created_at: string | null
          current_stage: string | null
          customer_programs_delivered: string[] | null
          demo_scenario_video_url: string | null
          department: string
          efficiency_improvement_pct: number | null
          full_name: string
          heygen_avatar_id: string | null
          id: string
          key_breakthrough_moment: string | null
          knowledge_transfer_score: number | null
          location: string | null
          mentees_trained: number | null
          peer_influence_score: number | null
          post_ai_annual_placements: number | null
          post_ai_candidates_per_day: number | null
          post_ai_cost_per_hire: number | null
          post_ai_placement_success_rate: number | null
          post_ai_time_to_fill_days: number | null
          pre_ai_annual_placements: number | null
          pre_ai_candidates_per_day: number | null
          pre_ai_cost_per_hire: number | null
          pre_ai_placement_success_rate: number | null
          pre_ai_time_to_fill_days: number | null
          quality_improvement_pct: number | null
          role_title: string
          specific_ai_skills: string[] | null
          training_revenue_generated: number | null
          transformation_start_date: string | null
          transformation_story: string | null
          updated_at: string | null
          video_testimonial_url: string | null
        }
        Insert: {
          after_ai_video_url?: string | null
          ai_tools_mastered?: string[] | null
          annual_cost_savings?: number | null
          annual_revenue_generated?: number | null
          aps_level?: string | null
          automation_level?: number | null
          before_ai_video_url?: string | null
          created_at?: string | null
          current_stage?: string | null
          customer_programs_delivered?: string[] | null
          demo_scenario_video_url?: string | null
          department: string
          efficiency_improvement_pct?: number | null
          full_name: string
          heygen_avatar_id?: string | null
          id?: string
          key_breakthrough_moment?: string | null
          knowledge_transfer_score?: number | null
          location?: string | null
          mentees_trained?: number | null
          peer_influence_score?: number | null
          post_ai_annual_placements?: number | null
          post_ai_candidates_per_day?: number | null
          post_ai_cost_per_hire?: number | null
          post_ai_placement_success_rate?: number | null
          post_ai_time_to_fill_days?: number | null
          pre_ai_annual_placements?: number | null
          pre_ai_candidates_per_day?: number | null
          pre_ai_cost_per_hire?: number | null
          pre_ai_placement_success_rate?: number | null
          pre_ai_time_to_fill_days?: number | null
          quality_improvement_pct?: number | null
          role_title: string
          specific_ai_skills?: string[] | null
          training_revenue_generated?: number | null
          transformation_start_date?: string | null
          transformation_story?: string | null
          updated_at?: string | null
          video_testimonial_url?: string | null
        }
        Update: {
          after_ai_video_url?: string | null
          ai_tools_mastered?: string[] | null
          annual_cost_savings?: number | null
          annual_revenue_generated?: number | null
          aps_level?: string | null
          automation_level?: number | null
          before_ai_video_url?: string | null
          created_at?: string | null
          current_stage?: string | null
          customer_programs_delivered?: string[] | null
          demo_scenario_video_url?: string | null
          department?: string
          efficiency_improvement_pct?: number | null
          full_name?: string
          heygen_avatar_id?: string | null
          id?: string
          key_breakthrough_moment?: string | null
          knowledge_transfer_score?: number | null
          location?: string | null
          mentees_trained?: number | null
          peer_influence_score?: number | null
          post_ai_annual_placements?: number | null
          post_ai_candidates_per_day?: number | null
          post_ai_cost_per_hire?: number | null
          post_ai_placement_success_rate?: number | null
          post_ai_time_to_fill_days?: number | null
          pre_ai_annual_placements?: number | null
          pre_ai_candidates_per_day?: number | null
          pre_ai_cost_per_hire?: number | null
          pre_ai_placement_success_rate?: number | null
          pre_ai_time_to_fill_days?: number | null
          quality_improvement_pct?: number | null
          role_title?: string
          specific_ai_skills?: string[] | null
          training_revenue_generated?: number | null
          transformation_start_date?: string | null
          transformation_story?: string | null
          updated_at?: string | null
          video_testimonial_url?: string | null
        }
        Relationships: []
      }
      AI_Role_Maturity_Enhanced: {
        Row: {
          "AI Impact": string | null
          Capability: string | null
          "Capability Uplift Cost (AUD)": number | null
          "Estimated Benefit (AUD)": number | null
          "Future Role Demand % Change": string | null
          "Maturity Level": string | null
          Role: string | null
          "Role Annual Cost (AUD)": number | null
          "SFIA Code": string | null
        }
        Insert: {
          "AI Impact"?: string | null
          Capability?: string | null
          "Capability Uplift Cost (AUD)"?: number | null
          "Estimated Benefit (AUD)"?: number | null
          "Future Role Demand % Change"?: string | null
          "Maturity Level"?: string | null
          Role?: string | null
          "Role Annual Cost (AUD)"?: number | null
          "SFIA Code"?: string | null
        }
        Update: {
          "AI Impact"?: string | null
          Capability?: string | null
          "Capability Uplift Cost (AUD)"?: number | null
          "Estimated Benefit (AUD)"?: number | null
          "Future Role Demand % Change"?: string | null
          "Maturity Level"?: string | null
          Role?: string | null
          "Role Annual Cost (AUD)"?: number | null
          "SFIA Code"?: string | null
        }
        Relationships: []
      }
      AI_Role_Maturity_Enhanced_AllRoles: {
        Row: {
          Actions_Required: string | null
          Benefit_Rating: number | null
          Capability: string | null
          Cost_of_Uplift_$k: number | null
          Future_Role_Impact: string | null
          Maturity_Level: string | null
          "ROI_%": number | null
          Role: string | null
          SFIA_Code: string | null
          Skill_Description: string | null
        }
        Insert: {
          Actions_Required?: string | null
          Benefit_Rating?: number | null
          Capability?: string | null
          Cost_of_Uplift_$k?: number | null
          Future_Role_Impact?: string | null
          Maturity_Level?: string | null
          "ROI_%"?: number | null
          Role?: string | null
          SFIA_Code?: string | null
          Skill_Description?: string | null
        }
        Update: {
          Actions_Required?: string | null
          Benefit_Rating?: number | null
          Capability?: string | null
          Cost_of_Uplift_$k?: number | null
          Future_Role_Impact?: string | null
          Maturity_Level?: string | null
          "ROI_%"?: number | null
          Role?: string | null
          SFIA_Code?: string | null
          Skill_Description?: string | null
        }
        Relationships: []
      }
      AI_Role_Maturity_Enhanced_AllRoles2: {
        Row: {
          Actions_Required: string | null
          Benefit_Rating: number | null
          Capability: string | null
          Cost_of_Uplift_$k: number | null
          Future_Role_Impact: string | null
          Maturity_Level: string | null
          "ROI_%": number | null
          Role: string | null
          SFIA_Code: string | null
          Skill_Description: string | null
        }
        Insert: {
          Actions_Required?: string | null
          Benefit_Rating?: number | null
          Capability?: string | null
          Cost_of_Uplift_$k?: number | null
          Future_Role_Impact?: string | null
          Maturity_Level?: string | null
          "ROI_%"?: number | null
          Role?: string | null
          SFIA_Code?: string | null
          Skill_Description?: string | null
        }
        Update: {
          Actions_Required?: string | null
          Benefit_Rating?: number | null
          Capability?: string | null
          Cost_of_Uplift_$k?: number | null
          Future_Role_Impact?: string | null
          Maturity_Level?: string | null
          "ROI_%"?: number | null
          Role?: string | null
          SFIA_Code?: string | null
          Skill_Description?: string | null
        }
        Relationships: []
      }
      "AI_Role_Maturity_Enhanced_PM.csv": {
        Row: {
          "Actions Required": string | null
          "Capability Area": string | null
          "Cost to Uplift ($)": number | null
          "Expected Government Benefit ($)": number | null
          "Future Role Count": number | null
          "Maturity Level": string | null
          ROI: number | null
          Role: string | null
          "SFIA Code": string | null
          "Skills Developed": string | null
        }
        Insert: {
          "Actions Required"?: string | null
          "Capability Area"?: string | null
          "Cost to Uplift ($)"?: number | null
          "Expected Government Benefit ($)"?: number | null
          "Future Role Count"?: number | null
          "Maturity Level"?: string | null
          ROI?: number | null
          Role?: string | null
          "SFIA Code"?: string | null
          "Skills Developed"?: string | null
        }
        Update: {
          "Actions Required"?: string | null
          "Capability Area"?: string | null
          "Cost to Uplift ($)"?: number | null
          "Expected Government Benefit ($)"?: number | null
          "Future Role Count"?: number | null
          "Maturity Level"?: string | null
          ROI?: number | null
          Role?: string | null
          "SFIA Code"?: string | null
          "Skills Developed"?: string | null
        }
        Relationships: []
      }
      "AI_Task_Augmentation_Calculator_Template.csv": {
        Row: {
          Complexity: string | null
          Role: string | null
          Task: string | null
          TimeSavedEstimate: string | null
          Value: string | null
        }
        Insert: {
          Complexity?: string | null
          Role?: string | null
          Task?: string | null
          TimeSavedEstimate?: string | null
          Value?: string | null
        }
        Update: {
          Complexity?: string | null
          Role?: string | null
          Task?: string | null
          TimeSavedEstimate?: string | null
          Value?: string | null
        }
        Relationships: []
      }
      AI_Work_Packages__Complete: {
        Row: {
          "30-Day Target": number | null
          "60-Day Target": number | null
          "90-Day Target": number | null
          "Agentic AI Elements": string | null
          "Customer Outcome": string | null
          Deliverables: string | null
          Dependencies: string | null
          Description: string | null
          "Engagement Model": string | null
          "Estimated Cost (per engagement)": number | null
          "Estimated Revenue (per engagement)": number | null
          "Gross Margin (%)": number | null
          ID: number | null
          "KPI Metrics": string | null
          "Monitoring Method": string | null
          "New Role Requirements": string | null
          Notes: string | null
          "Old Role Description": string | null
          "Pricing Tier": string | null
          "Primary Sector": string | null
          "Stakeholder Impact": string | null
          "Upsell Opportunities": string | null
          "Work Package Title": string | null
          Workstream: string | null
        }
        Insert: {
          "30-Day Target"?: number | null
          "60-Day Target"?: number | null
          "90-Day Target"?: number | null
          "Agentic AI Elements"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          Dependencies?: string | null
          Description?: string | null
          "Engagement Model"?: string | null
          "Estimated Cost (per engagement)"?: number | null
          "Estimated Revenue (per engagement)"?: number | null
          "Gross Margin (%)"?: number | null
          ID?: number | null
          "KPI Metrics"?: string | null
          "Monitoring Method"?: string | null
          "New Role Requirements"?: string | null
          Notes?: string | null
          "Old Role Description"?: string | null
          "Pricing Tier"?: string | null
          "Primary Sector"?: string | null
          "Stakeholder Impact"?: string | null
          "Upsell Opportunities"?: string | null
          "Work Package Title"?: string | null
          Workstream?: string | null
        }
        Update: {
          "30-Day Target"?: number | null
          "60-Day Target"?: number | null
          "90-Day Target"?: number | null
          "Agentic AI Elements"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          Dependencies?: string | null
          Description?: string | null
          "Engagement Model"?: string | null
          "Estimated Cost (per engagement)"?: number | null
          "Estimated Revenue (per engagement)"?: number | null
          "Gross Margin (%)"?: number | null
          ID?: number | null
          "KPI Metrics"?: string | null
          "Monitoring Method"?: string | null
          "New Role Requirements"?: string | null
          Notes?: string | null
          "Old Role Description"?: string | null
          "Pricing Tier"?: string | null
          "Primary Sector"?: string | null
          "Stakeholder Impact"?: string | null
          "Upsell Opportunities"?: string | null
          "Work Package Title"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      AI_Work_Packages__Up_to_28_: {
        Row: {
          "Agentic Opportunity": string | null
          "Customer-Facing Benefit": string | null
          "Days to Deliver": string | null
          "Delivery Format": string | null
          "Effort Level (1-5)": string | null
          "Est. Cost ($AUD)": number | null
          "Est. Price ($AUD)": number | null
          "Key Actions": string | null
          "Margin (%)": number | null
          "New Role / Agentic Function": string | null
          "New Role Requirements": string | null
          "Old Role / Function": string | null
          "Problem Addressed": string | null
          "Revenue Estimate (AUD)": string | null
          Scalability: string | null
          Sector: string | null
          "Stakeholder Impact": string | null
          "Value Created": string | null
          "Value Pathway": string | null
          "Work Package Name": string | null
        }
        Insert: {
          "Agentic Opportunity"?: string | null
          "Customer-Facing Benefit"?: string | null
          "Days to Deliver"?: string | null
          "Delivery Format"?: string | null
          "Effort Level (1-5)"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          "Key Actions"?: string | null
          "Margin (%)"?: number | null
          "New Role / Agentic Function"?: string | null
          "New Role Requirements"?: string | null
          "Old Role / Function"?: string | null
          "Problem Addressed"?: string | null
          "Revenue Estimate (AUD)"?: string | null
          Scalability?: string | null
          Sector?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Value Pathway"?: string | null
          "Work Package Name"?: string | null
        }
        Update: {
          "Agentic Opportunity"?: string | null
          "Customer-Facing Benefit"?: string | null
          "Days to Deliver"?: string | null
          "Delivery Format"?: string | null
          "Effort Level (1-5)"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          "Key Actions"?: string | null
          "Margin (%)"?: number | null
          "New Role / Agentic Function"?: string | null
          "New Role Requirements"?: string | null
          "Old Role / Function"?: string | null
          "Problem Addressed"?: string | null
          "Revenue Estimate (AUD)"?: string | null
          Scalability?: string | null
          Sector?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Value Pathway"?: string | null
          "Work Package Name"?: string | null
        }
        Relationships: []
      }
      AI_Work_Packages_33_44: {
        Row: {
          "AI Impact": string | null
          Description: string | null
          "New Role (Post-AI)": string | null
          "Old Role (Pre-AI)": string | null
          "Revenue Potential": string | null
          "Support Required": string | null
          "Target Stakeholders": string | null
          "Time to Deploy": string | null
          "Work Package Name": string | null
        }
        Insert: {
          "AI Impact"?: string | null
          Description?: string | null
          "New Role (Post-AI)"?: string | null
          "Old Role (Pre-AI)"?: string | null
          "Revenue Potential"?: string | null
          "Support Required"?: string | null
          "Target Stakeholders"?: string | null
          "Time to Deploy"?: string | null
          "Work Package Name"?: string | null
        }
        Update: {
          "AI Impact"?: string | null
          Description?: string | null
          "New Role (Post-AI)"?: string | null
          "Old Role (Pre-AI)"?: string | null
          "Revenue Potential"?: string | null
          "Support Required"?: string | null
          "Target Stakeholders"?: string | null
          "Time to Deploy"?: string | null
          "Work Package Name"?: string | null
        }
        Relationships: []
      }
      "AI_WorkPackage_Master_Template.csv": {
        Row: {
          "Agent Enablement Pack": string | null
          "Agentic Substitution %": string | null
          "Audit / Oversight Fit": string | null
          "Bot Name / Persona": string | null
          "Brandable / White-label?": string | null
          "Buyer Persona": string | null
          "Case Study Link": string | null
          "Compliance Impact": string | null
          "Cost to Deliver": string | null
          "Customer Feedback Loop": string | null
          "Customer Tasks": string | null
          "Delivery Format": string | null
          "Engagement Duration": string | null
          "Inputs Required": string | null
          "Interactive Demo": string | null
          "KPI / Success Metrics": string | null
          Margin: string | null
          "Multi-Sector Variants": string | null
          "Notion / Figma / Canva": string | null
          "Outputs Delivered": string | null
          "Pipeline Fit": string | null
          "Platform Fit": string | null
          "Pre-Reqs / Risks": string | null
          "Pricing Tier": string | null
          "Problem Solved": string | null
          "Process / Method": string | null
          "Quote Line Item": string | null
          "Recommended Price": string | null
          "ROI Calculation": string | null
          "Sales Narrative": string | null
          "Scalability Notes": string | null
          "Scoring Models": string | null
          "Stakeholders Affected": string | null
          "Support Model": string | null
          "Target Audience": string | null
          "Tools / Agents Used": string | null
          "Uplift Paths": string | null
          "Work Package Title": string | null
          Workstream: string | null
        }
        Insert: {
          "Agent Enablement Pack"?: string | null
          "Agentic Substitution %"?: string | null
          "Audit / Oversight Fit"?: string | null
          "Bot Name / Persona"?: string | null
          "Brandable / White-label?"?: string | null
          "Buyer Persona"?: string | null
          "Case Study Link"?: string | null
          "Compliance Impact"?: string | null
          "Cost to Deliver"?: string | null
          "Customer Feedback Loop"?: string | null
          "Customer Tasks"?: string | null
          "Delivery Format"?: string | null
          "Engagement Duration"?: string | null
          "Inputs Required"?: string | null
          "Interactive Demo"?: string | null
          "KPI / Success Metrics"?: string | null
          Margin?: string | null
          "Multi-Sector Variants"?: string | null
          "Notion / Figma / Canva"?: string | null
          "Outputs Delivered"?: string | null
          "Pipeline Fit"?: string | null
          "Platform Fit"?: string | null
          "Pre-Reqs / Risks"?: string | null
          "Pricing Tier"?: string | null
          "Problem Solved"?: string | null
          "Process / Method"?: string | null
          "Quote Line Item"?: string | null
          "Recommended Price"?: string | null
          "ROI Calculation"?: string | null
          "Sales Narrative"?: string | null
          "Scalability Notes"?: string | null
          "Scoring Models"?: string | null
          "Stakeholders Affected"?: string | null
          "Support Model"?: string | null
          "Target Audience"?: string | null
          "Tools / Agents Used"?: string | null
          "Uplift Paths"?: string | null
          "Work Package Title"?: string | null
          Workstream?: string | null
        }
        Update: {
          "Agent Enablement Pack"?: string | null
          "Agentic Substitution %"?: string | null
          "Audit / Oversight Fit"?: string | null
          "Bot Name / Persona"?: string | null
          "Brandable / White-label?"?: string | null
          "Buyer Persona"?: string | null
          "Case Study Link"?: string | null
          "Compliance Impact"?: string | null
          "Cost to Deliver"?: string | null
          "Customer Feedback Loop"?: string | null
          "Customer Tasks"?: string | null
          "Delivery Format"?: string | null
          "Engagement Duration"?: string | null
          "Inputs Required"?: string | null
          "Interactive Demo"?: string | null
          "KPI / Success Metrics"?: string | null
          Margin?: string | null
          "Multi-Sector Variants"?: string | null
          "Notion / Figma / Canva"?: string | null
          "Outputs Delivered"?: string | null
          "Pipeline Fit"?: string | null
          "Platform Fit"?: string | null
          "Pre-Reqs / Risks"?: string | null
          "Pricing Tier"?: string | null
          "Problem Solved"?: string | null
          "Process / Method"?: string | null
          "Quote Line Item"?: string | null
          "Recommended Price"?: string | null
          "ROI Calculation"?: string | null
          "Sales Narrative"?: string | null
          "Scalability Notes"?: string | null
          "Scoring Models"?: string | null
          "Stakeholders Affected"?: string | null
          "Support Model"?: string | null
          "Target Audience"?: string | null
          "Tools / Agents Used"?: string | null
          "Uplift Paths"?: string | null
          "Work Package Title"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      AI_Workstream_Extras_Full_List: {
        Row: {
          Description: string | null
          Extra: string | null
          "Value Add": string | null
          Workstream: string | null
        }
        Insert: {
          Description?: string | null
          Extra?: string | null
          "Value Add"?: string | null
          Workstream?: string | null
        }
        Update: {
          Description?: string | null
          Extra?: string | null
          "Value Add"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      AI_Workstreams_Revenue_Model: {
        Row: {
          "30/60/90-Day Targets": string | null
          "Core Deliverables": string | null
          "Customer Engagement (How They Buy)": string | null
          "Customer Outcome": string | null
          Deliverables: string | null
          "Expected Units Sold (Quarter)": number | null
          "How It’s Delivered": string | null
          nan: string | null
          "Net Revenue After Training ($)": number | null
          "Quarterly Revenue ($)": number | null
          "Revenue Estimate (AUD)": string | null
          "Sellable Unit": string | null
          "Track Levels": string | null
          "Training Cost ($)": number | null
          "Unit Price ($)": number | null
          "Who It's For": string | null
          Workstream: string | null
        }
        Insert: {
          "30/60/90-Day Targets"?: string | null
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          "Expected Units Sold (Quarter)"?: number | null
          "How It’s Delivered"?: string | null
          nan?: string | null
          "Net Revenue After Training ($)"?: number | null
          "Quarterly Revenue ($)"?: number | null
          "Revenue Estimate (AUD)"?: string | null
          "Sellable Unit"?: string | null
          "Track Levels"?: string | null
          "Training Cost ($)"?: number | null
          "Unit Price ($)"?: number | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Update: {
          "30/60/90-Day Targets"?: string | null
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          "Expected Units Sold (Quarter)"?: number | null
          "How It’s Delivered"?: string | null
          nan?: string | null
          "Net Revenue After Training ($)"?: number | null
          "Quarterly Revenue ($)"?: number | null
          "Revenue Estimate (AUD)"?: string | null
          "Sellable Unit"?: string | null
          "Track Levels"?: string | null
          "Training Cost ($)"?: number | null
          "Unit Price ($)"?: number | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      allowed_domains: {
        Row: {
          created_at: string | null
          description: string | null
          domain: string
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          domain: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          domain?: string
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      api_data_cache: {
        Row: {
          api_source: string
          cache_key: string
          created_at: string
          data: Json
          endpoint: string
          expires_at: string
          id: string
        }
        Insert: {
          api_source: string
          cache_key: string
          created_at?: string
          data: Json
          endpoint: string
          expires_at: string
          id?: string
        }
        Update: {
          api_source?: string
          cache_key?: string
          created_at?: string
          data?: Json
          endpoint?: string
          expires_at?: string
          id?: string
        }
        Relationships: []
      }
      api_sources: {
        Row: {
          api_endpoint: string
          created_at: string
          failed_imports: number | null
          filters: Json | null
          id: string
          is_active: boolean | null
          last_error: string | null
          last_sync: string | null
          source_name: string
          successful_imports: number | null
          sync_config: Json | null
          sync_frequency: string | null
          total_records_found: number | null
          updated_at: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string
          failed_imports?: number | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_sync?: string | null
          source_name: string
          successful_imports?: number | null
          sync_config?: Json | null
          sync_frequency?: string | null
          total_records_found?: number | null
          updated_at?: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string
          failed_imports?: number | null
          filters?: Json | null
          id?: string
          is_active?: boolean | null
          last_error?: string | null
          last_sync?: string | null
          source_name?: string
          successful_imports?: number | null
          sync_config?: Json | null
          sync_frequency?: string | null
          total_records_found?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      apicostfeeds: {
        Row: {
          component_id: string | null
          feed_id: string
          last_fetched: string | null
          notes: string | null
          status: string | null
        }
        Insert: {
          component_id?: string | null
          feed_id: string
          last_fetched?: string | null
          notes?: string | null
          status?: string | null
        }
        Update: {
          component_id?: string | null
          feed_id?: string
          last_fetched?: string | null
          notes?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "apicostfeeds_component_id_fkey"
            columns: ["component_id"]
            isOneToOne: false
            referencedRelation: "costcomponents"
            referencedColumns: ["component_id"]
          },
        ]
      }
      application_logs: {
        Row: {
          created_at: string | null
          id: string
          level: string
          message: string
          metadata: Json | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          level: string
          message: string
          metadata?: Json | null
        }
        Update: {
          created_at?: string | null
          id?: string
          level?: string
          message?: string
          metadata?: Json | null
        }
        Relationships: []
      }
      approved_access: {
        Row: {
          access_token: string
          created_at: string
          email: string
          expires_at: string | null
          id: string
          page_access: string
          updated_at: string
        }
        Insert: {
          access_token: string
          created_at?: string
          email: string
          expires_at?: string | null
          id?: string
          page_access: string
          updated_at?: string
        }
        Update: {
          access_token?: string
          created_at?: string
          email?: string
          expires_at?: string | null
          id?: string
          page_access?: string
          updated_at?: string
        }
        Relationships: []
      }
      aps_payscale: {
        Row: {
          band_code: string
          currency: string | null
          effective_date: string | null
          salary_max: number | null
          salary_min: number | null
        }
        Insert: {
          band_code: string
          currency?: string | null
          effective_date?: string | null
          salary_max?: number | null
          salary_min?: number | null
        }
        Update: {
          band_code?: string
          currency?: string | null
          effective_date?: string | null
          salary_max?: number | null
          salary_min?: number | null
        }
        Relationships: []
      }
      aps_role_agent_alignment: {
        Row: {
          agent_id: string | null
          agent_name: string | null
          aps_band: string | null
          aps_role_title: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      aps_roles_and_skills: {
        Row: {
          aps_band: string
          aps_role: string
          complexity: string
          id: number
          required_skills: string
          required_tasks: string
        }
        Insert: {
          aps_band: string
          aps_role: string
          complexity: string
          id?: number
          required_skills: string
          required_tasks: string
        }
        Update: {
          aps_band?: string
          aps_role?: string
          complexity?: string
          id?: number
          required_skills?: string
          required_tasks?: string
        }
        Relationships: []
      }
      assessment_benchmarks: {
        Row: {
          average_value: number
          benchmark_category: string
          benchmark_type: string
          created_at: string
          data_source: string | null
          id: string
          last_updated: string | null
          metric_name: string
          percentile_25: number | null
          percentile_50: number | null
          percentile_75: number | null
          percentile_90: number | null
          sample_size: number | null
        }
        Insert: {
          average_value: number
          benchmark_category: string
          benchmark_type: string
          created_at?: string
          data_source?: string | null
          id?: string
          last_updated?: string | null
          metric_name: string
          percentile_25?: number | null
          percentile_50?: number | null
          percentile_75?: number | null
          percentile_90?: number | null
          sample_size?: number | null
        }
        Update: {
          average_value?: number
          benchmark_category?: string
          benchmark_type?: string
          created_at?: string
          data_source?: string | null
          id?: string
          last_updated?: string | null
          metric_name?: string
          percentile_25?: number | null
          percentile_50?: number | null
          percentile_75?: number | null
          percentile_90?: number | null
          sample_size?: number | null
        }
        Relationships: []
      }
      assessment_campaigns: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          organization_id: string | null
          start_date: string | null
          status: string | null
          target_departments: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          organization_id?: string | null
          start_date?: string | null
          status?: string | null
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          organization_id?: string | null
          start_date?: string | null
          status?: string | null
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "assessment_campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      assessment_progress_tracking: {
        Row: {
          assessment_type: string
          automation_adoption_pct: number | null
          baseline_assessment_id: string
          complexity_reduction_score: number | null
          created_at: string
          id: string
          metrics_data: Json | null
          organization_id: string | null
          progress_date: string
          progress_notes: string | null
          team_id: string | null
          time_recovery_achieved: number | null
          updated_at: string
          user_id: string | null
          value_realization_pct: number | null
        }
        Insert: {
          assessment_type: string
          automation_adoption_pct?: number | null
          baseline_assessment_id: string
          complexity_reduction_score?: number | null
          created_at?: string
          id?: string
          metrics_data?: Json | null
          organization_id?: string | null
          progress_date: string
          progress_notes?: string | null
          team_id?: string | null
          time_recovery_achieved?: number | null
          updated_at?: string
          user_id?: string | null
          value_realization_pct?: number | null
        }
        Update: {
          assessment_type?: string
          automation_adoption_pct?: number | null
          baseline_assessment_id?: string
          complexity_reduction_score?: number | null
          created_at?: string
          id?: string
          metrics_data?: Json | null
          organization_id?: string | null
          progress_date?: string
          progress_notes?: string | null
          team_id?: string | null
          time_recovery_achieved?: number | null
          updated_at?: string
          user_id?: string | null
          value_realization_pct?: number | null
        }
        Relationships: []
      }
      assessment_results: {
        Row: {
          assessment_data: Json
          assessment_type: string
          completed_at: string
          created_at: string
          detailed_scores: Json
          id: string
          individual_readiness_score: number | null
          maturity_stage_id: string | null
          organizational_readiness_score: number | null
          overall_score: number
          recommended_work_packages: string[] | null
          role_name: string
          session_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assessment_data?: Json
          assessment_type?: string
          completed_at?: string
          created_at?: string
          detailed_scores?: Json
          id?: string
          individual_readiness_score?: number | null
          maturity_stage_id?: string | null
          organizational_readiness_score?: number | null
          overall_score: number
          recommended_work_packages?: string[] | null
          role_name: string
          session_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assessment_data?: Json
          assessment_type?: string
          completed_at?: string
          created_at?: string
          detailed_scores?: Json
          id?: string
          individual_readiness_score?: number | null
          maturity_stage_id?: string | null
          organizational_readiness_score?: number | null
          overall_score?: number
          recommended_work_packages?: string[] | null
          role_name?: string
          session_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "assessment_results_maturity_stage_id_fkey"
            columns: ["maturity_stage_id"]
            isOneToOne: false
            referencedRelation: "maturity_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      assessment_roles: {
        Row: {
          ai_opportunities: Json | null
          created_at: string
          current_workflow: Json | null
          id: string
          pain_points: string[] | null
          persona_name: string | null
          roi_metrics: Json | null
          role_code: string
          role_description: string | null
          role_name: string
          service_offerings: Json | null
          updated_at: string
        }
        Insert: {
          ai_opportunities?: Json | null
          created_at?: string
          current_workflow?: Json | null
          id?: string
          pain_points?: string[] | null
          persona_name?: string | null
          roi_metrics?: Json | null
          role_code: string
          role_description?: string | null
          role_name: string
          service_offerings?: Json | null
          updated_at?: string
        }
        Update: {
          ai_opportunities?: Json | null
          created_at?: string
          current_workflow?: Json | null
          id?: string
          pain_points?: string[] | null
          persona_name?: string | null
          roi_metrics?: Json | null
          role_code?: string
          role_description?: string | null
          role_name?: string
          service_offerings?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      asset_usage_tracking: {
        Row: {
          asset_id: string
          created_at: string
          id: string
          last_used_at: string
          tenant_id: string | null
          updated_at: string
          usage_context: string | null
          usage_count: number
        }
        Insert: {
          asset_id: string
          created_at?: string
          id?: string
          last_used_at?: string
          tenant_id?: string | null
          updated_at?: string
          usage_context?: string | null
          usage_count?: number
        }
        Update: {
          asset_id?: string
          created_at?: string
          id?: string
          last_used_at?: string
          tenant_id?: string | null
          updated_at?: string
          usage_context?: string | null
          usage_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "asset_usage_tracking_asset_id_fkey"
            columns: ["asset_id"]
            isOneToOne: false
            referencedRelation: "shared_assets"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_insights: {
        Row: {
          audit_report_id: string | null
          created_at: string
          data_points: Json | null
          description: string
          id: string
          impact_score: number | null
          insight_type: string
          recommendation: string | null
          severity: string
          title: string
        }
        Insert: {
          audit_report_id?: string | null
          created_at?: string
          data_points?: Json | null
          description: string
          id?: string
          impact_score?: number | null
          insight_type: string
          recommendation?: string | null
          severity?: string
          title: string
        }
        Update: {
          audit_report_id?: string | null
          created_at?: string
          data_points?: Json | null
          description?: string
          id?: string
          impact_score?: number | null
          insight_type?: string
          recommendation?: string | null
          severity?: string
          title?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_insights_audit_report_id_fkey"
            columns: ["audit_report_id"]
            isOneToOne: false
            referencedRelation: "site_audit_reports"
            referencedColumns: ["id"]
          },
        ]
      }
      audit_progress: {
        Row: {
          audit_id: string | null
          completed_steps: number
          created_at: string
          current_step: string
          id: string
          status_message: string | null
          total_steps: number
          updated_at: string
        }
        Insert: {
          audit_id?: string | null
          completed_steps?: number
          created_at?: string
          current_step: string
          id?: string
          status_message?: string | null
          total_steps?: number
          updated_at?: string
        }
        Update: {
          audit_id?: string | null
          completed_steps?: number
          created_at?: string
          current_step?: string
          id?: string
          status_message?: string | null
          total_steps?: number
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "audit_progress_audit_id_fkey"
            columns: ["audit_id"]
            isOneToOne: false
            referencedRelation: "platform_audit_results"
            referencedColumns: ["id"]
          },
        ]
      }
      auditlog: {
        Row: {
          action: string | null
          audit_id: number
          entity_id: string | null
          entity_type: string | null
          metadata: Json | null
          timestamp: string | null
          user_id: string | null
        }
        Insert: {
          action?: string | null
          audit_id?: number
          entity_id?: string | null
          entity_type?: string | null
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string | null
          audit_id?: number
          entity_id?: string | null
          entity_type?: string | null
          metadata?: Json | null
          timestamp?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      augmented_deployment_priorities: {
        Row: {
          function: string | null
          why_augmented_first: string | null
        }
        Insert: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Update: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Relationships: []
      }
      auto_parse_log: {
        Row: {
          confidence_score: number | null
          created_at: string
          document_size_kb: number | null
          error_message: string | null
          external_id: string | null
          fields_extracted: number | null
          fields_total: number | null
          id: string
          parsed_fields: Json | null
          parsing_status: string
          processing_time_ms: number | null
          raw_data: Json | null
          retry_count: number | null
          rft_id: string | null
          source_api: string
          validation_errors: string[] | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string
          document_size_kb?: number | null
          error_message?: string | null
          external_id?: string | null
          fields_extracted?: number | null
          fields_total?: number | null
          id?: string
          parsed_fields?: Json | null
          parsing_status: string
          processing_time_ms?: number | null
          raw_data?: Json | null
          retry_count?: number | null
          rft_id?: string | null
          source_api: string
          validation_errors?: string[] | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string
          document_size_kb?: number | null
          error_message?: string | null
          external_id?: string | null
          fields_extracted?: number | null
          fields_total?: number | null
          id?: string
          parsed_fields?: Json | null
          parsing_status?: string
          processing_time_ms?: number | null
          raw_data?: Json | null
          retry_count?: number | null
          rft_id?: string | null
          source_api?: string
          validation_errors?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "auto_parse_log_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_assessments: {
        Row: {
          additional_details: string | null
          assessment_name: string
          created_at: string
          custom_tasks: Json
          estimated_timeline_months: number | null
          id: string
          matrix_results: Json
          roi_estimate: number | null
          selected_tasks: Json
          total_effort_score: number | null
          total_impact_score: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          additional_details?: string | null
          assessment_name: string
          created_at?: string
          custom_tasks?: Json
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json
          roi_estimate?: number | null
          selected_tasks?: Json
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          additional_details?: string | null
          assessment_name?: string
          created_at?: string
          custom_tasks?: Json
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json
          roi_estimate?: number | null
          selected_tasks?: Json
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      automation_initiatives: {
        Row: {
          actual_completion_date: string | null
          actual_start_date: string | null
          assessment_id: string | null
          category: string
          created_at: string
          effort_score: number
          estimated_completion_date: string | null
          estimated_start_date: string | null
          id: string
          impact_score: number
          initiative_name: string
          priority_level: string
          resources_required: Json | null
          roi_actual: number | null
          roi_projected: number | null
          status: string
          success_metrics: Json | null
          task_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_completion_date?: string | null
          actual_start_date?: string | null
          assessment_id?: string | null
          category: string
          created_at?: string
          effort_score: number
          estimated_completion_date?: string | null
          estimated_start_date?: string | null
          id?: string
          impact_score: number
          initiative_name: string
          priority_level?: string
          resources_required?: Json | null
          roi_actual?: number | null
          roi_projected?: number | null
          status?: string
          success_metrics?: Json | null
          task_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_completion_date?: string | null
          actual_start_date?: string | null
          assessment_id?: string | null
          category?: string
          created_at?: string
          effort_score?: number
          estimated_completion_date?: string | null
          estimated_start_date?: string | null
          id?: string
          impact_score?: number
          initiative_name?: string
          priority_level?: string
          resources_required?: Json | null
          roi_actual?: number | null
          roi_projected?: number | null
          status?: string
          success_metrics?: Json | null
          task_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "automation_initiatives_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "automation_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      automation_survey_responses: {
        Row: {
          created_at: string
          desired_automations: string | null
          email: string | null
          id: number
          problems_to_solve: string | null
          role_or_department: string | null
        }
        Insert: {
          created_at?: string
          desired_automations?: string | null
          email?: string | null
          id?: number
          problems_to_solve?: string | null
          role_or_department?: string | null
        }
        Update: {
          created_at?: string
          desired_automations?: string | null
          email?: string | null
          id?: number
          problems_to_solve?: string | null
          role_or_department?: string | null
        }
        Relationships: []
      }
      autoparse_orchestrator_log: {
        Row: {
          completed_at: string | null
          failed_parses: number | null
          id: string
          market_insights_generated: number | null
          sources_synced: string[]
          started_at: string | null
          status: string | null
          successful_parses: number | null
          sync_batch_id: string | null
          sync_duration_ms: number | null
          total_records_processed: number | null
        }
        Insert: {
          completed_at?: string | null
          failed_parses?: number | null
          id?: string
          market_insights_generated?: number | null
          sources_synced: string[]
          started_at?: string | null
          status?: string | null
          successful_parses?: number | null
          sync_batch_id?: string | null
          sync_duration_ms?: number | null
          total_records_processed?: number | null
        }
        Update: {
          completed_at?: string | null
          failed_parses?: number | null
          id?: string
          market_insights_generated?: number | null
          sources_synced?: string[]
          started_at?: string | null
          status?: string | null
          successful_parses?: number | null
          sync_batch_id?: string | null
          sync_duration_ms?: number | null
          total_records_processed?: number | null
        }
        Relationships: []
      }
      bd_summaries: {
        Row: {
          created_at: string
          html_content: string
          id: string
          json_data: Json
          report_date: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          html_content: string
          id?: string
          json_data: Json
          report_date?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          html_content?: string
          id?: string
          json_data?: Json
          report_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      billingevents: {
        Row: {
          amount: number | null
          billing_id: string | null
          event_id: number
          timestamp: string | null
          type: string | null
        }
        Insert: {
          amount?: number | null
          billing_id?: string | null
          event_id?: number
          timestamp?: string | null
          type?: string | null
        }
        Update: {
          amount?: number | null
          billing_id?: string | null
          event_id?: number
          timestamp?: string | null
          type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "billingevents_billing_id_fkey"
            columns: ["billing_id"]
            isOneToOne: false
            referencedRelation: "billingrecords"
            referencedColumns: ["billing_id"]
          },
        ]
      }
      billingrecords: {
        Row: {
          amount: number | null
          billing_id: string
          currency: string | null
          customer_id: string | null
          period_end: string | null
          period_start: string | null
          status: string | null
        }
        Insert: {
          amount?: number | null
          billing_id: string
          currency?: string | null
          customer_id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
        }
        Update: {
          amount?: number | null
          billing_id?: string
          currency?: string | null
          customer_id?: string | null
          period_end?: string | null
          period_start?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "billingrecords_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      boilerplate_library: {
        Row: {
          category: string
          content_template: string
          content_type: string
          created_at: string | null
          delivery_models: string[] | null
          id: string
          is_active: boolean | null
          required_variables: Json | null
          template_code: string
          template_name: string
          updated_at: string | null
          version: number | null
        }
        Insert: {
          category: string
          content_template: string
          content_type: string
          created_at?: string | null
          delivery_models?: string[] | null
          id?: string
          is_active?: boolean | null
          required_variables?: Json | null
          template_code: string
          template_name: string
          updated_at?: string | null
          version?: number | null
        }
        Update: {
          category?: string
          content_template?: string
          content_type?: string
          created_at?: string | null
          delivery_models?: string[] | null
          id?: string
          is_active?: boolean | null
          required_variables?: Json | null
          template_code?: string
          template_name?: string
          updated_at?: string | null
          version?: number | null
        }
        Relationships: []
      }
      boilerplate_templates: {
        Row: {
          content: string
          created_at: string | null
          delivery_model: string | null
          id: string
          is_active: boolean | null
          section_type: string
          template_name: string
          updated_at: string | null
          variables: Json | null
        }
        Insert: {
          content: string
          created_at?: string | null
          delivery_model?: string | null
          id?: string
          is_active?: boolean | null
          section_type: string
          template_name: string
          updated_at?: string | null
          variables?: Json | null
        }
        Update: {
          content?: string
          created_at?: string | null
          delivery_model?: string | null
          id?: string
          is_active?: boolean | null
          section_type?: string
          template_name?: string
          updated_at?: string | null
          variables?: Json | null
        }
        Relationships: []
      }
      budgetallocations: {
        Row: {
          allocated_amount: number | null
          budget_id: number
          cost_center: string | null
          period: string | null
        }
        Insert: {
          allocated_amount?: number | null
          budget_id?: number
          cost_center?: string | null
          period?: string | null
        }
        Update: {
          allocated_amount?: number | null
          budget_id?: number
          cost_center?: string | null
          period?: string | null
        }
        Relationships: []
      }
      bundle_categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      bundle_components: {
        Row: {
          bundle_id: string
          created_at: string
          description: string | null
          display_order: number
          id: string
          name: string
          quantity: string | null
          updated_at: string
        }
        Insert: {
          bundle_id: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name: string
          quantity?: string | null
          updated_at?: string
        }
        Update: {
          bundle_id?: string
          created_at?: string
          description?: string | null
          display_order?: number
          id?: string
          name?: string
          quantity?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundle_components_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "bundles"
            referencedColumns: ["id"]
          },
        ]
      }
      bundle_recommendations: {
        Row: {
          bundle_type: string
          confidence_score: number
          cost_savings_percent: number | null
          created_at: string | null
          department_fit: string[] | null
          estimated_synergy_boost: number | null
          id: string
          implementation_complexity: string | null
          primary_agent_code: string
          recommended_agent_codes: string[]
          success_rate_estimate: number | null
          updated_at: string | null
          use_case_description: string | null
        }
        Insert: {
          bundle_type: string
          confidence_score?: number
          cost_savings_percent?: number | null
          created_at?: string | null
          department_fit?: string[] | null
          estimated_synergy_boost?: number | null
          id?: string
          implementation_complexity?: string | null
          primary_agent_code: string
          recommended_agent_codes: string[]
          success_rate_estimate?: number | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Update: {
          bundle_type?: string
          confidence_score?: number
          cost_savings_percent?: number | null
          created_at?: string | null
          department_fit?: string[] | null
          estimated_synergy_boost?: number | null
          id?: string
          implementation_complexity?: string | null
          primary_agent_code?: string
          recommended_agent_codes?: string[]
          success_rate_estimate?: number | null
          updated_at?: string | null
          use_case_description?: string | null
        }
        Relationships: []
      }
      bundleagents: {
        Row: {
          agent_code: string
          bundle_id: string
        }
        Insert: {
          agent_code: string
          bundle_id: string
        }
        Update: {
          agent_code?: string
          bundle_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundleagents_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
        ]
      }
      bundles: {
        Row: {
          category_id: string
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          name: string
          price: number | null
          sku: string
          updated_at: string
        }
        Insert: {
          category_id: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name: string
          price?: number | null
          sku: string
          updated_at?: string
        }
        Update: {
          category_id?: string
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          name?: string
          price?: number | null
          sku?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "bundles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "bundle_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      "bundles review": {
        Row: {
          A: string | null
          "Bundle Name": string | null
          C: string | null
          Category: string | null
          Description: string | null
          I: string | null
          "Included in Base": boolean | null
          Optional: boolean | null
          Phase: string | null
          "Phase Code": string | null
          "Price (AUD)": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          R: string | null
          SKU: string | null
        }
        Insert: {
          A?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          Description?: string | null
          I?: string | null
          "Included in Base"?: boolean | null
          Optional?: boolean | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          R?: string | null
          SKU?: string | null
        }
        Update: {
          A?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          Description?: string | null
          I?: string | null
          "Included in Base"?: boolean | null
          Optional?: boolean | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          R?: string | null
          SKU?: string | null
        }
        Relationships: []
      }
      business_activities: {
        Row: {
          activity_code: string
          business_value_score: number | null
          category: string
          complexity_level: string | null
          created_at: string
          description: string | null
          estimated_duration_days: number | null
          id: string
          title: string
          updated_at: string
        }
        Insert: {
          activity_code: string
          business_value_score?: number | null
          category: string
          complexity_level?: string | null
          created_at?: string
          description?: string | null
          estimated_duration_days?: number | null
          id?: string
          title: string
          updated_at?: string
        }
        Update: {
          activity_code?: string
          business_value_score?: number | null
          category?: string
          complexity_level?: string | null
          created_at?: string
          description?: string | null
          estimated_duration_days?: number | null
          id?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      calculation_assignments: {
        Row: {
          assigned_by: string
          assigned_to_email: string
          calculation_id: string
          completed_at: string | null
          created_at: string
          due_date: string | null
          id: string
          message: string | null
          status: Database["public"]["Enums"]["assignment_status"]
          updated_at: string
        }
        Insert: {
          assigned_by: string
          assigned_to_email: string
          calculation_id: string
          completed_at?: string | null
          created_at?: string
          due_date?: string | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
          updated_at?: string
        }
        Update: {
          assigned_by?: string
          assigned_to_email?: string
          calculation_id?: string
          completed_at?: string | null
          created_at?: string
          due_date?: string | null
          id?: string
          message?: string | null
          status?: Database["public"]["Enums"]["assignment_status"]
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calculation_assignments_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "calculations"
            referencedColumns: ["id"]
          },
        ]
      }
      calculation_comments: {
        Row: {
          author_email: string
          author_name: string | null
          calculation_id: string
          comment_text: string
          comment_type: string | null
          component_reference: string | null
          created_at: string
          id: string
          is_internal: boolean | null
          is_resolved: boolean | null
          parent_id: string | null
          updated_at: string
        }
        Insert: {
          author_email: string
          author_name?: string | null
          calculation_id: string
          comment_text: string
          comment_type?: string | null
          component_reference?: string | null
          created_at?: string
          id?: string
          is_internal?: boolean | null
          is_resolved?: boolean | null
          parent_id?: string | null
          updated_at?: string
        }
        Update: {
          author_email?: string
          author_name?: string | null
          calculation_id?: string
          comment_text?: string
          comment_type?: string | null
          component_reference?: string | null
          created_at?: string
          id?: string
          is_internal?: boolean | null
          is_resolved?: boolean | null
          parent_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "calculation_comments_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "calculations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculation_comments_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "calculation_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      calculation_events: {
        Row: {
          actor_email: string | null
          actor_name: string | null
          calculation_id: string
          created_at: string
          event_data: Json | null
          event_type: string
          id: string
          session_id: string | null
        }
        Insert: {
          actor_email?: string | null
          actor_name?: string | null
          calculation_id: string
          created_at?: string
          event_data?: Json | null
          event_type: string
          id?: string
          session_id?: string | null
        }
        Update: {
          actor_email?: string | null
          actor_name?: string | null
          calculation_id?: string
          created_at?: string
          event_data?: Json | null
          event_type?: string
          id?: string
          session_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calculation_events_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "calculations"
            referencedColumns: ["id"]
          },
        ]
      }
      calculation_versions: {
        Row: {
          calculation_id: string
          change_summary: string | null
          created_at: string
          created_by: string | null
          id: string
          input_data: Json
          result_data: Json
          total_compensation: number
          version_number: number
        }
        Insert: {
          calculation_id: string
          change_summary?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          input_data: Json
          result_data: Json
          total_compensation: number
          version_number: number
        }
        Update: {
          calculation_id?: string
          change_summary?: string | null
          created_at?: string
          created_by?: string | null
          id?: string
          input_data?: Json
          result_data?: Json
          total_compensation?: number
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "calculation_versions_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "calculations"
            referencedColumns: ["id"]
          },
        ]
      }
      calculations: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          assigned_to_email: string | null
          completed_at: string | null
          created_at: string
          customer_approved_at: string | null
          customer_email: string | null
          customer_name: string | null
          customer_rejected_at: string | null
          description: string | null
          due_date: string | null
          id: string
          input_data: Json
          rejection_reason: string | null
          result_data: Json
          session_id: string | null
          share_token: string | null
          stage: Database["public"]["Enums"]["calculation_stage"]
          title: string
          total_compensation: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          assigned_to_email?: string | null
          completed_at?: string | null
          created_at?: string
          customer_approved_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_rejected_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          input_data: Json
          rejection_reason?: string | null
          result_data: Json
          session_id?: string | null
          share_token?: string | null
          stage?: Database["public"]["Enums"]["calculation_stage"]
          title: string
          total_compensation: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          assigned_to_email?: string | null
          completed_at?: string | null
          created_at?: string
          customer_approved_at?: string | null
          customer_email?: string | null
          customer_name?: string | null
          customer_rejected_at?: string | null
          description?: string | null
          due_date?: string | null
          id?: string
          input_data?: Json
          rejection_reason?: string | null
          result_data?: Json
          session_id?: string | null
          share_token?: string | null
          stage?: Database["public"]["Enums"]["calculation_stage"]
          title?: string
          total_compensation?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      calculator_comments: {
        Row: {
          calculation_id: string
          comment_text: string
          comment_type: string | null
          component_reference: string | null
          created_at: string
          id: string
          is_deleted: boolean | null
          is_resolved: boolean | null
          parent_comment_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          calculation_id: string
          comment_text: string
          comment_type?: string | null
          component_reference?: string | null
          created_at?: string
          id?: string
          is_deleted?: boolean | null
          is_resolved?: boolean | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          calculation_id?: string
          comment_text?: string
          comment_type?: string | null
          component_reference?: string | null
          created_at?: string
          id?: string
          is_deleted?: boolean | null
          is_resolved?: boolean | null
          parent_comment_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calculator_comments_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "compensation_evolution"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calculator_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "calculator_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      calculator_results: {
        Row: {
          calculator_type_id: string | null
          created_at: string | null
          id: string
          input_data: Json
          metadata: Json | null
          result_data: Json
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          calculator_type_id?: string | null
          created_at?: string | null
          id?: string
          input_data: Json
          metadata?: Json | null
          result_data: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          calculator_type_id?: string | null
          created_at?: string | null
          id?: string
          input_data?: Json
          metadata?: Json | null
          result_data?: Json
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "calculator_results_calculator_type_id_fkey"
            columns: ["calculator_type_id"]
            isOneToOne: false
            referencedRelation: "calculator_types"
            referencedColumns: ["id"]
          },
        ]
      }
      calculator_sessions: {
        Row: {
          approach_question: string | null
          avg_hourly_wage: string | null
          breach_cost: string | null
          breach_risk_percent: string | null
          challenges_question: string | null
          company_name: string
          company_revenue: string | null
          contractor_cost: string | null
          created_at: string | null
          device_replacement_cost: string | null
          downtime_cost_per_hour: string | null
          downtime_hours: string | null
          downtime_last_year: boolean | null
          id: string
          industry: string | null
          it_issues_frequency: string | null
          it_staff_cost: string | null
          name: string | null
          number_of_connected_devices: string | null
          number_of_users: string
          number_of_windows_users: string | null
          priority_question: string | null
          productivity_loss_mins: string | null
          results: Json | null
          revenue_per_employee: string | null
          selected_services: string[] | null
          software_cost: string | null
          timeline_question: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          approach_question?: string | null
          avg_hourly_wage?: string | null
          breach_cost?: string | null
          breach_risk_percent?: string | null
          challenges_question?: string | null
          company_name: string
          company_revenue?: string | null
          contractor_cost?: string | null
          created_at?: string | null
          device_replacement_cost?: string | null
          downtime_cost_per_hour?: string | null
          downtime_hours?: string | null
          downtime_last_year?: boolean | null
          id?: string
          industry?: string | null
          it_issues_frequency?: string | null
          it_staff_cost?: string | null
          name?: string | null
          number_of_connected_devices?: string | null
          number_of_users: string
          number_of_windows_users?: string | null
          priority_question?: string | null
          productivity_loss_mins?: string | null
          results?: Json | null
          revenue_per_employee?: string | null
          selected_services?: string[] | null
          software_cost?: string | null
          timeline_question?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          approach_question?: string | null
          avg_hourly_wage?: string | null
          breach_cost?: string | null
          breach_risk_percent?: string | null
          challenges_question?: string | null
          company_name?: string
          company_revenue?: string | null
          contractor_cost?: string | null
          created_at?: string | null
          device_replacement_cost?: string | null
          downtime_cost_per_hour?: string | null
          downtime_hours?: string | null
          downtime_last_year?: boolean | null
          id?: string
          industry?: string | null
          it_issues_frequency?: string | null
          it_staff_cost?: string | null
          name?: string | null
          number_of_connected_devices?: string | null
          number_of_users?: string
          number_of_windows_users?: string | null
          priority_question?: string | null
          productivity_loss_mins?: string | null
          results?: Json | null
          revenue_per_employee?: string | null
          selected_services?: string[] | null
          software_cost?: string | null
          timeline_question?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      calculator_types: {
        Row: {
          code: string
          created_at: string | null
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string | null
        }
        Insert: {
          code: string
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string | null
        }
        Update: {
          code?: string
          created_at?: string | null
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      campaign_notifications: {
        Row: {
          campaign_id: string
          content: string
          created_at: string | null
          error_message: string | null
          id: string
          notification_type: string
          participant_id: string | null
          scheduled_for: string | null
          sent_at: string | null
          status: string
          subject: string
          updated_at: string | null
        }
        Insert: {
          campaign_id: string
          content: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          notification_type: string
          participant_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject: string
          updated_at?: string | null
        }
        Update: {
          campaign_id?: string
          content?: string
          created_at?: string | null
          error_message?: string | null
          id?: string
          notification_type?: string
          participant_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string
          subject?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_notifications_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "enhanced_assessment_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campaign_notifications_participant_id_fkey"
            columns: ["participant_id"]
            isOneToOne: false
            referencedRelation: "campaign_participants"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_participants: {
        Row: {
          campaign_id: string
          completed_at: string | null
          created_at: string | null
          department: string | null
          email: string
          first_name: string | null
          id: string
          invited_at: string | null
          last_name: string | null
          last_reminder_sent: string | null
          reminder_count: number | null
          started_at: string | null
          status: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          campaign_id: string
          completed_at?: string | null
          created_at?: string | null
          department?: string | null
          email: string
          first_name?: string | null
          id?: string
          invited_at?: string | null
          last_name?: string | null
          last_reminder_sent?: string | null
          reminder_count?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          campaign_id?: string
          completed_at?: string | null
          created_at?: string | null
          department?: string | null
          email?: string
          first_name?: string | null
          id?: string
          invited_at?: string | null
          last_name?: string | null
          last_reminder_sent?: string | null
          reminder_count?: number | null
          started_at?: string | null
          status?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_participants_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "enhanced_assessment_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      campaign_templates: {
        Row: {
          created_at: string | null
          created_by: string | null
          description: string | null
          id: string
          is_default: boolean | null
          name: string
          organization_id: string
          template_data: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          organization_id: string
          template_data?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          organization_id?: string
          template_data?: Json
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campaign_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      candidates: {
        Row: {
          availability: string
          clearance: string
          contract_end: string
          id: number
          location: string
          name: string
          skills: string | null
        }
        Insert: {
          availability: string
          clearance: string
          contract_end: string
          id: number
          location: string
          name: string
          skills?: string | null
        }
        Update: {
          availability?: string
          clearance?: string
          contract_end?: string
          id?: number
          location?: string
          name?: string
          skills?: string | null
        }
        Relationships: []
      }
      capability_assessments: {
        Row: {
          areas_for_improvement: string[] | null
          assessment_date: string
          assessment_type: string
          competency_scores: Json
          created_at: string
          id: string
          overall_maturity_level: number
          recommended_actions: Json | null
          role: string
          strengths: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          areas_for_improvement?: string[] | null
          assessment_date?: string
          assessment_type?: string
          competency_scores: Json
          created_at?: string
          id?: string
          overall_maturity_level: number
          recommended_actions?: Json | null
          role: string
          strengths?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          areas_for_improvement?: string[] | null
          assessment_date?: string
          assessment_type?: string
          competency_scores?: Json
          created_at?: string
          id?: string
          overall_maturity_level?: number
          recommended_actions?: Json | null
          role?: string
          strengths?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      capability_heatmap: {
        Row: {
          domain: string
          id: string
          losses: number | null
          updated_at: string | null
          wins: number | null
        }
        Insert: {
          domain: string
          id?: string
          losses?: number | null
          updated_at?: string | null
          wins?: number | null
        }
        Update: {
          domain?: string
          id?: string
          losses?: number | null
          updated_at?: string | null
          wins?: number | null
        }
        Relationships: []
      }
      capability_profile_overlays: {
        Row: {
          agent_code: string | null
          cv_overlay_required: boolean | null
          function: string | null
          overlay_reason: string | null
          overlay_suggested_roles: string | null
          persona: string | null
          sfia_level: string | null
        }
        Insert: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Update: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Relationships: []
      }
      capability_requirements_matrix: {
        Row: {
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      capacity: {
        Row: {
          availability_pct: number
          candidate_id: string
          created_at: string | null
          current_assignments: Json
          labor_model: string | null
          last_synced: string | null
          max_onboard_time: number
          timezone: string
          updated_at: string | null
        }
        Insert: {
          availability_pct?: number
          candidate_id: string
          created_at?: string | null
          current_assignments?: Json
          labor_model?: string | null
          last_synced?: string | null
          max_onboard_time?: number
          timezone: string
          updated_at?: string | null
        }
        Update: {
          availability_pct?: number
          candidate_id?: string
          created_at?: string | null
          current_assignments?: Json
          labor_model?: string | null
          last_synced?: string | null
          max_onboard_time?: number
          timezone?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      capacity_optimization_engine: {
        Row: {
          agent_code: string | null
          assigned_hours: number | null
          delivery_model: string | null
          function: string | null
          residual_capacity_pct: number | null
          reuse_recommendation: string | null
          total_capacity: number | null
        }
        Insert: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Update: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Relationships: []
      }
      capacity_utilization_tracking: {
        Row: {
          agent_code: string
          baseline_capacity_hours: number
          client_satisfaction_score: number | null
          created_at: string | null
          efficiency_score: number | null
          excess_hours: number
          id: string
          monetized_hours: number | null
          reuse_count: number | null
          revenue_generated: number | null
          tracking_period_end: string
          tracking_period_start: string
          updated_at: string | null
          utilization_percent: number
          utilized_hours: number
        }
        Insert: {
          agent_code: string
          baseline_capacity_hours: number
          client_satisfaction_score?: number | null
          created_at?: string | null
          efficiency_score?: number | null
          excess_hours: number
          id?: string
          monetized_hours?: number | null
          reuse_count?: number | null
          revenue_generated?: number | null
          tracking_period_end: string
          tracking_period_start: string
          updated_at?: string | null
          utilization_percent: number
          utilized_hours: number
        }
        Update: {
          agent_code?: string
          baseline_capacity_hours?: number
          client_satisfaction_score?: number | null
          created_at?: string | null
          efficiency_score?: number | null
          excess_hours?: number
          id?: string
          monetized_hours?: number | null
          reuse_count?: number | null
          revenue_generated?: number | null
          tracking_period_end?: string
          tracking_period_start?: string
          updated_at?: string | null
          utilization_percent?: number
          utilized_hours?: number
        }
        Relationships: []
      }
      case_studies: {
        Row: {
          category: string
          content: string
          created_at: string
          description: string
          featured: boolean | null
          id: string
          thumbnail_url: string | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content: string
          created_at?: string
          description: string
          featured?: boolean | null
          id?: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          description?: string
          featured?: boolean | null
          id?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      catalogversions: {
        Row: {
          change_type: string | null
          changed_at: string | null
          changed_by: string | null
          entity_id: string | null
          entity_type: string | null
          notes: string | null
          version_id: number
        }
        Insert: {
          change_type?: string | null
          changed_at?: string | null
          changed_by?: string | null
          entity_id?: string | null
          entity_type?: string | null
          notes?: string | null
          version_id?: number
        }
        Update: {
          change_type?: string | null
          changed_at?: string | null
          changed_by?: string | null
          entity_id?: string | null
          entity_type?: string | null
          notes?: string | null
          version_id?: number
        }
        Relationships: []
      }
      ceo_ai_era_kpis: {
        Row: {
          ai_assisted_error_prevention: number | null
          ai_competency_score: number | null
          ai_document_accuracy_pct: number | null
          ai_documents_generated: number | null
          ai_email_responses_generated: number | null
          ai_enhanced_client_deliverables: number | null
          ai_insights_generated: number | null
          ai_meeting_summaries_created: number | null
          ai_process_improvements_implemented: number | null
          ai_process_improvements_suggested: number | null
          ai_training_modules_completed: number | null
          client_feedback_improvement_score: number | null
          created_at: string
          decision_making_speed_improvement_pct: number | null
          document_review_time_saved_hours: number | null
          id: string
          manual_error_incidents: number | null
          measurement_date: string
          meeting_prep_time_saved_hours: number | null
          role_id: string
        }
        Insert: {
          ai_assisted_error_prevention?: number | null
          ai_competency_score?: number | null
          ai_document_accuracy_pct?: number | null
          ai_documents_generated?: number | null
          ai_email_responses_generated?: number | null
          ai_enhanced_client_deliverables?: number | null
          ai_insights_generated?: number | null
          ai_meeting_summaries_created?: number | null
          ai_process_improvements_implemented?: number | null
          ai_process_improvements_suggested?: number | null
          ai_training_modules_completed?: number | null
          client_feedback_improvement_score?: number | null
          created_at?: string
          decision_making_speed_improvement_pct?: number | null
          document_review_time_saved_hours?: number | null
          id?: string
          manual_error_incidents?: number | null
          measurement_date?: string
          meeting_prep_time_saved_hours?: number | null
          role_id: string
        }
        Update: {
          ai_assisted_error_prevention?: number | null
          ai_competency_score?: number | null
          ai_document_accuracy_pct?: number | null
          ai_documents_generated?: number | null
          ai_email_responses_generated?: number | null
          ai_enhanced_client_deliverables?: number | null
          ai_insights_generated?: number | null
          ai_meeting_summaries_created?: number | null
          ai_process_improvements_implemented?: number | null
          ai_process_improvements_suggested?: number | null
          ai_training_modules_completed?: number | null
          client_feedback_improvement_score?: number | null
          created_at?: string
          decision_making_speed_improvement_pct?: number | null
          document_review_time_saved_hours?: number | null
          id?: string
          manual_error_incidents?: number | null
          measurement_date?: string
          meeting_prep_time_saved_hours?: number | null
          role_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ceo_ai_era_kpis_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "ceo_internal_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      ceo_cost_signals: {
        Row: {
          automation_opportunity: boolean | null
          cost_impact_weekly: number | null
          created_at: string
          detection_date: string
          estimated_savings: number | null
          id: string
          resolution_date: string | null
          resolution_status: string | null
          severity_level: number | null
          signal_description: string
          signal_type: string
          team_id: string
        }
        Insert: {
          automation_opportunity?: boolean | null
          cost_impact_weekly?: number | null
          created_at?: string
          detection_date?: string
          estimated_savings?: number | null
          id?: string
          resolution_date?: string | null
          resolution_status?: string | null
          severity_level?: number | null
          signal_description: string
          signal_type: string
          team_id: string
        }
        Update: {
          automation_opportunity?: boolean | null
          cost_impact_weekly?: number | null
          created_at?: string
          detection_date?: string
          estimated_savings?: number | null
          id?: string
          resolution_date?: string | null
          resolution_status?: string | null
          severity_level?: number | null
          signal_description?: string
          signal_type?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "ceo_cost_signals_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ceo_internal_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      ceo_internal_roles: {
        Row: {
          automation_readiness_score: number | null
          billable_target_pct: number | null
          created_at: string
          employee_name: string | null
          hourly_rate: number | null
          id: string
          role_title: string
          seniority_level: string | null
          team_id: string
          updated_at: string
        }
        Insert: {
          automation_readiness_score?: number | null
          billable_target_pct?: number | null
          created_at?: string
          employee_name?: string | null
          hourly_rate?: number | null
          id?: string
          role_title: string
          seniority_level?: string | null
          team_id: string
          updated_at?: string
        }
        Update: {
          automation_readiness_score?: number | null
          billable_target_pct?: number | null
          created_at?: string
          employee_name?: string | null
          hourly_rate?: number | null
          id?: string
          role_title?: string
          seniority_level?: string | null
          team_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "ceo_internal_roles_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ceo_internal_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      ceo_internal_teams: {
        Row: {
          budget_allocated: number | null
          created_at: string
          function_category: string
          headcount: number | null
          id: string
          team_lead: string | null
          team_name: string
          updated_at: string
        }
        Insert: {
          budget_allocated?: number | null
          created_at?: string
          function_category: string
          headcount?: number | null
          id?: string
          team_lead?: string | null
          team_name: string
          updated_at?: string
        }
        Update: {
          budget_allocated?: number | null
          created_at?: string
          function_category?: string
          headcount?: number | null
          id?: string
          team_lead?: string | null
          team_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      ceo_performance_metrics: {
        Row: {
          automation_tools_used: number | null
          billable_hours_week: number | null
          billable_percentage: number | null
          client_satisfaction_score: number | null
          cost_to_company: number | null
          created_at: string
          id: string
          manual_hours_saved: number | null
          measurement_date: string
          projects_active: number | null
          revenue_generated: number | null
          role_id: string
          total_hours_week: number | null
        }
        Insert: {
          automation_tools_used?: number | null
          billable_hours_week?: number | null
          billable_percentage?: number | null
          client_satisfaction_score?: number | null
          cost_to_company?: number | null
          created_at?: string
          id?: string
          manual_hours_saved?: number | null
          measurement_date?: string
          projects_active?: number | null
          revenue_generated?: number | null
          role_id: string
          total_hours_week?: number | null
        }
        Update: {
          automation_tools_used?: number | null
          billable_hours_week?: number | null
          billable_percentage?: number | null
          client_satisfaction_score?: number | null
          cost_to_company?: number | null
          created_at?: string
          id?: string
          manual_hours_saved?: number | null
          measurement_date?: string
          projects_active?: number | null
          revenue_generated?: number | null
          role_id?: string
          total_hours_week?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ceo_performance_metrics_role_id_fkey"
            columns: ["role_id"]
            isOneToOne: false
            referencedRelation: "ceo_internal_roles"
            referencedColumns: ["id"]
          },
        ]
      }
      ceo_team_assessments: {
        Row: {
          action_items: string[] | null
          assessment_period: string
          assessor_notes: string | null
          automation_adoption_score: number | null
          change_engagement_score: number | null
          cost_reduction_score: number | null
          created_at: string
          id: string
          next_review_date: string | null
          overall_score: number | null
          revenue_influence_score: number | null
          team_id: string
          time_to_outcome_score: number | null
        }
        Insert: {
          action_items?: string[] | null
          assessment_period: string
          assessor_notes?: string | null
          automation_adoption_score?: number | null
          change_engagement_score?: number | null
          cost_reduction_score?: number | null
          created_at?: string
          id?: string
          next_review_date?: string | null
          overall_score?: number | null
          revenue_influence_score?: number | null
          team_id: string
          time_to_outcome_score?: number | null
        }
        Update: {
          action_items?: string[] | null
          assessment_period?: string
          assessor_notes?: string | null
          automation_adoption_score?: number | null
          change_engagement_score?: number | null
          cost_reduction_score?: number | null
          created_at?: string
          id?: string
          next_review_date?: string | null
          overall_score?: number | null
          revenue_influence_score?: number | null
          team_id?: string
          time_to_outcome_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "ceo_team_assessments_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "ceo_internal_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      changerequests: {
        Row: {
          customer_id: string | null
          entity_id: string | null
          entity_type: string | null
          request_id: number
          requested_changes: string | null
          status: string | null
        }
        Insert: {
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          request_id?: number
          requested_changes?: string | null
          status?: string | null
        }
        Update: {
          customer_id?: string | null
          entity_id?: string | null
          entity_type?: string | null
          request_id?: number
          requested_changes?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "changerequests_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      "cleaned catalogue 2": {
        Row: {
          bundle_name: string | null
          category: string | null
          cost_to_company_aud: number | null
          min_contract_term_months: string | null
          min_qty: number | null
          optional: boolean | null
          phase: string | null
          price_raw: string | null
          price_unit: string | null
          price_value: number | null
          profit_margin_target_: number | null
          sku: string | null
          sku_grouping: string | null
          volume_discount: string | null
        }
        Insert: {
          bundle_name?: string | null
          category?: string | null
          cost_to_company_aud?: number | null
          min_contract_term_months?: string | null
          min_qty?: number | null
          optional?: boolean | null
          phase?: string | null
          price_raw?: string | null
          price_unit?: string | null
          price_value?: number | null
          profit_margin_target_?: number | null
          sku?: string | null
          sku_grouping?: string | null
          volume_discount?: string | null
        }
        Update: {
          bundle_name?: string | null
          category?: string | null
          cost_to_company_aud?: number | null
          min_contract_term_months?: string | null
          min_qty?: number | null
          optional?: boolean | null
          phase?: string | null
          price_raw?: string | null
          price_unit?: string | null
          price_value?: number | null
          profit_margin_target_?: number | null
          sku?: string | null
          sku_grouping?: string | null
          volume_discount?: string | null
        }
        Relationships: []
      }
      "cleaned sku catalog": {
        Row: {
          bundle_name: string | null
          category: string | null
          description: string | null
          max_qty: string | null
          min_qty: number | null
          optional: boolean | null
          phase: string | null
          phase_code: string | null
          price_raw: string | null
          price_unit: string | null
          price_value: number | null
          sku: string | null
          sku_grouping: string | null
          volume_discount: string | null
        }
        Insert: {
          bundle_name?: string | null
          category?: string | null
          description?: string | null
          max_qty?: string | null
          min_qty?: number | null
          optional?: boolean | null
          phase?: string | null
          phase_code?: string | null
          price_raw?: string | null
          price_unit?: string | null
          price_value?: number | null
          sku?: string | null
          sku_grouping?: string | null
          volume_discount?: string | null
        }
        Update: {
          bundle_name?: string | null
          category?: string | null
          description?: string | null
          max_qty?: string | null
          min_qty?: number | null
          optional?: boolean | null
          phase?: string | null
          phase_code?: string | null
          price_raw?: string | null
          price_unit?: string | null
          price_value?: number | null
          sku?: string | null
          sku_grouping?: string | null
          volume_discount?: string | null
        }
        Relationships: []
      }
      "Client editable price list": {
        Row: {
          "Customer Outcome": string | null
          "Detailed Project Offering": string | null
          "Estimated Duration (hrs)": number | null
          Geeks2U: string | null
          InnovateMe: string | null
          "Officeworks B2B Team": string | null
          "Output Format": string | null
          "Owner Team": string | null
          "Proposal/Slide Component": string | null
          "Recurrence Cycle": string | null
          "Retail Price ($)": number | null
          "Tier (Basic / Standard / Premium / Enterprise)": string | null
          Workstream: string | null
        }
        Insert: {
          "Customer Outcome"?: string | null
          "Detailed Project Offering"?: string | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          InnovateMe?: string | null
          "Officeworks B2B Team"?: string | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Proposal/Slide Component"?: string | null
          "Recurrence Cycle"?: string | null
          "Retail Price ($)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          Workstream?: string | null
        }
        Update: {
          "Customer Outcome"?: string | null
          "Detailed Project Offering"?: string | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          InnovateMe?: string | null
          "Officeworks B2B Team"?: string | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Proposal/Slide Component"?: string | null
          "Recurrence Cycle"?: string | null
          "Retail Price ($)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      collaboration_sessions: {
        Row: {
          completed_at: string | null
          conversation_history: Json | null
          created_at: string
          id: string
          insights_generated: Json | null
          participating_agents: string[]
          session_name: string
          session_type: string
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          conversation_history?: Json | null
          created_at?: string
          id?: string
          insights_generated?: Json | null
          participating_agents: string[]
          session_name: string
          session_type: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          conversation_history?: Json | null
          created_at?: string
          id?: string
          insights_generated?: Json | null
          participating_agents?: string[]
          session_name?: string
          session_type?: string
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      "comp sku": {
        Row: {
          "Bundle Name": string | null
          Category: string | null
          Description: string | null
          "Max Qty": string | null
          "Min Qty": number | null
          Optional: boolean | null
          Phase: string | null
          "Phase Code": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          SKU: string | null
          "SKU Grouping": string | null
          "Volume Discount": string | null
        }
        Insert: {
          "Bundle Name"?: string | null
          Category?: string | null
          Description?: string | null
          "Max Qty"?: string | null
          "Min Qty"?: number | null
          Optional?: boolean | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "Volume Discount"?: string | null
        }
        Update: {
          "Bundle Name"?: string | null
          Category?: string | null
          Description?: string | null
          "Max Qty"?: string | null
          "Min Qty"?: number | null
          Optional?: boolean | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "Volume Discount"?: string | null
        }
        Relationships: []
      }
      company_templates: {
        Row: {
          company_code: string
          company_name: string
          created_at: string
          id: string
          is_active: boolean
          sample_file_path: string | null
          template_config: Json
          updated_at: string
        }
        Insert: {
          company_code: string
          company_name: string
          created_at?: string
          id?: string
          is_active?: boolean
          sample_file_path?: string | null
          template_config: Json
          updated_at?: string
        }
        Update: {
          company_code?: string
          company_name?: string
          created_at?: string
          id?: string
          is_active?: boolean
          sample_file_path?: string | null
          template_config?: Json
          updated_at?: string
        }
        Relationships: []
      }
      compensation_defaults: {
        Row: {
          category: string
          created_at: string
          default_value: number
          description: string | null
          field_label: string
          field_name: string
          id: string
          is_active: boolean
          max_value: number | null
          min_value: number | null
          sort_order: number | null
          step_value: number | null
          tooltip: string | null
          updated_at: string
          value_type: string
        }
        Insert: {
          category: string
          created_at?: string
          default_value: number
          description?: string | null
          field_label: string
          field_name: string
          id?: string
          is_active?: boolean
          max_value?: number | null
          min_value?: number | null
          sort_order?: number | null
          step_value?: number | null
          tooltip?: string | null
          updated_at?: string
          value_type?: string
        }
        Update: {
          category?: string
          created_at?: string
          default_value?: number
          description?: string | null
          field_label?: string
          field_name?: string
          id?: string
          is_active?: boolean
          max_value?: number | null
          min_value?: number | null
          sort_order?: number | null
          step_value?: number | null
          tooltip?: string | null
          updated_at?: string
          value_type?: string
        }
        Relationships: []
      }
      compensation_evolution: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          compensation_data: Json
          compensation_results: Json
          export_metadata: Json | null
          id: string
          locked: boolean | null
          notes: string | null
          recorded_at: string
          session_id: string | null
          stage_id: string
          status: string | null
          total_compensation: number
          user_id: string
          version: number | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          compensation_data: Json
          compensation_results: Json
          export_metadata?: Json | null
          id?: string
          locked?: boolean | null
          notes?: string | null
          recorded_at?: string
          session_id?: string | null
          stage_id: string
          status?: string | null
          total_compensation: number
          user_id: string
          version?: number | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          compensation_data?: Json
          compensation_results?: Json
          export_metadata?: Json | null
          id?: string
          locked?: boolean | null
          notes?: string | null
          recorded_at?: string
          session_id?: string | null
          stage_id?: string
          status?: string | null
          total_compensation?: number
          user_id?: string
          version?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "compensation_evolution_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "compensation_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      compensation_stages: {
        Row: {
          created_at: string
          description: string | null
          id: string
          max_revenue: number | null
          min_revenue: number | null
          stage_name: string
          stage_order: number
          typical_equity_range: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          max_revenue?: number | null
          min_revenue?: number | null
          stage_name: string
          stage_order: number
          typical_equity_range?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          max_revenue?: number | null
          min_revenue?: number | null
          stage_name?: string
          stage_order?: number
          typical_equity_range?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      competency_framework: {
        Row: {
          assessment_criteria: Json | null
          competency_code: string
          competency_name: string
          created_at: string
          description: string | null
          id: string
          learning_resources: Json | null
          maturity_levels: Json
          role_category: string
          updated_at: string
        }
        Insert: {
          assessment_criteria?: Json | null
          competency_code: string
          competency_name: string
          created_at?: string
          description?: string | null
          id?: string
          learning_resources?: Json | null
          maturity_levels: Json
          role_category: string
          updated_at?: string
        }
        Update: {
          assessment_criteria?: Json | null
          competency_code?: string
          competency_name?: string
          created_at?: string
          description?: string | null
          id?: string
          learning_resources?: Json | null
          maturity_levels?: Json
          role_category?: string
          updated_at?: string
        }
        Relationships: []
      }
      computeresources: {
        Row: {
          resource_id: string
          resource_name: string | null
          unit: string | null
          unit_cost: number | null
        }
        Insert: {
          resource_id: string
          resource_name?: string | null
          unit?: string | null
          unit_cost?: number | null
        }
        Update: {
          resource_id?: string
          resource_name?: string | null
          unit?: string | null
          unit_cost?: number | null
        }
        Relationships: []
      }
      "consent registry A": {
        Row: {
          "Age Of Subject": string | null
          "Agent Required": string | null
          "Applicable Age Range": string | null
          "Automated Processing": string | null
          "Awareness Level": string | null
          "Can Revoke": string | null
          Category: string | null
          "Collected By": string | null
          "Consent Expiry": string | null
          "Consent Giver": string | null
          "Consent ID": string | null
          "Consent Language Complexity": string | null
          "Consent Log Id": string | null
          "Consent Mechanism": string | null
          "Consent Method Traceable": string | null
          "Consent Name": string | null
          "Consent Scope": string | null
          "Consent Trigger": string | null
          "Consent Type": string | null
          "Consent Update Required": string | null
          "Data Captured": string | null
          "Data Controller": string | null
          "Data Retention Estimate": string | null
          "Data Retention Policy": string | null
          "Data Type": string | null
          "Data Usage": string | null
          "Disputed Rights": string | null
          "Example Data Collectors": string | null
          Frequency: string | null
          "Guardian Involvement": string | null
          "Impact on Opportunities": string | null
          "Inference-Based": string | null
          "Insights Derived": string | null
          "Jurisdictional Threshold": string | null
          "Legal Owner": string | null
          "Life Domain": string | null
          "Life Stage": string | null
          "Linked Services": string | null
          "Linked Systems": string | null
          "Minor Involvement": string | null
          "Ownership Notes": string | null
          "Policy Sources": string | null
          "Profiling Applied": string | null
          "Profiling Risk": string | null
          "Registry Code": string | null
          "Retention Period": string | null
          "Revocation Available": string | null
          "Revocation Method": string | null
          "Risk Level": string | null
          "Risk Of Misuse": string | null
          "Risk Rating": string | null
          Sensitivity: string | null
          "Shared With": string | null
          "Shared With Third Parties": string | null
          Status: string | null
          "Subject Age": string | null
          "Used for Decision-Making": string | null
          "Visibility To Subject": string | null
          "Vulnerability Flag": string | null
        }
        Insert: {
          "Age Of Subject"?: string | null
          "Agent Required"?: string | null
          "Applicable Age Range"?: string | null
          "Automated Processing"?: string | null
          "Awareness Level"?: string | null
          "Can Revoke"?: string | null
          Category?: string | null
          "Collected By"?: string | null
          "Consent Expiry"?: string | null
          "Consent Giver"?: string | null
          "Consent ID"?: string | null
          "Consent Language Complexity"?: string | null
          "Consent Log Id"?: string | null
          "Consent Mechanism"?: string | null
          "Consent Method Traceable"?: string | null
          "Consent Name"?: string | null
          "Consent Scope"?: string | null
          "Consent Trigger"?: string | null
          "Consent Type"?: string | null
          "Consent Update Required"?: string | null
          "Data Captured"?: string | null
          "Data Controller"?: string | null
          "Data Retention Estimate"?: string | null
          "Data Retention Policy"?: string | null
          "Data Type"?: string | null
          "Data Usage"?: string | null
          "Disputed Rights"?: string | null
          "Example Data Collectors"?: string | null
          Frequency?: string | null
          "Guardian Involvement"?: string | null
          "Impact on Opportunities"?: string | null
          "Inference-Based"?: string | null
          "Insights Derived"?: string | null
          "Jurisdictional Threshold"?: string | null
          "Legal Owner"?: string | null
          "Life Domain"?: string | null
          "Life Stage"?: string | null
          "Linked Services"?: string | null
          "Linked Systems"?: string | null
          "Minor Involvement"?: string | null
          "Ownership Notes"?: string | null
          "Policy Sources"?: string | null
          "Profiling Applied"?: string | null
          "Profiling Risk"?: string | null
          "Registry Code"?: string | null
          "Retention Period"?: string | null
          "Revocation Available"?: string | null
          "Revocation Method"?: string | null
          "Risk Level"?: string | null
          "Risk Of Misuse"?: string | null
          "Risk Rating"?: string | null
          Sensitivity?: string | null
          "Shared With"?: string | null
          "Shared With Third Parties"?: string | null
          Status?: string | null
          "Subject Age"?: string | null
          "Used for Decision-Making"?: string | null
          "Visibility To Subject"?: string | null
          "Vulnerability Flag"?: string | null
        }
        Update: {
          "Age Of Subject"?: string | null
          "Agent Required"?: string | null
          "Applicable Age Range"?: string | null
          "Automated Processing"?: string | null
          "Awareness Level"?: string | null
          "Can Revoke"?: string | null
          Category?: string | null
          "Collected By"?: string | null
          "Consent Expiry"?: string | null
          "Consent Giver"?: string | null
          "Consent ID"?: string | null
          "Consent Language Complexity"?: string | null
          "Consent Log Id"?: string | null
          "Consent Mechanism"?: string | null
          "Consent Method Traceable"?: string | null
          "Consent Name"?: string | null
          "Consent Scope"?: string | null
          "Consent Trigger"?: string | null
          "Consent Type"?: string | null
          "Consent Update Required"?: string | null
          "Data Captured"?: string | null
          "Data Controller"?: string | null
          "Data Retention Estimate"?: string | null
          "Data Retention Policy"?: string | null
          "Data Type"?: string | null
          "Data Usage"?: string | null
          "Disputed Rights"?: string | null
          "Example Data Collectors"?: string | null
          Frequency?: string | null
          "Guardian Involvement"?: string | null
          "Impact on Opportunities"?: string | null
          "Inference-Based"?: string | null
          "Insights Derived"?: string | null
          "Jurisdictional Threshold"?: string | null
          "Legal Owner"?: string | null
          "Life Domain"?: string | null
          "Life Stage"?: string | null
          "Linked Services"?: string | null
          "Linked Systems"?: string | null
          "Minor Involvement"?: string | null
          "Ownership Notes"?: string | null
          "Policy Sources"?: string | null
          "Profiling Applied"?: string | null
          "Profiling Risk"?: string | null
          "Registry Code"?: string | null
          "Retention Period"?: string | null
          "Revocation Available"?: string | null
          "Revocation Method"?: string | null
          "Risk Level"?: string | null
          "Risk Of Misuse"?: string | null
          "Risk Rating"?: string | null
          Sensitivity?: string | null
          "Shared With"?: string | null
          "Shared With Third Parties"?: string | null
          Status?: string | null
          "Subject Age"?: string | null
          "Used for Decision-Making"?: string | null
          "Visibility To Subject"?: string | null
          "Vulnerability Flag"?: string | null
        }
        Relationships: []
      }
      consultant_performance_metrics: {
        Row: {
          activity_score: number | null
          average_cycle_length_days: number | null
          average_deal_size: number | null
          consultant_id: string | null
          created_at: string | null
          id: string
          ladder_tier: Database["public"]["Enums"]["ladder_tier"] | null
          period_end: string
          period_start: string
          rank_position: number | null
          total_deal_value: number | null
          total_opportunities: number | null
          total_score: number | null
          updated_at: string | null
          win_rate: number | null
          won_deal_value: number | null
          won_opportunities: number | null
        }
        Insert: {
          activity_score?: number | null
          average_cycle_length_days?: number | null
          average_deal_size?: number | null
          consultant_id?: string | null
          created_at?: string | null
          id?: string
          ladder_tier?: Database["public"]["Enums"]["ladder_tier"] | null
          period_end: string
          period_start: string
          rank_position?: number | null
          total_deal_value?: number | null
          total_opportunities?: number | null
          total_score?: number | null
          updated_at?: string | null
          win_rate?: number | null
          won_deal_value?: number | null
          won_opportunities?: number | null
        }
        Update: {
          activity_score?: number | null
          average_cycle_length_days?: number | null
          average_deal_size?: number | null
          consultant_id?: string | null
          created_at?: string | null
          id?: string
          ladder_tier?: Database["public"]["Enums"]["ladder_tier"] | null
          period_end?: string
          period_start?: string
          rank_position?: number | null
          total_deal_value?: number | null
          total_opportunities?: number | null
          total_score?: number | null
          updated_at?: string | null
          win_rate?: number | null
          won_deal_value?: number | null
          won_opportunities?: number | null
        }
        Relationships: []
      }
      contact_submissions: {
        Row: {
          admin_notes: string | null
          budget: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          inquiry_type: string | null
          message: string
          name: string
          phone: string | null
          preferred_contact_method: string | null
          product_interest: string | null
          status: string | null
          timeline: string | null
          updated_at: string
        }
        Insert: {
          admin_notes?: string | null
          budget?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          inquiry_type?: string | null
          message: string
          name: string
          phone?: string | null
          preferred_contact_method?: string | null
          product_interest?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          admin_notes?: string | null
          budget?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          inquiry_type?: string | null
          message?: string
          name?: string
          phone?: string | null
          preferred_contact_method?: string | null
          product_interest?: string | null
          status?: string | null
          timeline?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      content_tags: {
        Row: {
          category: string
          color: string | null
          created_at: string
          id: string
          name: string
        }
        Insert: {
          category: string
          color?: string | null
          created_at?: string
          id?: string
          name: string
        }
        Update: {
          category?: string
          color?: string | null
          created_at?: string
          id?: string
          name?: string
        }
        Relationships: []
      }
      contracts: {
        Row: {
          contract_id: string
          customer_id: string | null
          discount_pct: number | null
          end_date: string | null
          sla_id: string | null
          start_date: string | null
          terms: string | null
        }
        Insert: {
          contract_id: string
          customer_id?: string | null
          discount_pct?: number | null
          end_date?: string | null
          sla_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Update: {
          contract_id?: string
          customer_id?: string | null
          discount_pct?: number | null
          end_date?: string | null
          sla_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contracts_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      conversation_logs: {
        Row: {
          content: string
          created_at: string
          id: string
          processed: boolean | null
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          processed?: boolean | null
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          processed?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      core_agent_catalog: {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: string | null
          auth_method: string | null
          automated_delivery_cost: string | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: string | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: string | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: string | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: string | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: string | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: string | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": string | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: string | null
          personality_n: number | null
          personality_o: string | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: string | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: string | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: string | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: string | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: string | null
          task_cluster_tags: string | null
          task_coverage_pct: string | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: string | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: string | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      "Core_SFIA_Agentic_Scoring_Model (1).csv": {
        Row: {
          Description: string | null
          Metric: string | null
          Role: string | null
          "Score (1–5)": string | null
          "Score Type": string | null
          "SFIA Level": string | null
        }
        Insert: {
          Description?: string | null
          Metric?: string | null
          Role?: string | null
          "Score (1–5)"?: string | null
          "Score Type"?: string | null
          "SFIA Level"?: string | null
        }
        Update: {
          Description?: string | null
          Metric?: string | null
          Role?: string | null
          "Score (1–5)"?: string | null
          "Score Type"?: string | null
          "SFIA Level"?: string | null
        }
        Relationships: []
      }
      corporate_documents: {
        Row: {
          created_at: string | null
          document_name: string
          document_type: string
          expires_at: string | null
          file_path: string | null
          id: string
          is_active: boolean | null
          updated_at: string | null
          version: string | null
        }
        Insert: {
          created_at?: string | null
          document_name: string
          document_type: string
          expires_at?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          version?: string | null
        }
        Update: {
          created_at?: string | null
          document_name?: string
          document_type?: string
          expires_at?: string | null
          file_path?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          version?: string | null
        }
        Relationships: []
      }
      corporate_policies: {
        Row: {
          category: string
          content: string
          content_type: string
          created_at: string
          id: string
          is_active: boolean
          policy_code: string
          policy_name: string
          updated_at: string
          version: number
        }
        Insert: {
          category: string
          content: string
          content_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          policy_code: string
          policy_name: string
          updated_at?: string
          version?: number
        }
        Update: {
          category?: string
          content?: string
          content_type?: string
          created_at?: string
          id?: string
          is_active?: boolean
          policy_code?: string
          policy_name?: string
          updated_at?: string
          version?: number
        }
        Relationships: []
      }
      cost_comparison_cache: {
        Row: {
          agent_code: string
          base_rate_usd: number
          calculation_date: string
          country_code: string
          expires_at: string
          id: string
          purchasing_power_equivalent: number
          sfia_level: number
          skill_tags: string[] | null
          total_cost_usd: number
        }
        Insert: {
          agent_code: string
          base_rate_usd: number
          calculation_date?: string
          country_code: string
          expires_at?: string
          id?: string
          purchasing_power_equivalent: number
          sfia_level: number
          skill_tags?: string[] | null
          total_cost_usd: number
        }
        Update: {
          agent_code?: string
          base_rate_usd?: number
          calculation_date?: string
          country_code?: string
          expires_at?: string
          id?: string
          purchasing_power_equivalent?: number
          sfia_level?: number
          skill_tags?: string[] | null
          total_cost_usd?: number
        }
        Relationships: []
      }
      costcomponents: {
        Row: {
          api_source: string | null
          component_id: string
          current_rate: number | null
          name: string | null
          unit: string | null
        }
        Insert: {
          api_source?: string | null
          component_id: string
          current_rate?: number | null
          name?: string | null
          unit?: string | null
        }
        Update: {
          api_source?: string | null
          component_id?: string
          current_rate?: number | null
          name?: string | null
          unit?: string | null
        }
        Relationships: []
      }
      cultural_profiles: {
        Row: {
          analyzed_at: string | null
          created_at: string | null
          labor_model: string | null
          rft_id: string
          tone_profile: Json
          updated_at: string | null
        }
        Insert: {
          analyzed_at?: string | null
          created_at?: string | null
          labor_model?: string | null
          rft_id: string
          tone_profile?: Json
          updated_at?: string | null
        }
        Update: {
          analyzed_at?: string | null
          created_at?: string | null
          labor_model?: string | null
          rft_id?: string
          tone_profile?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      currency_exchange_rates: {
        Row: {
          created_at: string
          data_source: string | null
          exchange_rate: number
          from_currency: string
          id: string
          rate_date: string
          to_currency: string
        }
        Insert: {
          created_at?: string
          data_source?: string | null
          exchange_rate: number
          from_currency: string
          id?: string
          rate_date?: string
          to_currency?: string
        }
        Update: {
          created_at?: string
          data_source?: string | null
          exchange_rate?: number
          from_currency?: string
          id?: string
          rate_date?: string
          to_currency?: string
        }
        Relationships: []
      }
      currencyrates: {
        Row: {
          currency: string
          date: string
          rate_to_base: number | null
        }
        Insert: {
          currency: string
          date: string
          rate_to_base?: number | null
        }
        Update: {
          currency?: string
          date?: string
          rate_to_base?: number | null
        }
        Relationships: []
      }
      custom_payment_types: {
        Row: {
          base_value: number | null
          conditions: Json | null
          created_at: string
          created_by: string
          description: string | null
          formula: string | null
          id: string
          is_public: boolean | null
          name: string
          updated_at: string
          value_type: string
        }
        Insert: {
          base_value?: number | null
          conditions?: Json | null
          created_at?: string
          created_by: string
          description?: string | null
          formula?: string | null
          id?: string
          is_public?: boolean | null
          name: string
          updated_at?: string
          value_type: string
        }
        Update: {
          base_value?: number | null
          conditions?: Json | null
          created_at?: string
          created_by?: string
          description?: string | null
          formula?: string | null
          id?: string
          is_public?: boolean | null
          name?: string
          updated_at?: string
          value_type?: string
        }
        Relationships: []
      }
      customer_teaching_programs: {
        Row: {
          created_at: string | null
          curriculum_topics: string[] | null
          delivery_format: string | null
          description: string | null
          duration_hours: number | null
          id: string
          price_per_participant: number | null
          program_name: string
          revenue_per_engagement: number | null
          success_metrics: Json | null
          target_audience: string | null
        }
        Insert: {
          created_at?: string | null
          curriculum_topics?: string[] | null
          delivery_format?: string | null
          description?: string | null
          duration_hours?: number | null
          id?: string
          price_per_participant?: number | null
          program_name: string
          revenue_per_engagement?: number | null
          success_metrics?: Json | null
          target_audience?: string | null
        }
        Update: {
          created_at?: string | null
          curriculum_topics?: string[] | null
          delivery_format?: string | null
          description?: string | null
          duration_hours?: number | null
          id?: string
          price_per_participant?: number | null
          program_name?: string
          revenue_per_engagement?: number | null
          success_metrics?: Json | null
          target_audience?: string | null
        }
        Relationships: []
      }
      customers: {
        Row: {
          contact_info: string | null
          currency: string | null
          customer_id: string
          industry: string | null
          name: string | null
          tier: string | null
        }
        Insert: {
          contact_info?: string | null
          currency?: string | null
          customer_id: string
          industry?: string | null
          name?: string | null
          tier?: string | null
        }
        Update: {
          contact_info?: string | null
          currency?: string | null
          customer_id?: string
          industry?: string | null
          name?: string | null
          tier?: string | null
        }
        Relationships: []
      }
      cv_analyses: {
        Row: {
          created_at: string
          cv_id: string
          id: string
          overall_score: number | null
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          cv_id: string
          id?: string
          overall_score?: number | null
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          cv_id?: string
          id?: string
          overall_score?: number | null
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      cv_documents: {
        Row: {
          candidate_name: string | null
          created_at: string | null
          extracted_data: Json | null
          file_name: string
          file_path: string | null
          file_size: number | null
          file_type: string | null
          formatted_content: string | null
          id: string
          original_content: string | null
          page_count: number | null
          processing_status: string | null
          template_applied: string | null
          updated_at: string | null
        }
        Insert: {
          candidate_name?: string | null
          created_at?: string | null
          extracted_data?: Json | null
          file_name: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          formatted_content?: string | null
          id?: string
          original_content?: string | null
          page_count?: number | null
          processing_status?: string | null
          template_applied?: string | null
          updated_at?: string | null
        }
        Update: {
          candidate_name?: string | null
          created_at?: string | null
          extracted_data?: Json | null
          file_name?: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          formatted_content?: string | null
          id?: string
          original_content?: string | null
          page_count?: number | null
          processing_status?: string | null
          template_applied?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cv_metric_definitions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          type?: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Relationships: []
      }
      cv_metric_values: {
        Row: {
          analysis_id: string | null
          created_at: string
          id: string
          metric_id: string | null
          reason: string | null
          updated_at: string
          value_boolean: boolean | null
          value_date: string | null
          value_numeric: number | null
          value_text: string | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cv_metric_values_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "cv_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "cv_metric_values_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "cv_metric_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      cv_processing: {
        Row: {
          analysis_results: Json | null
          analysis_status: string | null
          created_at: string
          cv_metadata: Json | null
          cv_source: string
          cv_text: string
          id: string
          pricing_results: Json | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          analysis_results?: Json | null
          analysis_status?: string | null
          created_at?: string
          cv_metadata?: Json | null
          cv_source: string
          cv_text: string
          id?: string
          pricing_results?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          analysis_results?: Json | null
          analysis_status?: string | null
          created_at?: string
          cv_metadata?: Json | null
          cv_source?: string
          cv_text?: string
          id?: string
          pricing_results?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      cv_processing_history: {
        Row: {
          company_template: string
          compliance_report: Json | null
          created_at: string
          id: string
          original_filename: string | null
          pdf_file_url: string | null
          processing_status: string
          updated_at: string
          user_id: string | null
          word_file_url: string | null
        }
        Insert: {
          company_template?: string
          compliance_report?: Json | null
          created_at?: string
          id?: string
          original_filename?: string | null
          pdf_file_url?: string | null
          processing_status?: string
          updated_at?: string
          user_id?: string | null
          word_file_url?: string | null
        }
        Update: {
          company_template?: string
          compliance_report?: Json | null
          created_at?: string
          id?: string
          original_filename?: string | null
          pdf_file_url?: string | null
          processing_status?: string
          updated_at?: string
          user_id?: string | null
          word_file_url?: string | null
        }
        Relationships: []
      }
      cv_profiles: {
        Row: {
          candidate_name: string
          certification_scores: Json | null
          clearance_level: string | null
          created_at: string | null
          cv_id: string
          labor_model: string | null
          methodology_expertise: string[] | null
          project_size_scores: Json | null
          sectors_experience: Json | null
          soft_skill_tags: string[] | null
          team_size_led: number | null
          updated_at: string | null
        }
        Insert: {
          candidate_name: string
          certification_scores?: Json | null
          clearance_level?: string | null
          created_at?: string | null
          cv_id?: string
          labor_model?: string | null
          methodology_expertise?: string[] | null
          project_size_scores?: Json | null
          sectors_experience?: Json | null
          soft_skill_tags?: string[] | null
          team_size_led?: number | null
          updated_at?: string | null
        }
        Update: {
          candidate_name?: string
          certification_scores?: Json | null
          clearance_level?: string | null
          created_at?: string | null
          cv_id?: string
          labor_model?: string | null
          methodology_expertise?: string[] | null
          project_size_scores?: Json | null
          sectors_experience?: Json | null
          soft_skill_tags?: string[] | null
          team_size_led?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      cv_template_transformations: {
        Row: {
          created_at: string
          cv_id: string
          id: string
          original_content: Json | null
          template_type: string
          transformation_metadata: Json | null
          transformed_content: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          cv_id: string
          id?: string
          original_content?: Json | null
          template_type: string
          transformation_metadata?: Json | null
          transformed_content: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          cv_id?: string
          id?: string
          original_content?: Json | null
          template_type?: string
          transformation_metadata?: Json | null
          transformed_content?: Json
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "cv_template_transformations_cv_id_fkey"
            columns: ["cv_id"]
            isOneToOne: false
            referencedRelation: "cvs"
            referencedColumns: ["id"]
          },
        ]
      }
      cvs: {
        Row: {
          cluster: string | null
          created_at: string
          id: string
          metrics: Json | null
          parsed_data: Json
          quality: number | null
          raw_text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cluster?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          parsed_data: Json
          quality?: number | null
          raw_text: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cluster?: string | null
          created_at?: string
          id?: string
          metrics?: Json | null
          parsed_data?: Json
          quality?: number | null
          raw_text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      decision_nudge_responses: {
        Row: {
          comments: string | null
          created_at: string
          id: string
          nudge_variant: string | null
          recipient_email: string
          responses: Json
          status: string
          subject: string
          submitted_at: string | null
          tenant_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          comments?: string | null
          created_at?: string
          id?: string
          nudge_variant?: string | null
          recipient_email: string
          responses?: Json
          status?: string
          subject: string
          submitted_at?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          comments?: string | null
          created_at?: string
          id?: string
          nudge_variant?: string | null
          recipient_email?: string
          responses?: Json
          status?: string
          subject?: string
          submitted_at?: string | null
          tenant_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      defense_capability_matches: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      defense_partner_analytics: {
        Row: {
          agent_code: string | null
          cost: number | null
          coverage_pct: number | null
          cv_overlay: string | null
          delivery_model: string | null
          fit_for_defence: string | null
          function: string | null
          partner: string | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Relationships: []
      }
      deliverables: {
        Row: {
          bundle_id: string | null
          deliverable_id: string
          description: string | null
          name: string | null
          sla_id: string | null
        }
        Insert: {
          bundle_id?: string | null
          deliverable_id: string
          description?: string | null
          name?: string | null
          sla_id?: string | null
        }
        Update: {
          bundle_id?: string | null
          deliverable_id?: string
          description?: string | null
          name?: string | null
          sla_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deliverables_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
        ]
      }
      demand_forecast: {
        Row: {
          agent_code: string
          created_at: string
          forecast_month: string
          forecast_util_pct: number
          id: string
          lower_bound: number | null
          updated_at: string
          upper_bound: number | null
        }
        Insert: {
          agent_code: string
          created_at?: string
          forecast_month: string
          forecast_util_pct: number
          id?: string
          lower_bound?: number | null
          updated_at?: string
          upper_bound?: number | null
        }
        Update: {
          agent_code?: string
          created_at?: string
          forecast_month?: string
          forecast_util_pct?: number
          id?: string
          lower_bound?: number | null
          updated_at?: string
          upper_bound?: number | null
        }
        Relationships: []
      }
      department_analytics: {
        Row: {
          assessed_staff: number | null
          avg_ai_readiness: number | null
          avg_consciousness_level: number | null
          created_at: string
          department: string
          id: string
          neural_leaders_assigned: string[] | null
          top_roles: string[] | null
          total_staff: number | null
          transformation_roi: number | null
          updated_at: string
          uplift_cost: number | null
        }
        Insert: {
          assessed_staff?: number | null
          avg_ai_readiness?: number | null
          avg_consciousness_level?: number | null
          created_at?: string
          department: string
          id?: string
          neural_leaders_assigned?: string[] | null
          top_roles?: string[] | null
          total_staff?: number | null
          transformation_roi?: number | null
          updated_at?: string
          uplift_cost?: number | null
        }
        Update: {
          assessed_staff?: number | null
          avg_ai_readiness?: number | null
          avg_consciousness_level?: number | null
          created_at?: string
          department?: string
          id?: string
          neural_leaders_assigned?: string[] | null
          top_roles?: string[] | null
          total_staff?: number | null
          transformation_roi?: number | null
          updated_at?: string
          uplift_cost?: number | null
        }
        Relationships: []
      }
      department_team_agents: {
        Row: {
          agent_code: string
          created_at: string | null
          id: string
          role: string | null
          team_id: string
        }
        Insert: {
          agent_code: string
          created_at?: string | null
          id?: string
          role?: string | null
          team_id: string
        }
        Update: {
          agent_code?: string
          created_at?: string | null
          id?: string
          role?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "department_team_agents_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "department_teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      department_teams: {
        Row: {
          agent_count: number
          created_at: string | null
          department: string
          description: string | null
          team_id: string
          team_name: string
          team_size: string
          updated_at: string | null
        }
        Insert: {
          agent_count?: number
          created_at?: string | null
          department: string
          description?: string | null
          team_id?: string
          team_name: string
          team_size: string
          updated_at?: string | null
        }
        Update: {
          agent_count?: number
          created_at?: string | null
          department?: string
          description?: string | null
          team_id?: string
          team_name?: string
          team_size?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      departmental_knowledge: {
        Row: {
          content: string
          created_at: string
          created_by: string | null
          cross_functional_relevance: string[] | null
          department_id: string
          expertise_level: string | null
          id: string
          knowledge_tags: string[] | null
          knowledge_type: string
          last_validated: string | null
          title: string
          updated_at: string
          validation_status: string | null
        }
        Insert: {
          content: string
          created_at?: string
          created_by?: string | null
          cross_functional_relevance?: string[] | null
          department_id: string
          expertise_level?: string | null
          id?: string
          knowledge_tags?: string[] | null
          knowledge_type: string
          last_validated?: string | null
          title: string
          updated_at?: string
          validation_status?: string | null
        }
        Update: {
          content?: string
          created_at?: string
          created_by?: string | null
          cross_functional_relevance?: string[] | null
          department_id?: string
          expertise_level?: string | null
          id?: string
          knowledge_tags?: string[] | null
          knowledge_type?: string
          last_validated?: string | null
          title?: string
          updated_at?: string
          validation_status?: string | null
        }
        Relationships: []
      }
      deployments: {
        Row: {
          bundle_id: string | null
          deployed_at: string | null
          deployment_id: string
          environment: string | null
          team_id: string | null
          version: string | null
        }
        Insert: {
          bundle_id?: string | null
          deployed_at?: string | null
          deployment_id: string
          environment?: string | null
          team_id?: string | null
          version?: string | null
        }
        Update: {
          bundle_id?: string | null
          deployed_at?: string | null
          deployment_id?: string
          environment?: string | null
          team_id?: string | null
          version?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "deployments_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
          {
            foreignKeyName: "deployments_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      detailed_use_case_templates: {
        Row: {
          business_problem: string
          case_study_url: string | null
          category: string
          created_at: string | null
          demo_video_url: string | null
          documentation_url: string | null
          expected_roi_percentage: number | null
          id: string
          implementation_timeline_weeks: number | null
          industry_focus: string[] | null
          integration_partners: string[] | null
          is_featured: boolean | null
          optional_agents: string[] | null
          payback_period_months: number | null
          popularity_score: number | null
          pricing_starting_at: number | null
          required_agents: string[]
          setup_steps: Json | null
          solution_approach: string
          success_metrics: Json | null
          technical_requirements: Json | null
          template_name: string
          updated_at: string | null
        }
        Insert: {
          business_problem: string
          case_study_url?: string | null
          category: string
          created_at?: string | null
          demo_video_url?: string | null
          documentation_url?: string | null
          expected_roi_percentage?: number | null
          id?: string
          implementation_timeline_weeks?: number | null
          industry_focus?: string[] | null
          integration_partners?: string[] | null
          is_featured?: boolean | null
          optional_agents?: string[] | null
          payback_period_months?: number | null
          popularity_score?: number | null
          pricing_starting_at?: number | null
          required_agents: string[]
          setup_steps?: Json | null
          solution_approach: string
          success_metrics?: Json | null
          technical_requirements?: Json | null
          template_name: string
          updated_at?: string | null
        }
        Update: {
          business_problem?: string
          case_study_url?: string | null
          category?: string
          created_at?: string | null
          demo_video_url?: string | null
          documentation_url?: string | null
          expected_roi_percentage?: number | null
          id?: string
          implementation_timeline_weeks?: number | null
          industry_focus?: string[] | null
          integration_partners?: string[] | null
          is_featured?: boolean | null
          optional_agents?: string[] | null
          payback_period_months?: number | null
          popularity_score?: number | null
          pricing_starting_at?: number | null
          required_agents?: string[]
          setup_steps?: Json | null
          solution_approach?: string
          success_metrics?: Json | null
          technical_requirements?: Json | null
          template_name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      document_access_log: {
        Row: {
          access_type: string
          accessed_at: string
          document_id: string
          id: string
          ip_address: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          access_type: string
          accessed_at?: string
          document_id: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          access_type?: string
          accessed_at?: string
          document_id?: string
          id?: string
          ip_address?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "document_access_log_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      document_exports: {
        Row: {
          calculation_id: string
          created_at: string
          created_by: string
          export_format: string
          export_metadata: Json | null
          export_type: string
          file_name: string
          file_size: number | null
          id: string
        }
        Insert: {
          calculation_id: string
          created_at?: string
          created_by: string
          export_format: string
          export_metadata?: Json | null
          export_type: string
          file_name: string
          file_size?: number | null
          id?: string
        }
        Update: {
          calculation_id?: string
          created_at?: string
          created_by?: string
          export_format?: string
          export_metadata?: Json | null
          export_type?: string
          file_name?: string
          file_size?: number | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_exports_calculation_id_fkey"
            columns: ["calculation_id"]
            isOneToOne: false
            referencedRelation: "compensation_evolution"
            referencedColumns: ["id"]
          },
        ]
      }
      document_outputs: {
        Row: {
          created_at: string | null
          document_type: string
          file_format: string
          file_path: string
          file_size: number | null
          generation_model: string
          id: string
          is_final: boolean | null
          source_document_id: string
        }
        Insert: {
          created_at?: string | null
          document_type: string
          file_format: string
          file_path: string
          file_size?: number | null
          generation_model: string
          id?: string
          is_final?: boolean | null
          source_document_id: string
        }
        Update: {
          created_at?: string | null
          document_type?: string
          file_format?: string
          file_path?: string
          file_size?: number | null
          generation_model?: string
          id?: string
          is_final?: boolean | null
          source_document_id?: string
        }
        Relationships: []
      }
      document_shares: {
        Row: {
          created_at: string
          document_id: string
          expires_at: string | null
          id: string
          permission_level: string
          share_token: string
          shared_by: string
          shared_with_email: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          document_id: string
          expires_at?: string | null
          id?: string
          permission_level?: string
          share_token?: string
          shared_by: string
          shared_with_email: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          document_id?: string
          expires_at?: string | null
          id?: string
          permission_level?: string
          share_token?: string
          shared_by?: string
          shared_with_email?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "document_shares_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      document_storage: {
        Row: {
          bucket_name: string
          content_text: string | null
          created_at: string
          delivery_mode: string
          description: string | null
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id: string
          is_current_version: boolean
          metadata: Json | null
          mime_type: string
          original_content: string | null
          parent_document_id: string | null
          quality_metrics: Json | null
          shared_with: Json | null
          status: string | null
          tags: string[] | null
          title: string | null
          updated_at: string
          uploaded_by: string | null
          user_id: string
          version: number
        }
        Insert: {
          bucket_name: string
          content_text?: string | null
          created_at?: string
          delivery_mode: string
          description?: string | null
          document_type: string
          file_name: string
          file_path: string
          file_size: number
          id?: string
          is_current_version?: boolean
          metadata?: Json | null
          mime_type: string
          original_content?: string | null
          parent_document_id?: string | null
          quality_metrics?: Json | null
          shared_with?: Json | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          user_id: string
          version?: number
        }
        Update: {
          bucket_name?: string
          content_text?: string | null
          created_at?: string
          delivery_mode?: string
          description?: string | null
          document_type?: string
          file_name?: string
          file_path?: string
          file_size?: number
          id?: string
          is_current_version?: boolean
          metadata?: Json | null
          mime_type?: string
          original_content?: string | null
          parent_document_id?: string | null
          quality_metrics?: Json | null
          shared_with?: Json | null
          status?: string | null
          tags?: string[] | null
          title?: string | null
          updated_at?: string
          uploaded_by?: string | null
          user_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_storage_parent_document_id_fkey"
            columns: ["parent_document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      document_versions: {
        Row: {
          change_notes: string | null
          created_at: string
          document_id: string
          file_name: string
          file_size: number | null
          id: string
          uploaded_by: string | null
          version_number: number
        }
        Insert: {
          change_notes?: string | null
          created_at?: string
          document_id: string
          file_name: string
          file_size?: number | null
          id?: string
          uploaded_by?: string | null
          version_number: number
        }
        Update: {
          change_notes?: string | null
          created_at?: string
          document_id?: string
          file_name?: string
          file_size?: number | null
          id?: string
          uploaded_by?: string | null
          version_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "document_versions_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      documents: {
        Row: {
          created_at: string
          file_type: string
          filename: string
          id: string
          original_content: string | null
          updated_at: string
          upload_source: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          file_type: string
          filename: string
          id?: string
          original_content?: string | null
          updated_at?: string
          upload_source?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          file_type?: string
          filename?: string
          id?: string
          original_content?: string | null
          updated_at?: string
          upload_source?: string | null
          user_id?: string
        }
        Relationships: []
      }
      domain_tenant_mappings: {
        Row: {
          created_at: string | null
          domain: string
          id: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          id?: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          id?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "domain_tenant_mappings_domain_fkey"
            columns: ["domain"]
            isOneToOne: true
            referencedRelation: "allowed_domains"
            referencedColumns: ["domain"]
          },
          {
            foreignKeyName: "domain_tenant_mappings_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      donations: {
        Row: {
          amount: number
          created_at: string
          currency: string | null
          donor_email: string | null
          donor_name: string | null
          id: string
          status: string | null
          stripe_session_id: string | null
          updated_at: string
        }
        Insert: {
          amount: number
          created_at?: string
          currency?: string | null
          donor_email?: string | null
          donor_name?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
        }
        Update: {
          amount?: number
          created_at?: string
          currency?: string | null
          donor_email?: string | null
          donor_name?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      ecosystem_items: {
        Row: {
          business: string
          created_at: string
          feeds_into: string | null
          id: string
          monetization_model: string | null
          partners: string | null
          products: string | null
          status: string | null
          type: string | null
          updated_at: string
        }
        Insert: {
          business: string
          created_at?: string
          feeds_into?: string | null
          id?: string
          monetization_model?: string | null
          partners?: string | null
          products?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string
        }
        Update: {
          business?: string
          created_at?: string
          feeds_into?: string | null
          id?: string
          monetization_model?: string | null
          partners?: string | null
          products?: string | null
          status?: string | null
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      elevator_scenarios: {
        Row: {
          call_to_action: string | null
          created_at: string
          description: string
          featured: boolean | null
          id: string
          image_url: string | null
          impact_area: string
          impact_metrics: Json | null
          next_steps: string | null
          scenario: string
          scenario_order: number | null
          stakeholder_type: string | null
          target_audience: Json | null
          timeline_target: string | null
          title: string
          updated_at: string
        }
        Insert: {
          call_to_action?: string | null
          created_at?: string
          description: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          impact_area: string
          impact_metrics?: Json | null
          next_steps?: string | null
          scenario: string
          scenario_order?: number | null
          stakeholder_type?: string | null
          target_audience?: Json | null
          timeline_target?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          call_to_action?: string | null
          created_at?: string
          description?: string
          featured?: boolean | null
          id?: string
          image_url?: string | null
          impact_area?: string
          impact_metrics?: Json | null
          next_steps?: string | null
          scenario?: string
          scenario_order?: number | null
          stakeholder_type?: string | null
          target_audience?: Json | null
          timeline_target?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      email_deliveries: {
        Row: {
          clicked_at: string | null
          created_at: string
          delivered_at: string | null
          delivery_provider: string | null
          delivery_status: string | null
          error_message: string | null
          id: string
          nudge_response_id: string | null
          opened_at: string | null
          provider_message_id: string | null
          recipient_email: string
          sent_at: string | null
          subject: string | null
          template_id: string | null
          updated_at: string
        }
        Insert: {
          clicked_at?: string | null
          created_at?: string
          delivered_at?: string | null
          delivery_provider?: string | null
          delivery_status?: string | null
          error_message?: string | null
          id?: string
          nudge_response_id?: string | null
          opened_at?: string | null
          provider_message_id?: string | null
          recipient_email: string
          sent_at?: string | null
          subject?: string | null
          template_id?: string | null
          updated_at?: string
        }
        Update: {
          clicked_at?: string | null
          created_at?: string
          delivered_at?: string | null
          delivery_provider?: string | null
          delivery_status?: string | null
          error_message?: string | null
          id?: string
          nudge_response_id?: string | null
          opened_at?: string | null
          provider_message_id?: string | null
          recipient_email?: string
          sent_at?: string | null
          subject?: string | null
          template_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_deliveries_nudge_response_id_fkey"
            columns: ["nudge_response_id"]
            isOneToOne: false
            referencedRelation: "decision_nudge_responses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_deliveries_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      email_subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          is_active: boolean
          name: string | null
          preferences: Json
          updated_at: string
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          is_active?: boolean
          name?: string | null
          preferences?: Json
          updated_at?: string
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          is_active?: boolean
          name?: string | null
          preferences?: Json
          updated_at?: string
        }
        Relationships: []
      }
      email_templates: {
        Row: {
          assets: Json | null
          branding_config: Json | null
          created_at: string
          custom_css: string | null
          html_template: string | null
          id: string
          is_active: boolean | null
          subject_template: string | null
          template_name: string
          template_type: string
          tenant_id: string | null
          text_template: string | null
          updated_at: string
        }
        Insert: {
          assets?: Json | null
          branding_config?: Json | null
          created_at?: string
          custom_css?: string | null
          html_template?: string | null
          id?: string
          is_active?: boolean | null
          subject_template?: string | null
          template_name: string
          template_type?: string
          tenant_id?: string | null
          text_template?: string | null
          updated_at?: string
        }
        Update: {
          assets?: Json | null
          branding_config?: Json | null
          created_at?: string
          custom_css?: string | null
          html_template?: string | null
          id?: string
          is_active?: boolean | null
          subject_template?: string | null
          template_name?: string
          template_type?: string
          tenant_id?: string | null
          text_template?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      "enablement and sales": {
        Row: {
          "30/60/90-Day Targets": string | null
          "Add-ons & Variants": string | null
          "Core Deliverables": string | null
          "Customer Engagement (How They Buy)": string | null
          "Customer Outcome": string | null
          Deliverables: string | null
          "Expected Units Sold (Quarter)": number | null
          "How It’s Delivered": string | null
          "Net Revenue After Training ($)": number | null
          "Offering Category": string | null
          "Quarterly Revenue ($)": number | null
          "Revenue Estimate (AUD)": string | null
          "Revenue Range (AUD)": string | null
          "Sellable Unit": string | null
          "Selling Layer": string | null
          "Track Levels": string | null
          "Training Cost ($)": number | null
          "Unit Price ($)": number | null
          "Visual Tag": string | null
          "Who It's For": string | null
          Workstream: string | null
        }
        Insert: {
          "30/60/90-Day Targets"?: string | null
          "Add-ons & Variants"?: string | null
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          "Expected Units Sold (Quarter)"?: number | null
          "How It’s Delivered"?: string | null
          "Net Revenue After Training ($)"?: number | null
          "Offering Category"?: string | null
          "Quarterly Revenue ($)"?: number | null
          "Revenue Estimate (AUD)"?: string | null
          "Revenue Range (AUD)"?: string | null
          "Sellable Unit"?: string | null
          "Selling Layer"?: string | null
          "Track Levels"?: string | null
          "Training Cost ($)"?: number | null
          "Unit Price ($)"?: number | null
          "Visual Tag"?: string | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Update: {
          "30/60/90-Day Targets"?: string | null
          "Add-ons & Variants"?: string | null
          "Core Deliverables"?: string | null
          "Customer Engagement (How They Buy)"?: string | null
          "Customer Outcome"?: string | null
          Deliverables?: string | null
          "Expected Units Sold (Quarter)"?: number | null
          "How It’s Delivered"?: string | null
          "Net Revenue After Training ($)"?: number | null
          "Offering Category"?: string | null
          "Quarterly Revenue ($)"?: number | null
          "Revenue Estimate (AUD)"?: string | null
          "Revenue Range (AUD)"?: string | null
          "Sellable Unit"?: string | null
          "Selling Layer"?: string | null
          "Track Levels"?: string | null
          "Training Cost ($)"?: number | null
          "Unit Price ($)"?: number | null
          "Visual Tag"?: string | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "enhanced agent match": {
        Row: {
          Agent_ID: string | null
          agent_name: string | null
          aps_band: string | null
          MatchPct: string | null
          Role_Name: string | null
          Task_Alignment_Pct: string | null
          Weighted_Raw_Match: string | null
        }
        Insert: {
          Agent_ID?: string | null
          agent_name?: string | null
          aps_band?: string | null
          MatchPct?: string | null
          Role_Name?: string | null
          Task_Alignment_Pct?: string | null
          Weighted_Raw_Match?: string | null
        }
        Update: {
          Agent_ID?: string | null
          agent_name?: string | null
          aps_band?: string | null
          MatchPct?: string | null
          Role_Name?: string | null
          Task_Alignment_Pct?: string | null
          Weighted_Raw_Match?: string | null
        }
        Relationships: []
      }
      "enhanced APS Skills": {
        Row: {
          Skill: string | null
        }
        Insert: {
          Skill?: string | null
        }
        Update: {
          Skill?: string | null
        }
        Relationships: []
      }
      "enhanced vignettes": {
        Row: {
          Achieved_Outputs: string | null
          Age: number | null
          Agency: string | null
          Agent_Code: string | null
          Agent_Division: string | null
          Agent_Level: number | null
          Agent_Name: string | null
          AI_Companion_Name: string | null
          AI_Companion_Profile: string | null
          AI_Companion_Specialty: string | null
          AI_Companion_Type: string | null
          AI_Suggested_Title: string | null
          APS_Alignment_Detail: string | null
          APS_Level: string | null
          Cultural_Background: string | null
          Demo_Scenario_Prompt: string | null
          Deployment_Timeframe: string | null
          Full_Name: string | null
          Impact_Metrics_Table: string | null
          Integration_Points: string | null
          Leadership_Category: string | null
          Location: string | null
          Narrative_Story: string | null
          Primary_Agent_Code: string | null
          Quote: string | null
          Role_Title: string | null
          Strategic_Theme: string | null
          Subagents_List: string | null
          Value_Delivered: string | null
          Vignette_ID: string | null
        }
        Insert: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Update: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Relationships: []
      }
      enhanced_assessment_campaigns: {
        Row: {
          assessment_template: Json | null
          completion_count: number | null
          completion_rate: number | null
          created_at: string | null
          created_by: string | null
          description: string | null
          end_date: string | null
          id: string
          name: string
          notification_preferences: Json | null
          objectives: string | null
          organization_id: string
          participant_count: number | null
          start_date: string | null
          status: string
          target_departments: string[] | null
          updated_at: string | null
        }
        Insert: {
          assessment_template?: Json | null
          completion_count?: number | null
          completion_rate?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name: string
          notification_preferences?: Json | null
          objectives?: string | null
          organization_id: string
          participant_count?: number | null
          start_date?: string | null
          status?: string
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Update: {
          assessment_template?: Json | null
          completion_count?: number | null
          completion_rate?: number | null
          created_at?: string | null
          created_by?: string | null
          description?: string | null
          end_date?: string | null
          id?: string
          name?: string
          notification_preferences?: Json | null
          objectives?: string | null
          organization_id?: string
          participant_count?: number | null
          start_date?: string | null
          status?: string
          target_departments?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "enhanced_assessment_campaigns_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      enhanced_assessments: {
        Row: {
          ai_companion: string | null
          aps_level: string
          consciousness_level: number
          created_at: string
          department: string
          department_plan: Json | null
          email: string
          id: string
          maturity_level: string
          name: string
          neural_leader: string | null
          organization: string | null
          organization_size: string | null
          overall_score: number
          personal_journey: Json | null
          responses: Json
          role_title: string
          role_transformation: Json | null
          updated_at: string
        }
        Insert: {
          ai_companion?: string | null
          aps_level: string
          consciousness_level?: number
          created_at?: string
          department: string
          department_plan?: Json | null
          email: string
          id?: string
          maturity_level?: string
          name: string
          neural_leader?: string | null
          organization?: string | null
          organization_size?: string | null
          overall_score?: number
          personal_journey?: Json | null
          responses?: Json
          role_title: string
          role_transformation?: Json | null
          updated_at?: string
        }
        Update: {
          ai_companion?: string | null
          aps_level?: string
          consciousness_level?: number
          created_at?: string
          department?: string
          department_plan?: Json | null
          email?: string
          id?: string
          maturity_level?: string
          name?: string
          neural_leader?: string | null
          organization?: string | null
          organization_size?: string | null
          overall_score?: number
          personal_journey?: Json | null
          responses?: Json
          role_title?: string
          role_transformation?: Json | null
          updated_at?: string
        }
        Relationships: []
      }
      enhanced_vignettes: {
        Row: {
          achieved_outputs: string[] | null
          age: number | null
          agentic_ai_journey_stage: string | null
          agentic_ai_readiness_score: number | null
          ai_solution_detailed: string | null
          aps_compliance: Json | null
          avatar_path: string | null
          avatar_url: string | null
          background: string | null
          cost_savings_projected: number | null
          created_at: string | null
          cross_agency_collaboration: string | null
          cultural_background_detailed: string | null
          department: string | null
          discussion_prompts: string[] | null
          education_background: string | null
          efficiency_improvement_pct: number | null
          holo_org_agent: string | null
          id: string
          impact_score: number | null
          key_achievements: string[] | null
          key_drivers: string[] | null
          kpi_improvements: Json | null
          last_updated: string | null
          leadership_behaviors: Json | null
          multilingual_content: Json | null
          multilingual_ready: boolean | null
          name: string
          outcomes_detailed: string | null
          previous_roles: string[] | null
          professional_experience_years: number | null
          role: string | null
          scenario_context: string | null
          service_quality_improvement: string | null
          sofia_code: string | null
          strategic_question: string | null
          strategic_recommendations: string[] | null
          supported_languages: string[] | null
          tags: string[] | null
          updated_at: string | null
          value_delivered: string[] | null
          version: string | null
          vignette_html: string | null
          vignette_json: Json | null
          vignette_status: string | null
          vignette_title: string | null
        }
        Insert: {
          achieved_outputs?: string[] | null
          age?: number | null
          agentic_ai_journey_stage?: string | null
          agentic_ai_readiness_score?: number | null
          ai_solution_detailed?: string | null
          aps_compliance?: Json | null
          avatar_path?: string | null
          avatar_url?: string | null
          background?: string | null
          cost_savings_projected?: number | null
          created_at?: string | null
          cross_agency_collaboration?: string | null
          cultural_background_detailed?: string | null
          department?: string | null
          discussion_prompts?: string[] | null
          education_background?: string | null
          efficiency_improvement_pct?: number | null
          holo_org_agent?: string | null
          id?: string
          impact_score?: number | null
          key_achievements?: string[] | null
          key_drivers?: string[] | null
          kpi_improvements?: Json | null
          last_updated?: string | null
          leadership_behaviors?: Json | null
          multilingual_content?: Json | null
          multilingual_ready?: boolean | null
          name: string
          outcomes_detailed?: string | null
          previous_roles?: string[] | null
          professional_experience_years?: number | null
          role?: string | null
          scenario_context?: string | null
          service_quality_improvement?: string | null
          sofia_code?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          supported_languages?: string[] | null
          tags?: string[] | null
          updated_at?: string | null
          value_delivered?: string[] | null
          version?: string | null
          vignette_html?: string | null
          vignette_json?: Json | null
          vignette_status?: string | null
          vignette_title?: string | null
        }
        Update: {
          achieved_outputs?: string[] | null
          age?: number | null
          agentic_ai_journey_stage?: string | null
          agentic_ai_readiness_score?: number | null
          ai_solution_detailed?: string | null
          aps_compliance?: Json | null
          avatar_path?: string | null
          avatar_url?: string | null
          background?: string | null
          cost_savings_projected?: number | null
          created_at?: string | null
          cross_agency_collaboration?: string | null
          cultural_background_detailed?: string | null
          department?: string | null
          discussion_prompts?: string[] | null
          education_background?: string | null
          efficiency_improvement_pct?: number | null
          holo_org_agent?: string | null
          id?: string
          impact_score?: number | null
          key_achievements?: string[] | null
          key_drivers?: string[] | null
          kpi_improvements?: Json | null
          last_updated?: string | null
          leadership_behaviors?: Json | null
          multilingual_content?: Json | null
          multilingual_ready?: boolean | null
          name?: string
          outcomes_detailed?: string | null
          previous_roles?: string[] | null
          professional_experience_years?: number | null
          role?: string | null
          scenario_context?: string | null
          service_quality_improvement?: string | null
          sofia_code?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          supported_languages?: string[] | null
          tags?: string[] | null
          updated_at?: string | null
          value_delivered?: string[] | null
          version?: string | null
          vignette_html?: string | null
          vignette_json?: Json | null
          vignette_status?: string | null
          vignette_title?: string | null
        }
        Relationships: []
      }
      enhanced_work_packages: {
        Row: {
          annual_target: number
          created_at: string
          description: string | null
          engagement_duration: string | null
          id: string
          is_active: boolean
          key_benefits: string
          key_deliverables: string
          lifecycle_phase: string
          prerequisites: string
          price: number
          pricing_tier: string | null
          service_category: string
          service_name: string
          service_sector: string | null
          target_stakeholders: string | null
          updated_at: string
        }
        Insert: {
          annual_target: number
          created_at?: string
          description?: string | null
          engagement_duration?: string | null
          id?: string
          is_active?: boolean
          key_benefits: string
          key_deliverables: string
          lifecycle_phase: string
          prerequisites: string
          price: number
          pricing_tier?: string | null
          service_category: string
          service_name: string
          service_sector?: string | null
          target_stakeholders?: string | null
          updated_at?: string
        }
        Update: {
          annual_target?: number
          created_at?: string
          description?: string | null
          engagement_duration?: string | null
          id?: string
          is_active?: boolean
          key_benefits?: string
          key_deliverables?: string
          lifecycle_phase?: string
          prerequisites?: string
          price?: number
          pricing_tier?: string | null
          service_category?: string
          service_name?: string
          service_sector?: string | null
          target_stakeholders?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      enterprise_domains: {
        Row: {
          auto_provision_users: boolean | null
          created_at: string | null
          default_role: string | null
          domain: string
          id: string
          is_active: boolean | null
          organization_name: string
          sso_enabled: boolean | null
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          auto_provision_users?: boolean | null
          created_at?: string | null
          default_role?: string | null
          domain: string
          id?: string
          is_active?: boolean | null
          organization_name: string
          sso_enabled?: boolean | null
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          auto_provision_users?: boolean | null
          created_at?: string | null
          default_role?: string | null
          domain?: string
          id?: string
          is_active?: boolean | null
          organization_name?: string
          sso_enabled?: boolean | null
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      entitytags: {
        Row: {
          entity_id: string
          entity_type: string
          tag_id: string
        }
        Insert: {
          entity_id: string
          entity_type: string
          tag_id: string
        }
        Update: {
          entity_id?: string
          entity_type?: string
          tag_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "entitytags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["tag_id"]
          },
        ]
      }
      "EOFY Bundles": {
        Row: {
          "Bundle Name": string | null
          "Cost Price (Trolley)": number | null
          Includes: string | null
          "Retail Price (End Customer)": number | null
          "Retailer Margin": number | null
          "Sale Price (To Retailer)": number | null
          "Trolley Margin": number | null
        }
        Insert: {
          "Bundle Name"?: string | null
          "Cost Price (Trolley)"?: number | null
          Includes?: string | null
          "Retail Price (End Customer)"?: number | null
          "Retailer Margin"?: number | null
          "Sale Price (To Retailer)"?: number | null
          "Trolley Margin"?: number | null
        }
        Update: {
          "Bundle Name"?: string | null
          "Cost Price (Trolley)"?: number | null
          Includes?: string | null
          "Retail Price (End Customer)"?: number | null
          "Retailer Margin"?: number | null
          "Sale Price (To Retailer)"?: number | null
          "Trolley Margin"?: number | null
        }
        Relationships: []
      }
      excess_capacity_marketplace: {
        Row: {
          agent_code: string
          agent_name: string
          ai_readiness_level: number
          available_hours_per_week: number
          certifications: string[] | null
          created_at: string | null
          excess_capacity_percent: number
          function_cluster: string
          hourly_rate: number
          id: string
          last_updated: string | null
          max_engagement_hours: number | null
          min_engagement_hours: number | null
          pricing_tier: string
          skills_tags: string[] | null
          status: string
          updated_at: string | null
          value_score: string
        }
        Insert: {
          agent_code: string
          agent_name: string
          ai_readiness_level: number
          available_hours_per_week: number
          certifications?: string[] | null
          created_at?: string | null
          excess_capacity_percent: number
          function_cluster: string
          hourly_rate: number
          id?: string
          last_updated?: string | null
          max_engagement_hours?: number | null
          min_engagement_hours?: number | null
          pricing_tier?: string
          skills_tags?: string[] | null
          status?: string
          updated_at?: string | null
          value_score: string
        }
        Update: {
          agent_code?: string
          agent_name?: string
          ai_readiness_level?: number
          available_hours_per_week?: number
          certifications?: string[] | null
          created_at?: string | null
          excess_capacity_percent?: number
          function_cluster?: string
          hourly_rate?: number
          id?: string
          last_updated?: string | null
          max_engagement_hours?: number | null
          min_engagement_hours?: number | null
          pricing_tier?: string
          skills_tags?: string[] | null
          status?: string
          updated_at?: string | null
          value_score?: string
        }
        Relationships: []
      }
      "expanded - fully": {
        Row: {
          "30/60/90-Day Targets": string | null
          "Agentic AI Assistants Used? (Y/N)": string | null
          "Automation Opportunity Score (1–5)": number | null
          "Break-even Units": number | null
          "Certs/Training Needed": string | null
          Deliverables: string | null
          "Existing Customers (Y/N)": string | null
          "Expected Close Rate (%)": number | null
          "Forecasted Revenue ($)": number | null
          "Gross Margin per Unit (%)": number | null
          "Internal Lead (Name or Role)": string | null
          "Next Best Offer (Cross-sell Path)": string | null
          "Preferred Delivery Partner": string | null
          "Revenue Estimate (AUD)": string | null
          "Sales Narrative / Value Hook": string | null
          "System Dependencies": string | null
          "Team Capability Score (1–5)": number | null
          "Top Ideal Customer Types": string | null
          "Track Levels": string | null
          "Unit Cost to Deliver ($)": number | null
          "Who It's For": string | null
          Workstream: string | null
        }
        Insert: {
          "30/60/90-Day Targets"?: string | null
          "Agentic AI Assistants Used? (Y/N)"?: string | null
          "Automation Opportunity Score (1–5)"?: number | null
          "Break-even Units"?: number | null
          "Certs/Training Needed"?: string | null
          Deliverables?: string | null
          "Existing Customers (Y/N)"?: string | null
          "Expected Close Rate (%)"?: number | null
          "Forecasted Revenue ($)"?: number | null
          "Gross Margin per Unit (%)"?: number | null
          "Internal Lead (Name or Role)"?: string | null
          "Next Best Offer (Cross-sell Path)"?: string | null
          "Preferred Delivery Partner"?: string | null
          "Revenue Estimate (AUD)"?: string | null
          "Sales Narrative / Value Hook"?: string | null
          "System Dependencies"?: string | null
          "Team Capability Score (1–5)"?: number | null
          "Top Ideal Customer Types"?: string | null
          "Track Levels"?: string | null
          "Unit Cost to Deliver ($)"?: number | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Update: {
          "30/60/90-Day Targets"?: string | null
          "Agentic AI Assistants Used? (Y/N)"?: string | null
          "Automation Opportunity Score (1–5)"?: number | null
          "Break-even Units"?: number | null
          "Certs/Training Needed"?: string | null
          Deliverables?: string | null
          "Existing Customers (Y/N)"?: string | null
          "Expected Close Rate (%)"?: number | null
          "Forecasted Revenue ($)"?: number | null
          "Gross Margin per Unit (%)"?: number | null
          "Internal Lead (Name or Role)"?: string | null
          "Next Best Offer (Cross-sell Path)"?: string | null
          "Preferred Delivery Partner"?: string | null
          "Revenue Estimate (AUD)"?: string | null
          "Sales Narrative / Value Hook"?: string | null
          "System Dependencies"?: string | null
          "Team Capability Score (1–5)"?: number | null
          "Top Ideal Customer Types"?: string | null
          "Track Levels"?: string | null
          "Unit Cost to Deliver ($)"?: number | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "expanded ai workstreams": {
        Row: {
          "30/60/90-Day Targets": string | null
          Deliverables: string | null
          "Revenue Estimate (AUD)": string | null
          "Track Levels": string | null
          "Who It's For": string | null
          Workstream: string | null
        }
        Insert: {
          "30/60/90-Day Targets"?: string | null
          Deliverables?: string | null
          "Revenue Estimate (AUD)"?: string | null
          "Track Levels"?: string | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Update: {
          "30/60/90-Day Targets"?: string | null
          Deliverables?: string | null
          "Revenue Estimate (AUD)"?: string | null
          "Track Levels"?: string | null
          "Who It's For"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "expanded industry specific bundles": {
        Row: {
          Bundle: string | null
          "Customer Outcome": string | null
          "Detailed Project Offering": string | null
          "Estimated Duration (hrs)": number | null
          "Gross Margin (%)": number | null
          "Output Format": string | null
          "Persona Match (Buyer Type)": string | null
          "Recurrence Cycle": string | null
          "Retail Price ($)": number | null
          "Tier (Basic / Standard / Premium / Enterprise)": string | null
          Workstream: string | null
        }
        Insert: {
          Bundle?: string | null
          "Customer Outcome"?: string | null
          "Detailed Project Offering"?: string | null
          "Estimated Duration (hrs)"?: number | null
          "Gross Margin (%)"?: number | null
          "Output Format"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Recurrence Cycle"?: string | null
          "Retail Price ($)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          Workstream?: string | null
        }
        Update: {
          Bundle?: string | null
          "Customer Outcome"?: string | null
          "Detailed Project Offering"?: string | null
          "Estimated Duration (hrs)"?: number | null
          "Gross Margin (%)"?: number | null
          "Output Format"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Recurrence Cycle"?: string | null
          "Retail Price ($)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      external_data_sync: {
        Row: {
          created_at: string
          error_details: string | null
          id: string
          last_sync_at: string
          records_synced: number | null
          source_name: string
          sync_status: string
          table_name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          error_details?: string | null
          id?: string
          last_sync_at?: string
          records_synced?: number | null
          source_name: string
          sync_status?: string
          table_name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          error_details?: string | null
          id?: string
          last_sync_at?: string
          records_synced?: number | null
          source_name?: string
          sync_status?: string
          table_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      fairness_assessments: {
        Row: {
          assessed_at: string
          fairness_score: number | null
          id: string
          market_comparison: Json | null
          proposal_id: string
          recommendations: string | null
          risk_assessment: Json | null
        }
        Insert: {
          assessed_at?: string
          fairness_score?: number | null
          id?: string
          market_comparison?: Json | null
          proposal_id: string
          recommendations?: string | null
          risk_assessment?: Json | null
        }
        Update: {
          assessed_at?: string
          fairness_score?: number | null
          id?: string
          market_comparison?: Json | null
          proposal_id?: string
          recommendations?: string | null
          risk_assessment?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "fairness_assessments_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "negotiation_proposals"
            referencedColumns: ["id"]
          },
        ]
      }
      family_agents: {
        Row: {
          achievement: string | null
          agent_code: string
          background: string | null
          consultant_hourly_rate: number | null
          core_skills: string | null
          created_at: string | null
          cultural_expertise: string | null
          delivery_type: string | null
          division_name: string
          domain: string
          family_member_id: string
          final_cost: number | null
          function: string
          id: string
          persona: string
          sfia_level: string
          signature_method: string | null
          specialization: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
          tech_stack: string | null
          updated_at: string | null
        }
        Insert: {
          achievement?: string | null
          agent_code: string
          background?: string | null
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          cultural_expertise?: string | null
          delivery_type?: string | null
          division_name: string
          domain: string
          family_member_id: string
          final_cost?: number | null
          function: string
          id?: string
          persona: string
          sfia_level: string
          signature_method?: string | null
          specialization?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          updated_at?: string | null
        }
        Update: {
          achievement?: string | null
          agent_code?: string
          background?: string | null
          consultant_hourly_rate?: number | null
          core_skills?: string | null
          created_at?: string | null
          cultural_expertise?: string | null
          delivery_type?: string | null
          division_name?: string
          domain?: string
          family_member_id?: string
          final_cost?: number | null
          function?: string
          id?: string
          persona?: string
          sfia_level?: string
          signature_method?: string | null
          specialization?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
          tech_stack?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      featureflags: {
        Row: {
          created_at: string | null
          description: string | null
          enabled: boolean | null
          flag_id: string
          name: string | null
          rollout_pct: number | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          flag_id: string
          name?: string | null
          rollout_pct?: number | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          enabled?: boolean | null
          flag_id?: string
          name?: string | null
          rollout_pct?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      featureusage: {
        Row: {
          customer_id: string | null
          flag_id: string | null
          timestamp: string | null
          usage_count: number | null
          usage_id: number
        }
        Insert: {
          customer_id?: string | null
          flag_id?: string | null
          timestamp?: string | null
          usage_count?: number | null
          usage_id?: number
        }
        Update: {
          customer_id?: string | null
          flag_id?: string | null
          timestamp?: string | null
          usage_count?: number | null
          usage_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "featureusage_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "featureusage_flag_id_fkey"
            columns: ["flag_id"]
            isOneToOne: false
            referencedRelation: "featureflags"
            referencedColumns: ["flag_id"]
          },
        ]
      }
      FINAL: {
        Row: {
          Achieved_Outputs: string | null
          Age: number | null
          Agency: string | null
          Agent_Code: string | null
          Agent_Division: string | null
          Agent_Level: number | null
          Agent_Name: string | null
          AI_Companion_Name: string | null
          AI_Companion_Profile: string | null
          AI_Companion_Specialty: string | null
          AI_Companion_Type: string | null
          AI_Suggested_Title: string | null
          APS_Alignment_Detail: string | null
          APS_Level: string | null
          Cultural_Background: string | null
          Demo_Scenario_Prompt: string | null
          Deployment_Timeframe: string | null
          Full_Name: string | null
          Impact_Metrics_Table: string | null
          Integration_Points: string | null
          Leadership_Category: string | null
          Location: string | null
          Narrative_Story: string | null
          Primary_Agent_Code: string | null
          Quote: string | null
          Role_Title: string | null
          Strategic_Theme: string | null
          Subagents_List: string | null
          Value_Delivered: string | null
          Vignette_ID: string | null
        }
        Insert: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Update: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Relationships: []
      }
      "financial audit": {
        Row: {
          "AI Leverage Factor": string | null
          "Breakeven Volume": number | null
          "Delivery Cost (Internal)": number | null
          "Discounted Sale Price": number | null
          "Gross Margin %": number | null
          Output: string | null
          "Quarterly Profit": number | null
          "Quarterly Revenue": number | null
          "Revenue (RRP)": number | null
          "Target Sales Volume (Q)": number | null
          "Top Margin": number | null
          Workstream: string | null
        }
        Insert: {
          "AI Leverage Factor"?: string | null
          "Breakeven Volume"?: number | null
          "Delivery Cost (Internal)"?: number | null
          "Discounted Sale Price"?: number | null
          "Gross Margin %"?: number | null
          Output?: string | null
          "Quarterly Profit"?: number | null
          "Quarterly Revenue"?: number | null
          "Revenue (RRP)"?: number | null
          "Target Sales Volume (Q)"?: number | null
          "Top Margin"?: number | null
          Workstream?: string | null
        }
        Update: {
          "AI Leverage Factor"?: string | null
          "Breakeven Volume"?: number | null
          "Delivery Cost (Internal)"?: number | null
          "Discounted Sale Price"?: number | null
          "Gross Margin %"?: number | null
          Output?: string | null
          "Quarterly Profit"?: number | null
          "Quarterly Revenue"?: number | null
          "Revenue (RRP)"?: number | null
          "Target Sales Volume (Q)"?: number | null
          "Top Margin"?: number | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "financial summary": {
        Row: {
          "AI Leverage Factor": string | null
          "Breakeven Volume": number | null
          "Delivery Cost (Internal)": number | null
          "Discounted Sale Price": number | null
          "Gross Margin %": number | null
          Output: string | null
          "Quarterly Profit": number | null
          "Quarterly Revenue": number | null
          "Revenue (RRP)": number | null
          "Target Sales Volume (Q)": number | null
          "Top Margin": number | null
          Workstream: string | null
        }
        Insert: {
          "AI Leverage Factor"?: string | null
          "Breakeven Volume"?: number | null
          "Delivery Cost (Internal)"?: number | null
          "Discounted Sale Price"?: number | null
          "Gross Margin %"?: number | null
          Output?: string | null
          "Quarterly Profit"?: number | null
          "Quarterly Revenue"?: number | null
          "Revenue (RRP)"?: number | null
          "Target Sales Volume (Q)"?: number | null
          "Top Margin"?: number | null
          Workstream?: string | null
        }
        Update: {
          "AI Leverage Factor"?: string | null
          "Breakeven Volume"?: number | null
          "Delivery Cost (Internal)"?: number | null
          "Discounted Sale Price"?: number | null
          "Gross Margin %"?: number | null
          Output?: string | null
          "Quarterly Profit"?: number | null
          "Quarterly Revenue"?: number | null
          "Revenue (RRP)"?: number | null
          "Target Sales Volume (Q)"?: number | null
          "Top Margin"?: number | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "full catalogue monetisation": {
        Row: {
          "AI Agent Mapping": string | null
          "Approved SKU Exists (Y/N)": string | null
          "Available Now (Y/N)": string | null
          "Billing Owner": string | null
          "Billing Type (Fixed / Recurring / Add-on)": string | null
          "Can Be Automated (Y/N)": string | null
          "Can Be Outsourced (Y/N)": string | null
          Category: string | null
          "Commercial Risk Flag": string | null
          "Contract Type (SoW / SLA / Retainer)": string | null
          "Customer Outcome": string | null
          "Customer-Facing (Y/N)": string | null
          "Delivery Team": string | null
          "Deployment Lead Time (days)": number | null
          "Detailed Project Offering": string | null
          "Effort Category (Build / Run / Maintain)": string | null
          "Effort Type (Capex/Opex/Product)": string | null
          "Estimated Cost ($)": number | null
          "Estimated Duration (hrs)": number | null
          Geeks2U: string | null
          "Geography or Zone": string | null
          "Gross Margin (%)": number | null
          "Handwritten Match": boolean | null
          InnovateMe: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)": string | null
          "IT & Integration Team": string | null
          "Marketing Team": string | null
          "Notes / Customisation": string | null
          "Officeworks B2B Team": string | null
          "Operational Complexity (1-5)": number | null
          "Output Format": string | null
          "Owner Team": string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)": string | null
          "Payment Method": string | null
          "Persona Match (Buyer Type)": string | null
          "Project Type": string | null
          "Proposal/Slide Component": string | null
          "Quote Configurator Input (Y/N)": string | null
          "Quote Package": string | null
          "Recurrence Cycle": string | null
          "Requires Integration (Y/N)": string | null
          "Resource Type (Developer, Designer, PM, Field Tech)": string | null
          "Retail Price ($)": number | null
          "SKU ID or Bundle Code": string | null
          "System Dependencies": string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)": string | null
          "Tech Skill Level (1-5)": number | null
          "Tier (Basic / Standard / Premium / Enterprise)": string | null
          "Triggers Follow-Up (Y/N)": string | null
          Workstream: string | null
        }
        Insert: {
          "AI Agent Mapping"?: string | null
          "Approved SKU Exists (Y/N)"?: string | null
          "Available Now (Y/N)"?: string | null
          "Billing Owner"?: string | null
          "Billing Type (Fixed / Recurring / Add-on)"?: string | null
          "Can Be Automated (Y/N)"?: string | null
          "Can Be Outsourced (Y/N)"?: string | null
          Category?: string | null
          "Commercial Risk Flag"?: string | null
          "Contract Type (SoW / SLA / Retainer)"?: string | null
          "Customer Outcome"?: string | null
          "Customer-Facing (Y/N)"?: string | null
          "Delivery Team"?: string | null
          "Deployment Lead Time (days)"?: number | null
          "Detailed Project Offering"?: string | null
          "Effort Category (Build / Run / Maintain)"?: string | null
          "Effort Type (Capex/Opex/Product)"?: string | null
          "Estimated Cost ($)"?: number | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          "Geography or Zone"?: string | null
          "Gross Margin (%)"?: number | null
          "Handwritten Match"?: boolean | null
          InnovateMe?: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)"?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Notes / Customisation"?: string | null
          "Officeworks B2B Team"?: string | null
          "Operational Complexity (1-5)"?: number | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)"?: string | null
          "Payment Method"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Project Type"?: string | null
          "Proposal/Slide Component"?: string | null
          "Quote Configurator Input (Y/N)"?: string | null
          "Quote Package"?: string | null
          "Recurrence Cycle"?: string | null
          "Requires Integration (Y/N)"?: string | null
          "Resource Type (Developer, Designer, PM, Field Tech)"?: string | null
          "Retail Price ($)"?: number | null
          "SKU ID or Bundle Code"?: string | null
          "System Dependencies"?: string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)"?: string | null
          "Tech Skill Level (1-5)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          "Triggers Follow-Up (Y/N)"?: string | null
          Workstream?: string | null
        }
        Update: {
          "AI Agent Mapping"?: string | null
          "Approved SKU Exists (Y/N)"?: string | null
          "Available Now (Y/N)"?: string | null
          "Billing Owner"?: string | null
          "Billing Type (Fixed / Recurring / Add-on)"?: string | null
          "Can Be Automated (Y/N)"?: string | null
          "Can Be Outsourced (Y/N)"?: string | null
          Category?: string | null
          "Commercial Risk Flag"?: string | null
          "Contract Type (SoW / SLA / Retainer)"?: string | null
          "Customer Outcome"?: string | null
          "Customer-Facing (Y/N)"?: string | null
          "Delivery Team"?: string | null
          "Deployment Lead Time (days)"?: number | null
          "Detailed Project Offering"?: string | null
          "Effort Category (Build / Run / Maintain)"?: string | null
          "Effort Type (Capex/Opex/Product)"?: string | null
          "Estimated Cost ($)"?: number | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          "Geography or Zone"?: string | null
          "Gross Margin (%)"?: number | null
          "Handwritten Match"?: boolean | null
          InnovateMe?: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)"?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Notes / Customisation"?: string | null
          "Officeworks B2B Team"?: string | null
          "Operational Complexity (1-5)"?: number | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)"?: string | null
          "Payment Method"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Project Type"?: string | null
          "Proposal/Slide Component"?: string | null
          "Quote Configurator Input (Y/N)"?: string | null
          "Quote Package"?: string | null
          "Recurrence Cycle"?: string | null
          "Requires Integration (Y/N)"?: string | null
          "Resource Type (Developer, Designer, PM, Field Tech)"?: string | null
          "Retail Price ($)"?: number | null
          "SKU ID or Bundle Code"?: string | null
          "System Dependencies"?: string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)"?: string | null
          "Tech Skill Level (1-5)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          "Triggers Follow-Up (Y/N)"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      function_performance_metrics: {
        Row: {
          agent_count: number | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_value_score: number | null
          job_function: string | null
          price_rank_pct: number | null
        }
        Insert: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Update: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Relationships: []
      }
      gace_listings: {
        Row: {
          agent_code: string
          agent_specs: Json | null
          available_sah: number | null
          bid_status: string | null
          created_at: string | null
          demand_score: number | null
          effective_date: string | null
          expire_date: string | null
          id: string
          price_per_hour: number | null
          pricing_tier: string | null
          updated_at: string | null
        }
        Insert: {
          agent_code: string
          agent_specs?: Json | null
          available_sah?: number | null
          bid_status?: string | null
          created_at?: string | null
          demand_score?: number | null
          effective_date?: string | null
          expire_date?: string | null
          id: string
          price_per_hour?: number | null
          pricing_tier?: string | null
          updated_at?: string | null
        }
        Update: {
          agent_code?: string
          agent_specs?: Json | null
          available_sah?: number | null
          bid_status?: string | null
          created_at?: string | null
          demand_score?: number | null
          effective_date?: string | null
          expire_date?: string | null
          id?: string
          price_per_hour?: number | null
          pricing_tier?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      "geeks bundles": {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      "geeks new table June": {
        Row: {
          "AI Agent Mapping": string | null
          "Approved SKU Exists (Y/N)": string | null
          "Available Now (Y/N)": string | null
          "Billing Owner": string | null
          "Billing Type (Fixed / Recurring / Add-on)": string | null
          "Can Be Automated (Y/N)": string | null
          "Can Be Outsourced (Y/N)": string | null
          Category: string | null
          "Commercial Risk Flag": string | null
          "Contract Type (SoW / SLA / Retainer)": string | null
          "Customer Outcome": string | null
          "Customer-Facing (Y/N)": string | null
          "Delivery Team": string | null
          "Deployment Lead Time (days)": number | null
          "Detailed Project Offering": string | null
          "Effort Category (Build / Run / Maintain)": string | null
          "Effort Type (Capex/Opex/Product)": string | null
          "Estimated Cost ($)": number | null
          "Estimated Duration (hrs)": number | null
          Geeks2U: string | null
          "Geography or Zone": string | null
          "Gross Margin (%)": number | null
          "Handwritten Match": boolean | null
          InnovateMe: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)": string | null
          "IT & Integration Team": string | null
          "Marketing Team": string | null
          "Notes / Customisation": string | null
          "Officeworks B2B Team": string | null
          "Operational Complexity (1-5)": number | null
          "Output Format": string | null
          "Owner Team": string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)": string | null
          "Payment Method": string | null
          "Persona Match (Buyer Type)": string | null
          "Project Type": string | null
          "Proposal/Slide Component": string | null
          "Quote Configurator Input (Y/N)": string | null
          "Quote Package": string | null
          "Recurrence Cycle": string | null
          "Requires Integration (Y/N)": string | null
          "Resource Type (Developer, Designer, PM, Field Tech)": string | null
          "Retail Price ($)": number | null
          "SKU ID or Bundle Code": string | null
          "System Dependencies": string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)": string | null
          "Tech Skill Level (1-5)": number | null
          "Tier (Basic / Standard / Premium / Enterprise)": string | null
          "Triggers Follow-Up (Y/N)": string | null
          Workstream: string | null
        }
        Insert: {
          "AI Agent Mapping"?: string | null
          "Approved SKU Exists (Y/N)"?: string | null
          "Available Now (Y/N)"?: string | null
          "Billing Owner"?: string | null
          "Billing Type (Fixed / Recurring / Add-on)"?: string | null
          "Can Be Automated (Y/N)"?: string | null
          "Can Be Outsourced (Y/N)"?: string | null
          Category?: string | null
          "Commercial Risk Flag"?: string | null
          "Contract Type (SoW / SLA / Retainer)"?: string | null
          "Customer Outcome"?: string | null
          "Customer-Facing (Y/N)"?: string | null
          "Delivery Team"?: string | null
          "Deployment Lead Time (days)"?: number | null
          "Detailed Project Offering"?: string | null
          "Effort Category (Build / Run / Maintain)"?: string | null
          "Effort Type (Capex/Opex/Product)"?: string | null
          "Estimated Cost ($)"?: number | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          "Geography or Zone"?: string | null
          "Gross Margin (%)"?: number | null
          "Handwritten Match"?: boolean | null
          InnovateMe?: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)"?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Notes / Customisation"?: string | null
          "Officeworks B2B Team"?: string | null
          "Operational Complexity (1-5)"?: number | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)"?: string | null
          "Payment Method"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Project Type"?: string | null
          "Proposal/Slide Component"?: string | null
          "Quote Configurator Input (Y/N)"?: string | null
          "Quote Package"?: string | null
          "Recurrence Cycle"?: string | null
          "Requires Integration (Y/N)"?: string | null
          "Resource Type (Developer, Designer, PM, Field Tech)"?: string | null
          "Retail Price ($)"?: number | null
          "SKU ID or Bundle Code"?: string | null
          "System Dependencies"?: string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)"?: string | null
          "Tech Skill Level (1-5)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          "Triggers Follow-Up (Y/N)"?: string | null
          Workstream?: string | null
        }
        Update: {
          "AI Agent Mapping"?: string | null
          "Approved SKU Exists (Y/N)"?: string | null
          "Available Now (Y/N)"?: string | null
          "Billing Owner"?: string | null
          "Billing Type (Fixed / Recurring / Add-on)"?: string | null
          "Can Be Automated (Y/N)"?: string | null
          "Can Be Outsourced (Y/N)"?: string | null
          Category?: string | null
          "Commercial Risk Flag"?: string | null
          "Contract Type (SoW / SLA / Retainer)"?: string | null
          "Customer Outcome"?: string | null
          "Customer-Facing (Y/N)"?: string | null
          "Delivery Team"?: string | null
          "Deployment Lead Time (days)"?: number | null
          "Detailed Project Offering"?: string | null
          "Effort Category (Build / Run / Maintain)"?: string | null
          "Effort Type (Capex/Opex/Product)"?: string | null
          "Estimated Cost ($)"?: number | null
          "Estimated Duration (hrs)"?: number | null
          Geeks2U?: string | null
          "Geography or Zone"?: string | null
          "Gross Margin (%)"?: number | null
          "Handwritten Match"?: boolean | null
          InnovateMe?: string | null
          "Integration Targets (CRM, Portal, ServiceNow, etc.)"?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Notes / Customisation"?: string | null
          "Officeworks B2B Team"?: string | null
          "Operational Complexity (1-5)"?: number | null
          "Output Format"?: string | null
          "Owner Team"?: string | null
          "Partner Involvement (Geeks2U / Officeworks / Unisys)"?: string | null
          "Payment Method"?: string | null
          "Persona Match (Buyer Type)"?: string | null
          "Project Type"?: string | null
          "Proposal/Slide Component"?: string | null
          "Quote Configurator Input (Y/N)"?: string | null
          "Quote Package"?: string | null
          "Recurrence Cycle"?: string | null
          "Requires Integration (Y/N)"?: string | null
          "Resource Type (Developer, Designer, PM, Field Tech)"?: string | null
          "Retail Price ($)"?: number | null
          "SKU ID or Bundle Code"?: string | null
          "System Dependencies"?: string | null
          "Target Sector (SMB / EDU / GOV / Health / Retail)"?: string | null
          "Tech Skill Level (1-5)"?: number | null
          "Tier (Basic / Standard / Premium / Enterprise)"?: string | null
          "Triggers Follow-Up (Y/N)"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      global_labor_rates: {
        Row: {
          base_hourly_rate: number
          benefits_overhead_pct: number
          city: string | null
          compliance_cost_pct: number
          cost_of_living_index: number
          country_code: string
          country_name: string
          created_at: string
          currency_code: string
          data_source: string | null
          effective_date: string
          id: string
          is_active: boolean
          market_demand_multiplier: number
          ppp_adjustment_factor: number
          region: string | null
          remote_work_adjustment: number
          sfia_level: number
          tax_overhead_pct: number
          updated_at: string
        }
        Insert: {
          base_hourly_rate: number
          benefits_overhead_pct?: number
          city?: string | null
          compliance_cost_pct?: number
          cost_of_living_index?: number
          country_code: string
          country_name: string
          created_at?: string
          currency_code?: string
          data_source?: string | null
          effective_date?: string
          id?: string
          is_active?: boolean
          market_demand_multiplier?: number
          ppp_adjustment_factor?: number
          region?: string | null
          remote_work_adjustment?: number
          sfia_level: number
          tax_overhead_pct?: number
          updated_at?: string
        }
        Update: {
          base_hourly_rate?: number
          benefits_overhead_pct?: number
          city?: string | null
          compliance_cost_pct?: number
          cost_of_living_index?: number
          country_code?: string
          country_name?: string
          created_at?: string
          currency_code?: string
          data_source?: string | null
          effective_date?: string
          id?: string
          is_active?: boolean
          market_demand_multiplier?: number
          ppp_adjustment_factor?: number
          region?: string | null
          remote_work_adjustment?: number
          sfia_level?: number
          tax_overhead_pct?: number
          updated_at?: string
        }
        Relationships: []
      }
      grants: {
        Row: {
          agency: string | null
          application_process: string | null
          closing_date: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string | null
          description: string | null
          eligibility_criteria: string | null
          estimated_value: number | null
          external_url: string | null
          grant_id: string | null
          grant_type: string | null
          id: string
          opening_date: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          agency?: string | null
          application_process?: string | null
          closing_date?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          eligibility_criteria?: string | null
          estimated_value?: number | null
          external_url?: string | null
          grant_id?: string | null
          grant_type?: string | null
          id?: string
          opening_date?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          agency?: string | null
          application_process?: string | null
          closing_date?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string | null
          description?: string | null
          eligibility_criteria?: string | null
          estimated_value?: number | null
          external_url?: string | null
          grant_id?: string | null
          grant_type?: string | null
          id?: string
          opening_date?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      holoorg_agent_capabilities: {
        Row: {
          agent_code: string
          capability_id: string
          created_at: string | null
          proficiency_level: number
        }
        Insert: {
          agent_code: string
          capability_id: string
          created_at?: string | null
          proficiency_level?: number
        }
        Update: {
          agent_code?: string
          capability_id?: string
          created_at?: string | null
          proficiency_level?: number
        }
        Relationships: [
          {
            foreignKeyName: "holoorg_agent_capabilities_capability_id_fkey"
            columns: ["capability_id"]
            isOneToOne: false
            referencedRelation: "holoorg_capabilities"
            referencedColumns: ["id"]
          },
        ]
      }
      holoorg_agents: {
        Row: {
          created_at: string
          deployments: number
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deployments?: number
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deployments?: number
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      holoorg_capabilities: {
        Row: {
          category: string | null
          code: string
          complexity: number
          created_at: string | null
          description: string | null
          id: string
          name: string
          personality_id: string | null
          updated_at: string | null
          value_score: number
        }
        Insert: {
          category?: string | null
          code: string
          complexity?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          personality_id?: string | null
          updated_at?: string | null
          value_score?: number
        }
        Update: {
          category?: string | null
          code?: string
          complexity?: number
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          personality_id?: string | null
          updated_at?: string | null
          value_score?: number
        }
        Relationships: [
          {
            foreignKeyName: "holoorg_capabilities_personality_id_fkey"
            columns: ["personality_id"]
            isOneToOne: false
            referencedRelation: "holoorg_personalities"
            referencedColumns: ["id"]
          },
        ]
      }
      holoorg_personalities: {
        Row: {
          core_principle: string | null
          created_at: string | null
          description: string
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          core_principle?: string | null
          created_at?: string | null
          description: string
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          core_principle?: string | null
          created_at?: string | null
          description?: string
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      holoorg_teams: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          personality_distribution: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          personality_distribution?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          personality_distribution?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      huge: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: number | null
          Estimated_Price: number | null
          Estimated_Profit: number | null
          Role_Name: string | null
          Tool: string | null
          WeightedScore: number | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Relationships: []
      }
      idea_clusters: {
        Row: {
          cognitivepattern: string | null
          created_at: string
          id: string
          ideatype: string
          lines: string[] | null
          linkedprojects: string | null
          status: string
          summary: string | null
          theme: string
          updated_at: string
        }
        Insert: {
          cognitivepattern?: string | null
          created_at?: string
          id?: string
          ideatype: string
          lines?: string[] | null
          linkedprojects?: string | null
          status?: string
          summary?: string | null
          theme: string
          updated_at?: string
        }
        Update: {
          cognitivepattern?: string | null
          created_at?: string
          id?: string
          ideatype?: string
          lines?: string[] | null
          linkedprojects?: string | null
          status?: string
          summary?: string | null
          theme?: string
          updated_at?: string
        }
        Relationships: []
      }
      ingestion_runs: {
        Row: {
          finished_at: string | null
          id: string
          imported_count: number
          logs: Json
          message: string | null
          source: string
          started_at: string
          status: string
          target_url: string | null
        }
        Insert: {
          finished_at?: string | null
          id?: string
          imported_count?: number
          logs?: Json
          message?: string | null
          source?: string
          started_at?: string
          status?: string
          target_url?: string | null
        }
        Update: {
          finished_at?: string | null
          id?: string
          imported_count?: number
          logs?: Json
          message?: string | null
          source?: string
          started_at?: string
          status?: string
          target_url?: string | null
        }
        Relationships: []
      }
      "Initial consent Registry - 5200": {
        Row: {
          "Age Of Subject": string | null
          "Agent Required": string | null
          "Applicable Age Range": string | null
          "Automated Processing": string | null
          "Awareness Level": string | null
          "Can Revoke": string | null
          Category: string | null
          "Collected By": string | null
          "Consent Expiry": string | null
          "Consent Giver": string | null
          "Consent ID": string | null
          "Consent Language Complexity": string | null
          "Consent Log Id": string | null
          "Consent Mechanism": string | null
          "Consent Method Traceable": string | null
          "Consent Name": string | null
          "Consent Scope": string | null
          "Consent Trigger": string | null
          "Consent Type": string | null
          "Consent Update Required": string | null
          "Data Captured": string | null
          "Data Controller": string | null
          "Data Retention Estimate": string | null
          "Data Retention Policy": string | null
          "Data Type": string | null
          "Data Usage": string | null
          "Disputed Rights": string | null
          "Example Data Collectors": string | null
          Frequency: string | null
          "Guardian Involvement": string | null
          "Impact on Opportunities": string | null
          "Inference-Based": string | null
          "Insights Derived": string | null
          "Jurisdictional Threshold": string | null
          "Legal Owner": string | null
          "Life Domain": string | null
          "Life Stage": string | null
          "Linked Services": string | null
          "Linked Systems": string | null
          "Minor Involvement": string | null
          "Ownership Notes": string | null
          "Policy Sources": string | null
          "Profiling Applied": string | null
          "Profiling Risk": string | null
          "Registry Code": string | null
          "Retention Period": string | null
          "Revocation Available": string | null
          "Revocation Method": string | null
          "Risk Level": string | null
          "Risk Of Misuse": string | null
          "Risk Rating": string | null
          Sensitivity: string | null
          "Shared With": string | null
          "Shared With Third Parties": string | null
          Status: string | null
          "Subject Age": string | null
          "Used for Decision-Making": string | null
          "Visibility To Subject": string | null
          "Vulnerability Flag": string | null
        }
        Insert: {
          "Age Of Subject"?: string | null
          "Agent Required"?: string | null
          "Applicable Age Range"?: string | null
          "Automated Processing"?: string | null
          "Awareness Level"?: string | null
          "Can Revoke"?: string | null
          Category?: string | null
          "Collected By"?: string | null
          "Consent Expiry"?: string | null
          "Consent Giver"?: string | null
          "Consent ID"?: string | null
          "Consent Language Complexity"?: string | null
          "Consent Log Id"?: string | null
          "Consent Mechanism"?: string | null
          "Consent Method Traceable"?: string | null
          "Consent Name"?: string | null
          "Consent Scope"?: string | null
          "Consent Trigger"?: string | null
          "Consent Type"?: string | null
          "Consent Update Required"?: string | null
          "Data Captured"?: string | null
          "Data Controller"?: string | null
          "Data Retention Estimate"?: string | null
          "Data Retention Policy"?: string | null
          "Data Type"?: string | null
          "Data Usage"?: string | null
          "Disputed Rights"?: string | null
          "Example Data Collectors"?: string | null
          Frequency?: string | null
          "Guardian Involvement"?: string | null
          "Impact on Opportunities"?: string | null
          "Inference-Based"?: string | null
          "Insights Derived"?: string | null
          "Jurisdictional Threshold"?: string | null
          "Legal Owner"?: string | null
          "Life Domain"?: string | null
          "Life Stage"?: string | null
          "Linked Services"?: string | null
          "Linked Systems"?: string | null
          "Minor Involvement"?: string | null
          "Ownership Notes"?: string | null
          "Policy Sources"?: string | null
          "Profiling Applied"?: string | null
          "Profiling Risk"?: string | null
          "Registry Code"?: string | null
          "Retention Period"?: string | null
          "Revocation Available"?: string | null
          "Revocation Method"?: string | null
          "Risk Level"?: string | null
          "Risk Of Misuse"?: string | null
          "Risk Rating"?: string | null
          Sensitivity?: string | null
          "Shared With"?: string | null
          "Shared With Third Parties"?: string | null
          Status?: string | null
          "Subject Age"?: string | null
          "Used for Decision-Making"?: string | null
          "Visibility To Subject"?: string | null
          "Vulnerability Flag"?: string | null
        }
        Update: {
          "Age Of Subject"?: string | null
          "Agent Required"?: string | null
          "Applicable Age Range"?: string | null
          "Automated Processing"?: string | null
          "Awareness Level"?: string | null
          "Can Revoke"?: string | null
          Category?: string | null
          "Collected By"?: string | null
          "Consent Expiry"?: string | null
          "Consent Giver"?: string | null
          "Consent ID"?: string | null
          "Consent Language Complexity"?: string | null
          "Consent Log Id"?: string | null
          "Consent Mechanism"?: string | null
          "Consent Method Traceable"?: string | null
          "Consent Name"?: string | null
          "Consent Scope"?: string | null
          "Consent Trigger"?: string | null
          "Consent Type"?: string | null
          "Consent Update Required"?: string | null
          "Data Captured"?: string | null
          "Data Controller"?: string | null
          "Data Retention Estimate"?: string | null
          "Data Retention Policy"?: string | null
          "Data Type"?: string | null
          "Data Usage"?: string | null
          "Disputed Rights"?: string | null
          "Example Data Collectors"?: string | null
          Frequency?: string | null
          "Guardian Involvement"?: string | null
          "Impact on Opportunities"?: string | null
          "Inference-Based"?: string | null
          "Insights Derived"?: string | null
          "Jurisdictional Threshold"?: string | null
          "Legal Owner"?: string | null
          "Life Domain"?: string | null
          "Life Stage"?: string | null
          "Linked Services"?: string | null
          "Linked Systems"?: string | null
          "Minor Involvement"?: string | null
          "Ownership Notes"?: string | null
          "Policy Sources"?: string | null
          "Profiling Applied"?: string | null
          "Profiling Risk"?: string | null
          "Registry Code"?: string | null
          "Retention Period"?: string | null
          "Revocation Available"?: string | null
          "Revocation Method"?: string | null
          "Risk Level"?: string | null
          "Risk Of Misuse"?: string | null
          "Risk Rating"?: string | null
          Sensitivity?: string | null
          "Shared With"?: string | null
          "Shared With Third Parties"?: string | null
          Status?: string | null
          "Subject Age"?: string | null
          "Used for Decision-Making"?: string | null
          "Visibility To Subject"?: string | null
          "Vulnerability Flag"?: string | null
        }
        Relationships: []
      }
      institutional_memory: {
        Row: {
          accessibility_level: string | null
          content: string
          context_tags: string[] | null
          created_at: string
          id: string
          importance_score: number | null
          last_referenced: string | null
          memory_type: string
          preservation_priority: string | null
          reference_count: number | null
          related_entities: string[] | null
          time_period: string | null
          title: string
          updated_at: string
        }
        Insert: {
          accessibility_level?: string | null
          content: string
          context_tags?: string[] | null
          created_at?: string
          id?: string
          importance_score?: number | null
          last_referenced?: string | null
          memory_type: string
          preservation_priority?: string | null
          reference_count?: number | null
          related_entities?: string[] | null
          time_period?: string | null
          title: string
          updated_at?: string
        }
        Update: {
          accessibility_level?: string | null
          content?: string
          context_tags?: string[] | null
          created_at?: string
          id?: string
          importance_score?: number | null
          last_referenced?: string | null
          memory_type?: string
          preservation_priority?: string | null
          reference_count?: number | null
          related_entities?: string[] | null
          time_period?: string | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      integration_templates: {
        Row: {
          agent_codes: string[]
          base_price: number | null
          category: string
          created_at: string | null
          deployment_options: string[] | null
          description: string | null
          docker_command: string | null
          estimated_setup_time_hours: number | null
          github_repo_url: string | null
          id: string
          is_trending: boolean | null
          monthly_executions_estimate: number | null
          pricing_tier: string | null
          setup_complexity: string | null
          setup_cost: number | null
          template_name: string
          updated_at: string | null
          use_case_example: string | null
        }
        Insert: {
          agent_codes: string[]
          base_price?: number | null
          category: string
          created_at?: string | null
          deployment_options?: string[] | null
          description?: string | null
          docker_command?: string | null
          estimated_setup_time_hours?: number | null
          github_repo_url?: string | null
          id?: string
          is_trending?: boolean | null
          monthly_executions_estimate?: number | null
          pricing_tier?: string | null
          setup_complexity?: string | null
          setup_cost?: number | null
          template_name: string
          updated_at?: string | null
          use_case_example?: string | null
        }
        Update: {
          agent_codes?: string[]
          base_price?: number | null
          category?: string
          created_at?: string | null
          deployment_options?: string[] | null
          description?: string | null
          docker_command?: string | null
          estimated_setup_time_hours?: number | null
          github_repo_url?: string | null
          id?: string
          is_trending?: boolean | null
          monthly_executions_estimate?: number | null
          pricing_tier?: string | null
          setup_complexity?: string | null
          setup_cost?: number | null
          template_name?: string
          updated_at?: string | null
          use_case_example?: string | null
        }
        Relationships: []
      }
      integration_usage: {
        Row: {
          api_endpoint: string
          created_at: string | null
          date: string | null
          id: string
          usage_count: number | null
          user_id: string
        }
        Insert: {
          api_endpoint: string
          created_at?: string | null
          date?: string | null
          id?: string
          usage_count?: number | null
          user_id: string
        }
        Update: {
          api_endpoint?: string
          created_at?: string | null
          date?: string | null
          id?: string
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      integrations: {
        Row: {
          config: Json | null
          integration_id: string
          last_synced: string | null
          name: string | null
          status: string | null
          type: string | null
        }
        Insert: {
          config?: Json | null
          integration_id: string
          last_synced?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Update: {
          config?: Json | null
          integration_id?: string
          last_synced?: string | null
          name?: string | null
          status?: string | null
          type?: string | null
        }
        Relationships: []
      }
      investment_scenarios: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean | null
          name: string
          roi_percentage: number
          total_investment: number
          total_return: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          roi_percentage?: number
          total_investment?: number
          total_return?: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          roi_percentage?: number
          total_investment?: number
          total_return?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      involvement_levels: {
        Row: {
          color_code: string | null
          created_at: string
          description: string | null
          id: string
          intensity_score: number | null
          level_code: string
          level_name: string
        }
        Insert: {
          color_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          intensity_score?: number | null
          level_code: string
          level_name: string
        }
        Update: {
          color_code?: string | null
          created_at?: string
          description?: string | null
          id?: string
          intensity_score?: number | null
          level_code?: string
          level_name?: string
        }
        Relationships: []
      }
      job_analysis_results: {
        Row: {
          capacity_utilization: number | null
          checklist: Json | null
          cost_savings: number | null
          created_at: string
          excess_capacity: number
          id: string
          requester_ip: string | null
          results: Json
          roles: Json
          total_agents: number
          total_cost: number
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          capacity_utilization?: number | null
          checklist?: Json | null
          cost_savings?: number | null
          created_at?: string
          excess_capacity: number
          id?: string
          requester_ip?: string | null
          results: Json
          roles: Json
          total_agents: number
          total_cost: number
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          capacity_utilization?: number | null
          checklist?: Json | null
          cost_savings?: number | null
          created_at?: string
          excess_capacity?: number
          id?: string
          requester_ip?: string | null
          results?: Json
          roles?: Json
          total_agents?: number
          total_cost?: number
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      knowledge_applications: {
        Row: {
          applied_action: string
          created_at: string | null
          effectiveness_rating: number | null
          id: string
          knowledge_source_id: string
          knowledge_source_type: string
          outcome_data: Json | null
          tool_used: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          applied_action: string
          created_at?: string | null
          effectiveness_rating?: number | null
          id?: string
          knowledge_source_id: string
          knowledge_source_type: string
          outcome_data?: Json | null
          tool_used?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          applied_action?: string
          created_at?: string | null
          effectiveness_rating?: number | null
          id?: string
          knowledge_source_id?: string
          knowledge_source_type?: string
          outcome_data?: Json | null
          tool_used?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      knowledge_graph_relationships: {
        Row: {
          concept: string
          context: string | null
          created_at: string
          id: string
          relationship_type: string
          source_agent: string
          strength: number | null
          target_agent: string | null
          updated_at: string
        }
        Insert: {
          concept: string
          context?: string | null
          created_at?: string
          id?: string
          relationship_type: string
          source_agent: string
          strength?: number | null
          target_agent?: string | null
          updated_at?: string
        }
        Update: {
          concept?: string
          context?: string | null
          created_at?: string
          id?: string
          relationship_type?: string
          source_agent?: string
          strength?: number | null
          target_agent?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      knowledge_transfers: {
        Row: {
          completed_date: string | null
          completion_percentage: number | null
          created_at: string
          follow_up_actions: string[] | null
          from_entity: string | null
          gaps_identified: string[] | null
          id: string
          knowledge_assets: Json | null
          knowledge_domains: string[] | null
          quality_assessment: number | null
          scheduled_date: string | null
          to_entity: string
          transfer_method: string[] | null
          transfer_status: string | null
          transfer_type: string
          updated_at: string
        }
        Insert: {
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string
          follow_up_actions?: string[] | null
          from_entity?: string | null
          gaps_identified?: string[] | null
          id?: string
          knowledge_assets?: Json | null
          knowledge_domains?: string[] | null
          quality_assessment?: number | null
          scheduled_date?: string | null
          to_entity: string
          transfer_method?: string[] | null
          transfer_status?: string | null
          transfer_type: string
          updated_at?: string
        }
        Update: {
          completed_date?: string | null
          completion_percentage?: number | null
          created_at?: string
          follow_up_actions?: string[] | null
          from_entity?: string | null
          gaps_identified?: string[] | null
          id?: string
          knowledge_assets?: Json | null
          knowledge_domains?: string[] | null
          quality_assessment?: number | null
          scheduled_date?: string | null
          to_entity?: string
          transfer_method?: string[] | null
          transfer_status?: string | null
          transfer_type?: string
          updated_at?: string
        }
        Relationships: []
      }
      leadership_team: {
        Row: {
          agent_count: number | null
          bio: string
          created_at: string
          department: string
          enneagram_type: string
          id: string
          image_url: string | null
          name: string
          personality_type: string
          title: string
          updated_at: string
        }
        Insert: {
          agent_count?: number | null
          bio: string
          created_at?: string
          department: string
          enneagram_type: string
          id?: string
          image_url?: string | null
          name: string
          personality_type: string
          title: string
          updated_at?: string
        }
        Update: {
          agent_count?: number | null
          bio?: string
          created_at?: string
          department?: string
          enneagram_type?: string
          id?: string
          image_url?: string | null
          name?: string
          personality_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      leads: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          message: string | null
          name: string
          source: string | null
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          message?: string | null
          name: string
          source?: string | null
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          message?: string | null
          name?: string
          source?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      learning_events: {
        Row: {
          agent_name: string
          created_at: string
          event_type: string
          id: string
          impact_score: number | null
          knowledge_category: string | null
          knowledge_gained: string
          source_session_id: string | null
        }
        Insert: {
          agent_name: string
          created_at?: string
          event_type: string
          id?: string
          impact_score?: number | null
          knowledge_category?: string | null
          knowledge_gained: string
          source_session_id?: string | null
        }
        Update: {
          agent_name?: string
          created_at?: string
          event_type?: string
          id?: string
          impact_score?: number | null
          knowledge_category?: string | null
          knowledge_gained?: string
          source_session_id?: string | null
        }
        Relationships: []
      }
      learning_modules: {
        Row: {
          completion_criteria: Json | null
          content: Json | null
          created_at: string
          description: string | null
          estimated_duration_minutes: number
          id: string
          learning_path_id: string | null
          module_type: string
          order_index: number
          resources: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          completion_criteria?: Json | null
          content?: Json | null
          created_at?: string
          description?: string | null
          estimated_duration_minutes?: number
          id?: string
          learning_path_id?: string | null
          module_type?: string
          order_index?: number
          resources?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          completion_criteria?: Json | null
          content?: Json | null
          created_at?: string
          description?: string | null
          estimated_duration_minutes?: number
          id?: string
          learning_path_id?: string | null
          module_type?: string
          order_index?: number
          resources?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "learning_modules_learning_path_id_fkey"
            columns: ["learning_path_id"]
            isOneToOne: false
            referencedRelation: "learning_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      learning_paths: {
        Row: {
          created_at: string
          description: string | null
          difficulty_level: string
          estimated_duration_hours: number
          id: string
          learning_objectives: Json | null
          prerequisite_maturity_level: number
          target_maturity_level: number
          target_role: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          difficulty_level?: string
          estimated_duration_hours?: number
          id?: string
          learning_objectives?: Json | null
          prerequisite_maturity_level?: number
          target_maturity_level: number
          target_role: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          difficulty_level?: string
          estimated_duration_hours?: number
          id?: string
          learning_objectives?: Json | null
          prerequisite_maturity_level?: number
          target_maturity_level?: number
          target_role?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      legal_documents: {
        Row: {
          content: string
          created_at: string
          document_type: string
          effective_date: string
          id: string
          is_active: boolean
          title: string
          updated_at: string
          version: string
        }
        Insert: {
          content: string
          created_at?: string
          document_type: string
          effective_date?: string
          id?: string
          is_active?: boolean
          title: string
          updated_at?: string
          version?: string
        }
        Update: {
          content?: string
          created_at?: string
          document_type?: string
          effective_date?: string
          id?: string
          is_active?: boolean
          title?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      lens_scores: {
        Row: {
          agency: string | null
          due_date: string | null
          id: string
          lens: string | null
          matches: Json | null
          score: number | null
          timestamp: string | null
          title: string | null
        }
        Insert: {
          agency?: string | null
          due_date?: string | null
          id?: string
          lens?: string | null
          matches?: Json | null
          score?: number | null
          timestamp?: string | null
          title?: string | null
        }
        Update: {
          agency?: string | null
          due_date?: string | null
          id?: string
          lens?: string | null
          matches?: Json | null
          score?: number | null
          timestamp?: string | null
          title?: string | null
        }
        Relationships: []
      }
      license_tiers: {
        Row: {
          annual_price: number
          created_at: string
          description: string | null
          features: Json
          id: string
          is_active: boolean
          max_assessments: number | null
          max_templates: number | null
          max_users: number | null
          monthly_price: number
          name: string
          updated_at: string
        }
        Insert: {
          annual_price: number
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          is_active?: boolean
          max_assessments?: number | null
          max_templates?: number | null
          max_users?: number | null
          monthly_price: number
          name: string
          updated_at?: string
        }
        Update: {
          annual_price?: number
          created_at?: string
          description?: string | null
          features?: Json
          id?: string
          is_active?: boolean
          max_assessments?: number | null
          max_templates?: number | null
          max_users?: number | null
          monthly_price?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      linkedin_posts: {
        Row: {
          category: string | null
          content: string
          created_at: string
          engagement_data: Json | null
          excerpt: string | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          linkedin_post_id: string
          post_date: string
          post_url: string
          tags: string[] | null
          updated_at: string
        }
        Insert: {
          category?: string | null
          content: string
          created_at?: string
          engagement_data?: Json | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          linkedin_post_id: string
          post_date: string
          post_url: string
          tags?: string[] | null
          updated_at?: string
        }
        Update: {
          category?: string | null
          content?: string
          created_at?: string
          engagement_data?: Json | null
          excerpt?: string | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          linkedin_post_id?: string
          post_date?: string
          post_url?: string
          tags?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      living_state_leads: {
        Row: {
          consent: boolean | null
          created_at: string
          email: string
          id: string
          message: string | null
          name: string | null
          organization: string | null
          sector: string | null
          source_page: string | null
          story_slug: string | null
          updated_at: string
          utm: Json | null
        }
        Insert: {
          consent?: boolean | null
          created_at?: string
          email: string
          id?: string
          message?: string | null
          name?: string | null
          organization?: string | null
          sector?: string | null
          source_page?: string | null
          story_slug?: string | null
          updated_at?: string
          utm?: Json | null
        }
        Update: {
          consent?: boolean | null
          created_at?: string
          email?: string
          id?: string
          message?: string | null
          name?: string | null
          organization?: string | null
          sector?: string | null
          source_page?: string | null
          story_slug?: string | null
          updated_at?: string
          utm?: Json | null
        }
        Relationships: []
      }
      lobe_one_pages: {
        Row: {
          Checklist: string | null
          "Key Lenses": string | null
          "Organ Lobe": string | null
        }
        Insert: {
          Checklist?: string | null
          "Key Lenses"?: string | null
          "Organ Lobe"?: string | null
        }
        Update: {
          Checklist?: string | null
          "Key Lenses"?: string | null
          "Organ Lobe"?: string | null
        }
        Relationships: []
      }
      lrs_api_keys: {
        Row: {
          business_id: string | null
          created_at: string
          id: string
          key_hash: string
          last_4: string | null
          note: string | null
          revoked_at: string | null
          user_id: string
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          id?: string
          key_hash: string
          last_4?: string | null
          note?: string | null
          revoked_at?: string | null
          user_id: string
        }
        Update: {
          business_id?: string | null
          created_at?: string
          id?: string
          key_hash?: string
          last_4?: string | null
          note?: string | null
          revoked_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      lrs_businesses: {
        Row: {
          abn: string | null
          business_name: string
          created_at: string
          id: string
          owner_user_id: string | null
          phone: string | null
          plan_slug: string | null
          role: string
          session_id: string | null
          state: string | null
          suburb: string | null
          updated_at: string
        }
        Insert: {
          abn?: string | null
          business_name: string
          created_at?: string
          id?: string
          owner_user_id?: string | null
          phone?: string | null
          plan_slug?: string | null
          role: string
          session_id?: string | null
          state?: string | null
          suburb?: string | null
          updated_at?: string
        }
        Update: {
          abn?: string | null
          business_name?: string
          created_at?: string
          id?: string
          owner_user_id?: string | null
          phone?: string | null
          plan_slug?: string | null
          role?: string
          session_id?: string | null
          state?: string | null
          suburb?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      lrs_manufacturers: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      lrs_pricing_plans: {
        Row: {
          created_at: string
          currency: string
          display_name: string
          features: Json
          is_active: boolean
          max_tyres_per_month: number | null
          monthly_registration_limit: number | null
          price_cents: number
          slug: string
          stripe_price_id: string | null
          stripe_product_id: string | null
          target_user_type: string | null
          tier: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          currency?: string
          display_name: string
          features?: Json
          is_active?: boolean
          max_tyres_per_month?: number | null
          monthly_registration_limit?: number | null
          price_cents: number
          slug: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          target_user_type?: string | null
          tier: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          currency?: string
          display_name?: string
          features?: Json
          is_active?: boolean
          max_tyres_per_month?: number | null
          monthly_registration_limit?: number | null
          price_cents?: number
          slug?: string
          stripe_price_id?: string | null
          stripe_product_id?: string | null
          target_user_type?: string | null
          tier?: string
          updated_at?: string
        }
        Relationships: []
      }
      lrs_retailers: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          state: string | null
          suburb: string | null
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          state?: string | null
          suburb?: string | null
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          state?: string | null
          suburb?: string | null
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      lrs_status_updates: {
        Row: {
          created_at: string
          id: string
          location_state: string | null
          new_status: string
          notes: string | null
          prev_status: string | null
          tyre_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          location_state?: string | null
          new_status: string
          notes?: string | null
          prev_status?: string | null
          tyre_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          location_state?: string | null
          new_status?: string
          notes?: string | null
          prev_status?: string | null
          tyre_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lrs_status_updates_tyre_id_fkey"
            columns: ["tyre_id"]
            isOneToOne: false
            referencedRelation: "lrs_tyres"
            referencedColumns: ["id"]
          },
        ]
      }
      lrs_subscriptions: {
        Row: {
          business_id: string | null
          created_at: string
          current_period_end: string | null
          id: string
          plan_slug: string
          session_id: string | null
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan_slug: string
          session_id?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          current_period_end?: string | null
          id?: string
          plan_slug?: string
          session_id?: string | null
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      lrs_suppliers: {
        Row: {
          created_at: string
          id: string
          logo_url: string | null
          name: string
          updated_at: string
          website: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          logo_url?: string | null
          name?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      lrs_tags: {
        Row: {
          created_at: string
          id: string
          name: string
          tag_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          name: string
          tag_type?: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string
          tag_type?: string
        }
        Relationships: []
      }
      lrs_tyre_tags: {
        Row: {
          tag_id: string
          tyre_id: string
        }
        Insert: {
          tag_id: string
          tyre_id: string
        }
        Update: {
          tag_id?: string
          tyre_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "lrs_tyre_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "lrs_tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "lrs_tyre_tags_tyre_id_fkey"
            columns: ["tyre_id"]
            isOneToOne: false
            referencedRelation: "lrs_tyres"
            referencedColumns: ["id"]
          },
        ]
      }
      lrs_tyres: {
        Row: {
          business_id: string | null
          created_at: string
          id: string
          location_state: string | null
          manufacturer_id: string | null
          notes: string | null
          retailer_id: string | null
          status: string
          supplier_id: string | null
          tyre_uid: string
          updated_at: string
          user_id: string | null
          vehicle_make: string | null
          vehicle_model: string | null
          vehicle_plate: string | null
        }
        Insert: {
          business_id?: string | null
          created_at?: string
          id?: string
          location_state?: string | null
          manufacturer_id?: string | null
          notes?: string | null
          retailer_id?: string | null
          status?: string
          supplier_id?: string | null
          tyre_uid: string
          updated_at?: string
          user_id?: string | null
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_plate?: string | null
        }
        Update: {
          business_id?: string | null
          created_at?: string
          id?: string
          location_state?: string | null
          manufacturer_id?: string | null
          notes?: string | null
          retailer_id?: string | null
          status?: string
          supplier_id?: string | null
          tyre_uid?: string
          updated_at?: string
          user_id?: string | null
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_plate?: string | null
        }
        Relationships: []
      }
      managerbundles: {
        Row: {
          aug_price: number | null
          auto_price: number | null
          bundle_id: string
          category: string | null
          human_price: number | null
          name: string | null
          type: string | null
        }
        Insert: {
          aug_price?: number | null
          auto_price?: number | null
          bundle_id: string
          category?: string | null
          human_price?: number | null
          name?: string | null
          type?: string | null
        }
        Update: {
          aug_price?: number | null
          auto_price?: number | null
          bundle_id?: string
          category?: string | null
          human_price?: number | null
          name?: string | null
          type?: string | null
        }
        Relationships: []
      }
      market_intelligence: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          data_points: Json | null
          description: string | null
          expires_at: string | null
          id: string
          impact_level: string | null
          intelligence_type: string
          is_active: boolean | null
          source_apis: string[]
          title: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          data_points?: Json | null
          description?: string | null
          expires_at?: string | null
          id?: string
          impact_level?: string | null
          intelligence_type: string
          is_active?: boolean | null
          source_apis: string[]
          title: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          data_points?: Json | null
          description?: string | null
          expires_at?: string | null
          id?: string
          impact_level?: string | null
          intelligence_type?: string
          is_active?: boolean | null
          source_apis?: string[]
          title?: string
        }
        Relationships: []
      }
      marketing_campaigns: {
        Row: {
          automation_config: Json | null
          campaign_type: string
          created_at: string
          id: string
          n8n_workflow_id: string | null
          name: string
          performance_metrics: Json | null
          status: string
          target_audience: Json | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          automation_config?: Json | null
          campaign_type: string
          created_at?: string
          id?: string
          n8n_workflow_id?: string | null
          name: string
          performance_metrics?: Json | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          automation_config?: Json | null
          campaign_type?: string
          created_at?: string
          id?: string
          n8n_workflow_id?: string | null
          name?: string
          performance_metrics?: Json | null
          status?: string
          target_audience?: Json | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      marketing_content: {
        Row: {
          agent_categories: Json | null
          auto_generated: boolean | null
          content: string | null
          content_type: string
          created_at: string
          id: string
          performance_metrics: Json | null
          published: boolean | null
          seo_keywords: Json | null
          target_functions: Json | null
          title: string
          updated_at: string
        }
        Insert: {
          agent_categories?: Json | null
          auto_generated?: boolean | null
          content?: string | null
          content_type: string
          created_at?: string
          id?: string
          performance_metrics?: Json | null
          published?: boolean | null
          seo_keywords?: Json | null
          target_functions?: Json | null
          title: string
          updated_at?: string
        }
        Update: {
          agent_categories?: Json | null
          auto_generated?: boolean | null
          content?: string | null
          content_type?: string
          created_at?: string
          id?: string
          performance_metrics?: Json | null
          published?: boolean | null
          seo_keywords?: Json | null
          target_functions?: Json | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      marketing_leads: {
        Row: {
          agent_function_preferences: Json | null
          budget_range: string | null
          campaign_id: string | null
          company: string | null
          created_at: string
          email: string
          id: string
          interested_agents: Json | null
          job_title: string | null
          last_activity: string | null
          lead_score: number | null
          lead_source: string | null
          name: string | null
          notes: string | null
          phone: string | null
          status: string
          timeline: string | null
          updated_at: string
        }
        Insert: {
          agent_function_preferences?: Json | null
          budget_range?: string | null
          campaign_id?: string | null
          company?: string | null
          created_at?: string
          email: string
          id?: string
          interested_agents?: Json | null
          job_title?: string | null
          last_activity?: string | null
          lead_score?: number | null
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Update: {
          agent_function_preferences?: Json | null
          budget_range?: string | null
          campaign_id?: string | null
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          interested_agents?: Json | null
          job_title?: string | null
          last_activity?: string | null
          lead_score?: number | null
          lead_source?: string | null
          name?: string | null
          notes?: string | null
          phone?: string | null
          status?: string
          timeline?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "marketing_leads_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "marketing_campaigns"
            referencedColumns: ["id"]
          },
        ]
      }
      marketplace_agent_directory: {
        Row: {
          Agent_Name: string | null
          Category: string | null
          Description: string | null
          Pricing: string | null
          Use_Cases: string | null
        }
        Insert: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Update: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      marketplace_transactions: {
        Row: {
          client_organization: string
          contract_reference: string | null
          created_at: string | null
          end_date: string | null
          hours_purchased: number | null
          id: string
          marketplace_listing_id: string | null
          pack_id: string | null
          payment_terms: string | null
          start_date: string
          status: string
          total_amount: number
          transaction_type: string
          updated_at: string | null
        }
        Insert: {
          client_organization: string
          contract_reference?: string | null
          created_at?: string | null
          end_date?: string | null
          hours_purchased?: number | null
          id?: string
          marketplace_listing_id?: string | null
          pack_id?: string | null
          payment_terms?: string | null
          start_date: string
          status?: string
          total_amount: number
          transaction_type: string
          updated_at?: string | null
        }
        Update: {
          client_organization?: string
          contract_reference?: string | null
          created_at?: string | null
          end_date?: string | null
          hours_purchased?: number | null
          id?: string
          marketplace_listing_id?: string | null
          pack_id?: string | null
          payment_terms?: string | null
          start_date?: string
          status?: string
          total_amount?: number
          transaction_type?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "marketplace_transactions_marketplace_listing_id_fkey"
            columns: ["marketplace_listing_id"]
            isOneToOne: false
            referencedRelation: "excess_capacity_marketplace"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "marketplace_transactions_pack_id_fkey"
            columns: ["pack_id"]
            isOneToOne: false
            referencedRelation: "agent_packs"
            referencedColumns: ["id"]
          },
        ]
      }
      matrix_config: {
        Row: {
          created_at: string
          id: string
          updated_at: string
          weights: Json
        }
        Insert: {
          created_at?: string
          id?: string
          updated_at?: string
          weights?: Json
        }
        Update: {
          created_at?: string
          id?: string
          updated_at?: string
          weights?: Json
        }
        Relationships: []
      }
      matrix_response_mappings: {
        Row: {
          created_at: string
          id: string
          matrix_category: string
          reasoning_template: string
          response_template: string
          score_range: string
          updated_at: string
          variable_name: string
        }
        Insert: {
          created_at?: string
          id?: string
          matrix_category: string
          reasoning_template: string
          response_template: string
          score_range: string
          updated_at?: string
          variable_name: string
        }
        Update: {
          created_at?: string
          id?: string
          matrix_category?: string
          reasoning_template?: string
          response_template?: string
          score_range?: string
          updated_at?: string
          variable_name?: string
        }
        Relationships: []
      }
      maturity_stages: {
        Row: {
          created_at: string
          description: string
          id: string
          is_active: boolean | null
          key_signals: string
          next_stage_requirements: string | null
          recommended_work_packages: string[] | null
          stage_name: string
          stage_order: number
          typical_duration_months: number | null
          updated_at: string
          uplift_multiplier: number
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_active?: boolean | null
          key_signals: string
          next_stage_requirements?: string | null
          recommended_work_packages?: string[] | null
          stage_name: string
          stage_order: number
          typical_duration_months?: number | null
          updated_at?: string
          uplift_multiplier?: number
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean | null
          key_signals?: string
          next_stage_requirements?: string | null
          recommended_work_packages?: string[] | null
          stage_name?: string
          stage_order?: number
          typical_duration_months?: number | null
          updated_at?: string
          uplift_multiplier?: number
        }
        Relationships: []
      }
      "Maturity_Stages-Table 1.csv": {
        Row: {
          hours_saved: number | null
          id: number | null
          revenue_impact: number | null
          role_id: number | null
          stage_transition: string | null
          uplift_percent: number | null
        }
        Insert: {
          hours_saved?: number | null
          id?: number | null
          revenue_impact?: number | null
          role_id?: number | null
          stage_transition?: string | null
          uplift_percent?: number | null
        }
        Update: {
          hours_saved?: number | null
          id?: number | null
          revenue_impact?: number | null
          role_id?: number | null
          stage_transition?: string | null
          uplift_percent?: number | null
        }
        Relationships: []
      }
      "merged geeks raci": {
        Row: {
          "Detailed Project Offering": string | null
          Geeks2U: string | null
          InnovateMe: string | null
          "IT & Integration Team": string | null
          "Marketing Team": string | null
          "Officeworks B2B Team": string | null
          Workstream: string | null
        }
        Insert: {
          "Detailed Project Offering"?: string | null
          Geeks2U?: string | null
          InnovateMe?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Officeworks B2B Team"?: string | null
          Workstream?: string | null
        }
        Update: {
          "Detailed Project Offering"?: string | null
          Geeks2U?: string | null
          InnovateMe?: string | null
          "IT & Integration Team"?: string | null
          "Marketing Team"?: string | null
          "Officeworks B2B Team"?: string | null
          Workstream?: string | null
        }
        Relationships: []
      }
      "merger ecosystem": {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          Category: string | null
          certification_count: string | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: string | null
          data_platforms: string | null
          Data_Quality_Rating: string | null
          data_sovereignty_guarantee: string | null
          Description: string | null
          devops_capabilities: string | null
          diversity_supplier: string | null
          employee_count: number | null
          Engagement_Model: string | null
          Entity_ID: string | null
          Entity_Name: string | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          id: string
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          Merged_Date: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: string | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_NRR: number | null
          partner_phone: string | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          preferred_partner: boolean | null
          Pricing: string | null
          primary_technologies: string | null
          Primary_Technologies_List: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: string | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          Source: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: number | null
          updated_at: string | null
          Use_Cases: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          id?: string
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          updated_at?: string | null
          Use_Cases?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          id?: string
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          updated_at?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      merger_ecosystem_backup: {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          Category: string | null
          certification_count: string | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: string | null
          data_platforms: string | null
          Data_Quality_Rating: string | null
          data_sovereignty_guarantee: string | null
          Description: string | null
          devops_capabilities: string | null
          diversity_supplier: string | null
          employee_count: number | null
          Engagement_Model: string | null
          Entity_ID: string | null
          Entity_Name: string | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          Merged_Date: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: string | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_NRR: number | null
          partner_phone: string | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          preferred_partner: boolean | null
          Pricing: string | null
          primary_technologies: string | null
          Primary_Technologies_List: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: string | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          Source: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: number | null
          Use_Cases: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          Use_Cases?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          Category?: string | null
          certification_count?: string | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: string | null
          data_platforms?: string | null
          Data_Quality_Rating?: string | null
          data_sovereignty_guarantee?: string | null
          Description?: string | null
          devops_capabilities?: string | null
          diversity_supplier?: string | null
          employee_count?: number | null
          Engagement_Model?: string | null
          Entity_ID?: string | null
          Entity_Name?: string | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          Merged_Date?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: string | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_NRR?: number | null
          partner_phone?: string | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          preferred_partner?: boolean | null
          Pricing?: string | null
          primary_technologies?: string | null
          Primary_Technologies_List?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: string | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          Source?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: number | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      microsoft_profiles: {
        Row: {
          created_at: string | null
          department: string | null
          display_name: string | null
          id: string
          job_title: string | null
          microsoft_id: string
          office_location: string | null
          tenant_id: string | null
          updated_at: string | null
          user_id: string
          user_principal_name: string | null
        }
        Insert: {
          created_at?: string | null
          department?: string | null
          display_name?: string | null
          id?: string
          job_title?: string | null
          microsoft_id: string
          office_location?: string | null
          tenant_id?: string | null
          updated_at?: string | null
          user_id: string
          user_principal_name?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string | null
          display_name?: string | null
          id?: string
          job_title?: string | null
          microsoft_id?: string
          office_location?: string | null
          tenant_id?: string | null
          updated_at?: string | null
          user_id?: string
          user_principal_name?: string | null
        }
        Relationships: []
      }
      milestones: {
        Row: {
          approval_notes: string | null
          approval_status: string | null
          completed_at: string | null
          created_at: string
          deliverable_url: string | null
          description: string | null
          due_date: string
          id: string
          progress_id: string
          title: string
          updated_at: string
        }
        Insert: {
          approval_notes?: string | null
          approval_status?: string | null
          completed_at?: string | null
          created_at?: string
          deliverable_url?: string | null
          description?: string | null
          due_date: string
          id?: string
          progress_id: string
          title: string
          updated_at?: string
        }
        Update: {
          approval_notes?: string | null
          approval_status?: string | null
          completed_at?: string | null
          created_at?: string
          deliverable_url?: string | null
          description?: string | null
          due_date?: string
          id?: string
          progress_id?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "milestones_progress_id_fkey"
            columns: ["progress_id"]
            isOneToOne: false
            referencedRelation: "project_progress"
            referencedColumns: ["id"]
          },
        ]
      }
      ministerial_perspectives: {
        Row: {
          created_at: string
          id: string
          minister_name: string
          position: string
          quote: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          minister_name: string
          position: string
          quote: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          minister_name?: string
          position?: string
          quote?: string
          updated_at?: string
        }
        Relationships: []
      }
      multilingual_content: {
        Row: {
          achieved_outputs: string[] | null
          ai_solution_detailed: string | null
          content: string | null
          content_id: string
          content_type: string
          created_at: string | null
          cultural_context: string | null
          id: string
          key_drivers: string[] | null
          language_code: string
          outcomes_detailed: string | null
          scenario_context: string | null
          strategic_question: string | null
          strategic_recommendations: string[] | null
          title: string | null
          updated_at: string | null
          value_delivered: string[] | null
        }
        Insert: {
          achieved_outputs?: string[] | null
          ai_solution_detailed?: string | null
          content?: string | null
          content_id: string
          content_type: string
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          key_drivers?: string[] | null
          language_code: string
          outcomes_detailed?: string | null
          scenario_context?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          title?: string | null
          updated_at?: string | null
          value_delivered?: string[] | null
        }
        Update: {
          achieved_outputs?: string[] | null
          ai_solution_detailed?: string | null
          content?: string | null
          content_id?: string
          content_type?: string
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          key_drivers?: string[] | null
          language_code?: string
          outcomes_detailed?: string | null
          scenario_context?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          title?: string | null
          updated_at?: string | null
          value_delivered?: string[] | null
        }
        Relationships: []
      }
      n8n_automation_logs: {
        Row: {
          created_at: string
          error_message: string | null
          execution_id: string | null
          execution_time_ms: number | null
          id: string
          result_data: Json | null
          status: string
          trigger_data: Json | null
          trigger_type: string
          workflow_id: string
        }
        Insert: {
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          execution_time_ms?: number | null
          id?: string
          result_data?: Json | null
          status: string
          trigger_data?: Json | null
          trigger_type: string
          workflow_id: string
        }
        Update: {
          created_at?: string
          error_message?: string | null
          execution_id?: string | null
          execution_time_ms?: number | null
          id?: string
          result_data?: Json | null
          status?: string
          trigger_data?: Json | null
          trigger_type?: string
          workflow_id?: string
        }
        Relationships: []
      }
      n8n_node_catalog: {
        Row: {
          category: string
          complexity_level: string | null
          created_at: string | null
          description: string | null
          documentation_url: string | null
          example_workflows: string[] | null
          id: string
          integration_platforms: string[] | null
          is_premium: boolean | null
          node_name: string
          popularity_score: number | null
          subcategory: string | null
          use_cases: string[] | null
        }
        Insert: {
          category: string
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          example_workflows?: string[] | null
          id?: string
          integration_platforms?: string[] | null
          is_premium?: boolean | null
          node_name: string
          popularity_score?: number | null
          subcategory?: string | null
          use_cases?: string[] | null
        }
        Update: {
          category?: string
          complexity_level?: string | null
          created_at?: string | null
          description?: string | null
          documentation_url?: string | null
          example_workflows?: string[] | null
          id?: string
          integration_platforms?: string[] | null
          is_premium?: boolean | null
          node_name?: string
          popularity_score?: number | null
          subcategory?: string | null
          use_cases?: string[] | null
        }
        Relationships: []
      }
      n8n_workflow_templates: {
        Row: {
          category: string
          created_at: string | null
          customer_success_story: string | null
          description: string | null
          difficulty_level: string
          estimated_setup_time: string | null
          id: string
          is_featured: boolean | null
          node_count: number
          platforms: string[] | null
          roi_estimate: string | null
          template_name: string
          updated_at: string | null
          use_cases: string[] | null
          workflow_json: Json | null
        }
        Insert: {
          category: string
          created_at?: string | null
          customer_success_story?: string | null
          description?: string | null
          difficulty_level: string
          estimated_setup_time?: string | null
          id?: string
          is_featured?: boolean | null
          node_count?: number
          platforms?: string[] | null
          roi_estimate?: string | null
          template_name: string
          updated_at?: string | null
          use_cases?: string[] | null
          workflow_json?: Json | null
        }
        Update: {
          category?: string
          created_at?: string | null
          customer_success_story?: string | null
          description?: string | null
          difficulty_level?: string
          estimated_setup_time?: string | null
          id?: string
          is_featured?: boolean | null
          node_count?: number
          platforms?: string[] | null
          roi_estimate?: string | null
          template_name?: string
          updated_at?: string | null
          use_cases?: string[] | null
          workflow_json?: Json | null
        }
        Relationships: []
      }
      negotiation_comments: {
        Row: {
          author_email: string
          comment_text: string
          comment_type: string
          created_at: string
          id: string
          proposal_id: string | null
          session_id: string
        }
        Insert: {
          author_email: string
          comment_text: string
          comment_type?: string
          created_at?: string
          id?: string
          proposal_id?: string | null
          session_id: string
        }
        Update: {
          author_email?: string
          comment_text?: string
          comment_type?: string
          created_at?: string
          id?: string
          proposal_id?: string | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "negotiation_comments_proposal_id_fkey"
            columns: ["proposal_id"]
            isOneToOne: false
            referencedRelation: "negotiation_proposals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "negotiation_comments_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "negotiation_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      negotiation_proposals: {
        Row: {
          compensation_results: Json
          created_at: string
          created_by: string
          custom_terms: Json | null
          id: string
          notes: string | null
          proposal_data: Json
          proposal_type: string
          session_id: string
          status: string
          updated_at: string
        }
        Insert: {
          compensation_results: Json
          created_at?: string
          created_by: string
          custom_terms?: Json | null
          id?: string
          notes?: string | null
          proposal_data: Json
          proposal_type: string
          session_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          compensation_results?: Json
          created_at?: string
          created_by?: string
          custom_terms?: Json | null
          id?: string
          notes?: string | null
          proposal_data?: Json
          proposal_type?: string
          session_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "negotiation_proposals_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "negotiation_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      negotiation_sessions: {
        Row: {
          contributor_email: string
          created_at: string
          current_proposal_id: string | null
          final_agreement_data: Json | null
          founder_email: string
          id: string
          session_name: string
          signature_contributor_date: string | null
          signature_founder_date: string | null
          signed_by_contributor: boolean | null
          signed_by_founder: boolean | null
          status: string
          updated_at: string
        }
        Insert: {
          contributor_email: string
          created_at?: string
          current_proposal_id?: string | null
          final_agreement_data?: Json | null
          founder_email: string
          id?: string
          session_name: string
          signature_contributor_date?: string | null
          signature_founder_date?: string | null
          signed_by_contributor?: boolean | null
          signed_by_founder?: boolean | null
          status?: string
          updated_at?: string
        }
        Update: {
          contributor_email?: string
          created_at?: string
          current_proposal_id?: string | null
          final_agreement_data?: Json | null
          founder_email?: string
          id?: string
          session_name?: string
          signature_contributor_date?: string | null
          signature_founder_date?: string | null
          signed_by_contributor?: boolean | null
          signed_by_founder?: boolean | null
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      "NEW-Vignettes": {
        Row: {
          achieved_outputs: string[] | null
          age: number | null
          agency: string | null
          agent_division: string | null
          agent_level: string | null
          agent_name: string | null
          agentic_ai_journey_stage: string | null
          agentic_ai_readiness_score: number | null
          ai_companion_name: string | null
          ai_companion_profile: string | null
          ai_companion_specialty: string | null
          ai_companion_type: string | null
          ai_solution_detailed: string | null
          ai_suggested_title: string | null
          aps_compliance: Json | null
          aps_level: string | null
          avatar_path: string | null
          avatar_url: string | null
          average_rating: number | null
          background: string | null
          companion_chat_enabled: boolean | null
          cost_savings_projected: number | null
          created_at: string | null
          cross_agency_collaboration: string | null
          cultural_background: string | null
          cultural_background_detailed: string | null
          demo_scenario_prompts: string | null
          department: string | null
          difficulty_level: string | null
          discussion_prompts: string[] | null
          education_background: string | null
          efficiency_improvement_pct: number | null
          enhanced_impact_metrics: Json | null
          estimated_reading_time: number | null
          featured: boolean | null
          government_context: Json | null
          holo_org_agent: string | null
          id: string
          impact_score: number | null
          interactive_features: Json | null
          key_achievements: string[] | null
          key_drivers: string[] | null
          kpi_improvements: Json | null
          leadership_behaviors: Json | null
          location: string | null
          multilingual_content: Json | null
          multilingual_ready: boolean | null
          name: string
          narrative_story: string | null
          outcomes_detailed: string | null
          previous_roles: string[] | null
          primary_agent_code: string | null
          professional_experience_years: number | null
          quote: string | null
          realistic_outcomes: string | null
          role: string | null
          scenario_context: string | null
          service_quality_improvement: string | null
          social_shares: number | null
          sofia_code: string | null
          strategic_question: string | null
          strategic_recommendations: string[] | null
          strategic_theme: string | null
          supported_languages: string[] | null
          tags: string[] | null
          total_votes: number | null
          transformation_journey: string | null
          updated_at: string | null
          value_delivered: string[] | null
          version: string | null
          vignette_content: string | null
          vignette_html: string | null
          vignette_json: Json | null
          vignette_status: string | null
          vote_breakdown: Json | null
        }
        Insert: {
          achieved_outputs?: string[] | null
          age?: number | null
          agency?: string | null
          agent_division?: string | null
          agent_level?: string | null
          agent_name?: string | null
          agentic_ai_journey_stage?: string | null
          agentic_ai_readiness_score?: number | null
          ai_companion_name?: string | null
          ai_companion_profile?: string | null
          ai_companion_specialty?: string | null
          ai_companion_type?: string | null
          ai_solution_detailed?: string | null
          ai_suggested_title?: string | null
          aps_compliance?: Json | null
          aps_level?: string | null
          avatar_path?: string | null
          avatar_url?: string | null
          average_rating?: number | null
          background?: string | null
          companion_chat_enabled?: boolean | null
          cost_savings_projected?: number | null
          created_at?: string | null
          cross_agency_collaboration?: string | null
          cultural_background?: string | null
          cultural_background_detailed?: string | null
          demo_scenario_prompts?: string | null
          department?: string | null
          difficulty_level?: string | null
          discussion_prompts?: string[] | null
          education_background?: string | null
          efficiency_improvement_pct?: number | null
          enhanced_impact_metrics?: Json | null
          estimated_reading_time?: number | null
          featured?: boolean | null
          government_context?: Json | null
          holo_org_agent?: string | null
          id?: string
          impact_score?: number | null
          interactive_features?: Json | null
          key_achievements?: string[] | null
          key_drivers?: string[] | null
          kpi_improvements?: Json | null
          leadership_behaviors?: Json | null
          location?: string | null
          multilingual_content?: Json | null
          multilingual_ready?: boolean | null
          name: string
          narrative_story?: string | null
          outcomes_detailed?: string | null
          previous_roles?: string[] | null
          primary_agent_code?: string | null
          professional_experience_years?: number | null
          quote?: string | null
          realistic_outcomes?: string | null
          role?: string | null
          scenario_context?: string | null
          service_quality_improvement?: string | null
          social_shares?: number | null
          sofia_code?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          strategic_theme?: string | null
          supported_languages?: string[] | null
          tags?: string[] | null
          total_votes?: number | null
          transformation_journey?: string | null
          updated_at?: string | null
          value_delivered?: string[] | null
          version?: string | null
          vignette_content?: string | null
          vignette_html?: string | null
          vignette_json?: Json | null
          vignette_status?: string | null
          vote_breakdown?: Json | null
        }
        Update: {
          achieved_outputs?: string[] | null
          age?: number | null
          agency?: string | null
          agent_division?: string | null
          agent_level?: string | null
          agent_name?: string | null
          agentic_ai_journey_stage?: string | null
          agentic_ai_readiness_score?: number | null
          ai_companion_name?: string | null
          ai_companion_profile?: string | null
          ai_companion_specialty?: string | null
          ai_companion_type?: string | null
          ai_solution_detailed?: string | null
          ai_suggested_title?: string | null
          aps_compliance?: Json | null
          aps_level?: string | null
          avatar_path?: string | null
          avatar_url?: string | null
          average_rating?: number | null
          background?: string | null
          companion_chat_enabled?: boolean | null
          cost_savings_projected?: number | null
          created_at?: string | null
          cross_agency_collaboration?: string | null
          cultural_background?: string | null
          cultural_background_detailed?: string | null
          demo_scenario_prompts?: string | null
          department?: string | null
          difficulty_level?: string | null
          discussion_prompts?: string[] | null
          education_background?: string | null
          efficiency_improvement_pct?: number | null
          enhanced_impact_metrics?: Json | null
          estimated_reading_time?: number | null
          featured?: boolean | null
          government_context?: Json | null
          holo_org_agent?: string | null
          id?: string
          impact_score?: number | null
          interactive_features?: Json | null
          key_achievements?: string[] | null
          key_drivers?: string[] | null
          kpi_improvements?: Json | null
          leadership_behaviors?: Json | null
          location?: string | null
          multilingual_content?: Json | null
          multilingual_ready?: boolean | null
          name?: string
          narrative_story?: string | null
          outcomes_detailed?: string | null
          previous_roles?: string[] | null
          primary_agent_code?: string | null
          professional_experience_years?: number | null
          quote?: string | null
          realistic_outcomes?: string | null
          role?: string | null
          scenario_context?: string | null
          service_quality_improvement?: string | null
          social_shares?: number | null
          sofia_code?: string | null
          strategic_question?: string | null
          strategic_recommendations?: string[] | null
          strategic_theme?: string | null
          supported_languages?: string[] | null
          tags?: string[] | null
          total_votes?: number | null
          transformation_journey?: string | null
          updated_at?: string | null
          value_delivered?: string[] | null
          version?: string | null
          vignette_content?: string | null
          vignette_html?: string | null
          vignette_json?: Json | null
          vignette_status?: string | null
          vote_breakdown?: Json | null
        }
        Relationships: []
      }
      newsletter_subscriptions: {
        Row: {
          email: string
          id: string
          is_active: boolean | null
          source_page: string | null
          subscribed_at: string | null
        }
        Insert: {
          email: string
          id?: string
          is_active?: boolean | null
          source_page?: string | null
          subscribed_at?: string | null
        }
        Update: {
          email?: string
          id?: string
          is_active?: boolean | null
          source_page?: string | null
          subscribed_at?: string | null
        }
        Relationships: []
      }
      objections: {
        Row: {
          after: string
          backup_plan: string | null
          before: string
          counter: string
          id: string
          objection: string
          reality: string
        }
        Insert: {
          after: string
          backup_plan?: string | null
          before: string
          counter: string
          id: string
          objection: string
          reality: string
        }
        Update: {
          after?: string
          backup_plan?: string | null
          before?: string
          counter?: string
          id?: string
          objection?: string
          reality?: string
        }
        Relationships: []
      }
      onboarding_metrics: {
        Row: {
          completed: boolean | null
          completed_at: string | null
          created_at: string | null
          id: string
          organization_profile_id: string | null
          started_at: string | null
          step_reached: number
          time_spent_seconds: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          organization_profile_id?: string | null
          started_at?: string | null
          step_reached: number
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          organization_profile_id?: string | null
          started_at?: string | null
          step_reached?: number
          time_spent_seconds?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_metrics_organization_profile_id_fkey"
            columns: ["organization_profile_id"]
            isOneToOne: false
            referencedRelation: "organization_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      "one_page_views_per_name.csv": {
        Row: {
          "Core idea": string | null
          Name: string | null
          "Organ lobe": string | null
          "Primary domain": string | null
          "Shift with agentic AI": string | null
          "Use in practice": string | null
        }
        Insert: {
          "Core idea"?: string | null
          Name?: string | null
          "Organ lobe"?: string | null
          "Primary domain"?: string | null
          "Shift with agentic AI"?: string | null
          "Use in practice"?: string | null
        }
        Update: {
          "Core idea"?: string | null
          Name?: string | null
          "Organ lobe"?: string | null
          "Primary domain"?: string | null
          "Shift with agentic AI"?: string | null
          "Use in practice"?: string | null
        }
        Relationships: []
      }
      operational_performance_metrics: {
        Row: {
          created_at: string | null
          id: string
          measurement_date: string | null
          metric_data: Json | null
          metric_type: string
          metric_value: number | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_data?: Json | null
          metric_type: string
          metric_value?: number | null
        }
        Update: {
          created_at?: string | null
          id?: string
          measurement_date?: string | null
          metric_data?: Json | null
          metric_type?: string
          metric_value?: number | null
        }
        Relationships: []
      }
      order_items: {
        Row: {
          created_at: string
          id: string
          price: number
          quantity: number | null
          session_id: string
          work_package_id: string
          work_package_title: string
        }
        Insert: {
          created_at?: string
          id?: string
          price: number
          quantity?: number | null
          session_id: string
          work_package_id: string
          work_package_title: string
        }
        Update: {
          created_at?: string
          id?: string
          price?: number
          quantity?: number | null
          session_id?: string
          work_package_id?: string
          work_package_title?: string
        }
        Relationships: []
      }
      orders: {
        Row: {
          amount: number | null
          created_at: string
          currency: string | null
          id: string
          status: string | null
          stripe_session_id: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          amount?: number | null
          created_at?: string
          currency?: string | null
          id?: string
          status?: string | null
          stripe_session_id?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      organization_baseline_assessments: {
        Row: {
          assessment_data: Json
          calculated_metrics: Json
          change_readiness_score: number | null
          compliance_requirements: Json | null
          created_at: string
          department_breakdown: Json | null
          id: string
          industry: string
          organization_id: string
          organization_name: string
          organization_size: string
          status: string | null
          total_organization_time_recovery: number | null
          transformation_potential: number | null
          updated_at: string
        }
        Insert: {
          assessment_data?: Json
          calculated_metrics?: Json
          change_readiness_score?: number | null
          compliance_requirements?: Json | null
          created_at?: string
          department_breakdown?: Json | null
          id?: string
          industry: string
          organization_id: string
          organization_name: string
          organization_size: string
          status?: string | null
          total_organization_time_recovery?: number | null
          transformation_potential?: number | null
          updated_at?: string
        }
        Update: {
          assessment_data?: Json
          calculated_metrics?: Json
          change_readiness_score?: number | null
          compliance_requirements?: Json | null
          created_at?: string
          department_breakdown?: Json | null
          id?: string
          industry?: string
          organization_id?: string
          organization_name?: string
          organization_size?: string
          status?: string | null
          total_organization_time_recovery?: number | null
          transformation_potential?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      organization_memberships: {
        Row: {
          id: string
          joined_at: string
          organization_id: string
          role: string
          user_id: string
        }
        Insert: {
          id?: string
          joined_at?: string
          organization_id: string
          role?: string
          user_id: string
        }
        Update: {
          id?: string
          joined_at?: string
          organization_id?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_memberships_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_profiles: {
        Row: {
          abn: string
          acn: string | null
          certifications: Json | null
          corporate_sla: Json
          corporate_structure: string | null
          coverage_capacity: Json
          created_at: string | null
          gst_registered: boolean | null
          head_office_address: string
          id: string
          legal_name: string
          onboarding_completed: boolean | null
          onboarding_progress: number | null
          reference_data: Json | null
          service_portfolio: Json | null
          trading_name: string | null
          type: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          abn: string
          acn?: string | null
          certifications?: Json | null
          corporate_sla?: Json
          corporate_structure?: string | null
          coverage_capacity?: Json
          created_at?: string | null
          gst_registered?: boolean | null
          head_office_address: string
          id?: string
          legal_name: string
          onboarding_completed?: boolean | null
          onboarding_progress?: number | null
          reference_data?: Json | null
          service_portfolio?: Json | null
          trading_name?: string | null
          type: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          abn?: string
          acn?: string | null
          certifications?: Json | null
          corporate_sla?: Json
          corporate_structure?: string | null
          coverage_capacity?: Json
          created_at?: string | null
          gst_registered?: boolean | null
          head_office_address?: string
          id?: string
          legal_name?: string
          onboarding_completed?: boolean | null
          onboarding_progress?: number | null
          reference_data?: Json | null
          service_portfolio?: Json | null
          trading_name?: string | null
          type?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      organization_usage: {
        Row: {
          assessments_count: number
          created_at: string
          id: string
          month: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          assessments_count?: number
          created_at?: string
          id?: string
          month: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          assessments_count?: number
          created_at?: string
          id?: string
          month?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_usage_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organization_users: {
        Row: {
          created_at: string
          id: string
          organization_id: string
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          organization_id: string
          role?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          organization_id?: string
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "organization_users_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      organizational_change_agents: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      organizational_changes: {
        Row: {
          actual_completion_date: string | null
          actual_impact: Json | null
          affected_entities: string[] | null
          change_description: string
          change_stage: string | null
          change_title: string
          change_type: string
          communication_plan: Json | null
          created_at: string
          id: string
          initiator: string
          knowledge_impact_assessment: Json | null
          lessons_learned: string | null
          required_training: string[] | null
          rollback_plan: string | null
          start_date: string | null
          success_criteria: string[] | null
          target_completion_date: string | null
          updated_at: string
        }
        Insert: {
          actual_completion_date?: string | null
          actual_impact?: Json | null
          affected_entities?: string[] | null
          change_description: string
          change_stage?: string | null
          change_title: string
          change_type: string
          communication_plan?: Json | null
          created_at?: string
          id?: string
          initiator: string
          knowledge_impact_assessment?: Json | null
          lessons_learned?: string | null
          required_training?: string[] | null
          rollback_plan?: string | null
          start_date?: string | null
          success_criteria?: string[] | null
          target_completion_date?: string | null
          updated_at?: string
        }
        Update: {
          actual_completion_date?: string | null
          actual_impact?: Json | null
          affected_entities?: string[] | null
          change_description?: string
          change_stage?: string | null
          change_title?: string
          change_type?: string
          communication_plan?: Json | null
          created_at?: string
          id?: string
          initiator?: string
          knowledge_impact_assessment?: Json | null
          lessons_learned?: string | null
          required_training?: string[] | null
          rollback_plan?: string | null
          start_date?: string | null
          success_criteria?: string[] | null
          target_completion_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      organizational_health_metrics: {
        Row: {
          created_at: string
          department_id: string | null
          id: string
          impact_level: string | null
          measured_at: string
          metadata: Json | null
          metric_category: string
          metric_name: string
          metric_value: number
          trend_direction: string | null
        }
        Insert: {
          created_at?: string
          department_id?: string | null
          id?: string
          impact_level?: string | null
          measured_at?: string
          metadata?: Json | null
          metric_category: string
          metric_name: string
          metric_value: number
          trend_direction?: string | null
        }
        Update: {
          created_at?: string
          department_id?: string | null
          id?: string
          impact_level?: string | null
          measured_at?: string
          metadata?: Json | null
          metric_category?: string
          metric_name?: string
          metric_value?: number
          trend_direction?: string | null
        }
        Relationships: []
      }
      organizational_metrics: {
        Row: {
          calculated_at: string
          created_at: string
          id: string
          metric_data: Json
          metric_type: string
          organization_id: string
          reporting_period_end: string
          reporting_period_start: string
          updated_at: string
        }
        Insert: {
          calculated_at?: string
          created_at?: string
          id?: string
          metric_data: Json
          metric_type: string
          organization_id: string
          reporting_period_end: string
          reporting_period_start: string
          updated_at?: string
        }
        Update: {
          calculated_at?: string
          created_at?: string
          id?: string
          metric_data?: Json
          metric_type?: string
          organization_id?: string
          reporting_period_end?: string
          reporting_period_start?: string
          updated_at?: string
        }
        Relationships: []
      }
      organizations: {
        Row: {
          created_at: string | null
          domain: string
          id: string
          name: string
          settings: Json
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          domain: string
          id?: string
          name: string
          settings?: Json
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          domain?: string
          id?: string
          name?: string
          settings?: Json
          updated_at?: string | null
        }
        Relationships: []
      }
      overagerules: {
        Row: {
          overage_rate: number | null
          overage_unit: string | null
          pricing_plan_id: string | null
          rule_id: string
          threshold: number | null
        }
        Insert: {
          overage_rate?: number | null
          overage_unit?: string | null
          pricing_plan_id?: string | null
          rule_id: string
          threshold?: number | null
        }
        Update: {
          overage_rate?: number | null
          overage_unit?: string | null
          pricing_plan_id?: string | null
          rule_id?: string
          threshold?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "overagerules_pricing_plan_id_fkey"
            columns: ["pricing_plan_id"]
            isOneToOne: false
            referencedRelation: "pricingplans"
            referencedColumns: ["plan_id"]
          },
        ]
      }
      overheadallocations: {
        Row: {
          allocation_id: string
          allocation_pct: number | null
          applies_to: string | null
          cost_center: string | null
          notes: string | null
        }
        Insert: {
          allocation_id: string
          allocation_pct?: number | null
          applies_to?: string | null
          cost_center?: string | null
          notes?: string | null
        }
        Update: {
          allocation_id?: string
          allocation_pct?: number | null
          applies_to?: string | null
          cost_center?: string | null
          notes?: string | null
        }
        Relationships: []
      }
      owner_profiles: {
        Row: {
          consent_marketing: boolean | null
          consent_terms: boolean | null
          created_at: string
          email: string | null
          full_name: string
          id: string
          license_plate: string | null
          phone: string | null
          updated_at: string
          user_id: string
          vehicle_make: string | null
          vehicle_model: string | null
          vehicle_year: number | null
        }
        Insert: {
          consent_marketing?: boolean | null
          consent_terms?: boolean | null
          created_at?: string
          email?: string | null
          full_name: string
          id?: string
          license_plate?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_year?: number | null
        }
        Update: {
          consent_marketing?: boolean | null
          consent_terms?: boolean | null
          created_at?: string
          email?: string | null
          full_name?: string
          id?: string
          license_plate?: string | null
          phone?: string | null
          updated_at?: string
          user_id?: string
          vehicle_make?: string | null
          vehicle_model?: string | null
          vehicle_year?: number | null
        }
        Relationships: []
      }
      pack_definitions: {
        Row: {
          category: string | null
          created_at: string | null
          description: string | null
          labor_model_split: Json | null
          name: string
          pack_id: string
          price: number | null
          updated_at: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          labor_model_split?: Json | null
          name: string
          pack_id?: string
          price?: number | null
          updated_at?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string | null
          description?: string | null
          labor_model_split?: Json | null
          name?: string
          pack_id?: string
          price?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      package_access_requests: {
        Row: {
          company_name: string
          contact_email: string
          contact_name: string
          created_at: string | null
          id: string
          organization_size: string | null
          phone: string | null
          status: string | null
          updated_at: string | null
          use_case_description: string | null
          work_package_id: string | null
        }
        Insert: {
          company_name: string
          contact_email: string
          contact_name: string
          created_at?: string | null
          id?: string
          organization_size?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
          use_case_description?: string | null
          work_package_id?: string | null
        }
        Update: {
          company_name?: string
          contact_email?: string
          contact_name?: string
          created_at?: string | null
          id?: string
          organization_size?: string | null
          phone?: string | null
          status?: string | null
          updated_at?: string | null
          use_case_description?: string | null
          work_package_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "package_access_requests_work_package_id_fkey"
            columns: ["work_package_id"]
            isOneToOne: false
            referencedRelation: "work_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      package_extras: {
        Row: {
          base_price: number | null
          created_at: string | null
          delivery_timeframe_days: number | null
          description: string | null
          extra_name: string
          id: string
          is_premium: boolean | null
          tier: string | null
          updated_at: string | null
          value_add: string | null
          work_package_id: string | null
        }
        Insert: {
          base_price?: number | null
          created_at?: string | null
          delivery_timeframe_days?: number | null
          description?: string | null
          extra_name: string
          id?: string
          is_premium?: boolean | null
          tier?: string | null
          updated_at?: string | null
          value_add?: string | null
          work_package_id?: string | null
        }
        Update: {
          base_price?: number | null
          created_at?: string | null
          delivery_timeframe_days?: number | null
          description?: string | null
          extra_name?: string
          id?: string
          is_premium?: boolean | null
          tier?: string | null
          updated_at?: string | null
          value_add?: string | null
          work_package_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "package_extras_work_package_id_fkey"
            columns: ["work_package_id"]
            isOneToOne: false
            referencedRelation: "work_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      "part A - updated packages": {
        Row: {
          "Customer-Facing Benefit": string | null
          "Est. Cost ($AUD)": number | null
          "Est. Price ($AUD)": number | null
          "Key Actions": string | null
          "Margin (%)": number | null
          "New Role / Agentic Function": string | null
          "Old Role / Function": string | null
          Sector: string | null
          "Stakeholder Impact": string | null
          "Value Created": string | null
          "Work Package Name": string | null
        }
        Insert: {
          "Customer-Facing Benefit"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          "Key Actions"?: string | null
          "Margin (%)"?: number | null
          "New Role / Agentic Function"?: string | null
          "Old Role / Function"?: string | null
          Sector?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Work Package Name"?: string | null
        }
        Update: {
          "Customer-Facing Benefit"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          "Key Actions"?: string | null
          "Margin (%)"?: number | null
          "New Role / Agentic Function"?: string | null
          "Old Role / Function"?: string | null
          Sector?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Work Package Name"?: string | null
        }
        Relationships: []
      }
      "partner qualtrics defence": {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          domain: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          domain?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      partner_agent_combinations: {
        Row: {
          agent_codes: string[]
          certification_required: boolean | null
          combination_name: string
          created_at: string | null
          id: string
          integration_complexity: string | null
          joint_pricing: number | null
          joint_sla_available: boolean | null
          partner_name: string
          preferred_deployment: string | null
          revenue_share_pct: number | null
          setup_assistance_included: boolean | null
          success_stories_count: number | null
          time_to_market_days: number | null
          updated_at: string | null
        }
        Insert: {
          agent_codes: string[]
          certification_required?: boolean | null
          combination_name: string
          created_at?: string | null
          id?: string
          integration_complexity?: string | null
          joint_pricing?: number | null
          joint_sla_available?: boolean | null
          partner_name: string
          preferred_deployment?: string | null
          revenue_share_pct?: number | null
          setup_assistance_included?: boolean | null
          success_stories_count?: number | null
          time_to_market_days?: number | null
          updated_at?: string | null
        }
        Update: {
          agent_codes?: string[]
          certification_required?: boolean | null
          combination_name?: string
          created_at?: string | null
          id?: string
          integration_complexity?: string | null
          joint_pricing?: number | null
          joint_sla_available?: boolean | null
          partner_name?: string
          preferred_deployment?: string | null
          revenue_share_pct?: number | null
          setup_assistance_included?: boolean | null
          success_stories_count?: number | null
          time_to_market_days?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      partner_bundles: {
        Row: {
          bundle_id: string
          created_at: string
          id: string
          partner_id: string
          relationship_type: string
          updated_at: string
        }
        Insert: {
          bundle_id: string
          created_at?: string
          id?: string
          partner_id: string
          relationship_type?: string
          updated_at?: string
        }
        Update: {
          bundle_id?: string
          created_at?: string
          id?: string
          partner_id?: string
          relationship_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_bundles_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "bundles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_bundles_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "partners"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_capability_overlays: {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      partnercommissions: {
        Row: {
          commission_id: string
          commission_pct: number | null
          entity_id: string | null
          entity_type: string | null
          partner_id: string | null
        }
        Insert: {
          commission_id: string
          commission_pct?: number | null
          entity_id?: string | null
          entity_type?: string | null
          partner_id?: string | null
        }
        Update: {
          commission_id?: string
          commission_pct?: number | null
          entity_id?: string | null
          entity_type?: string | null
          partner_id?: string | null
        }
        Relationships: []
      }
      partners: {
        Row: {
          category: string
          created_at: string
          description: string | null
          featured: boolean | null
          id: string
          industry_focus: string[] | null
          logo_url: string | null
          name: string
          regions: string[] | null
          slug: string
          status: string
          tier: string
          updated_at: string
          use_case: string | null
          website_url: string | null
        }
        Insert: {
          category: string
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          industry_focus?: string[] | null
          logo_url?: string | null
          name: string
          regions?: string[] | null
          slug: string
          status?: string
          tier?: string
          updated_at?: string
          use_case?: string | null
          website_url?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          featured?: boolean | null
          id?: string
          industry_focus?: string[] | null
          logo_url?: string | null
          name?: string
          regions?: string[] | null
          slug?: string
          status?: string
          tier?: string
          updated_at?: string
          use_case?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      payments: {
        Row: {
          agreement_id: string
          amount: number
          created_at: string
          due_date: string | null
          id: string
          invoice_number: string | null
          notes: string | null
          paid_at: string | null
          payment_method: string | null
          payment_type: string
          status: string
          updated_at: string
        }
        Insert: {
          agreement_id: string
          amount: number
          created_at?: string
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          notes?: string | null
          paid_at?: string | null
          payment_method?: string | null
          payment_type: string
          status?: string
          updated_at?: string
        }
        Update: {
          agreement_id?: string
          amount?: number
          created_at?: string
          due_date?: string | null
          id?: string
          invoice_number?: string | null
          notes?: string | null
          paid_at?: string | null
          payment_method?: string | null
          payment_type?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "purchase_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      peer_influence_network: {
        Row: {
          created_at: string | null
          id: string
          influence_strength: number | null
          influence_type: string | null
          influenced_id: string | null
          influencer_id: string | null
          outcome_impact: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          influence_strength?: number | null
          influence_type?: string | null
          influenced_id?: string | null
          influencer_id?: string | null
          outcome_impact?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          influence_strength?: number | null
          influence_type?: string | null
          influenced_id?: string | null
          influencer_id?: string | null
          outcome_impact?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "peer_influence_network_influenced_id_fkey"
            columns: ["influenced_id"]
            isOneToOne: false
            referencedRelation: "ai_recruiter_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "peer_influence_network_influencer_id_fkey"
            columns: ["influencer_id"]
            isOneToOne: false
            referencedRelation: "ai_recruiter_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      peer_learning_groups: {
        Row: {
          created_at: string | null
          current_members: number | null
          description: string | null
          facilitator_id: string | null
          group_type: string | null
          id: string
          max_members: number | null
          meeting_schedule: Json | null
          name: string
          status: string | null
          target_competency: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          current_members?: number | null
          description?: string | null
          facilitator_id?: string | null
          group_type?: string | null
          id?: string
          max_members?: number | null
          meeting_schedule?: Json | null
          name: string
          status?: string | null
          target_competency?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          current_members?: number | null
          description?: string | null
          facilitator_id?: string | null
          group_type?: string | null
          id?: string
          max_members?: number | null
          meeting_schedule?: Json | null
          name?: string
          status?: string | null
          target_competency?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      peer_learning_memberships: {
        Row: {
          contributions_count: number | null
          created_at: string | null
          group_id: string
          id: string
          joined_at: string | null
          participation_score: number | null
          role: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          contributions_count?: number | null
          created_at?: string | null
          group_id: string
          id?: string
          joined_at?: string | null
          participation_score?: number | null
          role?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          contributions_count?: number | null
          created_at?: string | null
          group_id?: string
          id?: string
          joined_at?: string | null
          participation_score?: number | null
          role?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "peer_learning_memberships_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "peer_learning_groups"
            referencedColumns: ["id"]
          },
        ]
      }
      performance_metrics: {
        Row: {
          id: string
          metadata: Json | null
          metric_name: string
          metric_value: number
          recorded_at: string | null
          updated_at: string | null
        }
        Insert: {
          id?: string
          metadata?: Json | null
          metric_name: string
          metric_value: number
          recorded_at?: string | null
          updated_at?: string | null
        }
        Update: {
          id?: string
          metadata?: Json | null
          metric_name?: string
          metric_value?: number
          recorded_at?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      personality_types: {
        Row: {
          agent_count: number | null
          capabilities: string[] | null
          created_at: string
          description: string
          id: string
          key_traits: string[] | null
          name: string
        }
        Insert: {
          agent_count?: number | null
          capabilities?: string[] | null
          created_at?: string
          description: string
          id?: string
          key_traits?: string[] | null
          name: string
        }
        Update: {
          agent_count?: number | null
          capabilities?: string[] | null
          created_at?: string
          description?: string
          id?: string
          key_traits?: string[] | null
          name?: string
        }
        Relationships: []
      }
      plan_tasks: {
        Row: {
          assigned_to: string | null
          completion_percentage: number | null
          created_at: string
          document_id: string
          due_date: string | null
          id: string
          notes: string | null
          priority: string | null
          status: string | null
          task_description: string | null
          task_title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string
          document_id: string
          due_date?: string | null
          id?: string
          notes?: string | null
          priority?: string | null
          status?: string | null
          task_description?: string | null
          task_title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          completion_percentage?: number | null
          created_at?: string
          document_id?: string
          due_date?: string | null
          id?: string
          notes?: string | null
          priority?: string | null
          status?: string | null
          task_description?: string | null
          task_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "plan_tasks_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "document_storage"
            referencedColumns: ["id"]
          },
        ]
      }
      platform_audit_results: {
        Row: {
          audit_date: string
          audit_status: string
          average_load_time: number
          base_url: string
          business_critical_issues: number
          created_at: string
          detailed_results: Json | null
          error_log: Json | null
          health_score: number
          id: string
          mobile_compatibility_score: number
          platform_name: string
          recommendations: Json | null
          routes_failing: number
          routes_over_5s: number
          routes_working: number
          total_routes: number
          updated_at: string
        }
        Insert: {
          audit_date?: string
          audit_status?: string
          average_load_time?: number
          base_url: string
          business_critical_issues?: number
          created_at?: string
          detailed_results?: Json | null
          error_log?: Json | null
          health_score?: number
          id?: string
          mobile_compatibility_score?: number
          platform_name?: string
          recommendations?: Json | null
          routes_failing?: number
          routes_over_5s?: number
          routes_working?: number
          total_routes?: number
          updated_at?: string
        }
        Update: {
          audit_date?: string
          audit_status?: string
          average_load_time?: number
          base_url?: string
          business_critical_issues?: number
          created_at?: string
          detailed_results?: Json | null
          error_log?: Json | null
          health_score?: number
          id?: string
          mobile_compatibility_score?: number
          platform_name?: string
          recommendations?: Json | null
          routes_failing?: number
          routes_over_5s?: number
          routes_working?: number
          total_routes?: number
          updated_at?: string
        }
        Relationships: []
      }
      PM_Full_18x6_AI_Maturity_Work_Packages: {
        Row: {
          "Capability Area": string | null
          "Estimated Cost": string | null
          "Government Benefit / ROI": string | null
          "Key Actions": string | null
          "Maturity Stage": string | null
        }
        Insert: {
          "Capability Area"?: string | null
          "Estimated Cost"?: string | null
          "Government Benefit / ROI"?: string | null
          "Key Actions"?: string | null
          "Maturity Stage"?: string | null
        }
        Update: {
          "Capability Area"?: string | null
          "Estimated Cost"?: string | null
          "Government Benefit / ROI"?: string | null
          "Key Actions"?: string | null
          "Maturity Stage"?: string | null
        }
        Relationships: []
      }
      "pm_pmAI_maturity_cards.csv": {
        Row: {
          "Card Name": string | null
          Category: string | null
          "Image Placeholder": string | null
          "Maturity Stage": string | null
          Notes: string | null
          Role: string | null
          Tag: string | null
        }
        Insert: {
          "Card Name"?: string | null
          Category?: string | null
          "Image Placeholder"?: string | null
          "Maturity Stage"?: string | null
          Notes?: string | null
          Role?: string | null
          Tag?: string | null
        }
        Update: {
          "Card Name"?: string | null
          Category?: string | null
          "Image Placeholder"?: string | null
          "Maturity Stage"?: string | null
          Notes?: string | null
          Role?: string | null
          Tag?: string | null
        }
        Relationships: []
      }
      portfolio_selections: {
        Row: {
          created_at: string
          framework_used: string
          id: string
          microsoft_license: string
          notes: string | null
          selected_ideas: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          framework_used?: string
          id?: string
          microsoft_license?: string
          notes?: string | null
          selected_ideas?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          framework_used?: string
          id?: string
          microsoft_license?: string
          notes?: string | null
          selected_ideas?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          categories: string[]
          companies: string[]
          content: string
          created_at: string
          date: string
          excerpt: string
          id: number
          image: string | null
          is_html: boolean
          metadata: Json
          scraped_from: string | null
          search_vector: unknown | null
          source: string
          tags: string[] | null
          tenant_id: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          categories?: string[]
          companies?: string[]
          content?: string
          created_at?: string
          date?: string
          excerpt?: string
          id?: never
          image?: string | null
          is_html?: boolean
          metadata?: Json
          scraped_from?: string | null
          search_vector?: unknown | null
          source?: string
          tags?: string[] | null
          tenant_id?: string | null
          title?: string
          updated_at?: string
          url: string
        }
        Update: {
          categories?: string[]
          companies?: string[]
          content?: string
          created_at?: string
          date?: string
          excerpt?: string
          id?: never
          image?: string | null
          is_html?: boolean
          metadata?: Json
          scraped_from?: string | null
          search_vector?: unknown | null
          source?: string
          tags?: string[] | null
          tenant_id?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      preconfigpacks: {
        Row: {
          agents_count: number | null
          category: string | null
          fte_replaced: number | null
          name: string | null
          preconfig_id: string
          price_per_month: number | null
          savings_pct: number | null
        }
        Insert: {
          agents_count?: number | null
          category?: string | null
          fte_replaced?: number | null
          name?: string | null
          preconfig_id: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Update: {
          agents_count?: number | null
          category?: string | null
          fte_replaced?: number | null
          name?: string | null
          preconfig_id?: string
          price_per_month?: number | null
          savings_pct?: number | null
        }
        Relationships: []
      }
      pricing_tiers: {
        Row: {
          base_monthly_cost: number
          complexity_tier: string
          cost_per_hour: number | null
          created_at: string | null
          delivery_model: string
          id: string
          max_monthly_hours: number | null
          setup_cost: number
          tier_name: string
        }
        Insert: {
          base_monthly_cost: number
          complexity_tier: string
          cost_per_hour?: number | null
          created_at?: string | null
          delivery_model: string
          id?: string
          max_monthly_hours?: number | null
          setup_cost: number
          tier_name: string
        }
        Update: {
          base_monthly_cost?: number
          complexity_tier?: string
          cost_per_hour?: number | null
          created_at?: string | null
          delivery_model?: string
          id?: string
          max_monthly_hours?: number | null
          setup_cost?: number
          tier_name?: string
        }
        Relationships: []
      }
      pricingplans: {
        Row: {
          included_agents: number | null
          name: string | null
          plan_id: string
          price: number | null
          support_level: string | null
          unit: string | null
          usage_limit: string | null
        }
        Insert: {
          included_agents?: number | null
          name?: string | null
          plan_id: string
          price?: number | null
          support_level?: string | null
          unit?: string | null
          usage_limit?: string | null
        }
        Update: {
          included_agents?: number | null
          name?: string | null
          plan_id?: string
          price?: number | null
          support_level?: string | null
          unit?: string | null
          usage_limit?: string | null
        }
        Relationships: []
      }
      pricingrules: {
        Row: {
          discount_pct: number | null
          end_date: string | null
          entity_id: string | null
          entity_type: string | null
          min_qty: number | null
          rule_id: string
          start_date: string | null
        }
        Insert: {
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          rule_id: string
          start_date?: string | null
        }
        Update: {
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          rule_id?: string
          start_date?: string | null
        }
        Relationships: []
      }
      processing_jobs: {
        Row: {
          assessment_id: string | null
          completed_at: string | null
          created_at: string | null
          document_id: string
          error_message: string | null
          id: string
          job_type: string
          priority: number | null
          processing_options: Json | null
          started_at: string | null
          status: string | null
        }
        Insert: {
          assessment_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          document_id: string
          error_message?: string | null
          id?: string
          job_type: string
          priority?: number | null
          processing_options?: Json | null
          started_at?: string | null
          status?: string | null
        }
        Update: {
          assessment_id?: string | null
          completed_at?: string | null
          created_at?: string | null
          document_id?: string
          error_message?: string | null
          id?: string
          job_type?: string
          priority?: number | null
          processing_options?: Json | null
          started_at?: string | null
          status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "processing_jobs_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "automation_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      procurement_evaluation_metrics: {
        Row: {
          "Current Value": string | null
          Data_Source: string | null
          Default_Weight: number | null
          Dimension: string | null
          Labor_Model: string | null
          Metric: string | null
          Reason: string | null
          Weight_Gov_Federal: number | null
          Weight_Gov_State: number | null
          Weight_Nonprofit: number | null
          Weight_Private_Enterprise: number | null
          Weight_SMB: number | null
          WhyItMatters: string | null
        }
        Insert: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Update: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Relationships: []
      }
      procurement_opportunities: {
        Row: {
          agency: string | null
          category: string | null
          closing_date: string | null
          contact_details: Json | null
          created_at: string | null
          description: string | null
          estimated_value: number | null
          evaluation_criteria: Json | null
          external_url: string | null
          id: string
          location: string | null
          opportunity_id: string | null
          procurement_method: string | null
          published_date: string | null
          requirements: Json | null
          source_api: string | null
          title: string | null
          updated_at: string | null
        }
        Insert: {
          agency?: string | null
          category?: string | null
          closing_date?: string | null
          contact_details?: Json | null
          created_at?: string | null
          description?: string | null
          estimated_value?: number | null
          evaluation_criteria?: Json | null
          external_url?: string | null
          id?: string
          location?: string | null
          opportunity_id?: string | null
          procurement_method?: string | null
          published_date?: string | null
          requirements?: Json | null
          source_api?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Update: {
          agency?: string | null
          category?: string | null
          closing_date?: string | null
          contact_details?: Json | null
          created_at?: string | null
          description?: string | null
          estimated_value?: number | null
          evaluation_criteria?: Json | null
          external_url?: string | null
          id?: string
          location?: string | null
          opportunity_id?: string | null
          procurement_method?: string | null
          published_date?: string | null
          requirements?: Json | null
          source_api?: string | null
          title?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      product_access_requests: {
        Row: {
          company: string | null
          created_at: string | null
          email: string
          id: string
          interest_level: string | null
          message: string | null
          name: string
          product_page: string
          updated_at: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string | null
          email: string
          id?: string
          interest_level?: string | null
          message?: string | null
          name: string
          product_page: string
          updated_at?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string | null
          email?: string
          id?: string
          interest_level?: string | null
          message?: string | null
          name?: string
          product_page?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      productcosts: {
        Row: {
          gross_profit: number | null
          markup_pct: number | null
          overhead_cost: number | null
          product_id: string
          retail_cost: number | null
          total_cost: number | null
          wholesale_cost: number | null
        }
        Insert: {
          gross_profit?: number | null
          markup_pct?: number | null
          overhead_cost?: number | null
          product_id: string
          retail_cost?: number | null
          total_cost?: number | null
          wholesale_cost?: number | null
        }
        Update: {
          gross_profit?: number | null
          markup_pct?: number | null
          overhead_cost?: number | null
          product_id?: string
          retail_cost?: number | null
          total_cost?: number | null
          wholesale_cost?: number | null
        }
        Relationships: []
      }
      products: {
        Row: {
          billing_period: string
          category: string
          contract_length: number | null
          created_at: string | null
          currency: string
          description: string | null
          display_order: number | null
          features: Json | null
          id: string
          is_featured: boolean | null
          min_price: number | null
          name: string
          price: number
          price_description: string | null
          price_suffix_custom: string | null
          pricing_model: string
          stripe_price_id: string | null
          updated_at: string | null
        }
        Insert: {
          billing_period: string
          category: string
          contract_length?: number | null
          created_at?: string | null
          currency?: string
          description?: string | null
          display_order?: number | null
          features?: Json | null
          id?: string
          is_featured?: boolean | null
          min_price?: number | null
          name: string
          price: number
          price_description?: string | null
          price_suffix_custom?: string | null
          pricing_model?: string
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Update: {
          billing_period?: string
          category?: string
          contract_length?: number | null
          created_at?: string | null
          currency?: string
          description?: string | null
          display_order?: number | null
          features?: Json | null
          id?: string
          is_featured?: boolean | null
          min_price?: number | null
          name?: string
          price?: number
          price_description?: string | null
          price_suffix_custom?: string | null
          pricing_model?: string
          stripe_price_id?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company: string | null
          created_at: string
          email: string | null
          full_name: string | null
          id: string
          job_title: string | null
          onboarding_completed: boolean | null
          preferences: Json | null
          role: string | null
          subscription_status: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id: string
          job_title?: string | null
          onboarding_completed?: boolean | null
          preferences?: Json | null
          role?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          avatar_url?: string | null
          company?: string | null
          created_at?: string
          email?: string | null
          full_name?: string | null
          id?: string
          job_title?: string | null
          onboarding_completed?: boolean | null
          preferences?: Json | null
          role?: string | null
          subscription_status?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      project_catalog: {
        Row: {
          category: string | null
          description: string | null
          id: string
          linked_brands: string | null
          status: string | null
          title: string | null
        }
        Insert: {
          category?: string | null
          description?: string | null
          id?: string
          linked_brands?: string | null
          status?: string | null
          title?: string | null
        }
        Update: {
          category?: string | null
          description?: string | null
          id?: string
          linked_brands?: string | null
          status?: string | null
          title?: string | null
        }
        Relationships: []
      }
      project_executive_questions: {
        Row: {
          answer_text: string | null
          answered_by: string | null
          asked_by: string | null
          created_at: string | null
          id: string
          priority: number | null
          project_id: string | null
          question_text: string
          status: string | null
          updated_at: string | null
        }
        Insert: {
          answer_text?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          priority?: number | null
          project_id?: string | null
          question_text: string
          status?: string | null
          updated_at?: string | null
        }
        Update: {
          answer_text?: string | null
          answered_by?: string | null
          asked_by?: string | null
          created_at?: string | null
          id?: string
          priority?: number | null
          project_id?: string | null
          question_text?: string
          status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_executive_questions_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_investments: {
        Row: {
          created_at: string
          expected_return: number
          id: string
          implementation_cost: number
          investment_percentage: number
          priority_tier: string | null
          project_name: string
          scenario_id: string | null
          updated_at: string
          workstream: string | null
        }
        Insert: {
          created_at?: string
          expected_return?: number
          id?: string
          implementation_cost?: number
          investment_percentage?: number
          priority_tier?: string | null
          project_name: string
          scenario_id?: string | null
          updated_at?: string
          workstream?: string | null
        }
        Update: {
          created_at?: string
          expected_return?: number
          id?: string
          implementation_cost?: number
          investment_percentage?: number
          priority_tier?: string | null
          project_name?: string
          scenario_id?: string | null
          updated_at?: string
          workstream?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_investments_scenario_id_fkey"
            columns: ["scenario_id"]
            isOneToOne: false
            referencedRelation: "investment_scenarios"
            referencedColumns: ["id"]
          },
        ]
      }
      project_management_matches: {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      project_progress: {
        Row: {
          agreement_id: string
          assigned_team_members: string[] | null
          created_at: string
          id: string
          issues: Json | null
          notes: string | null
          progress_percentage: number | null
          risks: Json | null
          status: string
          updated_at: string
          work_package_id: string
        }
        Insert: {
          agreement_id: string
          assigned_team_members?: string[] | null
          created_at?: string
          id?: string
          issues?: Json | null
          notes?: string | null
          progress_percentage?: number | null
          risks?: Json | null
          status?: string
          updated_at?: string
          work_package_id: string
        }
        Update: {
          agreement_id?: string
          assigned_team_members?: string[] | null
          created_at?: string
          id?: string
          issues?: Json | null
          notes?: string | null
          progress_percentage?: number | null
          risks?: Json | null
          status?: string
          updated_at?: string
          work_package_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_progress_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "purchase_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      project_stakeholder_comments: {
        Row: {
          comment_text: string
          comment_type: string | null
          created_at: string | null
          id: string
          is_question: boolean | null
          parent_comment_id: string | null
          project_id: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          comment_text: string
          comment_type?: string | null
          created_at?: string | null
          id?: string
          is_question?: boolean | null
          parent_comment_id?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          comment_text?: string
          comment_type?: string | null
          created_at?: string | null
          id?: string
          is_question?: boolean | null
          parent_comment_id?: string | null
          project_id?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_stakeholder_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "project_stakeholder_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_stakeholder_comments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_strategic_info: {
        Row: {
          created_at: string | null
          estimated_roi: string | null
          project_id: string
          strategic_objectives: string[] | null
          strategic_tags: string[] | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          estimated_roi?: string | null
          project_id: string
          strategic_objectives?: string[] | null
          strategic_tags?: string[] | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          estimated_roi?: string | null
          project_id?: string
          strategic_objectives?: string[] | null
          strategic_tags?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_strategic_info_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: true
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_tasks: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          project_id: string | null
          quantity: number
          rate: number
          subtotal: number
          unit: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          project_id?: string | null
          quantity?: number
          rate?: number
          subtotal?: number
          unit?: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string | null
          quantity?: number
          rate?: number
          subtotal?: number
          unit?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_tasks_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          approval_comments: string | null
          approval_date: string | null
          approval_status: string | null
          approved: boolean | null
          approved_by: string | null
          category: string | null
          channels: string | null
          client: string
          competitive_urgency: number | null
          complexity: string | null
          content_source: string | null
          content_type: string | null
          content_url: string | null
          cost_estimate: number | null
          cost_structure: string | null
          created_at: string
          csat: number | null
          customer_impact_score: number | null
          customer_segments: string | null
          deliverables: string[] | null
          estimated_effort: number | null
          executive_brief: string | null
          financial_analysis: Json | null
          id: string
          implementation_confidence: number | null
          implementation_timeline: Json | null
          is_content_derived: boolean | null
          key_metrics: string | null
          market_size: number | null
          name: string
          nps: number | null
          owner: string
          payment_milestones: string | null
          pillar: string | null
          pillar_effort: number | null
          pillar_readiness: number | null
          pillar_scope: number | null
          pillar_value: number | null
          priority: string | null
          problem: string | null
          problem_statement: string | null
          project_brief: string | null
          quote_id: string | null
          rate_multiplier: number | null
          reference_links: string[] | null
          response_time: string | null
          revenue_streams: string | null
          service_offering: string | null
          shared_content: Json | null
          solution: string | null
          solution_summary: string | null
          sow_id: string | null
          status: string
          strategic_alignment: number | null
          tech_count: number | null
          tenant_id: string | null
          total_estimate: number | null
          trigger_process: string | null
          unfair_advantage: string | null
          unique_value: string | null
          updated_at: string
          user_journey_flow: Json | null
          user_stories: Json | null
          value_statement: string | null
        }
        Insert: {
          approval_comments?: string | null
          approval_date?: string | null
          approval_status?: string | null
          approved?: boolean | null
          approved_by?: string | null
          category?: string | null
          channels?: string | null
          client: string
          competitive_urgency?: number | null
          complexity?: string | null
          content_source?: string | null
          content_type?: string | null
          content_url?: string | null
          cost_estimate?: number | null
          cost_structure?: string | null
          created_at?: string
          csat?: number | null
          customer_impact_score?: number | null
          customer_segments?: string | null
          deliverables?: string[] | null
          estimated_effort?: number | null
          executive_brief?: string | null
          financial_analysis?: Json | null
          id?: string
          implementation_confidence?: number | null
          implementation_timeline?: Json | null
          is_content_derived?: boolean | null
          key_metrics?: string | null
          market_size?: number | null
          name: string
          nps?: number | null
          owner: string
          payment_milestones?: string | null
          pillar?: string | null
          pillar_effort?: number | null
          pillar_readiness?: number | null
          pillar_scope?: number | null
          pillar_value?: number | null
          priority?: string | null
          problem?: string | null
          problem_statement?: string | null
          project_brief?: string | null
          quote_id?: string | null
          rate_multiplier?: number | null
          reference_links?: string[] | null
          response_time?: string | null
          revenue_streams?: string | null
          service_offering?: string | null
          shared_content?: Json | null
          solution?: string | null
          solution_summary?: string | null
          sow_id?: string | null
          status?: string
          strategic_alignment?: number | null
          tech_count?: number | null
          tenant_id?: string | null
          total_estimate?: number | null
          trigger_process?: string | null
          unfair_advantage?: string | null
          unique_value?: string | null
          updated_at?: string
          user_journey_flow?: Json | null
          user_stories?: Json | null
          value_statement?: string | null
        }
        Update: {
          approval_comments?: string | null
          approval_date?: string | null
          approval_status?: string | null
          approved?: boolean | null
          approved_by?: string | null
          category?: string | null
          channels?: string | null
          client?: string
          competitive_urgency?: number | null
          complexity?: string | null
          content_source?: string | null
          content_type?: string | null
          content_url?: string | null
          cost_estimate?: number | null
          cost_structure?: string | null
          created_at?: string
          csat?: number | null
          customer_impact_score?: number | null
          customer_segments?: string | null
          deliverables?: string[] | null
          estimated_effort?: number | null
          executive_brief?: string | null
          financial_analysis?: Json | null
          id?: string
          implementation_confidence?: number | null
          implementation_timeline?: Json | null
          is_content_derived?: boolean | null
          key_metrics?: string | null
          market_size?: number | null
          name?: string
          nps?: number | null
          owner?: string
          payment_milestones?: string | null
          pillar?: string | null
          pillar_effort?: number | null
          pillar_readiness?: number | null
          pillar_scope?: number | null
          pillar_value?: number | null
          priority?: string | null
          problem?: string | null
          problem_statement?: string | null
          project_brief?: string | null
          quote_id?: string | null
          rate_multiplier?: number | null
          reference_links?: string[] | null
          response_time?: string | null
          revenue_streams?: string | null
          service_offering?: string | null
          shared_content?: Json | null
          solution?: string | null
          solution_summary?: string | null
          sow_id?: string | null
          status?: string
          strategic_alignment?: number | null
          tech_count?: number | null
          tenant_id?: string | null
          total_estimate?: number | null
          trigger_process?: string | null
          unfair_advantage?: string | null
          unique_value?: string | null
          updated_at?: string
          user_journey_flow?: Json | null
          user_stories?: Json | null
          value_statement?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "projects_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      promocodes: {
        Row: {
          applies_to: string | null
          code: string | null
          discount_pct: number | null
          fixed_amount: number | null
          promo_id: string
          valid_from: string | null
          valid_to: string | null
        }
        Insert: {
          applies_to?: string | null
          code?: string | null
          discount_pct?: number | null
          fixed_amount?: number | null
          promo_id: string
          valid_from?: string | null
          valid_to?: string | null
        }
        Update: {
          applies_to?: string | null
          code?: string | null
          discount_pct?: number | null
          fixed_amount?: number | null
          promo_id?: string
          valid_from?: string | null
          valid_to?: string | null
        }
        Relationships: []
      }
      proposal_asset_generator: {
        Row: {
          agent_code: string | null
          cost: number | null
          cv_overlay_required: boolean | null
          delivery_model: string | null
          function: string | null
          role: string | null
          sfia_level: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      purchase_agreements: {
        Row: {
          agreement_terms: string | null
          created_at: string
          digital_signature_data: Json | null
          expected_completion_date: string | null
          id: string
          payment_terms: string | null
          signed_at: string | null
          sow_document_url: string | null
          start_date: string | null
          status: string
          total_amount: number
          updated_at: string
          user_id: string
          work_package_ids: string[]
          workstream_id: string
        }
        Insert: {
          agreement_terms?: string | null
          created_at?: string
          digital_signature_data?: Json | null
          expected_completion_date?: string | null
          id?: string
          payment_terms?: string | null
          signed_at?: string | null
          sow_document_url?: string | null
          start_date?: string | null
          status?: string
          total_amount: number
          updated_at?: string
          user_id: string
          work_package_ids: string[]
          workstream_id: string
        }
        Update: {
          agreement_terms?: string | null
          created_at?: string
          digital_signature_data?: Json | null
          expected_completion_date?: string | null
          id?: string
          payment_terms?: string | null
          signed_at?: string | null
          sow_document_url?: string | null
          start_date?: string | null
          status?: string
          total_amount?: number
          updated_at?: string
          user_id?: string
          work_package_ids?: string[]
          workstream_id?: string
        }
        Relationships: []
      }
      quote_items: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          name: string
          project_id: string | null
          quantity: number
          rate: number
          total: number | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          name: string
          project_id?: string | null
          quantity?: number
          rate: number
          total?: number | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          name?: string
          project_id?: string | null
          quantity?: number
          rate?: number
          total?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "quote_items_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      regionalpricingoverrides: {
        Row: {
          entity_id: string | null
          entity_type: string | null
          override_id: string
          override_price: number | null
          region: string | null
        }
        Insert: {
          entity_id?: string | null
          entity_type?: string | null
          override_id: string
          override_price?: number | null
          region?: string | null
        }
        Update: {
          entity_id?: string | null
          entity_type?: string | null
          override_id?: string
          override_price?: number | null
          region?: string | null
        }
        Relationships: []
      }
      report_deliveries: {
        Row: {
          created_at: string
          delivery_attempts: number
          delivery_status: string
          email_id: string | null
          error_message: string | null
          id: string
          last_attempt_at: string | null
          report_date: string
          report_type: string
          subscriber_id: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          delivery_attempts?: number
          delivery_status?: string
          email_id?: string | null
          error_message?: string | null
          id?: string
          last_attempt_at?: string | null
          report_date: string
          report_type: string
          subscriber_id?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          delivery_attempts?: number
          delivery_status?: string
          email_id?: string | null
          error_message?: string | null
          id?: string
          last_attempt_at?: string | null
          report_date?: string
          report_type?: string
          subscriber_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "report_deliveries_subscriber_id_fkey"
            columns: ["subscriber_id"]
            isOneToOne: false
            referencedRelation: "email_subscribers"
            referencedColumns: ["id"]
          },
        ]
      }
      requirements: {
        Row: {
          created_at: string | null
          deliverable_formats: string[] | null
          description: string | null
          kpi_targets: Json | null
          labor_model: string | null
          must_haves: Json | null
          nice_to_haves: Json | null
          question_deadline: string | null
          rft_id: string
          risk_tolerances: Json | null
          submission_deadline: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          deliverable_formats?: string[] | null
          description?: string | null
          kpi_targets?: Json | null
          labor_model?: string | null
          must_haves?: Json | null
          nice_to_haves?: Json | null
          question_deadline?: string | null
          rft_id?: string
          risk_tolerances?: Json | null
          submission_deadline?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          deliverable_formats?: string[] | null
          description?: string | null
          kpi_targets?: Json | null
          labor_model?: string | null
          must_haves?: Json | null
          nice_to_haves?: Json | null
          question_deadline?: string | null
          rft_id?: string
          risk_tolerances?: Json | null
          submission_deadline?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reselleragreements: {
        Row: {
          agreement_id: string
          end_date: string | null
          partner_id: string | null
          start_date: string | null
          terms: string | null
        }
        Insert: {
          agreement_id: string
          end_date?: string | null
          partner_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Update: {
          agreement_id?: string
          end_date?: string | null
          partner_id?: string | null
          start_date?: string | null
          terms?: string | null
        }
        Relationships: []
      }
      resource_downloads: {
        Row: {
          company: string | null
          created_at: string
          download_completed: boolean | null
          download_expires_at: string | null
          download_url: string | null
          email: string
          follow_up_completed: boolean | null
          id: string
          ip_address: string | null
          name: string
          notes: string | null
          phone: string | null
          referrer: string | null
          resource_category: string | null
          resource_title: string
          resource_type: string
          updated_at: string
          user_agent: string | null
        }
        Insert: {
          company?: string | null
          created_at?: string
          download_completed?: boolean | null
          download_expires_at?: string | null
          download_url?: string | null
          email: string
          follow_up_completed?: boolean | null
          id?: string
          ip_address?: string | null
          name: string
          notes?: string | null
          phone?: string | null
          referrer?: string | null
          resource_category?: string | null
          resource_title: string
          resource_type: string
          updated_at?: string
          user_agent?: string | null
        }
        Update: {
          company?: string | null
          created_at?: string
          download_completed?: boolean | null
          download_expires_at?: string | null
          download_url?: string | null
          email?: string
          follow_up_completed?: boolean | null
          id?: string
          ip_address?: string | null
          name?: string
          notes?: string | null
          phone?: string | null
          referrer?: string | null
          resource_category?: string | null
          resource_title?: string
          resource_type?: string
          updated_at?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          content: string
          created_at: string
          description: string
          id: string
          resource_type: string
          title: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          description: string
          id?: string
          resource_type: string
          title: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          description?: string
          id?: string
          resource_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      response_templates: {
        Row: {
          content_template: string
          created_at: string
          delivery_model: string
          id: string
          is_mandatory: boolean
          required_variables: Json | null
          rft_section_mapping: string[] | null
          section_name: string
          section_order: number
          template_code: string
          updated_at: string
        }
        Insert: {
          content_template: string
          created_at?: string
          delivery_model?: string
          id?: string
          is_mandatory?: boolean
          required_variables?: Json | null
          rft_section_mapping?: string[] | null
          section_name: string
          section_order?: number
          template_code: string
          updated_at?: string
        }
        Update: {
          content_template?: string
          created_at?: string
          delivery_model?: string
          id?: string
          is_mandatory?: boolean
          required_variables?: Json | null
          rft_section_mapping?: string[] | null
          section_name?: string
          section_order?: number
          template_code?: string
          updated_at?: string
        }
        Relationships: []
      }
      revenue_forecasts: {
        Row: {
          assumptions: Json | null
          confidence_level: string | null
          cost_to_deliver: number | null
          created_at: string
          forecast_period: string
          forecast_year: number
          forecasted_units: number | null
          gross_profit: number | null
          id: string
          opportunities: Json | null
          risks: Json | null
          total_revenue: number | null
          unit_price: number | null
          updated_at: string
          work_package_id: string | null
        }
        Insert: {
          assumptions?: Json | null
          confidence_level?: string | null
          cost_to_deliver?: number | null
          created_at?: string
          forecast_period: string
          forecast_year: number
          forecasted_units?: number | null
          gross_profit?: number | null
          id?: string
          opportunities?: Json | null
          risks?: Json | null
          total_revenue?: number | null
          unit_price?: number | null
          updated_at?: string
          work_package_id?: string | null
        }
        Update: {
          assumptions?: Json | null
          confidence_level?: string | null
          cost_to_deliver?: number | null
          created_at?: string
          forecast_period?: string
          forecast_year?: number
          forecasted_units?: number | null
          gross_profit?: number | null
          id?: string
          opportunities?: Json | null
          risks?: Json | null
          total_revenue?: number | null
          unit_price?: number | null
          updated_at?: string
          work_package_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "revenue_forecasts_work_package_id_fkey"
            columns: ["work_package_id"]
            isOneToOne: false
            referencedRelation: "work_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      revenueforecasts: {
        Row: {
          forecast_id: number
          period: string | null
          product_id: string | null
          projected_qty: number | null
          projected_revenue: number | null
        }
        Insert: {
          forecast_id?: number
          period?: string | null
          product_id?: string | null
          projected_qty?: number | null
          projected_revenue?: number | null
        }
        Update: {
          forecast_id?: number
          period?: string | null
          product_id?: string | null
          projected_qty?: number | null
          projected_revenue?: number | null
        }
        Relationships: []
      }
      rft_agent_history: {
        Row: {
          actual_performance_rating: number | null
          agent_code: string
          budget_adherence_score: number | null
          client_satisfaction_score: number | null
          created_at: string
          delivery_timeliness_score: number | null
          id: string
          improvement_areas: string[] | null
          lessons_learned: string | null
          match_score: number
          rft_id: string
          updated_at: string
          was_selected: boolean
          win_outcome: boolean | null
        }
        Insert: {
          actual_performance_rating?: number | null
          agent_code: string
          budget_adherence_score?: number | null
          client_satisfaction_score?: number | null
          created_at?: string
          delivery_timeliness_score?: number | null
          id?: string
          improvement_areas?: string[] | null
          lessons_learned?: string | null
          match_score?: number
          rft_id: string
          updated_at?: string
          was_selected?: boolean
          win_outcome?: boolean | null
        }
        Update: {
          actual_performance_rating?: number | null
          agent_code?: string
          budget_adherence_score?: number | null
          client_satisfaction_score?: number | null
          created_at?: string
          delivery_timeliness_score?: number | null
          id?: string
          improvement_areas?: string[] | null
          lessons_learned?: string | null
          match_score?: number
          rft_id?: string
          updated_at?: string
          was_selected?: boolean
          win_outcome?: boolean | null
        }
        Relationships: []
      }
      rft_analyses: {
        Row: {
          created_at: string
          id: string
          overall_score: number | null
          rft_id: string
          status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          overall_score?: number | null
          rft_id: string
          status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          overall_score?: number | null
          rft_id?: string
          status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rft_analysis_results: {
        Row: {
          agency: string | null
          auto_responses: Json
          category_scores: Json
          content_generated: string | null
          created_at: string
          decision_reasoning: string | null
          delivery_models_analysis: Json | null
          due_date: string | null
          go_no_go_decision: string
          id: string
          overall_score: number
          rft_title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          agency?: string | null
          auto_responses?: Json
          category_scores?: Json
          content_generated?: string | null
          created_at?: string
          decision_reasoning?: string | null
          delivery_models_analysis?: Json | null
          due_date?: string | null
          go_no_go_decision: string
          id?: string
          overall_score: number
          rft_title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          agency?: string | null
          auto_responses?: Json
          category_scores?: Json
          content_generated?: string | null
          created_at?: string
          decision_reasoning?: string | null
          delivery_models_analysis?: Json | null
          due_date?: string | null
          go_no_go_decision?: string
          id?: string
          overall_score?: number
          rft_title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      rft_audit_logs: {
        Row: {
          created_at: string | null
          event_data: Json | null
          event_type: string
          id: string
          ip_address: unknown | null
          rft_id: string | null
          session_id: string | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          event_data?: Json | null
          event_type: string
          id?: string
          ip_address?: unknown | null
          rft_id?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          event_data?: Json | null
          event_type?: string
          id?: string
          ip_address?: unknown | null
          rft_id?: string | null
          session_id?: string | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_audit_logs_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_criteria: {
        Row: {
          category: string
          created_at: string | null
          description: string | null
          id: string
          is_active: boolean | null
          keywords: string[] | null
          name: string
          pass_threshold: number | null
          required_for_go: boolean | null
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          name: string
          pass_threshold?: number | null
          required_for_go?: boolean | null
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          description?: string | null
          id?: string
          is_active?: boolean | null
          keywords?: string[] | null
          name?: string
          pass_threshold?: number | null
          required_for_go?: boolean | null
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      rft_decision_analytics: {
        Row: {
          accuracy_score: number | null
          bid_amount: number | null
          bid_submission_date: string | null
          bid_submitted: boolean | null
          created_at: string
          decision_change_reason: string | null
          feedback_received: string | null
          final_decision: string | null
          id: string
          initial_decision: string | null
          lessons_learned: string | null
          outcome: string | null
          rft_id: string
          winning_amount: number | null
          winning_vendor: string | null
          would_bid_again: boolean | null
        }
        Insert: {
          accuracy_score?: number | null
          bid_amount?: number | null
          bid_submission_date?: string | null
          bid_submitted?: boolean | null
          created_at?: string
          decision_change_reason?: string | null
          feedback_received?: string | null
          final_decision?: string | null
          id?: string
          initial_decision?: string | null
          lessons_learned?: string | null
          outcome?: string | null
          rft_id: string
          winning_amount?: number | null
          winning_vendor?: string | null
          would_bid_again?: boolean | null
        }
        Update: {
          accuracy_score?: number | null
          bid_amount?: number | null
          bid_submission_date?: string | null
          bid_submitted?: boolean | null
          created_at?: string
          decision_change_reason?: string | null
          feedback_received?: string | null
          final_decision?: string | null
          id?: string
          initial_decision?: string | null
          lessons_learned?: string | null
          outcome?: string | null
          rft_id?: string
          winning_amount?: number | null
          winning_vendor?: string | null
          would_bid_again?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_decision_analytics_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_documents: {
        Row: {
          content_text: string | null
          created_at: string | null
          decision_confidence: number | null
          decision_timestamp: string | null
          extracted_metadata: Json | null
          file_name: string
          file_path: string | null
          file_size: number | null
          file_type: string | null
          go_no_go_decision: string | null
          id: string
          processing_status: string | null
          updated_at: string | null
        }
        Insert: {
          content_text?: string | null
          created_at?: string | null
          decision_confidence?: number | null
          decision_timestamp?: string | null
          extracted_metadata?: Json | null
          file_name: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          go_no_go_decision?: string | null
          id?: string
          processing_status?: string | null
          updated_at?: string | null
        }
        Update: {
          content_text?: string | null
          created_at?: string | null
          decision_confidence?: number | null
          decision_timestamp?: string | null
          extracted_metadata?: Json | null
          file_name?: string
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          go_no_go_decision?: string | null
          id?: string
          processing_status?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      rft_draft_responses: {
        Row: {
          boilerplate_references: Json | null
          content_template: string | null
          created_at: string | null
          final_content: string | null
          id: string
          is_complete: boolean | null
          requires_review: boolean | null
          rft_document_id: string
          section_name: string
          section_order: number | null
          section_type: string
          updated_at: string | null
          variables_used: Json | null
        }
        Insert: {
          boilerplate_references?: Json | null
          content_template?: string | null
          created_at?: string | null
          final_content?: string | null
          id?: string
          is_complete?: boolean | null
          requires_review?: boolean | null
          rft_document_id: string
          section_name: string
          section_order?: number | null
          section_type: string
          updated_at?: string | null
          variables_used?: Json | null
        }
        Update: {
          boilerplate_references?: Json | null
          content_template?: string | null
          created_at?: string | null
          final_content?: string | null
          id?: string
          is_complete?: boolean | null
          requires_review?: boolean | null
          rft_document_id?: string
          section_name?: string
          section_order?: number | null
          section_type?: string
          updated_at?: string | null
          variables_used?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_draft_responses_rft_document_id_fkey"
            columns: ["rft_document_id"]
            isOneToOne: false
            referencedRelation: "rft_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_evaluation_criteria: {
        Row: {
          category: string
          created_at: string | null
          criterion_code: string
          criterion_name: string
          description: string | null
          evaluation_type: string
          id: string
          is_active: boolean | null
          is_mandatory: boolean | null
          pass_condition: Json
          updated_at: string | null
          weight: number | null
        }
        Insert: {
          category: string
          created_at?: string | null
          criterion_code: string
          criterion_name: string
          description?: string | null
          evaluation_type: string
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          pass_condition: Json
          updated_at?: string | null
          weight?: number | null
        }
        Update: {
          category?: string
          created_at?: string | null
          criterion_code?: string
          criterion_name?: string
          description?: string | null
          evaluation_type?: string
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          pass_condition?: Json
          updated_at?: string | null
          weight?: number | null
        }
        Relationships: []
      }
      rft_evaluation_results: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          criterion_id: string
          evaluation_result: string
          extracted_snippet: string | null
          extracted_value: string | null
          id: string
          reasoning: string | null
          rft_document_id: string
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          criterion_id: string
          evaluation_result: string
          extracted_snippet?: string | null
          extracted_value?: string | null
          id?: string
          reasoning?: string | null
          rft_document_id: string
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          criterion_id?: string
          evaluation_result?: string
          extracted_snippet?: string | null
          extracted_value?: string | null
          id?: string
          reasoning?: string | null
          rft_document_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rft_evaluation_results_criterion_id_fkey"
            columns: ["criterion_id"]
            isOneToOne: false
            referencedRelation: "rft_evaluation_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_evaluation_results_rft_document_id_fkey"
            columns: ["rft_document_id"]
            isOneToOne: false
            referencedRelation: "rft_documents"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_extracted_evidence: {
        Row: {
          confidence_score: number | null
          created_at: string | null
          criteria_id: string | null
          decision: string
          extracted_text: string
          id: string
          page_number: number | null
          rft_id: string | null
          source_section: string | null
        }
        Insert: {
          confidence_score?: number | null
          created_at?: string | null
          criteria_id?: string | null
          decision: string
          extracted_text: string
          id?: string
          page_number?: number | null
          rft_id?: string | null
          source_section?: string | null
        }
        Update: {
          confidence_score?: number | null
          created_at?: string | null
          criteria_id?: string | null
          decision?: string
          extracted_text?: string
          id?: string
          page_number?: number | null
          rft_id?: string | null
          source_section?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_extracted_evidence_criteria_id_fkey"
            columns: ["criteria_id"]
            isOneToOne: false
            referencedRelation: "rft_criteria"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_extracted_evidence_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_metric_definitions: {
        Row: {
          category: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          type: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Update: {
          category?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          type?: Database["public"]["Enums"]["metric_type"]
          updated_at?: string
        }
        Relationships: []
      }
      rft_metric_values: {
        Row: {
          analysis_id: string | null
          created_at: string
          id: string
          metric_id: string | null
          reason: string | null
          updated_at: string
          value_boolean: boolean | null
          value_date: string | null
          value_numeric: number | null
          value_text: string | null
        }
        Insert: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Update: {
          analysis_id?: string | null
          created_at?: string
          id?: string
          metric_id?: string | null
          reason?: string | null
          updated_at?: string
          value_boolean?: boolean | null
          value_date?: string | null
          value_numeric?: number | null
          value_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_metric_values_analysis_id_fkey"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "rft_analyses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "rft_metric_values_metric_id_fkey"
            columns: ["metric_id"]
            isOneToOne: false
            referencedRelation: "rft_metric_definitions"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_pipeline_decisions: {
        Row: {
          automated: boolean | null
          created_at: string | null
          decision_maker_id: string | null
          decision_reasoning: string | null
          decision_score: number | null
          decision_timestamp: string | null
          decision_triggers: Json | null
          decision_type: string
          id: string
          override_applied: boolean | null
          override_reason: string | null
          rft_id: string | null
          scoring_breakdown: Json | null
          updated_at: string | null
        }
        Insert: {
          automated?: boolean | null
          created_at?: string | null
          decision_maker_id?: string | null
          decision_reasoning?: string | null
          decision_score?: number | null
          decision_timestamp?: string | null
          decision_triggers?: Json | null
          decision_type: string
          id?: string
          override_applied?: boolean | null
          override_reason?: string | null
          rft_id?: string | null
          scoring_breakdown?: Json | null
          updated_at?: string | null
        }
        Update: {
          automated?: boolean | null
          created_at?: string | null
          decision_maker_id?: string | null
          decision_reasoning?: string | null
          decision_score?: number | null
          decision_timestamp?: string | null
          decision_triggers?: Json | null
          decision_type?: string
          id?: string
          override_applied?: boolean | null
          override_reason?: string | null
          rft_id?: string | null
          scoring_breakdown?: Json | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_pipeline_decisions_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_requirements: {
        Row: {
          compliance_level: string | null
          created_at: string
          id: string
          is_mandatory: boolean | null
          notes: string | null
          our_capability_rating: number | null
          requirement_description: string | null
          requirement_title: string
          requirement_type: string
          rft_id: string
        }
        Insert: {
          compliance_level?: string | null
          created_at?: string
          id?: string
          is_mandatory?: boolean | null
          notes?: string | null
          our_capability_rating?: number | null
          requirement_description?: string | null
          requirement_title: string
          requirement_type: string
          rft_id: string
        }
        Update: {
          compliance_level?: string | null
          created_at?: string
          id?: string
          is_mandatory?: boolean | null
          notes?: string | null
          our_capability_rating?: number | null
          requirement_description?: string | null
          requirement_title?: string
          requirement_type?: string
          rft_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "rft_requirements_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rft_scores: {
        Row: {
          agency: string | null
          calculated_score: number | null
          created_at: string | null
          due_date: string | null
          final_decision: string | null
          id: string
          override: string | null
          reason: string | null
          scores: Json | null
          tender_title: string | null
        }
        Insert: {
          agency?: string | null
          calculated_score?: number | null
          created_at?: string | null
          due_date?: string | null
          final_decision?: string | null
          id?: string
          override?: string | null
          reason?: string | null
          scores?: Json | null
          tender_title?: string | null
        }
        Update: {
          agency?: string | null
          calculated_score?: number | null
          created_at?: string | null
          due_date?: string | null
          final_decision?: string | null
          id?: string
          override?: string | null
          reason?: string | null
          scores?: Json | null
          tender_title?: string | null
        }
        Relationships: []
      }
      rft_scoring_details: {
        Row: {
          auto_calculated: boolean | null
          capability_match_scores: Json | null
          category_weights: Json | null
          competitive_position_scores: Json | null
          created_at: string
          created_by: string | null
          financial_scores: Json | null
          id: string
          manual_override: boolean | null
          override_by: string | null
          override_date: string | null
          override_reason: string | null
          rft_id: string
          risk_compliance_scores: Json | null
          scoring_version: string | null
          strategic_fit_scores: Json | null
          total_score: number | null
          updated_at: string
          updated_by: string | null
          weighted_score: number | null
        }
        Insert: {
          auto_calculated?: boolean | null
          capability_match_scores?: Json | null
          category_weights?: Json | null
          competitive_position_scores?: Json | null
          created_at?: string
          created_by?: string | null
          financial_scores?: Json | null
          id?: string
          manual_override?: boolean | null
          override_by?: string | null
          override_date?: string | null
          override_reason?: string | null
          rft_id: string
          risk_compliance_scores?: Json | null
          scoring_version?: string | null
          strategic_fit_scores?: Json | null
          total_score?: number | null
          updated_at?: string
          updated_by?: string | null
          weighted_score?: number | null
        }
        Update: {
          auto_calculated?: boolean | null
          capability_match_scores?: Json | null
          category_weights?: Json | null
          competitive_position_scores?: Json | null
          created_at?: string
          created_by?: string | null
          financial_scores?: Json | null
          id?: string
          manual_override?: boolean | null
          override_by?: string | null
          override_date?: string | null
          override_reason?: string | null
          rft_id?: string
          risk_compliance_scores?: Json | null
          scoring_version?: string | null
          strategic_fit_scores?: Json | null
          total_score?: number | null
          updated_at?: string
          updated_by?: string | null
          weighted_score?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "rft_scoring_details_rft_id_fkey"
            columns: ["rft_id"]
            isOneToOne: false
            referencedRelation: "rfts"
            referencedColumns: ["id"]
          },
        ]
      }
      rfts: {
        Row: {
          agency: string
          architecture_requirements: string[] | null
          assigned_team_lead: string | null
          assigned_team_members: string[] | null
          augmented_cost_estimate: number | null
          auto_parsed: boolean | null
          automated_cost_estimate: number | null
          certifications: string[] | null
          competitor_analysis: string | null
          compliance_requirements: string[] | null
          contract_duration: string | null
          contract_end_date: string | null
          contract_model: string | null
          contract_start_date: string | null
          created_at: string
          created_by: string | null
          data_sovereignty_requirements: string | null
          decision_by: string | null
          decision_date: string | null
          decision_reason: string | null
          department: string | null
          document_urls: string[] | null
          due_date: string
          esg_clauses: string[] | null
          estimated_effort_hours: number | null
          estimated_value: number | null
          estimated_value_currency: string | null
          evaluation_criteria: string | null
          external_id: string | null
          framework_panel: string | null
          go_no_go_decision: string | null
          hosting_requirement: string | null
          human_cost_estimate: number | null
          id: string
          known_incumbent: string | null
          last_sync_date: string | null
          legal_red_flags: string | null
          mandatory_criteria: string | null
          market_size_estimate: number | null
          opportunity_score: number | null
          panel_required: boolean | null
          parsed_content: string | null
          parsing_confidence: number | null
          parsing_notes: string | null
          payment_terms: string | null
          procurement_method: string | null
          procurement_platform: string | null
          published_date: string | null
          question_deadline: string | null
          recommended_labor_model: string | null
          reference_links: string[] | null
          required_roles: string[] | null
          response_format: string | null
          security_clearance: string | null
          source: string
          status: string
          strategic_fit_score: number | null
          submission_requirements: string | null
          tech_stack: string[] | null
          tender_title: string
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          agency: string
          architecture_requirements?: string[] | null
          assigned_team_lead?: string | null
          assigned_team_members?: string[] | null
          augmented_cost_estimate?: number | null
          auto_parsed?: boolean | null
          automated_cost_estimate?: number | null
          certifications?: string[] | null
          competitor_analysis?: string | null
          compliance_requirements?: string[] | null
          contract_duration?: string | null
          contract_end_date?: string | null
          contract_model?: string | null
          contract_start_date?: string | null
          created_at?: string
          created_by?: string | null
          data_sovereignty_requirements?: string | null
          decision_by?: string | null
          decision_date?: string | null
          decision_reason?: string | null
          department?: string | null
          document_urls?: string[] | null
          due_date: string
          esg_clauses?: string[] | null
          estimated_effort_hours?: number | null
          estimated_value?: number | null
          estimated_value_currency?: string | null
          evaluation_criteria?: string | null
          external_id?: string | null
          framework_panel?: string | null
          go_no_go_decision?: string | null
          hosting_requirement?: string | null
          human_cost_estimate?: number | null
          id?: string
          known_incumbent?: string | null
          last_sync_date?: string | null
          legal_red_flags?: string | null
          mandatory_criteria?: string | null
          market_size_estimate?: number | null
          opportunity_score?: number | null
          panel_required?: boolean | null
          parsed_content?: string | null
          parsing_confidence?: number | null
          parsing_notes?: string | null
          payment_terms?: string | null
          procurement_method?: string | null
          procurement_platform?: string | null
          published_date?: string | null
          question_deadline?: string | null
          recommended_labor_model?: string | null
          reference_links?: string[] | null
          required_roles?: string[] | null
          response_format?: string | null
          security_clearance?: string | null
          source?: string
          status?: string
          strategic_fit_score?: number | null
          submission_requirements?: string | null
          tech_stack?: string[] | null
          tender_title: string
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          agency?: string
          architecture_requirements?: string[] | null
          assigned_team_lead?: string | null
          assigned_team_members?: string[] | null
          augmented_cost_estimate?: number | null
          auto_parsed?: boolean | null
          automated_cost_estimate?: number | null
          certifications?: string[] | null
          competitor_analysis?: string | null
          compliance_requirements?: string[] | null
          contract_duration?: string | null
          contract_end_date?: string | null
          contract_model?: string | null
          contract_start_date?: string | null
          created_at?: string
          created_by?: string | null
          data_sovereignty_requirements?: string | null
          decision_by?: string | null
          decision_date?: string | null
          decision_reason?: string | null
          department?: string | null
          document_urls?: string[] | null
          due_date?: string
          esg_clauses?: string[] | null
          estimated_effort_hours?: number | null
          estimated_value?: number | null
          estimated_value_currency?: string | null
          evaluation_criteria?: string | null
          external_id?: string | null
          framework_panel?: string | null
          go_no_go_decision?: string | null
          hosting_requirement?: string | null
          human_cost_estimate?: number | null
          id?: string
          known_incumbent?: string | null
          last_sync_date?: string | null
          legal_red_flags?: string | null
          mandatory_criteria?: string | null
          market_size_estimate?: number | null
          opportunity_score?: number | null
          panel_required?: boolean | null
          parsed_content?: string | null
          parsing_confidence?: number | null
          parsing_notes?: string | null
          payment_terms?: string | null
          procurement_method?: string | null
          procurement_platform?: string | null
          published_date?: string | null
          question_deadline?: string | null
          recommended_labor_model?: string | null
          reference_links?: string[] | null
          required_roles?: string[] | null
          response_format?: string | null
          security_clearance?: string | null
          source?: string
          status?: string
          strategic_fit_score?: number | null
          submission_requirements?: string | null
          tech_stack?: string[] | null
          tender_title?: string
          updated_at?: string
          updated_by?: string | null
        }
        Relationships: []
      }
      roi_activity_types: {
        Row: {
          created_at: string | null
          description: string | null
          icon: string | null
          id: string
          is_global: boolean | null
          name: string
          organization_id: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_global?: boolean | null
          name: string
          organization_id?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          icon?: string | null
          id?: string
          is_global?: boolean | null
          name?: string
          organization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_activity_types_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_assessment_activities: {
        Row: {
          activity_type_id: string
          assessment_id: string
          created_at: string | null
          hours_per_week: number
          id: string
          improvement_expected_pct: number
          notes: string | null
        }
        Insert: {
          activity_type_id: string
          assessment_id: string
          created_at?: string | null
          hours_per_week: number
          id?: string
          improvement_expected_pct: number
          notes?: string | null
        }
        Update: {
          activity_type_id?: string
          assessment_id?: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          notes?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_assessment_activities_activity_type_id_fkey"
            columns: ["activity_type_id"]
            isOneToOne: false
            referencedRelation: "roi_activity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_assessment_activities_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "roi_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_assessments: {
        Row: {
          annual_cost: number | null
          annual_hours: number | null
          created_at: string | null
          department: string | null
          expected_improvement_percent: number | null
          hourly_rate: number | null
          id: string
          organization_id: string
          role_template_id: string | null
          stakeholder_name: string
          time_spent_percent: number | null
          total_estimated_savings: number | null
          total_hours_per_week: number
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          annual_cost?: number | null
          annual_hours?: number | null
          created_at?: string | null
          department?: string | null
          expected_improvement_percent?: number | null
          hourly_rate?: number | null
          id?: string
          organization_id: string
          role_template_id?: string | null
          stakeholder_name: string
          time_spent_percent?: number | null
          total_estimated_savings?: number | null
          total_hours_per_week: number
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          annual_cost?: number | null
          annual_hours?: number | null
          created_at?: string | null
          department?: string | null
          expected_improvement_percent?: number | null
          hourly_rate?: number | null
          id?: string
          organization_id?: string
          role_template_id?: string | null
          stakeholder_name?: string
          time_spent_percent?: number | null
          total_estimated_savings?: number | null
          total_hours_per_week?: number
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_assessments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_assessments_role_template_id_fkey"
            columns: ["role_template_id"]
            isOneToOne: false
            referencedRelation: "roi_role_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_organizations: {
        Row: {
          active: boolean | null
          created_at: string | null
          custom_domain: string | null
          features: Json | null
          id: string
          is_white_labeled: boolean | null
          license_expires_at: string | null
          license_starts_at: string | null
          license_tier: string | null
          license_tier_id: string | null
          logo_url: string | null
          max_assessments: number | null
          max_users: number | null
          name: string
          owner_user_id: string | null
          primary_color: string | null
          secondary_color: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean | null
          created_at?: string | null
          custom_domain?: string | null
          features?: Json | null
          id?: string
          is_white_labeled?: boolean | null
          license_expires_at?: string | null
          license_starts_at?: string | null
          license_tier?: string | null
          license_tier_id?: string | null
          logo_url?: string | null
          max_assessments?: number | null
          max_users?: number | null
          name: string
          owner_user_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean | null
          created_at?: string | null
          custom_domain?: string | null
          features?: Json | null
          id?: string
          is_white_labeled?: boolean | null
          license_expires_at?: string | null
          license_starts_at?: string | null
          license_tier?: string | null
          license_tier_id?: string | null
          logo_url?: string | null
          max_assessments?: number | null
          max_users?: number | null
          name?: string
          owner_user_id?: string | null
          primary_color?: string | null
          secondary_color?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_organizations_license_tier_id_fkey"
            columns: ["license_tier_id"]
            isOneToOne: false
            referencedRelation: "license_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_role_activities: {
        Row: {
          activity_type_id: string | null
          created_at: string | null
          id: string
          improvement_potential_pct: number
          role_template_id: string | null
          typical_hours_per_week: number
          updated_at: string | null
        }
        Insert: {
          activity_type_id?: string | null
          created_at?: string | null
          id?: string
          improvement_potential_pct?: number
          role_template_id?: string | null
          typical_hours_per_week?: number
          updated_at?: string | null
        }
        Update: {
          activity_type_id?: string | null
          created_at?: string | null
          id?: string
          improvement_potential_pct?: number
          role_template_id?: string | null
          typical_hours_per_week?: number
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_role_activities_activity_type_id_fkey"
            columns: ["activity_type_id"]
            isOneToOne: false
            referencedRelation: "roi_activity_types"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_role_activities_role_template_id_fkey"
            columns: ["role_template_id"]
            isOneToOne: false
            referencedRelation: "roi_role_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_role_templates: {
        Row: {
          created_at: string | null
          description: string | null
          id: string
          is_global: boolean | null
          organization_id: string | null
          standard_cost_per_hour: number
          title: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          organization_id?: string | null
          standard_cost_per_hour: number
          title: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          id?: string
          is_global?: boolean | null
          organization_id?: string | null
          standard_cost_per_hour?: number
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_role_templates_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_stakeholder_activities: {
        Row: {
          activity_name: string
          created_at: string | null
          hours_per_week: number
          id: string
          improvement_expected_pct: number
          role_slug: string
          updated_at: string | null
        }
        Insert: {
          activity_name: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          role_slug: string
          updated_at?: string | null
        }
        Update: {
          activity_name?: string
          created_at?: string | null
          hours_per_week?: number
          id?: string
          improvement_expected_pct?: number
          role_slug?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_stakeholder_activities_role_slug_fkey"
            columns: ["role_slug"]
            isOneToOne: false
            referencedRelation: "roi_stakeholder_templates"
            referencedColumns: ["role_slug"]
          },
        ]
      }
      roi_stakeholder_templates: {
        Row: {
          created_at: string | null
          department: string
          hourly_rate: number
          id: string
          role_slug: string
          role_title: string
          stakeholder_name: string
          updated_at: string | null
          weekly_hours: number
        }
        Insert: {
          created_at?: string | null
          department: string
          hourly_rate?: number
          id?: string
          role_slug: string
          role_title: string
          stakeholder_name: string
          updated_at?: string | null
          weekly_hours?: number
        }
        Update: {
          created_at?: string | null
          department?: string
          hourly_rate?: number
          id?: string
          role_slug?: string
          role_title?: string
          stakeholder_name?: string
          updated_at?: string | null
          weekly_hours?: number
        }
        Relationships: []
      }
      roi_team_members: {
        Row: {
          assessment_id: string
          created_at: string
          id: string
          team_id: string
        }
        Insert: {
          assessment_id: string
          created_at?: string
          id?: string
          team_id: string
        }
        Update: {
          assessment_id?: string
          created_at?: string
          id?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "roi_team_members_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "roi_assessments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "roi_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_team_summaries"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "roi_team_members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      roi_teams: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          organization_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          organization_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          organization_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "roi_teams_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      role_aps: {
        Row: {
          aps_level: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          aps_level: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          aps_level?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_aps_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_aps_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_autoscore: {
        Row: {
          automation_score: number | null
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          automation_score?: number | null
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          automation_score?: number | null
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_autoscore_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: true
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_autoscore_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: true
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_capability_mapping: {
        Row: {
          agent_code: string | null
          aps_role: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      role_certification: {
        Row: {
          cert_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          cert_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          cert_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_certification_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_certification_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_clearance: {
        Row: {
          clearance_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          clearance_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          clearance_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_clearance_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_clearance_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_dependencies: {
        Row: {
          created_at: string
          dependency_weight: number
          description: string | null
          from_role_id: string
          id: string
          impact_type: string
          influence_direction: string | null
          to_role_id: string
          updated_at: string
          uplift_multiplier: number | null
        }
        Insert: {
          created_at?: string
          dependency_weight?: number
          description?: string | null
          from_role_id: string
          id?: string
          impact_type: string
          influence_direction?: string | null
          to_role_id: string
          updated_at?: string
          uplift_multiplier?: number | null
        }
        Update: {
          created_at?: string
          dependency_weight?: number
          description?: string | null
          from_role_id?: string
          id?: string
          impact_type?: string
          influence_direction?: string | null
          to_role_id?: string
          updated_at?: string
          uplift_multiplier?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "role_dependencies_from_role_id_fkey"
            columns: ["from_role_id"]
            isOneToOne: false
            referencedRelation: "roles_master"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "role_dependencies_to_role_id_fkey"
            columns: ["to_role_id"]
            isOneToOne: false
            referencedRelation: "roles_master"
            referencedColumns: ["id"]
          },
        ]
      }
      "Role_Dependencies-Table 1.csv": {
        Row: {
          description: string | null
          id: number | null
          source_role: number | null
          target_role: number | null
          weight: number | null
        }
        Insert: {
          description?: string | null
          id?: number | null
          source_role?: number | null
          target_role?: number | null
          weight?: number | null
        }
        Update: {
          description?: string | null
          id?: number | null
          source_role?: number | null
          target_role?: number | null
          weight?: number | null
        }
        Relationships: []
      }
      role_education: {
        Row: {
          education_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          education_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          education_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_education_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_education_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_experience: {
        Row: {
          experience_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          experience_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          experience_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_experience_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_experience_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_hardskill: {
        Row: {
          hardskill_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          hardskill_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          hardskill_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_hardskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_hardskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_industry: {
        Row: {
          industry_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          industry_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          industry_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_industry_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_industry_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_journeys: {
        Row: {
          assessment_id: string | null
          capabilities_gap: Json | null
          created_at: string
          current_stage: string
          estimated_transformation_time: string | null
          id: string
          neural_leader_assigned: string | null
          priority_level: string | null
          recommended_work_packages: string[] | null
          role_name: string
          role_score: number
          target_stage: string
          updated_at: string
        }
        Insert: {
          assessment_id?: string | null
          capabilities_gap?: Json | null
          created_at?: string
          current_stage: string
          estimated_transformation_time?: string | null
          id?: string
          neural_leader_assigned?: string | null
          priority_level?: string | null
          recommended_work_packages?: string[] | null
          role_name: string
          role_score: number
          target_stage: string
          updated_at?: string
        }
        Update: {
          assessment_id?: string | null
          capabilities_gap?: Json | null
          created_at?: string
          current_stage?: string
          estimated_transformation_time?: string | null
          id?: string
          neural_leader_assigned?: string | null
          priority_level?: string | null
          recommended_work_packages?: string[] | null
          role_name?: string
          role_score?: number
          target_stage?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_journeys_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "visitor_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      role_language: {
        Row: {
          language_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          language_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          language_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_language_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_language_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_master: {
        Row: {
          created_at: string | null
          description: string | null
          role_code: string
          role_name: string
          source_taxonomy: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          role_code: string
          role_name: string
          source_taxonomy?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          description?: string | null
          role_code?: string
          role_name?: string
          source_taxonomy?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      role_orgsize: {
        Row: {
          loaded_at: string | null
          org_size_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          org_size_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          org_size_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_orgsize_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_orgsize_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_process: {
        Row: {
          loaded_at: string | null
          process_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          process_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          process_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_process_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_process_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_region: {
        Row: {
          loaded_at: string | null
          region_code: string
          role_code: string
        }
        Insert: {
          loaded_at?: string | null
          region_code: string
          role_code: string
        }
        Update: {
          loaded_at?: string | null
          region_code?: string
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_region_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_region_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_salaryband: {
        Row: {
          band_code: string
          loaded_at: string | null
          role_code: string
        }
        Insert: {
          band_code: string
          loaded_at?: string | null
          role_code: string
        }
        Update: {
          band_code?: string
          loaded_at?: string | null
          role_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_salaryband_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_salaryband_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_sector: {
        Row: {
          loaded_at: string | null
          role_code: string
          sector_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          sector_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          sector_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_sector_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_sector_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_skill: {
        Row: {
          loaded_at: string | null
          role_code: string
          skill_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          skill_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          skill_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_skill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_skill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_softskill: {
        Row: {
          loaded_at: string | null
          role_code: string
          softskill_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          softskill_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          softskill_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_softskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_softskill_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_task: {
        Row: {
          loaded_at: string | null
          role_code: string
          task_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          task_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          task_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_task_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_task_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_task_scores: {
        Row: {
          agency: string
          augmentable_percent: number | null
          automatable_percent: number | null
          id: string
          role: string
          updated_at: string | null
        }
        Insert: {
          agency: string
          augmentable_percent?: number | null
          automatable_percent?: number | null
          id?: string
          role: string
          updated_at?: string | null
        }
        Update: {
          agency?: string
          augmentable_percent?: number | null
          automatable_percent?: number | null
          id?: string
          role?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      role_technology: {
        Row: {
          loaded_at: string | null
          role_code: string
          tech_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          tech_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          tech_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_technology_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_technology_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      role_work_packages: {
        Row: {
          created_at: string
          estimated_impact: string | null
          id: string
          maturity_stage_required: string | null
          relevance_score: number
          role_name: string
          work_package_id: string
        }
        Insert: {
          created_at?: string
          estimated_impact?: string | null
          id?: string
          maturity_stage_required?: string | null
          relevance_score?: number
          role_name: string
          work_package_id: string
        }
        Update: {
          created_at?: string
          estimated_impact?: string | null
          id?: string
          maturity_stage_required?: string | null
          relevance_score?: number
          role_name?: string
          work_package_id?: string
        }
        Relationships: []
      }
      role_workpattern: {
        Row: {
          loaded_at: string | null
          role_code: string
          workpattern_code: string
        }
        Insert: {
          loaded_at?: string | null
          role_code: string
          workpattern_code: string
        }
        Update: {
          loaded_at?: string | null
          role_code?: string
          workpattern_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "role_workpattern_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_instance"
            referencedColumns: ["role_code"]
          },
          {
            foreignKeyName: "role_workpattern_role_code_fkey"
            columns: ["role_code"]
            isOneToOne: false
            referencedRelation: "role_master"
            referencedColumns: ["role_code"]
          },
        ]
      }
      roles_master: {
        Row: {
          ai_coverage_2000: number | null
          ai_coverage_2010: number | null
          ai_coverage_2020: number | null
          ai_coverage_2025: number | null
          ai_coverage_2030: number | null
          category: string
          created_at: string
          excitement_hook: string | null
          gained_capabilities: string | null
          hours_saved_per_week: number | null
          id: string
          is_active: boolean | null
          key_actions_2000: string | null
          key_actions_2010: string | null
          key_actions_2020: string | null
          key_actions_2025: string | null
          key_actions_2030: string | null
          lost_capabilities: string | null
          major_disruptions: string | null
          neural_ennead_notes: string | null
          org_maturity_uplift: number | null
          recommended_workshop_focus: string | null
          role_interdependencies: string | null
          role_name: string
          self_maturity_uplift: number | null
          sfia_level: string | null
          updated_at: string
          uplift_percentage: number | null
          value_impact_aud: number | null
          workshop_readiness: string | null
        }
        Insert: {
          ai_coverage_2000?: number | null
          ai_coverage_2010?: number | null
          ai_coverage_2020?: number | null
          ai_coverage_2025?: number | null
          ai_coverage_2030?: number | null
          category: string
          created_at?: string
          excitement_hook?: string | null
          gained_capabilities?: string | null
          hours_saved_per_week?: number | null
          id?: string
          is_active?: boolean | null
          key_actions_2000?: string | null
          key_actions_2010?: string | null
          key_actions_2020?: string | null
          key_actions_2025?: string | null
          key_actions_2030?: string | null
          lost_capabilities?: string | null
          major_disruptions?: string | null
          neural_ennead_notes?: string | null
          org_maturity_uplift?: number | null
          recommended_workshop_focus?: string | null
          role_interdependencies?: string | null
          role_name: string
          self_maturity_uplift?: number | null
          sfia_level?: string | null
          updated_at?: string
          uplift_percentage?: number | null
          value_impact_aud?: number | null
          workshop_readiness?: string | null
        }
        Update: {
          ai_coverage_2000?: number | null
          ai_coverage_2010?: number | null
          ai_coverage_2020?: number | null
          ai_coverage_2025?: number | null
          ai_coverage_2030?: number | null
          category?: string
          created_at?: string
          excitement_hook?: string | null
          gained_capabilities?: string | null
          hours_saved_per_week?: number | null
          id?: string
          is_active?: boolean | null
          key_actions_2000?: string | null
          key_actions_2010?: string | null
          key_actions_2020?: string | null
          key_actions_2025?: string | null
          key_actions_2030?: string | null
          lost_capabilities?: string | null
          major_disruptions?: string | null
          neural_ennead_notes?: string | null
          org_maturity_uplift?: number | null
          recommended_workshop_focus?: string | null
          role_interdependencies?: string | null
          role_name?: string
          self_maturity_uplift?: number | null
          sfia_level?: string | null
          updated_at?: string
          uplift_percentage?: number | null
          value_impact_aud?: number | null
          workshop_readiness?: string | null
        }
        Relationships: []
      }
      "Roles-Table 1.csv": {
        Row: {
          cost_per_fte: number | null
          fte_count: number | null
          hours_per_week: number | null
          role_id: number | null
          role_name: string | null
          sfia_code: string | null
        }
        Insert: {
          cost_per_fte?: number | null
          fte_count?: number | null
          hours_per_week?: number | null
          role_id?: number | null
          role_name?: string | null
          sfia_code?: string | null
        }
        Update: {
          cost_per_fte?: number | null
          fte_count?: number | null
          hours_per_week?: number | null
          role_id?: number | null
          role_name?: string | null
          sfia_code?: string | null
        }
        Relationships: []
      }
      salary_estimates: {
        Row: {
          annual_salary: number | null
          created_at: string
          department: string | null
          hourly_rate: number
          id: string
          industry: string | null
          role_title: string
          updated_at: string
        }
        Insert: {
          annual_salary?: number | null
          created_at?: string
          department?: string | null
          hourly_rate?: number
          id?: string
          industry?: string | null
          role_title: string
          updated_at?: string
        }
        Update: {
          annual_salary?: number | null
          created_at?: string
          department?: string | null
          hourly_rate?: number
          id?: string
          industry?: string | null
          role_title?: string
          updated_at?: string
        }
        Relationships: []
      }
      sales_achievements: {
        Row: {
          achievement_name: string
          achievement_type: string
          consultant_id: string | null
          description: string | null
          earned_at: string | null
          id: string
          period_month: string | null
          points_awarded: number | null
        }
        Insert: {
          achievement_name: string
          achievement_type: string
          consultant_id?: string | null
          description?: string | null
          earned_at?: string | null
          id?: string
          period_month?: string | null
          points_awarded?: number | null
        }
        Update: {
          achievement_name?: string
          achievement_type?: string
          consultant_id?: string | null
          description?: string | null
          earned_at?: string | null
          id?: string
          period_month?: string | null
          points_awarded?: number | null
        }
        Relationships: []
      }
      sales_activities: {
        Row: {
          activity_date: string
          activity_type: string
          consultant_id: string | null
          created_at: string | null
          duration_minutes: number | null
          id: string
          notes: string | null
          opportunity_id: string | null
        }
        Insert: {
          activity_date?: string
          activity_type: string
          consultant_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
        }
        Update: {
          activity_date?: string
          activity_type?: string
          consultant_id?: string | null
          created_at?: string | null
          duration_minutes?: number | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sales_activities_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "sales_opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      sales_opportunities: {
        Row: {
          actual_close_date: string | null
          company_name: string
          consultant_id: string | null
          created_at: string | null
          current_stage: Database["public"]["Enums"]["sales_stage"]
          deal_value: number | null
          expected_close_date: string | null
          id: string
          is_active: boolean | null
          probability: number | null
          updated_at: string | null
        }
        Insert: {
          actual_close_date?: string | null
          company_name: string
          consultant_id?: string | null
          created_at?: string | null
          current_stage?: Database["public"]["Enums"]["sales_stage"]
          deal_value?: number | null
          expected_close_date?: string | null
          id?: string
          is_active?: boolean | null
          probability?: number | null
          updated_at?: string | null
        }
        Update: {
          actual_close_date?: string | null
          company_name?: string
          consultant_id?: string | null
          created_at?: string | null
          current_stage?: Database["public"]["Enums"]["sales_stage"]
          deal_value?: number | null
          expected_close_date?: string | null
          id?: string
          is_active?: boolean | null
          probability?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      sales_stage_history: {
        Row: {
          changed_at: string | null
          from_stage: Database["public"]["Enums"]["sales_stage"] | null
          id: string
          notes: string | null
          opportunity_id: string | null
          time_in_previous_stage_days: number | null
          to_stage: Database["public"]["Enums"]["sales_stage"]
        }
        Insert: {
          changed_at?: string | null
          from_stage?: Database["public"]["Enums"]["sales_stage"] | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
          time_in_previous_stage_days?: number | null
          to_stage: Database["public"]["Enums"]["sales_stage"]
        }
        Update: {
          changed_at?: string | null
          from_stage?: Database["public"]["Enums"]["sales_stage"] | null
          id?: string
          notes?: string | null
          opportunity_id?: string | null
          time_in_previous_stage_days?: number | null
          to_stage?: Database["public"]["Enums"]["sales_stage"]
        }
        Relationships: [
          {
            foreignKeyName: "sales_stage_history_opportunity_id_fkey"
            columns: ["opportunity_id"]
            isOneToOne: false
            referencedRelation: "sales_opportunities"
            referencedColumns: ["id"]
          },
        ]
      }
      samples: {
        Row: {
          agent_code: string | null
          agent_name: string | null
          agent_usage_tags: string | null
          ai_readiness_level: number | null
          aps_band: string | null
          category: string | null
          clearance_level_required: string | null
          complexity: string | null
          compute_power_per_task: number | null
          deployment_mode: string | null
          estimated_monthly_cost_aud: number | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          human_name: string | null
          integration_complexity: string | null
          org_chart_position: string | null
          partner_network: string | null
          pillar: string | null
          pillar_index: number | null
          row_id: number | null
          sfia_code: string | null
          systems_used: string | null
          task_output_format: string | null
          task_usage_minutes: number | null
          team_type: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          category?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team_type?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          category?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team_type?: string | null
        }
        Relationships: []
      }
      scheduled_jobs: {
        Row: {
          created_at: string
          failure_count: number
          id: string
          is_active: boolean
          job_name: string
          job_type: string
          last_error: string | null
          last_run_at: string | null
          next_run_at: string | null
          schedule_expression: string
          success_count: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          failure_count?: number
          id?: string
          is_active?: boolean
          job_name: string
          job_type: string
          last_error?: string | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_expression: string
          success_count?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          failure_count?: number
          id?: string
          is_active?: boolean
          job_name?: string
          job_type?: string
          last_error?: string | null
          last_run_at?: string | null
          next_run_at?: string | null
          schedule_expression?: string
          success_count?: number
          updated_at?: string
        }
        Relationships: []
      }
      scheduled_reminders: {
        Row: {
          created_at: string | null
          id: string
          is_sent: boolean | null
          message: string
          recurrence: string | null
          scheduled_for: string
          title: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          message: string
          recurrence?: string | null
          scheduled_for: string
          title: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          message?: string
          recurrence?: string | null
          scheduled_for?: string
          title?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      scoring_weights_config: {
        Row: {
          capability_match_weight: number | null
          client_type: string
          competitive_position_weight: number | null
          config_name: string
          created_at: string
          created_by: string | null
          financial_weight: number | null
          id: string
          is_active: boolean | null
          is_default: boolean | null
          risk_compliance_weight: number | null
          strategic_fit_weight: number | null
          updated_at: string
          updated_by: string | null
          weight_overrides: Json | null
        }
        Insert: {
          capability_match_weight?: number | null
          client_type: string
          competitive_position_weight?: number | null
          config_name: string
          created_at?: string
          created_by?: string | null
          financial_weight?: number | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          risk_compliance_weight?: number | null
          strategic_fit_weight?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_overrides?: Json | null
        }
        Update: {
          capability_match_weight?: number | null
          client_type?: string
          competitive_position_weight?: number | null
          config_name?: string
          created_at?: string
          created_by?: string | null
          financial_weight?: number | null
          id?: string
          is_active?: boolean | null
          is_default?: boolean | null
          risk_compliance_weight?: number | null
          strategic_fit_weight?: number | null
          updated_at?: string
          updated_by?: string | null
          weight_overrides?: Json | null
        }
        Relationships: []
      }
      service_catalog_master: {
        Row: {
          A: string | null
          Active: boolean | null
          "Allow Multi-Currency": boolean | null
          Billable: boolean | null
          "Billing Frequency": string | null
          "Bundle Name": string | null
          C: string | null
          Category: string | null
          "Cost to Company (AUD)": number | null
          "Currency Code": string | null
          Description: string | null
          "Early Payment Discount": string | null
          "Exchange Rate to AUD": number | null
          "GL Account": string | null
          I: string | null
          "Is Agentic AI": boolean | null
          "Is Consulting": boolean | null
          "Is Premium": boolean | null
          "Is Recurring": boolean | null
          "Lead Time (Days)": number | null
          "Max Qty": string | null
          "Min Contract Term (Months)": string | null
          "Min Qty": number | null
          "Partner Price": string | null
          "Payment Terms": string | null
          Phase: string | null
          "Phase Code": string | null
          "Price (AUD)": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          "Profit Margin Target (%)": number | null
          R: string | null
          "Retail Price": number | null
          "Seasonal Discount": string | null
          "Service Duration": string | null
          "Service Level Tier": string | null
          SKU: string | null
          "SKU Grouping": string | null
          "SOW Code": string | null
          Subcategory: string | null
          "Subscription Billing Cycle": string | null
          "Supplier Code": string | null
          "Supplier Name": string | null
          "Supplier SKU": string | null
          "Tax Category": string | null
          "Unit of Measure": string | null
          "Volume Discount": string | null
          "Warranty Terms": string | null
          "White Label Price": number | null
          "Wholesale Price": number | null
        }
        Insert: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Update: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Relationships: []
      }
      service_offerings: {
        Row: {
          created_at: string
          deliverables: string[] | null
          description: string | null
          duration: string | null
          id: string
          price_range: string | null
          roi_projection: string | null
          role_code: string
          service_name: string
          service_tier: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          deliverables?: string[] | null
          description?: string | null
          duration?: string | null
          id?: string
          price_range?: string | null
          roi_projection?: string | null
          role_code: string
          service_name: string
          service_tier: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          deliverables?: string[] | null
          description?: string | null
          duration?: string | null
          id?: string
          price_range?: string | null
          roi_projection?: string | null
          role_code?: string
          service_name?: string
          service_tier?: string
          updated_at?: string
        }
        Relationships: []
      }
      services: {
        Row: {
          description: string | null
          name: string | null
          rate: number | null
          service_id: string
          unit: string | null
        }
        Insert: {
          description?: string | null
          name?: string | null
          rate?: number | null
          service_id: string
          unit?: string | null
        }
        Update: {
          description?: string | null
          name?: string | null
          rate?: number | null
          service_id?: string
          unit?: string | null
        }
        Relationships: []
      }
      shared_assets: {
        Row: {
          asset_category: string
          asset_key: string
          asset_name: string
          asset_url: string
          created_at: string
          created_by: string | null
          file_size: number | null
          file_type: string | null
          id: string
          is_active: boolean
          is_global: boolean
          metadata: Json | null
          storage_path: string | null
          tenant_id: string | null
          updated_at: string
          version_number: number
        }
        Insert: {
          asset_category: string
          asset_key: string
          asset_name: string
          asset_url: string
          created_at?: string
          created_by?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_active?: boolean
          is_global?: boolean
          metadata?: Json | null
          storage_path?: string | null
          tenant_id?: string | null
          updated_at?: string
          version_number?: number
        }
        Update: {
          asset_category?: string
          asset_key?: string
          asset_name?: string
          asset_url?: string
          created_at?: string
          created_by?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_active?: boolean
          is_global?: boolean
          metadata?: Json | null
          storage_path?: string | null
          tenant_id?: string | null
          updated_at?: string
          version_number?: number
        }
        Relationships: []
      }
      site_audit_reports: {
        Row: {
          audit_type: string
          base_url: string
          broken_links: Json | null
          completed_at: string | null
          created_at: string
          id: string
          missing_handlers: Json | null
          pages_crawled: Json | null
          performance_metrics: Json | null
          started_at: string
          status: string
          updated_at: string
        }
        Insert: {
          audit_type?: string
          base_url: string
          broken_links?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          missing_handlers?: Json | null
          pages_crawled?: Json | null
          performance_metrics?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
        }
        Update: {
          audit_type?: string
          base_url?: string
          broken_links?: Json | null
          completed_at?: string | null
          created_at?: string
          id?: string
          missing_handlers?: Json | null
          pages_crawled?: Json | null
          performance_metrics?: Json | null
          started_at?: string
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_feedback: {
        Row: {
          can_be_improved: string | null
          created_at: string
          email: string | null
          id: number
          interest_level: string | null
          most_valuable: string | null
        }
        Insert: {
          can_be_improved?: string | null
          created_at?: string
          email?: string | null
          id?: number
          interest_level?: string | null
          most_valuable?: string | null
        }
        Update: {
          can_be_improved?: string | null
          created_at?: string
          email?: string | null
          id?: number
          interest_level?: string | null
          most_valuable?: string | null
        }
        Relationships: []
      }
      skill_performance_analytics: {
        Row: {
          agent_count: number | null
          associated_functions: string | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          avg_popularity_score: string | null
          avg_trust_score: number | null
          cost_ratio_agent_to_auto: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_count: number | null
          skill: string | null
          skill_value_score: number | null
        }
        Insert: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Update: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Relationships: []
      }
      skill_premium_matrix: {
        Row: {
          certification_premium: number
          created_at: string
          demand_level: string | null
          effective_date: string
          id: string
          industry_premium: number
          industry_specialization: string | null
          is_active: boolean
          premium_multiplier: number
          security_clearance_premium: number
          skill_category: string
          skill_name: string
          updated_at: string
        }
        Insert: {
          certification_premium?: number
          created_at?: string
          demand_level?: string | null
          effective_date?: string
          id?: string
          industry_premium?: number
          industry_specialization?: string | null
          is_active?: boolean
          premium_multiplier?: number
          security_clearance_premium?: number
          skill_category: string
          skill_name: string
          updated_at?: string
        }
        Update: {
          certification_premium?: number
          created_at?: string
          demand_level?: string | null
          effective_date?: string
          id?: string
          industry_premium?: number
          industry_specialization?: string | null
          is_active?: boolean
          premium_multiplier?: number
          security_clearance_premium?: number
          skill_category?: string
          skill_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      sladefinitions: {
        Row: {
          name: string | null
          penalty_terms: string | null
          remediation_time_h: number | null
          response_time_h: number | null
          sla_id: string
          uptime_pct: number | null
        }
        Insert: {
          name?: string | null
          penalty_terms?: string | null
          remediation_time_h?: number | null
          response_time_h?: number | null
          sla_id: string
          uptime_pct?: number | null
        }
        Update: {
          name?: string | null
          penalty_terms?: string | null
          remediation_time_h?: number | null
          response_time_h?: number | null
          sla_id?: string
          uptime_pct?: number | null
        }
        Relationships: []
      }
      slaincidents: {
        Row: {
          closed_at: string | null
          customer_id: string | null
          incident_id: number
          opened_at: string | null
          outcome: string | null
          resolution_time_h: number | null
          sla_id: string | null
        }
        Insert: {
          closed_at?: string | null
          customer_id?: string | null
          incident_id?: number
          opened_at?: string | null
          outcome?: string | null
          resolution_time_h?: number | null
          sla_id?: string | null
        }
        Update: {
          closed_at?: string | null
          customer_id?: string | null
          incident_id?: number
          opened_at?: string | null
          outcome?: string | null
          resolution_time_h?: number | null
          sla_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "slaincidents_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
          {
            foreignKeyName: "slaincidents_sla_id_fkey"
            columns: ["sla_id"]
            isOneToOne: false
            referencedRelation: "sladefinitions"
            referencedColumns: ["sla_id"]
          },
        ]
      }
      sow_documents: {
        Row: {
          benefits: string | null
          cost_estimate: number | null
          created_at: string | null
          id: string
          objectives: string | null
          project_id: string | null
          risks: string | null
          status: string
          updated_at: string | null
        }
        Insert: {
          benefits?: string | null
          cost_estimate?: number | null
          created_at?: string | null
          id?: string
          objectives?: string | null
          project_id?: string | null
          risks?: string | null
          status?: string
          updated_at?: string | null
        }
        Update: {
          benefits?: string | null
          cost_estimate?: number | null
          created_at?: string | null
          id?: string
          objectives?: string | null
          project_id?: string | null
          risks?: string | null
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sow_documents_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      sow_shares: {
        Row: {
          cover_letter: string | null
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          project_id: string | null
          share_token: string
          shared_by: string
          shared_with: string[]
          updated_at: string
          view_count: number
        }
        Insert: {
          cover_letter?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          project_id?: string | null
          share_token: string
          shared_by: string
          shared_with?: string[]
          updated_at?: string
          view_count?: number
        }
        Update: {
          cover_letter?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          project_id?: string | null
          share_token?: string
          shared_by?: string
          shared_with?: string[]
          updated_at?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "sow_shares_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
      specialized_agent_configurations: {
        Row: {
          agent_code: string | null
          aligned_roles: string | null
          aps_hourly_rate: number | null
          augmented_delivery_cost: number | null
          automated_delivery_cost: number | null
          base_agent_cost: number | null
          bundle_pairings: string | null
          certifications: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          core_skills: string | null
          delivery_type: string | null
          domain: string | null
          domain_trust_score: number | null
          final_cost: number | null
          fit_for_defence: boolean | null
          fit_for_partner_solutions: string | null
          function: string | null
          highlight_quote: string | null
          human_cost_equiv: number | null
          human_delivery_cost: number | null
          human_effort_hours: number | null
          industry_fit: string | null
          job_title_matches: string | null
          markup_model: string | null
          max_parallel_roles: number | null
          micro_role_fragments: string | null
          persona: string | null
          preferred_partners: string | null
          proposal_strength_score: number | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          sfia_category: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          tech_stack: string | null
          value_to_cost_ratio: number | null
        }
        Insert: {
          agent_code?: string | null
          aligned_roles?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          base_agent_cost?: number | null
          bundle_pairings?: string | null
          certifications?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          delivery_type?: string | null
          domain?: string | null
          domain_trust_score?: number | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          industry_fit?: string | null
          job_title_matches?: string | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          persona?: string | null
          preferred_partners?: string | null
          proposal_strength_score?: number | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          tech_stack?: string | null
          value_to_cost_ratio?: number | null
        }
        Update: {
          agent_code?: string | null
          aligned_roles?: string | null
          aps_hourly_rate?: number | null
          augmented_delivery_cost?: number | null
          automated_delivery_cost?: number | null
          base_agent_cost?: number | null
          bundle_pairings?: string | null
          certifications?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          delivery_type?: string | null
          domain?: string | null
          domain_trust_score?: number | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          industry_fit?: string | null
          job_title_matches?: string | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          persona?: string | null
          preferred_partners?: string | null
          proposal_strength_score?: number | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          tech_stack?: string | null
          value_to_cost_ratio?: number | null
        }
        Relationships: []
      }
      stage_benchmarks: {
        Row: {
          compensation_type: string
          created_at: string
          id: string
          max_percentage: number | null
          min_percentage: number | null
          recommended_percentage: number | null
          stage_id: string
          typical_value_range: string | null
          updated_at: string
        }
        Insert: {
          compensation_type: string
          created_at?: string
          id?: string
          max_percentage?: number | null
          min_percentage?: number | null
          recommended_percentage?: number | null
          stage_id: string
          typical_value_range?: string | null
          updated_at?: string
        }
        Update: {
          compensation_type?: string
          created_at?: string
          id?: string
          max_percentage?: number | null
          min_percentage?: number | null
          recommended_percentage?: number | null
          stage_id?: string
          typical_value_range?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "stage_benchmarks_stage_id_fkey"
            columns: ["stage_id"]
            isOneToOne: false
            referencedRelation: "compensation_stages"
            referencedColumns: ["id"]
          },
        ]
      }
      stat_cards: {
        Row: {
          category: string | null
          color: string | null
          created_at: string | null
          data_source: string | null
          description: string
          icon: string
          id: string
          is_featured: boolean | null
          refresh_frequency: string | null
          show_trend: boolean | null
          sort_order: number | null
          title: string
          trend_period: string | null
          trend_value: number | null
          type: string | null
          updated_at: string | null
          value: string
        }
        Insert: {
          category?: string | null
          color?: string | null
          created_at?: string | null
          data_source?: string | null
          description: string
          icon: string
          id?: string
          is_featured?: boolean | null
          refresh_frequency?: string | null
          show_trend?: boolean | null
          sort_order?: number | null
          title: string
          trend_period?: string | null
          trend_value?: number | null
          type?: string | null
          updated_at?: string | null
          value: string
        }
        Update: {
          category?: string | null
          color?: string | null
          created_at?: string | null
          data_source?: string | null
          description?: string
          icon?: string
          id?: string
          is_featured?: boolean | null
          refresh_frequency?: string | null
          show_trend?: boolean | null
          sort_order?: number | null
          title?: string
          trend_period?: string | null
          trend_value?: number | null
          type?: string | null
          updated_at?: string | null
          value?: string
        }
        Relationships: []
      }
      stg_project_demand: {
        Row: {
          created_at: string
          department: string | null
          id: string
          industry: string | null
          project_month: string
          requests: number
        }
        Insert: {
          created_at?: string
          department?: string | null
          id?: string
          industry?: string | null
          project_month: string
          requests: number
        }
        Update: {
          created_at?: string
          department?: string | null
          id?: string
          industry?: string | null
          project_month?: string
          requests?: number
        }
        Relationships: []
      }
      stg_utilization_history: {
        Row: {
          agent_code: string
          capacity_hours: number | null
          created_at: string
          id: string
          month: string
          processed: boolean | null
          project_requests: number | null
          utilization_pct: number
        }
        Insert: {
          agent_code: string
          capacity_hours?: number | null
          created_at?: string
          id?: string
          month: string
          processed?: boolean | null
          project_requests?: number | null
          utilization_pct: number
        }
        Update: {
          agent_code?: string
          capacity_hours?: number | null
          created_at?: string
          id?: string
          month?: string
          processed?: boolean | null
          project_requests?: number | null
          utilization_pct?: number
        }
        Relationships: []
      }
      story_feedback: {
        Row: {
          created_at: string
          id: number
          story_id: string
          votes_down: number
          votes_neutral: number
          votes_up: number
        }
        Insert: {
          created_at?: string
          id?: number
          story_id: string
          votes_down?: number
          votes_neutral?: number
          votes_up?: number
        }
        Update: {
          created_at?: string
          id?: number
          story_id?: string
          votes_down?: number
          votes_neutral?: number
          votes_up?: number
        }
        Relationships: []
      }
      strategic_decisions: {
        Row: {
          affected_departments: string[] | null
          approval_status: string | null
          created_at: string
          decision_context: string
          decision_maker: string
          decision_title: string
          decision_type: string
          follow_up_required: boolean | null
          id: string
          impact_assessment: Json | null
          implementation_date: string | null
          knowledge_sources: string[] | null
          updated_at: string
        }
        Insert: {
          affected_departments?: string[] | null
          approval_status?: string | null
          created_at?: string
          decision_context: string
          decision_maker: string
          decision_title: string
          decision_type: string
          follow_up_required?: boolean | null
          id?: string
          impact_assessment?: Json | null
          implementation_date?: string | null
          knowledge_sources?: string[] | null
          updated_at?: string
        }
        Update: {
          affected_departments?: string[] | null
          approval_status?: string | null
          created_at?: string
          decision_context?: string
          decision_maker?: string
          decision_title?: string
          decision_type?: string
          follow_up_required?: boolean | null
          id?: string
          impact_assessment?: Json | null
          implementation_date?: string | null
          knowledge_sources?: string[] | null
          updated_at?: string
        }
        Relationships: []
      }
      strategic_intelligence_reports: {
        Row: {
          created_at: string | null
          generated_at: string | null
          generated_by: string | null
          id: string
          report_data: Json
          report_period_end: string | null
          report_period_start: string | null
          report_type: string
          status: string | null
        }
        Insert: {
          created_at?: string | null
          generated_at?: string | null
          generated_by?: string | null
          id?: string
          report_data?: Json
          report_period_end?: string | null
          report_period_start?: string | null
          report_type: string
          status?: string | null
        }
        Update: {
          created_at?: string | null
          generated_at?: string | null
          generated_by?: string | null
          id?: string
          report_data?: Json
          report_period_end?: string | null
          report_period_start?: string | null
          report_type?: string
          status?: string | null
        }
        Relationships: []
      }
      strategic_partner_ecosystem: {
        Row: {
          ai_specializations: string | null
          avg_deal_size: number | null
          avg_joint_win_rate: number | null
          certification_count: number | null
          certifications: string | null
          channel_type: string | null
          compliance_standards: Json | null
          data_platforms: string | null
          data_sovereignty_guarantee: boolean | null
          devops_capabilities: Json | null
          diversity_supplier: boolean | null
          employee_count: number | null
          escalation_path: string | null
          global_office_count: number | null
          headquarters_city: string | null
          headquarters_country: string | null
          industry_vertical_focus: string | null
          insurances: string | null
          integration_platforms: string | null
          joint_proposals_count: number | null
          joint_win_count: number | null
          last_engagement_date: string | null
          local_presence_scale: string | null
          logo_url: string | null
          low_code_platforms: string | null
          msp_certifications: string | null
          nps_score: number | null
          office_count_au: string | null
          office_locations_au: Json | null
          partner_contact_email: string | null
          partner_cost_model: string | null
          partner_id: string | null
          partner_maturity_level: string | null
          partner_name: string | null
          partner_NRR: number | null
          partner_phone: number | null
          partner_rating_overall: number | null
          partner_reference_customers: string | null
          partner_scorecard: string | null
          partner_segment: string | null
          partner_social_profiles: string | null
          partner_tier: string | null
          partner_training_capabilities: string | null
          partner_type: string | null
          partner_website: string | null
          partnership_duration_years: number | null
          partnership_start_date: string | null
          primary_technologies: string | null
          regions_supported: string | null
          relationship_score: number | null
          revenue_shared_pct: number | null
          risk_flags: Json | null
          score_ranking: number | null
          security_clearance_levels: string | null
          security_specializations: string | null
          services_offered: string | null
          sla_levels: string | null
          solution_areas: string | null
          specialist_domains: string | null
          strategic_priority: string | null
          support_hours_au: string | null
          trend_last_6m: string | null
        }
        Insert: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          certification_count?: number | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: Json | null
          data_platforms?: string | null
          data_sovereignty_guarantee?: boolean | null
          devops_capabilities?: Json | null
          diversity_supplier?: boolean | null
          employee_count?: number | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: Json | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_name?: string | null
          partner_NRR?: number | null
          partner_phone?: number | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_type?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          primary_technologies?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: Json | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: string | null
        }
        Update: {
          ai_specializations?: string | null
          avg_deal_size?: number | null
          avg_joint_win_rate?: number | null
          certification_count?: number | null
          certifications?: string | null
          channel_type?: string | null
          compliance_standards?: Json | null
          data_platforms?: string | null
          data_sovereignty_guarantee?: boolean | null
          devops_capabilities?: Json | null
          diversity_supplier?: boolean | null
          employee_count?: number | null
          escalation_path?: string | null
          global_office_count?: number | null
          headquarters_city?: string | null
          headquarters_country?: string | null
          industry_vertical_focus?: string | null
          insurances?: string | null
          integration_platforms?: string | null
          joint_proposals_count?: number | null
          joint_win_count?: number | null
          last_engagement_date?: string | null
          local_presence_scale?: string | null
          logo_url?: string | null
          low_code_platforms?: string | null
          msp_certifications?: string | null
          nps_score?: number | null
          office_count_au?: string | null
          office_locations_au?: Json | null
          partner_contact_email?: string | null
          partner_cost_model?: string | null
          partner_id?: string | null
          partner_maturity_level?: string | null
          partner_name?: string | null
          partner_NRR?: number | null
          partner_phone?: number | null
          partner_rating_overall?: number | null
          partner_reference_customers?: string | null
          partner_scorecard?: string | null
          partner_segment?: string | null
          partner_social_profiles?: string | null
          partner_tier?: string | null
          partner_training_capabilities?: string | null
          partner_type?: string | null
          partner_website?: string | null
          partnership_duration_years?: number | null
          partnership_start_date?: string | null
          primary_technologies?: string | null
          regions_supported?: string | null
          relationship_score?: number | null
          revenue_shared_pct?: number | null
          risk_flags?: Json | null
          score_ranking?: number | null
          security_clearance_levels?: string | null
          security_specializations?: string | null
          services_offered?: string | null
          sla_levels?: string | null
          solution_areas?: string | null
          specialist_domains?: string | null
          strategic_priority?: string | null
          support_hours_au?: string | null
          trend_last_6m?: string | null
        }
        Relationships: []
      }
      stripe_checkout_sessions: {
        Row: {
          cart_items: Json
          created_at: string
          currency: string | null
          customer_email: string
          id: string
          payment_intent_id: string | null
          session_id: string
          status: string | null
          total_amount: number
          updated_at: string
          user_id: string | null
        }
        Insert: {
          cart_items: Json
          created_at?: string
          currency?: string | null
          customer_email: string
          id?: string
          payment_intent_id?: string | null
          session_id: string
          status?: string | null
          total_amount: number
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          cart_items?: Json
          created_at?: string
          currency?: string | null
          customer_email?: string
          id?: string
          payment_intent_id?: string | null
          session_id?: string
          status?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      stripe_products_catalog: {
        Row: {
          agent_bundle_size: number | null
          agent_codes: string[] | null
          agent_count: number | null
          automation_level: string | null
          base_agent_codes: string[] | null
          billing_interval: string | null
          billing_interval_count: number | null
          bundle_name: string | null
          bundle_type: string | null
          buyer_tier_discount: number | null
          capacity_hours: number | null
          category: string
          compliance_level: string | null
          cost_basis: number | null
          created_at: string | null
          demand_multiplier: number | null
          discount_percentage: number | null
          effective_price_amount: number | null
          function_cluster: string | null
          id: string
          included_products: string[] | null
          industry_focus: string | null
          integration_complexity: string | null
          is_active: boolean | null
          is_featured: boolean | null
          lead_agent_code: string | null
          listing_id: string | null
          markup_percentage: number | null
          partner_id: string | null
          partner_tier: string | null
          price_amount: number
          price_currency: string
          product_description: string | null
          product_name: string
          revenue_share_percentage: number | null
          service_type: string | null
          sla_level: string | null
          sort_order: number | null
          stripe_price_id: string
          stripe_product_id: string | null
          subcategory: string | null
          target_market: string | null
          updated_at: string | null
          volume_tier_max: number | null
          volume_tier_min: number | null
          vp_domain: string | null
        }
        Insert: {
          agent_bundle_size?: number | null
          agent_codes?: string[] | null
          agent_count?: number | null
          automation_level?: string | null
          base_agent_codes?: string[] | null
          billing_interval?: string | null
          billing_interval_count?: number | null
          bundle_name?: string | null
          bundle_type?: string | null
          buyer_tier_discount?: number | null
          capacity_hours?: number | null
          category: string
          compliance_level?: string | null
          cost_basis?: number | null
          created_at?: string | null
          demand_multiplier?: number | null
          discount_percentage?: number | null
          effective_price_amount?: number | null
          function_cluster?: string | null
          id?: string
          included_products?: string[] | null
          industry_focus?: string | null
          integration_complexity?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          lead_agent_code?: string | null
          listing_id?: string | null
          markup_percentage?: number | null
          partner_id?: string | null
          partner_tier?: string | null
          price_amount: number
          price_currency?: string
          product_description?: string | null
          product_name: string
          revenue_share_percentage?: number | null
          service_type?: string | null
          sla_level?: string | null
          sort_order?: number | null
          stripe_price_id: string
          stripe_product_id?: string | null
          subcategory?: string | null
          target_market?: string | null
          updated_at?: string | null
          volume_tier_max?: number | null
          volume_tier_min?: number | null
          vp_domain?: string | null
        }
        Update: {
          agent_bundle_size?: number | null
          agent_codes?: string[] | null
          agent_count?: number | null
          automation_level?: string | null
          base_agent_codes?: string[] | null
          billing_interval?: string | null
          billing_interval_count?: number | null
          bundle_name?: string | null
          bundle_type?: string | null
          buyer_tier_discount?: number | null
          capacity_hours?: number | null
          category?: string
          compliance_level?: string | null
          cost_basis?: number | null
          created_at?: string | null
          demand_multiplier?: number | null
          discount_percentage?: number | null
          effective_price_amount?: number | null
          function_cluster?: string | null
          id?: string
          included_products?: string[] | null
          industry_focus?: string | null
          integration_complexity?: string | null
          is_active?: boolean | null
          is_featured?: boolean | null
          lead_agent_code?: string | null
          listing_id?: string | null
          markup_percentage?: number | null
          partner_id?: string | null
          partner_tier?: string | null
          price_amount?: number
          price_currency?: string
          product_description?: string | null
          product_name?: string
          revenue_share_percentage?: number | null
          service_type?: string | null
          sla_level?: string | null
          sort_order?: number | null
          stripe_price_id?: string
          stripe_product_id?: string | null
          subcategory?: string | null
          target_market?: string | null
          updated_at?: string | null
          volume_tier_max?: number | null
          volume_tier_min?: number | null
          vp_domain?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_listing_id"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "gace_listings"
            referencedColumns: ["id"]
          },
        ]
      }
      subscribers: {
        Row: {
          created_at: string
          email: string
          id: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          email: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          email?: string
          id?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscription_tiers: {
        Row: {
          billing_interval: string
          created_at: string | null
          description: string | null
          features: Json | null
          id: string
          is_active: boolean | null
          name: string
          price: number
          updated_at: string | null
        }
        Insert: {
          billing_interval?: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name: string
          price: number
          updated_at?: string | null
        }
        Update: {
          billing_interval?: string
          created_at?: string | null
          description?: string | null
          features?: Json | null
          id?: string
          is_active?: boolean | null
          name?: string
          price?: number
          updated_at?: string | null
        }
        Relationships: []
      }
      supplier_subscriptions: {
        Row: {
          created_at: string | null
          current_period_end: string | null
          current_period_start: string | null
          id: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          tier_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          tier_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "supplier_subscriptions_tier_id_fkey"
            columns: ["tier_id"]
            isOneToOne: false
            referencedRelation: "subscription_tiers"
            referencedColumns: ["id"]
          },
        ]
      }
      supporttickets: {
        Row: {
          assigned_to: string | null
          bundle_id: string | null
          created_at: string | null
          customer_id: string | null
          priority: string | null
          status: string | null
          ticket_id: number
        }
        Insert: {
          assigned_to?: string | null
          bundle_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          priority?: string | null
          status?: string | null
          ticket_id?: number
        }
        Update: {
          assigned_to?: string | null
          bundle_id?: string | null
          created_at?: string | null
          customer_id?: string | null
          priority?: string | null
          status?: string | null
          ticket_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "supporttickets_bundle_id_fkey"
            columns: ["bundle_id"]
            isOneToOne: false
            referencedRelation: "managerbundles"
            referencedColumns: ["bundle_id"]
          },
          {
            foreignKeyName: "supporttickets_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      tags: {
        Row: {
          name: string | null
          tag_id: string
        }
        Insert: {
          name?: string | null
          tag_id: string
        }
        Update: {
          name?: string | null
          tag_id?: string
        }
        Relationships: []
      }
      task_category_mappings: {
        Row: {
          category: string
          complexity_range: Json | null
          created_at: string
          default_time_saved: number | null
          id: string
          industry_specific: boolean | null
          industry_tags: string[] | null
          recommended_tools: Json | null
          role_types: string[]
          task_name: string
          updated_at: string
          value_range: Json | null
        }
        Insert: {
          category: string
          complexity_range?: Json | null
          created_at?: string
          default_time_saved?: number | null
          id?: string
          industry_specific?: boolean | null
          industry_tags?: string[] | null
          recommended_tools?: Json | null
          role_types: string[]
          task_name: string
          updated_at?: string
          value_range?: Json | null
        }
        Update: {
          category?: string
          complexity_range?: Json | null
          created_at?: string
          default_time_saved?: number | null
          id?: string
          industry_specific?: boolean | null
          industry_tags?: string[] | null
          recommended_tools?: Json | null
          role_types?: string[]
          task_name?: string
          updated_at?: string
          value_range?: Json | null
        }
        Relationships: []
      }
      task_nominations: {
        Row: {
          average_rating: number | null
          boredom_factor: number
          category: string
          created_at: string | null
          description: string
          effort_to_augment: number
          error_reduction_potential: number
          frequency: string
          hours_per_week: number
          id: string
          impact_score: number
          metadata: Json | null
          status: string | null
          task_name: string
          updated_at: string | null
          user_id: string | null
          vote_breakdown: Json | null
          vote_count: number | null
        }
        Insert: {
          average_rating?: number | null
          boredom_factor?: number
          category: string
          created_at?: string | null
          description: string
          effort_to_augment?: number
          error_reduction_potential?: number
          frequency: string
          hours_per_week?: number
          id?: string
          impact_score?: number
          metadata?: Json | null
          status?: string | null
          task_name: string
          updated_at?: string | null
          user_id?: string | null
          vote_breakdown?: Json | null
          vote_count?: number | null
        }
        Update: {
          average_rating?: number | null
          boredom_factor?: number
          category?: string
          created_at?: string | null
          description?: string
          effort_to_augment?: number
          error_reduction_potential?: number
          frequency?: string
          hours_per_week?: number
          id?: string
          impact_score?: number
          metadata?: Json | null
          status?: string | null
          task_name?: string
          updated_at?: string | null
          user_id?: string | null
          vote_breakdown?: Json | null
          vote_count?: number | null
        }
        Relationships: []
      }
      task_votes: {
        Row: {
          created_at: string | null
          id: string
          task_id: string | null
          user_session: string
          vote_type: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          task_id?: string | null
          user_session: string
          vote_type: string
        }
        Update: {
          created_at?: string | null
          id?: string
          task_id?: string | null
          user_session?: string
          vote_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_votes_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "task_nominations"
            referencedColumns: ["id"]
          },
        ]
      }
      tasks: {
        Row: {
          archived: boolean | null
          boredomFactor: number
          category: string
          completed: boolean | null
          createdAt: string
          description: string | null
          errorReduction: number
          frequency: string
          hoursSavedPerWeek: number
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          archived?: boolean | null
          boredomFactor: number
          category: string
          completed?: boolean | null
          createdAt?: string
          description?: string | null
          errorReduction: number
          frequency: string
          hoursSavedPerWeek: number
          id?: string
          name: string
          updatedAt?: string
        }
        Update: {
          archived?: boolean | null
          boredomFactor?: number
          category?: string
          completed?: boolean | null
          createdAt?: string
          description?: string | null
          errorReduction?: number
          frequency?: string
          hoursSavedPerWeek?: number
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      taxrates: {
        Row: {
          effective_date: string | null
          jurisdiction: string | null
          rate_pct: number | null
          tax_id: string
        }
        Insert: {
          effective_date?: string | null
          jurisdiction?: string | null
          rate_pct?: number | null
          tax_id: string
        }
        Update: {
          effective_date?: string | null
          jurisdiction?: string | null
          rate_pct?: number | null
          tax_id?: string
        }
        Relationships: []
      }
      taxrules: {
        Row: {
          applies_on: string | null
          entity_id: string | null
          entity_type: string | null
          rule_id: string
          tax_id: string | null
        }
        Insert: {
          applies_on?: string | null
          entity_id?: string | null
          entity_type?: string | null
          rule_id: string
          tax_id?: string | null
        }
        Update: {
          applies_on?: string | null
          entity_id?: string | null
          entity_type?: string | null
          rule_id?: string
          tax_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "taxrules_tax_id_fkey"
            columns: ["tax_id"]
            isOneToOne: false
            referencedRelation: "taxrates"
            referencedColumns: ["tax_id"]
          },
        ]
      }
      team: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      team_assessments: {
        Row: {
          additional_details: string | null
          approved_at: string | null
          approved_by: string | null
          assessment_name: string
          campaign_id: string | null
          created_at: string | null
          custom_tasks: Json | null
          department: string
          estimated_timeline_months: number | null
          id: string
          matrix_results: Json | null
          organization_id: string | null
          roi_estimate: number | null
          selected_tasks: Json | null
          status: string | null
          submitted_at: string | null
          total_effort_score: number | null
          total_impact_score: number | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          additional_details?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assessment_name: string
          campaign_id?: string | null
          created_at?: string | null
          custom_tasks?: Json | null
          department: string
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json | null
          organization_id?: string | null
          roi_estimate?: number | null
          selected_tasks?: Json | null
          status?: string | null
          submitted_at?: string | null
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          additional_details?: string | null
          approved_at?: string | null
          approved_by?: string | null
          assessment_name?: string
          campaign_id?: string | null
          created_at?: string | null
          custom_tasks?: Json | null
          department?: string
          estimated_timeline_months?: number | null
          id?: string
          matrix_results?: Json | null
          organization_id?: string | null
          roi_estimate?: number | null
          selected_tasks?: Json | null
          status?: string | null
          submitted_at?: string | null
          total_effort_score?: number | null
          total_impact_score?: number | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_assessments_campaign_id_fkey"
            columns: ["campaign_id"]
            isOneToOne: false
            referencedRelation: "assessment_campaigns"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "team_assessments_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      team_baseline_assessments: {
        Row: {
          assessment_data: Json
          calculated_metrics: Json
          collaboration_score: number | null
          created_at: string
          cross_functional_opportunities: Json | null
          department: string | null
          id: string
          organization_id: string | null
          status: string | null
          team_composition: Json
          team_id: string
          team_maturity_score: number | null
          team_name: string
          total_team_time_recovery: number | null
          updated_at: string
        }
        Insert: {
          assessment_data?: Json
          calculated_metrics?: Json
          collaboration_score?: number | null
          created_at?: string
          cross_functional_opportunities?: Json | null
          department?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
          team_composition?: Json
          team_id: string
          team_maturity_score?: number | null
          team_name: string
          total_team_time_recovery?: number | null
          updated_at?: string
        }
        Update: {
          assessment_data?: Json
          calculated_metrics?: Json
          collaboration_score?: number | null
          created_at?: string
          cross_functional_opportunities?: Json | null
          department?: string | null
          id?: string
          organization_id?: string | null
          status?: string | null
          team_composition?: Json
          team_id?: string
          team_maturity_score?: number | null
          team_name?: string
          total_team_time_recovery?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      team_invitations: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string
          status: string
          team_id: string
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by: string
          status?: string
          team_id: string
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string
          status?: string
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_invitations_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_team_summaries"
            referencedColumns: ["team_id"]
          },
          {
            foreignKeyName: "team_invitations_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "roi_teams"
            referencedColumns: ["id"]
          },
        ]
      }
      team_members: {
        Row: {
          created_at: string | null
          department: string
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          organization_id: string | null
          role: string | null
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string | null
          department: string
          email: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string | null
          department?: string
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          organization_id?: string | null
          role?: string | null
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "team_members_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          customer_id: string | null
          description: string | null
          name: string | null
          region: string | null
          team_id: string
        }
        Insert: {
          customer_id?: string | null
          description?: string | null
          name?: string | null
          region?: string | null
          team_id: string
        }
        Update: {
          customer_id?: string | null
          description?: string | null
          name?: string | null
          region?: string | null
          team_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "teams_customer_id_fkey"
            columns: ["customer_id"]
            isOneToOne: false
            referencedRelation: "customers"
            referencedColumns: ["customer_id"]
          },
        ]
      }
      teamsamples: {
        Row: {
          agent_code: string | null
          agent_name: string | null
          agent_usage_tags: string | null
          ai_readiness_level: number | null
          aps_band: string | null
          clearance_level_required: string | null
          complexity: string | null
          compute_power_per_task: number | null
          deployment_mode: string | null
          estimated_monthly_cost_aud: number | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          human_name: string | null
          integration_complexity: string | null
          org_chart_position: string | null
          partner_network: string | null
          pillar: string | null
          pillar_index: number | null
          row_id: number | null
          sfia_code: string | null
          systems_used: string | null
          task_output_format: string | null
          task_usage_minutes: number | null
          team: string | null
          team_type: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team?: string | null
          team_type?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_name?: string | null
          agent_usage_tags?: string | null
          ai_readiness_level?: number | null
          aps_band?: string | null
          clearance_level_required?: string | null
          complexity?: string | null
          compute_power_per_task?: number | null
          deployment_mode?: string | null
          estimated_monthly_cost_aud?: number | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          human_name?: string | null
          integration_complexity?: string | null
          org_chart_position?: string | null
          partner_network?: string | null
          pillar?: string | null
          pillar_index?: number | null
          row_id?: number | null
          sfia_code?: string | null
          systems_used?: string | null
          task_output_format?: string | null
          task_usage_minutes?: number | null
          team?: string | null
          team_type?: string | null
        }
        Relationships: []
      }
      technical_documents: {
        Row: {
          approval_status: string | null
          author: string | null
          category: string
          created_at: string
          description: string | null
          download_count: number | null
          file_path: string | null
          file_size: number | null
          file_type: string | null
          id: string
          is_featured: boolean | null
          security_classification: string | null
          tags: string[] | null
          title: string
          updated_at: string
          version: string | null
        }
        Insert: {
          approval_status?: string | null
          author?: string | null
          category: string
          created_at?: string
          description?: string | null
          download_count?: number | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_featured?: boolean | null
          security_classification?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          version?: string | null
        }
        Update: {
          approval_status?: string | null
          author?: string | null
          category?: string
          created_at?: string
          description?: string | null
          download_count?: number | null
          file_path?: string | null
          file_size?: number | null
          file_type?: string | null
          id?: string
          is_featured?: boolean | null
          security_classification?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          version?: string | null
        }
        Relationships: []
      }
      tenant_api_usage: {
        Row: {
          business_volume: number | null
          created_at: string
          data_volume: number
          endpoint: string
          id: string
          request_count: number
          tenant_id: string
          usage_date: string
        }
        Insert: {
          business_volume?: number | null
          created_at?: string
          data_volume?: number
          endpoint: string
          id?: string
          request_count?: number
          tenant_id: string
          usage_date?: string
        }
        Update: {
          business_volume?: number | null
          created_at?: string
          data_volume?: number
          endpoint?: string
          id?: string
          request_count?: number
          tenant_id?: string
          usage_date?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_api_usage_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_memberships: {
        Row: {
          created_at: string | null
          id: string
          is_primary: boolean | null
          role: string
          tenant_id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          role?: string
          tenant_id: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_primary?: boolean | null
          role?: string
          tenant_id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_memberships_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_nudge_configs: {
        Row: {
          config: Json
          created_at: string
          custom_footer: string | null
          email_branding: Json | null
          email_template_id: string | null
          header_image_url: string | null
          id: string
          is_active: boolean
          logo_url: string | null
          tenant_id: string
          updated_at: string
        }
        Insert: {
          config?: Json
          created_at?: string
          custom_footer?: string | null
          email_branding?: Json | null
          email_template_id?: string | null
          header_image_url?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          tenant_id: string
          updated_at?: string
        }
        Update: {
          config?: Json
          created_at?: string
          custom_footer?: string | null
          email_branding?: Json | null
          email_template_id?: string | null
          header_image_url?: string | null
          id?: string
          is_active?: boolean
          logo_url?: string | null
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_nudge_configs_email_template_id_fkey"
            columns: ["email_template_id"]
            isOneToOne: false
            referencedRelation: "email_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_pricing_plans: {
        Row: {
          api_base_price: number | null
          api_volume_multiplier: number | null
          billing_interval: string
          created_at: string
          id: string
          intro_expires_at: string | null
          is_intro_price: boolean | null
          plan_name: string
          seat_price: number
          tenant_id: string
          updated_at: string
        }
        Insert: {
          api_base_price?: number | null
          api_volume_multiplier?: number | null
          billing_interval: string
          created_at?: string
          id?: string
          intro_expires_at?: string | null
          is_intro_price?: boolean | null
          plan_name: string
          seat_price: number
          tenant_id: string
          updated_at?: string
        }
        Update: {
          api_base_price?: number | null
          api_volume_multiplier?: number | null
          billing_interval?: string
          created_at?: string
          id?: string
          intro_expires_at?: string | null
          is_intro_price?: boolean | null
          plan_name?: string
          seat_price?: number
          tenant_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "tenant_pricing_plans_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenant_seat_allocations: {
        Row: {
          allocated_seats: number
          created_at: string
          id: string
          tenant_id: string
          updated_at: string
          used_seats: number
        }
        Insert: {
          allocated_seats?: number
          created_at?: string
          id?: string
          tenant_id: string
          updated_at?: string
          used_seats?: number
        }
        Update: {
          allocated_seats?: number
          created_at?: string
          id?: string
          tenant_id?: string
          updated_at?: string
          used_seats?: number
        }
        Relationships: [
          {
            foreignKeyName: "tenant_seat_allocations_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      tenants: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          logo_url: string | null
          name: string
          primary_color: string | null
          secondary_color: string | null
          slug: string
          updated_at: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name: string
          primary_color?: string | null
          secondary_color?: string | null
          slug: string
          updated_at?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          logo_url?: string | null
          name?: string
          primary_color?: string | null
          secondary_color?: string | null
          slug?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      tender_clusters: {
        Row: {
          created_at: string | null
          id: string
          tenders: Json
          topic: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          tenders: Json
          topic: string
        }
        Update: {
          created_at?: string | null
          id?: string
          tenders?: Json
          topic?: string
        }
        Relationships: []
      }
      tender_data_cache: {
        Row: {
          company_data: Json
          expiry: string | null
          id: string
          metadata: Json | null
          source: string | null
          tender_data: Json
          timestamp: string
        }
        Insert: {
          company_data?: Json
          expiry?: string | null
          id?: string
          metadata?: Json | null
          source?: string | null
          tender_data?: Json
          timestamp?: string
        }
        Update: {
          company_data?: Json
          expiry?: string | null
          id?: string
          metadata?: Json | null
          source?: string | null
          tender_data?: Json
          timestamp?: string
        }
        Relationships: []
      }
      tender_replays: {
        Row: {
          coaching_notes: Json | null
          created_at: string | null
          id: string
          new_team: Json
          original_outcome: string
          re_recommended: boolean | null
          tender_id: string
        }
        Insert: {
          coaching_notes?: Json | null
          created_at?: string | null
          id?: string
          new_team: Json
          original_outcome: string
          re_recommended?: boolean | null
          tender_id: string
        }
        Update: {
          coaching_notes?: Json | null
          created_at?: string | null
          id?: string
          new_team?: Json
          original_outcome?: string
          re_recommended?: boolean | null
          tender_id?: string
        }
        Relationships: []
      }
      "top 100": {
        Row: {
          "12mo_TCO": number | null
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          agent_coverage_score: number | null
          Agent_Intelligence_Type: string | null
          agent_rank_score: number | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: number | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: number | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: number | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: Json | null
          consultant_hourly_rate: number | null
          contractor_hourly_rate: number | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: number | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          Deployment_Rank: number | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: number | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: boolean | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: number | null
          human_delivery_cost: number | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: number | null
          micro_role_fragments: string | null
          "Monthly Cost": number | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          Output_Unit_Cost: number | null
          overall_match_score: number | null
          Performance_Efficiency_Ratio: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: number | null
          personality_n: number | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_clearance: string | null
          recommended_configuration: string | null
          Recommended_Delivery_Model: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          regulatory_flag: number | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: number | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": number | null
          sfia_category: string | null
          sfia_level: number | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: number | null
        }
        Insert: {
          "12mo_TCO"?: number | null
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          agent_coverage_score?: number | null
          Agent_Intelligence_Type?: string | null
          agent_rank_score?: number | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: number | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: number | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: number | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: Json | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: number | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          Deployment_Rank?: number | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: number | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: number | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          Output_Unit_Cost?: number | null
          overall_match_score?: number | null
          Performance_Efficiency_Ratio?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: number | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_clearance?: string | null
          recommended_configuration?: string | null
          Recommended_Delivery_Model?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          regulatory_flag?: number | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: number | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: number | null
          sfia_category?: string | null
          sfia_level?: number | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: number | null
        }
        Update: {
          "12mo_TCO"?: number | null
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          agent_coverage_score?: number | null
          Agent_Intelligence_Type?: string | null
          agent_rank_score?: number | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: number | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: number | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: number | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: Json | null
          consultant_hourly_rate?: number | null
          contractor_hourly_rate?: number | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: number | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          Deployment_Rank?: number | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: number | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: boolean | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: number | null
          human_delivery_cost?: number | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: number | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: number | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          Output_Unit_Cost?: number | null
          overall_match_score?: number | null
          Performance_Efficiency_Ratio?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: number | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_clearance?: string | null
          recommended_configuration?: string | null
          Recommended_Delivery_Model?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          regulatory_flag?: number | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: number | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: number | null
          sfia_category?: string | null
          sfia_level?: number | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: number | null
        }
        Relationships: []
      }
      top50_organ_mapping: {
        Row: {
          "Core idea": string | null
          Name: string | null
          "Organ lobe": string | null
          "Primary domain": string | null
          "Shift with agentic AI": string | null
          "Use in practice": string | null
        }
        Insert: {
          "Core idea"?: string | null
          Name?: string | null
          "Organ lobe"?: string | null
          "Primary domain"?: string | null
          "Shift with agentic AI"?: string | null
          "Use in practice"?: string | null
        }
        Update: {
          "Core idea"?: string | null
          Name?: string | null
          "Organ lobe"?: string | null
          "Primary domain"?: string | null
          "Shift with agentic AI"?: string | null
          "Use in practice"?: string | null
        }
        Relationships: []
      }
      training_modules: {
        Row: {
          category: string
          content_url: string | null
          created_at: string
          description: string | null
          difficulty_level: string | null
          duration_minutes: number
          id: string
          is_active: boolean | null
          learning_objectives: string[] | null
          module_code: string
          prerequisites: string[] | null
          tags: string[] | null
          title: string
          updated_at: string
        }
        Insert: {
          category: string
          content_url?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean | null
          learning_objectives?: string[] | null
          module_code: string
          prerequisites?: string[] | null
          tags?: string[] | null
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content_url?: string | null
          created_at?: string
          description?: string | null
          difficulty_level?: string | null
          duration_minutes?: number
          id?: string
          is_active?: boolean | null
          learning_objectives?: string[] | null
          module_code?: string
          prerequisites?: string[] | null
          tags?: string[] | null
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      training_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          module_id: string
          progress_percent: number
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          module_id: string
          progress_percent?: number
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          module_id?: string
          progress_percent?: number
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      transformation_metrics: {
        Row: {
          ai_confidence_level: number | null
          candidates_processed: number | null
          created_at: string | null
          customer_satisfaction_score: number | null
          id: string
          metric_date: string
          placements_made: number | null
          recruiter_id: string | null
          revenue_generated: number | null
          time_saved_hours: number | null
        }
        Insert: {
          ai_confidence_level?: number | null
          candidates_processed?: number | null
          created_at?: string | null
          customer_satisfaction_score?: number | null
          id?: string
          metric_date: string
          placements_made?: number | null
          recruiter_id?: string | null
          revenue_generated?: number | null
          time_saved_hours?: number | null
        }
        Update: {
          ai_confidence_level?: number | null
          candidates_processed?: number | null
          created_at?: string | null
          customer_satisfaction_score?: number | null
          id?: string
          metric_date?: string
          placements_made?: number | null
          recruiter_id?: string | null
          revenue_generated?: number | null
          time_saved_hours?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "transformation_metrics_recruiter_id_fkey"
            columns: ["recruiter_id"]
            isOneToOne: false
            referencedRelation: "ai_recruiter_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      transformation_milestones: {
        Row: {
          achieved_date: string | null
          actual_results: Json | null
          created_at: string
          description: string | null
          id: string
          impact_measurement: Json | null
          milestone_name: string
          milestone_type: string
          organization_id: string
          success_criteria: Json | null
          target_date: string | null
          updated_at: string
        }
        Insert: {
          achieved_date?: string | null
          actual_results?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          impact_measurement?: Json | null
          milestone_name: string
          milestone_type: string
          organization_id: string
          success_criteria?: Json | null
          target_date?: string | null
          updated_at?: string
        }
        Update: {
          achieved_date?: string | null
          actual_results?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          impact_measurement?: Json | null
          milestone_name?: string
          milestone_type?: string
          organization_id?: string
          success_criteria?: Json | null
          target_date?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      troy_consultations: {
        Row: {
          assessment_data: Json | null
          cart_items: Json | null
          consultation_type: string
          created_at: string
          department: string | null
          email: string
          id: string
          message: string | null
          name: string
          notes: string | null
          role: string | null
          scheduled_at: string | null
          status: string | null
          updated_at: string
          user_id: string | null
        }
        Insert: {
          assessment_data?: Json | null
          cart_items?: Json | null
          consultation_type: string
          created_at?: string
          department?: string | null
          email: string
          id?: string
          message?: string | null
          name: string
          notes?: string | null
          role?: string | null
          scheduled_at?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          assessment_data?: Json | null
          cart_items?: Json | null
          consultation_type?: string
          created_at?: string
          department?: string | null
          email?: string
          id?: string
          message?: string | null
          name?: string
          notes?: string | null
          role?: string | null
          scheduled_at?: string | null
          status?: string | null
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      tyre_fitment_data: {
        Row: {
          created_at: string
          dot_code: string | null
          id: string
          make: string
          model: string
          oem_data: Json | null
          tyre_size: string
          updated_at: string
          year_range: string | null
        }
        Insert: {
          created_at?: string
          dot_code?: string | null
          id?: string
          make: string
          model: string
          oem_data?: Json | null
          tyre_size: string
          updated_at?: string
          year_range?: string | null
        }
        Update: {
          created_at?: string
          dot_code?: string | null
          id?: string
          make?: string
          model?: string
          oem_data?: Json | null
          tyre_size?: string
          updated_at?: string
          year_range?: string | null
        }
        Relationships: []
      }
      tyre_lifecycle_events: {
        Row: {
          created_at: string
          event_date: string
          event_type: string
          id: string
          location_data: Json | null
          notes: string | null
          recorded_by: string | null
          session_id: string | null
          tyre_registration_id: string
        }
        Insert: {
          created_at?: string
          event_date?: string
          event_type: string
          id?: string
          location_data?: Json | null
          notes?: string | null
          recorded_by?: string | null
          session_id?: string | null
          tyre_registration_id: string
        }
        Update: {
          created_at?: string
          event_date?: string
          event_type?: string
          id?: string
          location_data?: Json | null
          notes?: string | null
          recorded_by?: string | null
          session_id?: string | null
          tyre_registration_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "tyre_lifecycle_events_tyre_registration_id_fkey"
            columns: ["tyre_registration_id"]
            isOneToOne: false
            referencedRelation: "tyre_registrations"
            referencedColumns: ["id"]
          },
        ]
      }
      tyre_registrations: {
        Row: {
          brand: string | null
          business_id: string | null
          created_at: string
          dot_code: string | null
          id: string
          install_date: string | null
          location_coordinates: unknown | null
          location_postcode: string | null
          location_state: string | null
          manufacture_date: string | null
          qr_code_url: string | null
          session_id: string | null
          size: string | null
          status: string | null
          tyre_serial: string
          updated_at: string
          vehicle_registration: string | null
        }
        Insert: {
          brand?: string | null
          business_id?: string | null
          created_at?: string
          dot_code?: string | null
          id?: string
          install_date?: string | null
          location_coordinates?: unknown | null
          location_postcode?: string | null
          location_state?: string | null
          manufacture_date?: string | null
          qr_code_url?: string | null
          session_id?: string | null
          size?: string | null
          status?: string | null
          tyre_serial: string
          updated_at?: string
          vehicle_registration?: string | null
        }
        Update: {
          brand?: string | null
          business_id?: string | null
          created_at?: string
          dot_code?: string | null
          id?: string
          install_date?: string | null
          location_coordinates?: unknown | null
          location_postcode?: string | null
          location_state?: string | null
          manufacture_date?: string | null
          qr_code_url?: string | null
          session_id?: string | null
          size?: string | null
          status?: string | null
          tyre_serial?: string
          updated_at?: string
          vehicle_registration?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tyre_registrations_business_id_fkey"
            columns: ["business_id"]
            isOneToOne: false
            referencedRelation: "lrs_businesses"
            referencedColumns: ["id"]
          },
        ]
      }
      universal_assessment_responses: {
        Row: {
          ai_readiness_score: number | null
          created_at: string
          efficiency_score: number | null
          id: string
          innovation_score: number | null
          overall_score: number | null
          recommendations: Json | null
          responses: Json
          role_code: string
          session_id: string
          updated_at: string
        }
        Insert: {
          ai_readiness_score?: number | null
          created_at?: string
          efficiency_score?: number | null
          id?: string
          innovation_score?: number | null
          overall_score?: number | null
          recommendations?: Json | null
          responses: Json
          role_code: string
          session_id: string
          updated_at?: string
        }
        Update: {
          ai_readiness_score?: number | null
          created_at?: string
          efficiency_score?: number | null
          id?: string
          innovation_score?: number | null
          overall_score?: number | null
          recommendations?: Json | null
          responses?: Json
          role_code?: string
          session_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      usagemetrics: {
        Row: {
          agent_code: string | null
          hours_used: number | null
          period_end: string | null
          period_start: string | null
          tasks_processed: number | null
          team_id: string | null
          usage_id: number
        }
        Insert: {
          agent_code?: string | null
          hours_used?: number | null
          period_end?: string | null
          period_start?: string | null
          tasks_processed?: number | null
          team_id?: string | null
          usage_id?: number
        }
        Update: {
          agent_code?: string | null
          hours_used?: number | null
          period_end?: string | null
          period_start?: string | null
          tasks_processed?: number | null
          team_id?: string | null
          usage_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "usagemetrics_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["team_id"]
          },
        ]
      }
      use_case_agent_mapping: {
        Row: {
          agent_code: string
          coverage_percentage: number | null
          created_at: string | null
          id: string
          primary_agent: boolean | null
          required_customization: string | null
          use_case_id: string | null
        }
        Insert: {
          agent_code: string
          coverage_percentage?: number | null
          created_at?: string | null
          id?: string
          primary_agent?: boolean | null
          required_customization?: string | null
          use_case_id?: string | null
        }
        Update: {
          agent_code?: string
          coverage_percentage?: number | null
          created_at?: string | null
          id?: string
          primary_agent?: boolean | null
          required_customization?: string | null
          use_case_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "use_case_agent_mapping_use_case_id_fkey"
            columns: ["use_case_id"]
            isOneToOne: false
            referencedRelation: "use_cases"
            referencedColumns: ["id"]
          },
        ]
      }
      use_cases: {
        Row: {
          category: string
          complexity_tier: string
          created_at: string | null
          description: string
          estimated_monthly_hours: number
          estimated_setup_time: string
          id: string
          industry_tags: string[] | null
          name: string
          required_integrations: string[] | null
          updated_at: string | null
        }
        Insert: {
          category: string
          complexity_tier: string
          created_at?: string | null
          description: string
          estimated_monthly_hours: number
          estimated_setup_time: string
          id?: string
          industry_tags?: string[] | null
          name: string
          required_integrations?: string[] | null
          updated_at?: string | null
        }
        Update: {
          category?: string
          complexity_tier?: string
          created_at?: string | null
          description?: string
          estimated_monthly_hours?: number
          estimated_setup_time?: string
          id?: string
          industry_tags?: string[] | null
          name?: string
          required_integrations?: string[] | null
          updated_at?: string | null
        }
        Relationships: []
      }
      user_baseline_assessments: {
        Row: {
          assessment_data: Json
          assessment_name: string
          automation_readiness_score: number | null
          calculated_metrics: Json
          company_size: string | null
          created_at: string
          highest_impact_area: string | null
          id: string
          industry_context: string | null
          quick_win_count: number | null
          role_category: string
          seniority_level: string
          status: string | null
          total_weekly_time_recovery: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assessment_data?: Json
          assessment_name: string
          automation_readiness_score?: number | null
          calculated_metrics?: Json
          company_size?: string | null
          created_at?: string
          highest_impact_area?: string | null
          id?: string
          industry_context?: string | null
          quick_win_count?: number | null
          role_category: string
          seniority_level: string
          status?: string | null
          total_weekly_time_recovery?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assessment_data?: Json
          assessment_name?: string
          automation_readiness_score?: number | null
          calculated_metrics?: Json
          company_size?: string | null
          created_at?: string
          highest_impact_area?: string | null
          id?: string
          industry_context?: string | null
          quick_win_count?: number | null
          role_category?: string
          seniority_level?: string
          status?: string | null
          total_weekly_time_recovery?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_bundle_selections: {
        Row: {
          bundle_ids: Json
          created_at: string | null
          id: string
          metadata: Json | null
          selection_name: string
          updated_at: string | null
          user_id: string | null
        }
        Insert: {
          bundle_ids: Json
          created_at?: string | null
          id?: string
          metadata?: Json | null
          selection_name: string
          updated_at?: string | null
          user_id?: string | null
        }
        Update: {
          bundle_ids?: Json
          created_at?: string | null
          id?: string
          metadata?: Json | null
          selection_name?: string
          updated_at?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_competencies: {
        Row: {
          certifications: Json | null
          competency_area: string
          created_at: string | null
          current_level: number | null
          evidence_points: Json | null
          id: string
          last_assessment_date: string | null
          next_milestone_target: number | null
          tools_unlocked: string[] | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          certifications?: Json | null
          competency_area: string
          created_at?: string | null
          current_level?: number | null
          evidence_points?: Json | null
          id?: string
          last_assessment_date?: string | null
          next_milestone_target?: number | null
          tools_unlocked?: string[] | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          certifications?: Json | null
          competency_area?: string
          created_at?: string | null
          current_level?: number | null
          evidence_points?: Json | null
          id?: string
          last_assessment_date?: string | null
          next_milestone_target?: number | null
          tools_unlocked?: string[] | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_interaction_analytics: {
        Row: {
          agent_involved: string | null
          created_at: string
          duration_seconds: number | null
          id: string
          interaction_type: string
          knowledge_topics: string[] | null
          satisfaction_score: number | null
          session_id: string | null
          user_id: string | null
        }
        Insert: {
          agent_involved?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          interaction_type: string
          knowledge_topics?: string[] | null
          satisfaction_score?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Update: {
          agent_involved?: string | null
          created_at?: string
          duration_seconds?: number | null
          id?: string
          interaction_type?: string
          knowledge_topics?: string[] | null
          satisfaction_score?: number | null
          session_id?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      user_journey_profiles: {
        Row: {
          assessment_profile: Json
          competency_level: number | null
          created_at: string | null
          current_path_id: string | null
          goals: Json | null
          id: string
          industry_sector: string | null
          journey_stage: string | null
          learning_style: string | null
          preferred_pace: string | null
          role_category: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          assessment_profile?: Json
          competency_level?: number | null
          created_at?: string | null
          current_path_id?: string | null
          goals?: Json | null
          id?: string
          industry_sector?: string | null
          journey_stage?: string | null
          learning_style?: string | null
          preferred_pace?: string | null
          role_category: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          assessment_profile?: Json
          competency_level?: number | null
          created_at?: string | null
          current_path_id?: string | null
          goals?: Json | null
          id?: string
          industry_sector?: string | null
          journey_stage?: string | null
          learning_style?: string | null
          preferred_pace?: string | null
          role_category?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_journey_profiles_current_path_id_fkey"
            columns: ["current_path_id"]
            isOneToOne: false
            referencedRelation: "learning_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      user_language_preferences: {
        Row: {
          created_at: string | null
          cultural_context: string | null
          id: string
          preferred_language: string
          secondary_languages: string[] | null
          updated_at: string | null
          user_session: string
          voice_preference: string | null
        }
        Insert: {
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          preferred_language?: string
          secondary_languages?: string[] | null
          updated_at?: string | null
          user_session: string
          voice_preference?: string | null
        }
        Update: {
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          preferred_language?: string
          secondary_languages?: string[] | null
          updated_at?: string | null
          user_session?: string
          voice_preference?: string | null
        }
        Relationships: []
      }
      user_lead_scores: {
        Row: {
          assessments_completed: number | null
          calculator_usage_count: number | null
          conversion_probability: number | null
          created_at: string
          engagement_score: number | null
          free_agents_accessed: boolean | null
          id: string
          last_activity: string | null
          lead_status: string | null
          resources_downloaded: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          assessments_completed?: number | null
          calculator_usage_count?: number | null
          conversion_probability?: number | null
          created_at?: string
          engagement_score?: number | null
          free_agents_accessed?: boolean | null
          id?: string
          last_activity?: string | null
          lead_status?: string | null
          resources_downloaded?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          assessments_completed?: number | null
          calculator_usage_count?: number | null
          conversion_probability?: number | null
          created_at?: string
          engagement_score?: number | null
          free_agents_accessed?: boolean | null
          id?: string
          last_activity?: string | null
          lead_status?: string | null
          resources_downloaded?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_learning_progress: {
        Row: {
          completion_date: string | null
          created_at: string
          id: string
          learning_module_id: string | null
          learning_path_id: string | null
          notes: string | null
          progress_percentage: number
          quiz_scores: Json | null
          status: string
          time_spent_minutes: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completion_date?: string | null
          created_at?: string
          id?: string
          learning_module_id?: string | null
          learning_path_id?: string | null
          notes?: string | null
          progress_percentage?: number
          quiz_scores?: Json | null
          status?: string
          time_spent_minutes?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completion_date?: string | null
          created_at?: string
          id?: string
          learning_module_id?: string | null
          learning_path_id?: string | null
          notes?: string | null
          progress_percentage?: number
          quiz_scores?: Json | null
          status?: string
          time_spent_minutes?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_learning_progress_learning_module_id_fkey"
            columns: ["learning_module_id"]
            isOneToOne: false
            referencedRelation: "learning_modules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_learning_progress_learning_path_id_fkey"
            columns: ["learning_path_id"]
            isOneToOne: false
            referencedRelation: "learning_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      user_notification_preferences: {
        Row: {
          created_at: string
          email_notifications: boolean | null
          high_value_alerts: boolean | null
          id: string
          processing_updates: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_notifications?: boolean | null
          high_value_alerts?: boolean | null
          id?: string
          processing_updates?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_notifications?: boolean | null
          high_value_alerts?: boolean | null
          id?: string
          processing_updates?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_path_progress: {
        Row: {
          adaptive_adjustments: Json | null
          completed_at: string | null
          completion_percentage: number | null
          created_at: string | null
          current_module_id: string | null
          id: string
          last_accessed_at: string | null
          modules_completed: string[] | null
          path_id: string
          performance_metrics: Json | null
          started_at: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          adaptive_adjustments?: Json | null
          completed_at?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          current_module_id?: string | null
          id?: string
          last_accessed_at?: string | null
          modules_completed?: string[] | null
          path_id: string
          performance_metrics?: Json | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          adaptive_adjustments?: Json | null
          completed_at?: string | null
          completion_percentage?: number | null
          created_at?: string | null
          current_module_id?: string | null
          id?: string
          last_accessed_at?: string | null
          modules_completed?: string[] | null
          path_id?: string
          performance_metrics?: Json | null
          started_at?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_path_progress_path_id_fkey"
            columns: ["path_id"]
            isOneToOne: false
            referencedRelation: "learning_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      user_preferences: {
        Row: {
          created_at: string
          favorite_categories: string[] | null
          id: string
          learning_path: string | null
          notifications_enabled: boolean | null
          preferred_difficulty: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          favorite_categories?: string[] | null
          id?: string
          learning_path?: string | null
          notifications_enabled?: boolean | null
          preferred_difficulty?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          favorite_categories?: string[] | null
          id?: string
          learning_path?: string | null
          notifications_enabled?: boolean | null
          preferred_difficulty?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_recommendations: {
        Row: {
          context_tags: string[] | null
          created_at: string | null
          expires_at: string | null
          id: string
          reasoning: Json | null
          recommendation_type: string
          relevance_score: number | null
          status: string | null
          target_item_id: string
          target_item_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          context_tags?: string[] | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          reasoning?: Json | null
          recommendation_type: string
          relevance_score?: number | null
          status?: string | null
          target_item_id: string
          target_item_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          context_tags?: string[] | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          reasoning?: Json | null
          recommendation_type?: string
          relevance_score?: number | null
          status?: string | null
          target_item_id?: string
          target_item_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string | null
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          conversion_stage: string | null
          created_at: string
          id: string
          metadata: Json | null
          referral_source: string | null
          resource_accessed: string
          session_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          conversion_stage?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          referral_source?: string | null
          resource_accessed: string
          session_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          conversion_stage?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          referral_source?: string | null
          resource_accessed?: string
          session_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_task_selections: {
        Row: {
          assessment_id: string
          complexity_rating: number
          created_at: string
          id: string
          implementation_phase: string | null
          quick_win_index: number | null
          roi_score: number | null
          skills_required: Json | null
          task_category: string
          task_name: string
          technology_stack: Json | null
          time_saved_estimate: number
          transformation_potential: number | null
          updated_at: string
          value_rating: number
        }
        Insert: {
          assessment_id: string
          complexity_rating: number
          created_at?: string
          id?: string
          implementation_phase?: string | null
          quick_win_index?: number | null
          roi_score?: number | null
          skills_required?: Json | null
          task_category: string
          task_name: string
          technology_stack?: Json | null
          time_saved_estimate: number
          transformation_potential?: number | null
          updated_at?: string
          value_rating: number
        }
        Update: {
          assessment_id?: string
          complexity_rating?: number
          created_at?: string
          id?: string
          implementation_phase?: string | null
          quick_win_index?: number | null
          roi_score?: number | null
          skills_required?: Json | null
          task_category?: string
          task_name?: string
          technology_stack?: Json | null
          time_saved_estimate?: number
          transformation_potential?: number | null
          updated_at?: string
          value_rating?: number
        }
        Relationships: [
          {
            foreignKeyName: "user_task_selections_assessment_id_fkey"
            columns: ["assessment_id"]
            isOneToOne: false
            referencedRelation: "user_baseline_assessments"
            referencedColumns: ["id"]
          },
        ]
      }
      user_training_progress: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          last_accessed: string | null
          module_id: string
          progress_percentage: number | null
          score: number | null
          status: string | null
          time_spent_minutes: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed?: string | null
          module_id: string
          progress_percentage?: number | null
          score?: number | null
          status?: string | null
          time_spent_minutes?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed?: string | null
          module_id?: string
          progress_percentage?: number | null
          score?: number | null
          status?: string | null
          time_spent_minutes?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_training_progress_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "training_modules"
            referencedColumns: ["id"]
          },
        ]
      }
      utilization_fact: {
        Row: {
          agent_code: string
          created_at: string
          id: string
          month: string
          project_requests: number | null
          utilization_pct: number
        }
        Insert: {
          agent_code: string
          created_at?: string
          id?: string
          month: string
          project_requests?: number | null
          utilization_pct: number
        }
        Update: {
          agent_code?: string
          created_at?: string
          id?: string
          month?: string
          project_requests?: number | null
          utilization_pct?: number
        }
        Relationships: []
      }
      variations: {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: number | null
          Estimated_Price: number | null
          Estimated_Profit: number | null
          Role_Name: string | null
          Tool: string | null
          WeightedScore: number | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: number | null
          Estimated_Price?: number | null
          Estimated_Profit?: number | null
          Role_Name?: string | null
          Tool?: string | null
          WeightedScore?: number | null
        }
        Relationships: []
      }
      vignette_agentic_ai_progress: {
        Row: {
          concerns_addressed: Json | null
          created_at: string | null
          discussion_points: Json | null
          id: string
          journey_stage: string
          next_steps: Json | null
          readiness_score: number | null
          updated_at: string | null
          user_session: string
          vignette_id: string
        }
        Insert: {
          concerns_addressed?: Json | null
          created_at?: string | null
          discussion_points?: Json | null
          id?: string
          journey_stage: string
          next_steps?: Json | null
          readiness_score?: number | null
          updated_at?: string | null
          user_session: string
          vignette_id: string
        }
        Update: {
          concerns_addressed?: Json | null
          created_at?: string | null
          discussion_points?: Json | null
          id?: string
          journey_stage?: string
          next_steps?: Json | null
          readiness_score?: number | null
          updated_at?: string | null
          user_session?: string
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_chat_messages: {
        Row: {
          chat_session_id: string | null
          created_at: string | null
          cultural_context: Json | null
          id: string
          message_metadata: Json | null
          message_type: string
          original_language: string
          original_message: string
          target_language: string | null
          translated_message: string | null
          voice_audio_url: string | null
        }
        Insert: {
          chat_session_id?: string | null
          created_at?: string | null
          cultural_context?: Json | null
          id?: string
          message_metadata?: Json | null
          message_type: string
          original_language?: string
          original_message: string
          target_language?: string | null
          translated_message?: string | null
          voice_audio_url?: string | null
        }
        Update: {
          chat_session_id?: string | null
          created_at?: string | null
          cultural_context?: Json | null
          id?: string
          message_metadata?: Json | null
          message_type?: string
          original_language?: string
          original_message?: string
          target_language?: string | null
          translated_message?: string | null
          voice_audio_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vignette_chat_messages_chat_session_id_fkey"
            columns: ["chat_session_id"]
            isOneToOne: false
            referencedRelation: "vignette_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      vignette_chat_sessions: {
        Row: {
          chat_context: Json | null
          created_at: string | null
          cultural_adaptation: Json | null
          id: string
          language_code: string
          persona_name: string | null
          session_status: string | null
          translation_enabled: boolean | null
          updated_at: string | null
          user_session: string
          vignette_id: string | null
          voice_enabled: boolean | null
        }
        Insert: {
          chat_context?: Json | null
          created_at?: string | null
          cultural_adaptation?: Json | null
          id?: string
          language_code?: string
          persona_name?: string | null
          session_status?: string | null
          translation_enabled?: boolean | null
          updated_at?: string | null
          user_session: string
          vignette_id?: string | null
          voice_enabled?: boolean | null
        }
        Update: {
          chat_context?: Json | null
          created_at?: string | null
          cultural_adaptation?: Json | null
          id?: string
          language_code?: string
          persona_name?: string | null
          session_status?: string | null
          translation_enabled?: boolean | null
          updated_at?: string | null
          user_session?: string
          vignette_id?: string | null
          voice_enabled?: boolean | null
        }
        Relationships: []
      }
      vignette_chats: {
        Row: {
          created_at: string
          id: number
          sender: string
          session_id: string
          text: string
          vignette_id: string
        }
        Insert: {
          created_at?: string
          id?: number
          sender: string
          session_id: string
          text: string
          vignette_id: string
        }
        Update: {
          created_at?: string
          id?: number
          sender?: string
          session_id?: string
          text?: string
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_comment_votes: {
        Row: {
          comment_id: string
          created_at: string
          id: string
          user_session: string
          vote_value: number
        }
        Insert: {
          comment_id: string
          created_at?: string
          id?: string
          user_session: string
          vote_value: number
        }
        Update: {
          comment_id?: string
          created_at?: string
          id?: string
          user_session?: string
          vote_value?: number
        }
        Relationships: [
          {
            foreignKeyName: "vignette_comment_votes_comment_id_fkey"
            columns: ["comment_id"]
            isOneToOne: false
            referencedRelation: "vignette_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      vignette_comments: {
        Row: {
          author_name: string | null
          comment_text: string
          created_at: string
          id: string
          is_flagged: boolean | null
          is_moderated: boolean | null
          like_count: number | null
          parent_comment_id: string | null
          updated_at: string
          user_session: string
          vignette_id: string
        }
        Insert: {
          author_name?: string | null
          comment_text: string
          created_at?: string
          id?: string
          is_flagged?: boolean | null
          is_moderated?: boolean | null
          like_count?: number | null
          parent_comment_id?: string | null
          updated_at?: string
          user_session: string
          vignette_id: string
        }
        Update: {
          author_name?: string | null
          comment_text?: string
          created_at?: string
          id?: string
          is_flagged?: boolean | null
          is_moderated?: boolean | null
          like_count?: number | null
          parent_comment_id?: string | null
          updated_at?: string
          user_session?: string
          vignette_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "vignette_comments_parent_comment_id_fkey"
            columns: ["parent_comment_id"]
            isOneToOne: false
            referencedRelation: "vignette_comments"
            referencedColumns: ["id"]
          },
        ]
      }
      vignette_images: {
        Row: {
          alt_text: string | null
          created_at: string | null
          id: string
          image_description: string | null
          image_title: string | null
          image_url: string
          is_hero_image: boolean | null
          scenario_type: string | null
          updated_at: string | null
          usage_context: string | null
          vignette_id: string
        }
        Insert: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          image_description?: string | null
          image_title?: string | null
          image_url: string
          is_hero_image?: boolean | null
          scenario_type?: string | null
          updated_at?: string | null
          usage_context?: string | null
          vignette_id: string
        }
        Update: {
          alt_text?: string | null
          created_at?: string | null
          id?: string
          image_description?: string | null
          image_title?: string | null
          image_url?: string
          is_hero_image?: boolean | null
          scenario_type?: string | null
          updated_at?: string | null
          usage_context?: string | null
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_data: Json | null
          interaction_type: string
          updated_at: string
          user_session: string
          vignette_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_data?: Json | null
          interaction_type: string
          updated_at?: string
          user_session: string
          vignette_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_data?: Json | null
          interaction_type?: string
          updated_at?: string
          user_session?: string
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_language_preferences: {
        Row: {
          auto_translate: boolean | null
          created_at: string
          id: string
          preferred_languages: string[] | null
          updated_at: string
          user_session: string
        }
        Insert: {
          auto_translate?: boolean | null
          created_at?: string
          id?: string
          preferred_languages?: string[] | null
          updated_at?: string
          user_session: string
        }
        Update: {
          auto_translate?: boolean | null
          created_at?: string
          id?: string
          preferred_languages?: string[] | null
          updated_at?: string
          user_session?: string
        }
        Relationships: []
      }
      vignette_multilingual_content: {
        Row: {
          achieved_outputs: Json | null
          ai_solution_detailed: string | null
          created_at: string | null
          cultural_context: string | null
          id: string
          key_drivers: Json | null
          language_code: string
          outcomes_detailed: string | null
          scenario_context: string | null
          strategic_question: string | null
          strategic_recommendations: Json | null
          title: string | null
          updated_at: string | null
          value_delivered: Json | null
          vignette_id: string
        }
        Insert: {
          achieved_outputs?: Json | null
          ai_solution_detailed?: string | null
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          key_drivers?: Json | null
          language_code: string
          outcomes_detailed?: string | null
          scenario_context?: string | null
          strategic_question?: string | null
          strategic_recommendations?: Json | null
          title?: string | null
          updated_at?: string | null
          value_delivered?: Json | null
          vignette_id: string
        }
        Update: {
          achieved_outputs?: Json | null
          ai_solution_detailed?: string | null
          created_at?: string | null
          cultural_context?: string | null
          id?: string
          key_drivers?: Json | null
          language_code?: string
          outcomes_detailed?: string | null
          scenario_context?: string | null
          strategic_question?: string | null
          strategic_recommendations?: Json | null
          title?: string | null
          updated_at?: string | null
          value_delivered?: Json | null
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_ratings: {
        Row: {
          created_at: string | null
          feedback_text: string | null
          id: string
          rating_score: number
          updated_at: string | null
          user_session: string
          vignette_id: string
        }
        Insert: {
          created_at?: string | null
          feedback_text?: string | null
          id?: string
          rating_score: number
          updated_at?: string | null
          user_session: string
          vignette_id: string
        }
        Update: {
          created_at?: string | null
          feedback_text?: string | null
          id?: string
          rating_score?: number
          updated_at?: string | null
          user_session?: string
          vignette_id?: string
        }
        Relationships: []
      }
      vignette_votes: {
        Row: {
          created_at: string | null
          id: string
          updated_at: string | null
          user_session: string
          vignette_id: string
          vote_type: string
          vote_value: number
        }
        Insert: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_session: string
          vignette_id: string
          vote_type: string
          vote_value: number
        }
        Update: {
          created_at?: string | null
          id?: string
          updated_at?: string | null
          user_session?: string
          vignette_id?: string
          vote_type?: string
          vote_value?: number
        }
        Relationships: []
      }
      vignettes: {
        Row: {
          ai_solution: string | null
          aps_level: string | null
          author: string
          average_rating: number | null
          category: string | null
          challenge_description: string | null
          compliance_score: number | null
          content: string
          created_at: string
          cultural_background: string | null
          department: string | null
          description: string | null
          difficulty_level: string | null
          engagement_metrics: Json | null
          engagement_score: number | null
          estimated_reading_time: number | null
          excerpt: string
          external_api_id: string | null
          featured: boolean | null
          id: string
          impact_metrics: Json | null
          impact_score: number | null
          key_drivers: string[] | null
          languages: string[] | null
          last_synced: string | null
          leader_avatar_url: string | null
          leader_bio: string | null
          leader_department: string | null
          leader_name: string | null
          leader_title: string | null
          outcome_description: string | null
          persona_age: number | null
          persona_name: string | null
          persona_role: string | null
          read_time: number
          risk_factors: string[] | null
          scenario_context: string | null
          sentiment: string | null
          seo_description: string | null
          slug: string
          social_shares: number | null
          status: string
          strategic_recommendations: string[] | null
          tags: string[]
          thumbnail_url: string | null
          title: string
          total_votes: number | null
          updated_at: string
          vote_breakdown: Json | null
        }
        Insert: {
          ai_solution?: string | null
          aps_level?: string | null
          author?: string
          average_rating?: number | null
          category?: string | null
          challenge_description?: string | null
          compliance_score?: number | null
          content: string
          created_at?: string
          cultural_background?: string | null
          department?: string | null
          description?: string | null
          difficulty_level?: string | null
          engagement_metrics?: Json | null
          engagement_score?: number | null
          estimated_reading_time?: number | null
          excerpt: string
          external_api_id?: string | null
          featured?: boolean | null
          id?: string
          impact_metrics?: Json | null
          impact_score?: number | null
          key_drivers?: string[] | null
          languages?: string[] | null
          last_synced?: string | null
          leader_avatar_url?: string | null
          leader_bio?: string | null
          leader_department?: string | null
          leader_name?: string | null
          leader_title?: string | null
          outcome_description?: string | null
          persona_age?: number | null
          persona_name?: string | null
          persona_role?: string | null
          read_time?: number
          risk_factors?: string[] | null
          scenario_context?: string | null
          sentiment?: string | null
          seo_description?: string | null
          slug: string
          social_shares?: number | null
          status?: string
          strategic_recommendations?: string[] | null
          tags?: string[]
          thumbnail_url?: string | null
          title: string
          total_votes?: number | null
          updated_at?: string
          vote_breakdown?: Json | null
        }
        Update: {
          ai_solution?: string | null
          aps_level?: string | null
          author?: string
          average_rating?: number | null
          category?: string | null
          challenge_description?: string | null
          compliance_score?: number | null
          content?: string
          created_at?: string
          cultural_background?: string | null
          department?: string | null
          description?: string | null
          difficulty_level?: string | null
          engagement_metrics?: Json | null
          engagement_score?: number | null
          estimated_reading_time?: number | null
          excerpt?: string
          external_api_id?: string | null
          featured?: boolean | null
          id?: string
          impact_metrics?: Json | null
          impact_score?: number | null
          key_drivers?: string[] | null
          languages?: string[] | null
          last_synced?: string | null
          leader_avatar_url?: string | null
          leader_bio?: string | null
          leader_department?: string | null
          leader_name?: string | null
          leader_title?: string | null
          outcome_description?: string | null
          persona_age?: number | null
          persona_name?: string | null
          persona_role?: string | null
          read_time?: number
          risk_factors?: string[] | null
          scenario_context?: string | null
          sentiment?: string | null
          seo_description?: string | null
          slug?: string
          social_shares?: number | null
          status?: string
          strategic_recommendations?: string[] | null
          tags?: string[]
          thumbnail_url?: string | null
          title?: string
          total_votes?: number | null
          updated_at?: string
          vote_breakdown?: Json | null
        }
        Relationships: []
      }
      "vignettes final": {
        Row: {
          Achieved_Outputs: string | null
          Age: number | null
          Agency: string | null
          Agent_Code: string | null
          Agent_Division: string | null
          Agent_Level: number | null
          Agent_Name: string | null
          AI_Companion_Name: string | null
          AI_Companion_Profile: string | null
          AI_Companion_Specialty: string | null
          AI_Companion_Type: string | null
          AI_Suggested_Title: string | null
          APS_Alignment_Detail: string | null
          APS_Level: string | null
          Cultural_Background: string | null
          Demo_Scenario_Prompt: string | null
          Deployment_Timeframe: string | null
          Full_Name: string | null
          Impact_Metrics_Table: string | null
          Integration_Points: string | null
          Leadership_Category: string | null
          Location: string | null
          Narrative_Story: string | null
          Primary_Agent_Code: string | null
          Quote: string | null
          Role_Title: string | null
          Strategic_Theme: string | null
          Subagents_List: string | null
          Value_Delivered: string | null
          Vignette_ID: string | null
        }
        Insert: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Update: {
          Achieved_Outputs?: string | null
          Age?: number | null
          Agency?: string | null
          Agent_Code?: string | null
          Agent_Division?: string | null
          Agent_Level?: number | null
          Agent_Name?: string | null
          AI_Companion_Name?: string | null
          AI_Companion_Profile?: string | null
          AI_Companion_Specialty?: string | null
          AI_Companion_Type?: string | null
          AI_Suggested_Title?: string | null
          APS_Alignment_Detail?: string | null
          APS_Level?: string | null
          Cultural_Background?: string | null
          Demo_Scenario_Prompt?: string | null
          Deployment_Timeframe?: string | null
          Full_Name?: string | null
          Impact_Metrics_Table?: string | null
          Integration_Points?: string | null
          Leadership_Category?: string | null
          Location?: string | null
          Narrative_Story?: string | null
          Primary_Agent_Code?: string | null
          Quote?: string | null
          Role_Title?: string | null
          Strategic_Theme?: string | null
          Subagents_List?: string | null
          Value_Delivered?: string | null
          Vignette_ID?: string | null
        }
        Relationships: []
      }
      visitor_assessments: {
        Row: {
          assessment_data: Json
          consultation_requested: boolean | null
          created_at: string
          estimated_roi: number | null
          follow_up_sent_at: string | null
          id: string
          maturity_level: string | null
          organization: string | null
          organization_size: string | null
          overall_score: number | null
          recommended_packages: string[] | null
          role_title: string | null
          status: string | null
          updated_at: string
          visitor_email: string
          visitor_name: string
        }
        Insert: {
          assessment_data?: Json
          consultation_requested?: boolean | null
          created_at?: string
          estimated_roi?: number | null
          follow_up_sent_at?: string | null
          id?: string
          maturity_level?: string | null
          organization?: string | null
          organization_size?: string | null
          overall_score?: number | null
          recommended_packages?: string[] | null
          role_title?: string | null
          status?: string | null
          updated_at?: string
          visitor_email: string
          visitor_name: string
        }
        Update: {
          assessment_data?: Json
          consultation_requested?: boolean | null
          created_at?: string
          estimated_roi?: number | null
          follow_up_sent_at?: string | null
          id?: string
          maturity_level?: string | null
          organization?: string | null
          organization_size?: string | null
          overall_score?: number | null
          recommended_packages?: string[] | null
          role_title?: string | null
          status?: string | null
          updated_at?: string
          visitor_email?: string
          visitor_name?: string
        }
        Relationships: []
      }
      volumediscounts: {
        Row: {
          discount_id: string
          discount_pct: number | null
          end_date: string | null
          entity_id: string | null
          entity_type: string | null
          min_qty: number | null
          start_date: string | null
        }
        Insert: {
          discount_id: string
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          start_date?: string | null
        }
        Update: {
          discount_id?: string
          discount_pct?: number | null
          end_date?: string | null
          entity_id?: string | null
          entity_type?: string | null
          min_qty?: number | null
          start_date?: string | null
        }
        Relationships: []
      }
      webhooksubscriptions: {
        Row: {
          entity_id: string | null
          entity_type: string | null
          events_list: string[] | null
          url: string | null
          webhook_id: string
        }
        Insert: {
          entity_id?: string | null
          entity_type?: string | null
          events_list?: string[] | null
          url?: string | null
          webhook_id: string
        }
        Update: {
          entity_id?: string | null
          entity_type?: string | null
          events_list?: string[] | null
          url?: string | null
          webhook_id?: string
        }
        Relationships: []
      }
      "work packages": {
        Row: {
          "Customer-Facing Benefit": string | null
          "Est. Cost ($AUD)": number | null
          "Est. Price ($AUD)": number | null
          external_metadata: Json | null
          ID: number | null
          "Key Actions": string | null
          last_synced: string | null
          "Margin (%)": number | null
          master_source_id: string | null
          "New Role / Agentic Function": string | null
          "Old Role / Function": string | null
          Sector: string | null
          source_url: string | null
          "Stakeholder Impact": string | null
          "Value Created": string | null
          "Work Package Name": string | null
        }
        Insert: {
          "Customer-Facing Benefit"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          external_metadata?: Json | null
          ID?: number | null
          "Key Actions"?: string | null
          last_synced?: string | null
          "Margin (%)"?: number | null
          master_source_id?: string | null
          "New Role / Agentic Function"?: string | null
          "Old Role / Function"?: string | null
          Sector?: string | null
          source_url?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Work Package Name"?: string | null
        }
        Update: {
          "Customer-Facing Benefit"?: string | null
          "Est. Cost ($AUD)"?: number | null
          "Est. Price ($AUD)"?: number | null
          external_metadata?: Json | null
          ID?: number | null
          "Key Actions"?: string | null
          last_synced?: string | null
          "Margin (%)"?: number | null
          master_source_id?: string | null
          "New Role / Agentic Function"?: string | null
          "Old Role / Function"?: string | null
          Sector?: string | null
          source_url?: string | null
          "Stakeholder Impact"?: string | null
          "Value Created"?: string | null
          "Work Package Name"?: string | null
        }
        Relationships: []
      }
      work_package_inquiries: {
        Row: {
          contact_email: string
          contact_name: string
          created_at: string | null
          id: string
          inquiry_type: string
          message: string
          organization: string | null
          stakeholder_type: string | null
          status: string | null
          updated_at: string | null
          work_package_id: string | null
        }
        Insert: {
          contact_email: string
          contact_name: string
          created_at?: string | null
          id?: string
          inquiry_type: string
          message: string
          organization?: string | null
          stakeholder_type?: string | null
          status?: string | null
          updated_at?: string | null
          work_package_id?: string | null
        }
        Update: {
          contact_email?: string
          contact_name?: string
          created_at?: string | null
          id?: string
          inquiry_type?: string
          message?: string
          organization?: string | null
          stakeholder_type?: string | null
          status?: string | null
          updated_at?: string | null
          work_package_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_package_inquiries_work_package_id_fkey"
            columns: ["work_package_id"]
            isOneToOne: false
            referencedRelation: "work_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      work_package_milestones: {
        Row: {
          actual_completion_date: string | null
          completion_status: string | null
          created_at: string
          deliverables: Json | null
          dependencies: string | null
          id: string
          milestone_description: string
          milestone_type: string
          notes: string | null
          responsible_team: string | null
          risk_factors: Json | null
          success_metrics: Json | null
          target_completion_date: string | null
          updated_at: string
          work_package_id: string | null
        }
        Insert: {
          actual_completion_date?: string | null
          completion_status?: string | null
          created_at?: string
          deliverables?: Json | null
          dependencies?: string | null
          id?: string
          milestone_description: string
          milestone_type: string
          notes?: string | null
          responsible_team?: string | null
          risk_factors?: Json | null
          success_metrics?: Json | null
          target_completion_date?: string | null
          updated_at?: string
          work_package_id?: string | null
        }
        Update: {
          actual_completion_date?: string | null
          completion_status?: string | null
          created_at?: string
          deliverables?: Json | null
          dependencies?: string | null
          id?: string
          milestone_description?: string
          milestone_type?: string
          notes?: string | null
          responsible_team?: string | null
          risk_factors?: Json | null
          success_metrics?: Json | null
          target_completion_date?: string | null
          updated_at?: string
          work_package_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_package_milestones_work_package_id_fkey"
            columns: ["work_package_id"]
            isOneToOne: false
            referencedRelation: "work_packages"
            referencedColumns: ["id"]
          },
        ]
      }
      work_packages: {
        Row: {
          access_level: string | null
          agentic_ai_elements: string | null
          agentic_ai_enabled: boolean | null
          ai_leverage_level: string | null
          automation_score: number | null
          base_cost: number | null
          base_price: number | null
          break_even_units: number | null
          case_studies: Json | null
          category: string
          created_at: string | null
          customer_outcome: string | null
          customization_options: Json | null
          day_30_target: string | null
          day_60_target: string | null
          day_90_target: string | null
          deliverable_formats: Json | null
          deliverables: Json | null
          deliverables_detailed: string | null
          delivery_method: string | null
          delivery_timeframe_days: number | null
          delivery_timeline_weeks: string | null
          dependencies: string | null
          description: string | null
          detailed_description: string | null
          engagement_model: string | null
          estimated_cost_per_engagement: number | null
          estimated_revenue_per_engagement: number | null
          existing_customers: boolean | null
          expected_close_rate: number | null
          faqs: Json | null
          gross_margin_calculated: number | null
          gross_margin_pct: number | null
          id: string
          ideal_customer_types: Json | null
          implementation_timeline: string | null
          integration_complexity: string | null
          internal_lead_role: string | null
          is_active: boolean | null
          kpi_metrics: string | null
          margin_percent: number | null
          milestone_30_day: number | null
          milestone_60_day: number | null
          milestone_90_day: number | null
          milestone_deliverables: Json | null
          monitoring_method: string | null
          multimedia_content: Json | null
          name: string
          new_role_requirements: string | null
          next_best_offer: string | null
          notes: string | null
          old_role_description: string | null
          preferred_delivery_partner: string | null
          primary_sector: string | null
          problem_statement: string | null
          progression_indicator: string | null
          quarterly_revenue_target: number | null
          related_packages: string[] | null
          requires_approval: boolean | null
          restricted_message: string | null
          revenue_forecast_max: number | null
          revenue_forecast_min: number | null
          sales_narrative: string | null
          sla_details: Json | null
          solution_approach: string | null
          solution_summary: string | null
          specific_outputs: Json | null
          stakeholder_benefits: Json | null
          stakeholder_impact: string | null
          subcategory: string | null
          success_metrics: Json | null
          support_resources: Json | null
          system_dependencies: Json | null
          tags: string[] | null
          target_audience: string | null
          team_capability_score: number | null
          technical_requirements: Json | null
          tenant_id: string | null
          tier: string | null
          track_levels: Json | null
          updated_at: string | null
          upsell_opportunities: string | null
          workstream: string | null
        }
        Insert: {
          access_level?: string | null
          agentic_ai_elements?: string | null
          agentic_ai_enabled?: boolean | null
          ai_leverage_level?: string | null
          automation_score?: number | null
          base_cost?: number | null
          base_price?: number | null
          break_even_units?: number | null
          case_studies?: Json | null
          category: string
          created_at?: string | null
          customer_outcome?: string | null
          customization_options?: Json | null
          day_30_target?: string | null
          day_60_target?: string | null
          day_90_target?: string | null
          deliverable_formats?: Json | null
          deliverables?: Json | null
          deliverables_detailed?: string | null
          delivery_method?: string | null
          delivery_timeframe_days?: number | null
          delivery_timeline_weeks?: string | null
          dependencies?: string | null
          description?: string | null
          detailed_description?: string | null
          engagement_model?: string | null
          estimated_cost_per_engagement?: number | null
          estimated_revenue_per_engagement?: number | null
          existing_customers?: boolean | null
          expected_close_rate?: number | null
          faqs?: Json | null
          gross_margin_calculated?: number | null
          gross_margin_pct?: number | null
          id?: string
          ideal_customer_types?: Json | null
          implementation_timeline?: string | null
          integration_complexity?: string | null
          internal_lead_role?: string | null
          is_active?: boolean | null
          kpi_metrics?: string | null
          margin_percent?: number | null
          milestone_30_day?: number | null
          milestone_60_day?: number | null
          milestone_90_day?: number | null
          milestone_deliverables?: Json | null
          monitoring_method?: string | null
          multimedia_content?: Json | null
          name: string
          new_role_requirements?: string | null
          next_best_offer?: string | null
          notes?: string | null
          old_role_description?: string | null
          preferred_delivery_partner?: string | null
          primary_sector?: string | null
          problem_statement?: string | null
          progression_indicator?: string | null
          quarterly_revenue_target?: number | null
          related_packages?: string[] | null
          requires_approval?: boolean | null
          restricted_message?: string | null
          revenue_forecast_max?: number | null
          revenue_forecast_min?: number | null
          sales_narrative?: string | null
          sla_details?: Json | null
          solution_approach?: string | null
          solution_summary?: string | null
          specific_outputs?: Json | null
          stakeholder_benefits?: Json | null
          stakeholder_impact?: string | null
          subcategory?: string | null
          success_metrics?: Json | null
          support_resources?: Json | null
          system_dependencies?: Json | null
          tags?: string[] | null
          target_audience?: string | null
          team_capability_score?: number | null
          technical_requirements?: Json | null
          tenant_id?: string | null
          tier?: string | null
          track_levels?: Json | null
          updated_at?: string | null
          upsell_opportunities?: string | null
          workstream?: string | null
        }
        Update: {
          access_level?: string | null
          agentic_ai_elements?: string | null
          agentic_ai_enabled?: boolean | null
          ai_leverage_level?: string | null
          automation_score?: number | null
          base_cost?: number | null
          base_price?: number | null
          break_even_units?: number | null
          case_studies?: Json | null
          category?: string
          created_at?: string | null
          customer_outcome?: string | null
          customization_options?: Json | null
          day_30_target?: string | null
          day_60_target?: string | null
          day_90_target?: string | null
          deliverable_formats?: Json | null
          deliverables?: Json | null
          deliverables_detailed?: string | null
          delivery_method?: string | null
          delivery_timeframe_days?: number | null
          delivery_timeline_weeks?: string | null
          dependencies?: string | null
          description?: string | null
          detailed_description?: string | null
          engagement_model?: string | null
          estimated_cost_per_engagement?: number | null
          estimated_revenue_per_engagement?: number | null
          existing_customers?: boolean | null
          expected_close_rate?: number | null
          faqs?: Json | null
          gross_margin_calculated?: number | null
          gross_margin_pct?: number | null
          id?: string
          ideal_customer_types?: Json | null
          implementation_timeline?: string | null
          integration_complexity?: string | null
          internal_lead_role?: string | null
          is_active?: boolean | null
          kpi_metrics?: string | null
          margin_percent?: number | null
          milestone_30_day?: number | null
          milestone_60_day?: number | null
          milestone_90_day?: number | null
          milestone_deliverables?: Json | null
          monitoring_method?: string | null
          multimedia_content?: Json | null
          name?: string
          new_role_requirements?: string | null
          next_best_offer?: string | null
          notes?: string | null
          old_role_description?: string | null
          preferred_delivery_partner?: string | null
          primary_sector?: string | null
          problem_statement?: string | null
          progression_indicator?: string | null
          quarterly_revenue_target?: number | null
          related_packages?: string[] | null
          requires_approval?: boolean | null
          restricted_message?: string | null
          revenue_forecast_max?: number | null
          revenue_forecast_min?: number | null
          sales_narrative?: string | null
          sla_details?: Json | null
          solution_approach?: string | null
          solution_summary?: string | null
          specific_outputs?: Json | null
          stakeholder_benefits?: Json | null
          stakeholder_impact?: string | null
          subcategory?: string | null
          success_metrics?: Json | null
          support_resources?: Json | null
          system_dependencies?: Json | null
          tags?: string[] | null
          target_audience?: string | null
          team_capability_score?: number | null
          technical_requirements?: Json | null
          tenant_id?: string | null
          tier?: string | null
          track_levels?: Json | null
          updated_at?: string | null
          upsell_opportunities?: string | null
          workstream?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "work_packages_tenant_id_fkey"
            columns: ["tenant_id"]
            isOneToOne: false
            referencedRelation: "tenants"
            referencedColumns: ["id"]
          },
        ]
      }
      "Work_Packages-Table 1.csv": {
        Row: {
          dependencies: string | null
          description: string | null
          id: number | null
          package_name: string | null
          role_id: number | null
          stage_transition: string | null
        }
        Insert: {
          dependencies?: string | null
          description?: string | null
          id?: number | null
          package_name?: string | null
          role_id?: number | null
          stage_transition?: string | null
        }
        Update: {
          dependencies?: string | null
          description?: string | null
          id?: number | null
          package_name?: string | null
          role_id?: number | null
          stage_transition?: string | null
        }
        Relationships: []
      }
      workforcemodels: {
        Row: {
          ai_coverage_pct: number | null
          features: string | null
          human_pct: number | null
          model_id: string
          name: string | null
          price: number | null
          unit: string | null
        }
        Insert: {
          ai_coverage_pct?: number | null
          features?: string | null
          human_pct?: number | null
          model_id: string
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Update: {
          ai_coverage_pct?: number | null
          features?: string | null
          human_pct?: number | null
          model_id?: string
          name?: string | null
          price?: number | null
          unit?: string | null
        }
        Relationships: []
      }
      workshop_bookings: {
        Row: {
          assessment_result_id: string | null
          booking_notes: string | null
          booking_status: string | null
          created_at: string
          custom_focus_areas: string[] | null
          id: string
          preferred_date: string | null
          preferred_time_slot: string | null
          role_name: string
          updated_at: string
          user_id: string
          workshop_duration_hours: number | null
          workshop_type: string
        }
        Insert: {
          assessment_result_id?: string | null
          booking_notes?: string | null
          booking_status?: string | null
          created_at?: string
          custom_focus_areas?: string[] | null
          id?: string
          preferred_date?: string | null
          preferred_time_slot?: string | null
          role_name: string
          updated_at?: string
          user_id: string
          workshop_duration_hours?: number | null
          workshop_type?: string
        }
        Update: {
          assessment_result_id?: string | null
          booking_notes?: string | null
          booking_status?: string | null
          created_at?: string
          custom_focus_areas?: string[] | null
          id?: string
          preferred_date?: string | null
          preferred_time_slot?: string | null
          role_name?: string
          updated_at?: string
          user_id?: string
          workshop_duration_hours?: number | null
          workshop_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "workshop_bookings_assessment_result_id_fkey"
            columns: ["assessment_result_id"]
            isOneToOne: false
            referencedRelation: "assessment_results"
            referencedColumns: ["id"]
          },
        ]
      }
      workstream_metrics: {
        Row: {
          created_at: string
          id: string
          job_volume: number
          nps_impact: number
          scenario_id: string | null
          total_investment: number
          total_projects: number
          total_return: number
          updated_at: string
          workstream: string
        }
        Insert: {
          created_at?: string
          id?: string
          job_volume?: number
          nps_impact?: number
          scenario_id?: string | null
          total_investment?: number
          total_projects?: number
          total_return?: number
          updated_at?: string
          workstream: string
        }
        Update: {
          created_at?: string
          id?: string
          job_volume?: number
          nps_impact?: number
          scenario_id?: string | null
          total_investment?: number
          total_projects?: number
          total_return?: number
          updated_at?: string
          workstream?: string
        }
        Relationships: [
          {
            foreignKeyName: "workstream_metrics_scenario_id_fkey"
            columns: ["scenario_id"]
            isOneToOne: false
            referencedRelation: "investment_scenarios"
            referencedColumns: ["id"]
          },
        ]
      }
      workstreams: {
        Row: {
          customer_outcome: string | null
          detailed_project_offering: string | null
          effort_type_capexopexproduct: string | null
          estimated_duration_hrs: number | null
          payment_method: string | null
          proposalslide_component: string | null
          recurrence_cycle: string | null
          retail_price_: number | null
          workstream: string | null
        }
        Insert: {
          customer_outcome?: string | null
          detailed_project_offering?: string | null
          effort_type_capexopexproduct?: string | null
          estimated_duration_hrs?: number | null
          payment_method?: string | null
          proposalslide_component?: string | null
          recurrence_cycle?: string | null
          retail_price_?: number | null
          workstream?: string | null
        }
        Update: {
          customer_outcome?: string | null
          detailed_project_offering?: string | null
          effort_type_capexopexproduct?: string | null
          estimated_duration_hrs?: number | null
          payment_method?: string | null
          proposalslide_component?: string | null
          recurrence_cycle?: string | null
          retail_price_?: number | null
          workstream?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      "10,000 agents": {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: string | null
          auth_method: string | null
          automated_delivery_cost: string | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: string | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: string | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: string | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: string | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: string | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: string | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: number | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: number | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": string | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: number | null
          personality_c: number | null
          personality_e: string | null
          personality_n: number | null
          personality_o: string | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: string | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: string | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: string | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: string | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: string | null
          task_cluster_tags: string | null
          task_coverage_pct: string | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: string | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: string | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: string | null
          auth_method?: string | null
          automated_delivery_cost?: string | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: string | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: string | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: string | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: string | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: string | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: string | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: number | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: number | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: string | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: number | null
          personality_c?: number | null
          personality_e?: string | null
          personality_n?: number | null
          personality_o?: string | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: string | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: string | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: string | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: string | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: string | null
          task_cluster_tags?: string | null
          task_coverage_pct?: string | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: string | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: string | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      "10000 bigint": {
        Row: {
          action_type: string | null
          "Agent Code": string | null
          agent_code: string | null
          aligned_roles: string | null
          api_endpoint: string | null
          aps_hourly_rate: string | null
          attrition_risk_score: number | null
          augmented_delivery_cost: number | null
          auth_method: string | null
          automated_delivery_cost: number | null
          availability_calendar: string | null
          average_feedback_rating: number | null
          awards_received: string | null
          backup_available: boolean | null
          base_agent_cost: number | null
          break_even_months: number | null
          bundle_pairings: string | null
          career_interest_tags: string | null
          certification_count: string | null
          certifications: string | null
          certifications_expiry: string | null
          change_overlay_cost: number | null
          clearance_required: string | null
          cluster_id: number | null
          cognitive_aptitude_score: number | null
          "Common Agent": string | null
          complexity_score: number | null
          compliance_gap_flag: boolean | null
          compliance_margin: number | null
          compliance_ready_tags: string | null
          compliance_requirements: string | null
          consultant_hourly_rate: string | null
          contractor_hourly_rate: string | null
          core_skills: string | null
          cost_effectiveness_index: number | null
          cross_functional_role_count: number | null
          customer_csatscore: number | null
          customer_nps: string | null
          delivery_category: string | null
          delivery_type: string | null
          demographic_diversity_attributes: string | null
          disc_profile: string | null
          domain: string | null
          domain_experience_years: string | null
          domain_maturity_level: number | null
          domain_trust_score: number | null
          event_log_id: string | null
          field_of_study: string | null
          final_cost: number | null
          fit_for_defence: string | null
          fit_for_partner_solutions: string | null
          function: string | null
          github_reputation_score: number | null
          growth_potential_score: number | null
          highest_education_level: string | null
          highlight_quote: string | null
          human_cost_equiv: string | null
          human_delivery_cost: string | null
          human_effort_hours: number | null
          incident_count: string | null
          Industry: string | null
          industry_fit: string | null
          innovation_contribution_count: string | null
          innovation_fit_index: string | null
          input_rate: number | null
          input_source: string | null
          input_type: string | null
          integration_status: string | null
          job_title_matches: string | null
          knowledge_domains: string | null
          language_proficiencies: string | null
          last_performance_review_date: string | null
          last_project_end_date: string | null
          last_training_date: string | null
          last_updated: string | null
          linkedin_endorsements_count: string | null
          location: string | null
          margin_history: Json | null
          margin_pct: number | null
          market_salary_benchmark: number | null
          markup_model: string | null
          max_parallel_roles: string | null
          micro_role_fragments: string | null
          "Monthly Cost": string | null
          next_available_date: string | null
          on_time_pct: number | null
          "onet_skill_importance_<id>": number | null
          "onet_work_style_<id>": number | null
          output_rate: number | null
          output_type: string | null
          overall_match_score: number | null
          performance_flag: string | null
          performance_index: number | null
          persona: string | null
          personality_a: string | null
          personality_c: number | null
          personality_e: number | null
          personality_n: string | null
          personality_o: number | null
          preferred_partners: string | null
          pricing_model: string | null
          Problem: string | null
          project_bundle: string | null
          project_count: number | null
          project_success_rate: number | null
          proposal_strength_score: number | null
          quality_error_rate: number | null
          recommended_configuration: string | null
          region_unemployment_rate: number | null
          regulatory_compliance_index: string | null
          relocation_willingness: string | null
          remote_capable: boolean | null
          residual_capacity_pct: number | null
          reuse_profile_type: string | null
          rft_keywords_matched: string | null
          risk_rating: string | null
          ROI: string | null
          role_group: string | null
          role_substitution_rating: number | null
          scaling_equivalence: string | null
          schedule_flexibility: string | null
          security_vulnerability_rating: number | null
          "Setup Cost": string | null
          sfia_category: string | null
          sfia_level: string | null
          SFIA_level: number | null
          skill_breadth_index: number | null
          "skill_proficiency_<skill>": number | null
          sla_compliance_history: Json | null
          sla_hours: number | null
          standard_skill_tags: string | null
          strategic_mobility_indicator: string | null
          summary_bio: string | null
          supplier_category: string | null
          task_alignment_score: number | null
          task_cluster_tags: string | null
          task_coverage_pct: number | null
          task_criticality_score: number | null
          "Tech Stack": string | null
          tech_maturity_level: string | null
          tech_stack: string | null
          timestamp: string | null
          timezone: string | null
          total_years_experience: number | null
          training_status: string | null
          travel_availability_pct: number | null
          user_context: string | null
          utilization_history: Json | null
          utilization_pct: number | null
          utilization_target_pct: number | null
          value_to_cost_ratio: number | null
          values_alignment_score: number | null
          vendor_reliability_rating: number | null
          work_style_flags: string | null
          workforce_risk_index: number | null
          years_in_domain: string | null
        }
        Insert: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Update: {
          action_type?: string | null
          "Agent Code"?: string | null
          agent_code?: string | null
          aligned_roles?: string | null
          api_endpoint?: string | null
          aps_hourly_rate?: string | null
          attrition_risk_score?: number | null
          augmented_delivery_cost?: number | null
          auth_method?: string | null
          automated_delivery_cost?: number | null
          availability_calendar?: string | null
          average_feedback_rating?: number | null
          awards_received?: string | null
          backup_available?: boolean | null
          base_agent_cost?: number | null
          break_even_months?: number | null
          bundle_pairings?: string | null
          career_interest_tags?: string | null
          certification_count?: string | null
          certifications?: string | null
          certifications_expiry?: string | null
          change_overlay_cost?: number | null
          clearance_required?: string | null
          cluster_id?: number | null
          cognitive_aptitude_score?: number | null
          "Common Agent"?: string | null
          complexity_score?: number | null
          compliance_gap_flag?: boolean | null
          compliance_margin?: number | null
          compliance_ready_tags?: string | null
          compliance_requirements?: string | null
          consultant_hourly_rate?: string | null
          contractor_hourly_rate?: string | null
          core_skills?: string | null
          cost_effectiveness_index?: number | null
          cross_functional_role_count?: number | null
          customer_csatscore?: number | null
          customer_nps?: string | null
          delivery_category?: string | null
          delivery_type?: string | null
          demographic_diversity_attributes?: string | null
          disc_profile?: string | null
          domain?: string | null
          domain_experience_years?: string | null
          domain_maturity_level?: number | null
          domain_trust_score?: number | null
          event_log_id?: string | null
          field_of_study?: string | null
          final_cost?: number | null
          fit_for_defence?: string | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          github_reputation_score?: number | null
          growth_potential_score?: number | null
          highest_education_level?: string | null
          highlight_quote?: string | null
          human_cost_equiv?: string | null
          human_delivery_cost?: string | null
          human_effort_hours?: number | null
          incident_count?: string | null
          Industry?: string | null
          industry_fit?: string | null
          innovation_contribution_count?: string | null
          innovation_fit_index?: string | null
          input_rate?: number | null
          input_source?: string | null
          input_type?: string | null
          integration_status?: string | null
          job_title_matches?: string | null
          knowledge_domains?: string | null
          language_proficiencies?: string | null
          last_performance_review_date?: string | null
          last_project_end_date?: string | null
          last_training_date?: string | null
          last_updated?: string | null
          linkedin_endorsements_count?: string | null
          location?: string | null
          margin_history?: Json | null
          margin_pct?: number | null
          market_salary_benchmark?: number | null
          markup_model?: string | null
          max_parallel_roles?: string | null
          micro_role_fragments?: string | null
          "Monthly Cost"?: string | null
          next_available_date?: string | null
          on_time_pct?: number | null
          "onet_skill_importance_<id>"?: number | null
          "onet_work_style_<id>"?: number | null
          output_rate?: number | null
          output_type?: string | null
          overall_match_score?: number | null
          performance_flag?: string | null
          performance_index?: number | null
          persona?: string | null
          personality_a?: string | null
          personality_c?: number | null
          personality_e?: number | null
          personality_n?: string | null
          personality_o?: number | null
          preferred_partners?: string | null
          pricing_model?: string | null
          Problem?: string | null
          project_bundle?: string | null
          project_count?: number | null
          project_success_rate?: number | null
          proposal_strength_score?: number | null
          quality_error_rate?: number | null
          recommended_configuration?: string | null
          region_unemployment_rate?: number | null
          regulatory_compliance_index?: string | null
          relocation_willingness?: string | null
          remote_capable?: boolean | null
          residual_capacity_pct?: number | null
          reuse_profile_type?: string | null
          rft_keywords_matched?: string | null
          risk_rating?: string | null
          ROI?: string | null
          role_group?: string | null
          role_substitution_rating?: number | null
          scaling_equivalence?: string | null
          schedule_flexibility?: string | null
          security_vulnerability_rating?: number | null
          "Setup Cost"?: string | null
          sfia_category?: string | null
          sfia_level?: string | null
          SFIA_level?: number | null
          skill_breadth_index?: number | null
          "skill_proficiency_<skill>"?: number | null
          sla_compliance_history?: Json | null
          sla_hours?: number | null
          standard_skill_tags?: string | null
          strategic_mobility_indicator?: string | null
          summary_bio?: string | null
          supplier_category?: string | null
          task_alignment_score?: number | null
          task_cluster_tags?: string | null
          task_coverage_pct?: number | null
          task_criticality_score?: number | null
          "Tech Stack"?: string | null
          tech_maturity_level?: string | null
          tech_stack?: string | null
          timestamp?: string | null
          timezone?: string | null
          total_years_experience?: number | null
          training_status?: string | null
          travel_availability_pct?: number | null
          user_context?: string | null
          utilization_history?: Json | null
          utilization_pct?: number | null
          utilization_target_pct?: number | null
          value_to_cost_ratio?: number | null
          values_alignment_score?: number | null
          vendor_reliability_rating?: number | null
          work_style_flags?: string | null
          workforce_risk_index?: number | null
          years_in_domain?: string | null
        }
        Relationships: []
      }
      "40k variations": {
        Row: {
          Agent_ID: string | null
          Cloud: string | null
          Estimated_Cost: string | null
          Estimated_Price: string | null
          Estimated_Profit: string | null
          Integration_Pattern: string | null
          Variation_ID: string | null
          Variation_Name: string | null
        }
        Insert: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Update: {
          Agent_ID?: string | null
          Cloud?: string | null
          Estimated_Cost?: string | null
          Estimated_Price?: string | null
          Estimated_Profit?: string | null
          Integration_Pattern?: string | null
          Variation_ID?: string | null
          Variation_Name?: string | null
        }
        Relationships: []
      }
      "Agent reuse optimiser": {
        Row: {
          agent_code: string | null
          assigned_hours: number | null
          delivery_model: string | null
          function: string | null
          residual_capacity_pct: number | null
          reuse_recommendation: string | null
          total_capacity: number | null
        }
        Insert: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Update: {
          agent_code?: string | null
          assigned_hours?: number | null
          delivery_model?: string | null
          function?: string | null
          residual_capacity_pct?: number | null
          reuse_recommendation?: string | null
          total_capacity?: number | null
        }
        Relationships: []
      }
      "AI Agents by categories and agent names": {
        Row: {
          Agent_Name: string | null
          Category: string | null
          Description: string | null
          Pricing: string | null
          Use_Cases: string | null
        }
        Insert: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Update: {
          Agent_Name?: string | null
          Category?: string | null
          Description?: string | null
          Pricing?: string | null
          Use_Cases?: string | null
        }
        Relationships: []
      }
      "AI Directory Display": {
        Row: {
          agent_display_name: string | null
          summary: string | null
          title: string | null
        }
        Insert: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Update: {
          agent_display_name?: string | null
          summary?: string | null
          title?: string | null
        }
        Relationships: []
      }
      "Augmented first roles": {
        Row: {
          function: string | null
          why_augmented_first: string | null
        }
        Insert: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Update: {
          function?: string | null
          why_augmented_first?: string | null
        }
        Relationships: []
      }
      automation_analytics: {
        Row: {
          active_initiatives: number | null
          avg_actual_roi: number | null
          avg_effort_score: number | null
          avg_impact_score: number | null
          avg_roi_estimate: number | null
          completed_initiatives: number | null
          month: string | null
          total_assessments: number | null
          total_initiatives: number | null
        }
        Relationships: []
      }
      calculator_analytics: {
        Row: {
          all_selected_services: string[] | null
          avg_revenue: number | null
          avg_users: number | null
          industry: string | null
          industry_distribution: Json | null
          session_count: number | null
        }
        Relationships: []
      }
      "Core roster": {
        Row: {
          agent_code: string | null
          agent_id: number | null
          agent_name: string | null
          ai_readiness_level: number | null
          core_team_label: string | null
          excess_capacity_percent: number | null
          function_cluster: string | null
          task_usage_minutes: number | null
          value_score: string | null
        }
        Insert: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Update: {
          agent_code?: string | null
          agent_id?: number | null
          agent_name?: string | null
          ai_readiness_level?: number | null
          core_team_label?: string | null
          excess_capacity_percent?: number | null
          function_cluster?: string | null
          task_usage_minutes?: number | null
          value_score?: string | null
        }
        Relationships: []
      }
      "CV overlay": {
        Row: {
          agent_code: string | null
          cv_overlay_required: boolean | null
          function: string | null
          overlay_reason: string | null
          overlay_suggested_roles: string | null
          persona: string | null
          sfia_level: string | null
        }
        Insert: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Update: {
          agent_code?: string | null
          cv_overlay_required?: boolean | null
          function?: string | null
          overlay_reason?: string | null
          overlay_suggested_roles?: string | null
          persona?: string | null
          sfia_level?: string | null
        }
        Relationships: []
      }
      "Defebce Matches": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      "Defence Partner Dashboard": {
        Row: {
          agent_code: string | null
          cost: number | null
          coverage_pct: number | null
          cv_overlay: string | null
          delivery_model: string | null
          fit_for_defence: string | null
          function: string | null
          partner: string | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          coverage_pct?: number | null
          cv_overlay?: string | null
          delivery_model?: string | null
          fit_for_defence?: string | null
          function?: string | null
          partner?: string | null
        }
        Relationships: []
      }
      "Full role agent match": {
        Row: {
          agent_id: string | null
          agent_name: string | null
          aps_band: string | null
          aps_role_title: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_id?: string | null
          agent_name?: string | null
          aps_band?: string | null
          aps_role_title?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      "Full Role to table match": {
        Row: {
          agent_code: string | null
          aps_role: string | null
          match_percentage: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_role?: string | null
          match_percentage?: string | null
        }
        Relationships: []
      }
      "Function Metrics": {
        Row: {
          agent_count: number | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_value_score: number | null
          job_function: string | null
          price_rank_pct: number | null
        }
        Insert: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Update: {
          agent_count?: number | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_value_score?: number | null
          job_function?: string | null
          price_rank_pct?: number | null
        }
        Relationships: []
      }
      "G2U Full Catalogue": {
        Row: {
          A: string | null
          Active: boolean | null
          "Allow Multi-Currency": boolean | null
          Billable: boolean | null
          "Billing Frequency": string | null
          "Bundle Name": string | null
          C: string | null
          Category: string | null
          "Cost to Company (AUD)": number | null
          "Currency Code": string | null
          Description: string | null
          "Early Payment Discount": string | null
          "Exchange Rate to AUD": number | null
          "GL Account": string | null
          I: string | null
          "Is Agentic AI": boolean | null
          "Is Consulting": boolean | null
          "Is Premium": boolean | null
          "Is Recurring": boolean | null
          "Lead Time (Days)": number | null
          "Max Qty": string | null
          "Min Contract Term (Months)": string | null
          "Min Qty": number | null
          "Partner Price": string | null
          "Payment Terms": string | null
          Phase: string | null
          "Phase Code": string | null
          "Price (AUD)": string | null
          "Price Raw": string | null
          "Price Unit": string | null
          "Price Value": number | null
          "Profit Margin Target (%)": number | null
          R: string | null
          "Retail Price": number | null
          "Seasonal Discount": string | null
          "Service Duration": string | null
          "Service Level Tier": string | null
          SKU: string | null
          "SKU Grouping": string | null
          "SOW Code": string | null
          Subcategory: string | null
          "Subscription Billing Cycle": string | null
          "Supplier Code": string | null
          "Supplier Name": string | null
          "Supplier SKU": string | null
          "Tax Category": string | null
          "Unit of Measure": string | null
          "Volume Discount": string | null
          "Warranty Terms": string | null
          "White Label Price": number | null
          "Wholesale Price": number | null
        }
        Insert: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Update: {
          A?: string | null
          Active?: boolean | null
          "Allow Multi-Currency"?: boolean | null
          Billable?: boolean | null
          "Billing Frequency"?: string | null
          "Bundle Name"?: string | null
          C?: string | null
          Category?: string | null
          "Cost to Company (AUD)"?: number | null
          "Currency Code"?: string | null
          Description?: string | null
          "Early Payment Discount"?: string | null
          "Exchange Rate to AUD"?: number | null
          "GL Account"?: string | null
          I?: string | null
          "Is Agentic AI"?: boolean | null
          "Is Consulting"?: boolean | null
          "Is Premium"?: boolean | null
          "Is Recurring"?: boolean | null
          "Lead Time (Days)"?: number | null
          "Max Qty"?: string | null
          "Min Contract Term (Months)"?: string | null
          "Min Qty"?: number | null
          "Partner Price"?: string | null
          "Payment Terms"?: string | null
          Phase?: string | null
          "Phase Code"?: string | null
          "Price (AUD)"?: string | null
          "Price Raw"?: string | null
          "Price Unit"?: string | null
          "Price Value"?: number | null
          "Profit Margin Target (%)"?: number | null
          R?: string | null
          "Retail Price"?: number | null
          "Seasonal Discount"?: string | null
          "Service Duration"?: string | null
          "Service Level Tier"?: string | null
          SKU?: string | null
          "SKU Grouping"?: string | null
          "SOW Code"?: string | null
          Subcategory?: string | null
          "Subscription Billing Cycle"?: string | null
          "Supplier Code"?: string | null
          "Supplier Name"?: string | null
          "Supplier SKU"?: string | null
          "Tax Category"?: string | null
          "Unit of Measure"?: string | null
          "Volume Discount"?: string | null
          "Warranty Terms"?: string | null
          "White Label Price"?: number | null
          "Wholesale Price"?: number | null
        }
        Relationships: []
      }
      "Generate proposal assets": {
        Row: {
          agent_code: string | null
          cost: number | null
          cv_overlay_required: boolean | null
          delivery_model: string | null
          function: string | null
          role: string | null
          sfia_level: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          cost?: number | null
          cv_overlay_required?: boolean | null
          delivery_model?: string | null
          function?: string | null
          role?: string | null
          sfia_level?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      "Nuix overlay": {
        Row: {
          agent_code: string | null
          delivery_model: string | null
          final_cost: number | null
          fit_for_partner_solutions: string | null
          function: string | null
          partner_match_confidence: number | null
          persona: string | null
          preferred_partners: string | null
          sfia_level: string | null
          summary_bio: string | null
          task_coverage_pct: number | null
        }
        Insert: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Update: {
          agent_code?: string | null
          delivery_model?: string | null
          final_cost?: number | null
          fit_for_partner_solutions?: string | null
          function?: string | null
          partner_match_confidence?: number | null
          persona?: string | null
          preferred_partners?: string | null
          sfia_level?: string | null
          summary_bio?: string | null
          task_coverage_pct?: number | null
        }
        Relationships: []
      }
      "Org change agents": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      partner_ecosystem_view: {
        Row: {
          avg_deal_size: number | null
          certifications: string | null
          description: string | null
          joint_win_count: number | null
          logo_url: string | null
          partner_name: string | null
          partner_tier: string | null
          partner_type: string | null
          source_table: string | null
        }
        Insert: {
          avg_deal_size?: number | null
          certifications?: string | null
          description?: string | null
          joint_win_count?: number | null
          logo_url?: string | null
          partner_name?: string | null
          partner_tier?: string | null
          partner_type?: string | null
          source_table?: never
        }
        Update: {
          avg_deal_size?: number | null
          certifications?: string | null
          description?: string | null
          joint_win_count?: number | null
          logo_url?: string | null
          partner_name?: string | null
          partner_tier?: string | null
          partner_type?: string | null
          source_table?: never
        }
        Relationships: []
      }
      "PMO match": {
        Row: {
          agent_code: string | null
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          match_percentage: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          agent_code?: string | null
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          match_percentage?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
      "RFT Metrics Final": {
        Row: {
          "Current Value": string | null
          Data_Source: string | null
          Default_Weight: number | null
          Dimension: string | null
          Labor_Model: string | null
          Metric: string | null
          Reason: string | null
          Weight_Gov_Federal: number | null
          Weight_Gov_State: number | null
          Weight_Nonprofit: number | null
          Weight_Private_Enterprise: number | null
          Weight_SMB: number | null
          WhyItMatters: string | null
        }
        Insert: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Update: {
          "Current Value"?: string | null
          Data_Source?: string | null
          Default_Weight?: number | null
          Dimension?: string | null
          Labor_Model?: string | null
          Metric?: string | null
          Reason?: string | null
          Weight_Gov_Federal?: number | null
          Weight_Gov_State?: number | null
          Weight_Nonprofit?: number | null
          Weight_Private_Enterprise?: number | null
          Weight_SMB?: number | null
          WhyItMatters?: string | null
        }
        Relationships: []
      }
      roi_team_summaries: {
        Row: {
          assessments_count: number | null
          organization_id: string | null
          roi_percentage: number | null
          team_id: string | null
          team_name: string | null
          total_annual_cost: number | null
          total_estimated_savings: number | null
        }
        Relationships: [
          {
            foreignKeyName: "roi_teams_organization_id_fkey"
            columns: ["organization_id"]
            isOneToOne: false
            referencedRelation: "roi_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      role_instance: {
        Row: {
          aps_level: string | null
          automation_score: number | null
          band_code: string | null
          currency: string | null
          description: string | null
          industry_code: string | null
          instance_id: number | null
          org_size_code: string | null
          role_code: string | null
          role_name: string | null
          salary_max: number | null
          salary_min: number | null
        }
        Relationships: []
      }
      "Skills Metrics": {
        Row: {
          agent_count: number | null
          associated_functions: string | null
          avg_agent_price: number | null
          avg_auto_cost: number | null
          avg_human_cost: number | null
          avg_popularity_score: string | null
          avg_trust_score: number | null
          cost_ratio_agent_to_auto: number | null
          cost_savings_pct: number | null
          coverage_pct: number | null
          function_count: number | null
          skill: string | null
          skill_value_score: number | null
        }
        Insert: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Update: {
          agent_count?: number | null
          associated_functions?: string | null
          avg_agent_price?: number | null
          avg_auto_cost?: number | null
          avg_human_cost?: number | null
          avg_popularity_score?: string | null
          avg_trust_score?: number | null
          cost_ratio_agent_to_auto?: number | null
          cost_savings_pct?: number | null
          coverage_pct?: number | null
          function_count?: number | null
          skill?: string | null
          skill_value_score?: number | null
        }
        Relationships: []
      }
      "Skills Roles Tasks": {
        Row: {
          aps_band: string | null
          aps_role: string | null
          complexity: string | null
          required_skills: string | null
          required_tasks: string | null
        }
        Insert: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Update: {
          aps_band?: string | null
          aps_role?: string | null
          complexity?: string | null
          required_skills?: string | null
          required_tasks?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      calculate_excess_capacity_value: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_excess_hours: number
          potential_weekly_revenue: number
          annual_revenue_opportunity: number
          top_available_functions: string[]
        }[]
      }
      calculate_performance_metrics: {
        Args: { consultant_uuid: string; start_date: string; end_date: string }
        Returns: {
          total_opps: number
          total_value: number
          won_opps: number
          won_value: number
          avg_deal_size: number
          avg_cycle_days: number
          win_rate: number
          activity_count: number
        }[]
      }
      calculate_total_hourly_cost: {
        Args: {
          p_country_code: string
          p_sfia_level: number
          p_skills?: string[]
          p_has_security_clearance?: boolean
          p_has_certifications?: boolean
          p_target_currency?: string
        }
        Returns: {
          base_rate_local: number
          base_rate_usd: number
          total_cost_usd: number
          purchasing_power_equivalent: number
          cost_breakdown: Json
        }[]
      }
      check_migration_tables: {
        Args: Record<PropertyKey, never>
        Returns: {
          table_name: string
          column_name: string
          data_type: string
          is_nullable: boolean
        }[]
      }
      create_weekly_project_review_reminders: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      exec_sql: {
        Args: { sql: string }
        Returns: undefined
      }
      generate_agent_variation: {
        Args: {
          parent_agent_code_param: string
          variation_name_param: string
          delivery_model_param: string
          sfia_level_param?: string
          cost_multiplier?: number
        }
        Returns: Json
      }
      generate_function_cluster_bundles: {
        Args: Record<PropertyKey, never>
        Returns: {
          cluster_name: string
          agent_codes: string[]
          estimated_cost: number
          synergy_score: number
        }[]
      }
      generate_market_insights: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      generate_partner_slug: {
        Args: { name: string }
        Returns: string
      }
      get_agent_variations_count: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_count: number
          automated_count: number
          augmented_count: number
          human_count: number
          unique_parent_agents: number
        }[]
      }
      get_agent_with_variations: {
        Args: { agent_code_param: string }
        Returns: {
          agent_details: Json
          variations: Json
        }[]
      }
      get_ecosystem_overview: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_partners: number
          total_value: number
          strategic_partners: number
          enterprise_partners: number
          certified_partners: number
          avg_deal_size: number
          total_joint_wins: number
        }[]
      }
      get_expiring_certifications: {
        Args: { user_id: string }
        Returns: Json
      }
      get_final_table_data: {
        Args: Record<PropertyKey, never>
        Returns: {
          Full_Name: string
          Role_Title: string
          Age: number
          APS_Level: string
          Cultural_Background: string
          Location: string
          Agency: string
          AI_Suggested_Title: string
          Narrative_Story: string
          Quote: string
          Strategic_Theme: string
          AI_Companion_Name: string
          AI_Companion_Type: string
          AI_Companion_Specialty: string
          AI_Companion_Profile: string
          Primary_Agent_Code: string
          Agent_Name: string
          Agent_Level: number
          Agent_Division: string
          Value_Delivered: string
          Achieved_Outputs: string
        }[]
      }
      get_merged_ecosystem_partner: {
        Args: { entity_name_param: string }
        Returns: {
          entity_name: string
          description: string
          category: string
          logo_url: string
          avg_deal_size: number
          joint_win_count: number
          partner_tier: string
          certifications: string
        }[]
      }
      get_primary_tenant_for_user: {
        Args: { user_id: string }
        Returns: string
      }
      get_stage_recommendations: {
        Args: { current_revenue: number }
        Returns: {
          stage_name: string
          stage_description: string
          recommended_adjustments: Json
        }[]
      }
      get_tenant_for_host: {
        Args: { p_host: string }
        Returns: {
          tenant_id: string
          slug: string
          settings: Json
        }[]
      }
      get_tenant_id_from_email: {
        Args: { email: string }
        Returns: string
      }
      get_user_organization_ids: {
        Args: Record<PropertyKey, never>
        Returns: string[]
      }
      has_role: {
        Args: { _role: Database["public"]["Enums"]["app_role"] }
        Returns: boolean
      }
      has_valid_acma_license: {
        Args: { profile_id: string }
        Returns: boolean
      }
      increment_feedback: {
        Args: { story_id_text: string; feedback_type_text: string }
        Returns: {
          up_count: number
          neutral_count: number
          down_count: number
        }[]
      }
      is_email_domain_allowed: {
        Args: { email: string }
        Returns: boolean
      }
      is_license_valid: {
        Args: { org_id: string }
        Returns: boolean
      }
      is_user_organization_member: {
        Args: { org_id: string }
        Returns: boolean
      }
      migrate_partner_data: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      migrate_rich_vignettes_data: {
        Args: Record<PropertyKey, never>
        Returns: {
          success: boolean
          migrated_count: number
          message: string
          error_details: string
        }[]
      }
      next_monday_9am: {
        Args: Record<PropertyKey, never>
        Returns: string
      }
      normalize_host: {
        Args: { host_input: string }
        Returns: string
      }
      populate_excess_capacity_marketplace: {
        Args: Record<PropertyKey, never>
        Returns: number
      }
      refresh_automation_analytics: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
      resolve_asset: {
        Args: { p_asset_key: string; p_tenant_id?: string }
        Returns: {
          asset_url: string
          asset_name: string
          metadata: Json
          is_override: boolean
        }[]
      }
      save_compensation_with_stage: {
        Args: {
          p_user_id: string
          p_compensation_data: Json
          p_compensation_results: Json
          p_total_compensation: number
          p_current_revenue: number
          p_session_name?: string
        }
        Returns: string
      }
      seed_actual_projects: {
        Args: Record<PropertyKey, never>
        Returns: boolean
      }
      sync_ses_conversations_status: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_records: number
          last_sync_date: string
          sync_needed: boolean
        }[]
      }
      update_comment_like_count: {
        Args: { comment_id: string }
        Returns: undefined
      }
      validate_share_email_domain: {
        Args: { email: string }
        Returns: boolean
      }
      verify_rich_vignettes_migration: {
        Args: Record<PropertyKey, never>
        Returns: {
          total_new_vignettes: number
          vignettes_with_ai_companions: number
          vignettes_with_agent_codes: number
          vignettes_with_narratives: number
          sample_enhanced_vignette: Json
        }[]
      }
    }
    Enums: {
      app_role: "admin" | "user"
      assignment_status: "pending" | "in_progress" | "completed" | "overdue"
      calculation_stage:
        | "draft"
        | "review_internal"
        | "assigned_customer"
        | "under_customer_review"
        | "customer_approved"
        | "customer_rejected"
        | "completed"
        | "archived"
      ladder_tier: "bronze" | "silver" | "gold" | "platinum" | "elite"
      metric_type: "numeric" | "text" | "boolean" | "date"
      sales_stage:
        | "lead"
        | "qualification"
        | "discovery"
        | "proposal"
        | "negotiation"
        | "closed_won"
        | "closed_lost"
      value_tier: "high" | "medium" | "low"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
      assignment_status: ["pending", "in_progress", "completed", "overdue"],
      calculation_stage: [
        "draft",
        "review_internal",
        "assigned_customer",
        "under_customer_review",
        "customer_approved",
        "customer_rejected",
        "completed",
        "archived",
      ],
      ladder_tier: ["bronze", "silver", "gold", "platinum", "elite"],
      metric_type: ["numeric", "text", "boolean", "date"],
      sales_stage: [
        "lead",
        "qualification",
        "discovery",
        "proposal",
        "negotiation",
        "closed_won",
        "closed_lost",
      ],
      value_tier: ["high", "medium", "low"],
    },
  },
} as const

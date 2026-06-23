/**
 * ============================================================================
 * Type definitions for the 3 upstream APIs that power the Competitor
 * Analysis page.
 *
 *   1. LQS API              -> sections 1, 2, 4, 5, 7
 *   2. Competitor API       -> section 3 (product cards; LQS scores overlaid)
 *   3. Keyword Gap API      -> section 6 (teaser, top 3 only)
 *
 * These mirror the exact JSON shapes shared by the API team. Keep this file
 * as the single source of truth for shapes consumed by the page components.
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * 1. LQS API
 * ------------------------------------------------------------------------- */


export interface LQSScores {
  a9_compliance: number;
  rufus_readiness: number;
  lqs_score: number;
  overall: number;
}

export interface A9DimensionBreakdown {
  title_keyword: number;
  title_structure: number;
  mobile_optimisation: number;
  bullet_compliance: number;
  backend_keywords: number;
  browse_node: number;
  attribute_completeness: number;
  content_richness: number;
}

export interface RufusDimensionBreakdown {
  intent_coverage: number;
  use_case_specificity: number;
  objection_handling: number;
  persona_clarity: number;
  faq_readiness: number;
  semantic_depth: number;
  review_alignment: number;
  conversational_naturalness: number;
}

export interface DimensionBreakdown {
  a9: A9DimensionBreakdown;
  rufus: RufusDimensionBreakdown;
}

export interface PriorityFix {
  issue: string;
  dimension: string;
  impact_score: number;
  fix_suggestion: string;
}

export interface LQSResultEntry {
  label: string; // "TARGET" | "COMP-1" ... "COMP-10"
  asin: string;
  title: string;
  scores: LQSScores;

  dimension_breakdown?: {
    a9: A9DimensionBreakdown;
    rufus: RufusDimensionBreakdown;
  };
  
  flags?: string[];
  fix_priority?: PriorityFix[];
  projected_ctr_range?: string;
  gmv_impact_inr?: string;
}

export interface GapReportTargetSummary {
  title: string;
  asin: string;
  overall: number;
  a9: number;
  rufus: number;
  flags: string[];
}

export interface GapReportBestCompetitor {
  title: string;
  asin: string;
  overall: number;
  a9: number;
  rufus: number;
}

export interface GapRow {
  metric: "overall" | "a9_compliance" | "rufus_readiness" | "lqs_score" | string;
  target: number;
  best: number;
  gap: number;
}

export interface GapReport {
  target_summary: GapReportTargetSummary;
  best_competitor: GapReportBestCompetitor;
  gaps: GapRow[];
}

export interface ScoreComparisonRow {
  label: string;
  asin: string;
  title: string;
  overall: number;
  a9_compliance: number;
  rufus_readiness: number;
  lqs_score: number;
  projected_ctr: string;
  gmv_estimate: string;
  critical_flags: string[];
}

export interface DimensionGapRow {
  scorer: "a9" | "rufus";
  dimension: string;
  target_score: number;
  comp_avg: number;
  gap: number;
}

export interface HealthFlag {
  level: "WARNING" | "INFO" | "CRITICAL" ;
  msg: string;
}

export interface Feedback {
  asin: string;
  health: HealthFlag[];
  strengths: string[];
  quick_wins: string[];
  medium_term: string[];
  long_term: string[];
  priority_fixes: PriorityFix[];
  executive_summary: {
    overall_gap_to_leader: number;
    a9_gap_to_leader: number;
    rufus_gap_to_leader: number;
    top_fix: string;
    critical_flag_count: number;
    high_flag_count: number;
  };
}

export interface LQSApiResponse {
  source: string;
  target_asin: string;
  results: LQSResultEntry[];
  gap_report: GapReport;
  score_comparison: ScoreComparisonRow[];
  dimension_gaps: DimensionGapRow[];
  feedback: Feedback;
}

/* ---------------------------------------------------------------------------
 * 2. Competitor API (product details)
 * ------------------------------------------------------------------------- */

export interface CompetitorProduct {
  asin: string;
  title: string;
  brand: string;
  price: string;
  rating: number;
  review_count: number;
  product_url: string;
  main_image: string;
  description?: string;
  bullet_points?: string[];
  images?: string[];
  breadcrumbs?: { name: string; url: string }[];
  deep_score?: number;
  // `raw` carries the full scraped payload; not needed for the UI but kept
  // for completeness / future use.
  raw?: Record<string, unknown>;
}

export interface CompetitorApiResponse {
  asin: string;
  competitors: CompetitorProduct[];
}

/* ---------------------------------------------------------------------------
 * 3. Keyword Gap API
 * ------------------------------------------------------------------------- */

export interface MissingKeyword {
  keyword: string;
  competitor_coverage: number; // 0-10
  gap_type: "frontend" | "backend" | "both" ;
  suggested_placement: string;
  intent_type: "discovery" | "use_case" | string;
}

export interface KeywordGapApiResponse {
  seller_keywords: string[];
  competitor_keywords: string[];
  missing_critical: MissingKeyword[];
  missing_secondary: MissingKeyword[];
  content_gaps: string[];
  rewritten_title_snippet: string;
  backend_audit: {
    current_bytes_used: number;
    bytes_available: number;
    current_duplicates: string[];
    current_internal_dupes: string[];
    compliance_issues: string[];
  };
  generated_backend_string: string;
  backend_keyword_sets: Record<string, string[]>;
  backend_byte_plan: {
    total_available: number;
    allocated: number;
    remaining: number;
    slot_breakdown: { keyword_group: string; bytes_used: number; priority: number }[];
  };
  indexation_gap_score: number;
}

/* ---------------------------------------------------------------------------
 * Combined props shape consumed by <CompetitorAnalysisPage />
 * ------------------------------------------------------------------------- */

export interface CompetitorAnalysisData {
  lqs: LQSApiResponse;
  competitor: CompetitorApiResponse;
  keywordGap: KeywordGapApiResponse;
}

// ─── LQS Types (LQS page only — do not import from competitor-analysis) ──────


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

export interface LQSScores {
  a9_compliance: number;
  rufus_readiness: number;
  lqs_score: number;
  overall: number;
}

export interface LQSFixPriority {
  issue: string;
  dimension: string;
  impact_score: number;
  fix_suggestion: string;
}

export interface LQSResultEntry {
  label: string;
  asin: string;
  title: string;
  scores: LQSScores;
  dimension_breakdown?: {
    a9: A9DimensionBreakdown;
    rufus: RufusDimensionBreakdown;
  };
  flags?: string[];
  fix_priority?: LQSFixPriority[];
  projected_ctr_range?: string;
  gmv_impact_inr?: string;
}

export interface LQSGapReportEntry {
  metric: string;
  target: number;
  best: number;
  gap: number;
}

export interface LQSGapReport {
  target_summary: {
    title: string;
    asin: string;
    overall: number;
    a9: number;
    rufus: number;
    flags: string[];
  };
  best_competitor: {
    title: string;
    asin: string;
    overall: number;
    a9: number;
    rufus: number;
  };
  gaps: LQSGapReportEntry[];
}

export interface LQSScoreComparison {
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

export interface LQSDimensionGap {
  scorer: "a9" | "rufus";
  dimension: string;
  target_score: number;
  comp_avg: number;
  gap: number;
}

export interface LQSHealthFlag {
  level: "WARNING" | "CRITICAL" | "INFO";
  msg: string;
}

export interface LQSPriorityFix {
  issue: string;
  dimension: string;
  impact_score: number;
  fix_suggestion: string;
}

export interface LQSExecutiveSummary {
  overall_gap_to_leader: number;
  a9_gap_to_leader: number;
  rufus_gap_to_leader: number;
  top_fix: string;
  critical_flag_count: number;
  high_flag_count: number;
}

export interface LQSFeedback {
  asin: string;
  health: LQSHealthFlag[];
  strengths: string[];
  quick_wins: string[];
  medium_term: string[];
  long_term: string[];
  priority_fixes: LQSPriorityFix[];
  executive_summary: LQSExecutiveSummary;
}

export interface LQSApiResponse {
  source: string;
  target_asin: string;
  results: LQSResultEntry[];
  gap_report: LQSGapReport;
  score_comparison: LQSScoreComparison[];
  dimension_gaps: LQSDimensionGap[];
  feedback: LQSFeedback;
}
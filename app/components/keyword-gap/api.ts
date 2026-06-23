// ============================================================================
// Keyword Gap API Types
// ============================================================================

export interface MissingKeyword {
  keyword: string;
  competitor_coverage: number;
  gap_type: "both" | "frontend" | "backend";
  suggested_placement: string;
  intent_type: "discovery" | "use_case" | string;
}

export interface BackendByteSlot {
  keyword_group: string;
  bytes_used: number;
  priority: number;
}

export interface BackendAudit {
  current_bytes_used: number;
  bytes_available: number;
  current_duplicates: string[];
  current_internal_dupes: string[];
  compliance_issues: string[];
}

export interface BackendKeywordSets {
  synonyms: string[];
  long_tail: string[];
  spelling_variants: string[];
  numeric_text_pairs: string[];
  intent_phrases: string[];
  locale_variants: string[];
  seasonal: string[];
  ppc_harvest: string[];
}

export interface BackendBytePlan {
  total_available: number;
  allocated: number;
  remaining: number;
  slot_breakdown: BackendByteSlot[];
}

export interface KeywordGapData {
  seller_keywords: string[];
  competitor_keywords: string[];
  missing_critical: MissingKeyword[];
  missing_secondary: MissingKeyword[];
  content_gaps: string[];
  rewritten_title_snippet: string;
  backend_audit: BackendAudit;
  generated_backend_string: string;
  backend_keyword_sets: BackendKeywordSets;
  backend_byte_plan: BackendBytePlan;
  indexation_gap_score: number;
}


// export interface KeywordGapApiResponse {
//   success: boolean;
//   data: KeywordGapData;
// }

export type KeywordGapApiResponse = KeywordGapData;
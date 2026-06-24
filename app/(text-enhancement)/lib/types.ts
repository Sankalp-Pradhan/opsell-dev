/**
 * ============================================================================
 * Type definitions for the Text Enhancement API response
 * ============================================================================
 */

/* ---------------------------------------------------------------------------
 * Scores and Original Content
 * ------------------------------------------------------------------------- */

export interface Scores {
  keyword_density: number;
  intent_alignment: number;
  conversion_signals: number;
}

export interface OriginalScores {
  a9_compliance: number;
  rufus_readiness: number;
  keywords_found: number;
}

/* ---------------------------------------------------------------------------
 * Variant A & B
 * ------------------------------------------------------------------------- */

export interface VariantA {
  scores: Scores;
  title: string;
  char_count: number;
  bullets: string[];
  description: string;
  keywords_added: string[];
}

export interface VariantB {
  scores: Scores;
  title: string;
  bullets: string[];
  description: string;
  personas_addressed: string[];
  objections_handled: string[];
}

/* ---------------------------------------------------------------------------
 * Hybrid Variant
 * ------------------------------------------------------------------------- */

export interface HybridVariant {
  recommended: "variant_a" | "variant_b";
  title: string;
  bullets: string[];
  description: string;
  rationale: string;
}

/* ---------------------------------------------------------------------------
 * Impact Data
 * ------------------------------------------------------------------------- */

export interface ImpactBreakdown {
  component: "Title" | "Bullets" | "Description" | string;
  what_changed: string;
  reasoning: string;
}

export interface Impact {
  breakdown: ImpactBreakdown[];
}

/* ---------------------------------------------------------------------------
 * Combined API Response
 * ------------------------------------------------------------------------- */

export interface TextEnhancementApiResponse {
  original_scores: OriginalScores;
  variant_a: VariantA;
  variant_b: VariantB;
  hybrid: HybridVariant;
  impact: Impact;
}

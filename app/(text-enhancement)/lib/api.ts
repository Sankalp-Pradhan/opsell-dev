// ─── Text Enhancement Types ───────────────────────────────────────────────────
// Do NOT import from LQS or Competitor Analysis types.

export interface OriginalScores {
  a9_compliance: number;
  rufus_readiness: number;
  keywords_found: number;
}

export interface VariantScores {
  keyword_density: number;
  intent_alignment: number;
  conversion_signals: number;
}

export interface VariantA {
  title: string;
  bullets: string[];
  description: string;
  scores: VariantScores;
  keywords_added: string[];
  char_count: number;
}

export interface VariantB {
  title: string;
  bullets: string[];
  description: string;
  scores: VariantScores;
  personas_addressed: string[];
  objections_handled: string[];
}

export interface HybridVariant {
  title: string;
  bullets: string[];
  description: string;
  rationale: string;
  recommended: "hybrid" | "variant_a" | "variant_b";
}

export interface ImpactBreakdown {
  component: string;
  what_changed: string;
  metric: string;
  expected_lift: string;
  reasoning: string;
}

export interface Impact {
  ctr_improvement: string;
  cvr_improvement: string;
  breakdown: ImpactBreakdown[];
}

export interface KeywordCoverage {
  keywords_found: number;
  keywords_added: string[];
}

export interface TitleOptimization {
  original: string;
  optimized: string;
  char_count: number;
}

export interface BulletOptimization {
  original: string[];
  optimized: string[];
}

export interface DescriptionOptimization {
  original: string;
  optimized: string;
}

export interface TextEnhancementApiResponse {
  original_scores: OriginalScores;
  variant_a: VariantA;
  variant_b: VariantB;
  hybrid: HybridVariant;
  impact: Impact;
}
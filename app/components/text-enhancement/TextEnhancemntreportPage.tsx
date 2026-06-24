import { TextEnhancementApiResponse } from "@/app/(text-enhancement)/lib/types";
import Section1Hero from "./Section1Hero";
import Section2OriginalScores from "./Section2OriginalScores";
import Section3VariantComparison from "./Section3VariantComparison";
import Section4VariantA from "./Section4VariantA";
import Section5VariantB from "./Section5VariantB";
import Section6HybridRecommendation from "./Section6HybridRecommendation";
import Section7KeywordOptimization from "./Section7KeywordOptimization";
import Section8ContentEnhancements from "./Section8ContentEnhancements";
import Section9ImpactForecast from "./Section9ImpactForecast";
import Section10ImpactBreakdown from "./Section10ImpactBreakdown";
import Section11FinalOptimizedCopy from "./Section11FinalOptimizedCopy";
import Section12ImplementationChecklist from "./Section12ImplementationChecklist";

interface Props {
  data: TextEnhancementApiResponse;
  asin: string;
}

export default function TextEnhancementReportPage({ data, asin }: Props) {
  return (
    <main className="min-h-screen bg-n-50">
      {/* Page header */}
      <div className="bg-white border-b border-n-border">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <p className="text-ds-caption text-n-500 font-mono">{asin}</p>
          <h1 className="text-ds-h2 font-display text-n-900 mt-0.5">
            Text Enhancement Report
          </h1>
          <p className="text-ds-body text-n-500 mt-0.5">
            Recommended Variant:{" "}
            <span className="font-semibold text-n-900 capitalize">
              {data.hybrid.recommended.replace("_", " ")}
            </span>
          </p>
        </div>
      </div>

      {/* Report sections */}
      <div className="max-w-6xl mx-auto px-4 py-8 space-y-8">
        <Section1Hero
          originalScores={data.original_scores}
          impact={data.impact}
          recommendedVariant={data.hybrid.recommended}
        />
        <Section2OriginalScores originalScores={data.original_scores} />
        <Section3VariantComparison
          variantA={data.variant_a}
          variantB={data.variant_b}
          hybrid={data.hybrid}
        />
        <Section4VariantA variantA={data.variant_a} />
        <Section5VariantB variantB={data.variant_b} />
        <Section6HybridRecommendation hybrid={data.hybrid} />
        {/* <Section7KeywordOptimization keywordsAdded={data.variant_a.keywords_added} originalScores={data.original_scores} /> */}
        <Section8ContentEnhancements breakdown={data.impact.breakdown} />
        <Section9ImpactForecast impact={data.impact} />
        <Section10ImpactBreakdown breakdown={data.impact.breakdown} />
        <Section11FinalOptimizedCopy hybrid={data.hybrid} />
        <Section12ImplementationChecklist
          hybrid={data.hybrid}
          variantA={data.variant_a}
          variantB={data.variant_b}
          originalScores={data.original_scores}
        />
      </div>
    </main>
  );
}
// ============================================================================
// Section 2 — Keyword Coverage Comparison
// Source: seller_keywords, competitor_keywords
// ============================================================================

import { KeywordGapData } from "./api";
import { Card  , ProgressBar, SectionLabel } from "./Primitives";

export default function CoverageComparisonSection({
  data,
}: {
  data: KeywordGapData;
}) {
  const s = data.seller_keywords.length;
  const c = data.competitor_keywords.length;
  const ratio = Math.round((s / c) * 100);
  const gap = c - s;

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <SectionLabel>Coverage</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Keyword coverage comparison
          </h2>
        </div>
        <div className="text-right">
          <div className="text-ds-caption text-n-400">Coverage ratio</div>
          <div className="text-ds-h1 font-display font-bold text-brand">
            {ratio}%
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
        {/* Seller card */}
        <div className="bg-n-50 rounded-[16px] border border-n-border p-5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-ds-caption text-n-400 mb-1">
                Your keywords
              </div>
              <div className="text-[36px] font-display font-bold text-n-900 leading-none">
                {s}
              </div>
            </div>
            <span className="text-ds-caption font-medium text-brand bg-brand-light px-2.5 py-1 rounded-full mb-1">
              Your listing
            </span>
          </div>
          <ProgressBar
            value={s}
            max={c}
            colorClassName="bg-brand"
            heightClassName="h-2.5"
          />
          <div className="text-ds-caption text-n-400 mt-2">
            {ratio}% of competitor breadth
          </div>
        </div>

        {/* Competitor card */}
        <div className="bg-n-50 rounded-[16px] border border-n-border p-5">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-ds-caption text-n-400 mb-1">
                Competitor average
              </div>
              <div className="text-[36px] font-display font-bold text-n-900 leading-none">
                {c}
              </div>
            </div>
            <span className="text-ds-caption font-medium text-n-600 bg-n-100 px-2.5 py-1 rounded-full mb-1">
              Benchmark
            </span>
          </div>
          <ProgressBar
            value={c}
            max={c}
            colorClassName="bg-n-300"
            heightClassName="h-2.5"
          />
          <div className="text-ds-caption text-n-400 mt-2">100% — full coverage</div>
        </div>
      </div>

      {/* Gap callout */}
      <div className="flex items-center justify-between bg-error-light border border-error/20 rounded-[14px] px-5 py-4">
        <div>
          <div className="text-ds-caption font-semibold text-error">
            Keyword gap
          </div>
          <div className="text-ds-body text-n-700 mt-0.5">
            You're missing{" "}
            <strong className="font-semibold text-n-900">{gap} keywords</strong>{" "}
            that competitors have indexed
          </div>
        </div>
        <div className="text-[36px] font-display font-bold text-error shrink-0">
          −{gap}
        </div>
      </div>
    </Card>
  );
}

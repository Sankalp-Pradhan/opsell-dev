// ============================================================================
// Section 3 — Critical Missing Keywords
// Source: missing_critical
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card, coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";

function CriticalKeywordCard({ kw }: { kw: MissingKeyword }) {
  const isHighImpact = kw.competitor_coverage >= 5;
  const barColor = coverageBarColor(kw.competitor_coverage);

  return (
    <div className="group bg-white hover:bg-n-50 border border-n-border hover:border-brand/30 hover:shadow-elev-2 rounded-[18px] p-5 flex flex-col gap-3 transition-all duration-200 cursor-default">
      {/* High impact badge — top right */}
      {isHighImpact && (
        <div className="flex justify-end -mb-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-error bg-error-light border border-error/20 px-2 py-0.5 rounded-full">
            High impact
          </span>
        </div>
      )}

      {/* Keyword name */}
      <div className="font-mono text-ds-h3 font-medium text-n-900 capitalize leading-tight">
        {kw.keyword}
      </div>

      {/* Coverage */}
      <div>
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-ds-caption text-n-500">
            Used by {kw.competitor_coverage} competitor
            {kw.competitor_coverage !== 1 ? "s" : ""}
          </span>
          <span className="text-ds-caption font-mono text-n-400">
            {kw.competitor_coverage}/10
          </span>
        </div>
        <ProgressBar
          value={kw.competitor_coverage}
          max={10}
          colorClassName={barColor}
          heightClassName="h-1.5"
        />
      </div>

      {/* Badges */}
      <div className="flex flex-wrap gap-1.5 pt-1">
        <span className="text-[10px] font-bold uppercase tracking-wider bg-brand text-white px-2.5 py-1 rounded-md">
          {placementLabel(kw.suggested_placement)}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wide bg-n-100 text-n-600 px-2 py-0.5 rounded-md">
          {kw.intent_type}
        </span>
        <GapTypeBadge type={kw.gap_type} />
      </div>
    </div>
  );
}

export default function CriticalKeywordsSection({
  data,
}: {
  data: KeywordGapData;
}) {
  const sorted = [...data.missing_critical].sort(
    (a, b) => b.competitor_coverage - a.competitor_coverage
  );

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <SectionLabel>Most important · fix these first</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Critical missing keywords
          </h2>
        </div>
        <span className="text-ds-body font-bold text-error bg-error-light border border-error/20 px-3 py-1 rounded-full">
          {data.missing_critical.length} gaps
        </span>
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mb-4 text-ds-caption text-n-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-error inline-block" />
          6+ competitors
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-warning inline-block" />
          4–5 competitors
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-brand inline-block" />
          1–3 competitors
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {sorted.map((kw) => (
          <CriticalKeywordCard key={kw.keyword} kw={kw} />
        ))}
      </div>
    </Card>
  );
}

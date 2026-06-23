// ============================================================================
// Section 7 — Competitor Intelligence
// Source: missing_critical, missing_secondary
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card, GapTypeBadge, SectionLabel } from "./Primitives";


export default function CompetitorIntelligenceSection({
  data,
}: {
  data: KeywordGapData;
}) {
  const all: MissingKeyword[] = [
    ...data.missing_critical,
    ...data.missing_secondary,
  ].sort((a, b) => b.competitor_coverage - a.competitor_coverage);

  const max = all[0]?.competitor_coverage ?? 10;

  // Color ramp by rank
  function barColor(coverage: number): string {
    if (coverage >= 6) return "bg-error";
    if (coverage >= 4) return "bg-warning";
    if (coverage >= 2) return "bg-brand";
    return "bg-n-300";
  }

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <SectionLabel>Intelligence</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Competitor keyword frequency
          </h2>
        </div>
        <div className="text-ds-caption text-n-400">
          All {all.length} missing terms ranked by competitor usage
        </div>
      </div>

      <div className="flex flex-col divide-y divide-n-100">
        {all.map((kw, i) => {
          const barPct = Math.round((kw.competitor_coverage / max) * 100);
          const isCritical = data.missing_critical.some(
            (k) => k.keyword === kw.keyword
          );

          return (
            <div
              key={kw.keyword}
              className="flex items-center gap-4 py-3 group"
            >
              {/* Rank */}
              <span className="text-ds-caption text-n-300 font-mono w-5 text-right shrink-0">
                {i + 1}
              </span>

              {/* Keyword */}
              <div className="flex items-center gap-2 w-36 shrink-0">
                <span className="text-ds-body font-medium text-n-800 capitalize">
                  {kw.keyword}
                </span>
                {isCritical && (
                  <span className="text-[9px] font-bold uppercase text-error bg-error-light border border-error/20 px-1.5 py-0.5 rounded shrink-0">
                    Critical
                  </span>
                )}
              </div>

              {/* Bar */}
              <div className="flex-1 h-2 bg-n-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${barColor(kw.competitor_coverage)}`}
                  style={{ width: `${barPct}%` }}
                />
              </div>

              {/* Count */}
              <span className="text-ds-caption font-medium text-n-600 w-24 text-right shrink-0">
                {kw.competitor_coverage} competitor
                {kw.competitor_coverage !== 1 ? "s" : ""}
              </span>

              {/* Gap type */}
              <div className="shrink-0 hidden md:block">
                <GapTypeBadge type={kw.gap_type} />
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

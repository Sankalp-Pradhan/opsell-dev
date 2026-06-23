// ============================================================================
// Section 6 — Keyword Placement Recommendations
// Source: missing_critical[].suggested_placement
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


const PLACEMENT_CONFIG: {
  key: string;
  label: string;
  sublabel: string;
  accent: string;
  badgeBg: string;
  badgeText: string;
  cardBg: string;
  border: string;
}[] = [
  {
    key: "title",
    label: "Title",
    sublabel: "Highest visibility — appears in search results",
    accent: "bg-brand",
    badgeBg: "bg-brand",
    badgeText: "text-white",
    cardBg: "bg-brand-light",
    border: "border-brand/25",
  },
  {
    key: "bullet_2",
    label: "Bullet 2",
    sublabel: "Second bullet — strong indexation weight",
    accent: "bg-warning",
    badgeBg: "bg-warning-light",
    badgeText: "text-warning",
    cardBg: "bg-warning-light",
    border: "border-warning/25",
  },
  {
    key: "bullet_3",
    label: "Bullet 3",
    sublabel: "Third bullet — supports long-tail indexation",
    accent: "bg-n-300",
    badgeBg: "bg-n-100",
    badgeText: "text-n-600",
    cardBg: "bg-n-50",
    border: "border-n-border",
  },
];

export default function PlacementGuideSection({ data }: { data: KeywordGapData }) {
  // Group missing_critical by placement
  const grouped: Record<string, MissingKeyword[]> = {};
  data.missing_critical.forEach((kw) => {
    if (!grouped[kw.suggested_placement]) grouped[kw.suggested_placement] = [];
    grouped[kw.suggested_placement].push(kw);
  });

  return (
    <Card className="p-6">
      <div className="mb-5">
        <SectionLabel>Where to add them</SectionLabel>
        <h2 className="text-ds-h2 font-display text-n-800">
          Keyword placement guide
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PLACEMENT_CONFIG.map((cfg) => {
          const keywords = grouped[cfg.key] ?? [];

          return (
            <div
              key={cfg.key}
              className={`rounded-[18px] border p-5 ${cfg.cardBg} ${cfg.border}`}
            >
              {/* Header */}
              <div className="flex items-center gap-2 mb-1">
                <div className={`w-1.5 h-4 rounded-full ${cfg.accent}`} />
                <span
                  className={`text-ds-caption font-bold uppercase tracking-wider px-2 py-0.5 rounded-md ${cfg.badgeBg} ${cfg.badgeText}`}
                >
                  {cfg.label}
                </span>
              </div>
              <p className="text-ds-caption text-n-400 mb-4 ml-3.5">
                {cfg.sublabel}
              </p>

              {/* Keywords */}
              {keywords.length === 0 ? (
                <p className="text-ds-caption text-n-300 italic">
                  No critical keywords assigned here
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  {keywords
                    .sort((a, b) => b.competitor_coverage - a.competitor_coverage)
                    .map((kw) => (
                      <div
                        key={kw.keyword}
                        className="flex items-center justify-between gap-2 bg-white/70 border border-white/80 rounded-[10px] px-3 py-2"
                      >
                        <span className="text-ds-body font-medium text-n-900 capitalize">
                          {kw.keyword}
                        </span>
                        <span className="text-ds-caption font-mono text-n-400 shrink-0">
                          {kw.competitor_coverage}×
                        </span>
                      </div>
                    ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Note */}
      <p className="text-ds-caption text-n-400 mt-4">
        Competitor coverage (×) shows how many of 10 competitors use this keyword.
        Higher coverage = more traffic potential.
      </p>
    </Card>
  );
}

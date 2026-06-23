// ============================================================================
// Section 1 — Executive Summary (Hero)
// Source: indexation_gap_score, missing_critical, missing_secondary,
//         seller_keywords, competitor_keywords
// ============================================================================
'use client'

import { KeywordGapData } from "./api";
import { Card  , SectionLabel } from "./Primitives";

export default function KeywordGapHero({ data }: { data: KeywordGapData }) {
  const score = data.indexation_gap_score;
  const criticalCount = data.missing_critical.length;
  const secondaryCount = data.missing_secondary.length;
  const sellerCount = data.seller_keywords.length;
  const competitorCount = data.competitor_keywords.length;

  // Score arc: low score = bad (red), high = good (green)
  const scoreColor =
    score >= 70 ? "text-success" : score >= 40 ? "text-warning" : "text-error";

  const stats = [
    {
      val: criticalCount,
      label: "Critical gaps",
      color: "text-error",
      bg: "bg-error-light border-error/20",
    },
    {
      val: secondaryCount,
      label: "Secondary gaps",
      color: "text-warning",
      bg: "bg-warning-light border-warning/20",
    },
    {
      val: sellerCount,
      label: "Your keywords",
      color: "text-n-800",
      bg: "bg-n-50 border-n-border",
    },
    {
      val: competitorCount,
      label: "Competitor keywords",
      color: "text-brand",
      bg: "bg-brand-light border-brand/20",
    },
  ];

  return (
    <Card className="p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        {/* Left — headline */}
        <div className="flex-1">
          <SectionLabel>Keyword Gap Analysis</SectionLabel>
          <h1 className="text-ds-display font-display text-n-900 mt-2 leading-[1.08]">
            Your listing is missing{" "}
            <span className="text-brand">{criticalCount} critical</span>
            <br />
            keywords competitors rank for
          </h1>
          <p className="text-ds-body text-n-500 mt-3 max-w-lg leading-relaxed">
            Every gap below is a search query where buyers find your competitors
            but not you. Fix the critical ones first — they carry the highest
            traffic potential.
          </p>

          {/* Warning pill */}
          <div className="mt-5 inline-flex items-center gap-2 bg-warning-light border border-warning/25 text-warning text-ds-caption font-semibold px-4 py-2 rounded-full">
            <span>⚠</span>
            <span>Discoverability below competitor average</span>
          </div>
        </div>

        {/* Right — metrics */}
        <div className="flex flex-col gap-4 shrink-0 w-full lg:w-auto lg:min-w-[320px]">
          {/* Gap score */}
          <div className="bg-n-50 rounded-[20px] border border-n-border px-6 py-5 flex items-center justify-between gap-4">
            <div>
              <div className="text-ds-caption text-n-400 mb-1">Gap score</div>
              <div className={`text-[48px] font-display font-bold leading-none ${scoreColor}`}>
                {score}
              </div>
              <div className="text-ds-caption text-n-400 mt-1">out of 100</div>
            </div>
            {/* Mini ring visual */}
            <div className="relative w-20 h-20 shrink-0">
              <svg viewBox="0 0 80 80" className="w-full h-full -rotate-90">
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke="#F0F1F3"
                  strokeWidth="8"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="32"
                  fill="none"
                  stroke={score >= 70 ? "#16A34A" : score >= 40 ? "#F59E0B" : "#EF4444"}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray={`${(score / 100) * 201} 201`}
                />
              </svg>
              <div
                className={`absolute inset-0 flex items-center justify-center text-ds-caption font-bold ${scoreColor}`}
              >
                {score}%
              </div>
            </div>
          </div>

          {/* 4 stat tiles */}
          <div className="grid grid-cols-2 gap-3">
            {stats.map(({ val, label, color, bg }) => (
              <div
                key={label}
                className={`rounded-[16px] border px-4 py-3 ${bg}`}
              >
                <div className={`text-[26px] font-display font-bold leading-none ${color}`}>
                  {val}
                </div>
                <div className="text-ds-caption text-n-500 mt-1 leading-tight">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

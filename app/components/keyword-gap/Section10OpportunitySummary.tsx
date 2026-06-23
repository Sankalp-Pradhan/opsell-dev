// ============================================================================
// Section 10 — Opportunity Breakdown (Summary Footer)
// Source: derived from missing_critical, missing_secondary
// ============================================================================

import { KeywordGapData } from "./api";
import { Card, SectionLabel } from "./Primitives";
import Link from "next/link";

export default function OpportunitySummarySection({
  data,
  asin,
}: {
  data: KeywordGapData;
  asin: string;
}) {
  const highCoverage = data.missing_critical.filter(
    (k) => k.competitor_coverage >= 5
  ).length;

  const stats = [
    {
      val: data.missing_critical.length,
      label: "Critical opportunities",
      sub: "Immediate action required",
      color: "text-error",
      bg: "bg-error-light",
      border: "border-error/20",
      icon: "🔴",
    },
    {
      val: data.missing_secondary.length,
      label: "Secondary opportunities",
      sub: "Backend / lower-priority terms",
      color: "text-warning",
      bg: "bg-warning-light",
      border: "border-warning/20",
      icon: "🟡",
    },
    {
      val: highCoverage,
      label: "High-coverage gaps",
      sub: "Used by 5+ competitors",
      color: "text-brand",
      bg: "bg-brand-light",
      border: "border-brand/20",
      icon: "🔵",
    },
  ];

  const lqsHref = `/lqs-score?asin=${asin}`;
  
  return (
    <Card className="p-6">
      <div className="mb-5">
        <SectionLabel>Summary</SectionLabel>
        <h2 className="text-ds-h2 font-display text-n-800">
          Total opportunity breakdown
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map(({ val, label, sub, color, bg, border, icon }) => (
          <div
            key={label}
            className={`${bg} border ${border} rounded-[18px] p-6 flex flex-col gap-2`}
          >
            <div className="text-xl">{icon}</div>
            <div className={`text-[44px] font-display font-bold leading-none ${color}`}>
              {val}
            </div>
            <div className="text-ds-body font-semibold text-n-800">{label}</div>
            <div className="text-ds-caption text-n-500">{sub}</div>
          </div>
        ))}
      </div>

      {/* Conversion pool → LQS page */}
      <div className="mt-5 bg-n-900 rounded-[20px] p-6 flex flex-col gap-5">
        {/* Headline */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-ds-caption font-semibold uppercase tracking-wider text-n-400 mb-1">
              Next step
            </div>
            <h3 className="text-ds-h2 font-display text-white leading-snug">
              See how your listing scores on{" "}
              <span className="text-brand">A9 & RUFUS</span>
            </h3>
            <p className="text-ds-body text-n-400 mt-2 max-w-lg">
              Fixing keyword gaps improves discoverability — but your Listing
              Quality Score determines whether Amazon's algorithm ranks and
              converts that traffic. Check where you stand against competitors.
            </p>
          </div>
          {/* Score preview pill */}
          <div className="shrink-0 hidden sm:flex flex-col items-center bg-n-800 border border-n-700 rounded-[16px] px-6 py-4 gap-1">
            <div className="text-ds-caption text-n-400">Your LQS</div>
            <div className="text-[40px] font-display font-bold text-error leading-none">
              ?
            </div>
            <div className="text-ds-caption text-n-500">unchecked</div>
          </div>
        </div>

        {/* 3 micro-stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "A9 compliance", desc: "Title, bullets, backend keywords" },
            { label: "RUFUS readiness", desc: "Intent, use-case & conversational fit" },
            { label: "Competitor gap", desc: "How far behind the category leader" },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="bg-n-800 border border-n-700 rounded-[14px] px-4 py-3"
            >
              <div className="text-ds-caption font-semibold text-n-200">
                {label}
              </div>
              <div className="text-ds-caption text-n-500 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href={lqsHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-ds-body font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors duration-150"
          >
            Run LQS analysis →
          </Link>
          <span className="text-ds-caption text-n-500">
            Takes ~10 seconds · no extra input needed
          </span>
        </div>
      </div>
    </Card>
  );
}
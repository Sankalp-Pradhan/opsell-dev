// ============================================================================
// Section 14 — Opportunity Breakdown (Summary Footer)
// Source: derived from LQSApiResponse
// ============================================================================

import Link from "next/link";
import { LQSApiResponse } from "@/app/(lqs-score)/types/api";
import { Card, SectionLabel } from "../keyword-gap/Primitives";

export default function OpportunitySummarySection({
  data,
  asin,
}: {
  data: LQSApiResponse;
  asin: string;
}) {
  const priorityFixCount = data.feedback.priority_fixes?.length ?? 0;
  const quickWinCount = data.feedback.quick_wins?.length ?? 0;
  const behindOnDimensions =
    data.dimension_gaps?.filter((g) => g.gap > 0).length ?? 0;

  const stats = [
    {
      val: priorityFixCount,
      label: "Critical opportunities",
      sub: "Immediate action required",
      color: "text-error",
      bg: "bg-error-light",
      border: "border-error/20",
      icon: "🔴",
    },
    {
      val: quickWinCount,
      label: "Quick wins",
      sub: "Low-effort, high-impact fixes",
      color: "text-warning",
      bg: "bg-warning-light",
      border: "border-warning/20",
      icon: "🟡",
    },
    {
      val: behindOnDimensions,
      label: "Dimensions behind avg",
      sub: "Target scores below competitor avg",
      color: "text-brand",
      bg: "bg-brand-light",
      border: "border-brand/20",
      icon: "🔵",
    },
  ];

  const textEnhancementHref = `/text-enhancement?asin=${asin}`;

  return (
    <Card className="p-6">
      <div className="mb-5">
        <SectionLabel>Summary</SectionLabel>
        <h2 className="text-ds-h2 font-display text-n-800">
          Total opportunity breakdown
        </h2>
      </div>

      {/* Stat cards */}
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

      {/* Conversion card → Text Enhancement */}
      <div className="mt-5 bg-n-900 rounded-[20px] p-6 flex flex-col gap-5">
        {/* Headline */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-ds-caption font-semibold uppercase tracking-wider text-n-400 mb-1">
              Next step
            </div>
            <h3 className="text-ds-h2 font-display text-white leading-snug">
              Turn your LQS insights into{" "}
              <span className="text-brand">high-converting copy</span>
            </h3>
            <p className="text-ds-body text-n-400 mt-2 max-w-lg">
              You've seen the gaps — now let AI rewrite your title, bullets, and
              description to fix them. Keyword-rich, persona-led, and
              RUFUS-ready copy in seconds.
            </p>
          </div>
          {/* Icon pill */}
          <div className="shrink-0 hidden sm:flex flex-col items-center bg-n-800 border border-n-700 rounded-[16px] px-6 py-4 gap-1">
            <div className="text-[32px] leading-none">✍️</div>
            <div className="text-ds-caption text-n-400 mt-1">AI rewrite</div>
          </div>
        </div>

        {/* 3 micro-stats */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Title rewrite", desc: "Keyword-rich, within character limits" },
            { label: "Bullet points", desc: "Benefits-first, search-optimised" },
            { label: "Description", desc: "Brand voice with full keyword coverage" },
          ].map(({ label, desc }) => (
            <div
              key={label}
              className="bg-n-800 border border-n-700 rounded-[14px] px-4 py-3"
            >
              <div className="text-ds-caption font-semibold text-n-200">{label}</div>
              <div className="text-ds-caption text-n-500 mt-0.5">{desc}</div>
            </div>
          ))}
        </div>

        {/* CTA row */}
        <div className="flex items-center gap-3 flex-wrap">
          <Link
            href={textEnhancementHref}
            className="inline-flex items-center gap-2 bg-brand text-white text-ds-body font-semibold px-6 py-3 rounded-full hover:bg-brand-dark transition-colors duration-150"
          >
            Enhance listing copy →
          </Link>
          <span className="text-ds-caption text-n-500">
            Uses your LQS findings · ready in seconds
          </span>
        </div>
      </div>
    </Card>
  );
}
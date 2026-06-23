"use client";

import { PriorityFix } from "@/app/(competitor-analysis)/types/api";
import { useState } from "react";

/**
 * SECTION 5 — Top fix priorities — teaser (top 3 issues)
 * Source: LQS API (`feedback.priority_fixes`), top 3 only.
 * Full list lives on the dedicated LQS report page (Page 3).
 */
export default function TopFixPrioritiesSection({
  priorityFixes,
  asin,
  onViewFullReport,
}: {
  priorityFixes: PriorityFix[];
  asin: string;
  onViewFullReport?: () => void; // wire up navigation to Page 3 (LQS report)
}) {
  const topThree = priorityFixes.slice(0, 3);

  return (
    <div className="bg-white rounded-xl border border-n-border shadow-elev-1 p-5">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-ds-h3 font-display text-n-800">Top issues to fix</h2>
        <button
          onClick={onViewFullReport}
          className="text-ds-caption text-brand font-medium hover:underline"
        >
          View full LQS report →
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topThree.map((fix, idx) => (
          <FixCard key={idx} fix={fix} />
        ))}
      </div>
    </div>
  );
}

function FixCard({ fix }: { fix: PriorityFix }) {
  const [expanded, setExpanded] = useState(false);
  const borderClass =
    fix.impact_score >= 85
      ? "border-l-4 border-error"
      : fix.impact_score >= 60
      ? "border-l-4 border-warning"
      : "border-l-4 border-n-border";

  return (
    <div className={`bg-n-50 rounded-lg ${borderClass} p-4 flex flex-col gap-2`}>
      <div className="flex items-start justify-between gap-2">
        <span className="text-ds-caption font-medium text-n-500 uppercase tracking-wide">
          {fix.dimension.replace(/_/g, " ")}
        </span>
        <span className="text-ds-caption font-display font-bold text-n-800 shrink-0">
          {fix.impact_score} impact
        </span>
      </div>

      <p className="text-ds-body-sm font-medium text-n-800 line-clamp-3">{fix.issue}</p>

      <button
        onClick={() => setExpanded((e) => !e)}
        className="text-ds-caption text-n-500 text-left hover:text-brand"
      >
        {expanded ? "Hide fix ↑" : "See fix →"}
      </button>

      {expanded && (
        <p className="text-ds-caption text-n-600 border-t border-n-border pt-2">
          {fix.fix_suggestion}
        </p>
      )}
    </div>
  );
}

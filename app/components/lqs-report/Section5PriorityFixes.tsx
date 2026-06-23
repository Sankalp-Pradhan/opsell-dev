// import { LQSPriorityFix } from "@/app/(lqs-score)/lib/api/lqs-api";

// interface Props { fixes: LQSPriorityFix[] }

// function impactColor(s: number) { return s >= 80 ? "bg-error text-white" : s >= 60 ? "bg-warning text-white" : "bg-n-400 text-white"; }
// function impactLabel(s: number) { return s >= 80 ? "HIGH IMPACT" : s >= 60 ? "MEDIUM" : "LOW"; }

// export default function Section5PriorityFixes({ fixes }: Props) {
//   return (
//     <section className="bg-white rounded-2xl shadow-elev-2 p-8">
//       <h2 className="text-ds-h2 font-display text-n-900 mb-2">Priority Fixes</h2>
//       <p className="text-ds-body-sm text-n-500 mb-6">Ranked by impact — fix the top ones first</p>
//       <div className="space-y-4">
//         {[...fixes].sort((a, b) => b.impact_score - a.impact_score).map((fix, i) => (
//           <div key={i} className="border border-n-border rounded-xl p-5 flex gap-5">
//             <div className="flex flex-col items-center gap-1 shrink-0">
//               <div className={`w-14 h-14 rounded-xl flex items-center justify-center text-ds-h2 font-display ${impactColor(fix.impact_score)}`}>
//                 {fix.impact_score}
//               </div>
//               <span className="text-[10px] font-bold text-n-500 uppercase tracking-wide">{impactLabel(fix.impact_score)}</span>
//             </div>
//             <div className="flex-1 min-w-0">
//               <span className="text-ds-caption bg-brand-light text-brand px-2 py-0.5 rounded-full capitalize">
//                 {fix.dimension.replace(/_/g, " ")}
//               </span>
//               <p className="text-ds-body text-n-800 font-medium mt-2 mb-2">{fix.issue}</p>
//               <p className="text-ds-body-sm text-n-500">{fix.fix_suggestion}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }


"use client";

import Link from "next/link";
import type { PriorityFix } from "@/app/(competitor-analysis)/types/api";

interface Props {
  priorityFixes: PriorityFix[];
  asin: string;
  onViewFullReport?: () => void; // kept for backward-compat, Link is the primary nav
}

function impactColor(score: number) {
  if (score >= 80) return "bg-error text-white";
  if (score >= 60) return "bg-warning text-white";
  return "bg-n-400 text-white";
}

function impactLabel(score: number) {
  if (score >= 80) return "HIGH";
  if (score >= 60) return "MED";
  return "LOW";
}

export default function TopFixPrioritiesSection({ priorityFixes, asin, onViewFullReport }: Props) {
  const top3 = [...priorityFixes]
    .sort((a, b) => b.impact_score - a.impact_score)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-2xl shadow-elev-2 p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <p className="text-ds-caption text-n-500 uppercase tracking-wide font-semibold mb-1">
            Priority fixes
          </p>
          <h2 className="text-ds-h2 font-display text-n-900">
            Top issues hurting your score
          </h2>
        </div>
        <Link
          href={`/lqs-score?asin=${asin}`}
          className="shrink-0 text-ds-body-sm font-semibold text-brand hover:text-brand-dark transition-colors"
        >
          View full report →
        </Link>
      </div>

      <div className="space-y-3">
        {top3.map((fix, i) => (
          <div key={i} className="flex items-start gap-4 border border-n-border rounded-xl p-4">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center text-ds-h3 font-display ${impactColor(fix.impact_score)}`}
              >
                {fix.impact_score}
              </div>
              <span className="text-[10px] font-bold text-n-500 uppercase tracking-wide">
                {impactLabel(fix.impact_score)}
              </span>
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-ds-caption bg-brand-light text-brand px-2 py-0.5 rounded-full capitalize">
                {fix.dimension.replace(/_/g, " ")}
              </span>
              <p className="text-ds-body text-n-800 font-medium mt-2 line-clamp-2">
                {fix.issue}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer CTA */}
      <div className="mt-5 bg-n-900 rounded-xl p-5 flex items-center justify-between gap-4">
        <div>
          <p className="text-ds-body font-semibold text-white">
            Get your full Listing Quality Score
          </p>
          <p className="text-ds-caption text-n-400 mt-0.5">
            A9 compliance · Rufus readiness · gap vs category leader
          </p>
        </div>
        <Link
          href={`/lqs-score?asin=${asin}`}
          onClick={onViewFullReport}
          className="shrink-0 inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white text-ds-body font-semibold px-5 py-2.5 rounded-full transition-colors"
        >
          Run LQS analysis →
        </Link>
      </div>
    </div>
  );
}
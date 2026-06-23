
import { GapReport } from "@/app/(competitor-analysis)/types/api";
import { SectionCard, DeltaChip } from "./shared/Primitives";

const METRIC_LABELS: Record<string, string> = {
  overall: "Overall",
  a9_compliance: "A9 Compliance",
  rufus_readiness: "Rufus Readiness",
  lqs_score: "LQS",
};

/**
 * SECTION 4 — Gap summary: target vs best competitor
 * Source: LQS API (`gap_report`)
 */
export default function GapSummarySection({ gapReport }: { gapReport: GapReport }) {
  const { target_summary, best_competitor, gaps } = gapReport;

  return (
    <SectionCard title="How you compare to the leader">
      <div className="flex flex-col lg:flex-row">
        {/* Left — gap rows (60%) */}
        <div className="flex-[3] divide-y divide-n-border">
          {gaps.map((row) => (
            <div
              key={row.metric}
              className="flex items-center justify-between px-5 py-3 text-ds-body-sm"
            >
              <span className="text-n-700 font-medium w-36">
                {METRIC_LABELS[row.metric] ?? row.metric}
              </span>
              <span className="text-n-800 font-display font-semibold w-12 text-right">
                {row.target}
              </span>
              <span className="text-n-400 px-2">vs</span>
              <span className="text-n-600 w-12">{row.best}</span>
              <DeltaChip gap={row.gap} />
            </div>
          ))}

          {/* Health flags */}
          {target_summary.flags?.length > 0 && (
            <div className="px-5 py-3 flex flex-wrap items-center gap-2">
              <span className="text-ds-caption text-n-500 mr-1">Health flags</span>
              {target_summary.flags.map((flag) => (
                <span
                  key={flag}
                  className="inline-flex items-center gap-1 bg-warning-light text-warning text-ds-caption font-medium px-2 py-0.5 rounded-full"
                >
                  ⚠ {flag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right — best competitor card (40%) */}
        <div className="flex-[2] p-5 border-t lg:border-t-0 lg:border-l border-n-border">
          <div className="bg-n-50 rounded-lg p-4 flex flex-col gap-2">
            <span className="text-ds-caption text-n-500">Best competitor</span>
            <p
              className="text-ds-body-sm font-medium text-n-800 line-clamp-2"
              title={best_competitor.title}
            >
              {best_competitor.title}
            </p>
            <span className="inline-flex items-center self-start text-ds-caption font-display font-bold bg-white text-n-800 px-2 py-0.5 rounded-full shadow-elev-1">
              Overall {best_competitor.overall}
            </span>
            <p className="text-ds-caption text-n-500">
              Leader overview — A9 {best_competitor.a9}, Rufus {best_competitor.rufus}
            </p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

// ============================================================================
// Section 5 — Content Gap Findings
// Source: content_gaps
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


// Heuristic: extract a short title from the gap string
function gapTitle(gap: string): string {
  if (gap.includes("one piece")) return "Missing 'one piece' phrase";
  if (gap.includes("V-neck") || gap.includes("v-neck") || gap.includes("V-Neck"))
    return "V-neck inconsistency";
  if (gap.includes("A-line") || gap.includes("fit and flare"))
    return "Missing shape descriptors";
  if (gap.includes("occasion") || gap.includes("party") || gap.includes("office"))
    return "No occasion keywords";
  if (gap.includes("India") || gap.includes("origin"))
    return "Country of origin absent";
  if (gap.includes("Stylish") || gap.includes("stylish"))
    return "Missing 'stylish' term";
  if (gap.includes("Floral") || gap.includes("floral"))
    return "Floral vs generic 'printed'";
  return "Content gap detected";
}

function impactLevel(index: number): "High" | "Medium" | "Low" {
  if (index < 3) return "High";
  if (index < 5) return "Medium";
  return "Low";
}

const IMPACT_STYLES = {
  High: {
    dot: "bg-error",
    badge: "bg-error-light text-error border-error/20",
    line: "bg-error",
  },
  Medium: {
    dot: "bg-warning",
    badge: "bg-warning-light text-warning border-warning/20",
    line: "bg-warning",
  },
  Low: {
    dot: "bg-n-300",
    badge: "bg-n-100 text-n-500 border-n-border",
    line: "bg-n-200",
  },
};

export default function ContentGapsSection({ data }: { data: KeywordGapData }) {
  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <SectionLabel>AI audit</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Content gap findings
          </h2>
        </div>
        <span className="text-ds-caption text-n-400 font-medium">
          {data.content_gaps.length} issues found
        </span>
      </div>

      {/* Timeline layout */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-0 bottom-0 w-px bg-n-100" />

        <div className="flex flex-col gap-0">
          {data.content_gaps.map((gap, i) => {
            const impact = impactLevel(i);
            const styles = IMPACT_STYLES[impact];

            return (
              <div key={i} className="relative flex gap-5 pb-6 last:pb-0">
                {/* Timeline dot */}
                <div
                  className={`relative z-10 w-[15px] h-[15px] rounded-full border-2 border-white shrink-0 mt-1 ${styles.dot}`}
                />

                {/* Content */}
                <div className="flex-1 bg-n-50 border border-n-border rounded-[14px] p-4 hover:border-n-200 transition-colors duration-150">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <div className="text-ds-body font-semibold text-n-900">
                      {gapTitle(gap)}
                    </div>
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border shrink-0 ${styles.badge}`}
                    >
                      {impact}
                    </span>
                  </div>
                  <p className="text-ds-body text-n-600 leading-relaxed">
                    {gap}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

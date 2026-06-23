// ============================================================================
// Section 9 — Backend Search Terms Audit
// Source: backend_audit, generated_backend_string, backend_byte_plan,
//         backend_keyword_sets
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , CopyButton, coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


const SLOT_COLORS = [
  "bg-brand",
  "bg-warning",
  "bg-success",
  "bg-n-300",
];

const SET_CONFIG: { key: keyof KeywordGapData["backend_keyword_sets"]; label: string; color: string }[] = [
  { key: "synonyms", label: "Synonyms", color: "bg-brand-light text-brand border-brand/20" },
  { key: "long_tail", label: "Long tail", color: "bg-warning-light text-warning border-warning/20" },
  { key: "intent_phrases", label: "Intent phrases", color: "bg-success-light text-success border-success/20" },
  { key: "locale_variants", label: "Locale variants", color: "bg-n-100 text-n-600 border-n-border" },
  { key: "seasonal", label: "Seasonal", color: "bg-n-100 text-n-600 border-n-border" },
];

export default function BackendAuditSection({ data }: { data: KeywordGapData }) {
  const plan = data.backend_byte_plan;
  const pct = Math.round((plan.allocated / plan.total_available) * 100);
  const isHealthy = plan.remaining > 20;

  return (
    <Card className="p-6">
      <div className="mb-6">
        <SectionLabel>Backend search terms</SectionLabel>
        <h2 className="text-ds-h2 font-display text-n-800">
          Search terms audit
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* -- Left column: usage + allocation -- */}
        <div className="flex flex-col gap-4">
          {/* Usage card */}
          <div className="bg-n-50 rounded-[16px] border border-n-border p-5">
            <div className="text-ds-caption text-n-400 mb-3 font-medium uppercase tracking-wide">
              Byte usage
            </div>
            <div className="flex items-end justify-between mb-3">
              <div>
                <span className="text-[40px] font-display font-bold text-n-900 leading-none">
                  {plan.allocated}
                </span>
                <span className="text-ds-body text-n-400 ml-1">
                  / {plan.total_available} bytes
                </span>
              </div>
              <div
                className={`text-ds-h2 font-display font-bold ${
                  isHealthy ? "text-success" : "text-warning"
                }`}
              >
                {pct}%
              </div>
            </div>
            <ProgressBar
              value={plan.allocated}
              max={plan.total_available}
              colorClassName={isHealthy ? "bg-success" : "bg-warning"}
              heightClassName="h-3"
            />
            <div className="flex items-center justify-between mt-2">
              <span className="text-ds-caption text-n-400">
                {plan.remaining} bytes remaining
              </span>
              <span
                className={`text-ds-caption font-semibold ${
                  isHealthy ? "text-success" : "text-warning"
                }`}
              >
                {isHealthy ? "✓ Good headroom" : "⚠ Nearly full"}
              </span>
            </div>
          </div>

          {/* Byte allocation breakdown */}
          <div className="bg-n-50 rounded-[16px] border border-n-border p-5">
            <div className="text-ds-caption text-n-400 mb-4 font-medium uppercase tracking-wide">
              Allocation breakdown
            </div>

            <div className="flex flex-col gap-3">
              {plan.slot_breakdown.map((slot, i) => (
                <div key={slot.keyword_group}>
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full shrink-0 ${SLOT_COLORS[i]}`}
                      />
                      <span className="text-ds-body-sm text-n-700 capitalize">
                        {slot.keyword_group}
                      </span>
                    </div>
                    <span className="text-ds-caption font-mono text-n-500">
                      {slot.bytes_used}b
                    </span>
                  </div>
                  <div className="ml-4">
                    <ProgressBar
                      value={slot.bytes_used}
                      max={plan.total_available}
                      colorClassName={SLOT_COLORS[i]}
                      heightClassName="h-1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* -- Right column: generated string + sets -- */}
        <div className="flex flex-col gap-4">
          {/* Generated string */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="text-ds-caption font-medium text-n-500 uppercase tracking-wide">
                Generated backend string
              </div>
              <CopyButton text={data.generated_backend_string} />
            </div>
            <div className="bg-n-900 rounded-[16px] p-4 h-[120px] overflow-y-auto">
              <p className="font-mono text-ds-body-sm text-n-300 leading-relaxed break-words">
                {data.generated_backend_string}
              </p>
            </div>
          </div>

          {/* Keyword sets */}
          <div className="bg-n-50 rounded-[16px] border border-n-border p-5">
            <div className="text-ds-caption font-medium text-n-500 uppercase tracking-wide mb-4">
              Keyword strategy by type
            </div>

            <div className="flex flex-col gap-4">
              {SET_CONFIG.map(({ key, label, color }) => {
                const items = data.backend_keyword_sets[key] as string[];
                if (!items || items.length === 0) return null;

                // Flatten comma/space-separated intent phrases
                const chips = items.flatMap((item) =>
                  key === "intent_phrases" ? item.split(" ") : [item]
                );

                return (
                  <div key={key}>
                    <div className="text-ds-caption font-semibold text-n-600 mb-2">
                      {label}
                      <span className="text-n-400 font-normal ml-1">
                        ({chips.length})
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {chips.map((chip) => (
                        <span
                          key={chip}
                          className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${color}`}
                        >
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

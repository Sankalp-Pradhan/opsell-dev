// ============================================================================
// Section 4 — Secondary Opportunities
// Source: missing_secondary
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


const GROUPS: { label: string; description: string; keys: string[] }[] = [
  {
    label: "Style variants",
    description: "Synonym search terms for dress silhouettes",
    keys: ["anarkali", "frock", "gown", "tiered dress", "smock dress", "pleated dress"],
  },
  {
    label: "Occasions",
    description: "Use-case and intent-driven terms",
    keys: ["office wear", "party dress", "diwali", "birthday dress"],
  },
  {
    label: "Attributes",
    description: "Physical descriptors buyers filter by",
    keys: ["calf length", "flutter sleeves"],
  },
];

function SecondaryKeywordRow({ kw }: { kw: MissingKeyword }) {
  const isUseCse = kw.intent_type === "use_case";

  return (
    <div className="flex items-center justify-between gap-3 py-2.5 border-b border-n-100 last:border-0">
      <span className="text-ds-body text-n-800 capitalize font-medium">
        {kw.keyword}
      </span>
      <div className="flex items-center gap-2 shrink-0">
        {isUseCse && (
          <span className="text-[10px] font-semibold uppercase tracking-wide bg-warning-light text-warning border border-warning/20 px-1.5 py-0.5 rounded">
            Use case
          </span>
        )}
        <span className="text-ds-caption font-mono text-n-400">
          {kw.competitor_coverage}×
        </span>
      </div>
    </div>
  );
}

export default function SecondaryOpportunitiesSection({
  data,
}: {
  data: KeywordGapData;
}) {
  const byKey = Object.fromEntries(
    data.missing_secondary.map((k) => [k.keyword, k])
  );

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-5">
        <div>
          <SectionLabel>Lower priority · backend placement</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Secondary opportunities
          </h2>
        </div>
        <span className="text-ds-body font-bold text-n-600 bg-n-100 border border-n-border px-3 py-1 rounded-full">
          {data.missing_secondary.length} keywords
        </span>
      </div>

      <p className="text-ds-body text-n-500 mb-5 max-w-2xl">
        These terms don't need to be in your title or bullets, but adding them to
        backend search terms extends your discoverability with minimal risk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {GROUPS.map(({ label, description, keys }) => (
          <div
            key={label}
            className="bg-n-50 rounded-[16px] border border-n-border p-5"
          >
            <div className="mb-1">
              <div className="text-ds-caption font-bold uppercase tracking-wider text-n-600">
                {label}
              </div>
              <div className="text-ds-caption text-n-400 mt-0.5">
                {description}
              </div>
            </div>

            <div className="mt-3 divide-y divide-n-100">
              {keys.map((k) => {
                const kw = byKey[k];
                if (!kw) return null;
                return <SecondaryKeywordRow key={k} kw={kw} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

// ============================================================================
// Section 8 — Optimized Title Preview
// Source: rewritten_title_snippet, missing_critical
// ============================================================================

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , CopyButton, coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


// Highlight the added keywords in the rewritten title
function HighlightedTitle({
  title,
  addedKeywords,
}: {
  title: string;
  addedKeywords: string[];
}) {
  // Build a regex that matches any of the added keywords (case-insensitive)
  const escaped = addedKeywords.map((k) =>
    k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");

  const parts = title.split(regex);

  return (
    <p className="font-mono text-ds-body text-n-200 leading-relaxed break-words">
      {parts.map((part, i) => {
        const isMatch = addedKeywords.some(
          (k) => k.toLowerCase() === part.toLowerCase()
        );
        return isMatch ? (
          <mark
            key={i}
            className="bg-brand/30 text-white rounded px-0.5 not-italic"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </p>
  );
}

export default function TitlePreviewSection({ data }: { data: KeywordGapData }) {
  const addedKeywords = data.missing_critical
    .filter((k) => k.suggested_placement === "title")
    .map((k) => k.keyword);

  const allAdded = data.missing_critical.map((k) => k.keyword);

  return (
    <Card className="p-6">
      <div className="mb-5">
        <SectionLabel>AI-generated output · most impressive for demos</SectionLabel>
        <h2 className="text-ds-h2 font-display text-n-800">
          Optimized title preview
        </h2>
      </div>

      {/* Dark code card */}
      <div className="bg-n-900 rounded-[16px] p-5">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-error/60" />
            <div className="w-3 h-3 rounded-full bg-warning/60" />
            <div className="w-3 h-3 rounded-full bg-success/60" />
            <span className="text-ds-caption text-n-500 font-mono ml-2">
              suggested_title.txt
            </span>
          </div>
          <CopyButton text={data.rewritten_title_snippet} />
        </div>

        <div className="border-t border-n-700 pt-4">
          <HighlightedTitle
            title={data.rewritten_title_snippet}
            addedKeywords={addedKeywords}
          />
        </div>

        <p className="text-ds-caption text-n-500 mt-3">
          Highlighted terms are newly added keywords
        </p>
      </div>

      {/* Added keywords chips */}
      <div className="mt-5">
        <div className="text-ds-caption font-medium text-n-500 uppercase tracking-wide mb-3">
          Keywords added to title
        </div>
        <div className="flex flex-wrap gap-2">
          {addedKeywords.map((kw) => (
            <span
              key={kw}
              className="inline-flex items-center gap-1.5 text-ds-caption font-medium text-brand bg-brand-light border border-brand/20 px-3 py-1.5 rounded-full capitalize"
            >
              <span className="text-brand font-bold">+</span>
              {kw}
            </span>
          ))}
        </div>
      </div>

      {/* All changes */}
      <div className="mt-5 bg-n-50 border border-n-border rounded-[14px] p-4">
        <div className="text-ds-caption font-medium text-n-500 uppercase tracking-wide mb-3">
          All keywords incorporated
        </div>
        <div className="flex flex-wrap gap-1.5">
          {allAdded.map((kw) => (
            <span
              key={kw}
              className="text-ds-caption font-medium text-n-600 bg-white border border-n-border px-2 py-1 rounded-md capitalize"
            >
              {kw}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

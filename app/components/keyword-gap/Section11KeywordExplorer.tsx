// ============================================================================
// Section 11 — Raw Keyword Coverage Explorer (expandable accordion)
// Source: seller_keywords, competitor_keywords
// ============================================================================

"use client";

import { useState } from "react";

import { KeywordGapData, MissingKeyword } from "./api";
import { Card  , CopyButton, coverageBarColor, GapTypeBadge, placementLabel, ProgressBar, SectionLabel } from "./Primitives";


export default function KeywordExplorerSection({
  data,
}: {
  data: KeywordGapData;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const missingSet = new Set([
    ...data.missing_critical.map((k) => k.keyword),
    ...data.missing_secondary.map((k) => k.keyword),
  ]);

  const filter = (list: string[]) =>
    query
      ? list.filter((k) => k.toLowerCase().includes(query.toLowerCase()))
      : list;

  const sellerFiltered = filter(data.seller_keywords);
  const compFiltered = filter(data.competitor_keywords);

  return (
    <Card className="overflow-hidden">
      {/* Accordion toggle */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-n-50 transition-colors duration-150"
      >
        <div>
          <SectionLabel>Raw data · useful during demos</SectionLabel>
          <h2 className="text-ds-h2 font-display text-n-800">
            Keyword explorer
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex gap-2 text-ds-caption text-n-400">
            <span className="bg-brand-light text-brand px-2 py-0.5 rounded-full font-medium">
              {data.seller_keywords.length} yours
            </span>
            <span className="bg-n-100 text-n-600 px-2 py-0.5 rounded-full font-medium">
              {data.competitor_keywords.length} competitor
            </span>
          </div>
          <span className="text-n-400 text-ds-h2 font-light w-6 text-center">
            {open ? "−" : "+"}
          </span>
        </div>
      </button>

      {open && (
        <div className="px-6 pb-6 border-t border-n-100">
          {/* Search */}
          <div className="mt-4 mb-5">
            <input
              type="text"
              placeholder="Search keywords…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full md:w-80 bg-n-50 border border-n-border rounded-[12px] px-4 py-2.5 text-ds-body text-n-800 placeholder:text-n-400 focus:outline-none focus:border-brand transition-colors"
            />
            {query && (
              <span className="text-ds-caption text-n-400 mt-2 block">
                {sellerFiltered.length + compFiltered.length} results for "
                {query}"
              </span>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seller keywords */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-ds-caption font-bold uppercase tracking-wider text-n-600">
                  Your keywords
                </div>
                <span className="text-ds-caption text-n-400">
                  {sellerFiltered.length} terms
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-60 overflow-y-auto pr-1">
                {sellerFiltered.map((k) => (
                  <span
                    key={k}
                    className="text-ds-caption bg-brand-light text-brand border border-brand/20 px-2.5 py-1 rounded-full"
                  >
                    {k}
                  </span>
                ))}
              </div>
            </div>

            {/* Competitor keywords */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <div className="text-ds-caption font-bold uppercase tracking-wider text-n-600">
                  Competitor keywords
                </div>
                <span className="text-ds-caption text-n-400">
                  {compFiltered.length} terms
                </span>
              </div>
              <div className="flex flex-wrap gap-1.5 max-h-60 overflow-y-auto pr-1">
                {compFiltered.map((k) => {
                  const isGap = missingSet.has(k);
                  return (
                    <span
                      key={k}
                      className={`text-ds-caption px-2.5 py-1 rounded-full border ${
                        isGap
                          ? "bg-error-light text-error border-error/20"
                          : "bg-n-100 text-n-700 border-n-border"
                      }`}
                      title={isGap ? "You're missing this keyword" : undefined}
                    >
                      {k}
                    </span>
                  );
                })}
              </div>
              <p className="text-ds-caption text-n-400 mt-3">
                <span className="bg-error-light text-error border border-error/20 px-1.5 py-0.5 rounded mr-1 text-[10px]">
                  red
                </span>
                = keywords you're missing
              </p>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
}

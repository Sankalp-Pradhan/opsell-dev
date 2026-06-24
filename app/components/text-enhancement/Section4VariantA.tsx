"use client"

import { useState } from "react";
import { VariantA } from "@/app/(text-enhancement)/lib/types";
import { ChevronDown } from "lucide-react";

interface Props {
  variantA: VariantA;
}

function ScorePill({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-ds-caption text-n-500">{label}</span>
      <span className="bg-n-100 text-n-700 text-ds-caption font-semibold px-2.5 py-0.5 rounded-full">
        {value}
      </span>
    </div>
  );
}

export default function Section4VariantA({ variantA }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-white border border-n-border rounded-2xl shadow-sm p-6 space-y-4">
      {/* Header row — always visible */}
      <div className="flex items-start justify-between flex-wrap gap-4">
        <div>
          <p className="text-ds-caption text-n-400 uppercase tracking-wide">
            Keyword-First
          </p>
          <h2 className="text-ds-h3 font-display text-n-900 mt-0.5">
            Variant A
          </h2>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <ScorePill label="Keyword Density" value={variantA.scores.keyword_density} />
          <ScorePill label="Intent Alignment" value={variantA.scores.intent_alignment} />
          <ScorePill label="Conversion Signals" value={variantA.scores.conversion_signals} />
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="flex items-center gap-1.5 text-md px-2 rounded-md text-white bg-n-900  hover:text-n-50 transition-colors ml-1"
            aria-expanded={isOpen}
          >
            <span>{isOpen ? "Collapse" : "Expand"}</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Expandable content */}
      {isOpen && (
        <div className="space-y-6 pt-2">
          <div className="space-y-1">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Optimized Title
            </p>
            <p className="text-ds-body text-n-900 bg-n-50 rounded-xl px-4 py-3 border border-n-border">
              {variantA.title}
            </p>
            <p className="text-ds-caption text-n-400 text-right">
              {variantA.char_count} chars
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Optimized Bullets
            </p>
            <ul className="space-y-2">
              {variantA.bullets.map((bullet: string, i: number) => (
                <li
                  key={i}
                  className="flex gap-3 bg-n-50 rounded-xl px-4 py-3 border border-n-border"
                >
                  <span className="text-ds-caption text-n-400 font-mono mt-0.5 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ds-body text-n-700">{bullet}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-1">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Optimized Description
            </p>
            <div
              className="text-ds-body text-n-700 bg-n-50 rounded-xl px-4 py-3 border border-n-border leading-relaxed"
              dangerouslySetInnerHTML={{ __html: variantA.description }}
            />
          </div>

          <div className="space-y-2">
            <p className="text-ds-caption text-n-400 uppercase tracking-wide font-medium">
              Keywords Added
            </p>
            <div className="flex flex-wrap gap-2">
              {variantA.keywords_added.map((kw: string) => (
                <span
                  key={kw}
                  className="bg-blue-50 text-blue-700 border border-blue-200 text-ds-caption font-medium px-3 py-1 rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}